// Cloudflare Worker for the contact and project forms. It only handles
// POST /api/contact; every other path is served as a static asset (see
// run_worker_first in wrangler.jsonc).
//
// Secrets and variables (set in the Cloudflare dashboard, never in the repo):
//   RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL

// The site itself, so a custom domain added later works too (same-origin check
// below), plus localhost for `wrangler dev`.
const ALLOWED_ORIGINS = ["https://agne-studio.philipv-agne.workers.dev"];
const LOCAL_ORIGIN = /^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/;

const MAX_BODY_BYTES = 32 * 1024;
const RESEND_TIMEOUT_MS = 10000;

const MAX_NAME_LENGTH = 120;
const MAX_EMAIL_LENGTH = 200;
const MAX_MESSAGE_LENGTH = 5000;
const MAX_BUSINESS_LENGTH = 160;
const MAX_WEBSITE_LENGTH = 300;
const MAX_PROJECT_DETAILS_LENGTH = 7000;

const PROJECT_TYPE_LABELS = {
  "landing-page": "Landing page",
  "business-website": "Business website",
  "website-redesign": "Website redesign",
  "something-else": "Something else",
};

const TIMELINE_LABELS = {
  "as-soon-as-possible": "As soon as possible",
  "within-2-4-weeks": "Within 2-4 weeks",
  "within-1-2-months": "Within 1-2 months",
  "within-3-4-months": "Within 3-4 months",
  "flexible-not-sure-yet": "Flexible / not sure yet",
};

function json(status, body, headers = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
      ...headers,
    },
  });
}

function cleanString(value) {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function normalizeWebsite(value) {
  const trimmedValue = cleanString(value);

  if (!trimmedValue) {
    return "";
  }

  const candidate = /^https?:\/\//i.test(trimmedValue)
    ? trimmedValue
    : `https://${trimmedValue}`;

  try {
    const parsedUrl = new URL(candidate);

    if (!/^https?:$/i.test(parsedUrl.protocol) || !parsedUrl.hostname.includes(".")) {
      return null;
    }

    return parsedUrl.toString();
  } catch {
    return null;
  }
}

function getOptionalValue(value) {
  return value || "Not provided";
}

function isAllowedOrigin(request) {
  const origin = request.headers.get("Origin");

  if (!origin) {
    return false;
  }

  return (
    origin === new URL(request.url).origin ||
    ALLOWED_ORIGINS.includes(origin) ||
    LOCAL_ORIGIN.test(origin)
  );
}

// Reads the body as text, refusing anything larger than MAX_BODY_BYTES
// (checked up front from Content-Length and again while streaming).
async function readLimitedBody(request) {
  const declaredLength = Number(request.headers.get("Content-Length"));

  if (declaredLength > MAX_BODY_BYTES) {
    return null;
  }

  if (!request.body) {
    return "";
  }

  const reader = request.body.getReader();
  const decoder = new TextDecoder();
  let received = 0;
  let text = "";

  for (;;) {
    const { done, value } = await reader.read();

    if (done) {
      break;
    }

    received += value.byteLength;

    if (received > MAX_BODY_BYTES) {
      await reader.cancel();
      return null;
    }

    text += decoder.decode(value, { stream: true });
  }

  return text + decoder.decode();
}

function validateContactPayload(payload) {
  const name = cleanString(payload.name);
  const email = cleanString(payload.email);
  const message = cleanString(payload.message);

  if (!name || name.length > MAX_NAME_LENGTH) {
    return { error: "Please enter a valid name." };
  }

  if (!email || email.length > MAX_EMAIL_LENGTH || !isValidEmail(email)) {
    return { error: "Please enter a valid email address." };
  }

  if (!message || message.length > MAX_MESSAGE_LENGTH) {
    return { error: "Please enter a message within the allowed length." };
  }

  return {
    data: {
      replyTo: email,
      subject: "New Agné Studio contact enquiry",
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Submitted: ${new Date().toISOString()}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    },
  };
}

function validateProjectPayload(payload) {
  const name = cleanString(payload.name);
  const email = cleanString(payload.email);
  const business = cleanString(payload.business);
  const website = cleanString(payload.website);
  const projectType = cleanString(payload.projectType);
  const timeline = cleanString(payload.timeline);
  const details = cleanString(payload.details);

  if (!name || name.length > MAX_NAME_LENGTH) {
    return { error: "Please enter a valid name." };
  }

  if (!email || email.length > MAX_EMAIL_LENGTH || !isValidEmail(email)) {
    return { error: "Please enter a valid email address." };
  }

  if (business.length > MAX_BUSINESS_LENGTH) {
    return { error: "Please enter a shorter business or organisation name." };
  }

  if (website.length > MAX_WEBSITE_LENGTH) {
    return { error: "Please enter a shorter website address." };
  }

  const normalizedWebsite = website ? normalizeWebsite(website) : "";

  if (website && !normalizedWebsite) {
    return { error: "Please enter a valid website address." };
  }

  if (!Object.hasOwn(PROJECT_TYPE_LABELS, projectType)) {
    return { error: "Please select a valid project type." };
  }

  if (!Object.hasOwn(TIMELINE_LABELS, timeline)) {
    return { error: "Please select a valid desired timeline." };
  }

  if (!details || details.length > MAX_PROJECT_DETAILS_LENGTH) {
    return { error: "Please enter project details within the allowed length." };
  }

  return {
    data: {
      replyTo: email,
      subject: "New Agné Studio project enquiry",
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Business or organisation: ${getOptionalValue(business)}`,
        `Existing website: ${getOptionalValue(normalizedWebsite)}`,
        `Project type: ${PROJECT_TYPE_LABELS[projectType]}`,
        `Desired timeline: ${TIMELINE_LABELS[timeline]}`,
        `Submitted: ${new Date().toISOString()}`,
        "",
        "Project details:",
        details,
      ].join("\n"),
    },
  };
}

async function handleContact(request, env) {
  if (request.method !== "POST") {
    return json(405, { error: "Method not allowed." }, { Allow: "POST" });
  }

  if (!isAllowedOrigin(request)) {
    return json(403, { error: "Origin not allowed." });
  }

  if (!(request.headers.get("Content-Type") || "").toLowerCase().includes("application/json")) {
    return json(415, { error: "Expected a JSON request body." });
  }

  const bodyText = await readLimitedBody(request);

  if (bodyText === null) {
    return json(413, { error: "Request body is too large." });
  }

  let payload;

  try {
    payload = JSON.parse(bodyText);
  } catch {
    return json(400, { error: "Invalid request body." });
  }

  if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
    return json(400, { error: "Invalid request body." });
  }

  // Honeypot: real visitors never see this field. Pretend it worked so bots
  // learn nothing, and send nothing.
  if (cleanString(payload.company)) {
    return json(200, { ok: true });
  }

  const apiKey = env.RESEND_API_KEY;
  const toEmail = env.CONTACT_TO_EMAIL?.trim();
  const fromEmail = env.CONTACT_FROM_EMAIL?.trim();

  if (!apiKey || !toEmail || !fromEmail) {
    console.error("Contact form email delivery is not configured.");

    return json(500, {
      error:
        "Contact form email delivery is not configured yet. Please try again later, or contact me directly by email.",
    });
  }

  const formType = cleanString(payload.formType || "contact");
  const validationResult =
    formType === "contact"
      ? validateContactPayload(payload)
      : formType === "project"
        ? validateProjectPayload(payload)
        : { error: "Invalid form submission." };

  if (validationResult.error) {
    return json(400, { error: validationResult.error });
  }

  let resendResponse;

  try {
    resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "User-Agent": "Agne-Studio-Contact/1.0",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: validationResult.data.replyTo,
        subject: validationResult.data.subject,
        text: validationResult.data.text,
      }),
      signal: AbortSignal.timeout(RESEND_TIMEOUT_MS),
    });
  } catch {
    console.error("Resend request failed before a response was received.");
    return json(502, { error: "Unable to send message." });
  }

  if (!resendResponse.ok) {
    // Log only the status and Resend's error name: never the key, the form
    // contents or the addresses.
    const resendBody = await resendResponse.json().catch(() => null);

    console.error("Resend email failed", {
      status: resendResponse.status,
      name: typeof resendBody?.name === "string" ? resendBody.name : undefined,
    });

    return json(502, {
      error:
        formType === "project"
          ? "Unable to send your enquiry right now. Please try again shortly."
          : "Unable to send message.",
    });
  }

  return json(200, { ok: true });
}

export default {
  async fetch(request, env) {
    const { pathname } = new URL(request.url);

    if (pathname === "/api/contact") {
      return handleContact(request, env);
    }

    return json(404, { error: "Not found." });
  },
};
