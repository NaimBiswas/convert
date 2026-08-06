import type { BlogCardContent, BlogPostContent, BlogSlug } from '../../types';
import { post as jsonToCsvGuide } from './json-to-csv-converter-guide';
import { post as csvToJsonGuide } from './csv-to-json-converter-guide';
import { post as excelToJsonGuide } from './excel-to-json-converter-guide';
import { post as jsonToExcelGuide } from './json-to-excel-converter-guide';
import { post as excelToCsvGuide } from './excel-to-csv-converter-guide';
import { post as imageConverterGuide } from './image-converter-guide';
import { post as pngToJpgGuide } from './png-to-jpg-converter-guide';
import { post as jpgToPngGuide } from './jpg-to-png-converter-guide';
import { post as webpToJpgGuide } from './webp-to-jpg-converter-guide';
import { post as jpgToWebpGuide } from './jpg-to-webp-converter-guide';
import { post as pngToWebpGuide } from './png-to-webp-converter-guide';

export const guideSlugs: BlogSlug[] = [
  'json-to-csv-converter-guide',
  'csv-to-json-converter-guide',
  'excel-to-json-converter-guide',
  'json-to-excel-converter-guide',
  'excel-to-csv-converter-guide',
  'image-converter-guide',
  'png-to-jpg-converter-guide',
  'jpg-to-png-converter-guide',
  'webp-to-jpg-converter-guide',
  'jpg-to-webp-converter-guide',
  'png-to-webp-converter-guide',
];

export const guidePosts: Record<string, BlogPostContent> = {
  'json-to-csv-converter-guide': jsonToCsvGuide,
  'csv-to-json-converter-guide': csvToJsonGuide,
  'excel-to-json-converter-guide': excelToJsonGuide,
  'json-to-excel-converter-guide': jsonToExcelGuide,
  'excel-to-csv-converter-guide': excelToCsvGuide,
  'image-converter-guide': imageConverterGuide,
  'png-to-jpg-converter-guide': pngToJpgGuide,
  'jpg-to-png-converter-guide': jpgToPngGuide,
  'webp-to-jpg-converter-guide': webpToJpgGuide,
  'jpg-to-webp-converter-guide': jpgToWebpGuide,
  'png-to-webp-converter-guide': pngToWebpGuide,
};

export const guideCards: Record<string, BlogCardContent> = {
  'json-to-csv-converter-guide': {
    title: jsonToCsvGuide.h1,
    desc: jsonToCsvGuide.meta.description,
    dateISO: jsonToCsvGuide.dateISO,
    dateDisplay: jsonToCsvGuide.dateDisplay,
    img: jsonToCsvGuide.heroImg.replace('w=800&h=400', 'w=400&h=240'),
    heroImg: jsonToCsvGuide.heroImg,
    heroAlt: jsonToCsvGuide.heroAlt,
  },
  'csv-to-json-converter-guide': {
    title: csvToJsonGuide.h1,
    desc: csvToJsonGuide.meta.description,
    dateISO: csvToJsonGuide.dateISO,
    dateDisplay: csvToJsonGuide.dateDisplay,
    img: csvToJsonGuide.heroImg.replace('w=800&h=400', 'w=400&h=240'),
    heroImg: csvToJsonGuide.heroImg,
    heroAlt: csvToJsonGuide.heroAlt,
  },
  'excel-to-json-converter-guide': {
    title: excelToJsonGuide.h1,
    desc: excelToJsonGuide.meta.description,
    dateISO: excelToJsonGuide.dateISO,
    dateDisplay: excelToJsonGuide.dateDisplay,
    img: excelToJsonGuide.heroImg.replace('w=800&h=400', 'w=400&h=240'),
    heroImg: excelToJsonGuide.heroImg,
    heroAlt: excelToJsonGuide.heroAlt,
  },
  'json-to-excel-converter-guide': {
    title: jsonToExcelGuide.h1,
    desc: jsonToExcelGuide.meta.description,
    dateISO: jsonToExcelGuide.dateISO,
    dateDisplay: jsonToExcelGuide.dateDisplay,
    img: jsonToExcelGuide.heroImg.replace('w=800&h=400', 'w=400&h=240'),
    heroImg: jsonToExcelGuide.heroImg,
    heroAlt: jsonToExcelGuide.heroAlt,
  },
  'excel-to-csv-converter-guide': {
    title: excelToCsvGuide.h1,
    desc: excelToCsvGuide.meta.description,
    dateISO: excelToCsvGuide.dateISO,
    dateDisplay: excelToCsvGuide.dateDisplay,
    img: excelToCsvGuide.heroImg.replace('w=800&h=400', 'w=400&h=240'),
    heroImg: excelToCsvGuide.heroImg,
    heroAlt: excelToCsvGuide.heroAlt,
  },
  'image-converter-guide': {
    title: imageConverterGuide.h1,
    desc: imageConverterGuide.meta.description,
    dateISO: imageConverterGuide.dateISO,
    dateDisplay: imageConverterGuide.dateDisplay,
    img: imageConverterGuide.heroImg.replace('w=800&h=400', 'w=400&h=240'),
    heroImg: imageConverterGuide.heroImg,
    heroAlt: imageConverterGuide.heroAlt,
  },
  'png-to-jpg-converter-guide': {
    title: pngToJpgGuide.h1,
    desc: pngToJpgGuide.meta.description,
    dateISO: pngToJpgGuide.dateISO,
    dateDisplay: pngToJpgGuide.dateDisplay,
    img: pngToJpgGuide.heroImg.replace('w=800&h=400', 'w=400&h=240'),
    heroImg: pngToJpgGuide.heroImg,
    heroAlt: pngToJpgGuide.heroAlt,
  },
  'jpg-to-png-converter-guide': {
    title: jpgToPngGuide.h1,
    desc: jpgToPngGuide.meta.description,
    dateISO: jpgToPngGuide.dateISO,
    dateDisplay: jpgToPngGuide.dateDisplay,
    img: jpgToPngGuide.heroImg.replace('w=800&h=400', 'w=400&h=240'),
    heroImg: jpgToPngGuide.heroImg,
    heroAlt: jpgToPngGuide.heroAlt,
  },
  'webp-to-jpg-converter-guide': {
    title: webpToJpgGuide.h1,
    desc: webpToJpgGuide.meta.description,
    dateISO: webpToJpgGuide.dateISO,
    dateDisplay: webpToJpgGuide.dateDisplay,
    img: webpToJpgGuide.heroImg.replace('w=800&h=400', 'w=400&h=240'),
    heroImg: webpToJpgGuide.heroImg,
    heroAlt: webpToJpgGuide.heroAlt,
  },
  'jpg-to-webp-converter-guide': {
    title: jpgToWebpGuide.h1,
    desc: jpgToWebpGuide.meta.description,
    dateISO: jpgToWebpGuide.dateISO,
    dateDisplay: jpgToWebpGuide.dateDisplay,
    img: jpgToWebpGuide.heroImg.replace('w=800&h=400', 'w=400&h=240'),
    heroImg: jpgToWebpGuide.heroImg,
    heroAlt: jpgToWebpGuide.heroAlt,
  },
  'png-to-webp-converter-guide': {
    title: pngToWebpGuide.h1,
    desc: pngToWebpGuide.meta.description,
    dateISO: pngToWebpGuide.dateISO,
    dateDisplay: pngToWebpGuide.dateDisplay,
    img: pngToWebpGuide.heroImg.replace('w=800&h=400', 'w=400&h=240'),
    heroImg: pngToWebpGuide.heroImg,
    heroAlt: pngToWebpGuide.heroAlt,
  },
};
