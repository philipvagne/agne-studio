import React from "react";
import heroComposition from "../assets/hero/hero-composition.png";
import content from "./content/index.js";
import { contactEmail, launchOfferActive } from "./config.js";
import { LANGUAGES, pathFor, resolveRoute } from "./routes.js";

const SITE_NAME = "Agné Studio";
const COPYRIGHT_TEXT = "© 2026";

// Work card images are looked up by the file name given in the content files.
const workImages = Object.fromEntries(
  Object.entries(
    import.meta.glob("../assets/work/*.{jpg,jpeg,png,webp}", {
      eager: true,
      import: "default",
    }),
  ).map(([path, url]) => [path.split("/").pop(), url]),
);

const projectTypeValues = [
  "landing-page",
  "business-website",
  "website-redesign",
  "something-else",
];

const timelineValues = [
  "as-soon-as-possible",
  "within-2-4-weeks",
  "within-1-2-months",
  "within-3-4-months",
  "flexible-not-sure-yet",
];

const pricingModalKeys = ["landing-page", "business-website", null];

const LanguageContext = React.createContext(null);

function useLanguage() {
  return React.useContext(LanguageContext);
}

function fillTokens(text, tokens) {
  return text.replace(/\{(\w+)\}/g, (match, key) => tokens[key] ?? match);
}

// Prices in running text come from pricing.examples, so they are written once.
// The first two examples are the landing page and the business website.
function buildPriceTokens(t) {
  const [landing, business] = t.pricing.examples;
  const tokens = {
    landingAmount: landing.amount,
    businessAmount: business.amount,
    landingLaunch: landing.launchAmount,
    businessLaunch: business.launchAmount,
  };

  tokens.launchSentence = launchOfferActive
    ? ` ${fillTokens(t.faq.costLaunchSentence, tokens)}`
    : "";

  return tokens;
}

const LINK_PATTERN = /\[([^\]]+)\]\(page:([a-z-]+)\)/g;

function RichText({ text: rawText, linkClassName }) {
  const { lang, t } = useLanguage();
  const text = fillTokens(rawText, buildPriceTokens(t));
  const parts = [];
  let lastIndex = 0;

  for (const match of text.matchAll(LINK_PATTERN)) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    parts.push(
      <a key={match.index} className={linkClassName} href={pathFor(match[2], lang)}>
        {match[1]}
      </a>,
    );
    lastIndex = match.index + match[0].length;
  }

  parts.push(text.slice(lastIndex));
  return <>{parts}</>;
}

function SiteNav({ page }) {
  const { lang, t } = useLanguage();
  const homePath = pathFor("home", lang);
  const startsAtGallery = t.nav.startTarget === "gallery";
  const navItems = [
    {
      label: t.nav.start,
      href: startsAtGallery ? `${homePath}#work` : homePath,
      current: !startsAtGallery && page === "home",
    },
    { label: t.nav.pricing, href: pathFor("pricing", lang) },
    { label: t.nav.faq, href: pathFor("faq", lang) },
    { label: t.nav.contact, href: pathFor("contact", lang) },
  ];

  return (
    <header className="site-header">
      <nav className="site-nav" aria-label={t.nav.ariaLabel}>
        <a className="site-brand" href={pathFor("home", lang)}>
          {SITE_NAME}
        </a>
        <div className="site-nav__actions">
          <ul className="site-nav__list">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  className="site-nav__link"
                  href={item.href}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a className="cta-pill cta-pill--nav" href={pathFor("project", lang)}>
            <span>{t.nav.startProject}</span>
            <span aria-hidden="true">&rarr;</span>
          </a>
          <div className="language-toggle" role="group" aria-label={t.nav.languageLabel}>
            {Object.entries(LANGUAGES).map(([code, language]) => (
              <a
                key={code}
                className="language-toggle__link"
                href={pathFor(page, code)}
                lang={code}
                hrefLang={code}
                aria-label={language.name}
                aria-current={code === lang ? "true" : undefined}
              >
                {language.short}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}

function FinalCta({ title, copy, buttonLabel, buttonHref }) {
  const { lang, t } = useLanguage();

  return (
    <section className="final-cta" aria-labelledby="final-cta-title">
      <h2 id="final-cta-title" className="final-cta__title">
        {title ?? t.finalCta.title}
      </h2>
      <p className="final-cta__copy">{copy ?? t.finalCta.copy}</p>
      <a
        className="cta-pill cta-pill--final"
        href={buttonHref ?? pathFor("project", lang)}
      >
        <span>{buttonLabel ?? t.finalCta.button}</span>
        <span aria-hidden="true">&rarr;</span>
      </a>
    </section>
  );
}

function SignatureFooter() {
  const { t } = useLanguage();

  return (
    <footer className="signature-footer" aria-label={t.footer.ariaLabel}>
      <div className="signature-footer__divider" aria-hidden="true" />
      <div className="signature-footer__content">
        <p className="signature-footer__brand">{SITE_NAME}</p>
        <p className="signature-footer__credit">{t.footer.credit}</p>
        <p className="signature-footer__copyright">{COPYRIGHT_TEXT}</p>
      </div>
    </footer>
  );
}

function ContactForm() {
  const { t } = useLanguage();
  const defaultValues = {
    name: "",
    email: "",
    message: "",
    company: "",
  };
  const [values, setValues] = React.useState(defaultValues);
  const [errors, setErrors] = React.useState({});
  const [submitState, setSubmitState] = React.useState("idle");
  const successHeadingRef = React.useRef(null);
  const errorMessageRef = React.useRef(null);

  const validate = React.useCallback(
    (nextValues) => {
      const nextErrors = {};

      if (!nextValues.name.trim()) {
        nextErrors.name = t.form.errors.name;
      }

      if (!nextValues.email.trim()) {
        nextErrors.email = t.form.errors.email;
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(nextValues.email)) {
        nextErrors.email = t.form.errors.emailInvalid;
      }

      if (!nextValues.message.trim()) {
        nextErrors.message = t.contact.form.errors.message;
      }

      return nextErrors;
    },
    [t],
  );

  React.useEffect(() => {
    if (submitState === "success") {
      successHeadingRef.current?.focus();
    }

    if (submitState === "error") {
      errorMessageRef.current?.focus();
    }
  }, [submitState]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((currentValues) => ({
      ...currentValues,
      [name]: value,
    }));

    setErrors((currentErrors) => {
      if (!currentErrors[name]) {
        return currentErrors;
      }

      const nextErrors = { ...currentErrors };
      delete nextErrors[name];
      return nextErrors;
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (submitState === "submitting") {
      return;
    }

    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSubmitState("idle");
      return;
    }

    setSubmitState("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formType: "contact",
          ...values,
        }),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setSubmitState("success");
      setValues(defaultValues);
      setErrors({});
    } catch {
      setSubmitState("error");
    }
  };

  if (submitState === "success") {
    const { success } = t.contact.form;

    return (
      <div className="contact-success" aria-live="polite">
        <h2 ref={successHeadingRef} className="contact-success__title" tabIndex="-1">
          {success.title}
        </h2>
        <p>{success.thanks}</p>
        <p>{success.received}</p>
        <button
          className="contact-success__reset"
          type="button"
          onClick={() => {
            setValues(defaultValues);
            setErrors({});
            setSubmitState("idle");
          }}
        >
          {success.reset}
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" noValidate onSubmit={handleSubmit}>
      <div className="contact-form__field contact-form__field--honeypot" aria-hidden="true">
        <label htmlFor="contact-company">{t.form.honeypotLabel}</label>
        <input
          id="contact-company"
          name="company"
          type="text"
          autoComplete="off"
          tabIndex="-1"
          value={values.company}
          onChange={handleChange}
        />
      </div>

      <div className="contact-form__field">
        <label htmlFor="contact-name">{t.form.nameLabel}</label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          value={values.name}
          onChange={handleChange}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "contact-name-error" : undefined}
          required
        />
        {errors.name ? (
          <p id="contact-name-error" className="contact-form__error">
            {errors.name}
          </p>
        ) : null}
      </div>

      <div className="contact-form__field">
        <label htmlFor="contact-email">{t.form.emailLabel}</label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={handleChange}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "contact-email-error" : undefined}
          required
        />
        {errors.email ? (
          <p id="contact-email-error" className="contact-form__error">
            {errors.email}
          </p>
        ) : null}
      </div>

      <div className="contact-form__field">
        <label htmlFor="contact-message">{t.contact.form.messageLabel}</label>
        <textarea
          id="contact-message"
          name="message"
          autoComplete="off"
          value={values.message}
          onChange={handleChange}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
          required
        />
        {errors.message ? (
          <p id="contact-message-error" className="contact-form__error">
            {errors.message}
          </p>
        ) : null}
      </div>

      {submitState === "error" ? (
        <p
          ref={errorMessageRef}
          className="contact-form__submit-error"
          aria-live="assertive"
          tabIndex="-1"
        >
          {t.contact.form.errors.submit}
        </p>
      ) : null}

      <div className="contact-form__actions">
        <button
          className="cta-pill contact-form__submit"
          type="submit"
          disabled={submitState === "submitting"}
        >
          <span>
            {submitState === "submitting" ? t.form.sending : t.contact.form.submit}
          </span>
        </button>
        <p className="contact-form__privacy">{t.contact.form.privacy}</p>
      </div>
    </form>
  );
}

function EmailLine() {
  const { t } = useLanguage();
  const href = `mailto:${contactEmail}?subject=${encodeURIComponent(t.form.emailSubject)}`;
  const [before, after] = t.form.emailLine.split("{email}");

  return (
    <p className="contact-form__privacy contact-form__email-line">
      {before}
      <a className="inline-link" href={href}>
        {contactEmail}
      </a>
      {after}
    </p>
  );
}

function RequiredMark() {
  const { t } = useLanguage();

  return (
    <>
      <span className="contact-form__required-indicator" aria-hidden="true">
        {" "}*
      </span>
      <span className="sr-only"> {t.form.required}</span>
    </>
  );
}

function ProjectEnquiryForm() {
  const { t } = useLanguage();
  const form = t.project.form;
  const defaultValues = {
    name: "",
    email: "",
    business: "",
    website: "",
    projectType: "",
    timeline: "",
    details: "",
    company: "",
  };
  const [values, setValues] = React.useState(defaultValues);
  const [errors, setErrors] = React.useState({});
  const [submitState, setSubmitState] = React.useState("idle");
  const successHeadingRef = React.useRef(null);
  const errorMessageRef = React.useRef(null);

  const projectTypeOptions = [
    { value: "", label: form.projectTypes.placeholder },
    ...projectTypeValues.map((value) => ({
      value,
      label: form.projectTypes.options[value],
    })),
  ];

  const timelineOptions = [
    { value: "", label: form.timelines.placeholder },
    ...timelineValues.map((value) => ({
      value,
      label: form.timelines.options[value],
    })),
  ];

  const isValidWebsite = React.useCallback((value) => {
    const trimmedValue = value.trim();

    if (!trimmedValue) {
      return true;
    }

    const candidate = /^https?:\/\//i.test(trimmedValue)
      ? trimmedValue
      : `https://${trimmedValue}`;

    try {
      const parsedUrl = new URL(candidate);
      return /^https?:$/i.test(parsedUrl.protocol) && parsedUrl.hostname.includes(".");
    } catch {
      return false;
    }
  }, []);

  const validate = React.useCallback(
    (nextValues) => {
      const nextErrors = {};

      if (!nextValues.name.trim()) {
        nextErrors.name = t.form.errors.name;
      }

      if (!nextValues.email.trim()) {
        nextErrors.email = t.form.errors.email;
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(nextValues.email)) {
        nextErrors.email = t.form.errors.emailInvalid;
      }

      if (nextValues.website.trim() && !isValidWebsite(nextValues.website)) {
        nextErrors.website = t.project.form.errors.website;
      }

      if (!nextValues.projectType) {
        nextErrors.projectType = t.project.form.errors.projectType;
      }

      if (!nextValues.timeline) {
        nextErrors.timeline = t.project.form.errors.timeline;
      }

      if (!nextValues.details.trim()) {
        nextErrors.details = t.project.form.errors.details;
      }

      return nextErrors;
    },
    [isValidWebsite, t],
  );

  React.useEffect(() => {
    if (submitState === "success") {
      successHeadingRef.current?.focus();
    }

    if (submitState === "error") {
      errorMessageRef.current?.focus();
    }
  }, [submitState]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((currentValues) => ({
      ...currentValues,
      [name]: value,
    }));

    setErrors((currentErrors) => {
      if (!currentErrors[name]) {
        return currentErrors;
      }

      const nextErrors = { ...currentErrors };
      delete nextErrors[name];
      return nextErrors;
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (submitState === "submitting") {
      return;
    }

    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSubmitState("idle");
      return;
    }

    setSubmitState("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formType: "project",
          ...values,
        }),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setSubmitState("success");
      setValues(defaultValues);
      setErrors({});
    } catch {
      setSubmitState("error");
    }
  };

  if (submitState === "success") {
    const { success } = form;

    return (
      <div className="contact-success" aria-live="polite">
        <h2 ref={successHeadingRef} className="contact-success__title" tabIndex="-1">
          {success.title}
        </h2>
        <p>{success.thanks}</p>
        <p>{success.received}</p>
        <button
          className="contact-success__reset"
          type="button"
          onClick={() => {
            setValues(defaultValues);
            setErrors({});
            setSubmitState("idle");
          }}
        >
          {success.reset}
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" noValidate onSubmit={handleSubmit}>
      <div className="contact-form__field contact-form__field--honeypot" aria-hidden="true">
        <label htmlFor="project-company">{t.form.honeypotLabel}</label>
        <input
          id="project-company"
          name="company"
          type="text"
          autoComplete="off"
          tabIndex="-1"
          value={values.company}
          onChange={handleChange}
        />
      </div>

      <p className="contact-form__required-note">
        <span aria-hidden="true">*</span> {t.form.requiredNote}
      </p>

      <div className="contact-form__row contact-form__row--two-up">
        <div className="contact-form__field">
          <label htmlFor="project-name">
            {t.form.nameLabel}
            <RequiredMark />
          </label>
          <input
            id="project-name"
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={handleChange}
            aria-required="true"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "project-name-error" : undefined}
            required
          />
          {errors.name ? (
            <p id="project-name-error" className="contact-form__error">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div className="contact-form__field">
          <label htmlFor="project-email">
            {t.form.emailLabel}
            <RequiredMark />
          </label>
          <input
            id="project-email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={handleChange}
            aria-required="true"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "project-email-error" : undefined}
            required
          />
          {errors.email ? (
            <p id="project-email-error" className="contact-form__error">
              {errors.email}
            </p>
          ) : null}
        </div>
      </div>

      <div className="contact-form__row contact-form__row--two-up">
        <div className="contact-form__field">
          <label htmlFor="project-business">
            {form.businessLabel}
            <span className="sr-only"> {t.form.optional}</span>
          </label>
          <input
            id="project-business"
            name="business"
            type="text"
            autoComplete="organization"
            value={values.business}
            onChange={handleChange}
          />
        </div>

        <div className="contact-form__field">
          <label htmlFor="project-existing-website">
            {form.websiteLabel}
            <span className="sr-only"> {t.form.optional}</span>
          </label>
          <input
            id="project-existing-website"
            name="website"
            type="url"
            autoComplete="url"
            inputMode="url"
            value={values.website}
            onChange={handleChange}
            aria-invalid={Boolean(errors.website)}
            aria-describedby={errors.website ? "project-existing-website-error" : undefined}
          />
          {errors.website ? (
            <p id="project-existing-website-error" className="contact-form__error">
              {errors.website}
            </p>
          ) : null}
        </div>
      </div>

      <div className="contact-form__row contact-form__row--two-up">
        <div className="contact-form__field">
          <label htmlFor="project-type">
            {form.projectTypeLabel}
            <RequiredMark />
          </label>
          <select
            id="project-type"
            name="projectType"
            value={values.projectType}
            onChange={handleChange}
            className={!values.projectType ? "contact-form__select--placeholder" : undefined}
            aria-required="true"
            aria-invalid={Boolean(errors.projectType)}
            aria-describedby={errors.projectType ? "project-type-error" : undefined}
            required
          >
            {projectTypeOptions.map((option) => (
              <option
                key={option.value || "project-type-placeholder"}
                value={option.value}
                disabled={option.value === ""}
              >
                {option.label}
              </option>
            ))}
          </select>
          {errors.projectType ? (
            <p id="project-type-error" className="contact-form__error">
              {errors.projectType}
            </p>
          ) : null}
        </div>

        <div className="contact-form__field">
          <label htmlFor="project-timeline">
            {form.timelineLabel}
            <RequiredMark />
          </label>
          <select
            id="project-timeline"
            name="timeline"
            value={values.timeline}
            onChange={handleChange}
            className={!values.timeline ? "contact-form__select--placeholder" : undefined}
            aria-required="true"
            aria-invalid={Boolean(errors.timeline)}
            aria-describedby={errors.timeline ? "project-timeline-error" : undefined}
            required
          >
            {timelineOptions.map((option) => (
              <option
                key={option.value || "timeline-placeholder"}
                value={option.value}
                disabled={option.value === ""}
              >
                {option.label}
              </option>
            ))}
          </select>
          {errors.timeline ? (
            <p id="project-timeline-error" className="contact-form__error">
              {errors.timeline}
            </p>
          ) : null}
        </div>
      </div>

      <div className="contact-form__field">
        <label htmlFor="project-details">
          {form.detailsLabel}
          <RequiredMark />
        </label>
        <p className="contact-form__field-support contact-form__field-support--project">
          {form.detailsSupport}
        </p>
        <textarea
          id="project-details"
          name="details"
          className="contact-form__textarea--project"
          autoComplete="off"
          value={values.details}
          onChange={handleChange}
          aria-required="true"
          aria-invalid={Boolean(errors.details)}
          aria-describedby={errors.details ? "project-details-error" : undefined}
          required
        />
        {errors.details ? (
          <p id="project-details-error" className="contact-form__error">
            {errors.details}
          </p>
        ) : null}
      </div>

      {submitState === "error" ? (
        <p
          ref={errorMessageRef}
          className="contact-form__submit-error"
          aria-live="assertive"
          tabIndex="-1"
        >
          {form.errors.submit}
        </p>
      ) : null}

      <div className="contact-form__actions">
        <button
          className="cta-pill contact-form__submit"
          type="submit"
          disabled={submitState === "submitting"}
        >
          <span>{submitState === "submitting" ? t.form.sending : form.submit}</span>
        </button>
        <p className="contact-form__privacy">{form.privacy}</p>
      </div>
    </form>
  );
}

function HomePage() {
  const { t } = useLanguage();
  const home = t.home;

  return (
    <>
      <section className="hero" aria-labelledby="hero-heading">
        <div className="hero__copy">
          <h1 id="hero-heading">{home.heroTitle}</h1>
          <p>{home.heroText}</p>
        </div>
        <div className="hero__visual">
          <img src={heroComposition} alt="" />
        </div>
      </section>

      <section className="work-gallery" id="work" aria-label={home.workLabel}>
        {home.workItems.map((item) => (
          <figure className="work-gallery__item" key={item.url}>
            <a
              className="work-gallery__link"
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="work-gallery__frame">
                <img src={workImages[item.image]} alt={item.alt} />
              </div>
              <figcaption className="work-gallery__meta">
                <div className="work-gallery__meta-row">
                  <span className="work-gallery__name">
                    {item.name}
                    <span className="sr-only"> {home.workNewTab}</span>
                  </span>
                  <span className="work-gallery__arrow" aria-hidden="true">
                    &rarr;
                  </span>
                </div>
                <p className="work-gallery__category">{item.category}</p>
              </figcaption>
            </a>
          </figure>
        ))}
      </section>

      <section className="editorial-section" aria-labelledby="who-i-work-with-title">
        <div className="editorial-section__column editorial-section__column--left">
          <h2 id="who-i-work-with-title" className="section-label">
            {home.audiencesTitle}
          </h2>
          <div className="audience-list">
            {home.audiences.map((audience) => (
              <article className="audience-list__item" key={audience.title}>
                <h3>{audience.title}</h3>
                <p>{audience.description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="editorial-section__divider" aria-hidden="true" />

        <div className="editorial-section__column editorial-section__column--right">
          <h2 className="section-label">{home.whyTitle}</h2>
          <div className="editorial-section__content">
            <p className="editorial-section__statement">{home.whyStatement}</p>
            <div className="editorial-section__body">
              {home.whyBody.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FinalCta />
      <SignatureFooter />
    </>
  );
}

function FaqAccordion({ items, initiallyOpenIndex = 0 }) {
  const [openIndex, setOpenIndex] = React.useState(initiallyOpenIndex);

  return (
    <div className="pricing-faq">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const buttonId = `pricing-faq-button-${index}`;
        const panelId = `pricing-faq-panel-${index}`;

        return (
          <div className="pricing-faq__item" key={item.question}>
            <h3 className="pricing-faq__heading">
              <button
                id={buttonId}
                className="pricing-faq__button"
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
              >
                <span>{item.question}</span>
                <span className="pricing-faq__symbol" aria-hidden="true">
                  {isOpen ? "−" : "+"}
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              className="pricing-faq__panel"
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
            >
              <div className="pricing-faq__answer">
                <RichText text={item.answer} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function PricingDetailModal({ modal, modalKey, onClose, returnFocusRef }) {
  const { t } = useLanguage();
  const closeButtonRef = React.useRef(null);
  const dialogRef = React.useRef(null);

  React.useEffect(() => {
    if (!modal) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const focusableElements = dialogRef.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );

      if (!focusableElements || focusableElements.length === 0) {
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      returnFocusRef.current?.focus();
    };
  }, [modal, onClose, returnFocusRef]);

  if (!modal) {
    return null;
  }

  const headingId = `pricing-modal-title-${modalKey}`;
  const descriptionId = `${headingId}-description`;
  const hasSecondarySection = Boolean(
    modal.secondaryHeading && modal.secondaryItems?.length,
  );

  return (
    <div
      className="pricing-modal"
      role="presentation"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        ref={dialogRef}
        className="pricing-modal__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby={headingId}
        aria-describedby={descriptionId}
      >
        <div className="pricing-modal__header">
          <div>
            <h2 id={headingId} className="pricing-modal__title">
              {modal.title}
            </h2>
            <p id={descriptionId} className="pricing-modal__intro">
              {modal.introduction}
            </p>
          </div>
          <button
            ref={closeButtonRef}
            className="pricing-modal__close"
            type="button"
            onClick={onClose}
          >
            {t.pricing.modalClose}
          </button>
        </div>

        <div
          className={`pricing-modal__content ${
            hasSecondarySection ? "pricing-modal__content--split" : ""
          }`.trim()}
        >
          <section className="pricing-modal__section" aria-label={modal.primaryHeading}>
            <h3>{modal.primaryHeading}</h3>
            <ul className="pricing-modal__list">
              {modal.primaryItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          {modal.secondaryHeading && modal.secondaryItems ? (
            <section
              className="pricing-modal__section"
              aria-label={modal.secondaryHeading}
            >
              <h3>{modal.secondaryHeading}</h3>
              <ul className="pricing-modal__list">
                {modal.secondaryItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ) : null}

          <p className="pricing-modal__note">{modal.note}</p>
        </div>
      </div>
    </div>
  );
}

function PricingPage() {
  const { t } = useLanguage();
  const pricing = t.pricing;
  const [activeModalKey, setActiveModalKey] = React.useState(null);
  const returnFocusRef = React.useRef(null);
  const activeModal = activeModalKey ? pricing.modals[activeModalKey] : null;

  const openModal = React.useCallback((modalKey, triggerElement) => {
    returnFocusRef.current = triggerElement;
    setActiveModalKey(modalKey);
  }, []);

  const closeModal = React.useCallback(() => {
    setActiveModalKey(null);
  }, []);

  return (
    <>
      <section className="pricing-page">
        <section className="pricing-hero" aria-labelledby="pricing-heading">
          <div className="pricing-hero__main">
            <h1 id="pricing-heading">{pricing.title}</h1>
            <p>{pricing.intro}</p>
          </div>
        </section>

        <section
          className="pricing-section pricing-principles"
          aria-labelledby="pricing-principles-title"
        >
          <div className="pricing-section__header">
            <h2 id="pricing-principles-title">{pricing.principlesTitle}</h2>
          </div>
          <div className="pricing-principles__grid">
            {pricing.principles.map((item) => (
              <article className="pricing-principles__item" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          className="pricing-section pricing-typical"
          aria-labelledby="pricing-typical-title"
        >
          <div className="pricing-section__header pricing-section__header--narrow">
            <h2 id="pricing-typical-title">{pricing.servicesTitle}</h2>
            <p>{pricing.servicesIntro}</p>
          </div>
          <div className="pricing-list" role="list" aria-label={pricing.servicesLabel}>
            {pricing.examples.map((item, index) => {
              const modalKey = pricingModalKeys[index];
              const priceText =
                item.price ?? fillTokens(pricing.fromTemplate, { amount: item.amount });
              const launchText =
                launchOfferActive && item.launchAmount
                  ? fillTokens(pricing.launchLine, { amount: item.launchAmount })
                  : null;

              return (
                <div className="pricing-list__row" key={item.name} role="listitem">
                  <div className="pricing-list__item">
                    <span className="pricing-list__label">{item.name}</span>
                    {modalKey ? (
                      <button
                        className="pricing-list__action"
                        type="button"
                        onClick={(event) => openModal(modalKey, event.currentTarget)}
                      >
                        {pricing.viewIncluded}
                      </button>
                    ) : null}
                  </div>
                  <div className="pricing-list__price">
                    <span className="pricing-list__value">{priceText}</span>
                    {launchText ? (
                      <span className="pricing-list__launch">{launchText}</span>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="pricing-list__notes">
            {launchOfferActive ? (
              <p className="pricing-list__note">{pricing.launchNote}</p>
            ) : null}
            <p className="pricing-list__note">{pricing.priceNote}</p>
          </div>
          <button
            className="pricing-list__additions"
            type="button"
            onClick={(event) => openModal("optional-add-ons", event.currentTarget)}
          >
            {pricing.viewAddOns}
          </button>
        </section>

        <div className="pricing-lower-layout">
          <section
            className="pricing-section pricing-includes"
            aria-labelledby="pricing-includes-title"
          >
            <div className="pricing-section__header pricing-section__header--narrow">
              <h2 id="pricing-includes-title">{pricing.includesTitle}</h2>
              <p>{pricing.includesIntro}</p>
            </div>
            <div className="pricing-includes__grid">
              {pricing.includes.map((item) => (
                <article className="pricing-includes__item" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section
            className="pricing-section pricing-process"
            aria-labelledby="pricing-process-title"
          >
            <div className="pricing-section__header pricing-section__header--narrow">
              <h2 id="pricing-process-title">{pricing.processTitle}</h2>
              <p>{pricing.processIntro}</p>
            </div>
            <div className="pricing-process__grid">
              {pricing.process.map((step, index) => (
                <article className="pricing-process__item" key={step.title}>
                  <p className="pricing-process__number">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <div className="pricing-process__content">
                    <h3 className="pricing-process__title">{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>

        <section
          className="pricing-section pricing-policies"
          aria-labelledby="pricing-policies-title"
        >
          <div className="pricing-section__header pricing-section__header--narrow">
            <h2 id="pricing-policies-title">{pricing.policiesTitle}</h2>
          </div>
          <div className="pricing-policies__grid">
            {pricing.policies.map((item) => (
              <article className="pricing-policies__item" key={item.title}>
                <p className="pricing-policies__eyebrow">{item.title}</p>
                <h3>{item.summary}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          className="pricing-section pricing-faq-section"
          aria-labelledby="pricing-faq-title"
        >
          <div className="pricing-section__header">
            <h2 id="pricing-faq-title">{pricing.faqTitle}</h2>
          </div>
          <FaqAccordion items={pricing.faq} initiallyOpenIndex={-1} />
        </section>
      </section>

      <PricingDetailModal
        modal={activeModal}
        modalKey={activeModalKey}
        onClose={closeModal}
        returnFocusRef={returnFocusRef}
      />

      <FinalCta />
      <SignatureFooter />
    </>
  );
}

function FaqPage() {
  const { lang, t } = useLanguage();
  const faq = t.faq;

  return (
    <>
      <section className="faq-page">
        <section className="faq-hero" aria-labelledby="faq-heading">
          <div className="faq-hero__content">
            <h1 id="faq-heading">{faq.title}</h1>
            <p>{faq.intro}</p>
          </div>
        </section>

        <section className="faq-page__accordion" aria-label={faq.listLabel}>
          <FaqAccordion items={faq.items} initiallyOpenIndex={-1} />
        </section>
      </section>

      <FinalCta
        title={faq.ctaTitle}
        copy={faq.ctaCopy}
        buttonLabel={faq.ctaButton}
        buttonHref={pathFor("contact", lang)}
      />
      <SignatureFooter />
    </>
  );
}

function ContactPage() {
  const { t } = useLanguage();
  const contact = t.contact;

  return (
    <>
      <section className="contact-page">
        <section className="contact-layout" aria-labelledby="contact-heading">
          <div className="contact-layout__info">
            <h1 id="contact-heading">{contact.title}</h1>
            <p className="contact-layout__intro">{contact.intro}</p>

            <div className="contact-details">
              <div className="contact-details__item">
                <p className="contact-details__label">{contact.responseLabel}</p>
                <p>{contact.responseText}</p>
              </div>

              <div className="contact-details__item">
                <p className="contact-details__label">{contact.projectLabel}</p>
                <p>
                  <RichText text={contact.projectText} linkClassName="inline-link" />
                </p>
              </div>
            </div>
          </div>

          <div className="contact-layout__form">
            <ContactForm />
            <EmailLine />
          </div>
        </section>
      </section>

      <SignatureFooter />
    </>
  );
}

function ProjectPage() {
  const { t } = useLanguage();
  const project = t.project;

  return (
    <>
      <section className="contact-page">
        <section className="contact-layout" aria-labelledby="project-heading">
          <div className="contact-layout__info">
            <h1 id="project-heading">{project.title}</h1>
            <p className="contact-layout__intro">{project.intro}</p>

            <div className="contact-details">
              <div className="contact-details__item">
                <p className="contact-details__label">{project.nextLabel}</p>
                <p>{project.nextText}</p>
              </div>

              <div className="contact-details__item">
                <p className="contact-details__label">{project.notReadyLabel}</p>
                <p>
                  <RichText text={project.notReadyText} linkClassName="inline-link" />
                </p>
              </div>
            </div>
          </div>

          <div className="contact-layout__form">
            <ProjectEnquiryForm />
            <EmailLine />
          </div>
        </section>
      </section>

      <SignatureFooter />
    </>
  );
}

const pageComponents = {
  home: HomePage,
  pricing: PricingPage,
  faq: FaqPage,
  contact: ContactPage,
  project: ProjectPage,
};

function App() {
  const { page, lang } = resolveRoute(window.location.pathname);
  const PageComponent = pageComponents[page];
  const languageValue = React.useMemo(
    () => ({ lang, t: content[lang] }),
    [lang],
  );

  return (
    <LanguageContext.Provider value={languageValue}>
      <div className="site-shell">
        <SiteNav page={page} />
        <main
          className={`page-content ${
            page === "home" ? "" : "page-content--pricing"
          }`.trim()}
        >
          <PageComponent />
        </main>
      </div>
    </LanguageContext.Provider>
  );
}

export default App;
