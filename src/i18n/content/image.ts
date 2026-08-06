import type { ConverterContent, ConverterContentMap } from './types';

type ImageSlug = 'image-converter' | 'png-to-jpg' | 'jpg-to-png' | 'webp-to-jpg' | 'jpg-to-webp' | 'png-to-webp';
export type ImageMap = Pick<ConverterContentMap, ImageSlug>;

interface ToolCopy {
  title: string;
  description: string;
  keywords: string;
  h1: string;
  desc: string;
}

interface ImageCopy {
  universal: ToolCopy;
  tools: Record<Exclude<ImageSlug, 'image-converter'>, ToolCopy>;
  whyHeading: string;
  whyNote: Record<string, string>;
  howHeading: string;
  howSteps: string[];
  featuresHeading: string;
  features: string[];
}

const PAIR: Record<Exclude<ImageSlug, 'image-converter'>, { from: string; to: string }> = {
  'png-to-jpg': { from: 'PNG', to: 'JPG' },
  'jpg-to-png': { from: 'JPG', to: 'PNG' },
  'webp-to-jpg': { from: 'WEBP', to: 'JPG' },
  'jpg-to-webp': { from: 'JPG', to: 'WEBP' },
  'png-to-webp': { from: 'PNG', to: 'WEBP' },
};

function build(copy: ImageCopy): ImageMap {
  const toolSlugs = Object.keys(PAIR) as Exclude<ImageSlug, 'image-converter'>[];

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

  const tools = toolSlugs.reduce<Record<Exclude<ImageSlug, 'image-converter'>, ConverterContent>>((acc, slug) => {
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
  }, {} as Record<Exclude<ImageSlug, 'image-converter'>, ConverterContent>);

  return { 'image-converter': universal, ...tools };
}

export { build, PAIR };

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
  en: build(enCopy),
  de: build(deCopy),
  es: build(esCopy),
  pt: build(ptCopy),
  fr: build(frCopy),
  hi: build(hiCopy),
  ja: build(jaCopy),
};
