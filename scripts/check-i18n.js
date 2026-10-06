// Fails the build if src/content/sv.js and src/content/en.js drift apart.
import { existsSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import sv from "../src/content/sv.js";
import en from "../src/content/en.js";
import { PAGES } from "../src/routes.js";

const LINK_PATTERN = /\(page:([a-z-]+)\)/g;
const TOKEN_PATTERN = /\{(\w+)\}/g;
const KNOWN_TOKENS = new Set([
  "email",
  "amount",
  "landingAmount",
  "businessAmount",
  "landingLaunch",
  "businessLaunch",
  "launchSentence",
]);

function flatten(value, path = "", out = new Map()) {
  if (Array.isArray(value)) {
    value.forEach((item, index) => flatten(item, `${path}[${index}]`, out));
  } else if (value && typeof value === "object") {
    for (const [key, item] of Object.entries(value)) {
      flatten(item, path ? `${path}.${key}` : key, out);
    }
  } else {
    out.set(path, value);
  }
  return out;
}

const svKeys = flatten(sv);
const enKeys = flatten(en);
const problems = [];

for (const key of enKeys.keys()) {
  if (!svKeys.has(key)) problems.push(`Missing in sv.js: ${key}`);
}
for (const key of svKeys.keys()) {
  if (!enKeys.has(key)) problems.push(`Missing in en.js: ${key}`);
}

for (const [name, map] of [["sv.js", svKeys], ["en.js", enKeys]]) {
  for (const [key, value] of map) {
    if (typeof value !== "string" || value.trim() === "") {
      problems.push(`${name}: ${key} must be a non-empty string`);
    }
  }
}

for (const [key, enValue] of enKeys) {
  const svValue = svKeys.get(key);
  if (typeof enValue !== "string" || typeof svValue !== "string") continue;

  const enLinks = [...enValue.matchAll(LINK_PATTERN)].map((m) => m[1]);
  const svLinks = [...svValue.matchAll(LINK_PATTERN)].map((m) => m[1]);

  if (enLinks.join() !== svLinks.join()) {
    problems.push(`Page links differ between en.js and sv.js: ${key}`);
  }
  for (const page of [...enLinks, ...svLinks]) {
    if (!PAGES[page]) problems.push(`Unknown page "${page}" in link: ${key}`);
  }

  const enTokens = [...enValue.matchAll(TOKEN_PATTERN)].map((m) => m[1]).sort();
  const svTokens = [...svValue.matchAll(TOKEN_PATTERN)].map((m) => m[1]).sort();

  if (enTokens.join() !== svTokens.join()) {
    problems.push(`Price tokens differ between en.js and sv.js: ${key}`);
  }
  for (const token of [...enTokens, ...svTokens]) {
    if (!KNOWN_TOKENS.has(token)) problems.push(`Unknown token {${token}}: ${key}`);
  }
}

for (const [name, content] of [["sv.js", sv], ["en.js", en]]) {
  if (!["home", "gallery"].includes(content.nav.startTarget)) {
    problems.push(`${name}: nav.startTarget must be "home" or "gallery"`);
  }
  if (content.form.emailLine.split("{email}").length !== 2) {
    problems.push(`${name}: form.emailLine must contain {email} exactly once`);
  }
}

// Work cards: url and image are not translated, so they must match, and the
// image must exist in assets/work/.
const workRoot = resolve(dirname(fileURLToPath(import.meta.url)), "../assets/work");

sv.home.workItems.forEach((svItem, index) => {
  const enItem = en.home.workItems[index];
  if (!enItem) return;

  for (const field of ["url", "image"]) {
    if (svItem[field] !== enItem[field]) {
      problems.push(`home.workItems[${index}].${field} must be identical in sv.js and en.js`);
    }
  }
  if (!existsSync(resolve(workRoot, svItem.image))) {
    problems.push(`home.workItems[${index}].image not found in assets/work/: ${svItem.image}`);
  }
  if (!/^https:\/\//.test(svItem.url)) {
    problems.push(`home.workItems[${index}].url must start with https://`);
  }
});

if (problems.length > 0) {
  console.error("i18n check failed:\n" + problems.map((p) => `  - ${p}`).join("\n"));
  process.exit(1);
}

console.log(`i18n check passed (${enKeys.size} strings in each language).`);
