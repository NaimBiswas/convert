import type { UIStrings } from './types';
import type { Locale } from '../languages';
import { en } from './en';
import { es } from './es';
import { pt } from './pt';
import { de } from './de';
import { fr } from './fr';
import { hi } from './hi';
import { ja } from './ja';

export type { UIStrings } from './types';

export const ui: Record<Locale, UIStrings> = { en, es, pt, de, fr, hi, ja };
