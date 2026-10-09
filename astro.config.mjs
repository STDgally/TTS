// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// URL pubblico del sito: impostalo con la variabile d'ambiente SITE_URL
// (es. SITE_URL=https://www.tuodominio.it npm run build).
const site = process.env.SITE_URL || 'https://www.example.com';

export default defineConfig({
  site,
  trailingSlash: 'ignore',
  integrations: [
    sitemap({
      // Le pagine legali restano fuori dalla sitemap finché sono bozze.
      filter: (page) => !/(privacy-policy|cookie-policy)/.test(page),
    }),
  ],
});
