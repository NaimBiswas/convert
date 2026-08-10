import type { ConverterContent, ConverterContentMap } from './types';

type ConvertSlug = 'png-to-jpg' | 'jpg-to-png' | 'webp-to-jpg' | 'jpg-to-webp' | 'png-to-webp';
type MetaSlug = 'image-metadata-viewer' | 'remove-image-metadata';
export type ImageSlug = 'image-converter' | ConvertSlug | MetaSlug;
export type ImageMap = Pick<ConverterContentMap, ImageSlug>;
type ConverterImageMap = Pick<ConverterContentMap, 'image-converter' | ConvertSlug>;
type MetaImageMap = Pick<ConverterContentMap, MetaSlug>;

interface ToolCopy {
  title: string;
  description: string;
  keywords: string;
  h1: string;
  desc: string;
}

interface MetaToolCopy extends ToolCopy {
  whyHeading: string;
  whyNote: string;
  howHeading: string;
  howSteps: string[];
  featuresHeading: string;
  features: string[];
}

interface ImageCopy {
  universal: ToolCopy;
  tools: Record<ConvertSlug, ToolCopy>;
  meta: Record<MetaSlug, MetaToolCopy>;
  whyHeading: string;
  whyNote: Record<string, string>;
  howHeading: string;
  howSteps: string[];
  featuresHeading: string;
  features: string[];
}

const PAIR: Record<ConvertSlug, { from: string; to: string }> = {
  'png-to-jpg': { from: 'PNG', to: 'JPG' },
  'jpg-to-png': { from: 'JPG', to: 'PNG' },
  'webp-to-jpg': { from: 'WEBP', to: 'JPG' },
  'jpg-to-webp': { from: 'JPG', to: 'WEBP' },
  'png-to-webp': { from: 'PNG', to: 'WEBP' },
};

function build(copy: ImageCopy): ConverterImageMap {
  const toolSlugs = Object.keys(PAIR) as ConvertSlug[];

  const universal: ConverterContent = {
    meta: {
      title: copy.universal.title,
      description: copy.universal.description,
      keywords: copy.universal.keywords,
    },
    h1: copy.universal.h1,
    desc: copy.universal.desc,
    from: 'Any Image',
    to: 'JPG',
    slug: 'image-converter',
    path: '/image-converter',
    sections: [
      { heading: copy.whyHeading, blocks: [{ type: 'p', html: copy.whyNote['universal'] }] },
      { heading: copy.howHeading, blocks: [{ type: 'list', ordered: true, items: copy.howSteps }] },
      { heading: copy.featuresHeading, blocks: [{ type: 'list', ordered: false, items: copy.features }] },
    ],
  };

  const tools = toolSlugs.reduce<Record<ConvertSlug, ConverterContent>>((acc, slug) => {
    const t = copy.tools[slug];
    const { from, to } = PAIR[slug];
    acc[slug] = {
      meta: { title: t.title, description: t.description, keywords: t.keywords },
      h1: t.h1,
      desc: t.desc,
      from,
      to,
      slug,
      path: `/${slug}-converter`,
      sections: [
        { heading: copy.whyHeading, blocks: [{ type: 'p', html: copy.whyNote[slug] }] },
        { heading: copy.howHeading, blocks: [{ type: 'list', ordered: true, items: copy.howSteps }] },
      ],
    };
    return acc;
  }, {} as Record<ConvertSlug, ConverterContent>);

  return { 'image-converter': universal, ...tools };
}

function buildMeta(copy: ImageCopy): MetaImageMap {
  const METAS: MetaSlug[] = ['image-metadata-viewer', 'remove-image-metadata'];
  const out = {} as MetaImageMap;
  for (const slug of METAS) {
    const t = copy.meta[slug];
    out[slug] = {
      meta: { title: t.title, description: t.description, keywords: t.keywords },
      h1: t.h1,
      desc: t.desc,
      from: 'Image',
      to: slug === 'image-metadata-viewer' ? 'Metadata' : 'Clean Image',
      slug,
      path: `/${slug}`,
      sections: [
        { heading: t.whyHeading, blocks: [{ type: 'p', html: t.whyNote }] },
        { heading: t.howHeading, blocks: [{ type: 'list', ordered: true, items: t.howSteps }] },
        { heading: t.featuresHeading, blocks: [{ type: 'list', ordered: false, items: t.features }] },
      ],
    };
  }
  return out;
}

export { build, buildMeta, PAIR };

const enCopy: ImageCopy = {
  universal: {
    title: 'Image Converter — Convert PNG, JPG & WebP Online Free',
    description:
      'Convert images to PNG, JPG, or WebP online free. No upload — 100% browser-based. Quality control, dimension preview, and instant download.',
    keywords: 'image converter, png to jpg, jpg to png, webp converter, convert image online, image format converter',
    h1: 'Image Converter',
    desc: 'Convert your images between PNG, JPG, and WebP — instantly, right in your browser. Adjust quality for smaller files, preview the result, and download. No uploads, no servers, no limits.',
  },
  tools: {
    'png-to-jpg': {
      title: 'PNG to JPG Converter — Convert PNG to JPG Online Free',
      description:
        'Convert PNG to JPG online free. Turn PNG images and screenshots into smaller JPEG files. Quality control, instant preview, no upload. 100% browser-based.',
      keywords: 'png to jpg, png to jpg converter, convert png to jpg, png to jpeg, png to jpg online',
      h1: 'PNG to JPG Converter',
      desc: 'Convert your PNG images to JPG instantly in your browser. JPG files are smaller and universally supported — ideal for photos, sharing, and the web.',
    },
    'jpg-to-png': {
      title: 'JPG to PNG Converter — Convert JPG to PNG Online Free',
      description:
        'Convert JPG to PNG online free. Turn JPEG photos into lossless PNG images with full quality. No upload, instant conversion, 100% browser-based.',
      keywords: 'jpg to png, jpeg to png, jpg to png converter, convert jpg to png, jpg to png online',
      h1: 'JPG to PNG Converter',
      desc: 'Convert your JPG photos to PNG instantly — lossless, high quality, in your browser. Great for editing, printing, or when you need the highest fidelity image.',
    },
    'webp-to-jpg': {
      title: 'WebP to JPG Converter — Convert WebP to JPG Online Free',
      description:
        'Convert WebP to JPG online free. Turn WebP images into widely compatible JPEG files. No upload, instant conversion, quality control. 100% browser-based.',
      keywords: 'webp to jpg, webp to jpeg, webp to jpg converter, convert webp to jpg, webp to jpg online',
      h1: 'WebP to JPG Converter',
      desc: 'Convert WebP images to JPG instantly in your browser. WebP files sometimes can\u2019t be opened by older apps — this converter makes them universally compatible.',
    },
    'jpg-to-webp': {
      title: 'JPG to WebP Converter — Convert JPG to WebP Online Free',
      description:
        'Convert JPG to WebP online free. Shrink photos with better compression and faster page loads. Quality control, instant preview, no upload. 100% browser-based.',
      keywords: 'jpg to webp, jpeg to webp, jpg to webp converter, convert jpg to webp, jpg to webp online',
      h1: 'JPG to WebP Converter',
      desc: 'Convert JPG to WebP instantly in your browser and get smaller, faster-loading images for the web. WebP compresses better than JPG at the same quality.',
    },
    'png-to-webp': {
      title: 'PNG to WebP Converter — Convert PNG to WebP Online Free',
      description:
        'Convert PNG to WebP online free. Get smaller web images while keeping sharp edges and transparency. No upload, instant conversion. 100% browser-based.',
      keywords: 'png to webp, png to webp converter, convert png to webp, png to webp online, webp from png',
      h1: 'PNG to WebP Converter',
      desc: 'Convert PNG to WebP instantly in your browser. WebP keeps transparency while producing files far smaller than PNG — the ideal format for web graphics and logos.',
    },
  },
  meta: {
    'image-metadata-viewer': {
      title: 'Image Metadata Viewer — See EXIF, GPS & More Online Free',
      description:
        'View image metadata (EXIF, GPS, IPTC, XMP, ICC) online free. Inspect camera settings, GPS coordinates and hidden file info. No upload, 100% browser-based.',
      keywords: 'image metadata viewer, exif viewer online, view metadata, exif data viewer, gps metadata, photo metadata viewer',
      h1: 'Image Metadata Viewer',
      desc: 'Drop an image to see every piece of hidden metadata it carries — camera model, shutter speed, GPS coordinates, timestamps, and software. Everything is read locally in your browser; nothing is ever uploaded.',
      whyHeading: 'What Is Image Metadata?',
      whyNote:
        'Every photo taken on a phone or camera is wrapped in hidden metadata. The most common type is <strong>EXIF</strong> — camera settings like make, model, ISO, focal length, and often the exact <strong>GPS coordinates</strong> where the shot was taken. Photos may also carry <strong>IPTC</strong> (captions, keywords, copyright), <strong>XMP</strong> (Adobe metadata), and <strong>ICC color profiles</strong>. This metadata is invisible in normal viewers — which is exactly why it is useful to inspect it, and often wise to remove it before sharing.',
      howHeading: 'How to View Metadata',
      howSteps: [
        'Drag &amp; drop an image or click <strong>browse</strong>',
        'Wait a moment while the metadata is read locally',
        'Browse the metadata table — EXIF, GPS, IPTC, XMP, and more',
        'Export the metadata as JSON if you need a record',
      ],
      featuresHeading: 'Features',
      features: [
        'Reads EXIF, GPS, IPTC, XMP, ICC, and PNG text metadata',
        'GPS coordinates shown as readable latitude and longitude',
        'Works with JPG, PNG, and WebP',
        'Export all metadata as a JSON download',
        '100% browser-based — the image never leaves your device',
      ],
    },
    'remove-image-metadata': {
      title: 'Remove Image Metadata — Strip EXIF & GPS Online Free',
      description:
        'Remove image metadata (EXIF, GPS, IPTC, XMP) online free. Strip hidden location and camera data before sharing photos. Lossless, no upload, 100% browser-based.',
      keywords: 'remove metadata from image, strip exif, remove exif online, remove gps data, strip metadata from photo, exif remover',
      h1: 'Remove Image Metadata',
      desc: 'Remove the hidden metadata from your photos — GPS location, camera details, timestamps, and more — right in your browser. The image pixels stay untouched; only the metadata is stripped.',
      whyHeading: 'Why Remove Metadata?',
      whyNote:
        'Photos taken on phones contain more data than you might think. The embedded <strong>EXIF</strong> block records the exact <strong>GPS coordinates</strong>, timestamp, camera make and model, and related details. Share such a photo and that information travels with it — anyone can see exactly where and when it was taken. Removing metadata before publishing protects your privacy and prepares images for print or submissions where embedded data is unwanted.',
      howHeading: 'How to Remove Metadata',
      howSteps: [
        'Drag &amp; drop a JPG, PNG, or WebP image',
        'The tool detects any hidden metadata',
        'Click <strong>Remove metadata</strong>',
        'Download the clean image — pixels are unchanged',
      ],
      featuresHeading: 'Features',
      features: [
        'Strips EXIF, GPS, IPTC, XMP, and comments',
        'Lossless — image pixels are never re-encoded',
        'Shows exactly what was removed',
        'Works with JPG, PNG, and WebP',
        'All processing happens in your browser',
      ],
    },
  },
  whyHeading: 'Why Convert Images?',
  whyNote: {
    universal:
      'Different platforms need different formats. Websites use <strong>WebP</strong> for smaller, faster-loading images. Print workflows and cameras use <strong>JPG</strong>. Logos and graphics with transparency need <strong>PNG</strong>. Because everything runs in your browser, your images never leave your device.',
    'png-to-jpg':
      'PNG is lossless and great for graphics, but PNG files are often much larger than JPG. Converting to JPG shrinks file size significantly. Note: JPG does not support transparency — transparent areas become white.',
    'jpg-to-png':
      'PNG is a lossless format, so every pixel is preserved exactly. Converting a JPG to PNG avoids quality loss during repeated edits and prepares files for print. PNG files are larger, so use it when quality matters most.',
    'webp-to-jpg':
      'WebP is a modern, efficient format used by websites, but not every app or device supports it. Converting WebP to JPG guarantees your image opens anywhere — email, editors, and social media.',
    'jpg-to-webp':
      'WebP provides up to 25\u201335% smaller files than JPG at the same visual quality — meaning faster page loads, better Core Web Vitals, and lower bandwidth for your website.',
    'png-to-webp':
      'PNG files are lossless but heavy. WebP offers similar quality with dramatically smaller files while still supporting transparency — so web graphics load faster without losing sharp edges.',
  },
  howHeading: 'How to Convert',
  howSteps: [
    'Drag &amp; drop an image or click <strong>browse</strong> to pick a file',
    'Choose your target format: <strong>PNG</strong>, <strong>JPG</strong>, or <strong>WebP</strong>',
    'Adjust the <strong>quality slider</strong> for JPG and WebP',
    'Click <strong>Convert</strong>, preview the result, then download',
  ],
  featuresHeading: 'Features',
  features: [
    'Convert to PNG, JPG, or WebP — no software needed',
    'Quality slider to balance file size and clarity',
    'Dimension preview and file size readout',
    'Supports PNG, JPG, WebP, GIF, BMP, SVG, AVIF, and ICO input',
    '100% browser-based — images never uploaded',
  ],
};

const deCopy: ImageCopy = {
  universal: {
    title: 'Bildkonverter — PNG, JPG & WebP online kostenlos konvertieren',
    description:
      'Bilder online kostenlos in PNG, JPG oder WebP konvertieren. Kein Upload — 100% im Browser. Qualitätsregler, Vorschau und sofortiger Download.',
    keywords: 'bildkonverter, png zu jpg, jpg zu png, webp konverter, bild online konvertieren, bildformat konverter',
    h1: 'Bildkonverter',
    desc: 'Konvertieren Sie Ihre Bilder zwischen PNG, JPG und WebP — sofort, direkt im Browser. Passen Sie die Qualität für kleinere Dateien an, sehen Sie sich das Ergebnis an und laden Sie es herunter. Keine Uploads, keine Server, keine Limits.',
  },
  tools: {
    'png-to-jpg': {
      title: 'PNG zu JPG Konverter — PNG online kostenlos in JPG umwandeln',
      description:
        'PNG online kostenlos in JPG umwandeln. PNG-Bilder und Screenshots in kleinere JPEG-Dateien verwandeln. Qualitätsregler, Vorschau, kein Upload. 100% im Browser.',
      keywords: 'png zu jpg, png zu jpg konverter, png in jpg umwandeln, png zu jpeg, png zu jpg online',
      h1: 'PNG zu JPG Konverter',
      desc: 'Konvertieren Sie Ihre PNG-Bilder sofort im Browser in JPG. JPG-Dateien sind kleiner und universell unterstützt — ideal für Fotos, das Teilen und das Web.',
    },
    'jpg-to-png': {
      title: 'JPG zu PNG Konverter — JPG online kostenlos in PNG umwandeln',
      description:
        'JPG online kostenlos in PNG umwandeln. JPEG-Fotos in verlustfreie PNG-Bilder mit voller Qualität verwandeln. Kein Upload, sofortige Konvertierung, 100% im Browser.',
      keywords: 'jpg zu png, jpeg zu png, jpg zu png konverter, jpg in png umwandeln, jpg zu png online',
      h1: 'JPG zu PNG Konverter',
      desc: 'Konvertieren Sie Ihre JPG-Fotos sofort in PNG — verlustfrei, in hoher Qualität, im Browser. Ideal für Bearbeitung, Druck oder maximale Bildqualität.',
    },
    'webp-to-jpg': {
      title: 'WebP zu JPG Konverter — WebP online kostenlos in JPG umwandeln',
      description:
        'WebP online kostenlos in JPG umwandeln. WebP-Bilder in weit verbreitete JPEG-Dateien verwandeln. Kein Upload, sofortige Konvertierung, Qualitätsregler. 100% im Browser.',
      keywords: 'webp zu jpg, webp zu jpeg, webp zu jpg konverter, webp in jpg umwandeln, webp zu jpg online',
      h1: 'WebP zu JPG Konverter',
      desc: 'Konvertieren Sie WebP-Bilder sofort im Browser in JPG. WebP-Dateien lassen sich nicht immer in älteren Apps öffnen — dieser Konverter macht sie universell kompatibel.',
    },
    'jpg-to-webp': {
      title: 'JPG zu WebP Konverter — JPG online kostenlos in WebP umwandeln',
      description:
        'JPG online kostenlos in WebP umwandeln. Fotos mit besserer Komprimierung und schnelleren Ladezeiten verkleinern. Qualitätsregler, Vorschau, kein Upload. 100% im Browser.',
      keywords: 'jpg zu webp, jpeg zu webp, jpg zu webp konverter, jpg in webp umwandeln, jpg zu webp online',
      h1: 'JPG zu WebP Konverter',
      desc: 'Konvertieren Sie JPG sofort im Browser in WebP und erhalten Sie kleinere, schneller ladende Bilder für das Web. WebP komprimiert bei gleicher Qualität besser als JPG.',
    },
    'png-to-webp': {
      title: 'PNG zu WebP Konverter — PNG online kostenlos in WebP umwandeln',
      description:
        'PNG online kostenlos in WebP umwandeln. Kleinere Web-Bilder mit scharfen Kanten und Transparenz. Kein Upload, sofortige Konvertierung. 100% im Browser.',
      keywords: 'png zu webp, png zu webp konverter, png in webp umwandeln, png zu webp online, webp aus png',
      h1: 'PNG zu WebP Konverter',
      desc: 'Konvertieren Sie PNG sofort im Browser in WebP. WebP behält Transparenz bei und erzeugt deutlich kleinere Dateien als PNG — das ideale Format für Webgrafiken und Logos.',
    },
  },
  meta: {
    'image-metadata-viewer': {
      title: 'Bild-Metadaten ansehen — EXIF, GPS & mehr online kostenlos',
      description:
        'Bild-Metadaten (EXIF, GPS, IPTC, XMP, ICC) online kostenlos ansehen. Kameraeinstellungen, GPS-Koordinaten und versteckte Dateiinfos prüfen. Kein Upload, 100% im Browser.',
      keywords: 'bild metadaten ansehen, exif anzeigen online, metadaten lesen, exif daten anzeigen, gps metadaten, foto metadaten ansehen',
      h1: 'Bild-Metadaten ansehen',
      desc: 'Ziehen Sie ein Bild hinein, um alle versteckten Metadaten zu sehen — Kameramodell, Verschlusszeit, GPS-Koordinaten, Zeitstempel und Software. Alles wird lokal im Browser gelesen; nichts wird hochgeladen.',
      whyHeading: 'Was sind Bild-Metadaten?',
      whyNote:
        'Jedes Foto von Handy oder Kamera enthält versteckte Metadaten. Am häufigsten ist <strong>EXIF</strong> — Kameraeinstellungen wie Hersteller, Modell, ISO, Brennweite und oft die genauen <strong>GPS-Koordinaten</strong> des Aufnahmeorts. Fotos können außerdem <strong>IPTC</strong> (Bildunterschriften, Stichwörter, Urheberrecht), <strong>XMP</strong> (Adobe-Metadaten) und <strong>ICC-Farbprofile</strong> tragen. Diese Daten sind in normalen Viewern unsichtbar — deshalb lohnt es sich, sie zu prüfen, und oft ist es ratsam, sie vor dem Teilen zu entfernen.',
      howHeading: 'So sehen Sie Metadaten',
      howSteps: [
        'Bild per Drag &amp; drop hineinziehen oder <strong>Durchsuchen</strong> klicken',
        'Einen Moment warten, während die Metadaten lokal gelesen werden',
        'Die Metadaten-Tabelle durchsehen — EXIF, GPS, IPTC, XMP und mehr',
        'Metadaten bei Bedarf als JSON exportieren',
      ],
      featuresHeading: 'Funktionen',
      features: [
        'Liest EXIF, GPS, IPTC, XMP, ICC und PNG-Textmetadaten',
        'GPS-Koordinaten als lesbare Breiten- und Längengrade',
        'Funktioniert mit JPG, PNG und WebP',
        'Export aller Metadaten als JSON-Download',
        '100% im Browser — das Bild verlässt nie Ihr Gerät',
      ],
    },
    'remove-image-metadata': {
      title: 'Bild-Metadaten entfernen — EXIF & GPS online kostenlos löschen',
      description:
        'Bild-Metadaten (EXIF, GPS, IPTC, XMP) online kostenlos entfernen. Versteckte Standort- und Kamera-Daten vor dem Teilen löschen. Verlustfrei, kein Upload, 100% im Browser.',
      keywords: 'metadaten aus bild entfernen, exif entfernen, exif online löschen, gps daten entfernen, metadaten aus foto entfernen, exif entferner',
      h1: 'Bild-Metadaten entfernen',
      desc: 'Entfernen Sie die versteckten Metadaten aus Ihren Fotos — GPS-Standort, Kameradetails, Zeitstempel und mehr — direkt im Browser. Die Pixel bleiben unverändert; nur die Metadaten werden entfernt.',
      whyHeading: 'Warum Metadaten entfernen?',
      whyNote:
        'Handyfotos enthalten mehr Daten, als Sie denken. Der eingebettete <strong>EXIF</strong>-Block speichert die genauen <strong>GPS-Koordinaten</strong>, den Zeitstempel, Kamera-Marke und -Modell und weitere Details. Teilen Sie ein solches Foto, reisen diese Informationen mit — jeder kann sehen, wo und wann es aufgenommen wurde. Das Entfernen von Metadaten vor der Veröffentlichung schützt Ihre Privatsphäre und bereitet Bilder für Druck oder Einreichungen vor, bei denen eingebettete Daten unerwünscht sind.',
      howHeading: 'So entfernen Sie Metadaten',
      howSteps: [
        'Ein JPG-, PNG- oder WebP-Bild per Drag &amp; drop hineinziehen',
        'Das Tool erkennt versteckte Metadaten',
        'Auf <strong>Metadaten entfernen</strong> klicken',
        'Das bereinigte Bild herunterladen — Pixel bleiben unverändert',
      ],
      featuresHeading: 'Funktionen',
      features: [
        'Entfernt EXIF, GPS, IPTC, XMP und Kommentare',
        'Verlustfrei — Pixel werden nie neu kodiert',
        'Zeigt genau, was entfernt wurde',
        'Funktioniert mit JPG, PNG und WebP',
        'Die gesamte Verarbeitung erfolgt im Browser',
      ],
    },
  },
  whyHeading: 'Warum Bilder konvertieren?',
  whyNote: {
    universal:
      'Verschiedene Plattformen benötigen verschiedene Formate. Websites verwenden <strong>WebP</strong> für kleinere, schneller ladende Bilder. Druckabläufe und Kameras verwenden <strong>JPG</strong>. Logos und Grafiken mit Transparenz benötigen <strong>PNG</strong>. Da alles im Browser läuft, verlassen Ihre Bilder niemals Ihr Gerät.',
    'png-to-jpg':
      'PNG ist verlustfrei und ideal für Grafiken, aber PNG-Dateien sind oft viel größer als JPG. Die Umwandlung in JPG reduziert die Dateigröße deutlich. Hinweis: JPG unterstützt keine Transparenz — transparente Bereiche werden weiß.',
    'jpg-to-png':
      'PNG ist ein verlustfreies Format — jeder Pixel bleibt exakt erhalten. Die Umwandlung von JPG in PNG verhindert Qualitätsverluste bei wiederholten Bearbeitungen und bereitet Dateien für den Druck vor. PNG-Dateien sind größer, nutzen Sie es also, wenn Qualität am wichtigsten ist.',
    'webp-to-jpg':
      'WebP ist ein modernes, effizientes Format für Websites, aber nicht jede App oder jedes Gerät unterstützt es. Die Umwandlung in JPG stellt sicher, dass Ihr Bild überall geöffnet werden kann — E-Mail, Editor und soziale Medien.',
    'jpg-to-webp':
      'WebP erzeugt bei gleicher visueller Qualität bis zu 25\u201335% kleinere Dateien als JPG — das bedeutet schnellere Ladezeiten, bessere Core Web Vitals und geringere Bandbreite für Ihre Website.',
    'png-to-webp':
      'PNG-Dateien sind verlustfrei, aber schwer. WebP bietet ähnliche Qualität mit deutlich kleineren Dateien und unterstützt weiterhin Transparenz — Webgrafiken laden schneller, ohne scharfe Kanten zu verlieren.',
  },
  howHeading: 'So konvertieren Sie',
  howSteps: [
    'Ziehen Sie ein Bild per Drag &amp; Drop hinein oder klicken Sie auf <strong>Durchsuchen</strong>',
    'Wählen Sie Ihr Zielformat: <strong>PNG</strong>, <strong>JPG</strong> oder <strong>WebP</strong>',
    'Passen Sie den <strong>Qualitätsregler</strong> für JPG und WebP an',
    'Klicken Sie auf <strong>Konvertieren</strong>, sehen Sie sich das Ergebnis an und laden Sie es herunter',
  ],
  featuresHeading: 'Funktionen',
  features: [
    'Konvertieren in PNG, JPG oder WebP — ganz ohne Software',
    'Qualitätsregler für Dateigröße und Klarheit',
    'Vorschau der Maße und Dateigröße',
    'Unterstützt PNG, JPG, WebP, GIF, BMP, SVG, AVIF und ICO',
    '100% im Browser — Bilder werden nie hochgeladen',
  ],
};

const esCopy: ImageCopy = {
  universal: {
    title: 'Conversor de Imágenes — Convierte PNG, JPG y WebP gratis online',
    description:
      'Convierte imágenes a PNG, JPG o WebP gratis online. Sin subidas — 100% en tu navegador. Control de calidad, vista previa y descarga instantánea.',
    keywords: 'conversor de imágenes, png a jpg, jpg a png, conversor webp, convertir imagen online, conversor de formato de imagen',
    h1: 'Conversor de Imágenes',
    desc: 'Convierte tus imágenes entre PNG, JPG y WebP — al instante, en tu navegador. Ajusta la calidad para archivos más pequeños, previsualiza el resultado y descarga. Sin subidas, sin servidores, sin límites.',
  },
  tools: {
    'png-to-jpg': {
      title: 'Conversor de PNG a JPG — Convierte PNG a JPG gratis online',
      description:
        'Convierte PNG a JPG gratis online. Transforma imágenes y capturas PNG en archivos JPEG más pequeños. Control de calidad, vista previa instantánea, sin subidas. 100% en tu navegador.',
      keywords: 'png a jpg, conversor png a jpg, convertir png a jpg, png a jpeg, png a jpg online',
      h1: 'Conversor de PNG a JPG',
      desc: 'Convierte tus imágenes PNG a JPG al instante en tu navegador. Los archivos JPG son más pequeños y compatibles con todo — ideales para fotos, compartir y la web.',
    },
    'jpg-to-png': {
      title: 'Conversor de JPG a PNG — Convierte JPG a PNG gratis online',
      description:
        'Convierte JPG a PNG gratis online. Transforma fotos JPEG en imágenes PNG sin pérdida y a plena calidad. Sin subidas, conversión instantánea, 100% en tu navegador.',
      keywords: 'jpg a png, jpeg a png, conversor jpg a png, convertir jpg a png, jpg a png online',
      h1: 'Conversor de JPG a PNG',
      desc: 'Convierte tus fotos JPG a PNG al instante — sin pérdida, en alta calidad, en tu navegador. Ideal para editar, imprimir o cuando necesitas la máxima fidelidad.',
    },
    'webp-to-jpg': {
      title: 'Conversor de WebP a JPG — Convierte WebP a JPG gratis online',
      description:
        'Convierte WebP a JPG gratis online. Transforma imágenes WebP en archivos JPEG ampliamente compatibles. Sin subidas, conversión instantánea, control de calidad. 100% en tu navegador.',
      keywords: 'webp a jpg, webp a jpeg, conversor webp a jpg, convertir webp a jpg, webp a jpg online',
      h1: 'Conversor de WebP a JPG',
      desc: 'Convierte imágenes WebP a JPG al instante en tu navegador. Algunas aplicaciones antiguas no abren WebP — este conversor las hace universalmente compatibles.',
    },
    'jpg-to-webp': {
      title: 'Conversor de JPG a WebP — Convierte JPG a WebP gratis online',
      description:
        'Convierte JPG a WebP gratis online. Reduce fotos con mejor compresión y carga más rápida. Control de calidad, vista previa, sin subidas. 100% en tu navegador.',
      keywords: 'jpg a webp, jpeg a webp, conversor jpg a webp, convertir jpg a webp, jpg a webp online',
      h1: 'Conversor de JPG a WebP',
      desc: 'Convierte JPG a WebP al instante en tu navegador y obtén imágenes más pequeñas y rápidas para la web. WebP comprime mejor que JPG a igual calidad.',
    },
    'png-to-webp': {
      title: 'Conversor de PNG a WebP — Convierte PNG a WebP gratis online',
      description:
        'Convierte PNG a WebP gratis online. Obtén imágenes web más pequeñas manteniendo bordes nítidos y transparencia. Sin subidas, conversión instantánea. 100% en tu navegador.',
      keywords: 'png a webp, conversor png a webp, convertir png a webp, png a webp online, webp desde png',
      h1: 'Conversor de PNG a WebP',
      desc: 'Convierte PNG a WebP al instante en tu navegador. WebP mantiene la transparencia con archivos mucho más pequeños que PNG — el formato ideal para gráficos y logos web.',
    },
  },
  meta: {
    'image-metadata-viewer': {
      title: 'Visor de Metadatos de Imagen — Ver EXIF, GPS y más gratis online',
      description:
        'Ve los metadatos de imagen (EXIF, GPS, IPTC, XMP, ICC) gratis online. Inspecciona ajustes de cámara, coordenadas GPS e información oculta. Sin subidas, 100% en tu navegador.',
      keywords: 'visor de metadatos de imagen, visor exif online, ver metadatos, ver datos exif, metadatos gps, visor de metadatos de fotos',
      h1: 'Visor de Metadatos de Imagen',
      desc: 'Suelta una imagen para ver todos los metadatos ocultos que contiene: modelo de cámara, velocidad de obturación, coordenadas GPS, fechas y software. Todo se lee localmente en tu navegador; nunca se sube nada.',
      whyHeading: '¿Qué son los metadatos de imagen?',
      whyNote:
        'Toda foto tomada con un móvil o cámara lleva metadatos ocultos. El tipo más común es <strong>EXIF</strong>: ajustes de cámara como fabricante, modelo, ISO, distancia focal y a menudo las <strong>coordenadas GPS</strong> exactas del lugar donde se tomó. Las fotos también pueden tener <strong>IPTC</strong> (pies de foto, palabras clave, derechos de autor), <strong>XMP</strong> (metadatos de Adobe) y <strong>perfiles de color ICC</strong>. Estos datos son invisibles en los visores normales, por lo que conviene inspeccionarlos y, a menudo, eliminarlos antes de compartir.',
      howHeading: 'Cómo ver los metadatos',
      howSteps: [
        'Arrastra y suelta una imagen o haz clic en <strong>explorar</strong>',
        'Espera un momento mientras se leen los metadatos localmente',
        'Revisa la tabla de metadatos: EXIF, GPS, IPTC, XMP y más',
        'Exporta los metadatos como JSON si necesitas un registro',
      ],
      featuresHeading: 'Características',
      features: [
        'Lee metadatos EXIF, GPS, IPTC, XMP, ICC y texto de PNG',
        'Coordenadas GPS como latitud y longitud legibles',
        'Funciona con JPG, PNG y WebP',
        'Exporta todos los metadatos como descarga JSON',
        '100% en tu navegador: la imagen nunca sale de tu dispositivo',
      ],
    },
    'remove-image-metadata': {
      title: 'Eliminar Metadatos de Imagen — Quitar EXIF y GPS gratis online',
      description:
        'Elimina metadatos de imagen (EXIF, GPS, IPTC, XMP) gratis online. Quita la ubicación oculta y los datos de cámara antes de compartir fotos. Sin pérdida, sin subidas, 100% en tu navegador.',
      keywords: 'eliminar metadatos de imagen, quitar exif, eliminar exif online, quitar datos gps, quitar metadatos de foto, eliminador de exif',
      h1: 'Eliminar Metadatos de Imagen',
      desc: 'Elimina los metadatos ocultos de tus fotos — ubicación GPS, detalles de cámara, fechas y más — directamente en tu navegador. Los píxeles permanecen intactos; solo se eliminan los metadatos.',
      whyHeading: '¿Por qué eliminar metadatos?',
      whyNote:
        'Las fotos de móvil contienen más datos de los que imaginas. El bloque <strong>EXIF</strong> incrustado registra las <strong>coordenadas GPS</strong> exactas, la fecha, la marca y el modelo de la cámara y otros detalles. Si compartes esa foto, la información viaja con ella: cualquiera puede ver dónde y cuándo se tomó. Eliminar los metadatos antes de publicar protege tu privacidad y prepara las imágenes para impresión o envíos donde no se desea información incrustada.',
      howHeading: 'Cómo eliminar metadatos',
      howSteps: [
        'Arrastra y suelta una imagen JPG, PNG o WebP',
        'La herramienta detecta los metadatos ocultos',
        'Haz clic en <strong>Eliminar metadatos</strong>',
        'Descarga la imagen limpia: los píxeles no cambian',
      ],
      featuresHeading: 'Características',
      features: [
        'Elimina EXIF, GPS, IPTC, XMP y comentarios',
        'Sin pérdida: los píxeles nunca se recodifican',
        'Muestra exactamente qué se eliminó',
        'Funciona con JPG, PNG y WebP',
        'Todo el proceso ocurre en tu navegador',
      ],
    },
  },
  whyHeading: '¿Por qué convertir imágenes?',
  whyNote: {
    universal:
      'Cada plataforma necesita un formato distinto. Las webs usan <strong>WebP</strong> para imágenes más pequeñas y rápidas. La impresión y las cámaras usan <strong>JPG</strong>. Los logos y gráficos con transparencia necesitan <strong>PNG</strong>. Como todo funciona en tu navegador, tus imágenes nunca salen de tu dispositivo.',
    'png-to-jpg':
      'PNG es sin pérdida e ideal para gráficos, pero los PNG suelen ser mucho más grandes que JPG. Convertir a JPG reduce el tamaño notablemente. Nota: JPG no admite transparencia — las zonas transparentes pasan a blanco.',
    'jpg-to-png':
      'PNG es un formato sin pérdida: cada píxel se conserva exactamente. Convertir JPG a PNG evita pérdidas de calidad al editar varias veces y prepara archivos para imprimir. Los PNG pesan más, así que úsalos cuando la calidad sea lo más importante.',
    'webp-to-jpg':
      'WebP es un formato moderno y eficiente usado en webs, pero no todas las apps o dispositivos lo soportan. Convertir a JPG garantiza que tu imagen se abra en cualquier sitio — correo, editores y redes sociales.',
    'jpg-to-webp':
      'WebP produce archivos hasta un 25\u201335% más pequeños que JPG con la misma calidad visual — páginas más rápidas, mejores Core Web Vitals y menos ancho de banda.',
    'png-to-webp':
      'Los PNG son sin pérdida pero pesados. WebP ofrece calidad similar con archivos mucho menores y conserva la transparencia — los gráficos web cargan más rápido sin perder nitidez.',
  },
  howHeading: 'Cómo convertir',
  howSteps: [
    'Arrastra y suelta una imagen o haz clic en <strong>explorar</strong> para elegir un archivo',
    'Elige tu formato de destino: <strong>PNG</strong>, <strong>JPG</strong> o <strong>WebP</strong>',
    'Ajusta el <strong>control de calidad</strong> para JPG y WebP',
    'Haz clic en <strong>Convertir</strong>, previsualiza el resultado y descárgalo',
  ],
  featuresHeading: 'Características',
  features: [
    'Convierte a PNG, JPG o WebP — sin instalar nada',
    'Control de calidad para equilibrar tamaño y nitidez',
    'Vista previa de dimensiones y tamaño del archivo',
    'Admite PNG, JPG, WebP, GIF, BMP, SVG, AVIF e ICO',
    '100% en tu navegador — las imágenes nunca se suben',
  ],
};

const ptCopy: ImageCopy = {
  universal: {
    title: 'Conversor de Imagens — Converta PNG, JPG e WebP grátis online',
    description:
      'Converta imagens para PNG, JPG ou WebP grátis online. Sem upload — 100% no navegador. Controle de qualidade, pré-visualização e download instantâneo.',
    keywords: 'conversor de imagens, png para jpg, jpg para png, conversor webp, converter imagem online, conversor de formato de imagem',
    h1: 'Conversor de Imagens',
    desc: 'Converta suas imagens entre PNG, JPG e WebP — instantaneamente, no seu navegador. Ajuste a qualidade para arquivos menores, veja o resultado e baixe. Sem uploads, sem servidores, sem limites.',
  },
  tools: {
    'png-to-jpg': {
      title: 'Conversor de PNG para JPG — Converta PNG para JPG grátis online',
      description:
        'Converta PNG para JPG grátis online. Transforme imagens e capturas PNG em arquivos JPEG menores. Controle de qualidade, pré-visualização instantânea, sem upload. 100% no navegador.',
      keywords: 'png para jpg, conversor png para jpg, converter png para jpg, png para jpeg, png para jpg online',
      h1: 'Conversor de PNG para JPG',
      desc: 'Converta suas imagens PNG para JPG instantaneamente no navegador. Arquivos JPG são menores e compatíveis com tudo — ideal para fotos, compartilhamento e web.',
    },
    'jpg-to-png': {
      title: 'Conversor de JPG para PNG — Converta JPG para PNG grátis online',
      description:
        'Converta JPG para PNG grátis online. Transforme fotos JPEG em imagens PNG sem perda e com qualidade total. Sem upload, conversão instantânea, 100% no navegador.',
      keywords: 'jpg para png, jpeg para png, conversor jpg para png, converter jpg para png, jpg para png online',
      h1: 'Conversor de JPG para PNG',
      desc: 'Converta suas fotos JPG para PNG instantaneamente — sem perda, em alta qualidade, no navegador. Ótimo para edição, impressão ou máxima fidelidade.',
    },
    'webp-to-jpg': {
      title: 'Conversor de WebP para JPG — Converta WebP para JPG grátis online',
      description:
        'Converta WebP para JPG grátis online. Transforme imagens WebP em arquivos JPEG amplamente compatíveis. Sem upload, conversão instantânea, controle de qualidade. 100% no navegador.',
      keywords: 'webp para jpg, webp para jpeg, conversor webp para jpg, converter webp para jpg, webp para jpg online',
      h1: 'Conversor de WebP para JPG',
      desc: 'Converta imagens WebP para JPG instantaneamente no navegador. Alguns aplicativos antigos não abrem WebP — este conversor as torna universalmente compatíveis.',
    },
    'jpg-to-webp': {
      title: 'Conversor de JPG para WebP — Converta JPG para WebP grátis online',
      description:
        'Converta JPG para WebP grátis online. Reduza fotos com melhor compressão e carregamento mais rápido. Controle de qualidade, pré-visualização, sem upload. 100% no navegador.',
      keywords: 'jpg para webp, jpeg para webp, conversor jpg para webp, converter jpg para webp, jpg para webp online',
      h1: 'Conversor de JPG para WebP',
      desc: 'Converta JPG para WebP instantaneamente no navegador e obtenha imagens menores e mais rápidas para a web. WebP comprime melhor que JPG na mesma qualidade.',
    },
    'png-to-webp': {
      title: 'Conversor de PNG para WebP — Converta PNG para WebP grátis online',
      description:
        'Converta PNG para WebP grátis online. Obtenha imagens web menores mantendo bordas nítidas e transparência. Sem upload, conversão instantânea. 100% no navegador.',
      keywords: 'png para webp, conversor png para webp, converter png para webp, png para webp online, webp de png',
      h1: 'Conversor de PNG para WebP',
      desc: 'Converta PNG para WebP instantaneamente no navegador. WebP mantém a transparência com arquivos muito menores que PNG — o formato ideal para gráficos e logos web.',
    },
  },
  meta: {
    'image-metadata-viewer': {
      title: 'Visualizador de Metadados de Imagem — Veja EXIF, GPS e mais grátis online',
      description:
        'Veja metadados de imagem (EXIF, GPS, IPTC, XMP, ICC) grátis online. Inspecione configurações da câmera, coordenadas GPS e informações ocultas. Sem upload, 100% no navegador.',
      keywords: 'visualizador de metadados de imagem, visualizar exif online, ver metadados, ver dados exif, metadados gps, visualizador de metadados de foto',
      h1: 'Visualizador de Metadados de Imagem',
      desc: 'Solte uma imagem para ver todos os metadados ocultos que ela contém — modelo da câmera, velocidade do obturador, coordenadas GPS, datas e software. Tudo é lido localmente no seu navegador; nada é enviado.',
      whyHeading: 'O que são metadados de imagem?',
      whyNote:
        'Toda foto tirada com celular ou câmera traz metadados ocultos. O tipo mais comum é <strong>EXIF</strong>: configurações como fabricante, modelo, ISO, distância focal e muitas vezes as <strong>coordenadas GPS</strong> exatas do local da foto. As fotos também podem carregar <strong>IPTC</strong> (legendas, palavras-chave, direitos autorais), <strong>XMP</strong> (metadados da Adobe) e <strong>perfis de cor ICC</strong>. Esses dados são invisíveis nos visualizadores comuns — por isso vale inspecioná-los e, muitas vezes, removê-los antes de compartilhar.',
      howHeading: 'Como ver os metadados',
      howSteps: [
        'Arraste e solte uma imagem ou clique em <strong>explorar</strong>',
        'Aguarde um momento enquanto os metadados são lidos localmente',
        'Navegue pela tabela de metadados — EXIF, GPS, IPTC, XMP e mais',
        'Exporte os metadados como JSON se precisar de um registro',
      ],
      featuresHeading: 'Recursos',
      features: [
        'Lê metadados EXIF, GPS, IPTC, XMP, ICC e texto de PNG',
        'Coordenadas GPS como latitude e longitude legíveis',
        'Funciona com JPG, PNG e WebP',
        'Exporta todos os metadados como download JSON',
        '100% no navegador — a imagem nunca sai do seu dispositivo',
      ],
    },
    'remove-image-metadata': {
      title: 'Remover Metadados de Imagem — Tirar EXIF e GPS grátis online',
      description:
        'Remova metadados de imagem (EXIF, GPS, IPTC, XMP) grátis online. Apague a localização oculta e os dados da câmera antes de compartilhar fotos. Sem perda, sem upload, 100% no navegador.',
      keywords: 'remover metadados de imagem, remover exif, remover exif online, remover dados gps, remover metadados de foto, removedor de exif',
      h1: 'Remover Metadados de Imagem',
      desc: 'Remova os metadados ocultos das suas fotos — localização GPS, detalhes da câmera, datas e mais — direto no navegador. Os pixels continuam intactos; apenas os metadados são removidos.',
      whyHeading: 'Por que remover metadados?',
      whyNote:
        'Fotos de celular contêm mais dados do que você imagina. O bloco <strong>EXIF</strong> embutido registra as <strong>coordenadas GPS</strong> exatas, a data, a marca e o modelo da câmera e outros detalhes. Se você compartilhar essa foto, a informação viaja junto: qualquer pessoa pode ver onde e quando ela foi tirada. Remover os metadados antes de publicar protege sua privacidade e prepara as imagens para impressão ou envios em que dados embutidos não são desejados.',
      howHeading: 'Como remover metadados',
      howSteps: [
        'Arraste e solte uma imagem JPG, PNG ou WebP',
        'A ferramenta detecta os metadados ocultos',
        'Clique em <strong>Remover metadados</strong>',
        'Baixe a imagem limpa — os pixels não mudam',
      ],
      featuresHeading: 'Recursos',
      features: [
        'Remove EXIF, GPS, IPTC, XMP e comentários',
        'Sem perda — os pixels nunca são recodificados',
        'Mostra exatamente o que foi removido',
        'Funciona com JPG, PNG e WebP',
        'Todo o processamento acontece no navegador',
      ],
    },
  },
  whyHeading: 'Por que converter imagens?',
  whyNote: {
    universal:
      'Cada plataforma precisa de um formato diferente. Sites usam <strong>WebP</strong> para imagens menores e mais rápidas. Impressão e câmeras usam <strong>JPG</strong>. Logos e gráficos com transparência precisam de <strong>PNG</strong>. Como tudo roda no navegador, suas imagens nunca saem do seu dispositivo.',
    'png-to-jpg':
      'PNG é sem perda e ideal para gráficos, mas arquivos PNG costumam ser muito maiores que JPG. Converter para JPG reduz bastante o tamanho. Atenção: JPG não suporta transparência — áreas transparentes ficam brancas.',
    'jpg-to-png':
      'PNG é um formato sem perda: cada pixel é preservado exatamente. Converter JPG para PNG evita perda de qualidade em edições repetidas e prepara arquivos para impressão. PNG é maior, então use-o quando a qualidade importar mais.',
    'webp-to-jpg':
      'WebP é um formato moderno e eficiente usado em sites, mas nem todos os apps ou dispositivos o suportam. Converter para JPG garante que sua imagem abra em qualquer lugar — e-mail, editores e redes sociais.',
    'jpg-to-webp':
      'WebP gera arquivos até 25\u201335% menores que JPG com a mesma qualidade visual — páginas mais rápidas, melhores Core Web Vitals e menor banda.',
    'png-to-webp':
      'PNGs são sem perda mas pesados. WebP oferece qualidade similar com arquivos bem menores e mantém a transparência — gráficos web carregam mais rápido sem perder nitidez.',
  },
  howHeading: 'Como converter',
  howSteps: [
    'Arraste e solte uma imagem ou clique em <strong>explorar</strong> para escolher um arquivo',
    'Escolha o formato de destino: <strong>PNG</strong>, <strong>JPG</strong> ou <strong>WebP</strong>',
    'Ajuste o <strong>controle de qualidade</strong> para JPG e WebP',
    'Clique em <strong>Converter</strong>, veja o resultado e baixe',
  ],
  featuresHeading: 'Recursos',
  features: [
    'Converta para PNG, JPG ou WebP — sem instalar nada',
    'Controle de qualidade para equilibrar tamanho e nitidez',
    'Pré-visualização de dimensões e tamanho do arquivo',
    'Suporta PNG, JPG, WebP, GIF, BMP, SVG, AVIF e ICO',
    '100% no navegador — as imagens nunca são enviadas',
  ],
};

const frCopy: ImageCopy = {
  universal: {
    title: 'Convertisseur d\u2019Images — Convertir PNG, JPG et WebP gratuit en ligne',
    description:
      'Convertissez des images en PNG, JPG ou WebP gratuitement en ligne. Sans envoi — 100% dans le navigateur. Contrôle de la qualité, aperçu et téléchargement instantané.',
    keywords: 'convertisseur d\u2019images, png en jpg, jpg en png, convertisseur webp, convertir image en ligne, convertisseur de format d\u2019image',
    h1: 'Convertisseur d\u2019Images',
    desc: 'Convertissez vos images entre PNG, JPG et WebP — instantanément, dans votre navigateur. Ajustez la qualité pour des fichiers plus légers, prévisualisez le résultat et téléchargez. Aucun envoi, aucun serveur, aucune limite.',
  },
  tools: {
    'png-to-jpg': {
      title: 'Convertisseur PNG en JPG — Convertir PNG en JPG gratuit en ligne',
      description:
        'Convertissez PNG en JPG gratuitement en ligne. Transformez images et captures PNG en fichiers JPEG plus légers. Contrôle de la qualité, aperçu instantané, sans envoi. 100% dans le navigateur.',
      keywords: 'png en jpg, convertisseur png en jpg, convertir png en jpg, png en jpeg, png en jpg en ligne',
      h1: 'Convertisseur PNG en JPG',
      desc: 'Convertissez vos images PNG en JPG instantanément dans votre navigateur. Les fichiers JPG sont plus légers et universellement compatibles — idéal pour les photos, le partage et le web.',
    },
    'jpg-to-png': {
      title: 'Convertisseur JPG en PNG — Convertir JPG en PNG gratuit en ligne',
      description:
        'Convertissez JPG en PNG gratuitement en ligne. Transformez vos photos JPEG en images PNG sans perte et en pleine qualité. Sans envoi, conversion instantanée, 100% dans le navigateur.',
      keywords: 'jpg en png, jpeg en png, convertisseur jpg en png, convertir jpg en png, jpg en png en ligne',
      h1: 'Convertisseur JPG en PNG',
      desc: 'Convertissez vos photos JPG en PNG instantanément — sans perte, en haute qualité, dans votre navigateur. Idéal pour l\u2019édition, l\u2019impression ou une fidélité maximale.',
    },
    'webp-to-jpg': {
      title: 'Convertisseur WebP en JPG — Convertir WebP en JPG gratuit en ligne',
      description:
        'Convertissez WebP en JPG gratuitement en ligne. Transformez vos images WebP en fichiers JPEG largement compatibles. Sans envoi, conversion instantanée, contrôle de la qualité. 100% dans le navigateur.',
      keywords: 'webp en jpg, webp en jpeg, convertisseur webp en jpg, convertir webp en jpg, webp en jpg en ligne',
      h1: 'Convertisseur WebP en JPG',
      desc: 'Convertissez vos images WebP en JPG instantanément dans votre navigateur. Certaines applications anciennes n\u2019ouvrent pas le WebP — ce convertisseur les rend universellement compatibles.',
    },
    'jpg-to-webp': {
      title: 'Convertisseur JPG en WebP — Convertir JPG en WebP gratuit en ligne',
      description:
        'Convertissez JPG en WebP gratuitement en ligne. Réduisez vos photos avec une meilleure compression et un chargement plus rapide. Contrôle de la qualité, aperçu, sans envoi. 100% dans le navigateur.',
      keywords: 'jpg en webp, jpeg en webp, convertisseur jpg en webp, convertir jpg en webp, jpg en webp en ligne',
      h1: 'Convertisseur JPG en WebP',
      desc: 'Convertissez JPG en WebP instantanément dans votre navigateur et obtenez des images plus légères et plus rapides pour le web. WebP compresse mieux que JPG à qualité égale.',
    },
    'png-to-webp': {
      title: 'Convertisseur PNG en WebP — Convertir PNG en WebP gratuit en ligne',
      description:
        'Convertissez PNG en WebP gratuitement en ligne. Obtenez des images web plus légères avec des bords nets et la transparence. Sans envoi, conversion instantanée. 100% dans le navigateur.',
      keywords: 'png en webp, convertisseur png en webp, convertir png en webp, png en webp en ligne, webp depuis png',
      h1: 'Convertisseur PNG en WebP',
      desc: 'Convertissez PNG en WebP instantanément dans votre navigateur. WebP conserve la transparence avec des fichiers bien plus légers que PNG — le format idéal pour les graphiques et logos web.',
    },
  },
  meta: {
    'image-metadata-viewer': {
      title: 'Visionneuse de métadonnées d\u2019image — voir EXIF, GPS et plus gratuitement en ligne',
      description:
        'Visionnez les métadonnées d\u2019image (EXIF, GPS, IPTC, XMP, ICC) gratuitement en ligne. Inspectez les réglages de l\u2019appareil, les coordonnées GPS et les informations cachées. Sans envoi, 100% dans le navigateur.',
      keywords: 'visionneuse métadonnées image, voir exif en ligne, voir les métadonnées, données exif, métadonnées gps, métadonnées photo',
      h1: 'Visionneuse de métadonnées d\u2019image',
      desc: 'Déposez une image pour voir toutes les métadonnées cachées qu\u2019elle contient — modèle d\u2019appareil, vitesse d\u2019obturation, coordonnées GPS, dates et logiciel. Tout est lu localement dans votre navigateur ; rien n\u2019est jamais envoyé.',
      whyHeading: 'Qu\u2019est-ce que les métadonnées d\u2019image\u00a0?',
      whyNote:
        'Chaque photo prise avec un téléphone ou un appareil photo renferme des métadonnées cachées. Le type le plus courant est <strong>EXIF</strong> : fabricant, modèle, ISO, distance focale et souvent les <strong>coordonnées GPS</strong> exactes du lieu de prise de vue. Les photos peuvent aussi contenir de l\u2019<strong>IPTC</strong> (légendes, mots-clés, droits d\u2019auteur), du <strong>XMP</strong> (métadonnées Adobe) et des <strong>profils de couleurs ICC</strong>. Ces données sont invisibles dans les visionneuses classiques — c\u2019est pourquoi il est utile de les inspecter, et souvent prudent de les supprimer avant de partager.',
      howHeading: 'Comment voir les métadonnées',
      howSteps: [
        'Glissez-déposez une image ou cliquez sur <strong>parcourir</strong>',
        'Patientez un instant pendant la lecture locale des métadonnées',
        'Parcourez le tableau des métadonnées — EXIF, GPS, IPTC, XMP et plus',
        'Exportez les métadonnées en JSON si vous en avez besoin',
      ],
      featuresHeading: 'Fonctionnalités',
      features: [
        'Lit les métadonnées EXIF, GPS, IPTC, XMP, ICC et texte PNG',
        'Coordonnées GPS affichées en latitude et longitude lisibles',
        'Fonctionne avec JPG, PNG et WebP',
        'Export de toutes les métadonnées en téléchargement JSON',
        '100% dans le navigateur — l\u2019image ne quitte jamais votre appareil',
      ],
    },
    'remove-image-metadata': {
      title: 'Supprimer les métadonnées d\u2019image — retirer EXIF et GPS gratuitement en ligne',
      description:
        'Supprimez les métadonnées d\u2019image (EXIF, GPS, IPTC, XMP) gratuitement en ligne. Retirez la localisation cachée et les données de l\u2019appareil avant de partager. Sans perte, sans envoi, 100% dans le navigateur.',
      keywords: 'supprimer métadonnées image, supprimer exif, retirer exif en ligne, supprimer données gps, retirer métadonnées photo, suppresseur d\u2019exif',
      h1: 'Supprimer les métadonnées d\u2019image',
      desc: 'Supprimez les métadonnées cachées de vos photos — localisation GPS, détails de l\u2019appareil, dates et plus — directement dans votre navigateur. Les pixels restent intacts ; seules les métadonnées sont supprimées.',
      whyHeading: 'Pourquoi supprimer les métadonnées\u00a0?',
      whyNote:
        'Les photos de téléphone contiennent plus de données que vous ne le pensez. Le bloc <strong>EXIF</strong> intégré enregistre les <strong>coordonnées GPS</strong> exactes, la date, la marque et le modèle de l\u2019appareil et d\u2019autres détails. Partagez une telle photo et ces informations voyagent avec elle — n\u2019importe qui peut voir où et quand elle a été prise. Supprimer les métadonnées avant publication protège votre vie privée et prépare les images à l\u2019impression ou aux envois où les données intégrées ne sont pas souhaitées.',
      howHeading: 'Comment supprimer les métadonnées',
      howSteps: [
        'Glissez-déposez une image JPG, PNG ou WebP',
        'L\u2019outil détecte les métadonnées cachées',
        'Cliquez sur <strong>Supprimer les métadonnées</strong>',
        'Téléchargez l\u2019image nettoyée — les pixels sont inchangés',
      ],
      featuresHeading: 'Fonctionnalités',
      features: [
        'Supprime EXIF, GPS, IPTC, XMP et commentaires',
        'Sans perte — les pixels ne sont jamais réencodés',
        'Affiche exactement ce qui a été supprimé',
        'Fonctionne avec JPG, PNG et WebP',
        'Tout le traitement se fait dans le navigateur',
      ],
    },
  },
  whyHeading: 'Pourquoi convertir des images\u00a0?',
  whyNote: {
    universal:
      'Chaque plateforme demande un format différent. Les sites utilisent <strong>WebP</strong> pour des images plus légères et rapides. L\u2019impression et les appareils photo utilisent <strong>JPG</strong>. Les logos et graphiques avec transparence ont besoin de <strong>PNG</strong>. Comme tout s\u2019exécute dans votre navigateur, vos images ne quittent jamais votre appareil.',
    'png-to-jpg':
      'Le PNG est sans perte et idéal pour les graphiques, mais les fichiers PNG sont souvent bien plus lourds que le JPG. Convertir en JPG réduit nettement la taille. Note\u00a0: le JPG ne gère pas la transparence — les zones transparentes deviennent blanches.',
    'jpg-to-png':
      'Le PNG est un format sans perte\u00a0: chaque pixel est préservé exactement. Convertir JPG en PNG évite la perte de qualité lors d\u2019éditions répétées et prépare les fichiers à l\u2019impression. Les PNG sont plus lourds, utilisez-les quand la qualité prime.',
    'webp-to-jpg':
      'Le WebP est un format moderne et efficace utilisé sur le web, mais toutes les applications ou appareils ne le prennent pas en charge. Convertir en JPG garantit que votre image s\u2019ouvre partout — e-mail, éditeurs et réseaux sociaux.',
    'jpg-to-webp':
      'Le WebP produit des fichiers jusqu\u2019à 25\u201335% plus légers que le JPG à qualité visuelle égale — pages plus rapides, meilleurs Core Web Vitals et moins de bande passante.',
    'png-to-webp':
      'Les PNG sont sans perte mais lourds. Le WebP offre une qualité similaire avec des fichiers bien plus légers tout en conservant la transparence — les graphiques web chargent plus vite sans perdre leur netteté.',
  },
  howHeading: 'Comment convertir',
  howSteps: [
    'Glissez-déposez une image ou cliquez sur <strong>parcourir</strong> pour choisir un fichier',
    'Choisissez votre format de destination\u00a0: <strong>PNG</strong>, <strong>JPG</strong> ou <strong>WebP</strong>',
    'Ajustez le <strong>curseur de qualité</strong> pour JPG et WebP',
    'Cliquez sur <strong>Convertir</strong>, prévisualisez le résultat puis téléchargez',
  ],
  featuresHeading: 'Fonctionnalités',
  features: [
    'Convertissez en PNG, JPG ou WebP — sans aucun logiciel',
    'Curseur de qualité pour équilibrer taille et netteté',
    'Aperçu des dimensions et de la taille du fichier',
    'Prend en charge PNG, JPG, WebP, GIF, BMP, SVG, AVIF et ICO',
    '100% dans le navigateur — les images ne sont jamais envoyées',
  ],
};

const hiCopy: ImageCopy = {
  universal: {
    title: 'इमेज कन्वर्टर — PNG, JPG और WebP मुफ्त में ऑनलाइन कन्वर्ट करें',
    description:
      'छवियों को PNG, JPG या WebP में मुफ्त में ऑनलाइन कन्वर्ट करें। कोई अपलोड नहीं — 100% आपके ब्राउज़र में। क्वालिटी कंट्रोल, पूर्वावलोकन और तुरंत डाउनलोड।',
    keywords: 'इमेज कन्वर्टर, png से jpg, jpg से png, webp कन्वर्टर, इमेज ऑनलाइन कन्वर्ट करें, इमेज फॉर्मेट कन्वर्टर',
    h1: 'इमेज कन्वर्टर',
    desc: 'अपनी छवियों को PNG, JPG और WebP के बीच कन्वर्ट करें — तुरंत, आपके ब्राउज़र में। छोटे फ़ाइलों के लिए क्वालिटी बदलें, परिणाम देखें और डाउनलोड करें। कोई अपलोड नहीं, कोई सर्वर नहीं, कोई सीमा नहीं।',
  },
  tools: {
    'png-to-jpg': {
      title: 'PNG से JPG कन्वर्टर — PNG को मुफ्त में ऑनलाइन JPG में बदलें',
      description:
        'PNG को मुफ्त में ऑनलाइन JPG में बदलें। PNG छवियों और स्क्रीनशॉट को छोटी JPEG फ़ाइलों में बदलें। क्वालिटी कंट्रोल, तुरंत पूर्वावलोकन, कोई अपलोड नहीं। 100% ब्राउज़र में।',
      keywords: 'png से jpg, png से jpg कन्वर्टर, png को jpg में बदलें, png से jpeg, png से jpg ऑनलाइन',
      h1: 'PNG से JPG कन्वर्टर',
      desc: 'अपी PNG छवियों को तुरंत अपने ब्राउज़र में JPG में बदलें। JPG फ़ाइलें छोटी और हर जगह समर्थित होती हैं — फ़ोटो, साझा करने और वेब के लिए आदर्श।',
    },
    'jpg-to-png': {
      title: 'JPG से PNG कन्वर्टर — JPG मुफ्त में ऑनलाइन PNG में बदलें',
      description:
        'JPG को मुफ्त में ऑनलाइन PNG में बदलें। JPEG फ़ोटो को पूरी क्वालिटी के साथ बिना नुकसान के PNG छवियों में बदलें। कोई अपलोड नहीं, तुरंत कन्वर्ज़न, 100% ब्राउज़र में।',
      keywords: 'jpg से png, jpeg से png, jpg से png कन्वर्टर, jpg को png में बदलें, jpg से png ऑनलाइन',
      h1: 'JPG से PNG कन्वर्टर',
      desc: 'अपी JPG फ़ोटो को तुरंत PNG में बदलें — बिना नुकसान, उच्च गुणवत्ता में, ब्राउज़र में। संपादन, प्रिंट या अधिकतम गुणवत्ता के लिए आदर्श।',
    },
    'webp-to-jpg': {
      title: 'WebP से JPG कन्वर्टर — WebP मुफ्त में ऑनलाइन JPG में बदलें',
      description:
        'WebP को मुफ्त में ऑनलाइन JPG में बदलें। WebP छवियों को व्यापक रूप से समर्थित JPEG फ़ाइलों में बदलें। कोई अपलोड नहीं, तुरंत कन्वर्ज़न, क्वालिटी कंट्रोल। 100% ब्राउज़र में।',
      keywords: 'webp से jpg, webp से jpeg, webp से jpg कन्वर्टर, webp को jpg में बदलें, webp से jpg ऑनलाइन',
      h1: 'WebP से JPG कन्वर्टर',
      desc: 'WebP छवियों को तुरंत अपने ब्राउज़र में JPG में बदलें। कुछ पुराने ऐप्स WebP नहीं खोलते — यह कन्वर्टर उन्हें हर जगह संगत बनाता है।',
    },
    'jpg-to-webp': {
      title: 'JPG से WebP कन्वर्टर — JPG मुफ्त में ऑनलाइन WebP में बदलें',
      description:
        'JPG को मुफ्त में ऑनलाइन WebP में बदलें। बेहतर कम्प्रेशन और तेज़ लोडिंग के साथ फ़ोटो छोटा करें। क्वालिटी कंट्रोल, पूर्वावलोकन, कोई अपलोड नहीं। 100% ब्राउज़र में।',
      keywords: 'jpg से webp, jpeg से webp, jpg से webp कन्वर्टर, jpg को webp में बदलें, jpg से webp ऑनलाइन',
      h1: 'JPG से WebP कन्वर्टर',
      desc: 'JPG को तुरंत अपने ब्राउज़र में WebP में बदलें और वेब के लिए छोटी, तेज़ छवियां पाएं। समान गुणवत्ता पर WebP JPG से बेहतर कम्प्रेस करता है।',
    },
    'png-to-webp': {
      title: 'PNG से WebP कन्वर्टर — PNG मुफ्त में ऑनलाइन WebP में बदलें',
      description:
        'PNG को मुफ्त में ऑनलाइन WebP में बदलें। साफ़ किनारों और ट्रांसपेरेंसी के साथ छोटी वेब छवियां पाएं। कोई अपलोड नहीं, तुरंत कन्वर्ज़न। 100% ब्राउज़र में।',
      keywords: 'png से webp, png से webp कन्वर्टर, png को webp में बदलें, png से webp ऑनलाइन, png से webp',
      h1: 'PNG से WebP कन्वर्टर',
      desc: 'PNG को तुरंत अपने ब्राउज़र में WebP में बदलें। WebP ट्रांसपेरेंसी बनाए रखता है और PNG से कहीं छोटे फ़ाइल बनाता है — वेब ग्राफिक्स और लोगो के लिए आदर्श।',
    },
  },
  meta: {
    'image-metadata-viewer': {
      title: 'इमेज मेटाडेटा व्यूअर — EXIF, GPS और अधिक मुफ्त में ऑनलाइन देखें',
      description:
        'इमेज मेटाडेटा (EXIF, GPS, IPTC, XMP, ICC) मुफ्त में ऑनलाइन देखें। कैमरा सेटिंग्स, GPS निर्देशांक और छिपी फ़ाइल जानकारी देखें। कोई अपलोड नहीं, 100% ब्राउज़र में।',
      keywords: 'इमेज मेटाडेटा व्यूअर, एक्सिफ व्यूअर ऑनलाइन, मेटाडेटा देखें, एक्सिफ डेटा देखें, जीपीएस मेटाडेटा, फोटो मेटाडेटा व्यूअर',
      h1: 'इमेज मेटाडेटा व्यूअर',
      desc: 'छवि में छिपे सभी मेटाडेटा देखने के लिए उसे यहां डालें — कैमरा मॉडल, शटर स्पीड, GPS निर्देशांक, समय-चिह्न और सॉफ़्टवेयर। सब कुछ आपके ब्राउज़र में स्थानीय रूप से पढ़ा जाता है; कुछ भी अपलोड नहीं होता।',
      whyHeading: 'इमेज मेटाडेटा क्या है?',
      whyNote:
        'फोन या कैमरे से ली गई हर फोटो में छिपा हुआ मेटाडेटा होता है। सबसे आम तरह <strong>EXIF</strong> है — कैमरा सेटिंग्स जैसे निर्माता, मॉडल, ISO, फोकल लंबाई और अक्सर फोटो खींचने का सटीक <strong>GPS निर्देशांक</strong>। फोटो पर <strong>IPTC</strong> (कैप्शन, कीवर्ड, कॉपीराइट), <strong>XMP</strong> (Adobe मेटाडेटा) और <strong>ICC कलर प्रोफाइल</strong> भी हो सकते हैं। सामान्य व्यूअर में ये दिखाई नहीं देते — इसलिए इनकी जांच करना उपयोगी है, और साझा करने से पहले इन्हें हटाना अक्सर समझदारी है।',
      howHeading: 'मेटाडेटा कैसे देखें',
      howSteps: [
        'छवि को खींचें और छोड़ें या <strong>ब्राउज़ करें</strong> पर क्लिक करें',
        'मेटाडेटा स्थानीय रूप से पढ़े जाने तक क्षण भर प्रतीक्षा करें',
        'मेटाडेटा तालिका देखें — EXIF, GPS, IPTC, XMP और अधिक',
        'रिकॉर्ड चाहिए तो मेटाडेटा को JSON में निर्यात करें',
      ],
      featuresHeading: 'विशेषताएं',
      features: [
        'EXIF, GPS, IPTC, XMP, ICC और PNG टेक्स्ट मेटाडेटा पढ़ता है',
        'GPS निर्देशांक पठनीय अक्षांश और देशांतर के रूप में',
        'JPG, PNG और WebP के साथ काम करता है',
        'सभी मेटाडेटा को JSON डाउनलोड के रूप में निर्यात',
        '100% ब्राउज़र-आधारित — छवि कभी डिवाइस से बाहर नहीं जाती',
      ],
    },
    'remove-image-metadata': {
      title: 'इमेज मेटाडेटा हटाएं — EXIF और GPS मुफ्त में ऑनलाइन हटाएं',
      description:
        'इमेज मेटाडेटा (EXIF, GPS, IPTC, XMP) मुफ्त में ऑनलाइन हटाएं। फोटो साझा करने से पहले छिपा स्थान और कैमरा डेटा हटाएं। बिना नुकसान, कोई अपलोड नहीं, 100% ब्राउज़र में।',
      keywords: 'इमेज से मेटाडेटा हटाएं, एक्सिफ हटाएं, एक्सिफ ऑनलाइन हटाएं, जीपीएस डेटा हटाएं, फोटो से मेटाडेटा हटाएं, एक्सिफ रिमूवर',
      h1: 'इमेज मेटाडेटा हटाएं',
      desc: 'अपनी फोटो के छिपे मेटाडेटा — GPS स्थान, कैमरा विवरण, समय-चिह्न और अधिक — सीधे अपने ब्राउज़र में हटाएं। पिक्सेल अपरिवर्तित रहते हैं; केवल मेटाडेटा हटाया जाता है।',
      whyHeading: 'मेटाडेटा क्यों हटाएं?',
      whyNote:
        'फोन की फोटो में आपकी कल्पना से अधिक डेटा होता है। एम्बेडेड <strong>EXIF</strong> ब्लॉक सटीक <strong>GPS निर्देशांक</strong>, समय-चिह्न, कैमरा निर्माता-मॉडल और संबंधित विवरण दर्ज करता है। ऐसी फोटो साझा करने पर यह जानकारी साथ चलती है — कोई भी देख सकता है कि इसे कहाँ और कब लिया गया। प्रकाशित करने से पहले मेटाडेटा हटाना आपकी गोपनीयता की रक्षा करता है और छपाई या प्रस्तुतियों के लिए छवियों को तैयार करता है जहाँ एम्बेडेड डेटा अवांछित है।',
      howHeading: 'मेटाडेटा कैसे हटाएं',
      howSteps: [
        'JPG, PNG या WebP छवि को खींचें और छोड़ें',
        'टूल छिपे हुए मेटाडेटा का पता लगाता है',
        '<strong>मेटाडेटा हटाएं</strong> पर क्लिक करें',
        'साफ छवि डाउनलोड करें — पिक्सेल अपरिवर्तित हैं',
      ],
      featuresHeading: 'विशेषताएं',
      features: [
        'EXIF, GPS, IPTC, XMP और टिप्पणियां हटाता है',
        'बिना नुकसान — पिक्सेल कभी दोबारा एन्कोड नहीं होते',
        'बताता है कि वास्तव में क्या हटाया गया',
        'JPG, PNG और WebP के साथ काम करता है',
        'सारी प्रक्रिया आपके ब्राउज़र में होती है',
      ],
    },
  },
  whyHeading: 'छवि कन्वर्ट क्यों करें?',
  whyNote: {
    universal:
      'हर प्लेटफ़ॉर्म को एक अलग फॉर्मेट चाहिए। वेबसाइटें छोटी और तेज़ छवियों के लिए <strong>WebP</strong> उपयोग करती हैं। प्रिंट और कैमरे <strong>JPG</strong> उपयोग करते हैं। ट्रांसपेरेंसी वाले लोगो और ग्राफिक्स को <strong>PNG</strong> चाहिए। सब कुछ आपके ब्राउज़र में चलता है, इसलिए आपकी छवियां कभी आपके डिवाइस से बाहर नहीं जातीं।',
    'png-to-jpg':
      'PNG दोषरहित और ग्राफिक्स के लिए आदर्श है, लेकिन PNG फ़ाइलें अक्सर JPG से ज़्यादा बड़ी होती हैं। JPG में बदलने से आकार काफ़ी कम हो जाता है। नोटः JPG ट्रांसपेरेंसी समर्थित नहीं करता — पारदर्शी हिस्से सफेद हो जाते हैं।',
    'jpg-to-png':
      'PNG एक दोषरहित फॉर्मेट है — हर पिक्सेल बिल्कुल संरक्षित रहता है। JPG को PNG में बदलने से बार-बार संपादन में गुणवत्ता की हानि रुकती है और फ़ाइलें प्रिंट के लिए तैयार हो जाती हैं। PNG बड़े होते हैं, इसलिए जब गुणवत्ता सबसे ज़रूरी हो तभी उपयोग करें।',
    'webp-to-jpg':
      'WebP वेबसाइटों के लिए आधुनिक और कुशल फॉर्मेट है, पर हर ऐप या डिवाइस इसे समर्थित नहीं करता। JPG में बदलने से यह सुनिश्चित होता है कि आपकी छवि हर जगह खुले — ईमेल, एडिटर और सोशल मीडिया।',
    'jpg-to-webp':
      'WebP समान दृश्य गुणवत्ता पर JPG से 25\u201335% छोटे फ़ाइल बनाता है — तेज़ लोडिंग, बेहतर Core Web Vitals और कम बैंडविड्थ।',
    'png-to-webp':
      'PNG दोषरहित लेकिन भारी होते हैं। WebP काफ़ी छोटे फ़ाइलों के साथ समान गुणवत्ता देता है और ट्रांसपेरेंसी बनाए रखता है — वेब ग्राफिक्स बिना तीक्ष्णता खोए तेज़ लोड होते हैं।',
  },
  howHeading: 'कैसे कन्वर्ट करें',
  howSteps: [
    'छवि को खींचें और छोड़ें या फ़ाइल चुनने के लिए <strong>ब्राउज़ करें</strong> पर क्लिक करें',
    'अपना लक्ष्य फॉर्मेट चुनेंः <strong>PNG</strong>, <strong>JPG</strong> या <strong>WebP</strong>',
    'JPG और WebP के लिए <strong>क्वालिटी स्लाइडर</strong> बदलें',
    '<strong>कन्वर्ट</strong> पर क्लिक करें, परिणाम देखें और डाउनलोड करें',
  ],
  featuresHeading: 'विशेषताएं',
  features: [
'PNG, JPG या WebP में बदलें — बिना किसी सॉफ़्टवेयर के',
    'फ़ाइल आकार और स्पष्टता संतुलित करने के लिए क्वालिटी स्लाइडर',
    'डाइमेंशन पूर्वावलोकन और फ़ाइल आकार',
    'PNG, JPG, WebP, GIF, BMP, SVG, AVIF और ICO समर्थित',
    '100% ब्राउज़र-आधारित — छवियां कभी अपलोड नहीं होतीं',
  ],
};

const jaCopy: ImageCopy = {
  universal: {
    title: '画像変換 - PNG・JPG・WebPを無料でオンライン変換',
    description:
      '画像をPNG・JPG・WebPに無料でオンライン変換。アップロード不要-100%ブラウザ内で完結。品質調整、プレビュー、即時ダウンロード。',
    keywords: '画像変換, pngからjpg, jpgからpng, webp変換, 画像をオンライン変換, 画像フォーマット変換',
    h1: '画像変換',
    desc: '画像をPNG・JPG・WebPの間で即座にブラウザ内で変換。より小さなファイルに品質を調整し、結果をプレビューしてダウンロード。アップロード不要、サーバー不要、制限なし。',
  },
  tools: {
    'png-to-jpg': {
      title: 'PNGからJPG変換 - PNGをJPGに無料でオンライン変換',
      description:
        'PNGをJPGに無料でオンライン変換。PNG画像やスクリーンショットをより小さなJPEGファイルに。品質調整、即時プレビュー、アップロード不要。100%ブラウザ内。',
      keywords: 'pngからjpg, pngからjpg変換, pngをjpgに変換, pngからjpeg, pngからjpgオンライン',
      h1: 'PNGからJPG変換',
      desc: 'PNG画像をブラウザ内で即座にJPGに変換。JPGファイルは小さくてあらゆるところで対応-写真・共有・ウェブに最適。',
    },
    'jpg-to-png': {
      title: 'JPGからPNG変換 - JPGをPNGに無料でオンライン変換',
      description:
        'JPGをPNGに無料でオンライン変換。JPEG写真をロスレスで全品質のPNG画像に変換。アップロード不要、即時変換、100%ブラウザ内。',
      keywords: 'jpgからpng, jpegからpng, jpgからpng変換, jpgをpngに変換, jpgからpngオンライン',
      h1: 'JPGからPNG変換',
      desc: 'JPG写真をブラウザ内で即座にPNGに変換-ロスレス、高品質。編集・印刷・最大限の品質が必要な場面に最適。',
    },
    'webp-to-jpg': {
      title: 'WebPからJPG変換 - WebPをJPGに無料でオンライン変換',
      description:
        'WebPをJPGに無料でオンライン変換。WebP画像を広く使えるJPEGファイルに変換。アップロード不要、即時変換、品質調整。100%ブラウザ内。',
      keywords: 'webpからjpg, webpからjpeg, webpからjpg変換, webpをjpgに変換, webpからjpgオンライン',
      h1: 'WebPからJPG変換',
      desc: 'WebP画像をブラウザ内で即座にJPGに変換。一部の古いアプリではWebPを開けないので、この変換でどこでも使えるようになります。',
    },
    'jpg-to-webp': {
      title: 'JPGからWebP変換 - JPGをWebPに無料でオンライン変換',
      description:
        'JPGをWebPに無料でオンライン変換。より良い圧縮と高速読み込みで写真サイズを削減。品質調整、プレビュー、アップロード不要。100%ブラウザ内。',
      keywords: 'jpgからwebp, jpegからwebp, jpgからwebp変換, jpgをwebpに変換, jpgからwebpオンライン',
      h1: 'JPGからWebP変換',
      desc: 'JPGをブラウザ内で即座にWebPに変換し、より小さく高速なウェブ画像に。WebPは同じ品質でJPGよりも圧縮効率が優れています。',
    },
    'png-to-webp': {
      title: 'PNGからWebP変換 - PNGをWebPに無料でオンライン変換',
      description:
        'PNGをWebPに無料でオンライン変換。透明性を保ちつつ、より小さなウェブ画像に。アップロード不要、即時変換。100%ブラウザ内。',
      keywords: 'pngからwebp, pngからwebp変換, pngをwebpに変換, pngからwebpオンライン, pngでwebp',
      h1: 'PNGからWebP変換',
      desc: 'PNGをブラウザ内で即座にWebPに変換。WebPは透明性を維持し、PNGよりはるかに小さなファイルを生み出します-ウェブ向けグラフィックやロゴに最適な形式。',
    },
  },
  meta: {
    'image-metadata-viewer': {
      title: '画像メタデータ表示 - EXIF・GPSなどを無料でオンライン確認',
      description:
        '画像メタデータ（EXIF・GPS・IPTC・XMP・ICC）を無料でオンライン確認。カメラ設定、GPS座標、隠れたファイル情報を調べられます。アップロード不要、100%ブラウザ内。',
      keywords: '画像メタデータ表示, exifビューア オンライン, メタデータを見る, exifデータ表示, gpsメタデータ, 写真メタデータビューア',
      h1: '画像メタデータ表示',
      desc: '画像をドロップするだけで、カメラモデル、シャッタースピード、GPS座標、タイムスタンプ、ソフトウェアなど隠されたメタデータをすべて表示します。すべてブラウザ内でローカルに読み取られ、アップロードされることはありません。',
      whyHeading: '画像メタデータとは',
      whyNote:
        'スマホやカメラで撮影した写真には必ず隠されたメタデータがあります。最も一般的なのは<strong>EXIF</strong>で、メーカー、モデル、ISO、焦点距離などのカメラ設定に加え、撮影地点の正確な<strong>GPS座標</strong>が含まれます。写真には<strong>IPTC</strong>（キャプション、キーワード、著作権）、<strong>XMP</strong>（Adobeメタデータ）、<strong>ICCカラープロファイル</strong>が含まれることもあります。通常のビューアでは見えないため、確認する価値があり、共有前に削除するのが多くの場合賢明です。',
      howHeading: 'メタデータの確認方法',
      howSteps: [
        '画像をドラッグ＆ドロップ、または<strong>参照</strong>をクリック',
        'メタデータがローカルで読み取られるまで少し待つ',
        'メタデータ表を確認-EXIF、GPS、IPTC、XMPなど',
        '必要に応じてJSONとしてエクスポート',
      ],
      featuresHeading: '機能',
      features: [
        'EXIF・GPS・IPTC・XMP・ICC・PNGテキストを読み取り',
        'GPS座標を読みやすい緯度・経度で表示',
        'JPG・PNG・WebPに対応',
        'すべてのメタデータをJSONでダウンロード',
        '100%ブラウザ内-画像が端末から出ることはありません',
      ],
    },
    'remove-image-metadata': {
      title: '画像メタデータ削除 - EXIF・GPSを無料でオンライン削除',
      description:
        '画像メタデータ（EXIF・GPS・IPTC・XMP）を無料でオンライン削除。共有前に隠れた位置情報やカメラデータを除去。ロスレス、アップロード不要、100%ブラウザ内。',
      keywords: '画像メタデータ削除, exif削除, exifをオンラインで削除, gpsデータ削除, 写真からメタデータを削除, exifリムーバー',
      h1: '画像メタデータ削除',
      desc: '写真から隠れたメタデータ（GPS位置、カメラ情報、タイムスタンプなど）をブラウザ内で直接削除します。ピクセルは無傷のまま、メタデータだけが取り除かれます。',
      whyHeading: 'なぜメタデータを削除するのか',
      whyNote:
        'スマホ写真には想像以上のデータが含まれます。埋め込まれた<strong>EXIF</strong>ブロックには、正確な<strong>GPS座標</strong>、撮影日時、カメラのメーカー・モデルなどの詳細が記録されています。その写真を共有すると情報も一緒に渡り、誰でもどこでいつ撮影されたかを見ることができます。公開前にメタデータを削除するとプライバシーを守れ、埋め込みデータが不要な印刷や提出用の画像も準備できます。',
      howHeading: 'メタデータの削除方法',
      howSteps: [
        'JPG・PNG・WebP画像をドラッグ＆ドロップ',
        'ツールが隠れたメタデータを検出',
        '<strong>メタデータを削除</strong>をクリック',
        'クリーンな画像をダウンロード-ピクセルは無変化',
      ],
      featuresHeading: '機能',
      features: [
        'EXIF・GPS・IPTC・XMP・コメントを削除',
        'ロスレス-ピクセルは再エンコードされません',
        '削除されたものを正確に表示',
        'JPG・PNG・WebPに対応',
        '処理はすべてブラウザ内で実行',
      ],
    },
  },
  whyHeading: 'なぜ画像を変換するのか',
  whyNote: {
    universal:
      'プラットフォームごとに必要な形式は異なります。ウェブサイトはより小さく高速な画像に<strong>WebP</strong>を使います。印刷やカメラは<strong>JPG</strong>を使います。透明性のあるロゴやグラフィックは<strong>PNG</strong>が必要です。すべてブラウザ内で動くので、画像が端末から外に出ることはありません。',
    'png-to-jpg':
      'PNGはロスレスでグラフィックに最適ですが、ファイルはJPGよりずっと大きいことが多いです。JPGに変換するとはっきりサイズが減ります。注意：JPGは透明性に対応していないため、透明部分は白色になります。',
    'jpg-to-png':
      'PNGはロスレス形式で、すべてのピクセルが正確に保存されます。JPGをPNGに変換すると、繰り返しの編集で品質が劣化せず、印刷にも適したファイルになります。PNGは大きいので、品質を重視するときに使いましょう。',
    'webp-to-jpg':
      'WebPはウェブ向けの現代的で効率的な形式ですが、すべてのアプリや端末が対応しているわけではありません。JPGに変換すれば、メール・編集ソフト・SNSなどどこでも画像を開けます。',
    'jpg-to-webp':
      'WebPは同じ見た目の品質でJPGと比べ25\u201335%小さなファイルを作ります-読み込みの高速化、Core Web Vitalsの改善、帯域幅節減につながります。',
    'png-to-webp':
      'PNGはロスレスですが重い形式です。WebPは大幅に小さなファイルで同等の品質を提供し、透明性も保たれます。ウェブグラフィックは鮮明さを失わず高速に読み込まれます。',
  },
  howHeading: '変換方法',
  howSteps: [
    '画像をドラッグ＆ドロップ、または<strong>参照</strong>をクリックしてファイルを選択',
    '変換先を選択：<strong>PNG</strong>・<strong>JPG</strong>・<strong>WebP</strong>',
    'JPGとWebPの<strong>品質スライダー</strong>を調整',
    '<strong>変換</strong>をクリックし、結果をプレビューしてダウンロード',
  ],
  featuresHeading: '機能',
  features: [
    'PNG・JPG・WebPに変換-ソフト不要',
    'ファイルサイズと鮮明さを両立する品質スライダー',
    '寸法プレビューとファイルサイズ表示',
    'PNG・JPG・WebP・GIF・BMP・SVG・AVIF・ICOに対応',
    '100%ブラウザ内-画像がアップロードされることはありません',
  ],
};

export const imageConverters: {
  en: ImageMap;
  de: ImageMap;
  es: ImageMap;
  pt: ImageMap;
  fr: ImageMap;
  hi: ImageMap;
  ja: ImageMap;
} = {
  en: { ...build(enCopy), ...buildMeta(enCopy) },
  de: { ...build(deCopy), ...buildMeta(deCopy) },
  es: { ...build(esCopy), ...buildMeta(esCopy) },
  pt: { ...build(ptCopy), ...buildMeta(ptCopy) },
  fr: { ...build(frCopy), ...buildMeta(frCopy) },
  hi: { ...build(hiCopy), ...buildMeta(hiCopy) },
  ja: { ...build(jaCopy), ...buildMeta(jaCopy) },
};
