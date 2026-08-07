# WAG Interaction Platform — Master Launch Blocker List

One list. Nothing launches until every item below is ✅ Complete, 🟡 Acceptable Risk, or 🔴 Blocking. No guesses — every row's Evidence is something actually checked this session, not an assumption. Last updated: 2026-08-07.

**Legend:** ✅ Complete &nbsp; 🟡 Acceptable Risk (known, deliberately not fixed, won't stop launch) &nbsp; 🔴 Blocking (must resolve before merge)

---

### 🔴 BLOCKING (1)

| Blocker | Owner | Status | Evidence | Risk | Recommendation |
|---|---|---|---|---|---|
| Production `BEEHIIV_API_KEY` set in Netlify | Katie | 🔴 Blocking | Beehiiv-side infrastructure (tags, segments, automations) confirmed real and correctly configured via direct API checks this session. Cannot confirm the Netlify **production** environment variable itself — no dashboard/CLI access from this environment. | If unset, every consent checkbox on every live interaction silently 503s (`"Beehiiv is not configured yet"`) — real subscribers get a broken form, not an error they'd report. | Check Netlify → Site settings → Environment variables → confirm `BEEHIIV_API_KEY` exists on the **production** context (not just deploy previews) before or immediately after merge. Single 30-second check. |

---

### 🟡 ACCEPTABLE RISK (7)

| Blocker | Owner | Status | Evidence | Risk | Recommendation |
|---|---|---|---|---|---|
| Real device mobile QA (physical phone) | Katie / Claude | 🟡 Acceptable Risk | Verified in the Chrome-based browser tool (desktop viewport + resize-to-mobile emulation) this session — never on a real physical device. | Low-medium — emulated mobile catches most layout bugs, but touch-target sizing, real Safari iOS quirks, and real keyboard behavior can't be fully emulated. | Do a real-phone smoke test (Katie's own phone, both iOS/Android if possible) as the first step of Phase 3's smoke test, before announcing — not before merging. |
| Cross-browser QA (Firefox, Safari) | Katie / Claude | 🟡 Acceptable Risk | All verification this session ran in one Chromium-based browser. Firefox/Safari never directly tested. | Low — the codebase uses no exotic browser-specific APIs (Web Share API has a documented fallback already built in `ShareSheet.astro`); risk is mostly cosmetic. | Quick pass in Firefox and Safari during the Phase 3 smoke test, not a pre-merge gate. |
| Deferred Netlify npm-audit findings (thewagpodcast-website) | Claude (monitoring) | 🟡 Acceptable Risk | 6 known vulnerabilities, all inside Netlify's own build-tooling dependency chain (sharp/ipx/@netlify/images/@netlify/dev/@netlify/vite-plugin) — confirmed via `npm audit`, not guessed. `js-yaml` (the one real app-level finding) already fixed. | Low — these are build-tooling dependencies, not runtime-exposed application code. Force-fixing would downgrade the live `@astrojs/netlify` adapter. | Documented decision in `CEO_DECISIONS.md`: monitor, don't force-fix. No action needed to launch. |
| 2 AEO FAQ answers need real episode material | Katie (content) | 🟡 Acceptable Risk | Two Guys Answer Questions FAQ entries describe *where* an answer lives ("installment 2 covers this") rather than stating it directly — confirmed via direct read, not fabricated to fill the gap. | Low — these are existing, already-live FAQ entries, not new launch content. | Leave as-is per Katie's own explicit instruction not to fabricate. Someone rewatches installment 2 and writes the real specific answer when convenient — not launch-blocking. |
| Production Core Web Vitals not measured | Claude (environment-limited) | 🟡 Acceptable Risk | This sandbox's headless Chrome can't reach production URLs (`CHROME_INTERSTITIAL_ERROR`), and `astro preview` isn't supported by the Netlify adapter — confirmed via real attempts, not assumed. Dev-mode Lighthouse numbers were explicitly NOT reported as real production data. | Low-medium — unknown real-world LCP/CLS/INP on production, but the codebase already follows performance best practices found elsewhere in the audit (image sizing, font-loading fixes on wildadventuregirls.com). | Run a real PageSpeed Insights / Lighthouse check against the live production URL immediately after deploy — 2-minute check, not a reason to hold launch. Per Katie's own 2026-08-07 instruction. |
| GSC indexing requests for 5 new pages | Katie / Claude | 🟡 Acceptable Risk | Not yet submitted — the pages don't exist in production yet to submit. | None pre-launch. | Already sequenced correctly in `LAUNCH_CHECKLIST.md` § Google as a post-deploy step, not a pre-merge blocker. |
| wagmediapartners.com long-term disposition | Katie | 🟡 Acceptable Risk | Open decision tracked in `CEO_DECISIONS.md`, unrelated to the interaction platform. | None — different domain, different system, no shared code path with this launch. | Explicitly out of scope for this launch; resolve on its own timeline. |

---

### ✅ COMPLETE (16)

| Blocker | Owner | Status | Evidence |
|---|---|---|---|
| All 6 interactions built, verified pre-launch | Claude | ✅ Complete | `feature/wag-match-quiz` (thewagpodcast-website) — build succeeds clean, all pages render, verified live in browser this session. |
| Reciprocal cross-links from wildadventuregirls.com | Claude | ✅ Complete | `fix/share-menu-stuck-open` (wildadventuregirls-website) — homepage, girl profiles, podcast page, speaking page, brand-partnerships all link to the 5 live interactions. |
| Beehiiv tags/segments/automations real and correct | Claude | ✅ Complete | Direct Beehiiv API checks: all 6 interaction tags exist and match the server whitelist exactly; both automations (`Verdict Reveal Notification`, `WAG Insider Welcome`) published/live; all 6 dynamic segments recalculated and confirmed accurate. |
| Per-choice Beehiiv tagging (Data lens) | Claude | ✅ Complete | 9 new real tags created and wired (`wag-match-annabella`, `wag-awards-ryan`, etc.) — zero added UI friction, verified in code + build. |
| UTC/local date-formatter bug | Claude | ✅ Complete | Fixed across every affected call site, both repos — confirmed via full re-grep, not partial. |
| ShareSheet CSS-specificity bug | Claude | ✅ Complete | Hotfixed directly to `main` (thewagpodcast-website), commit `0a72727`. |
| `/speaking/` filter-pill CSS-specificity bug | Claude | ✅ Complete | Hotfixed directly to `main` (wildadventuregirls-website), commit `787e422`, verified live via browser JS. |
| robots.txt sitemap www-mismatch | Claude | ✅ Complete | Fixed on both `main` and feature branch (wildadventuregirls-website). |
| `js-yaml` / `postcss` security vulnerabilities | Claude | ✅ Complete | Real npm-audit findings, fixed on both repos. |
| Accessibility pass | Claude | ✅ Complete | Real Lighthouse run + `aria-live` added to QuizWidget/PollWidget/VoteWidget results. |
| Structured data (6 previously schema-less pages) | Claude | ✅ Complete | Page-specific JSON-LD added and verified via direct parse. |
| `llms.txt` current on both sites | Claude | ✅ Complete | Confirmed lists all live pages, correctly excludes `noindex`'d Seasonal Challenges. |
| Crawl-budget / internal-link audit | Claude | ✅ Complete | Independent BFS crawler: 0 orphans on either site (post-fix). |
| Rate limiting on public POST endpoints | Claude | ✅ Complete | Verified with a real 429 response after the limit. |
| Cross-link matrix rebalancing (interaction optimization pass) | Claude | ✅ Complete | WAG Awards and Questions Featured no longer near dead-ends — verified live in browser. |
| Permanent documentation system | Claude | ✅ Complete | `MASTER_STATUS.md`, `CEO_DECISIONS.md`, `FUTURE_OPPORTUNITIES.md`, `DATA_MODEL.md`, `CHANGELOG.md`, `ARCHITECTURE.md`, `INTERACTION_OPTIMIZATION.md`, `PRODUCTION_AUDIT.md`, `LAUNCH_CHECKLIST.md` — all real, all current as of this commit. |

---

## Summary

**1 blocking item** (Netlify production API key — a check only Katie can perform), **7 acceptable-risk items** (all deliberately scoped, documented, none require code changes to launch), **16 complete items** with real evidence.

**Go/No-Go once the one 🔴 item is confirmed: GO.**
