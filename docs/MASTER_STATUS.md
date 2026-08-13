# WAG Master Status

**Single source of truth.** Ecosystem-wide (thewagpodcast.com + wildadventuregirls.com), not a single-repo document. If this drifts from reality, fix it in the same commit as whatever changed — don't let it go stale. Last updated: 2026-08-07.

---

## Current milestone

**🟢 Interaction Platform V1 is LIVE in production (2026-08-07).** Both repos merged and deployed per Katie's explicit GO. All 5 live interactions (Verdict, Match, Favorite Segment, Questions Featured, WAG Awards) verified end-to-end on real production URLs — real votes, real quiz completions, real free-text submissions, real Beehiiv consent (9 tags confirmed correct across all 5 flows, including the new per-choice tags), real GA4 events. wildadventuregirls.com's reciprocal cross-links and the `/speaking/` filter fix confirmed live and working. Seasonal Challenges correctly stayed gated (`LIVE = false`, `noindex`) — not published. Roadmap phase moves to **Observe → Learn → Optimize → Expand** — see `ROADMAP.md`.

**🟢 Legal foundation V1 is COMPLETE and published (2026-08-07).** Updated Privacy Policy and Terms of Service are live on wildadventuregirls.com (`/privacy/`, `/terms/` — both sites' canonical, single-source legal pages) with a real "Last updated: August 7, 2026" date. Covers the Interactive Platform, Beehiiv, Netlify Blobs/Forms, Ahrefs, a tightly-scoped Future Products section, and strengthened IP/User Submissions language. Full package (drafts, Legal Readiness Report, Executive Summary) archived — see `docs/legal-drafts/archive/` and `LEGAL_READINESS_REPORT.md`. Treated as Version 1, not final — see `ROADMAP.md` for the re-review trigger.

## Branch state

**thewagpodcast-website**
- `main` — production, **now contains the full interaction platform** (merged from `feature/wag-match-quiz` 2026-08-07, commit `3bcfdb1`). All 5 live interaction pages + APIs confirmed live and working.
- `feature/wag-match-quiz` — fully merged, superseded. Safe to delete once Katie confirms nothing else is pending on it.

**wildadventuregirls-website**
- `main` — production, **now contains the reciprocal cross-links and both hotfixes** (merged from `fix/share-menu-stuck-open` 2026-08-07, commit `a7dbf3a`).
- `fix/share-menu-stuck-open` — fully merged, superseded.

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

1. Post-launch analyst posture: watch real usage (votes/submissions increasing, Beehiiv signups arriving, no API errors, GA4 receiving events) for the first 48–72 hours per Katie's explicit instruction — see `CEO_DECISIONS.md`.

*(The 5-page SEO optimization plan previously listed here was already implemented and build-verified 2026-08-07 — see `ROADMAP.md` → Completed and `CHANGELOG.md` → 2026-08-07. This line was stale; corrected.)*

## Launch blockers

None remaining — launch is complete. Full history in `docs/LAUNCH_BLOCKERS.md`.

## Production blockers

None currently open. `PRODUCTION_AUDIT.md` tracks 3 categories intentionally left partial by Katie's own scoping decision (AEO content gaps needing real episode material, production Core Web Vitals blocked by sandbox network limits, deferred Netlify npm-audit dependency chain) — none are launch-blocking.

## Outstanding CEO decisions

- **Interaction platform merge/launch** — the one active decision. See `docs/LAUNCH_CHECKLIST.md`.
- **wagmediapartners.com long-term disposition** — deferred, see `CEO_DECISIONS.md`.
- **HorseSmart Kids timing** — not started, architecturally deferred, see `CEO_DECISIONS.md`.
- **Discovery Platform / Field Map** — deferred until after interaction-platform launch, see `FUTURE_OPPORTUNITIES.md`.

## Long-term roadmap references

`ROADMAP.md` (strategic initiatives), `FUTURE_OPPORTUNITIES.md` (captured but not-yet-built ideas), `CEO_DECISIONS.md` (why things were or weren't built), `DATA_MODEL.md` (the conceptual entity model everything should strengthen), `ARCHITECTURE.md` (how the interaction platform actually works).
