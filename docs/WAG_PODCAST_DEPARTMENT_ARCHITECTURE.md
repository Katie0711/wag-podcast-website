# WAG Podcast Department Architecture

**One executive question this module answers: what does the Podcast General Manager actually command, with what real evidence, and where does each specialist's data genuinely come from?**

**Status: approved architecture, 2026-08-11. Design only — no employees, schema, or code built from this document yet.** This finalizes the GM + 19 specialist structure named in `WAG_MASTER_OPERATING_SYSTEM_DIRECTIVE.md` §5 against the real, verified data picture from `WAG_CONNECTOR_CAPABILITY_MATRIX.md` (YouTube) and `WAG_SPOTIFY_APPLE_CAPABILITY_MATRIX.md` (Spotify/Apple) — replacing generic descriptions with real source assignments per function, per Katie's instruction. Build only what a current dependency requires; this is the map, not the build order.

## Why WAG Podcast is not just another WAG Main channel

WAG Podcast's evidence ecosystem spans three platforms with three completely different capability profiles: YouTube (rich, mostly-automatable, per `WAG_CONNECTOR_CAPABILITY_MATRIX.md`), Spotify (metadata-only API, real but manual CSV export for everything else), and Apple (no API, dashboard-only, and possibly not even exportable for core listener data). A department built assuming YouTube-level data everywhere would be wrong on two of three platforms. This architecture is deliberately honest about that from the start.

## Source-distinctness — the non-negotiable rule

Per Katie's explicit instruction: **YouTube, Spotify, and Apple evidence must remain source-distinct while allowing higher-level Podcast intelligence to reconcile evidence appropriately.** Concretely:

- Every piece of ingested data carries its platform of origin (mirroring `yt_raw_observations.metric_source`'s pattern — a future `podcast_raw_observations` table, when built, would do the same for Spotify/Apple).
- A "play" on Spotify (30+ second threshold, redefined 2026-06-11) is not the same measurement as a YouTube "view" or an Apple "Play" (no stated minimum-duration threshold found) — these must never be summed into one undifferentiated cross-platform number.
- **Reconciliation is a specialist's job, not a data-layer shortcut.** Podcast Audience Intelligence (below) is where cross-platform synthesis happens deliberately, with each platform's number still individually visible and labeled — not a silent blend upstream of that.

## GM + 19 specialist functions, real source assignments

| Function | Mission | Primary real evidence source(s) | Capability reality |
|---|---|---|---|
| **Podcast General Manager** | Owns podcast-specific strategy; reports to WAG OS leadership (per Katie's directive, sits above the 19 below, not equal to WAG Main's structure) | Synthesizes all 19 below | N/A — coordination role |
| **Episode Greenlight** | Idea → decision, same prediction/outcome loop as WAG Main's Greenlight Manager | `video_ideas`/`predictions`/`outcomes`-pattern tables (not yet built for Podcast — would reuse WAG Main's schema pattern, brand-scoped) | Schema pattern proven (WAG Main), not yet extended to Podcast |
| **Episode/Topic Strategy** | What to cover next | Research/Trend Scouting + Competitive Intelligence outputs (below) | Depends on those two functions existing first |
| **Hook & Retention** | Same retention-operating-system discipline as WAG Main | YouTube retention curves (`elapsedVideoTimeRatio`) — **the only platform with this data at all**; Spotify/Apple have no equivalent metric found | **A on YouTube, D on Spotify/Apple** — retention work is structurally YouTube-only until/unless either platform changes |
| **YouTube Packaging / Titles / Thumbnails** | Same packaging discipline as WAG Main, podcast-specific | YouTube Data/Analytics/Reporting APIs (traffic sources, thumbnail impressions/CTR once built) | Same real capability as WAG Main — genuinely automatable |
| **Conversation & Personality Preservation** | **The function Katie named as most important** — optimization must not remove the girls' chemistry, humor, stories; the audience relationship is part of the product | Qualitative: transcripts, episode review, direct human judgment — not a metrics-driven function by nature | No API replaces this; deliberately evidence-light, judgment-heavy by design |
| **Clips/Shorts Intelligence** | Which moments become standalone clips | YouTube (`creatorContentType` segmentation, already real) + manual episode review | A on YouTube for the segmentation signal; clip *selection* itself stays human/editorial |
| **Spotify/Audio Intelligence** | Spotify-specific performance | Spotify for Creators CSV export (`WAG_SPOTIFY_APPLE_CAPABILITY_MATRIX.md`) — real, but manual/periodic, not live | **C** — build only as a lightweight file-ingestion path, not an OAuth connector, when this function is actually staffed |
| **Apple Podcasts Intelligence** | Apple-specific performance | Apple Podcasts Connect dashboard, manual snapshot (no confirmed export) | **C/D** — likely stays a manual, dated-snapshot practice indefinitely, same pattern as pre-connector YouTube Studio pulls |
| **Podcast Audience Intelligence** | Who listens, where, cross-platform | YouTube (real demographics/geography, Analytics API) + Spotify CSV (Audience Segments) + Apple dashboard (Top Countries/Cities) | **The reconciliation point** — three real but structurally different datasets, kept labeled by source, never silently merged |
| **Research/Trend Scouting** | External podcast-landscape awareness | Always-Ahead Intelligence function (master directive §18), podcast-specific slice | Not yet built; same noise-filter discipline applies |
| **Competitive Podcast Intelligence** | What comparable podcasts do | Manual research, same primary-source-only discipline already standing for WAG's creator research (`wag_creator_research_methodology`) | No API shortcut exists for competitor podcast analytics either |
| **Guest Intelligence** | Who to invite, fit, history | Relationship Brain (master directive §14), podcast-scoped | Not yet built |
| **Collaboration Intelligence** | Cross-creator/collaboration opportunities | Same Relationship Brain | Not yet built |
| **Podcast SEO/Discovery** | Search/AEO for thewagpodcast.com | Real, already-built infrastructure — GSC, GA4, the existing SEO/AEO/GEO checklist pattern already used sitewide | **Already the most mature function** — reuses existing, proven WAG OS capability directly |
| **Community/Listener Intelligence** | Comments, community signal | YouTube comment data (Data API `commentCount` already ingested; comment *content* would need `commentThreads.list`, a different scope, not yet requested) | B — count is real today, content/sentiment is a future scope decision |
| **Podcast Revenue/Sponsorship Intelligence** | Podcast-specific sponsor inventory/pipeline | Business Assets ledger pattern (already exists for WAG Main), extended to Podcast; real revenue data lives in Finance systems not yet built | Structural pattern exists, podcast-specific instance doesn't yet |
| **Production/Quality** | Episode production pipeline health | Manual/operational tracking, same pattern as WAG Main's Operations function (master directive §22) | Not yet built for either brand |

## What this confirms about build order

Nine of nineteen functions above depend on infrastructure that doesn't exist yet for *either* brand (Relationship Brain, Business Assets extension, Research/Trend Scouting, Operations tracking) — building Podcast-specific versions first would duplicate rather than extend. The functions genuinely ready to be real today, in priority order:

1. **Podcast SEO/Discovery** — already mature, reuses existing infrastructure directly.
2. **YouTube Packaging/Titles/Thumbnails + Hook & Retention** — the WAG Podcast YouTube connector is proven and already capturing this data (per `WAG_OS_SECURITY_CHECKLIST.md` §22).
3. **Conversation & Personality Preservation** — no data dependency at all; this is a standing editorial discipline, not a build item.

Everything else waits on shared infrastructure (Relationship Brain, Business Assets, Research function, Operations tracking) that should be built once, for both WAG Main and WAG Podcast, not duplicated per brand.

## Explicit non-build confirmation

Per Katie's instruction: this document records the architecture. No employee, schema, or Edge Function is created from it. The next actual build decision is Katie's, guided by which specialist has a real, current dependency — not by working down this list in order.
