import { localizeHrefs } from "@/i18n/pages/utils";
import { staticPages } from "@/i18n/pages";
import type {
  StaticPageSlug,
  DocsBlock,
  HtmlBlock as HtmlBlockT,
  FaqContent,
  AboutContent,
  ContactContent,
  DocsContent,
  LegalContent,
} from "@/i18n/pages";
import type { Locale } from "@/i18n/languages";
import HtmlBlocks from "./HtmlBlocks";

export default function StaticPageLanding({
  locale,
  slug,
}: {
  locale: Locale;
  slug: StaticPageSlug;
}) {
  const lh = (html: string) => localizeHrefs(locale, html);

  return (
    <main className="static-page">
      {slug === "faq" && (
        <>
          <h1>{staticPages[locale].faq.h1}</h1>
          <div className="faq-list">
            {(staticPages[locale].faq as FaqContent).faqs.map((item, i) => (
              <details className="faq-item" key={i}>
                <summary>{item.q}</summary>
                <div className="faq-answer" dangerouslySetInnerHTML={{ __html: lh(item.a) }} />
              </details>
            ))}
          </div>
        </>
      )}

      {slug === "about" && (
        <>
          <h1>{staticPages[locale].about.h1}</h1>
          {(staticPages[locale].about as AboutContent).paragraphs.map((p, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: lh(p) }} />
          ))}
        </>
      )}

      {slug === "contact" && (
        <>
          <h1>{staticPages[locale].contact.h1}</h1>
          <p dangerouslySetInnerHTML={{ __html: lh(staticPages[locale].contact.intro) }} />
          <p>
            <a
              href={staticPages[locale].contact.buttonUrl}
              target="_blank"
              rel="noopener"
              className="contact-btn"
            >
              {staticPages[locale].contact.buttonLabel}
            </a>
          </p>
          <p dangerouslySetInnerHTML={{ __html: lh(staticPages[locale].contact.emailIntro) }} />
          <p dangerouslySetInnerHTML={{ __html: lh(staticPages[locale].contact.bugHint) }} />
        </>
      )}

      {slug === "docs" && (
        <>
          <h1>{staticPages[locale].docs.h1}</h1>
          {(staticPages[locale].docs as DocsContent).blocks.map((block, i) => (
            <FragmentRender key={i} block={block} locale={locale} />
          ))}
        </>
      )}

      {(slug === "privacy" || slug === "terms" || slug === "cookies") && (
        <>
          <h1>{staticPages[locale][slug].h1}</h1>
          {staticPages[locale][slug].lastUpdated && <em>{staticPages[locale][slug].lastUpdated}</em>}
          {staticPages[locale][slug].intro && (
            <p dangerouslySetInnerHTML={{ __html: lh(staticPages[locale][slug].intro!) }} />
          )}
          {(staticPages[locale][slug] as LegalContent).sections.map((section, i) => (
            <FragmentRender key={i} section={section} locale={locale} />
          ))}
        </>
      )}
    </main>
  );
}

function FragmentRender({
  block,
  section,
  locale,
}: {
  block?: DocsBlock;
  section?: { heading: string; blocks: HtmlBlockT[] };
  locale: Locale;
}) {
  if (block) {
    return (
      <>
        {block.type === "cards" && (
          <>
            <h2>{block.heading}</h2>
            <div className="grid">
              {block.cards.map((card, i) => (
                <div className="card" key={i}>
                  <h3>{card.h3}</h3>
                  <p dangerouslySetInnerHTML={{ __html: localizeHrefs(locale, card.p) }} />
                </div>
              ))}
            </div>
          </>
        )}
        {block.type === "shortcuts" && (
          <>
            <h2>{block.heading}</h2>
            <table className="shortcuts">
              <thead>
                <tr>
                  <th>{block.columns.shortcut}</th>
                  <th>{block.columns.action}</th>
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, i) => (
                  <tr key={i}>
                    <td>
                      <kbd>{row.shortcut}</kbd>
                    </td>
                    <td>{row.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
        {block.type === "section" && (
          <>
            <h2>{block.heading}</h2>
            <HtmlBlocks blocks={block.blocks} locale={locale} />
          </>
        )}
      </>
    );
  }
  if (section) {
    return (
      <>
        <h2>{section.heading}</h2>
        <HtmlBlocks blocks={section.blocks} locale={locale} />
      </>
    );
  }
  return null;
}