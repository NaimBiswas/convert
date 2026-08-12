import { SITE_URL } from "@/lib/seo";

export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function defaultWebApplicationSchema(opts: {
  siteName: string;
  url: string;
  description: string;
}): object {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: opts.siteName,
    url: opts.url,
    description: opts.description,
    applicationCategory: "UtilityApplication",
    operatingSystem: "All",
    browserRequirements: "Requires JavaScript",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]): object {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function articleSchema(opts: {
  headline: string;
  datePublished: string;
  description: string;
}): object {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.headline,
    description: opts.description,
    datePublished: opts.datePublished,
    author: { "@type": "Person", name: "Naim Biswas", url: "https://github.com/NaimBiswas" },
    publisher: { "@type": "Organization", name: "Data Converter", url: SITE_URL },
  };
}
