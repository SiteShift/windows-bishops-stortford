// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://windowsbishopsstortford.com',
  output: 'server', // ← enables API routes
  adapter: vercel({}),
  integrations: [tailwind(), sitemap()],
  build: {
    format: 'directory'
  }
});