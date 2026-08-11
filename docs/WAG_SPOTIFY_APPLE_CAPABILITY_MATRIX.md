# WAG Spotify + Apple Podcasts Capability Matrix

**One executive question this module answers: before building either connector, what can WAG Podcast actually get from Spotify and Apple programmatically — and what can only ever be a manual pull?**

Verified against official sources on 2026-08-11: Spotify's own Web API reference (`developer.spotify.com`), Spotify for Creators' own support documentation (`support.spotify.com`), and Apple Podcasts Connect's own creator-facing analytics documentation (`podcasters.apple.com`). No third-party scraper or unofficial workaround is treated as a real capability — per Katie's explicit instruction not to invent API access or use unofficial scraping as a shortcut.

---

## Bucket legend (same scheme as the YouTube matrix)

- **A — Directly available through an official API.**
- **B — Available through an official API, with a real limitation.**
- **C — Creator-dashboard or manual-export only** (a human logs in, or downloads a file — no programmatic pull).
- **D — Not obtainable reliably at all.**

---

## Headline finding

**Neither platform offers a public API for podcast creator analytics.** Both confirmed A/B options below are metadata-only (what a show/episode *is*, not how it performed). Every performance metric on both platforms — plays, listeners, completion, demographics, geography, discovery — is **Bucket C**: real data, but dashboard-view or manual-export only, never a live API pull. This is a materially different picture from YouTube, where most of this work was Bucket A/B.

## Spotify

**What was checked:** Spotify's official Web API reference (`developer.spotify.com/documentation/web-api`) — the only officially documented Spotify API surface found. It covers Albums, Artists, Audiobooks, Chapters, Episodes, Genres, Library, Markets, Player, Playlists, Search, Shows, Tracks, Users. **No analytics endpoints exist anywhere in it.** No separately-documented "Distribution API" with analytics scope was found despite a 2026-01-07 Spotify announcement of a Partner Program change and a Distribution API — that API is for content distribution (uploading/publishing), not analytics, based on everything checked.

| Metric | Bucket | Source | Level | Notes |
|---|---|---|---|---|
| Show/episode metadata (title, description, publish date, duration) | **A** | Web API `Shows`/`Episodes` endpoints | show + episode | Real, documented, standard REST API — this is genuinely automatable, unlike everything below |
| Plays/streams | **C** | Spotify for Creators dashboard | show + episode | Spotify redefined "play" 2026-06-11 to require 30+ seconds of listening — a real, recent methodology change worth knowing before comparing to historical numbers |
| Audience Segments, Episode Trends, Long-Term Engagement, Discovery Journey (traffic/discovery sources) | **C** | Spotify for Creators dashboard | mostly show-level | All four launched/upgraded 2026-06-11; full historical data access was also added in that same update — real, valuable, dashboard-only |
| Consumption/completion, followers, demographics/geography, device/platform | **C** | Spotify for Creators dashboard | show + episode | Not separately documented in granular detail beyond dashboard presence — genuine data exists, but no field-level API contract to trust |
| Impressions/reach (pre-click) | **D** | Not found anywhere in official docs | — | No evidence this concept exists on Spotify's side the way YouTube's thumbnail impressions do |
| **CSV export** | **C, real and useful** | Spotify for Creators → Analytics → per-chart Export button | per-section | Officially confirmed, real capability: any analytics chart can be exported to CSV with a chosen date range. This is the one legitimate "automatable-adjacent" path — a human (or a scheduled human-triggered process) downloads CSVs, WAG OS ingests them as `manual_export`-tagged raw observations, same pattern already built for `yt_raw_observations.metric_source = 'manual_export'`. |
| Historical depth | **C** | Dashboard | — | "Full historical data access" was explicitly added 2026-06-11 — real improvement, still dashboard/export-only |
| Auth for the one real API (metadata) | **A** | Standard OAuth (Client Credentials or Authorization Code flow) | — | Same auth model as any standard Spotify Web API integration — not a blocker if WAG ever wants show/episode metadata only |
| Quota/rate limits | Not independently verified | — | — | Standard Spotify Web API rate limits apply to the metadata endpoints; no analytics endpoints exist to have limits on |

## Apple Podcasts Connect

**What was checked:** Apple's own creator-facing analytics documentation (`podcasters.apple.com/support/5392-listener-analytics`) and its subscription-report download documentation. Apple's own developer documentation was also checked for any Podcasts-specific analytics API — none exists; the `AppStoreConnectAPI` "Downloading Analytics Reports" surface found in search results is for **App Store** app analytics, an entirely different product, not podcasts. Apple explicitly does not support third-party programmatic access to podcast analytics.

| Metric | Bucket | Source | Level | Notes |
|---|---|---|---|---|
| Plays | **C** | Apple Podcasts Connect dashboard | show + episode | "The total number of times people pressed play" |
| Listeners (unique people) | **C** | Dashboard | show + episode | |
| Engaged Listeners | **C** | Dashboard | show + episode | Defined as 20+ minutes or 40%+ of an episode consumed — a real, specific Apple-defined threshold, not equivalent to YouTube's `averageViewPercentage` |
| Average Consumption | **C** | Dashboard | episode | "How much of the episode users played per device," expressed as a percentage |
| Time Listened | **C** | Dashboard | show + episode | Cumulative across listeners |
| Followers | **C** | Dashboard | show | |
| Top Countries/Regions/Cities | **C** | Dashboard | show | Based on unique device counts |
| Age/gender demographics, device/platform breakdown | **D** | Not found | — | Not documented as available anywhere on Apple's own analytics page — unlike Spotify (where it's at least dashboard-present), this may simply not exist as a surfaced metric on Apple's side |
| Impressions/reach (pre-click) | **D** | Not found | — | Same as Spotify — no evidence this concept exists on Apple's platform |
| Historical depth | **B/C** | Dashboard | — | Default 60-day window; Performance tab allows comparing "last 50, 100, or total episodes up to 200" within 7/14/30/60-day post-release windows — a real, somewhat granular historical view, still dashboard-only |
| Minimum reporting threshold | — | — | — | At least 5 unique listeners must play an episode before any data appears — a real suppression floor, not a WAG OS limitation |
| **Export** | **D for core listener analytics** | — | — | The listener-analytics documentation page makes **no mention of CSV/export/download capability at all** — this data appears to be dashboard-view-only, a real, harder blind spot than Spotify's |
| Subscription/revenue reports (Snapshot, Events, Sales Summary) | **C, narrow scope** | Apple Podcasts Connect → Analytics → Reports, downloadable .txt | show-level, financial | Only applies if WAG Podcast runs paid subscriptions through Apple's Podcasters Program — not the core listener-engagement data, a separate monetization-only report set |
| Auth / programmatic access | **D** | — | — | No API, no OAuth flow, nothing to authenticate against for analytics — Apple states it does not support third-party analytics access |

## What this means for building either connector

**Neither platform supports what "connector" has meant for YouTube** — an OAuth-authorized, scheduled, automatic pull. The real, honest options are:

1. **Spotify:** build a lightweight ingestion path around the *real, confirmed* CSV export — Katie (or a future Podcast specialist) exports charts periodically from Spotify for Creators, WAG OS ingests the files, tagged `metric_source = 'manual_export'` exactly like the pattern already built for YouTube. This is real, not a workaround — Spotify itself calls this the way to get the data out.
2. **Apple:** even manual export isn't confirmed available for the core listener metrics — the only realistic near-term path is a human reading the dashboard and recording dated, sourced snapshots, the same honest pattern already used in `WAG_MEASUREMENT_STANDARDS.md` for YouTube Studio numbers Katie pulled by hand.
3. **Neither requires new OAuth scopes, new security review scope, or new connector infrastructure** in the sense the YouTube connector needed — because neither has a real API to authorize against for performance data. The actual build item, if pursued, is a small **file-ingestion path** (CSV parser + `manual_export`-tagged inserts), not an OAuth-based connector.

**Recommendation:** do not build either "connector" as a priority right now. The real, available Spotify CSV path is cheap to build whenever a Podcast specialist actually needs Spotify data; Apple's core analytics may never be automatable beyond manual snapshots. This matches Katie's own instruction not to build ahead of an actual dependency.

---

*Verified against `developer.spotify.com/documentation/web-api`, `support.spotify.com` (Spotify for Creators export/engagement-analytics articles), and `podcasters.apple.com/support/5392-listener-analytics` + `podcasters.apple.com/support/960-download-subscription-reports` on 2026-08-11. Re-verify before relying on this if significant time has passed — both platforms have shipped real analytics changes recently (Spotify's 2026-06-11 tools launch, its 2026-01-07 Partner Program/Distribution API change) and could add real API access without notice.*
