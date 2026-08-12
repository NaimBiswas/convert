import { getRelativeLocaleUrl } from "@/lib/links";
import Link from "next/link";
import { blogContent } from "@/i18n/pages";
import type { Locale } from "@/i18n/languages";

export default function BlogIndexLanding({ locale }: { locale: Locale }) {
  const c = blogContent[locale].index;

  return (
    <main className="blog-index">
      <h1>{c.h1}</h1>
      <p className="blog-subtitle">{c.subtitle}</p>

      <div className="post-grid">
        {c.order.map((slug) => {
          const post = c.posts[slug];
          if (!post) return null;
          return (
            <article className="post-card" key={slug}>
              <Link href={getRelativeLocaleUrl(locale, `/blog/${slug}`)} className="post-link">
                <img src={post.img} alt="" className="card-img" loading="lazy" />
                <div className="card-body">
                  <h2>{post.title}</h2>
                  <p className="card-desc">{post.desc}</p>
                  <time dateTime={post.dateISO}>{post.dateDisplay}</time>
                </div>
              </Link>
            </article>
          );
        })}
      </div>
    </main>
  );
}