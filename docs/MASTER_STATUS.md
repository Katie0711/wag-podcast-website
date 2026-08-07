# WAG Master Status

**Single source of truth.** Ecosystem-wide (thewagpodcast.com + wildadventuregirls.com), not a single-repo document. If this drifts from reality, fix it in the same commit as whatever changed — don't let it go stale. Last updated: 2026-08-07.

---

## Current milestone

Interaction platform (6 shared-architecture interactions: Verdict, Match, Favorite Segment, Questions Featured, WAG Awards, Seasonal Challenges scaffold) is **built, verified pre-launch, and waiting on Katie's merge decision.** Nothing in the platform is live in production yet.

## Branch state

**thewagpodcast-website**
- `main` — production. Does not contain the interaction platform (confirmed via `git ls-tree`: zero files under `src/pages/api/`).
- `feature/wag-match-quiz` — contains all 6 interactions. `feature/wag-verdict-mvp` is an ancestor of this branch (already merged into it), so this is the one branch to merge, not two.

**wildadventuregirls-website**
- `main` — production.
- `fix/share-menu-stuck-open` — contains the reciprocal cross-links to the podcast site's interactions (homepage, girl profile pages, podcast page, speaking page, brand-partnerships), the `/speaking/` filter-pill production-bug fix, and the robots.txt sitemap fix.

## Production state (verified, not assumed)

- Both sites are live, indexed, and serving real traffic.
- Direct production hotfixes shipped to both `main`s this session (see `CHANGELOG.md`): ShareSheet CSS-specificity bug, `/speaking/` filter-pill bug, UTC/local date formatter (all call sites, both repos), robots.txt www-mismatch, 2 npm-audit security fixes, 2 image re-encodes, page-specific structured data on 6 pages.
- Beehiiv publication `pub_5d446dad-4905-4dae-b67e-19192e2f63f0` ("WAG Insider") — real account, tags/segments/automations for all 6 interactions exist and are correctly configured, but have never received real production traffic (nothing to send them yet). One stale segment (`Verdict Reveal Recipients`) found and recalculated 2026-08-07.

## Last completed work

Full production audit (17 categories, `docs/PRODUCTION_AUDIT.md`) closed to launch-blocker status; Launch Readiness Review delivered; Beehiiv production-capability check completed (real gap found and fixed); literal launch checklist built (`docs/LAUNCH_CHECKLIST.md`); permanent documentation system built; full 8-lens interaction optimization pass completed (`docs/INTERACTION_OPTIMIZATION.md`) — cross-link rebalancing, per-choice Beehiiv tagging, guest-aware episode cross-links, all 6 dynamic segments recalculated.

## Work in progress

- YouTube channel audit-and-fix pass + binge-path end screens/cards (Priority 2/3 of the YouTube Shows project — separate track from the interaction platform, not blocking it).
- Wild Adventure Girls parallel SEO/AEO/GEO audit (ongoing, not one-time).

## Immediate next tasks

1. Katie's merge/launch decision (see Outstanding CEO Decisions below) — everything else in the interaction platform is ready and waiting on this.
2. Once merge decision is made: execute `docs/LAUNCH_CHECKLIST.md` top to bottom.
3. Resume the 5-page SEO optimization plan (paused for this doc system + launch checklist work) — see `ROADMAP.md` → Next.

## Launch blockers

None. Full master list in `docs/LAUNCH_BLOCKERS.md` (0 blocking, 7 acceptable-risk, 17 complete — including `BEEHIIV_API_KEY` in Netlify Production, confirmed live by Katie 2026-08-07). Only Katie's explicit go-ahead to merge both feature branches remains (see `docs/LAUNCH_CHECKLIST.md`).

## Production blockers

None currently open. `PRODUCTION_AUDIT.md` tracks 3 categories intentionally left partial by Katie's own scoping decision (AEO content gaps needing real episode material, production Core Web Vitals blocked by sandbox network limits, deferred Netlify npm-audit dependency chain) — none are launch-blocking.

## Outstanding CEO decisions

- **Interaction platform merge/launch** — the one active decision. See `docs/LAUNCH_CHECKLIST.md`.
- **wagmediapartners.com long-term disposition** — deferred, see `CEO_DECISIONS.md`.
- **HorseSmart Kids timing** — not started, architecturally deferred, see `CEO_DECISIONS.md`.
- **Discovery Platform / Field Map** — deferred until after interaction-platform launch, see `FUTURE_OPPORTUNITIES.md`.

## Long-term roadmap references

`ROADMAP.md` (strategic initiatives), `FUTURE_OPPORTUNITIES.md` (captured but not-yet-built ideas), `CEO_DECISIONS.md` (why things were or weren't built), `DATA_MODEL.md` (the conceptual entity model everything should strengthen), `ARCHITECTURE.md` (how the interaction platform actually works).
