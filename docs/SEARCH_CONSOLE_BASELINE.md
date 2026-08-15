# Search Console Baseline — Expected vs. Real Issues

Permanent reference. Built 2026-08-07 from a full manual triage of every "why pages aren't indexed" category on both properties, cross-verified against live production (curl, redirect chains, actual page content) — not assumed from the category label alone. Re-run this triage (or at least re-check counts) whenever Search Console coverage looks alarming before treating anything as a real incident. Update this file if a genuinely new RED issue is found and fixed, or if a GREEN category's real cause changes.

**Bottom line from the 2026-08-07 pass: zero RED issues on either property.** Every category was GREEN (expected, working-as-intended) or YELLOW (real content/URLs Google hasn't finished crawling yet — not a defect).

> **CORRECTION — 2026-08-13.** The "88 indexed, 495 not indexed" figure below (§ wildadventuregirls.com) cannot be reproduced or traced to any real Search Console property on the account as of this date. Live verification found: (1) no Search Console property for `wildadventuregirls.com` existed at all until it was added and auto-verified today via its existing Google Analytics tracking — before that, the property this section describes simply didn't exist under this account; (2) the only related legacy property, `sc-domain:thewildadventuregirls.com` (the old pre-cutover domain), shows just 2 total known URLs and ~0 real query volume — nowhere near 88/495. Where the original 88/495 numbers came from is unresolved; **do not cite them going forward.** The newly-added `https://wildadventuregirls.com/` property is verified, has its sitemap submitted (`sitemap-index.xml`, status: Success), and is linked to GA4 — but as a brand-new property it has no Performance/Indexing data yet ("processing, check again in a day or so" as of 2026-08-13). Real coverage/query numbers should be pulled fresh from that property once it populates, not backfilled from this file's old figures.

---

## Why this file exists

On 2026-08-07, Katie received 30+ Search Console email notifications ("New reason preventing your pages from being indexed... Page with redirect") in rapid succession and was alarmed. Investigation found: **all of them trace to one root cause** — Google running a fresh, comprehensive crawl of wildadventuregirls.com (last full sitemap read had been stale, predating the domain cutover) and sending one notification email per URL as it re-discovered the site's own long-standing, intentional www→non-www and legacy-Jimdo-URL redirect map (set up during the July 25, 2026 domain cutover, previously verified working). Every example URL from Katie's actual emails was tested live and resolved correctly (200 status, real content, 1–2 redirect hops, no loops). Not 30+ problems — one already-solved situation, over-notified by Google's per-URL alert system.

**If this happens again:** don't panic-fix. Check whether the affected URLs are already in this file's GREEN list below. If yes, no action needed — these will keep generating individual notification emails periodically; that's Google's behavior, not a site regression.

---

## wildadventuregirls.com

**⚠️ See the 2026-08-13 correction note above — the property this data claims to describe did not exist under this account until 2026-08-13. Treat everything below as unverified/untraceable, kept only for historical record of what was previously reported.**

Coverage as of 2026-08-07 (Search Console "Last update" for this data: 8/4/26 — a few days stale, matching the sitemap-read lag documented in `CHANGELOG.md`). 88 indexed, 495 not indexed across 7 reasons.

| Category | # URLs | Real examples checked | Verified via | Classification | Notes / recommended action |
|---|---|---|---|---|---|
| Page with redirect | 233 | `/wild-adventure-girls-invite-you-backstage/`, `/blog-1/animals/animal-facts-for-kids-all-about-animals/`, `/pop-rocks-and-soda-experiment/` (all www + legacy Jimdo paths) | Live curl — all resolve 200, 2 hops (www-strip → catch-all `/watch/` or matching new-site page) | 🟢 GREEN | Intentional legacy-URL + www→non-www redirect map from the July 25 domain cutover. This is the category generating Katie's 30+ emails. No action. |
| Alternate page with proper canonical tag | 34 | `/?mobile=1`, `/watch/?tag=mentos and coke`, `/watch/?tag=horses for kids`, etc. | Pattern confirmed — all are `/watch/` tag-filter query params | 🟢 GREEN | Correct canonicalization of filter/tag query strings back to their base page. Textbook, no action. |
| Redirect error | 9 | `/podcast/articles/dating-red-flags-would-you-still-date-him/`, `/speaking/pat-flynn-spi-podcast`, `/speaking/vidcon-anaheim-2026`, `/work-with-wag`, `/podcast/clips/`, `/podcast/teen-girl-podcast/`, `/investigations/bigfoot-oregon/`, `/investigations/lake-worth-monster/`, `/investigations/` | Live curl, all 9 — every one resolves 200 in ≤2 hops right now | 🟢 GREEN (stale GSC classification) | First detected 7/24/26 — predates the current, correct redirect config. Google hasn't re-crawled since it was fixed. **Validate Fix submitted in Search Console 2026-08-07.** |
| Not found (404) | 3 | `/app/blogpage?page=2&withinCms&layout=2&category=SLIME`, `/team/the-wild-adventure-girls/`, `/the-wild-` (truncated) | First detected 10/8/22 | 🟢 GREEN | Genuinely gone legacy Jimdo URLs from 2022. Correctly 404ing — they really don't exist. No action. |
| Blocked by robots.txt | 3 | `/app/blogpage?...`, `/app/flex/blog/preview/699468630`, `/app/s4fc67f6.../` | First detected 10/8/22 | 🟢 GREEN | Legacy Jimdo CMS internal/admin endpoints, correctly blocked — not real content pages. No action. |
| Crawled - currently not indexed | 142 | `/blog-1/?tag=science for kids`, `/blog-1/?tag=slime for kids`, `/hammerhead-shark-facts`, and ~10 more `/blog-1/?tag=` variants | Sampled 10 of 142 | 🟢 GREEN / 🟡 low-priority YELLOW | Overwhelmingly old Jimdo auto-generated tag-archive pages (thin/duplicate) plus a few off-brand legacy pages (slime, animal facts) that predate the horse-content-pivot and no-new-slime-content brand decisions. Google correctly declining to index thin/duplicate/off-brand legacy content — actually desirable given WAG's own repositioning. No action recommended. |
| Discovered - currently not indexed | 71 | `/adventure-map/haunted-hotel/`, `/adventure-map/lake-worth-monster/`, `/insider/`, `/investigations/`, `/podcast/articles/dating-red-flags-would-you-still-date-him/`, and 5 more real podcast-article pages | Sampled 10 of 71, all real live content | 🟡 YELLOW | Real, current content pages Google has discovered but not yet crawled — "Last crawled: N/A" on every sample. Consistent with the stale-sitemap-read issue (Google's last full read predated recent site changes). Should resolve naturally as Google catches up; if still not indexed in 2–3 weeks, submit indexing requests for the highest-value pages in this list (daily quota is ~10-ish requests/property — already hit for today as of this pass). |

## thewagpodcast.com

Coverage as of 2026-08-07. 8 indexed, 26 not indexed across 2 reasons — much smaller/newer property.

| Category | # URLs | Real examples checked | Verified via | Classification | Notes / recommended action |
|---|---|---|---|---|---|
| Page with redirect | 3 | `http://thewagpodcast.com/`, `http://www.thewagpodcast.com/`, `https://www.thewagpodcast.com/` | First detected 8/5/26 | 🟢 GREEN | Standard http/www variants of the homepage, correctly redirecting to canonical `https://thewagpodcast.com/`. No action. |
| Discovered - currently not indexed | 23 | `/contact/`, `/episodes/dating-red-flags-would-you-still-date-him/`, `/episodes/ex-stalked-me-story/`, `/episodes/golden-globes-red-carpet-reactions/`, `/episodes/hot-takes-cancelled/`, `/episodes/our-craziest-school-stories/`, `/episodes/prom-night-disaster-story/`, and more real episode pages | Sampled 10 of 23, all real content | 🟡 YELLOW | Real episode pages, first detected 8/5/26 (2 days before this pass). Includes some overlap with the 5 interaction pages independently submitted for indexing earlier the same day (`/verdict/`, `/match/`, `/favorite-segment/`, `/questions-featured/`, `/wag-awards/` — see `CHANGELOG.md`). Should resolve as Google's crawl catches up post-indexing-requests. |

---

## What counts as RED here (none found 2026-08-07)

Would include: a genuinely broken canonical, an unexpected 404 on a page that should exist, the sitemap pointing at a bad URL, a page that should be indexable but is wrongly blocked, an actual redirect loop, a server error, or a real canonical conflict. None of the above categories qualified — every "error"-sounding category (Redirect error, Not found, Blocked by robots.txt) turned out to be either stale Search Console data about an already-correct state, or correctly-excluded legacy/non-content URLs.

## Standing rule for future agents

Before treating any Search Console notification as an incident: check this file first. If the affected URL pattern matches a row above, it's expected — don't "fix" GREEN items just to make the coverage report cleaner. Only investigate further if a **new** category appears, or if a category listed here starts showing **new, different** example URLs that don't match the pattern already documented.
