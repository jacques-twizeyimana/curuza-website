import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

const site = process.env.SITE_URL ?? 'https://curuza.rw';

export default defineConfig({
  site,
  output: 'static',
  integrations: [react(), sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
