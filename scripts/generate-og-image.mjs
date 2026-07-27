import sharp from 'sharp';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outputPath = join(__dirname, '..', 'public', 'og-image.png');

const width = 1200;
const height = 630;

const svg = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1E1C18"/>
      <stop offset="100%" stop-color="#0D0D12"/>
    </linearGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#C8921E"/>
      <stop offset="100%" stop-color="#7C5CBF"/>
    </linearGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#bg)"/>
  <rect x="0" y="0" width="6" height="${height}" fill="url(#accent)"/>
  <text x="60" y="240" font-family="Inter, system-ui, sans-serif" font-size="64" font-weight="700" fill="#F7F5F0" letter-spacing="-1.5">Data Converter</text>
  <text x="60" y="300" font-family="Inter, system-ui, sans-serif" font-size="28" font-weight="400" fill="#A6A098" letter-spacing="-0.3">Convert JSON, CSV, Excel, XML &amp; YAML</text>
  <text x="60" y="350" font-family="Inter, system-ui, sans-serif" font-size="20" font-weight="400" fill="#6B665E">100% free · browser-based · no uploads</text>
  <rect x="60" y="410" width="200" height="50" rx="25" fill="#C8921E"/>
  <text x="160" y="443" font-family="Inter, system-ui, sans-serif" font-size="18" font-weight="600" fill="#1E1C18" text-anchor="middle">Try It Free</text>
  <text x="60" y="530" font-family="Inter, system-ui, sans-serif" font-size="14" fill="#5C5C66">metadataconverter.com</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(outputPath);
console.log('OG image generated:', outputPath);
