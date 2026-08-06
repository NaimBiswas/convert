import type { HomeContent, ConverterContentMap } from './types';

export const converterContent: ConverterContentMap = {
  'json-to-csv': {
    meta: {
      title: 'JSON to CSV Converter — Convert JSON to CSV Online Free',
      description:
        'Convert JSON to CSV online free. Paste JSON, upload a file, or fetch from URL. Handles nested objects, arrays, and large files. 100% browser-based, no uploads.',
      keywords: 'json to csv, json to csv converter, convert json to csv, json to csv online, json to csv free',
    },
    h1: 'JSON to CSV Converter',
    desc: 'Convert your JSON data to CSV format instantly — right in your browser. Supports nested objects (flattened with <code>_</code> separator), arrays of objects, and large files. No uploads, no servers, no limits.',
    from: 'JSON',
    to: 'CSV',
    slug: 'json-to-csv',
    path: '/json-to-csv-converter',
    sections: [
      {
        heading: 'Why Convert JSON to CSV?',
        blocks: [
          {
            type: 'p',
            html: 'JSON is the native format for APIs and web applications, but CSV is what spreadsheets, databases, and analytics tools speak natively. Converting JSON to CSV lets you take API responses, configuration exports, or webhook payloads and open them directly in Excel, Google Sheets, or import them into PostgreSQL, MySQL, or any data analysis pipeline.',
          },
          {
            type: 'p',
            html: 'Common use cases include exporting user records from a REST API for a marketing team, converting geolocation data from a mapping API into a table for GIS analysis, or transforming e-commerce product catalogs from JSON feeds into CSV for price comparison tools.',
          },
        ],
      },
      {
        heading: 'How Nested JSON Gets Handled',
        blocks: [
          {
            type: 'p',
            html: 'CSV is flat — every row has the same columns. When your JSON has nested objects (like <code>&lbrace;"user": &lbrace;"name": "Alice", "address": &lbrace;"city": "NYC"&rbrace;&rbrace;&rbrace;</code>), the converter flattens keys using an underscore separator: <code>user_name</code>, <code>user_address_city</code>. Arrays of objects expand into multiple rows. Primitive arrays (like <code>["red", "blue"]</code>) are joined with semicolons into a single cell.',
          },
          {
            type: 'p',
            html: 'This means a deeply nested API response becomes a clean, flat table without losing any data. You can see every field as a column heading and every record as a row.',
          },
        ],
      },
      {
        heading: 'How to Convert JSON to CSV',
        blocks: [
          {
            type: 'list',
            ordered: true,
            items: [
              'Select <strong>JSON</strong> as source and <strong>CSV</strong> as target format',
              'Paste your JSON, upload a <code>.json</code> file, or fetch from a URL',
              'Click <strong>Convert</strong> or press <kbd>Ctrl+Enter</kbd>',
              'Preview the result, edit inline if needed, then download as CSV',
            ],
          },
        ],
      },
      {
        heading: 'Features',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Handles nested JSON objects — flattens keys with <code>_</code> separator',
              'Arrays of objects become rows; primitive arrays join with semicolons',
              'Type inference for numbers, booleans, dates, and strings',
              'Smart header detection and column ordering',
              'Inline editing, sorting, filtering before download',
            ],
          },
        ],
      },
      {
        heading: 'Real-World Examples',
        blocks: [
          {
            type: 'p',
            html: '<strong>API data export:</strong> An e-commerce store fetches product data from Shopify\u2019s API (JSON). Converting to CSV lets the inventory team import it into their warehouse management spreadsheet.',
          },
          {
            type: 'p',
            html: '<strong>Database migration:</strong> A developer exports user profiles from MongoDB as JSON, converts to CSV, and bulk-imports into PostgreSQL using <code>COPY</code>.',
          },
          {
            type: 'p',
            html: '<strong>Data analysis:</strong> A data analyst pulls JSON from Google Analytics Reporting API, converts to CSV, and opens it in R or Python pandas for statistical analysis.',
          },
        ],
      },
    ],
  },
  'csv-to-json': {
    meta: {
      title: 'CSV to JSON Converter — Convert CSV to JSON Online Free',
      description:
        'Convert CSV to JSON online free. Paste CSV data or upload a .csv file. Smart header detection, type inference, and nested object support. 100% browser-based.',
      keywords: 'csv to json, csv to json converter, convert csv to json, csv to json online, csv to json free',
    },
    h1: 'CSV to JSON Converter',
    desc: 'Turn your CSV spreadsheets into clean JSON objects — instantly. Perfect for importing tabular data into APIs, databases, or JavaScript applications. Smart column typing and header detection built in.',
    from: 'CSV',
    to: 'JSON',
    slug: 'csv-to-json',
    path: '/csv-to-json-converter',
    sections: [
      {
        heading: 'Why Convert CSV to JSON?',
        blocks: [
          {
            type: 'p',
            html: 'CSV is the lingua franca of spreadsheets and database exports, but JSON is what web APIs, NoSQL databases, and modern JavaScript/TypeScript applications consume natively. Converting CSV to JSON lets you take any tabular data — from bank statements to survey results — and use it directly in your application code.',
          },
          {
            type: 'p',
            html: 'Typical scenarios include loading product inventory from an ERP spreadsheet into a headless CMS, importing customer lists from CSV exports into a Firebase or MongoDB collection, or preparing test fixtures from existing tabular data for unit tests.',
          },
        ],
      },
      {
        heading: 'How Rows Become JSON',
        blocks: [
          {
            type: 'p',
            html: 'Each row in the CSV becomes one JSON object. The first row provides the keys (column headers), and subsequent rows provide the values. For example:',
          },
          {
            type: 'code',
            html: 'name,age,city<br>Alice,30,NYC<br>Bob,25,LA',
          },
          {
            type: 'p',
            html: 'becomes:',
          },
          {
            type: 'code',
            html: '[&lbrace;"name":"Alice","age":30,"city":"NYC"&rbrace;,&lbrace;"name":"Bob","age":25,"city":"LA"&rbrace;]',
          },
          {
            type: 'p',
            html: 'The converter detects column types automatically: quoted strings stay strings, unquoted numbers become numbers, and common date formats are preserved. Empty cells are included as <code>null</code> so downstream code can handle missing data explicitly.',
          },
        ],
      },
      {
        heading: 'How to Convert CSV to JSON',
        blocks: [
          {
            type: 'list',
            ordered: true,
            items: [
              'Select <strong>CSV</strong> as source and <strong>JSON</strong> as target format',
              'Paste your CSV, upload a <code>.csv</code> file, or fetch from a URL',
              'Click <strong>Convert</strong> or press <kbd>Ctrl+Enter</kbd>',
              'Preview the result, edit inline if needed, then download as JSON',
            ],
          },
        ],
      },
      {
        heading: 'Features',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Detects column types: strings, numbers, booleans, dates',
              'First row is treated as headers for key names',
              'Output as array of objects (default) or array of arrays',
              'Preserves empty cells versus missing keys',
              'Inline editing, sorting, filtering before download',
            ],
          },
        ],
      },
      {
        heading: 'Common Use Cases',
        blocks: [
          {
            type: 'p',
            html: '<strong>API integration:</strong> Your partner sends a CSV of daily transactions. Convert to JSON and POST directly to your REST endpoint.',
          },
          {
            type: 'p',
            html: '<strong>Database seeding:</strong> Export a reference table from MySQL as CSV, convert to JSON, and use it as seed data for MongoDB or a Firebase collection.',
          },
          {
            type: 'p',
            html: '<strong>Frontend development:</strong> A designer provides data in a spreadsheet. Convert to JSON and import it directly into a React/Vue component\u2019s state or mock service worker.',
          },
        ],
      },
    ],
  },
  'excel-to-json': {
    meta: {
      title: 'Excel to JSON Converter — Convert XLSX to JSON Online Free',
      description:
        'Convert Excel (.xlsx) to JSON online free. Upload your spreadsheet and get clean JSON output. Multi-sheet support, type inference, and nested object handling. 100% browser-based.',
      keywords: 'excel to json, xlsx to json, excel to json converter, convert excel to json, xlsx to json online',
    },
    h1: 'Excel to JSON Converter',
    desc: 'Convert your Excel spreadsheets (<code>.xlsx</code>) to JSON format with one click. Supports multiple sheets, column type detection, and large files up to 50 MB. All processing happens in your browser.',
    from: 'Excel (XLSX)',
    to: 'JSON',
    slug: 'excel-to-json',
    path: '/excel-to-json-converter',
    sections: [
      {
        heading: 'Why Convert Excel to JSON?',
        blocks: [
          {
            type: 'p',
            html: 'Excel spreadsheets are the backbone of business data — financial reports, inventory lists, HR records, survey results. But XLSX is a binary format that no web API, database, or server-side script can read directly. Converting Excel to JSON unlocks that data for programmatic use: feeding it into a REST endpoint, importing it into MongoDB or Firebase, or using it in a React/Vue dashboard.',
          },
        ],
      },
      {
        heading: 'How Excel Data Maps to JSON',
        blocks: [
          {
            type: 'p',
            html: 'Each sheet becomes a JSON array of objects. The first row of the sheet provides the property names (keys), and every subsequent row becomes one JSON object. For workbooks with multiple sheets, you can select exactly which sheet to convert.',
          },
          {
            type: 'p',
            html: 'Cell formatting is handled automatically: dates become ISO 8601 strings (e.g., <code>"2026-03-15T00:00:00.000Z"</code>), numbers stay as numbers without quotes, and empty cells are rendered as <code>null</code> so downstream code can handle missing data explicitly. Formulas are evaluated to their current computed values before conversion.',
          },
        ],
      },
      {
        heading: 'How to Convert Excel to JSON',
        blocks: [
          {
            type: 'list',
            ordered: true,
            items: [
              'Select <strong>Excel (XLSX)</strong> as source and <strong>JSON</strong> as target format',
              'Upload your <code>.xlsx</code> file via drag &amp; drop or browse',
              'Pick a sheet if the workbook has multiple sheets',
              'Click <strong>Convert</strong> or press <kbd>Ctrl+Enter</kbd>',
              'Preview, edit, and download as JSON',
            ],
          },
        ],
      },
      {
        heading: 'Features',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Multi-sheet workbook support — select which sheet to convert',
              'First row auto-detected as JSON property names',
              'Type inference for numbers, dates, booleans, and strings',
              'Empty cells become <code>null</code> in JSON',
              'Files up to 50 MB supported',
            ],
          },
        ],
      },
      {
        heading: 'Real-World Examples',
        blocks: [
          {
            type: 'p',
            html: '<strong>Financial reporting:</strong> Your finance team shares a monthly P&amp;L as an Excel workbook. Convert each sheet to JSON and feed it into a custom analytics dashboard.',
          },
          {
            type: 'p',
            html: '<strong>Data migration:</strong> A legacy system only exports customer records as .xlsx files. Convert to JSON and bulk-import into PostgreSQL, MongoDB, or a cloud data warehouse like BigQuery.',
          },
          {
            type: 'p',
            html: '<strong>Content management:</strong> A product catalog lives in Excel with columns for SKU, name, price, and description. Convert to JSON and push directly to a headless CMS or e-commerce API.',
          },
        ],
      },
    ],
  },
  'json-to-excel': {
    meta: {
      title: 'JSON to Excel Converter — Convert JSON to XLSX Online Free',
      description:
        'Convert JSON to Excel (.xlsx) online free. Paste JSON or upload a file, get a downloadable spreadsheet. Handles nested objects, arrays, and large datasets. 100% browser-based.',
      keywords: 'json to excel, json to xlsx, json to excel converter, convert json to excel, json to xlsx online',
    },
    h1: 'JSON to Excel Converter',
    desc: 'Convert JSON data into a downloadable Excel spreadsheet (<code>.xlsx</code>). Perfect for taking API responses, configuration files, or web data and turning them into business-ready spreadsheets with proper column types and formatting.',
    from: 'JSON',
    to: 'Excel (XLSX)',
    slug: 'json-to-excel',
    path: '/json-to-excel-converter',
    sections: [
      {
        heading: 'Why Convert JSON to Excel?',
        blocks: [
          {
            type: 'p',
            html: 'JSON is the native format for APIs and developer tooling, but Excel is what managers, analysts, and business teams expect. Converting JSON to XLSX bridges that gap — take raw API responses, webhook payloads, or database exports and turn them into clean spreadsheets that anyone can open in Microsoft Excel, Google Sheets, or Apple Numbers without any technical setup.',
          },
          {
            type: 'p',
            html: 'This is especially useful when you need to share data with non-technical stakeholders: instead of handing them a JSON file and explaining how to read it, you deliver a familiar spreadsheet with proper column headers, data types, and formatting.',
          },
        ],
      },
      {
        heading: 'How Nested JSON Appears in Excel',
        blocks: [
          {
            type: 'p',
            html: 'JSON data is often nested — objects within objects, arrays of objects, mixed types. The converter flattens nested keys using an underscore separator. For example, <code>&lbrace;"user": &lbrace;"name": "Alice", "contact": &lbrace;"email": "a@b.com"&rbrace;&rbrace;&rbrace;</code> becomes columns <code>user_name</code> and <code>user_contact_email</code>.',
          },
          {
            type: 'p',
            html: 'Arrays of objects expand into multiple rows. Primitive arrays (like <code>["red", "blue"]</code>) are joined into a single cell with semicolons. Each JSON object becomes one row, and each key-value pair becomes a cell with the correct data type — numbers stay numeric, dates remain dates, so pivot tables and formulas work immediately.',
          },
        ],
      },
      {
        heading: 'How to Convert JSON to Excel',
        blocks: [
          {
            type: 'list',
            ordered: true,
            items: [
              'Select <strong>JSON</strong> as source and <strong>Excel (XLSX)</strong> as target format',
              'Paste your JSON, upload a <code>.json</code> file, or fetch from a URL',
              'Click <strong>Convert</strong> or press <kbd>Ctrl+Enter</kbd>',
              'Preview the table, customize the sheet name and column widths',
              'Download as <code>.xlsx</code>',
            ],
          },
        ],
      },
      {
        heading: 'Features',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Nested JSON objects flattened into columns with <code>_</code> separator',
              'Arrays of objects become rows in the spreadsheet',
              'Type-aware columns — numbers, dates, and text preserved',
              'Custom sheet name and auto-width options before download',
              'Supports JSON arrays, nested objects, and mixed structures',
            ],
          },
        ],
      },
      {
        heading: 'When to Use This',
        blocks: [
          {
            type: 'p',
            html: '<strong>Reporting:</strong> Pull data from your backend API (user signups, revenue, page views) and convert to Excel for a weekly business review presentation.',
          },
          {
            type: 'p',
            html: '<strong>Data analysis:</strong> Export JSON from a database query tool, convert to XLSX, and open in Excel for pivot tables, charts, and what-if analysis.',
          },
          {
            type: 'p',
            html: '<strong>Client delivery:</strong> A client\u2019s system sends data as JSON via webhook. Convert to a clean spreadsheet for them to review without needing engineering help.',
          },
        ],
      },
    ],
  },
  'excel-to-csv': {
    meta: {
      title: 'Excel to CSV Converter — Convert XLSX to CSV Online Free',
      description:
        'Convert Excel (.xlsx) to CSV online free. Upload your spreadsheet and download as plain CSV. Multi-sheet support, 50 MB limit, browser-based processing.',
      keywords: 'excel to csv, xlsx to csv, excel to csv converter, convert excel to csv, xlsx to csv online',
    },
    h1: 'Excel to CSV Converter',
    desc: 'Convert your Excel spreadsheets to plain CSV format — fast, free, and private. Ideal for migrating data between systems, importing into databases, or preparing files for data analysis tools.',
    from: 'Excel (XLSX)',
    to: 'CSV',
    slug: 'excel-to-csv',
    path: '/excel-to-csv-converter',
    sections: [
      {
        heading: 'Why Convert Excel to CSV?',
        blocks: [
          {
            type: 'p',
            html: 'CSV is the lowest-common-denominator data format — every spreadsheet app, database, ETL pipeline, and data analysis tool can read it without special libraries or licensing. Converting XLSX to CSV strips away formatting, charts, macros, and proprietary binary structures, leaving you with clean, portable tabular data that works everywhere.',
          },
          {
            type: 'p',
            html: 'This is the go-to step when you need to move data between systems: from Excel into PostgreSQL (via <code>COPY</code>), into Python pandas or R for analysis, into a cloud data warehouse like BigQuery or Snowflake, or into a CRM import tool that only accepts CSV files.',
          },
        ],
      },
      {
        heading: 'What CSV Loses (and Why That\u2019s Good)',
        blocks: [
          {
            type: 'p',
            html: 'Excel files carry a lot of overhead — cell colors, fonts, merged cells, formulas, charts, pivot tables, macros, and custom XML. CSV drops all of that and keeps only the raw data: rows and columns of plain text separated by commas. This makes CSV files much smaller, faster to parse, and universally compatible. Formulas are evaluated to their current values before export, so you get the results, not the formula syntax.',
          },
        ],
      },
      {
        heading: 'How to Convert Excel to CSV',
        blocks: [
          {
            type: 'list',
            ordered: true,
            items: [
              'Select <strong>Excel (XLSX)</strong> as source and <strong>CSV</strong> as target format',
              'Upload your <code>.xlsx</code> file via drag &amp; drop or browse',
              'Select a sheet if the workbook contains multiple sheets',
              'Click <strong>Convert</strong> or press <kbd>Ctrl+Enter</kbd>',
              'Preview and download as CSV',
            ],
          },
        ],
      },
      {
        heading: 'Features',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Multi-sheet Excel workbooks supported',
              'Proper CSV quoting — handles commas and line breaks in cells',
              'Header row preserved from Excel column names',
              'Files up to 50 MB supported',
              'No formatting or metadata carried over — clean data only',
            ],
          },
        ],
      },
      {
        heading: 'When to Use This Conversion',
        blocks: [
          {
            type: 'p',
            html: '<strong>Database import:</strong> You have a spreadsheet of customer records to bulk-import into PostgreSQL, MySQL, or SQLite. CSV is the standard input format for <code>COPY</code> and <code>LOAD DATA</code> commands.',
          },
          {
            type: 'p',
            html: '<strong>Data analysis:</strong> Export an Excel report to CSV and load it into Python (pandas), R, or Jupyter Notebook for statistical modeling, visualization, or machine learning.',
          },
          {
            type: 'p',
            html: '<strong>System migration:</strong> Moving from one CRM, ERP, or accounting system to another. Almost every migration tool accepts CSV as the intermediary format.',
          },
          {
            type: 'p',
            html: '<strong>Version control:</strong> Track changes to tabular data in git. CSV files diff cleanly, while binary .xlsx files are unreadable to git.',
          },
        ],
      },
    ],
  },
};

export const homeContent: HomeContent = {
  meta: {
    title: 'Free Online Data Converter — JSON, CSV, Excel, XML, YAML Tool',
    description:
      'Convert JSON, CSV, Excel, XML, YAML, HTML, Markdown, and more — all in your browser. No uploads, 100% private.',
    keywords:
      'data converter, JSON to CSV, Excel to JSON, CSV to JSON, XML to JSON, free online tool, format converter',
  },
  hero: {
    h1: 'Free Online Data Converter — JSON, CSV, Excel, XML &amp; YAML',
    descs: [
      'Data Converter is a free online tool that lets developers, analysts, QA engineers, and businesses convert structured data between JSON, XML, CSV, Excel, YAML, and other formats.',
      'Unlike many online converters, everything runs directly inside your browser. Your data is never uploaded to our servers, making conversions secure and private.',
      'Whether you\u2019re debugging APIs, migrating databases, transforming configuration files, or preparing spreadsheets, Data Converter simplifies the process.',
    ],
    trust: '100% client-side processing — your data never reaches any server',
  },
  features: {
    heading: 'Convert Between All Major Data Formats',
    cards: [
      {
        title: 'JSON Converter',
        desc: 'Convert JSON to CSV, Excel, XML, YAML, HTML, Markdown, or PDF. Handles nested objects, arrays, and large files.',
        link: '/json-to-csv-converter',
        icon: 'json',
      },
      {
        title: 'CSV Converter',
        desc: 'Convert CSV to JSON, Excel, XML, YAML, and more. Smart header detection and type inference built in.',
        link: '/csv-to-json-converter',
        icon: 'csv',
      },
      {
        title: 'Excel Converter',
        desc: 'Convert Excel (.xlsx) to JSON, CSV, XML, YAML with multi-sheet support. Upload and convert instantly.',
        link: '/excel-to-json-converter',
        icon: 'excel',
      },
      {
        title: 'XML &amp; YAML Converter',
        desc: 'Convert XML or YAML to JSON, CSV, Excel, and other formats. Nested element flattening with underscore separator.',
        link: '/json-to-excel-converter',
        icon: 'xml',
      },
      {
        title: 'Image Converter',
        desc: 'Convert images to PNG, JPG, or WebP in your browser. Quality slider, dimension preview, and instant download.',
        link: '/image-converter',
        icon: 'image',
      },
    ],
  },
  howItWorks: {
    heading: 'How to Convert Data Online Free',
    steps: [
      { title: 'Select formats', desc: 'choose source and target format in the converter bar' },
      { title: 'Paste or upload', desc: 'paste data, upload a file, or fetch from a URL' },
      { title: 'Convert instantly', desc: 'click Convert or press Ctrl+Enter' },
      { title: 'Edit &amp; export', desc: 'preview, sort, edit, and download in any format' },
    ],
  },
  useCases: {
    heading: 'Why Use Data Converter?',
    sub: 'Everything runs client-side — your files never leave your device. No sign-ups, no limits, completely free.',
    cards: [
      {
        icon: 'api',
        title: 'API Development',
        desc: 'Convert JSON API responses to CSV for spreadsheet analysis, or transform CSV data into JSON for API testing.',
      },
      {
        icon: 'db',
        title: 'Database Migrations',
        desc: 'Convert Excel sheets or CSV exports to JSON or XML for import into MongoDB, PostgreSQL, Firebase, and more.',
      },
      {
        icon: 'config',
        title: 'Config Management',
        desc: 'Translate YAML config files to JSON for JavaScript apps, or convert JSON configs to YAML for Docker and Kubernetes.',
      },
      {
        icon: 'report',
        title: 'Data Reporting',
        desc: 'Convert JSON or XML data into formatted HTML tables or Markdown for documentation, reports, and presentations.',
      },
      {
        icon: 'sheet',
        title: 'Spreadsheet Processing',
        desc: 'Upload Excel files, edit cell values, filter rows, and export as CSV, JSON, or PDF — all in your browser.',
      },
    ],
  },
  formats: {
    heading: 'Supported Conversions',
    sub: 'Every format pair you need, one click away',
    cards: [
      {
        label: 'JSON',
        targets: ['CSV', 'Excel', 'XML', 'YAML', 'HTML', 'Markdown', 'PDF'],
        tag: 'API data, config files',
      },
      {
        label: 'CSV',
        targets: ['JSON', 'Excel', 'XML', 'YAML', 'HTML', 'Markdown', 'PDF'],
        tag: 'Spreadsheets, DB exports',
      },
      {
        label: 'Excel',
        targets: ['JSON', 'CSV', 'XML', 'YAML', 'HTML', 'Markdown', 'PDF'],
        tag: 'Business reports, multi-sheet',
      },
      {
        label: 'XML',
        targets: ['JSON', 'CSV', 'Excel', 'YAML', 'HTML', 'Markdown', 'PDF'],
        tag: 'Legacy systems, web services',
      },
      {
        label: 'YAML',
        targets: ['JSON', 'CSV', 'Excel', 'XML', 'HTML', 'Markdown', 'PDF'],
        tag: 'Docker, Kubernetes, CI/CD',
      },
      {
        label: 'PNG',
        targets: ['JPG', 'WebP'],
        tag: 'Web graphics, logos, transparency',
      },
      {
        label: 'JPG',
        targets: ['PNG', 'WebP'],
        tag: 'Photos, sharing, the web',
      },
      {
        label: 'WebP',
        targets: ['JPG', 'PNG'],
        tag: 'Small, fast web images',
      },
    ],
  },
};
