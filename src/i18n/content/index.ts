import type { HomeContent, ConverterContentMap } from './types';
import type { Locale } from '../languages';
import { converterContent as enConverters, homeContent as enHome } from './en';
import { es, esHome } from './es';
import { pt, ptHome } from './pt';
import { de, deHome } from './de';
import { fr, frHome } from './fr';
import { hi, hiHome } from './hi';
import { ja, jaHome } from './ja';

export type {
  HomeContent,
  ConverterContentMap,
  ConverterContent,
  ConverterSlug,
  Section,
  TextBlock,
  Meta,
} from './types';

export const converterContent: Record<Locale, ConverterContentMap> = {
  en: enConverters,
  es,
  pt,
  de,
  fr,
  hi,
  ja,
};

export const homeContent: Record<Locale, HomeContent> = {
  en: enHome,
  es: esHome,
  pt: ptHome,
  de: deHome,
  fr: frHome,
  hi: hiHome,
  ja: jaHome,
};
