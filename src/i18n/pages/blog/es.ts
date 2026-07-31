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
    title: 'JSON a CSV: Mejores prÃ¡cticas para datos anidados',
    desc: 'Aprende a manejar JSON profundamente anidado al convertirlo a CSV. Estrategias prÃ¡cticas para aplanar, nombrar claves y preservar los datos.',
    dateISO: '2026-03-20',
    dateDisplay: '20 de marzo de 2026',
    img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=240&fit=crop',
    heroImg: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop',
    heroAlt: 'CÃ³digo en una pantalla de computadora',
  },
  'csv-to-json-tutorial': {
    title: 'CÃ³mo convertir CSV a JSON: un tutorial completo',
    desc: 'Una guÃ­a paso a paso para convertir CSV a JSON. Cubre la inferencia de tipos, el mapeo de encabezados y el manejo de casos lÃ­mite como celdas vacÃ­as.',
    dateISO: '2026-03-18',
    dateDisplay: '18 de marzo de 2026',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=240&fit=crop',
    heroImg: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
    heroAlt: 'Panel de anÃ¡lisis de datos en una pantalla',
  },
  'excel-vs-csv': {
    title: 'Excel vs CSV: cuÃ¡ndo usar cada formato',
    desc: 'Excel y CSV cumplen propÃ³sitos distintos. AquÃ­ tienes cuÃ¡ndo quedarte con las hojas de cÃ¡lculo y cuÃ¡ndo el CSV simple es la mejor opciÃ³n.',
    dateISO: '2026-03-15',
    dateDisplay: '15 de marzo de 2026',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=240&fit=crop',
    heroImg: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=400&fit=crop',
    heroAlt: 'PortÃ¡til sobre un escritorio de madera',
  },
  'json-vs-xml-vs-yaml': {
    title: 'JSON vs XML vs YAML: cÃ³mo elegir el formato de datos correcto',
    desc: 'Una comparaciÃ³n prÃ¡ctica de JSON, XML y YAML. Aprende quÃ© formato se adapta a tu proyecto segÃºn la legibilidad, el tamaÃ±o y las herramientas.',
    dateISO: '2026-03-12',
    dateDisplay: '12 de marzo de 2026',
    img: 'https://images.unsplash.com/photo-1555421689-d68471e189f2?w=400&h=240&fit=crop',
    heroImg: 'https://images.unsplash.com/photo-1555421689-d68471e189f2?w=800&h=400&fit=crop',
    heroAlt: 'Panel de anÃ¡lisis con nÃºmeros',
  },
  'data-cleaning-tips': {
    title: '5 consejos de limpieza de datos antes de convertir hojas de cÃ¡lculo',
    desc: 'Los datos limpios se convierten mejor. Cinco consejos prÃ¡cticos para preparar tus hojas de cÃ¡lculo antes de convertirlas a JSON, CSV u otros formatos.',
    dateISO: '2026-03-10',
    dateDisplay: '10 de marzo de 2026',
    img: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=240&fit=crop',
    heroImg: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=400&fit=crop',
    heroAlt: 'Cuaderno y bolÃ­grafo sobre un escritorio',
  },
  'why-json-is-popular': {
    title: 'Por quÃ© JSON se convirtiÃ³ en el formato de datos universal para las APIs web',
    desc: 'Un anÃ¡lisis de las decisiones de diseÃ±o y los factores del ecosistema que convirtieron a JSON en el formato de datos predeterminado para las APIs web modernas.',
    dateISO: '2026-03-05',
    dateDisplay: '5 de marzo de 2026',
    img: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=240&fit=crop',
    heroImg: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=400&fit=crop',
    heroAlt: 'Rack de servidores con cables de red',
  },
  'excel-formulas-to-csv': {
    title: 'Manejo de fÃ³rmulas de Excel al convertir a CSV',
    desc: 'Â¿QuÃ© sucede con las fÃ³rmulas de Excel, el formato condicional y las macros cuando conviertes a CSV plano? Todo lo que necesitas saber.',
    dateISO: '2026-03-02',
    dateDisplay: '2 de marzo de 2026',
    img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=240&fit=crop',
    heroImg: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=400&fit=crop',
    heroAlt: 'Espacio de trabajo moderno con portÃ¡til',
  },
  'data-migration-strategies': {
    title: 'Estrategias de migraciÃ³n de datos: de hojas de cÃ¡lculo a bases de datos',
    desc: 'Una guÃ­a para migrar datos de archivos Excel y CSV a bases de datos relacionales, almacenes NoSQL y almacenes de datos en la nube.',
    dateISO: '2026-02-28',
    dateDisplay: '28 de febrero de 2026',
    img: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=400&h=240&fit=crop',
    heroImg: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&h=400&fit=crop',
    heroAlt: 'Servidor de datos con luces parpadeantes',
  },
  'large-file-conversion': {
    title: 'CÃ³mo manejar conversiones de archivos grandes sin perder datos',
    desc: 'Consejos para convertir conjuntos de datos grandes - gestiÃ³n de memoria, estrategias de fragmentaciÃ³n y quÃ© vigilar con archivos de mÃ¡s de 10 MB.',
    dateISO: '2026-02-25',
    dateDisplay: '25 de febrero de 2026',
    img: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=400&h=240&fit=crop',
    heroImg: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=400&fit=crop',
    heroAlt: 'Editor de cÃ³digo en una pantalla de computadora',
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
        'ArtÃ­culos y guÃ­as sobre conversiÃ³n de datos, JSON, CSV, Excel y consejos de procesamiento de datos.',
      keywords: 'blog de conversiÃ³n de datos, consejos json, guÃ­a csv, excel a json, procesamiento de datos',
    },
    h1: 'Blog',
    subtitle: 'Consejos, guÃ­as y anÃ¡lisis a fondo sobre conversiÃ³n y procesamiento de datos.',
    breadcrumbs: [
      { name: 'Inicio', url: '/' },
      { name: 'Blog', url: '/blog' },
    ],
    order,
    posts,
  },
  posts: {
    'json-to-csv-best-practices': {
      meta: {
        title: 'JSON a CSV: Mejores prÃ¡cticas para datos anidados',
        description:
          'Aprende a manejar JSON profundamente anidado al convertirlo a CSV. Estrategias prÃ¡cticas para aplanar, nombrar claves y preservar los datos.',
        keywords: 'json a csv anidado, aplanar json, mejores prÃ¡cticas json anidado',
      },
      h1: 'JSON a CSV: Mejores prÃ¡cticas para datos anidados',
      breadcrumbs: [
        { name: 'Inicio', url: '/' },
        { name: 'Blog', url: '/blog' },
        { name: 'Mejores prÃ¡cticas de JSON a CSV', url: '/blog/json-to-csv-best-practices' },
      ],
      dateISO: '2026-03-20',
      dateDisplay: '20 de marzo de 2026',
      byline: 'por Naim Biswas',
      heroImg: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop',
      heroAlt: 'CÃ³digo en una pantalla de computadora',
      intro:
        'Convertir JSON a CSV es sencillo cuando tus datos son planos - una matriz de objetos con las mismas claves. Pero el JSON del mundo real rara vez es tan simple. Las APIs devuelven objetos anidados, matrices de longitud variable y tipos de datos mixtos. AsÃ­ es como se manejan esos casos sin perder informaciÃ³n.',
      sections: [
        {
          heading: 'El problema del aplanado',
          blocks: [
            {
              type: 'p',
              html: 'CSV es un formato plano: cada fila tiene el mismo conjunto de columnas. JSON puede anidarse arbitrariamente. El enfoque estÃ¡ndar es aplanar las claves usando un separador. Por ejemplo:',
            },
            {
              type: 'p',
              html: '<code>&lbrace;"user": &lbrace;"name": "Alice", "address": &lbrace;"city": "NYC"&rbrace;&rbrace;&rbrace;</code>',
            },
            {
              type: 'p',
              html: 'se convierte en las columnas <code>user_name</code> y <code>user_address_city</code>. El guion bajo como separador es una convenciÃ³n, pero la consistencia importa mÃ¡s que la elecciÃ³n del carÃ¡cter. Algunas herramientas usan puntos (<code>user.address.city</code>) o corchetes (<code>user[address][city]</code>).',
            },
          ],
        },
        {
          heading: 'Manejo de matrices dentro de objetos',
          blocks: [
            {
              type: 'p',
              html: 'Las matrices son la parte mÃ¡s complicada. Cuando un objeto contiene una matriz de primitivos (como <code>"tags": ["red", "blue", "green"]</code>), el enfoque habitual es unirlos con un delimitador - los puntos y comas funcionan bien ya que CSV ya usa comas. Esto mantiene intacta cada fila padre.',
            },
            {
              type: 'p',
              html: 'Cuando un objeto contiene una matriz de objetos (como <code>"orders": [&lbrace;"id": 1&rbrace;, &lbrace;"id": 2&rbrace;]</code>), tienes dos opciones: expandir cada objeto anidado en su propia fila (repitiendo los datos del padre), o mantenerlos como una cadena JSON en una sola celda. La elecciÃ³n correcta depende de tu caso de uso posterior.',
            },
          ],
        },
        {
          heading: 'Inferencia de tipos',
          blocks: [
            {
              type: 'p',
              html: 'CSV es solo texto, pero la mayorÃ­a de las aplicaciones de hojas de cÃ¡lculo infieren tipos al abrir un archivo. El conversor debe generar nÃºmeros sin comillas (<code>42</code> y no <code>"42"</code>), booleanos como <code>true</code>/<code>false</code> y fechas en un formato consistente como ISO 8601 (<code>2026-03-20</code>). Esto permite que Excel y Google Sheets apliquen los tipos de columna correctos automÃ¡ticamente.',
            },
          ],
        },
        {
          heading: 'Convenciones de nomenclatura de claves',
          blocks: [
            {
              type: 'p',
              html: 'Usa minÃºsculas con guiones bajos para las claves aplanadas. Evita caracteres especiales, espacios o dÃ­gitos iniciales. Esto garantiza que el CSV resultante se importe correctamente en bases de datos y herramientas de anÃ¡lisis sin necesidad de renombrar columnas manualmente.',
            },
          ],
        },
        {
          heading: 'Valores vacÃ­os y ausentes',
          blocks: [
            {
              type: 'p',
              html: 'No todos los objetos JSON tendrÃ¡n todas las claves. Decide de antemano cÃ³mo manejar los valores ausentes: cadenas vacÃ­as, <code>null</code> u omitir la celda. La opciÃ³n mÃ¡s segura para la mayorÃ­a de las bases de datos es generar una celda vacÃ­a, que la mayorÃ­a de las herramientas de importaciÃ³n interpretan como NULL.',
            },
          ],
        },
        {
          heading: 'Resumen',
          blocks: [
            {
              type: 'p',
              html: 'La conversiÃ³n de JSON anidado a CSV es un problema de mapeo. Elige un separador consistente para las claves, decide cÃ³mo aplanar las matrices y mantÃ©n tipos limpios. Un buen conversor maneja todo esto automÃ¡ticamente - que es exactamente lo que hace esta herramienta.',
            },
          ],
        },
      ],
    },
    'csv-to-json-tutorial': {
      meta: {
        title: 'CÃ³mo convertir CSV a JSON: un tutorial completo',
        description:
          'Una guÃ­a paso a paso para convertir CSV a JSON. Cubre la inferencia de tipos, el mapeo de encabezados y el manejo de casos lÃ­mite como celdas vacÃ­as.',
        keywords: 'tutorial csv a json, convertir csv a json, guÃ­a csv a json',
      },
      h1: 'CÃ³mo convertir CSV a JSON: un tutorial completo',
      breadcrumbs: [
        { name: 'Inicio', url: '/' },
        { name: 'Blog', url: '/blog' },
        { name: 'Tutorial de CSV a JSON', url: '/blog/csv-to-json-tutorial' },
      ],
      dateISO: '2026-03-18',
      dateDisplay: '18 de marzo de 2026',
      byline: 'por Naim Biswas',
      heroImg: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
      heroAlt: 'Panel de anÃ¡lisis de datos en una pantalla',
      intro:
        'CSV es el formato mÃ¡s comÃºn para exportar datos de hojas de cÃ¡lculo y bases de datos. JSON es lo que las aplicaciones web y las APIs usan de forma nativa. Convertir entre ambos es una tarea habitual para desarrolladores, analistas de datos y cualquiera que mueva datos entre sistemas.',
      sections: [
        {
          heading: 'Comprender la estructura',
          blocks: [
            {
              type: 'p',
              html: 'Un archivo CSV tiene una fila de encabezado seguida de filas de datos. Cada columna se convierte en una clave del objeto JSON y cada fila en un objeto. El conversor lee la primera fila como nombres de propiedad y las filas siguientes como valores.',
            },
            { type: 'p', html: 'Por ejemplo, este CSV:' },
            {
              type: 'p',
              html: '<code>name,age,city<br>Alice,30,NYC<br>Bob,25,LA</code>',
            },
            { type: 'p', html: 'se convierte en este JSON:' },
            {
              type: 'p',
              html: '<code>[&lbrace;"name":"Alice","age":30,"city":"NYC"&rbrace;,&lbrace;"name":"Bob","age":25,"city":"LA"&rbrace;]</code>',
            },
          ],
        },
        {
          heading: 'La inferencia de tipos importa',
          blocks: [
            {
              type: 'p',
              html: 'Un buen conversor de CSV a JSON no trata todo como texto. NÃºmeros como <code>30</code> deben convertirse en nÃºmeros JSON, no en cadenas entre comillas. <code>true</code> y <code>false</code> deben convertirse en booleanos JSON. Las fechas deben permanecer en un formato analizable. Esto es crÃ­tico cuando la salida JSON se alimenta directamente a una API o base de datos - no quieres convertir tipos en el extremo receptor.',
            },
          ],
        },
        {
          heading: 'Manejo de casos lÃ­mite',
          blocks: [
            {
              type: 'p',
              html: '<strong>Celdas vacÃ­as:</strong> Una celda CSV sin valor debe convertirse en <code>null</code> en JSON, no en una cadena vacÃ­a <code>""</code>. Esta distinciÃ³n importa para la integridad de los datos - null significa &ldquo;sin valor,&rdquo; mientras que una cadena vacÃ­a significa &ldquo;el valor estÃ¡ vacÃ­o.&rdquo;',
            },
            {
              type: 'p',
              html: '<strong>Campos entre comillas:</strong> Los valores CSV que contienen comas, saltos de lÃ­nea o comillas se envuelven entre comillas dobles. Un conversor robusto maneja esto correctamente para que una celda como <code>"Smith, John"</code> permanezca como un solo campo en lugar de dividirse.',
            },
            {
              type: 'p',
              html: '<strong>Espacios en los encabezados:</strong> Los encabezados de columna con espacios iniciales o finales deben recortarse automÃ¡ticamente. <code>" name "</code> debe convertirse en <code>"name"</code> como clave JSON.',
            },
          ],
        },
        {
          heading: 'Formatos de salida',
          blocks: [
            {
              type: 'p',
              html: 'La mayorÃ­a de las herramientas generan JSON como una matriz de objetos, que es el formato mÃ¡s Ãºtil para APIs y bases de datos. Algunas herramientas ofrecen una opciÃ³n de matriz de matrices (sin encabezados como claves), que es mÃ¡s compacta pero menos legible. Elige el formato que se ajuste a tu caso de uso.',
            },
          ],
        },
        {
          heading: 'Errores comunes',
          blocks: [
            {
              type: 'ul',
              items: [
                '<strong>Olvidar la codificaciÃ³n:</strong> Los archivos CSV pueden usar distintas codificaciones de caracteres (UTF-8, Latin-1). AsegÃºrate de que tu herramienta maneje UTF-8 correctamente, especialmente si tus datos contienen acentos o caracteres especiales.',
                '<strong>Delimitadores incompatibles:</strong> No todos los archivos CSV usan comas. Algunos usan tabulaciones (TSV), puntos y comas o barras verticales. El conversor debe detectar automÃ¡ticamente el delimitador o permitirte especificarlo.',
                '<strong>Archivos grandes sin transmisiÃ³n por flujo:</strong> Los conversores basados en la web deben manejar archivos grandes sin congelar el navegador. Busca herramientas que procesen los datos por partes.',
              ],
            },
          ],
        },
        {
          heading: 'Resumen',
          blocks: [
            {
              type: 'p',
              html: 'La conversiÃ³n de CSV a JSON es una transformaciÃ³n bien definida, pero la calidad de la salida depende de cÃ³mo maneje la herramienta los tipos, los casos lÃ­mite y la codificaciÃ³n. Un buen conversor hace lo correcto automÃ¡ticamente para que puedas centrarte en usar los datos, no en depurarlos.',
            },
          ],
        },
      ],
    },
    'excel-vs-csv': {
      meta: {
        title: 'Excel vs CSV: cuÃ¡ndo usar cada formato',
        description:
          'Excel y CSV cumplen propÃ³sitos distintos. AquÃ­ tienes cuÃ¡ndo quedarte con las hojas de cÃ¡lculo y cuÃ¡ndo el CSV simple es la mejor opciÃ³n.',
        keywords: 'excel vs csv, xlsx vs csv, formatos de hoja de cÃ¡lculo, cuÃ¡ndo usar csv',
      },
      h1: 'Excel vs CSV: cuÃ¡ndo usar cada formato',
      breadcrumbs: [
        { name: 'Inicio', url: '/' },
        { name: 'Blog', url: '/blog' },
        { name: 'Excel vs CSV', url: '/blog/excel-vs-csv' },
      ],
      dateISO: '2026-03-15',
      dateDisplay: '15 de marzo de 2026',
      byline: 'por Naim Biswas',
      heroImg: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=400&fit=crop',
      heroAlt: 'PortÃ¡til sobre un escritorio de madera',
      intro:
        'Excel (.xlsx) y CSV (.csv) son los dos formatos mÃ¡s comunes para datos tabulares, pero cumplen propÃ³sitos fundamentalmente distintos. Elegir el correcto depende de quiÃ©n necesita los datos y quÃ© necesita hacer con ellos.',
      sections: [
        {
          heading: 'Lo que te ofrece Excel',
          blocks: [
            {
              type: 'p',
              html: 'Los archivos de Excel son documentos ricos. Pueden contener mÃºltiples hojas, formato de celdas (colores, fuentes, bordes), celdas combinadas, fÃ³rmulas, grÃ¡ficos, tablas dinÃ¡micas, formato condicional, reglas de validaciÃ³n de datos y macros. Un libro de Excel estÃ¡ mÃ¡s cerca de una mini aplicaciÃ³n que de un simple archivo de datos.',
            },
            { type: 'p', html: 'Usa Excel cuando:' },
            {
              type: 'ul',
              items: [
                'Necesites formato y presentaciÃ³n visual',
                'EstÃ©s creando informes o paneles para lectores humanos',
                'Uses fÃ³rmulas que hagan referencia a otras celdas u hojas',
                'Necesites varias tablas relacionadas en un solo archivo',
                'Trabajes con interesados que esperan una hoja de cÃ¡lculo pulida',
              ],
            },
          ],
        },
        {
          heading: 'Lo que te ofrece CSV',
          blocks: [
            {
              type: 'p',
              html: 'CSV es datos puros: filas y columnas de texto plano separadas por comas. Sin formato, sin fÃ³rmulas, sin macros. Solo los valores. Esta simplicidad es su superpoder - cada lenguaje de programaciÃ³n, base de datos y herramienta de datos puede leer y escribir CSV sin bibliotecas especiales.',
            },
            { type: 'p', html: 'Usa CSV cuando:' },
            {
              type: 'ul',
              items: [
                'EstÃ©s moviendo datos entre sistemas (importaciones/exportaciones de bases de datos, canalizaciones ETL)',
                'EstÃ©s procesando datos mediante programaciÃ³n (Python, R, JavaScript, etc.)',
                'Necesites control de versiones - los archivos CSV se comparan limpiamente en git',
                'Quieras el tamaÃ±o de archivo mÃ¡s pequeÃ±o posible',
                'EstÃ©s publicando datos abiertos para que otros los descarguen y usen',
              ],
            },
          ],
        },
        {
          heading: 'La zona gris',
          blocks: [
            {
              type: 'p',
              html: 'Muchas herramientas difuminan la lÃ­nea. Excel puede abrir archivos CSV y aplicar formato sobre la marcha. Google Sheets trata ambos formatos como nativos. Pero si guardas un archivo de Excel con formato como CSV, todo el formato se pierde - solo permanecen los valores de celda en bruto. Las fÃ³rmulas se evalÃºan a sus valores actuales, por lo que <code>=SUM(A1:A10)</code> se convierte en un nÃºmero.',
            },
          ],
        },
        {
          heading: 'ConversiÃ³n entre ambos',
          blocks: [
            {
              type: 'p',
              html: 'Convertir Excel a CSV elimina todo excepto los datos. Esto es Ãºtil cuando necesitas migrar datos de una hoja de cÃ¡lculo a una base de datos o herramienta de anÃ¡lisis. Convertir CSV a Excel aÃ±ade una capa de contenedor - obtienes los mismos datos pero ahora se pueden abrir, formatear y compartir como una hoja de cÃ¡lculo profesional.',
            },
          ],
        },
        {
          heading: 'Â¿CuÃ¡l deberÃ­as usar?',
          blocks: [
            {
              type: 'p',
              html: 'Si te haces la pregunta, la respuesta suele ser CSV. CSV es el formato de intercambio - es lo que usas cuando los datos necesitan moverse. Excel es el formato de presentaciÃ³n - es lo que usas cuando los datos necesitan ser leÃ­dos por personas. Ambas son herramientas esenciales, y saber cuÃ¡ndo usar cada una ahorra tiempo y evita la pÃ©rdida de datos.',
            },
          ],
        },
      ],
    },
    'json-vs-xml-vs-yaml': {
      meta: {
        title: 'JSON vs XML vs YAML: cÃ³mo elegir el formato de datos correcto',
        description:
          'Una comparaciÃ³n prÃ¡ctica de JSON, XML y YAML. Aprende quÃ© formato se adapta a tu proyecto segÃºn la legibilidad, el tamaÃ±o y las herramientas.',
        keywords: 'json vs xml vs yaml, comparaciÃ³n de formatos de datos, formatos de datos estructurados',
      },
      h1: 'JSON vs XML vs YAML: cÃ³mo elegir el formato de datos correcto',
      breadcrumbs: [
        { name: 'Inicio', url: '/' },
        { name: 'Blog', url: '/blog' },
        { name: 'JSON vs XML vs YAML', url: '/blog/json-vs-xml-vs-yaml' },
      ],
      dateISO: '2026-03-12',
      dateDisplay: '12 de marzo de 2026',
      byline: 'por Naim Biswas',
      heroImg: 'https://images.unsplash.com/photo-1555421689-d68471e189f2?w=800&h=400&fit=crop',
      heroAlt: 'Panel de anÃ¡lisis con nÃºmeros',
      intro:
        'JSON, XML y YAML son los tres formatos dominantes para datos estructurados. Cada uno tiene fortalezas y compensaciones. La elecciÃ³n correcta depende de tu caso de uso, tu ecosistema y quiÃ©n leerÃ¡ los datos.',
      sections: [
        {
          heading: 'JSON - el estÃ¡ndar web',
          blocks: [
            {
              type: 'p',
              html: 'JSON (JavaScript Object Notation) es el estÃ¡ndar de facto para las APIs web. Es ligero, admite de forma nativa objetos, matrices, cadenas, nÃºmeros, booleanos y null, y puede analizarse en cualquier lenguaje moderno sin dependencias externas. Su sintaxis es un subconjunto de JavaScript, por lo que el cÃ³digo frontend puede consumirlo directamente.',
            },
            {
              type: 'p',
              html: '<strong>Fortalezas:</strong> RÃ¡pido de analizar, compacto, soporte nativo en JavaScript, excelente para APIs y archivos de configuraciÃ³n.',
            },
            {
              type: 'p',
              html: '<strong>Debilidades:</strong> Sin comentarios, sin validaciÃ³n de esquema de serie (aunque existe JSON Schema), menos legible para estructuras profundamente anidadas.',
            },
            {
              type: 'p',
              html: '<strong>Ideal para:</strong> APIs REST, datos de aplicaciones web, archivos de configuraciÃ³n, intercambio de datos entre servicios.',
            },
          ],
        },
        {
          heading: 'XML - el veterano empresarial',
          blocks: [
            {
              type: 'p',
              html: 'XML (eXtensible Markup Language) existe desde finales de los aÃ±os 90. Usa una sintaxis basada en etiquetas con atributos y espacios de nombres. XML es verboso pero extremadamente flexible - puedes representar casi cualquier estructura de datos, incluido contenido mixto (texto con elementos en lÃ­nea).',
            },
            {
              type: 'p',
              html: '<strong>Fortalezas:</strong> ValidaciÃ³n de esquema (XSD), espacios de nombres para evitar colisiones de nombres, XSLT para transformaciones, herramientas robustas en ecosistemas empresariales.',
            },
            {
              type: 'p',
              html: '<strong>Debilidades:</strong> Verboso, mÃ¡s lento de analizar, herramientas mÃ¡s complejas, tamaÃ±o de carga mÃ¡s pesado.',
            },
            {
              type: 'p',
              html: '<strong>Ideal para:</strong> Almacenamiento de documentos, APIs SOAP, sistemas empresariales heredados, formatos como SVG y RSS.',
            },
          ],
        },
        {
          heading: 'YAML - la opciÃ³n amigable para humanos',
          blocks: [
            {
              type: 'p',
              html: 'YAML (YAML Ain\u2019t Markup Language) prioriza la legibilidad humana. Usa sangrÃ­a en lugar de corchetes o etiquetas, lo que lo convierte en el mÃ¡s legible de los tres. TambiÃ©n admite comentarios, cosa que JSON no hace.',
            },
            {
              type: 'p',
              html: '<strong>Fortalezas:</strong> Muy legible, admite comentarios, anclas y alias para reutilizar datos, ideal para archivos de configuraciÃ³n.',
            },
            {
              type: 'p',
              html: '<strong>Debilidades:</strong> Sensible a la sangrÃ­a (puede causar errores sutiles), menos universal que JSON, mÃ¡s lento de analizar, especificaciÃ³n compleja.',
            },
            {
              type: 'p',
              html: '<strong>Ideal para:</strong> Archivos de configuraciÃ³n (Docker Compose, Kubernetes, canalizaciones CI/CD), datos que los humanos necesitan editar con frecuencia.',
            },
          ],
        },
        {
          heading: 'ConversiÃ³n entre formatos',
          blocks: [
            {
              type: 'p',
              html: 'Las herramientas de datos modernas admiten los tres formatos. Convertir JSON a YAML hace mÃ¡s legibles los archivos de configuraciÃ³n. Convertir XML a JSON hace mÃ¡s fluida la integraciÃ³n de APIs. Convertir YAML a JSON permite analizarlo en entornos sin un analizador de YAML. El <a href="/">Data Converter</a> maneja todas estas conversiones - JSON, XML, YAML, CSV y Excel - en una sola interfaz.',
            },
          ],
        },
        {
          heading: 'Â¿CuÃ¡l elegir?',
          blocks: [
            {
              type: 'p',
              html: 'Si estÃ¡s construyendo un proyecto nuevo: usa JSON para APIs e intercambio de datos, YAML para archivos de configuraciÃ³n y XML solo si necesitas las funciones avanzadas (espacios de nombres, esquemas, XSLT) o trabajas en un ecosistema heredado. Ninguno de estos formatos va a desaparecer - coexisten por una buena razÃ³n.',
            },
          ],
        },
      ],
    },
    'data-cleaning-tips': {
      meta: {
        title: '5 consejos de limpieza de datos antes de convertir hojas de cÃ¡lculo',
        description:
          'Los datos limpios se convierten mejor. Cinco consejos prÃ¡cticos para preparar tus hojas de cÃ¡lculo antes de convertirlas a JSON, CSV u otros formatos.',
        keywords: 'consejos de limpieza de datos, limpieza de hojas de cÃ¡lculo, preparaciÃ³n de datos, convertir hojas de cÃ¡lculo',
      },
      h1: '5 consejos de limpieza de datos antes de convertir hojas de cÃ¡lculo',
      breadcrumbs: [
        { name: 'Inicio', url: '/' },
        { name: 'Blog', url: '/blog' },
        { name: 'Consejos de limpieza de datos', url: '/blog/data-cleaning-tips' },
      ],
      dateISO: '2026-03-10',
      dateDisplay: '10 de marzo de 2026',
      byline: 'por Naim Biswas',
      heroImg: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=400&fit=crop',
      heroAlt: 'Cuaderno y bolÃ­grafo sobre un escritorio',
      intro:
        'Convertir una hoja de cÃ¡lculo desordenada a <a href="/csv-to-json-converter">JSON o CSV</a> solo traslada el desorden a un nuevo formato. Unos minutos de limpieza antes de la conversiÃ³n ahorran horas de depuraciÃ³n posteriores. AquÃ­ tienes cinco consejos para dejar tus datos listos para la conversiÃ³n.',
      sections: [
        {
          heading: '1. Estandariza tus encabezados',
          blocks: [
            {
              type: 'p',
              html: 'Los encabezados de columna se convierten en claves JSON o nombres de columna CSV. Los encabezados inconsistentes generan salidas inconsistentes. Usa nombres cortos y descriptivos sin espacios, caracteres especiales ni saltos de lÃ­nea. MantÃ©n minÃºsculas con guiones bajos o camelCase - <code>first_name</code> o <code>firstName</code>, pero elige una convenciÃ³n y aplÃ­cala en todas partes. Evita nombres de columna duplicados, que rompen por completo la salida JSON.',
            },
          ],
        },
        {
          heading: '2. Comprueba tipos de datos consistentes',
          blocks: [
            {
              type: 'p',
              html: 'Una columna llamada &ldquo;edad&rdquo; debe contener nÃºmeros en cada fila. Si algunas celdas contienen texto como &ldquo;N/A&rdquo; o &ldquo;desconocido,&rdquo; el conversor puede tratar la columna completa como cadenas. Estandariza los valores ausentes como celdas vacÃ­as en lugar de marcadores de texto. Para columnas de fecha, usa un Ãºnico formato en todo el documento - ISO 8601 (<code>2026-03-10</code>) es la opciÃ³n mÃ¡s segura porque ordena correctamente y no es ambiguo.',
            },
          ],
        },
        {
          heading: '3. Elimina las celdas combinadas',
          blocks: [
            {
              type: 'p',
              html: 'Las celdas combinadas son comunes en las hojas de cÃ¡lculo para lectura humana pero causan problemas durante la conversiÃ³n. Una celda combinada solo tiene valor en la celda superior izquierda; el resto aparecen vacÃ­as. Descombina todas las celdas antes de convertir y rellena el valor hacia abajo o a los lados segÃºn sea necesario. La mayorÃ­a de los conversores ya manejan esto automÃ¡ticamente, pero es mejor tener datos fuente limpios.',
            },
          ],
        },
        {
          heading: '4. Elimina los espacios extra',
          blocks: [
            {
              type: 'p',
              html: 'Los espacios iniciales o finales en las celdas son invisibles en Excel pero se convierten en problemas visibles en los datos convertidos. Un valor como <code>"Alice "</code> (con un espacio final) producirÃ¡ una cadena JSON distinta a <code>"Alice"</code>. Usa la funciÃ³n TRIM de Excel o una bÃºsqueda y reemplazo rÃ¡pida para eliminar los espacios extra de todas las celdas antes de la conversiÃ³n.',
            },
          ],
        },
        {
          heading: '5. Maneja filas y columnas vacÃ­as',
          blocks: [
            {
              type: 'p',
              html: 'Las hojas de cÃ¡lculo suelen tener cientos de filas vacÃ­as al final o columnas vacÃ­as que se usaban como espaciadores. Estas se convierten en valores null en JSON o campos vacÃ­os en CSV, inflando la salida. Elimina cualquier fila o columna que no contenga datos antes de convertir. Una forma rÃ¡pida de comprobarlo: selecciona todas las celdas, presiona Ctrl+Shift+End y verifica que el rango usado coincida con tus datos reales.',
            },
          ],
        },
        {
          heading: 'La recompensa',
          blocks: [
            {
              type: 'p',
              html: 'Estos cinco pasos toman diez minutos pero producen una salida mucho mÃ¡s limpia. Los datos fuente limpios significan integraciÃ³n mÃ¡s rÃ¡pida, menos errores y menos posprocesamiento manual. Haz de la limpieza de datos parte de tu flujo de conversiÃ³n - tu yo del futuro te lo agradecerÃ¡.',
            },
          ],
        },
      ],
    },
    'why-json-is-popular': {
      meta: {
        title: 'Por quÃ© JSON se convirtiÃ³ en el formato de datos universal para las APIs web',
        description:
          'Un anÃ¡lisis de las decisiones de diseÃ±o y los factores del ecosistema que convirtieron a JSON en el formato de datos predeterminado para las APIs web modernas.',
        keywords: 'popularidad de json, por quÃ© json, json apis web, historia json vs xml',
      },
      h1: 'Por quÃ© JSON se convirtiÃ³ en el formato de datos universal para las APIs web',
      breadcrumbs: [
        { name: 'Inicio', url: '/' },
        { name: 'Blog', url: '/blog' },
        { name: 'Por quÃ© JSON se volviÃ³ universal', url: '/blog/why-json-is-popular' },
      ],
      dateISO: '2026-03-05',
      dateDisplay: '5 de marzo de 2026',
      byline: 'por Naim Biswas',
      heroImg: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=400&fit=crop',
      heroAlt: 'Rack de servidores con cables de red',
      intro:
        'A principios de los aÃ±os 2000, XML era el rey indiscutible del intercambio de datos web. Las APIs SOAP, los feeds RSS y los archivos de configuraciÃ³n usaban XML. Hoy, JSON domina. Â¿CÃ³mo se convirtiÃ³ un formato concebido originalmente como &ldquo;un subconjunto inofensivo de JavaScript&rdquo; en el lenguaje universal de las APIs web?',
      sections: [
        {
          heading: 'Viene de JavaScript',
          blocks: [
            {
              type: 'p',
              html: 'JSON fue especificado por primera vez por Douglas Crockford a principios de los aÃ±os 2000 como un formato de datos ligero derivado de la sintaxis de literales de objetos de JavaScript. Como ya era JavaScript vÃ¡lido, cualquier aplicaciÃ³n web podÃ­a analizar JSON usando <code>eval()</code> o el mÃ©todo integrado <code>JSON.parse()</code> (aÃ±adido en ES5). Sin necesidad de biblioteca de analizadores - el navegador ya lo entendÃ­a.',
            },
            {
              type: 'p',
              html: 'Esto era una ventaja enorme sobre XML, que requerÃ­a complejos analizadores DOM o SAX. Para los desarrolladores frontend que consumÃ­an respuestas de APIs, JSON era inmediatamente utilizable de una forma que XML nunca lo fue.',
            },
          ],
        },
        {
          heading: 'Cargas mÃ¡s pequeÃ±as',
          blocks: [
            {
              type: 'p',
              html: 'JSON es significativamente mÃ¡s compacto que XML. Un documento XML requiere etiquetas de apertura y cierre para cada campo (<code>&lt;name&gt;Alice&lt;/name&gt;</code>), mientras que JSON usa una sintaxis ligera de clave-valor (<code>"name": "Alice"</code>). Para conjuntos de datos grandes, esta diferencia se traduce en cargas un 30-50% mÃ¡s pequeÃ±as - un gran factor en redes mÃ³viles y conexiones lentas.',
            },
          ],
        },
        {
          heading: 'Sistema de tipos nativo',
          blocks: [
            {
              type: 'p',
              html: 'JSON tiene un sistema de tipos simple pero expresivo: cadenas, nÃºmeros, booleanos, null, matrices y objetos. XML, en cambio, trata todo como texto. Un nÃºmero en XML es solo texto que resulta contener dÃ­gitos - la aplicaciÃ³n debe analizarlo. JSON maneja los tipos de forma nativa, lo que reduce el cÃ³digo repetitivo y elimina una clase de errores.',
            },
          ],
        },
        {
          heading: 'La revoluciÃ³n REST',
          blocks: [
            {
              type: 'p',
              html: 'El cambio de las APIs SOAP (basadas en XML) a REST (independiente del formato) coincidiÃ³ con el auge de JSON. REST enfatizaba la simplicidad, la ausencia de estado y el diseÃ±o orientado a recursos. JSON encajaba perfectamente con la filosofÃ­a de REST - ligero, fÃ¡cil de trabajar y legible por humanos. Frameworks como Ruby on Rails, Express.js y Django adoptaron JSON como su formato de salida predeterminado, consolidando su dominio.',
            },
          ],
        },
        {
          heading: 'El impulso del ecosistema',
          blocks: [
            {
              type: 'p',
              html: 'Una vez que JSON se convirtiÃ³ en el estÃ¡ndar de facto para las APIs web, el ecosistema se disparÃ³. SurgiÃ³ JSON Schema para la validaciÃ³n. JSON Web Tokens (JWT) se convirtiÃ³ en el estÃ¡ndar para la autenticaciÃ³n. MongoDB eligiÃ³ BSON (JSON binario) como su formato de documentos. Herramientas como jq facilitaron la manipulaciÃ³n de JSON en la lÃ­nea de comandos. Cada lenguaje obtuvo soporte de primera clase para JSON en su biblioteca estÃ¡ndar.',
            },
          ],
        },
        {
          heading: 'Donde JSON se queda corto',
          blocks: [
            {
              type: 'p',
              html: 'JSON no es perfecto. No admite comentarios, lo que lo hace menos ideal para archivos de configuraciÃ³n (YAML es mejor allÃ­). No tiene aplicaciÃ³n de esquema integrada (aunque JSON Schema cubre esta brecha). Y el JSON profundamente anidado puede ser difÃ­cil de leer. Pero para su caso de uso principal - el intercambio de datos entre servicios web - JSON sigue siendo la herramienta adecuada.',
            },
          ],
        },
        {
          heading: 'El veredicto',
          blocks: [
            {
              type: 'p',
              html: 'JSON ganÃ³ porque era simple, rÃ¡pido y ya estaba presente en el navegador. NingÃºn comitÃ© lo diseÃ±Ã³ para ser universal - se ganÃ³ ese estatus por su utilidad prÃ¡ctica. Veinte aÃ±os despuÃ©s, es difÃ­cil imaginar la web sin Ã©l. Si trabajas con datos JSON, prueba nuestro <a href="/json-to-csv-converter">conversor de JSON a CSV</a> o nuestro <a href="/json-to-excel-converter">conversor de JSON a Excel</a>.',
            },
          ],
        },
      ],
    },
    'excel-formulas-to-csv': {
      meta: {
        title: 'Manejo de fÃ³rmulas de Excel al convertir a CSV',
        description:
          'Â¿QuÃ© sucede con las fÃ³rmulas de Excel, el formato condicional y las macros cuando conviertes a CSV plano? Todo lo que necesitas saber.',
        keywords: 'fÃ³rmulas de excel a csv, convertir fÃ³rmulas de excel, xlsx a csv fÃ³rmulas, evaluaciÃ³n de fÃ³rmulas',
      },
      h1: 'Manejo de fÃ³rmulas de Excel al convertir a CSV',
      breadcrumbs: [
        { name: 'Inicio', url: '/' },
        { name: 'Blog', url: '/blog' },
        { name: 'FÃ³rmulas de Excel a CSV', url: '/blog/excel-formulas-to-csv' },
      ],
      dateISO: '2026-03-02',
      dateDisplay: '2 de marzo de 2026',
      byline: 'por Naim Biswas',
      heroImg: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=400&fit=crop',
      heroAlt: 'Espacio de trabajo moderno con portÃ¡til',
      intro:
        'Los archivos de Excel estÃ¡n vivos - las celdas contienen fÃ³rmulas que hacen referencia a otras celdas, realizan cÃ¡lculos y se actualizan dinÃ¡micamente. Los archivos CSV son estÃ¡ticos - solo almacenan valores, no lÃ³gica. Convertir Excel a CSV significa decidir quÃ© hacer con esas fÃ³rmulas. Esto es lo que sucede y lo que debes tener en cuenta.',
      sections: [
        {
          heading: 'Las fÃ³rmulas se convierten en valores',
          blocks: [
            {
              type: 'p',
              html: 'Cuando <a href="/excel-to-csv-converter">conviertes una hoja de Excel a CSV</a>, cada fÃ³rmula se evalÃºa a su valor actual antes de la exportaciÃ³n. Una celda que contiene <code>=SUM(A1:A10)</code> se convierte en la suma real, como <code>45000</code>. Esto es casi siempre lo que quieres - CSV no puede representar fÃ³rmulas, asÃ­ que lo siguiente mejor es el resultado calculado.',
            },
            {
              type: 'p',
              html: 'Sin embargo, esto significa que la salida es una instantÃ¡nea. Si los datos fuente cambian mÃ¡s tarde, el CSV no se actualizarÃ¡. La lÃ³gica de la fÃ³rmula se pierde. Si necesitas conservar la lÃ³gica de cÃ¡lculo, mantÃ©n el archivo .xlsx original como fuente de verdad y regenera el CSV cuando sea necesario.',
            },
          ],
        },
        {
          heading: 'Funciones volÃ¡tiles',
          blocks: [
            {
              type: 'p',
              html: 'Algunas funciones de Excel son volÃ¡tiles - se recalculan cada vez que se abre la hoja. <code>=NOW()</code>, <code>=TODAY()</code>, <code>=RAND()</code> y <code>=RANDBETWEEN()</code> producen valores distintos en cada recÃ¡lculo. Cuando conviertes a CSV, se captura el valor en el momento de la conversiÃ³n. Una celda con <code>=TODAY()</code> se convierte en <code>2026-03-02</code> - una fecha estÃ¡tica que nunca cambiarÃ¡.',
            },
          ],
        },
        {
          heading: 'Referencias circulares y errores',
          blocks: [
            {
              type: 'p',
              html: 'Las fÃ³rmulas que producen errores (<code>#DIV/0!</code>, <code>#VALUE!</code>, <code>#REF!</code>) se exportarÃ¡n como valores de error en la mayorÃ­a de los conversores. Limpia los errores de fÃ³rmula antes de la conversiÃ³n, o el CSV resultante contendrÃ¡ texto de error que los sistemas posteriores pueden no manejar con elegancia.',
            },
            {
              type: 'p',
              html: 'Las referencias circulares (donde una fÃ³rmula se refiere a su propia celda) pueden no evaluarse en absoluto, produciendo un cero o un error segÃºn la configuraciÃ³n de Excel. ResuÃ©lvelas antes de convertir.',
            },
          ],
        },
        {
          heading: 'Formato condicional',
          blocks: [
            {
              type: 'p',
              html: 'El formato condicional - celdas que cambian de color segÃºn sus valores - se pierde por completo en la conversiÃ³n a CSV. CSV no tiene concepto de estilo de celda. Si la codificaciÃ³n de colores transmite informaciÃ³n importante (p. ej., rojo para cuentas vencidas), aÃ±ade una columna de estado separada que etiquete explÃ­citamente la condiciÃ³n. Por ejemplo, aÃ±ade una columna llamada <code>status</code> con valores <code>overdue</code> o <code>current</code> segÃºn la misma lÃ³gica.',
            },
          ],
        },
        {
          heading: 'Macros y VBA',
          blocks: [
            {
              type: 'p',
              html: 'Las macros de Excel (cÃ³digo VBA) se eliminan durante la conversiÃ³n a CSV. Las macros operan sobre el propio libro - automatizando tareas, transformando datos, interactuando con sistemas externos. Ninguna de esta lÃ³gica se traslada a CSV. Si tu flujo de trabajo depende de macros, ejecÃºtalas antes de convertir, para que los datos resultantes reflejen el estado posterior a la macro.',
            },
          ],
        },
        {
          heading: 'ValidaciÃ³n de datos',
          blocks: [
            {
              type: 'p',
              html: 'Las reglas de validaciÃ³n de datos de Excel (listas desplegables, rangos numÃ©ricos, restricciones de fecha) tambiÃ©n se pierden. Una celda que solo permitÃ­a valores entre 1 y 100 ahora puede contener cualquier cosa en el CSV. La validaciÃ³n era una restricciÃ³n de interfaz en Excel - nunca fue parte de los datos en sÃ­.',
            },
          ],
        },
        {
          heading: 'Mejor prÃ¡ctica',
          blocks: [
            {
              type: 'p',
              html: 'Revisa siempre tu libro de Excel antes de la conversiÃ³n. Identifica las celdas que dependen de fÃ³rmulas y verifica que los valores calculados sean correctos. AÃ±ade columnas explÃ­citas para cualquier lÃ³gica que de otro modo serÃ­a invisible. Trata la conversiÃ³n como una instantÃ¡nea - el CSV es un registro fiel de los datos en un momento dado, no un documento vivo.',
            },
          ],
        },
      ],
    },
    'data-migration-strategies': {
      meta: {
        title: 'Estrategias de migraciÃ³n de datos: de hojas de cÃ¡lculo a bases de datos',
        description:
          'Una guÃ­a para migrar datos de archivos Excel y CSV a bases de datos relacionales, almacenes NoSQL y almacenes de datos en la nube.',
        keywords: 'migraciÃ³n de datos, hoja de cÃ¡lculo a base de datos, excel a base de datos, csv importar base de datos',
      },
      h1: 'Estrategias de migraciÃ³n de datos: de hojas de cÃ¡lculo a bases de datos',
      breadcrumbs: [
        { name: 'Inicio', url: '/' },
        { name: 'Blog', url: '/blog' },
        { name: 'Estrategias de migraciÃ³n de datos', url: '/blog/data-migration-strategies' },
      ],
      dateISO: '2026-02-28',
      dateDisplay: '28 de febrero de 2026',
      byline: 'por Naim Biswas',
      heroImg: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&h=400&fit=crop',
      heroAlt: 'Servidor de datos con luces parpadeantes',
      intro:
        'Todo negocio en crecimiento llega a un punto donde las hojas de cÃ¡lculo ya no son suficientes. Listas de clientes, registros de inventario y datos financieros superan los lÃ­mites de Excel. Mover esos datos a una base de datos adecuada es un paso crÃ­tico - pero la migraciÃ³n estÃ¡ llena de trampas. AquÃ­ tienes un enfoque estructurado.',
      sections: [
        {
          heading: 'Paso 1: Audita los datos fuente',
          blocks: [
            {
              type: 'p',
              html: 'Antes de escribir cualquier script de importaciÃ³n, entiende con quÃ© estÃ¡s trabajando. Abre la hoja de cÃ¡lculo y comprueba si hay celdas combinadas, tipos de columna inconsistentes, filas vacÃ­as y formatos de fecha no estÃ¡ndar. Documenta cada columna: su nombre, tipo de datos, valores permitidos y si puede ser null. Esta auditorÃ­a se convierte en tu plano de esquema.',
            },
          ],
        },
        {
          heading: 'Paso 2: DiseÃ±a el esquema objetivo',
          blocks: [
            {
              type: 'p',
              html: 'Las hojas de cÃ¡lculo son planas; las bases de datos estÃ¡n normalizadas. Una sola hoja con columnas para nombre de cliente, fecha de pedido y nombre de producto puede necesitar convertirse en tres tablas: <code>customers</code>, <code>products</code> y <code>orders</code>. Identifica las claves primarias, las relaciones de clave forÃ¡nea y las restricciones antes de importar. Resiste la tentaciÃ³n de importar la hoja como una sola tabla - eso va contra el propÃ³sito de usar una base de datos.',
            },
          ],
        },
        {
          heading: 'Paso 3: Convierte a CSV',
          blocks: [
            {
              type: 'p',
              html: 'CSV es el formato de importaciÃ³n universal para bases de datos. La mayorÃ­a de los sistemas de bases de datos (PostgreSQL, MySQL, SQLite, SQL Server) tienen comandos integrados para la importaciÃ³n masiva de CSV: <code>COPY</code>, <code>LOAD DATA INFILE</code> o <code>BULK INSERT</code>. Convierte cada hoja a CSV usando <a href="/excel-to-csv-converter">una herramienta como esta</a>. AsegÃºrate de que la salida CSV use codificaciÃ³n UTF-8 y comillas consistentes.',
            },
          ],
        },
        {
          heading: 'Paso 4: Importa y valida',
          blocks: [
            {
              type: 'p',
              html: 'Importa el CSV a una tabla de preparaciÃ³n (una copia temporal de la estructura de la tabla objetivo). Esto te permite ejecutar consultas de validaciÃ³n antes de mover los datos al esquema de producciÃ³n. Comprueba lo siguiente:',
            },
            {
              type: 'ul',
              items: [
                'Filas que no se importaron (incompatibilidades de tipo, violaciones de restricciones)',
                'Registros duplicados que deben fusionarse',
                'Valores null en columnas que no deberÃ­an ser null',
                'Integridad referencial - valores de clave forÃ¡nea que no existen en las tablas padre',
              ],
            },
          ],
        },
        {
          heading: 'Paso 5: Transforma y carga',
          blocks: [
            {
              type: 'p',
              html: 'Una vez que los datos de preparaciÃ³n pasan la validaciÃ³n, ejecuta tus consultas de transformaciÃ³n: normaliza columnas planas en tablas relacionadas, convierte tipos, genera claves sustitutas y aplica reglas de negocio. Luego inserta los datos limpios en las tablas de producciÃ³n. Lo mejor es hacerlo como una transacciÃ³n - si algo falla, revierte toda la operaciÃ³n.',
            },
          ],
        },
        {
          heading: 'Paso 6: Verifica y desmantela',
          blocks: [
            {
              type: 'p',
              html: 'DespuÃ©s de la migraciÃ³n, ejecuta consultas de conciliaciÃ³n. Compara los recuentos de registros, suma las columnas numÃ©ricas y comprueba registros individuales al azar entre la hoja de cÃ¡lculo fuente y la base de datos. Una vez que estÃ©s seguro de que los datos coinciden, archiva la hoja de cÃ¡lculo y actualiza tus fuentes de datos para que apunten a la base de datos.',
            },
          ],
        },
        {
          heading: 'Errores comunes',
          blocks: [
            {
              type: 'ul',
              items: [
                '<strong>Problemas de codificaciÃ³n:</strong> Los archivos de Excel pueden usar codificaciÃ³n Windows-1252. Convierte a UTF-8 antes de importar.',
                '<strong>Archivos grandes:</strong> Las hojas de cÃ¡lculo de mÃ¡s de 100 MB pueden necesitar importaciÃ³n por partes. Divide el CSV en lotes de 10.000 filas.',
                '<strong>Formatos de fecha:</strong> Las fechas seriales de Excel (como 45000) necesitan conversiÃ³n a ISO 8601. Hazlo durante el paso de transformaciÃ³n.',
              ],
            },
          ],
        },
        {
          heading: 'Resumen',
          blocks: [
            {
              type: 'p',
              html: 'La migraciÃ³n de hojas de cÃ¡lculo a bases de datos es un proceso de varios pasos que recompensa la planificaciÃ³n cuidadosa. Audita primero, diseÃ±a el esquema, convierte a CSV, valida en preparaciÃ³n y luego carga. Omite cualquier paso y estarÃ¡s depurando problemas de datos durante semanas.',
            },
          ],
        },
      ],
    },
    'large-file-conversion': {
      meta: {
        title: 'CÃ³mo manejar conversiones de archivos grandes sin perder datos',
        description:
          'Consejos para convertir conjuntos de datos grandes - gestiÃ³n de memoria, estrategias de fragmentaciÃ³n y quÃ© vigilar con archivos de mÃ¡s de 10 MB.',
        keywords: 'conversiÃ³n de archivos grandes, convertir datos grandes, csv json grande, conversiÃ³n eficiente en memoria',
      },
      h1: 'CÃ³mo manejar conversiones de archivos grandes sin perder datos',
      breadcrumbs: [
        { name: 'Inicio', url: '/' },
        { name: 'Blog', url: '/blog' },
        { name: 'ConversiÃ³n de archivos grandes', url: '/blog/large-file-conversion' },
      ],
      dateISO: '2026-02-25',
      dateDisplay: '25 de febrero de 2026',
      byline: 'por Naim Biswas',
      heroImg: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=400&fit=crop',
      heroAlt: 'Editor de cÃ³digo en una pantalla de computadora',
      intro:
        'Convertir un archivo JSON de 1 KB a CSV es trivial. Convertir una exportaciÃ³n de base de datos de 200 MB con un millÃ³n de filas es un problema completamente distinto. Las conversiones de archivos grandes tensionan los lÃ­mites de memoria, el rendimiento del navegador y la integridad de los datos. AsÃ­ es como manejarlos de forma segura.',
      sections: [
        {
          heading: 'Comprende tus limitaciones',
          blocks: [
            {
              type: 'p',
              html: 'Las herramientas basadas en navegador como <a href="/">Data Converter</a> se ejecutan en un sandbox con memoria limitada. Una pestaÃ±a tÃ­pica del navegador tiene de 500 MB a 2 GB de memoria disponible segÃºn el dispositivo y el navegador. Si tu archivo pesa 100 MB, cargarlo por completo en memoria deja menos espacio para la salida procesada y las estructuras de datos internas del conversor. Conoce tus lÃ­mites antes de empezar.',
            },
            {
              type: 'p',
              html: 'Las herramientas del lado del servidor tienen sus propias limitaciones - lÃ­mites de memoria en el hosting compartido, tiempos de espera de solicitudes y restricciones de tamaÃ±o de carga. Esta herramienta procesa todo en tu navegador, lo que significa que no hay tiempos de espera del servidor pero tampoco memoria de nivel servidor.',
            },
          ],
        },
        {
          heading: 'TransmisiÃ³n por flujo vs. carga',
          blocks: [
            {
              type: 'p',
              html: 'La mejor estrategia para archivos grandes es la transmisiÃ³n por flujo - procesar los datos por partes a medida que se cargan, en lugar de leer todo el archivo en memoria de una vez. Para matrices CSV y JSON, el conversor puede procesar fila por fila o fragmento por fragmento, escribiendo cada fila transformada en la salida antes de leer la siguiente. Esto mantiene el uso de memoria proporcional al tamaÃ±o del fragmento, no al del archivo.',
            },
            {
              type: 'p',
              html: 'Busca conversores que admitan transmisiÃ³n por flujo para archivos grandes. Si la herramienta muestra una barra de progreso, es probable que estÃ© procesando de forma incremental - eso es una buena seÃ±al.',
            },
          ],
        },
        {
          heading: 'Divide y vencerÃ¡s',
          blocks: [
            {
              type: 'p',
              html: 'Si un archivo es demasiado grande para tu conversor, divÃ­delo en partes mÃ¡s pequeÃ±as. Para archivos CSV, la mayorÃ­a de los editores de texto o herramientas de lÃ­nea de comandos pueden dividir por recuento de filas (p. ej., 50.000 filas por archivo). Convierte cada parte por separado y luego concatena las salidas. Para matrices JSON, divide la matriz en varios archivos en lÃ­mites naturales.',
            },
            {
              type: 'p',
              html: 'Este enfoque es manual pero fiable - ninguna conversiÃ³n individual supera los lÃ­mites de memoria y, si un fragmento falla, solo ese fragmento debe reintentarse.',
            },
          ],
        },
        {
          heading: 'Vigila estos problemas',
          blocks: [
            {
              type: 'ul',
              items: [
                '<strong>DetecciÃ³n de codificaciÃ³n:</strong> Los archivos grandes pueden mezclar codificaciones. AsegÃºrate de que el conversor detecte la codificaciÃ³n correctamente desde el principio - un archivo de 100 MB mal detectado produce una salida completamente distorsionada.',
                '<strong>Saltos de lÃ­nea en los campos:</strong> Los campos CSV pueden contener saltos de lÃ­nea si estÃ¡n entre comillas. Un divisor ingenuo lÃ­nea por lÃ­nea puede romper un campo entre comillas a travÃ©s de fragmentos. Usa un analizador que entienda las comillas de CSV.',
                '<strong>RetroalimentaciÃ³n de progreso:</strong> Sin retroalimentaciÃ³n visual, un navegador bloqueado parece roto. Los buenos conversores muestran el progreso para operaciones grandes.',
                '<strong>Fugas de memoria:</strong> Las conversiones repetidas en la misma sesiÃ³n pueden acumular memoria. Recarga la pÃ¡gina entre conversiones grandes para empezar de cero.',
              ],
            },
          ],
        },
        {
          heading: 'Consejos especÃ­ficos para navegadores',
          blocks: [
            {
              type: 'p',
              html: 'Chrome y Edge (ambos basados en Chromium) manejan archivos grandes mejor que Safari o Firefox gracias a una gestiÃ³n de memoria mÃ¡s agresiva. Si alcanzas los lÃ­mites constantemente, prueba con un navegador Chromium. AdemÃ¡s, cierra otras pestaÃ±as antes de iniciar una conversiÃ³n grande - cada pestaÃ±a abierta consume memoria que el conversor podrÃ­a usar.',
            },
          ],
        },
        {
          heading: 'CuÃ¡ndo usar una herramienta de escritorio',
          blocks: [
            {
              type: 'p',
              html: 'Para archivos de mÃ¡s de 500 MB o conjuntos de datos con mÃ¡s de 5 millones de filas, considera una herramienta de escritorio o utilidad de lÃ­nea de comandos. La biblioteca pandas de Python, herramientas de lÃ­nea de comandos como <code>jq</code> (para JSON) y <code>csvkit</code> (para CSV), o las herramientas de exportaciÃ³n nativas de bases de datos manejan archivos de cualquier tamaÃ±o sin los lÃ­mites de memoria del navegador. Usa conversores basados en navegador para tareas cotidianas y herramientas de escritorio para los trabajos realmente grandes.',
            },
          ],
        },
        {
          heading: 'Resumen',
          blocks: [
            {
              type: 'p',
              html: 'La conversiÃ³n de archivos grandes es un problema de gestiÃ³n de memoria. Transmite por flujo cuando sea posible, divide cuando sea necesario y verifica siempre que la salida coincida con la entrada en el recuento de registros. Algunas precauciones evitan la pÃ©rdida de datos y el tiempo desperdiciado.',
            },
          ],
        },
      ],
    },
  },
};
