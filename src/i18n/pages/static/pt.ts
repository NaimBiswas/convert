import type { StaticContent } from '../types';

export const staticContent: StaticContent = {
  about: {
    meta: {
      title: 'Sobre N\u00F3s',
      description:
        'Conhe\u00E7a o Data Converter \u2014 uma ferramenta gratuita, privada e baseada no navegador para converter entre JSON, CSV, Excel, XML, YAML e outros formatos.',
      keywords: 'sobre, conversor de dados, conversor online, baseado no navegador',
    },
    h1: 'Sobre N\u00F3s',
    breadcrumbs: [
      { name: 'In\u00EDcio', url: '/' },
      { name: 'Sobre', url: '/about' },
    ],
    paragraphs: [
      'O Data Converter come\u00E7ou como um projeto paralelo para resolver um problema simples: toda vez que eu precisava converter um CSV para JSON ou um arquivo Excel para XML, eu tinha que procurar alguma ferramenta online aleat\u00F3ria que muitas vezes exigia upload para um servidor. A maioria dessas ferramentas tamb\u00E9m guardava meus dados, o que parecia errado.',
      'Ent\u00E3o eu criei esta ferramenta. Sem servidores, sem uploads, sem contas. Tudo roda diretamente no seu navegador. Seus dados permanecem na sua m\u00E1quina \u2014 ponto final.',
      'A ferramenta suporta JSON, CSV, Excel (.xlsx), XML, YAML, tabelas HTML, Markdown e PDF. Voc\u00EA pode colar os dados, enviar um arquivo ou buscar a partir de uma URL. Ela lida com estruturas aninhadas, arquivos grandes e oferece um editor de tabela completo com busca, classifica\u00E7\u00E3o, localizar e substituir e edi\u00E7\u00E3o inline.',
      'Estou sempre adicionando recursos com base no que as pessoas pedem e no que eu mesmo acho \u00FAtil. Se algo estiver faltando ou quebrado, \u00E9 s\u00F3 entrar em contato pela p\u00E1gina de contato \u2014 eu realmente leio todas as mensagens.',
      'Constru\u00EDdo e mantido por <a href="https://github.com/NaimBiswas" target="_blank" rel="noopener">Naim Biswas</a>.',
    ],
  },
  contact: {
    meta: {
      title: 'Fale Conosco',
      description:
        'Entre em contato com a equipe do Data Converter. Relate bugs, sugira recursos ou fa\u00E7a perguntas.',
      keywords: 'contato, suporte, relat\u00F3rio de bug, conversor de dados',
    },
    h1: 'Contato',
    breadcrumbs: [
      { name: 'In\u00EDcio', url: '/' },
      { name: 'Contato', url: '/contact' },
    ],
    intro:
      'Tem uma pergunta, encontrou um bug ou quer sugerir um recurso? O melhor lugar \u00E9 o <strong>GitHub Issues</strong> \u2014 assim todos podem ver a discuss\u00E3o e as solu\u00E7\u00F5es.',
    buttonLabel: 'Abrir uma Issue no GitHub \u2192',
    buttonUrl: 'https://github.com/NaimBiswas/convert/issues/new',
    emailIntro:
      'Voc\u00EA tamb\u00E9m pode me enviar um e-mail diretamente em <a href="mailto:nayeembiswas2@gmail.com">nayeembiswas2@gmail.com</a>. Eu tento responder em um ou dois dias.',
    email: 'nayeembiswas2@gmail.com',
    bugHint:
      'Ao relatar um bug, inclua o formato de origem, o formato de destino e qualquer mensagem de erro que voc\u00EA viu. Uma amostra dos dados (ou do erro) me ajuda a encontrar o problema muito mais r\u00E1pido.',
  },
  faq: {
    meta: {
      title: 'Perguntas Frequentes',
      description:
        'Perguntas comuns sobre a ferramenta Data Converter \u2014 privacidade, formatos, limites e solu\u00E7\u00E3o de problemas.',
      keywords: 'perguntas frequentes, ajuda do conversor de dados, suporte a formatos, solu\u00E7\u00E3o de problemas',
    },
    h1: 'Perguntas Frequentes',
    breadcrumbs: [
      { name: 'In\u00EDcio', url: '/' },
      { name: 'Perguntas Frequentes', url: '/faq' },
    ],
    faqs: [
      {
        q: 'Meus dados est\u00E3o seguros? Voc\u00EA armazena alguma coisa?',
        a: 'Tudo roda no seu navegador \u2014 nada \u00E9 enviado para qualquer servidor. Seus dados nunca saem do seu dispositivo. Eu n\u00E3o armazeno, registro nem sequer vejo o que voc\u00EA converte. Sua prefer\u00EAncia de tema (modo claro/escuro) \u00E9 salva localmente para persistir entre visitas. Todos os dados de convers\u00E3o s\u00E3o apagados quando voc\u00EA fecha a aba.',
      },
      {
        q: 'Quais formatos voc\u00EA suporta?',
        a: '<strong>Entrada:</strong> JSON, CSV, Excel (.xlsx), XML, YAML<br><strong>Sa\u00EDda:</strong> JSON, CSV, Excel (.xlsx), XML, YAML, Tabela HTML, Markdown, PDF<br>Voc\u00EA pode converter de qualquer formato de entrada para qualquer formato de sa\u00EDda. Por exemplo, cole XML e baixe como CSV, ou envie um Excel e exporte como JSON.',
      },
      {
        q: 'Existe um limite de tamanho de arquivo?',
        a: 'Como tudo roda no seu navegador, o limite depende da mem\u00F3ria do seu dispositivo. A maioria dos arquivos de at\u00E9 50-100 MB funciona bem em um notebook t\u00EDpico. Os uploads de Excel est\u00E3o limitados a 50 MB na interface. Se voc\u00EA tiver problemas de desempenho, tente dividir seus dados em arquivos menores.',
      },
      {
        q: 'Preciso criar uma conta?',
        a: 'N\u00E3o. N\u00E3o h\u00E1 contas, nem cadastros, nem logins. \u00C9 s\u00F3 abrir o site e come\u00E7ar a converter.',
      },
      {
        q: 'Posso editar meus dados depois de converter?',
        a: 'Sim. Ap\u00F3s a convers\u00E3o, voc\u00EA tem um editor de tabela completo. Voc\u00EA pode clicar duas vezes em qualquer c\u00E9lula para edit\u00E1-la, buscar e filtrar linhas, classificar por colunas, adicionar ou excluir linhas e colunas, transpor a tabela, fazer localizar e substituir em todas as c\u00E9lulas, aplicar transforma\u00E7\u00F5es de mai\u00FAsculas/min\u00FAsculas (MAI\u00daSCULAS, min\u00FAsculas, Capitalizar) a uma coluna, desfazer e refazer altera\u00E7\u00F5es e remover linhas vazias ou duplicadas.',
      },
      {
        q: 'A convers\u00E3o parece errada \u2014 o que eu fa\u00E7o?',
        a: 'Primeiro, certifique-se de que seus dados de entrada est\u00E3o bem formados. JSON precisa de aspas e colchetes corretos. CSV precisa de uma linha de cabe\u00E7alho. Para JSON ou XML aninhados, a ferramenta achata as chaves usando <code>_</code> como separador \u2014 isso funciona melhor para arrays de objetos. Se ainda assim estiver travado, <a href="/contact">entre em contato</a> informando seu formato de origem, formato de destino e uma amostra dos dados (ou a mensagem de erro) que eu darei uma olhada.',
      },
    ],
  },
  docs: {
    meta: {
      title: 'Documenta\u00E7\u00E3o \u2014 Como Usar o Data Converter',
      description:
        'Aprenda a converter entre JSON, CSV, Excel, XML, YAML, Markdown, HTML e PDF. Guia completo com atalhos, ferramentas e informa\u00E7\u00F5es de privacidade.',
      keywords: 'documenta\u00E7\u00E3o, como converter, convers\u00E3o de formatos, conversor de dados',
    },
    h1: 'Como Usar o Data Converter',
    breadcrumbs: [
      { name: 'In\u00EDcio', url: '/' },
      { name: 'Documenta\u00E7\u00E3o', url: '/docs' },
    ],
    blocks: [
      {
        type: 'cards',
        heading: 'Formatos Suportados',
        cards: [
          { h3: 'JSON', p: 'JavaScript Object Notation \u2014 objetos aninhados ou planos, arrays de objetos.' },
          { h3: 'CSV', p: 'Valores separados por v\u00EDrgula \u2014 linha de cabe\u00E7alho obrigat\u00F3ria.' },
          { h3: 'Excel (XLSX)', p: 'Pastas de trabalho do Microsoft Excel com suporte a v\u00E1rias planilhas. Somente upload.' },
          { h3: 'XML', p: 'Extensible Markup Language \u2014 achata elementos aninhados com o separador <code>_</code>.' },
          { h3: 'YAML', p: 'YAML Ain\u2019t Markup Language \u2014 serializa\u00E7\u00E3o de dados leg\u00EDvel por humanos.' },
          { h3: 'Tabela HTML', p: 'Somente sa\u00EDda \u2014 renderiza os dados como um <code>&lt;table&gt;</code> em HTML.' },
          { h3: 'Markdown', p: 'Somente sa\u00EDda \u2014 renderiza os dados como uma tabela Markdown no estilo GitHub.' },
          { h3: 'PDF', p: 'Somente sa\u00EDda \u2014 exporta os dados como um documento PDF.' },
        ],
      },
      {
        type: 'section',
        heading: 'M\u00E9todos de Entrada',
        blocks: [
          {
            type: 'ul',
            items: [
              '<strong>Colar</strong> \u2014 cole os dados diretamente no editor.',
              '<strong>Upload</strong> \u2014 arraste e solte ou procure um arquivo (.json, .csv, .xml, .yaml, .xlsx at\u00E9 50 MB).',
              '<strong>URL</strong> \u2014 busque dados de uma URL remota. Ative o proxy CORS para APIs que bloqueiam requisi\u00E7\u00F5es diretas.',
            ],
          },
        ],
      },
      {
        type: 'section',
        heading: 'Como Converter',
        blocks: [
          {
            type: 'ol',
            items: [
              'Selecione o formato de origem (<strong>De</strong>) e o formato de destino (<strong>Para</strong>) na barra do conversor.',
              'Cole, envie ou busque seus dados.',
              'Clique em <strong>Converter</strong> ou pressione <kbd>Ctrl+Enter</kbd>.',
              'Visualize, busque, classifique e edite a tabela.',
              'Baixe o resultado em qualquer formato suportado ou copie para a \u00E1rea de transfer\u00EAncia.',
            ],
          },
        ],
      },
      {
        type: 'section',
        heading: 'Ferramentas da Tabela',
        blocks: [
          {
            type: 'ul',
            items: [
              '<strong>Busca</strong> \u2014 filtra linhas por qualquer valor de coluna.',
              '<strong>Classificar</strong> \u2014 clique no cabe\u00E7alho de uma coluna para classificar em ordem crescente/decrescente.',
              '<strong>Edi\u00E7\u00E3o Inline</strong> \u2014 clique duas vezes em qualquer c\u00E9lula para editar seu valor.',
              '<strong>Localizar &amp; Substituir</strong> \u2014 busca e substitui texto em todas as c\u00E9lulas.',
              '<strong>Transpor</strong> \u2014 troca linhas e colunas.',
              '<strong>Transforma\u00E7\u00F5es de Mai\u00FAsculas</strong> \u2014 MAI\u00DASCULAS, min\u00FAsculas ou Capitalizar uma coluna inteira.',
              '<strong>Adicionar / Excluir</strong> linhas e colunas.',
              '<strong>Desfazer / Refazer</strong> \u2014 <kbd>Ctrl+Z</kbd> e <kbd>Ctrl+Shift+Z</kbd>.',
              '<strong>Reordenar Colunas</strong> \u2014 arraste os cabe\u00E7alhos das colunas para reorden\u00E1-las.',
              '<strong>Remover Vazias / Duplicadas</strong> \u2014 limpe seus dados.',
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
            html: 'Os bot\u00F5es de download se aplicam aos dados <em>filtrados</em> (a busca e a classifica\u00E7\u00E3o s\u00E3o respeitadas). A \u00E1rea de transfer\u00EAncia copia o conjunto de dados completo.',
          },
        ],
      },
      {
        type: 'section',
        heading: 'Menu de Ferramentas',
        blocks: [
          {
            type: 'ul',
            items: [
              '<strong>Gerar Dados Aleat\u00F3rios</strong> \u2014 cria um conjunto de dados CSV aleat\u00F3rio para testes.',
              '<strong>Codificar / Decodificar Base64</strong> \u2014 codifica ou decodifica o conte\u00FAdo do editor.',
              '<strong>Codificar / Decodificar Hex</strong> \u2014 codifica ou decodifica o conte\u00FAdo do editor.',
            ],
          },
        ],
      },
      {
        type: 'section',
        heading: 'Privacidade',
        blocks: [
          {
            type: 'p',
            html: 'Todo o processamento acontece inteiramente no seu navegador. Nenhum dado \u00E9 enviado para qualquer servidor. A busca por URL com o proxy CORS ativado passa por um servi\u00E7o de proxy de terceiros.',
          },
        ],
      },
      {
        type: 'shortcuts',
        heading: 'Atalhos de Teclado',
        columns: { shortcut: 'Atalho', action: 'A\u00E7\u00E3o' },
        rows: [
          { shortcut: 'Ctrl+Enter', action: 'Converter' },
          { shortcut: 'Ctrl+Z', action: 'Desfazer' },
          { shortcut: 'Ctrl+Shift+Z', action: 'Refazer' },
          { shortcut: 'Escape', action: 'Fechar a barra de localizar/substituir ou de mai\u00FAsculas' },
        ],
      },
    ],
  },
  privacy: {
    meta: {
      title: 'Pol\u00EDtica de Privacidade',
      description:
        'Pol\u00EDtica de privacidade do Data Converter \u2014 n\u00E3o coletamos, armazenamos nem compartilhamos seus dados. Tudo roda no seu navegador.',
      keywords: 'pol\u00EDtica de privacidade, privacidade de dados, baseado no navegador, sem upload',
    },
    h1: 'Pol\u00EDtica de Privacidade',
    breadcrumbs: [
      { name: 'In\u00EDcio', url: '/' },
      { name: 'Privacidade', url: '/privacy' },
    ],
    lastUpdated: '\u00DAltima atualiza\u00E7\u00E3o: julho de 2026',
    sections: [
      {
        heading: 'O Que Esta Pol\u00EDtica Cobre',
        blocks: [
          {
            type: 'p',
            html: 'Esta pol\u00EDtica de privacidade explica como o Data Converter ("n\u00F3s", "eu", "este site") trata suas informa\u00E7\u00F5es quando voc\u00EA usa as ferramentas deste site.',
          },
        ],
      },
      {
        heading: 'Nenhuma Coleta de Dados',
        blocks: [
          {
            type: 'p',
            html: 'Toda a convers\u00E3o, an\u00E1lise e processamento de arquivos acontece inteiramente no seu navegador usando JavaScript. Seus dados \u2014 seja colados, enviados ou buscados de uma URL \u2014 nunca saem do seu dispositivo. Eu n\u00E3o tenho servidores que recebam ou armazenem seus arquivos.',
          },
        ],
      },
      {
        heading: 'Sem Contas, Sem Rastreamento',
        blocks: [
          {
            type: 'p',
            html: 'Voc\u00EA n\u00E3o precisa de uma conta para usar esta ferramenta. Eu n\u00E3o uso scripts de an\u00E1lise que rastreiam seu comportamento entre sites sem o seu consentimento. A \u00FAnica an\u00E1lise que executo \u00E9 o Google Analytics com dados b\u00E1sicos de visualiza\u00E7\u00E3o de p\u00E1ginas (sem rastreamento no n\u00EDvel de usu\u00E1rio), que me ajuda a entender quais recursos as pessoas mais usam.',
          },
        ],
      },
      {
        heading: 'Cookies &amp; Consentimento',
        blocks: [
          {
            type: 'p',
            html: 'Eu uso cookies m\u00EDnimos:',
          },
          {
            type: 'ul',
            items: [
              'Um cookie para lembrar sua prefer\u00EAncia de tema (modo claro/escuro). Ele \u00E9 estritamente funcional e sempre definido.',
              'O Google Analytics usa seus pr\u00F3prios cookies para estat\u00EDsticas agregadas de visualiza\u00E7\u00E3o de p\u00E1ginas \u2014 s\u00F3 \u00E9 carregado depois que voc\u00EA aceita o aviso de cookies.',
              'O Google AdSense define cookies para entrega de an\u00FAncios e personaliza\u00E7\u00E3o \u2014 s\u00F3 \u00E9 carregado depois que voc\u00EA aceita o aviso de cookies.',
            ],
          },
          {
            type: 'p',
            html: 'Scripts n\u00E3o essenciais (an\u00E1lise e an\u00FAncios) s\u00E3o bloqueados at\u00E9 que voc\u00EA clique em "Entendi" no aviso de cookies. Sua escolha \u00E9 salva localmente para que o aviso n\u00E3o apare\u00E7a novamente. Veja nossa <a href="/cookies">Pol\u00EDtica de Cookies</a> para detalhes.',
          },
        ],
      },
      {
        heading: 'Publicidade',
        blocks: [
          {
            type: 'p',
            html: 'Este site usa o Google AdSense para exibir an\u00FAncios. O Google, como fornecedor terceirizado, usa cookies para exibir an\u00FAncios com base nas visitas anteriores de um usu\u00E1rio a este site e a outros sites. O uso de cookies de publicidade pelo Google permite que ele e seus parceiros exibam an\u00FAncios com base na sua visita a este site e a outros sites da internet.',
          },
          {
            type: 'p',
            html: 'Voc\u00EA pode optar por n\u00E3o receber publicidade personalizada visitando as <a href="https://adssettings.google.com" target="_blank" rel="noopener">Configura\u00E7\u00F5es de An\u00FAncios do Google</a>. Voc\u00EA tamb\u00E9m pode optar por n\u00E3o receber cookies de fornecedores terceirizados visitando a <a href="https://optout.networkadvertising.org" target="_blank" rel="noopener">p\u00E1gina de exclus\u00E3o da Network Advertising Initiative</a>.',
          },
          {
            type: 'p',
            html: 'Os scripts do AdSense s\u00F3 s\u00E3o carregados depois que voc\u00EA aceita o aviso de cookies. Nenhum cookie de an\u00FAncio \u00E9 definido at\u00E9 que voc\u00EA d\u00EA seu consentimento.',
          },
        ],
      },
      {
        heading: 'Fornecedores Terceirizados',
        blocks: [
          {
            type: 'ul',
            items: [
              '<strong>Google AdSense</strong> \u2014 exibe an\u00FAncios contextuais e personalizados. Usa cookies (<code>_gads</code>, <code>_gac_</code>, <code>IDE</code>) para entrega de an\u00FAncios e limita\u00E7\u00E3o de frequ\u00EAncia.',
              '<strong>Google Analytics</strong> \u2014 coleta dados agregados de visualiza\u00E7\u00E3o de p\u00E1ginas. Usa cookies (<code>_ga</code>, <code>_gid</code>, <code>_gat</code>) para estat\u00EDsticas de uso an\u00F4nimas.',
              '<strong>Google AMP</strong> \u2014 exibe an\u00FAncios autom\u00E1ticos em p\u00E1ginas compat\u00EDveis.',
            ],
          },
          {
            type: 'p',
            html: 'Esses servi\u00E7os podem coletar informa\u00E7\u00F5es sobre suas visitas a diferentes sites para fornecer publicidade relevante. Voc\u00EA pode revisar a Pol\u00EDtica de Privacidade do Google em <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">policies.google.com/privacy</a>.',
          },
        ],
      },
      {
        heading: 'Servi\u00E7os Externos',
        blocks: [
          {
            type: 'p',
            html: 'Se voc\u00EA usar o recurso de <strong>Busca por URL</strong> com o proxy CORS ativado, sua requisi\u00E7\u00E3o passar\u00E1 por um servi\u00E7o de proxy de terceiros. Esse servi\u00E7o v\u00EA a URL que voc\u00EA solicita, mas n\u00E3o suas informa\u00E7\u00F5es pessoais. O proxy CORS est\u00E1 desativado por padr\u00E3o e s\u00F3 \u00E9 ativado quando voc\u00EA marca a caixa.',
          },
        ],
      },
      {
        heading: 'Altera\u00E7\u00F5es',
        blocks: [
          {
            type: 'p',
            html: 'Se esta pol\u00EDtica mudar, atualizarei a data no topo e publicarei um aviso no site para altera\u00E7\u00F5es significativas.',
          },
        ],
      },
      {
        heading: 'Contato',
        blocks: [
          {
            type: 'p',
            html: 'Perguntas sobre esta pol\u00EDtica ou seus dados? <a href="/contact">Entre em contato</a> ou <a href="https://github.com/NaimBiswas/convert/issues/new" target="_blank" rel="noopener">abra uma issue no GitHub</a>.',
          },
        ],
      },
    ],
  },
  terms: {
    meta: {
      title: 'Termos & Condi\u00E7\u00F5es',
      description:
        'Termos e condi\u00E7\u00F5es do Data Converter \u2014 uso gratuito, sem garantia, por sua conta e risco.',
      keywords: 'termos e condi\u00E7\u00F5es, termos de servi\u00E7o, conversor de dados',
    },
    h1: 'Termos &amp; Condi\u00E7\u00F5es',
    breadcrumbs: [
      { name: 'In\u00EDcio', url: '/' },
      { name: 'Termos', url: '/terms' },
    ],
    lastUpdated: '\u00DAltima atualiza\u00E7\u00E3o: julho de 2026',
    sections: [
      {
        heading: 'Uso por Sua Conta e Risco',
        blocks: [
          {
            type: 'p',
            html: 'O Data Converter \u00E9 fornecido gratuitamente, como est\u00E1, sem qualquer garantia. Eu me esfor\u00E7o para garantir que as convers\u00F5es sejam precisas, mas n\u00E3o posso garantir que sejam perfeitas para todos os casos extremos. Voc\u00EA \u00E9 respons\u00E1vel por verificar seus dados convertidos antes de us\u00E1-los em produ\u00E7\u00E3o ou em qualquer contexto importante.',
          },
        ],
      },
      {
        heading: 'O Que Voc\u00EA Pode Fazer',
        blocks: [
          {
            type: 'p',
            html: 'Voc\u00EA \u00E9 livre para usar esta ferramenta para fins pessoais, comerciais ou educacionais. Nenhuma atribui\u00E7\u00E3o \u00E9 necess\u00E1ria.',
          },
        ],
      },
      {
        heading: 'O Que Voc\u00EA N\u00E3o Pode Fazer',
        blocks: [
          {
            type: 'ul',
            items: [
              'Extrair, rastrear ou baixar sistematicamente conte\u00FAdo deste site.',
              'Usar a ferramenta para processar conte\u00FAdo ilegal ou dados sobre os quais voc\u00EA n\u00E3o tem direitos.',
              'Tentar quebrar, sobrecarregar ou explorar o site.',
            ],
          },
        ],
      },
      {
        heading: 'Sem Responsabilidade',
        blocks: [
          {
            type: 'p',
            html: 'N\u00E3o sou respons\u00E1vel por quaisquer danos ou perda de dados decorrentes do uso desta ferramenta. Como todo o processamento acontece localmente no seu navegador, n\u00E3o tenho acesso aos seus dados e n\u00E3o posso ser responsabilizado pelo que acontece com eles.',
          },
        ],
      },
      {
        heading: 'Altera\u00E7\u00F5es',
        blocks: [
          {
            type: 'p',
            html: 'Posso atualizar estes termos. O uso cont\u00EDnuo ap\u00F3s altera\u00E7\u00F5es significa que voc\u00EA aceita os termos atualizados.',
          },
        ],
      },
      {
        heading: 'Contato',
        blocks: [
          {
            type: 'p',
            html: 'Se voc\u00EA tiver d\u00FAvidas sobre estes termos, <a href="/contact">entre em contato</a>.',
          },
        ],
      },
    ],
  },
  cookies: {
    meta: {
      title: 'Pol\u00EDtica de Cookies',
      description: 'Pol\u00EDtica de cookies do Data Converter \u2014 apenas cookies m\u00EDnimos e funcionais.',
      keywords: 'pol\u00EDtica de cookies, cookies, Google Analytics, conversor de dados',
    },
    h1: 'Pol\u00EDtica de Cookies',
    breadcrumbs: [
      { name: 'In\u00EDcio', url: '/' },
      { name: 'Cookies', url: '/cookies' },
    ],
    lastUpdated: '\u00DAltima atualiza\u00E7\u00E3o: julho de 2026',
    intro: 'O Data Converter usa muito poucos cookies. Aqui est\u00E1 exatamente o que eles fazem.',
    sections: [
      {
        heading: 'Cookies Funcionais',
        blocks: [
          {
            type: 'cookieTable',
            columns: { cookie: 'Cookie', purpose: 'Finalidade', duration: 'Dura\u00E7\u00E3o' },
            rows: [
              {
                cookie: 'theme',
                purpose: 'Lembra sua prefer\u00EAncia de modo claro/escuro para que o site fique correto quando voc\u00EA voltar.',
                duration: '1 ano',
              },
            ],
          },
        ],
      },
      {
        heading: 'Consentimento de Cookies',
        blocks: [
          {
            type: 'p',
            html: 'Na primeira vez que voc\u00EA visita o site, um aviso aparece pedindo seu consentimento para definir cookies n\u00E3o essenciais. Scripts de an\u00E1lise e publicidade s\u00F3 s\u00E3o carregados depois que voc\u00EA clica em "Entendi". Sua escolha \u00E9 salva no localStorage para que voc\u00EA n\u00E3o veja o aviso novamente. Voc\u00EA pode limpar os dados do navegador para redefinir essa prefer\u00EAncia.',
          },
        ],
      },
      {
        heading: 'An\u00E1lise',
        blocks: [
          {
            type: 'p',
            html: 'Eu uso o Google Analytics para ver quais p\u00E1ginas as pessoas visitam e como o site \u00E9 usado. O Google Analytics define seus pr\u00F3prios cookies (<code>_ga</code>, <code>_gid</code>, <code>_gat</code>) que rastreiam dados de uso agregados e an\u00F4nimos. Eu n\u00E3o uso esses dados para identificar usu\u00E1rios individuais. A an\u00E1lise s\u00F3 \u00E9 carregada depois que voc\u00EA aceita o aviso de cookies.',
          },
        ],
      },
      {
        heading: 'Publicidade',
        blocks: [
          {
            type: 'p',
            html: 'Eu exibo an\u00FAncios via Google AdSense para apoiar o site. O AdSense define cookies para personaliza\u00E7\u00E3o de an\u00FAncios e limita\u00E7\u00E3o de frequ\u00EAncia. Esses scripts s\u00F3 s\u00E3o carregados depois que voc\u00EA aceita o aviso de cookies.',
          },
        ],
      },
      {
        heading: 'Gerenciando Cookies',
        blocks: [
          {
            type: 'p',
            html: 'A maioria dos navegadores permite controlar cookies pelas suas configura\u00E7\u00F5es. Voc\u00EA pode bloquear ou excluir cookies a qualquer momento. Se voc\u00EA desativar os cookies, a prefer\u00EAncia de tema n\u00E3o persistir\u00E1 entre visitas, mas a ferramenta de convers\u00E3o em si continuar\u00E1 funcionando normalmente.',
          },
        ],
      },
      {
        heading: 'Contato',
        blocks: [
          {
            type: 'p',
            html: 'D\u00FAvidas sobre cookies? <a href="/contact">Avise-me</a>.',
          },
        ],
      },
    ],
  },
};
