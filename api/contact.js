const MAX_NAME_LENGTH = 120;
const MAX_EMAIL_LENGTH = 200;
const MAX_MESSAGE_LENGTH = 5000;

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

  let payload = request.body;

  if (typeof payload === "string") {
    try {
      payload = JSON.parse(payload);
    } catch {
      return json(response, 400, { error: "Invalid request body." });
    }
  }

  const name = cleanString(payload?.name);
  const email = cleanString(payload?.email).trim();
  const message = cleanString(payload?.message);
  const company = cleanString(payload?.company);

  if (company) {
    return json(response, 400, { error: "Spam submission rejected." });
  }

  if (!name || name.length > MAX_NAME_LENGTH) {
    return json(response, 400, { error: "Please enter a valid name." });
  }

  if (!email || email.length > MAX_EMAIL_LENGTH || !isValidEmail(email)) {
    return json(response, 400, { error: "Please enter a valid email address." });
  }

  if (!message || message.length > MAX_MESSAGE_LENGTH) {
    return json(response, 400, {
      error: "Please enter a message within the allowed length.",
    });
  }

  const submittedAt = new Date().toISOString();
  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Submitted: ${submittedAt}`,
    "",
    "Message:",
    message,
  ].join("\n");

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
      reply_to: email,
      subject: "New Agné Studio contact enquiry",
      text,
    }),
  });

  if (!resendResponse.ok) {
    const resendBody = await resendResponse.json().catch(() => null);

    console.error("Resend email failed", {
      status: resendResponse.status,
      body: resendBody,
    });

    return json(response, 502, {
      error: "Unable to send message.",
    });
  }

  return json(response, 200, { ok: true });
}
