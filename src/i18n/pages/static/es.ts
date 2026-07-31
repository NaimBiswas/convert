import type { StaticContent } from '../types';

export const staticContent: StaticContent = {
  about: {
    meta: {
      title: 'Sobre nosotros',
      description:
        'Conoce Data Converter, una herramienta gratuita, privada y basada en el navegador para convertir entre JSON, CSV, Excel, XML, YAML y más.',
      keywords: 'acerca de, conversor de datos, conversor en línea, basado en el navegador',
    },
    h1: 'Sobre nosotros',
    breadcrumbs: [
      { name: 'Inicio', url: '/' },
      { name: 'Acerca de', url: '/about' },
    ],
    paragraphs: [
      'Data Converter comenzó como un proyecto paralelo para resolver un problema sencillo: cada vez que necesitaba convertir un CSV a JSON o un archivo de Excel a XML, tenía que buscar alguna herramienta en línea aleatoria que o bien requería una carga al servidor. La mayoría de esas herramientas también conservaban mis datos, lo cual no me parecía bien.',
      'Así que construí esto. Sin servidores, sin cargas, sin cuentas. Todo se ejecuta directamente en tu navegador. Tus datos permanecen en tu máquina — así de simple.',
      'La herramienta admite JSON, CSV, Excel (.xlsx), XML, YAML, tablas HTML, Markdown y PDF. Puedes pegar datos, cargar un archivo u obtenerlos desde una URL. Maneja estructuras anidadas, archivos grandes y te ofrece un editor de tablas completo con búsqueda, ordenamiento, buscar y reemplazar y edición en línea.',
      'Sigo añadiendo funciones según lo que la gente pide y lo que me resulta útil a mí mismo. Si algo falta o no funciona, solo ponte en contacto a través de la página de contacto — de hecho leo cada mensaje.',
      'Creado y mantenido por <a href="https://github.com/NaimBiswas" target="_blank" rel="noopener">Naim Biswas</a>.',
    ],
  },
  contact: {
    meta: {
      title: 'Contacto',
      description:
        'Ponte en contacto con el equipo de Data Converter. Reporta errores, sugiere funciones o haz preguntas.',
      keywords: 'contacto, soporte, reportar error, conversor de datos',
    },
    h1: 'Contacto',
    breadcrumbs: [
      { name: 'Inicio', url: '/' },
      { name: 'Contacto', url: '/contact' },
    ],
    intro:
      '¿Tienes una pregunta, encontraste un error o quieres sugerir una función? El mejor lugar es <strong>GitHub Issues</strong> — así todos pueden ver la discusión y las soluciones.',
    buttonLabel: 'Abrir un Issue en GitHub →',
    buttonUrl: 'https://github.com/NaimBiswas/convert/issues/new',
    emailIntro:
      'También puedes enviarme un correo directamente a <a href="mailto:nayeembiswas2@gmail.com">nayeembiswas2@gmail.com</a>. Intento responder en un día o dos.',
    email: 'nayeembiswas2@gmail.com',
    bugHint:
      'Si reportas un error, incluye tu formato de origen, el formato de destino y cualquier mensaje de error que hayas visto. Una muestra de los datos (o del error) me ayuda a localizarlo mucho más rápido.',
  },
  faq: {
    meta: {
      title: 'Preguntas frecuentes',
      description:
        'Preguntas comunes sobre la herramienta Data Converter — privacidad, formatos, límites y solución de problemas.',
      keywords: 'preguntas frecuentes, ayuda con conversor de datos, formatos compatibles, solución de problemas',
    },
    h1: 'Preguntas frecuentes',
    breadcrumbs: [
      { name: 'Inicio', url: '/' },
      { name: 'Preguntas frecuentes', url: '/faq' },
    ],
    faqs: [
      {
        q: '¿Mis datos están seguros? ¿Almacenan algo?',
        a: 'Todo se ejecuta en tu navegador — no se carga nada en ningún servidor. Tus datos nunca abandonan tu dispositivo. No almaceno, registro ni siquiera veo lo que conviertes. Tu preferencia de tema (modo claro/oscuro) se guarda localmente para que persista entre visitas. Todos los datos de conversión se borran cuando cierras la pestaña.',
      },
      {
        q: '¿Qué formatos admiten?',
        a: '<strong>Entrada:</strong> JSON, CSV, Excel (.xlsx), XML, YAML<br><strong>Salida:</strong> JSON, CSV, Excel (.xlsx), XML, YAML, Tabla HTML, Markdown, PDF<br>Puedes convertir de cualquier formato de entrada a cualquier formato de salida. Por ejemplo, pega XML y descarga como CSV, o carga Excel y exporta como JSON.',
      },
      {
        q: '¿Hay un límite de tamaño de archivo?',
        a: 'Como todo se ejecuta en tu navegador, el límite depende de la memoria de tu dispositivo. La mayoría de los archivos de hasta 50-100 MB funcionan bien en una computadora portátil típica. Las cargas de Excel tienen un límite de 50 MB en la interfaz. Si encuentras problemas de rendimiento, intenta dividir tus datos en archivos más pequeños.',
      },
      {
        q: '¿Necesito una cuenta?',
        a: 'No. No hay cuentas, ni registros, ni inicios de sesión. Solo abre el sitio y empieza a convertir.',
      },
      {
        q: '¿Puedo editar mis datos después de convertirlos?',
        a: 'Sí. Después de la conversión, obtienes un editor de tablas completo. Puedes hacer doble clic en cualquier celda para editar, buscar y filtrar filas, ordenar por columnas, añadir o eliminar filas y columnas, transponer la tabla, hacer buscar y reemplazar en todas las celdas, aplicar transformaciones de mayúsculas (UPPER, lower, Capitalize) a una columna, deshacer y rehacer cambios y eliminar filas vacías o duplicados.',
      },
      {
        q: 'La conversión se ve mal — ¿qué hago?',
        a: 'Primero, asegúrate de que tus datos de entrada estén bien formados. JSON necesita comillas y corchetes adecuados. CSV necesita una fila de encabezado. Para JSON o XML anidados, la herramienta aplana las claves con <code>_</code> como separador — esto funciona mejor para matrices de objetos. Si aún tienes problemas, <a href="/contact">ponte en contacto</a> con tu formato de origen, formato de destino y una muestra de los datos (o el mensaje de error) y le echaré un vistazo.',
      },
    ],
  },
  docs: {
    meta: {
      title: 'Documentación — Cómo usar el Conversor de Datos',
      description:
        'Aprende a convertir entre JSON, CSV, Excel, XML, YAML, Markdown, HTML y PDF. Guía completa con atajos, herramientas e información de privacidad.',
      keywords: 'documentación, cómo convertir, conversión de formatos, conversor de datos',
    },
    h1: 'Cómo usar el Conversor de Datos',
    breadcrumbs: [
      { name: 'Inicio', url: '/' },
      { name: 'Documentación', url: '/docs' },
    ],
    blocks: [
      {
        type: 'cards',
        heading: 'Formatos compatibles',
        cards: [
          { h3: 'JSON', p: 'JavaScript Object Notation — objetos anidados o planos, matrices de objetos.' },
          { h3: 'CSV', p: 'Valores separados por comas — se requiere fila de encabezado.' },
          { h3: 'Excel (XLSX)', p: 'Libros de Microsoft Excel con soporte de varias hojas. Solo carga.' },
          { h3: 'XML', p: 'Lenguaje de marcado extensible — aplana elementos anidados con el separador <code>_</code>.' },
          { h3: 'YAML', p: 'YAML Ain\u2019t Markup Language — serialización de datos legible por humanos.' },
          { h3: 'Tabla HTML', p: 'Solo salida — muestra los datos como una <code>&lt;table&gt;</code> HTML.' },
          { h3: 'Markdown', p: 'Solo salida — muestra los datos como una tabla Markdown estilo GitHub.' },
          { h3: 'PDF', p: 'Solo salida — exporta los datos como un documento PDF.' },
        ],
      },
      {
        type: 'section',
        heading: 'Métodos de entrada',
        blocks: [
          {
            type: 'ul',
            items: [
              '<strong>Pegar</strong> — pega los datos directamente en el editor.',
              '<strong>Cargar</strong> — arrastra y suelta o busca un archivo (.json, .csv, .xml, .yaml, .xlsx hasta 50 MB).',
              '<strong>URL</strong> — obtiene datos de una URL remota. Habilita el proxy CORS para APIs que bloquean solicitudes directas.',
            ],
          },
        ],
      },
      {
        type: 'section',
        heading: 'Cómo convertir',
        blocks: [
          {
            type: 'ol',
            items: [
              'Selecciona el formato de origen (<strong>Desde</strong>) y el formato de destino (<strong>Hasta</strong>) en la barra del conversor.',
              'Pega, carga u obtén tus datos.',
              'Haz clic en <strong>Convertir</strong> o presiona <kbd>Ctrl+Enter</kbd>.',
              'Vista previa, búsqueda, ordenamiento y edición de la tabla.',
              'Descarga el resultado en cualquier formato compatible o copia al portapapeles.',
            ],
          },
        ],
      },
      {
        type: 'section',
        heading: 'Herramientas de tabla',
        blocks: [
          {
            type: 'ul',
            items: [
              '<strong>Buscar</strong> — filtra las filas por cualquier valor de columna.',
              '<strong>Ordenar</strong> — haz clic en el encabezado de una columna para ordenar ascendente/descendente.',
              '<strong>Edición en línea</strong> — haz doble clic en cualquier celda para editar su valor.',
              '<strong>Buscar &amp; Reemplazar</strong> — busca y reemplaza texto en todas las celdas.',
              '<strong>Transponer</strong> — intercambia filas y columnas.',
              '<strong>Transformaciones de mayúsculas</strong> — UPPER, lower o Capitalize en una columna completa.',
              '<strong>Añadir / Eliminar</strong> filas y columnas.',
              '<strong>Deshacer / Rehacer</strong> — <kbd>Ctrl+Z</kbd> y <kbd>Ctrl+Shift+Z</kbd>.',
              '<strong>Reordenar columnas</strong> — arrastra los encabezados de las columnas para reordenar.',
              '<strong>Eliminar vacíos / duplicados</strong> — limpia tus datos.',
            ],
          },
        ],
      },
      {
        type: 'section',
        heading: 'Exportar',
        blocks: [
          {
            type: 'p',
            html: 'Los botones de descarga se aplican a los datos <em>filtrados</em> (se respetan la búsqueda y el ordenamiento). El portapapeles copia el conjunto de datos completo.',
          },
        ],
      },
      {
        type: 'section',
        heading: 'Menú de herramientas',
        blocks: [
          {
            type: 'ul',
            items: [
              '<strong>Generar datos aleatorios</strong> — crea un conjunto de datos CSV aleatorio para probar.',
              '<strong>Codificar / Decodificar Base64</strong> — codifica o decodifica el contenido del editor.',
              '<strong>Codificar / Decodificar Hex</strong> — codifica o decodifica el contenido del editor.',
            ],
          },
        ],
      },
      {
        type: 'section',
        heading: 'Privacidad',
        blocks: [
          {
            type: 'p',
            html: 'Todo el procesamiento ocurre completamente en tu navegador. No se envían datos a ningún servidor. La obtención por URL con el proxy CORS habilitado se enruta a través de un servicio proxy de terceros.',
          },
        ],
      },
      {
        type: 'shortcuts',
        heading: 'Atajos de teclado',
        columns: { shortcut: 'Atajo', action: 'Acción' },
        rows: [
          { shortcut: 'Ctrl+Enter', action: 'Convertir' },
          { shortcut: 'Ctrl+Z', action: 'Deshacer' },
          { shortcut: 'Ctrl+Shift+Z', action: 'Rehacer' },
          { shortcut: 'Escape', action: 'Cerrar buscar/reemplazar o barra de mayúsculas' },
        ],
      },
    ],
  },
  privacy: {
    meta: {
      title: 'Política de privacidad',
      description:
        'Política de privacidad de Data Converter — no recopilamos, almacenamos ni compartimos tus datos. Todo se ejecuta en tu navegador.',
      keywords: 'política de privacidad, privacidad de datos, basado en el navegador, sin carga',
    },
    h1: 'Política de privacidad',
    breadcrumbs: [
      { name: 'Inicio', url: '/' },
      { name: 'Privacidad', url: '/privacy' },
    ],
    lastUpdated: 'Última actualización: julio de 2026',
    sections: [
      {
        heading: 'Lo que cubre esto',
        blocks: [
          {
            type: 'p',
            html: 'Esta política de privacidad explica cómo Data Converter (\u201Cnosotros\u201D, \u201CyO\u201D, \u201Ceste sitio\u201D) maneja tu información cuando usas las herramientas de este sitio web.',
          },
        ],
      },
      {
        heading: 'Sin recopilación de datos',
        blocks: [
          {
            type: 'p',
            html: 'Toda la conversión, el análisis y el procesamiento de archivos ocurre completamente en tu navegador usando JavaScript. Tus datos — ya sea que los pegues, los cargues o los obtengas desde una URL — nunca abandonan tu dispositivo. No tengo servidores que reciban o almacenen tus archivos.',
          },
        ],
      },
      {
        heading: 'Sin cuentas, sin seguimiento',
        blocks: [
          {
            type: 'p',
            html: 'No necesitas una cuenta para usar esta herramienta. No uso scripts de análisis que rastreen tu comportamiento en sitios web sin tu consentimiento. El único análisis que ejecuto es Google Analytics con datos básicos de visitas de página (sin seguimiento a nivel de usuario), lo que me ayuda a entender qué funciones usa más la gente.',
          },
        ],
      },
      {
        heading: 'Cookies &amp; consentimiento',
        blocks: [
          {
            type: 'p',
            html: 'Uso cookies mínimas:',
          },
          {
            type: 'ul',
            items: [
              'Una cookie para recordar tu preferencia de tema (modo claro/oscuro). Es estrictamente funcional y siempre se establece.',
              'Google Analytics usa sus propias cookies para estadísticas agregadas de visitas de página — solo se cargan después de que aceptes el banner de cookies.',
              'Google AdSense establece cookies para la entrega y personalización de anuncios — solo se cargan después de que aceptes el banner de cookies.',
            ],
          },
          {
            type: 'p',
            html: 'Los scripts no esenciales (análisis y anuncios) están bloqueados hasta que hagas clic en \u201CEntendido\u201D en el banner de cookies. Tu elección se guarda localmente para que el banner no vuelva a aparecer. Consulta nuestra <a href="/cookies">Política de cookies</a> para más detalles.',
          },
        ],
      },
      {
        heading: 'Publicidad',
        blocks: [
          {
            type: 'p',
            html: 'Este sitio usa Google AdSense para mostrar anuncios. Google, como proveedor externo, usa cookies para mostrar anuncios basados en las visitas previas de un usuario a este sitio web y a otros sitios. El uso que Google hace de las cookies publicitarias le permite a él y a sus socios mostrar anuncios basados en tu visita a este sitio y a otros sitios de internet.',
          },
          {
            type: 'p',
            html: 'Puedes optar por no participar en la publicidad personalizada visitando <a href="https://adssettings.google.com" target="_blank" rel="noopener">Configuración de anuncios de Google</a>. También puedes rechazar las cookies de proveedores externos visitando <a href="https://optout.networkadvertising.org" target="_blank" rel="noopener">la página de exclusión de la Network Advertising Initiative</a>.',
          },
          {
            type: 'p',
            html: 'Los scripts de AdSense solo se cargan después de que aceptes el banner de cookies. No se establecen cookies de anuncios hasta que des tu consentimiento.',
          },
        ],
      },
      {
        heading: 'Proveedores externos',
        blocks: [
          {
            type: 'ul',
            items: [
              '<strong>Google AdSense</strong> — muestra anuncios contextuales y personalizados. Usa cookies (<code>_gads</code>, <code>_gac_</code>, <code>IDE</code>) para la entrega de anuncios y el límite de frecuencia.',
              '<strong>Google Analytics</strong> — recopila datos agregados de visitas de página. Usa cookies (<code>_ga</code>, <code>_gid</code>, <code>_gat</code>) para estadísticas de uso anónimas.',
              '<strong>Google AMP</strong> — muestra anuncios automáticos en páginas compatibles.',
            ],
          },
          {
            type: 'p',
            html: 'Estos servicios pueden recopilar información sobre tus visitas a diferentes sitios web para ofrecer publicidad relevante. Puedes revisar la Política de privacidad de Google en <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">policies.google.com/privacy</a>.',
          },
        ],
      },
      {
        heading: 'Servicios externos',
        blocks: [
          {
            type: 'p',
            html: 'Si usas la función <strong>Obtención por URL</strong> con el proxy CORS habilitado, tu solicitud se enruta a través de un servicio de proxy de terceros. Ese servicio ve la URL que solicitas pero no tu información personal. El proxy CORS está desactivado por defecto y solo se activa cuando marcas la casilla.',
          },
        ],
      },
      {
        heading: 'Cambios',
        blocks: [
          {
            type: 'p',
            html: 'Si esta política cambia, actualizaré la fecha en la parte superior y publicaré un aviso en el sitio para los cambios significativos.',
          },
        ],
      },
      {
        heading: 'Contacto',
        blocks: [
          {
            type: 'p',
            html: '¿Preguntas sobre esta política o sobre tus datos? <a href="/contact">Ponte en contacto</a> o <a href="https://github.com/NaimBiswas/convert/issues/new" target="_blank" rel="noopener">abre un issue en GitHub</a>.',
          },
        ],
      },
    ],
  },
  terms: {
    meta: {
      title: 'Términos y condiciones',
      description:
        'Términos y condiciones de Data Converter — uso gratuito, sin garantía, bajo tu responsabilidad.',
      keywords: 'términos y condiciones, condiciones de servicio, conversor de datos',
    },
    h1: 'Términos &amp; condiciones',
    breadcrumbs: [
      { name: 'Inicio', url: '/' },
      { name: 'Términos', url: '/terms' },
    ],
    lastUpdated: 'Última actualización: julio de 2026',
    sections: [
      {
        heading: 'Usar bajo tu propio riesgo',
        blocks: [
          {
            type: 'p',
            html: 'Data Converter se ofrece de forma gratuita, tal cual, sin ninguna garantía. Me esfuerzo por asegurar que las conversiones sean precisas, pero no puedo garantizar que sean perfectas para cada caso límite. Eres responsable de verificar tus datos convertidos antes de usarlos en producción o en cualquier contexto importante.',
          },
        ],
      },
      {
        heading: 'Lo que puedes hacer',
        blocks: [
          {
            type: 'p',
            html: 'Eres libre de usar esta herramienta con fines personales, comerciales o educativos. No se requiere atribución.',
          },
        ],
      },
      {
        heading: 'Lo que no puedes hacer',
        blocks: [
          {
            type: 'ul',
            items: [
              'Extraer, rastrear o descargar sistemáticamente contenido de este sitio.',
              'Usar la herramienta para procesar contenido ilegal o datos sobre los que no tienes derechos.',
              'Intentar romper, sobrecargar o explotar el sitio.',
            ],
          },
        ],
      },
      {
        heading: 'Sin responsabilidad',
        blocks: [
          {
            type: 'p',
            html: 'No soy responsable de ningún daño o pérdida de datos resultante del uso de esta herramienta. Como todo el procesamiento ocurre localmente en tu navegador, no tengo acceso a tus datos y no puedo ser responsable de lo que les suceda.',
          },
        ],
      },
      {
        heading: 'Cambios',
        blocks: [
          {
            type: 'p',
            html: 'Puedo actualizar estos términos. El uso continuado después de los cambios significa que aceptas los términos actualizados.',
          },
        ],
      },
      {
        heading: 'Contacto',
        blocks: [
          {
            type: 'p',
            html: 'Si tienes preguntas sobre estos términos, <a href="/contact">ponte en contacto</a>.',
          },
        ],
      },
    ],
  },
  cookies: {
    meta: {
      title: 'Política de cookies',
      description: 'Política de cookies de Data Converter — solo cookies mínimas y funcionales.',
      keywords: 'política de cookies, cookies, Google Analytics, conversor de datos',
    },
    h1: 'Política de cookies',
    breadcrumbs: [
      { name: 'Inicio', url: '/' },
      { name: 'Cookies', url: '/cookies' },
    ],
    lastUpdated: 'Última actualización: julio de 2026',
    intro: 'Data Converter usa muy pocas cookies. Aquí tienes exactamente lo que hacen.',
    sections: [
      {
        heading: 'Cookies funcionales',
        blocks: [
          {
            type: 'cookieTable',
            columns: { cookie: 'Cookie', purpose: 'Propósito', duration: 'Duración' },
            rows: [
              {
                cookie: 'theme',
                purpose: 'Recuerda tu preferencia de modo claro/oscuro para que el sitio se vea bien cuando vuelvas.',
                duration: '1 año',
              },
            ],
          },
        ],
      },
      {
        heading: 'Consentimiento de cookies',
        blocks: [
          {
            type: 'p',
            html: 'Cuando visitas el sitio por primera vez, aparece un banner pidiendo tu consentimiento para establecer cookies no esenciales. Los scripts de análisis y publicidad solo se cargan después de que hagas clic en \u201CEntendido\u201D. Tu elección se guarda en localStorage para que no vuelvas a ver el banner. Puedes borrar los datos de tu navegador para restablecer esta preferencia.',
          },
        ],
      },
      {
        heading: 'Análisis',
        blocks: [
          {
            type: 'p',
            html: 'Uso Google Analytics para ver qué páginas visita la gente y cómo se usa el sitio. Google Analytics establece sus propias cookies (<code>_ga</code>, <code>_gid</code>, <code>_gat</code>) que rastrean datos de uso anónimos y agregados. No uso estos datos para identificar a usuarios individuales. El análisis solo se carga después de que aceptes el banner de cookies.',
          },
        ],
      },
      {
        heading: 'Publicidad',
        blocks: [
          {
            type: 'p',
            html: 'Muestro anuncios a través de Google AdSense para respaldar el sitio. AdSense establece cookies para la personalización de anuncios y el límite de frecuencia. Estos scripts solo se cargan después de que aceptes el banner de cookies.',
          },
        ],
      },
      {
        heading: 'Administrar cookies',
        blocks: [
          {
            type: 'p',
            html: 'La mayoría de los navegadores te permiten controlar las cookies a través de su configuración. Puedes bloquear o eliminar cookies en cualquier momento. Si desactivas las cookies, la preferencia de tema no persistirá entre visitas, pero la herramienta conversora seguirá funcionando bien.',
          },
        ],
      },
      {
        heading: 'Contacto',
        blocks: [
          {
            type: 'p',
            html: '¿Preguntas sobre las cookies? <a href="/contact">Házmelo saber</a>.',
          },
        ],
      },
    ],
  },
};
