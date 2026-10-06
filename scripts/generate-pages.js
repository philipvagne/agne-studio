// Writes one static HTML entry per language and page, so each file has the
// right <html lang>, <title> and meta description. Output is committed.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import content from "../src/content/index.js";
import { PAGES, htmlFileFor } from "../src/routes.js";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

const escapeHtml = (value) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

for (const page of Object.keys(PAGES)) {
  for (const lang of Object.keys(content)) {
    const { title, description } = content[lang].meta[page];
    const html = `<!doctype html>
<html lang="${lang}">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(title)}</title>
    <meta name="description" content="${escapeHtml(description)}" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
`;
    const file = resolve(root, htmlFileFor(page, lang));
    mkdirSync(dirname(file), { recursive: true });
    writeFileSync(file, html);
  }
}

console.log("Generated HTML entries for every language and page.");
