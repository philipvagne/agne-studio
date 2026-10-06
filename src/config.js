// Set to false to hide the launch offer everywhere: the launch price lines and
// the launch note on the pricing page, and the launch sentence in the cost FAQ.
export const launchOfferActive = true;

// Public email address shown as a mailto: link under the contact and project forms.
export const contactEmail = "philipv.agne@gmail.com";

// Where both forms post (FormSubmit's AJAX endpoint, https://formsubmit.co/documentation).
// After the address is confirmed, FormSubmit emails a random alias; it can replace
// the address in this URL so the form code doesn't expose it.
export const formEndpoint = `https://formsubmit.co/ajax/${contactEmail}`;
