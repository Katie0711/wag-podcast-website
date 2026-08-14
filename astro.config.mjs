// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  site: 'https://thewagpodcast.com',
  integrations: [
    sitemap({
      // Seasonal Challenges sets its own noindex meta tag while LIVE stays
      // false (see src/pages/seasonal-challenges/index.astro) -- exclude it
      // here too so the sitemap doesn't contradict that by listing a page
      // it's telling Google not to index. Add future gated pages here.
      filter: (page) => page !== 'https://thewagpodcast.com/seasonal-challenges/',
    }),
  ],
  // Added for the WAG Verdict MVP: the site stays static by default, but
  // this adapter lets specific routes (the vote/consent API endpoints,
  // and the /verdict/ page for its live aggregate read) opt out of
  // prerendering via `export const prerender = false`, without changing
  // how any existing static page builds or deploys.
  adapter: netlify(),
});
