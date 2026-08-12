import { converterContent } from '../i18n/content';
import { staticPages, blogContent } from '../i18n/pages';
import { locales, defaultLocale } from '../i18n/languages';
import type { Locale } from '../i18n/languages';
import type { ConverterSlug } from '../i18n/content';
import type { StaticPageSlug, BlogPostContent } from '../i18n/pages';

export type ToolKind = 'converter' | 'image-converter' | 'image-meta';

export interface RouteInfo {
  locale: Locale;
  kind: 'home' | 'tool' | 'static' | 'blog-index' | 'blog-post';
  converterSlug?: ConverterSlug;
  staticSlug?: StaticPageSlug;
  blogSlug?: string;
  logicalPath: string;
}

export function isConverterSlug(slug: string): slug is ConverterSlug {
  return slug in converterContent.en;
}

export function isStaticSlug(slug: string): slug is StaticPageSlug {
  return slug in staticPages.en;
}

export function toolKindFor(slug: ConverterSlug): ToolKind {
  switch (slug) {
    case 'image-converter':
    case 'png-to-jpg':
    case 'jpg-to-png':
    case 'webp-to-jpg':
    case 'jpg-to-webp':
    case 'png-to-webp':
      return 'image-converter';
    case 'image-metadata-viewer':
    case 'remove-image-metadata':
      return 'image-meta';
    default:
      return 'converter';
  }
}

function converterSlugFromPath(path: string, locale: Locale): ConverterSlug | null {
  const content = converterContent[locale];
  for (const slug of Object.keys(content) as ConverterSlug[]) {
    if (content[slug].path === path) return slug;
  }
  return null;
}

export function resolvePath(locale: Locale, pathname: string): RouteInfo | null {
  const path = pathname.replace(/\/+$/, '') || '/';

  if (path === '/') {
    return { locale, kind: 'home', logicalPath: '/' };
  }

  if (path === '/blog') {
    return { locale, kind: 'blog-index', logicalPath: '/blog' };
  }

  if (path.startsWith('/blog/')) {
    const slug = path.slice('/blog/'.length);
    const posts = blogContent[locale].posts as Record<string, BlogPostContent | undefined>;
    const post = posts[slug];
    if (post) {
      return { locale, kind: 'blog-post', blogSlug: slug, logicalPath: path };
    }
    return null;
  }

  const tool = converterSlugFromPath(path, locale);
  if (tool) {
    return { locale, kind: 'tool', converterSlug: tool, logicalPath: path };
  }

  const staticSlug = path.slice(1) as StaticPageSlug;
  if (isStaticSlug(staticSlug)) {
    return { locale, kind: 'static', staticSlug, logicalPath: path };
  }

  return null;
}

export function allRouteSlugs(locale: Locale): { path: string; kind: RouteInfo['kind']; extra?: string }[] {
  const routes: { path: string; kind: RouteInfo['kind']; extra?: string }[] = [
    { path: '/', kind: 'home' },
    { path: '/blog', kind: 'blog-index' },
  ];

  for (const slug of Object.keys(converterContent[locale]) as ConverterSlug[]) {
    routes.push({ path: converterContent[locale][slug].path, kind: 'tool', extra: slug });
  }

  for (const slug of Object.keys(staticPages[locale]) as StaticPageSlug[]) {
    routes.push({ path: `/${slug}`, kind: 'static', extra: slug });
  }

  const index = blogContent[locale].index;
  for (const slug of index.order) {
    if (blogContent[locale].posts[slug]) {
      routes.push({ path: `/blog/${slug}`, kind: 'blog-post', extra: slug });
    }
  }

  return routes;
}

export function allLocalesForParams(): string[] {
  return locales as unknown as string[];
}

export function isDefaultLocale(locale: string): boolean {
  return locale === defaultLocale;
}
