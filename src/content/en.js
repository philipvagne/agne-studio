// Links inside strings use [label](page:<page-key>); see PAGES in src/routes.js.
// sv.js must have exactly the same keys. `npm run build` checks this.

const en = {
  meta: {
    home: {
      title: "Agné Studio | Thoughtful websites for small businesses",
      description:
        "Thoughtful websites for small businesses. Agné Studio designs and builds websites that reflect the quality behind your business.",
    },
    pricing: {
      title: "Pricing | Agné Studio",
      description:
        "How pricing works at Agné Studio, what every project includes, and how the process runs from the first conversation to launch.",
    },
    faq: {
      title: "Frequently asked questions | Agné Studio",
      description:
        "Answers to common questions about services, pricing, the project process and what happens after launch.",
    },
    contact: {
      title: "Get in touch | Agné Studio",
      description:
        "Have a question or want to discuss an idea? Send a message to Agné Studio. I aim to reply within 1-2 business days.",
    },
    project: {
      title: "Start a project | Agné Studio",
      description:
        "Tell Agné Studio about your business and what you need from your website. You will get a reply within 1-2 business days.",
    },
  },

  nav: {
    ariaLabel: "Primary",
    // First nav link. startTarget "gallery" scrolls to the home page gallery (#work),
    // "home" links to the home page. English still says "Work" and scrolls, while
    // sv.js says "Startsida" and links home. Open question: should English become
    // "Home" with startTarget "home" to match?
    start: "Work",
    startTarget: "gallery",
    pricing: "Pricing",
    faq: "FAQ",
    contact: "Contact",
    startProject: "Start a project",
    languageLabel: "Language",
  },

  finalCta: {
    title: "Let's build a website that reflects your business.",
    copy: "Tell me what you need, where your current website falls short, or simply what you're considering. We can take it from there.",
    button: "Start a project",
  },

  footer: {
    ariaLabel: "Site signature",
    credit: "Designed and developed by Philip Agné.",
  },

  form: {
    required: "required",
    optional: "optional",
    requiredNote: "Required fields",
    sending: "Sending...",
    honeypotLabel: "Company",
    nameLabel: "Name",
    emailLabel: "Email",
    errors: {
      name: "Please enter your name.",
      email: "Please enter your email address.",
      emailInvalid: "Please enter a valid email address.",
    },
  },

  home: {
    heroTitle: "Thoughtful websites for small businesses.",
    heroText:
      "Your website is often the first impression people have of your business. It should reflect the quality behind it.",
    workLabel: "Work gallery",
    workNewTab: "(opens in a new tab)",
    // One card per item. `image` is a file name in assets/work/; `url` and `image`
    // must be identical in sv.js (the build checks this).
    workItems: [
      {
        name: "Hollowbrook Outdoor Living",
        category: "Concept project for a fictional company",
        alt: "Preview of Hollowbrook Outdoor Living, a concept project.",
        url: "https://hollowbrook-website.philipv-agne.workers.dev/",
        image: "hollowbrook-preview.jpg",
      },
    ],
    audiencesTitle: "Who I Work With",
    audiences: [
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
    ],
    whyTitle: "Why Agné Studio Exists",
    whyStatement:
      "Every business deserves a website that reflects the quality behind it.",
    whyBody: [
      "A website is often the first interaction people have with your business. It should communicate who you are, what you do, and why it matters.",
      "Agné Studio believes in clarity, thoughtful design, and websites that are built to be easy to manage and grow with you.",
      "The goal is simple: to create an online presence that finally feels like a true reflection of your business.",
    ],
  },

  pricing: {
    title: "Pricing",
    intro:
      "Every project is different, but the process shouldn't feel uncertain. Here's how I approach pricing and what you can expect.",
    principlesTitle: "How pricing works",
    principles: [
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
    ],
    servicesTitle: "Services & pricing",
    servicesIntro:
      "Every project receives a tailored quote, but these examples provide a useful starting point.",
    servicesLabel: "Typical projects",
    // The first two entries feed the price tokens in the "How much does a website
    // cost?" FAQ answer (see buildPriceTokens in App.jsx); keep their order.
    examples: [
      { name: "Landing page", amount: "$350", launchAmount: "$150" },
      { name: "Business website", amount: "$700", launchAmount: "$350" },
      { name: "Larger custom website", price: "Custom quote" },
    ],
    fromTemplate: "From {amount}",
    launchLine: "Launch price: {amount}",
    launchNote:
      "The launch price applies to the first three clients, in return for a short testimonial and permission to show the finished work.",
    viewIncluded: "View what's included",
    priceNote:
      "Starting prices are shown in USD. Your final project price is confirmed before work begins.",
    viewAddOns: "+ View optional add-ons",
    includesTitle: "Every project includes",
    includesIntro:
      "Regardless of size, every project begins with the same foundation: understanding your business, designing with purpose, and building a website that is ready for launch.",
    includes: [
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
    ],
    processTitle: "The process",
    processIntro:
      "The exact timeline depends on the scope of the project, but every website follows a clear sequence from the first conversation to launch.",
    process: [
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
        description: "Building the approved design into a responsive website.",
      },
      {
        title: "Review",
        description: "Testing, refining, and preparing the website for release.",
      },
      {
        title: "Launch",
        description:
          "Publishing the completed website and completing the agreed handover.",
      },
    ],
    policiesTitle: "Project policies",
    policies: [
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
    ],
    faqTitle: "Pricing FAQ",
    faq: [
      {
        question: "Are the prices on this page fixed?",
        answer:
          "The starting prices are a starting point. You always get a fixed price in your quote before work begins.",
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
    ],
    modalClose: "Close",
    modals: {
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
        note: "Additional functionality is quoted separately based on the needs of the project.",
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
        note: "Additional functionality is quoted separately based on the needs of the project.",
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
        note: "Add-ons are quoted separately according to the complexity and requirements of the project.",
      },
    },
  },

  faq: {
    title: "Frequently asked questions",
    intro:
      "Answers to common questions about services, pricing, the project process and what happens after launch.",
    listLabel: "Frequently asked questions",
    items: [
      {
        question: "What types of websites do you build?",
        answer:
          "I build focused landing pages, multi-page business websites and larger custom websites. Each project is tailored to the goals, content and requirements of the business rather than built from a fixed template.",
      },
      {
        question: "How much does a website cost?",
        answer:
          "Landing pages currently start from {landingAmount} and business websites start from {businessAmount}.{launchSentence} Larger or more complex websites receive a custom quote based on their scope and requirements. You can find the current starting prices on the [Pricing page](page:pricing).",
      },
      {
        question: "How long does a project take?",
        answer:
          "Project timelines vary depending on the scope, required functionality and how quickly content and feedback are provided. Before we begin, we'll agree on a realistic timeline so you always know what to expect throughout the project.",
      },
      {
        question: "What is included in a standard project?",
        answer:
          "Standard projects include custom design, responsive development, basic search-engine setup, a contact form where required, testing and support during launch. The exact inclusions depend on the selected service and agreed scope. More detail is available on the [Pricing page](page:pricing).",
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
        answer:
          "You can begin by completing the [Start a project](page:project) form with a short description of your business, goals and website needs. I will review the information and get back to you about the next step.",
      },
    ],
    // Added to the cost answer only while the launch offer is active.
    costLaunchSentence:
      "The first three clients get a launch price of {landingLaunch} for a landing page and {businessLaunch} for a business website.",
    ctaTitle: "Still have a question?",
    ctaCopy:
      "Every project is different. If you cannot find the answer you need, feel free to get in touch and tell me a little about what you are planning.",
    ctaButton: "Get in touch",
  },

  contact: {
    title: "Get in touch",
    intro:
      "Have a question, want to discuss an idea or simply need a little more information? Send me a message and I'll get back to you as soon as I can.",
    responseLabel: "Response time",
    responseText: "I aim to reply to all enquiries within 1-2 business days.",
    projectLabel: "Ready to discuss a website?",
    projectText:
      "For a more detailed project enquiry, use the [Start a project](page:project) form.",
    form: {
      messageLabel: "Message",
      submit: "Send message",
      privacy: "Your information will only be used to respond to your enquiry.",
      errors: {
        message: "Please enter a short message.",
        submit:
          "Something went wrong while sending your message. Please try again.",
      },
      success: {
        title: "Message sent",
        thanks: "Thanks for getting in touch.",
        received:
          "I've received your message and will get back to you as soon as I can.",
        reset: "Send another message",
      },
    },
  },

  project: {
    title: "Start a project",
    intro:
      "Tell me a little about your business, what you need and what you would like the website to achieve. I'll review the details and get back to you with the next steps.",
    nextLabel: "What happens next?",
    nextText:
      "I'll review your enquiry and reply within 1-2 business days. From there, we can arrange a conversation and discuss the scope in more detail.",
    notReadyLabel: "Not ready to start?",
    notReadyText:
      "For general questions or smaller enquiries, use the [Contact page](page:contact).",
    form: {
      businessLabel: "Business or organisation",
      websiteLabel: "Existing website",
      projectTypeLabel: "Project type",
      timelineLabel: "Desired timeline",
      detailsLabel: "Tell me about the project",
      detailsSupport:
        "What does your business do, what kind of website do you need and what would you like it to achieve?",
      projectTypes: {
        placeholder: "Select a project type",
        options: {
          "landing-page": "Landing page",
          "business-website": "Business website",
          "website-redesign": "Website redesign",
          "something-else": "Something else",
        },
      },
      timelines: {
        placeholder: "Select a timeline",
        options: {
          "as-soon-as-possible": "As soon as possible",
          "within-2-4-weeks": "Within 2-4 weeks",
          "within-1-2-months": "Within 1-2 months",
          "within-3-4-months": "Within 3-4 months",
          "flexible-not-sure-yet": "Flexible / not sure yet",
        },
      },
      submit: "Send project enquiry",
      privacy:
        "Your information will only be used to review and respond to your enquiry.",
      errors: {
        website: "Please enter a valid website address.",
        projectType: "Please select a project type.",
        timeline: "Please select a desired timeline.",
        details: "Please tell me a little about the project.",
        submit:
          "Unable to send your enquiry right now. Please try again shortly.",
      },
      success: {
        title: "Enquiry sent",
        thanks: "Thanks for telling me about your project.",
        received:
          "I've received your enquiry and will review the details before getting back to you within 1-2 business days.",
        reset: "Send another enquiry",
      },
    },
  },
};

export default en;
