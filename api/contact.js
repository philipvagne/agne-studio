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

function json(response, status, body) {
  response.statusCode = status;
  response.setHeader("Content-Type", "application/json");
  response.end(JSON.stringify(body));
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

function parseRequestBody(body) {
  if (typeof body === "string") {
    try {
      return JSON.parse(body);
    } catch {
      return null;
    }
  }

  if (body && typeof body === "object") {
    return body;
  }

  return null;
}

function validateContactPayload(payload) {
  const name = cleanString(payload?.name);
  const email = cleanString(payload?.email);
  const message = cleanString(payload?.message);

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
      subject: "New Agn\u00e9 Studio contact enquiry",
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
  const name = cleanString(payload?.name);
  const email = cleanString(payload?.email);
  const business = cleanString(payload?.business);
  const website = cleanString(payload?.website);
  const projectType = cleanString(payload?.projectType);
  const timeline = cleanString(payload?.timeline);
  const details = cleanString(payload?.details);

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

  if (!PROJECT_TYPE_LABELS[projectType]) {
    return { error: "Please select a valid project type." };
  }

  if (!TIMELINE_LABELS[timeline]) {
    return { error: "Please select a valid desired timeline." };
  }

  if (!details || details.length > MAX_PROJECT_DETAILS_LENGTH) {
    return { error: "Please enter project details within the allowed length." };
  }

  return {
    data: {
      replyTo: email,
      subject: "New Agn\u00e9 Studio project enquiry",
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

export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return json(response, 405, { error: "Method not allowed." });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL?.trim();
  const fromEmail = process.env.CONTACT_FROM_EMAIL?.trim();

  if (!apiKey || !toEmail || !fromEmail) {
    return json(response, 500, {
      error:
        "Contact form email delivery is not configured yet. Please try again later, or contact me directly by email.",
    });
  }

  const payload = parseRequestBody(request.body);

  if (!payload) {
    return json(response, 400, { error: "Invalid request body." });
  }

  const company = cleanString(payload.company);

  if (company) {
    return json(response, 400, { error: "Spam submission rejected." });
  }

  const formType = cleanString(payload.formType || "contact");
  const validationResult =
    formType === "contact"
      ? validateContactPayload(payload)
      : formType === "project"
        ? validateProjectPayload(payload)
        : { error: "Invalid form submission." };

  if (validationResult.error) {
    return json(response, 400, { error: validationResult.error });
  }

  const resendResponse = await fetch("https://api.resend.com/emails", {
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
  });

  if (!resendResponse.ok) {
    const resendBody = await resendResponse.json().catch(() => null);

    console.error("Resend email failed", {
      status: resendResponse.status,
      body: resendBody,
    });

    return json(response, 502, {
      error:
        formType === "project"
          ? "Unable to send your enquiry right now. Please try again shortly."
          : "Unable to send message.",
    });
  }

  return json(response, 200, { ok: true });
}
