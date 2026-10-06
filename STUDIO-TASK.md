# STUDIO-TASK.md

## Context

Agné Studio is a one-person web studio run by Philip Agné. It sells simple, well-designed websites to small Swedish companies (mainly aktiebolag, starting with hantverkare).

- Studio site (this repo): https://agne-studio.philipv-agne.workers.dev/
- Hollowbrook concept site: https://hollowbrook-website.philipv-agne.workers.dev/

Hosting is Cloudflare (static assets). The site is currently in English only and shows "0/3" template slots with nothing in them.

## Goals

1. Make **Swedish the default language** and keep **English as an option** through a language toggle.
2. **Link Hollowbrook** as the studio's example template, and remove the empty "0/3" template slots.
3. Prepare **pricing in SEK** (excluding moms), with a launch offer and a care plan. This pass needs values from the owner (see Pricing).

Work in separate passes. Do only the pass you are asked to do.

- Pass 1: language foundation
- Pass 2: templates section
- Pass 3: pricing and care plan

## Rules

- Read the repo first. Give a short plan and wait for approval before editing.
- Keep the existing visual design, layout, typography and components. This is not a redesign.
- Ask before major structural changes.
- Do not invent facts: no clients, testimonials, prices, guarantees, years of experience, certifications or statistics.
- If a value marked "owner fills in" is blank, stop and ask. Do not guess or leave visible placeholders in the site.
- Do not add dependencies unless clearly necessary. Prefer a small typed translation object over an i18n library.
- `npm run build` must pass with no errors or console warnings.

## Pass 1: Language

- Swedish is the default and lives at `/`. English lives under `/en`.
- Translate route slugs: pricing becomes `/priser` in Swedish and `/en/pricing` in English. The old English path `/pricing` must redirect to `/en/pricing` so existing links keep working.
- Add a language toggle in the header ("SV | EN"). It switches language and stays on the equivalent page. It must be keyboard accessible, have visible focus, and use `lang` attributes on the labels.
- Update `<html lang>`, the page title and the meta description for each language.
- Put all user-facing text in `src/content/sv.ts` and `src/content/en.ts` with the same TypeScript shape, so a missing key is a build error.
- When the site is deployed on Cloudflare, direct links and page refreshes on every route must work (single-page-app fallback). Check the Cloudflare static-assets docs for the setting if needed.
- After translating, list every Swedish string in a table (key, English, Swedish) so the owner can review the wording.

### Swedish writing guidelines

- Plain, direct and professional. No marketing fluff, no stacked adjectives.
- Address the visitor as "du".
- Use natural Swedish, not word-for-word translation, and avoid unnecessary English loanwords.
- Preferred terms: landningssida, företagswebbplats, hemsida, offert, fast pris, exkl. moms, driftpaket, lanseringspris.
- Keep the same meaning as the English. Do not add claims that are not in the English version.

## Pass 2: Templates section

- Make the templates data-driven: an array with `id`, `name`, a short description per language, `url` and a label.
- One entry for now: **Hollowbrook Outdoor Living**, linking to https://hollowbrook-website.philipv-agne.workers.dev/
  - Swedish label: "Konceptprojekt för ett fiktivt företag"
  - English label: "Concept project for a fictional company"
- Open external links in a new tab with `rel="noopener noreferrer"`.
- Remove the "0/3" counter and any empty placeholder cards. The section shows however many entries exist.
- Do not add other templates. More will be added later by the owner.

## Pass 3: Pricing and care plan

Currency is SEK, always shown excluding moms. Keep the existing "what's included" lists and the "fixed price confirmed before work begins" promise from the current site.

**Owner fills in (stop and ask if blank):**

| Package | List price, from (kr) | Launch price, first 3 clients (kr) |
| --- | --- | --- |
| Landningssida | | |
| Företagswebbplats | | |
| Större anpassad webbplats | Offert | Offert |

Care plan (driftpaket):

- Price per month (kr): 
- What is included (owner defines, do not invent): 

Launch offer terms (owner confirms): 

- Applies to the first 3 clients
- In exchange for a short testimonial and permission to show the finished work

## Contact

- Email: (owner fills in)
- Do not invent an address, phone number or organisation number.

## Out of scope

New sections, redesign, CMS, analytics, a contact-form backend, and adding templates other than Hollowbrook.

## Definition of done

- Swedish by default, English via toggle, same content structure in both
- Direct links and refreshes work on every route
- Hollowbrook linked correctly, no empty template slots
- No invented facts and no visible placeholders
- `npm run build` passes
