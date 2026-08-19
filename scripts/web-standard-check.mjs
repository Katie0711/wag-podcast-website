#!/usr/bin/env node
// WAG Web Standard V1 automated check -- thewagpodcast.com
// Same pattern as wildadventuregirls-website/scripts/web-standard-check.mjs
// -- deliberately small, dependency-free, run on demand. See that file's
// header comment for the full rationale; kept in sync intentionally.
//
// Usage: node scripts/web-standard-check.mjs

const SITE = "https://thewagpodcast.com";
let failures = 0;
let warnings = 0;

function fail(msg) { console.log(`FAIL: ${msg}`); failures++; }
function warn(msg) { console.log(`WARN: ${msg}`); warnings++; }
function ok(msg) { console.log(`OK:   ${msg}`); }

async function checkNoindex() {
  const res = await fetch(`${SITE}/`);
  const html = await res.text();
  if (/<meta\s+name=["']robots["']\s+content=["'][^"']*noindex/i.test(html)) {
    fail("Production homepage has a noindex meta tag -- site will fall out of search.");
  } else {
    ok("No accidental production noindex on homepage.");
  }
}

async function checkCanonical() {
  const res = await fetch(`${SITE}/`);
  const html = await res.text();
  const matches = [...html.matchAll(/<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/gi)];
  if (matches.length === 0) {
    fail("Homepage has no canonical tag.");
  } else if (matches.length > 1) {
    fail(`Homepage has ${matches.length} canonical tags -- should be exactly 1.`);
  } else if (matches[0][1].replace(/\/$/, "") !== `${SITE}`.replace(/\/$/, "")) {
    warn(`Homepage canonical points to ${matches[0][1]}, expected self-referential ${SITE}/.`);
  } else {
    ok("Homepage canonical present and self-referential.");
  }
}

async function checkOrganizationSchemaCount() {
  const res = await fetch(`${SITE}/`);
  const html = await res.text();
  const scripts = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  let orgCount = 0;
  for (const [, jsonText] of scripts) {
    try {
      const parsed = JSON.parse(jsonText);
      const items = Array.isArray(parsed) ? parsed : [parsed];
      for (const item of items) {
        if (item["@type"] === "Organization") orgCount++;
      }
    } catch {
      warn("A JSON-LD block on the homepage failed to parse -- malformed schema.");
    }
  }
  if (orgCount > 1) {
    fail(`${orgCount} Organization schema blocks found on homepage -- exactly 0 or 1 expected (this site references the main site's entity, per Global Standard sec.6).`);
  } else {
    ok(`${orgCount} Organization schema block(s) on homepage -- within expected range.`);
  }
}

async function checkSitemap() {
  const res = await fetch(`${SITE}/sitemap-index.xml`, { method: "HEAD" });
  if (res.status !== 200) {
    fail(`/sitemap-index.xml returned ${res.status}, expected 200.`);
  } else {
    ok("/sitemap-index.xml reachable (200).");
  }
}

async function checkLlmsTxtIsLive() {
  // Regression guard for the exact 2026-08-19 lesson: llms.txt must stay
  // dynamic. A quick heuristic -- confirm it contains at least one real
  // episode URL, which only the dynamic version generates.
  const res = await fetch(`${SITE}/llms.txt`);
  const text = await res.text();
  if (!text.includes(`${SITE}/episodes/`)) {
    fail("llms.txt does not contain any real /episodes/ links -- may have regressed to a static/stale file.");
  } else {
    ok("llms.txt contains real episode links (dynamic generation confirmed).");
  }
}

async function main() {
  console.log(`WAG Web Standard V1 check -- ${SITE}\n`);
  await checkNoindex();
  await checkCanonical();
  await checkOrganizationSchemaCount();
  await checkSitemap();
  await checkLlmsTxtIsLive();
  console.log(`\n${failures} failure(s), ${warnings} warning(s).`);
  process.exit(failures > 0 ? 1 : 0);
}

main();
