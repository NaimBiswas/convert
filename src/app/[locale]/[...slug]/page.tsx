import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, locales } from "@/i18n/languages";
import type { Locale } from "@/i18n/languages";
import { ui } from "@/i18n/ui";
import { converterContent } from "@/i18n/content";
import { staticPages, blogContent } from "@/i18n/pages";
import type { Breadcrumb, BlogPostContent } from "@/i18n/pages";
import { stripHtml } from "@/i18n/pages/utils";
import {
  allRouteSlugs,
  resolvePath,
  toolKindFor,
  type RouteInfo,
} from "@/lib/routing";
import { buildMetadata, siteUrlFor, SITE_URL } from "@/lib/seo";
import JsonLd, {
  articleSchema,
  breadcrumbSchema,
  defaultWebApplicationSchema,
} from "@/components/JsonLd";
import HomeLanding from "@/components/HomeLanding";
import ConverterLanding from "@/components/ConverterLanding";
import ImageConverterLanding from "@/components/ImageConverterLanding";
import ImageMetaLanding from "@/components/ImageMetaLanding";
import StaticPageLanding from "@/components/StaticPageLanding";
import BlogIndexLanding from "@/components/BlogIndexLanding";
import BlogPostLanding from "@/components/BlogPostLanding";

type PageParams = { locale: string; slug: string[] };

export function generateStaticParams() {
  const params: PageParams[] = [];
  for (const locale of locales) {
    for (const route of allRouteSlugs(locale)) {
      if (route.path === "/") continue;
      params.push({
        locale,
        slug: route.path.replace(/^\//, "").split("/"),
      });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<PageParams>;
}): Promise<Metadata> {
  const { locale: raw, slug } = await params;
  const locale: Locale = isLocale(raw) ? raw : "en";
  const route = resolvePath(locale, `/${slug.join("/")}`);
  if (!route) return {};
  const siteName = ui[locale].layout.siteName;

  switch (route.kind) {
    case "tool": {
      const converterSlug = route.converterSlug;
      if (!converterSlug) return {};
      const c = converterContent[locale][converterSlug];
      return buildMetadata({
        locale,
        logicalPath: route.logicalPath,
        title: c.meta.title,
        description: c.meta.description,
        keywords: c.meta.keywords,
        siteName,
      });
    }
    case "static": {
      const staticSlug = route.staticSlug;
      if (!staticSlug) return {};
      const c = staticPages[locale][staticSlug];
      return buildMetadata({
        locale,
        logicalPath: route.logicalPath,
        title: c.meta.title,
        description: c.meta.description,
        keywords: c.meta.keywords,
        siteName,
      });
    }
    case "blog-index": {
      const c = blogContent[locale].index;
      return buildMetadata({
        locale,
        logicalPath: "/blog",
        title: c.meta.title,
        description: c.meta.description,
        keywords: c.meta.keywords,
        siteName,
      });
    }
    case "blog-post": {
      const blogSlug = route.blogSlug;
      if (!blogSlug) return {};
      const posts = blogContent[locale].posts as Record<string, BlogPostContent | undefined>;
      const c = posts[blogSlug];
      if (!c) return {};
      return buildMetadata({
        locale,
        logicalPath: route.logicalPath,
        title: c.meta.title,
        description: c.meta.description,
        keywords: c.meta.keywords,
        siteName,
      });
    }
    default: {
      const c = converterContent["en"]["json-to-csv"];
      return buildMetadata({
        locale,
        logicalPath: "/",
        title: c.meta.title,
        description: c.meta.description,
        keywords: c.meta.keywords,
        siteName,
      });
    }
  }
}

function absoluteBreadcrumbs(locale: Locale, crumbs: Breadcrumb[]) {
  return crumbs.map((crumb) => ({
    name: crumb.name,
    url: siteUrlFor(locale, crumb.url),
  }));
}

export default async function CatchAllPage({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const { locale: raw, slug } = await params;
  const locale: Locale = isLocale(raw) ? raw : "en";
  const route = resolvePath(locale, `/${slug.join("/")}`);
  if (!route) notFound();
  const siteName = ui[locale].layout.siteName;

  switch (route.kind) {
    case "home":
      return <HomeLanding locale={locale} />;

    case "tool": {
      const converterSlug = route.converterSlug;
      if (!converterSlug) notFound();
      const c = converterContent[locale][converterSlug];
      const schema = defaultWebApplicationSchema({
        siteName,
        url: SITE_URL,
        description: c.meta.description,
      });
      return (
        <>
          <JsonLd data={schema} />
          {toolKindFor(converterSlug) === "image-converter" ? (
            <ImageConverterLanding locale={locale} slug={converterSlug} />
          ) : toolKindFor(converterSlug) === "image-meta" ? (
            <ImageMetaLanding locale={locale} slug={converterSlug} />
          ) : (
            <ConverterLanding locale={locale} slug={converterSlug} />
          )}
        </>
      );
    }

    case "static": {
      const staticSlug = route.staticSlug;
      if (!staticSlug) notFound();
      const c = staticPages[locale][staticSlug];
      const crumbs = absoluteBreadcrumbs(locale, c.breadcrumbs);
      const schema = staticPageSchema(locale, staticSlug, c);
      return (
        <>
          <JsonLd data={schema} />
          <JsonLd data={breadcrumbSchema(crumbs)} />
          <StaticPageLanding locale={locale} slug={staticSlug} />
        </>
      );
    }

    case "blog-index": {
      const c = blogContent[locale].index;
      const crumbs = absoluteBreadcrumbs(locale, c.breadcrumbs);
      const schema = defaultWebApplicationSchema({
        siteName,
        url: siteUrlFor(locale, "/blog"),
        description: c.meta.description,
      });
      return (
        <>
          <JsonLd data={schema} />
          <JsonLd data={breadcrumbSchema(crumbs)} />
          <BlogIndexLanding locale={locale} />
        </>
      );
    }

    case "blog-post": {
      const blogSlug = route.blogSlug;
      if (!blogSlug) notFound();
      const posts = blogContent[locale].posts as Record<string, BlogPostContent | undefined>;
      const c = posts[blogSlug];
      if (!c) notFound();
      const crumbs = absoluteBreadcrumbs(locale, c.breadcrumbs);
      const schema = defaultWebApplicationSchema({
        siteName,
        url: siteUrlFor(locale, route.logicalPath),
        description: c.meta.description,
      });
      const article = articleSchema({
        headline: c.h1,
        datePublished: c.dateISO,
        description: c.meta.description,
      });
      return (
        <>
          <JsonLd data={schema} />
          <JsonLd data={breadcrumbSchema(crumbs)} />
          <JsonLd data={article} />
          <BlogPostLanding locale={locale} slug={blogSlug} />
        </>
      );
    }
  }
}

type StaticContent = (typeof staticPages)["en"][keyof (typeof staticPages)["en"]];

function staticPageSchema(
  _locale: Locale,
  slug: string,
  c: StaticContent,
): object {
  switch (slug) {
    case "about":
      return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Data Converter",
        url: SITE_URL,
        description: c.meta.description,
        author: { "@type": "Person", name: "Naim Biswas", url: "https://github.com/NaimBiswas" },
      };
    case "contact":
      return {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        name: c.h1,
        description: c.meta.description,
        mainEntity: {
          "@type": "Person",
          name: "Naim Biswas",
          email: (c as { email?: string }).email,
          contactType: "technical support",
        },
      };
    case "faq":
      return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        name: c.h1,
        mainEntity: (c as { faqs: { q: string; a: string }[] }).faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: stripHtml(f.a) },
        })),
      };
    case "docs":
      return {
        "@context": "https://schema.org",
        "@type": "TechArticle",
        name: c.h1,
        description: c.meta.description,
        applicationCategory: "UtilityApplication",
        author: { "@type": "Person", name: "Naim Biswas" },
      };
    default:
      return {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: c.h1,
        description: c.meta.description,
        about: { "@type": "Thing", name: c.h1 },
      };
  }
}