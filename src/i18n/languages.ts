export const locales = ['en', 'es', 'pt', 'de', 'fr', 'hi', 'ja'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export interface LanguageInfo {
  code: Locale;
  label: string;
  native: string;
  htmlLang: string;
  ogLocale: string;
}

export const languages: Record<Locale, LanguageInfo> = {
  en: { code: 'en', label: 'English', native: 'English', htmlLang: 'en', ogLocale: 'en_US' },
  es: { code: 'es', label: 'Spanish', native: 'Español', htmlLang: 'es', ogLocale: 'es_ES' },
  pt: { code: 'pt', label: 'Portuguese', native: 'Português', htmlLang: 'pt', ogLocale: 'pt_PT' },
  de: { code: 'de', label: 'German', native: 'Deutsch', htmlLang: 'de', ogLocale: 'de_DE' },
  fr: { code: 'fr', label: 'French', native: 'Français', htmlLang: 'fr', ogLocale: 'fr_FR' },
  hi: { code: 'hi', label: 'Hindi', native: 'हिन्दी', htmlLang: 'hi', ogLocale: 'hi_IN' },
  ja: { code: 'ja', label: 'Japanese', native: '日本語', htmlLang: 'ja', ogLocale: 'ja_JP' },
};

export const isLocale = (value: string | undefined): value is Locale =>
  !!value && (locales as readonly string[]).includes(value);

export const DEFAULT_PATH = '/';
