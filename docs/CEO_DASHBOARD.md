# WAG CEO Dashboard (v0.1)

**For Katie only. Internal, not published, not linked from any live page.** Purpose: stop re-deriving the same handful of business questions by manually re-checking YouTube Studio, GA4, Search Console, Beehiiv, Spotify, website interactions, sponsor inquiries, internal documentation, and competitive intelligence every time. This is a living document, not software — it evolves only when real repeated work justifies a new section. See `SOFTWARE_INCUBATOR.md` for the eventual live-dashboard entry this may graduate into.

**Standing rule while working (per Katie, 2026-08-08):** every time information gets pulled from more than one system to answer a question, ask — should this become a widget here? Is this becoming a repeated workflow? What would make the decision faster next time? Update this file when the answer is yes. Don't force sections ahead of real need.

Each section below: the real answer as of its last check, where it came from, and what's still genuinely unknown (marked TBD, not guessed).

---

## YouTube

- **WAG Podcast channel:** 3.8M+ views to date, weekly upload cadence. *Source: `src/pages/sponsor/index.astro`, current published figure.*
- **Parent brand (Wild Adventure Girls) channel:** subscriber count is live-fetched at build time (`getSubscriberCount()` in `wildadventuregirls-website/src/lib/youtube.ts`), fallback shown is 1.2M+; lifetime views 1B+. *Source: `wildadventuregirls-website/src/pages/sponsor` and `about` pages.*
- **Packaging data (real, from the 2026-08-05 Packaging Optimization phase):** channel average CTR 2.6%; new-viewer CTR only 1.7% on 73% of all impressions — the single most load-bearing real finding behind the repackaging recommendations. *Source: YouTube Studio pull, 27 episodes, 2026-08-05.*
- **TBD:** no live pull this session — next real check should confirm whether Phase 2A (title/thumbnail changes, task #267) has shipped and what it moved.

## GA4

- Two separate GA4 properties confirmed live: `G-DMSSKLJVGS` (wildadventuregirls.com), `G-ZR4HT2CJ97` (thewagpodcast.com) — not cross-domain linked, deliberately separate per site. *Confirmed 2026-07-28.*
- **TBD:** no fresh traffic-by-source pull this session.

## Search Console

- wildadventuregirls.com, trailing 3 months as of 2026-07-27: 916 clicks / 109K impressions / 0.8% avg CTR / 11.3 avg position. *Source: `wildadventuregirls-website/internal/content-refresh-tracker.md`.*
- **TBD:** thewagpodcast.com's equivalent current figures — last full pull was earlier in the project (see `docs/SEARCH_CONSOLE_BASELINE.md`); needs a fresh check before treating as current.

## Beehiiv

- Launch plan confirmed live; Segments/Automations require upgrading to the Scale tier ($43/mo, not yet purchased); custom domain is free on the current plan; a minimal 2-tag V1 taxonomy is the live setup. *Audited live 2026-08-06.*
- **TBD:** real subscriber count and list growth rate — not yet pulled into this doc.

## Spotify

- **TBD — no real data gathered yet.** This is a genuine gap, not an oversight to hide: Spotify listener/follower numbers have not been pulled at any point tracked in this project's documentation. Worth a first real check next time podcast platform performance comes up.

## Website interactions (owned first-party inventory)

Real, live interaction pages, all on thewagpodcast.com (none exist on wildadventuregirls.com — that's a deliberate split per `content-ownership-map.md`):

| Feature | Status |
|---|---|
| WAG Verdict | Live |
| WAG Match | Live |
| WAG Awards | Live |
| WAG Predicted It | Live |
| Questions Featured | Live |
| Vote for Your Favorite WAG Segment | Live |
| Guess the Imposter / Heads Up / Who's Most Likely To (Games hub) | Live |
| Seasonal Challenges | Scaffolded, not yet populated with real content |
| "Community Chooses" | **Reserved name only — not built.** Infrastructure (`PollWidget`/`poll-vote.ts`) exists and could support it, but no real audience-decision content has been made yet. Do not treat as live. |

**TBD:** real vote/participation counts per interaction — not aggregated anywhere yet; each currently requires checking its own Netlify Blobs store individually. This is the clearest current candidate for a future dashboard widget (see [[wag_ceo_dashboard_v01]] trigger question).

## Sponsor inquiries

- **No sponsor inquiry tracking system found in either repo.** Sponsor contact currently routes to `partners@wagstudios.co`; no CRM, spreadsheet, or log was found referenced anywhere in the codebase or docs. This is a real, confirmed gap — related to the existing "Authority / Opportunity Tracker" Software Incubator entry, but distinct (that entry tracks Brand Authority opportunities, not real inbound sponsor leads). Worth flagging to Katie directly rather than silently working around.
- **Pricing:** deliberately not published anywhere on either site — pricing is discussed 1:1 via the contact channel above. Confirmed intentional policy, not a gap (`sponsor/index.astro`, `brand-partnerships/index.astro`, `llms.txt.ts` all state this explicitly).

## Documentation (what exists, so it stops needing to be re-discovered)

`thewagpodcast-website/docs/` currently holds 24 active docs plus an `archive/` and a `legal-drafts/` folder, covering: architecture, business development, CEO decisions, changelog, competitive intelligence, data model, distribution, future opportunities, incident response, interaction-platform optimization, launch tracking (blockers/checklist/command-center), legal readiness, ecosystem-wide master status, operational readiness, production audit, product journal, publishing blueprint, roadmap, Search Console baseline, software incubator, sponsor disclosure, opportunity registry, YouTube account recovery.

`wildadventuregirls-website/internal/` holds 9 docs (brand facts, content ownership map, content refresh tracker, distribution workflow, editorial territory queue, insider funnels, Search Console tracker, video opportunity audit, source archive) plus its own `docs/` folder with a repo-local architecture index and status pointer.

**Read `MASTER_STATUS.md` (in `thewagpodcast-website/docs/`) first for the single ecosystem-wide status view** — this dashboard doesn't replace it, it adds the cross-*system* (not cross-*repo*) view MASTER_STATUS doesn't cover.

## Competitive intelligence

- First real pass completed 2026-08-08: LOL Podcast + Rock Pod. Headline finding: dating/relationship-status hooks are a confirmed Rule-of-3 pattern (WAG + both competitors independently converge); Rock Squad has abandoned two standalone podcast channels, validating WAG's dedicated-channel architecture bet. *Full detail in `COMPETITIVE_INTELLIGENCE.md`.*
- **Next real pass:** not yet scheduled — cadence is "roughly weekly, report when there's a real finding," per the doc's own stated discipline.

---

*Update this file only when a real, repeated need to check one of these systems together comes up — not as a scheduled maintenance task. If a section goes stale and nobody's needed it, that's a real signal too (maybe it doesn't belong here).*
