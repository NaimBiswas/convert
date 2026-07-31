import type { StaticContent } from '../types';

export const staticContent: StaticContent = {
  about: {
    meta: {
      title: 'About Us',
      description:
        'Learn about Data Converter — a free, private, browser-based tool for converting between JSON, CSV, Excel, XML, YAML, and more.',
      keywords: 'about, data converter, online converter, browser-based',
    },
    h1: 'About Us',
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'About', url: '/about' },
    ],
    paragraphs: [
      'Data Converter started as a side project to solve a simple problem: every time I needed to convert a CSV to JSON or an Excel file to XML, I had to hunt down some random online tool that either required an upload to a server. Most of those tools also kept my data, which felt wrong.',
      'So I built this. No servers, no uploads, no accounts. Everything runs right in your browser. Your data stays on your machine — period.',
      'The tool supports JSON, CSV, Excel (.xlsx), XML, YAML, HTML tables, Markdown, and PDF. You can paste data in, upload a file, or fetch from a URL. It handles nested structures, large files, and gives you a proper table editor with search, sort, find-and-replace, and inline editing.',
      'I keep adding features based on what people ask for and what I find useful myself. If something\u2019s missing or broken, just reach out through the contact page — I actually read every message.',
      'Built and maintained by <a href="https://github.com/NaimBiswas" target="_blank" rel="noopener">Naim Biswas</a>.',
    ],
  },
  contact: {
    meta: {
      title: 'Contact Us',
      description:
        'Get in touch with the Data Converter team. Report bugs, suggest features, or ask questions.',
      keywords: 'contact, support, bug report, data converter',
    },
    h1: 'Contact',
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Contact', url: '/contact' },
    ],
    intro:
      'Have a question, found a bug, or want to suggest a feature? The best place is <strong>GitHub Issues</strong> — that way everyone can see the discussion and solutions.',
    buttonLabel: 'Open a GitHub Issue →',
    buttonUrl: 'https://github.com/NaimBiswas/convert/issues/new',
    emailIntro:
      'You can also email me directly at <a href="mailto:nayeembiswas2@gmail.com">nayeembiswas2@gmail.com</a>. I try to respond within a day or two.',
    email: 'nayeembiswas2@gmail.com',
    bugHint:
      'If reporting a bug, please include your source format, target format, and any error messages you saw. A sample of the data (or the error) helps me track it down much faster.',
  },
  faq: {
    meta: {
      title: 'Frequently Asked Questions',
      description:
        'Common questions about the Data Converter tool — privacy, formats, limits, and troubleshooting.',
      keywords: 'faq, data converter help, format support, troubleshooting',
    },
    h1: 'Frequently Asked Questions',
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'FAQ', url: '/faq' },
    ],
    faqs: [
      {
        q: 'Is my data safe? Do you store anything?',
        a: 'Everything runs in your browser — nothing is uploaded to any server. Your data never leaves your device. I don\u2019t store, log, or even see what you convert. Your theme preference (light/dark mode) is saved locally so it persists between visits. All conversion data is cleared when you close the tab.',
      },
      {
        q: 'What formats do you support?',
        a: '<strong>Input:</strong> JSON, CSV, Excel (.xlsx), XML, YAML<br><strong>Output:</strong> JSON, CSV, Excel (.xlsx), XML, YAML, HTML Table, Markdown, PDF<br>You can convert from any input format to any output format. For example, paste XML and download as CSV, or upload Excel and export as JSON.',
      },
      {
        q: 'Is there a file size limit?',
        a: 'Since everything runs in your browser, the limit depends on your device\u2019s memory. Most files up to 50-100 MB work fine on a typical laptop. Excel uploads are capped at 50 MB in the UI. If you run into performance issues, try splitting your data into smaller files.',
      },
      {
        q: 'Do I need an account?',
        a: 'No. There are no accounts, no sign-ups, no logins. Just open the site and start converting.',
      },
      {
        q: 'Can I edit my data after converting?',
        a: 'Yes. After conversion, you get a full table editor. You can double-click any cell to edit, search and filter rows, sort by columns, add or delete rows and columns, transpose the table, do find-and-replace across all cells, apply case transforms (UPPER, lower, Capitalize) to a column, undo and redo changes, and remove empty rows or duplicates.',
      },
      {
        q: 'The conversion looks wrong — what do I do?',
        a: 'First, make sure your input data is well-formed. JSON needs proper quotes and brackets. CSV needs a header row. For nested JSON or XML, the tool flattens keys with <code>_</code> as a separator — this works best for arrays of objects. If you\u2019re still stuck, <a href="/contact">reach out</a> with your source format, target format, and a sample of the data (or the error message) and I\u2019ll take a look.',
      },
    ],
  },
  docs: {
    meta: {
      title: 'Documentation — How to Use the Data Converter',
      description:
        'Learn how to convert between JSON, CSV, Excel, XML, YAML, Markdown, HTML, and PDF. Complete guide with shortcuts, tools, and privacy info.',
      keywords: 'documentation, how to convert, format conversion, data converter',
    },
    h1: 'How to Use the Data Converter',
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Docs', url: '/docs' },
    ],
    blocks: [
      {
        type: 'cards',
        heading: 'Supported Formats',
        cards: [
          { h3: 'JSON', p: 'JavaScript Object Notation — nested or flat objects, arrays of objects.' },
          { h3: 'CSV', p: 'Comma-separated values — header row required.' },
          { h3: 'Excel (XLSX)', p: 'Microsoft Excel workbooks with multi-sheet support. Upload only.' },
          { h3: 'XML', p: 'Extensible Markup Language — flattens nested elements with <code>_</code> separator.' },
          { h3: 'YAML', p: 'YAML Ain\u2019t Markup Language — human-readable data serialization.' },
          { h3: 'HTML Table', p: 'Output only — renders data as an HTML <code>&lt;table&gt;</code>.' },
          { h3: 'Markdown', p: 'Output only — renders data as a GitHub-flavored Markdown table.' },
          { h3: 'PDF', p: 'Output only — exports data as a PDF document.' },
        ],
      },
      {
        type: 'section',
        heading: 'Input Methods',
        blocks: [
          {
            type: 'ul',
            items: [
              '<strong>Paste</strong> — paste data directly into the editor.',
              '<strong>Upload</strong> — drag & drop or browse for a file (.json, .csv, .xml, .yaml, .xlsx up to 50 MB).',
              '<strong>URL</strong> — fetch data from a remote URL. Enable the CORS proxy for APIs that block direct requests.',
            ],
          },
        ],
      },
      {
        type: 'section',
        heading: 'How to Convert',
        blocks: [
          {
            type: 'ol',
            items: [
              'Select the source format (<strong>From</strong>) and target format (<strong>To</strong>) in the converter bar.',
              'Paste, upload, or fetch your data.',
              'Click <strong>Convert</strong> or press <kbd>Ctrl+Enter</kbd>.',
              'Preview, search, sort, and edit the table.',
              'Download the result in any supported format, or copy to clipboard.',
            ],
          },
        ],
      },
      {
        type: 'section',
        heading: 'Table Tools',
        blocks: [
          {
            type: 'ul',
            items: [
              '<strong>Search</strong> — filter rows by any column value.',
              '<strong>Sort</strong> — click a column header to sort ascending/descending.',
              '<strong>Inline Edit</strong> — double-click any cell to edit its value.',
              '<strong>Find &amp; Replace</strong> — search and replace text across all cells.',
              '<strong>Transpose</strong> — swap rows and columns.',
              '<strong>Case Transforms</strong> — UPPER, lower, or Capitalize an entire column.',
              '<strong>Add / Delete</strong> rows and columns.',
              '<strong>Undo / Redo</strong> — <kbd>Ctrl+Z</kbd> and <kbd>Ctrl+Shift+Z</kbd>.',
              '<strong>Column Reorder</strong> — drag column headers to reorder.',
              '<strong>Remove Empty / Duplicates</strong> — clean up your data.',
            ],
          },
        ],
      },
      {
        type: 'section',
        heading: 'Export',
        blocks: [
          {
            type: 'p',
            html: 'Download buttons apply to the <em>filtered</em> data (search and sort are respected). Clipboard copies the full dataset.',
          },
        ],
      },
      {
        type: 'section',
        heading: 'Tools Menu',
        blocks: [
          {
            type: 'ul',
            items: [
              '<strong>Generate Random Data</strong> — creates a random CSV dataset for testing.',
              '<strong>Base64 Encode / Decode</strong> — encode or decode the editor content.',
              '<strong>Hex Encode / Decode</strong> — encode or decode the editor content.',
            ],
          },
        ],
      },
      {
        type: 'section',
        heading: 'Privacy',
        blocks: [
          {
            type: 'p',
            html: 'All processing happens entirely in your browser. No data is sent to any server. The URL fetch with CORS proxy enabled routes through a third-party proxy service.',
          },
        ],
      },
      {
        type: 'shortcuts',
        heading: 'Keyboard Shortcuts',
        columns: { shortcut: 'Shortcut', action: 'Action' },
        rows: [
          { shortcut: 'Ctrl+Enter', action: 'Convert' },
          { shortcut: 'Ctrl+Z', action: 'Undo' },
          { shortcut: 'Ctrl+Shift+Z', action: 'Redo' },
          { shortcut: 'Escape', action: 'Close find/replace or case toolbar' },
        ],
      },
    ],
  },
  privacy: {
    meta: {
      title: 'Privacy Policy',
      description:
        'Data Converter privacy policy — we do not collect, store, or share your data. Everything runs in your browser.',
      keywords: 'privacy policy, data privacy, browser-based, no upload',
    },
    h1: 'Privacy Policy',
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Privacy', url: '/privacy' },
    ],
    lastUpdated: 'Last updated: July 2026',
    sections: [
      {
        heading: 'What This Covers',
        blocks: [
          {
            type: 'p',
            html: 'This privacy policy explains how Data Converter ("we", "I", "this site") handles your information when you use the tools on this website.',
          },
        ],
      },
      {
        heading: 'No Data Collection',
        blocks: [
          {
            type: 'p',
            html: 'All file conversion, parsing, and processing happens entirely in your browser using JavaScript. Your data — whether you paste it, upload it, or fetch it from a URL — never leaves your device. I don\u2019t have servers that receive or store your files.',
          },
        ],
      },
      {
        heading: 'No Accounts, No Tracking',
        blocks: [
          {
            type: 'p',
            html: 'You don\u2019t need an account to use this tool. I don\u2019t use analytics scripts that track your behavior across sites without your consent. The only analytics I run is Google Analytics with basic page view data (no user-level tracking), which helps me understand which features people use most.',
          },
        ],
      },
      {
        heading: 'Cookies &amp; Consent',
        blocks: [
          {
            type: 'p',
            html: 'I use minimal cookies:',
          },
          {
            type: 'ul',
            items: [
              'A cookie to remember your theme preference (light/dark mode). This is strictly functional and always set.',
              'Google Analytics uses its own cookies for aggregate page view statistics — only loaded after you accept the cookie banner.',
              'Google AdSense sets cookies for ad delivery and personalization — only loaded after you accept the cookie banner.',
            ],
          },
          {
            type: 'p',
            html: 'Non-essential scripts (analytics and ads) are blocked until you click "Got it" on the cookie banner. Your choice is saved locally so the banner doesn\u2019t reappear. See our <a href="/cookies">Cookie Policy</a> for details.',
          },
        ],
      },
      {
        heading: 'Advertising',
        blocks: [
          {
            type: 'p',
            html: 'This site uses Google AdSense to serve ads. Google, as a third-party vendor, uses cookies to serve ads based on a user\u2019s prior visits to this website and other sites. Google\u2019s use of advertising cookies enables it and its partners to serve ads based on your visit to this site and other sites on the internet.',
          },
          {
            type: 'p',
            html: 'You can opt out of personalized advertising by visiting <a href="https://adssettings.google.com" target="_blank" rel="noopener">Google\u2019s Ads Settings</a>. You can also opt out of third-party vendor cookies by visiting <a href="https://optout.networkadvertising.org" target="_blank" rel="noopener">the Network Advertising Initiative opt-out page</a>.',
          },
          {
            type: 'p',
            html: 'AdSense scripts are only loaded after you accept the cookie banner. No ad cookies are set until you give consent.',
          },
        ],
      },
      {
        heading: 'Third-Party Vendors',
        blocks: [
          {
            type: 'ul',
            items: [
              '<strong>Google AdSense</strong> — serves contextual and personalized ads. Uses cookies (<code>_gads</code>, <code>_gac_</code>, <code>IDE</code>) for ad delivery and frequency capping.',
              '<strong>Google Analytics</strong> — collects aggregate page view data. Uses cookies (<code>_ga</code>, <code>_gid</code>, <code>_gat</code>) for anonymous usage statistics.',
              '<strong>Google AMP</strong> — serves auto-ads on supported pages.',
            ],
          },
          {
            type: 'p',
            html: 'These services may collect information about your visits across different websites to provide relevant advertising. You can review Google\u2019s Privacy Policy at <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">policies.google.com/privacy</a>.',
          },
        ],
      },
      {
        heading: 'External Services',
        blocks: [
          {
            type: 'p',
            html: 'If you use the <strong>URL Fetch</strong> feature with the CORS proxy enabled, your request routes through a third-party proxy service. That service sees the URL you request but not your personal information. The CORS proxy is off by default and only activated when you check the box.',
          },
        ],
      },
      {
        heading: 'Changes',
        blocks: [
          {
            type: 'p',
            html: 'If this policy changes, I\u2019ll update the date at the top and post a notice on the site for significant changes.',
          },
        ],
      },
      {
        heading: 'Contact',
        blocks: [
          {
            type: 'p',
            html: 'Questions about this policy or your data? <a href="/contact">Get in touch</a> or <a href="https://github.com/NaimBiswas/convert/issues/new" target="_blank" rel="noopener">open a GitHub issue</a>.',
          },
        ],
      },
    ],
  },
  terms: {
    meta: {
      title: 'Terms & Conditions',
      description:
        'Data Converter terms and conditions — free to use, no warranty, your responsibility.',
      keywords: 'terms and conditions, terms of service, data converter',
    },
    h1: 'Terms &amp; Conditions',
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Terms', url: '/terms' },
    ],
    lastUpdated: 'Last updated: July 2026',
    sections: [
      {
        heading: 'Use at Your Own Risk',
        blocks: [
          {
            type: 'p',
            html: 'Data Converter is provided free of charge, as-is, without any warranty. I work hard to make sure conversions are accurate, but I can\u2019t guarantee they\u2019ll be perfect for every edge case. You\u2019re responsible for verifying your converted data before using it in production or any important context.',
          },
        ],
      },
      {
        heading: 'What You Can Do',
        blocks: [
          {
            type: 'p',
            html: 'You\u2019re free to use this tool for personal, commercial, or educational purposes. No attribution required.',
          },
        ],
      },
      {
        heading: 'What You Can\u2019t Do',
        blocks: [
          {
            type: 'ul',
            items: [
              'Scrape, crawl, or systematically download content from this site.',
              'Use the tool to process illegal content or data you don\u2019t have rights to.',
              'Attempt to break, overload, or exploit the site.',
            ],
          },
        ],
      },
      {
        heading: 'No Liability',
        blocks: [
          {
            type: 'p',
            html: 'I\u2019m not liable for any damages or data loss resulting from your use of this tool. Since all processing happens locally in your browser, I don\u2019t have access to your data and can\u2019t be responsible for what happens to it.',
          },
        ],
      },
      {
        heading: 'Changes',
        blocks: [
          {
            type: 'p',
            html: 'I may update these terms. Continued use after changes means you accept the updated terms.',
          },
        ],
      },
      {
        heading: 'Contact',
        blocks: [
          {
            type: 'p',
            html: 'If you have questions about these terms, <a href="/contact">reach out</a>.',
          },
        ],
      },
    ],
  },
  cookies: {
    meta: {
      title: 'Cookie Policy',
      description: 'Data Converter cookie policy — minimal, functional cookies only.',
      keywords: 'cookie policy, cookies, Google Analytics, data converter',
    },
    h1: 'Cookie Policy',
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Cookies', url: '/cookies' },
    ],
    lastUpdated: 'Last updated: July 2026',
    intro: 'Data Converter uses very few cookies. Here\u2019s exactly what they do.',
    sections: [
      {
        heading: 'Functional Cookies',
        blocks: [
          {
            type: 'cookieTable',
            columns: { cookie: 'Cookie', purpose: 'Purpose', duration: 'Duration' },
            rows: [
              {
                cookie: 'theme',
                purpose: 'Remembers your light/dark mode preference so the site looks right when you come back.',
                duration: '1 year',
              },
            ],
          },
        ],
      },
      {
        heading: 'Cookie Consent',
        blocks: [
          {
            type: 'p',
            html: 'When you first visit the site, a banner appears asking for your consent to set non-essential cookies. Analytics and advertising scripts only load after you click "Got it". Your choice is saved in localStorage so you won\u2019t see the banner again. You can clear your browser data to reset this preference.',
          },
        ],
      },
      {
        heading: 'Analytics',
        blocks: [
          {
            type: 'p',
            html: 'I use Google Analytics to see which pages people visit and how the site is used. Google Analytics sets its own cookies (<code>_ga</code>, <code>_gid</code>, <code>_gat</code>) that track anonymous, aggregate usage data. I don\u2019t use this data to identify individual users. Analytics only loads after you accept the cookie banner.',
          },
        ],
      },
      {
        heading: 'Advertising',
        blocks: [
          {
            type: 'p',
            html: 'I serve ads via Google AdSense to support the site. AdSense sets cookies for ad personalization and frequency capping. These scripts only load after you accept the cookie banner.',
          },
        ],
      },
      {
        heading: 'Managing Cookies',
        blocks: [
          {
            type: 'p',
            html: 'Most browsers let you control cookies through their settings. You can block or delete cookies at any time. If you disable cookies, the theme preference won\u2019t persist between visits, but the converter tool itself will still work fine.',
          },
        ],
      },
      {
        heading: 'Contact',
        blocks: [
          {
            type: 'p',
            html: 'Questions about cookies? <a href="/contact">Let me know</a>.',
          },
        ],
      },
    ],
  },
};
