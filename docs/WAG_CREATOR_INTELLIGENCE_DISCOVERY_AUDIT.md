# Creator & Platform Intelligence — Discovery Infrastructure Audit

**Status: RESEARCH/DESIGN ONLY. Nothing purchased, connected, subscribed, scraped, built, or scheduled. Katie's proposed publication-monitoring approach was treated as a hypothesis to test, not a requirement — findings below confirm parts of it, reject parts of it, and replace parts of it.**

Proof 1 found that investigative reasoning is ahead of discovery capability — strong when Proof 0 had Tubefilter's structured dataset, weak when Proof 1 had only web search. This audit answers: what's the right sensor stack, and is publication monitoring actually part of it or a distraction from it.

---

## Headline pushback, up front

**Publications are not the discovery mechanism — they're the context layer.** Across all four research passes, the pattern was consistent: trade press (Tubefilter, Digiday, Deadline, Podnews) is genuinely the *best* source for exactly three things — business/team changes, collaboration announcements, and industry-wide pattern confirmation — and it is structurally *unable* to do the one thing Proof 1 actually needed: a dated, numeric "this specific channel/show just accelerated" signal. No amount of "monitor Tubefilter daily" fixes that, because Tubefilter publishes when *it* decides something is a story, not on a schedule matched to WAG's research cadence. The correct architecture is **numeric/structured sensors for detection, publications for explanation** — not publications for both.

**Neither is Tubefilter alone sufficient going forward.** Proof 0 worked because Tubefilter happened to publish a ready-made Top 50 the week WAG needed one. That's a lucky coincidence of scope, not a repeatable mechanism — Tubefilter's Top 50 is a *global, all-genre* list; WAG needs a *WAG-relevant, comparable-creator* list, which nothing publishes for free except WAG defining it itself.

---

## 1. Current Sensor Map

| Source | What it actually tells us |
|---|---|
| WAG's own YouTube OAuth connector (Data/Analytics/Reporting APIs) | Everything about WAG's **own** channels — real, deep, first-party (see `WAG_CONNECTOR_CAPABILITY_MATRIX.md`). Not usable for other creators. |
| Tubefilter, Digiday (via WebSearch/WebFetch) | Real, credible trade press — proven in Proof 0/1. Good for narrative, business moves, industry patterns. Zero real-time numeric acceleration capability. |
| Plain WebSearch/WebFetch | Proven in Proof 1 to surface almost no usable creator-level movement data — mostly SEO listicles and marketing content. Real, demonstrated limitation, not a one-off. |
| YouTube Official Blog, Creator Insider | Already registered as Tier-1 sources. Real, primary, confirmed reliable (correctly debunked the fabricated Shorts-algorithm signal in Proof 1). |
| `employee_knowledge_sources` (6-tier hierarchy) | Real, working governance layer for source-quality — proven useful this session. |
| `external_creator_observations` (WAG Brain) | Real, ingestion-integrity-gated table. Currently populated only with Proof 0's Tubefilter batch. No recurring capture. |

**What this map actually says:** WAG has excellent first-party intelligence about itself and a working (if manual) research/governance discipline — and almost nothing structured about anyone else.

## 2. Missing Sensor Map — questions we currently cannot answer reliably

- Is a specific comparable creator accelerating **right now**, independent of whether Tubefilter happens to cover them.
- Did a specific creator change their **title/thumbnail packaging** before a breakout (the free API only shows current state, never history).
- Is a specific **video** (not the whole channel) performing 5–20x that channel's own baseline.
- Is a video-podcast or teen-audience show **charting or moving** on Apple/Spotify/YouTube's own podcast rankings.
- What does WAG's own historical evidence say about a hypothesis an external creator's success suggests (the "WAG as control" question — this is actually **available today**, just not habitually queried before a recommendation is finalized).

## 3. The 15-need table

*PLAT = primary/first-party, SEC = secondary/derived, STR = structured, UNS = unstructured. Cost figures are as researched Aug 2026 — verify before any purchase.*

| Need | Best source | Ev. | Struct | Hist. depth | Freshness | Access | Cost | Terms/risk | Main/Pod/Both | What it enables beyond search |
|---|---|---|---|---|---|---|---|---|---|---|
| Creator/channel acceleration | WAG-curated watchlist polled via YouTube `channels.list` | PLAT | STR | None built-in — WAG must accumulate it | Real-time on poll | Free API key | $0 | None (ToS-sanctioned) | Both | Real numeric deltas search cannot see |
| Individual-video breakout | Same watchlist + `videos.list` per-channel, compared to that channel's own trailing average | PLAT | STR | Same as above | Real-time on poll | Free API key | $0 | None | Both | Per-video z-score vs. a creator's own baseline — genuinely new capability |
| Shorts trends/formats/audio | YouTube in-app Trends + TikTok Creative Center + Google Trends | PLAT/SEC | Partial | Shallow | Near real-time | Free, manual | $0 | None (avoid scraper tools like Apify) | Both | Cross-platform lead time on emerging audio/formats |
| Long-form format movement | Tubefilter/Digiday + YouTube Culture & Trends Report | SEC/PLAT | UNS | Good archive | Periodic | Free/manual | $0 | None | Both | Human pattern-recognition — **no tool exists for this, honestly** |
| Titles/thumbnails/packaging history | **ViewStats Pro** | PLAT | STR | Since ~Dec 2023 launch | Continuous | Subscription | **$49.99/mo** | None | Both | The one real gap-closer — free API shows current state only, never history |
| Creator collaborations/audience migration | YouTube native Collaboration credit tag (manual per-video check) + Social Blade Compare | PLAT | Partial | Moderate | Real-time | Free, manual | $0 | None | Both | Confirmed mechanism behind Proof 1's Double Trouble finding |
| Creator team/business/production changes | Deadline Agencies, Tubefilter, Variety + creator interview podcasts (Colin and Samir) | SEC/PLAT | UNS | Good archive | Daily-ish | Free (some gated) | $0 | LinkedIn: manual browsing only, never scraping | Both | Business-side moves search won't surface unprompted |
| Localization/dubbing/international growth | YouTube's own blog + Slator (trade press) | PLAT/SEC | Mixed | Years archived | Monthly | Free | $0 | None | Both | Slator is a genuine new, non-obvious, credible find |
| Unusually strong fandom/community behavior | YouTube Community tab (manual) + F5Bot (Reddit/HN keyword alerts) | PLAT | UNS | None (F5Bot forward-only) | Real-time | Free | $0 | Reddit's own API is now enterprise-gated (~$12K/mo) — do not pursue | Both | Passive monitoring without re-searching |
| Video-podcast acceleration | **Apple Podcasts genre RSS (free, official)** + **Pod Engine or Podchaser** | PLAT/SEC | STR | Apple: none built-in; Podchaser/Pod Engine: real daily history | Daily | Free (Apple) / subscription | $0–$100+/mo | None | Podcast | The actual fix for Proof 1's biggest gap — see §5 |
| Podcast episode/clip packaging | None found — genuine tooling gap | — | — | — | — | — | — | — | Podcast | Honest: no equivalent to ViewStats exists for podcasts yet |
| Podcast charts/discovery | YouTube's official Podcast Charts (charts.youtube.com/podcasts) | PLAT | STR (page)/SEC (mirrors) | Weekly forward; third-party mirrors add history | Weekly | Free | $0 | None | Podcast | Watchtime-based — video-podcast-native, matches WAG Podcast's format |
| Platform/product/policy announcements | YouTube Official Blog, Creator Insider (already registered) | PLAT | UNS | Years archived | As published | Free | $0 | None | Both | Already working — proven in Proof 1's debunking of the fabricated Shorts signal |
| Creator interviews/case studies | Colin and Samir / Publish Press | PLAT/SEC | UNS | Years archived | 2x/week | Free | $0 | None | Both | Creators' own stated reasoning — richer than a press release |
| Broader creator-economy research | Tubefilter, Digiday, Slator, eMarketer, Rest of World | SEC/PLAT | Mixed | Good | Ongoing | Free (mostly) | $0 | Treat Influencer Marketing Hub numbers skeptically — trace every stat to its underlying source | Both | Credible macro context, not a detection mechanism |

## 4. Best free improvements (ranked by decision value, not novelty)

1. **A WAG-curated channel-ID watchlist polled via `channels.list`** — free, ToS-sanctioned, 1 unit/call (10,000/day quota), the single highest-value fix. Directly answers "is a comparable creator accelerating" with real numbers, something no amount of publication-monitoring can do.
2. **Apple's free Kids & Family genre RSS feed**, polled and stored by WAG the same way — closes most of the Podcast gap at zero cost, if WAG is willing to accumulate its own history rather than buy Pod Engine's pre-existing history.
3. **YouTube's official Podcast Charts page**, checked weekly — free, watchtime-based, video-podcast-native.
4. **F5Bot** — free, passive, continuous keyword monitoring, replaces "remember to search Reddit."
5. **Reordering the existing source hierarchy's actual use**: keep Tubefilter/Digiday/Slator/Colin-and-Samir as the *context and business-change* layer they're actually good at — stop expecting them to double as the *detection* layer.

## 5. Paid sources worth considering — evaluated on incremental decision value, not "does it exist"

Per your instruction: reject on whether the differentiating capability actually matters to WAG's real questions, not merely because a free alternative exists somewhere.

| Tool | Real cost | What it has that the free API doesn't | Does that difference matter to WAG? | Verdict |
|---|---|---|---|---|
| **ViewStats Pro** | $49.99/mo | Actual historical title/thumbnail change log — the free API can only ever return *current* state, never a past version | **Yes, directly.** This is the one need (packaging history) with no free substitute at all. | **NEEDED NOW if the packaging-history need is prioritized; LATER IF EARNED otherwise** |
| **Pod Engine** | $100+/mo | Pre-existing daily chart-position history across Apple/Spotify since the vendor started tracking, plus an MCP integration an agent can query directly | Yes, if Podcast discovery becomes a real, funded priority — but WAG could build equivalent *future* history for $0 by polling Apple's own free RSS feed starting today. The real trade is buying instant backfill vs. building forward-only history for free. | **LATER IF EARNED** — start the free poller now; revisit Pod Engine only if Podcast intelligence becomes a funded, recurring priority and backfill depth matters |
| **Podchaser API** | $99+/mo (free tier: 25K query points/mo) | Cross-platform (Apple+Spotify) historical chart pulls, richer metadata, guest/credit data | Real, similar case to Pod Engine — the free tier may actually be sufficient for WAG's current call volume | **Free tier: NEEDED NOW to test. Paid: LATER IF EARNED** |
| **Social Blade** (Bronze, $3.99/mo) | $3.99/mo | Genuine historical daily subscriber/view charts the API doesn't expose at all | Yes, but only as a spot-check verification tool once WAG's own watchlist flags something — not as the primary discovery engine | **LATER IF EARNED** — cheap enough to add once the watchlist exists and needs occasional deep-history verification |
| **VidIQ/TubeBuddy competitor tracking** | $9–79/mo | A ready-made watchlist/alert dashboard UI over the same public data WAG's own poller would capture | Marginal — the underlying data is the same as a free DIY poller; you're paying for UI, not new information | **NOT WORTH IT** — build the poller instead |
| **Tubular Labs** | ~$1,000–1,500+/mo, realistically $42K–60K+/year | Cross-platform (TikTok/IG/FB/Twitch) audience-overlap and reach benchmarking at massive scale (40M+ creators), built for agency media-buying decisions | **No.** WAG's actual questions (is this creator accelerating, what changed before their breakout) don't need cross-platform reach-planning at agency scale — that capability solves a different buyer's problem, not WAG's. | **NOT WORTH IT** |
| **Noxinfluencer** | $239–399/mo | A "channel value" / audience-quality score aimed at vetting creators for brand deals | **No, for Creator Intelligence.** This is a Revenue/brand-deal-vetting capability, not a research-detection one — it's the wrong department's problem. Its own core stats are already free via the API. | **NOT WORTH IT for this department.** Flag for Revenue to independently evaluate for *their* creator-partner vetting use case — different decision, different owner. |
| **Brandwatch / Sprout Social social listening** | $800–$50,000+/year | Cross-platform sentiment/volume at enterprise scale, multi-year archives | Real capability, but Audience Intelligence (the department that would actually consume fandom-sentiment data) doesn't exist yet — there's no one to hand this to. | **CURRENTLY NOT FEASIBLE** — revisit only once Audience Intelligence is real and fandom-tracking-at-scale is an active dependency, not before |
| **ConvergenceCatalyst** | N/A | Nothing relevant — this is a telecom/enterprise-AI advisory firm, not a creator-economy source | No | **NOT WORTH IT — wrong industry entirely, drop from consideration** |
| **TrackReddit** | $19–119/mo | Historical archiving + basic sentiment charts on top of Reddit's now-gated API | Modest, real value at the cheap end if Reddit-specific monitoring becomes a real priority | **LATER IF EARNED** |

## 6. Podcast-specific sensor strategy

The Proof 1 conclusion ("Podcast discovery has no equivalent to Tubefilter") is **half right**. Real infrastructure exists — it's just not narrative/search-shaped, so 7 web searches never found it. The actual stack:
1. **Apple's free Kids & Family genre RSS feed**, polled and stored by WAG on a schedule WAG controls — the free, structural fix.
2. **YouTube's official Podcast Charts** (watchtime-based, weekly) — the single most WAG-relevant chart source, since WAG Podcast is video-first on YouTube, not audio-first.
3. **Podnews** (free daily industry newsletter) as the trip-wire for "the industry already noticed this."
4. **Honest, permanent gap:** nothing segments specifically by "teen audience" — Kids & Family is the closest proxy and it's imperfect. No packaging/clip-strategy tool exists for podcasts the way ViewStats exists for YouTube video. These stay manual.

## 7. Main-specific sensor strategy

Main's real gap isn't discovery infrastructure — it's that **WAG doesn't yet have a defined comparable-creator watchlist to point any of this at.** The `channels.list` poller and ViewStats Pro both require WAG to first decide *which* channels matter (teen-entertainment/family/ensemble creators of a comparable scale), which is a judgment call, not a data problem. Recommend: define that watchlist (15–30 real channel IDs) as the actual first build item, before any tool selection matters.

## 8. Early Breakout/Video Radar — feasibility

**Feasible, cheaply, today.** A `channels.list` poller against a WAG-defined watchlist gives real subscriber/view deltas over time — velocity and abnormal-vs-own-baseline detection (not just size) is a straightforward calculation once WAG has 2+ observations per channel, no different in shape from the `LAG()`-based approach already designed for `external_creator_observations`. Individual-video breakout detection (`videos.list` per channel, compared to that channel's own trailing average) is the same pattern applied at the video level. **Neither requires anything beyond the free API** — this is a data-accumulation problem, not a tooling problem.

## 9. Format lineage and lifecycle — feasibility

**Partially feasible, and honestly, mostly a human synthesis task.** No dataset exists that algorithmically traces emerging→saturated format spread (confirmed by research — this was the one need where agents found no tool at all). What's realistic: WAG's own watchlist + Tubefilter/Digiday pattern-reading, done periodically by a human (Director-level judgment), classified against the Emerging→Accelerating→Established→Saturated→Declining→Resurfacing scale already designed. Lifecycle classification is a judgment call informed by data, not a number a sensor produces.

## 10. Creator networks/audience migration — feasibility, and fandom's place relative to Audience Intelligence

**Networks:** Feasible at a real but manual level. YouTube's native Collaboration credit tag is publicly visible per-video (confirmed the exact mechanism behind Double Trouble) — no bulk API exists to query "all videos tagged with channel X," so this stays a per-creator-pair manual check, not a continuously-running graph. Do not build a relationship database now, per your own instruction — the observable primitive (the credit tag itself) is confirmed real; a graph schema is premature until there's enough real data to justify one.

**Fandom:** Real, legitimate lightweight tools exist (F5Bot free, TrackReddit $19+/mo) for *other creators'* fandom as comparable/hypothesis evidence. **This must stay explicitly separate from Audience Intelligence**, which doesn't exist as an operating capability yet (see Continuity Check). Creator Intelligence's fandom research answers "what does obsession look like for comparable creators" (a hypothesis-generating question); Audience Intelligence's job — not yet built — is "what does WAG's own audience actually do," using WAG's own comments/analytics as primary evidence. Do not let Creator Intelligence's fandom research quietly become WAG's audience model by default just because it exists and Audience Intelligence doesn't yet.

## 11. Primary Platform Intelligence — strategy

Already substantially working: YouTube Official Blog + Creator Insider are registered Tier-1 sources and correctly caught the fabricated Shorts-algorithm signal in Proof 1. Add: **YouTube's Culture & Trends Report series** (a real, periodic, official trend statement — distinct from day-to-day blog posts) and, for Podcast specifically, **YouTube's own Podcast Charts blog announcement** as the primary source for that product's existence/scope. The permanent governance rule from Proof 1 (§64a — primary-source verification required for platform-change claims) is the actual enforcement mechanism here, not a new source.

## 12. Minimum sensor stack for Proof 2 — what makes it meaningfully different from "search harder"

1. A **WAG-defined watchlist** of 15–30 comparable channel IDs (a judgment call, made once, reused going forward).
2. A **`channels.list` poller** against that watchlist (free, real, structured, accumulates its own history from day one).
3. **Apple's free Kids & Family RSS feed**, polled the same way, as the Podcast-side equivalent.
4. The existing **6-tier source hierarchy** and **ingestion-integrity gate**, applied to whatever the poller surfaces, exactly as already built.
5. Publications (Tubefilter/Digiday/Slator/Colin-and-Samir) stay in the loop **only** for the explanation/context stage, after a numeric sensor has already flagged something — not as the discovery trigger.

This is a real, structural change from Proof 1 — the discovery step stops being "search the web and hope," and starts being "poll a real number, then explain the number."

## 13. Explicit DON'T BUILD / DON'T BUY list

- **Don't buy** Tubular Labs, Noxinfluencer (for this department), Brandwatch/Sprout Social, ConvergenceCatalyst, VidIQ/TubeBuddy competitor tiers — all rejected on incremental-decision-value grounds above, not availability.
- **Don't build** a creator-relationship graph database now — the primitive (Collaboration tags) is confirmed real but there's not yet enough data to justify a schema.
- **Don't build** an automated LinkedIn/job-posting monitor — no legitimate programmatic access exists; automating it means scraping, which is a real ToS/account risk.
- **Don't build** a podcast packaging-history tool — genuinely doesn't exist anywhere yet, building one from scratch is a real engineering project disproportionate to current need.
- **Don't treat** Reddit's official API as a near-term option — its current commercial tier (~$12K/month) and approval-required policy make it enterprise-only, not a WAG-scale tool.
- **Don't schedule anything from this audit** — per your explicit instruction, this stays research/design only.

## 14. Precision on observable vs. inferred data (per your clarification)

**A future WAG watchlist can only ever capture what's genuinely public:** subscriber count, view count, upload frequency/cadence, video duration, and public engagement counts (likes/comments totals) — all real, obtainable via the free `channels.list`/`videos.list` API, all confirmed the same class of data WAG's own capability matrices classify as directly available.

**It can never capture another creator's private analytics** — CTR, retention curves, traffic-source breakdown, returning-vs-new-viewer splits, demographic data. These are Studio-only even for a channel's *own owner* (confirmed in `WAG_CONNECTOR_CAPABILITY_MATRIX.md`); there is no legitimate path for a third party to obtain another creator's equivalent. Any tool claiming to estimate these (VidIQ/Noxinfluencer "scores," audience-quality grades) is producing a **derived/estimated** number, not a measured fact, and must never be recorded as one.

**Concrete schema rule for any future watchlist table:** every row must carry an explicit `data_class` distinguishing `platform_direct` (came straight from the API, a real public number) from `third_party_derived` (a vendor's estimate/score) — modeled the same way `external_creator_observations.ingestion_method` already distinguishes `mechanical_parse` from `llm_assisted`. Never let an estimated number sit in the same field as a measured one without that distinction visible.

---

## A note on the decision-layer question

You asked whether the sensor architecture above could eventually support something more useful than a research report — a MUST FILM / MUST TEST / WATCH / DON'T CHASE decision engine. Honestly: **yes, structurally, but not yet, and not from sensors alone.** The sensor stack above can supply the "External Opportunity," "Lifecycle/Saturation," and "Platform Conditions" terms of that equation. It cannot supply "Audience Desire" (that's Audience Intelligence's job, which doesn't exist yet) or "WAG Historical Evidence" as a *reflex* rather than a manual step (Creator Intelligence currently only queries WAG Brain when a human — me — remembers to). The honest state: the ingredients are becoming real one at a time; the equation itself is not close to buildable yet, and shouldn't be attempted until Audience Intelligence has run its own Proof 0.

---

## Addendum — per Katie's review (2026-08-12)

**ViewStats downgraded from "worth trialing" to explicitly ON TRIAL, not approved.** The real test is whether it repeatedly changes WAG decisions, not whether it's a good product: did a real breakout video change its thumbnail/title, when relative to acceleration, in the first hours or days, do comparable creators use similar packaging mechanisms, can WAG distinguish a successful original package from a successful repackage — and does that feed something Title/Thumbnail/Greenlight can actually use. No purchase without Katie's explicit approval, and cancel if the trial doesn't produce that evidence repeatedly.

**The watchlist needs to capture more than subscriber/view deltas.** Real target signal set: acceleration, individual breakout videos, upload-frequency changes, Shorts-vs-long-form mix, velocity relative to *that creator's own baseline* (not absolute size), sustained-vs-one-week growth, new recurring formats, collaboration patterns, format migration, secondary-channel behavior, posting cadence, title structures, packaging changes where data exists, series/franchise behavior, international/localization moves, and whether growth precedes or follows those changes. **Priority explicitly shifts toward catching creators accelerating before they're enormous** — reverse-engineering a creator already at 50M subscribers is lower value than catching one mid-climb.

**Individual-video breakout detection gets a concrete trigger shape:** a video performing at a defined multiple (e.g. 6.4×) of that channel's own trailing 24-hour velocity should trigger investigation — title/thumbnail/hook/topic/format/collaboration/trend/distribution/existing-fandom/external-event — then, only after that, whether WAG has a real advantage there.

**Podcast: real pushback landed and accepted.** Apple's Kids & Family genre feed, used in this audit as the closest available category proxy, is likely the *wrong* category for a teen conversational show — Kids & Family skews toward younger/family-general content. WAG Podcast's actual best-fit category is genuinely unverified and needs primary-source research (Apple's own category taxonomy) before any chart goal is set. Recorded in the Continuity Check as an explicit blocker on Podcast's scoreboard, not silently assumed correct.

**Source health itself needs standing monitoring, not a one-time list.** The Chartable finding (a tool still recommended by generic search two years after it shut down) is the concrete proof this matters — folded into the Research/Evidence/Knowledge Governance function's proposed reliability check in the Continuity Check, not treated as a one-off correction.

---

*Research only. Nothing purchased, connected, or scheduled. STOP per Katie's explicit instruction — awaiting review before Proof 2 or any tool adoption.*
