import type { Locale } from '../languages';

export type { Locale };

export interface Breadcrumb {
  name: string;
  url: string;
}

export interface PageMeta {
  title: string;
  description: string;
  keywords: string;
}

export interface CookieTableRow {
  cookie: string;
  purpose: string;
  duration: string;
}

export type HtmlBlock =
  | { type: 'p'; html: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'cookieTable'; columns: CookieTableRow; rows: CookieTableRow[] };

export interface AboutContent {
  meta: PageMeta;
  h1: string;
  breadcrumbs: Breadcrumb[];
  paragraphs: string[];
}

export interface ContactContent {
  meta: PageMeta;
  h1: string;
  breadcrumbs: Breadcrumb[];
  intro: string;
  buttonLabel: string;
  buttonUrl: string;
  emailIntro: string;
  email: string;
  bugHint: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface FaqContent {
  meta: PageMeta;
  h1: string;
  breadcrumbs: Breadcrumb[];
  faqs: FaqItem[];
}

export type DocsBlock =
  | { type: 'cards'; heading: string; cards: { h3: string; p: string }[] }
  | { type: 'section'; heading: string; blocks: HtmlBlock[] }
  | { type: 'shortcuts'; heading: string; columns: { shortcut: string; action: string }; rows: { shortcut: string; action: string }[] };

export interface DocsContent {
  meta: PageMeta;
  h1: string;
  breadcrumbs: Breadcrumb[];
  blocks: DocsBlock[];
}

export interface LegalSection {
  heading: string;
  blocks: HtmlBlock[];
}

export interface LegalContent {
  meta: PageMeta;
  h1: string;
  breadcrumbs: Breadcrumb[];
  lastUpdated: string;
  intro?: string;
  sections: LegalSection[];
}

export type StaticPageSlug = 'about' | 'contact' | 'faq' | 'docs' | 'privacy' | 'terms' | 'cookies';

export interface StaticContent {
  about: AboutContent;
  contact: ContactContent;
  faq: FaqContent;
  docs: DocsContent;
  privacy: LegalContent;
  terms: LegalContent;
  cookies: LegalContent;
}

export type BlogSlug =
  | 'json-to-csv-best-practices'
  | 'csv-to-json-tutorial'
  | 'excel-vs-csv'
  | 'json-vs-xml-vs-yaml'
  | 'data-cleaning-tips'
  | 'why-json-is-popular'
  | 'excel-formulas-to-csv'
  | 'data-migration-strategies'
  | 'large-file-conversion'
  | 'json-to-csv-converter-guide'
  | 'csv-to-json-converter-guide'
  | 'excel-to-json-converter-guide'
  | 'json-to-excel-converter-guide'
  | 'excel-to-csv-converter-guide';

export interface BlogCardContent {
  title: string;
  desc: string;
  dateISO: string;
  dateDisplay: string;
  img: string;
  heroImg: string;
  heroAlt: string;
}

export interface BlogIndexContent {
  meta: PageMeta;
  h1: string;
  subtitle: string;
  breadcrumbs: Breadcrumb[];
  order: BlogSlug[];
  posts: Partial<Record<BlogSlug, BlogCardContent>>;
}

export interface BlogSection {
  heading: string;
  blocks: HtmlBlock[];
}

export interface BlogPostContent {
  meta: PageMeta;
  h1: string;
  breadcrumbs: Breadcrumb[];
  dateISO: string;
  dateDisplay: string;
  byline: string;
  heroImg: string;
  heroAlt: string;
  intro: string;
  sections: BlogSection[];
}

export interface BlogContent {
  index: BlogIndexContent;
  posts: Partial<Record<BlogSlug, BlogPostContent>>;
}
