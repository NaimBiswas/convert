import { defaultLocale, isLocale, locales } from '../i18n/languages';
import type { Locale } from '../i18n/languages';

export function getRelativeLocaleUrl(locale: Locale, path: string): string {
  const p = path === '/' || path === '' ? '' : path;
  if (locale === defaultLocale) {
    return p === '' ? '/' : p;
  }
  return `/${locale}${p}`;
}

export function getAbsoluteLocaleUrl(locale: Locale, path: string): string {
  return `https://metadataconverter.com${getRelativeLocaleUrl(locale, path)}`;
}

export function detectLocaleFromPath(pathname: string): Locale {
  const segments = pathname.split('/').filter(Boolean);
  const first = segments[0];
  if (first && isLocale(first)) return first;
  return defaultLocale;
}

export function stripLocaleFromPath(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length && isLocale(segments[0])) {
    return '/' + segments.slice(1).join('/');
  }
  return pathname;
}

export function isLocalePath(pathname: string): boolean {
  const first = pathname.split('/').filter(Boolean)[0];
  return !!first && isLocale(first);
}

export function localeFromPathOrParam(pathname: string, paramLocale: string | undefined): Locale {
  if (paramLocale && isLocale(paramLocale)) return paramLocale;
  return detectLocaleFromPath(pathname);
}

export { locales, defaultLocale, isLocale };
export type { Locale };
