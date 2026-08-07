# WAG Interaction Platform — Launch Readiness Review

Final report before the merge decision, per Katie's 2026-08-07 request. Covers the 5 live interactions (Verdict, Match, Vote for Your Favorite WAG Segment, Questions Featured, WAG Awards) plus Seasonal Challenges (intentionally still scaffolding-only). Read alongside `PRODUCTION_AUDIT.md` — this document is the launch-specific synthesis, that one is the permanent category-by-category reference.

---

## What is production-ready

**Technical foundation — verified, not assumed:**
- All 5 interactions build clean, verified live in-browser (desktop + mobile).
- Zero broken links across all 5 pages (every href checked against real known routes or legitimate external destinations).
- All 5 sit at depth 1 from the homepage (directly linked via the real "Formats & Games" Explore module) — no discovery problem.
- Every page carries canonical, Open Graph, Twitter Card, and page-specific JSON-LD schema (generated centrally, not hand-duplicated).
- `llms.txt` lists all 5 correctly.
- Real Lighthouse accessibility score: 96/100, matching the manual pass (real `<button>` elements throughout, live-region announcements on Quiz/Poll/Vote results, zero missing alt text sitewide).
- Security headers (CSP, HSTS, X-Frame-Options, etc.) confirmed live and correct.
- Rate limiting live and tested on all 3 public POST endpoints (confirmed 429 after the limit in a prior session).
- Beehiiv integration is real and complete: all 5 tags exist, all 5 consent-checkbox promises now have a matching live segment, and the one promise that couldn't be technically fulfilled (WAG Match's original "email me my result") was reworded rather than left dishonest.
- Ecosystem flow confirmed real, not assumed: homepage → interactions (Explore module) → podcast/YouTube/return (WhatsNext's `destination_type` already distinguishes `youtube` specifically from generic `external`) → owned audience (Beehiiv consent on every interaction).

**Content integrity:** every interaction is built from real content — real hosts, real episodes, real guests, real segments. Nothing fabricated. Seasonal Challenges correctly stays gated (`noindex`, unlinked) because no real challenge content exists yet.

## What remains intentionally deferred (not blocking launch)

- **A trustworthy production performance number.** Images are fixed (3 poorly-compressed WebP files re-encoded, real byte-size wins verified). But the actual Core Web Vitals number needs either real Netlify branch-preview access (SSO-gated from this sandbox) or GSC's field data (CrUX) — a synthetic Lighthouse run against `astro dev` was correctly not reported as if it were real.
- **2 FAQ answers on Guys Answer Questions** ("What makes a girl attractive to guys?", "How do guys know if a girl likes them...") describe where the answer lives rather than stating it — real content is needed from the actual episode, not fabricated. Content task, not a code task.
- **A fresh, full-site SEO line-by-line pass.** Spot-checks this session (titles, descriptions, canonical) found and fixed one real issue (Questions Featured's title was 78 chars, now 57). Broader SEO work from prior sessions is presumed still intact but wasn't re-verified page-by-page this pass.
- **AI-referrer traffic dashboard.** Blocked by GA4's report-builder UI being unreliable to navigate via automation in this environment — not skipped by choice. The 8 ChatGPT-referred sessions found earlier in this project remain the best evidence AEO/GEO work is already producing real AI referrals.
- **WAG Match's "next quiz" email** has a segment now, but no second quiz exists yet to send — correctly nothing to build until that's real.

## What can wait until after launch

- Deeper AEO answer-first content pass across the rest of the site (the 2 real gaps found are isolated, not systemic).
- Sponsor-facing one-pager for the new interactive inventory — infrastructure exists (`SponsorSlot` on every interaction), sales collateral doesn't yet, and doesn't block launch.
- Admin/moderation view for Questions Featured submissions — currently readable via direct Blobs query, functional but not a real UI. Fine at low volume.
- Cross-brand theming exploration (HorseSmart Kids) — explicitly deferred by standing instruction, architecture already supports it without a rewrite.

## What should become Phase 2

- **A real GA4 Funnel Exploration report** built from the events that already exist (no new tracking needed — see `PRODUCTION_AUDIT.md` §14). This is the single highest-leverage post-launch analytics task since it turns already-collected data into an answerable question.
- **WAG Match automation decision**, once a second quiz is real: either build the "next quiz" send as a real Beehiiv automation, or keep it manual at low subscriber volume — revisit once there's real subscriber count data to judge the volume against.
- **Community Chooses**, once Katie has a real upcoming production decision to attach it to — architecture (same `PollWidget`) needs zero new code, only real content.
- **A moderation UI for Questions Featured**, once submission volume makes the direct-Blobs-query workflow genuinely slow.

## Remaining business risks

- **Nothing has real user data yet.** Every design decision so far (which interaction, what copy, what cadence) is informed judgment, not measured behavior. This is the core reason to launch now rather than keep polishing — every week without real users is a week of flying blind on what's actually working.
- **WAG Match's "email me the next quiz" promise creates a soft obligation**: if a second WAG-Match-style quiz doesn't materialize in a reasonable window, that segment's subscribers received a promise with no delivery. Low risk at low subscriber counts, worth tracking once volume grows.
- **Questions Featured has no moderation UI**, so a bad-faith or inappropriate submission could sit unnoticed longer than ideal at scale. Low risk at launch volume, real risk if this interaction takes off.

## Remaining technical risks

- **thewagpodcast.com has 6 unresolved high-severity `npm audit` findings**, all in Netlify's own build-tooling dependency chain (sharp/ipx/@netlify/images), not WAG's runtime code. The only fix requires downgrading the live deploy adapter (`@astrojs/netlify`) — deliberately not force-applied mid-launch-prep. Worth a dedicated pass once Netlify ships a compatible update, not urgent.
- **No real production performance number yet** (see above) — if Core Web Vitals turn out to be genuinely poor once measurable, that's a real post-launch risk to user experience and SEO ranking, not just a documentation gap.
- **This sandbox's tooling has real, documented limits** (GA4 report UI, Netlify branch-preview SSO, headless Chrome reaching external hosts) that blocked a few verification steps this session. None of these are WAG site problems — they're environment limitations — but they mean a few checks (AI-referrer numbers, a fair Lighthouse run) still need a human or a different environment to close out.

## Top 5 highest-ROI recommendations for after launch

Per the explicit instruction to shift from builder to analyst once real users exist:

1. **Build the GA4 Funnel Exploration report first, before anything else.** The data's already there — this is the fastest way to see real behavior (which interaction converts, where people drop off) with zero new engineering.
2. **Watch completion rate per interaction in week one**, not just vote counts. A poll with 500 votes but a 20% completion rate (people bouncing before finishing) tells a very different story than 500 votes at 90% completion — and this is measurable today via the existing `{noun}_started`/`{noun}_completed` event pairs.
3. **Track Beehiiv segment growth rate per interaction**, not just total subscribers. Which interaction is the strongest owned-audience engine matters more than which is most "popular" — informed IP building on the compounding-value framing.
4. **Watch `destination_type: 'youtube'` click-through by `source_page`** to see which interaction actually sends people back to YouTube — this is the concrete, measurable version of "does every path increase owned audience," already instrumented, just needs a look.
5. **Don't build a 6th interaction until this data says one of the existing 5 is under-serving real demand.** The temptation after a successful launch is always "build the next thing" — the higher-leverage move is understanding why the first 5 perform the way they do, then double down on what's actually working.

---

*This report reflects the state as of 2026-08-07. The merge/deploy decision itself remains Katie's — this document exists to make that decision informed, not to make it.*
