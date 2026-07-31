import type { StaticContent } from '../types';

export const staticContent: StaticContent = {
  about: {
    meta: {
      title: 'À propos',
      description:
        'Découvrez Data Converter — un outil gratuit, privé et basé sur le navigateur pour convertir entre JSON, CSV, Excel, XML, YAML, et plus encore.',
      keywords: 'à propos, data converter, convertisseur en ligne, basé sur le navigateur',
    },
    h1: 'À propos',
    breadcrumbs: [
      { name: 'Accueil', url: '/' },
      { name: 'À propos', url: '/about' },
    ],
    paragraphs: [
      'Data Converter a commencé comme un projet personnel pour résoudre un problème simple : chaque fois que je devais convertir un CSV en JSON ou un fichier Excel en XML, je devais chercher un outil en ligne au hasard qui exigeait souvent l\u2019envoi de fichiers sur un serveur. La plupart de ces outils gardaient aussi mes données, ce qui me semblait anormal.',
      'Alors je l\u2019ai créé. Pas de serveurs, pas d\u2019envoi de fichiers, pas de comptes. Tout s\u2019exécute directement dans votre navigateur. Vos données restent sur votre machine — point final.',
      'L\u2019outil prend en charge JSON, CSV, Excel (.xlsx), XML, YAML, les tableaux HTML, Markdown et PDF. Vous pouvez coller des données, importer un fichier ou les récupérer depuis une URL. Il gère les structures imbriquées, les gros fichiers, et fournit un véritable éditeur de tableau avec recherche, tri, recherche-remplacement et édition en ligne.',
      'Je continue d\u2019ajouter des fonctionnalités en fonction des demandes des utilisateurs et de ce que je trouve utile moi-même. Si quelque chose manque ou est cassé, contactez-moi via la page de contact — je lis vraiment chaque message.',
      'Conçu et maintenu par <a href="https://github.com/NaimBiswas" target="_blank" rel="noopener">Naim Biswas</a>.',
    ],
  },
  contact: {
    meta: {
      title: 'Contactez-nous',
      description:
        'Contactez l\u2019équipe de Data Converter. Signalez des bugs, proposez des fonctionnalités ou posez des questions.',
      keywords: 'contact, support, signaler un bug, data converter',
    },
    h1: 'Contact',
    breadcrumbs: [
      { name: 'Accueil', url: '/' },
      { name: 'Contact', url: '/contact' },
    ],
    intro:
      'Vous avez une question, trouvé un bug ou souhaitez suggérer une fonctionnalité ? Le meilleur endroit est <strong>GitHub Issues</strong> — ainsi tout le monde peut voir la discussion et les solutions.',
    buttonLabel: 'Ouvrir un ticket GitHub →',
    buttonUrl: 'https://github.com/NaimBiswas/convert/issues/new',
    emailIntro:
      'Vous pouvez aussi m\u2019écrire directement à <a href="mailto:nayeembiswas2@gmail.com">nayeembiswas2@gmail.com</a>. J\u2019essaie de répondre sous un jour ou deux.',
    email: 'nayeembiswas2@gmail.com',
    bugHint:
      'Pour signaler un bug, veuillez indiquer votre format source, votre format cible et tous les messages d\u2019erreur que vous avez vus. Un échantillon des données (ou de l\u2019erreur) m\u2019aide à le résoudre beaucoup plus vite.',
  },
  faq: {
    meta: {
      title: 'Questions fréquentes',
      description:
        'Questions fréquentes sur l\u2019outil Data Converter — confidentialité, formats, limites et dépannage.',
      keywords: 'faq, aide du convertisseur de données, formats pris en charge, dépannage',
    },
    h1: 'Questions fréquentes',
    breadcrumbs: [
      { name: 'Accueil', url: '/' },
      { name: 'FAQ', url: '/faq' },
    ],
    faqs: [
      {
        q: 'Mes données sont-elles en sécurité ? Stockez-vous quoi que ce soit ?',
        a: 'Tout s\u2019exécute dans votre navigateur — rien n\u2019est envoyé à un serveur. Vos données ne quittent jamais votre appareil. Je ne stocke, n\u2019enregistre ni ne vois ce que vous convertissez. Votre préférence de thème (mode clair/sombre) est enregistrée localement afin d\u2019être conservée entre vos visites. Toutes les données de conversion sont effacées lorsque vous fermez l\u2019onglet.',
      },
      {
        q: 'Quels formats prenez-vous en charge ?',
        a: '<strong>Entrée :</strong> JSON, CSV, Excel (.xlsx), XML, YAML<br><strong>Sortie :</strong> JSON, CSV, Excel (.xlsx), XML, YAML, HTML Table, Markdown, PDF<br>Vous pouvez convertir de n\u2019importe quel format d\u2019entrée vers n\u2019importe quel format de sortie. Par exemple, collez du XML et téléchargez en CSV, ou importez un fichier Excel et exportez en JSON.',
      },
      {
        q: 'Y a-t-il une limite de taille de fichier ?',
        a: 'Comme tout s\u2019exécute dans votre navigateur, la limite dépend de la mémoire de votre appareil. La plupart des fichiers jusqu\u2019à 50-100 Mo fonctionnent bien sur un ordinateur portable standard. Les importations Excel sont plafonnées à 50 Mo dans l\u2019interface. En cas de problèmes de performance, essayez de diviser vos données en fichiers plus petits.',
      },
      {
        q: 'Ai-je besoin d\u2019un compte ?',
        a: 'Non. Pas de comptes, pas d\u2019inscriptions, pas de connexions. Ouvrez simplement le site et commencez à convertir.',
      },
      {
        q: 'Puis-je modifier mes données après la conversion ?',
        a: 'Oui. Après la conversion, vous disposez d\u2019un éditeur de tableau complet. Vous pouvez double-cliquer sur n\u2019importe quelle cellule pour la modifier, rechercher et filtrer les lignes, trier par colonnes, ajouter ou supprimer des lignes et des colonnes, transposer le tableau, faire une recherche-remplacement dans toutes les cellules, appliquer des transformations de casse (UPPER, lower, Capitalize) à une colonne, annuler et rétablir les modifications, et supprimer les lignes vides ou les doublons.',
      },
      {
        q: 'La conversion semble incorrecte — que faire ?',
        a: 'Tout d\u2019abord, assurez-vous que vos données d\u2019entrée sont bien formées. Le JSON nécessite des guillemets et des crochets corrects. Le CSV nécessite une ligne d\u2019en-tête. Pour le JSON ou XML imbriqué, l\u2019outil aplatit les clés avec <code>_</code> comme séparateur — cela fonctionne mieux avec les tableaux d\u2019objets. Si vous êtes toujours bloqué, <a href="/contact">contactez-moi</a> avec votre format source, votre format cible et un échantillon des données (ou le message d\u2019erreur), et j\u2019y jetterai un œil.',
      },
    ],
  },
  docs: {
    meta: {
      title: 'Documentation — Comment utiliser le convertisseur de données',
      description:
        'Apprenez à convertir entre JSON, CSV, Excel, XML, YAML, Markdown, HTML et PDF. Guide complet avec raccourcis, outils et informations sur la confidentialité.',
      keywords: 'documentation, comment convertir, conversion de formats, data converter',
    },
    h1: 'Comment utiliser le convertisseur de données',
    breadcrumbs: [
      { name: 'Accueil', url: '/' },
      { name: 'Documentation', url: '/docs' },
    ],
    blocks: [
      {
        type: 'cards',
        heading: 'Formats pris en charge',
        cards: [
          { h3: 'JSON', p: 'JavaScript Object Notation — objets imbriqués ou plats, tableaux d\u2019objets.' },
          { h3: 'CSV', p: 'Valeurs séparées par des virgules — une ligne d\u2019en-tête est requise.' },
          { h3: 'Excel (XLSX)', p: 'Classeurs Microsoft Excel avec prise en charge de plusieurs feuilles. Import uniquement.' },
          { h3: 'XML', p: 'Extensible Markup Language — aplatit les éléments imbriqués avec un séparateur <code>_</code>.' },
          { h3: 'YAML', p: 'YAML Ain\u2019t Markup Language — sérialisation de données lisible par l\u2019humain.' },
          { h3: 'HTML Table', p: 'Sortie uniquement — affiche les données sous forme de <code>&lt;table&gt;</code> HTML.' },
          { h3: 'Markdown', p: 'Sortie uniquement — affiche les données sous forme de tableau Markdown compatible GitHub.' },
          { h3: 'PDF', p: 'Sortie uniquement — exporte les données sous forme de document PDF.' },
        ],
      },
      {
        type: 'section',
        heading: 'Méthodes d\u2019entrée',
        blocks: [
          {
            type: 'ul',
            items: [
              '<strong>Coller</strong> — collez les données directement dans l\u2019éditeur.',
              '<strong>Importer</strong> — glisser-déposer ou parcourir pour choisir un fichier (.json, .csv, .xml, .yaml, .xlsx jusqu\u2019à 50 Mo).',
              '<strong>URL</strong> — récupérez les données depuis une URL distante. Activez le proxy CORS pour les API qui bloquent les requêtes directes.',
            ],
          },
        ],
      },
      {
        type: 'section',
        heading: 'Comment convertir',
        blocks: [
          {
            type: 'ol',
            items: [
              'Sélectionnez le format source (<strong>De</strong>) et le format cible (<strong>Vers</strong>) dans la barre de conversion.',
              'Collez, importez ou récupérez vos données.',
              'Cliquez sur <strong>Convertir</strong> ou appuyez sur <kbd>Ctrl+Enter</kbd>.',
              'Aperçu, recherche, tri et édition du tableau.',
              'Téléchargez le résultat dans n\u2019importe quel format pris en charge, ou copiez-le dans le presse-papiers.',
            ],
          },
        ],
      },
      {
        type: 'section',
        heading: 'Outils du tableau',
        blocks: [
          {
            type: 'ul',
            items: [
              '<strong>Recherche</strong> — filtrez les lignes par la valeur de n\u2019importe quelle colonne.',
              '<strong>Tri</strong> — cliquez sur l\u2019en-tête d\u2019une colonne pour trier en ordre croissant/décroissant.',
              '<strong>Édition en ligne</strong> — double-cliquez sur n\u2019importe quelle cellule pour modifier sa valeur.',
              '<strong>Rechercher &amp; remplacer</strong> — recherchez et remplacez du texte dans toutes les cellules.',
              '<strong>Transposer</strong> — permutez les lignes et les colonnes.',
              '<strong>Transformations de casse</strong> — UPPER, lower ou Capitalize une colonne entière.',
              '<strong>Ajouter / Supprimer</strong> des lignes et des colonnes.',
              '<strong>Annuler / Rétablir</strong> — <kbd>Ctrl+Z</kbd> et <kbd>Ctrl+Shift+Z</kbd>.',
              '<strong>Réorganiser les colonnes</strong> — faites glisser les en-têtes de colonnes pour les réorganiser.',
              '<strong>Supprimer les vides / doublons</strong> — nettoyez vos données.',
            ],
          },
        ],
      },
      {
        type: 'section',
        heading: 'Exporter',
        blocks: [
          {
            type: 'p',
            html: 'Les boutons de téléchargement s\u2019appliquent aux données <em>filtrées</em> (la recherche et le tri sont respectés). Le presse-papiers copie l\u2019intégralité du jeu de données.',
          },
        ],
      },
      {
        type: 'section',
        heading: 'Menu Outils',
        blocks: [
          {
            type: 'ul',
            items: [
              '<strong>Générer des données aléatoires</strong> — crée un jeu de données CSV aléatoire pour les tests.',
              '<strong>Encoder / Décoder Base64</strong> — encodez ou décodez le contenu de l\u2019éditeur.',
              '<strong>Encoder / Décoder Hex</strong> — encodez ou décodez le contenu de l\u2019éditeur.',
            ],
          },
        ],
      },
      {
        type: 'section',
        heading: 'Confidentialité',
        blocks: [
          {
            type: 'p',
            html: 'Tout le traitement s\u2019effectue entièrement dans votre navigateur. Aucune donnée n\u2019est envoyée à un serveur. La récupération par URL avec le proxy CORS activé passe par un service proxy tiers.',
          },
        ],
      },
      {
        type: 'shortcuts',
        heading: 'Raccourcis clavier',
        columns: { shortcut: 'Raccourci', action: 'Action' },
        rows: [
          { shortcut: 'Ctrl+Enter', action: 'Convertir' },
          { shortcut: 'Ctrl+Z', action: 'Annuler' },
          { shortcut: 'Ctrl+Shift+Z', action: 'Rétablir' },
          { shortcut: 'Escape', action: 'Fermer la barre de recherche/remplacement ou de casse' },
        ],
      },
    ],
  },
  privacy: {
    meta: {
      title: 'Politique de confidentialité',
      description:
        'Politique de confidentialité de Data Converter — nous ne collectons, ne stockons ni ne partageons vos données. Tout s\u2019exécute dans votre navigateur.',
      keywords: 'politique de confidentialité, confidentialité des données, basé sur le navigateur, aucun envoi',
    },
    h1: 'Politique de confidentialité',
    breadcrumbs: [
      { name: 'Accueil', url: '/' },
      { name: 'Confidentialité', url: '/privacy' },
    ],
    lastUpdated: 'Dernière mise à jour : juillet 2026',
    sections: [
      {
        heading: 'Ce que couvre cette politique',
        blocks: [
          {
            type: 'p',
            html: 'Cette politique de confidentialité explique comment Data Converter (« nous », « je », « ce site ») traite vos informations lorsque vous utilisez les outils de ce site web.',
          },
        ],
      },
      {
        heading: 'Aucune collecte de données',
        blocks: [
          {
            type: 'p',
            html: 'Toute la conversion de fichiers, l\u2019analyse et le traitement s\u2019effectuent entièrement dans votre navigateur à l\u2019aide de JavaScript. Vos données — que vous les colliez, les importiez ou les récupériez depuis une URL — ne quittent jamais votre appareil. Je ne dispose d\u2019aucun serveur qui reçoit ou stocke vos fichiers.',
          },
        ],
      },
      {
        heading: 'Pas de comptes, pas de suivi',
        blocks: [
          {
            type: 'p',
            html: 'Vous n\u2019avez pas besoin de compte pour utiliser cet outil. Je n\u2019utilise pas de scripts d\u2019analyse qui suivent votre comportement sur d\u2019autres sites sans votre consentement. Le seul outil d\u2019analyse que j\u2019utilise est Google Analytics, avec des données de base sur les pages vues (sans suivi au niveau de l\u2019utilisateur), ce qui m\u2019aide à comprendre quelles fonctionnalités les gens utilisent le plus.',
          },
        ],
      },
      {
        heading: 'Cookies &amp; consentement',
        blocks: [
          {
            type: 'p',
            html: 'J\u2019utilise un minimum de cookies :',
          },
          {
            type: 'ul',
            items: [
              'Un cookie pour mémoriser votre préférence de thème (mode clair/sombre). Il est strictement fonctionnel et toujours défini.',
              'Google Analytics utilise ses propres cookies pour des statistiques agrégées de pages vues — uniquement chargés après avoir accepté la bannière de cookies.',
              'Google AdSense définit des cookies pour la diffusion et la personnalisation des publicités — uniquement chargés après avoir accepté la bannière de cookies.',
            ],
          },
          {
            type: 'p',
            html: 'Les scripts non essentiels (analyse et publicités) sont bloqués jusqu\u2019à ce que vous cliquiez sur « J\u2019ai compris » dans la bannière de cookies. Votre choix est enregistré localement afin que la bannière ne réapparaisse pas. Consultez notre <a href="/cookies">Politique de cookies</a> pour plus de détails.',
          },
        ],
      },
      {
        heading: 'Publicité',
        blocks: [
          {
            type: 'p',
            html: 'Ce site utilise Google AdSense pour diffuser des publicités. Google, en tant que fournisseur tiers, utilise des cookies pour diffuser des publicités en fonction des visites précédentes d\u2019un utilisateur sur ce site et d\u2019autres sites. L\u2019utilisation de cookies publicitaires par Google permet à celui-ci et à ses partenaires de diffuser des publicités en fonction de votre visite sur ce site et d\u2019autres sites sur internet.',
          },
          {
            type: 'p',
            html: 'Vous pouvez vous désinscrire de la publicité personnalisée en visitant <a href="https://adssettings.google.com" target="_blank" rel="noopener">les paramètres d\u2019annonces de Google</a>. Vous pouvez également vous désinscrire des cookies des fournisseurs tiers en visitant <a href="https://optout.networkadvertising.org" target="_blank" rel="noopener">la page de désinscription de la Network Advertising Initiative</a>.',
          },
          {
            type: 'p',
            html: 'Les scripts AdSense ne sont chargés qu\u2019après avoir accepté la bannière de cookies. Aucun cookie publicitaire n\u2019est défini tant que vous n\u2019avez pas donné votre consentement.',
          },
        ],
      },
      {
        heading: 'Fournisseurs tiers',
        blocks: [
          {
            type: 'ul',
            items: [
              '<strong>Google AdSense</strong> — diffuse des publicités contextuelles et personnalisées. Utilise des cookies (<code>_gads</code>, <code>_gac_</code>, <code>IDE</code>) pour la diffusion des publicités et la limitation de la fréquence.',
              '<strong>Google Analytics</strong> — collecte des données agrégées de pages vues. Utilise des cookies (<code>_ga</code>, <code>_gid</code>, <code>_gat</code>) pour des statistiques d\u2019utilisation anonymes.',
              '<strong>Google AMP</strong> — diffuse des publicités automatiques sur les pages prises en charge.',
            ],
          },
          {
            type: 'p',
            html: 'Ces services peuvent collecter des informations sur vos visites sur différents sites web afin de proposer des publicités pertinentes. Vous pouvez consulter la politique de confidentialité de Google à l\u2019adresse <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">policies.google.com/privacy</a>.',
          },
        ],
      },
      {
        heading: 'Services externes',
        blocks: [
          {
            type: 'p',
            html: 'Si vous utilisez la fonctionnalité <strong>URL Fetch</strong> avec le proxy CORS activé, votre requête passe par un service proxy tiers. Ce service voit l\u2019URL que vous demandez, mais pas vos informations personnelles. Le proxy CORS est désactivé par défaut et n\u2019est activé que lorsque vous cochez la case.',
          },
        ],
      },
      {
        heading: 'Modifications',
        blocks: [
          {
            type: 'p',
            html: 'Si cette politique change, je mettrai à jour la date en haut et publierai un avis sur le site pour les changements importants.',
          },
        ],
      },
      {
        heading: 'Contact',
        blocks: [
          {
            type: 'p',
            html: 'Des questions sur cette politique ou vos données ? <a href="/contact">Contactez-moi</a> ou <a href="https://github.com/NaimBiswas/convert/issues/new" target="_blank" rel="noopener">ouvrez un ticket GitHub</a>.',
          },
        ],
      },
    ],
  },
  terms: {
    meta: {
      title: 'Conditions générales',
      description:
        'Conditions générales de Data Converter — gratuit à utiliser, sans garantie, sous votre responsabilité.',
      keywords: 'conditions générales, conditions d\u2019utilisation, data converter',
    },
    h1: 'Conditions générales',
    breadcrumbs: [
      { name: 'Accueil', url: '/' },
      { name: 'Conditions', url: '/terms' },
    ],
    lastUpdated: 'Dernière mise à jour : juillet 2026',
    sections: [
      {
        heading: 'Utilisation à vos propres risques',
        blocks: [
          {
            type: 'p',
            html: 'Data Converter est fourni gratuitement, en l\u2019état, sans aucune garantie. Je travaille dur pour que les conversions soient exactes, mais je ne peux pas garantir qu\u2019elles seront parfaites dans chaque cas particulier. Il vous appartient de vérifier vos données converties avant de les utiliser en production ou dans tout contexte important.',
          },
        ],
      },
      {
        heading: 'Ce que vous pouvez faire',
        blocks: [
          {
            type: 'p',
            html: 'Vous êtes libre d\u2019utiliser cet outil à des fins personnelles, commerciales ou éducatives. Aucune attribution requise.',
          },
        ],
      },
      {
        heading: 'Ce que vous ne pouvez pas faire',
        blocks: [
          {
            type: 'ul',
            items: [
              'Extraire, explorer ou télécharger systématiquement le contenu de ce site.',
              'Utiliser l\u2019outil pour traiter du contenu illégal ou des données pour lesquelles vous n\u2019avez pas les droits.',
              'Tenter de casser, de surcharger ou d\u2019exploiter le site.',
            ],
          },
        ],
      },
      {
        heading: 'Aucune responsabilité',
        blocks: [
          {
            type: 'p',
            html: 'Je ne suis pas responsable des dommages ou pertes de données résultant de votre utilisation de cet outil. Comme tout le traitement s\u2019effectue localement dans votre navigateur, je n\u2019ai pas accès à vos données et ne peux pas être tenu responsable de ce qui leur arrive.',
          },
        ],
      },
      {
        heading: 'Modifications',
        blocks: [
          {
            type: 'p',
            html: 'Je peux mettre à jour ces conditions. Continuer à utiliser le site après des modifications signifie que vous acceptez les conditions mises à jour.',
          },
        ],
      },
      {
        heading: 'Contact',
        blocks: [
          {
            type: 'p',
            html: 'Si vous avez des questions sur ces conditions, <a href="/contact">contactez-moi</a>.',
          },
        ],
      },
    ],
  },
  cookies: {
    meta: {
      title: 'Politique de cookies',
      description: 'Politique de cookies de Data Converter — uniquement des cookies fonctionnels et minimaux.',
      keywords: 'politique de cookies, cookies, Google Analytics, data converter',
    },
    h1: 'Politique de cookies',
    breadcrumbs: [
      { name: 'Accueil', url: '/' },
      { name: 'Cookies', url: '/cookies' },
    ],
    lastUpdated: 'Dernière mise à jour : juillet 2026',
    intro: 'Data Converter utilise très peu de cookies. Voici exactement leur rôle.',
    sections: [
      {
        heading: 'Cookies fonctionnels',
        blocks: [
          {
            type: 'cookieTable',
            columns: { cookie: 'Cookie', purpose: 'Finalité', duration: 'Durée' },
            rows: [
              {
                cookie: 'theme',
                purpose: 'Mémorise votre préférence de mode clair/sombre afin que le site s\u2019affiche correctement à votre retour.',
                duration: '1 an',
              },
            ],
          },
        ],
      },
      {
        heading: 'Consentement aux cookies',
        blocks: [
          {
            type: 'p',
            html: 'Lors de votre première visite sur le site, une bannière apparaît pour demander votre consentement à la définition de cookies non essentiels. Les scripts d\u2019analyse et de publicité ne sont chargés qu\u2019après que vous avez cliqué sur « J\u2019ai compris ». Votre choix est enregistré dans le localStorage afin que la bannière ne réapparaisse pas. Vous pouvez effacer les données de votre navigateur pour réinitialiser cette préférence.',
          },
        ],
      },
      {
        heading: 'Analytique',
        blocks: [
          {
            type: 'p',
            html: 'J\u2019utilise Google Analytics pour voir quelles pages les gens visitent et comment le site est utilisé. Google Analytics définit ses propres cookies (<code>_ga</code>, <code>_gid</code>, <code>_gat</code>) qui suivent des données d\u2019utilisation anonymes et agrégées. Je n\u2019utilise pas ces données pour identifier des utilisateurs individuels. L\u2019analyse n\u2019est chargée qu\u2019après avoir accepté la bannière de cookies.',
          },
        ],
      },
      {
        heading: 'Publicité',
        blocks: [
          {
            type: 'p',
            html: 'Je diffuse des publicités via Google AdSense pour soutenir le site. AdSense définit des cookies pour la personnalisation des publicités et la limitation de la fréquence. Ces scripts ne sont chargés qu\u2019après avoir accepté la bannière de cookies.',
          },
        ],
      },
      {
        heading: 'Gestion des cookies',
        blocks: [
          {
            type: 'p',
            html: 'La plupart des navigateurs vous permettent de contrôler les cookies via leurs paramètres. Vous pouvez bloquer ou supprimer les cookies à tout moment. Si vous désactivez les cookies, la préférence de thème ne sera pas conservée entre les visites, mais l\u2019outil de conversion fonctionnera toujours correctement.',
          },
        ],
      },
      {
        heading: 'Contact',
        blocks: [
          {
            type: 'p',
            html: 'Des questions sur les cookies ? <a href="/contact">Faites-le-moi savoir</a>.',
          },
        ],
      },
    ],
  },
};
