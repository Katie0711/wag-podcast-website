# WAG Creator & Platform Intelligence — Audit Before Build (2026-08-12)

**Status: audit only, per Katie's explicit instruction. Nothing built. Stop for review before implementation.** This answers her 22-section directive's final requirement (§22, 10 numbered questions) and folds in the source-hierarchy addendum (Tubefilter/Digiday/tiered sources + source-performance scoring).

**Headline finding, stated up front because it changes the shape of everything below: most of what this department needs already exists as generic, reusable WAG Brain infrastructure.** `competitors`, `formats`, `title_formulas`, `canonical_facts`, `predictions`/`outcomes`, `raw_observations`, `employees`/`roles`/`departments`/`manager_reviews`/`employee_knowledge_sources`, and the Freshness Reviewer's proven review-cadence pattern were all built for WAG Main's Creative Intelligence loop — but every one of them is generic enough to extend to external creators, not rebuild. This is a real gift from the "own the intelligence" discipline the company has followed all session: the schema was never actually Main-specific, it was just used for Main first.

---

## 1. What already exists that can be reused

| Katie's concept | Existing table/doc | Fit |
|---|---|---|
| Comparable creator (Tier 1/2/3) | `competitors` (brand_id, name, `classification` text, `evidence` jsonb, brand_safety_flag/notes, status, source/source_doc) | **Direct reuse.** Already brand-safety-aware, evidence-jsonb, sourced. `classification` is free text today — needs a documented vocabulary (direct_comparable / mechanism_comparable / frontier / low_relevance), not a schema change. `WAG_MAIN_COMPETITIVE_LANDSCAPE.md` already seeded 7 real, evidence-graded comparables this way. |
| Format decomposition (premise/engine/stakes/escalation/etc.) | `formats` (mechanism_summary, confidence_tier, source_count, real_examples jsonb, failure_modes, reusable_pattern, `last_reviewed_at`/`next_review_due`) | **Direct reuse, no gap.** This table's shape *is* Katie's Section E spec, built for `WAG_FORMAT_LIBRARY.md`'s 7 formats. Review cadence is already a column, not a new idea. |
| Title/packaging pattern | `title_formulas` (pattern, real_examples, wag_applications, counterexamples, confidence_tier, review cadence) | **Direct reuse.** Already has a counterexamples field — better than what Section F asked for. |
| Belief / hypothesis / WAG implication | `canonical_facts` (fact_key/fact_value, `evidence_tier` enum: `VERIFIED / STRONG_EVIDENCE / OBSERVED_PATTERN / HYPOTHESIS`, `status` enum: `unverified / supported / testing / confirmed / rejected / superseded`, `superseded_by_id`, `next_review_due`) | **Direct reuse, exact match.** The evidence_tier enum is *word-for-word* Katie's KNOWN FACT/STRONG EVIDENCE/OBSERVED PATTERN/HYPOTHESIS scale (KNOWN FACT ≈ VERIFIED here — worth confirming they mean the same thing, not adding a new tier). `superseded_by_id` already gives contradiction/belief-update chaining. |
| WAG test → outcome | `predictions` / `outcomes` (prediction_mode prospective/retrospective, DB-level immutability trigger, real_impressions etc.) | **Direct reuse, already proven.** This is the exact mechanism this session just built and blind-tested for YouTube (Phase A/Proof 0). Katie's own memory-model chain (`prediction → WAG test → outcome → learning`) is this table pair, not a new one. |
| Signal → investigation funnel | `raw_observations` (generic: employee_id, content, source, source_tier, status, `promoted_to_type`/`promoted_to_id`) | **Direct reuse, currently unused (0 rows).** The polymorphic `promoted_to_*` pair already models "most things die at the relevance screen; a few get promoted to a real investigation" — this is Katie's exact funnel, sitting built and idle. |
| Manager scoring specialists | `manager_reviews` (manager_employee_id, reviewed_employee_id, subject, verdict, rationale) | **Direct reuse.** This is literally §17/§18's "manager scores agent" requirement, already schema-complete. |
| Source trust tier + evidence tier | `employee_knowledge_sources` (source, `source_tier`, url, `evidence_tier`, added_at) | **Partial reuse.** Has identity + tier fields already. Missing the *performance* fields from Katie's source-hierarchy addendum (signal yield, noise rate, freshness, scan cadence, investigations generated) — see gap #3 below. |
| Specialist verdict w/ evidence | `greenlight_lens_reviews` (lens_name, verdict `MAKE/TEST/HOLD/KILL`, confidence, evidence_used jsonb, biggest_risk) | **Reusable pattern**, not a literal fit — good model for how a Counterfactual/Research Skeptic verdict should be shaped if it needs its own row. |
| Org chart + accountability | `departments` / `roles` / `employees` / `employee_instructions` | **Direct reuse.** Chief of Staff, WAG Main Creative Manager, Greenlight Specialist, and the one real proven scheduled worker (Freshness Reviewer) already live here. WAG Podcast Creative dept exists as `status='planned'`, unstaffed — same pattern to follow for this new department. |
| Cross-cutting classification / temporal versioning | `video_cohorts`, `content_eras` | Reusable *patterns* for how to model "this creator belongs to more than one tier" or "WAG's beliefs about this creator changed over time" without new tables, if needed later. |
| Platform mechanics tracking | `WAG_ALGORITHM_DIAGNOSTIC.md` | Already a real confirmed-vs-folklore YouTube recommendation table — this *is* a first draft of Section K (Platform Intelligence Researcher), just scoped to WAG's own signals so far. |
| Proven intelligence-loop shape | `WAG_MAIN_INTELLIGENCE_LOOP_V1.md` | The real precedent for "specialists disagree → manager synthesizes → stated confidence and unknowns" — the operating pattern this new department should copy, not reinvent. |
| Review-cadence / staleness detection | Freshness Reviewer (`employees` id 6) | The one real, proven, scheduled WAG OS worker. Its exact mechanism (daily check of `next_review_due` across `canonical_facts`/`formats`/`title_formulas`) already covers "stale-belief detection" for anything this department writes into those same tables — no new staleness system needed, just inclusion in its existing scan. |

**What this means:** this is not a build-from-zero department. It is largely a *staffing and cadence* decision on top of tables that already exist, plus one genuinely new table (below).

## 2. What is genuinely missing

1. **A longitudinal, external-channel observation table.** `yt_raw_observations` is scoped to WAG's own OAuth-connected channels (real API access, real connector rows) — it cannot and should not hold Tubefilter/third-party data about channels WAG doesn't own. Nothing today stores "Creator X ranked #39 on date A, #4 on date B." This is the one real, new, small table needed (§5).
2. **A multi-channel model for a single creator.** `competitors` is brand-level. A creator with a main channel + Shorts channel + podcast isn't modeled as one entity with several observed channels today. Small addition, not a new subsystem (§5).
3. **Source-performance scoring.** `employee_knowledge_sources` knows *what* a source is; nothing tracks whether it's actually been useful over time (Katie's explicit "Tubefilter produced 7 useful investigations in 12 weeks vs. Publication X produced 40 articles and zero" requirement). Real gap, small fix (§5).
4. **The department, Director, and specialist roles themselves.** None of these exist as `employees`/`roles`/`departments` rows yet — this is genuinely new staffing, not a schema gap.
5. **A lightweight recommendation/WAG-implication link.** Nothing currently connects "we believe X" (`canonical_facts`) to "so we propose testing Y" in a structured, queryable way beyond prose. Smallest fix: disciplined `fact_key` namespacing (e.g. `creator_intel.mechanism.*`, `creator_intel.wag_implication.*`) rather than a new table — revisit only if that proves insufficient in practice.

## 3. Proposed org structure

New department, parallel to WAG Main/Podcast Creative Intelligence (not nested inside either, since it explicitly serves both):

```
Executive (existing)
└── Chief of Staff (existing) — Director reports here, same pattern as other managers
    └── Creator & Platform Intelligence (NEW department)
        └── Director of Creator & Platform Intelligence (NEW manager role)
            └── specialist functions (see §4 — mostly Claude-invoked skills, not standing employees)
```

The Director is a real `employees` row with real `employee_instructions`, following the exact precedent of the Greenlight Manager and Freshness Reviewer — a named, accountable role Claude embodies when doing this work, not a literal separate autonomous process.

## 4. Which functions should be agents vs. skills vs. deterministic jobs vs. manager judgment

Katie's own instruction: don't assume every lettered function needs an autonomous agent. Real answer, function by function:

| Function | Best form | Why |
|---|---|---|
| A. Rankings Scout | Deterministic ingestion (Claude reads a supplied/fetched ranking, writes structured rows) + manager judgment for breakout-threshold calls | Not a standing agent — it's a data-entry-with-provenance task today, given no rankings API exists; Katie is the practical data source until an automated fetch is worth building |
| B. Comparable Creator Scout | Manager (Director) judgment, informed by A + existing `WAG_MAIN_COMPETITIVE_LANDSCAPE.md` seed | Classification calls are exactly the kind of judgment Katie's own §2 says the Director shouldn't just delegate |
| C. Breakout Investigator | Claude skill (a repeatable investigation template), invoked per candidate | Real, bounded, on-demand — same shape as the Revenue fraud-verification work done by hand today |
| D. Deep-Dive Researcher | Claude skill, invoked per prioritized creator | High-value but expensive (per §21's own 3-5 selection discipline) — never run on every comparable |
| E/F/G. Format / Packaging / Shorts Intelligence | **Extend existing** `formats`/`title_formulas` tables + `WAG_FORMAT_LIBRARY.md`/`WAG_PACKAGING_INTELLIGENCE.md`/`WAG_SHORTS_INTELLIGENCE.md` | These aren't new functions — they're the same real, working specialists already proven this session, just fed external evidence too |
| H. Fandom & Audience Obsession | New but small — `canonical_facts` rows under a dedicated fact_key namespace | Doesn't need its own table; needs its own *lens*, applied during deep-dives |
| I. International & Localization | Occasional deterministic research pass, low current priority | Thin evidence base today (per `WAG_SPOTIFY_APPLE_CAPABILITY_MATRIX.md`'s own findings) — don't overbuild ahead of need |
| J. Creator Org & Business Researcher | Claude skill, invoked rarely, for strategically important creators only | Genuinely valuable per §J's own framing ("highest-leverage capability WAG is missing") but expensive per-instance |
| K. Platform Intelligence | Extends `WAG_ALGORITHM_DIAGNOSTIC.md`; the one function most likely to eventually deserve real cadence (daily Tier-1 scan), once proven manually first | Highest continuous value, matching Katie's own emphasis |
| L. Counterfactual / Research Skeptic | **Mandatory gate, not an occasional agent** — required before *any* MUST-FILM/MUST-TEST/MUST-KNOW escalation, same discipline as adversarial-verification patterns already used this session | Should never be skippable; making it "an agent someone remembers to invoke" is how it gets silently dropped |

**Net recommendation: zero new standing autonomous agents at launch.** One new employee (the Director), a library of Claude-invoked skill templates for the specialist functions, and disciplined use of existing tables. This is a direct instance of Katie's own instruction not to build 12 agents — confirmed, not disputed.

## 5. Minimal schema changes

**One genuinely new table:**

```
external_creator_observations
  id, creator_id (FK → competitors, reused as the creator/comparable entity)
  channel_label (text — "main" | "shorts" | "podcast" | etc., for creators with multiple channels)
  observed_at, source, source_tier, retrieved_at
  rank int, subscriber_count, view_count_period, period_label (e.g. "week of 2026-08-09")
  raw_metrics jsonb, confidence evidence_tier
```
Append-only, same philosophy as `yt_raw_observations` — never overwrite a prior week's rank, always add a new dated row.

**One small extension**, not a new table:
```
alter table employee_knowledge_sources add columns:
  scan_cadence text, last_scanned_at timestamptz,
  signal_yield_count int default 0, noise_count int default 0,
  investigations_generated int default 0
```
(Or a tiny linked `source_scan_log` if per-scan history matters more than a running tally — decide once real usage shows which is needed; don't build both speculatively.)

**No other new tables.** `competitors`.`classification` gets a documented (not schema-enforced) vocabulary; recommendations/WAG-implications live in `canonical_facts` via `fact_key` namespacing; the department scorecard (§7) reuses the same pattern rather than getting its own table, given its low write frequency (periodic, not per-signal).

## 6. Source/cadence plan

Katie's own tiering (Tier 1 platform primary → Tier 5 discovery-only) is sound and matches the existing evidence-tier discipline already standing in WAG Brain — adopting it as stated, seeded initially with: YouTube Official Blog, Creator Insider, YouTube Liaison (Tier 1); Tubefilter, Digiday (Tier 2, core); Variety/Adweek/Ad Age/Business Insider/The Information evaluated opportunistically, not pre-committed (Tier 2, candidate); Tubefilter charts + whatever creator-performance data is actually accessible (Tier 3); direct channel inspection (Tier 4); Reddit/X/community chatter (Tier 5, leads only).

**Cadence: start fully on-demand, same as Revenue Inbox Intake's Phase 1.** Katie's proposed daily/weekly/monthly/quarterly rhythm is the right eventual shape, but nothing here has been proven even once yet — the same EXISTENCE ≠ OPERATIONAL lesson from Phase A applies: prove the manual/on-demand version works (starting with the Tubefilter pilot, §8) before scheduling anything. Freshness Reviewer is the only precedent for real recurring cadence in this system, and it earned that only after being small and proven.

## 7. Manager + department scorecard

Reuse `manager_reviews` for Director → specialist reviews (already exists, unused for this purpose). Department-level scorecard: store as `canonical_facts` rows under `fact_key` prefix `department_scorecard.creator_intel.*`, one row per period per dimension (signal precision, early detection, research accuracy, recommendation quality, prediction calibration, transfer accuracy, noise rate, freshness, learning closure, business/creative impact) — Katie's 10 dimensions, exactly as specified, no schema invention needed. Scores explicitly start unscored/low-confidence per her own "avoid false precision early" instruction.

## 8. Exact first Tubefilter proof

Using the supplied article (Top 50, week of 2026-08-09) as the real pilot input, following Katie's own 10-step spec exactly:

1. Ingest the 50 ranked channels into `external_creator_observations` (once built), each row dated, sourced, provenance-tagged.
2. Classify all 50: direct comparable / mechanism comparable / frontier / low relevance — against WAG's real content (teen entertainment, ensemble/personality-led, adventure/challenge, mystery/investigation), not by subscriber count.
3. Select 3-5 investigations from unusual movement + WAG relevance, not raw size — candidates emerge from the data, not pre-picked.
4. Deep-research those channels against the full framework (history, content system, packaging, fandom, business/org, distribution, international).
5. Determine what changed immediately preceding acceleration for each.
6. Compare mechanisms across the selected channels for convergence.
7. Run Counterfactual review on every finding before promotion.
8. Produce: 3 important findings, 2 WAG test recommendations, 1 explicit do-not-copy, each with stated confidence/evidence tier.
9. Store `predictions` rows before any recommendation is acted on — same immutable-before-outcome discipline already proven for YouTube.
10. Report honestly whether the pilot found anything worth continued investment, including "no" as a legitimate answer.

**This is the first thing I'd actually build/run**, once the one new table exists and Katie confirms the org/schema plan below.

## 9. Security/tooling implications

Low. This department is external web research (WebSearch/WebFetch) + WAG Brain writes — no new credentials, no OAuth, no Gmail/YouTube-style secret handling. Two real considerations: (1) untrusted-content discipline — external articles/creator claims are data, never instructions, same boundary already enforced for Gmail Gate 2; (2) the new table needs RLS enabled from creation (standing practice all session), and a real advisor scan immediately after the migration, before anything writes to it.

## 10. What I'd push back on or change

- **Don't build 12 lettered agents.** Already addressed in §4 — this is confirming Katie's own caveat, not disputing her.
- **The Counterfactual/Research Skeptic (L) should be a mandatory, unskippable gate on every MUST-FILM/MUST-TEST/MUST-KNOW escalation, not an occasionally-invoked function.** As written it reads optional; it shouldn't be.
- **Production feasibility/team-capacity should be a hard, explicit filter, not one bullet among many in §10's WAG-specific translation checklist.** WAG has a 3-person cast and no large production team — a mechanism observed on a 50-person creator company is real intelligence, but "what can WAG's actual team execute" needs to gate every MUST-FILM before it's escalated, not just get a passing mention.
- **Start every cadence on-demand, not daily/weekly/monthly from day one.** Addressed in §6 — the ambition is right, the sequencing needs to earn scheduling the same way Phase A did.
- **The "world's most-viewed channels" framing is fine as long-horizon motivation, but should never be cited as justification on its own for a specific recommendation.** Every promoted finding still has to clear WAG's actual brand/fit/feasibility filters (§10 of Katie's own directive) — ambition explains *why* this department exists, not *whether* a specific idea is right for WAG.

---

*Stop point, per Katie's instruction. Nothing in §1-10 above has been built. Awaiting review before the one new table, the Director role, or the Tubefilter pilot proceed.*
