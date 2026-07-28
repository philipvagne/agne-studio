import React from "react";
import heroComposition from "../assets/hero/hero-composition.png";
import placeholderOne from "../assets/work/placeholder-1.png";
import placeholderTwo from "../assets/work/placeholder-2.png";
import placeholderThree from "../assets/work/placeholder-3.png";

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

const navItems = [
  { label: "Work", href: "#work" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <nav className="site-nav" aria-label="Primary">
          <a className="site-brand" href="/">
            Agné Studio
          </a>
          <ul className="site-nav__list">
            {navItems.map((item) => (
              <li key={item.label}>
                <a className="site-nav__link" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="page-content">
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
      </main>
    </div>
  );
}

export default App;
