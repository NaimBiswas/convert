import type { HomeContent, ConverterContentMap } from './types';

export const de: ConverterContentMap = {
  'json-to-csv': {
    meta: {
      title: 'JSON zu CSV Konverter — JSON online kostenlos in CSV umwandeln',
      description:
        'JSON online kostenlos in CSV umwandeln. JSON einfügen, Datei hochladen oder per URL abrufen. Verarbeitet verschachtelte Objekte, Arrays und große Dateien. 100% im Browser, ohne Uploads.',
      keywords: 'json zu csv, json in csv umwandeln, json zu csv konverter, json zu csv online, json zu csv kostenlos',
    },
    h1: 'JSON zu CSV Konverter',
    desc: 'Konvertieren Sie Ihre JSON-Daten direkt im Browser in das CSV-Format. Unterstützt verschachtelte Objekte (mit <code>_</code>-Trennzeichen abgeflacht), Objekt-Arrays und große Dateien. Keine Uploads, keine Server, keine Limits.',
    from: 'JSON',
    to: 'CSV',
    slug: 'json-to-csv',
    path: '/json-to-csv-converter',
    sections: [
      {
        heading: 'Warum JSON zu CSV konvertieren?',
        blocks: [
          {
            type: 'p',
            html: 'JSON ist das native Format für APIs und Webanwendungen, aber CSV ist die Sprache, die Tabellenkalkulationen, Datenbanken und Analyse-Tools nativ sprechen. Die Konvertierung von JSON zu CSV ermöglicht es Ihnen, API-Antworten, Konfigurationsexporte oder Webhook-Payloads direkt in Excel oder Google Sheets zu öffnen oder in PostgreSQL, MySQL oder eine beliebige Datenanalyse-Pipeline zu importieren.',
          },
          {
            type: 'p',
            html: 'Zu den häufigen Anwendungsfällen gehören der Export von Benutzerdatensätzen aus einer REST-API für ein Marketing-Team, die Umwandlung von Geodaten aus einer Mapping-API in eine Tabelle für GIS-Analysen oder die Umwandlung von E-Commerce-Produktkatalogen aus JSON-Feeds in CSV für Preisvergleichs-Tools.',
          },
        ],
      },
      {
        heading: 'Wie verschachteltes JSON behandelt wird',
        blocks: [
          {
            type: 'p',
            html: 'CSV ist flach — jede Zeile hat dieselben Spalten. Wenn Ihr JSON verschachtelte Objekte enthält (wie <code>&lbrace;"user": &lbrace;"name": "Alice", "address": &lbrace;"city": "NYC"&rbrace;&rbrace;&rbrace;</code>), flacht der Konverter Schlüssel mit einem Unterstrich-Trennzeichen ab: <code>user_name</code>, <code>user_address_city</code>. Objekt-Arrays werden in mehrere Zeilen aufgeteilt. Primitive Arrays (wie <code>["red", "blue"]</code>) werden mit Semikolons zu einer einzelnen Zelle verbunden.',
          },
          {
            type: 'p',
            html: 'Das bedeutet, dass eine tief verschachtelte API-Antwort zu einer sauberen, flachen Tabelle wird, ohne dass Daten verloren gehen. Sie sehen jedes Feld als Spaltenüberschrift und jeden Datensatz als Zeile.',
          },
        ],
      },
      {
        heading: 'So konvertieren Sie JSON zu CSV',
        blocks: [
          {
            type: 'list',
            ordered: true,
            items: [
              'Wählen Sie <strong>JSON</strong> als Quellformat und <strong>CSV</strong> als Zielformat',
              'Fügen Sie Ihr JSON ein, laden Sie eine <code>.json</code>-Datei hoch oder rufen Sie es per URL ab',
              'Klicken Sie auf <strong>Konvertieren</strong> oder drücken Sie <kbd>Ctrl+Enter</kbd>',
              'Sehen Sie sich das Ergebnis in der Vorschau an, bearbeiten Sie es bei Bedarf inline und laden Sie es als CSV herunter',
            ],
          },
        ],
      },
      {
        heading: 'Funktionen',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Verarbeitet verschachtelte JSON-Objekte — Schlüssel werden mit <code>_</code>-Trennzeichen abgeflacht',
              'Objekt-Arrays werden zu Zeilen; primitive Arrays werden mit Semikolons verbunden',
              'Typerkennung für Zahlen, Boolesche Werte, Datumsangaben und Zeichenketten',
              'Intelligente Header-Erkennung und Spaltenreihenfolge',
              'Inline-Bearbeitung, Sortierung und Filterung vor dem Download',
            ],
          },
        ],
      },
      {
        heading: 'Praxisbeispiele',
        blocks: [
          {
            type: 'p',
            html: '<strong>API-Datenexport:</strong> Ein E-Commerce-Shop ruft Produktdaten von der Shopify-API (JSON) ab. Durch die Konvertierung in CSV kann das Lagerteam sie in seine Lagerverwaltungs-Tabelle importieren.',
          },
          {
            type: 'p',
            html: '<strong>Datenbankmigration:</strong> Ein Entwickler exportiert Benutzerprofile aus MongoDB als JSON, konvertiert sie in CSV und importiert sie per <code>COPY</code> in Massen in PostgreSQL.',
          },
          {
            type: 'p',
            html: '<strong>Datenanalyse:</strong> Ein Datenanalyst ruft JSON von der Google Analytics Reporting API ab, konvertiert es in CSV und öffnet es in R oder Python pandas für statistische Analysen.',
          },
        ],
      },
    ],
  },
  'csv-to-json': {
    meta: {
      title: 'CSV zu JSON Konverter — CSV online kostenlos in JSON umwandeln',
      description:
        'CSV online kostenlos in JSON umwandeln. CSV-Daten einfügen oder eine .csv-Datei hochladen. Intelligente Header-Erkennung, Typerkennung und Unterstützung für verschachtelte Objekte. 100% im Browser.',
      keywords: 'csv zu json, csv in json umwandeln, csv zu json konverter, csv zu json online, csv zu json kostenlos',
    },
    h1: 'CSV zu JSON Konverter',
    desc: 'Verwandeln Sie Ihre CSV-Tabellen im Handumdrehen in saubere JSON-Objekte. Perfekt zum Importieren von Tabellendaten in APIs, Datenbanken oder JavaScript-Anwendungen. Intelligente Spaltentypisierung und Header-Erkennung integriert.',
    from: 'CSV',
    to: 'JSON',
    slug: 'csv-to-json',
    path: '/csv-to-json-converter',
    sections: [
      {
        heading: 'Warum CSV zu JSON konvertieren?',
        blocks: [
          {
            type: 'p',
            html: 'CSV ist die Lingua franca von Tabellenkalkulationen und Datenbankexporten, aber JSON ist das, was Web-APIs, NoSQL-Datenbanken und moderne JavaScript/TypeScript-Anwendungen nativ konsumieren. Durch die Konvertierung von CSV zu JSON können Sie beliebige Tabellendaten — von Kontoauszügen bis zu Umfrageergebnissen — direkt in Ihrem Anwendungscode verwenden.',
          },
          {
            type: 'p',
            html: 'Typische Szenarien sind das Laden von Produktbeständen aus einer ERP-Tabelle in ein Headless-CMS, das Importieren von Kundenlisten aus CSV-Exporten in eine Firebase- oder MongoDB-Collection oder das Erstellen von Test-Fixtures aus vorhandenen Tabellendaten für Unit-Tests.',
          },
        ],
      },
      {
        heading: 'Wie Zeilen zu JSON werden',
        blocks: [
          {
            type: 'p',
            html: 'Jede Zeile in der CSV wird zu einem JSON-Objekt. Die erste Zeile liefert die Schlüssel (Spaltenüberschriften), die weiteren Zeilen die Werte. Zum Beispiel:',
          },
          {
            type: 'code',
            html: 'name,age,city<br>Alice,30,NYC<br>Bob,25,LA',
          },
          {
            type: 'p',
            html: 'wird zu:',
          },
          {
            type: 'code',
            html: '[&lbrace;"name":"Alice","age":30,"city":"NYC"&rbrace;,&lbrace;"name":"Bob","age":25,"city":"LA"&rbrace;]',
          },
          {
            type: 'p',
            html: 'Der Konverter erkennt die Spaltentypen automatisch: in Anführungszeichen gesetzte Zeichenketten bleiben Zeichenketten, nicht in Anführungszeichen gesetzte Zahlen werden zu Zahlen, und gängige Datumsformate bleiben erhalten. Leere Zellen werden als <code>null</code> eingefügt, sodass nachgelagerter Code fehlende Daten explizit behandeln kann.',
          },
        ],
      },
      {
        heading: 'So konvertieren Sie CSV zu JSON',
        blocks: [
          {
            type: 'list',
            ordered: true,
            items: [
              'Wählen Sie <strong>CSV</strong> als Quellformat und <strong>JSON</strong> als Zielformat',
              'Fügen Sie Ihr CSV ein, laden Sie eine <code>.csv</code>-Datei hoch oder rufen Sie es per URL ab',
              'Klicken Sie auf <strong>Konvertieren</strong> oder drücken Sie <kbd>Ctrl+Enter</kbd>',
              'Sehen Sie sich das Ergebnis in der Vorschau an, bearbeiten Sie es bei Bedarf inline und laden Sie es als JSON herunter',
            ],
          },
        ],
      },
      {
        heading: 'Funktionen',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Erkennt Spaltentypen: Zeichenketten, Zahlen, Boolesche Werte, Datumsangaben',
              'Die erste Zeile wird als Header für die Schlüsselnamen behandelt',
              'Ausgabe als Objekt-Array (Standard) oder Array von Arrays',
              'Unterscheidet leere Zellen von fehlenden Schlüsseln',
              'Inline-Bearbeitung, Sortierung und Filterung vor dem Download',
            ],
          },
        ],
      },
      {
        heading: 'Häufige Anwendungsfälle',
        blocks: [
          {
            type: 'p',
            html: '<strong>API-Integration:</strong> Ihr Partner sendet eine CSV mit täglichen Transaktionen. Konvertieren Sie sie in JSON und posten Sie sie direkt an Ihren REST-Endpunkt.',
          },
          {
            type: 'p',
            html: '<strong>Datenbank-Seeding:</strong> Exportieren Sie eine Referenztabelle aus MySQL als CSV, konvertieren Sie sie in JSON und verwenden Sie sie als Seed-Daten für MongoDB oder eine Firebase-Collection.',
          },
          {
            type: 'p',
            html: '<strong>Frontend-Entwicklung:</strong> Ein Designer liefert Daten in einer Tabellenkalkulation. Konvertieren Sie sie in JSON und importieren Sie sie direkt in den State einer React/Vue-Komponente oder einen Mock Service Worker.',
          },
        ],
      },
    ],
  },
  'excel-to-json': {
    meta: {
      title: 'Excel zu JSON Konverter — XLSX online kostenlos in JSON umwandeln',
      description:
        'Excel (.xlsx) online kostenlos in JSON umwandeln. Laden Sie Ihre Tabellenkalkulation hoch und erhalten Sie saubere JSON-Ausgabe. Unterstützung für mehrere Tabellenblätter, Typerkennung und verschachtelte Objekte. 100% im Browser.',
      keywords: 'excel zu json, xlsx zu json, excel in json umwandeln, excel zu json konverter, xlsx zu json online',
    },
    h1: 'Excel zu JSON Konverter',
    desc: 'Konvertieren Sie Ihre Excel-Tabellen (<code>.xlsx</code>) mit einem Klick in das JSON-Format. Unterstützt mehrere Tabellenblätter, Spaltentyperkennung und große Dateien bis 50 MB. Die gesamte Verarbeitung erfolgt in Ihrem Browser.',
    from: 'Excel (XLSX)',
    to: 'JSON',
    slug: 'excel-to-json',
    path: '/excel-to-json-converter',
    sections: [
      {
        heading: 'Warum Excel zu JSON konvertieren?',
        blocks: [
          {
            type: 'p',
            html: 'Excel-Tabellen sind das Rückgrat von Geschäftsdaten — Finanzberichte, Bestandslisten, HR-Datensätze, Umfrageergebnisse. Aber XLSX ist ein binäres Format, das keine Web-API, Datenbank oder Server-Skript direkt lesen kann. Die Konvertierung von Excel zu JSON erschließt diese Daten für die programmatische Nutzung: einspeisen in einen REST-Endpunkt, importieren in MongoDB oder Firebase oder verwenden in einem React/Vue-Dashboard.',
          },
        ],
      },
      {
        heading: 'Wie Excel-Daten auf JSON abgebildet werden',
        blocks: [
          {
            type: 'p',
            html: 'Jedes Tabellenblatt wird zu einem JSON-Objekt-Array. Die erste Zeile des Blatts liefert die Eigenschaftsnamen (Schlüssel), und jede weitere Zeile wird zu einem JSON-Objekt. Bei Arbeitsmappen mit mehreren Blättern können Sie genau auswählen, welches Blatt konvertiert werden soll.',
          },
          {
            type: 'p',
            html: 'Die Zellenformatierung wird automatisch behandelt: Datumsangaben werden zu ISO-8601-Zeichenketten (z. B. <code>"2026-03-15T00:00:00.000Z"</code>), Zahlen bleiben ohne Anführungszeichen Zahlen, und leere Zellen werden als <code>null</code> dargestellt, sodass nachgelagerter Code fehlende Daten explizit behandeln kann. Formeln werden vor der Konvertierung auf ihre aktuellen berechneten Werte ausgewertet.',
          },
        ],
      },
      {
        heading: 'So konvertieren Sie Excel zu JSON',
        blocks: [
          {
            type: 'list',
            ordered: true,
            items: [
              'Wählen Sie <strong>Excel (XLSX)</strong> als Quellformat und <strong>JSON</strong> als Zielformat',
              'Laden Sie Ihre <code>.xlsx</code>-Datei per Drag &amp; Drop oder Durchsuchen hoch',
              'Wählen Sie ein Blatt aus, wenn die Arbeitsmappe mehrere Blätter enthält',
              'Klicken Sie auf <strong>Konvertieren</strong> oder drücken Sie <kbd>Ctrl+Enter</kbd>',
              'Vorschau, Bearbeitung und Download als JSON',
            ],
          },
        ],
      },
      {
        heading: 'Funktionen',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Unterstützung für Arbeitsmappen mit mehreren Blättern — wählen Sie aus, welches Blatt konvertiert werden soll',
              'Die erste Zeile wird automatisch als JSON-Eigenschaftsnamen erkannt',
              'Typerkennung für Zahlen, Datumsangaben, Boolesche Werte und Zeichenketten',
              'Leere Zellen werden in JSON zu <code>null</code>',
              'Dateien bis 50 MB werden unterstützt',
            ],
          },
        ],
      },
      {
        heading: 'Praxisbeispiele',
        blocks: [
          {
            type: 'p',
            html: '<strong>Finanzberichterstattung:</strong> Ihr Finanzteam teilt monatliche P&amp;L-Berichte als Excel-Arbeitsmappe. Konvertieren Sie jedes Blatt in JSON und speisen Sie es in ein individuelles Analyse-Dashboard ein.',
          },
          {
            type: 'p',
            html: '<strong>Datenmigration:</strong> Ein Altsystem exportiert Kundendatensätze nur als .xlsx-Dateien. Konvertieren Sie sie in JSON und importieren Sie sie in Massen in PostgreSQL, MongoDB oder ein Cloud-Data-Warehouse wie BigQuery.',
          },
          {
            type: 'p',
            html: '<strong>Content-Management:</strong> Ein Produktkatalog lebt in Excel mit Spalten für SKU, Name, Preis und Beschreibung. Konvertieren Sie ihn in JSON und übertragen Sie ihn direkt an ein Headless-CMS oder eine E-Commerce-API.',
          },
        ],
      },
    ],
  },
  'json-to-excel': {
    meta: {
      title: 'JSON zu Excel Konverter — JSON online kostenlos in XLSX umwandeln',
      description:
        'JSON online kostenlos in Excel (.xlsx) umwandeln. JSON einfügen oder Datei hochladen, herunterladbare Tabelle erhalten. Verarbeitet verschachtelte Objekte, Arrays und große Datensätze. 100% im Browser.',
      keywords: 'json zu excel, json zu xlsx, json in excel umwandeln, json zu excel konverter, json zu xlsx online',
    },
    h1: 'JSON zu Excel Konverter',
    desc: 'Konvertieren Sie JSON-Daten in eine herunterladbare Excel-Tabelle (<code>.xlsx</code>). Perfekt, um API-Antworten, Konfigurationsdateien oder Webdaten in geschäftstaugliche Tabellen mit korrekten Spaltentypen und Formatierung zu verwandeln.',
    from: 'JSON',
    to: 'Excel (XLSX)',
    slug: 'json-to-excel',
    path: '/json-to-excel-converter',
    sections: [
      {
        heading: 'Warum JSON zu Excel konvertieren?',
        blocks: [
          {
            type: 'p',
            html: 'JSON ist das native Format für APIs und Entwicklerwerkzeuge, aber Excel ist das, was Manager, Analysten und Geschäftsteams erwarten. Die Konvertierung von JSON zu XLSX überbrückt diese Lücke — nehmen Sie rohe API-Antworten, Webhook-Payloads oder Datenbankexporte und verwandeln Sie sie in saubere Tabellen, die jeder in Microsoft Excel, Google Sheets oder Apple Numbers ohne technischen Aufwand öffnen kann.',
          },
          {
            type: 'p',
            html: 'Das ist besonders nützlich, wenn Sie Daten mit nicht-technischen Stakeholdern teilen müssen: Statt ihnen eine JSON-Datei zu übergeben und zu erklären, wie man sie liest, liefern Sie eine vertraute Tabelle mit korrekten Spaltenüberschriften, Datentypen und Formatierung.',
          },
        ],
      },
      {
        heading: 'Wie verschachteltes JSON in Excel erscheint',
        blocks: [
          {
            type: 'p',
            html: 'JSON-Daten sind oft verschachtelt — Objekte in Objekten, Objekt-Arrays, gemischte Typen. Der Konverter flacht verschachtelte Schlüssel mit einem Unterstrich-Trennzeichen ab. Zum Beispiel wird <code>&lbrace;"user": &lbrace;"name": "Alice", "contact": &lbrace;"email": "a@b.com"&rbrace;&rbrace;&rbrace;</code> zu den Spalten <code>user_name</code> und <code>user_contact_email</code>.',
          },
          {
            type: 'p',
            html: 'Objekt-Arrays werden in mehrere Zeilen aufgeteilt. Primitive Arrays (wie <code>["red", "blue"]</code>) werden mit Semikolons zu einer einzelnen Zelle verbunden. Jedes JSON-Objekt wird zu einer Zeile, und jedes Schlüssel-Wert-Paar wird zu einer Zelle mit dem korrekten Datentyp — Zahlen bleiben numerisch, Datumsangaben bleiben Datumsangaben, sodass Pivot-Tabellen und Formeln sofort funktionieren.',
          },
        ],
      },
      {
        heading: 'So konvertieren Sie JSON zu Excel',
        blocks: [
          {
            type: 'list',
            ordered: true,
            items: [
              'Wählen Sie <strong>JSON</strong> als Quellformat und <strong>Excel (XLSX)</strong> als Zielformat',
              'Fügen Sie Ihr JSON ein, laden Sie eine <code>.json</code>-Datei hoch oder rufen Sie es per URL ab',
              'Klicken Sie auf <strong>Konvertieren</strong> oder drücken Sie <kbd>Ctrl+Enter</kbd>',
              'Sehen Sie sich die Tabelle in der Vorschau an und passen Sie Blattname und Spaltenbreiten an',
              'Laden Sie als <code>.xlsx</code> herunter',
            ],
          },
        ],
      },
      {
        heading: 'Funktionen',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Verschachtelte JSON-Objekte werden mit <code>_</code>-Trennzeichen zu Spalten abgeflacht',
              'Objekt-Arrays werden zu Zeilen in der Tabelle',
              'Typbewusste Spalten — Zahlen, Datumsangaben und Text bleiben erhalten',
              'Benutzerdefinierter Blattname und Auto-Breite vor dem Download',
              'Unterstützt JSON-Arrays, verschachtelte Objekte und gemischte Strukturen',
            ],
          },
        ],
      },
      {
        heading: 'Wann das verwenden?',
        blocks: [
          {
            type: 'p',
            html: '<strong>Berichterstattung:</strong> Ziehen Sie Daten aus Ihrer Backend-API (Benutzeranmeldungen, Umsatz, Seitenaufrufe) und konvertieren Sie sie in Excel für eine wöchentliche Geschäftspräsentation.',
          },
          {
            type: 'p',
            html: '<strong>Datenanalyse:</strong> Exportieren Sie JSON aus einem Datenbank-Abfragetool, konvertieren Sie es in XLSX und öffnen Sie es in Excel für Pivot-Tabellen, Diagramme und Was-wäre-wenn-Analysen.',
          },
          {
            type: 'p',
            html: '<strong>Kundenlieferung:</strong> Das System eines Kunden sendet Daten per Webhook als JSON. Konvertieren Sie sie in eine saubere Tabelle, damit der Kunde sie ohne technische Hilfe prüfen kann.',
          },
        ],
      },
    ],
  },
  'excel-to-csv': {
    meta: {
      title: 'Excel zu CSV Konverter — XLSX online kostenlos in CSV umwandeln',
      description:
        'Excel (.xlsx) online kostenlos in CSV umwandeln. Laden Sie Ihre Tabellenkalkulation hoch und laden Sie sie als reine CSV herunter. Unterstützung für mehrere Blätter, 50-MB-Limit, Verarbeitung im Browser.',
      keywords: 'excel zu csv, xlsx zu csv, excel in csv umwandeln, excel zu csv konverter, xlsx zu csv online',
    },
    h1: 'Excel zu CSV Konverter',
    desc: 'Konvertieren Sie Ihre Excel-Tabellen schnell, kostenlos und privat in das reine CSV-Format. Ideal zum Übertragen von Daten zwischen Systemen, zum Importieren in Datenbanken oder zum Vorbereiten von Dateien für Datenanalyse-Tools.',
    from: 'Excel (XLSX)',
    to: 'CSV',
    slug: 'excel-to-csv',
    path: '/excel-to-csv-converter',
    sections: [
      {
        heading: 'Warum Excel zu CSV konvertieren?',
        blocks: [
          {
            type: 'p',
            html: 'CSV ist das Datenformat des kleinsten gemeinsamen Nenners — jede Tabellenkalkulation, Datenbank, ETL-Pipeline und jedes Datenanalyse-Tool kann es ohne spezielle Bibliotheken oder Lizenzen lesen. Die Konvertierung von XLSX zu CSV entfernt Formatierung, Diagramme, Makros und proprietäre Binärstrukturen und hinterlässt saubere, portable Tabellendaten, die überall funktionieren.',
          },
          {
            type: 'p',
            html: 'Das ist der erste Schritt, wenn Sie Daten zwischen Systemen bewegen müssen: von Excel in PostgreSQL (über <code>COPY</code>), in Python pandas oder R für Analysen, in ein Cloud-Data-Warehouse wie BigQuery oder Snowflake oder in ein CRM-Import-Tool, das nur CSV-Dateien akzeptiert.',
          },
        ],
      },
      {
        heading: 'Was CSV verliert (und warum das gut ist)',
        blocks: [
          {
            type: 'p',
            html: 'Excel-Dateien tragen viel Ballast mit sich — Zellfarben, Schriftarten, zusammengeführte Zellen, Formeln, Diagramme, Pivot-Tabellen, Makros und benutzerdefiniertes XML. CSV entfernt all das und behält nur die rohen Daten: Zeilen und Spalten aus reinem Text, getrennt durch Kommas. Dadurch sind CSV-Dateien viel kleiner, schneller zu parsen und universell kompatibel. Formeln werden vor dem Export auf ihre aktuellen Werte ausgewertet, sodass Sie die Ergebnisse erhalten, nicht die Formelsyntax.',
          },
        ],
      },
      {
        heading: 'So konvertieren Sie Excel zu CSV',
        blocks: [
          {
            type: 'list',
            ordered: true,
            items: [
              'Wählen Sie <strong>Excel (XLSX)</strong> als Quellformat und <strong>CSV</strong> als Zielformat',
              'Laden Sie Ihre <code>.xlsx</code>-Datei per Drag &amp; Drop oder Durchsuchen hoch',
              'Wählen Sie ein Blatt aus, wenn die Arbeitsmappe mehrere Blätter enthält',
              'Klicken Sie auf <strong>Konvertieren</strong> oder drücken Sie <kbd>Ctrl+Enter</kbd>',
              'Vorschau und Download als CSV',
            ],
          },
        ],
      },
      {
        heading: 'Funktionen',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Excel-Arbeitsmappen mit mehreren Blättern werden unterstützt',
              'Korrekte CSV-Quote — behandelt Kommas und Zeilenumbrüche in Zellen',
              'Header-Zeile bleibt aus den Excel-Spaltennamen erhalten',
              'Dateien bis 50 MB werden unterstützt',
              'Keine Formatierung oder Metadaten werden übernommen — nur saubere Daten',
            ],
          },
        ],
      },
      {
        heading: 'Wann diese Konvertierung verwenden?',
        blocks: [
          {
            type: 'p',
            html: '<strong>Datenbankimport:</strong> Sie haben eine Tabelle mit Kundendatensätzen für den Massenimport in PostgreSQL, MySQL oder SQLite. CSV ist das Standard-Eingabeformat für <code>COPY</code>- und <code>LOAD DATA</code>-Befehle.',
          },
          {
            type: 'p',
            html: '<strong>Datenanalyse:</strong> Exportieren Sie einen Excel-Bericht als CSV und laden Sie ihn in Python (pandas), R oder Jupyter Notebook für statistische Modellierung, Visualisierung oder maschinelles Lernen.',
          },
          {
            type: 'p',
            html: '<strong>Systemmigration:</strong> Wechsel von einem CRM-, ERP- oder Buchhaltungssystem zu einem anderen. Fast jedes Migrations-Tool akzeptiert CSV als Zwischenformat.',
          },
          {
            type: 'p',
            html: '<strong>Versionskontrolle:</strong> Änderungen an Tabellendaten in git nachverfolgen. CSV-Dateien lassen sich sauber diffen, während binäre .xlsx-Dateien für git unlesbar sind.',
          },
        ],
      },
    ],
  },
};

export const deHome: HomeContent = {
  meta: {
    title: 'Kostenloser Online-Datenkonverter — JSON, CSV, Excel, XML, YAML Tool',
    description:
      'JSON, CSV, Excel, XML, YAML, HTML, Markdown und mehr konvertieren — alles in Ihrem Browser. Keine Uploads, 100% privat.',
    keywords:
      'datenkonverter, JSON zu CSV, Excel zu JSON, CSV zu JSON, XML zu JSON, kostenloses online tool, format konverter',
  },
  hero: {
    h1: 'Kostenloser Online-Datenkonverter — JSON, CSV, Excel, XML &amp; YAML',
    descs: [
      'Data Converter ist ein kostenloses Online-Tool, mit dem Entwickler, Analysten, QA-Ingenieure und Unternehmen strukturierte Daten zwischen JSON, XML, CSV, Excel, YAML und anderen Formaten konvertieren können.',
      'Im Gegensatz zu vielen Online-Konvertern läuft alles direkt in Ihrem Browser. Ihre Daten werden niemals auf unsere Server hochgeladen, was die Konvertierung sicher und privat macht.',
      'Ob Sie APIs debuggen, Datenbanken migrieren, Konfigurationsdateien umwandeln oder Tabellen vorbereiten — Data Converter vereinfacht den Prozess.',
    ],
    trust: '100% clientseitige Verarbeitung — Ihre Daten erreichen niemals einen Server',
  },
  features: {
    heading: 'Zwischen allen gängigen Datenformaten konvertieren',
    cards: [
      {
        title: 'JSON Konverter',
        desc: 'JSON in CSV, Excel, XML, YAML, HTML, Markdown oder PDF konvertieren. Verarbeitet verschachtelte Objekte, Arrays und große Dateien.',
        link: '/json-to-csv-converter',
        icon: 'json',
      },
      {
        title: 'CSV Konverter',
        desc: 'CSV in JSON, Excel, XML, YAML und mehr konvertieren. Intelligente Header-Erkennung und Typerkennung integriert.',
        link: '/csv-to-json-converter',
        icon: 'csv',
      },
      {
        title: 'Excel Konverter',
        desc: 'Excel (.xlsx) mit Unterstützung für mehrere Blätter in JSON, CSV, XML, YAML konvertieren. Hochladen und sofort konvertieren.',
        link: '/excel-to-json-converter',
        icon: 'excel',
      },
      {
        title: 'XML &amp; YAML Konverter',
        desc: 'XML oder YAML in JSON, CSV, Excel und andere Formate konvertieren. Verschachtelte Elemente werden mit Unterstrich-Trennzeichen abgeflacht.',
        link: '/json-to-excel-converter',
        icon: 'xml',
      },
      {
        title: 'Bildkonverter',
        desc: 'Bilder in PNG, JPG oder WebP in Ihrem Browser konvertieren. Qualitätsregler, Voransicht der Maße und sofortiger Download.',
        link: '/image-converter',
        icon: 'image',
      },
      {
        title: 'Bild-Metadaten ansehen',
        desc: 'EXIF-, GPS-, IPTC-, XMP- und ICC-Metadaten in Ihren Fotos prüfen — Kameraeinstellungen, Standort, Zeitstempel und mehr.',
        link: '/image-metadata-viewer',
        icon: 'image',
      },
      {
        title: 'Metadaten entfernen',
        desc: 'EXIF-, GPS- und andere versteckte Daten vor dem Teilen entfernen. Verlustfrei, privat und komplett im Browser.',
        link: '/remove-image-metadata',
        icon: 'image',
      },
    ],
  },
  howItWorks: {
    heading: 'So konvertieren Sie Daten online kostenlos',
    steps: [
      { title: 'Formate auswählen', desc: 'Quell- und Zielformat in der Konverter-Leiste wählen' },
      { title: 'Einfügen oder hochladen', desc: 'Daten einfügen, Datei hochladen oder per URL abrufen' },
      { title: 'Sofort konvertieren', desc: 'Auf Konvertieren klicken oder Ctrl+Enter drücken' },
      { title: 'Bearbeiten &amp; exportieren', desc: 'Vorschau, Sortierung, Bearbeitung und Download in jedem Format' },
    ],
  },
  useCases: {
    heading: 'Warum Data Converter nutzen?',
    sub: 'Alles läuft clientseitig — Ihre Dateien verlassen niemals Ihr Gerät. Keine Anmeldung, keine Limits, komplett kostenlos.',
    cards: [
      {
        icon: 'api',
        title: 'API-Entwicklung',
        desc: 'JSON-API-Antworten für Tabellenanalysen in CSV konvertieren oder CSV-Daten für API-Tests in JSON umwandeln.',
      },
      {
        icon: 'db',
        title: 'Datenbankmigrationen',
        desc: 'Excel-Tabellen oder CSV-Exporte in JSON oder XML konvertieren für den Import in MongoDB, PostgreSQL, Firebase und mehr.',
      },
      {
        icon: 'config',
        title: 'Konfigurationsmanagement',
        desc: 'YAML-Konfigurationsdateien für JavaScript-Anwendungen in JSON übersetzen oder JSON-Konfigurationen für Docker und Kubernetes in YAML konvertieren.',
      },
      {
        icon: 'report',
        title: 'Datenberichterstattung',
        desc: 'JSON- oder XML-Daten in formatierte HTML-Tabellen oder Markdown für Dokumentation, Berichte und Präsentationen konvertieren.',
      },
      {
        icon: 'sheet',
        title: 'Tabellenverarbeitung',
        desc: 'Excel-Dateien hochladen, Zellwerte bearbeiten, Zeilen filtern und als CSV, JSON oder PDF exportieren — alles in Ihrem Browser.',
      },
    ],
  },
  formats: {
    heading: 'Unterstützte Konvertierungen',
    sub: 'Jede benötigte Formatkombination, nur einen Klick entfernt',
    cards: [
      {
        label: 'JSON',
        targets: ['CSV', 'Excel', 'XML', 'YAML', 'HTML', 'Markdown', 'PDF'],
        tag: 'API-Daten, Konfigurationsdateien',
      },
      {
        label: 'CSV',
        targets: ['JSON', 'Excel', 'XML', 'YAML', 'HTML', 'Markdown', 'PDF'],
        tag: 'Tabellenkalkulationen, DB-Exporte',
      },
      {
        label: 'Excel',
        targets: ['JSON', 'CSV', 'XML', 'YAML', 'HTML', 'Markdown', 'PDF'],
        tag: 'Geschäftsberichte, mehrere Blätter',
      },
      {
        label: 'XML',
        targets: ['JSON', 'CSV', 'Excel', 'YAML', 'HTML', 'Markdown', 'PDF'],
        tag: 'Altsysteme, Webservices',
      },
      {
        label: 'YAML',
        targets: ['JSON', 'CSV', 'Excel', 'XML', 'HTML', 'Markdown', 'PDF'],
        tag: 'Docker, Kubernetes, CI/CD',
      },
      {
        label: 'PNG',
        targets: ['JPG', 'WebP'],
        tag: 'Webgrafiken, Logos, Transparenz',
      },
      {
        label: 'JPG',
        targets: ['PNG', 'WebP'],
        tag: 'Fotos, Teilen, Web',
      },
      {
        label: 'WebP',
        targets: ['JPG', 'PNG'],
        tag: 'Kleine, schnelle Web-Bilder',
      },
    ],
  },
};
