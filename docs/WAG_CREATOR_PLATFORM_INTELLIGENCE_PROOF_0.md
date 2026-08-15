# Creator & Platform Intelligence — Proof 0

**Status: PROOF COMPLETE. STOP POINT per Katie's explicit instruction — no recurring monitoring, additional employees, or department expansion until she reviews this.**

Real data. Real primary-source research (4 parallel agents, ~30 tool calls each). One real data-integrity error introduced and caught mid-proof. This doc is the honest record — including the parts that didn't go as expected.

---

## 1. Starting signal

Tubefilter, "Top 50 Most Viewed YouTube Channels Worldwide, Week of 08/09/2026" (published 2026-08-10, real URL, real article, ingested with full provenance). All 50 rows are in `external_creator_observations` with the corrected schema (see §5).

## 2. Mechanical screening

Used Tubefilter's own reported week-over-week change, not subjective picking. Screened for unusual movement (rank delta relative to prior rank), not raw size — several channels changed hands in rank #1–3 without qualifying as interesting; several channels far down the list showed the largest relative jumps.

## 3. Four investigations selected (not five — see reasoning)

| Investigation | Why selected |
|---|---|
| **Cadel and Mia** | #20→#1, the single largest rank jump to the very top |
| **Jasmin and James + "More Jasmin and James"** | Two channels from one creator pair breaking out simultaneously (#39→#4 and #201→#10) |
| **Sierra and Rhia English + Sierra & Rhia FAM** | Two channels from one creator pair *both* showing rank drops the same week — selected as the negative-evidence case |
| **merryclestari** | Tubefilter's own editorial commentary pointed to a non-content cause — selected as the Skeptic/Counterfactual test case |

A fifth, unrelated pick was deliberately skipped: two of the four investigations turned out to share a real mechanism (duo-format Shorts channels), and testing them against each other produced more value than a fifth isolated data point would have.

## 4. What each investigation found

### Cadel and Mia
Australian Shorts duo (~28.7M subs, created Jan 2025). Real per-day view data (Social Blade) pins the spike to **Aug 3–8, 2026**, peaking Aug 8, decaying back toward baseline by Aug 10–11 — a sharp, short-lived spike layered on an already-large base, not a step-change. Upload cadence (25–49 videos/day) was already stable for months before the spike — posting more did NOT precede the breakout, it was already the baseline. **Real negative evidence found**: Rylen and Chloe, a channel Cadel and Mia's own videos credit as the original source of a dance trend they remixed, posted at the same-or-higher cadence in the same genre and showed no comparable spike that week. Lifecycle: **Accelerating, with an acute-spike caveat** — a few more weeks of data would be needed to know if this is a new plateau or reverts.

### Jasmin and James + "More Jasmin and James"
Real people (Jasmin Arndt, James Ewens), German/Australian couple-vlog channel, ~4 years old, now high-volume Shorts (~32/day). The secondary channel is an official, explicitly cross-promoted compilation channel, not a passive backup. Real volatility: the flagship channel was at **rank #50 (dead last on the chart) two weeks before** hitting #4 — this is not a startup story, it's an established, mature channel having one exceptional week. **The genuinely new thing this surfaced**: both Jasmin/James and Cadel/Mia used to co-run a joint third channel, "Double Date," which **dissolved around February 2026** — independently confirmed by both research agents. They're real peers in the same niche. Lifecycle: **Established, showing early saturation signals** (multiple mega-scale entrants in the same sub-niche, a collab format already tried and retired, high week-to-week variance).

### Sierra and Rhia — the correction
**This is not a decline case. The department's own verification caught a real error in this proof's own data.** The original ingestion (from an automated web-fetch summarization pass over the Tubefilter table) recorded both channels as declining -67%/-60%. Direct re-verification against three consecutive weeks of raw Tubefilter data shows both channels' **absolute weekly views actually rose 67% and 60%** — they only lost *rank* because the surrounding competitive field had an unusually hot week (five other channels crossed a billion weekly views). Corrected in the database with full provenance on the correction itself. No child-safety, controversy, or format-decay explanation was found because there was nothing to explain.

### merryclestari — the counterfactual case
Real Indonesian Shorts creator (candy/food content). Tubefilter's commentary about "the law" checks out: Indonesia's Regulation No. 9 of 2026, an under-16 social-media account ban covering YouTube and TikTok, effective March 28, 2026 — independently verified across Jakarta Post, Jakarta Globe, JURIST, The Diplomat, and others (not a single-source claim). TikTok enforced far harder (4.1M accounts removed) than YouTube (600K, plus a government reprimand for laxity), and YouTube structurally allows logged-out viewing, a documented enforcement gap, alongside a confirmed post-ban VPN surge. This plausibly explains displaced youth attention shifting toward YouTube. No evidence of any format/content change on her part around the spike. **Correctly classified by the research agent as not a transferable content lesson.**

## 5. Schema correction (per Katie's explicit review requirement)

`external_creator_observations` was checked against Katie's full concept checklist before being relied on. Six genuine gaps were found and closed with an additive `ALTER TABLE` (no data loss — table had 0 rows): `ranking_list_name`, `source_reference`, `observation_type`, `geography_scope`, `content_mode`, `metric_period`, `lifecycle_stage`. `prior_rank`/`growth` remain deliberately unstored — derived via `LAG()` window functions, confirmed against Katie's exact test query ("which creators accelerated in the last 90 days, and what preceded it").

## 6. Source hierarchy — updated to Katie's 6-tier version

WAG's own causal/observed evidence → primary creator/platform evidence → high-quality independent reporting → strong comparable creator evidence → expert/industry interpretation → discovery/trend chatter. Recorded against the Director employee's `employee_knowledge_sources`, with the explicit non-mechanical caveat (evidence strength/sample size/recency/causal quality still matter — WAG n=1 does not automatically outrank strong outside evidence) recorded as a standing `canonical_facts` rule.

## 7. WAG-history collision check

Queried `canonical_facts`/`predictions`/`outcomes` for prior WAG evidence on: secondary/multi-channel strategy, Shorts trend-participation dynamics, rank-vs-performance conflation. **No collision found** — these are genuinely new findings, not something WAG already tried or knew, confirmed rather than assumed.

## 8. Findings (≤3, as instructed)

**F1 — Same-genre Shorts channels can spike in sync, and it isn't explained by either channel's own recent strategy.** Cadel and Mia and Jasmin and James spiked the same week, at comparable relative magnitude, with no format/cadence/cast change in the 30–180 days prior on either side — both had stable, already-established approaches for months. Best-supported explanation: a shared trending audio/challenge or Shorts-recirculation event common to the genre that week, not a strategic move either channel made. Confidence: STRONG_EVIDENCE (cross-referenced across 2 independent research passes).
*Lifecycle: the couple/duo Shorts sub-niche reads as Established/early-Saturated.*
*WAG ADVANTAGE: Potential — not directly actionable given WAG's production model, but relevant to how WAG should read its own Shorts data (see Test 2).*
*URGENCY: THIS QUARTER.*

**F2 — A secondary/compilation channel is not, by itself, a proven growth driver.** Cadel and Mia (explicitly single-channel, "ONLY account" per their own description) matched Jasmin and James's breakout scale (flagship + official secondary channel) in the same week — a real, unprompted control the research surfaced on its own, not one I went looking for. Directly relevant because WAG already runs two channels (Main + Podcast). Confidence: STRONG_EVIDENCE.
*WAG ADVANTAGE: No — this is a caution against over-crediting WAG's own two-channel structure, not a mechanism to adopt.*
*URGENCY: THIS QUARTER (informs how WAG interprets its own multi-channel data, not urgent on its own).*

**F3 — Rank movement is not the same as performance, and it's a real risk sitting in this exact department's own workflow.** Verified directly on Sierra and Rhia: real views rose 60–67% while rank fell, because the field was unusually hot, not because they declined. This also caught and corrected a real sign error in this proof's own first-pass data ingestion. Confidence: VERIFIED (re-derived directly from raw source data, not inference).
*WAG ADVANTAGE: Yes — WAG's own Packaging/Greenlight systems are exactly where this same mistake could recur.*
*URGENCY: NOW.*

## 9. Tests (2, not manufactured to hit a quota)

**Test 1 — EXECUTABLE NOW.** Adopt F3 as a standing rule inside WAG's own Packaging Intelligence / Video Greenlight reads: verify absolute metrics before treating any rank, leaderboard position, or relative-comparison signal as a performance judgment. Recorded as `canonical_facts` (`rank_movement_is_not_absolute_performance`). This is a process/documentation change, not a production experiment — no `predictions` row applies since it isn't a video idea.

**Test 2 — CHEAP-BOUNDED TEST.** Re-analyze WAG's own already-collected Shorts Intelligence data specifically for trend/audio-driven spike behavior (not just the two already-documented steady formats). Motivated by F1. Uses data WAG already has; no new capture. Logged to `raw_observations` (status: unreviewed) as a candidate for the department's next round, not started.

*No forced third test.* This round's evidence supports real process value and real caution, not a specific new WAG video idea — reported honestly rather than manufacturing a filmable premise the evidence doesn't actually support.

## 10. Do not copy (1)

**Do not treat a single week's rank jump as evidence of a winning content mechanism without checking for external/regulatory explanations first.** merryclestari's case is the concrete example: a real, verified country-level regulatory event (not content quality) is the best-supported explanation. Generalizes to: verify the external-conditions layer before crediting any chart spike to packaging or format.

## 11. Department self-evaluation (Katie's required honest checklist)

**Did this discover something not already known?** Yes, concretely: (a) F2's control case (no-secondary-channel breakout matching a with-secondary-channel breakout) is a genuine, unprompted finding that would have been easy to miss reading the raw chart alone; (b) the Double Date connection between two of the four investigated creators emerged independently from two separate research agents, not from a leading prompt; (c) F3 — the department caught its own real data error mid-proof, which is itself evidence the verification discipline works, not just a claim that it would.

**Was anything actionable?** Test 1 is immediately actionable (a process rule, zero cost). Test 2 is cheap and bounded. Neither F1 nor F2 produced a filmable video idea this round — reported honestly rather than padded.

**What was noise?** The original "Sierra and Rhia declining" framing was itself noise generated by this proof's own tooling, not by Tubefilter. Real lesson for Proof 1: a single AI-summarized web-fetch pass over a numeric table is not sufficient provenance for a claim that becomes the basis of a "negative evidence" investigation — it should have been sanity-checked against the raw source before an agent was dispatched on the premise. This did not block the proof (the agent's own primary-source verification caught it), but it wasted one investigation slot on a false premise.

**Which sources produced signal?** Tubefilter (INDEPENDENT tier): real, correctly attributed, correctly time-bound — but its raw table required direct re-verification, not a first-pass AI summary, to trust. Social Blade (INDEPENDENT tier): valuable for day-by-day granularity Tubefilter's weekly snapshot can't provide — this is exactly the "data tells us WHAT, researcher investigates WHY" role from the source hierarchy, working as designed. Direct primary-source browsing (channel pages, descriptions): high-value, caught real facts (the secondary channel's own cross-promotion copy, the "ONLY account" disclaimer) that no secondary source reported.

**Which specialist functions actually contributed?** Breakout Investigator + Pre-Breakout Reconstruction (mandatory, per Katie's addendum) — did real work in all 4 cases. Counterfactual/Skeptic — real work in the merryclestari and Sierra/Rhia cases specifically; less load-bearing in Cadel/Mia and Jasmin/James, where the negative evidence (Rylen and Chloe) was found opportunistically by the same research pass rather than a dedicated second pass. **This suggests Breakout Investigation and Counterfactual review can run as one combined research pass for cases like this, not necessarily two separate specialist calls** — a real, evidence-based input to the "12 functions ≠ 12 agents" question Katie already flagged.

**Which proposed functions weren't needed this round?** Format/Packaging/Shorts/Fandom/International Intelligence, Global Rankings Scout, Comparable Creator Scout — none were separately invoked; the 4 investigations were selected directly from the ingested Tubefilter data. Consistent with the audit's original recommendation not to staff these as standing agents yet.

**What failed?** The data-ingestion step (see "what was noise" above) — a real, named failure, not glossed over.

**What should change before Proof 1?** (1) Sanity-check any AI-summarized numeric extraction against the raw source before it becomes an investigation premise. (2) Consider merging Breakout Investigation and Counterfactual review into one research pass rather than two, based on this round's actual workload pattern.

**Did Proof 0 justify recurring monitoring?** Not yet, honestly. One week of one list, with a real caught error in the first pass, is not yet a demonstrated *routine* practice — the same distinction Katie drew for Revenue Inbox Intake. What it does justify: a Proof 1 using a second week of real data, specifically to test whether the ingestion-verification fix holds up and whether F1/F2-type findings replicate or were one-off.

## 12. §64 maturity, honestly per component

| Component | Maturity | Why |
|---|---|---|
| `external_creator_observations` (corrected schema) | **BUILT + TESTED** | Real schema, real 50-row ingestion, real corrected data — not yet OPERATING since this is one proof run, not routine practice |
| Source hierarchy + `employee_knowledge_sources` seeding | **BUILT + CONNECTED** | Real rows, not yet exercised repeatedly enough to call OPERATING |
| Pre-breakout reconstruction methodology | **TESTED + VERIFIED** | Ran for real on 4 cases; outputs were independently checked against primary sources by the same agents that produced them, and one produced a self-caught correction — meets both bars in §64's literal definition |
| Counterfactual/negative-evidence discipline | **TESTED** | Real negative evidence found (Rylen and Chloe) and a real false-premise caught (Sierra and Rhia) — not yet VERIFIED as a standing gate since it ran inside the same research pass rather than as an independent second check this round |
| Director employee (staffing) | **BUILT** | Real `employees` row, used to attribute this proof's sources and facts — not yet TESTED as an ongoing management function (no second employee to manage yet, per Katie's Proof-0-staffing-is-enough instruction) |
| Recurring monitoring / "Proof 1" cadence | **DESIGNED only** | Not run — correctly, per the explicit stop instruction below |
| Audience Intelligence / Digital Growth departments | **NAMED only** | Recorded in `WAG_FUTURE_DEPARTMENTS_AUDIENCE_AND_DIGITAL_GROWTH.md`, not touched this proof |

Nothing here is inflated because a human filled a gap by hand — every BUILT/TESTED/VERIFIED claim above traces to a real row, a real query, or a real agent transcript, not prose reasoning substituting for infrastructure.

---

## 13. Addendum (2026-08-12, after Katie's review): the ingestion-integrity gate

Katie's verdict on Proof 0: **accepted as a successful research-*process* proof, not yet as proof of creative/business impact.** Named as real, earned continuation: independent relationship discovery, counterfactual reasoning, external-event detection, willingness to return UNKNOWN/no-filmable-recommendation, correction of contradictory source evidence, WAG-specific translation. Named as the real failure: **ingestion integrity** — the Sierra/Rhia sign inversion happened because an LLM summarization pass was the sole, authoritative extraction mechanism for a deterministic field (a table of ranks/views/percentages). Her instruction: fix this specific, bounded gap before Proof 1 — do not build a general ETL platform.

### What actually broke

The original Tubefilter ingestion used `WebFetch`, which runs the fetched HTML through a small LLM with an extraction prompt. That LLM restated Tubefilter's table as markdown and, for at least the Sierra and Rhia rows, inverted the reported sign — a real, demonstrated failure mode of using natural-language summarization as the authoritative path for numbers that should be extracted mechanically.

### The gate (bounded — applies specifically to structured/numeric ranking-table ingestion, not a general framework)

1. **Fetch raw text, not an LLM paraphrase.** For any source with a real tabular structure (rankings, leaderboards, metric tables), retrieve the page via a non-summarizing path (e.g. the Browser tool's direct text extraction) rather than `WebFetch`'s prompt-based summarization. `WebFetch`-style LLM extraction remains fine for qualitative/editorial commentary, which is not deterministic and is exactly where LLM synthesis is appropriate — it was never the source of this error.
2. **Parse deterministically.** Rank, views, percentages, and dates get pulled via a structured parse (regex/table-cell extraction) against the literal fetched text, not an LLM's restatement of it.
3. **Preserve the raw evidence.** Every row now carries `raw_source_extract` — the literal, unprocessed source text the numeric fields came from — so any derived number is auditable against what the source actually printed, permanently.
4. **Validate before eligibility.** New columns on `external_creator_observations`: `ingestion_method` (`mechanical_parse` / `agent_verified_against_raw_source` / `llm_assisted` / `manual`), `ingestion_validated` (boolean), `validation_notes`. **A row with `ingestion_validated = false` is not eligible for promotion to an expensive investigation.** `llm_assisted` rows are explicitly flagged as non-authoritative for their numeric fields until independently re-verified — this is the direct, structural fix for what happened to Sierra and Rhia.
5. **Honest backfill, not silent absolution.** The Proof 0 batch (48 of 50 rows) is now marked `ingestion_method='llm_assisted', ingestion_validated=false` with a note naming the confirmed error in the same batch. The 2 corrected Sierra/Rhia rows are marked `agent_verified_against_raw_source, ingestion_validated=true` — an agent computing a percentage itself from two raw absolute numbers it directly read is arithmetic on verified inputs, not summarization, and is treated as validated.

### Permanent rule, reinforced

**RANK MOVEMENT ≠ ABSOLUTE PERFORMANCE.** Already recorded as a `canonical_facts` row (`rank_movement_is_not_absolute_performance`); reinforced structurally here — the schema keeps rank and view/metric-change as fully independent fields, and no future ingestion step should collapse them into a single "up/down" label. This is the same discipline the gate above enforces at the point of ingestion, not just at the point of interpretation.

---

*Per Katie's explicit closing instruction: STOP here. No recurring monitoring, no additional employees, no department expansion until she reviews this proof.*
