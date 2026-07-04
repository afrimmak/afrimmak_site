import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// AFRIMMAK — static marketing site.
// Partner handles git + deployment; this config stays deployment-agnostic
// (works on Netlify, Cloudflare Pages, Vercel static, or any static host).
export default defineConfig({
  site: 'https://afrimmak.org',
  integrations: [sitemap()],
  build: {
    format: 'directory',
  },
});
