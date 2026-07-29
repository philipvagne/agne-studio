import React from "react";
import { Analytics } from "@vercel/analytics/react";
import heroComposition from "../assets/hero/hero-composition.png";
import placeholderOne from "../assets/work/placeholder-1.png";
import placeholderTwo from "../assets/work/placeholder-2.png";
import placeholderThree from "../assets/work/placeholder-3.png";

const SITE_NAME = "Agn\u00e9 Studio";
const COPYRIGHT_TEXT = "\u00a9 2026";
const CREDIT_TEXT = "Designed and developed by Philip Agn\u00e9.";
const START_PROJECT_PATH = "/start-a-project/";

const workItems = [
  {
    src: placeholderOne,
    alt: "Temporary website preview 1",
    name: "Concept Project 01",
    category: "Website Design",
  },
  {
    src: placeholderTwo,
    alt: "Temporary website preview 2",
    name: "Concept Project 02",
    category: "Website Design",
  },
  {
    src: placeholderThree,
    alt: "Temporary website preview 3",
    name: "Concept Project 03",
    category: "Website Design",
  },
];

const homepageNavItems = [
  { label: "Work", href: "/#work" },
  { label: "Pricing", href: "/pricing/" },
  { label: "FAQ", href: "/faq/" },
  { label: "Contact", href: "/contact/" },
];

const projectTypeOptions = [
  { value: "", label: "Select a project type" },
  { value: "landing-page", label: "Landing page" },
  { value: "business-website", label: "Business website" },
  { value: "website-redesign", label: "Website redesign" },
  { value: "something-else", label: "Something else" },
];

const timelineOptions = [
  { value: "", label: "Select a timeline" },
  { value: "as-soon-as-possible", label: "As soon as possible" },
  { value: "within-2-4-weeks", label: "Within 2-4 weeks" },
  { value: "within-1-2-months", label: "Within 1-2 months" },
  { value: "within-3-4-months", label: "Within 3-4 months" },
  { value: "flexible-not-sure-yet", label: "Flexible / not sure yet" },
];

const audiences = [
  {
    title: "New businesses",
    description: "Building a strong first impression from day one.",
  },
  {
    title: "Growing businesses",
    description:
      "A website that keeps up with your growth and reflects where you're headed.",
  },
  {
    title: "Businesses ready for a redesign",
    description:
      "When your online presence no longer reflects the quality of what you do.",
  },
];

const pricingPrinciples = [
  {
    title: "Fixed project price",
    description: "You'll know the total cost before any work begins.",
  },
  {
    title: "Based on scope",
    description:
      "The final quote is shaped by the size of the website, its content, functionality, and the complexity of the project.",
  },
  {
    title: "No surprises",
    description:
      "If the scope changes during the project, we'll discuss it before any additional work begins.",
  },
];

const pricingExamples = [
  { name: "Landing page", price: "From $350", modalKey: "landing-page" },
  { name: "Business website", price: "From $700", modalKey: "business-website" },
  { name: "Larger custom website", price: "Custom quote" },
];

const pricingDetailModals = {
  "landing-page": {
    title: "Landing page",
    introduction:
      "A focused, single-page website designed to present a business, service or offer and guide visitors towards one clear action.",
    primaryHeading: "Included by default",
    primaryItems: [
      "One responsive marketing page",
      "Custom visual design",
      "Approximately 5-7 content sections",
      "One primary conversion goal",
      "Basic contact form or external call to action",
      "Mobile and tablet optimisation",
      "Basic SEO foundations",
      "Performance optimisation",
      "Domain connection and launch assistance",
      "Two structured design revision rounds",
      "One final refinement round before launch",
    ],
    secondaryHeading: "Available as additions",
    secondaryItems: [
      "Additional pages",
      "Advanced animations",
      "Booking functionality",
      "Blog or CMS functionality",
      "E-commerce",
      "Third-party integrations",
      "Copywriting",
      "Branding",
      "Hosting and ongoing maintenance",
    ],
    note:
      "Additional functionality is quoted separately based on the needs of the project.",
  },
  "business-website": {
    title: "Business website",
    introduction:
      "A custom multi-page website for businesses that need a broader online presence with clearly separated information, services and contact pathways.",
    primaryHeading: "Included by default",
    primaryItems: [
      "Up to five core pages",
      "Custom visual design",
      "Responsive development",
      "Navigation and footer",
      "Basic contact form",
      "Mobile and tablet optimisation",
      "Basic SEO foundations",
      "Performance optimisation",
      "Domain connection and launch assistance",
      "Two structured design revision rounds",
      "One final refinement round before launch",
    ],
    secondaryHeading: "Available as additions",
    secondaryItems: [
      "Additional pages",
      "Advanced animations",
      "Booking functionality",
      "Blog or CMS functionality",
      "E-commerce",
      "Third-party integrations",
      "Copywriting",
      "Branding",
      "Hosting and ongoing maintenance",
    ],
    note:
      "Additional functionality is quoted separately based on the needs of the project.",
  },
  "optional-add-ons": {
    title: "Optional add-ons",
    introduction:
      "Every project can be adapted with additional functionality when the standard scope is not enough.",
    primaryHeading: "Add-ons",
    primaryItems: [
      "Additional pages",
      "Advanced animations and interactions",
      "Blog or CMS functionality",
      "Booking systems",
      "E-commerce",
      "Custom forms",
      "Third-party integrations",
      "Multilingual support",
      "Copywriting support",
      "Branding support",
      "Hosting",
      "Ongoing maintenance",
    ],
    note:
      "Add-ons are quoted separately according to the complexity and requirements of the project.",
  },
};

const projectPolicies = [
  {
    title: "Deposit",
    summary: "30% to begin",
    description:
      "A 30% deposit secures the project and allows work to begin. The remaining 70% is due before the completed website is launched or handed over.",
  },
  {
    title: "Revisions",
    summary: "Clear revision boundaries",
    description:
      "Each standard project includes two structured design revision rounds and one final refinement round before launch. Additional revisions or changes outside the agreed scope can be discussed and quoted separately.",
  },
];

const includedItems = [
  {
    title: "Discovery and planning",
    description:
      "Understanding your business, goals, audience, and what the website needs to achieve.",
  },
  {
    title: "Custom design",
    description:
      "A considered visual direction created specifically for your business rather than relying on a generic template.",
  },
  {
    title: "Responsive development",
    description:
      "A website built to work across desktop, tablet, and mobile devices.",
  },
  {
    title: "Performance and accessibility",
    description:
      "Attention to loading performance, usability, semantic structure, and accessibility best practices.",
  },
  {
    title: "Basic SEO foundations",
    description:
      "A clean page structure, metadata, and semantic HTML that help search engines understand the website.",
  },
  {
    title: "Launch assistance",
    description:
      "Help publishing the completed website through the client's chosen hosting provider and connecting an existing domain when applicable.",
  },
  {
    title: "Documentation and handover",
    description:
      "Clear guidance on how the finished website works and how agreed content can be managed after launch.",
  },
];

const processSteps = [
  {
    title: "Discovery",
    description:
      "Understanding the business, goals, content, and project requirements.",
  },
  {
    title: "Design",
    description:
      "Establishing the visual direction, layout, and user experience.",
  },
  {
    title: "Development",
    description:
      "Building the approved design into a responsive website.",
  },
  {
    title: "Review",
    description:
      "Testing, refining, and preparing the website for release.",
  },
  {
    title: "Launch",
    description:
      "Publishing the completed website and completing the agreed handover.",
  },
];

const pricingFaqs = [
  {
    question: "Are the prices on this page fixed?",
    answer:
      "No. The examples provide a starting point. Every project receives a tailored quote based on its scope and requirements.",
  },
  {
    question: "What is the payment schedule?",
    answer:
      "A 30% deposit is required to begin. The remaining balance is due before the completed website is launched or handed over.",
  },
  {
    question: "What happens if the scope changes?",
    answer:
      "Any requested work outside the agreed scope will be discussed and approved before additional work begins or additional costs are added.",
  },
  {
    question: "Can I request maintenance or ongoing support?",
    answer:
      "Yes. Ongoing support, maintenance, and future updates can be discussed separately and are not included automatically in the fixed project price.",
  },
  {
    question: "Can you work with my existing domain and hosting?",
    answer:
      "Yes, when technically suitable. I can help publish the website through your chosen hosting provider and connect an existing domain. Hosting fees, domain purchases, and third-party subscriptions remain the client's responsibility.",
  },
];

const faqPageItems = [
  {
    question: "What types of websites do you build?",
    answer:
      "I build focused landing pages, multi-page business websites and larger custom websites. Each project is tailored to the goals, content and requirements of the business rather than built from a fixed template.",
  },
  {
    question: "How much does a website cost?",
    answer: (
      <>
        Landing pages currently start from $350 and business websites start
        from $700. Larger or more complex websites receive a custom quote
        based on their scope and requirements. You can find the current
        starting prices on the <a href="/pricing/">Pricing page</a>.
      </>
    ),
  },
  {
    question: "How long does a project take?",
    answer:
      "Project timelines vary depending on the scope, required functionality and how quickly content and feedback are provided. Before we begin, we'll agree on a realistic timeline so you always know what to expect throughout the project.",
  },
  {
    question: "What is included in a standard project?",
    answer: (
      <>
        Standard projects include custom design, responsive development, basic
        search-engine setup, a contact form where required, testing and
        support during launch. The exact inclusions depend on the selected
        service and agreed scope. More detail is available on the{" "}
        <a href="/pricing/">Pricing page</a>.
      </>
    ),
  },
  {
    question: "How many revisions are included?",
    answer:
      "Standard projects include two structured design revision rounds and one final refinement round. Additional revisions or work outside the agreed scope can be quoted separately.",
  },
  {
    question: "Do I need to provide the text and images?",
    answer:
      "Clients normally provide their final text, images, brand assets and any required legal information. Copywriting, branding assistance and other content-related services can be discussed as optional additions.",
  },
  {
    question: "Can you redesign an existing website?",
    answer:
      "Yes. Existing websites can be redesigned when the project is a good fit. The current site, content, technical setup and goals will be reviewed before confirming the scope.",
  },
  {
    question: "Do you provide hosting and maintenance?",
    answer:
      "Hosting and ongoing maintenance can be included as optional services. The exact arrangement depends on the website and the level of ongoing support required.",
  },
  {
    question: "What happens after the website launches?",
    answer:
      "I help make sure the website is launched correctly and that the agreed pages and functionality are working as expected. Ongoing hosting, maintenance and future improvements can be discussed separately.",
  },
  {
    question: "How do we get started?",
    answer: (
      <>
        You can begin by completing the{" "}
        <a href={START_PROJECT_PATH}>Start a Project form</a>{" "}
        with a short description of your business, goals and website needs. I
        will review the information and get back to you about the next step.
      </>
    ),
  },
];

function SiteNav() {
  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Primary">
        <a className="site-brand" href="/">
          {SITE_NAME}
        </a>
        <div className="site-nav__actions">
          <ul className="site-nav__list">
            {homepageNavItems.map((item) => (
              <li key={item.label}>
                <a className="site-nav__link" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a className="cta-pill cta-pill--nav" href={START_PROJECT_PATH}>
            <span>Start a project</span>
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
    </header>
  );
}

function FinalCta({
  title = "Let's build a website that reflects your business.",
  copy = "Tell me what you need, where your current website falls short, or simply what you're considering. We can take it from there.",
  buttonLabel = "Start a project",
  buttonHref = START_PROJECT_PATH,
}) {
  return (
    <section className="final-cta" aria-labelledby="final-cta-title">
      <h2 id="final-cta-title" className="final-cta__title">
        {title}
      </h2>
      <p className="final-cta__copy">{copy}</p>
      <a className="cta-pill cta-pill--final" href={buttonHref}>
        <span>{buttonLabel}</span>
        <span aria-hidden="true">&rarr;</span>
      </a>
    </section>
  );
}

function SignatureFooter() {
  return (
    <footer className="signature-footer" aria-label="Site signature">
      <div className="signature-footer__divider" aria-hidden="true" />
      <div className="signature-footer__content">
        <p className="signature-footer__brand">{SITE_NAME}</p>
        <p className="signature-footer__credit">{CREDIT_TEXT}</p>
        <p className="signature-footer__copyright">{COPYRIGHT_TEXT}</p>
      </div>
    </footer>
  );
}

function ContactForm() {
  const defaultValues = {
    name: "",
    email: "",
    message: "",
    company: "",
  };
  const [values, setValues] = React.useState(defaultValues);
  const [errors, setErrors] = React.useState({});
  const [submitState, setSubmitState] = React.useState("idle");
  const [submitError, setSubmitError] = React.useState("");
  const successHeadingRef = React.useRef(null);
  const errorMessageRef = React.useRef(null);

  const validate = React.useCallback((nextValues) => {
    const nextErrors = {};

    if (!nextValues.name.trim()) {
      nextErrors.name = "Please enter your name.";
    }

    if (!nextValues.email.trim()) {
      nextErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(nextValues.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!nextValues.message.trim()) {
      nextErrors.message = "Please enter a short message.";
    }

    return nextErrors;
  }, []);

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
    setSubmitError("");

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

      const payload = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(payload.error || "Unable to send message.");
      }

      setSubmitState("success");
      setValues(defaultValues);
      setErrors({});
    } catch (error) {
      setSubmitState("error");
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Something went wrong while sending your message. Please try again.",
      );
    }
  };

  if (submitState === "success") {
    return (
      <div className="contact-success" aria-live="polite">
        <h2 ref={successHeadingRef} className="contact-success__title" tabIndex="-1">
          Message sent
        </h2>
        <p>Thanks for getting in touch.</p>
        <p>I&apos;ve received your message and will get back to you as soon as I can.</p>
        <button
          className="contact-success__reset"
          type="button"
          onClick={() => {
            setValues(defaultValues);
            setErrors({});
            setSubmitError("");
            setSubmitState("idle");
          }}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" noValidate onSubmit={handleSubmit}>
      <div className="contact-form__field contact-form__field--honeypot" aria-hidden="true">
        <label htmlFor="contact-company">Company</label>
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
        <label htmlFor="contact-name">Name</label>
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
        <label htmlFor="contact-email">Email</label>
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
        <label htmlFor="contact-message">Message</label>
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
          {submitError || "Something went wrong while sending your message. Please try again."}
        </p>
      ) : null}

      <div className="contact-form__actions">
        <button
          className="cta-pill contact-form__submit"
          type="submit"
          disabled={submitState === "submitting"}
        >
          <span>{submitState === "submitting" ? "Sending..." : "Send message"}</span>
        </button>
        <p className="contact-form__privacy">
          Your information will only be used to respond to your enquiry.
        </p>
      </div>
    </form>
  );
}

function ProjectEnquiryForm() {
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
  const [submitError, setSubmitError] = React.useState("");
  const successHeadingRef = React.useRef(null);
  const errorMessageRef = React.useRef(null);

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
        nextErrors.name = "Please enter your name.";
      }

      if (!nextValues.email.trim()) {
        nextErrors.email = "Please enter your email address.";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(nextValues.email)) {
        nextErrors.email = "Please enter a valid email address.";
      }

      if (nextValues.website.trim() && !isValidWebsite(nextValues.website)) {
        nextErrors.website = "Please enter a valid website address.";
      }

      if (!nextValues.projectType) {
        nextErrors.projectType = "Please select a project type.";
      }

      if (!nextValues.timeline) {
        nextErrors.timeline = "Please select a desired timeline.";
      }

      if (!nextValues.details.trim()) {
        nextErrors.details = "Please tell me a little about the project.";
      }

      return nextErrors;
    },
    [isValidWebsite],
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
    setSubmitError("");

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

      const payload = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(
          payload.error || "Unable to send your enquiry right now. Please try again shortly.",
        );
      }

      setSubmitState("success");
      setValues(defaultValues);
      setErrors({});
    } catch (error) {
      setSubmitState("error");
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Unable to send your enquiry right now. Please try again shortly.",
      );
    }
  };

  if (submitState === "success") {
    return (
      <div className="contact-success" aria-live="polite">
        <h2 ref={successHeadingRef} className="contact-success__title" tabIndex="-1">
          Enquiry sent
        </h2>
        <p>Thanks for telling me about your project.</p>
        <p>
          I&apos;ve received your enquiry and will review the details before getting
          back to you within 1-2 business days.
        </p>
        <button
          className="contact-success__reset"
          type="button"
          onClick={() => {
            setValues(defaultValues);
            setErrors({});
            setSubmitError("");
            setSubmitState("idle");
          }}
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" noValidate onSubmit={handleSubmit}>
      <div className="contact-form__field contact-form__field--honeypot" aria-hidden="true">
        <label htmlFor="project-company">Company</label>
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
        <span aria-hidden="true">*</span> Required fields
      </p>

      <div className="contact-form__row contact-form__row--two-up">
        <div className="contact-form__field">
          <label htmlFor="project-name">
            Name
            <span className="contact-form__required-indicator" aria-hidden="true">
              {" "}*
            </span>
            <span className="sr-only"> required</span>
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
            Email
            <span className="contact-form__required-indicator" aria-hidden="true">
              {" "}*
            </span>
            <span className="sr-only"> required</span>
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
            Business or organisation
            <span className="sr-only"> optional</span>
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
            Existing website
            <span className="sr-only"> optional</span>
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
            Project type
            <span className="contact-form__required-indicator" aria-hidden="true">
              {" "}*
            </span>
            <span className="sr-only"> required</span>
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
            Desired timeline
            <span className="contact-form__required-indicator" aria-hidden="true">
              {" "}*
            </span>
            <span className="sr-only"> required</span>
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
          Tell me about the project
          <span className="contact-form__required-indicator" aria-hidden="true">
            {" "}*
          </span>
          <span className="sr-only"> required</span>
        </label>
        <p className="contact-form__field-support contact-form__field-support--project">
          What does your business do, what kind of website do you need and what
          would you like it to achieve?
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
          {submitError || "Unable to send your enquiry right now. Please try again shortly."}
        </p>
      ) : null}

      <div className="contact-form__actions">
        <button
          className="cta-pill contact-form__submit"
          type="submit"
          disabled={submitState === "submitting"}
        >
          <span>{submitState === "submitting" ? "Sending..." : "Send project enquiry"}</span>
        </button>
        <p className="contact-form__privacy">
          Your information will only be used to review and respond to your enquiry.
        </p>
      </div>
    </form>
  );
}

function HomePage() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-heading">
        <div className="hero__copy">
          <h1 id="hero-heading">Thoughtful websites for small businesses.</h1>
          <p>
            Your website is often the first impression people have of your
            business. It should reflect the quality behind it.
          </p>
        </div>
        <div className="hero__visual">
          <img src={heroComposition} alt="" />
        </div>
      </section>

      <section className="work-gallery" id="work" aria-label="Work gallery">
        {workItems.map((item) => (
          <figure className="work-gallery__item" key={item.src}>
            <div className="work-gallery__frame">
              <img src={item.src} alt={item.alt} />
            </div>
            <figcaption className="work-gallery__meta">
              <div className="work-gallery__meta-row">
                <span className="work-gallery__name">{item.name}</span>
                <span className="work-gallery__arrow" aria-hidden="true">
                  &rarr;
                </span>
              </div>
              <p className="work-gallery__category">{item.category}</p>
            </figcaption>
          </figure>
        ))}
      </section>

      <section className="editorial-section" aria-labelledby="who-i-work-with-title">
        <div className="editorial-section__column editorial-section__column--left">
          <h2 id="who-i-work-with-title" className="section-label">
            Who I Work With
          </h2>
          <div className="audience-list">
            {audiences.map((audience) => (
              <article className="audience-list__item" key={audience.title}>
                <h3>{audience.title}</h3>
                <p>{audience.description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="editorial-section__divider" aria-hidden="true" />

        <div className="editorial-section__column editorial-section__column--right">
          <h2 className="section-label">Why Agné Studio Exists</h2>
          <div className="editorial-section__content">
            <p className="editorial-section__statement">
              Every business deserves a website that reflects the quality
              behind it.
            </p>
            <div className="editorial-section__body">
              <p>
                A website is often the first interaction people have with your
                business. It should communicate who you are, what you do, and
                why it matters.
              </p>
              <p>
                Agné Studio believes in clarity, thoughtful design, and
                websites that are built to be easy to manage and grow with you.
              </p>
              <p>
                The goal is simple: to create an online presence that finally
                feels like a true reflection of your business.
              </p>
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
                  {isOpen ? "\u2212" : "+"}
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
              <div className="pricing-faq__answer">{item.answer}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function PricingFaqAccordion() {
  return <FaqAccordion items={pricingFaqs} initiallyOpenIndex={-1} />;
}

function PricingDetailModal({ modal, onClose, returnFocusRef }) {
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

  const headingId = `pricing-modal-title-${modal.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")}`;
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
            Close
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
  const [activeModalKey, setActiveModalKey] = React.useState(null);
  const returnFocusRef = React.useRef(null);
  const activeModal = activeModalKey ? pricingDetailModals[activeModalKey] : null;

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
            <h1 id="pricing-heading">Pricing</h1>
            <p>
              Every project is different, but the process shouldn&apos;t feel
              uncertain. Here&apos;s how I approach pricing and what you can
              expect.
            </p>
          </div>
        </section>

        <section
          className="pricing-section pricing-principles"
          aria-labelledby="pricing-principles-title"
        >
          <div className="pricing-section__header">
            <h2 id="pricing-principles-title">How pricing works</h2>
          </div>
          <div className="pricing-principles__grid">
            {pricingPrinciples.map((item) => (
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
            <h2 id="pricing-typical-title">Services & pricing</h2>
            <p>
              Every project receives a tailored quote, but these examples
              provide a useful starting point.
            </p>
          </div>
          <div className="pricing-list" role="list" aria-label="Typical projects">
            {pricingExamples.map((item) => (
              <div className="pricing-list__row" key={item.name} role="listitem">
                <div className="pricing-list__item">
                  <span className="pricing-list__label">{item.name}</span>
                  {item.modalKey ? (
                    <button
                      className="pricing-list__action"
                      type="button"
                      onClick={(event) => openModal(item.modalKey, event.currentTarget)}
                    >
                      View what&apos;s included
                    </button>
                  ) : null}
                </div>
                <span className="pricing-list__value">{item.price}</span>
              </div>
            ))}
          </div>
          <p className="pricing-list__note">
            Starting prices are shown in USD. Your final project price is
            confirmed before work begins.
          </p>
          <button
            className="pricing-list__additions"
            type="button"
            onClick={(event) => openModal("optional-add-ons", event.currentTarget)}
          >
            + View optional add-ons
          </button>
        </section>

        <div className="pricing-lower-layout">
          <section
            className="pricing-section pricing-includes"
            aria-labelledby="pricing-includes-title"
          >
            <div className="pricing-section__header pricing-section__header--narrow">
              <h2 id="pricing-includes-title">Every project includes</h2>
              <p>
                Regardless of size, every project begins with the same
                foundation: understanding your business, designing with
                purpose, and building a website that is ready for launch.
              </p>
            </div>
            <div className="pricing-includes__grid">
              {includedItems.map((item) => (
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
              <h2 id="pricing-process-title">The process</h2>
              <p>
                The exact timeline depends on the scope of the project, but
                every website follows a clear sequence from the first
                conversation to launch.
              </p>
            </div>
            <div className="pricing-process__grid">
              {processSteps.map((step, index) => (
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
            <h2 id="pricing-policies-title">Project policies</h2>
          </div>
          <div className="pricing-policies__grid">
            {projectPolicies.map((item) => (
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
            <h2 id="pricing-faq-title">Pricing FAQ</h2>
          </div>
          <PricingFaqAccordion />
        </section>
      </section>

      <PricingDetailModal
        modal={activeModal}
        onClose={closeModal}
        returnFocusRef={returnFocusRef}
      />

      <FinalCta />
      <SignatureFooter />
    </>
  );
}

function FaqPage() {
  return (
    <>
      <section className="faq-page">
        <section className="faq-hero" aria-labelledby="faq-heading">
          <div className="faq-hero__content">
            <h1 id="faq-heading">Frequently asked questions</h1>
            <p>
              Answers to common questions about services, pricing, the project
              process and what happens after launch.
            </p>
          </div>
        </section>

        <section className="faq-page__accordion" aria-label="Frequently asked questions">
          <FaqAccordion items={faqPageItems} initiallyOpenIndex={-1} />
        </section>
      </section>

      <FinalCta
        title="Still have a question?"
        copy="Every project is different. If you cannot find the answer you need, feel free to get in touch and tell me a little about what you are planning."
        buttonLabel="Get in touch"
        buttonHref="/contact/"
      />
      <SignatureFooter />
    </>
  );
}

function ContactPage() {
  return (
    <>
      <section className="contact-page">
        <section className="contact-layout" aria-labelledby="contact-heading">
          <div className="contact-layout__info">
            <h1 id="contact-heading">Get in touch</h1>
            <p className="contact-layout__intro">
              Have a question, want to discuss an idea or simply need a little
              more information? Send me a message and I&apos;ll get back to you
              as soon as I can.
            </p>

            <div className="contact-details">
              <div className="contact-details__item">
                <p className="contact-details__label">Response time</p>
                <p>I aim to reply to all enquiries within 1-2 business days.</p>
              </div>

              <div className="contact-details__item">
                <p className="contact-details__label">Ready to discuss a website?</p>
                <p>
                  For a more detailed project enquiry, use the{" "}
                  <a className="inline-link" href={START_PROJECT_PATH}>
                    Start a Project
                  </a>{" "}
                  form.
                </p>
              </div>
            </div>
          </div>

          <div className="contact-layout__form">
            <ContactForm />
          </div>
        </section>
      </section>

      <SignatureFooter />
    </>
  );
}

function ProjectPage() {
  return (
    <>
      <section className="contact-page">
        <section className="contact-layout" aria-labelledby="project-heading">
          <div className="contact-layout__info">
            <h1 id="project-heading">Start a project</h1>
            <p className="contact-layout__intro">
              Tell me a little about your business, what you need and what you
              would like the website to achieve. I&apos;ll review the details and
              get back to you with the next steps.
            </p>

            <div className="contact-details">
              <div className="contact-details__item">
                <p className="contact-details__label">What happens next?</p>
                <p>
                  I&apos;ll review your enquiry and reply within 1-2 business days.
                  From there, we can arrange a conversation and discuss the
                  scope in more detail.
                </p>
              </div>

              <div className="contact-details__item">
                <p className="contact-details__label">Not ready to start?</p>
                <p>
                  For general questions or smaller enquiries, use the{" "}
                  <a className="inline-link" href="/contact/">
                    Contact page
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>

          <div className="contact-layout__form">
            <ProjectEnquiryForm />
          </div>
        </section>
      </section>

      <SignatureFooter />
    </>
  );
}

function App() {
  const normalizedPath =
    window.location.pathname.replace(/\/+$/, "") || "/";
  const isPricingPage = normalizedPath === "/pricing";
  const isFaqPage = normalizedPath === "/faq";
  const isContactPage = normalizedPath === "/contact";
  const isProjectPage = normalizedPath === "/start-a-project";

  return (
    <div className="site-shell">
      <SiteNav />
      <main
        className={`page-content ${
          isPricingPage || isFaqPage || isContactPage || isProjectPage
            ? "page-content--pricing"
            : ""
        }`.trim()}
      >
        {isPricingPage ? (
          <PricingPage />
        ) : isFaqPage ? (
          <FaqPage />
        ) : isContactPage ? (
          <ContactPage />
        ) : isProjectPage ? (
          <ProjectPage />
        ) : (
          <HomePage />
        )}
      </main>
      <Analytics />
    </div>
  );
}

export default App;
