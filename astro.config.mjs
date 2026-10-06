import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://piotr-obara.pl',
  // static/ instead of public/ so old URLs like /public/Piotr-Obara-CV-PL.pdf keep working
  publicDir: 'static',
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: 'pl',
    locales: ['pl', 'en'],
    routing: { prefixDefaultLocale: false }
  },
  integrations: [sitemap()],
  devToolbar: { enabled: false }
});
