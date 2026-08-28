# WAG Podcast — Ad Representation Research (Libsyn Ads, Megaphone, and Comparable Networks)

**One executive question this module answers: is professional podcast-advertising representation (Libsyn Ads, Megaphone/Spotify, or a comparable network) something WAG Podcast can actually access today, and if not yet, what specifically closes the gap?**

**Research pass: 2026-08-16.** Research only, per Katie's instruction — no outreach, no signups, no contracts sent. Every claim below is tagged **VERIFIED** (independently confirmed against a named, live source this pass), **INFERRED** (a reasonable read of real evidence, not itself directly stated anywhere), or **UNKNOWN** (checked for and not publicly disclosed, or not confirmable from WAG's own systems this pass). Don't upgrade a tag later without a new source.

**Known limitation this pass:** WAG Brain (Supabase) is currently inaccessible due to an authentication issue. This research relies entirely on local `docs/` files in this repo and public web research — nothing here was cross-checked against WAG Brain's structured data. Re-verify against WAG Brain once access is restored, in case it holds podcast reach/hosting data not present in these docs.

---

## 1. How Libsyn Ads actually works for publishers

Libsyn Ads (formerly AdvertiseCast, rebranded March 2024) runs two structurally separate tracks — conflating them is the single most common misunderstanding of "getting on Libsyn."

| | Host-read / marketplace track | Automatic (programmatic) Ads track |
|---|---|---|
| **What it is** | Direct-sold sponsorships: advertisers browse/buy real ad slots in specific shows from a marketplace of 1,300+ podcasts; the host personally reads the ad live in-episode | AI-driven dynamic ad insertion; ads are stitched into the audio file server-side, not read by the host, and can retroactively monetize the back catalog |
| **Minimum to apply** | **VERIFIED** — 20,000 downloads per new episode within the first 30 days, and at least 10 episodes published | **VERIFIED** — no minimum download or audience-size requirement; Libsyn explicitly removed its prior 2,000-download floor |
| **Approval control** | **VERIFIED** — the podcaster has first right to approve or deny any individual ad request before it airs | N/A — placement is automated |
| **Revenue split** | **VERIFIED** — 70/30 in the podcaster's favor (podcaster keeps 70%) | **VERIFIED** — 50-60% to the podcaster depending on monthly download volume |
| **Typical rates** | **VERIFIED**, two independently-fetched sources roughly agree: ~$18-25 CPM for 30-second spots, ~$25-40 CPM for 60-second spots; a separate WAG doc (`BUSINESS_DEVELOPMENT_SYSTEM.md`, citing the IAB/PwC Podcast Advertising Revenue Study + Libsyn transaction data) independently cites host-read ~$24-40 CPM vs. programmatic ~$5-15 CPM, with business-category host-read running ~$30 CPM — same order of magnitude, not identical numbers, both real | Lower, programmatic-typical CPMs (~$5-15) |
| **Approval timeline** | **UNKNOWN** — Libsyn's own FAQ does not publish a stated turnaround time for the host-read marketplace | **VERIFIED** — Libsyn states a response within 5 business days of applying |
| **What happens after approval** | Advertiser places an order → podcaster approves the specific ad → host records/airs the read | **VERIFIED** — account is auto-enabled with 2 pre-roll + 2 post-roll programmatic slots, customizable any time |
| **Payout** | **VERIFIED** — paid ~30 days after the ad spot is marked completed and reach is reported; funds generally clear from the advertiser in 30-60 days; **VERIFIED** — Libsyn takes a 30% fee on ad-spot sales (consistent with the 70/30 split above); paid via PayPal, ACH, or check; $20 payout threshold | Same payout mechanics, smaller per-episode dollar amounts given lower CPMs |
| **Do you have to switch hosts?** | **VERIFIED** — no. Libsyn's own FAQ states plainly: "You keep your podcast host." Ads can run even if the show isn't hosted on Libsyn's own platform | Same |

**Timeline from application to first real campaign (synthesized, not a single published figure):** for the programmatic track, functionally days (5-business-day approval, auto-enabled slots) but real ad revenue only starts flowing once an advertiser's targeting matches the show — **UNKNOWN** how long that takes in practice for a specific show. For the host-read marketplace, the 20,000-download gate is the real bottleneck, not the paperwork; once past it, the process is advertiser-order-driven (no fixed timeline published) rather than a scheduled onboarding.

*Sources: [Libsyn Ads Podcast Advertising Ultimate Guide](https://advertising.libsyn.com/podcast-advertising-ultimate-guide), [Frequently Asked Questions for Podcasters](https://advertising.libsyn.com/podcast-advertising-faq-for-podcaster), [Automatic Podcast Ads FAQ](https://libsyn.com/blog/automatic-podcast-ads-faq-10-common-questions-answered-about-earning-with-programmatic-ads/), [No Minimums: Libsyn Expands Access To Automatic Ads](https://www.podcastnewsdaily.com/news/no-minimums-libsyn-expands-access-to-automatic-ads/article_c7117b63-f088-45c1-b6a0-aeda0c35d885.html), [Enroll in Automatic Ads – Libsyn 5](https://five.libsynsupport.com/hc/en-us/articles/16230235384731-Enroll-in-Automatic-Ads), and this project's own `BUSINESS_DEVELOPMENT_SYSTEM.md` (§ Libsyn CPM citation, already in WAG's docs pre-dating this pass).*

### LOL Podcast's real Libsyn listing (independently re-verified this pass)

Fetched directly from Libsyn's own live advertiser-facing listing at `advertising.libsyn.com/TheLOLPodcast` — this both confirms Katie's cited figures and adds detail:

- **500,000 downloads per episode**, **50,000 impressions/week**, **80% of reach from YouTube simulcast** — **VERIFIED**, matches the figures Katie found.
- **Audience:** 65% female / 35% male (**VERIFIED**, matches); age 12-17 = 36%, 18-24 = 26% → **62% ages 12-24, VERIFIED**, matches exactly; median age 26; median household income $119K; 64% US / 10% UK / 4% Canada.
- **Hosting: Megaphone, IAB-Certified.** Distribution: iTunes, YouTube, Spotify Video. Publishes 2-3x/week, 20 min-1hr episodes — a genuinely comparable cadence/format to WAG Podcast's own weekly schedule.
- **Advertisers shown on the live listing today:** Babbel, Acorns, Kikoff, BetterHelp, Liquid IV. This **partially** overlaps Katie's cited list (Acorns and BetterHelp both confirm directly) but does not currently show Lume, Cash App, Shopify, Xbox/PC Game Pass, Tinder, or Abercrombie — those may be prior campaigns, in-episode-only integrations not listed on the current sales page, or the listing has simply rotated since Katie's own research. Treat Katie's fuller list as **VERIFIED via episode evidence** (her stated source) and this pass's five-brand list as **VERIFIED via the current Libsyn sales listing** — two real, slightly different, non-contradictory snapshots of the same account.
- **Application process for advertisers** (not publishers) is a simple contact form — no rate card is published, consistent with the general industry pattern noted elsewhere in WAG's own docs (`BUSINESS_DEVELOPMENT_SYSTEM.md` notes Whalar/Viral Nation/Obviously also don't publish rate cards).

---

## 2. Does WAG Podcast currently qualify for Libsyn Ads or a comparable represented-sales arrangement?

**Short answer: not for any threshold-gated track (Libsyn's host-read marketplace, Acast/Gumball's host-read marketplaces, Sounder's direct program) — WAG has no confirmed download/reach number that would clear any of them, and the honest reason is partly that the number itself hasn't been measured yet, not only that it's provably too small. WAG likely does already qualify for Libsyn's Automatic (programmatic) Ads track and Podcorn's affiliate marketplace, both of which have no minimum.**

### What WAG's own docs actually show (checked this pass, not fabricated)

- **No podcast-specific download or reach number exists anywhere in WAG's docs.** `WAG_SPOTIFY_APPLE_CAPABILITY_MATRIX.md` confirms neither Spotify nor Apple offers programmatic analytics access, and `CEO_COCKPIT.md`'s own Spotify section states plainly: **"TBD — no real data gathered yet... Spotify listener/follower numbers have not been pulled at any point tracked in this project's documentation."** This is a real, standing gap, not an oversight of this research pass.
- **What does exist is YouTube data for `@WAGPodcast`**, per `CEO_COCKPIT.md` (live pull, 2026-08-08): 3,161 subscribers (+3.1K in 365 days), 3.8M+ lifetime views, 16.0K total watch hours in the trailing 365 days, channel-average CTR 2.6%, new-viewer CTR 1.7%. Per this task's instruction, this is used below **explicitly as a labeled proxy only** — it is YouTube view data, not podcast downloads, and download-network gates (Libsyn's 20,000/episode/30-days, Sounder's 100,000/month) are measured in downloads/streams, a different metric entirely.
- **A rough, labeled proxy calculation, not a substitute for real data:** 3.8M lifetime views ÷ 33 published episodes (as of Aug 2026) ≈ **~115,000 average lifetime YouTube views per episode — INFERRED, order-of-magnitude only.** This number should not be read as "WAG episodes get 115K downloads." It conflates (a) YouTube views with downloads/listens, a different unit ad networks don't accept interchangeably; (b) lifetime cumulative views with the 30-day new-episode velocity Libsyn's gate actually measures; and (c) an average that is very likely skewed upward by a small number of older or breakout episodes rather than representing current per-episode performance. **The honest position is UNKNOWN, not "probably close to qualifying."**
- **WAG Podcast's current hosting platform could not be confirmed this pass.** The website links out to `open.spotify.com/show/3tl7szlcJ5eFDqS7cbw6Kb` and `podcasts.apple.com/.../id1856707489` (confirmed in `src/layouts/BaseLayout.astro`, `Footer.astro`, `PlatformBar.astro`), but those are distribution destinations, not the underlying RSS host — a show can reach both via Libsyn, Buzzsprout, Spotify for Podcasters, Captivate, or a dozen others, and the public links don't disclose which. A public search for "WAG Podcast" RSS/hosting returns unrelated same-named shows, so this could not be resolved by search either. **UNKNOWN — flagged as a real gap; this is a one-question check for Katie** ("who do we currently host the podcast RSS feed with?") that this research could not answer from available tools.
- **No sponsor CRM, no ad-sales activity, and no published sponsor pricing exist yet** (confirmed in `CEO_COCKPIT.md` and `WAG_REVENUE_PARTNERSHIPS_FOUNDATION.md`) — WAG's revenue motion today is direct 1:1 brand outreach (see `BUSINESS_DEVELOPMENT_SYSTEM.md`'s Bombas draft, which itself already flags "direct, or through a network like Midroll" as an open question), not represented ad-network sales.

### Verdict

WAG Podcast does **not** currently qualify for:
- Libsyn's host-read marketplace (20,000 downloads/episode/30 days) — **no evidence WAG is within an order of magnitude of this**, though the true number is genuinely unmeasured.
- Acast's or Gumball's host-read marketplaces (same 20,000/episode floor).
- Sounder's direct sponsorship track (100,000 downloads/streams per month).

WAG Podcast likely **does** already clear, or come close to clearing:
- Libsyn's Automatic (programmatic) Ads — no minimum, open today.
- Podcorn's affiliate marketplace — no minimum, open today.
- Spotify's Partner Program's *new*, lowered 2026 thresholds (1,000 engaged audience members / 2,000 consumption hours in 30 days / 3 published episodes — see §3) — plausible WAG clears this on episode count alone (33 published), but the audience/hours thresholds are unmeasured for the same reason as above.

---

## 3. Would Megaphone make sense for WAG — now, later, or not at all?

**Verdict: not now, and the strongest argument for it later has substantially weakened as of January 2026 — leaning toward "not needed at WAG's current or near-term scale even later."**

- **What Megaphone actually is:** an enterprise podcast hosting + ad-ops platform, owned by Spotify (acquired for $235M in 2020). **VERIFIED** — pricing starts around $99/month for a "Professional" tier, scaling to custom enterprise pricing; **VERIFIED** — it's explicitly positioned for "podcasters, publishers, and networks with high download volumes (20,000+ plays per episode)," i.e., built for a scale WAG isn't at.
- **What Megaphone provides that a smaller host doesn't:** dynamic ad insertion at scale, real-time ad stitching, a campaign-management toolkit, and critically, **VERIFIED — being hosted on Megaphone was, until January 2026, the sole way to be eligible for the Spotify Audience Network** (Spotify's own programmatic marketplace), per Megaphone's own support docs: *"In order to have your podcast considered for the Spotify Audience Network, the podcast needs to be hosted on the Megaphone platform."*
- **The finding that changes the calculus:** **VERIFIED** — on January 7, 2026, Spotify opened its separate, distinct **Spotify Partner Program** (direct-to-creator monetization, not the same product as the Spotify Audience Network above) to creators hosted on **Acast, Audioboom, Libsyn, Omny, and Podigee** via API, without requiring a move to Megaphone. Spotify simultaneously lowered the Partner Program's eligibility thresholds from 2,000 to **1,000 engaged monthly audience members**, 10,000 to **2,000 consumption hours**, and 12 to **3 published episodes**. Libsyn's own CEO is quoted framing this directly as removing the reason to switch: *"partnering with Spotify gives Libsyn creators more flexibility, more reach, and more ways to grow — without changing how they work."*
- **What this means for WAG specifically:** if WAG's actual podcast host turns out to already be Libsyn (or Acast/Audioboom/Omny/Podigee) — genuinely **UNKNOWN**, per §2 above — WAG may already have a real, low-friction path into Spotify's creator-monetization ecosystem without ever touching Megaphone. If WAG's host is something else entirely (Spotify for Podcasters/Anchor, Buzzsprout, etc.), the practical question becomes "does that host also get Spotify API access," not "should WAG move to Megaphone" — a materially different, cheaper decision.
- **The real cost of switching to Megaphone specifically:** enterprise-tier pricing (likely well above the $99/month floor once ad-ops support is included, **UNKNOWN exact figure — not publicly disclosed, quote-based**) for infrastructure sized for 20,000+ plays/episode, when WAG's own confirmed numbers (3,161 YouTube subscribers, no confirmed audio download count) are a fraction of that. **VERIFIED** — switching hosts generally preserves subscribers via 301 RSS-feed redirects (a solved, low-risk technical problem industry-wide), so *if* a move ever made sense, technical migration risk isn't the blocker — cost and scale-mismatch are.

**Recommendation embedded in this section: Megaphone is not a "later" item on WAG's current roadmap either, unless WAG's audio reach grows by roughly an order of magnitude AND WAG wants direct-sold enterprise ad ops specifically (as opposed to programmatic/affiliate monetization, which doesn't require Megaphone at all).**

---

## 4. Minimum thresholds across Libsyn Ads and comparable networks

| Network | Minimum to access represented/marketplace sales | Minimum to access programmatic/self-serve | Source status |
|---|---|---|---|
| **Libsyn Ads — host-read marketplace** | **VERIFIED** — 20,000 downloads/new episode within 30 days; 10+ episodes published | **VERIFIED** — Automatic Ads: no minimum | `advertising.libsyn.com`, `podcastnewsdaily.com` |
| **Megaphone / Spotify Audience Network** | **VERIFIED** — must be hosted on Megaphone (a structural gate, not a numeric one); practical target market is 20,000+ plays/episode per Megaphone's own positioning | No separate self-serve minimum publicly disclosed for SAN itself — **UNKNOWN** | `support.megaphone.fm`, Megaphone marketing pages |
| **Spotify Partner Program** (distinct product, direct-to-creator, API-accessible via Libsyn/Acast/Audioboom/Omny/Podigee without Megaphone) | **VERIFIED** — 1,000 engaged audience members + 2,000 consumption hours (both trailing 30 days) + 3 published episodes, lowered from 2,000/10,000/12 on 2026-01-07 | Same — this program has no separate self-serve tier | `digitalmusicnews.com`, `thewrap.com`, `ppc.land`, Spotify's own creator support docs |
| **Acast** | **VERIFIED** — host-read marketplace: 20,000 downloads/episode, 70/30 split; broader ad-marketplace access at 1,000-2,000 monthly listeners depending on source | **VERIFIED** — Automatic ads: open to any size, 50-60% share | `learn.acast.com`, `podderapp.com`, `thepodcastconsultant.com` — note: sources gave both "2,000 monthly listeners" and "1,000+ monthly listeners" as the marketplace-access floor; treat as **~1,000-2,000, not a single precise number** |
| **AdLarge Media (AdLarge Podcast Network)** | **UNKNOWN** — AdLarge's own site (`adlarge.com/adlarge-podcast-network`, directly fetched this pass) states it partners with 150+ shows and offers enterprise hosting/full ad-ops support, but publishes no minimum download/audience figure or commission rate anywhere on the public page. This is a genuine "call us" gate, not a hidden-but-findable number. | N/A — full-service network, no self-serve programmatic tier found | `adlarge.com` (directly fetched) |
| **Sounder** | **VERIFIED** — 100,000 downloads/streams per month for direct sponsorship discussion; a lower tier exists via Sounder's DAX partnership at 25,000+ monthly streams | Not applicable — Sounder positions itself at the higher end, not a self-serve small-show tool | `support.sounder.fm`, Sounder's own Medium posts |
| **Podcorn** | **VERIFIED** — no minimum; explicitly positioned as the accessible option for shows under 1,000 downloads | Same — it's a self-serve, no-minimum affiliate marketplace by design | Multiple secondary sources converging (Buzzsprout, Castos, MillionPodcasts) on the same "no minimum" claim |
| **Gumball** | **VERIFIED** — 20,000 downloads/episode | N/A — direct host-read buying tool, no programmatic self-serve tier found | `gumball.fm` (help docs), secondary aggregator confirmation |

**Reading across this table:** WAG's real options today cluster at the bottom (Podcorn, Libsyn Automatic Ads, potentially the newly-opened Spotify Partner Program if episode count alone is the binding constraint). Everything requiring a genuine ad-sales rep pushing host-read deals to name-brand advertisers (Libsyn's marketplace, Acast's marketplace, Gumball, Sounder) sits at 20,000-100,000 downloads/episode or /month — a real, confirmed gap from WAG's current, unmeasured-but-clearly-smaller audio reach.

---

## 5. Can WAG get professional ad-sales representation before reaching LOL's scale?

**Yes, partially — but "representation" means different things at different tiers, and it's worth being precise about which kind WAG can actually access now.**

- **Available now, no threshold:** Podcorn (10% commission, performance/affiliate-based, self-serve rather than a rep actively selling on WAG's behalf) and Libsyn Automatic Ads (programmatic, no human sales relationship, lower CPMs). Neither is "representation" in the sense of a salesperson pitching WAG to Acorns/BetterHelp-tier advertisers — both are self-serve monetization tools WAG could enable today if the podcast is hosted somewhere Libsyn/Podcorn can attach to.
- **Real human ad-sales representation (a rep actively selling WAG's inventory to advertisers) is gated by download/reach numbers across every network checked this pass** — this is a structural fact of the industry, not something specific to WAG. Reps are compensated on commission; below a certain reach, the commission on a deal doesn't cover a rep's time to sell it. This is exactly why Libsyn, Acast, Gumball, and Sounder all gate their higher-touch tiers behind 20,000-100,000 download minimums.
- **What would concretely move WAG toward attractiveness to a rep, in priority order:**
  1. **Close the measurement gap first.** WAG cannot credibly apply anywhere reach-gated without a real download/listen number — and right now, per §2, that number doesn't exist for WAG Podcast on any audio platform. This is a data problem before it's a growth problem. `WAG_SPOTIFY_APPLE_CAPABILITY_MATRIX.md` already has the answer for how to get it (Spotify for Creators' CSV export, a real confirmed capability) — it just hasn't been pulled yet, per `CEO_COCKPIT.md`'s own honest TBD.
  2. **Confirm the actual hosting platform** (the §2/§3 UNKNOWN) — this alone determines whether WAG already has a low-friction path into Spotify's Partner Program without any network relationship at all.
  3. **Grow real audio reach**, not just YouTube reach — LOL Podcast's own listing shows 80% of its reach is YouTube-simulcast-driven, meaning even a show WAG's size on pure audio downloads can still clear ad-network minimums once its YouTube audience is counted the way LOL's is (assuming WAG's own audio/download tracking exists to demonstrate that split, which per §2 it currently doesn't).
  4. **Once a real number exists**, Libsyn's Automatic Ads (no minimum, already running) is a legitimate way to build a real revenue/reach track record that a future host-read marketplace application (Libsyn's own, or Acast's) can point to — this is the standard "prove it on the self-serve tier first" path most small-to-mid shows actually take, rather than applying cold to a marketplace with a hard download gate.
- **A near-term, non-network alternative already on WAG's own radar:** `BUSINESS_DEVELOPMENT_SYSTEM.md`'s existing Bombas outreach draft already asks "direct, or through a network like Midroll" — Midroll (SiriusXM's podcast network) is a comparable rep option not separately re-researched this pass since it wasn't in the requested list, but it's worth noting WAG has already independently identified the same category of solution.

---

## 6. Commission/revenue-split rates across these arrangements

| Arrangement | Podcaster's real share | Source status |
|---|---|---|
| Libsyn — host-read marketplace | **VERIFIED** — 70% (30% fee to Libsyn) |`advertising.libsyn.com` FAQ |
| Libsyn — Automatic (programmatic) Ads | **VERIFIED** — 50-60%, scaling with monthly download volume | Libsyn's own Automatic Ads FAQ |
| Acast — host-read marketplace | **VERIFIED** — 70/30, same structure as Libsyn's | `learn.acast.com` |
| Acast — automatic ads | **VERIFIED** — 50-60%, volume-scaled | Same |
| Acast — overall/blended commission cited elsewhere | **UNVERIFIED/CONFLICTING** — one secondary source states a flat "50% commission on ad revenue" without specifying which tier; treat the tier-specific 70/30 and 50-60% figures above as more reliable since they trace to Acast's own help center | `podderapp.com` (secondary, lower confidence) |
| Podcorn | **VERIFIED** — 10% platform commission; affiliate sponsors typically pay $15-30 per conversion (performance-based, not CPM) | Multiple converging secondary sources |
| Gumball | **VERIFIED** — 20% commission on a CPM buying model | `gumball.fm`, secondary confirmation |
| Megaphone | **N/A as a "commission"** — Megaphone charges a flat/tiered hosting-platform fee (from ~$99/month), not a revenue-share cut on ad sales the way a rep marketplace does; separately, ads sold via the Spotify Audience Network through Megaphone carry their own take rate, which is **UNKNOWN — not publicly disclosed** | Megaphone marketing/pricing pages |
| AdLarge Media | **UNKNOWN** — not publicly disclosed anywhere on AdLarge's own site; quote-based | `adlarge.com` (directly fetched, confirmed absent) |
| Sounder | **UNKNOWN** — not publicly disclosed; Sounder's public materials describe eligibility (100,000 downloads/month) but not a specific revenue split | `support.sounder.fm` |
| Spotify Partner Program (direct, distinct from SAN/Megaphone) | **VERIFIED** — described as "a 50% share of ad revenue" plus variable Premium-engagement-based payouts; **UNKNOWN** exactly how the two components combine into a single effective rate | `thewrap.com`, `hollywoodreporter.com` coverage of the 2026-01-07 update |

**Pattern across the table:** direct-sold/host-read arrangements consistently land near 70/30 in the podcaster's favor industry-wide (Libsyn and Acast both, independently); programmatic/automated tiers consistently land in the 50-60% range; affiliate/performance models (Podcorn) take a much smaller cut (10%) because the network isn't doing active sales work, just facilitating a match. Full-service/enterprise networks (AdLarge, Megaphone's own SAN take rate, Sounder) don't publish rates at all — this is standard for the enterprise-sales end of the industry, not a WAG-specific gap, and mirrors the same non-disclosure pattern `BUSINESS_DEVELOPMENT_SYSTEM.md` already found for large creator agencies (Whalar, Viral Nation, Obviously).

---

## Final recommendation

**Do not pursue Libsyn Ads' host-read marketplace, Megaphone, Acast's marketplace, Gumball, or Sounder right now — WAG Podcast does not clear any of their published thresholds, and applying wouldn't change that.** This isn't a close call: every reach-gated network checked this pass sits at 20,000-100,000 downloads/episode-or-month, and WAG has no confirmed audio download number at all, let alone one in that range.

**The actual next action isn't a network application — it's closing a measurement gap that already has a known, cheap fix.** Three concrete, low-cost steps, in order:

1. **Ask Katie directly which platform currently hosts the WAG Podcast RSS feed.** This single fact (UNKNOWN throughout this research) determines whether WAG already has a no-cost path into Spotify's newly-opened Partner Program (if hosted on Libsyn, Acast, Audioboom, Omny, or Podigee) without any further action at all.
2. **Pull a real Spotify for Creators CSV export** (a capability already confirmed real and documented in `WAG_SPOTIFY_APPLE_CAPABILITY_MATRIX.md`, just never executed per `CEO_COCKPIT.md`'s own honest gap) to get WAG Podcast's first real download/listener number. Until this exists, every future ad-representation conversation is guessing.
3. **Enable Libsyn's Automatic (programmatic) Ads and/or Podcorn now** — both are open today with no minimum, cost nothing to try, and would start building both real revenue and a real track record simultaneously with step 2. This is the one recommendation in this document that's an actual action rather than a data-gathering step, and it's low-risk precisely because there's no threshold to fail.

**Everything else in this research — Megaphone, Libsyn's marketplace, Acast, Gumball, Sounder, AdLarge — is correctly a later question, not a now question, and "later" is defined by real audio-reach numbers WAG doesn't have yet, not by a calendar date.** The comparison to LOL Podcast is useful as a scale reference (500K downloads/episode, 80% YouTube-driven, IAB-certified Megaphone hosting) but WAG is not currently in the same conversation on audio reach specifically — its real, evidenced strength is YouTube (3,161 subscribers, 3.8M+ lifetime views), which is a genuinely different growth lever than podcast-ad-network representation and shouldn't be conflated with it just because LOL Podcast's own reach happens to be mostly YouTube-driven too.

---

*Sources consulted this pass: `advertising.libsyn.com` (Ultimate Guide, Podcaster FAQ, TheLOLPodcast listing — all directly fetched), `libsyn.com` blog (Automatic Ads FAQ, Getting Started), `five.libsynsupport.com` (Enroll in Automatic Ads), `podcastnewsdaily.com` (No Minimums coverage), `support.megaphone.fm` (Spotify Audience Network Submission Process — directly fetched), `learn.acast.com`, `gumball.fm`, `support.sounder.fm`, `adlarge.com` (directly fetched), `digitalmusicnews.com` / `thewrap.com` / `hollywoodreporter.com` / `ppc.land` (Spotify Partner Program 2026-01-07 update coverage), plus this repo's own `CEO_COCKPIT.md`, `WAG_SPOTIFY_APPLE_CAPABILITY_MATRIX.md`, `WAG_PODCAST_DEPARTMENT_ARCHITECTURE.md`, `WAG_PODCAST_GROWTH_EXTENSION.md`, `BUSINESS_DEVELOPMENT_SYSTEM.md`, and `WAG_REVENUE_PARTNERSHIPS_FOUNDATION.md`. WAG Brain (Supabase) was not queried — inaccessible this pass, see the limitation noted at the top of this document.*
