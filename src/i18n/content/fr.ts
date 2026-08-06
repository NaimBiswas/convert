import type { HomeContent, ConverterContentMap } from './types';

export const fr: ConverterContentMap = {
  'json-to-csv': {
    meta: {
      title: 'Convertisseur JSON vers CSV — Convertir du JSON en CSV en ligne gratuitement',
      description:
        'Convertissez du JSON en CSV en ligne gratuitement. Collez du JSON, importez un fichier ou récupérez-le depuis une URL. Gère les objets imbriqués, les tableaux et les fichiers volumineux. 100 % dans le navigateur, aucun envoi de données.',
      keywords: 'json vers csv, convertisseur json vers csv, convertir json en csv, json vers csv en ligne, json vers csv gratuit',
    },
    h1: 'Convertisseur JSON vers CSV',
    desc: 'Convertissez vos données JSON en CSV instantanément — directement dans votre navigateur. Gère les objets imbriqués (aplatis avec un séparateur <code>_</code>), les tableaux d\u2019objets et les fichiers volumineux. Aucun envoi, aucun serveur, aucune limite.',
    from: 'JSON',
    to: 'CSV',
    slug: 'json-to-csv',
    path: '/json-to-csv-converter',
    sections: [
      {
        heading: 'Pourquoi convertir du JSON en CSV ?',
        blocks: [
          {
            type: 'p',
            html: 'Le JSON est le format natif des API et des applications web, mais le CSV est le langage natif des tableurs, des bases de données et des outils d\u2019analyse. Convertir du JSON en CSV vous permet de récupérer des réponses d\u2019API, des exports de configuration ou des charges utiles de webhooks et de les ouvrir directement dans Excel, Google Sheets, ou de les importer dans PostgreSQL, MySQL ou tout pipeline d\u2019analyse de données.',
          },
          {
            type: 'p',
            html: 'Les cas d\u2019usage courants incluent l\u2019export de fiches utilisateurs depuis une API REST pour une équipe marketing, la conversion de données de géolocalisation d\u2019une API cartographique en tableau pour une analyse SIG, ou la transformation de catalogues produits e-commerce issus de flux JSON en CSV pour des outils de comparaison de prix.',
          },
        ],
      },
      {
        heading: 'Comment le JSON imbriqué est traité',
        blocks: [
          {
            type: 'p',
            html: 'Le CSV est plat — chaque ligne possède les mêmes colonnes. Lorsque votre JSON contient des objets imbriqués (comme <code>&lbrace;"user": &lbrace;"name": "Alice", "address": &lbrace;"city": "NYC"&rbrace;&rbrace;&rbrace;</code>), le convertisseur aplatit les clés à l\u2019aide d\u2019un séparateur underscore : <code>user_name</code>, <code>user_address_city</code>. Les tableaux d\u2019objets sont développés en plusieurs lignes. Les tableaux primitifs (comme <code>["red", "blue"]</code>) sont réunis avec des points-virgules dans une seule cellule.',
          },
          {
            type: 'p',
            html: 'Ainsi, une réponse d\u2019API fortement imbriquée devient un tableau plat et propre, sans perte de données. Chaque champ apparaît comme un en-tête de colonne et chaque enregistrement comme une ligne.',
          },
        ],
      },
      {
        heading: 'Comment convertir du JSON en CSV',
        blocks: [
          {
            type: 'list',
            ordered: true,
            items: [
              'Sélectionnez <strong>JSON</strong> comme format source et <strong>CSV</strong> comme format cible',
              'Collez votre JSON, importez un fichier <code>.json</code> ou récupérez-le depuis une URL',
              'Cliquez sur <strong>Convertir</strong> ou appuyez sur <kbd>Ctrl+Enter</kbd>',
              'Aperçu du résultat, modification en ligne si nécessaire, puis téléchargement au format CSV',
            ],
          },
        ],
      },
      {
        heading: 'Fonctionnalités',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Gère les objets JSON imbriqués — aplatit les clés avec le séparateur <code>_</code>',
              'Les tableaux d\u2019objets deviennent des lignes ; les tableaux primitifs sont réunis avec des points-virgules',
              'Inférence de type pour les nombres, booléens, dates et chaînes de caractères',
              'Détection intelligente des en-têtes et ordonnancement des colonnes',
              'Modification en ligne, tri et filtrage avant le téléchargement',
            ],
          },
        ],
      },
      {
        heading: 'Exemples concrets',
        blocks: [
          {
            type: 'p',
            html: '<strong>Export de données d\u2019API :</strong> Une boutique e-commerce récupère les données produits depuis l\u2019API de Shopify (JSON). La conversion en CSV permet à l\u2019équipe d\u2019inventaire de les importer dans son tableur de gestion d\u2019entrepôt.',
          },
          {
            type: 'p',
            html: '<strong>Migration de base de données :</strong> Un développeur exporte les profils utilisateurs de MongoDB en JSON, les convertit en CSV, puis les importe en masse dans PostgreSQL à l\u2019aide de <code>COPY</code>.',
          },
          {
            type: 'p',
            html: '<strong>Analyse de données :</strong> Un analyste de données récupère du JSON depuis l\u2019API Reporting de Google Analytics, le convertit en CSV et l\u2019ouvre dans R ou Python pandas pour une analyse statistique.',
          },
        ],
      },
    ],
  },
  'csv-to-json': {
    meta: {
      title: 'Convertisseur CSV vers JSON — Convertir du CSV en JSON en ligne gratuitement',
      description:
        'Convertissez du CSV en JSON en ligne gratuitement. Collez des données CSV ou importez un fichier .csv. Détection intelligente des en-têtes, inférence de type et prise en charge des objets imbriqués. 100 % dans le navigateur.',
      keywords: 'csv vers json, convertisseur csv vers json, convertir csv en json, csv vers json en ligne, csv vers json gratuit',
    },
    h1: 'Convertisseur CSV vers JSON',
    desc: 'Transformez vos tableurs CSV en objets JSON propres — instantanément. Idéal pour importer des données tabulaires dans des API, des bases de données ou des applications JavaScript. Typage intelligent des colonnes et détection des en-têtes inclus.',
    from: 'CSV',
    to: 'JSON',
    slug: 'csv-to-json',
    path: '/csv-to-json-converter',
    sections: [
      {
        heading: 'Pourquoi convertir du CSV en JSON ?',
        blocks: [
          {
            type: 'p',
            html: 'Le CSV est la langue commune des tableurs et des exports de bases de données, mais le JSON est ce que consomment nativement les API web, les bases de données NoSQL et les applications modernes en JavaScript/TypeScript. Convertir du CSV en JSON vous permet de prendre n\u2019importe quelle donnée tabulaire — des relevés bancaires aux résultats d\u2019enquêtes — et de l\u2019utiliser directement dans votre code applicatif.',
          },
          {
            type: 'p',
            html: 'Les scénarios typiques incluent le chargement de l\u2019inventaire produits d\u2019un tableur ERP dans un CMS headless, l\u2019import de listes clients issues d\u2019exports CSV dans une collection Firebase ou MongoDB, ou la préparation de jeux de test à partir de données tabulaires existantes pour des tests unitaires.',
          },
        ],
      },
      {
        heading: 'Comment les lignes deviennent du JSON',
        blocks: [
          {
            type: 'p',
            html: 'Chaque ligne du CSV devient un objet JSON. La première ligne fournit les clés (en-têtes de colonnes) et les lignes suivantes fournissent les valeurs. Par exemple :',
          },
          {
            type: 'code',
            html: 'name,age,city<br>Alice,30,NYC<br>Bob,25,LA',
          },
          {
            type: 'p',
            html: 'devient :',
          },
          {
            type: 'code',
            html: '[&lbrace;"name":"Alice","age":30,"city":"NYC"&rbrace;,&lbrace;"name":"Bob","age":25,"city":"LA"&rbrace;]',
          },
          {
            type: 'p',
            html: 'Le convertisseur détecte automatiquement les types de colonnes : les chaînes entre guillemets restent des chaînes, les nombres sans guillemets deviennent des nombres et les formats de date courants sont conservés. Les cellules vides sont incluses en tant que <code>null</code> afin que le code en aval puisse gérer explicitement les données manquantes.',
          },
        ],
      },
      {
        heading: 'Comment convertir du CSV en JSON',
        blocks: [
          {
            type: 'list',
            ordered: true,
            items: [
              'Sélectionnez <strong>CSV</strong> comme format source et <strong>JSON</strong> comme format cible',
              'Collez votre CSV, importez un fichier <code>.csv</code> ou récupérez-le depuis une URL',
              'Cliquez sur <strong>Convertir</strong> ou appuyez sur <kbd>Ctrl+Enter</kbd>',
              'Aperçu du résultat, modification en ligne si nécessaire, puis téléchargement au format JSON',
            ],
          },
        ],
      },
      {
        heading: 'Fonctionnalités',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Détecte les types de colonnes : chaînes, nombres, booléens, dates',
              'La première ligne est traitée comme en-têtes pour les noms de clés',
              'Sortie sous forme de tableau d\u2019objets (par défaut) ou de tableau de tableaux',
              'Distingue les cellules vides des clés manquantes',
              'Modification en ligne, tri et filtrage avant le téléchargement',
            ],
          },
        ],
      },
      {
        heading: 'Cas d\u2019usage courants',
        blocks: [
          {
            type: 'p',
            html: '<strong>Intégration d\u2019API :</strong> Votre partenaire vous envoie un CSV des transactions quotidiennes. Convertissez-le en JSON et envoyez-le directement à votre endpoint REST.',
          },
          {
            type: 'p',
            html: '<strong>Amorçage de base de données :</strong> Exportez une table de référence depuis MySQL au format CSV, convertissez-la en JSON et utilisez-la comme données d\u2019amorçage pour MongoDB ou une collection Firebase.',
          },
          {
            type: 'p',
            html: '<strong>Développement frontend :</strong> Un designer fournit des données dans un tableur. Convertissez-les en JSON et importez-les directement dans l\u2019état d\u2019un composant React/Vue ou dans un service worker simulé.',
          },
        ],
      },
    ],
  },
  'excel-to-json': {
    meta: {
      title: 'Convertisseur Excel vers JSON — Convertir du XLSX en JSON en ligne gratuitement',
      description:
        'Convertissez Excel (.xlsx) en JSON en ligne gratuitement. Importez votre tableur et obtenez un JSON propre. Prise en charge de plusieurs feuilles, inférence de type et gestion des objets imbriqués. 100 % dans le navigateur.',
      keywords: 'excel vers json, xlsx vers json, convertisseur excel vers json, convertir excel en json, xlsx vers json en ligne',
    },
    h1: 'Convertisseur Excel vers JSON',
    desc: 'Convertissez vos tableurs Excel (<code>.xlsx</code>) au format JSON en un clic. Gère plusieurs feuilles, la détection des types de colonnes et les fichiers volumineux jusqu\u2019à 50 Mo. Tout le traitement s\u2019effectue dans votre navigateur.',
    from: 'Excel (XLSX)',
    to: 'JSON',
    slug: 'excel-to-json',
    path: '/excel-to-json-converter',
    sections: [
      {
        heading: 'Pourquoi convertir Excel en JSON ?',
        blocks: [
          {
            type: 'p',
            html: 'Les tableurs Excel constituent l\u2019épine dorsale des données d\u2019entreprise — rapports financiers, listes d\u2019inventaire, fiches RH, résultats d\u2019enquêtes. Mais le XLSX est un format binaire qu\u2019aucune API web, base de données ou script serveur ne peut lire directement. Convertir Excel en JSON libère ces données pour un usage programmatique : les envoyer à un endpoint REST, les importer dans MongoDB ou Firebase, ou les utiliser dans un tableau de bord React/Vue.',
          },
        ],
      },
      {
        heading: 'Comment les données Excel se convertissent en JSON',
        blocks: [
          {
            type: 'p',
            html: 'Chaque feuille devient un tableau JSON d\u2019objets. La première ligne de la feuille fournit les noms de propriétés (clés) et chaque ligne suivante devient un objet JSON. Pour les classeurs contenant plusieurs feuilles, vous pouvez choisir exactement la feuille à convertir.',
          },
          {
            type: 'p',
            html: 'La mise en forme des cellules est gérée automatiquement : les dates deviennent des chaînes ISO 8601 (par ex. <code>"2026-03-15T00:00:00.000Z"</code>), les nombres restent des nombres sans guillemets et les cellules vides sont rendues en tant que <code>null</code> afin que le code en aval puisse gérer explicitement les données manquantes. Les formules sont évaluées à leurs valeurs calculées actuelles avant la conversion.',
          },
        ],
      },
      {
        heading: 'Comment convertir Excel en JSON',
        blocks: [
          {
            type: 'list',
            ordered: true,
            items: [
              'Sélectionnez <strong>Excel (XLSX)</strong> comme format source et <strong>JSON</strong> comme format cible',
              'Importez votre fichier <code>.xlsx</code> par glisser-déposer ou parcourez vos fichiers',
              'Choisissez une feuille si le classeur en contient plusieurs',
              'Cliquez sur <strong>Convertir</strong> ou appuyez sur <kbd>Ctrl+Enter</kbd>',
              'Aperçu, modification et téléchargement au format JSON',
            ],
          },
        ],
      },
      {
        heading: 'Fonctionnalités',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Prise en charge des classeurs multi-feuilles — choisissez la feuille à convertir',
              'Première ligne détectée automatiquement comme noms de propriétés JSON',
              'Inférence de type pour les nombres, dates, booléens et chaînes de caractères',
              'Les cellules vides deviennent <code>null</code> en JSON',
              'Fichiers jusqu\u2019à 50 Mo pris en charge',
            ],
          },
        ],
      },
      {
        heading: 'Exemples concrets',
        blocks: [
          {
            type: 'p',
            html: '<strong>Reporting financier :</strong> Votre équipe financière partage un P&amp;L mensuel sous forme de classeur Excel. Convertissez chaque feuille en JSON et intégrez-la dans un tableau de bord analytique personnalisé.',
          },
          {
            type: 'p',
            html: '<strong>Migration de données :</strong> Un système hérité n\u2019exporte les fiches clients qu\u2019en fichiers .xlsx. Convertissez-les en JSON et importez-les en masse dans PostgreSQL, MongoDB ou un entrepôt de données cloud comme BigQuery.',
          },
          {
            type: 'p',
            html: '<strong>Gestion de contenu :</strong> Un catalogue produits vit dans Excel avec des colonnes pour le SKU, le nom, le prix et la description. Convertissez-le en JSON et envoyez-le directement à un CMS headless ou à une API e-commerce.',
          },
        ],
      },
    ],
  },
  'json-to-excel': {
    meta: {
      title: 'Convertisseur JSON vers Excel — Convertir du JSON en XLSX en ligne gratuitement',
      description:
        'Convertissez du JSON en Excel (.xlsx) en ligne gratuitement. Collez du JSON ou importez un fichier, obtenez un tableur téléchargeable. Gère les objets imbriqués, les tableaux et les grands ensembles de données. 100 % dans le navigateur.',
      keywords: 'json vers excel, json vers xlsx, convertisseur json vers excel, convertir json en excel, json vers xlsx en ligne',
    },
    h1: 'Convertisseur JSON vers Excel',
    desc: 'Convertissez des données JSON en tableur Excel téléchargeable (<code>.xlsx</code>). Idéal pour récupérer des réponses d\u2019API, des fichiers de configuration ou des données web et les transformer en tableurs prêts pour l\u2019entreprise, avec des types de colonnes et une mise en forme corrects.',
    from: 'JSON',
    to: 'Excel (XLSX)',
    slug: 'json-to-excel',
    path: '/json-to-excel-converter',
    sections: [
      {
        heading: 'Pourquoi convertir du JSON en Excel ?',
        blocks: [
          {
            type: 'p',
            html: 'Le JSON est le format natif des API et des outils de développement, mais Excel est ce que les managers, analystes et équipes métier attendent. Convertir du JSON en XLSX comble ce fossé — récupérez des réponses d\u2019API brutes, des charges utiles de webhooks ou des exports de bases de données et transformez-les en tableurs propres que n\u2019importe qui peut ouvrir dans Microsoft Excel, Google Sheets ou Apple Numbers sans aucune configuration technique.',
          },
          {
            type: 'p',
            html: 'C\u2019est particulièrement utile lorsque vous devez partager des données avec des parties prenantes non techniques : plutôt que de leur remettre un fichier JSON en expliquant comment le lire, vous livrez un tableur familier, avec des en-têtes de colonnes, des types de données et une mise en forme corrects.',
          },
        ],
      },
      {
        heading: 'Comment le JSON imbriqué apparaît dans Excel',
        blocks: [
          {
            type: 'p',
            html: 'Les données JSON sont souvent imbriquées — des objets dans des objets, des tableaux d\u2019objets, des types mixtes. Le convertisseur aplatit les clés imbriquées à l\u2019aide d\u2019un séparateur underscore. Par exemple, <code>&lbrace;"user": &lbrace;"name": "Alice", "contact": &lbrace;"email": "a@b.com"&rbrace;&rbrace;&rbrace;</code> devient les colonnes <code>user_name</code> et <code>user_contact_email</code>.',
          },
          {
            type: 'p',
            html: 'Les tableaux d\u2019objets sont développés en plusieurs lignes. Les tableaux primitifs (comme <code>["red", "blue"]</code>) sont réunis dans une seule cellule avec des points-virgules. Chaque objet JSON devient une ligne et chaque paire clé-valeur devient une cellule avec le bon type de données — les nombres restent numériques, les dates restent des dates, si bien que les tableaux croisés dynamiques et les formules fonctionnent immédiatement.',
          },
        ],
      },
      {
        heading: 'Comment convertir du JSON en Excel',
        blocks: [
          {
            type: 'list',
            ordered: true,
            items: [
              'Sélectionnez <strong>JSON</strong> comme format source et <strong>Excel (XLSX)</strong> comme format cible',
              'Collez votre JSON, importez un fichier <code>.json</code> ou récupérez-le depuis une URL',
              'Cliquez sur <strong>Convertir</strong> ou appuyez sur <kbd>Ctrl+Enter</kbd>',
              'Aperçu du tableau, personnalisation du nom de la feuille et de la largeur des colonnes',
              'Téléchargement au format <code>.xlsx</code>',
            ],
          },
        ],
      },
      {
        heading: 'Fonctionnalités',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Objets JSON imbriqués aplatis en colonnes avec le séparateur <code>_</code>',
              'Les tableaux d\u2019objets deviennent des lignes dans le tableur',
              'Colonnes typées — nombres, dates et texte conservés',
              'Nom de feuille personnalisé et options de largeur automatique avant le téléchargement',
              'Gère les tableaux JSON, les objets imbriqués et les structures mixtes',
            ],
          },
        ],
      },
      {
        heading: 'Quand l\u2019utiliser',
        blocks: [
          {
            type: 'p',
            html: '<strong>Reporting :</strong> Récupérez des données depuis votre API backend (inscriptions, revenus, pages vues) et convertissez-les en Excel pour une présentation hebdomadaire de revue d\u2019activité.',
          },
          {
            type: 'p',
            html: '<strong>Analyse de données :</strong> Exportez du JSON depuis un outil d\u2019interrogation de base de données, convertissez-le en XLSX et ouvrez-le dans Excel pour des tableaux croisés dynamiques, des graphiques et des analyses de scénarios.',
          },
          {
            type: 'p',
            html: '<strong>Livraison client :</strong> Le système d\u2019un client envoie des données au format JSON via un webhook. Convertissez-les en un tableur propre pour qu\u2019il puisse les consulter sans aide technique.',
          },
        ],
      },
    ],
  },
  'excel-to-csv': {
    meta: {
      title: 'Convertisseur Excel vers CSV — Convertir du XLSX en CSV en ligne gratuitement',
      description:
        'Convertissez Excel (.xlsx) en CSV en ligne gratuitement. Importez votre tableur et téléchargez-le en CSV simple. Prise en charge multi-feuilles, limite de 50 Mo, traitement dans le navigateur.',
      keywords: 'excel vers csv, xlsx vers csv, convertisseur excel vers csv, convertir excel en csv, xlsx vers csv en ligne',
    },
    h1: 'Convertisseur Excel vers CSV',
    desc: 'Convertissez vos tableurs Excel au format CSV simple — rapide, gratuit et confidentiel. Idéal pour migrer des données entre systèmes, importer dans des bases de données ou préparer des fichiers pour des outils d\u2019analyse de données.',
    from: 'Excel (XLSX)',
    to: 'CSV',
    slug: 'excel-to-csv',
    path: '/excel-to-csv-converter',
    sections: [
      {
        heading: 'Pourquoi convertir Excel en CSV ?',
        blocks: [
          {
            type: 'p',
            html: 'Le CSV est le format de données le plus universel — chaque application de tableur, base de données, pipeline ETL et outil d\u2019analyse peut le lire sans bibliothèques spéciales ni licences. Convertir du XLSX en CSV supprime la mise en forme, les graphiques, les macros et les structures binaires propriétaires, pour ne laisser que des données tabulaires propres et portables qui fonctionnent partout.',
          },
          {
            type: 'p',
            html: 'C\u2019est l\u2019étape incontournable lorsque vous devez déplacer des données entre systèmes : d\u2019Excel vers PostgreSQL (via <code>COPY</code>), vers Python pandas ou R pour l\u2019analyse, vers un entrepôt de données cloud comme BigQuery ou Snowflake, ou vers un outil d\u2019import CRM qui n\u2019accepte que les fichiers CSV.',
          },
        ],
      },
      {
        heading: 'Ce que le CSV perd (et pourquoi c\u2019est une bonne chose)',
        blocks: [
          {
            type: 'p',
            html: 'Les fichiers Excel contiennent beaucoup de superflu — couleurs de cellules, polices, cellules fusionnées, formules, graphiques, tableaux croisés dynamiques, macros et XML personnalisé. Le CSV abandonne tout cela pour ne conserver que les données brutes : des lignes et des colonnes de texte simple séparées par des virgules. Les fichiers CSV sont ainsi beaucoup plus légers, plus rapides à analyser et universellement compatibles. Les formules sont évaluées à leurs valeurs actuelles avant l\u2019export, vous obtenez donc les résultats et non la syntaxe des formules.',
          },
        ],
      },
      {
        heading: 'Comment convertir Excel en CSV',
        blocks: [
          {
            type: 'list',
            ordered: true,
            items: [
              'Sélectionnez <strong>Excel (XLSX)</strong> comme format source et <strong>CSV</strong> comme format cible',
              'Importez votre fichier <code>.xlsx</code> par glisser-déposer ou parcourez vos fichiers',
              'Sélectionnez une feuille si le classeur en contient plusieurs',
              'Cliquez sur <strong>Convertir</strong> ou appuyez sur <kbd>Ctrl+Enter</kbd>',
              'Aperçu et téléchargement au format CSV',
            ],
          },
        ],
      },
      {
        heading: 'Fonctionnalités',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Classeurs Excel multi-feuilles pris en charge',
              'Guillemets CSV corrects — gère les virgules et les sauts de ligne dans les cellules',
              'Ligne d\u2019en-tête conservée à partir des noms de colonnes Excel',
              'Fichiers jusqu\u2019à 50 Mo pris en charge',
              'Aucune mise en forme ni métadonnée conservée — uniquement des données propres',
            ],
          },
        ],
      },
      {
        heading: 'Quand utiliser cette conversion',
        blocks: [
          {
            type: 'p',
            html: '<strong>Import en base de données :</strong> Vous disposez d\u2019un tableur de fiches clients à importer en masse dans PostgreSQL, MySQL ou SQLite. Le CSV est le format d\u2019entrée standard pour les commandes <code>COPY</code> et <code>LOAD DATA</code>.',
          },
          {
            type: 'p',
            html: '<strong>Analyse de données :</strong> Exportez un rapport Excel en CSV et chargez-le dans Python (pandas), R ou Jupyter Notebook pour de la modélisation statistique, de la visualisation ou du machine learning.',
          },
          {
            type: 'p',
            html: '<strong>Migration de système :</strong> Passage d\u2019un CRM, ERP ou système comptable à un autre. Presque tous les outils de migration acceptent le CSV comme format intermédiaire.',
          },
          {
            type: 'p',
            html: '<strong>Contrôle de version :</strong> Suivez les modifications apportées aux données tabulaires dans git. Les fichiers CSV se comparent proprement, tandis que les fichiers binaires .xlsx sont illisibles pour git.',
          },
        ],
      },
    ],
  },
};

export const frHome: HomeContent = {
  meta: {
    title: 'Convertisseur de données en ligne gratuit — Outil JSON, CSV, Excel, XML, YAML',
    description:
      'Convertissez JSON, CSV, Excel, XML, YAML, HTML, Markdown et bien plus — le tout dans votre navigateur. Aucun envoi de données, 100 % confidentiel.',
    keywords:
      'convertisseur de données, json vers csv, excel vers json, csv vers json, xml vers json, outil en ligne gratuit, convertisseur de format',
  },
  hero: {
    h1: 'Convertisseur de données en ligne gratuit — JSON, CSV, Excel, XML &amp; YAML',
    descs: [
      'Data Converter est un outil en ligne gratuit qui permet aux développeurs, analystes, ingénieurs QA et entreprises de convertir des données structurées entre JSON, XML, CSV, Excel, YAML et d\u2019autres formats.',
      'Contrairement à de nombreux convertisseurs en ligne, tout s\u2019exécute directement dans votre navigateur. Vos données ne sont jamais envoyées à nos serveurs, ce qui rend les conversions sûres et confidentielles.',
      'Que vous déboguiez des API, migriez des bases de données, transformiez des fichiers de configuration ou prépariez des tableurs, Data Converter simplifie le processus.',
    ],
    trust: 'Traitement 100 % côté client — vos données n\u2019atteignent jamais aucun serveur',
  },
  features: {
    heading: 'Convertissez entre tous les principaux formats de données',
    cards: [
      {
        title: 'Convertisseur JSON',
        desc: 'Convertissez du JSON en CSV, Excel, XML, YAML, HTML, Markdown ou PDF. Gère les objets imbriqués, les tableaux et les fichiers volumineux.',
        link: '/json-to-csv-converter',
        icon: 'json',
      },
      {
        title: 'Convertisseur CSV',
        desc: 'Convertissez du CSV en JSON, Excel, XML, YAML et plus encore. Détection intelligente des en-têtes et inférence de type incluses.',
        link: '/csv-to-json-converter',
        icon: 'csv',
      },
      {
        title: 'Convertisseur Excel',
        desc: 'Convertissez Excel (.xlsx) en JSON, CSV, XML, YAML avec la prise en charge multi-feuilles. Importez et convertissez instantanément.',
        link: '/excel-to-json-converter',
        icon: 'excel',
      },
      {
        title: 'Convertisseur XML &amp; YAML',
        desc: 'Convertissez du XML ou du YAML en JSON, CSV, Excel et autres formats. Aplatissement des éléments imbriqués avec un séparateur underscore.',
        link: '/json-to-excel-converter',
        icon: 'xml',
      },
      {
        title: 'Convertisseur d\u2019images',
        desc: 'Convertissez vos images en PNG, JPG ou WebP dans votre navigateur. Contrôle de la qualité, aperçu des dimensions et téléchargement instantané.',
        link: '/image-converter',
        icon: 'image',
      },
    ],
  },
  howItWorks: {
    heading: 'Comment convertir des données en ligne gratuitement',
    steps: [
      { title: 'Sélectionnez les formats', desc: 'choisissez les formats source et cible dans la barre de conversion' },
      { title: 'Collez ou importez', desc: 'collez des données, importez un fichier ou récupérez-les depuis une URL' },
      { title: 'Convertissez instantanément', desc: 'cliquez sur Convertir ou appuyez sur Ctrl+Enter' },
      { title: 'Modifiez &amp; exportez', desc: 'aperçu, tri, modification et téléchargement dans n\u2019importe quel format' },
    ],
  },
  useCases: {
    heading: 'Pourquoi utiliser Data Converter ?',
    sub: 'Tout s\u2019exécute côté client — vos fichiers ne quittent jamais votre appareil. Pas d\u2019inscription, aucune limite, entièrement gratuit.',
    cards: [
      {
        icon: 'api',
        title: 'Développement d\u2019API',
        desc: 'Convertissez des réponses d\u2019API JSON en CSV pour une analyse dans un tableur, ou transformez des données CSV en JSON pour tester vos API.',
      },
      {
        icon: 'db',
        title: 'Migrations de bases de données',
        desc: 'Convertissez des feuilles Excel ou des exports CSV en JSON ou XML pour une importation dans MongoDB, PostgreSQL, Firebase et plus encore.',
      },
      {
        icon: 'config',
        title: 'Gestion de la configuration',
        desc: 'Traduisez des fichiers de configuration YAML en JSON pour des applications JavaScript, ou convertissez des configurations JSON en YAML pour Docker et Kubernetes.',
      },
      {
        icon: 'report',
        title: 'Reporting de données',
        desc: 'Convertissez des données JSON ou XML en tableaux HTML mis en forme ou en Markdown pour la documentation, les rapports et les présentations.',
      },
      {
        icon: 'sheet',
        title: 'Traitement de tableurs',
        desc: 'Importez des fichiers Excel, modifiez les valeurs des cellules, filtrez les lignes et exportez en CSV, JSON ou PDF — le tout dans votre navigateur.',
      },
    ],
  },
  formats: {
    heading: 'Conversions prises en charge',
    sub: 'Chaque paire de formats dont vous avez besoin, à un clic',
    cards: [
      {
        label: 'JSON',
        targets: ['CSV', 'Excel', 'XML', 'YAML', 'HTML', 'Markdown', 'PDF'],
        tag: 'Données d\u2019API, fichiers de configuration',
      },
      {
        label: 'CSV',
        targets: ['JSON', 'Excel', 'XML', 'YAML', 'HTML', 'Markdown', 'PDF'],
        tag: 'Tableurs, exports de bases de données',
      },
      {
        label: 'Excel',
        targets: ['JSON', 'CSV', 'XML', 'YAML', 'HTML', 'Markdown', 'PDF'],
        tag: 'Rapports métier, multi-feuilles',
      },
      {
        label: 'XML',
        targets: ['JSON', 'CSV', 'Excel', 'YAML', 'HTML', 'Markdown', 'PDF'],
        tag: 'Systèmes hérités, services web',
      },
      {
        label: 'YAML',
        targets: ['JSON', 'CSV', 'Excel', 'XML', 'HTML', 'Markdown', 'PDF'],
        tag: 'Docker, Kubernetes, CI/CD',
      },
      {
        label: 'PNG',
        targets: ['JPG', 'WebP'],
        tag: 'Graphiques web, logos, transparence',
      },
      {
        label: 'JPG',
        targets: ['PNG', 'WebP'],
        tag: 'Photos, partage, le web',
      },
      {
        label: 'WebP',
        targets: ['JPG', 'PNG'],
        tag: 'Images web petites et rapides',
      },
    ],
  },
};
