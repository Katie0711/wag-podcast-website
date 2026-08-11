# WAG Main Intelligence Loop v1

**One executive question this module answers: can WAG OS, using WAG's own real data, make a materially better creative decision than gut instinct alone — and can it show its work?**

**Status: v1, 2026-08-11. Real methodology + one real end-to-end test, run against actual WAG Main first-party data (50 ingested videos, real retention curves, real traffic sources) and an actual pending idea from `video_ideas`.** This is deliberately narrow — four specialists and one Greenlight pass, not five more departments — per Katie's instruction to prove the loop before expanding it. WAG Podcast gets its own version of this once this one demonstrates real judgment, built on Podcast-specific evidence, not copied logic.

---

## The four functions

### 1. Retention Intelligence

**Evidence used:** `yt_raw_observations` rows tagged `youtube_analytics_api_retention` (the real 100-point curve, `elapsedVideoTimeRatio` × `audienceWatchRatio` × `relativeRetentionPerformance`), `youtube_analytics_api` core metrics (`averageViewPercentage`, `averageViewDuration`, `estimatedMinutesWatched`), and comparable-video baselines drawn from other ingested WAG Main videos of similar format/duration.

**What it can honestly answer today:** where retention drops or spikes relative to comparable WAG videos, at what point in the video (as a ratio of runtime — converted to an approximate timestamp using `duration_seconds`), and whether a video is over- or under-performing its own channel's baseline at each point.

**What it cannot honestly answer yet, and must say so rather than guess:** *why* a spike or drop happened. There is no transcript or story-beat log ingested yet — `relativeRetentionPerformance` tells you *when* something worked, not *what* it was. Until a transcript/story-beat pipeline exists, Retention Intelligence flags timestamps for human review rather than inventing a causal story.

### 2. Packaging Intelligence

**Evidence used:** titles and thumbnails already ingested (`yt_videos.title`, YouTube's own thumbnail), `insightTrafficSourceType` breakdown (how much of a video's views came from Search/Suggested/Browse/Playlist vs. Channel/Subscriber — a real signal of whether packaging is earning algorithmic distribution or only converting existing audience), and WAG's own `title_formulas`/`formats` tables from the existing Greenlight schema.

**Explicit limitation, stated per Katie's instruction rather than papered over:** thumbnail impressions and click-through rate — the two most direct packaging-strength signals — are not yet ingested (they require the YouTube Reporting API, deliberately deferred). **Until that exists, Packaging Intelligence cannot measure whether a thumbnail/title actually earned clicks relative to how often it was shown — it can only measure downstream effects (which traffic sources converted) and must not be treated as a substitute for real CTR data.**

### 3. Format / Topic Intelligence

**Evidence used:** `creator_content_type` segmentation (Shorts/VOD/Live/Story — now real per video), `content_era`/`video_cohorts` (so pre-pivot content never silently blends into current-strategy baselines), cross-referenced against views/retention/subscriber-conversion for videos sharing a format or subject.

**What it answers:** which formats are actually producing views, Suggested/Browse distribution, retention, and subscriber conversion *for the current, post-pivot channel* — not the whole channel's history.

### 4. Greenlight Manager v3

**Upgrade from v2:** the manager's job is to **reconcile disagreement, not average it away**. When Format Intelligence, Packaging Intelligence, and Retention Intelligence produce different verdicts on the same idea, v3 states the tension explicitly, weighs it against the *quality* of each specialist's evidence (not just the verdict itself), and returns one of **MAKE / TEST / HOLD / KILL** with a stated confidence level and an explicit list of what remains unknown.

---

## Real end-to-end test: Video Idea #6

**Working title:** "We Got Locked In Our Garage for 24 Hours (No Phones)"
**From `video_ideas` (real row, id=6):** `engine_bet = SUGGESTED`, `production_difficulty = Low`, `confidence_tier = OBSERVED_PATTERN`, `status = hypothesis` (not yet decided), `evidence_summary = "Real partial WAG proof point via the adjacent 'Handcuffed to My Sister' video."`

### Step 0 — a real evidence-quality problem, found immediately

The idea's own existing evidence summary cites "Handcuffed to My Sister" as its proof point. **That video is not in WAG Main's ingested post-pivot catalog** (confirmed against all 50 real videos currently in `yt_videos` for channel_id=1) — it's pre-pivot prior art referenced in `WAG_FORMULA_V1_ROADMAP.md`, with no retention curve, traffic-source, or content-type data available for it in WAG Brain. **The idea's stated confidence tier (`OBSERVED_PATTERN`) is currently resting on a video WAG OS cannot actually evidence with first-party data.** This alone is a real finding, not a formality — it means the idea walks into evaluation with weaker real support than its own record claims.

The real, available comparable is a **post-pivot constraint/challenge-format video**: id=26, *"Surviving 24 Hours of Embarrassing Challenges at VidCon!"* (1322s / 22:02, published 2026-07-19) — same mechanism family (endurance/confinement-adjacent challenge, real-time constraint), real retention and traffic data available.

### Retention Intelligence's finding

Comparing video 26 (closest real comp) against video 33, *"Flying to LA for the Craziest Weekend Ever!"* (the channel's real strongest performer in the sample — 20,328 views, 81,041 estimated minutes watched, `averageViewPercentage` 23.4% vs. video 26's 16.95%):

- **Both videos lose the majority of viewers in the first ~90 seconds** (elapsedVideoTimeRatio 0.01→0.09) — a real, repeating WAG Main pattern across long-form content, not specific to either video.
- **Video 26's opening actually holds slightly better than the channel's top performer** in the first 2% of runtime (63.4% vs. 55.4% absolute watch ratio at the ~2% mark) — a real, positive signal for the confinement/challenge hook specifically.
- **But video 26 underperforms comparable videos in the 5-minute range**: `relativeRetentionPerformance` bottoms at 0.225 around the 22-24% mark (~5 min in), while video 33 is *above* its own comparable baseline (0.53-0.54) at the equivalent relative point. Something in the middle-opening stretch of the 24-hour-challenge format is losing viewers relative to what similar videos on other channels achieve there.
- **Both videos show a real mid-video recovery spike** relative to comparable videos — video 33 peaks at 0.668 around the 47% mark (~8 min in); video 26 peaks lower, at 0.510, around the 31-32% mark (~7 min in). The recovery is real in both cases but weaker in the challenge-format video.
- **Video 26 has a second real late-video spike** video 33 doesn't show as clearly: `relativeRetentionPerformance` climbs from 0.286 to 0.470 between the 77-85% marks (roughly 17-19 minutes in) — a real "second wind," worth understanding once transcript data exists, but not explainable from curve data alone.

**Retention Intelligence's stated conclusion:** the confinement/challenge format has a real, evidenced hook problem in the first 5 minutes relative to genre norms, and a real, evidenced strength in sustaining a mid-video and late-video recovery once it gets past that opening stretch. **What's unknown:** what specifically happens on-screen at the ~5-minute mark that's losing viewers, and what happens at ~7 and ~17-19 minutes that's recovering them — this requires a transcript/story-beat log Retention Intelligence does not have.

### Packaging Intelligence's finding

- Video 26's traffic sources: `YT_CHANNEL` 3810, `RELATED_VIDEO` (Suggested) 3377, `SUBSCRIBER` 1317, `PLAYLIST` 1058.
- Video 33's traffic sources: `RELATED_VIDEO` 6780, `PLAYLIST` 5810, `YT_CHANNEL` 5351, `SUBSCRIBER` 1150.
- **Real, material difference:** video 33 earned roughly **2x** the Suggested (`RELATED_VIDEO`) traffic and **5.5x** the playlist traffic of video 26, in both absolute and proportional terms. Video 26 leaned relatively more on direct channel-page traffic — the audience WAG already has, not new discovery.

**Packaging Intelligence's stated conclusion:** the confinement/challenge format, at least in this one real instance, is not earning the same algorithmic push as the channel's top performer. **Explicit limitation restated:** without thumbnail impressions/CTR, Packaging Intelligence cannot say whether this is a *packaging* problem (weak thumbnail/title) or a *content* problem (the algorithm serving it less because retention is weaker, per Retention Intelligence's finding above) — these are genuinely entangled without the missing data, and Packaging Intelligence should not claim to have separated them.

### Format/Topic Intelligence's finding

- `creatorContentType` confirms both comparable videos are `videoOnDemand` (long-form), correctly segmented from the sample's many Shorts and Live streams — a real, clean comparison, not an apples-to-oranges one.
- Both comparables are `post_pivot_teen` era — the idea can be evaluated against genuinely current-strategy evidence, not distorted by older content.
- The channel has exactly **one** real prior example of this specific mechanism (endurance/confinement challenge) in the post-pivot ingested sample. **This is a real, important limitation to state plainly: n=1.** Format Intelligence has a directional signal, not a validated pattern. The idea's own `confidence_tier` of `OBSERVED_PATTERN` is arguably still fair *if* re-grounded in this real comparable rather than the unavailable pre-pivot one — but it should not be inflated to `STRONG_EVIDENCE` on a single data point.

### Where the specialists genuinely disagree

- **Format Intelligence** sees real production-difficulty ease (`Low`, per the idea's own record) and a real, if thin (n=1), positive signal that confinement/challenge content can perform on this channel.
- **Retention Intelligence** sees a real, specific weakness in the format's ability to hold viewers through the early-middle stretch relative to genre norms — the exact stretch a 24-hour-format video needs to survive to justify its own length.
- **Packaging Intelligence** cannot rule in or out whether the format's lower Suggested traffic is a packaging failure or a downstream consequence of the retention weakness — and flags that this ambiguity is real, not a gap to paper over.

### Greenlight Manager v3's verdict

**Recommendation: TEST, not MAKE, not KILL.**

**Reasoning, reconciling rather than averaging:** the production-ease and single positive comparable are real reasons not to KILL this — WAG has evidence the mechanism can work, and the cost of finding out is low. But Retention Intelligence's finding is specific and real enough that MAKE-as-is would be ignoring a known, evidenced weakness in exactly the part of the video (the first 5 minutes) that determines whether the format's length is earned. Packaging Intelligence's inability to separate cause from effect means this isn't a packaging fix — it's a structural pacing question for the shoot itself.

**Concrete, specific changes before filming (not generic advice):**
1. Compress or restructure whatever occupies the 5-8 minute mark in a 24-hour-format edit — video 26's data shows this is where comparable videos are losing the audience this format needs to survive.
2. Front-load a real stake or escalation into the first 90 seconds, since **both** real comparables lose the majority of viewers there regardless of hook quality — this is a channel-wide pattern this idea should not assume it's exempt from.
3. Build toward whatever produced video 26's late spike (77-85% mark) deliberately rather than accidentally — Retention Intelligence flags it as real and repeatable-worthy, but can't yet say what it was; review the actual footage/edit of video 26 at that timestamp before filming, since that's a real, human-reviewable step available right now without new data infrastructure.

**Confidence justified:** MODERATE. Grounded in one real, correctly-segmented comparable video with genuine retention and traffic evidence — better than the idea's original citation (an unevidenced pre-pivot video), but still n=1 for this specific mechanism.

**What remains unknown:** the actual on-screen cause of the 5-minute dip and both recovery spikes (needs transcript/story-beat review); whether Packaging or content is driving the lower Suggested traffic (needs Reporting API thumbnail/CTR data); whether this pattern holds across more than one confinement/challenge video (needs a second real data point).

---

## What this proves

Not that the loop is finished — that it can take a real, already-logged idea, pull real first-party evidence instead of assuming, find a real problem in that idea's own evidence chain (the unavailable pre-pivot citation), produce genuine disagreement grounded in actual numbers rather than manufactured tension, and land on a specific, evidenced recommendation with stated confidence and stated unknowns — exactly the standard Katie set, not generic advice.

## Next, per Katie's sequencing

Adapt this same evaluation architecture to WAG Podcast once this loop is judged useful — with its own GM/specialists and Podcast-specific evidence (per `WAG_PODCAST_DEPARTMENT_ARCHITECTURE.md`), not copied WAG Main logic. Then the next highest-ROI build decision — Revenue & Partnerships vs. Executive Chief-of-Staff vs. WAG Podcast intelligence vs. Reporting API ingestion — compared on real business impact, dependencies, and effort, not ease of coding.
