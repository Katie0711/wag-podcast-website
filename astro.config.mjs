// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  site: 'https://thewagpodcast.com',
  integrations: [sitemap()],
  // Added for the WAG Verdict MVP: the site stays static by default, but
  // this adapter lets specific routes (the vote/consent API endpoints,
  // and the /verdict/ page for its live aggregate read) opt out of
  // prerendering via `export const prerender = false`, without changing
  // how any existing static page builds or deploys.
  adapter: netlify(),
});
