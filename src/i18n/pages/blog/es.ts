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
    title: 'JSON a CSV: Mejores prácticas para datos anidados',
    desc: 'Aprende a manejar JSON profundamente anidado al convertirlo a CSV. Estrategias prácticas para aplanar, nombrar claves y preservar los datos.',
    dateISO: '2026-03-20',
    dateDisplay: '20 de marzo de 2026',
    img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=240&fit=crop',
    heroImg: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop',
    heroAlt: 'Código en una pantalla de computadora',
  },
  'csv-to-json-tutorial': {
    title: 'Cómo convertir CSV a JSON: un tutorial completo',
    desc: 'Una guía paso a paso para convertir CSV a JSON. Cubre la inferencia de tipos, el mapeo de encabezados y el manejo de casos límite como celdas vacías.',
    dateISO: '2026-03-18',
    dateDisplay: '18 de marzo de 2026',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=240&fit=crop',
    heroImg: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
    heroAlt: 'Panel de análisis de datos en una pantalla',
  },
  'excel-vs-csv': {
    title: 'Excel vs CSV: cuándo usar cada formato',
    desc: 'Excel y CSV cumplen propósitos distintos. Aquí tienes cuándo quedarte con las hojas de cálculo y cuándo el CSV simple es la mejor opción.',
    dateISO: '2026-03-15',
    dateDisplay: '15 de marzo de 2026',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=240&fit=crop',
    heroImg: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=400&fit=crop',
    heroAlt: 'Portátil sobre un escritorio de madera',
  },
  'json-vs-xml-vs-yaml': {
    title: 'JSON vs XML vs YAML: cómo elegir el formato de datos correcto',
    desc: 'Una comparación práctica de JSON, XML y YAML. Aprende qué formato se adapta a tu proyecto según la legibilidad, el tamaño y las herramientas.',
    dateISO: '2026-03-12',
    dateDisplay: '12 de marzo de 2026',
    img: 'https://images.unsplash.com/photo-1555421689-d68471e189f2?w=400&h=240&fit=crop',
    heroImg: 'https://images.unsplash.com/photo-1555421689-d68471e189f2?w=800&h=400&fit=crop',
    heroAlt: 'Panel de análisis con números',
  },
  'data-cleaning-tips': {
    title: '5 consejos de limpieza de datos antes de convertir hojas de cálculo',
    desc: 'Los datos limpios se convierten mejor. Cinco consejos prácticos para preparar tus hojas de cálculo antes de convertirlas a JSON, CSV u otros formatos.',
    dateISO: '2026-03-10',
    dateDisplay: '10 de marzo de 2026',
    img: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=240&fit=crop',
    heroImg: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=400&fit=crop',
    heroAlt: 'Cuaderno y bolígrafo sobre un escritorio',
  },
  'why-json-is-popular': {
    title: 'Por qué JSON se convirtió en el formato de datos universal para las APIs web',
    desc: 'Un análisis de las decisiones de diseño y los factores del ecosistema que convirtieron a JSON en el formato de datos predeterminado para las APIs web modernas.',
    dateISO: '2026-03-05',
    dateDisplay: '5 de marzo de 2026',
    img: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=240&fit=crop',
    heroImg: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=400&fit=crop',
    heroAlt: 'Rack de servidores con cables de red',
  },
  'excel-formulas-to-csv': {
    title: 'Manejo de fórmulas de Excel al convertir a CSV',
    desc: '¿Qué sucede con las fórmulas de Excel, el formato condicional y las macros cuando conviertes a CSV plano? Todo lo que necesitas saber.',
    dateISO: '2026-03-02',
    dateDisplay: '2 de marzo de 2026',
    img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=240&fit=crop',
    heroImg: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=400&fit=crop',
    heroAlt: 'Espacio de trabajo moderno con portátil',
  },
  'data-migration-strategies': {
    title: 'Estrategias de migración de datos: de hojas de cálculo a bases de datos',
    desc: 'Una guía para migrar datos de archivos Excel y CSV a bases de datos relacionales, almacenes NoSQL y almacenes de datos en la nube.',
    dateISO: '2026-02-28',
    dateDisplay: '28 de febrero de 2026',
    img: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=400&h=240&fit=crop',
    heroImg: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&h=400&fit=crop',
    heroAlt: 'Servidor de datos con luces parpadeantes',
  },
  'large-file-conversion': {
    title: 'Cómo manejar conversiones de archivos grandes sin perder datos',
    desc: 'Consejos para convertir conjuntos de datos grandes — gestión de memoria, estrategias de fragmentación y qué vigilar con archivos de más de 10 MB.',
    dateISO: '2026-02-25',
    dateDisplay: '25 de febrero de 2026',
    img: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=400&h=240&fit=crop',
    heroImg: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=400&fit=crop',
    heroAlt: 'Editor de código en una pantalla de computadora',
  },
} satisfies Record<BlogSlug, BlogCardData>;

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
        'Artículos y guías sobre conversión de datos, JSON, CSV, Excel y consejos de procesamiento de datos.',
      keywords: 'blog de conversión de datos, consejos json, guía csv, excel a json, procesamiento de datos',
    },
    h1: 'Blog',
    subtitle: 'Consejos, guías y análisis a fondo sobre conversión y procesamiento de datos.',
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
        title: 'JSON a CSV: Mejores prácticas para datos anidados',
        description:
          'Aprende a manejar JSON profundamente anidado al convertirlo a CSV. Estrategias prácticas para aplanar, nombrar claves y preservar los datos.',
        keywords: 'json a csv anidado, aplanar json, mejores prácticas json anidado',
      },
      h1: 'JSON a CSV: Mejores prácticas para datos anidados',
      breadcrumbs: [
        { name: 'Inicio', url: '/' },
        { name: 'Blog', url: '/blog' },
        { name: 'Mejores prácticas de JSON a CSV', url: '/blog/json-to-csv-best-practices' },
      ],
      dateISO: '2026-03-20',
      dateDisplay: '20 de marzo de 2026',
      byline: 'por Naim Biswas',
      heroImg: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop',
      heroAlt: 'Código en una pantalla de computadora',
      intro:
        'Convertir JSON a CSV es sencillo cuando tus datos son planos — una matriz de objetos con las mismas claves. Pero el JSON del mundo real rara vez es tan simple. Las APIs devuelven objetos anidados, matrices de longitud variable y tipos de datos mixtos. Así es como se manejan esos casos sin perder información.',
      sections: [
        {
          heading: 'El problema del aplanado',
          blocks: [
            {
              type: 'p',
              html: 'CSV es un formato plano: cada fila tiene el mismo conjunto de columnas. JSON puede anidarse arbitrariamente. El enfoque estándar es aplanar las claves usando un separador. Por ejemplo:',
            },
            {
              type: 'p',
              html: '<code>&lbrace;"user": &lbrace;"name": "Alice", "address": &lbrace;"city": "NYC"&rbrace;&rbrace;&rbrace;</code>',
            },
            {
              type: 'p',
              html: 'se convierte en las columnas <code>user_name</code> y <code>user_address_city</code>. El guion bajo como separador es una convención, pero la consistencia importa más que la elección del carácter. Algunas herramientas usan puntos (<code>user.address.city</code>) o corchetes (<code>user[address][city]</code>).',
            },
          ],
        },
        {
          heading: 'Manejo de matrices dentro de objetos',
          blocks: [
            {
              type: 'p',
              html: 'Las matrices son la parte más complicada. Cuando un objeto contiene una matriz de primitivos (como <code>"tags": ["red", "blue", "green"]</code>), el enfoque habitual es unirlos con un delimitador — los puntos y comas funcionan bien ya que CSV ya usa comas. Esto mantiene intacta cada fila padre.',
            },
            {
              type: 'p',
              html: 'Cuando un objeto contiene una matriz de objetos (como <code>"orders": [&lbrace;"id": 1&rbrace;, &lbrace;"id": 2&rbrace;]</code>), tienes dos opciones: expandir cada objeto anidado en su propia fila (repitiendo los datos del padre), o mantenerlos como una cadena JSON en una sola celda. La elección correcta depende de tu caso de uso posterior.',
            },
          ],
        },
        {
          heading: 'Inferencia de tipos',
          blocks: [
            {
              type: 'p',
              html: 'CSV es solo texto, pero la mayoría de las aplicaciones de hojas de cálculo infieren tipos al abrir un archivo. El conversor debe generar números sin comillas (<code>42</code> y no <code>"42"</code>), booleanos como <code>true</code>/<code>false</code> y fechas en un formato consistente como ISO 8601 (<code>2026-03-20</code>). Esto permite que Excel y Google Sheets apliquen los tipos de columna correctos automáticamente.',
            },
          ],
        },
        {
          heading: 'Convenciones de nomenclatura de claves',
          blocks: [
            {
              type: 'p',
              html: 'Usa minúsculas con guiones bajos para las claves aplanadas. Evita caracteres especiales, espacios o dígitos iniciales. Esto garantiza que el CSV resultante se importe correctamente en bases de datos y herramientas de análisis sin necesidad de renombrar columnas manualmente.',
            },
          ],
        },
        {
          heading: 'Valores vacíos y ausentes',
          blocks: [
            {
              type: 'p',
              html: 'No todos los objetos JSON tendrán todas las claves. Decide de antemano cómo manejar los valores ausentes: cadenas vacías, <code>null</code> u omitir la celda. La opción más segura para la mayoría de las bases de datos es generar una celda vacía, que la mayoría de las herramientas de importación interpretan como NULL.',
            },
          ],
        },
        {
          heading: 'Resumen',
          blocks: [
            {
              type: 'p',
              html: 'La conversión de JSON anidado a CSV es un problema de mapeo. Elige un separador consistente para las claves, decide cómo aplanar las matrices y mantén tipos limpios. Un buen conversor maneja todo esto automáticamente — que es exactamente lo que hace esta herramienta.',
            },
          ],
        },
      ],
    },
    'csv-to-json-tutorial': {
      meta: {
        title: 'Cómo convertir CSV a JSON: un tutorial completo',
        description:
          'Una guía paso a paso para convertir CSV a JSON. Cubre la inferencia de tipos, el mapeo de encabezados y el manejo de casos límite como celdas vacías.',
        keywords: 'tutorial csv a json, convertir csv a json, guía csv a json',
      },
      h1: 'Cómo convertir CSV a JSON: un tutorial completo',
      breadcrumbs: [
        { name: 'Inicio', url: '/' },
        { name: 'Blog', url: '/blog' },
        { name: 'Tutorial de CSV a JSON', url: '/blog/csv-to-json-tutorial' },
      ],
      dateISO: '2026-03-18',
      dateDisplay: '18 de marzo de 2026',
      byline: 'por Naim Biswas',
      heroImg: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
      heroAlt: 'Panel de análisis de datos en una pantalla',
      intro:
        'CSV es el formato más común para exportar datos de hojas de cálculo y bases de datos. JSON es lo que las aplicaciones web y las APIs usan de forma nativa. Convertir entre ambos es una tarea habitual para desarrolladores, analistas de datos y cualquiera que mueva datos entre sistemas.',
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
              html: 'Un buen conversor de CSV a JSON no trata todo como texto. Números como <code>30</code> deben convertirse en números JSON, no en cadenas entre comillas. <code>true</code> y <code>false</code> deben convertirse en booleanos JSON. Las fechas deben permanecer en un formato analizable. Esto es crítico cuando la salida JSON se alimenta directamente a una API o base de datos — no quieres convertir tipos en el extremo receptor.',
            },
          ],
        },
        {
          heading: 'Manejo de casos límite',
          blocks: [
            {
              type: 'p',
              html: '<strong>Celdas vacías:</strong> Una celda CSV sin valor debe convertirse en <code>null</code> en JSON, no en una cadena vacía <code>""</code>. Esta distinción importa para la integridad de los datos — null significa &ldquo;sin valor,&rdquo; mientras que una cadena vacía significa &ldquo;el valor está vacío.&rdquo;',
            },
            {
              type: 'p',
              html: '<strong>Campos entre comillas:</strong> Los valores CSV que contienen comas, saltos de línea o comillas se envuelven entre comillas dobles. Un conversor robusto maneja esto correctamente para que una celda como <code>"Smith, John"</code> permanezca como un solo campo en lugar de dividirse.',
            },
            {
              type: 'p',
              html: '<strong>Espacios en los encabezados:</strong> Los encabezados de columna con espacios iniciales o finales deben recortarse automáticamente. <code>" name "</code> debe convertirse en <code>"name"</code> como clave JSON.',
            },
          ],
        },
        {
          heading: 'Formatos de salida',
          blocks: [
            {
              type: 'p',
              html: 'La mayoría de las herramientas generan JSON como una matriz de objetos, que es el formato más útil para APIs y bases de datos. Algunas herramientas ofrecen una opción de matriz de matrices (sin encabezados como claves), que es más compacta pero menos legible. Elige el formato que se ajuste a tu caso de uso.',
            },
          ],
        },
        {
          heading: 'Errores comunes',
          blocks: [
            {
              type: 'ul',
              items: [
                '<strong>Olvidar la codificación:</strong> Los archivos CSV pueden usar distintas codificaciones de caracteres (UTF-8, Latin-1). Asegúrate de que tu herramienta maneje UTF-8 correctamente, especialmente si tus datos contienen acentos o caracteres especiales.',
                '<strong>Delimitadores incompatibles:</strong> No todos los archivos CSV usan comas. Algunos usan tabulaciones (TSV), puntos y comas o barras verticales. El conversor debe detectar automáticamente el delimitador o permitirte especificarlo.',
                '<strong>Archivos grandes sin transmisión por flujo:</strong> Los conversores basados en la web deben manejar archivos grandes sin congelar el navegador. Busca herramientas que procesen los datos por partes.',
              ],
            },
          ],
        },
        {
          heading: 'Resumen',
          blocks: [
            {
              type: 'p',
              html: 'La conversión de CSV a JSON es una transformación bien definida, pero la calidad de la salida depende de cómo maneje la herramienta los tipos, los casos límite y la codificación. Un buen conversor hace lo correcto automáticamente para que puedas centrarte en usar los datos, no en depurarlos.',
            },
          ],
        },
      ],
    },
    'excel-vs-csv': {
      meta: {
        title: 'Excel vs CSV: cuándo usar cada formato',
        description:
          'Excel y CSV cumplen propósitos distintos. Aquí tienes cuándo quedarte con las hojas de cálculo y cuándo el CSV simple es la mejor opción.',
        keywords: 'excel vs csv, xlsx vs csv, formatos de hoja de cálculo, cuándo usar csv',
      },
      h1: 'Excel vs CSV: cuándo usar cada formato',
      breadcrumbs: [
        { name: 'Inicio', url: '/' },
        { name: 'Blog', url: '/blog' },
        { name: 'Excel vs CSV', url: '/blog/excel-vs-csv' },
      ],
      dateISO: '2026-03-15',
      dateDisplay: '15 de marzo de 2026',
      byline: 'por Naim Biswas',
      heroImg: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=400&fit=crop',
      heroAlt: 'Portátil sobre un escritorio de madera',
      intro:
        'Excel (.xlsx) y CSV (.csv) son los dos formatos más comunes para datos tabulares, pero cumplen propósitos fundamentalmente distintos. Elegir el correcto depende de quién necesita los datos y qué necesita hacer con ellos.',
      sections: [
        {
          heading: 'Lo que te ofrece Excel',
          blocks: [
            {
              type: 'p',
              html: 'Los archivos de Excel son documentos ricos. Pueden contener múltiples hojas, formato de celdas (colores, fuentes, bordes), celdas combinadas, fórmulas, gráficos, tablas dinámicas, formato condicional, reglas de validación de datos y macros. Un libro de Excel está más cerca de una mini aplicación que de un simple archivo de datos.',
            },
            { type: 'p', html: 'Usa Excel cuando:' },
            {
              type: 'ul',
              items: [
                'Necesites formato y presentación visual',
                'Estés creando informes o paneles para lectores humanos',
                'Uses fórmulas que hagan referencia a otras celdas u hojas',
                'Necesites varias tablas relacionadas en un solo archivo',
                'Trabajes con interesados que esperan una hoja de cálculo pulida',
              ],
            },
          ],
        },
        {
          heading: 'Lo que te ofrece CSV',
          blocks: [
            {
              type: 'p',
              html: 'CSV es datos puros: filas y columnas de texto plano separadas por comas. Sin formato, sin fórmulas, sin macros. Solo los valores. Esta simplicidad es su superpoder — cada lenguaje de programación, base de datos y herramienta de datos puede leer y escribir CSV sin bibliotecas especiales.',
            },
            { type: 'p', html: 'Usa CSV cuando:' },
            {
              type: 'ul',
              items: [
                'Estés moviendo datos entre sistemas (importaciones/exportaciones de bases de datos, canalizaciones ETL)',
                'Estés procesando datos mediante programación (Python, R, JavaScript, etc.)',
                'Necesites control de versiones — los archivos CSV se comparan limpiamente en git',
                'Quieras el tamaño de archivo más pequeño posible',
                'Estés publicando datos abiertos para que otros los descarguen y usen',
              ],
            },
          ],
        },
        {
          heading: 'La zona gris',
          blocks: [
            {
              type: 'p',
              html: 'Muchas herramientas difuminan la línea. Excel puede abrir archivos CSV y aplicar formato sobre la marcha. Google Sheets trata ambos formatos como nativos. Pero si guardas un archivo de Excel con formato como CSV, todo el formato se pierde — solo permanecen los valores de celda en bruto. Las fórmulas se evalúan a sus valores actuales, por lo que <code>=SUM(A1:A10)</code> se convierte en un número.',
            },
          ],
        },
        {
          heading: 'Conversión entre ambos',
          blocks: [
            {
              type: 'p',
              html: 'Convertir Excel a CSV elimina todo excepto los datos. Esto es útil cuando necesitas migrar datos de una hoja de cálculo a una base de datos o herramienta de análisis. Convertir CSV a Excel añade una capa de contenedor — obtienes los mismos datos pero ahora se pueden abrir, formatear y compartir como una hoja de cálculo profesional.',
            },
          ],
        },
        {
          heading: '¿Cuál deberías usar?',
          blocks: [
            {
              type: 'p',
              html: 'Si te haces la pregunta, la respuesta suele ser CSV. CSV es el formato de intercambio — es lo que usas cuando los datos necesitan moverse. Excel es el formato de presentación — es lo que usas cuando los datos necesitan ser leídos por personas. Ambas son herramientas esenciales, y saber cuándo usar cada una ahorra tiempo y evita la pérdida de datos.',
            },
          ],
        },
      ],
    },
    'json-vs-xml-vs-yaml': {
      meta: {
        title: 'JSON vs XML vs YAML: cómo elegir el formato de datos correcto',
        description:
          'Una comparación práctica de JSON, XML y YAML. Aprende qué formato se adapta a tu proyecto según la legibilidad, el tamaño y las herramientas.',
        keywords: 'json vs xml vs yaml, comparación de formatos de datos, formatos de datos estructurados',
      },
      h1: 'JSON vs XML vs YAML: cómo elegir el formato de datos correcto',
      breadcrumbs: [
        { name: 'Inicio', url: '/' },
        { name: 'Blog', url: '/blog' },
        { name: 'JSON vs XML vs YAML', url: '/blog/json-vs-xml-vs-yaml' },
      ],
      dateISO: '2026-03-12',
      dateDisplay: '12 de marzo de 2026',
      byline: 'por Naim Biswas',
      heroImg: 'https://images.unsplash.com/photo-1555421689-d68471e189f2?w=800&h=400&fit=crop',
      heroAlt: 'Panel de análisis con números',
      intro:
        'JSON, XML y YAML son los tres formatos dominantes para datos estructurados. Cada uno tiene fortalezas y compensaciones. La elección correcta depende de tu caso de uso, tu ecosistema y quién leerá los datos.',
      sections: [
        {
          heading: 'JSON — el estándar web',
          blocks: [
            {
              type: 'p',
              html: 'JSON (JavaScript Object Notation) es el estándar de facto para las APIs web. Es ligero, admite de forma nativa objetos, matrices, cadenas, números, booleanos y null, y puede analizarse en cualquier lenguaje moderno sin dependencias externas. Su sintaxis es un subconjunto de JavaScript, por lo que el código frontend puede consumirlo directamente.',
            },
            {
              type: 'p',
              html: '<strong>Fortalezas:</strong> Rápido de analizar, compacto, soporte nativo en JavaScript, excelente para APIs y archivos de configuración.',
            },
            {
              type: 'p',
              html: '<strong>Debilidades:</strong> Sin comentarios, sin validación de esquema de serie (aunque existe JSON Schema), menos legible para estructuras profundamente anidadas.',
            },
            {
              type: 'p',
              html: '<strong>Ideal para:</strong> APIs REST, datos de aplicaciones web, archivos de configuración, intercambio de datos entre servicios.',
            },
          ],
        },
        {
          heading: 'XML — el veterano empresarial',
          blocks: [
            {
              type: 'p',
              html: 'XML (eXtensible Markup Language) existe desde finales de los años 90. Usa una sintaxis basada en etiquetas con atributos y espacios de nombres. XML es verboso pero extremadamente flexible — puedes representar casi cualquier estructura de datos, incluido contenido mixto (texto con elementos en línea).',
            },
            {
              type: 'p',
              html: '<strong>Fortalezas:</strong> Validación de esquema (XSD), espacios de nombres para evitar colisiones de nombres, XSLT para transformaciones, herramientas robustas en ecosistemas empresariales.',
            },
            {
              type: 'p',
              html: '<strong>Debilidades:</strong> Verboso, más lento de analizar, herramientas más complejas, tamaño de carga más pesado.',
            },
            {
              type: 'p',
              html: '<strong>Ideal para:</strong> Almacenamiento de documentos, APIs SOAP, sistemas empresariales heredados, formatos como SVG y RSS.',
            },
          ],
        },
        {
          heading: 'YAML — la opción amigable para humanos',
          blocks: [
            {
              type: 'p',
              html: 'YAML (YAML Ain\u2019t Markup Language) prioriza la legibilidad humana. Usa sangría en lugar de corchetes o etiquetas, lo que lo convierte en el más legible de los tres. También admite comentarios, cosa que JSON no hace.',
            },
            {
              type: 'p',
              html: '<strong>Fortalezas:</strong> Muy legible, admite comentarios, anclas y alias para reutilizar datos, ideal para archivos de configuración.',
            },
            {
              type: 'p',
              html: '<strong>Debilidades:</strong> Sensible a la sangría (puede causar errores sutiles), menos universal que JSON, más lento de analizar, especificación compleja.',
            },
            {
              type: 'p',
              html: '<strong>Ideal para:</strong> Archivos de configuración (Docker Compose, Kubernetes, canalizaciones CI/CD), datos que los humanos necesitan editar con frecuencia.',
            },
          ],
        },
        {
          heading: 'Conversión entre formatos',
          blocks: [
            {
              type: 'p',
              html: 'Las herramientas de datos modernas admiten los tres formatos. Convertir JSON a YAML hace más legibles los archivos de configuración. Convertir XML a JSON hace más fluida la integración de APIs. Convertir YAML a JSON permite analizarlo en entornos sin un analizador de YAML. El <a href="/">Data Converter</a> maneja todas estas conversiones — JSON, XML, YAML, CSV y Excel — en una sola interfaz.',
            },
          ],
        },
        {
          heading: '¿Cuál elegir?',
          blocks: [
            {
              type: 'p',
              html: 'Si estás construyendo un proyecto nuevo: usa JSON para APIs e intercambio de datos, YAML para archivos de configuración y XML solo si necesitas las funciones avanzadas (espacios de nombres, esquemas, XSLT) o trabajas en un ecosistema heredado. Ninguno de estos formatos va a desaparecer — coexisten por una buena razón.',
            },
          ],
        },
      ],
    },
    'data-cleaning-tips': {
      meta: {
        title: '5 consejos de limpieza de datos antes de convertir hojas de cálculo',
        description:
          'Los datos limpios se convierten mejor. Cinco consejos prácticos para preparar tus hojas de cálculo antes de convertirlas a JSON, CSV u otros formatos.',
        keywords: 'consejos de limpieza de datos, limpieza de hojas de cálculo, preparación de datos, convertir hojas de cálculo',
      },
      h1: '5 consejos de limpieza de datos antes de convertir hojas de cálculo',
      breadcrumbs: [
        { name: 'Inicio', url: '/' },
        { name: 'Blog', url: '/blog' },
        { name: 'Consejos de limpieza de datos', url: '/blog/data-cleaning-tips' },
      ],
      dateISO: '2026-03-10',
      dateDisplay: '10 de marzo de 2026',
      byline: 'por Naim Biswas',
      heroImg: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=400&fit=crop',
      heroAlt: 'Cuaderno y bolígrafo sobre un escritorio',
      intro:
        'Convertir una hoja de cálculo desordenada a <a href="/csv-to-json-converter">JSON o CSV</a> solo traslada el desorden a un nuevo formato. Unos minutos de limpieza antes de la conversión ahorran horas de depuración posteriores. Aquí tienes cinco consejos para dejar tus datos listos para la conversión.',
      sections: [
        {
          heading: '1. Estandariza tus encabezados',
          blocks: [
            {
              type: 'p',
              html: 'Los encabezados de columna se convierten en claves JSON o nombres de columna CSV. Los encabezados inconsistentes generan salidas inconsistentes. Usa nombres cortos y descriptivos sin espacios, caracteres especiales ni saltos de línea. Mantén minúsculas con guiones bajos o camelCase — <code>first_name</code> o <code>firstName</code>, pero elige una convención y aplícala en todas partes. Evita nombres de columna duplicados, que rompen por completo la salida JSON.',
            },
          ],
        },
        {
          heading: '2. Comprueba tipos de datos consistentes',
          blocks: [
            {
              type: 'p',
              html: 'Una columna llamada &ldquo;edad&rdquo; debe contener números en cada fila. Si algunas celdas contienen texto como &ldquo;N/A&rdquo; o &ldquo;desconocido,&rdquo; el conversor puede tratar la columna completa como cadenas. Estandariza los valores ausentes como celdas vacías en lugar de marcadores de texto. Para columnas de fecha, usa un único formato en todo el documento — ISO 8601 (<code>2026-03-10</code>) es la opción más segura porque ordena correctamente y no es ambiguo.',
            },
          ],
        },
        {
          heading: '3. Elimina las celdas combinadas',
          blocks: [
            {
              type: 'p',
              html: 'Las celdas combinadas son comunes en las hojas de cálculo para lectura humana pero causan problemas durante la conversión. Una celda combinada solo tiene valor en la celda superior izquierda; el resto aparecen vacías. Descombina todas las celdas antes de convertir y rellena el valor hacia abajo o a los lados según sea necesario. La mayoría de los conversores ya manejan esto automáticamente, pero es mejor tener datos fuente limpios.',
            },
          ],
        },
        {
          heading: '4. Elimina los espacios extra',
          blocks: [
            {
              type: 'p',
              html: 'Los espacios iniciales o finales en las celdas son invisibles en Excel pero se convierten en problemas visibles en los datos convertidos. Un valor como <code>"Alice "</code> (con un espacio final) producirá una cadena JSON distinta a <code>"Alice"</code>. Usa la función TRIM de Excel o una búsqueda y reemplazo rápida para eliminar los espacios extra de todas las celdas antes de la conversión.',
            },
          ],
        },
        {
          heading: '5. Maneja filas y columnas vacías',
          blocks: [
            {
              type: 'p',
              html: 'Las hojas de cálculo suelen tener cientos de filas vacías al final o columnas vacías que se usaban como espaciadores. Estas se convierten en valores null en JSON o campos vacíos en CSV, inflando la salida. Elimina cualquier fila o columna que no contenga datos antes de convertir. Una forma rápida de comprobarlo: selecciona todas las celdas, presiona Ctrl+Shift+End y verifica que el rango usado coincida con tus datos reales.',
            },
          ],
        },
        {
          heading: 'La recompensa',
          blocks: [
            {
              type: 'p',
              html: 'Estos cinco pasos toman diez minutos pero producen una salida mucho más limpia. Los datos fuente limpios significan integración más rápida, menos errores y menos posprocesamiento manual. Haz de la limpieza de datos parte de tu flujo de conversión — tu yo del futuro te lo agradecerá.',
            },
          ],
        },
      ],
    },
    'why-json-is-popular': {
      meta: {
        title: 'Por qué JSON se convirtió en el formato de datos universal para las APIs web',
        description:
          'Un análisis de las decisiones de diseño y los factores del ecosistema que convirtieron a JSON en el formato de datos predeterminado para las APIs web modernas.',
        keywords: 'popularidad de json, por qué json, json apis web, historia json vs xml',
      },
      h1: 'Por qué JSON se convirtió en el formato de datos universal para las APIs web',
      breadcrumbs: [
        { name: 'Inicio', url: '/' },
        { name: 'Blog', url: '/blog' },
        { name: 'Por qué JSON se volvió universal', url: '/blog/why-json-is-popular' },
      ],
      dateISO: '2026-03-05',
      dateDisplay: '5 de marzo de 2026',
      byline: 'por Naim Biswas',
      heroImg: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=400&fit=crop',
      heroAlt: 'Rack de servidores con cables de red',
      intro:
        'A principios de los años 2000, XML era el rey indiscutible del intercambio de datos web. Las APIs SOAP, los feeds RSS y los archivos de configuración usaban XML. Hoy, JSON domina. ¿Cómo se convirtió un formato concebido originalmente como &ldquo;un subconjunto inofensivo de JavaScript&rdquo; en el lenguaje universal de las APIs web?',
      sections: [
        {
          heading: 'Viene de JavaScript',
          blocks: [
            {
              type: 'p',
              html: 'JSON fue especificado por primera vez por Douglas Crockford a principios de los años 2000 como un formato de datos ligero derivado de la sintaxis de literales de objetos de JavaScript. Como ya era JavaScript válido, cualquier aplicación web podía analizar JSON usando <code>eval()</code> o el método integrado <code>JSON.parse()</code> (añadido en ES5). Sin necesidad de biblioteca de analizadores — el navegador ya lo entendía.',
            },
            {
              type: 'p',
              html: 'Esto era una ventaja enorme sobre XML, que requería complejos analizadores DOM o SAX. Para los desarrolladores frontend que consumían respuestas de APIs, JSON era inmediatamente utilizable de una forma que XML nunca lo fue.',
            },
          ],
        },
        {
          heading: 'Cargas más pequeñas',
          blocks: [
            {
              type: 'p',
              html: 'JSON es significativamente más compacto que XML. Un documento XML requiere etiquetas de apertura y cierre para cada campo (<code>&lt;name&gt;Alice&lt;/name&gt;</code>), mientras que JSON usa una sintaxis ligera de clave-valor (<code>"name": "Alice"</code>). Para conjuntos de datos grandes, esta diferencia se traduce en cargas un 30-50% más pequeñas — un gran factor en redes móviles y conexiones lentas.',
            },
          ],
        },
        {
          heading: 'Sistema de tipos nativo',
          blocks: [
            {
              type: 'p',
              html: 'JSON tiene un sistema de tipos simple pero expresivo: cadenas, números, booleanos, null, matrices y objetos. XML, en cambio, trata todo como texto. Un número en XML es solo texto que resulta contener dígitos — la aplicación debe analizarlo. JSON maneja los tipos de forma nativa, lo que reduce el código repetitivo y elimina una clase de errores.',
            },
          ],
        },
        {
          heading: 'La revolución REST',
          blocks: [
            {
              type: 'p',
              html: 'El cambio de las APIs SOAP (basadas en XML) a REST (independiente del formato) coincidió con el auge de JSON. REST enfatizaba la simplicidad, la ausencia de estado y el diseño orientado a recursos. JSON encajaba perfectamente con la filosofía de REST — ligero, fácil de trabajar y legible por humanos. Frameworks como Ruby on Rails, Express.js y Django adoptaron JSON como su formato de salida predeterminado, consolidando su dominio.',
            },
          ],
        },
        {
          heading: 'El impulso del ecosistema',
          blocks: [
            {
              type: 'p',
              html: 'Una vez que JSON se convirtió en el estándar de facto para las APIs web, el ecosistema se disparó. Surgió JSON Schema para la validación. JSON Web Tokens (JWT) se convirtió en el estándar para la autenticación. MongoDB eligió BSON (JSON binario) como su formato de documentos. Herramientas como jq facilitaron la manipulación de JSON en la línea de comandos. Cada lenguaje obtuvo soporte de primera clase para JSON en su biblioteca estándar.',
            },
          ],
        },
        {
          heading: 'Donde JSON se queda corto',
          blocks: [
            {
              type: 'p',
              html: 'JSON no es perfecto. No admite comentarios, lo que lo hace menos ideal para archivos de configuración (YAML es mejor allí). No tiene aplicación de esquema integrada (aunque JSON Schema cubre esta brecha). Y el JSON profundamente anidado puede ser difícil de leer. Pero para su caso de uso principal — el intercambio de datos entre servicios web — JSON sigue siendo la herramienta adecuada.',
            },
          ],
        },
        {
          heading: 'El veredicto',
          blocks: [
            {
              type: 'p',
              html: 'JSON ganó porque era simple, rápido y ya estaba presente en el navegador. Ningún comité lo diseñó para ser universal — se ganó ese estatus por su utilidad práctica. Veinte años después, es difícil imaginar la web sin él. Si trabajas con datos JSON, prueba nuestro <a href="/json-to-csv-converter">conversor de JSON a CSV</a> o nuestro <a href="/json-to-excel-converter">conversor de JSON a Excel</a>.',
            },
          ],
        },
      ],
    },
    'excel-formulas-to-csv': {
      meta: {
        title: 'Manejo de fórmulas de Excel al convertir a CSV',
        description:
          '¿Qué sucede con las fórmulas de Excel, el formato condicional y las macros cuando conviertes a CSV plano? Todo lo que necesitas saber.',
        keywords: 'fórmulas de excel a csv, convertir fórmulas de excel, xlsx a csv fórmulas, evaluación de fórmulas',
      },
      h1: 'Manejo de fórmulas de Excel al convertir a CSV',
      breadcrumbs: [
        { name: 'Inicio', url: '/' },
        { name: 'Blog', url: '/blog' },
        { name: 'Fórmulas de Excel a CSV', url: '/blog/excel-formulas-to-csv' },
      ],
      dateISO: '2026-03-02',
      dateDisplay: '2 de marzo de 2026',
      byline: 'por Naim Biswas',
      heroImg: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=400&fit=crop',
      heroAlt: 'Espacio de trabajo moderno con portátil',
      intro:
        'Los archivos de Excel están vivos — las celdas contienen fórmulas que hacen referencia a otras celdas, realizan cálculos y se actualizan dinámicamente. Los archivos CSV son estáticos — solo almacenan valores, no lógica. Convertir Excel a CSV significa decidir qué hacer con esas fórmulas. Esto es lo que sucede y lo que debes tener en cuenta.',
      sections: [
        {
          heading: 'Las fórmulas se convierten en valores',
          blocks: [
            {
              type: 'p',
              html: 'Cuando <a href="/excel-to-csv-converter">conviertes una hoja de Excel a CSV</a>, cada fórmula se evalúa a su valor actual antes de la exportación. Una celda que contiene <code>=SUM(A1:A10)</code> se convierte en la suma real, como <code>45000</code>. Esto es casi siempre lo que quieres — CSV no puede representar fórmulas, así que lo siguiente mejor es el resultado calculado.',
            },
            {
              type: 'p',
              html: 'Sin embargo, esto significa que la salida es una instantánea. Si los datos fuente cambian más tarde, el CSV no se actualizará. La lógica de la fórmula se pierde. Si necesitas conservar la lógica de cálculo, mantén el archivo .xlsx original como fuente de verdad y regenera el CSV cuando sea necesario.',
            },
          ],
        },
        {
          heading: 'Funciones volátiles',
          blocks: [
            {
              type: 'p',
              html: 'Algunas funciones de Excel son volátiles — se recalculan cada vez que se abre la hoja. <code>=NOW()</code>, <code>=TODAY()</code>, <code>=RAND()</code> y <code>=RANDBETWEEN()</code> producen valores distintos en cada recálculo. Cuando conviertes a CSV, se captura el valor en el momento de la conversión. Una celda con <code>=TODAY()</code> se convierte en <code>2026-03-02</code> — una fecha estática que nunca cambiará.',
            },
          ],
        },
        {
          heading: 'Referencias circulares y errores',
          blocks: [
            {
              type: 'p',
              html: 'Las fórmulas que producen errores (<code>#DIV/0!</code>, <code>#VALUE!</code>, <code>#REF!</code>) se exportarán como valores de error en la mayoría de los conversores. Limpia los errores de fórmula antes de la conversión, o el CSV resultante contendrá texto de error que los sistemas posteriores pueden no manejar con elegancia.',
            },
            {
              type: 'p',
              html: 'Las referencias circulares (donde una fórmula se refiere a su propia celda) pueden no evaluarse en absoluto, produciendo un cero o un error según la configuración de Excel. Resuélvelas antes de convertir.',
            },
          ],
        },
        {
          heading: 'Formato condicional',
          blocks: [
            {
              type: 'p',
              html: 'El formato condicional — celdas que cambian de color según sus valores — se pierde por completo en la conversión a CSV. CSV no tiene concepto de estilo de celda. Si la codificación de colores transmite información importante (p. ej., rojo para cuentas vencidas), añade una columna de estado separada que etiquete explícitamente la condición. Por ejemplo, añade una columna llamada <code>status</code> con valores <code>overdue</code> o <code>current</code> según la misma lógica.',
            },
          ],
        },
        {
          heading: 'Macros y VBA',
          blocks: [
            {
              type: 'p',
              html: 'Las macros de Excel (código VBA) se eliminan durante la conversión a CSV. Las macros operan sobre el propio libro — automatizando tareas, transformando datos, interactuando con sistemas externos. Ninguna de esta lógica se traslada a CSV. Si tu flujo de trabajo depende de macros, ejecútalas antes de convertir, para que los datos resultantes reflejen el estado posterior a la macro.',
            },
          ],
        },
        {
          heading: 'Validación de datos',
          blocks: [
            {
              type: 'p',
              html: 'Las reglas de validación de datos de Excel (listas desplegables, rangos numéricos, restricciones de fecha) también se pierden. Una celda que solo permitía valores entre 1 y 100 ahora puede contener cualquier cosa en el CSV. La validación era una restricción de interfaz en Excel — nunca fue parte de los datos en sí.',
            },
          ],
        },
        {
          heading: 'Mejor práctica',
          blocks: [
            {
              type: 'p',
              html: 'Revisa siempre tu libro de Excel antes de la conversión. Identifica las celdas que dependen de fórmulas y verifica que los valores calculados sean correctos. Añade columnas explícitas para cualquier lógica que de otro modo sería invisible. Trata la conversión como una instantánea — el CSV es un registro fiel de los datos en un momento dado, no un documento vivo.',
            },
          ],
        },
      ],
    },
    'data-migration-strategies': {
      meta: {
        title: 'Estrategias de migración de datos: de hojas de cálculo a bases de datos',
        description:
          'Una guía para migrar datos de archivos Excel y CSV a bases de datos relacionales, almacenes NoSQL y almacenes de datos en la nube.',
        keywords: 'migración de datos, hoja de cálculo a base de datos, excel a base de datos, csv importar base de datos',
      },
      h1: 'Estrategias de migración de datos: de hojas de cálculo a bases de datos',
      breadcrumbs: [
        { name: 'Inicio', url: '/' },
        { name: 'Blog', url: '/blog' },
        { name: 'Estrategias de migración de datos', url: '/blog/data-migration-strategies' },
      ],
      dateISO: '2026-02-28',
      dateDisplay: '28 de febrero de 2026',
      byline: 'por Naim Biswas',
      heroImg: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&h=400&fit=crop',
      heroAlt: 'Servidor de datos con luces parpadeantes',
      intro:
        'Todo negocio en crecimiento llega a un punto donde las hojas de cálculo ya no son suficientes. Listas de clientes, registros de inventario y datos financieros superan los límites de Excel. Mover esos datos a una base de datos adecuada es un paso crítico — pero la migración está llena de trampas. Aquí tienes un enfoque estructurado.',
      sections: [
        {
          heading: 'Paso 1: Audita los datos fuente',
          blocks: [
            {
              type: 'p',
              html: 'Antes de escribir cualquier script de importación, entiende con qué estás trabajando. Abre la hoja de cálculo y comprueba si hay celdas combinadas, tipos de columna inconsistentes, filas vacías y formatos de fecha no estándar. Documenta cada columna: su nombre, tipo de datos, valores permitidos y si puede ser null. Esta auditoría se convierte en tu plano de esquema.',
            },
          ],
        },
        {
          heading: 'Paso 2: Diseña el esquema objetivo',
          blocks: [
            {
              type: 'p',
              html: 'Las hojas de cálculo son planas; las bases de datos están normalizadas. Una sola hoja con columnas para nombre de cliente, fecha de pedido y nombre de producto puede necesitar convertirse en tres tablas: <code>customers</code>, <code>products</code> y <code>orders</code>. Identifica las claves primarias, las relaciones de clave foránea y las restricciones antes de importar. Resiste la tentación de importar la hoja como una sola tabla — eso va contra el propósito de usar una base de datos.',
            },
          ],
        },
        {
          heading: 'Paso 3: Convierte a CSV',
          blocks: [
            {
              type: 'p',
              html: 'CSV es el formato de importación universal para bases de datos. La mayoría de los sistemas de bases de datos (PostgreSQL, MySQL, SQLite, SQL Server) tienen comandos integrados para la importación masiva de CSV: <code>COPY</code>, <code>LOAD DATA INFILE</code> o <code>BULK INSERT</code>. Convierte cada hoja a CSV usando <a href="/excel-to-csv-converter">una herramienta como esta</a>. Asegúrate de que la salida CSV use codificación UTF-8 y comillas consistentes.',
            },
          ],
        },
        {
          heading: 'Paso 4: Importa y valida',
          blocks: [
            {
              type: 'p',
              html: 'Importa el CSV a una tabla de preparación (una copia temporal de la estructura de la tabla objetivo). Esto te permite ejecutar consultas de validación antes de mover los datos al esquema de producción. Comprueba lo siguiente:',
            },
            {
              type: 'ul',
              items: [
                'Filas que no se importaron (incompatibilidades de tipo, violaciones de restricciones)',
                'Registros duplicados que deben fusionarse',
                'Valores null en columnas que no deberían ser null',
                'Integridad referencial — valores de clave foránea que no existen en las tablas padre',
              ],
            },
          ],
        },
        {
          heading: 'Paso 5: Transforma y carga',
          blocks: [
            {
              type: 'p',
              html: 'Una vez que los datos de preparación pasan la validación, ejecuta tus consultas de transformación: normaliza columnas planas en tablas relacionadas, convierte tipos, genera claves sustitutas y aplica reglas de negocio. Luego inserta los datos limpios en las tablas de producción. Lo mejor es hacerlo como una transacción — si algo falla, revierte toda la operación.',
            },
          ],
        },
        {
          heading: 'Paso 6: Verifica y desmantela',
          blocks: [
            {
              type: 'p',
              html: 'Después de la migración, ejecuta consultas de conciliación. Compara los recuentos de registros, suma las columnas numéricas y comprueba registros individuales al azar entre la hoja de cálculo fuente y la base de datos. Una vez que estés seguro de que los datos coinciden, archiva la hoja de cálculo y actualiza tus fuentes de datos para que apunten a la base de datos.',
            },
          ],
        },
        {
          heading: 'Errores comunes',
          blocks: [
            {
              type: 'ul',
              items: [
                '<strong>Problemas de codificación:</strong> Los archivos de Excel pueden usar codificación Windows-1252. Convierte a UTF-8 antes de importar.',
                '<strong>Archivos grandes:</strong> Las hojas de cálculo de más de 100 MB pueden necesitar importación por partes. Divide el CSV en lotes de 10.000 filas.',
                '<strong>Formatos de fecha:</strong> Las fechas seriales de Excel (como 45000) necesitan conversión a ISO 8601. Hazlo durante el paso de transformación.',
              ],
            },
          ],
        },
        {
          heading: 'Resumen',
          blocks: [
            {
              type: 'p',
              html: 'La migración de hojas de cálculo a bases de datos es un proceso de varios pasos que recompensa la planificación cuidadosa. Audita primero, diseña el esquema, convierte a CSV, valida en preparación y luego carga. Omite cualquier paso y estarás depurando problemas de datos durante semanas.',
            },
          ],
        },
      ],
    },
    'large-file-conversion': {
      meta: {
        title: 'Cómo manejar conversiones de archivos grandes sin perder datos',
        description:
          'Consejos para convertir conjuntos de datos grandes — gestión de memoria, estrategias de fragmentación y qué vigilar con archivos de más de 10 MB.',
        keywords: 'conversión de archivos grandes, convertir datos grandes, csv json grande, conversión eficiente en memoria',
      },
      h1: 'Cómo manejar conversiones de archivos grandes sin perder datos',
      breadcrumbs: [
        { name: 'Inicio', url: '/' },
        { name: 'Blog', url: '/blog' },
        { name: 'Conversión de archivos grandes', url: '/blog/large-file-conversion' },
      ],
      dateISO: '2026-02-25',
      dateDisplay: '25 de febrero de 2026',
      byline: 'por Naim Biswas',
      heroImg: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=400&fit=crop',
      heroAlt: 'Editor de código en una pantalla de computadora',
      intro:
        'Convertir un archivo JSON de 1 KB a CSV es trivial. Convertir una exportación de base de datos de 200 MB con un millón de filas es un problema completamente distinto. Las conversiones de archivos grandes tensionan los límites de memoria, el rendimiento del navegador y la integridad de los datos. Así es como manejarlos de forma segura.',
      sections: [
        {
          heading: 'Comprende tus limitaciones',
          blocks: [
            {
              type: 'p',
              html: 'Las herramientas basadas en navegador como <a href="/">Data Converter</a> se ejecutan en un sandbox con memoria limitada. Una pestaña típica del navegador tiene de 500 MB a 2 GB de memoria disponible según el dispositivo y el navegador. Si tu archivo pesa 100 MB, cargarlo por completo en memoria deja menos espacio para la salida procesada y las estructuras de datos internas del conversor. Conoce tus límites antes de empezar.',
            },
            {
              type: 'p',
              html: 'Las herramientas del lado del servidor tienen sus propias limitaciones — límites de memoria en el hosting compartido, tiempos de espera de solicitudes y restricciones de tamaño de carga. Esta herramienta procesa todo en tu navegador, lo que significa que no hay tiempos de espera del servidor pero tampoco memoria de nivel servidor.',
            },
          ],
        },
        {
          heading: 'Transmisión por flujo vs. carga',
          blocks: [
            {
              type: 'p',
              html: 'La mejor estrategia para archivos grandes es la transmisión por flujo — procesar los datos por partes a medida que se cargan, en lugar de leer todo el archivo en memoria de una vez. Para matrices CSV y JSON, el conversor puede procesar fila por fila o fragmento por fragmento, escribiendo cada fila transformada en la salida antes de leer la siguiente. Esto mantiene el uso de memoria proporcional al tamaño del fragmento, no al del archivo.',
            },
            {
              type: 'p',
              html: 'Busca conversores que admitan transmisión por flujo para archivos grandes. Si la herramienta muestra una barra de progreso, es probable que esté procesando de forma incremental — eso es una buena señal.',
            },
          ],
        },
        {
          heading: 'Divide y vencerás',
          blocks: [
            {
              type: 'p',
              html: 'Si un archivo es demasiado grande para tu conversor, divídelo en partes más pequeñas. Para archivos CSV, la mayoría de los editores de texto o herramientas de línea de comandos pueden dividir por recuento de filas (p. ej., 50.000 filas por archivo). Convierte cada parte por separado y luego concatena las salidas. Para matrices JSON, divide la matriz en varios archivos en límites naturales.',
            },
            {
              type: 'p',
              html: 'Este enfoque es manual pero fiable — ninguna conversión individual supera los límites de memoria y, si un fragmento falla, solo ese fragmento debe reintentarse.',
            },
          ],
        },
        {
          heading: 'Vigila estos problemas',
          blocks: [
            {
              type: 'ul',
              items: [
                '<strong>Detección de codificación:</strong> Los archivos grandes pueden mezclar codificaciones. Asegúrate de que el conversor detecte la codificación correctamente desde el principio — un archivo de 100 MB mal detectado produce una salida completamente distorsionada.',
                '<strong>Saltos de línea en los campos:</strong> Los campos CSV pueden contener saltos de línea si están entre comillas. Un divisor ingenuo línea por línea puede romper un campo entre comillas a través de fragmentos. Usa un analizador que entienda las comillas de CSV.',
                '<strong>Retroalimentación de progreso:</strong> Sin retroalimentación visual, un navegador bloqueado parece roto. Los buenos conversores muestran el progreso para operaciones grandes.',
                '<strong>Fugas de memoria:</strong> Las conversiones repetidas en la misma sesión pueden acumular memoria. Recarga la página entre conversiones grandes para empezar de cero.',
              ],
            },
          ],
        },
        {
          heading: 'Consejos específicos para navegadores',
          blocks: [
            {
              type: 'p',
              html: 'Chrome y Edge (ambos basados en Chromium) manejan archivos grandes mejor que Safari o Firefox gracias a una gestión de memoria más agresiva. Si alcanzas los límites constantemente, prueba con un navegador Chromium. Además, cierra otras pestañas antes de iniciar una conversión grande — cada pestaña abierta consume memoria que el conversor podría usar.',
            },
          ],
        },
        {
          heading: 'Cuándo usar una herramienta de escritorio',
          blocks: [
            {
              type: 'p',
              html: 'Para archivos de más de 500 MB o conjuntos de datos con más de 5 millones de filas, considera una herramienta de escritorio o utilidad de línea de comandos. La biblioteca pandas de Python, herramientas de línea de comandos como <code>jq</code> (para JSON) y <code>csvkit</code> (para CSV), o las herramientas de exportación nativas de bases de datos manejan archivos de cualquier tamaño sin los límites de memoria del navegador. Usa conversores basados en navegador para tareas cotidianas y herramientas de escritorio para los trabajos realmente grandes.',
            },
          ],
        },
        {
          heading: 'Resumen',
          blocks: [
            {
              type: 'p',
              html: 'La conversión de archivos grandes es un problema de gestión de memoria. Transmite por flujo cuando sea posible, divide cuando sea necesario y verifica siempre que la salida coincida con la entrada en el recuento de registros. Algunas precauciones evitan la pérdida de datos y el tiempo desperdiciado.',
            },
          ],
        },
      ],
    },
  },
};
