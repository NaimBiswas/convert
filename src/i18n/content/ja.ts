import type { HomeContent, ConverterContentMap } from './types';

export const ja: ConverterContentMap = {
  'json-to-csv': {
    meta: {
      title: 'JSON to CSV 変換ツール — JSON を CSV に無料でオンライン変換',
      description:
        'JSON を CSV に無料でオンライン変換。JSON の貼り付け、ファイルのアップロード、URL からの取得に対応。ネストしたオブジェクトや配列、大容量ファイルも処理できます。100% ブラウザ内で完結し、アップロードは不要です。',
      keywords: 'json to csv, json を csv に変換, json csv 変換 オンライン, json to csv コンバーター, json csv 変換 無料',
    },
    h1: 'JSON to CSV 変換ツール',
    desc: 'JSON データをブラウザ内ですぐに CSV 形式へ変換します。ネストしたオブジェクト（<code>_</code> 区切りで平坦化）、オブジェクトの配列、大容量ファイルに対応。アップロード不要、サーバー不要、制限なし。',
    from: 'JSON',
    to: 'CSV',
    slug: 'json-to-csv',
    path: '/json-to-csv-converter',
    sections: [
      {
        heading: 'なぜ JSON を CSV に変換するのか',
        blocks: [
          {
            type: 'p',
            html: 'JSON は API や Web アプリケーションの標準形式ですが、スプレッドシートやデータベース、分析ツールが標準で扱うのは CSV です。JSON を CSV に変換すると、API レスポンスや設定のエクスポート、Webhook のペイロードを取得して、そのまま Excel や Google Sheets で開いたり、PostgreSQL、MySQL、その他のデータ分析パイプラインに取り込んだりできます。',
          },
          {
            type: 'p',
            html: 'よくある用途としては、REST API から取得したユーザーレコードをマーケティングチーム向けにエクスポートしたり、マッピング API の位置情報データを GIS 分析用の表に変換したり、EC の商品カタログを JSON フィードから価格比較ツール用の CSV に変換したりすることです。',
          },
        ],
      },
      {
        heading: 'ネストした JSON の扱い方',
        blocks: [
          {
            type: 'p',
            html: 'CSV はフラットな形式で、すべての行が同じ列を持ちます。JSON にネストしたオブジェクト（例: <code>&lbrace;"user": &lbrace;"name": "Alice", "address": &lbrace;"city": "NYC"&rbrace;&rbrace;&rbrace;</code>）が含まれる場合、変換ツールはアンダースコア区切りでキーを平坦化します。<code>user_name</code>、<code>user_address_city</code> のようになります。オブジェクトの配列は複数の行に展開され、プリミティブな配列（例: <code>["red", "blue"]</code>）はセミコロンで結合されて 1 つのセルになります。',
          },
          {
            type: 'p',
            html: 'つまり、深くネストした API レスポンスも、データを失うことなくきれいなフラットな表になります。すべてのフィールドを列見出しとして、すべてのレコードを行として確認できます。',
          },
        ],
      },
      {
        heading: 'JSON を CSV に変換する方法',
        blocks: [
          {
            type: 'list',
            ordered: true,
            items: [
              '変換元に <strong>JSON</strong>、変換先に <strong>CSV</strong> を選択する',
              'JSON を貼り付けるか、<code>.json</code> ファイルをアップロードするか、URL から取得する',
              '<strong>変換</strong> をクリックするか、<kbd>Ctrl+Enter</kbd> を押す',
              '結果をプレビューし、必要に応じてインラインで編集してから CSV としてダウンロードする',
            ],
          },
        ],
      },
      {
        heading: '特徴',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'ネストした JSON オブジェクトに対応 — <code>_</code> 区切りでキーを平坦化',
              'オブジェクトの配列は行になり、プリミティブな配列はセミコロンで結合',
              '数値・真偽値・日付・文字列の型推論',
              'スマートなヘッダー検出と列の並び順',
              'ダウンロード前のインライン編集、並べ替え、フィルタリング',
            ],
          },
        ],
      },
      {
        heading: '実際の使用例',
        blocks: [
          {
            type: 'p',
            html: '<strong>API データのエクスポート:</strong> EC ストアが Shopify の API（JSON）から商品データを取得します。CSV に変換することで、在庫チームが倉庫管理のスプレッドシートに取り込めます。',
          },
          {
            type: 'p',
            html: '<strong>データベース移行:</strong> 開発者が MongoDB からユーザープロフィールを JSON としてエクスポートし、CSV に変換して <code>COPY</code> コマンドで PostgreSQL に一括インポートします。',
          },
          {
            type: 'p',
            html: '<strong>データ分析:</strong> データアナリストが Google Analytics Reporting API から JSON を取得し、CSV に変換して R や Python pandas で統計分析します。',
          },
        ],
      },
    ],
  },
  'csv-to-json': {
    meta: {
      title: 'CSV to JSON 変換ツール — CSV を JSON に無料でオンライン変換',
      description:
        'CSV を JSON に無料でオンライン変換。CSV データの貼り付けや .csv ファイルのアップロードに対応。スマートなヘッダー検出、型推論、ネストしたオブジェクトのサポート。100% ブラウザ内で完結。',
      keywords: 'csv to json, csv を json に変換, csv json 変換 オンライン, csv to json コンバーター, csv json 変換 無料',
    },
    h1: 'CSV to JSON 変換ツール',
    desc: 'CSV スプレッドシートをその場できれいな JSON オブジェクトに変換します。表形式データを API、データベース、JavaScript アプリケーションに取り込むのに最適です。スマートな列の型判定とヘッダー検出を内蔵。',
    from: 'CSV',
    to: 'JSON',
    slug: 'csv-to-json',
    path: '/csv-to-json-converter',
    sections: [
      {
        heading: 'なぜ CSV を JSON に変換するのか',
        blocks: [
          {
            type: 'p',
            html: 'CSV はスプレッドシートやデータベースエクスポートの共通言語ですが、Web API、NoSQL データベース、そして最新の JavaScript/TypeScript アプリケーションが標準で扱うのは JSON です。CSV を JSON に変換すると、銀行取引明細からアンケート結果まで、あらゆる表形式データを取得してアプリケーションコードで直接利用できます。',
          },
          {
            type: 'p',
            html: '典型的なシナリオには、ERP のスプレッドシートからヘッドレス CMS への商品在庫の読み込み、CSV エクスポートからの顧客リストの Firebase や MongoDB コレクションへの取り込み、既存の表形式データから単体テスト用のテストフィクスチャの作成などがあります。',
          },
        ],
      },
      {
        heading: '行が JSON になる仕組み',
        blocks: [
          {
            type: 'p',
            html: 'CSV の各行が 1 つの JSON オブジェクトになります。最初の行がキー（列ヘッダー）を提供し、それ以降の行が値を提供します。例:',
          },
          {
            type: 'code',
            html: 'name,age,city<br>Alice,30,NYC<br>Bob,25,LA',
          },
          {
            type: 'p',
            html: 'は次のようになります:',
          },
          {
            type: 'code',
            html: '[&lbrace;"name":"Alice","age":30,"city":"NYC"&rbrace;,&lbrace;"name":"Bob","age":25,"city":"LA"&rbrace;]',
          },
          {
            type: 'p',
            html: '変換ツールは列の型を自動的に検出します。引用符で囲まれた文字列は文字列のまま、引用符のない数値は数値になり、一般的な日付形式はそのまま維持されます。空のセルは <code>null</code> として扱われるため、後続のコードが欠落データを明示的に処理できます。',
          },
        ],
      },
      {
        heading: 'CSV を JSON に変換する方法',
        blocks: [
          {
            type: 'list',
            ordered: true,
            items: [
              '変換元に <strong>CSV</strong>、変換先に <strong>JSON</strong> を選択する',
              'CSV を貼り付けるか、<code>.csv</code> ファイルをアップロードするか、URL から取得する',
              '<strong>変換</strong> をクリックするか、<kbd>Ctrl+Enter</kbd> を押す',
              '結果をプレビューし、必要に応じてインラインで編集してから JSON としてダウンロードする',
            ],
          },
        ],
      },
      {
        heading: '特徴',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              '列の型を検出: 文字列、数値、真偽値、日付',
              '最初の行をキー名のヘッダーとして扱う',
              'オブジェクトの配列（デフォルト）または配列の配列として出力',
              '空のセルとキー欠落を区別して保持',
              'ダウンロード前のインライン編集、並べ替え、フィルタリング',
            ],
          },
        ],
      },
      {
        heading: 'よくある使用例',
        blocks: [
          {
            type: 'p',
            html: '<strong>API 連携:</strong> 取引先から日次の取引データが CSV で送られてきます。JSON に変換して REST エンドポイントに直接 POST します。',
          },
          {
            type: 'p',
            html: '<strong>データベースのシードデータ:</strong> MySQL の参照テーブルを CSV としてエクスポートし、JSON に変換して MongoDB や Firebase コレクションのシードデータとして使用します。',
          },
          {
            type: 'p',
            html: '<strong>フロントエンド開発:</strong> デザイナーがスプレッドシートでデータを提供します。JSON に変換して React/Vue コンポーネントの state やモックの Service Worker に直接取り込みます。',
          },
        ],
      },
    ],
  },
  'excel-to-json': {
    meta: {
      title: 'Excel to JSON 変換ツール — XLSX を JSON に無料でオンライン変換',
      description:
        'Excel（.xlsx）を JSON に無料でオンライン変換。スプレッドシートをアップロードするときれいな JSON を出力します。複数シート対応、型推論、ネストしたオブジェクトの処理。100% ブラウザ内で完結。',
      keywords: 'excel to json, xlsx to json, excel を json に変換, excel to json コンバーター, xlsx to json オンライン',
    },
    h1: 'Excel to JSON 変換ツール',
    desc: 'Excel スプレッドシート（<code>.xlsx</code>）をワンクリックで JSON 形式に変換します。複数シート、列の型検出、50 MB までの大容量ファイルに対応。すべての処理はブラウザ内で行われます。',
    from: 'Excel (XLSX)',
    to: 'JSON',
    slug: 'excel-to-json',
    path: '/excel-to-json-converter',
    sections: [
      {
        heading: 'なぜ Excel を JSON に変換するのか',
        blocks: [
          {
            type: 'p',
            html: 'Excel スプレッドシートはビジネスデータの中核です。財務レポート、在庫リスト、人事記録、アンケート結果などが含まれます。しかし XLSX はバイナリ形式のため、Web API、データベース、サーバーサイドのスクリプトは直接読み取れません。Excel を JSON に変換すると、REST エンドポイントへの投入、MongoDB や Firebase への取り込み、React/Vue ダッシュボードでの利用など、プログラムによる活用が可能になります。',
          },
        ],
      },
      {
        heading: 'Excel データが JSON にマッピングされる仕組み',
        blocks: [
          {
            type: 'p',
            html: '各シートがオブジェクトの JSON 配列になります。シートの最初の行がプロパティ名（キー）を提供し、それ以降の各行が 1 つの JSON オブジェクトになります。複数のシートを含むブックでは、変換するシートを正確に選択できます。',
          },
          {
            type: 'p',
            html: 'セルの書式は自動的に処理されます。日付は ISO 8601 形式の文字列（例: <code>"2026-03-15T00:00:00.000Z"</code>）になり、数値は引用符なしの数値のまま、空のセルは <code>null</code> として出力されるため、後続のコードが欠落データを明示的に処理できます。数式は変換前に現在の計算結果に評価されます。',
          },
        ],
      },
      {
        heading: 'Excel を JSON に変換する方法',
        blocks: [
          {
            type: 'list',
            ordered: true,
            items: [
              '変換元に <strong>Excel (XLSX)</strong>、変換先に <strong>JSON</strong> を選択する',
              '<code>.xlsx</code> ファイルをドラッグ &amp; ドロップまたは参照でアップロードする',
              'ブックに複数のシートがある場合はシートを選択する',
              '<strong>変換</strong> をクリックするか、<kbd>Ctrl+Enter</kbd> を押す',
              'プレビュー・編集して JSON としてダウンロードする',
            ],
          },
        ],
      },
      {
        heading: '特徴',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              '複数シートのブックに対応 — 変換するシートを選択可能',
              '最初の行を JSON のプロパティ名として自動検出',
              '数値・日付・真偽値・文字列の型推論',
              '空のセルは JSON では <code>null</code> になる',
              '50 MB までのファイルに対応',
            ],
          },
        ],
      },
      {
        heading: '実際の使用例',
        blocks: [
          {
            type: 'p',
            html: '<strong>財務レポート:</strong> 財務チームが月次の損益（P&amp;L）を Excel ブックで共有しています。各シートを JSON に変換して、独自の分析ダッシュボードに取り込みます。',
          },
          {
            type: 'p',
            html: '<strong>データ移行:</strong> レガシーシステムが顧客レコードを .xlsx ファイルでのみエクスポートします。JSON に変換して、PostgreSQL、MongoDB、BigQuery などのクラウドデータウェアハウスに一括インポートします。',
          },
          {
            type: 'p',
            html: '<strong>コンテンツ管理:</strong> 商品カタログが Excel にあり、SKU、名前、価格、説明の列で構成されています。JSON に変換して、ヘッドレス CMS や EC API に直接プッシュします。',
          },
        ],
      },
    ],
  },
  'json-to-excel': {
    meta: {
      title: 'JSON to Excel 変換ツール — JSON を XLSX に無料でオンライン変換',
      description:
        'JSON を Excel（.xlsx）に無料でオンライン変換。JSON の貼り付けまたはファイルのアップロードで、ダウンロード可能なスプレッドシートを生成します。ネストしたオブジェクト、配列、大容量データセットに対応。100% ブラウザ内で完結。',
      keywords: 'json to excel, json to xlsx, json を excel に変換, json to excel コンバーター, json を xlsx に変換 オンライン',
    },
    h1: 'JSON to Excel 変換ツール',
    desc: 'JSON データをダウンロード可能な Excel スプレッドシート（<code>.xlsx</code>）に変換します。API レスポンス、設定ファイル、Web データを、適切な列の型と書式を持つビジネス向けスプレッドシートにするのに最適です。',
    from: 'JSON',
    to: 'Excel (XLSX)',
    slug: 'json-to-excel',
    path: '/json-to-excel-converter',
    sections: [
      {
        heading: 'なぜ JSON を Excel に変換するのか',
        blocks: [
          {
            type: 'p',
            html: 'JSON は API や開発ツールの標準形式ですが、マネージャーやアナリスト、ビジネスチームが求めるのは Excel です。JSON を XLSX に変換すればこのギャップを埋められます。生の API レスポンス、Webhook のペイロード、データベースのエクスポートを、Microsoft Excel、Google Sheets、Apple Numbers で技術的な設定なしに誰でも開けるきれいなスプレッドシートに変換できます。',
          },
          {
            type: 'p',
            html: 'これは特に、技術に詳しくない関係者にデータを共有する場合に役立ちます。JSON ファイルを渡して読み方を説明する代わりに、適切な列ヘッダー、データ型、書式を備えたおなじみのスプレッドシートを提供できます。',
          },
        ],
      },
      {
        heading: 'ネストした JSON が Excel でどのように表示されるか',
        blocks: [
          {
            type: 'p',
            html: 'JSON データはしばしばネストしています。オブジェクトの中のオブジェクト、オブジェクトの配列、混在した型などです。変換ツールはアンダースコア区切りでネストしたキーを平坦化します。たとえば、<code>&lbrace;"user": &lbrace;"name": "Alice", "contact": &lbrace;"email": "a@b.com"&rbrace;&rbrace;&rbrace;</code> は列 <code>user_name</code> と <code>user_contact_email</code> になります。',
          },
          {
            type: 'p',
            html: 'オブジェクトの配列は複数の行に展開されます。プリミティブな配列（例: <code>["red", "blue"]</code>）はセミコロンで結合されて 1 つのセルになります。各 JSON オブジェクトは 1 行になり、各キーと値のペアは正しいデータ型を持つセルになります。数値は数値のまま、日付は日付のままなので、ピボットテーブルや数式がすぐに機能します。',
          },
        ],
      },
      {
        heading: 'JSON を Excel に変換する方法',
        blocks: [
          {
            type: 'list',
            ordered: true,
            items: [
              '変換元に <strong>JSON</strong>、変換先に <strong>Excel (XLSX)</strong> を選択する',
              'JSON を貼り付けるか、<code>.json</code> ファイルをアップロードするか、URL から取得する',
              '<strong>変換</strong> をクリックするか、<kbd>Ctrl+Enter</kbd> を押す',
              '表をプレビューし、シート名と列幅をカスタマイズする',
              '<code>.xlsx</code> としてダウンロードする',
            ],
          },
        ],
      },
      {
        heading: '特徴',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'ネストした JSON オブジェクトを <code>_</code> 区切りで列に平坦化',
              'オブジェクトの配列はスプレッドシートの行になる',
              '型を考慮した列 — 数値・日付・テキストを保持',
              'ダウンロード前のシート名カスタマイズと自動列幅オプション',
              'JSON 配列、ネストしたオブジェクト、混在した構造に対応',
            ],
          },
        ],
      },
      {
        heading: 'いつ使うべきか',
        blocks: [
          {
            type: 'p',
            html: '<strong>レポート:</strong> バックエンド API からデータ（ユーザー登録数、収益、ページビュー）を取得し、週次の事業レビュー発表用に Excel へ変換します。',
          },
          {
            type: 'p',
            html: '<strong>データ分析:</strong> データベースのクエリツールから JSON をエクスポートし、XLSX に変換して Excel でピボットテーブル、グラフ、what-if 分析に使用します。',
          },
          {
            type: 'p',
            html: '<strong>クライアントへの納品:</strong> クライアントのシステムが Webhook 経由で JSON データを送ってきます。エンジニアの支援なしで確認できるよう、きれいなスプレッドシートに変換します。',
          },
        ],
      },
    ],
  },
  'excel-to-csv': {
    meta: {
      title: 'Excel to CSV 変換ツール — XLSX を CSV に無料でオンライン変換',
      description:
        'Excel（.xlsx）を CSV に無料でオンライン変換。スプレッドシートをアップロードしてプレーンな CSV としてダウンロードできます。複数シート対応、50 MB まで、ブラウザ内で処理。',
      keywords: 'excel to csv, xlsx to csv, excel を csv に変換, excel to csv コンバーター, xlsx to csv オンライン',
    },
    h1: 'Excel to CSV 変換ツール',
    desc: 'Excel スプレッドシートをプレーンな CSV 形式に変換します。高速、無料、そしてプライベート。システム間のデータ移行、データベースへの取り込み、データ分析ツール用のファイル作成に最適です。',
    from: 'Excel (XLSX)',
    to: 'CSV',
    slug: 'excel-to-csv',
    path: '/excel-to-csv-converter',
    sections: [
      {
        heading: 'なぜ Excel を CSV に変換するのか',
        blocks: [
          {
            type: 'p',
            html: 'CSV は最も汎用性の高いデータ形式で、すべてのスプレッドシートアプリ、データベース、ETL パイプライン、データ分析ツールが特別なライブラリやライセンスなしで読み取れます。XLSX を CSV に変換すると、書式、グラフ、マクロ、独自のバイナリ構造が取り除かれ、どこでも使えるクリーンで可搬性のある表形式データが残ります。',
          },
          {
            type: 'p',
            html: 'これはシステム間でデータを移動する際の定番の手順です。Excel から PostgreSQL（<code>COPY</code> コマンド経由）、分析用の Python pandas や R、BigQuery や Snowflake などのクラウドデータウェアハウス、CSV ファイルのみを受け付ける CRM のインポートツールへデータを移行できます。',
          },
        ],
      },
      {
        heading: 'CSV で失われるもの（そしてそれが良い理由）',
        blocks: [
          {
            type: 'p',
            html: 'Excel ファイルには多くの付加情報が含まれています。セルの色、フォント、結合セル、数式、グラフ、ピボットテーブル、マクロ、カスタム XML などです。CSV はこれらをすべて削除し、カンマで区切られたプレーンテキストの行と列という生データだけを保持します。そのため、CSV ファイルははるかに小さく、解析が速く、あらゆる環境と互換性があります。数式はエクスポート前に現在の値に評価されるので、数式の構文ではなく計算結果を取得できます。',
          },
        ],
      },
      {
        heading: 'Excel を CSV に変換する方法',
        blocks: [
          {
            type: 'list',
            ordered: true,
            items: [
              '変換元に <strong>Excel (XLSX)</strong>、変換先に <strong>CSV</strong> を選択する',
              '<code>.xlsx</code> ファイルをドラッグ &amp; ドロップまたは参照でアップロードする',
              'ブックに複数のシートが含まれる場合はシートを選択する',
              '<strong>変換</strong> をクリックするか、<kbd>Ctrl+Enter</kbd> を押す',
              'プレビューして CSV としてダウンロードする',
            ],
          },
        ],
      },
      {
        heading: '特徴',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              '複数シートの Excel ブックに対応',
              '正しい CSV の引用符処理 — セル内のカンマや改行にも対応',
              'Excel の列名からヘッダー行を保持',
              '50 MB までのファイルに対応',
              '書式やメタデータは引き継がず、クリーンなデータのみ',
            ],
          },
        ],
      },
      {
        heading: 'この変換を使うべきタイミング',
        blocks: [
          {
            type: 'p',
            html: '<strong>データベースへのインポート:</strong> PostgreSQL、MySQL、SQLite に一括インポートしたい顧客レコードのスプレッドシートがあります。CSV は <code>COPY</code> や <code>LOAD DATA</code> コマンドの標準的な入力形式です。',
          },
          {
            type: 'p',
            html: '<strong>データ分析:</strong> Excel のレポートを CSV にエクスポートし、統計モデリング、可視化、機械学習のために Python（pandas）、R、Jupyter Notebook に読み込みます。',
          },
          {
            type: 'p',
            html: '<strong>システム移行:</strong> CRM、ERP、会計システム間の移行。ほとんどすべての移行ツールが中間形式として CSV を受け付けます。',
          },
          {
            type: 'p',
            html: '<strong>バージョン管理:</strong> git で表形式データの変更を追跡します。CSV ファイルは差分がきれいに表示されますが、バイナリの .xlsx ファイルは git では読み取れません。',
          },
        ],
      },
    ],
  },
};

export const jaHome: HomeContent = {
  meta: {
    title: '無料オンラインデータ変換ツール — JSON、CSV、Excel、XML、YAML',
    description:
      'JSON、CSV、Excel、XML、YAML、HTML、Markdown などをブラウザ内で変換。アップロード不要、100% プライベート。',
    keywords:
      'データ変換ツール, json to csv, excel to json, csv to json, xml to json, 無料オンラインツール, 形式変換',
  },
  hero: {
    h1: '無料オンラインデータ変換ツール — JSON、CSV、Excel、XML &amp; YAML',
    descs: [
      'Data Converter は、開発者、アナリスト、QA エンジニア、ビジネスユーザーが JSON、XML、CSV、Excel、YAML などの形式間で構造化データを変換できる無料のオンラインツールです。',
      '多くのオンライン変換ツールとは異なり、すべての処理がブラウザ内で直接実行されます。データが当社のサーバーにアップロードされることはないため、安全かつプライベートに変換できます。',
      'API のデバッグ、データベースの移行、設定ファイルの変換、スプレッドシートの作成など、Data Converter があればプロセスが簡単になります。',
    ],
    trust: '100% クライアントサイドで処理 — データがサーバーに送信されることはありません',
  },
  features: {
    heading: '主要なすべてのデータ形式間で変換',
    cards: [
      {
        title: 'JSON 変換',
        desc: 'JSON を CSV、Excel、XML、YAML、HTML、Markdown、PDF に変換。ネストしたオブジェクト、配列、大容量ファイルに対応。',
        link: '/json-to-csv-converter',
        icon: 'json',
      },
      {
        title: 'CSV 変換',
        desc: 'CSV を JSON、Excel、XML、YAML などに変換。スマートなヘッダー検出と型推論を内蔵。',
        link: '/csv-to-json-converter',
        icon: 'csv',
      },
      {
        title: 'Excel 変換',
        desc: 'Excel（.xlsx）を複数シート対応で JSON、CSV、XML、YAML に変換。アップロードすると即座に変換されます。',
        link: '/excel-to-json-converter',
        icon: 'excel',
      },
      {
        title: 'XML &amp; YAML 変換',
        desc: 'XML や YAML を JSON、CSV、Excel などの形式に変換。ネストした要素をアンダースコア区切りで平坦化。',
        link: '/json-to-excel-converter',
        icon: 'xml',
      },
    ],
  },
  howItWorks: {
    heading: 'データを無料でオンライン変換する方法',
    steps: [
      { title: '形式を選択', desc: '変換バーで変換元と変換先の形式を選択' },
      { title: '貼り付けまたはアップロード', desc: 'データを貼り付けるか、ファイルをアップロードするか、URL から取得' },
      { title: '即座に変換', desc: '変換 をクリックするか Ctrl+Enter を押す' },
      { title: '編集 &amp; エクスポート', desc: 'プレビュー、並べ替え、編集して任意の形式でダウンロード' },
    ],
  },
  useCases: {
    heading: 'なぜ Data Converter を使うのか',
    sub: 'すべてクライアントサイドで実行され、ファイルがデバイスから外部に出ることはありません。登録不要、制限なし、完全無料。',
    cards: [
      {
        icon: 'api',
        title: 'API 開発',
        desc: 'JSON の API レスポンスをスプレッドシート分析用に CSV へ変換したり、API テスト用に CSV データを JSON へ変換したりできます。',
      },
      {
        icon: 'db',
        title: 'データベース移行',
        desc: 'Excel シートや CSV エクスポートを JSON や XML に変換して、MongoDB、PostgreSQL、Firebase などにインポートできます。',
      },
      {
        icon: 'config',
        title: '設定管理',
        desc: 'YAML 設定ファイルを JavaScript アプリ用に JSON へ、または JSON 設定を Docker や Kubernetes 用に YAML へ変換できます。',
      },
      {
        icon: 'report',
        title: 'データレポート',
        desc: 'JSON や XML データを、ドキュメント、レポート、プレゼンテーション用に整形された HTML テーブルや Markdown に変換できます。',
      },
      {
        icon: 'sheet',
        title: 'スプレッドシート処理',
        desc: 'Excel ファイルをアップロードしてセル値を編集し、行をフィルタリングして CSV、JSON、PDF としてエクスポートできます。すべてブラウザ内で完結します。',
      },
    ],
  },
  formats: {
    heading: '対応している変換',
    sub: '必要なすべての形式ペアがワンクリックで利用可能',
    cards: [
      {
        label: 'JSON',
        targets: ['CSV', 'Excel', 'XML', 'YAML', 'HTML', 'Markdown', 'PDF'],
        tag: 'API データ、設定ファイル',
      },
      {
        label: 'CSV',
        targets: ['JSON', 'Excel', 'XML', 'YAML', 'HTML', 'Markdown', 'PDF'],
        tag: 'スプレッドシート、DB エクスポート',
      },
      {
        label: 'Excel',
        targets: ['JSON', 'CSV', 'XML', 'YAML', 'HTML', 'Markdown', 'PDF'],
        tag: 'ビジネスレポート、複数シート',
      },
      {
        label: 'XML',
        targets: ['JSON', 'CSV', 'Excel', 'YAML', 'HTML', 'Markdown', 'PDF'],
        tag: 'レガシーシステム、Web サービス',
      },
      {
        label: 'YAML',
        targets: ['JSON', 'CSV', 'Excel', 'XML', 'HTML', 'Markdown', 'PDF'],
        tag: 'Docker、Kubernetes、CI/CD',
      },
    ],
  },
};
