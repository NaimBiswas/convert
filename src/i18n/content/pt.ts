import type { HomeContent, ConverterContentMap } from './types';

export const pt: ConverterContentMap = {
  'json-to-csv': {
    meta: {
      title: 'Conversor de JSON para CSV — Converter JSON para CSV online grátis',
      description:
        'Converta JSON para CSV online grátis. Cole o JSON, carregue um ficheiro ou obtenha a partir de URL. Lida com objetos aninhados, arrays e ficheiros grandes. 100% no navegador, sem carregamentos.',
      keywords:
        'json para csv, conversor de json para csv, converter json para csv, json para csv online, json para csv grátis',
    },
    h1: 'Conversor de JSON para CSV',
    desc: 'Converta os seus dados JSON para o formato CSV instantaneamente — diretamente no seu navegador. Suporta objetos aninhados (achatados com separador <code>_</code>), arrays de objetos e ficheiros grandes. Sem carregamentos, sem servidores, sem limites.',
    from: 'JSON',
    to: 'CSV',
    slug: 'json-to-csv',
    path: '/json-to-csv-converter',
    sections: [
      {
        heading: 'Por que converter JSON para CSV?',
        blocks: [
          {
            type: 'p',
            html: 'O JSON é o formato nativo das APIs e das aplicações web, mas o CSV é o que as folhas de cálculo, as bases de dados e as ferramentas de análise falam nativamente. Converter JSON para CSV permite-lhe pegar em respostas de API, exportações de configuração ou payloads de webhook e abri-los diretamente no Excel, Google Sheets, ou importá-los para PostgreSQL, MySQL ou qualquer pipeline de análise de dados.',
          },
          {
            type: 'p',
            html: 'Os casos de uso mais comuns incluem exportar registos de utilizadores de uma REST API para uma equipa de marketing, converter dados de geolocalização de uma API de mapas numa tabela para análise GIS, ou transformar catálogos de produtos de e-commerce de feeds JSON em CSV para ferramentas de comparação de preços.',
          },
        ],
      },
      {
        heading: 'Como o JSON aninhado é processado',
        blocks: [
          {
            type: 'p',
            html: 'O CSV é plano — cada linha tem as mesmas colunas. Quando o seu JSON tem objetos aninhados (como <code>&lbrace;"user": &lbrace;"name": "Alice", "address": &lbrace;"city": "NYC"&rbrace;&rbrace;&rbrace;</code>), o conversor achata as chaves usando um separador de underscore: <code>user_name</code>, <code>user_address_city</code>. Arrays de objetos expandem-se em várias linhas. Arrays primitivos (como <code>["red", "blue"]</code>) são unidos com ponto e vírgula numa única célula.',
          },
          {
            type: 'p',
            html: 'Isto significa que uma resposta de API profundamente aninhada se torna numa tabela limpa e plana sem perder qualquer dado. Pode ver cada campo como um cabeçalho de coluna e cada registo como uma linha.',
          },
        ],
      },
      {
        heading: 'Como converter JSON para CSV',
        blocks: [
          {
            type: 'list',
            ordered: true,
            items: [
              'Selecione <strong>JSON</strong> como formato de origem e <strong>CSV</strong> como formato de destino',
              'Cole o seu JSON, carregue um ficheiro <code>.json</code>, ou obtenha a partir de um URL',
              'Clique em <strong>Converter</strong> ou prima <kbd>Ctrl+Enter</kbd>',
              'Pré-visualize o resultado, edite diretamente se necessário e depois descarregue como CSV',
            ],
          },
        ],
      },
      {
        heading: 'Funcionalidades',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Lida com objetos JSON aninhados — achata chaves com separador <code>_</code>',
              'Arrays de objetos tornam-se linhas; arrays primitivos são unidos com ponto e vírgula',
              'Inferência de tipos para números, booleanos, datas e strings',
              'Deteção inteligente de cabeçalhos e ordenação de colunas',
              'Edição direta, ordenação e filtragem antes do download',
            ],
          },
        ],
      },
      {
        heading: 'Exemplos do mundo real',
        blocks: [
          {
            type: 'p',
            html: '<strong>Exportação de dados de API:</strong> Uma loja de e-commerce obtém dados de produtos da API da Shopify (JSON). Converter para CSV permite à equipa de inventário importá-los para a sua folha de cálculo de gestão de armazém.',
          },
          {
            type: 'p',
            html: '<strong>Migração de base de dados:</strong> Um programador exporta perfis de utilizadores do MongoDB como JSON, converte para CSV e importa em massa para PostgreSQL usando <code>COPY</code>.',
          },
          {
            type: 'p',
            html: '<strong>Análise de dados:</strong> Um analista de dados obtém JSON da Google Analytics Reporting API, converte para CSV e abre-o em R ou Python pandas para análise estatística.',
          },
        ],
      },
    ],
  },
  'csv-to-json': {
    meta: {
      title: 'Conversor de CSV para JSON — Converter CSV para JSON online grátis',
      description:
        'Converta CSV para JSON online grátis. Cole dados CSV ou carregue um ficheiro .csv. Deteção inteligente de cabeçalhos, inferência de tipos e suporte a objetos aninhados. 100% no navegador.',
      keywords:
        'csv para json, conversor de csv para json, converter csv para json, csv para json online, csv para json grátis',
    },
    h1: 'Conversor de CSV para JSON',
    desc: 'Transforme as suas folhas de cálculo CSV em objetos JSON limpos — instantaneamente. Perfeito para importar dados tabulares em APIs, bases de dados ou aplicações JavaScript. Deteção inteligente de cabeçalhos e tipos de colunas incluída.',
    from: 'CSV',
    to: 'JSON',
    slug: 'csv-to-json',
    path: '/csv-to-json-converter',
    sections: [
      {
        heading: 'Por que converter CSV para JSON?',
        blocks: [
          {
            type: 'p',
            html: 'O CSV é a língua franca das folhas de cálculo e das exportações de bases de dados, mas o JSON é o que as APIs web, as bases de dados NoSQL e as aplicações JavaScript/TypeScript modernas consomem nativamente. Converter CSV para JSON permite-lhe pegar em qualquer dado tabular — de extratos bancários a resultados de inquéritos — e usá-lo diretamente no código da sua aplicação.',
          },
          {
            type: 'p',
            html: 'Os cenários típicos incluem carregar inventário de produtos de uma folha de cálculo ERP para um CMS headless, importar listas de clientes de exportações CSV para uma coleção Firebase ou MongoDB, ou preparar fixtures de teste a partir de dados tabulares existentes para testes unitários.',
          },
        ],
      },
      {
        heading: 'Como as linhas se tornam JSON',
        blocks: [
          {
            type: 'p',
            html: 'Cada linha do CSV torna-se num objeto JSON. A primeira linha fornece as chaves (cabeçalhos das colunas) e as linhas seguintes fornecem os valores. Por exemplo:',
          },
          {
            type: 'code',
            html: 'name,age,city<br>Alice,30,NYC<br>Bob,25,LA',
          },
          {
            type: 'p',
            html: 'torna-se:',
          },
          {
            type: 'code',
            html: '[&lbrace;"name":"Alice","age":30,"city":"NYC"&rbrace;,&lbrace;"name":"Bob","age":25,"city":"LA"&rbrace;]',
          },
          {
            type: 'p',
            html: 'O conversor deteta automaticamente os tipos das colunas: strings entre aspas permanecem strings, números sem aspas tornam-se números e os formatos de data comuns são preservados. Células vazias são incluídas como <code>null</code> para que o código a jusante possa tratar explicitamente dados em falta.',
          },
        ],
      },
      {
        heading: 'Como converter CSV para JSON',
        blocks: [
          {
            type: 'list',
            ordered: true,
            items: [
              'Selecione <strong>CSV</strong> como formato de origem e <strong>JSON</strong> como formato de destino',
              'Cole o seu CSV, carregue um ficheiro <code>.csv</code>, ou obtenha a partir de um URL',
              'Clique em <strong>Converter</strong> ou prima <kbd>Ctrl+Enter</kbd>',
              'Pré-visualize o resultado, edite diretamente se necessário e depois descarregue como JSON',
            ],
          },
        ],
      },
      {
        heading: 'Funcionalidades',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Deteta tipos de colunas: strings, números, booleanos, datas',
              'A primeira linha é tratada como cabeçalhos para os nomes das chaves',
              'Saída como array de objetos (padrão) ou array de arrays',
              'Preserva células vazias em vez de chaves em falta',
              'Edição direta, ordenação e filtragem antes do download',
            ],
          },
        ],
      },
      {
        heading: 'Casos de uso comuns',
        blocks: [
          {
            type: 'p',
            html: '<strong>Integração de API:</strong> O seu parceiro envia um CSV de transações diárias. Converta para JSON e faça POST diretamente para o seu endpoint REST.',
          },
          {
            type: 'p',
            html: '<strong>Seed de base de dados:</strong> Exporte uma tabela de referência do MySQL como CSV, converta para JSON e use-a como dados de seed para MongoDB ou para uma coleção Firebase.',
          },
          {
            type: 'p',
            html: '<strong>Desenvolvimento frontend:</strong> Um designer fornece dados numa folha de cálculo. Converta para JSON e importe-os diretamente para o estado de um componente React/Vue ou para um mock service worker.',
          },
        ],
      },
    ],
  },
  'excel-to-json': {
    meta: {
      title: 'Conversor de Excel para JSON — Converter XLSX para JSON online grátis',
      description:
        'Converta Excel (.xlsx) para JSON online grátis. Carregue a sua folha de cálculo e obtenha um JSON limpo. Suporte a várias folhas, inferência de tipos e tratamento de objetos aninhados. 100% no navegador.',
      keywords:
        'excel para json, xlsx para json, conversor de excel para json, converter excel para json, xlsx para json online',
    },
    h1: 'Conversor de Excel para JSON',
    desc: 'Converta as suas folhas de cálculo Excel (<code>.xlsx</code>) para o formato JSON com um clique. Suporta várias folhas, deteção de tipos de colunas e ficheiros grandes até 50 MB. Todo o processamento acontece no seu navegador.',
    from: 'Excel (XLSX)',
    to: 'JSON',
    slug: 'excel-to-json',
    path: '/excel-to-json-converter',
    sections: [
      {
        heading: 'Por que converter Excel para JSON?',
        blocks: [
          {
            type: 'p',
            html: 'As folhas de cálculo Excel são a espinha dorsal dos dados empresariais — relatórios financeiros, listas de inventário, registos de RH, resultados de inquéritos. Mas o XLSX é um formato binário que nenhuma API web, base de dados ou script do servidor consegue ler diretamente. Converter Excel para JSON liberta esses dados para uso programático: alimentar um endpoint REST, importar para MongoDB ou Firebase, ou usá-los num dashboard React/Vue.',
          },
        ],
      },
      {
        heading: 'Como os dados do Excel são mapeados para JSON',
        blocks: [
          {
            type: 'p',
            html: 'Cada folha torna-se num array JSON de objetos. A primeira linha da folha fornece os nomes das propriedades (chaves) e cada linha seguinte torna-se num objeto JSON. Para livros de trabalho com várias folhas, pode selecionar exatamente qual a folha a converter.',
          },
          {
            type: 'p',
            html: 'A formatação das células é tratada automaticamente: datas tornam-se strings ISO 8601 (por exemplo, <code>"2026-03-15T00:00:00.000Z"</code>), números permanecem números sem aspas e células vazias são convertidas em <code>null</code> para que o código a jusante possa tratar explicitamente dados em falta. As fórmulas são avaliadas para os seus valores calculados atuais antes da conversão.',
          },
        ],
      },
      {
        heading: 'Como converter Excel para JSON',
        blocks: [
          {
            type: 'list',
            ordered: true,
            items: [
              'Selecione <strong>Excel (XLSX)</strong> como formato de origem e <strong>JSON</strong> como formato de destino',
              'Carregue o seu ficheiro <code>.xlsx</code> via arrastar &amp; largar ou procure',
              'Escolha uma folha se o livro de trabalho tiver várias folhas',
              'Clique em <strong>Converter</strong> ou prima <kbd>Ctrl+Enter</kbd>',
              'Pré-visualize, edite e descarregue como JSON',
            ],
          },
        ],
      },
      {
        heading: 'Funcionalidades',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Suporte a livros de trabalho com várias folhas — selecione qual a folha a converter',
              'Primeira linha detetada automaticamente como nomes de propriedades JSON',
              'Inferência de tipos para números, datas, booleanos e strings',
              'Células vazias tornam-se <code>null</code> no JSON',
              'Ficheiros até 50 MB suportados',
            ],
          },
        ],
      },
      {
        heading: 'Exemplos do mundo real',
        blocks: [
          {
            type: 'p',
            html: '<strong>Relatórios financeiros:</strong> A sua equipa financeira partilha um P&amp;L mensal como um livro de trabalho Excel. Converta cada folha para JSON e alimente um dashboard de análise personalizado.',
          },
          {
            type: 'p',
            html: '<strong>Migração de dados:</strong> Um sistema legado apenas exporta registos de clientes como ficheiros .xlsx. Converta para JSON e importe em massa para PostgreSQL, MongoDB ou um data warehouse na nuvem como BigQuery.',
          },
          {
            type: 'p',
            html: '<strong>Gestão de conteúdo:</strong> Um catálogo de produtos vive no Excel com colunas para SKU, nome, preço e descrição. Converta para JSON e envie diretamente para um CMS headless ou API de e-commerce.',
          },
        ],
      },
    ],
  },
  'json-to-excel': {
    meta: {
      title: 'Conversor de JSON para Excel — Converter JSON para XLSX online grátis',
      description:
        'Converta JSON para Excel (.xlsx) online grátis. Cole JSON ou carregue um ficheiro e obtenha uma folha de cálculo para download. Lida com objetos aninhados, arrays e grandes conjuntos de dados. 100% no navegador.',
      keywords:
        'json para excel, json para xlsx, conversor de json para excel, converter json para excel, json para xlsx online',
    },
    h1: 'Conversor de JSON para Excel',
    desc: 'Converta dados JSON numa folha de cálculo Excel descarregável (<code>.xlsx</code>). Perfeito para pegar em respostas de API, ficheiros de configuração ou dados web e transformá-los em folhas de cálculo prontas para negócio, com tipos de colunas e formatação corretos.',
    from: 'JSON',
    to: 'Excel (XLSX)',
    slug: 'json-to-excel',
    path: '/json-to-excel-converter',
    sections: [
      {
        heading: 'Por que converter JSON para Excel?',
        blocks: [
          {
            type: 'p',
            html: 'O JSON é o formato nativo das APIs e das ferramentas de desenvolvimento, mas o Excel é o que gestores, analistas e equipas de negócio esperam. Converter JSON para XLSX colmata essa lacuna — pegue em respostas brutas de API, payloads de webhook ou exportações de bases de dados e transforme-os em folhas de cálculo limpas que qualquer pessoa pode abrir no Microsoft Excel, Google Sheets ou Apple Numbers sem qualquer configuração técnica.',
          },
          {
            type: 'p',
            html: 'Isto é especialmente útil quando precisa de partilhar dados com partes interessadas não técnicas: em vez de lhes entregar um ficheiro JSON e explicar como lê-lo, entrega-lhes uma folha de cálculo familiar com cabeçalhos de colunas, tipos de dados e formatação corretos.',
          },
        ],
      },
      {
        heading: 'Como o JSON aninhado aparece no Excel',
        blocks: [
          {
            type: 'p',
            html: 'Os dados JSON são frequentemente aninhados — objetos dentro de objetos, arrays de objetos, tipos mistos. O conversor achata as chaves aninhadas usando um separador de underscore. Por exemplo, <code>&lbrace;"user": &lbrace;"name": "Alice", "contact": &lbrace;"email": "a@b.com"&rbrace;&rbrace;&rbrace;</code> torna-se nas colunas <code>user_name</code> e <code>user_contact_email</code>.',
          },
          {
            type: 'p',
            html: 'Arrays de objetos expandem-se em várias linhas. Arrays primitivos (como <code>["red", "blue"]</code>) são unidos numa única célula com ponto e vírgula. Cada objeto JSON torna-se numa linha e cada par chave-valor torna-se numa célula com o tipo de dados correto — números permanecem numéricos, datas permanecem datas, para que tabelas dinâmicas e fórmulas funcionem imediatamente.',
          },
        ],
      },
      {
        heading: 'Como converter JSON para Excel',
        blocks: [
          {
            type: 'list',
            ordered: true,
            items: [
              'Selecione <strong>JSON</strong> como formato de origem e <strong>Excel (XLSX)</strong> como formato de destino',
              'Cole o seu JSON, carregue um ficheiro <code>.json</code>, ou obtenha a partir de um URL',
              'Clique em <strong>Converter</strong> ou prima <kbd>Ctrl+Enter</kbd>',
              'Pré-visualize a tabela, personalize o nome da folha e as larguras das colunas',
              'Descarregue como <code>.xlsx</code>',
            ],
          },
        ],
      },
      {
        heading: 'Funcionalidades',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Objetos JSON aninhados achatados em colunas com separador <code>_</code>',
              'Arrays de objetos tornam-se linhas na folha de cálculo',
              'Colunas com noção de tipo — números, datas e texto preservados',
              'Nome de folha personalizado e opções de largura automática antes do download',
              'Suporta arrays JSON, objetos aninhados e estruturas mistas',
            ],
          },
        ],
      },
      {
        heading: 'Quando usar isto',
        blocks: [
          {
            type: 'p',
            html: '<strong>Relatórios:</strong> Obtenha dados da sua API de backend (registos de utilizadores, receita, visualizações de páginas) e converta para Excel para uma apresentação de revisão de negócio semanal.',
          },
          {
            type: 'p',
            html: '<strong>Análise de dados:</strong> Exporte JSON de uma ferramenta de consulta de bases de dados, converta para XLSX e abra no Excel para tabelas dinâmicas, gráficos e análise de cenários.',
          },
          {
            type: 'p',
            html: '<strong>Entrega ao cliente:</strong> O sistema de um cliente envia dados como JSON via webhook. Converta para uma folha de cálculo limpa para que eles possam rever sem precisar de ajuda de engenharia.',
          },
        ],
      },
    ],
  },
  'excel-to-csv': {
    meta: {
      title: 'Conversor de Excel para CSV — Converter XLSX para CSV online grátis',
      description:
        'Converta Excel (.xlsx) para CSV online grátis. Carregue a sua folha de cálculo e descarregue como CSV simples. Suporte a várias folhas, limite de 50 MB, processamento no navegador.',
      keywords:
        'excel para csv, xlsx para csv, conversor de excel para csv, converter excel para csv, xlsx para csv online',
    },
    h1: 'Conversor de Excel para CSV',
    desc: 'Converta as suas folhas de cálculo Excel para o formato CSV simples — rápido, grátis e privado. Ideal para migrar dados entre sistemas, importar para bases de dados ou preparar ficheiros para ferramentas de análise de dados.',
    from: 'Excel (XLSX)',
    to: 'CSV',
    slug: 'excel-to-csv',
    path: '/excel-to-csv-converter',
    sections: [
      {
        heading: 'Por que converter Excel para CSV?',
        blocks: [
          {
            type: 'p',
            html: 'O CSV é o formato de dados de menor denominador comum — todas as aplicações de folhas de cálculo, bases de dados, pipelines ETL e ferramentas de análise de dados conseguem lê-lo sem bibliotecas especiais ou licenças. Converter XLSX para CSV remove formatação, gráficos, macros e estruturas binárias proprietárias, deixando-o com dados tabulares limpos e portáveis que funcionam em todo o lado.',
          },
          {
            type: 'p',
            html: 'Este é o passo preferido quando precisa de mover dados entre sistemas: do Excel para PostgreSQL (via <code>COPY</code>), para Python pandas ou R para análise, para um data warehouse na nuvem como BigQuery ou Snowflake, ou para uma ferramenta de importação CRM que apenas aceita ficheiros CSV.',
          },
        ],
      },
      {
        heading: 'O que o CSV perde (e por que isso é bom)',
        blocks: [
          {
            type: 'p',
            html: 'Os ficheiros Excel carregam muita sobrecarga — cores de células, tipos de letra, células fundidas, fórmulas, gráficos, tabelas dinâmicas, macros e XML personalizado. O CSV descarta tudo isso e mantém apenas os dados brutos: linhas e colunas de texto simples separadas por vírgulas. Isto torna os ficheiros CSV muito mais pequenos, mais rápidos de analisar e universalmente compatíveis. As fórmulas são avaliadas para os seus valores atuais antes da exportação, para que obtenha os resultados, não a sintaxe das fórmulas.',
          },
        ],
      },
      {
        heading: 'Como converter Excel para CSV',
        blocks: [
          {
            type: 'list',
            ordered: true,
            items: [
              'Selecione <strong>Excel (XLSX)</strong> como formato de origem e <strong>CSV</strong> como formato de destino',
              'Carregue o seu ficheiro <code>.xlsx</code> via arrastar &amp; largar ou procure',
              'Selecione uma folha se o livro de trabalho contiver várias folhas',
              'Clique em <strong>Converter</strong> ou prima <kbd>Ctrl+Enter</kbd>',
              'Pré-visualize e descarregue como CSV',
            ],
          },
        ],
      },
      {
        heading: 'Funcionalidades',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Livros de trabalho Excel com várias folhas suportados',
              'Aspas CSV corretas — lida com vírgulas e quebras de linha nas células',
              'Linha de cabeçalho preservada a partir dos nomes das colunas do Excel',
              'Ficheiros até 50 MB suportados',
              'Sem formatação ou metadados transferidos — apenas dados limpos',
            ],
          },
        ],
      },
      {
        heading: 'Quando usar esta conversão',
        blocks: [
          {
            type: 'p',
            html: '<strong>Importação de base de dados:</strong> Tem uma folha de cálculo de registos de clientes para importar em massa para PostgreSQL, MySQL ou SQLite. O CSV é o formato de entrada padrão para os comandos <code>COPY</code> e <code>LOAD DATA</code>.',
          },
          {
            type: 'p',
            html: '<strong>Análise de dados:</strong> Exporte um relatório Excel para CSV e carregue-o em Python (pandas), R ou Jupyter Notebook para modelação estatística, visualização ou machine learning.',
          },
          {
            type: 'p',
            html: '<strong>Migração de sistemas:</strong> Mudar de um CRM, ERP ou sistema de contabilidade para outro. Quase todas as ferramentas de migração aceitam CSV como formato intermédio.',
          },
          {
            type: 'p',
            html: '<strong>Controlo de versões:</strong> Acompanhe alterações a dados tabulares no git. Os ficheiros CSV fazem diff de forma limpa, enquanto os ficheiros .xlsx binários são ilegíveis para o git.',
          },
        ],
      },
    ],
  },
};

export const ptHome: HomeContent = {
  meta: {
    title: 'Conversor de Dados Online Grátis — Ferramenta JSON, CSV, Excel, XML, YAML',
    description:
      'Converta JSON, CSV, Excel, XML, YAML, HTML, Markdown e muito mais — tudo no seu navegador. Sem carregamentos, 100% privado.',
    keywords:
      'conversor de dados, json para csv, excel para json, csv para json, xml para json, ferramenta online grátis, conversor de formatos',
  },
  hero: {
    h1: 'Conversor de Dados Online Grátis — JSON, CSV, Excel, XML &amp; YAML',
    descs: [
      'O Data Converter é uma ferramenta online grátis que permite a programadores, analistas, engenheiros de QA e empresas converter dados estruturados entre JSON, XML, CSV, Excel, YAML e outros formatos.',
      'Ao contrário de muitos conversores online, tudo corre diretamente dentro do seu navegador. Os seus dados nunca são carregados para os nossos servidores, tornando as conversões seguras e privadas.',
      'Quer esteja a depurar APIs, a migrar bases de dados, a transformar ficheiros de configuração ou a preparar folhas de cálculo, o Data Converter simplifica o processo.',
    ],
    trust: 'Processamento 100% no cliente — os seus dados nunca chegam a nenhum servidor',
  },
  features: {
    heading: 'Converta entre todos os principais formatos de dados',
    cards: [
      {
        title: 'Conversor de JSON',
        desc: 'Converta JSON para CSV, Excel, XML, YAML, HTML, Markdown ou PDF. Lida com objetos aninhados, arrays e ficheiros grandes.',
        link: '/json-to-csv-converter',
        icon: 'json',
      },
      {
        title: 'Conversor de CSV',
        desc: 'Converta CSV para JSON, Excel, XML, YAML e mais. Deteção inteligente de cabeçalhos e inferência de tipos incluídas.',
        link: '/csv-to-json-converter',
        icon: 'csv',
      },
      {
        title: 'Conversor de Excel',
        desc: 'Converta Excel (.xlsx) para JSON, CSV, XML, YAML com suporte a várias folhas. Carregue e converta instantaneamente.',
        link: '/excel-to-json-converter',
        icon: 'excel',
      },
      {
        title: 'Conversor de XML &amp; YAML',
        desc: 'Converta XML ou YAML para JSON, CSV, Excel e outros formatos. Achatamento de elementos aninhados com separador de underscore.',
        link: '/json-to-excel-converter',
        icon: 'xml',
      },
    ],
  },
  howItWorks: {
    heading: 'Como converter dados online grátis',
    steps: [
      { title: 'Selecione os formatos', desc: 'escolha o formato de origem e de destino na barra do conversor' },
      { title: 'Cole ou carregue', desc: 'cole dados, carregue um ficheiro ou obtenha a partir de um URL' },
      { title: 'Converta instantaneamente', desc: 'clique em Converter ou prima Ctrl+Enter' },
      { title: 'Edite &amp; exporte', desc: 'pré-visualize, ordene, edite e descarregue em qualquer formato' },
    ],
  },
  useCases: {
    heading: 'Por que usar o Data Converter?',
    sub: 'Tudo corre no cliente — os seus ficheiros nunca saem do seu dispositivo. Sem registos, sem limites, completamente grátis.',
    cards: [
      {
        icon: 'api',
        title: 'Desenvolvimento de API',
        desc: 'Converta respostas JSON de API para CSV para análise em folhas de cálculo, ou transforme dados CSV em JSON para testes de API.',
      },
      {
        icon: 'db',
        title: 'Migrações de bases de dados',
        desc: 'Converta folhas Excel ou exportações CSV para JSON ou XML para importar em MongoDB, PostgreSQL, Firebase e mais.',
      },
      {
        icon: 'config',
        title: 'Gestão de configuração',
        desc: 'Traduza ficheiros de configuração YAML para JSON para aplicações JavaScript, ou converta configurações JSON para YAML para Docker e Kubernetes.',
      },
      {
        icon: 'report',
        title: 'Relatórios de dados',
        desc: 'Converta dados JSON ou XML em tabelas HTML formatadas ou Markdown para documentação, relatórios e apresentações.',
      },
      {
        icon: 'sheet',
        title: 'Processamento de folhas de cálculo',
        desc: 'Carregue ficheiros Excel, edite valores de células, filtre linhas e exporte como CSV, JSON ou PDF — tudo no seu navegador.',
      },
    ],
  },
  formats: {
    heading: 'Conversões suportadas',
    sub: 'Todos os pares de formatos de que precisa, a um clique de distância',
    cards: [
      {
        label: 'JSON',
        targets: ['CSV', 'Excel', 'XML', 'YAML', 'HTML', 'Markdown', 'PDF'],
        tag: 'Dados de API, ficheiros de configuração',
      },
      {
        label: 'CSV',
        targets: ['JSON', 'Excel', 'XML', 'YAML', 'HTML', 'Markdown', 'PDF'],
        tag: 'Folhas de cálculo, exportações de BD',
      },
      {
        label: 'Excel',
        targets: ['JSON', 'CSV', 'XML', 'YAML', 'HTML', 'Markdown', 'PDF'],
        tag: 'Relatórios empresariais, várias folhas',
      },
      {
        label: 'XML',
        targets: ['JSON', 'CSV', 'Excel', 'YAML', 'HTML', 'Markdown', 'PDF'],
        tag: 'Sistemas legados, serviços web',
      },
      {
        label: 'YAML',
        targets: ['JSON', 'CSV', 'Excel', 'XML', 'HTML', 'Markdown', 'PDF'],
        tag: 'Docker, Kubernetes, CI/CD',
      },
    ],
  },
};
