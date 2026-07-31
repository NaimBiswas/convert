import type {
  StaticContent,
  BlogContent,
  StaticPageSlug,
  BlogSlug,
  BlogCardContent,
  BlogPostContent,
  BlogIndexContent,
  PageMeta,
  HtmlBlock,
  DocsBlock,
  LegalContent,
  DocsContent,
  FaqContent,
  ContactContent,
  AboutContent,
  Breadcrumb,
} from './types';
import type { Locale } from '../languages';
import { staticContent as enStaticContent } from './static/en';
import { blogContent as enBlogContent } from './blog/en';
import { staticContent as esStaticContent } from './static/es';
import { blogContent as esBlogContent } from './blog/es';
import { staticContent as ptStaticContent } from './static/pt';
import { blogContent as ptBlogContent } from './blog/pt';
import { staticContent as deStaticContent } from './static/de';
import { blogContent as deBlogContent } from './blog/de';
import { staticContent as frStaticContent } from './static/fr';
import { blogContent as frBlogContent } from './blog/fr';
import { staticContent as hiStaticContent } from './static/hi';
import { blogContent as hiBlogContent } from './blog/hi';
import { staticContent as jaStaticContent } from './static/ja';
import { blogContent as jaBlogContent } from './blog/ja';

export type {
  StaticContent,
  BlogContent,
  StaticPageSlug,
  BlogSlug,
  BlogCardContent,
  BlogPostContent,
  BlogIndexContent,
  PageMeta,
  HtmlBlock,
  DocsBlock,
  LegalContent,
  DocsContent,
  FaqContent,
  ContactContent,
  AboutContent,
  Breadcrumb,
} from './types';

export const staticPages: Record<Locale, StaticContent> = {
  en: enStaticContent,
  es: esStaticContent,
  pt: ptStaticContent,
  de: deStaticContent,
  fr: frStaticContent,
  hi: hiStaticContent,
  ja: jaStaticContent,
};

export const blogContent: Record<Locale, BlogContent> = {
  en: enBlogContent,
  es: esBlogContent,
  pt: ptBlogContent,
  de: deBlogContent,
  fr: frBlogContent,
  hi: hiBlogContent,
  ja: jaBlogContent,
};
