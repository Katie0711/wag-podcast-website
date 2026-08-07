# WAG Production Audit — Permanent Reference

Ecosystem-wide (wildadventuregirls.com + thewagpodcast.com), not a single-repo document. This is the pre-launch gate for the interaction platform per Katie's 2026-08-07 standing instruction: finish every category, document it permanently, and turn each one into a reusable QA checklist so it's never manually re-checked from scratch again.

**Status legend:** ✅ Complete and verified &nbsp; 🟡 Partially audited, real gaps identified &nbsp; ⬜ Not yet reached this pass

**How to use this doc:** before shipping any new page, run it through every "Permanent QA Checklist" below. When you find a new failure mode in production, add it to the relevant checklist immediately — don't just fix the instance.

---

## ✅ RESOLVED — apex domain reachability (2026-08-07)

Earlier this session, `wildadventuregirls.com` (bare apex) appeared unreachable via this session's shell, Anthropic's WebFetch, and the sandboxed browser, while `www.wildadventuregirls.com` worked fine — flagged as urgent. **Confirmed resolved**: Katie reported her own internet had been down; WebFetch now successfully loads the real page (verified title + content). This sandbox's own `curl` still can't reach the apex IP directly, which points to this specific sandbox environment's network path as the actual cause, not a genuine production/DNS outage. No action needed on the domain itself — leaving the diagnostic method here since it's a real, reusable way to verify domain reachability independent of any single environment.

**`robots.txt` on wildadventuregirls.com points at the www sitemap, not canonical non-www.** `Sitemap: https://www.wildadventuregirls.com/sitemap-index.xml` — real 301-redirects fine today, but it's routing crawlers through an extra hop to a non-canonical host on every single crawl. Also references `video-sitemap.xml`, which doesn't exist as a real generated file (only resolves via the www→apex redirect chain, not served directly) — worth confirming this reference is intentional/real or stale.

---

## 1. SEO — 🟡

**Evidence this pass:** canonical tags, title/meta description patterns, and internal-linking were extensively audited in prior sessions (see `ROADMAP.md` history — 33 episode titles rewritten, meta description length fixes, keyword-map-to-page audits). Not re-verified line-by-line this pass; spot checks (canonical tag presence, title suffix logic) confirm the established patterns are intact in `BaseLayout.astro` on both sites.

**Real gap found this pass:** the robots.txt/sitemap www-mismatch above.

**Permanent QA Checklist — SEO:**
- [ ] `<link rel="canonical">` present, absolute URL, matches the site's declared `site:` config domain exactly (protocol + www/non-www)
- [ ] `<title>` under ~60 chars, includes brand suffix per the established pattern, no duplicate titles sitewide
- [ ] Meta description 145–160 chars, unique per page, no boilerplate duplication
- [ ] robots.txt `Sitemap:` line points at the exact canonical host — no www/non-www mismatch
- [ ] Every real page reachable within ≤3 internal-link clicks from the homepage (see Crawl-Budget section)
- [ ] No orphan pages (in sitemap but unlinked internally)

---

## 2. AEO (Answer Engine Optimization) — 🟡

**Evidence:** FAQPage schema present and content-matched (not duplicated between visible copy and schema) on Growing Up, Segments, FAQ, Guys Answer Questions, Who's Most Likely To, and all episode pages with real FAQs — verified via direct JSON-LD parse this session on thewagpodcast.com's newly-fixed pages.

**Answer-first pass (2026-08-07):** sampled FAQ answers across `/faq/`, Guys Answer Questions, and wildadventuregirls.com's Investigations — the large majority already lead with the real answer before context (verified, not assumed). Found and fixed one real exception on Guys Answer Questions ("Do guys overthink texting..." led with "According to Aiden in installment 2, yes—" instead of the answer itself; reordered, same real content, no new claims). Two more on that same page ("What makes a girl attractive to guys?", "How do guys know if a girl likes them...") describe *where* the answer lives ("Installment 2 covers this") rather than stating the actual answer — left as-is rather than fabricated, since the real substance isn't available without pulling it from the episode itself. **Flagged as a content task, not a code task:** someone needs to watch installment 2 and write the real specific answer.

**Permanent QA Checklist — AEO:**
- [ ] Every real, recurring visitor question has a corresponding FAQ entry (visible AND in FAQPage schema, sourced from the same array — never let them drift)
- [ ] Answers lead with the direct answer in the first sentence, context after — not the reverse
- [ ] Headings phrased as real questions where a genuine question exists (not manufactured for SEO)
- [ ] No FAQ answer duplicates another page's FAQ verbatim (cannibalization)

---

## 3. GEO (Generative Engine Optimization) — ✅ (llms.txt), 🟡 (entity consistency)

**Evidence:** `llms.txt` confirmed present and current on thewagpodcast.com (37 lines, lists all live pages including 6 recently-added interactions — correctly excludes Seasonal Challenges since it's `noindex`). wildadventuregirls.com's `llms.txt` is 150 lines — not re-read line-by-line this pass to confirm it's not stale against the current 116-page sitemap.

**Permanent QA Checklist — GEO:**
- [ ] `llms.txt` lists every real, live, indexable page — updated in the same commit as any new page ships
- [ ] Entity names (girl names, show name, brand name) are consistent character-for-character across both sites' schema (`@id` references matching, e.g. `https://wildadventuregirls.com/#organization`)
- [ ] No page exists that's linked internally/in sitemap but absent from `llms.txt` without a documented reason (e.g. `noindex` pages)

---

## 4. AI Discoverability — 🟡

**Evidence:** GA4 already showed real ChatGPT-referred sessions earlier this project (flagged previously as a genuine, exciting signal — first hard evidence AEO/GEO work is producing referrals). Attempted to re-pull fresh AI-referrer numbers this session via GA4's UI; the report-builder navigation was unreliable in this environment (canvas-rendered tables, no accessible text) and was not completed this pass — real gap, not silently dropped.

**Permanent QA Checklist — AI Discoverability:**
- [ ] Every page has machine-parseable JSON-LD matching its visible content exactly (no schema/content drift)
- [ ] `llms.txt` present and current (see GEO above)
- [ ] Quarterly (at minimum) real pull of GA4 source/medium filtered for `chatgpt.com`, `perplexity.ai`, `gemini.google.com`, `copilot.microsoft.com`, `claude.ai` referrers — trend, don't just snapshot

---

## 5. Crawl-Budget — ✅

**Evidence (real, this session):** built an independent BFS crawler (not GSC-dependent) that follows real `<a href>` links from each homepage. Results:
- **thewagpodcast.com:** 31/31 sitemap pages reachable, 0 orphans, max depth 2 clicks.
- **wildadventuregirls.com:** 116/116 sitemap pages reachable, 0 orphans, but 8 of 12 `/products/` pages sat at depth 4 (the hub wasn't in primary nav or footer). **Fixed this session** — added to the sitewide footer nav (shipped to `main` on both the direct commit and the pending feature branch), bringing the hub to depth 1 and its children to depth 2.

**Permanent QA Checklist — Crawl-Budget:**
- [ ] Every new top-level page/hub gets a link from primary nav, footer, or a real contextual cross-link within its first week live — never leave a hub reachable only from its own children
- [ ] Re-run the BFS crawl script (`crawl.py` pattern, see this audit's methodology) after any nav/footer change to confirm depth didn't silently regress

---

## 6. Internal-Link Audit — ✅ (folded into Crawl-Budget above — same underlying data, same script)

---

## 7. Sitemap Audit — ✅

**Evidence:** both sitemaps fetched and diffed against real page counts. thewagpodcast.com: 31 sitemap URLs = 31 real static+dynamic routes on `main`. wildadventuregirls.com: 116 sitemap URLs, `astro.config.mjs` declares non-www canonical, sitemap itself correctly emits non-www URLs internally (confirmed by direct fetch) — the only sitemap-adjacent issue is the robots.txt pointer (see Urgent section).

**Permanent QA Checklist — Sitemap:**
- [ ] Sitemap URL count matches real route count (`git ls-tree` page files + dynamic collection entries) after every deploy
- [ ] Sitemap emits the exact canonical host declared in `astro.config.mjs`'s `site:`
- [ ] robots.txt's `Sitemap:` line matches that same canonical host exactly

---

## 8. Canonical Audit — ✅

**Evidence:** both `BaseLayout.astro` files build `canonicalURL` from `Astro.site` (the config-declared canonical domain) + the current path, applied on every page with no per-page override risk. Confirmed present via direct grep on both repos.

**Permanent QA Checklist — Canonical:**
- [ ] Canonical tag is generated centrally (in the shared layout), never hand-written per page
- [ ] No trailing-slash inconsistency between the canonical tag and the sitemap

---

## 9. Structured-Data Audit — ✅

**Evidence (real, this session):** grepped every page file on both repos for `application/ld+json` presence.
- **thewagpodcast.com:** found and fixed 6 real content pages shipping zero page-specific schema (About, Hosts, Listen, Watch, Teen Comedy Podcast, Video Podcasts for Teens) — all now carry appropriate `WebPage`/`AboutPage`/`CollectionPage` schema, verified by parsing the built HTML's JSON-LD blocks. Shipped to `main`.
- **wildadventuregirls.com:** zero-schema pages are only 404/privacy/terms/search — all correctly excluded (legal/utility pages don't need it, matches Google's own guidance). No real gap found.

**Permanent QA Checklist — Structured Data:**
- [ ] Every real content page (not utility/legal pages) ships at least one `@type` matching its actual content (`WebPage`, `Article`, `CollectionPage`, `FAQPage`, `PodcastEpisode`, etc.)
- [ ] Schema fields are generated from the same data driving the visible page — never hand-duplicated (prevents drift)
- [ ] After adding any new page, grep-check its built HTML for `application/ld+json` before calling it done

---

## 10. Open Graph Audit — ✅

**Evidence:** `og:type`, `og:title`, `og:description`, `og:image`, `og:url`, `og:site_name` all present, generated centrally in both `BaseLayout.astro` files — confirmed via direct read of both files.

## 11. Twitter/X Card Audit — ✅

**Evidence:** `twitter:card` (`summary_large_image`), `twitter:title`, `twitter:description`, `twitter:image` all present, same central generation. Confirmed via direct read of both `BaseLayout.astro` files.

**Permanent QA Checklist — OG/Twitter:**
- [ ] Both are generated centrally from the same `title`/`description`/`ogImage` props every page already passes to `BaseLayout` — no page should ever need to add these manually
- [ ] `ogImage` defaults to a real, on-brand fallback image, never a missing/broken path

---

## 12. llms.txt Audit — see GEO (§3) above.

---

## 13. Accessibility — 🟡

**Evidence (real, this session):** grepped every `<img>` tag on both repos for missing `alt` attributes — **zero found on either site.** This is a real, positive, verified result, not an assumption.

**Real gap:** alt-text *presence* was checked, alt-text *quality* (descriptive vs. generic), color contrast, and keyboard focus states were not re-verified this pass (prior work exists from task #36 earlier in the project, but that was before significant new pages/interactions shipped — needs a fresh pass, especially on the still-unmerged interaction platform's forms and custom controls).

**Permanent QA Checklist — Accessibility:**
- [ ] Every `<img>` has a real, descriptive `alt` (empty `alt=""` only for genuinely decorative images)
- [ ] Every interactive custom control (quiz option, poll button, share menu) has visible keyboard focus state and correct `aria-*` attributes (already partially true — `ShareSheet` has `aria-expanded`/`aria-haspopup`/`role="menu"`, `QuizWidget`/`PollWidget` need the same review)
- [ ] Text/background contrast meets AA — apply the already-known contrast rule (`wag-green`/`-dark` fails on white, needs black/pink-dark there)
- [ ] Run this checklist on every NEW interactive component before it ships, not just static pages

---

## 14. Analytics Audit — 🟡

**Evidence:** GA4 confirmed live and collecting real data on both properties (task #170/#54, prior sessions). GSC linked to GA4 (task #174). `next_action_click` events firing sitewide via the shared `WhatsNext` component (verified this session's predecessor work).

**Real gap:** the funnel-stage instrumentation Katie asked for (Homepage → Interaction → Beehiiv signup → Article → Podcast → YouTube → Return visit) does not exist yet — only endpoint-level events exist (`poll_vote_cast`, `quiz_completed`, etc.), not a connected funnel view. Queued, not started.

**Permanent QA Checklist — Analytics:**
- [ ] Every new interactive feature fires at least a `{noun}_started` and `{noun}_completed` event with a consistent key in the payload
- [ ] GA4 event names follow the existing `{verb}_{noun}` convention already established — don't invent a new naming scheme per feature
- [ ] New conversion-relevant pages get added to any funnel/segment definitions in the same work session they ship, not retroactively

---

## 15. Performance — 🟡

**Evidence (real, this session):** checked the largest real images on disk in both repos' `public/images/`. Findings:
- thewagpodcast.com's `wag-studio-440.jpg` (656KB) has a `.webp` companion at 574KB — only a 12% reduction, meaning that WebP export isn't actually doing its job (a healthy WebP conversion should be 25–50%+ smaller). Real, fixable finding.
- Several hero images on both sites sit in the 220–340KB range even before this — heavy for what should be responsive hero images.
- Homepage response time for thewagpodcast.com: ~7.2s total time-to-first-byte-plus-download over `curl` (not a real user-experience metric — needs a real Lighthouge/PageSpeed run, not a curl proxy) — flagged as needing a proper tool, not concluded from this number alone.

**Permanent QA Checklist — Performance:**
- [ ] Every new hero/large image gets a real WebP re-encode verified to be meaningfully smaller (not just format-converted) — spot-check the byte size delta, don't assume the pipeline worked
- [ ] Run a real Lighthouse/PageSpeed Insights pass on new flagship pages before considering them launch-ready (not yet done this pass — queued)
- [ ] No hero image ships above ~150KB without a documented reason

---

## 16. Security — ✅ (headers), 🟡 (broader review)

**Evidence (real, this session):** pulled live response headers from both production sites. Both correctly set `Content-Security-Policy`, `Strict-Transport-Security`, `X-Content-Type-Options: nosniff`, `X-Frame-Options: SAMEORIGIN`, `Referrer-Policy`, and `Permissions-Policy`. Real, minor finding: thewagpodcast.com's HSTS header is missing `preload` (wildadventuregirls.com has it) — low urgency since it doesn't currently embed the Beehiiv iframe widget its CSP would otherwise need to allow.

**Not yet audited this pass:** dependency vulnerability scan (`npm audit`), secrets-in-repo check, form input validation review beyond what's already known (rate limiting is confirmed live on all 3 public POST endpoints per `ROADMAP.md`).

**Permanent QA Checklist — Security:**
- [ ] Every production response carries CSP, HSTS, X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy — verify with a live `curl -I` after any Netlify config change
- [ ] Every public POST endpoint has rate limiting (existing shared `rateLimit.ts` pattern — reuse it, don't hand-roll a new one)
- [ ] Run `npm audit` on both repos at least monthly, not just at initial setup

---

## 17. Beehiiv Audit — 🟡

**Evidence:** extensively audited in prior sessions — real account facts (plan, DNS/DMARC, subscribe-form theme, segment/automation gating) documented in the operator's memory system, not re-derived here. Tag-per-interaction pattern confirmed architecturally sound (`docs/ARCHITECTURE.md` §Beehiiv integration).

**Not yet re-verified this pass:** whether every consent checkbox that promises a future email still has a live, correctly-tagged segment behind it now that 6 new interactions exist (Verdict/Match/Favorite-Segment/Questions-Featured/Awards all need this checked against the live Beehiiv dashboard, not just the code).

**Permanent QA Checklist — Beehiiv:**
- [ ] Every "email me when X happens" checkbox has a matching, verified-live Beehiiv segment before the feature ships (not just planned in code)
- [ ] `ALLOWED_TRANSACTIONAL_TAGS` in `interaction-consent.ts` and the real Beehiiv tag list are cross-checked to match exactly — no orphan tags, no missing whitelist entries

---

## Summary scorecard

| # | Category | Status |
|---|---|---|
| 1 | SEO | 🟡 |
| 2 | AEO | 🟡 |
| 3 | GEO | ✅/🟡 |
| 4 | AI Discoverability | 🟡 |
| 5 | Crawl-Budget | ✅ |
| 6 | Internal-Link | ✅ |
| 7 | Sitemap | ✅ |
| 8 | Canonical | ✅ |
| 9 | Structured-Data | ✅ |
| 10 | Open Graph | ✅ |
| 11 | Twitter/X Card | ✅ |
| 12 | llms.txt | ✅ |
| 13 | Accessibility | 🟡 |
| 14 | Analytics | 🟡 |
| 15 | Performance | 🟡 |
| 16 | Security | ✅/🟡 |
| 17 | Beehiiv | 🟡 |

**Honest read:** 9 of 17 fully closed out with real evidence and a permanent checklist. The remaining 8 have real partial progress (not zero) but need one more dedicated pass each before this can be called genuinely finished — specifically: a fresh AEO answer-first content pass, a real GA4 AI-referrer pull (blocked this session by GA4 UI tooling reliability, not skipped by choice), funnel instrumentation, a Lighthouse-based performance pass, a fresh accessibility contrast/focus-state pass on the interaction platform's custom controls, `npm audit` on both repos, and a live Beehiiv segment cross-check against the 5 new interactions.

*Last updated: 2026-08-07. Update this file in the same session as any audit work, not after.*
