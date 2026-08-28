#!/usr/bin/env node
// Sitewide broken-link check -- thewagpodcast.com.
// Same pattern as wildadventuregirls-website's script of the same name
// -- checks every real URL in the live sitemap actually resolves with
// a real 200, not just a sample. No video-sitemap on this site.
//
// Usage: node scripts/check-broken-links.mjs
// Exit code 0 = every sitemap URL resolves with 200. Exit code 1 = at
// least one real broken link found.

const SITE = "https://thewagpodcast.com";
const CONCURRENCY = 10;

async function fetchWithRetry(url, options, attempts = 3) {
  for (let attempt = 1; attempt <= attempts; attempt++) {
    try {
      return await fetch(url, options);
    } catch (err) {
      if (attempt === attempts) throw err;
      await new Promise((resolve) => setTimeout(resolve, 1500 * attempt));
    }
  }
}

async function collectSitemapUrls() {
  const { XMLParser } = await import("fast-xml-parser");
  const parser = new XMLParser();

  const indexXml = await fetchWithRetry(`${SITE}/sitemap-index.xml`).then((r) => r.text());
  const indexData = parser.parse(indexXml);
  const childSitemaps = Array.isArray(indexData.sitemapindex.sitemap)
    ? indexData.sitemapindex.sitemap
    : [indexData.sitemapindex.sitemap];

  const urls = [];
  for (const sm of childSitemaps) {
    const xml = await fetchWithRetry(sm.loc).then((r) => r.text());
    const data = parser.parse(xml);
    const entries = Array.isArray(data.urlset.url) ? data.urlset.url : [data.urlset.url];
    for (const entry of entries) urls.push(entry.loc);
  }

  return [...new Set(urls)];
}

async function checkUrl(url) {
  try {
    const res = await fetchWithRetry(url, { method: "HEAD", redirect: "manual" });
    return { url, status: res.status, ok: res.status === 200 };
  } catch (e) {
    return { url, status: null, ok: false, error: e.message };
  }
}

async function checkAll(urls) {
  const results = [];
  let i = 0;
  async function worker() {
    while (i < urls.length) {
      const url = urls[i++];
      results.push(await checkUrl(url));
    }
  }
  await Promise.all(Array.from({ length: CONCURRENCY }, worker));
  return results;
}

async function main() {
  console.log(`Sitewide broken-link check -- ${SITE}\n`);
  const urls = await collectSitemapUrls();
  console.log(`Checking ${urls.length} real sitemap URLs...\n`);

  const results = await checkAll(urls);
  const broken = results.filter((r) => !r.ok);

  if (broken.length > 0) {
    for (const r of broken) {
      console.log(`FAIL: ${r.url} -> ${r.status ?? "no response"}${r.error ? ` (${r.error})` : ""}`);
    }
  }
  console.log(`\n${urls.length - broken.length}/${urls.length} sitemap URLs resolve with 200. ${broken.length} broken.`);
  process.exit(broken.length > 0 ? 1 : 0);
}

main();
