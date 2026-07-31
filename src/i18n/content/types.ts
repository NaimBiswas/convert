export type TextBlock =
  | { type: 'p'; html: string }
  | { type: 'list'; ordered: boolean; items: string[] }
  | { type: 'code'; html: string };

export interface Section {
  heading: string;
  blocks: TextBlock[];
}

export interface Meta {
  title: string;
  description: string;
  keywords: string;
}

export interface ConverterContent {
  meta: Meta;
  h1: string;
  desc: string;
  from: string;
  to: string;
  slug: string;
  path: string;
  sections: Section[];
}

export type ConverterSlug =
  | 'json-to-csv'
  | 'csv-to-json'
  | 'excel-to-json'
  | 'json-to-excel'
  | 'excel-to-csv';

export type ConverterContentMap = Record<ConverterSlug, ConverterContent>;

export interface FeatureCard {
  title: string;
  desc: string;
  link: string;
  icon: string;
}

export interface Step {
  title: string;
  desc: string;
}

export interface UseCaseCard {
  icon: string;
  title: string;
  desc: string;
}

export interface FormatCard {
  label: string;
  targets: string[];
  tag: string;
}

export interface HomeContent {
  meta: Meta;
  hero: { h1: string; descs: string[]; trust: string };
  features: { heading: string; cards: FeatureCard[] };
  howItWorks: { heading: string; steps: Step[] };
  useCases: { heading: string; sub: string; cards: UseCaseCard[] };
  formats: { heading: string; sub: string; cards: FormatCard[] };
}
