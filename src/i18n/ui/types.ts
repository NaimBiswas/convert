import type { Locale } from '../languages';

export type { Locale };

export interface HeaderStrings {
  logoText: string;
  menuAria: string;
  themeAria: string;
  home: string;
  docs: string;
  faq: string;
  blog: string;
  about: string;
  contact: string;
  privacy: string;
  terms: string;
  cookies: string;
  converters: string;
  categoryCsv: string;
  categoryExcel: string;
  categoryImage: string;
  jsonToCsv: string;
  csvToJson: string;
  excelToJson: string;
  jsonToExcel: string;
  excelToCsv: string;
  imageConverter: string;
  pngToJpg: string;
  jpgToPng: string;
  webpToJpg: string;
  jpgToWebp: string;
  pngToWebp: string;
  imageMetadataViewer: string;
  removeImageMetadata: string;
  reportIssue: string;
  versionBadge: string;
  language: string;
}

export interface FooterStrings {
  tagline: string;
  copyright: string;
  home: string;
  docs: string;
  faq: string;
  blog: string;
  about: string;
  contact: string;
  privacy: string;
  terms: string;
  cookies: string;
  github: string;
}

export interface ToolStrings {
  swapFormats: string;
  paste: string;
  upload: string;
  url: string;
  loadExample: string;
  format: string;
  clear: string;
  validate: string;
  privacyNotice: string;
  dragDropText: string;
  browse: string;
  uploadSupports: string;
  fetch: string;
  corsProxy: string;
  sheet: string;
  editorPlaceholder: string;
  convert: string;
  swap: string;
  reset: string;
  tools: string;
  generateRandomData: string;
  base64Encode: string;
  base64Decode: string;
  hexEncode: string;
  hexDecode: string;
  preview: string;
  searchPlaceholder: string;
  findReplace: string;
  transpose: string;
  caseTransforms: string;
  undo: string;
  redo: string;
  addRow: string;
  addColumn: string;
  findPlaceholder: string;
  replacePlaceholder: string;
  replace: string;
  replaceAll: string;
  transformColumn: string;
  uppercase: string;
  lowercase: string;
  capitalize: string;
  deleteEmptyRows: string;
  removeDuplicates: string;
  empty: string;
  dups: string;
  actions: string;
  privacyFootnote: string;
}

export interface LayoutStrings {
  siteName: string;
  cookieBanner: string;
  cookieLearnMore: string;
  cookieGotIt: string;
  cookiesPath: string;
}

export interface ImageToolStrings {
  privacy: string;
  dragDropText: string;
  browse: string;
  supports: string;
  target: string;
  quality: string;
  convert: string;
  result: string;
  fileName: string;
  dimensions: string;
  outputFormat: string;
  fileSize: string;
  download: string;
  convertAnother: string;
  metaSupports: string;
  metadata: string;
  gps: string;
  noMetadata: string;
  exportJson: string;
  removedGroups: string;
  removeBtn: string;
  downloadClean: string;
  nothingFound: string;
  tryAnother: string;
  foundMeta: string;
  tableField: string;
  tableValue: string;
}

export interface UIStrings {
  header: HeaderStrings;
  footer: FooterStrings;
  tool: ToolStrings;
  layout: LayoutStrings;
  image: ImageToolStrings;
}
