// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://windowsbishopsstortford.com',
  output: 'server',
  adapter: vercel({
    imageService: true,
    webAnalytics: {
      enabled: true,
    },
    includeFiles: [
      './src/data/businesses.json',
      './src/data/siteData.json'
    ]
  }),
  integrations: [tailwind(), sitemap()],
  vite: {
    ssr: {
      external: ['googleapis']
    }
  }
});