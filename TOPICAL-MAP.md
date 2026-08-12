# Developer Tools — Topical Map & Programmatic SEO Plan

**Site:** https://metadataconverter.com
**Goal:** 1M+ monthly Google organic page views
**Status:** Strategy document only — no code changes made.

---

## 1. Execution Strategy (Read First)

| Lever | Plan |
|---|---|
| Core traffic driver | **Conversions playbook** ("[X] to [Y]") — highest-volume, best intent match for a converter tool |
| Secondary driver | **Glossary playbook** ("what is [X]") — captures informational volume, feeds internal links to tools |
| Tertiary driver | **Directory playbook** ("[category] tools") — pillar pages that consolidate authority |
| Launch order | 1) JSON/CSV/Excel clusters (already live tools) → 2) Encoding/Base64/Hash/UUID/JWT → 3) Date/Time/Color/Regex/Markdown → 4) SQL/HTTP/API → 5) Dev-ops (Docker/K8s/Git/Cloud/DB) |
| Monetization guard | Every tool page = working tool + short guide + schema. Never a text-only doorway. |

**Volume–Difficulty matrix:**

| Difficulty | Examples | Tactics |
|---|---|---|
| Low | json to csv, uuid generator, base64 encode | Ship fast, win long-tail, build authority |
| Medium | json formatter, markdown to html, unix timestamp | Differentiate with free/live/private-by-default |
| High | json parser, jwt decoder, regex tester | Only after domain authority grows; use programmatic pages off the tool hub |

---

## 2. Tool Clusters (Topical Map)

### 2.1 JSON

| Tool | Primary keyword | Search intent | Related keywords | Difficulty | Internal links (from) |
|---|---|---|---|---|---|
| JSON Formatter | json formatter | Transactional | json beautifier, format json online, pretty print json | Medium | /json-tools, /json-parser |
| JSON Validator | json validator | Transactional | validate json, json syntax checker, is my json valid | Medium | /json-tools, /json-formatter |
| JSON Minifier | json minifier | Transactional | minify json, compress json, json minify online | Low | /json-tools, /json-formatter |
| JSON Beautifier | json beautifier | Transactional | json pretty print, beautify json, json formatter | Medium | /json-tools, /json-minifier |
| JSON Diff | json diff | Transactional | compare json online, json difference, json diff tool | Low | /json-tools, /json-compare |
| JSON Compare | json compare | Transactional | json comparison, compare two json files, json equality | Low | /json-tools, /json-diff |
| JSON to CSV | json to csv | Transactional | convert json to csv, json to excel | High (but brand-owned) | /json-tools, /csv-tools, /blog/guides/json-to-csv-converter-guide |
| JSON to XML | json to xml | Transactional | convert json to xml, json xml converter | Medium | /json-tools, /xml-tools |
| JSON to YAML | json to yaml | Transactional | convert json to yaml, json yaml converter | Medium | /json-tools, /yaml-tools |
| JSON Schema Generator | json schema generator | Transactional | generate json schema, json schema from json | Low | /json-tools, /json-validator |

**Pillar:** `/json-tools`

### 2.2 XML

| Tool | Primary keyword | Search intent | Related keywords | Difficulty | Internal links (from) |
|---|---|---|---|---|---|
| XML Formatter | xml formatter | Transactional | format xml online, pretty print xml, beautify xml | Medium | /xml-tools, /xml-parser |
| XML Validator | xml validator | Transactional | validate xml, well-formed xml checker | Medium | /xml-tools, /xml-formatter |
| XML Minifier | xml minifier | Transactional | minify xml, compress xml | Low | /xml-tools |
| XML to JSON | xml to json | Transactional | convert xml to json, xml json converter | Medium | /xml-tools, /json-tools |
| XML to CSV | xml to csv | Transactional | convert xml to csv, xml csv converter | Low | /xml-tools, /csv-tools |
| XML to YAML | xml to yaml | Transactional | convert xml to yaml | Low | /xml-tools, /yaml-tools |
| XML to HTML | xml to html | Transactional | convert xml to html, xml html converter | Low | /xml-tools, /html-tools |
| XML Schema Generator | xsd generator | Transactional | generate xsd from xml, xml schema generator | Low | /xml-tools, /xml-validator |
| XPath Tester | xpath tester | Transactional | test xpath online, xpath evaluator | Medium | /xml-tools, /xml-formatter |
| XML Diff | xml diff | Transactional | compare xml online, xml difference | Low | /xml-tools, /xml-validator |

**Pillar:** `/xml-tools`

### 2.3 YAML

| Tool | Primary keyword | Search intent | Related keywords | Difficulty | Internal links (from) |
|---|---|---|---|---|---|
| YAML Formatter | yaml formatter | Transactional | format yaml, yaml beautifier | Low | /yaml-tools, /yaml-validator |
| YAML Validator | yaml validator | Transactional | validate yaml, yaml lint | Low | /yaml-tools |
| YAML to JSON | yaml to json | Transactional | convert yaml to json, yaml json converter | Medium | /yaml-tools, /json-tools |
| JSON to YAML | json to yaml | Transactional | convert json to yaml | Medium | /yaml-tools, /json-tools |
| YAML to CSV | yaml to csv | Transactional | convert yaml to csv | Low | /yaml-tools, /csv-tools |
| YAML to XML | yaml to xml | Transactional | convert yaml to xml | Low | /yaml-tools, /xml-tools |
| YAML Linter | yaml linter | Transactional | yaml lint online, check yaml | Low | /yaml-tools, /yaml-validator |

**Pillar:** `/yaml-tools`

### 2.4 CSV

| Tool | Primary keyword | Search intent | Related keywords | Difficulty | Internal links (from) |
|---|---|---|---|---|---|
| CSV to JSON | csv to json | Transactional | convert csv to json, csv json converter | High | /csv-tools, /json-tools, /blog/guides/csv-to-json-converter-guide |
| JSON to CSV | json to csv | Transactional | convert json to csv | High | /csv-tools, /json-tools, /blog/guides/json-to-csv-converter-guide |
| CSV to Excel | csv to xlsx | Transactional | convert csv to excel, csv to xlsx | Medium | /csv-tools, /excel-tools |
| Excel to CSV | excel to csv | Transactional | convert xlsx to csv, excel to csv converter | High | /csv-tools, /excel-tools, /blog/guides/excel-to-csv-converter-guide |
| CSV to XML | csv to xml | Transactional | convert csv to xml | Low | /csv-tools, /xml-tools |
| CSV to YAML | csv to yaml | Transactional | convert csv to yaml | Low | /csv-tools, /yaml-tools |
| CSV to SQL | csv to sql | Transactional | generate sql insert from csv, csv to insert statements | Medium | /csv-tools, /sql-tools |
| CSV Viewer | csv viewer | Transactional | view csv online, csv reader | Medium | /csv-tools |
| CSV Validator | csv validator | Transactional | check csv format, csv lint | Low | /csv-tools |

**Pillar:** `/csv-tools`

### 2.5 Excel / Spreadsheet

| Tool | Primary keyword | Search intent | Related keywords | Difficulty | Internal links (from) |
|---|---|---|---|---|---|
| Excel to JSON | excel to json | Transactional | convert xlsx to json, excel json converter | Medium | /excel-tools, /json-tools, /blog/guides/excel-to-json-converter-guide |
| JSON to Excel | json to excel | Transactional | convert json to xlsx, json excel converter | Medium | /excel-tools, /json-tools, /blog/guides/json-to-excel-converter-guide |
| Excel to CSV | excel to csv | Transactional | convert xlsx to csv | High | /excel-tools, /csv-tools, /blog/guides/excel-to-csv-converter-guide |
| CSV to Excel | csv to xlsx | Transactional | csv to excel converter | Medium | /excel-tools, /csv-tools |
| Excel to XML | excel to xml | Transactional | xlsx to xml | Low | /excel-tools, /xml-tools |
| Excel to SQL | excel to sql | Transactional | xlsx to sql insert | Medium | /excel-tools, /sql-tools |
| XLSX Viewer | xlsx viewer | Transactional | open xlsx online, xlsx reader | Medium | /excel-tools |
| Excel Compare | excel compare | Transactional | compare xlsx files online | Low | /excel-tools |
| Excel to Markdown | excel to markdown | Transactional | convert excel to markdown table | Low | /excel-tools, /markdown-tools |

**Pillar:** `/excel-tools`

### 2.6 SQL

| Tool | Primary keyword | Search intent | Related keywords | Difficulty | Internal links (from) |
|---|---|---|---|---|---|
| SQL Formatter | sql formatter | Transactional | format sql online, sql beautifier | Medium | /sql-tools, /sql-validator |
| SQL Validator | sql validator | Transactional | validate sql query online | Medium | /sql-tools |
| SQL Minifier | sql minifier | Transactional | minify sql, compress sql | Low | /sql-tools |
| CSV to SQL | csv to sql | Transactional | csv to insert statements | Medium | /sql-tools, /csv-tools |
| JSON to SQL | json to sql | Transactional | json to sql insert | Low | /sql-tools, /json-tools |
| Excel to SQL | excel to sql | Transactional | xlsx to sql insert | Medium | /sql-tools, /excel-tools |
| SQL to JSON | sql to json | Transactional | convert sql results to json | Low | /sql-tools, /json-tools |
| SQL Diff | sql diff | Transactional | compare sql queries | Low | /sql-tools |

**Pillar:** `/sql-tools`

### 2.7 HTML

| Tool | Primary keyword | Search intent | Related keywords | Difficulty | Internal links (from) |
|---|---|---|---|---|---|
| HTML Formatter | html formatter | Transactional | format html online, html beautifier | Medium | /html-tools, /html-validator |
| HTML Validator | html validator | Transactional | validate html online | Medium | /html-tools |
| HTML Minifier | html minifier | Transactional | minify html, compress html | Medium | /html-tools |
| HTML to Markdown | html to markdown | Transactional | convert html to markdown | Medium | /html-tools, /markdown-tools |
| Markdown to HTML | markdown to html | Transactional | markdown to html converter | Medium | /html-tools, /markdown-tools |
| HTML to PDF | html to pdf | Transactional | html to pdf converter | High | /html-tools |
| HTML to Text | html to text | Transactional | strip html tags, html to plain text | Low | /html-tools |
| HTML Escape | html escape | Transactional | html encode, html escape tool | Low | /html-tools, /encoding-tools |
| HTML Diff | html diff | Transactional | compare html files | Low | /html-tools |
| HTML Entity Decode | html entity decoder | Transactional | html entities to text, decode html entities | Low | /html-tools |

**Pillar:** `/html-tools`

### 2.8 CSS

| Tool | Primary keyword | Search intent | Related keywords | Difficulty | Internal links (from) |
|---|---|---|---|---|---|
| CSS Formatter | css formatter | Transactional | format css online, css beautifier | Medium | /css-tools |
| CSS Minifier | css minifier | Transactional | minify css, compress css | Medium | /css-tools |
| CSS Validator | css validator | Transactional | validate css online | Low | /css-tools |
| CSS to SCSS | css to scss | Transactional | convert css to scss | Low | /css-tools |
| CSS to Tailwind | css to tailwind | Transactional | convert css to tailwind classes | Low | /css-tools |
| CSS Gradient Generator | css gradient generator | Transactional | gradient generator, css gradient | Low | /css-tools, /color-tools |
| CSS Color Converter | css color converter | Transactional | hex to rgb, hex to hsl | Low | /css-tools, /color-tools |
| CSS Box Shadow Generator | box shadow generator | Transactional | css box shadow tool | Low | /css-tools |
| CSS Flexbox Generator | flexbox generator | Transactional | flexbox tool, flexbox playground | Low | /css-tools |

**Pillar:** `/css-tools`

### 2.9 JavaScript

| Tool | Primary keyword | Search intent | Related keywords | Difficulty | Internal links (from) |
|---|---|---|---|---|---|
| JavaScript Formatter | js formatter | Transactional | javascript beautifier, format js | Medium | /js-tools |
| JavaScript Minifier | js minifier | Transactional | minify js, compress javascript | Medium | /js-tools |
| JavaScript Validator | js validator | Transactional | validate javascript, js lint online | Medium | /js-tools |
| JavaScript Obfuscator | js obfuscator | Transactional | obfuscate javascript, protect js code | Medium | /js-tools |
| JavaScript Beautifier | js beautifier | Transactional | js pretty print | Medium | /js-tools |
| JSON to JavaScript | json to js | Transactional | json to javascript object | Low | /js-tools, /json-tools |
| JavaScript to TypeScript | js to ts | Transactional | convert js to typescript | Low | /js-tools, /typescript-tools |
| JavaScript Uglify | js uglify | Transactional | uglify javascript | Low | /js-tools, /js-minifier |
| JavaScript Deobfuscator | js deobfuscator | Transactional | deobfuscate javascript | Low | /js-tools, /js-obfuscator |

**Pillar:** `/js-tools`

### 2.10 TypeScript

| Tool | Primary keyword | Search intent | Related keywords | Difficulty | Internal links (from) |
|---|---|---|---|---|---|
| TypeScript Formatter | typescript formatter | Transactional | format ts online | Low | /typescript-tools |
| TypeScript Compiler Online | typescript compiler | Transactional | compile typescript online, ts playground | Low | /typescript-tools |
| TypeScript Validator | typescript validator | Transactional | check typescript errors online | Low | /typescript-tools |
| JavaScript to TypeScript | js to ts | Transactional | convert javascript to typescript | Low | /typescript-tools, /js-tools |
| TypeScript to JavaScript | typescript to javascript | Transactional | compile ts to js | Low | /typescript-tools |
| JSON to TypeScript Interface | json to typescript | Transactional | generate ts interface from json | Low | /typescript-tools, /json-tools |
| JSON to TypeScript Type | json to ts type | Transactional | json to ts type generator | Low | /typescript-tools, /json-tools |
| TypeScript Minifier | typescript minifier | Transactional | minify typescript | Low | /typescript-tools |

**Pillar:** `/typescript-tools`

### 2.11 Base64

| Tool | Primary keyword | Search intent | Related keywords | Difficulty | Internal links (from) |
|---|---|---|---|---|---|
| Base64 Encode | base64 encode | Transactional | base64 encoder, encode to base64 | Low | /base64-tools, /encoding-tools |
| Base64 Decode | base64 decode | Transactional | base64 decoder, decode base64 | Low | /base64-tools, /encoding-tools |
| Base64 to Image | base64 to image | Transactional | base64 image decoder, convert base64 to png | Low | /base64-tools |
| Image to Base64 | image to base64 | Transactional | image to base64 converter | Low | /base64-tools |
| Base64 to File | base64 to file | Transactional | base64 file download | Low | /base64-tools |
| Base64 to Text | base64 to text | Transactional | base64 to string | Low | /base64-tools |
| Base64 Encode Image | base64 encode image | Transactional | image to base64 string | Low | /base64-tools |
| Base64 URL Encode | base64url encode | Transactional | base64url decoder, url safe base64 | Low | /base64-tools |
| JWT Decoder | jwt decoder | Transactional | decode jwt token | Medium | /base64-tools, /jwt-tools |

**Pillar:** `/base64-tools`

### 2.12 JWT

| Tool | Primary keyword | Search intent | Related keywords | Difficulty | Internal links (from) |
|---|---|---|---|---|---|
| JWT Decoder | jwt decoder | Transactional | decode jwt, parse jwt token | Medium | /jwt-tools, /base64-tools |
| JWT Encoder | jwt encoder | Transactional | create jwt token online | Low | /jwt-tools |
| JWT Verifier | jwt verifier | Transactional | verify jwt signature | Medium | /jwt-tools |
| JWT to JSON | jwt to json | Transactional | jwt payload decoder | Low | /jwt-tools, /json-tools |
| HS256 Generator | hs256 jwt | Transactional | jwt hs256 sign | Low | /jwt-tools |
| RS256 Verifier | rs256 verify | Transactional | jwt rs256 verification | Low | /jwt-tools |
| JWT Expiry Checker | jwt expiration | Transactional | check jwt expiry, jwt exp | Low | /jwt-tools |

**Pillar:** `/jwt-tools`

### 2.13 UUID

| Tool | Primary keyword | Search intent | Related keywords | Difficulty | Internal links (from) |
|---|---|---|---|---|---|
| UUID Generator | uuid generator | Transactional | generate uuid, uuid v4, uuid online | Low | /uuid-tools |
| UUID v4 Generator | uuid v4 | Transactional | uuid v4 online | Low | /uuid-tools, /uuid-generator |
| UUID v1 Generator | uuid v1 | Transactional | uuid v1 online | Low | /uuid-tools |
| UUID v7 Generator | uuid v7 | Transactional | uuid v7 online, time ordered uuid | Low | /uuid-tools |
| UUID Validator | uuid validator | Transactional | check uuid format, is valid uuid | Low | /uuid-tools |
| GUID Generator | guid generator | Transactional | generate guid, guid online | Low | /uuid-tools, /uuid-generator |
| UUID to Hex | uuid to hex | Transactional | convert uuid to hex | Low | /uuid-tools |
| UUID Decoder | uuid decoder | Transactional | decode uuid, uuid info | Low | /uuid-tools |
| Random ID Generator | random id generator | Transactional | generate random id, nanoid | Low | /uuid-tools |

**Pillar:** `/uuid-tools`

### 2.14 Hash

| Tool | Primary keyword | Search intent | Related keywords | Difficulty | Internal links (from) |
|---|---|---|---|---|---|
| MD5 Generator | md5 generator | Transactional | md5 hash, generate md5 | Low | /hash-tools, /md5-hash |
| SHA-1 Generator | sha1 generator | Transactional | sha1 hash online | Low | /hash-tools |
| SHA-256 Generator | sha256 generator | Transactional | sha256 hash, sha256 online | Low | /hash-tools |
| SHA-512 Generator | sha512 generator | Transactional | sha512 hash | Low | /hash-tools |
| Bcrypt Generator | bcrypt generator | Transactional | bcrypt hash, bcrypt online | Low | /hash-tools |
| Bcrypt Verify | bcrypt verify | Transactional | bcrypt check password | Low | /hash-tools |
| HMAC Generator | hmac generator | Transactional | hmac sha256, hmac online | Low | /hash-tools, /encoding-tools |
| Hash Text | text to hash | Transactional | hash text online, hash string | Low | /hash-tools |
| Password Generator | password generator | Transactional | generate strong password, password maker | Low | /hash-tools, /uuid-tools |

**Pillar:** `/hash-tools`

### 2.15 Encoding / Text

| Tool | Primary keyword | Search intent | Related keywords | Difficulty | Internal links (from) |
|---|---|---|---|---|---|
| URL Encode | url encode | Transactional | percent encoding, encode url | Low | /encoding-tools, /html-tools |
| URL Decode | url decode | Transactional | decode url online | Low | /encoding-tools |
| HTML Encode | html encode | Transactional | escape html, html entity encoder | Low | /encoding-tools, /html-tools |
| HTML Decode | html decode | Transactional | unescape html entities | Low | /encoding-tools |
| URL Encoder/Decoder | url encoder decoder | Transactional | url escape tool | Low | /encoding-tools |
| Unicode Converter | unicode converter | Transactional | text to unicode, unicode escape | Low | /encoding-tools |
| UTF-8 Encode | utf8 encode | Transactional | utf-8 encoder online | Low | /encoding-tools |
| Base64 Encode | base64 encode | Transactional | base64 converter | Low | /encoding-tools, /base64-tools |
| Base64 Decode | base64 decode | Transactional | base64 to text | Low | /encoding-tools, /base64-tools |
| Text to Morse | text to morse | Transactional | morse code converter | Low | /encoding-tools |
| Morse to Text | morse to text | Transactional | morse code decoder | Low | /encoding-tools |
| ROT13 | rot13 | Transactional | rot13 decoder, rot13 online | Low | /encoding-tools |
| Binary Converter | text to binary | Transactional | text to binary, binary to text | Low | /encoding-tools |
| Hex Converter | text to hex | Transactional | text to hex, hex to text | Low | /encoding-tools |
| Ascii Converter | text to ascii | Transactional | ascii to text, char codes | Low | /encoding-tools |

**Pillar:** `/encoding-tools`

### 2.16 QR Code

| Tool | Primary keyword | Search intent | Related keywords | Difficulty | Internal links (from) |
|---|---|---|---|---|---|
| QR Code Generator | qr code generator | Transactional | generate qr code, qr generator | Low | /qr-code-tools |
| QR Code Reader | qr code reader | Transactional | scan qr code online, qr decoder | Low | /qr-code-tools |
| QR Code Scanner | qr scanner | Transactional | qr code scanner online | Low | /qr-code-tools |
| QR Code to Text | qr to text | Transactional | decode qr code to text | Low | /qr-code-tools |
| WiFi QR Code Generator | wifi qr code | Transactional | wifi qr generator, qr code wifi | Low | /qr-code-tools |
| VCard QR Code Generator | vcard qr | Transactional | qr code vcard, contact qr | Low | /qr-code-tools |
| QR Code API | qr code api | Informational | generate qr api, qr endpoint | Low | /qr-code-tools |

**Pillar:** `/qr-code-tools`

### 2.17 Color

| Tool | Primary keyword | Search intent | Related keywords | Difficulty | Internal links (from) |
|---|---|---|---|---|---|
| Hex to RGB | hex to rgb | Transactional | hex color converter, hex to rgba | Low | /color-tools, /css-tools |
| RGB to Hex | rgb to hex | Transactional | convert rgb to hex | Low | /color-tools, /css-tools |
| Hex to HSL | hex to hsl | Transactional | convert hex to hsl | Low | /color-tools, /css-tools |
| HSL to Hex | hsl to hex | Transactional | convert hsl to hex | Low | /color-tools |
| Color Picker | color picker | Transactional | color picker online | Medium | /color-tools |
| Random Color Generator | random color generator | Transactional | random color palette | Low | /color-tools |
| Color Palette Generator | color palette generator | Transactional | color palette maker | Low | /color-tools |
| Color Contrast Checker | color contrast checker | Transactional | contrast checker, wcag contrast | Low | /color-tools |
| Color Name Finder | color name finder | Transactional | name a color, hex to color name | Low | /color-tools |
| CSS Color Converter | css color converter | Transactional | css color format converter | Low | /color-tools, /css-tools |
| Image Color Picker | image color picker | Transactional | pick color from image | Low | /color-tools |
| Shade Generator | color shades | Transactional | generate color shades, tints | Low | /color-tools |

**Pillar:** `/color-tools`

### 2.18 Markdown

| Tool | Primary keyword | Search intent | Related keywords | Difficulty | Internal links (from) |
|---|---|---|---|---|---|
| Markdown to HTML | markdown to html | Transactional | md to html, markdown converter | Medium | /markdown-tools, /html-tools |
| HTML to Markdown | html to markdown | Transactional | convert html to md | Medium | /markdown-tools, /html-tools |
| Markdown Editor | markdown editor | Transactional | online markdown editor, md editor | Medium | /markdown-tools |
| Markdown Preview | markdown preview | Transactional | markdown preview online | Low | /markdown-tools, /markdown-editor |
| Markdown to PDF | markdown to pdf | Transactional | md to pdf | Medium | /markdown-tools |
| Markdown to Word | markdown to docx | Transactional | md to docx | Low | /markdown-tools |
| Markdown Table Generator | markdown table generator | Transactional | generate markdown table | Low | /markdown-tools, /excel-tools |
| Markdown Linter | markdown linter | Transactional | lint markdown online | Low | /markdown-tools |
| Markdown to Jira | markdown to jira | Transactional | md to jira markup | Low | /markdown-tools |
| JSON to Markdown Table | json to markdown | Transactional | json to markdown table | Low | /markdown-tools, /json-tools |

**Pillar:** `/markdown-tools`

### 2.19 Regex

| Tool | Primary keyword | Search intent | Related keywords | Difficulty | Internal links (from) |
|---|---|---|---|---|---|
| Regex Tester | regex tester | Transactional | test regex online, regex checker | High | /regex-tools, /regex-generator |
| Regex Generator | regex generator | Transactional | generate regex from text | Medium | /regex-tools |
| Regex Builder | regex builder | Transactional | build regex online | Low | /regex-tools, /regex-tester |
| Regex Explain | regex explain | Transactional | explain regex, regex breakdown | Low | /regex-tools |
| Regex Escape | regex escape | Transactional | escape regex special chars | Low | /regex-tools |
| Email Regex Generator | email regex | Transactional | regex for email, email validation regex | Low | /regex-tools |
| URL Regex Generator | url regex | Transactional | regex for url | Low | /regex-tools |
| Phone Regex Generator | phone number regex | Transactional | regex for phone numbers | Low | /regex-tools |
| Regex to String | regex to text | Transactional | regex examples from pattern | Low | /regex-tools |
| Regex Replace | regex replace online | Transactional | regex find and replace | Low | /regex-tools, /regex-tester |

**Pillar:** `/regex-tools`

### 2.20 Date & Time

| Tool | Primary keyword | Search intent | Related keywords | Difficulty | Internal links (from) |
|---|---|---|---|---|---|
| Date Difference Calculator | date difference calculator | Transactional | days between dates, date calculator | Low | /date-time-tools, /unix-timestamp-tools |
| Date to Timestamp | date to timestamp | Transactional | date to unix timestamp | Low | /date-time-tools, /unix-timestamp-tools |
| Timestamp to Date | timestamp to date | Transactional | unix to date converter | Low | /date-time-tools, /unix-timestamp-tools |
| Date Converter | date converter | Transactional | convert date format online | Low | /date-time-tools |
| ISO Date Converter | iso 8601 converter | Transactional | iso date to timestamp | Low | /date-time-tools |
| Timezone Converter | timezone converter | Transactional | time zone converter, world clock | Medium | /date-time-tools |
| UTC to Local | utc to local time | Transactional | convert utc to local | Low | /date-time-tools |
| Days Until Calculator | days until | Transactional | countdown days, days from now | Low | /date-time-tools, /date-difference-calculator |
| Age Calculator | age calculator | Transactional | how old am i | Medium | /date-time-tools |
| Business Days Calculator | business days calculator | Transactional | working days between dates | Low | /date-time-tools, /date-difference-calculator |

**Pillar:** `/date-time-tools`

### 2.21 Unix Timestamp

| Tool | Primary keyword | Search intent | Related keywords | Difficulty | Internal links (from) |
|---|---|---|---|---|---|
| Unix Timestamp Converter | unix timestamp converter | Transactional | timestamp converter, epoch converter | Medium | /unix-timestamp-tools, /date-time-tools |
| Epoch Converter | epoch converter | Transactional | epoch to date, epoch time | Medium | /unix-timestamp-tools, /unix-timestamp-converter |
| Timestamp to Date | timestamp to date | Transactional | convert unix to date | Low | /unix-timestamp-tools, /unix-timestamp-converter |
| Date to Timestamp | date to timestamp | Transactional | date to epoch | Low | /unix-timestamp-tools, /unix-timestamp-converter |
| Unix Timestamp Generator | unix timestamp generator | Transactional | current unix time | Low | /unix-timestamp-tools |
| Milliseconds Converter | milliseconds to date | Transactional | epoch milliseconds | Low | /unix-timestamp-tools |
| Timezones to Timestamp | timestamp timezone | Transactional | unix time in timezone | Low | /unix-timestamp-tools, /date-time-tools |

**Pillar:** `/unix-timestamp-tools`

### 2.22 API Testing

| Tool | Primary keyword | Search intent | Related keywords | Difficulty | Internal links (from) |
|---|---|---|---|---|---|
| API Tester | api tester | Transactional | test api online, api playground | Medium | /api-tools, /http-tools |
| REST Client Online | rest client | Transactional | rest api tester, online rest client | Medium | /api-tools, /api-tester |
| GraphQL Playground | graphql playground | Transactional | test graphql online | Low | /api-tools |
| HTTP Status Code Checker | http status checker | Transactional | check http status, status code lookup | Low | /api-tools, /http-tools |
| Request Builder | http request builder | Transactional | build http request online | Low | /api-tools, /api-tester |
| JSON to GraphQL | json to graphql | Transactional | convert json to graphql schema | Low | /api-tools, /json-tools |
| OpenAPI Validator | openapi validator | Transactional | validate openapi spec | Low | /api-tools |
| Webhook Tester | webhook tester | Transactional | test webhook online | Low | /api-tools |

**Pillar:** `/api-tools`

### 2.23 HTTP

| Tool | Primary keyword | Search intent | Related keywords | Difficulty | Internal links (from) |
|---|---|---|---|---|---|
| HTTP Status Code Lookup | http status codes | Informational | list of http status codes, 404 meaning | Medium | /http-tools, /api-tools |
| URL Encoder/Decoder | url encode decode | Transactional | percent encode online | Low | /http-tools, /encoding-tools |
| HTTP Header Parser | http header parser | Transactional | parse http headers | Low | /http-tools |
| Content-Type Converter | content type lookup | Informational | mime types list, content type list | Low | /http-tools |
| HTTP Redirect Checker | redirect checker | Transactional | check redirects online | Low | /http-tools, /http-status-codes |
| Cache Header Checker | cache headers | Transactional | check cache headers | Low | /http-tools |
| CORS Tester | cors tester | Transactional | test cors online | Low | /http-tools, /api-tools |

**Pillar:** `/http-tools`

### 2.24 Docker

| Tool | Primary keyword | Search intent | Related keywords | Difficulty | Internal links (from) |
|---|---|---|---|---|---|
| Dockerfile Generator | dockerfile generator | Transactional | generate dockerfile, dockerfile builder | Medium | /docker-tools |
| Docker Compose Generator | docker compose generator | Transactional | compose file generator | Low | /docker-tools, /dockerfile-generator |
| Docker Image Size Analyzer | docker image size | Informational | analyze docker image, docker size | Low | /docker-tools |
| .dockerignore Generator | dockerignore generator | Transactional | dockerignore example | Low | /docker-tools, /dockerfile-generator |
| Docker Container Name Generator | docker name generator | Transactional | random container name | Low | /docker-tools, /uuid-tools |
| Docker Cheat Sheet | docker cheat sheet | Informational | docker commands cheat sheet | Low | /docker-tools |
| Port to Service Mapper | docker ports | Informational | docker port mapping | Low | /docker-tools |

**Pillar:** `/docker-tools`

### 2.25 Kubernetes

| Tool | Primary keyword | Search intent | Related keywords | Difficulty | Internal links (from) |
|---|---|---|---|---|---|
| Kubernetes YAML Generator | kubernetes yaml generator | Transactional | k8s deployment yaml, pod yaml generator | Low | /k8s-tools, /yaml-tools |
| K8s Deployment Generator | deployment yaml generator | Transactional | kubernetes deployment generator | Low | /k8s-tools |
| Kubectl Cheat Sheet | kubectl cheat sheet | Informational | kubectl commands | Low | /k8s-tools |
| Kubernetes ConfigMap Generator | configmap generator | Transactional | k8s configmap yaml | Low | /k8s-tools |
| K8s Service Generator | service yaml generator | Transactional | kubernetes service yaml | Low | /k8s-tools |
| K8s Secret Generator | secret yaml generator | Transactional | kubernetes secret yaml | Low | /k8s-tools, /base64-tools |
| K8s Namespace Generator | namespace yaml | Transactional | kubernetes namespace yaml | Low | /k8s-tools |
| Helm Chart Validator | helm lint | Informational | validate helm chart | Low | /k8s-tools |

**Pillar:** `/k8s-tools`

### 2.26 Git

| Tool | Primary keyword | Search intent | Related keywords | Difficulty | Internal links (from) |
|---|---|---|---|---|---|
| Git Cheat Sheet | git cheat sheet | Informational | git commands cheat sheet | Low | /git-tools |
| .gitignore Generator | gitignore generator | Transactional | generate gitignore, gitignore template | Low | /git-tools |
| Git Branch Name Generator | git branch name generator | Transactional | branch naming convention | Low | /git-tools |
| Commit Message Generator | git commit message | Transactional | conventional commit generator | Low | /git-tools |
| Git Hook Generator | git hooks | Informational | pre-commit hook example | Low | /git-tools, /gitignore-generator |
| Merge vs Rebase Guide | git merge vs rebase | Informational | git rebase guide | Medium | /git-tools |
| Git Flow Guide | git flow | Informational | git branching strategy | Low | /git-tools |
| Conventional Commits Generator | conventional commits | Transactional | commit convention tool | Low | /git-tools, /commit-message-generator |

**Pillar:** `/git-tools`

### 2.27 AWS

| Tool | Primary keyword | Search intent | Related keywords | Difficulty | Internal links (from) |
|---|---|---|---|---|---|
| AWS Policy Generator | aws policy generator | Transactional | iam policy generator, aws iam | Low | /aws-tools |
| AWS ARN Builder | arn builder | Transactional | construct aws arn, arn generator | Low | /aws-tools |
| AWS S3 Bucket Name Generator | s3 bucket name | Transactional | s3 naming | Low | /aws-tools, /uuid-tools |
| AWS CIDR Calculator | aws cidr calculator | Transactional | subnet calculator aws | Low | /aws-tools, /networking-tools |
| AWS Pricing Calculator Guide | aws pricing | Informational | estimate aws cost | Low | /aws-tools |
| AWS CLI Cheat Sheet | aws cli cheat sheet | Informational | aws cli commands | Low | /aws-tools |
| AWS CloudFormation Generator | cloudformation generator | Transactional | cloudformation template | Low | /aws-tools, /yaml-tools |
| IAM Policy Validator | iam policy validator | Transactional | validate iam policy | Low | /aws-tools, /aws-policy-generator |

**Pillar:** `/aws-tools`

### 2.28 Azure

| Tool | Primary keyword | Search intent | Related keywords | Difficulty | Internal links (from) |
|---|---|---|---|---|---|
| Azure Resource Name Generator | azure resource name | Transactional | azure naming convention | Low | /azure-tools |
| Azure CIDR Calculator | azure subnet calculator | Transactional | azure vnet subnet | Low | /azure-tools, /networking-tools |
| Azure Policy Generator | azure policy | Transactional | azure policy builder | Low | /azure-tools |
| Azure CLI Cheat Sheet | azure cli cheat sheet | Informational | az cli commands | Low | /azure-tools |
| Azure ARM Template Generator | arm template generator | Transactional | azure arm template | Low | /azure-tools, /json-tools |
| Azure Pricing Guide | azure pricing calculator | Informational | estimate azure cost | Low | /azure-tools |
| Azure Function Name Generator | azure function | Transactional | function app naming | Low | /azure-tools, /uuid-tools |
| Bicep Generator | bicep generator | Transactional | azure bicep file | Low | /azure-tools |

**Pillar:** `/azure-tools`

### 2.29 MongoDB

| Tool | Primary keyword | Search intent | Related keywords | Difficulty | Internal links (from) |
|---|---|---|---|---|---|
| MongoDB Query Generator | mongodb query generator | Transactional | mongo find query builder | Low | /mongodb-tools, /json-tools |
| MongoDB Aggregation Builder | mongodb aggregation | Transactional | aggregation pipeline builder | Low | /mongodb-tools, /json-tools |
| MongoDB Compass Export Converter | mongodb to csv | Transactional | convert mongodb to csv | Low | /mongodb-tools, /csv-tools |
| ObjectID Generator | objectid generator | Transactional | mongo objectid online | Low | /mongodb-tools, /uuid-tools |
| MongoDB to JSON | mongodb to json | Transactional | mongoexport to json | Low | /mongodb-tools, /json-tools |
| MongoDB BSON Validator | bson validator | Transactional | validate bson document | Low | /mongodb-tools, /json-validator |
| MongoDB Schema Generator | mongodb schema | Transactional | mongo schema from json | Low | /mongodb-tools, /json-schema-generator |

**Pillar:** `/mongodb-tools`

### 2.30 PostgreSQL

| Tool | Primary keyword | Search intent | Related keywords | Difficulty | Internal links (from) |
|---|---|---|---|---|---|
| PostgreSQL Formatter | postgres formatter | Transactional | format postgres query | Low | /postgresql-tools, /sql-tools |
| PostgreSQL EXPLAIN Visualizer | explain visualizer | Transactional | postgres explain analyze | Medium | /postgresql-tools, /sql-tools |
| SQL to PostgreSQL Converter | sql to postgres | Transactional | convert mysql to postgres | Low | /postgresql-tools, /sql-tools |
| PostgreSQL Data Type Converter | postgres data types | Informational | postgres type mapping | Low | /postgresql-tools |
| JSONB Generator | jsonb generator | Transactional | postgres jsonb example | Low | /postgresql-tools, /json-tools |
| PostgreSQL Index Generator | postgres index | Transactional | create index generator | Low | /postgresql-tools |
| Postgres Cheat Sheet | postgres cheat sheet | Informational | postgres commands | Low | /postgresql-tools |

**Pillar:** `/postgresql-tools`

### 2.31 MySQL

| Tool | Primary keyword | Search intent | Related keywords | Difficulty | Internal links (from) |
|---|---|---|---|---|---|
| MySQL Formatter | mysql formatter | Transactional | format mysql query | Low | /mysql-tools, /sql-tools |
| MySQL to PostgreSQL | mysql to postgres | Transactional | migrate mysql to postgres | Low | /mysql-tools, /postgresql-tools |
| MySQL Data Type Converter | mysql data types | Informational | mysql type mapping | Low | /mysql-tools |
| SQL to MySQL Converter | sql to mysql | Transactional | convert postgres to mysql | Low | /mysql-tools, /sql-tools |
| MySQL Index Generator | mysql index | Transactional | create index mysql | Low | /mysql-tools |
| MySQL Dump Reader | mysql dump viewer | Transactional | read mysql dump online | Low | /mysql-tools |
| MySQL Cheat Sheet | mysql cheat sheet | Informational | mysql commands | Low | /mysql-tools |

**Pillar:** `/mysql-tools`

### 2.32 Redis

| Tool | Primary keyword | Search intent | Related keywords | Difficulty | Internal links (from) |
|---|---|---|---|---|---|
| Redis Command Builder | redis command builder | Transactional | redis commands list | Low | /redis-tools |
| Redis Cheat Sheet | redis cheat sheet | Informational | redis commands cheat sheet | Low | /redis-tools |
| Redis Key Generator | redis key generator | Transactional | redis key naming | Low | /redis-tools, /uuid-tools |
| Redis TTL Calculator | redis ttl | Informational | redis expiry calculator | Low | /redis-tools |
| Redis to JSON | redis data to json | Transactional | redis hash to json | Low | /redis-tools, /json-tools |
| Redis Pattern Builder | redis pattern | Transactional | redis glob pattern | Low | /redis-tools |
| Redis Pipeline Builder | redis pipeline | Transactional | redis batch commands | Low | /redis-tools, /redis-command-builder |

**Pillar:** `/redis-tools`

---

## 3. Pillar Page Map

| Pillar | Links to | Purpose |
|---|---|---|
| `/json-tools` | /json-formatter, /json-validator, /json-minifier, /json-beautifier, /json-diff, /json-compare, /json-to-csv, /json-to-xml, /json-to-yaml, /json-schema-generator | Rank for "json tools", distribute authority to all JSON spokes |
| `/xml-tools` | /xml-formatter, /xml-validator, /xml-minifier, /xml-to-json, /xml-to-csv, /xml-to-yaml, /xml-to-html, /xml-schema-generator, /xpath-tester, /xml-diff | Rank for "xml tools" |
| `/yaml-tools` | /yaml-formatter, /yaml-validator, /yaml-to-json, /json-to-yaml, /yaml-to-csv, /yaml-to-xml, /yaml-linter | Rank for "yaml tools" |
| `/csv-tools` | /csv-to-json, /json-to-csv, /csv-to-excel, /excel-to-csv, /csv-to-xml, /csv-to-yaml, /csv-to-sql, /csv-viewer, /csv-validator | Rank for "csv tools" |
| `/excel-tools` | /excel-to-json, /json-to-excel, /excel-to-csv, /csv-to-excel, /excel-to-xml, /excel-to-sql, /xlsx-viewer, /excel-compare, /excel-to-markdown | Rank for "excel/xlsx tools" |
| `/sql-tools` | /sql-formatter, /sql-validator, /sql-minifier, /csv-to-sql, /json-to-sql, /excel-to-sql, /sql-to-json, /sql-diff | Rank for "sql tools" |
| `/html-tools` | /html-formatter, /html-validator, /html-minifier, /html-to-markdown, /markdown-to-html, /html-to-pdf, /html-to-text, /html-escape, /html-diff, /html-entity-decode | Rank for "html tools" |
| `/css-tools` | /css-formatter, /css-minifier, /css-validator, /css-to-scss, /css-gradient-generator, /css-color-converter, /css-box-shadow-generator, /css-flexbox-generator | Rank for "css tools" |
| `/js-tools` | /js-formatter, /js-minifier, /js-validator, /js-obfuscator, /js-beautifier, /json-to-js, /js-to-ts, /js-uglify, /js-deobfuscator | Rank for "javascript tools" |
| `/typescript-tools` | /ts-formatter, /ts-compiler, /ts-validator, /js-to-ts, /ts-to-js, /json-to-ts-interface, /json-to-ts-type, /ts-minifier | Rank for "typescript tools" |
| `/base64-tools` | /base64-encode, /base64-decode, /base64-to-image, /image-to-base64, /base64-to-file, /base64-to-text, /base64url-encode, /jwt-decoder | Rank for "base64 tools" |
| `/jwt-tools` | /jwt-decoder, /jwt-encoder, /jwt-verifier, /jwt-to-json, /hs256-generator, /rs256-verifier, /jwt-expiry-checker | Rank for "jwt tools" |
| `/uuid-tools` | /uuid-generator, /uuid-v4, /uuid-v1, /uuid-v7, /uuid-validator, /guid-generator, /uuid-to-hex, /uuid-decoder, /random-id-generator | Rank for "uuid tools" |
| `/hash-tools` | /md5-generator, /sha1-generator, /sha256-generator, /sha512-generator, /bcrypt-generator, /bcrypt-verify, /hmac-generator, /hash-text, /password-generator | Rank for "hash tools" |
| `/encoding-tools` | /url-encode, /url-decode, /html-encode, /html-decode, /unicode-converter, /utf8-encode, /base64-encode, /base64-decode, /text-to-morse, /morse-to-text, /rot13, /binary-converter, /hex-converter, /ascii-converter | Rank for "encoding tools" |
| `/qr-code-tools` | /qr-code-generator, /qr-code-reader, /qr-code-scanner, /qr-to-text, /wifi-qr-generator, /vcard-qr-generator, /qr-code-api | Rank for "qr code tools" |
| `/color-tools` | /hex-to-rgb, /rgb-to-hex, /hex-to-hsl, /hsl-to-hex, /color-picker, /random-color-generator, /color-palette-generator, /color-contrast-checker, /color-name-finder, /css-color-converter, /image-color-picker, /shade-generator | Rank for "color tools" |
| `/markdown-tools` | /markdown-to-html, /html-to-markdown, /markdown-editor, /markdown-preview, /markdown-to-pdf, /markdown-to-word, /markdown-table-generator, /markdown-linter, /markdown-to-jira, /json-to-markdown | Rank for "markdown tools" |
| `/regex-tools` | /regex-tester, /regex-generator, /regex-builder, /regex-explain, /regex-escape, /email-regex-generator, /url-regex-generator, /phone-regex-generator, /regex-replace | Rank for "regex tools" |
| `/date-time-tools` | /date-difference-calculator, /date-to-timestamp, /timestamp-to-date, /date-converter, /iso-date-converter, /timezone-converter, /utc-to-local, /days-until-calculator, /age-calculator, /business-days-calculator | Rank for "date tools" |
| `/unix-timestamp-tools` | /unix-timestamp-converter, /epoch-converter, /timestamp-to-date, /date-to-timestamp, /unix-timestamp-generator, /milliseconds-converter, /timestamp-timezone | Rank for "unix timestamp tools" |
| `/api-tools` | /api-tester, /rest-client, /graphql-playground, /http-status-checker, /request-builder, /json-to-graphql, /openapi-validator, /webhook-tester | Rank for "api tools" |
| `/http-tools` | /http-status-codes, /url-encoder-decoder, /http-header-parser, /content-type-converter, /redirect-checker, /cache-header-checker, /cors-tester | Rank for "http tools" |
| `/docker-tools` | /dockerfile-generator, /docker-compose-generator, /docker-image-size-analyzer, /dockerignore-generator, /container-name-generator, /docker-cheat-sheet | Rank for "docker tools" |
| `/k8s-tools` | /k8s-yaml-generator, /k8s-deployment-generator, /kubectl-cheat-sheet, /configmap-generator, /k8s-service-generator, /k8s-secret-generator, /k8s-namespace-generator, /helm-chart-validator | Rank for "kubernetes tools" |
| `/git-tools` | /git-cheat-sheet, /gitignore-generator, /branch-name-generator, /commit-message-generator, /git-hook-generator, /merge-vs-rebase, /git-flow-guide, /conventional-commits-generator | Rank for "git tools" |
| `/aws-tools` | /aws-policy-generator, /aws-arn-builder, /s3-bucket-name-generator, /aws-cidr-calculator, /aws-pricing-guide, /aws-cli-cheat-sheet, /cloudformation-generator, /iam-policy-validator | Rank for "aws tools" |
| `/azure-tools` | /azure-resource-name-generator, /azure-cidr-calculator, /azure-policy-generator, /azure-cli-cheat-sheet, /arm-template-generator, /azure-pricing-guide, /azure-function-name-generator, /bicep-generator | Rank for "azure tools" |
| `/mongodb-tools` | /mongodb-query-generator, /mongodb-aggregation-builder, /mongodb-to-csv, /objectid-generator, /mongodb-to-json, /bson-validator, /mongodb-schema-generator | Rank for "mongodb tools" |
| `/postgresql-tools` | /postgresql-formatter, /explain-visualizer, /sql-to-postgresql, /postgresql-data-types, /jsonb-generator, /postgresql-index-generator, /postgres-cheat-sheet | Rank for "postgres tools" |
| `/mysql-tools` | /mysql-formatter, /mysql-to-postgresql, /mysql-data-types, /sql-to-mysql, /mysql-index-generator, /mysql-dump-reader, /mysql-cheat-sheet | Rank for "mysql tools" |
| `/redis-tools` | /redis-command-builder, /redis-cheat-sheet, /redis-key-generator, /redis-ttl-calculator, /redis-to-json, /redis-pattern-builder, /redis-pipeline-builder | Rank for "redis tools" |
| **Mega-pillar** | `/tools` | All `/xxx-tools` pillars | Hub for the whole directory; top nav link |

---

## 4. Breadcrumb Structure

| Level | Pattern | Example (JSON Formatter) |
|---|---|---|
| Home | Home | Home > Tools > JSON > JSON Formatter |
| Category | `Home > Tools > {Category}` | Home > Tools > JSON |
| Tool | `Home > Tools > {Category} > {Tool}` | Home > Tools > JSON > JSON Formatter |

**Live examples:**

| Page | Breadcrumb trail | URL |
|---|---|---|
| JSON Formatter | Home › Tools › JSON › JSON Formatter | /json-tools/json-formatter |
| JSON to CSV | Home › Tools › JSON › JSON to CSV | /json-tools/json-to-csv |
| Unix Timestamp Converter | Home › Tools › Date & Time › Unix Timestamp Converter | /unix-timestamp-tools/unix-timestamp-converter |

**Schema:** every page emits `BreadcrumbList` JSON-LD (already supported in `BaseLayout.astro`). Ensure crumb URLs are absolute.

---

## 5. URL Structure

| Type | Pattern | Example |
|---|---|---|
| Tool hub | `/tools` | `/tools` |
| Pillar | `/{slug}-tools` | `/json-tools` |
| Tool | `/{pillar}/{tool-slug}` | `/json-tools/json-formatter` |
| Existing converter (keep, add redirects) | `/{a}-to-{b}-converter` | `/json-to-csv-converter` → 301 `/json-tools/json-to-csv` (or keep both) |
| Blog article | `/blog/{article-slug}` | `/blog/json-to-csv-best-practices` |
| Blog guide (supports tool) | `/blog/{tool-slug}-guide` | `/blog/json-to-csv-converter-guide` |

**Rules:**
- Subfolders only, never subdomains (consolidates authority).
- One concept per path segment; hyphenated, lowercase slugs.
- Every tool has exactly one canonical URL; old `/json-to-csv-converter` paths 301 to canonical if changed.
- Keep localized folders as-is: `/es/json-tools/json-formatter` etc.

---

## 6. Navigation Structure

```
HOME  TOOLS  BLOG  FAQ  ABOUT  CONTACT
 └─ TOOLS (dropdown)
     ├─ Data Formats   → /tools
     │    ├─ JSON      → /json-tools
     │    ├─ XML       → /xml-tools
     │    ├─ YAML      → /yaml-tools
     │    ├─ CSV       → /csv-tools
     │    ├─ Excel     → /excel-tools
     │    └─ Markdown  → /markdown-tools
     ├─ Code & Web     → /tools
     │    ├─ HTML      → /html-tools
     │    ├─ CSS       → /css-tools
     │    ├─ JavaScript→ /js-tools
     │    ├─ TypeScript→ /typescript-tools
     │    └─ Regex     → /regex-tools
     ├─ Data & Database→ /tools
     │    ├─ SQL       → /sql-tools
     │    ├─ MongoDB   → /mongodb-tools
     │    ├─ PostgreSQL→ /postgresql-tools
     │    ├─ MySQL     → /mysql-tools
     │    └─ Redis     → /redis-tools
     ├─ Encoding & Security
     │    ├─ Base64    → /base64-tools
     │    ├─ Encoding  → /encoding-tools
     │    ├─ Hash      → /hash-tools
     │    ├─ UUID      → /uuid-tools
     │    ├─ JWT       → /jwt-tools
     │    └─ QR Code   → /qr-code-tools
     ├─ Time & Color
     │    ├─ Date & Time → /date-time-tools
     │    ├─ Unix Timestamp → /unix-timestamp-tools
     │    └─ Color     → /color-tools
     ├─ API & HTTP
     │    ├─ API Testing → /api-tools
     │    └─ HTTP      → /http-tools
     └─ DevOps & Cloud
          ├─ Docker    → /docker-tools
          ├─ Kubernetes→ /k8s-tools
          ├─ Git       → /git-tools
          ├─ AWS       → /aws-tools
          └─ Azure     → /azure-tools
```

**Footer (secondary nav, aids crawl):**
Tools > JSON · XML · YAML · CSV · Excel · SQL · HTML · CSS · JS · TS · Base64 · JWT · UUID · Hash · Encoding · QR · Color · Markdown · Regex · Date & Time · Unix Timestamp · API · HTTP · Docker · K8s · Git · AWS · Azure · MongoDB · Postgres · MySQL · Redis

---

## 7. Recommended Page Template (per tool)

| Section | Content | SEO element |
|---|---|---|
| H1 | Tool name + keyword | `H1` = target keyword |
| Working tool UI | Interactive input → output (client-side, no data upload) | Genuine utility; keeps bounce low |
| How to use | 3–5 steps | "how to" long-tail |
| Example | Sample input → sample output | Unique content per page |
| FAQ | 3–5 questions (`FAQPage` schema) | Featured snippet opportunities |
| Related tools | 3–5 cross-links | Internal linking |
| Guide/blog link | 1 relevant article | Deep-link to content hub |
| CTA | "Convert [X] to [Y] now" | Transactional intent capture |

---

## 8. Phased Roadmap (to 1M PV/month)

| Phase | Clusters | Est. new pages | Primary playbook |
|---|---|---|---|
| 1 (live) | JSON, CSV, Excel | 5 tools live | Conversions |
| 2 | Base64, Encoding, Hash, UUID, JWT, Color, Date/Time, Unix Timestamp | ~60 tools | Conversions + Glossary |
| 3 | XML, YAML, HTML, Markdown, Regex, QR | ~55 tools | Conversions |
| 4 | CSS, JS, TS, SQL, API, HTTP | ~55 tools | Conversions + Glossary |
| 5 | Docker, K8s, Git, AWS, Azure, MongoDB, Postgres, MySQL, Redis | ~60 tools | Directory + Glossary + Conversions |
| Continuous | Blog guides per tool | 5–10/mo | Glossary + Curation |

**Volume projection:** ~230 tool pages + ~32 pillars + 60+ articles/yr at average 1,500–4,500 PV/month/tool yields the 1M PV/month target within 18–24 months with compounding authority and internal-link flow.
