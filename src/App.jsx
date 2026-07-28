import React from "react";
import heroComposition from "../assets/hero/hero-composition.png";
import placeholderOne from "../assets/work/placeholder-1.png";
import placeholderTwo from "../assets/work/placeholder-2.png";
import placeholderThree from "../assets/work/placeholder-3.png";

const SITE_NAME = "Agn\u00e9 Studio";
const COPYRIGHT_TEXT = "\u00a9 2026";
const CREDIT_TEXT = "Designed and developed by Philip Agn\u00e9.";

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
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
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
          <a className="cta-pill cta-pill--nav" href="/#contact">
            <span>Start a project</span>
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
    </header>
  );
}

function FinalCta() {
  return (
    <section className="final-cta" aria-labelledby="final-cta-title">
      <h2 id="final-cta-title" className="final-cta__title">
        Let&apos;s build a website that reflects your business.
      </h2>
      <p className="final-cta__copy">
        Tell me what you need, where your current website falls short, or
        simply what you&apos;re considering. We can take it from there.
      </p>
      <a className="cta-pill cta-pill--final" href="/#contact">
        <span>Start a project</span>
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

function PricingFaqAccordion() {
  const [openIndex, setOpenIndex] = React.useState(0);

  return (
    <div className="pricing-faq">
      {pricingFaqs.map((item, index) => {
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
              <p>{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
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

function App() {
  const normalizedPath =
    window.location.pathname.replace(/\/+$/, "") || "/";
  const isPricingPage = normalizedPath === "/pricing";

  return (
    <div className="site-shell">
      <SiteNav />
      <main
        className={`page-content ${isPricingPage ? "page-content--pricing" : ""}`.trim()}
      >
        {isPricingPage ? <PricingPage /> : <HomePage />}
      </main>
    </div>
  );
}

export default App;
