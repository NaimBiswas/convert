# Metadata Converter

A free online tool for developers, analysts, QA engineers, and businesses to convert structured data between JSON, XML, CSV, Excel, YAML, and other formats — entirely in your browser. Nothing is uploaded.

Built with [Astro](https://astro.build) + vanilla TypeScript.

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

## Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:4321`.

## Build

```bash
npm run build
npm run preview
```

Output goes to `dist/`.

## Deploy

See [CLOUDFLARE_DEPLOY.md](CLOUDFLARE_DEPLOY.md) for Cloudflare Pages setup. Also works on Vercel, Netlify, or any static host.

## Project Structure

```
src/
├── components/     # Astro components (Header, InputPanel, PreviewTable, etc.)
├── layouts/        # BaseLayout with SEO meta tags
├── lib/
│   ├── converters/ # Parse/stringify for each format
│   ├── appState.ts # Reactive store with undo/redo + localStorage
│   ├── detect.ts   # Format detection + validation
│   ├── exportUtils.ts # HTML, Markdown, PDF export helpers
│   ├── theme.ts    # Light/dark theme
│   └── tools.ts    # Random data, Base64, Hex tools
├── pages/          # index.astro (tool), docs.astro, about, contact, privacy, terms, cookies, faq, 404
└── styles/         # Global CSS
```

## License

MIT
