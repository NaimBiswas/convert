import { localizeHrefs } from "@/i18n/pages/utils";
import type { HtmlBlock } from "@/i18n/pages";
import type { Locale } from "@/i18n/languages";

export default function HtmlBlocks({
  blocks,
  locale,
}: {
  blocks: HtmlBlock[];
  locale: Locale;
}) {
  const lh = (html: string) => localizeHrefs(locale, html);
  return (
    <>
      {blocks.map((block, i) => {
        if (block.type === "p")
          return <p key={i} dangerouslySetInnerHTML={{ __html: lh(block.html) }} />;
        if (block.type === "cookieTable")
          return (
            <table className="cookie-table" key={i}>
              <thead>
                <tr>
                  <th>{block.columns.cookie}</th>
                  <th>{block.columns.purpose}</th>
                  <th>{block.columns.duration}</th>
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, j) => (
                  <tr key={j}>
                    <td>
                      <code>{row.cookie}</code>
                    </td>
                    <td>{row.purpose}</td>
                    <td>{row.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          );
        const items = block.items.map((item, j) => (
          <li key={j} dangerouslySetInnerHTML={{ __html: lh(item) }} />
        ));
        return block.type === "ul" ? (
          <ul key={i}>{items}</ul>
        ) : (
          <ol key={i}>{items}</ol>
        );
      })}
    </>
  );
}
