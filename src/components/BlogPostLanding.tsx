import { Fragment } from "react";
import { blogContent } from "@/i18n/pages";
import Image from "next/image";
import type { BlogPostContent } from "@/i18n/pages";
import type { Locale } from "@/i18n/languages";
import HtmlBlocks from "./HtmlBlocks";

export default function BlogPostLanding({
  locale,
  slug,
}: {
  locale: Locale;
  slug: string;
}) {
  const posts = blogContent[locale].posts as Record<string, BlogPostContent | undefined>;
  const c = posts[slug];
  if (!c) return null;

  return (
    <main className="blog-post">
      <article>
        <h1>{c.h1}</h1>
        <p className="post-meta">
          <time dateTime={c.dateISO}>{c.dateDisplay}</time> · {c.byline}
        </p>

        <Image src={c.heroImg} alt={c.heroAlt} className="post-img" loading="lazy" />

        <p dangerouslySetInnerHTML={{ __html: c.intro }} />

        {c.sections.map((section, i) => (
          <Fragment key={i}>
            <h2>{section.heading}</h2>
            <HtmlBlocks blocks={section.blocks} locale={locale} />
          </Fragment>
        ))}
      </article>
    </main>
  );
}