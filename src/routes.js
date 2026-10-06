// Shared by the app, the page generator and vite.config.js. Keep it free of JSX.

export const DEFAULT_LANG = "sv";

export const LANGUAGES = {
  sv: { short: "SV", name: "Svenska" },
  en: { short: "EN", name: "English" },
};

export const PAGES = {
  home: { sv: "/", en: "/en/" },
  pricing: { sv: "/priser/", en: "/en/pricing/" },
  faq: { sv: "/vanliga-fragor/", en: "/en/faq/" },
  contact: { sv: "/kontakt/", en: "/en/contact/" },
  project: { sv: "/starta-projekt/", en: "/en/start-a-project/" },
};

export function pathFor(page, lang) {
  return PAGES[page][lang];
}

export function htmlFileFor(page, lang) {
  const path = pathFor(page, lang);
  return path === "/" ? "index.html" : `${path.slice(1)}index.html`;
}

function normalizePath(path) {
  return path.replace(/\/+$/, "") || "/";
}

export function resolveRoute(pathname) {
  const current = normalizePath(pathname);

  for (const [page, paths] of Object.entries(PAGES)) {
    for (const lang of Object.keys(paths)) {
      if (normalizePath(paths[lang]) === current) {
        return { page, lang };
      }
    }
  }

  const isEnglish = current === "/en" || current.startsWith("/en/");
  return { page: "home", lang: isEnglish ? "en" : DEFAULT_LANG };
}
