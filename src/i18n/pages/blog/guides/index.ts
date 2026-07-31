import type { BlogCardContent, BlogPostContent, BlogSlug } from '../../types';
import { post as jsonToCsvGuide } from './json-to-csv-converter-guide';
import { post as csvToJsonGuide } from './csv-to-json-converter-guide';
import { post as excelToJsonGuide } from './excel-to-json-converter-guide';
import { post as jsonToExcelGuide } from './json-to-excel-converter-guide';
import { post as excelToCsvGuide } from './excel-to-csv-converter-guide';

export const guideSlugs: BlogSlug[] = [
  'json-to-csv-converter-guide',
  'csv-to-json-converter-guide',
  'excel-to-json-converter-guide',
  'json-to-excel-converter-guide',
  'excel-to-csv-converter-guide',
];

export const guidePosts: Record<string, BlogPostContent> = {
  'json-to-csv-converter-guide': jsonToCsvGuide,
  'csv-to-json-converter-guide': csvToJsonGuide,
  'excel-to-json-converter-guide': excelToJsonGuide,
  'json-to-excel-converter-guide': jsonToExcelGuide,
  'excel-to-csv-converter-guide': excelToCsvGuide,
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
};
