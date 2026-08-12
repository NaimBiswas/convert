import { getRelativeLocaleUrl } from '../../lib/links';
import type { Locale } from '../languages';
import type { Breadcrumb } from './types';

export function localizeHrefs(locale: Locale, html: string): string {
  return html.replace(/href="\/([^"]*)"/g, (_m, path: string) => `href="${getRelativeLocaleUrl(locale, `/${path}`)}"`);
}

export function localizeBreadcrumbs(locale: Locale, crumbs: Breadcrumb[]): Breadcrumb[] {
  return crumbs.map((c) => ({ name: c.name, url: getRelativeLocaleUrl(locale, c.url) }));
}

export function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&ldquo;/g, '"')
    .replace(/&rdquo;/g, '"')
    .replace(/&lbrace;/g, '{')
    .replace(/&rbrace;/g, '}');
}
