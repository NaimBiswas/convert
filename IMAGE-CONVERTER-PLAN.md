# Image Converter Tool — Research & Implementation Plan

> **Goal:** Add image format conversion tools (PNG → JPG, JPG → PNG, PNG → WebP, etc.) to `metadataconverter.com`, matching the quality and SEO approach of the existing data-conversion tools.
>
> **Status:** Research complete — implementation plan ready.

---

## 1. Competitor Research

We compared the leading online image converters in 2026. The market splits into **two camps**:

| Camp | Tools | How it works | Pros | Cons |
|---|---|---|---|---|
| **Server-side** | CloudConvert, Convertio, iLoveIMG, FreeConvert, Zamzar, Online-Convert | Upload to remote server, convert, download | 200–1,200 formats, batch, HEIC/AVIF/RAW | Files leave device, daily caps (25/day), accounts, ads, slower (8–30s) |
| **Client-side / browser** | Squoosh (Google), FormatPic, ImageSizeLab, PhotoRadar, cloud-convert.com | WebAssembly + Canvas API, all in-browser | Instant (1–3s), private, unlimited free, no account | Fewer formats, device-dependent speed |

**Key insight:** The winning trend in 2026 is **100% browser-based, private, unlimited, no-account** conversion. This aligns perfectly with this project's existing positioning ("100% client-side processing — your data never reaches any server").

### Notable competitor features
- **Formats that matter most:** JPG, PNG, WebP (base), plus AVIF, HEIC, GIF, BMP, TIFF, ICO, SVG (advanced).
- **Most-sought conversions:** PNG→JPG, JPG→PNG, WEBP→JPG, JPG→WEBP, PNG→WEBP, HEIC→JPG.
- **Quality slider** for lossy formats (JPG, WebP) — prevents quality degradation. *A must-have differentiator.*
- **Batch conversion + ZIP download** — photoformatlab/formatpic/image sizelab offer it; differentiator for power users.
- **Before/after size + dimensions** display after conversion.
- **Resize / compress workflow** is often bundled (Resize → Convert → Compress).

### Where we can win
1. **Privacy + speed** (client-side, like our data tools) — already our brand.
2. **Free with no daily limits** (Squoosh/FormatPic model, not the 25/day caps).
3. **Linked SEO pages per conversion** (PNG to JPG, JPG to WebP, …) — matches our existing tool-page strategy.
4. **Quality slider** that most simple tools lack.

---

## 2. Recommended Feature Set (MVP → v2)

### MVP — one universal "Image Converter" page
- Drag & drop / file picker (`.png`, `.jpg`, `.jpeg`, `.webp`, `.gif`, `.bmp`, optionally `.svg`, `.tiff`, `.ico`).
- Convert to: **PNG, JPG, WebP** (browser-native via Canvas `toBlob`, zero dependencies).
- Quality slider (60–100) shown for lossy targets (JPG/WebP).
- Show source & output dimensions + file size; download the result.
- Fully client-side; works in all 7 locales.

### v2 — dedicated SEO pages (recommended)
Individual tool pages per popular conversion, exactly like the existing `*-converter.astro` pattern:
- `png-to-jpg-converter`, `jpg-to-png-converter`, `webp-to-jpg-converter`, `jpg-to-webp-converter`, `png-to-webp-converter`
- Each with its own meta title/description/keywords + a blog guide (e.g. `png-to-jpg-converter-guide`).

### v3 — advanced (optional)
- **HEIC → JPG** (needs a decoder lib like `heic2any` or `libheif` — see §4).
- AVIF output, batch + ZIP download, compress/resize controls.

---

## 3. How This Project Adds Tools Today (the pattern to reuse)

The current pipeline is **text-in / table-out** (`InputPanel` → `PreviewTable`). A converter tool is added via these pieces:

| Concern | Current files | What an image tool changes |
|---|---|---|
| Format registry | `src/lib/converters/types.ts` (`Format` union, table-oriented `ParseResult`) | Image output is a **Blob/objectURL**, not headers+rows → need a new model |
| Converter logic | `src/lib/converters/*.ts` (`parseX` / `stringifyX`) | Add `src/lib/converters/image.ts` with `convertImage(file, target, quality): Promise<Blob>` |
| Per-tool content (SEO) | `src/i18n/content/types.ts` (`ConverterSlug`) + `src/i18n/content/{en,es,pt,de,fr,hi,ja}.ts` | Add slugs + full content in **all 7 locales** |
| UI strings | `src/i18n/ui/types.ts` (`HeaderStrings`) + `src/i18n/ui/*.ts` | Add nav labels × 7 locales |
| Page shims | `src/pages/{...}-converter.astro` + `src/pages/{de,es,fr,hi,ja,pt}/` (no `getStaticPaths`; 7 files per tool) | Add 7 shims per tool |
| Nav | `src/components/Header.astro` `converterLinks` (lines 18–24) | Add link |
| Home cards | `src/i18n/content/*.ts` `homeContent.features.cards` / `formats.cards` | Add card |
| Blog guide (en-only) | `src/i18n/pages/blog/guides/*.ts` + `guides/index.ts` + `BlogSlug` in `pages/types.ts` | Add guide (optional) |
| Sitemap | auto via `@astrojs/sitemap` | Nothing to do |

### ⚠️ The one structural mismatch
`PreviewTable.astro` renders a **sortable/editable table** from `ParseResult` (`headers`/`rows`) and `appState.ts` stores `structuredClone(parseResult)`. Images are **binary-in, binary-out** — the table/toolbar pipeline is irrelevant. **We must NOT reuse it.** Instead build a lightweight sibling:
- `ImageInput.astro` (file drop + picker, replacing the textarea).
- `ImagePreview.astro` (renders `<img src={objectURL}>`, shows dimensions/size, quality slider, download button).
- `imageState.ts` (or local component state) storing `{ blob, objectUrl, width, height, fileName, size }` — *not* a `ParseResult`.

`ConverterBar` (`src/components/ConverterBar.astro:6`) can be reused if the new formats are added to its `formats` array, **or** the image pages use a dedicated target-picker instead (simpler and avoids touching the data converters' shared bar).

---

## 4. Technical Approach — Client-side image conversion

**Recommended: use the browser Canvas API (`canvas.toBlob`) with zero new dependencies.** It natively writes **PNG, JPEG, WebP** in all modern browsers, is fully client-side, and needs no heavy WASM.

```
image.ts sketch
- createImageBitmap(file) OR new Image() + objectURL   // decode
- draw onto <canvas> at target dimensions             // resize handled free
- canvas.toBlob(blob => …, 'image/webp', quality)     // encode PNG/JPG/WebP
- wrap in Promise, return { blob, width, height }
```

| Format | Input (decode) | Output (encode) | Cost |
|---|---|---|---|
| PNG / JPG / WebP / GIF / BMP | Native browser support | Native via `toBlob` | **Free** (MVP) |
| SVG → PNG/JPG/WebP | Native (`<img>` with SVG src) | Native | Free |
| TIFF / ICO | Not natively decodable in all browsers | — | v3 (lib) |
| **HEIC** (iPhone) | Not native — needs `heic2any` or `libheif` WASM | — | v3 (adds ~100–300 KB dep) |
| AVIF **output** | Native decode | `toBlob('image/avif')` partial (Chrome only) | v3 |

**Bundle size:** Canvas API is built into the browser — no `sharp` (server-only, doesn't work in browser), no heavy WASM for MVP. Perfect for the Cloudflare Workers static deploy (all processing on client, zero server cost).

---

## 5. Implementation Checklist

### Phase A — MVP single image converter
- [ ] `src/lib/converters/image.ts` — `convertImage(file: Blob, target: 'PNG'|'JPG'|'WEBP', quality?: number): Promise<{ blob: Blob; objectUrl: string; width: number; height: number; size: number }>` + `readImageDimensions()`.
- [ ] `src/components/ImageInput.astro` — drag & drop + file input (`accept=".png,.jpg,.jpeg,.webp,.gif,.bmp,.svg"`), pattern borrowed from `InputPanel.astro` (see `readBinaryFile` at line 235).
- [ ] `src/components/ImagePreview.astro` — preview `<img>`, dimensions/size readout, quality slider, download button (reuse `downloadBlob` from `src/lib/exportUtils.ts`).
- [ ] `src/components/ImageConverterLanding.astro` — layout mirroring `ConverterLanding.astro` but swapping `ConverterBar/InputPanel/PreviewTable` for the image components.
- [ ] Content: add `ConverterSlug` (`'image-converter'`) to `src/i18n/content/types.ts`; add `ConverterContent` to **all 7** `src/i18n/content/*.ts`; add nav label to `HeaderStrings` + all 7 `src/i18n/ui/*.ts`; add link in `Header.astro`.
- [ ] Pages: `src/pages/image-converter.astro` + `src/pages/{de,es,fr,hi,ja,pt}/image-converter.astro`.
- [ ] Home: add a feature/format card in `homeContent` × 7 locales.

### Phase B — dedicated per-conversion SEO pages (recommended next)
- [ ] Repeat the Phase A page/content/nav wiring for: `png-to-jpg`, `jpg-to-png`, `webp-to-jpg`, `jpg-to-webp`, `png-to-webp`.
- [ ] Each page renders the same `ImageConverterLanding` (just different `from`/`to` defaults + unique SEO content).
- [ ] (Optional) Blog guides: `src/i18n/pages/blog/guides/png-to-jpg-converter-guide.ts` etc., register in `guides/index.ts`, add slugs to `BlogSlug` (`src/i18n/pages/types.ts`), page shims under `src/pages/blog/`.

### Phase C — advanced (optional)
- [ ] HEIC → JPG via `heic2any` (adds ~100 KB; must be careful with Cloudflare bundle).
- [ ] Batch upload + ZIP download (`jszip`).
- [ ] AVIF output (progressive enhancement, Chrome-only `toBlob`).
- [ ] Resize + compress controls (dimension presets, quality slider for JPG/WebP).

---

## 6. Decisions to Make Before Coding

1. **Single universal page vs. per-conversion pages first?** Recommendation: start with one universal *Image Converter* page to validate, then add the 5 SEO pages in Phase B (they're cheap — same component, new content).
2. **Reuse `ConverterBar` or a dedicated target picker?** Recommendation: dedicated picker on image pages to keep the data-converters' shared bar untouched.
3. **HEIC support now or later?** Recommendation: later (v3). It's the #1 iPhone pain point and a strong SEO keyword, but adds a real dependency and bundle weight.
4. **Quality slider default** — 80 (WebP/JPG), like Squoosh.
5. **Do NOT touch** the existing `ParseResult`/`PreviewTable`/`appState` pipeline — keep image handling fully separate.

---

## 7. Key Files Reference

| Path | Role |
|---|---|
| `src/lib/converters/types.ts` | `Format` union + `ParseResult` (table-only — image tool bypasses) |
| `src/lib/converters/index.ts` | Converter barrel |
| `src/lib/exportUtils.ts` | `downloadBlob()` — reuse for image download |
| `src/components/ConverterLanding.astro` | Template for `ImageConverterLanding` |
| `src/components/ConverterBar.astro` | Shared from/to selectors (image tool may not reuse) |
| `src/components/InputPanel.astro` | File-reading pattern (`readBinaryFile`, line 235) to copy |
| `src/components/Header.astro` | `converterLinks` array (lines 18–24) — add nav entry |
| `src/i18n/content/types.ts` + `content/{en,es,pt,de,fr,hi,ja}.ts` | Per-tool SEO content (add in all 7) |
| `src/i18n/ui/types.ts` + `ui/*.ts` | Header labels (all 7 locales) |
| `src/pages/*-converter.astro` + `pages/{de,es,fr,hi,ja,pt}/` | Page shims (7 per tool) |
| `src/i18n/pages/blog/guides/` | Optional blog guides (en only) |
| `package.json` | No image lib yet — Canvas API suffices for MVP |
