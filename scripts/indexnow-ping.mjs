// Pings IndexNow (Bing, Yandex, and other participating engines --
// not Google, which uses its own sitemap-based Search Console flow
// already set up separately) with every URL currently in the sitemap,
// so those engines get notified of changes immediately instead of
// waiting for their own crawl schedule. Run after every deploy.
// Same pattern as wildadventuregirls-website/scripts/indexnow-ping.mjs
// -- this site has no video-sitemap, so only the regular sitemap is used.
import { XMLParser } from "fast-xml-parser";

const SITE = "https://thewagpodcast.com";
const KEY = "2865dedafc196d247ff9eaf81ced2b67";

// GitHub-hosted runners occasionally hit a transient ETIMEDOUT/ECONNRESET
// on an otherwise-fine URL -- retry with backoff before giving up.
async function fetchWithRetry(url, options, attempts = 5) {
  for (let attempt = 1; attempt <= attempts; attempt++) {
    try {
      return await fetch(url, options);
    } catch (err) {
      if (attempt === attempts) throw err;
      await new Promise((resolve) => setTimeout(resolve, 2000 * attempt));
    }
  }
}

async function fetchUrls() {
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

const urlList = await fetchUrls();

const res = await fetchWithRetry("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: "thewagpodcast.com",
    key: KEY,
    keyLocation: `${SITE}/${KEY}.txt`,
    urlList,
  }),
});

console.log(`IndexNow: submitted ${urlList.length} URLs, status ${res.status}`);
if (!res.ok) {
  const body = await res.text().catch(() => "");
  console.error(body);
  process.exit(1);
}
