# International SEO Plan — metadataconverter.com

Add multilingual versions of the site in:

| Locale | Language | URL prefix |
|--------|----------|------------|
| `es` | Spanish | `/es/` |
| `pt` | Portuguese | `/pt/` |
| `de` | German | `/de/` |
| `fr` | French | `/fr/` |
| `hi` | Hindi | `/hi/` |
| `ja` | Japanese | `/ja/` |

English remains at the root (`/`) as the default locale.

---

## Status: ALL PHASES IMPLEMENTED

| Locale | Home | 5 Converters | 7 Static pages | Blog (index + 9 posts) |
|--------|------|--------------|----------------|------------------------|
| `en` | ✅ | ✅ | ✅ | ✅ |
| `es` | ✅ | ✅ | ✅ | ✅ |
| `pt` | ✅ | ✅ | ✅ | ✅ |
| `de` | ✅ | ✅ | ✅ | ✅ |
| `fr` | ✅ | ✅ | ✅ | ✅ |
| `hi` | ✅ | ✅ | ✅ | ✅ |
| `ja` | ✅ | ✅ | ✅ | ✅ |

**Built:** 162 pages (60 before this phase + 102 new localized static/blog pages). Verified: localized `<title>`, `canonical`, 7 `hreflang` alternates + `x-default`, localized breadcrumbs/schema (incl. `FAQPage`), localized header/footer/language-switcher links, proper UTF-8 in all 7 locales, sitemap with all localized URLs + hreflang.

**Architecture (final):**
- `src/i18n/languages.ts` + `src/i18n/ui/*` — locale defs + UI string dictionaries.
- `src/i18n/content/*` — home + converter page content (`converterContent`, `homeContent`).
- `src/i18n/pages/static/*` + `src/i18n/pages/blog/*` — static pages (about/contact/faq/docs/privacy/terms/cookies) + blog (index + 9 posts) per locale.
- `src/i18n/pages/utils.ts` — `localizeHrefs` (rewrites relative `href="/..."` to the active locale), `localizeBreadcrumbs`, `stripHtml`.
- Templates: `HomeLanding`, `ConverterLanding`, `StaticPageLanding`, `BlogIndexLanding`, `BlogPostLanding`; shared `HtmlBlocks` renderer.
- `src/pages/{es,pt,de,fr,hi,ja}/` — thin wrapper pages (17 per locale) + `src/pages/{locale}/blog/` (10 per locale).
- Static locale folder structure used (not dynamic `[locale]` routes) because Astro's default-locale redirects don't strip the `/en` prefix from dynamic routes.

**Remaining (Phase 5):** deploy via `npm run deploy`, then submit the localized sitemap(s) to Google Search Console.

## Recommended approach: Path-based locales

Use subpath URLs (`/es/json-to-csv-converter`, `/de/…`, etc.).

Why:

- **Google's recommended structure** for hreflang/multilingual SEO.
- **Free on Cloudflare** — no extra domains, DNS, or billing.
- **Astro supports it natively** via the `i18n` routing config plus the existing `@astrojs/sitemap` integration (hreflang alternates are generated automatically).
- Easy to extend later (add `/ar/`, `/ru/`, etc.).

Alternatives considered:

| Option | Pros | Cons | Verdict |
|--------|------|------|---------|
| Path-based `/es/` | Cheap, native Astro support, easy to scale | — | **Recommended** |
| Subdomains `es.metadataconverter.com` | Cleaner separation | Needs DNS + certs per language, more config | Only if traffic justifies it |
| Client-side JS language toggle | Fast to build | **Bad for SEO** — search engines don't reliably index toggled content | Avoid |

---

## Current state of the codebase

- **Framework:** Astro 7 + Cloudflare adapter, fully static build.
- **Site URL:** `https://metadataconverter.com`
- **Pages:** 25 total (~2,000 lines of content):
  - 15 top-level pages: `index`, `about`, `contact`, `cookies`, `docs`, `faq`, `privacy`, `terms`, `404`, and 5 converter pages (`json-to-csv`, `csv-to-json`, `excel-to-json`, `json-to-excel`, `excel-to-csv`).
  - 10 blog posts in `src/pages/blog/`.
- **Shared components with hardcoded English text:** `Header`, `Footer`, `Hero`, `ConverterBar`, `InputPanel`, `PreviewTable`.
- **No i18n/hreflang config exists** — `astro.config.mjs` only has `site` + `sitemap()`.
- **SEO meta:** `BaseLayout.astro` renders `title`, `description`, `canonical`, OG/Twitter tags, JSON-LD schema, and breadcrumbs — all currently English/hardcoded to English strings.

---

## Phase 1 — Infrastructure

### 1. Add `i18n` config to `astro.config.mjs`

```js
export default defineConfig({
  site: 'https://metadataconverter.com',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'pt', 'de', 'fr', 'hi', 'ja'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [sitemap()],
  adapter: cloudflare(),
});
```

### 2. Create `src/i18n/`

- `languages.ts` — locale codes, display names, `lang` attribute values, `og:locale` values.
- `ui.ts` — shared dictionary of UI strings (header, footer, hero, tool chrome).

### 3. Update `BaseLayout.astro`

Accept a `locale` prop, then:

- `<html lang="{locale}">`
- `<meta property="og:locale" …>`
- `<link rel="alternate" hreflang="es" href="…">` (one per locale, plus `hreflang="x-default"` → English root)
- Keep `canonical` pointing at the current locale URL.

The `@astrojs/sitemap` integration reads the `i18n` config and emits hreflang alternates in `sitemap.xml` automatically.

### 4. Language switcher in `Header.astro`

Dropdown in the header listing all 7 locales, linking to the equivalent page in each language (using the current path, rewritten with the locale prefix).

---

## Phase 2 — Restructure pages (the big task)

Do **not** copy-paste 25 files × 6 languages. Convert the site to **data-driven pages**:

### A. Converter landing pages (highest SEO value, lowest effort)

The 5 converter pages share a nearly identical template. Refactor into one shared template component that renders from per-locale translation files, generated with `getStaticPaths()`.

**Translation data:** per-language JSON (or TS) files under `src/i18n/content/`:

- `es.json`, `pt.json`, `de.json`, `fr.json`, `hi.json`, `ja.json`

Each contains the localized `title`, `description`, `keywords`, headings, body paragraphs, and step lists for the converter pages.

**Pages to cover in this phase:**

1. Home (`/`, `/es/`, `/pt/`, …)
2. JSON → CSV
3. CSV → JSON
4. Excel → JSON
5. JSON → Excel
6. Excel → CSV

### B. Supporting pages

Then migrate `about`, `docs`, `faq`, `privacy`, `terms`, `cookies`, `contact` into the same data-driven system.

### C. Blog posts

Translate blog content last — or localize only the high-traffic posts to start.

---

## Phase 3 — Client-side component strings

`ConverterBar`, `InputPanel`, and `PreviewTable` hold most of the tool UI in hardcoded English ("Paste", "Upload", "Convert", "Clear", etc.).

- Move all strings into `ui.ts` dictionary (one entry set per locale).
- Pass the active locale from the page into these components.
- This makes the actual converter work in every language, not just the marketing text.

---

## Phase 4 — SEO polish

- **Localized meta:** `title`, `description`, `keywords` per locale (already covered by the data-driven approach).
- **Localized schema:** JSON-LD (`WebApplication`, `BreadcrumbList`) with translated `name`/`description`.
- **Sitemap:** auto-generated with hreflang — submit `https://metadataconverter.com/sitemap-index.xml` to Google Search Console.
- **hreflang correctness:** every locale page links to all other locales + `x-default`.
- **No IP-based redirects.** Serving auto-redirected content can hurt indexing. Instead: serve the requested locale and show a visible language switcher. (Optionally later: an `Accept-Language`-based default with a banner.)

---

## Phase 5 — Verification

1. `npm run build` — confirm all `/<locale>/` routes are emitted as static HTML.
2. Inspect output: `dist/` should contain `/es/`, `/pt/`, `/de/`, `/fr/`, `/hi/`, `/ja/` folders.
3. Check a built page's `<head>`: correct `lang`, `canonical`, and all 6 `hreflang` alternates.
4. Verify `sitemap.xml` includes all locales with hreflang alternates.
5. Deploy (`npm run deploy`), then submit each localized sitemap in Search Console.
6. Spot-check rendering: no mixed-language content on any locale page.

---

## Suggested first step

Scaffold Phase 1 (i18n config + `src/i18n/` + BaseLayout hreflang + header language switcher), then implement the data-driven converter pages + home for all 6 languages.

### Rough effort split

| Phase | Effort |
|-------|--------|
| 1. Infrastructure | ~10% |
| 2. Page content/data | ~60% |
| 3. Component strings | ~20% |
| 4. SEO polish | ~5% |
| 5. Verification/deploy | ~5% |
