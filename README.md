# Data Converter

A free online tool for developers, analysts, QA engineers, and businesses to convert structured data between JSON, XML, CSV, Excel, YAML, and other formats — entirely in your browser. Nothing is uploaded.

Live at [https://metadataconverter.com](https://metadataconverter.com)

Built with [Astro](https://astro.build) + vanilla TypeScript, deployed on [Cloudflare Workers](https://workers.cloudflare.com).

## Features

- **8 formats** — JSON, CSV, Excel, XML, YAML, HTML, Markdown, PDF
- **Input methods** — paste, drag & drop upload, URL fetch (with CORS proxy)
- **Smart parsing** — type inference, nested object flattening (`_` separator), multi-sheet Excel
- **Table preview** — search, sort, inline edit, add/delete rows/cols, find/replace, transpose, case transforms, undo/redo, column reorder
- **Export** — download any format or copy to clipboard
- **Tools** — random data generator, Base64 encode/decode, Hex encode/decode
- **Privacy** — 100% client-side, no servers, no tracking
- **Theme** — light/dark with `prefers-color-scheme` support
- **Persistent** — history survives page refresh via localStorage

## Internationalization

The site is fully localized into 6 locales (plus English at the root) using per-locale static folders:

| Locale | Prefix | Example |
|---|---|---|
| English | `/` (default) | `/json-to-csv-converter` |
| Español | `/es` | `/es/json-to-csv-converter` |
| Português | `/pt` | `/pt/json-to-csv-converter` |
| Deutsch | `/de` | `/de/json-to-csv-converter` |
| Français | `/fr` | `/fr/json-to-csv-converter` |
| हिन्दी | `/hi` | `/hi/json-to-csv-converter` |
| 日本語 | `/ja` | `/ja/json-to-csv-converter` |

- Static per-locale folders (`src/pages/es/...`) are required; dynamic `[locale]` routes emit `/en/`-prefixed redirects.
- Translation strings live in `src/i18n/` per locale.
- The sitemap (`/sitemap-index.xml`) emits `hreflang` alternates for all locales.

## Blog & SEO Content

- **14 English blog posts** + per-locale translations (9 posts each), including 5 converter-guide articles.
- Blog content is data-driven from `src/i18n/pages/blog/` (`en.ts` is the source of truth; translations in `es/pt/de/fr/hi/ja.ts`).
- The 5 guide posts are authored in `src/i18n/pages/blog/guides/` and rendered by wrapper pages in `src/pages/blog/`.
- Raw article drafts live in `content/articles/`.
- SEO strategy and the programmatic SEO topical map live in `TOPICAL-MAP.md` and `INTERNATIONAL-SEO.md`.

## Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:4321`.

## Build & Deploy

```bash
npm run build        # static build -> dist/
npm run preview      # build + wrangler dev
npm run deploy       # build + wrangler deploy to Cloudflare
```

Output goes to `dist/`; deployment config is in `wrangler.jsonc` (Cloudflare adapter).

## Project Structure

```
src/
├── components/     # Astro components (Header, ConverterLanding, PreviewTable, Blog*Landing, etc.)
├── i18n/
│   ├── content/    # Per-locale content modules (pages, blog)
│   ├── ui/         # UI string translations
│   └── languages.ts
├── layouts/        # BaseLayout with SEO meta + JSON-LD schema
├── lib/
│   ├── converters/ # Parse/stringify for each format
│   ├── appState.ts # Reactive store with undo/redo + localStorage
│   ├── detect.ts   # Format detection + validation
│   ├── exportUtils.ts # HTML, Markdown, PDF export helpers
│   ├── theme.ts    # Light/dark theme
│   └── tools.ts    # Random data, Base64, Hex tools
├── pages/          # index (tool), converters, blog, static pages
│   ├── blog/       # Blog index + individual posts
│   └── {es,pt,de,fr,hi,ja}/  # Localized page trees
└── styles/         # Global CSS
```

## License

MIT
