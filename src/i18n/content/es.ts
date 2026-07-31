import type { HomeContent, ConverterContentMap } from './types';

export const es: ConverterContentMap = {
  'json-to-csv': {
    meta: {
      title: 'Conversor de JSON a CSV: convierte JSON a CSV online gratis',
      description:
        'Convierte JSON a CSV online gratis. Pega JSON, sube un archivo o cárgalo desde URL. Maneja objetos anidados, matrices y archivos grandes. 100 % en tu navegador, sin subidas.',
      keywords: 'json a csv, conversor de json a csv, convertir json a csv, json a csv online, json a csv gratis',
    },
    h1: 'Conversor de JSON a CSV',
    desc: 'Convierte tus datos JSON a formato CSV al instante, directamente en tu navegador. Soporta objetos anidados (aplanados con el separador <code>_</code>), matrices de objetos y archivos grandes. Sin subidas, sin servidores, sin límites.',
    from: 'JSON',
    to: 'CSV',
    slug: 'json-to-csv',
    path: '/json-to-csv-converter',
    sections: [
      {
        heading: '¿Por qué convertir JSON a CSV?',
        blocks: [
          {
            type: 'p',
            html: 'JSON es el formato nativo de las APIs y las aplicaciones web, pero CSV es lo que hablan de forma nativa las hojas de cálculo, las bases de datos y las herramientas de análisis. Convertir JSON a CSV te permite tomar respuestas de API, exportaciones de configuración o cargas de webhooks y abrirlas directamente en Excel, Google Sheets, o importarlas en PostgreSQL, MySQL o cualquier canal de análisis de datos.',
          },
          {
            type: 'p',
            html: 'Los casos de uso habituales incluyen exportar registros de usuarios desde una API REST para un equipo de marketing, convertir datos de geolocalización de una API de mapas en una tabla para análisis GIS, o transformar catálogos de productos de comercio electrónico desde feeds JSON a CSV para herramientas de comparación de precios.',
          },
        ],
      },
      {
        heading: 'Cómo se maneja el JSON anidado',
        blocks: [
          {
            type: 'p',
            html: 'CSV es plano: cada fila tiene las mismas columnas. Cuando tu JSON tiene objetos anidados (como <code>&lbrace;"user": &lbrace;"name": "Alice", "address": &lbrace;"city": "NYC"&rbrace;&rbrace;&rbrace;</code>), el conversor aplana las claves usando un separador de guion bajo: <code>user_name</code>, <code>user_address_city</code>. Las matrices de objetos se expanden en varias filas. Las matrices primitivas (como <code>["red", "blue"]</code>) se unen con punto y coma en una sola celda.',
          },
          {
            type: 'p',
            html: 'Esto significa que una respuesta de API profundamente anidada se convierte en una tabla plana y limpia sin perder ningún dato. Puedes ver cada campo como encabezado de columna y cada registro como una fila.',
          },
        ],
      },
      {
        heading: 'Cómo convertir JSON a CSV',
        blocks: [
          {
            type: 'list',
            ordered: true,
            items: [
              'Selecciona <strong>JSON</strong> como formato de origen y <strong>CSV</strong> como formato de destino',
              'Pega tu JSON, sube un archivo <code>.json</code> o cárgalo desde una URL',
              'Haz clic en <strong>Convertir</strong> o pulsa <kbd>Ctrl+Enter</kbd>',
              'Vista previa del resultado, edita en línea si es necesario y descárgalo como CSV',
            ],
          },
        ],
      },
      {
        heading: 'Características',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Maneja objetos JSON anidados: aplana las claves con el separador <code>_</code>',
              'Las matrices de objetos se convierten en filas; las matrices primitivas se unen con punto y coma',
              'Inferencia de tipos para números, booleanos, fechas y cadenas',
              'Detección inteligente de encabezados y ordenación de columnas',
              'Edición en línea, ordenación y filtrado antes de descargar',
            ],
          },
        ],
      },
      {
        heading: 'Ejemplos del mundo real',
        blocks: [
          {
            type: 'p',
            html: '<strong>Exportación de datos de API:</strong> Una tienda de comercio electrónico obtiene datos de productos de la API de Shopify (JSON). Convertirlos a CSV permite al equipo de inventario importarlos en su hoja de cálculo de gestión de almacén.',
          },
          {
            type: 'p',
            html: '<strong>Migración de bases de datos:</strong> Un desarrollador exporta perfiles de usuario de MongoDB como JSON, los convierte a CSV y los importa masivamente en PostgreSQL usando <code>COPY</code>.',
          },
          {
            type: 'p',
            html: '<strong>Análisis de datos:</strong> Un analista de datos obtiene JSON de la API de informes de Google Analytics, lo convierte a CSV y lo abre en R o en Python con pandas para su análisis estadístico.',
          },
        ],
      },
    ],
  },
  'csv-to-json': {
    meta: {
      title: 'Conversor de CSV a JSON: convierte CSV a JSON online gratis',
      description:
        'Convierte CSV a JSON online gratis. Pega datos CSV o sube un archivo .csv. Detección inteligente de encabezados, inferencia de tipos y soporte de objetos anidados. 100 % en tu navegador.',
      keywords: 'csv a json, conversor de csv a json, convertir csv a json, csv a json online, csv a json gratis',
    },
    h1: 'Conversor de CSV a JSON',
    desc: 'Convierte tus hojas de cálculo CSV en objetos JSON limpios, al instante. Perfecto para importar datos tabulares en APIs, bases de datos o aplicaciones de JavaScript. Con tipado inteligente de columnas y detección de encabezados integradas.',
    from: 'CSV',
    to: 'JSON',
    slug: 'csv-to-json',
    path: '/csv-to-json-converter',
    sections: [
      {
        heading: '¿Por qué convertir CSV a JSON?',
        blocks: [
          {
            type: 'p',
            html: 'CSV es la lengua franca de las hojas de cálculo y las exportaciones de bases de datos, pero JSON es lo que consumen de forma nativa las APIs web, las bases de datos NoSQL y las aplicaciones modernas de JavaScript/TypeScript. Convertir CSV a JSON te permite tomar cualquier dato tabular, desde extractos bancarios hasta resultados de encuestas, y usarlo directamente en el código de tu aplicación.',
          },
          {
            type: 'p',
            html: 'Los escenarios típicos incluyen cargar inventario de productos desde una hoja de cálculo de ERP en un CMS headless, importar listas de clientes desde exportaciones CSV a una colección de Firebase o MongoDB, o preparar fixtures de prueba a partir de datos tabulares existentes para pruebas unitarias.',
          },
        ],
      },
      {
        heading: 'Cómo las filas se convierten en JSON',
        blocks: [
          {
            type: 'p',
            html: 'Cada fila del CSV se convierte en un objeto JSON. La primera fila proporciona las claves (encabezados de columna) y las filas siguientes proporcionan los valores. Por ejemplo:',
          },
          {
            type: 'code',
            html: 'name,age,city<br>Alice,30,NYC<br>Bob,25,LA',
          },
          {
            type: 'p',
            html: 'se convierte en:',
          },
          {
            type: 'code',
            html: '[&lbrace;"name":"Alice","age":30,"city":"NYC"&rbrace;,&lbrace;"name":"Bob","age":25,"city":"LA"&rbrace;]',
          },
          {
            type: 'p',
            html: 'El conversor detecta los tipos de columna automáticamente: las cadenas entre comillas se mantienen como cadenas, los números sin comillas se convierten en números y los formatos de fecha comunes se conservan. Las celdas vacías se incluyen como <code>null</code> para que el código posterior pueda manejar explícitamente los datos faltantes.',
          },
        ],
      },
      {
        heading: 'Cómo convertir CSV a JSON',
        blocks: [
          {
            type: 'list',
            ordered: true,
            items: [
              'Selecciona <strong>CSV</strong> como formato de origen y <strong>JSON</strong> como formato de destino',
              'Pega tu CSV, sube un archivo <code>.csv</code> o cárgalo desde una URL',
              'Haz clic en <strong>Convertir</strong> o pulsa <kbd>Ctrl+Enter</kbd>',
              'Vista previa del resultado, edita en línea si es necesario y descárgalo como JSON',
            ],
          },
        ],
      },
      {
        heading: 'Características',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Detecta tipos de columna: cadenas, números, booleanos y fechas',
              'La primera fila se trata como encabezados para los nombres de clave',
              'Salida como matriz de objetos (por defecto) o matriz de matrices',
              'Conserva las celdas vacías frente a las claves ausentes',
              'Edición en línea, ordenación y filtrado antes de descargar',
            ],
          },
        ],
      },
      {
        heading: 'Casos de uso habituales',
        blocks: [
          {
            type: 'p',
            html: '<strong>Integración de API:</strong> Tu socio te envía un CSV de transacciones diarias. Conviértelo a JSON y haz un POST directamente a tu endpoint REST.',
          },
          {
            type: 'p',
            html: '<strong>Seed de bases de datos:</strong> Exporta una tabla de referencia de MySQL como CSV, conviértela a JSON y úsala como datos semilla para MongoDB o una colección de Firebase.',
          },
          {
            type: 'p',
            html: '<strong>Desarrollo frontend:</strong> Un diseñador proporciona datos en una hoja de cálculo. Conviértelos a JSON e impórtalos directamente en el estado de un componente React/Vue o en un service worker de mock.',
          },
        ],
      },
    ],
  },
  'excel-to-json': {
    meta: {
      title: 'Conversor de Excel a JSON: convierte XLSX a JSON online gratis',
      description:
        'Convierte Excel (.xlsx) a JSON online gratis. Sube tu hoja de cálculo y obtén una salida JSON limpia. Soporte de varias hojas, inferencia de tipos y manejo de objetos anidados. 100 % en tu navegador.',
      keywords: 'excel a json, xlsx a json, conversor de excel a json, convertir excel a json, xlsx a json online',
    },
    h1: 'Conversor de Excel a JSON',
    desc: 'Convierte tus hojas de cálculo de Excel (<code>.xlsx</code>) a formato JSON con un clic. Soporta varias hojas, detección de tipos de columna y archivos grandes de hasta 50 MB. Todo el procesamiento ocurre en tu navegador.',
    from: 'Excel (XLSX)',
    to: 'JSON',
    slug: 'excel-to-json',
    path: '/excel-to-json-converter',
    sections: [
      {
        heading: '¿Por qué convertir Excel a JSON?',
        blocks: [
          {
            type: 'p',
            html: 'Las hojas de cálculo de Excel son la columna vertebral de los datos empresariales: informes financieros, listas de inventario, registros de RR. HH., resultados de encuestas. Pero XLSX es un formato binario que ninguna API web, base de datos o script de servidor puede leer directamente. Convertir Excel a JSON desbloquea esos datos para su uso programático: alimentar un endpoint REST, importarlos en MongoDB o Firebase, o usarlos en un panel de React/Vue.',
          },
        ],
      },
      {
        heading: 'Cómo se asignan los datos de Excel a JSON',
        blocks: [
          {
            type: 'p',
            html: 'Cada hoja se convierte en una matriz JSON de objetos. La primera fila de la hoja proporciona los nombres de las propiedades (claves), y cada fila siguiente se convierte en un objeto JSON. Para libros con varias hojas, puedes seleccionar exactamente qué hoja convertir.',
          },
          {
            type: 'p',
            html: 'El formato de las celdas se maneja automáticamente: las fechas se convierten en cadenas ISO 8601 (p. ej., <code>"2026-03-15T00:00:00.000Z"</code>), los números permanecen como números sin comillas y las celdas vacías se representan como <code>null</code> para que el código posterior pueda manejar explícitamente los datos faltantes. Las fórmulas se evalúan a sus valores calculados actuales antes de la conversión.',
          },
        ],
      },
      {
        heading: 'Cómo convertir Excel a JSON',
        blocks: [
          {
            type: 'list',
            ordered: true,
            items: [
              'Selecciona <strong>Excel (XLSX)</strong> como formato de origen y <strong>JSON</strong> como formato de destino',
              'Sube tu archivo <code>.xlsx</code> mediante arrastrar &amp; soltar o explorando',
              'Elige una hoja si el libro tiene varias hojas',
              'Haz clic en <strong>Convertir</strong> o pulsa <kbd>Ctrl+Enter</kbd>',
              'Vista previa, edición y descarga como JSON',
            ],
          },
        ],
      },
      {
        heading: 'Características',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Soporte de libros con varias hojas: selecciona qué hoja convertir',
              'La primera fila se detecta automáticamente como nombres de propiedad JSON',
              'Inferencia de tipos para números, fechas, booleanos y cadenas',
              'Las celdas vacías se convierten en <code>null</code> en JSON',
              'Se admiten archivos de hasta 50 MB',
            ],
          },
        ],
      },
      {
        heading: 'Ejemplos del mundo real',
        blocks: [
          {
            type: 'p',
            html: '<strong>Informes financieros:</strong> Tu equipo de finanzas comparte un P&amp;L mensual como libro de Excel. Convierte cada hoja a JSON y aliméntalo a un panel de análisis personalizado.',
          },
          {
            type: 'p',
            html: '<strong>Migración de datos:</strong> Un sistema heredado solo exporta registros de clientes como archivos .xlsx. Conviértelos a JSON e impórtalos masivamente en PostgreSQL, MongoDB o un almacén de datos en la nube como BigQuery.',
          },
          {
            type: 'p',
            html: '<strong>Gestión de contenidos:</strong> Un catálogo de productos vive en Excel con columnas para SKU, nombre, precio y descripción. Conviértelo a JSON y envíalo directamente a un CMS headless o a una API de comercio electrónico.',
          },
        ],
      },
    ],
  },
  'json-to-excel': {
    meta: {
      title: 'Conversor de JSON a Excel: convierte JSON a XLSX online gratis',
      description:
        'Convierte JSON a Excel (.xlsx) online gratis. Pega JSON o sube un archivo y obtén una hoja de cálculo descargable. Maneja objetos anidados, matrices y grandes conjuntos de datos. 100 % en tu navegador.',
      keywords: 'json a excel, json a xlsx, conversor de json a excel, convertir json a excel, json a xlsx online',
    },
    h1: 'Conversor de JSON a Excel',
    desc: 'Convierte datos JSON en una hoja de cálculo de Excel descargable (<code>.xlsx</code>). Perfecto para tomar respuestas de API, archivos de configuración o datos web y convertirlos en hojas de cálculo listas para el negocio con tipos de columna y formato adecuados.',
    from: 'JSON',
    to: 'Excel (XLSX)',
    slug: 'json-to-excel',
    path: '/json-to-excel-converter',
    sections: [
      {
        heading: '¿Por qué convertir JSON a Excel?',
        blocks: [
          {
            type: 'p',
            html: 'JSON es el formato nativo de las APIs y las herramientas de desarrollo, pero Excel es lo que esperan los gerentes, analistas y equipos de negocio. Convertir JSON a XLSX tiende un puente entre ambos: toma respuestas de API en bruto, cargas de webhooks o exportaciones de bases de datos y conviértelos en hojas de cálculo limpias que cualquiera puede abrir en Microsoft Excel, Google Sheets o Apple Numbers sin configuración técnica alguna.',
          },
          {
            type: 'p',
            html: 'Esto es especialmente útil cuando necesitas compartir datos con interesados no técnicos: en lugar de entregarles un archivo JSON y explicarles cómo leerlo, les entregas una hoja de cálculo familiar con encabezados de columna, tipos de datos y formato adecuados.',
          },
        ],
      },
      {
        heading: 'Cómo aparece el JSON anidado en Excel',
        blocks: [
          {
            type: 'p',
            html: 'Los datos JSON suelen estar anidados: objetos dentro de objetos, matrices de objetos, tipos mixtos. El conversor aplana las claves anidadas usando un separador de guion bajo. Por ejemplo, <code>&lbrace;"user": &lbrace;"name": "Alice", "contact": &lbrace;"email": "a@b.com"&rbrace;&rbrace;&rbrace;</code> se convierte en las columnas <code>user_name</code> y <code>user_contact_email</code>.',
          },
          {
            type: 'p',
            html: 'Las matrices de objetos se expanden en varias filas. Las matrices primitivas (como <code>["red", "blue"]</code>) se unen en una sola celda con punto y coma. Cada objeto JSON se convierte en una fila, y cada par clave-valor se convierte en una celda con el tipo de datos correcto: los números permanecen numéricos, las fechas siguen siendo fechas, de modo que las tablas dinámicas y las fórmulas funcionan de inmediato.',
          },
        ],
      },
      {
        heading: 'Cómo convertir JSON a Excel',
        blocks: [
          {
            type: 'list',
            ordered: true,
            items: [
              'Selecciona <strong>JSON</strong> como formato de origen y <strong>Excel (XLSX)</strong> como formato de destino',
              'Pega tu JSON, sube un archivo <code>.json</code> o cárgalo desde una URL',
              'Haz clic en <strong>Convertir</strong> o pulsa <kbd>Ctrl+Enter</kbd>',
              'Vista previa de la tabla, personaliza el nombre de la hoja y el ancho de las columnas',
              'Descárgalo como <code>.xlsx</code>',
            ],
          },
        ],
      },
      {
        heading: 'Características',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Objetos JSON anidados aplanados en columnas con el separador <code>_</code>',
              'Las matrices de objetos se convierten en filas de la hoja de cálculo',
              'Columnas con tipos: se conservan números, fechas y texto',
              'Nombre de hoja personalizado y opciones de ancho automático antes de descargar',
              'Soporta matrices JSON, objetos anidados y estructuras mixtas',
            ],
          },
        ],
      },
      {
        heading: 'Cuándo usar esta herramienta',
        blocks: [
          {
            type: 'p',
            html: '<strong>Informes:</strong> Extrae datos de la API de tu backend (registros de usuarios, ingresos, visitas a páginas) y conviértelos a Excel para una presentación semanal de revisión de negocio.',
          },
          {
            type: 'p',
            html: '<strong>Análisis de datos:</strong> Exporta JSON desde una herramienta de consulta de bases de datos, conviértelo a XLSX y ábrelo en Excel para tablas dinámicas, gráficos y análisis de escenarios.',
          },
          {
            type: 'p',
            html: '<strong>Entrega a clientes:</strong> El sistema de un cliente envía datos como JSON mediante webhook. Conviértelos a una hoja de cálculo limpia para que los revisen sin necesidad de ayuda técnica.',
          },
        ],
      },
    ],
  },
  'excel-to-csv': {
    meta: {
      title: 'Conversor de Excel a CSV: convierte XLSX a CSV online gratis',
      description:
        'Convierte Excel (.xlsx) a CSV online gratis. Sube tu hoja de cálculo y descárgala como CSV plano. Soporte de varias hojas, límite de 50 MB y procesamiento en el navegador.',
      keywords: 'excel a csv, xlsx a csv, conversor de excel a csv, convertir excel a csv, xlsx a csv online',
    },
    h1: 'Conversor de Excel a CSV',
    desc: 'Convierte tus hojas de cálculo de Excel a formato CSV plano, de forma rápida, gratuita y privada. Ideal para migrar datos entre sistemas, importarlos en bases de datos o preparar archivos para herramientas de análisis de datos.',
    from: 'Excel (XLSX)',
    to: 'CSV',
    slug: 'excel-to-csv',
    path: '/excel-to-csv-converter',
    sections: [
      {
        heading: '¿Por qué convertir Excel a CSV?',
        blocks: [
          {
            type: 'p',
            html: 'CSV es el formato de datos de menor denominador común: todas las aplicaciones de hojas de cálculo, bases de datos, canalizaciones ETL y herramientas de análisis de datos pueden leerlo sin bibliotecas ni licencias especiales. Convertir XLSX a CSV elimina formato, gráficos, macros y estructuras binarias propietarias, dejándote con datos tabulares limpios y portables que funcionan en todas partes.',
          },
          {
            type: 'p',
            html: 'Es el paso imprescindible cuando necesitas mover datos entre sistemas: de Excel a PostgreSQL (mediante <code>COPY</code>), a Python con pandas o R para análisis, a un almacén de datos en la nube como BigQuery o Snowflake, o a una herramienta de importación de CRM que solo acepta archivos CSV.',
          },
        ],
      },
      {
        heading: 'Qué pierde el CSV (y por qué es bueno)',
        blocks: [
          {
            type: 'p',
            html: 'Los archivos de Excel conllevan mucha sobrecarga: colores de celda, fuentes, celdas combinadas, fórmulas, gráficos, tablas dinámicas, macros y XML personalizado. CSV elimina todo eso y conserva solo los datos en bruto: filas y columnas de texto plano separadas por comas. Esto hace que los archivos CSV sean mucho más pequeños, más rápidos de analizar y universalmente compatibles. Las fórmulas se evalúan a sus valores actuales antes de la exportación, por lo que obtienes los resultados, no la sintaxis de la fórmula.',
          },
        ],
      },
      {
        heading: 'Cómo convertir Excel a CSV',
        blocks: [
          {
            type: 'list',
            ordered: true,
            items: [
              'Selecciona <strong>Excel (XLSX)</strong> como formato de origen y <strong>CSV</strong> como formato de destino',
              'Sube tu archivo <code>.xlsx</code> mediante arrastrar &amp; soltar o explorando',
              'Selecciona una hoja si el libro contiene varias hojas',
              'Haz clic en <strong>Convertir</strong> o pulsa <kbd>Ctrl+Enter</kbd>',
              'Vista previa y descarga como CSV',
            ],
          },
        ],
      },
      {
        heading: 'Características',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Se admiten libros de Excel con varias hojas',
              'Comillas CSV correctas: maneja comas y saltos de línea dentro de las celdas',
              'Fila de encabezados conservada a partir de los nombres de columna de Excel',
              'Se admiten archivos de hasta 50 MB',
              'Sin formato ni metadatos heredados: solo datos limpios',
            ],
          },
        ],
      },
      {
        heading: 'Cuándo usar esta conversión',
        blocks: [
          {
            type: 'p',
            html: '<strong>Importación a bases de datos:</strong> Tienes una hoja de cálculo con registros de clientes para importar masivamente en PostgreSQL, MySQL o SQLite. CSV es el formato de entrada estándar para los comandos <code>COPY</code> y <code>LOAD DATA</code>.',
          },
          {
            type: 'p',
            html: '<strong>Análisis de datos:</strong> Exporta un informe de Excel a CSV y cárgalo en Python (pandas), R o Jupyter Notebook para modelado estadístico, visualización o aprendizaje automático.',
          },
          {
            type: 'p',
            html: '<strong>Migración de sistemas:</strong> Mudarte de un CRM, ERP o sistema contable a otro. Casi todas las herramientas de migración aceptan CSV como formato intermedio.',
          },
          {
            type: 'p',
            html: '<strong>Control de versiones:</strong> Realiza un seguimiento de los cambios en datos tabulares con git. Los archivos CSV se comparan limpiamente, mientras que los archivos .xlsx binarios son ilegibles para git.',
          },
        ],
      },
    ],
  },
};

export const esHome: HomeContent = {
  meta: {
    title: 'Conversor de datos online gratis: herramienta para JSON, CSV, Excel, XML y YAML',
    description:
      'Convierte JSON, CSV, Excel, XML, YAML, HTML, Markdown y más, todo en tu navegador. Sin subidas, 100 % privado.',
    keywords:
      'conversor de datos, JSON a CSV, Excel a JSON, CSV a JSON, XML a JSON, herramienta online gratis, conversor de formatos',
  },
  hero: {
    h1: 'Conversor de datos online gratis: JSON, CSV, Excel, XML &amp; YAML',
    descs: [
      'Data Converter es una herramienta online gratuita que permite a desarrolladores, analistas, ingenieros de control de calidad y empresas convertir datos estructurados entre JSON, XML, CSV, Excel, YAML y otros formatos.',
      'A diferencia de muchos conversores online, todo se ejecuta directamente en tu navegador. Tus datos nunca se suben a nuestros servidores, lo que hace que las conversiones sean seguras y privadas.',
      'Ya sea que estés depurando APIs, migrando bases de datos, transformando archivos de configuración o preparando hojas de cálculo, Data Converter simplifica el proceso.',
    ],
    trust: 'Procesamiento 100 % en el lado del cliente: tus datos nunca llegan a ningún servidor',
  },
  features: {
    heading: 'Convierte entre todos los formatos de datos principales',
    cards: [
      {
        title: 'Conversor de JSON',
        desc: 'Convierte JSON a CSV, Excel, XML, YAML, HTML, Markdown o PDF. Maneja objetos anidados, matrices y archivos grandes.',
        link: '/json-to-csv-converter',
        icon: 'json',
      },
      {
        title: 'Conversor de CSV',
        desc: 'Convierte CSV a JSON, Excel, XML, YAML y más. Detección inteligente de encabezados e inferencia de tipos integradas.',
        link: '/csv-to-json-converter',
        icon: 'csv',
      },
      {
        title: 'Conversor de Excel',
        desc: 'Convierte Excel (.xlsx) a JSON, CSV, XML y YAML con soporte de varias hojas. Sube y convierte al instante.',
        link: '/excel-to-json-converter',
        icon: 'excel',
      },
      {
        title: 'Conversor de XML &amp; YAML',
        desc: 'Convierte XML o YAML a JSON, CSV, Excel y otros formatos. Aplanamiento de elementos anidados con separador de guion bajo.',
        link: '/json-to-excel-converter',
        icon: 'xml',
      },
    ],
  },
  howItWorks: {
    heading: 'Cómo convertir datos online gratis',
    steps: [
      { title: 'Selecciona los formatos', desc: 'elige el formato de origen y destino en la barra del conversor' },
      { title: 'Pega o sube', desc: 'pega los datos, sube un archivo o cárgalos desde una URL' },
      { title: 'Convierte al instante', desc: 'haz clic en Convertir o pulsa Ctrl+Enter' },
      { title: 'Edita &amp; exporta', desc: 'vista previa, ordena, edita y descarga en cualquier formato' },
    ],
  },
  useCases: {
    heading: '¿Por qué usar Data Converter?',
    sub: 'Todo se ejecuta en el lado del cliente: tus archivos nunca salen de tu dispositivo. Sin registros, sin límites, totalmente gratis.',
    cards: [
      {
        icon: 'api',
        title: 'Desarrollo de API',
        desc: 'Convierte respuestas de API JSON a CSV para análisis en hojas de cálculo, o transforma datos CSV a JSON para pruebas de API.',
      },
      {
        icon: 'db',
        title: 'Migraciones de bases de datos',
        desc: 'Convierte hojas de Excel o exportaciones CSV a JSON o XML para importarlas en MongoDB, PostgreSQL, Firebase y más.',
      },
      {
        icon: 'config',
        title: 'Gestión de configuración',
        desc: 'Traduce archivos de configuración YAML a JSON para aplicaciones de JavaScript, o convierte configuraciones JSON a YAML para Docker y Kubernetes.',
      },
      {
        icon: 'report',
        title: 'Informes de datos',
        desc: 'Convierte datos JSON o XML en tablas HTML formateadas o Markdown para documentación, informes y presentaciones.',
      },
      {
        icon: 'sheet',
        title: 'Procesamiento de hojas de cálculo',
        desc: 'Sube archivos de Excel, edita valores de celdas, filtra filas y exporta como CSV, JSON o PDF, todo en tu navegador.',
      },
    ],
  },
  formats: {
    heading: 'Conversiones compatibles',
    sub: 'Cada par de formatos que necesitas, a un clic de distancia',
    cards: [
      {
        label: 'JSON',
        targets: ['CSV', 'Excel', 'XML', 'YAML', 'HTML', 'Markdown', 'PDF'],
        tag: 'Datos de API, archivos de configuración',
      },
      {
        label: 'CSV',
        targets: ['JSON', 'Excel', 'XML', 'YAML', 'HTML', 'Markdown', 'PDF'],
        tag: 'Hojas de cálculo, exportaciones de BD',
      },
      {
        label: 'Excel',
        targets: ['JSON', 'CSV', 'XML', 'YAML', 'HTML', 'Markdown', 'PDF'],
        tag: 'Informes de negocio, varias hojas',
      },
      {
        label: 'XML',
        targets: ['JSON', 'CSV', 'Excel', 'YAML', 'HTML', 'Markdown', 'PDF'],
        tag: 'Sistemas heredados, servicios web',
      },
      {
        label: 'YAML',
        targets: ['JSON', 'CSV', 'Excel', 'XML', 'HTML', 'Markdown', 'PDF'],
        tag: 'Docker, Kubernetes, CI/CD',
      },
    ],
  },
};
