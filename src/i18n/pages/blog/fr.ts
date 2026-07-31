import type { BlogContent, BlogSlug } from '../types';

const order: BlogSlug[] = [
  'json-to-csv-best-practices',
  'csv-to-json-tutorial',
  'excel-vs-csv',
  'json-vs-xml-vs-yaml',
  'data-cleaning-tips',
  'why-json-is-popular',
  'excel-formulas-to-csv',
  'data-migration-strategies',
  'large-file-conversion',
];

const posts = {
  'json-to-csv-best-practices': {
    title: 'JSON vers CSV : bonnes pratiques pour les donnÃ©es imbriquÃ©es',
    desc: 'Apprenez Ã  gÃ©rer un JSON profondÃ©ment imbriquÃ© lors de la conversion en CSV. StratÃ©gies pratiques pour l\u2019aplatissement, la dÃ©nomination des clÃ©s et la prÃ©servation des donnÃ©es.',
    dateISO: '2026-03-20',
    dateDisplay: '20 mars 2026',
    img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=240&fit=crop',
    heroImg: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop',
    heroAlt: 'Code sur un Ã©cran d\u2019ordinateur',
  },
  'csv-to-json-tutorial': {
    title: 'Comment convertir un CSV en JSON : un tutoriel complet',
    desc: 'Un guide pas Ã  pas pour convertir un CSV en JSON. Couvre l\u2019infÃ©rence de types, la correspondance des en-tÃªtes et la gestion des cas particuliers comme les cellules vides.',
    dateISO: '2026-03-18',
    dateDisplay: '18 mars 2026',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=240&fit=crop',
    heroImg: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
    heroAlt: 'Tableau de bord d\u2019analyse de donnÃ©es sur un Ã©cran',
  },
  'excel-vs-csv': {
    title: 'Excel vs CSV : quand utiliser chaque format',
    desc: 'Excel et CSV servent des objectifs diffÃ©rents. Voici quand rester avec les feuilles de calcul et quand le CSV brut est le meilleur choix.',
    dateISO: '2026-03-15',
    dateDisplay: '15 mars 2026',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=240&fit=crop',
    heroImg: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=400&fit=crop',
    heroAlt: 'Ordinateur portable sur un bureau en bois',
  },
  'json-vs-xml-vs-yaml': {
    title: 'JSON vs XML vs YAML : choisir le bon format de donnÃ©es',
    desc: 'Une comparaison pratique de JSON, XML et YAML. Apprenez quel format convient Ã  votre projet en fonction de la lisibilitÃ©, de la taille et des outils.',
    dateISO: '2026-03-12',
    dateDisplay: '12 mars 2026',
    img: 'https://images.unsplash.com/photo-1555421689-d68471e189f2?w=400&h=240&fit=crop',
    heroImg: 'https://images.unsplash.com/photo-1555421689-d68471e189f2?w=800&h=400&fit=crop',
    heroAlt: 'Tableau de bord d\u2019analyse avec des chiffres',
  },
  'data-cleaning-tips': {
    title: '5 conseils de nettoyage de donnÃ©es avant de convertir des feuilles de calcul',
    desc: 'Des donnÃ©es propres se convertissent mieux. Cinq conseils concrets pour prÃ©parer vos feuilles de calcul avant de les convertir en JSON, CSV ou d\u2019autres formats.',
    dateISO: '2026-03-10',
    dateDisplay: '10 mars 2026',
    img: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=240&fit=crop',
    heroImg: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=400&fit=crop',
    heroAlt: 'Carnet et stylo sur un bureau',
  },
  'why-json-is-popular': {
    title: 'Pourquoi JSON est devenu le format de donnÃ©es universel des API web',
    desc: 'Un regard sur les dÃ©cisions de conception et les facteurs d\u2019Ã©cosystÃ¨me qui ont fait de JSON le format de donnÃ©es par dÃ©faut des API web modernes.',
    dateISO: '2026-03-05',
    dateDisplay: '5 mars 2026',
    img: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=240&fit=crop',
    heroImg: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=400&fit=crop',
    heroAlt: 'Baie de serveurs avec cÃ¢bles rÃ©seau',
  },
  'excel-formulas-to-csv': {
    title: 'GÃ©rer les formules Excel lors de la conversion en CSV',
    desc: 'Qu\u2019arrive-t-il aux formules Excel, Ã  la mise en forme conditionnelle et aux macros lorsque vous convertissez en CSV brut ? Tout ce que vous devez savoir.',
    dateISO: '2026-03-02',
    dateDisplay: '2 mars 2026',
    img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=240&fit=crop',
    heroImg: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=400&fit=crop',
    heroAlt: 'Espace de travail moderne avec ordinateur portable',
  },
  'data-migration-strategies': {
    title: 'StratÃ©gies de migration de donnÃ©es : des feuilles de calcul aux bases de donnÃ©es',
    desc: 'Un guide pour migrer des donnÃ©es de fichiers Excel et CSV vers des bases de donnÃ©es relationnelles, des magasins NoSQL et des entrepÃ´ts de donnÃ©es cloud.',
    dateISO: '2026-02-28',
    dateDisplay: '28 fÃ©vrier 2026',
    img: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=400&h=240&fit=crop',
    heroImg: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&h=400&fit=crop',
    heroAlt: 'Serveur de donnÃ©es avec des voyants clignotants',
  },
  'large-file-conversion': {
    title: 'Comment gÃ©rer les conversions de gros fichiers sans perdre de donnÃ©es',
    desc: 'Des conseils pour convertir de grands ensembles de donnÃ©es - gestion de la mÃ©moire, stratÃ©gies de traitement par blocs et Ã  quoi faire attention avec les fichiers de plus de 10 Mo.',
    dateISO: '2026-02-25',
    dateDisplay: '25 fÃ©vrier 2026',
    img: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=400&h=240&fit=crop',
    heroImg: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=400&fit=crop',
    heroAlt: 'Ã‰diteur de code sur un Ã©cran d\u2019ordinateur',
  },
} satisfies Partial<Record<BlogSlug, BlogCardData>>;

type BlogCardData = {
  title: string;
  desc: string;
  dateISO: string;
  dateDisplay: string;
  img: string;
  heroImg: string;
  heroAlt: string;
};

export const blogContent: BlogContent = {
  index: {
    meta: {
      title: 'Blog',
      description:
        'Articles et guides sur la conversion de donnÃ©es, JSON, CSV, Excel et le traitement de donnÃ©es.',
      keywords: 'blog conversion de donnÃ©es, astuces json, guide csv, excel vers json, traitement de donnÃ©es',
    },
    h1: 'Blog',
    subtitle: 'Astuces, guides et analyses approfondies sur la conversion et le traitement de donnÃ©es.',
    breadcrumbs: [
      { name: 'Accueil', url: '/' },
      { name: 'Blog', url: '/blog' },
    ],
    order,
    posts,
  },
  posts: {
    'json-to-csv-best-practices': {
      meta: {
        title: 'JSON vers CSV : bonnes pratiques pour les donnÃ©es imbriquÃ©es',
        description:
          'Apprenez Ã  gÃ©rer un JSON profondÃ©ment imbriquÃ© lors de la conversion en CSV. StratÃ©gies pratiques pour l\u2019aplatissement, la dÃ©nomination des clÃ©s et la prÃ©servation des donnÃ©es.',
        keywords: 'json vers csv imbriquÃ©, aplatir json, bonnes pratiques json imbriquÃ©',
      },
      h1: 'JSON vers CSV : bonnes pratiques pour les donnÃ©es imbriquÃ©es',
      breadcrumbs: [
        { name: 'Accueil', url: '/' },
        { name: 'Blog', url: '/blog' },
        { name: 'Bonnes pratiques JSON vers CSV', url: '/blog/json-to-csv-best-practices' },
      ],
      dateISO: '2026-03-20',
      dateDisplay: '20 mars 2026',
      byline: 'par Naim Biswas',
      heroImg: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop',
      heroAlt: 'Code sur un Ã©cran d\u2019ordinateur',
      intro:
        'Convertir du JSON en CSV est simple lorsque vos donnÃ©es sont plates - un tableau d\u2019objets avec les mÃªmes clÃ©s. Mais le JSON rÃ©el est rarement aussi simple. Les API renvoient des objets imbriquÃ©s, des tableaux de longueurs variables et des types de donnÃ©es mixtes. Voici comment gÃ©rer ces cas sans perdre d\u2019informations.',
      sections: [
        {
          heading: 'Le problÃ¨me de l\u2019aplatissement',
          blocks: [
            {
              type: 'p',
              html: 'Le CSV est un format plat : chaque ligne possÃ¨de le mÃªme ensemble de colonnes. Le JSON peut s\u2019imbriquer arbitrairement profondÃ©ment. L\u2019approche standard consiste Ã  aplatir les clÃ©s Ã  l\u2019aide d\u2019un sÃ©parateur. Par exemple :',
            },
            {
              type: 'p',
              html: '<code>&lbrace;"user": &lbrace;"name": "Alice", "address": &lbrace;"city": "NYC"&rbrace;&rbrace;&rbrace;</code>',
            },
            {
              type: 'p',
              html: 'devient les colonnes <code>user_name</code> et <code>user_address_city</code>. Le sÃ©parateur par tiret bas est une convention, mais la cohÃ©rence importe plus que le choix du caractÃ¨re. Certains outils utilisent des points (<code>user.address.city</code>) ou des crochets (<code>user[address][city]</code>).',
            },
          ],
        },
        {
          heading: 'GÃ©rer les tableaux dans les objets',
          blocks: [
            {
              type: 'p',
              html: 'Les tableaux sont la partie la plus dÃ©licate. Lorsqu\u2019un objet contient un tableau de primitives (comme <code>"tags": ["red", "blue", "green"]</code>), l\u2019approche courante consiste Ã  les joindre avec un dÃ©limiteur - les points-virgules fonctionnent bien puisque le CSV utilise dÃ©jÃ  des virgules. Cela prÃ©serve chaque ligne parente intacte.',
            },
            {
              type: 'p',
              html: 'Lorsqu\u2019un objet contient un tableau d\u2019objets (comme <code>"orders": [&lbrace;"id": 1&rbrace;, &lbrace;"id": 2&rbrace;]</code>), vous avez deux options : dÃ©velopper chaque objet imbriquÃ© dans sa propre ligne (en rÃ©pÃ©tant les donnÃ©es parentes), ou les conserver sous forme de chaÃ®ne JSON dans une seule cellule. Le bon choix dÃ©pend de votre cas d\u2019utilisation en aval.',
            },
          ],
        },
        {
          heading: 'InfÃ©rence de types',
          blocks: [
            {
              type: 'p',
              html: 'Le CSV est un format de texte uniquement, mais la plupart des applications de tableur infÃ¨rent les types Ã  l\u2019ouverture d\u2019un fichier. Le convertisseur doit produire les nombres sans guillemets (<code>42</code> et non <code>"42"</code>), les boolÃ©ens sous forme de <code>true</code>/<code>false</code>, et les dates dans un format cohÃ©rent comme l\u2019ISO 8601 (<code>2026-03-20</code>). Cela permet Ã  Excel et Google Sheets d\u2019appliquer automatiquement les bons types de colonnes.',
            },
          ],
        },
        {
          heading: 'Conventions de dÃ©nomination des clÃ©s',
          blocks: [
            {
              type: 'p',
              html: 'Restez en minuscules avec des tirets bas pour les clÃ©s aplaties. Ã‰vitez les caractÃ¨res spÃ©ciaux, les espaces et les chiffres en dÃ©but de clÃ©. Cela garantit que le CSV rÃ©sultant s\u2019importe proprement dans les bases de donnÃ©es et les outils d\u2019analyse sans renommage manuel des colonnes.',
            },
          ],
        },
        {
          heading: 'Valeurs vides et manquantes',
          blocks: [
            {
              type: 'p',
              html: 'Tous les objets JSON ne possÃ¨dent pas chaque clÃ©. DÃ©cidez Ã  l\u2019avance comment gÃ©rer les valeurs manquantes : chaÃ®nes vides, <code>null</code>, ou simplement l\u2019omission de la cellule. Le choix le plus sÃ»r pour la plupart des bases de donnÃ©es est de produire une cellule vide, que la plupart des outils d\u2019importation interprÃ¨tent comme NULL.',
            },
          ],
        },
        {
          heading: 'RÃ©sumÃ©',
          blocks: [
            {
              type: 'p',
              html: 'La conversion de JSON imbriquÃ© en CSV est un problÃ¨me de correspondance. Choisissez un sÃ©parateur cohÃ©rent pour les clÃ©s, dÃ©cidez comment aplatir les tableaux et conservez des types propres. Un bon convertisseur gÃ¨re tout cela automatiquement - c\u2019est exactement ce que fait cet outil.',
            },
          ],
        },
      ],
    },
    'csv-to-json-tutorial': {
      meta: {
        title: 'Comment convertir un CSV en JSON : un tutoriel complet',
        description:
          'Un guide pas Ã  pas pour convertir un CSV en JSON. Couvre l\u2019infÃ©rence de types, la correspondance des en-tÃªtes et la gestion des cas particuliers comme les cellules vides.',
        keywords: 'tutoriel csv vers json, convertir csv en json, guide csv vers json',
      },
      h1: 'Comment convertir un CSV en JSON : un tutoriel complet',
      breadcrumbs: [
        { name: 'Accueil', url: '/' },
        { name: 'Blog', url: '/blog' },
        { name: 'Tutoriel CSV vers JSON', url: '/blog/csv-to-json-tutorial' },
      ],
      dateISO: '2026-03-18',
      dateDisplay: '18 mars 2026',
      byline: 'par Naim Biswas',
      heroImg: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
      heroAlt: 'Tableau de bord d\u2019analyse de donnÃ©es sur un Ã©cran',
      intro:
        'Le CSV est le format le plus courant pour exporter des donnÃ©es depuis des feuilles de calcul et des bases de donnÃ©es. Le JSON est ce que les applications web et les API utilisent nativement. La conversion entre les deux est une tÃ¢che courante pour les dÃ©veloppeurs, les analystes de donnÃ©es et toute personne dÃ©plaÃ§ant des donnÃ©es entre systÃ¨mes.',
      sections: [
        {
          heading: 'Comprendre la structure',
          blocks: [
            {
              type: 'p',
              html: 'Un fichier CSV possÃ¨de une ligne d\u2019en-tÃªte suivie de lignes de donnÃ©es. Chaque colonne devient une clÃ© de l\u2019objet JSON, et chaque ligne devient un objet. Le convertisseur lit la premiÃ¨re ligne comme noms de propriÃ©tÃ©s et les lignes suivantes comme valeurs.',
            },
            { type: 'p', html: 'Par exemple, ce CSV :' },
            {
              type: 'p',
              html: '<code>name,age,city<br>Alice,30,NYC<br>Bob,25,LA</code>',
            },
            { type: 'p', html: 'devient ce JSON :' },
            {
              type: 'p',
              html: '<code>[&lbrace;"name":"Alice","age":30,"city":"NYC"&rbrace;,&lbrace;"name":"Bob","age":25,"city":"LA"&rbrace;]</code>',
            },
          ],
        },
        {
          heading: 'L\u2019infÃ©rence de types compte',
          blocks: [
            {
              type: 'p',
              html: 'Un bon convertisseur CSV vers JSON ne traite pas tout comme des chaÃ®nes. Les nombres comme <code>30</code> doivent devenir des nombres JSON, et non des chaÃ®nes entre guillemets. <code>true</code> et <code>false</code> doivent devenir des boolÃ©ens JSON. Les dates doivent rester dans un format analysable. C\u2019est essentiel lorsque la sortie JSON alimente directement une API ou une base de donnÃ©es - vous ne voulez pas avoir Ã  convertir les types cÃ´tÃ© rÃ©ception.',
            },
          ],
        },
        {
          heading: 'GÃ©rer les cas particuliers',
          blocks: [
            {
              type: 'p',
              html: '<strong>Cellules vides :</strong> Une cellule CSV sans valeur doit devenir <code>null</code> en JSON, et non une chaÃ®ne vide <code>""</code>. Cette distinction compte pour l\u2019intÃ©gritÃ© des donnÃ©es - null signifie &ldquo;aucune valeur,&rdquo; tandis qu\u2019une chaÃ®ne vide signifie &ldquo;la valeur est vide.&rdquo;',
            },
            {
              type: 'p',
              html: '<strong>Champs entre guillemets :</strong> Les valeurs CSV contenant des virgules, des sauts de ligne ou des guillemets sont encadrÃ©es de guillemets doubles. Un convertisseur robuste gÃ¨re cela correctement afin qu\u2019une cellule comme <code>"Smith, John"</code> reste un seul champ au lieu d\u2019Ãªtre divisÃ©e.',
            },
            {
              type: 'p',
              html: '<strong>Espaces dans les en-tÃªtes :</strong> Les en-tÃªtes de colonnes avec des espaces en dÃ©but ou en fin doivent Ãªtre automatiquement nettoyÃ©s. <code>" name "</code> doit devenir <code>"name"</code> comme clÃ© JSON.',
            },
          ],
        },
        {
          heading: 'Formats de sortie',
          blocks: [
            {
              type: 'p',
              html: 'La plupart des outils produisent le JSON sous forme de tableau d\u2019objets, le format le plus utile pour les API et les bases de donnÃ©es. Certains outils proposent une option de tableau de tableaux (sans les en-tÃªtes comme clÃ©s), plus compacte mais moins lisible. Choisissez le format qui correspond Ã  votre cas d\u2019utilisation.',
            },
          ],
        },
        {
          heading: 'Erreurs courantes',
          blocks: [
            {
              type: 'ul',
              items: [
                '<strong>Oublier l\u2019encodage :</strong> Les fichiers CSV peuvent utiliser diffÃ©rents encodages de caractÃ¨res (UTF-8, Latin-1). Assurez-vous que votre outil gÃ¨re correctement l\u2019UTF-8, surtout si vos donnÃ©es contiennent des accents ou des caractÃ¨res spÃ©ciaux.',
                '<strong>DÃ©limiteurs incohÃ©rents :</strong> Tous les fichiers CSV n\u2019utilisent pas des virgules. Certains utilisent des tabulations (TSV), des points-virgules ou des barres verticales. Le convertisseur doit dÃ©tecter automatiquement le dÃ©limiteur ou vous permettre de le spÃ©cifier.',
                '<strong>Gros fichiers sans diffusion en continu :</strong> Les convertisseurs basÃ©s sur le navigateur doivent gÃ©rer les gros fichiers sans geler le navigateur. Recherchez des outils qui traitent les donnÃ©es par blocs.',
              ],
            },
          ],
        },
        {
          heading: 'RÃ©sumÃ©',
          blocks: [
            {
              type: 'p',
              html: 'La conversion CSV vers JSON est une transformation bien dÃ©finie, mais la qualitÃ© de la sortie dÃ©pend de la faÃ§on dont l\u2019outil gÃ¨re les types, les cas particuliers et l\u2019encodage. Un bon convertisseur fait automatiquement ce qu\u2019il faut pour que vous puissiez vous concentrer sur l\u2019utilisation des donnÃ©es plutÃ´t que sur leur dÃ©bogage.',
            },
          ],
        },
      ],
    },
    'excel-vs-csv': {
      meta: {
        title: 'Excel vs CSV : quand utiliser chaque format',
        description:
          'Excel et CSV servent des objectifs diffÃ©rents. Voici quand rester avec les feuilles de calcul et quand le CSV brut est le meilleur choix.',
        keywords: 'excel vs csv, xlsx vs csv, formats de feuilles de calcul, quand utiliser csv',
      },
      h1: 'Excel vs CSV : quand utiliser chaque format',
      breadcrumbs: [
        { name: 'Accueil', url: '/' },
        { name: 'Blog', url: '/blog' },
        { name: 'Excel vs CSV', url: '/blog/excel-vs-csv' },
      ],
      dateISO: '2026-03-15',
      dateDisplay: '15 mars 2026',
      byline: 'par Naim Biswas',
      heroImg: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=400&fit=crop',
      heroAlt: 'Ordinateur portable sur un bureau en bois',
      intro:
        'Excel (.xlsx) et CSV (.csv) sont les deux formats les plus courants pour les donnÃ©es tabulaires, mais ils servent des objectifs fondamentalement diffÃ©rents. Le bon choix dÃ©pend de qui a besoin des donnÃ©es et de ce qu\u2019ils doivent en faire.',
      sections: [
        {
          heading: 'Ce qu\u2019Excel vous offre',
          blocks: [
            {
              type: 'p',
              html: 'Les fichiers Excel sont des documents riches. Ils peuvent contenir plusieurs feuilles, une mise en forme des cellules (couleurs, polices, bordures), des cellules fusionnÃ©es, des formules, des graphiques, des tableaux croisÃ©s dynamiques, une mise en forme conditionnelle, des rÃ¨gles de validation de donnÃ©es et des macros. Un classeur Excel est plus proche d\u2019une mini-application que d\u2019un simple fichier de donnÃ©es.',
            },
            { type: 'p', html: 'Utilisez Excel lorsque :' },
            {
              type: 'ul',
              items: [
                'Vous avez besoin de mise en forme et de prÃ©sentation visuelle',
                'Vous crÃ©ez des rapports ou des tableaux de bord destinÃ©s Ã  des lecteurs humains',
                'Vous utilisez des formules qui rÃ©fÃ©rencent d\u2019autres cellules ou feuilles',
                'Vous avez besoin de plusieurs tables liÃ©es dans un seul fichier',
                'Vous travaillez avec des parties prenantes qui attendent une feuille de calcul soignÃ©e',
              ],
            },
          ],
        },
        {
          heading: 'Ce que le CSV vous offre',
          blocks: [
            {
              type: 'p',
              html: 'Le CSV est de la donnÃ©e pure : des lignes et des colonnes de texte brut sÃ©parÃ©es par des virgules. Pas de mise en forme, pas de formules, pas de macros. Juste les valeurs. Cette simplicitÃ© est sa superpuissance - tous les langages de programmation, bases de donnÃ©es et outils de donnÃ©es peuvent lire et Ã©crire du CSV sans bibliothÃ¨ques spÃ©ciales.',
            },
            { type: 'p', html: 'Utilisez le CSV lorsque :' },
            {
              type: 'ul',
              items: [
                'Vous dÃ©placez des donnÃ©es entre systÃ¨mes (imports/exports de bases de donnÃ©es, pipelines ETL)',
                'Vous traitez des donnÃ©es par programmation (Python, R, JavaScript, etc.)',
                'Vous avez besoin de contrÃ´le de version - les fichiers CSV se comparent proprement dans git',
                'Vous voulez la plus petite taille de fichier possible',
                'Vous publiez des donnÃ©es ouvertes pour que d\u2019autres les tÃ©lÃ©chargent et les utilisent',
              ],
            },
          ],
        },
        {
          heading: 'La zone grise',
          blocks: [
            {
              type: 'p',
              html: 'De nombreux outils brouillent la frontiÃ¨re. Excel peut ouvrir des fichiers CSV et appliquer une mise en forme Ã  la volÃ©e. Google Sheets traite les deux formats comme natifs. Mais si vous enregistrez un fichier Excel mis en forme au format CSV, toute la mise en forme est perdue - seules les valeurs brutes des cellules restent. Les formules sont Ã©valuÃ©es Ã  leurs valeurs actuelles, donc <code>=SUM(A1:A10)</code> devient un nombre.',
            },
          ],
        },
        {
          heading: 'Convertir entre les deux',
          blocks: [
            {
              type: 'p',
              html: 'Convertir Excel en CSV supprime tout sauf les donnÃ©es. C\u2019est utile lorsque vous devez migrer des donnÃ©es hors d\u2019une feuille de calcul vers une base de donnÃ©es ou un outil d\u2019analyse. Convertir un CSV en Excel ajoute une couche de conteneur - vous obtenez les mÃªmes donnÃ©es mais elles peuvent dÃ©sormais Ãªtre ouvertes, mises en forme et partagÃ©es comme une feuille de calcul professionnelle.',
            },
          ],
        },
        {
          heading: 'Lequel devriez-vous utiliser ?',
          blocks: [
            {
              type: 'p',
              html: 'Si vous vous posez la question, la rÃ©ponse est gÃ©nÃ©ralement le CSV. Le CSV est le format d\u2019Ã©change - c\u2019est ce qu\u2019on utilise quand les donnÃ©es doivent se dÃ©placer. Excel est le format de prÃ©sentation - c\u2019est ce qu\u2019on utilise quand les donnÃ©es doivent Ãªtre lues par des personnes. Les deux sont des outils essentiels, et savoir quand utiliser chacun d\u2019eux fait gagner du temps et Ã©vite la perte de donnÃ©es.',
            },
          ],
        },
      ],
    },
    'json-vs-xml-vs-yaml': {
      meta: {
        title: 'JSON vs XML vs YAML : choisir le bon format de donnÃ©es',
        description:
          'Une comparaison pratique de JSON, XML et YAML. Apprenez quel format convient Ã  votre projet en fonction de la lisibilitÃ©, de la taille et des outils.',
        keywords: 'json vs xml vs yaml, comparaison de formats de donnÃ©es, formats de donnÃ©es structurÃ©es',
      },
      h1: 'JSON vs XML vs YAML : choisir le bon format de donnÃ©es',
      breadcrumbs: [
        { name: 'Accueil', url: '/' },
        { name: 'Blog', url: '/blog' },
        { name: 'JSON vs XML vs YAML', url: '/blog/json-vs-xml-vs-yaml' },
      ],
      dateISO: '2026-03-12',
      dateDisplay: '12 mars 2026',
      byline: 'par Naim Biswas',
      heroImg: 'https://images.unsplash.com/photo-1555421689-d68471e189f2?w=800&h=400&fit=crop',
      heroAlt: 'Tableau de bord d\u2019analyse avec des chiffres',
      intro:
        'JSON, XML et YAML sont les trois formats dominants pour les donnÃ©es structurÃ©es. Chacun a des points forts et des compromis. Le bon choix dÃ©pend de votre cas d\u2019utilisation, de votre Ã©cosystÃ¨me et de qui lira les donnÃ©es.',
      sections: [
        {
          heading: 'JSON - La norme web',
          blocks: [
            {
              type: 'p',
              html: 'JSON (JavaScript Object Notation) est le standard de facto pour les API web. Il est lÃ©ger, prend nativement en charge les objets, les tableaux, les chaÃ®nes, les nombres, les boolÃ©ens et null, et peut Ãªtre analysÃ© dans n\u2019importe quel langage moderne sans dÃ©pendances externes. Sa syntaxe est un sous-ensemble de JavaScript, donc le code frontend peut le consommer directement.',
            },
            {
              type: 'p',
              html: '<strong>Points forts :</strong> Analyse rapide, compact, prise en charge native de JavaScript, idÃ©al pour les API et les fichiers de configuration.',
            },
            {
              type: 'p',
              html: '<strong>Points faibles :</strong> Pas de commentaires, pas de validation de schÃ©ma prÃªte Ã  l\u2019emploi (bien que JSON Schema existe), moins lisible pour les structures profondÃ©ment imbriquÃ©es.',
            },
            {
              type: 'p',
              html: '<strong>IdÃ©al pour :</strong> Les API REST, les donnÃ©es d\u2019applications web, les fichiers de configuration, l\u2019Ã©change de donnÃ©es entre services.',
            },
          ],
        },
        {
          heading: 'XML - Le vÃ©tÃ©ran d\u2019entreprise',
          blocks: [
            {
              type: 'p',
              html: 'XML (eXtensible Markup Language) existe depuis la fin des annÃ©es 1990. Il utilise une syntaxe basÃ©e sur des balises avec des attributs et des espaces de noms. XML est verbeux mais extrÃªmement flexible - vous pouvez reprÃ©senter presque toutes les structures de donnÃ©es, y compris le contenu mixte (texte avec Ã©lÃ©ments en ligne).',
            },
            {
              type: 'p',
              html: '<strong>Points forts :</strong> Validation de schÃ©ma (XSD), espaces de noms pour Ã©viter les collisions de noms, XSLT pour les transformations, outils robustes dans les Ã©cosystÃ¨mes d\u2019entreprise.',
            },
            {
              type: 'p',
              html: '<strong>Points faibles :</strong> Verbeux, plus lent Ã  analyser, outils plus complexes, taille de charge utile plus lourde.',
            },
            {
              type: 'p',
              html: '<strong>IdÃ©al pour :</strong> Le stockage de documents, les API SOAP, les systÃ¨mes d\u2019entreprise hÃ©ritÃ©s, des formats comme SVG et RSS.',
            },
          ],
        },
        {
          heading: 'YAML - L\u2019option conviviale',
          blocks: [
            {
              type: 'p',
              html: 'YAML (YAML Ain\u2019t Markup Language) privilÃ©gie la lisibilitÃ© humaine. Il utilise l\u2019indentation au lieu de crochets ou de balises, ce qui en fait le plus lisible des trois. Il prend Ã©galement en charge les commentaires, ce que JSON ne fait pas.',
            },
            {
              type: 'p',
              html: '<strong>Points forts :</strong> TrÃ¨s lisible, prend en charge les commentaires, les ancres et les alias pour rÃ©utiliser des donnÃ©es, idÃ©al pour les fichiers de configuration.',
            },
            {
              type: 'p',
              html: '<strong>Points faibles :</strong> Sensible Ã  l\u2019indentation (peut causer des bugs subtils), moins universel que JSON, plus lent Ã  analyser, spÃ©cification complexe.',
            },
            {
              type: 'p',
              html: '<strong>IdÃ©al pour :</strong> Les fichiers de configuration (Docker Compose, Kubernetes, pipelines CI/CD), les donnÃ©es que les humains doivent modifier frÃ©quemment.',
            },
          ],
        },
        {
          heading: 'Conversion entre les formats',
          blocks: [
            {
              type: 'p',
              html: 'Les outils modernes de gestion de donnÃ©es prennent en charge les trois formats. Convertir du JSON en YAML rend les fichiers de configuration plus lisibles. Convertir du XML en JSON rend l\u2019intÃ©gration d\u2019API plus fluide. Convertir du YAML en JSON le rend analysable dans des environnements sans analyseur YAML. Le <a href="/">Data Converter</a> gÃ¨re toutes ces conversions - JSON, XML, YAML, CSV et Excel - dans une seule interface.',
            },
          ],
        },
        {
          heading: 'Lequel choisir ?',
          blocks: [
            {
              type: 'p',
              html: 'Si vous crÃ©ez un nouveau projet : utilisez JSON pour les API et l\u2019Ã©change de donnÃ©es, YAML pour les fichiers de configuration, et XML uniquement si vous avez besoin des fonctionnalitÃ©s avancÃ©es (espaces de noms, schÃ©mas, XSLT) ou si vous travaillez dans un Ã©cosystÃ¨me hÃ©ritÃ©. Aucun de ces formats ne va disparaÃ®tre - ils coexistent pour de bonnes raisons.',
            },
          ],
        },
      ],
    },
    'data-cleaning-tips': {
      meta: {
        title: '5 conseils de nettoyage de donnÃ©es avant de convertir des feuilles de calcul',
        description:
          'Des donnÃ©es propres se convertissent mieux. Cinq conseils concrets pour prÃ©parer vos feuilles de calcul avant de les convertir en JSON, CSV ou d\u2019autres formats.',
        keywords: 'conseils de nettoyage de donnÃ©es, nettoyage de feuilles de calcul, prÃ©paration des donnÃ©es, convertir des feuilles de calcul',
      },
      h1: '5 conseils de nettoyage de donnÃ©es avant de convertir des feuilles de calcul',
      breadcrumbs: [
        { name: 'Accueil', url: '/' },
        { name: 'Blog', url: '/blog' },
        { name: 'Conseils de nettoyage de donnÃ©es', url: '/blog/data-cleaning-tips' },
      ],
      dateISO: '2026-03-10',
      dateDisplay: '10 mars 2026',
      byline: 'par Naim Biswas',
      heroImg: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=400&fit=crop',
      heroAlt: 'Carnet et stylo sur un bureau',
      intro:
        'Convertir une feuille de calcul dÃ©sordonnÃ©e en <a href="/csv-to-json-converter">JSON ou CSV</a> ne fait que dÃ©placer le dÃ©sordre vers un nouveau format. Quelques minutes de nettoyage avant la conversion font gagner des heures de dÃ©bogage en aval. Voici cinq conseils pour prÃ©parer vos donnÃ©es Ã  la conversion.',
      sections: [
        {
          heading: '1. Normalisez vos en-tÃªtes',
          blocks: [
            {
              type: 'p',
              html: 'Les en-tÃªtes de colonnes deviennent des clÃ©s JSON ou des noms de colonnes CSV. Des en-tÃªtes incohÃ©rents produisent une sortie incohÃ©rente. Utilisez des noms courts et descriptifs, sans espaces, caractÃ¨res spÃ©ciaux ni sauts de ligne. Restez en minuscules avec des tirets bas ou en camelCase - <code>first_name</code> ou <code>firstName</code>, mais choisissez une convention et appliquez-la partout. Ã‰vitez les noms de colonnes en double, qui cassent entiÃ¨rement la sortie JSON.',
            },
          ],
        },
        {
          heading: '2. VÃ©rifiez des types de donnÃ©es cohÃ©rents',
          blocks: [
            {
              type: 'p',
              html: 'Une colonne nommÃ©e &ldquo;age&rdquo; doit contenir des nombres dans chaque ligne. Si certaines cellules contiennent du texte comme &ldquo;N/A&rdquo; ou &ldquo;unknown,&rdquo; le convertisseur peut traiter toute la colonne comme des chaÃ®nes. Normalisez les valeurs manquantes en cellules vides plutÃ´t qu\u2019en textes de substitution. Pour les colonnes de dates, utilisez un format unique partout - l\u2019ISO 8601 (<code>2026-03-10</code>) est le choix le plus sÃ»r car il se trie correctement et est sans ambiguÃ¯tÃ©.',
            },
          ],
        },
        {
          heading: '3. Supprimez les cellules fusionnÃ©es',
          blocks: [
            {
              type: 'p',
              html: 'Les cellules fusionnÃ©es sont courantes dans les feuilles de calcul lisibles par l\u2019humain mais causent des problÃ¨mes lors de la conversion. Une cellule fusionnÃ©e n\u2019a de valeur que dans la cellule en haut Ã  gauche ; les autres apparaissent vides. Dissociez toutes les cellules avant de convertir, puis remplissez la valeur vers le bas ou de cÃ´tÃ© si nÃ©cessaire. La plupart des convertisseurs gÃ¨rent cela automatiquement aujourd\u2019hui, mais il est prÃ©fÃ©rable d\u2019avoir des donnÃ©es sources propres.',
            },
          ],
        },
        {
          heading: '4. Ã‰liminez les espaces superflus',
          blocks: [
            {
              type: 'p',
              html: 'Les espaces en dÃ©but ou en fin de cellule sont invisibles dans Excel mais deviennent des problÃ¨mes visibles dans les donnÃ©es converties. Une valeur comme <code>"Alice "</code> (avec un espace final) produira une chaÃ®ne JSON diffÃ©rente de <code>"Alice"</code>. Utilisez la fonction TRIM d\u2019Excel ou une recherche-remplacement rapide pour supprimer les espaces superflus de toutes les cellules avant la conversion.',
            },
          ],
        },
        {
          heading: '5. GÃ©rez les lignes et colonnes vides',
          blocks: [
            {
              type: 'p',
              html: 'Les feuilles de calcul contiennent souvent des centaines de lignes vides en bas ou des colonnes vides utilisÃ©es comme sÃ©parateurs. Celles-ci deviennent des valeurs null en JSON ou des champs vides en CSV, alourdissant la sortie. Supprimez les lignes ou colonnes qui ne contiennent pas de donnÃ©es avant de convertir. Un moyen rapide de vÃ©rifier : sÃ©lectionnez toutes les cellules, appuyez sur Ctrl+Shift+End et vÃ©rifiez que la plage utilisÃ©e correspond Ã  vos donnÃ©es rÃ©elles.',
            },
          ],
        },
        {
          heading: 'Le retour sur investissement',
          blocks: [
            {
              type: 'p',
              html: 'Ces cinq Ã©tapes prennent dix minutes mais produisent une sortie nettement plus propre. Des donnÃ©es sources propres signifient une intÃ©gration plus rapide, moins de bugs et moins de post-traitement manuel. Faites du nettoyage des donnÃ©es une partie de votre flux de conversion - votre futur vous remerciera.',
            },
          ],
        },
      ],
    },
    'why-json-is-popular': {
      meta: {
        title: 'Pourquoi JSON est devenu le format de donnÃ©es universel des API web',
        description:
          'Un regard sur les dÃ©cisions de conception et les facteurs d\u2019Ã©cosystÃ¨me qui ont fait de JSON le format de donnÃ©es par dÃ©faut des API web modernes.',
        keywords: 'popularitÃ© de json, pourquoi json, json api web, histoire json vs xml',
      },
      h1: 'Pourquoi JSON est devenu le format de donnÃ©es universel des API web',
      breadcrumbs: [
        { name: 'Accueil', url: '/' },
        { name: 'Blog', url: '/blog' },
        { name: 'Pourquoi JSON est devenu universel', url: '/blog/why-json-is-popular' },
      ],
      dateISO: '2026-03-05',
      dateDisplay: '5 mars 2026',
      byline: 'par Naim Biswas',
      heroImg: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=400&fit=crop',
      heroAlt: 'Baie de serveurs avec cÃ¢bles rÃ©seau',
      intro:
        'Au dÃ©but des annÃ©es 2000, XML Ã©tait le roi incontestÃ© de l\u2019Ã©change de donnÃ©es web. Les API SOAP, les flux RSS et les fichiers de configuration utilisaient tous XML. Aujourd\u2019hui, JSON domine. Comment un format initialement prÃ©sentÃ© comme &ldquo;un sous-ensemble inoffensif de JavaScript&rdquo; est-il devenu le langage universel des API web ?',
      sections: [
        {
          heading: 'Il vient de JavaScript',
          blocks: [
            {
              type: 'p',
              html: 'JSON a Ã©tÃ© spÃ©cifiÃ© pour la premiÃ¨re fois par Douglas Crockford au dÃ©but des annÃ©es 2000 comme un format de donnÃ©es lÃ©ger dÃ©rivÃ© de la syntaxe des littÃ©raux d\u2019objets JavaScript. Comme il Ã©tait dÃ©jÃ  du JavaScript valide, toute application web pouvait analyser JSON avec <code>eval()</code> ou la mÃ©thode intÃ©grÃ©e <code>JSON.parse()</code> (ajoutÃ©e dans ES5). Aucune bibliothÃ¨que d\u2019analyseur nÃ©cessaire - le navigateur le comprenait dÃ©jÃ .',
            },
            {
              type: 'p',
              html: 'C\u2019Ã©tait un avantage Ã©norme sur XML, qui exigeait des analyseurs DOM ou SAX complexes. Pour les dÃ©veloppeurs frontend consommant des rÃ©ponses d\u2019API, JSON Ã©tait immÃ©diatement utilisable d\u2019une maniÃ¨re que XML n\u2019a jamais Ã©tÃ©.',
            },
          ],
        },
        {
          heading: 'Des charges utiles plus petites',
          blocks: [
            {
              type: 'p',
              html: 'JSON est nettement plus compact que XML. Un document XML nÃ©cessite des balises d\u2019ouverture et de fermeture pour chaque champ (<code>&lt;name&gt;Alice&lt;/name&gt;</code>), tandis que JSON utilise une syntaxe clÃ©-valeur lÃ©gÃ¨re (<code>"name": "Alice"</code>). Pour les grands ensembles de donnÃ©es, cette diffÃ©rence se traduit par des charges utiles 30 Ã  50 % plus petites - un gros avantage sur les rÃ©seaux mobiles et les connexions lentes.',
            },
          ],
        },
        {
          heading: 'SystÃ¨me de types natif',
          blocks: [
            {
              type: 'p',
              html: 'JSON dispose d\u2019un systÃ¨me de types simple mais expressif : chaÃ®nes, nombres, boolÃ©ens, null, tableaux et objets. XML, en revanche, traite tout comme du texte. Un nombre en XML n\u2019est que du texte qui contient des chiffres - l\u2019application doit l\u2019analyser. JSON gÃ¨re les types nativement, ce qui rÃ©duit le code passe-partout et Ã©limine toute une classe de bugs.',
            },
          ],
        },
        {
          heading: 'La rÃ©volution REST',
          blocks: [
            {
              type: 'p',
              html: 'La transition des API SOAP (basÃ©es sur XML) vers REST (indÃ©pendant du format) a coÃ¯ncidÃ© avec l\u2019essor de JSON. REST mettait l\u2019accent sur la simplicitÃ©, l\u2019absence d\u2019Ã©tat et une conception orientÃ©e ressources. JSON correspondait parfaitement Ã  la philosophie de REST - lÃ©ger, facile Ã  manipuler et lisible par l\u2019humain. Des frameworks comme Ruby on Rails, Express.js et Django ont tous adoptÃ© JSON comme format de sortie par dÃ©faut, cimentant sa domination.',
            },
          ],
        },
        {
          heading: 'L\u2019Ã©lan de l\u2019Ã©cosystÃ¨me',
          blocks: [
            {
              type: 'p',
              html: 'Une fois que JSON est devenu le format par dÃ©faut des API web, l\u2019Ã©cosystÃ¨me a boule de neige. JSON Schema a Ã©mergÃ© pour la validation. Les JSON Web Tokens (JWT) sont devenus la norme pour l\u2019authentification. MongoDB a choisi BSON (binary JSON) comme format de document. Des outils comme jq ont rendu la manipulation de JSON facile en ligne de commande. Chaque langage a obtenu une prise en charge de premier ordre de JSON dans sa bibliothÃ¨que standard.',
            },
          ],
        },
        {
          heading: 'OÃ¹ JSON Ã©choue',
          blocks: [
            {
              type: 'p',
              html: 'JSON n\u2019est pas parfait. Il ne prend pas en charge les commentaires, ce qui le rend moins idÃ©al pour les fichiers de configuration (YAML est meilleur dans ce domaine). Il n\u2019a pas de validation de schÃ©ma intÃ©grÃ©e (bien que JSON Schema comble cette lacune). Et un JSON profondÃ©ment imbriquÃ© peut Ãªtre difficile Ã  lire. Mais pour son cas d\u2019utilisation principal - l\u2019Ã©change de donnÃ©es entre services web - JSON reste le bon outil pour la tÃ¢che.',
            },
          ],
        },
        {
          heading: 'Le verdict',
          blocks: [
            {
              type: 'p',
              html: 'JSON a gagnÃ© parce qu\u2019il Ã©tait simple, rapide et dÃ©jÃ  prÃ©sent dans le navigateur. Aucun comitÃ© ne l\u2019a conÃ§u pour Ãªtre universel - il a gagnÃ© ce statut par son utilitÃ© pratique. Vingt ans plus tard, il est difficile d\u2019imaginer le web sans lui. Si vous travaillez avec des donnÃ©es JSON, essayez notre <a href="/json-to-csv-converter">convertisseur JSON vers CSV</a> ou notre <a href="/json-to-excel-converter">convertisseur JSON vers Excel</a>.',
            },
          ],
        },
      ],
    },
    'excel-formulas-to-csv': {
      meta: {
        title: 'GÃ©rer les formules Excel lors de la conversion en CSV',
        description:
          'Qu\u2019arrive-t-il aux formules Excel, Ã  la mise en forme conditionnelle et aux macros lorsque vous convertissez en CSV brut ? Tout ce que vous devez savoir.',
        keywords: 'formules excel vers csv, convertir formules excel, xlsx vers csv formules, Ã©valuation de formules',
      },
      h1: 'GÃ©rer les formules Excel lors de la conversion en CSV',
      breadcrumbs: [
        { name: 'Accueil', url: '/' },
        { name: 'Blog', url: '/blog' },
        { name: 'Formules Excel vers CSV', url: '/blog/excel-formulas-to-csv' },
      ],
      dateISO: '2026-03-02',
      dateDisplay: '2 mars 2026',
      byline: 'par Naim Biswas',
      heroImg: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=400&fit=crop',
      heroAlt: 'Espace de travail moderne avec ordinateur portable',
      intro:
        'Les fichiers Excel sont vivants - les cellules contiennent des formules qui rÃ©fÃ©rencent d\u2019autres cellules, effectuent des calculs et se mettent Ã  jour dynamiquement. Les fichiers CSV sont statiques - ils ne stockent que des valeurs, pas de logique. Convertir Excel en CSV signifie dÃ©cider quoi faire de ces formules. Voici ce qui se passe et Ã  quoi faire attention.',
      sections: [
        {
          heading: 'Les formules deviennent des valeurs',
          blocks: [
            {
              type: 'p',
              html: 'Lorsque vous <a href="/excel-to-csv-converter">convertissez une feuille Excel en CSV</a>, chaque formule est Ã©valuÃ©e Ã  sa valeur actuelle avant l\u2019export. Une cellule contenant <code>=SUM(A1:A10)</code> devient la somme rÃ©elle, comme <code>45000</code>. C\u2019est presque toujours ce que vous voulez - le CSV ne peut pas reprÃ©senter les formules, donc la meilleure alternative est le rÃ©sultat calculÃ©.',
            },
            {
              type: 'p',
              html: 'Cependant, cela signifie que la sortie est un instantanÃ©. Si les donnÃ©es sources changent plus tard, le CSV ne se mettra pas Ã  jour. La logique de la formule est perdue. Si vous devez prÃ©server la logique de calcul, conservez le fichier .xlsx d\u2019origine comme source de vÃ©ritÃ© et rÃ©gÃ©nÃ©rez le CSV si nÃ©cessaire.',
            },
          ],
        },
        {
          heading: 'Les fonctions volatiles',
          blocks: [
            {
              type: 'p',
              html: 'Certaines fonctions Excel sont volatiles - elles se recalculent Ã  chaque ouverture de la feuille. <code>=NOW()</code>, <code>=TODAY()</code>, <code>=RAND()</code> et <code>=RANDBETWEEN()</code> produisent des valeurs diffÃ©rentes Ã  chaque recalcul. Lorsque vous convertissez en CSV, la valeur au moment de la conversion est capturÃ©e. Une cellule avec <code>=TODAY()</code> devient <code>2026-03-02</code> - une date statique qui ne changera jamais.',
            },
          ],
        },
        {
          heading: 'Les rÃ©fÃ©rences circulaires et les erreurs',
          blocks: [
            {
              type: 'p',
              html: 'Les formules qui produisent des erreurs (<code>#DIV/0!</code>, <code>#VALUE!</code>, <code>#REF!</code>) seront exportÃ©es comme valeurs d\u2019erreur dans la plupart des convertisseurs. Nettoyez les erreurs de formules avant la conversion, sinon le CSV rÃ©sultant contiendra un texte d\u2019erreur que les systÃ¨mes en aval risquent de ne pas gÃ©rer avec Ã©lÃ©gance.',
            },
            {
              type: 'p',
              html: 'Les rÃ©fÃ©rences circulaires (oÃ¹ une formule se rÃ©fÃ¨re Ã  sa propre cellule) peuvent ne pas s\u2019Ã©valuer du tout, produisant un zÃ©ro ou une erreur selon la configuration d\u2019Excel. RÃ©solvez-les avant de convertir.',
            },
          ],
        },
        {
          heading: 'La mise en forme conditionnelle',
          blocks: [
            {
              type: 'p',
              html: 'La mise en forme conditionnelle - des cellules qui changent de couleur selon leurs valeurs - est entiÃ¨rement perdue lors de la conversion en CSV. Le CSV n\u2019a aucun concept de style de cellule. Si le code couleur vÃ©hicule des informations importantes (par exemple, le rouge pour les comptes en retard), ajoutez une colonne d\u2019Ã©tat distincte qui Ã©tiquette explicitement la condition. Par exemple, ajoutez une colonne nommÃ©e <code>status</code> avec des valeurs <code>overdue</code> ou <code>current</code> basÃ©es sur la mÃªme logique.',
            },
          ],
        },
        {
          heading: 'Les macros et VBA',
          blocks: [
            {
              type: 'p',
              html: 'Les macros Excel (code VBA) sont supprimÃ©es lors de la conversion en CSV. Les macros opÃ¨rent sur le classeur lui-mÃªme - automatisant des tÃ¢ches, transformant des donnÃ©es, interagissant avec des systÃ¨mes externes. Aucune de cette logique ne passe au CSV. Si votre flux de travail dÃ©pend de macros, exÃ©cutez-les avant de convertir, afin que les donnÃ©es rÃ©sultantes reflÃ¨tent l\u2019Ã©tat post-macro.',
            },
          ],
        },
        {
          heading: 'La validation des donnÃ©es',
          blocks: [
            {
              type: 'p',
              html: 'Les rÃ¨gles de validation de donnÃ©es d\u2019Excel (listes dÃ©roulantes, plages de nombres, contraintes de dates) sont Ã©galement perdues. Une cellule qui n\u2019autorisait que des valeurs entre 1 et 100 peut dÃ©sormais contenir n\u2019importe quoi dans le CSV. La validation Ã©tait une contrainte d\u2019interface dans Excel - elle n\u2019a jamais fait partie des donnÃ©es elles-mÃªmes.',
            },
          ],
        },
        {
          heading: 'Bonnes pratiques',
          blocks: [
            {
              type: 'p',
              html: 'Examinez toujours votre classeur Excel avant la conversion. Identifiez les cellules qui dÃ©pendent de formules et vÃ©rifiez que les valeurs calculÃ©es sont correctes. Ajoutez des colonnes explicites pour toute logique qui serait autrement invisible. Traitez la conversion comme un instantanÃ© - le CSV est un enregistrement fidÃ¨le des donnÃ©es Ã  un moment donnÃ©, pas un document vivant.',
            },
          ],
        },
      ],
    },
    'data-migration-strategies': {
      meta: {
        title: 'StratÃ©gies de migration de donnÃ©es : des feuilles de calcul aux bases de donnÃ©es',
        description:
          'Un guide pour migrer des donnÃ©es de fichiers Excel et CSV vers des bases de donnÃ©es relationnelles, des magasins NoSQL et des entrepÃ´ts de donnÃ©es cloud.',
        keywords: 'migration de donnÃ©es, feuille de calcul vers base de donnÃ©es, excel vers base de donnÃ©es, import csv base de donnÃ©es',
      },
      h1: 'StratÃ©gies de migration de donnÃ©es : des feuilles de calcul aux bases de donnÃ©es',
      breadcrumbs: [
        { name: 'Accueil', url: '/' },
        { name: 'Blog', url: '/blog' },
        { name: 'StratÃ©gies de migration de donnÃ©es', url: '/blog/data-migration-strategies' },
      ],
      dateISO: '2026-02-28',
      dateDisplay: '28 fÃ©vrier 2026',
      byline: 'par Naim Biswas',
      heroImg: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&h=400&fit=crop',
      heroAlt: 'Serveur de donnÃ©es avec des voyants clignotants',
      intro:
        'Chaque entreprise en croissance atteint un point oÃ¹ les feuilles de calcul ne suffisent plus. Les listes de clients, les registres d\u2019inventaire et les donnÃ©es financiÃ¨res dÃ©passent les limites d\u2019Excel. DÃ©placer ces donnÃ©es vers une vÃ©ritable base de donnÃ©es est une Ã©tape critique - mais la migration est semÃ©e d\u2019embÃ»ches. Voici une approche structurÃ©e.',
      sections: [
        {
          heading: 'Ã‰tape 1 : Auditez les donnÃ©es sources',
          blocks: [
            {
              type: 'p',
              html: 'Avant d\u2019Ã©crire un script d\u2019import, comprenez avec quoi vous travaillez. Ouvrez la feuille de calcul et vÃ©rifiez les cellules fusionnÃ©es, les types de colonnes incohÃ©rents, les lignes vides et les formats de date non standard. Documentez chaque colonne : son nom, son type de donnÃ©es, les valeurs autorisÃ©es et si elle peut Ãªtre null. Cette analyse devient votre schÃ©ma de rÃ©fÃ©rence.',
            },
          ],
        },
        {
          heading: 'Ã‰tape 2 : Concevez le schÃ©ma cible',
          blocks: [
            {
              type: 'p',
              html: 'Les feuilles de calcul sont plates ; les bases de donnÃ©es sont normalisÃ©es. Une seule feuille de calcul avec des colonnes pour le nom du client, la date de commande et le nom du produit peut devoir devenir trois tables : <code>customers</code>, <code>products</code> et <code>orders</code>. Identifiez les clÃ©s primaires, les relations de clÃ©s Ã©trangÃ¨res et les contraintes avant l\u2019import. RÃ©sistez Ã  la tentation d\u2019importer la feuille de calcul comme une table unique - cela irait Ã  l\u2019encontre de l\u2019intÃ©rÃªt d\u2019utiliser une base de donnÃ©es.',
            },
          ],
        },
        {
          heading: 'Ã‰tape 3 : Convertissez en CSV',
          blocks: [
            {
              type: 'p',
              html: 'Le CSV est le format d\u2019import universel pour les bases de donnÃ©es. La plupart des systÃ¨mes de bases de donnÃ©es (PostgreSQL, MySQL, SQLite, SQL Server) ont des commandes intÃ©grÃ©es pour l\u2019import en masse de CSV : <code>COPY</code>, <code>LOAD DATA INFILE</code> ou <code>BULK INSERT</code>. Convertissez chaque feuille en CSV avec <a href="/excel-to-csv-converter">un outil comme celui-ci</a>. Assurez-vous que la sortie CSV utilise l\u2019encodage UTF-8 et des guillemets cohÃ©rents.',
            },
          ],
        },
        {
          heading: 'Ã‰tape 4 : Importez et validez',
          blocks: [
            {
              type: 'p',
              html: 'Importez le CSV dans une table de staging (une copie temporaire de la structure de la table cible). Cela vous permet d\u2019exÃ©cuter des requÃªtes de validation avant de dÃ©placer les donnÃ©es dans le schÃ©ma de production. VÃ©rifiez :',
            },
            {
              type: 'ul',
              items: [
                'Les lignes qui ont Ã©chouÃ© Ã  l\u2019import (incompatibilitÃ©s de types, violations de contraintes)',
                'Les enregistrements en double Ã  fusionner',
                'Les valeurs null dans des colonnes qui ne devraient pas Ãªtre null',
                'L\u2019intÃ©gritÃ© rÃ©fÃ©rentielle - les valeurs de clÃ©s Ã©trangÃ¨res qui n\u2019existent pas dans les tables parentes',
              ],
            },
          ],
        },
        {
          heading: 'Ã‰tape 5 : Transformez et chargez',
          blocks: [
            {
              type: 'p',
              html: 'Une fois que les donnÃ©es de staging passent la validation, exÃ©cutez vos requÃªtes de transformation : normalisez les colonnes plates en tables liÃ©es, convertissez les types, gÃ©nÃ©rez des clÃ©s de substitution et appliquez les rÃ¨gles mÃ©tier. InsÃ©rez ensuite les donnÃ©es propres dans les tables de production. Il est prÃ©fÃ©rable de le faire dans une transaction - si quelque chose Ã©choue, annulez toute l\u2019opÃ©ration.',
            },
          ],
        },
        {
          heading: 'Ã‰tape 6 : VÃ©rifiez et dÃ©commissionnez',
          blocks: [
            {
              type: 'p',
              html: 'AprÃ¨s la migration, exÃ©cutez des requÃªtes de rapprochement. Comparez les comptages d\u2019enregistrements, additionnez les colonnes numÃ©riques et vÃ©rifiez ponctuellement des enregistrements individuels entre la feuille de calcul source et la base de donnÃ©es. Une fois que vous Ãªtes sÃ»r que les donnÃ©es correspondent, archivez la feuille de calcul et mettez Ã  jour vos sources de donnÃ©es pour pointer vers la base de donnÃ©es.',
            },
          ],
        },
        {
          heading: 'PiÃ¨ges courants',
          blocks: [
            {
              type: 'ul',
              items: [
                '<strong>ProblÃ¨mes d\u2019encodage :</strong> Les fichiers Excel peuvent utiliser l\u2019encodage Windows-1252. Convertissez en UTF-8 avant l\u2019import.',
                '<strong>Gros fichiers :</strong> Les feuilles de calcul de plus de 100 Mo peuvent nÃ©cessiter un import par blocs. Divisez le CSV en lots de 10 000 lignes.',
                '<strong>Formats de dates :</strong> Les dates sÃ©rielles Excel (comme 45000) nÃ©cessitent une conversion vers l\u2019ISO 8601. GÃ©rez cela Ã  l\u2019Ã©tape de transformation.',
              ],
            },
          ],
        },
        {
          heading: 'RÃ©sumÃ©',
          blocks: [
            {
              type: 'p',
              html: 'La migration de feuilles de calcul vers une base de donnÃ©es est un processus en plusieurs Ã©tapes qui rÃ©compense une planification minutieuse. Auditez d\u2019abord, concevez le schÃ©ma, convertissez en CSV, validez dans staging, puis chargez. Sautez une Ã©tape et vous passerez des semaines Ã  dÃ©boguer des problÃ¨mes de donnÃ©es.',
            },
          ],
        },
      ],
    },
    'large-file-conversion': {
      meta: {
        title: 'Comment gÃ©rer les conversions de gros fichiers sans perdre de donnÃ©es',
        description:
          'Des conseils pour convertir de grands ensembles de donnÃ©es - gestion de la mÃ©moire, stratÃ©gies de traitement par blocs et Ã  quoi faire attention avec les fichiers de plus de 10 Mo.',
        keywords: 'conversion de gros fichiers, convertir grosses donnÃ©es, gros csv json, conversion efficace en mÃ©moire',
      },
      h1: 'Comment gÃ©rer les conversions de gros fichiers sans perdre de donnÃ©es',
      breadcrumbs: [
        { name: 'Accueil', url: '/' },
        { name: 'Blog', url: '/blog' },
        { name: 'Conversion de gros fichiers', url: '/blog/large-file-conversion' },
      ],
      dateISO: '2026-02-25',
      dateDisplay: '25 fÃ©vrier 2026',
      byline: 'par Naim Biswas',
      heroImg: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=400&fit=crop',
      heroAlt: 'Ã‰diteur de code sur un Ã©cran d\u2019ordinateur',
      intro:
        'Convertir un fichier JSON de 1 Ko en CSV est trivial. Convertir un export de base de donnÃ©es de 200 Mo avec un million de lignes est un problÃ¨me entiÃ¨rement diffÃ©rent. Les conversions de gros fichiers mettent Ã  l\u2019Ã©preuve les limites de mÃ©moire, les performances du navigateur et l\u2019intÃ©gritÃ© des donnÃ©es. Voici comment les gÃ©rer en toute sÃ©curitÃ©.',
      sections: [
        {
          heading: 'Comprenez vos contraintes',
          blocks: [
            {
              type: 'p',
              html: 'Les outils basÃ©s sur le navigateur comme <a href="/">Data Converter</a> s\u2019exÃ©cutent dans un bac Ã  sable avec une mÃ©moire limitÃ©e. Un onglet de navigateur typique dispose de 500 Mo Ã  2 Go de mÃ©moire disponible selon l\u2019appareil et le navigateur. Si votre fichier fait 100 Mo, le charger entiÃ¨rement en mÃ©moire laisse moins de place pour la sortie traitÃ©e et les structures de donnÃ©es internes du convertisseur. Connaissez vos limites avant de commencer.',
            },
            {
              type: 'p',
              html: 'Les outils cÃ´tÃ© serveur ont leurs propres contraintes - limites de mÃ©moire sur l\u2019hÃ©bergement partagÃ©, dÃ©lais d\u2019attente des requÃªtes et restrictions de taille de tÃ©lÃ©versement. Cet outil traite tout dans votre navigateur, ce qui signifie pas de dÃ©lais serveur mais aussi pas de mÃ©moire de niveau serveur.',
            },
          ],
        },
        {
          heading: 'Diffusion en continu ou chargement complet',
          blocks: [
            {
              type: 'p',
              html: 'La meilleure stratÃ©gie pour les gros fichiers est la diffusion en continu - traiter les donnÃ©es par blocs pendant leur chargement, plutÃ´t que de lire tout le fichier en mÃ©moire d\u2019un coup. Pour les tableaux CSV et JSON, le convertisseur peut traiter ligne par ligne ou bloc par bloc, Ã©crivant chaque ligne transformÃ©e dans la sortie avant de lire la suivante. Cela maintient l\u2019utilisation de la mÃ©moire proportionnelle Ã  la taille du bloc, pas Ã  celle du fichier.',
            },
            {
              type: 'p',
              html: 'Recherchez des convertisseurs qui prennent en charge la diffusion en continu pour les gros fichiers. Si l\u2019outil affiche une barre de progression, il traite probablement de maniÃ¨re incrÃ©mentale - c\u2019est un bon signe.',
            },
          ],
        },
        {
          heading: 'Diviser pour rÃ©gner',
          blocks: [
            {
              type: 'p',
              html: 'Si un fichier est trop gros pour votre convertisseur, divisez-le en morceaux plus petits. Pour les fichiers CSV, la plupart des Ã©diteurs de texte ou des outils en ligne de commande peuvent diviser par nombre de lignes (par exemple, 50 000 lignes par fichier). Convertissez chaque morceau sÃ©parÃ©ment, puis concatÃ©nez les sorties. Pour les tableaux JSON, divisez le tableau en plusieurs fichiers aux frontiÃ¨res naturelles.',
            },
            {
              type: 'p',
              html: 'Cette approche est manuelle mais fiable - aucune conversion ne dÃ©passe les limites de mÃ©moire, et si un morceau Ã©choue, seul ce morceau doit Ãªtre rÃ©essayÃ©.',
            },
          ],
        },
        {
          heading: 'Surveillez ces problÃ¨mes',
          blocks: [
            {
              type: 'ul',
              items: [
                '<strong>DÃ©tection d\u2019encodage :</strong> Les gros fichiers peuvent mÃ©langer les encodages. Assurez-vous que le convertisseur dÃ©tecte correctement l\u2019encodage dÃ¨s le dÃ©part - un fichier de 100 Mo mal dÃ©tectÃ© produit une sortie entiÃ¨rement dÃ©formÃ©e.',
                '<strong>Sauts de ligne dans les champs :</strong> Les champs CSV peuvent contenir des sauts de ligne s\u2019ils sont entre guillemets. Un sÃ©parateur ligne par ligne naÃ¯f peut casser un champ entre guillemets Ã  travers les blocs. Utilisez un analyseur qui comprend les guillemets CSV.',
                '<strong>Retour visuel de la progression :</strong> Sans retour visuel, un navigateur bloquÃ© semble plantÃ©. Les bons convertisseurs affichent la progression pour les opÃ©rations lourdes.',
                '<strong>Fuites de mÃ©moire :</strong> Des conversions rÃ©pÃ©tÃ©es dans la mÃªme session peuvent accumuler de la mÃ©moire. Rechargez la page entre les grosses conversions pour repartir de zÃ©ro.',
              ],
            },
          ],
        },
        {
          heading: 'Conseils spÃ©cifiques au navigateur',
          blocks: [
            {
              type: 'p',
              html: 'Chrome et Edge (tous deux basÃ©s sur Chromium) gÃ¨rent les gros fichiers mieux que Safari ou Firefox grÃ¢ce Ã  une gestion de la mÃ©moire plus agressive. Si vous atteignez rÃ©guliÃ¨rement les limites, essayez un navigateur Chromium. Fermez Ã©galement les autres onglets avant de commencer une grosse conversion - chaque onglet ouvert consomme de la mÃ©moire que le convertisseur pourrait utiliser.',
            },
          ],
        },
        {
          heading: 'Quand utiliser un outil de bureau',
          blocks: [
            {
              type: 'p',
              html: 'Pour les fichiers de plus de 500 Mo ou les ensembles de donnÃ©es de plus de 5 millions de lignes, envisagez un outil de bureau ou un utilitaire en ligne de commande. La bibliothÃ¨que pandas de Python, des outils en ligne de commande comme <code>jq</code> (pour JSON) et <code>csvkit</code> (pour CSV), ou des outils d\u2019export natifs des bases de donnÃ©es gÃ¨rent des fichiers de n\u2019importe quelle taille sans les limites de mÃ©moire du navigateur. Utilisez les convertisseurs basÃ©s sur le navigateur pour les tÃ¢ches quotidiennes et les outils de bureau pour les tÃ¢ches vraiment lourdes.',
            },
          ],
        },
        {
          heading: 'RÃ©sumÃ©',
          blocks: [
            {
              type: 'p',
              html: 'La conversion de gros fichiers est un problÃ¨me de gestion de la mÃ©moire. Diffusez en continu quand c\u2019est possible, divisez quand c\u2019est nÃ©cessaire et vÃ©rifiez toujours que la sortie correspond Ã  l\u2019entrÃ©e en nombre d\u2019enregistrements. Quelques prÃ©cautions Ã©vitent la perte de donnÃ©es et le gaspillage de temps.',
            },
          ],
        },
      ],
    },
  },
};
