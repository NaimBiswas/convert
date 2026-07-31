import type { StaticContent } from '../types';

export const staticContent: StaticContent = {
  about: {
    meta: {
      title: '\u00DCber uns',
      description:
        'Erfahren Sie mehr \u00FCber Data Converter \u2013 ein kostenloses, privates, browserbasiertes Tool zur Konvertierung zwischen JSON, CSV, Excel, XML, YAML und mehr.',
      keywords: '\u00FCber uns, data converter, online konverter, browserbasiert',
    },
    h1: '\u00DCber uns',
    breadcrumbs: [
      { name: 'Startseite', url: '/' },
      { name: '\u00DCber uns', url: '/about' },
    ],
    paragraphs: [
      'Data Converter begann als Nebenprojekt, um ein einfaches Problem zu l\u00F6sen: Immer wenn ich eine CSV in JSON oder eine Excel-Datei in XML konvertieren musste, musste ich ein beliebiges Online-Tool suchen, das meist einen Upload an einen Server erforderte. Die meisten dieser Tools behielten auch meine Daten, was sich falsch anf\u00FChlte.',
      'Also habe ich dieses Tool gebaut. Keine Server, keine Uploads, keine Konten. Alles l\u00E4uft direkt in Ihrem Browser. Ihre Daten bleiben auf Ihrem Ger\u00E4t \u2013 Punkt.',
      'Das Tool unterst\u00FCtzt JSON, CSV, Excel (.xlsx), XML, YAML, HTML-Tabellen, Markdown und PDF. Sie k\u00F6nnen Daten einf\u00FCgen, eine Datei hochladen oder von einer URL abrufen. Es verarbeitet verschachtelte Strukturen und gro\u00DFe Dateien und bietet einen vollwertigen Tabellen-Editor mit Suche, Sortierung, Suchen-und-Ersetzen und Inline-Bearbeitung.',
      'Ich f\u00FCge st\u00E4ndig Funktionen hinzu, die auf dem basieren, was die Leute w\u00FCnschen und was ich selbst n\u00FCtzlich finde. Falls etwas fehlt oder defekt ist, melden Sie sich einfach \u00FCber die Kontaktseite \u2013 ich lese tats\u00E4chlich jede Nachricht.',
      'Erstellt und gepflegt von <a href="https://github.com/NaimBiswas" target="_blank" rel="noopener">Naim Biswas</a>.',
    ],
  },
  contact: {
    meta: {
      title: 'Kontakt',
      description:
        'Nehmen Sie Kontakt mit dem Data Converter-Team auf. Melden Sie Fehler, schlagen Sie Funktionen vor oder stellen Sie Fragen.',
      keywords: 'kontakt, support, fehlermeldung, data converter',
    },
    h1: 'Kontakt',
    breadcrumbs: [
      { name: 'Startseite', url: '/' },
      { name: 'Kontakt', url: '/contact' },
    ],
    intro:
      'Haben Sie eine Frage, einen Fehler gefunden oder m\u00F6chten Sie eine Funktion vorschlagen? Der beste Ort daf\u00FCr ist <strong>GitHub Issues</strong> \u2013 so kann jeder die Diskussion und die L\u00F6sungen sehen.',
    buttonLabel: 'Ein GitHub-Issue er\u00F6ffnen \u2192',
    buttonUrl: 'https://github.com/NaimBiswas/convert/issues/new',
    emailIntro:
      'Sie k\u00F6nnen mir auch direkt eine E-Mail an <a href="mailto:nayeembiswas2@gmail.com">nayeembiswas2@gmail.com</a> senden. Ich versuche, innerhalb von ein oder zwei Tagen zu antworten.',
    email: 'nayeembiswas2@gmail.com',
    bugHint:
      'Wenn Sie einen Fehler melden, geben Sie bitte Ihr Quellformat, Ihr Zielformat und alle Fehlermeldungen an, die Sie gesehen haben. Eine Probe der Daten (oder des Fehlers) hilft mir, ihn viel schneller zu finden.',
  },
  faq: {
    meta: {
      title: 'H\u00E4ufig gestellte Fragen',
      description:
        'H\u00E4ufige Fragen zum Data Converter-Tool \u2013 Datenschutz, Formate, Grenzen und Fehlerbehebung.',
      keywords: 'faq, data converter hilfe, formatunterst\u00FCtzung, fehlerbehebung',
    },
    h1: 'H\u00E4ufig gestellte Fragen',
    breadcrumbs: [
      { name: 'Startseite', url: '/' },
      { name: 'FAQ', url: '/faq' },
    ],
    faqs: [
      {
        q: 'Sind meine Daten sicher? Speichern Sie etwas?',
        a: 'Alles l\u00E4uft in Ihrem Browser \u2013 nichts wird an einen Server hochgeladen. Ihre Daten verlassen niemals Ihr Ger\u00E4t. Ich speichere, protokolliere oder sehe nicht einmal, was Sie konvertieren. Ihre Design-Pr\u00E4ferenz (Hell/Dunkel-Modus) wird lokal gespeichert, damit sie zwischen den Besuchen erhalten bleibt. Alle Konvertierungsdaten werden gel\u00F6scht, wenn Sie den Tab schlie\u00DFen.',
      },
      {
        q: 'Welche Formate unterst\u00FCtzen Sie?',
        a: '<strong>Eingabe:</strong> JSON, CSV, Excel (.xlsx), XML, YAML<br><strong>Ausgabe:</strong> JSON, CSV, Excel (.xlsx), XML, YAML, HTML-Tabelle, Markdown, PDF<br>Sie k\u00F6nnen von jedem Eingabeformat in jedes Ausgabeformat konvertieren. Beispielsweise XML einf\u00FCgen und als CSV herunterladen oder Excel hochladen und als JSON exportieren.',
      },
      {
        q: 'Gibt es eine Dateigr\u00F6\u00DFenbegrenzung?',
        a: 'Da alles in Ihrem Browser l\u00E4uft, h\u00E4ngt die Begrenzung vom Speicher Ihres Ger\u00E4ts ab. Die meisten Dateien bis zu 50\u2013100 MB funktionieren auf einem typischen Laptop problemlos. Excel-Uploads sind in der Benutzeroberfl\u00E4che auf 50 MB begrenzt. Wenn Sie auf Leistungsprobleme sto\u00DFen, versuchen Sie, Ihre Daten in kleinere Dateien aufzuteilen.',
      },
      {
        q: 'Brauche ich ein Konto?',
        a: 'Nein. Es gibt keine Konten, keine Anmeldungen, keine Logins. \u00D6ffnen Sie einfach die Website und beginnen Sie mit der Konvertierung.',
      },
      {
        q: 'Kann ich meine Daten nach der Konvertierung bearbeiten?',
        a: 'Ja. Nach der Konvertierung erhalten Sie einen vollwertigen Tabellen-Editor. Sie k\u00F6nnen jede Zelle per Doppelklick bearbeiten, Zeilen suchen und filtern, nach Spalten sortieren, Zeilen und Spalten hinzuf\u00FCgen oder l\u00F6schen, die Tabelle transponieren, in allen Zellen Suchen-und-Ersetzen durchf\u00FChren, die Gro\u00DF-/Kleinschreibung (GROSS, klein, Erster Buchstabe gro\u00DF) auf eine Spalte anwenden, \u00C4nderungen r\u00FCckg\u00E4ngig machen und wiederholen sowie leere Zeilen oder Duplikate entfernen.',
      },
      {
        q: 'Die Konvertierung sieht falsch aus \u2013 was soll ich tun?',
        a: 'Stellen Sie zun\u00E4chst sicher, dass Ihre Eingabedaten wohlgeformt sind. JSON ben\u00F6tigt korrekte Anf\u00FChrungszeichen und Klammern. CSV ben\u00F6tigt eine Kopfzeile. Bei verschachteltem JSON oder XML gl\u00E4ttet das Tool Schl\u00FCssel mit <code>_</code> als Trennzeichen \u2013 das funktioniert am besten bei Objekt-Arrays. Wenn Sie immer noch nicht weiterkommen, <a href="/contact">melden Sie sich</a> mit Ihrem Quellformat, Ihrem Zielformat und einer Probe der Daten (oder der Fehlermeldung), und ich werde einen Blick darauf werfen.',
      },
    ],
  },
  docs: {
    meta: {
      title: 'Dokumentation \u2013 So verwenden Sie den Data Converter',
      description:
        'Erfahren Sie, wie Sie zwischen JSON, CSV, Excel, XML, YAML, Markdown, HTML und PDF konvertieren. Vollst\u00E4ndige Anleitung mit Tastenk\u00FCrzeln, Werkzeugen und Datenschutzinformationen.',
      keywords: 'dokumentation, wie konvertieren, formatkonvertierung, data converter',
    },
    h1: 'So verwenden Sie den Data Converter',
    breadcrumbs: [
      { name: 'Startseite', url: '/' },
      { name: 'Dokumentation', url: '/docs' },
    ],
    blocks: [
      {
        type: 'cards',
        heading: 'Unterst\u00FCtzte Formate',
        cards: [
          { h3: 'JSON', p: 'JavaScript Object Notation \u2013 verschachtelte oder flache Objekte, Objekt-Arrays.' },
          { h3: 'CSV', p: 'Kommagetrennte Werte \u2013 Kopfzeile erforderlich.' },
          { h3: 'Excel (XLSX)', p: 'Microsoft-Excel-Arbeitsmappen mit Unterst\u00FCtzung f\u00FCr mehrere Bl\u00E4tter. Nur Upload.' },
          { h3: 'XML', p: 'Extensible Markup Language \u2013 gl\u00E4ttet verschachtelte Elemente mit <code>_</code> als Trennzeichen.' },
          { h3: 'YAML', p: 'YAML Ain\u2019t Markup Language \u2013 menschenlesbare Datenserialisierung.' },
          { h3: 'HTML Table', p: 'Nur Ausgabe \u2013 stellt Daten als HTML <code>&lt;table&gt;</code> dar.' },
          { h3: 'Markdown', p: 'Nur Ausgabe \u2013 stellt Daten als GitHub-kompatible Markdown-Tabelle dar.' },
          { h3: 'PDF', p: 'Nur Ausgabe \u2013 exportiert Daten als PDF-Dokument.' },
        ],
      },
      {
        type: 'section',
        heading: 'Eingabemethoden',
        blocks: [
          {
            type: 'ul',
            items: [
              '<strong>Einf\u00FCgen</strong> \u2013 f\u00FCgen Sie Daten direkt in den Editor ein.',
              '<strong>Hochladen</strong> \u2013 per Drag &amp; Drop oder Datei ausw\u00E4hlen (.json, .csv, .xml, .yaml, .xlsx bis zu 50 MB).',
              '<strong>URL</strong> \u2013 rufen Sie Daten von einer entfernten URL ab. Aktivieren Sie den CORS-Proxy f\u00FCr APIs, die direkte Anfragen blockieren.',
            ],
          },
        ],
      },
      {
        type: 'section',
        heading: 'So konvertieren Sie',
        blocks: [
          {
            type: 'ol',
            items: [
              'W\u00E4hlen Sie das Quellformat (<strong>Von</strong>) und das Zielformat (<strong>Nach</strong>) in der Konverter-Leiste.',
              'F\u00FCgen Sie Ihre Daten ein, laden Sie sie hoch oder rufen Sie sie ab.',
              'Klicken Sie auf <strong>Konvertieren</strong> oder dr\u00FCcken Sie <kbd>Ctrl+Enter</kbd>.',
              'Zeigen Sie die Tabelle an, durchsuchen, sortieren und bearbeiten Sie sie.',
              'Laden Sie das Ergebnis in jedem unterst\u00FCtzten Format herunter oder kopieren Sie es in die Zwischenablage.',
            ],
          },
        ],
      },
      {
        type: 'section',
        heading: 'Tabellen-Werkzeuge',
        blocks: [
          {
            type: 'ul',
            items: [
              '<strong>Suche</strong> \u2013 filtert Zeilen nach einem beliebigen Spaltenwert.',
              '<strong>Sortierung</strong> \u2013 klicken Sie auf eine Spalten\u00FCberschrift, um aufsteigend/absteigend zu sortieren.',
              '<strong>Inline-Bearbeitung</strong> \u2013 doppelklicken Sie auf eine beliebige Zelle, um ihren Wert zu bearbeiten.',
              '<strong>Suchen &amp; Ersetzen</strong> \u2013 sucht und ersetzt Text in allen Zellen.',
              '<strong>Transponieren</strong> \u2013 tauscht Zeilen und Spalten.',
              '<strong>Gro\u00DF-/Kleinschreibung</strong> \u2013 GROSS, klein oder Erster Buchstabe gro\u00DF f\u00FCr eine gesamte Spalte.',
              '<strong>Hinzuf\u00FCgen / L\u00F6schen</strong> von Zeilen und Spalten.',
              '<strong>R\u00FCckg\u00E4ngig / Wiederholen</strong> \u2013 <kbd>Ctrl+Z</kbd> und <kbd>Ctrl+Shift+Z</kbd>.',
              '<strong>Spalten neu anordnen</strong> \u2013 ziehen Sie Spalten\u00FCberschriften, um sie neu anzuordnen.',
              '<strong>Leere / Duplikate entfernen</strong> \u2013 bereinigen Sie Ihre Daten.',
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
            html: 'Die Download-Schaltfl\u00E4chen gelten f\u00FCr die <em>gefilterten</em> Daten (Suche und Sortierung werden ber\u00FCcksichtigt). Die Zwischenablage kopiert den vollst\u00E4ndigen Datensatz.',
          },
        ],
      },
      {
        type: 'section',
        heading: 'Werkzeug-Men\u00FC',
        blocks: [
          {
            type: 'ul',
            items: [
              '<strong>Zufallsdaten generieren</strong> \u2013 erstellt einen zuf\u00E4lligen CSV-Datensatz zum Testen.',
              '<strong>Base64-Kodieren / -Dekodieren</strong> \u2013 kodiert oder dekodiert den Editor-Inhalt.',
              '<strong>Hex-Kodieren / -Dekodieren</strong> \u2013 kodiert oder dekodiert den Editor-Inhalt.',
            ],
          },
        ],
      },
      {
        type: 'section',
        heading: 'Datenschutz',
        blocks: [
          {
            type: 'p',
            html: 'Die gesamte Verarbeitung erfolgt vollst\u00E4ndig in Ihrem Browser. Es werden keine Daten an einen Server gesendet. Der URL-Abruf mit aktiviertem CORS-Proxy leitet \u00FCber einen Drittanbieter-Proxy-Dienst.',
          },
        ],
      },
      {
        type: 'shortcuts',
        heading: 'Tastenk\u00FCrzel',
        columns: { shortcut: 'Tastenk\u00FCrzel', action: 'Aktion' },
        rows: [
          { shortcut: 'Ctrl+Enter', action: 'Konvertieren' },
          { shortcut: 'Ctrl+Z', action: 'R\u00FCckg\u00E4ngig' },
          { shortcut: 'Ctrl+Shift+Z', action: 'Wiederholen' },
          { shortcut: 'Escape', action: 'Sucht-/Ersetzen-Leiste oder Gro\u00DF-/Kleinschreibung-Symbolleiste schlie\u00DFen' },
        ],
      },
    ],
  },
  privacy: {
    meta: {
      title: 'Datenschutzerkl\u00E4rung',
      description:
        'Datenschutzerkl\u00E4rung von Data Converter \u2013 wir erfassen, speichern oder teilen Ihre Daten nicht. Alles l\u00E4uft in Ihrem Browser.',
      keywords: 'datenschutzerkl\u00E4rung, datenschutz, browserbasiert, kein upload',
    },
    h1: 'Datenschutzerkl\u00E4rung',
    breadcrumbs: [
      { name: 'Startseite', url: '/' },
      { name: 'Datenschutz', url: '/privacy' },
    ],
    lastUpdated: 'Zuletzt aktualisiert: Juli 2026',
    sections: [
      {
        heading: 'Worauf sich dies erstreckt',
        blocks: [
          {
            type: 'p',
            html: 'Diese Datenschutzerkl\u00E4rung erkl\u00E4rt, wie Data Converter (\u201Cwir\u201D, \u201Cich\u201D, \u201Cdiese Website\u201D) Ihre Informationen verarbeitet, wenn Sie die Werkzeuge auf dieser Website verwenden.',
          },
        ],
      },
      {
        heading: 'Keine Datenerfassung',
        blocks: [
          {
            type: 'p',
            html: 'Die gesamte Dateikonvertierung, das Parsen und die Verarbeitung erfolgen vollst\u00E4ndig in Ihrem Browser mit JavaScript. Ihre Daten \u2013 egal ob Sie sie einf\u00FCgen, hochladen oder von einer URL abrufen \u2013 verlassen niemals Ihr Ger\u00E4t. Ich habe keine Server, die Ihre Dateien empfangen oder speichern.',
          },
        ],
      },
      {
        heading: 'Keine Konten, kein Tracking',
        blocks: [
          {
            type: 'p',
            html: 'Sie ben\u00F6tigen kein Konto, um dieses Tool zu verwenden. Ich verwende keine Analyse-Skripte, die Ihr Verhalten \u00FCber Websites hinweg ohne Ihre Zustimmung verfolgen. Die einzige Analyse, die ich betreibe, ist Google Analytics mit grundlegenden Seitenaufruf-Daten (ohne Tracking auf Benutzerebene), was mir hilft zu verstehen, welche Funktionen am h\u00E4ufigsten genutzt werden.',
          },
        ],
      },
      {
        heading: 'Cookies &amp; Zustimmung',
        blocks: [
          {
            type: 'p',
            html: 'Ich verwende nur minimale Cookies:',
          },
          {
            type: 'ul',
            items: [
              'Ein Cookie, um sich Ihre Design-Pr\u00E4ferenz (Hell/Dunkel-Modus) zu merken. Dies ist streng funktional und wird immer gesetzt.',
              'Google Analytics verwendet eigene Cookies f\u00FCr aggregierte Seitenaufruf-Statistiken \u2013 sie werden nur geladen, nachdem Sie das Cookie-Banner akzeptiert haben.',
              'Google AdSense setzt Cookies f\u00FCr die Auslieferung und Personalisierung von Anzeigen \u2013 sie werden nur geladen, nachdem Sie das Cookie-Banner akzeptiert haben.',
            ],
          },
          {
            type: 'p',
            html: 'Nicht-essenzielle Skripte (Analyse und Anzeigen) werden blockiert, bis Sie im Cookie-Banner auf \u201CVerstanden\u201D klicken. Ihre Wahl wird lokal gespeichert, sodass das Banner nicht erneut erscheint. Weitere Details finden Sie in unserer <a href="/cookies">Cookie-Richtlinie</a>.',
          },
        ],
      },
      {
        heading: 'Werbung',
        blocks: [
          {
            type: 'p',
            html: 'Diese Website verwendet Google AdSense, um Anzeigen auszuliefern. Google verwendet als Drittanbieter Cookies, um Anzeigen basierend auf fr\u00FCheren Besuchen dieser Website und anderer Websites durch einen Nutzer auszuliefern. Durch die Verwendung von Werbe-Cookies k\u00F6nnen Google und seine Partner Anzeigen basierend auf Ihrem Besuch dieser und anderer Websites im Internet ausliefern.',
          },
          {
            type: 'p',
            html: 'Sie k\u00F6nnen personalisierte Werbung ablehnen, indem Sie <a href="https://adssettings.google.com" target="_blank" rel="noopener">die Anzeigeneinstellungen von Google</a> besuchen. Sie k\u00F6nnen au\u00DFerdem Cookies von Drittanbietern ablehnen, indem Sie <a href="https://optout.networkadvertising.org" target="_blank" rel="noopener">die Opt-out-Seite der Network Advertising Initiative</a> besuchen.',
          },
          {
            type: 'p',
            html: 'AdSense-Skripte werden nur geladen, nachdem Sie das Cookie-Banner akzeptiert haben. Bis Sie zustimmen, werden keine Werbe-Cookies gesetzt.',
          },
        ],
      },
      {
        heading: 'Drittanbieter',
        blocks: [
          {
            type: 'ul',
            items: [
              '<strong>Google AdSense</strong> \u2013 liefert kontextbezogene und personalisierte Anzeigen aus. Verwendet Cookies (<code>_gads</code>, <code>_gac_</code>, <code>IDE</code>) f\u00FCr die Anzeigenauslieferung und Frequenzbegrenzung.',
              '<strong>Google Analytics</strong> \u2013 erfasst aggregierte Seitenaufruf-Daten. Verwendet Cookies (<code>_ga</code>, <code>_gid</code>, <code>_gat</code>) f\u00FCr anonyme Nutzungsstatistiken.',
              '<strong>Google AMP</strong> \u2013 liefert Auto-Anzeigen auf unterst\u00FCtzten Seiten aus.',
            ],
          },
          {
            type: 'p',
            html: 'Diese Dienste k\u00F6nnen Informationen \u00FCber Ihre Besuche auf verschiedenen Websites erfassen, um relevante Werbung bereitzustellen. Sie k\u00F6nnen die Datenschutzerkl\u00E4rung von Google unter <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">policies.google.com/privacy</a> einsehen.',
          },
        ],
      },
      {
        heading: 'Externe Dienste',
        blocks: [
          {
            type: 'p',
            html: 'Wenn Sie die Funktion <strong>URL-Abruf</strong> mit aktiviertem CORS-Proxy verwenden, wird Ihre Anfrage \u00FCber einen Drittanbieter-Proxy-Dienst geleitet. Dieser Dienst sieht die URL, die Sie abrufen, jedoch nicht Ihre pers\u00F6nlichen Informationen. Der CORS-Proxy ist standardm\u00E4\u00DFig deaktiviert und wird nur aktiviert, wenn Sie das Kontrollk\u00E4stchen aktivieren.',
          },
        ],
      },
      {
        heading: '\u00C4nderungen',
        blocks: [
          {
            type: 'p',
            html: 'Wenn sich diese Richtlinie \u00E4ndert, aktualisiere ich das Datum oben und ver\u00F6ffentliche bei wesentlichen \u00C4nderungen einen Hinweis auf der Website.',
          },
        ],
      },
      {
        heading: 'Kontakt',
        blocks: [
          {
            type: 'p',
            html: 'Fragen zu dieser Richtlinie oder Ihren Daten? <a href="/contact">Nehmen Sie Kontakt auf</a> oder <a href="https://github.com/NaimBiswas/convert/issues/new" target="_blank" rel="noopener">er\u00F6ffnen Sie ein GitHub-Issue</a>.',
          },
        ],
      },
    ],
  },
  terms: {
    meta: {
      title: 'Allgemeine Gesch\u00E4ftsbedingungen',
      description:
        'Allgemeine Gesch\u00E4ftsbedingungen von Data Converter \u2013 kostenlose Nutzung, keine Garantie, Ihre Verantwortung.',
      keywords: 'allgemeine gesch\u00E4ftsbedingungen, nutzungsbedingungen, data converter',
    },
    h1: 'Allgemeine Gesch\u00E4ftsbedingungen',
    breadcrumbs: [
      { name: 'Startseite', url: '/' },
      { name: 'Bedingungen', url: '/terms' },
    ],
    lastUpdated: 'Zuletzt aktualisiert: Juli 2026',
    sections: [
      {
        heading: 'Nutzung auf eigene Gefahr',
        blocks: [
          {
            type: 'p',
            html: 'Data Converter wird kostenlos und ohne jegliche Garantie bereitgestellt, wie besehen. Ich arbeite hart daran, dass Konvertierungen genau sind, kann aber nicht garantieren, dass sie f\u00FCr jeden Sonderfall perfekt sind. Sie sind daf\u00FCr verantwortlich, Ihre konvertierten Daten zu \u00FCberpr\u00FCfen, bevor Sie sie in der Produktion oder in einem anderen wichtigen Kontext verwenden.',
          },
        ],
      },
      {
        heading: 'Was Sie tun d\u00FCrfen',
        blocks: [
          {
            type: 'p',
            html: 'Sie k\u00F6nnen dieses Tool frei f\u00FCr pers\u00F6nliche, kommerzielle oder Bildungszwecke nutzen. Keine Angabe der Quelle erforderlich.',
          },
        ],
      },
      {
        heading: 'Was Sie nicht tun d\u00FCrfen',
        blocks: [
          {
            type: 'ul',
            items: [
              'Scraping, Crawling oder systematisches Herunterladen von Inhalten dieser Website.',
              'Das Tool verwenden, um illegale Inhalte oder Daten zu verarbeiten, an denen Sie keine Rechte haben.',
              'Versuchen, die Website zu besch\u00E4digen, zu \u00FCberlasten oder auszunutzen.',
            ],
          },
        ],
      },
      {
        heading: 'Keine Haftung',
        blocks: [
          {
            type: 'p',
            html: 'Ich hafte nicht f\u00FCr Sch\u00E4den oder Datenverluste, die durch Ihre Nutzung dieses Tools entstehen. Da die gesamte Verarbeitung lokal in Ihrem Browser stattfindet, habe ich keinen Zugriff auf Ihre Daten und kann nicht f\u00FCr deren Verbleib verantwortlich gemacht werden.',
          },
        ],
      },
      {
        heading: '\u00C4nderungen',
        blocks: [
          {
            type: 'p',
            html: 'Ich kann diese Bedingungen aktualisieren. Wenn Sie das Tool nach \u00C4nderungen weiterhin nutzen, akzeptieren Sie die aktualisierten Bedingungen.',
          },
        ],
      },
      {
        heading: 'Kontakt',
        blocks: [
          {
            type: 'p',
            html: 'Wenn Sie Fragen zu diesen Bedingungen haben, <a href="/contact">melden Sie sich</a>.',
          },
        ],
      },
    ],
  },
  cookies: {
    meta: {
      title: 'Cookie-Richtlinie',
      description: 'Cookie-Richtlinie von Data Converter \u2013 nur minimale, funktionale Cookies.',
      keywords: 'cookie-richtlinie, cookies, google analytics, data converter',
    },
    h1: 'Cookie-Richtlinie',
    breadcrumbs: [
      { name: 'Startseite', url: '/' },
      { name: 'Cookies', url: '/cookies' },
    ],
    lastUpdated: 'Zuletzt aktualisiert: Juli 2026',
    intro: 'Data Converter verwendet nur sehr wenige Cookies. Hier erfahren Sie genau, was sie tun.',
    sections: [
      {
        heading: 'Funktionale Cookies',
        blocks: [
          {
            type: 'cookieTable',
            columns: { cookie: 'Cookie', purpose: 'Zweck', duration: 'Dauer' },
            rows: [
              {
                cookie: 'theme',
                purpose: 'Merkt sich Ihre Hell/Dunkel-Modus-Pr\u00E4ferenz, damit die Website bei Ihrer R\u00FCckkehr korrekt aussieht.',
                duration: '1 Jahr',
              },
            ],
          },
        ],
      },
      {
        heading: 'Cookie-Zustimmung',
        blocks: [
          {
            type: 'p',
            html: 'Wenn Sie die Website zum ersten Mal besuchen, erscheint ein Banner, das Ihre Zustimmung zum Setzen nicht-essenzieller Cookies einholt. Analyse- und Werbe-Skripte werden erst geladen, nachdem Sie auf \u201CVerstanden\u201D klicken. Ihre Wahl wird in localStorage gespeichert, damit Sie das Banner nicht erneut sehen. Sie k\u00F6nnen Ihre Browserdaten l\u00F6schen, um diese Pr\u00E4ferenz zur\u00FCckzusetzen.',
          },
        ],
      },
      {
        heading: 'Analyse',
        blocks: [
          {
            type: 'p',
            html: 'Ich verwende Google Analytics, um zu sehen, welche Seiten besucht werden und wie die Website genutzt wird. Google Analytics setzt eigene Cookies (<code>_ga</code>, <code>_gid</code>, <code>_gat</code>), die anonyme, aggregierte Nutzungsdaten verfolgen. Ich verwende diese Daten nicht, um einzelne Nutzer zu identifizieren. Die Analyse wird erst geladen, nachdem Sie das Cookie-Banner akzeptieren.',
          },
        ],
      },
      {
        heading: 'Werbung',
        blocks: [
          {
            type: 'p',
            html: 'Ich schalte Anzeigen \u00FCber Google AdSense, um die Website zu unterst\u00FCtzen. AdSense setzt Cookies f\u00FCr die Personalisierung von Anzeigen und die Frequenzbegrenzung. Diese Skripte werden erst geladen, nachdem Sie das Cookie-Banner akzeptiert haben.',
          },
        ],
      },
      {
        heading: 'Cookies verwalten',
        blocks: [
          {
            type: 'p',
            html: 'Die meisten Browser erm\u00F6glichen es Ihnen, Cookies \u00FCber ihre Einstellungen zu steuern. Sie k\u00F6nnen Cookies jederzeit blockieren oder l\u00F6schen. Wenn Sie Cookies deaktivieren, wird die Design-Pr\u00E4ferenz nicht zwischen den Besuchen gespeichert, aber das Konverter-Tool selbst funktioniert weiterhin einwandfrei.',
          },
        ],
      },
      {
        heading: 'Kontakt',
        blocks: [
          {
            type: 'p',
            html: 'Fragen zu Cookies? <a href="/contact">Lassen Sie es mich wissen</a>.',
          },
        ],
      },
    ],
  },
};
