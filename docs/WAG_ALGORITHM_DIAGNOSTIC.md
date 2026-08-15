# WAG Algorithm Diagnostic: Why Isn't WAG Being Pushed to Millions?

**Real question Katie asked directly (2026-08-10):** WAG Main sits at ~1.2M subscribers with a real 28-day baseline of 4.4M views — below its own typical range (5.03M-6.62M). Why isn't YouTube pushing it to large, non-subscribed audiences, and what do we actually do about it?

**Method:** researched YouTube's own official documentation and on-record staff statements (not creator-community folklore) for what the recommendation system actually optimizes for, then reasoned through ranked hypotheses using WAG's own real, already-known signals. No CTR, impressions, or traffic-source data was available this pass — every hypothesis below names the exact Studio pull that would confirm or kill it.

---

## What YouTube officially confirms (not folklore)

| Signal | Status | Source |
|---|---|---|
| Impressions CTR, read in context of traffic surface | Confirmed, named | YouTube Help |
| Average view duration + retention curve *shape* (not just the average) | Confirmed, named | YouTube Help / Studio docs |
| "Valued watch time" (survey-weighted, not raw watch time) | Confirmed | Cristos Goodrow, YouTube VP Engineering, 2021 |
| Session/cross-video watch time is a real optimization target | Confirmed conceptually | Neal Mohan, 2018 (70% of watch time comes from recommendations) |
| Recommendations do NOT use the subscriber/social graph | Confirmed | YouTube Help |
| Each video is judged on its own merits — no channel-level "penalty box" | Confirmed | Todd Beaupré, YouTube Sr. Director of Growth & Discovery |
| Video length, monetization status, one weak video: none of these hurt ranking | Confirmed non-factors | YouTube Help |
| "Pick one niche or you're capped" | **Not officially confirmed** — real softer signal (topic/format affinity) inflated into a myth | Folklore |
| Strict upload-cadence consistency as a ranking input | **Not officially confirmed** — official framing is audience trust, not algorithm | Folklore |

**The real mechanism that matters most for this diagnostic:** YouTube's own model is "pull, not push" (Beaupré's words) — the system continuously tests each video against a pool of non-subscribed viewers; there's no standing channel-level boost a past hit earns and keeps. That reframes the whole question: it's not "why doesn't YouTube like us," it's "what does the data say about how our videos perform with cold, non-subscribed viewers, specifically."

---

## Ranked hypotheses (none confirmed — each names its own test)

### 1. CORRECTED 2026-08-10 with real Studio pulls — hypothesis 1 was wrong on its central claim; the real picture is mechanism-mismatch, not "no halo effect"

**Real traffic-source data pulled directly from Studio for 3 videos:**

| Video | Views | Top traffic source | 2nd source | Avg. % viewed | 0:30 retention |
|---|---|---|---|---|---|
| "EVERY WORST Rated Restaurant" (winner) | 460.9K (267.9K *more* than usual) | **Suggested videos 75.9%** | Browse features 18.1% | 13.8% | 57% (typical) |
| "24 Hours...Haunted Hotel" (winner) | 171.4K (about typical) | **YouTube search 46.5%** | Channel pages 27.9% | 25.2% | 71% (above typical) |
| "EVERY Viral TikTok Product" (flop) | 1.7K (7.9K *less* than usual) | Suggested videos 45.0% | **Channel pages 40.0%** | 24.7% | 54% (typical) |

**This overturns the original hypothesis 1 and sharpens the real cause.** The winner *did* get a massive Suggested-videos push (75.9%) — there's no evidence hits aren't reaching cold audiences. What the data actually shows: **WAG has two real, distinct, already-proven growth engines, and the flop triggered neither.** The Restaurant video is Suggested/Browse-driven (the algorithm actively tested it against cold non-subscribed viewers and it won). The Haunted Hotel video is Search-driven (real, existing search demand for "haunted hotel"-type queries pulled viewers in directly). The flop's traffic was 40% Channel pages — mostly people already on WAG's own channel, not the algorithm reaching new audiences, and not real search demand either. Notably, the flop's retention numbers (24.7% avg. viewed, 54% at 0:30) are *not* meaningfully worse than the winners' — retention is not what's gating this video. **Exposure is.**

**Corrected fix:** future concepts should be evaluated against which of the two proven engines they can plausibly trigger — a real, searchable topic (Search engine, like Haunted Hotel) or a packaging/hook strong enough to win cold Suggested testing (Browse engine, like the Restaurant video) — rather than assuming "do the winning format again" alone. A concept with neither a real search hook nor unusually strong packaging is the same trap the flop fell into.

### 2. Cold-traffic CTR by traffic source — PARTIALLY CLOSED 2026-08-10
The above 3-video pull is a real start on this (previously flagged as the single highest-leverage unpulled data point). **Still open:** per-video CTR specifically (Studio's Reach tab, not pulled this pass), and the same traffic-source breakdown across more of the last 15 uploads to confirm the 2-engine pattern holds beyond 3 videos.
**Fix — do this next:** Studio Analytics → Reach tab → CTR by traffic source for the same and additional videos, to see whether CTR (not just source mix) also splits along the same Suggested-vs-Search-vs-neither lines.

### 3. Format inconsistency within the pivot itself — CONFIDENCE: MEDIUM
Only 3 videos have ever run the proven Verification Chassis; the Real-Stakes Commitment lane is unpiloted; a third lane is deliberately unnamed. YouTube's system rewards predictable co-watch pairing ("finished A, will finish B") — a catalog still finding its format gives it less to build that pairing from. The TikTok Product flops sitting right next to the TikTok Food hit is real evidence that execution/format matters more than the broad "testing" umbrella alone.
**Fix:** deliberately increase repetitions of the one proven format before diversifying further.

### 4. Pivot-era topic inconsistency (horse era vs. teen-entertainment catalog) — CONFIDENCE: LOW-MEDIUM
Real and structural, but per the official record this is the *weakest-sourced* item on the list — no official hard-cap statement exists, only a softer "channel expertise" signal among many inputs.
**Fix:** don't spend effort reorganizing the catalog yet. Revisit only if #2's data shows current impressions still associating WAG with horse-adjacent search terms.

### 5. Thumbnail lesson not applied catalog-wide — CONFIDENCE: LOW (no CTR data yet), but cheap to fix regardless
WAG's real top 3 performers use genuine unrestrained reactions (see `WAG_CREATIVE_FORMULA_V1.md` Question 6's correction). If that lesson hasn't been retrofitted across the rest of the catalog, average CTR on CTR-sensitive Browse/Suggested surfaces is plausibly being dragged down — untested, but directionally reasonable and low-risk to act on.
**Fix:** retrofit thumbnails on the most-recently-active 20-30 videos first, since those are the ones still eligible for renewed algorithmic testing.

### 6. Upload cadence — CONFIDENCE: LOW as a ranking cause
YouTube's own Growth team explicitly pushed back on cadence as a ranking penalty. This stays a hypothesis only because cadence data hasn't been pulled, not because the mechanism is plausible.
**Fix:** keep cadence stable for subscriber trust only — don't spend production resources "fixing" it as an algorithm lever.

### 7. Weak view-to-subscriber conversion (0.15%, unbenchmarked) — CONFIDENCE: INSUFFICIENT EVIDENCE
No benchmark exists yet for whether this is actually low for WAG's size/niche.
**Fix:** pull Studio's historical conversion trend against WAG's own pre-pivot baseline before treating this as a cause.

---

## What to actually do next, in order

1. **Pull Studio Analytics: CTR + average view duration by traffic source** (Browse/Suggested vs. Subscriptions/notifications) for the last 15 uploads. This is the single official-sourced diagnostic that separates "isolated hits" from "identity/format inconsistency" — do this before anything else.
2. **Pull impressions-over-time** for the 5-10 uploads immediately following the restaurant and haunted-hotel hits, to test directly whether those hits produced any halo effect.
3. **Schedule the next 3 uploads as direct repeats** of the proven Verification Chassis + unrestrained-reaction-thumbnail formula — repeat what's proven before diversifying again.
4. **Plan and produce the first real Real-Stakes Commitment pilot** (see `WAG_FORMULA_V1_ROADMAP.md` for named concepts) — a real production plan, not an improvisation.
5. **Retrofit thumbnails** on the most recently active 20-30 videos to the unrestrained-reaction style.
6. **Leave upload cadence alone** as a growth lever — it's officially not a ranking factor.
7. **Hold off on catalog reorganization** (unfeaturing pre-pivot content, etc.) until step 1's data actually confirms topic-mixing is suppressing current impressions — this is the lowest-confidence hypothesis on the list.

*Update this doc once the Studio CTR/traffic-source pull happens — that single data pull should resolve hypotheses 1-4 from "reasoned hypothesis" to "confirmed or ruled out."*
