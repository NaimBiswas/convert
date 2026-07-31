// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://metadataconverter.com',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'pt', 'de', 'fr', 'hi', 'ja'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [sitemap({
    i18n: {
      defaultLocale: 'en',
      locales: {
        en: 'en',
        es: 'es',
        pt: 'pt',
        de: 'de',
        fr: 'fr',
        hi: 'hi',
        ja: 'ja',
      },
    },
  })],
  adapter: cloudflare(),
});