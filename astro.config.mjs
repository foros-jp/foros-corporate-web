import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://foros-jp.github.io',
  base: '/foros-corporate-web/',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});
