import type { StaticContent } from '../types';

export const staticContent: StaticContent = {
  about: {
    meta: {
      title: '私たちについて',
      description:
        'Data Converterについて — JSON、CSV、Excel、XML、YAMLなどの間で変換できる、無料でプライベートなブラウザベースのツールです。',
      keywords: '概要, データ変換, オンライン変換, ブラウザベース',
    },
    h1: '私たちについて',
    breadcrumbs: [
      { name: 'ホーム', url: '/' },
      { name: '私たちについて', url: '/about' },
    ],
    paragraphs: [
      'Data Converterは、シンプルな問題を解決するために始めたサイドプロジェクトです。CSVをJSONや、ExcelファイルをXMLに変換する必要があるたびに、サーバーへのアップロードが必要な無作為のオンラインツールを探し回らなければなりませんでした。しかも、それらのツールのほとんどはデータを保持しており、それには違和感がありました。',
      'そこで、このツールを作りました。サーバーなし、アップロードなし、アカウント不要。すべてブラウザ内で動作します。あなたのデータはあなたのマシンに留まります — それだけです。',
      'このツールは、JSON、CSV、Excel (.xlsx)、XML、YAML、HTMLテーブル、Markdown、PDFに対応しています。データの貼り付け、ファイルのアップロード、URLからの取得が可能です。ネストされた構造や大きなファイルも処理でき、検索、ソート、検索・置換、インライン編集ができる本格的なテーブルエディタも利用できます。',
      '人々の要望と、自分自身が役立つと感じた機能に基づいて、機能を追加し続けています。何かが欠けていたり、壊れていたりする場合は、お問い合わせページからご連絡ください — すべてのメッセージを実際に読んでいます。',
      '<a href="https://github.com/NaimBiswas" target="_blank" rel="noopener">Naim Biswas</a> によって開発・維持されています。',
    ],
  },
  contact: {
    meta: {
      title: 'お問い合わせ',
      description:
        'Data Converterチームにご連絡ください。バグの報告、機能の提案、ご質問などを受け付けています。',
      keywords: 'お問い合わせ, サポート, バグ報告, データ変換',
    },
    h1: 'お問い合わせ',
    breadcrumbs: [
      { name: 'ホーム', url: '/' },
      { name: 'お問い合わせ', url: '/contact' },
    ],
    intro:
      '質問がある、バグを見つけた、機能を提案したい場合？ 最適なのは <strong>GitHub Issues</strong> です — そうすれば、誰もが議論や解決策を見ることができます。',
    buttonLabel: 'GitHub Issueを開く →',
    buttonUrl: 'https://github.com/NaimBiswas/convert/issues/new',
    emailIntro:
      'メールでの直接連絡も可能です。<a href="mailto:nayeembiswas2@gmail.com">nayeembiswas2@gmail.com</a> 宛にどうぞ。1〜2日以内に返信するよう努めています。',
    email: 'nayeembiswas2@gmail.com',
    bugHint:
      'バグを報告する場合は、入力フォーマット、変換先フォーマット、表示されたエラーメッセージを必ず含めてください。データのサンプル（またはエラー内容）があれば、はるかに速く問題を特定できます。',
  },
  faq: {
    meta: {
      title: 'よくある質問',
      description:
        'Data Converterツールに関するよくある質問 — プライバシー、フォーマット、制限、トラブルシューティング。',
      keywords: 'よくある質問, データ変換ヘルプ, フォーマット対応, トラブルシューティング',
    },
    h1: 'よくある質問',
    breadcrumbs: [
      { name: 'ホーム', url: '/' },
      { name: 'FAQ', url: '/faq' },
    ],
    faqs: [
      {
        q: '私のデータは安全ですか？ 何か保存されますか？',
        a: 'すべてブラウザ内で処理され、サーバーにアップロードされることは一切ありません。データがデバイスの外に出ることはありません。変換内容を保存したり、記録したり、閲覧したりすることもありません。テーマ設定（ライト/ダークモード）のみ、訪問間で維持されるようにローカルに保存されます。変換データはすべて、タブを閉じると消去されます。',
      },
      {
        q: '対応しているフォーマットは？',
        a: '<strong>入力:</strong> JSON、CSV、Excel (.xlsx)、XML、YAML<br><strong>出力:</strong> JSON、CSV、Excel (.xlsx)、XML、YAML、HTMLテーブル、Markdown、PDF<br>どの入力フォーマットからでも、任意の出力フォーマットに変換できます。たとえば、XMLを貼り付けてCSVとしてダウンロードしたり、ExcelをアップロードしてJSONとしてエクスポートできます。',
      },
      {
        q: 'ファイルサイズの制限はありますか？',
        a: 'すべてブラウザ内で処理されるため、制限はお使いのデバイスのメモリに依存します。一般的なノートパソコンでは、最大50〜100MBのファイルでも問題なく動作します。ExcelのアップロードはUI上50MBに制限されています。パフォーマンスの問題が発生した場合は、データを小さなファイルに分割してみてください。',
      },
      {
        q: 'アカウントは必要ですか？',
        a: 'いいえ。アカウントも、サインアップも、ログインもありません。サイトを開いて変換を始めるだけです。',
      },
      {
        q: '変換後にデータを編集できますか？',
        a: 'はい。変換後は、フル機能のテーブルエディタが表示されます。任意のセルをダブルクリックして編集したり、行の検索やフィルタリング、列でのソート、行と列の追加・削除、テーブルの転置、全セルでの検索・置換、列全体への文字種変換（UPPER、lower、Capitalize）、変更の元に戻す・やり直し、空の行や重複の削除ができます。',
      },
      {
        q: '変換結果がおかしい場合の対処法は？',
        a: 'まず、入力データが正しい形式であることを確認してください。JSONには正しい引用符と括弧が必要です。CSVにはヘッダー行が必要です。ネストされたJSONやXMLでは、ツールは <code>_</code> を区切り文字としてキーをフラット化します — これはオブジェクトの配列に最適です。それでも解決しない場合は、<a href="/contact">お問い合わせ</a> から、入力フォーマット、変換先フォーマット、データのサンプル（またはエラーメッセージ）を添えてご連絡ください。確認させていただきます。',
      },
    ],
  },
  docs: {
    meta: {
      title: 'ドキュメント — Data Converterの使い方',
      description:
        'JSON、CSV、Excel、XML、YAML、Markdown、HTML、PDF間の変換方法を解説します。ショートカット、ツール、プライバシー情報を含む完全ガイド。',
      keywords: 'ドキュメント, 変換方法, フォーマット変換, データ変換',
    },
    h1: 'Data Converterの使い方',
    breadcrumbs: [
      { name: 'ホーム', url: '/' },
      { name: 'ドキュメント', url: '/docs' },
    ],
    blocks: [
      {
        type: 'cards',
        heading: '対応フォーマット',
        cards: [
          { h3: 'JSON', p: 'JavaScript Object Notation — ネストまたはフラットなオブジェクト、オブジェクトの配列。' },
          { h3: 'CSV', p: 'カンマ区切り値 — ヘッダー行が必要です。' },
          { h3: 'Excel (XLSX)', p: '複数シートに対応したMicrosoft Excelワークブック。アップロードのみ。' },
          { h3: 'XML', p: 'Extensible Markup Language — ネストされた要素を <code>_</code> 区切りでフラット化します。' },
          { h3: 'YAML', p: 'YAML Ain\u2019t Markup Language — 人間が読みやすいデータシリアライゼーション形式です。' },
          { h3: 'HTML Table', p: '出力のみ — データをHTMLの <code>&lt;table&gt;</code> としてレンダリングします。' },
          { h3: 'Markdown', p: '出力のみ — データをGitHub Flavored Markdownのテーブルとしてレンダリングします。' },
          { h3: 'PDF', p: '出力のみ — データをPDFドキュメントとしてエクスポートします。' },
        ],
      },
      {
        type: 'section',
        heading: '入力方法',
        blocks: [
          {
            type: 'ul',
            items: [
              '<strong>貼り付け</strong> — エディタにデータを直接貼り付けます。',
              '<strong>アップロード</strong> — ファイルをドラッグ＆ドロップまたは参照で選択します（.json、.csv、.xml、.yaml、.xlsx、最大50MB）。',
              '<strong>URL</strong> — リモートURLからデータを取得します。直接リクエストをブロックするAPIにはCORSプロキシを有効にしてください。',
            ],
          },
        ],
      },
      {
        type: 'section',
        heading: '変換方法',
        blocks: [
          {
            type: 'ol',
            items: [
              '変換バーで入力フォーマット（<strong>From</strong>）と出力フォーマット（<strong>To</strong>）を選択します。',
              'データを貼り付けるか、アップロードするか、取得します。',
              '<strong>変換</strong> をクリックするか、<kbd>Ctrl+Enter</kbd> を押します。',
              'テーブルをプレビューして、検索・ソート・編集します。',
              '結果を任意の対応フォーマットでダウンロードするか、クリップボードにコピーします。',
            ],
          },
        ],
      },
      {
        type: 'section',
        heading: 'テーブルツール',
        blocks: [
          {
            type: 'ul',
            items: [
              '<strong>検索</strong> — 任意の列の値で行をフィルタリングします。',
              '<strong>ソート</strong> — 列ヘッダーをクリックすると昇順/降順でソートします。',
              '<strong>インライン編集</strong> — セルをダブルクリックして値を編集します。',
              '<strong>検索 &amp; 置換</strong> — すべてのセルでテキストを検索して置換します。',
              '<strong>転置</strong> — 行と列を入れ替えます。',
              '<strong>文字種変換</strong> — 列全体をUPPER、lower、Capitalizeに変換します。',
              '<strong>行・列の追加 / 削除</strong>。',
              '<strong>元に戻す / やり直し</strong> — <kbd>Ctrl+Z</kbd> と <kbd>Ctrl+Shift+Z</kbd>。',
              '<strong>列の並べ替え</strong> — 列ヘッダーをドラッグして並べ替えます。',
              '<strong>空の行・重複の削除</strong> — データをクリーンアップします。',
            ],
          },
        ],
      },
      {
        type: 'section',
        heading: 'エクスポート',
        blocks: [
          {
            type: 'p',
            html: 'ダウンロードボタンは<em>フィルタリングされた</em>データに適用されます（検索とソートが反映されます）。クリップボードには全データセットがコピーされます。',
          },
        ],
      },
      {
        type: 'section',
        heading: 'ツールメニュー',
        blocks: [
          {
            type: 'ul',
            items: [
              '<strong>ランダムデータの生成</strong> — テスト用のランダムなCSVデータセットを作成します。',
              '<strong>Base64エンコード / デコード</strong> — エディタの内容をエンコードまたはデコードします。',
              '<strong>Hexエンコード / デコード</strong> — エディタの内容をエンコードまたはデコードします。',
            ],
          },
        ],
      },
      {
        type: 'section',
        heading: 'プライバシー',
        blocks: [
          {
            type: 'p',
            html: 'すべての処理はブラウザ内で完結します。データがサーバーに送信されることはありません。CORSプロキシを有効にしたURL取得は、第三者プロキシサービスを経由します。',
          },
        ],
      },
      {
        type: 'shortcuts',
        heading: 'キーボードショートカット',
        columns: { shortcut: 'ショートカット', action: 'アクション' },
        rows: [
          { shortcut: 'Ctrl+Enter', action: '変換' },
          { shortcut: 'Ctrl+Z', action: '元に戻す' },
          { shortcut: 'Ctrl+Shift+Z', action: 'やり直し' },
          { shortcut: 'Escape', action: '検索・置換または文字種ツールバーを閉じる' },
        ],
      },
    ],
  },
  privacy: {
    meta: {
      title: 'プライバシーポリシー',
      description:
        'Data Converterのプライバシーポリシー — データを収集、保存、共有することはありません。すべてブラウザ内で処理されます。',
      keywords: 'プライバシーポリシー, データのプライバシー, ブラウザベース, アップロードなし',
    },
    h1: 'プライバシーポリシー',
    breadcrumbs: [
      { name: 'ホーム', url: '/' },
      { name: 'プライバシー', url: '/privacy' },
    ],
    lastUpdated: '最終更新: 2026年7月',
    sections: [
      {
        heading: '対象範囲',
        blocks: [
          {
            type: 'p',
            html: 'このプライバシーポリシーは、Data Converter（「私たち」「私」「本サイト」）が、本ウェブサイト上のツールを利用する際に、お客様の情報をどのように取り扱うかを説明します。',
          },
        ],
      },
      {
        heading: 'データの収集なし',
        blocks: [
          {
            type: 'p',
            html: 'ファイルの変換、解析、処理はすべて、JavaScriptを使用してブラウザ内で完結します。お客様のデータ（貼り付け、アップロード、URLからの取得を問わず）がデバイスの外に出ることは一切ありません。お客様のファイルを受け取ったり保存したりするサーバーは存在しません。',
          },
        ],
      },
      {
        heading: 'アカウントなし・追跡なし',
        blocks: [
          {
            type: 'p',
            html: 'このツールの利用にアカウントは必要ありません。同意なしにサイトをまたいで行動を追跡する分析スクリプトは使用していません。実行しているのはGoogle Analyticsのみで、基本のページビューデータ（ユーザーレベルの追跡なし）を取得し、どの機能がよく使われているかを把握するのに役立てています。',
          },
        ],
      },
      {
        heading: 'Cookie &amp; 同意',
        blocks: [
          {
            type: 'p',
            html: '使用しているCookieは最小限です:',
          },
          {
            type: 'ul',
            items: [
              'テーマ設定（ライト/ダークモード）を記憶するCookie。これは厳密に機能上の目的のみで、常に設定されます。',
              'Google Analyticsは、ページビューの集計統計用に独自のCookieを使用します — Cookieバナーを受け入れた後でのみ読み込まれます。',
              'Google AdSenseは、広告配信とパーソナライズのためにCookieを設定します — Cookieバナーを受け入れた後でのみ読み込まれます。',
            ],
          },
          {
            type: 'p',
            html: '必須でないスクリプト（分析と広告）は、Cookieバナーで「了解」をクリックするまでブロックされます。選択内容はローカルに保存されるため、バナーは再表示されません。詳細は <a href="/cookies">Cookieポリシー</a> をご覧ください。',
          },
        ],
      },
      {
        heading: '広告',
        blocks: [
          {
            type: 'p',
            html: '本サイトは広告配信にGoogle AdSenseを使用しています。第三者ベンダーであるGoogleは、Cookieを使用して、本サイトおよび他のサイトへの過去の訪問に基づく広告を配信します。Googleの広告Cookieの使用により、Googleとそのパートナーは、本サイトやインターネット上の他のサイトへの訪問に基づく広告を配信できます。',
          },
          {
            type: 'p',
            html: 'パーソナライズ広告をオプトアウトするには、<a href="https://adssettings.google.com" target="_blank" rel="noopener">Googleの広告設定</a> をご覧ください。第三者ベンダーのCookieをオプトアウトするには、<a href="https://optout.networkadvertising.org" target="_blank" rel="noopener">Network Advertising Initiativeのオプトアウトページ</a> をご覧ください。',
          },
          {
            type: 'p',
            html: 'AdSenseスクリプトは、Cookieバナーを受け入れた後でのみ読み込まれます。同意が得られるまで広告Cookieは設定されません。',
          },
        ],
      },
      {
        heading: '第三者ベンダー',
        blocks: [
          {
            type: 'ul',
            items: [
              '<strong>Google AdSense</strong> — コンテキスト広告とパーソナライズ広告を配信します。広告配信と表示回数上限のためにCookie（<code>_gads</code>、<code>_gac_</code>、<code>IDE</code>）を使用します。',
              '<strong>Google Analytics</strong> — ページビューの集計データを収集します。匿名の利用統計のためにCookie（<code>_ga</code>、<code>_gid</code>、<code>_gat</code>）を使用します。',
              '<strong>Google AMP</strong> — 対応ページに自動広告を配信します。',
            ],
          },
          {
            type: 'p',
            html: 'これらのサービスは、関連広告を提供するために、さまざまなウェブサイトへの訪問情報を収集することがあります。Googleのプライバシーポリシーは <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">policies.google.com/privacy</a> で確認できます。',
          },
        ],
      },
      {
        heading: '外部サービス',
        blocks: [
          {
            type: 'p',
            html: '<strong>URL取得</strong> 機能をCORSプロキシ有効で使用する場合、リクエストは第三者プロキシサービスを経由します。そのサービスは、リクエストしたURLを参照しますが、個人情報は参照しません。CORSプロキシは既定ではオフで、チェックボックスをオンにした場合のみ有効化されます。',
          },
        ],
      },
      {
        heading: '変更',
        blocks: [
          {
            type: 'p',
            html: 'このポリシーに変更があった場合は、上部の日付を更新し、重要な変更についてはサイト上でお知らせします。',
          },
        ],
      },
      {
        heading: 'お問い合わせ',
        blocks: [
          {
            type: 'p',
            html: 'このポリシーやお客様のデータについてご質問がありますか？ <a href="/contact">お問い合わせください</a> または <a href="https://github.com/NaimBiswas/convert/issues/new" target="_blank" rel="noopener">GitHub Issueを開く</a>。',
          },
        ],
      },
    ],
  },
  terms: {
    meta: {
      title: '利用規約',
      description:
        'Data Converterの利用規約 — 無料でご利用いただけます。保証はなく、お客様の責任でご利用ください。',
      keywords: '利用規約, 利用条件, データ変換',
    },
    h1: '利用規約 &amp; 条件',
    breadcrumbs: [
      { name: 'ホーム', url: '/' },
      { name: '利用規約', url: '/terms' },
    ],
    lastUpdated: '最終更新: 2026年7月',
    sections: [
      {
        heading: '自己責任でのご利用',
        blocks: [
          {
            type: 'p',
            html: 'Data Converterは、無料で現状有姿のまま提供され、いかなる保証もありません。変換の正確性には細心の注意を払っていますが、あらゆるエッジケースで完璧であることを保証することはできません。変換後のデータを本番環境や重要な場面で使用する前に、ご自身で検証する責任があります。',
          },
        ],
      },
      {
        heading: '許可される利用',
        blocks: [
          {
            type: 'p',
            html: 'このツールは、個人利用、商用利用、教育目的で自由に使用できます。帰属表示は不要です。',
          },
        ],
      },
      {
        heading: '禁止事項',
        blocks: [
          {
            type: 'ul',
            items: [
              '本サイトのコンテンツをスクレイピング、クロール、または体系的にダウンロードすること。',
              '違法なコンテンツや権利のないデータの処理にツールを使用すること。',
              'サイトを破壊、過負荷、または悪用しようとすること。',
            ],
          },
        ],
      },
      {
        heading: '免責事項',
        blocks: [
          {
            type: 'p',
            html: 'このツールの利用によって生じた損害やデータ損失について、一切責任を負いません。すべての処理はブラウザ内でローカルに完結するため、お客様のデータにアクセスすることはできず、その結果について責任を負うこともできません。',
          },
        ],
      },
      {
        heading: '変更',
        blocks: [
          {
            type: 'p',
            html: 'これらの規約は変更されることがあります。変更後の継続利用は、更新された規約に同意したものとみなされます。',
          },
        ],
      },
      {
        heading: 'お問い合わせ',
        blocks: [
          {
            type: 'p',
            html: 'これらの規約についてご質問がある場合は、<a href="/contact">お問い合わせください</a>。',
          },
        ],
      },
    ],
  },
  cookies: {
    meta: {
      title: 'Cookieポリシー',
      description: 'Data ConverterのCookieポリシー — 最小限の機能Cookieのみを使用します。',
      keywords: 'Cookieポリシー, Cookie, Google Analytics, データ変換',
    },
    h1: 'Cookieポリシー',
    breadcrumbs: [
      { name: 'ホーム', url: '/' },
      { name: 'Cookie', url: '/cookies' },
    ],
    lastUpdated: '最終更新: 2026年7月',
    intro: 'Data Converterが使用するCookieはごくわずかです。それぞれの役割を正確に説明します。',
    sections: [
      {
        heading: '機能Cookie',
        blocks: [
          {
            type: 'cookieTable',
            columns: { cookie: 'Cookie', purpose: '目的', duration: '期間' },
            rows: [
              {
                cookie: 'theme',
                purpose: 'ライト/ダークモードの設定を記憶し、次回訪問時にサイトが正しく表示されるようにします。',
                duration: '1年',
              },
            ],
          },
        ],
      },
      {
        heading: 'Cookieへの同意',
        blocks: [
          {
            type: 'p',
            html: 'サイトを初めて訪れると、必須でないCookieの設定への同意を求めるバナーが表示されます。分析スクリプトと広告スクリプトは、「了解」をクリックした後でのみ読み込まれます。選択内容はlocalStorageに保存されるため、バナーは再び表示されません。この設定をリセットするには、ブラウザのデータを消去してください。',
          },
        ],
      },
      {
        heading: '分析',
        blocks: [
          {
            type: 'p',
            html: 'サイトの利用状況やアクセスされたページを把握するためにGoogle Analyticsを使用しています。Google Analyticsは独自のCookie（<code>_ga</code>、<code>_gid</code>、<code>_gat</code>）を設定し、匿名の集計利用データを追跡します。このデータを使用して個人を特定することはありません。分析はCookieバナーを受け入れた後にのみ読み込まれます。',
          },
        ],
      },
      {
        heading: '広告',
        blocks: [
          {
            type: 'p',
            html: 'サイト運営のサポートとして、Google AdSense経由で広告を配信しています。AdSenseは、広告のパーソナライズと表示回数上限のためにCookieを設定します。これらのスクリプトは、Cookieバナーを受け入れた後にのみ読み込まれます。',
          },
        ],
      },
      {
        heading: 'Cookieの管理',
        blocks: [
          {
            type: 'p',
            html: 'ほとんどのブラウザでは、設定からCookieを制御できます。Cookieはいつでもブロックまたは削除できます。Cookieを無効にすると、テーマ設定は訪問間で保持されませんが、変換ツール自体は正常に動作します。',
          },
        ],
      },
      {
        heading: 'お問い合わせ',
        blocks: [
          {
            type: 'p',
            html: 'Cookieについてご質問がありますか？ <a href="/contact">ご連絡ください</a>。',
          },
        ],
      },
    ],
  },
};
