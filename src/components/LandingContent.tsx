import type { Section } from "@/i18n/content";
import { Fragment } from "react";

export default function LandingContent({ sections }: { sections: Section[] }) {
  return (
    <section className="landing-content">
      {sections.map((section, i) => (
        <Fragment key={i}>
          <h2>{section.heading}</h2>
          {section.blocks.map((block, j) => {
            if (block.type === "p")
              return <p key={j} dangerouslySetInnerHTML={{ __html: block.html }} />;
            if (block.type === "code")
              return (
                <p className="code-block" key={j}>
                  <code dangerouslySetInnerHTML={{ __html: block.html }} />
                </p>
              );
            if (block.type === "list") {
              const items = block.items.map((item, k) => (
                <li key={k} dangerouslySetInnerHTML={{ __html: item }} />
              ));
              return block.ordered ? <ol key={j}>{items}</ol> : <ul key={j}>{items}</ul>;
            }
            return null;
          })}
        </Fragment>
      ))}
    </section>
  );
}
