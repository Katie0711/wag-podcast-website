# WAG OS — Phase 0 Build Proposal

**Status: proposal for approval. No Phase 1 implementation has begun.** Per the Master Build Directive's explicit instruction: this stops here and waits for review before any substantial building continues.

---

## 1-4. AUDIT — what already exists, real state as of 2026-08-10

### What already exists and is reusable

**A real, working, portable database already exists.** Not proposed — built and populated this session: Supabase project `wag-brain` (id `qccfbbgaszciqxfryehs`), plain Postgres, RLS-secured (locked down after I found it was publicly readable by default — fixed). 9 tables live with real data, not placeholders:

| Table | Real rows | What it holds |
|---|---|---|
| `brands` | 3 | WAG_MAIN / WAG_PODCAST / COMPANY — the hard separation boundary |
| `canonical_facts` | 9 | Cast ages/relationships, real Studio baseline, the two-engine (Search/Suggested) finding, real AI-referral traffic finding |
| `formats` | 7 | Full Format Library, brand-scoped to WAG_MAIN |
| `title_formulas` | 5 | Title Formula Library categories |
| `competitors` | 7 | WAG Main's competitive landscape, incl. one internal-only brand-safety flag |
| `video_ideas` | 10 | The full WAG Main Next-10 slate |
| `greenlight_decisions` | 10 | Every idea scored — real Gate 0 pass/fail + 7-criteria breakdown, DB-enforced (a GREENLIT decision is impossible without `gate_0_pass = true`) |
| `predictions` | 6 | Pre-filming predictions with named failure conditions for every greenlit idea |
| `outcomes` | 6 | Pending real Studio results; `record_outcome()` function exists to write them in, refuses silent overwrites |

**This is the real foundation this proposal builds on top of — not a rebuild.**

**~55 real markdown documents** already exist in `thewagpodcast-website/docs/`, spanning: Creative Formula, Format Library, Title Formula Library, Storytelling System, Production Blueprint, Greenlight, Packaging Intelligence, Pattern Library, Competitive Landscape, Algorithm Diagnostic, Next 10, Film These Next, Experiment Registry, Measurement Standards, Character Bible, Shorts Intelligence, Podcast Growth Extension, OS Roadmap, Certification Report, CEO Cockpit, Master Status, Roadmap, Competitive Intelligence, Business Development System, Software Incubator, Product Journal, Opportunity Registry, Publishing Blueprint, and — directly relevant here — `WAG_AGENT_ARCHITECTURE.md` (9 proposed agent roles, spec-only, zero deployed) and `WAG_OS_ARCHITECTURE_PROPOSAL.md` (the prior Own/Rent/Replaceable proposal this one supersedes/extends).

**A real, live specialist already exists and has run real decisions:** the WAG Main Greenlight Manager (`WAG_GREENLIGHT_MANAGER_SPEC.md`) — not a mockup. It has scored all 10 real Next-10 ideas against the real Gate 0 + 7-criteria rubric, greenlit 6, flagged 4 as fixable with named real fixes, and written pre-filming predictions for the greenlit set. This is the real proof-of-concept the directive's Section 52 asks for — the loop just isn't closed yet (no video has published, so no outcome has been recorded).

### What is obsolete / superseded

- `WAG_REPEATABLE_FORMULA_PHASE1.md` — explicitly marked superseded in `WAG_OPERATING_SYSTEM_MAP.md`; kept as audit trail only.
- The original `WAG_OS_ARCHITECTURE_PROPOSAL.md`'s Section H roadmap is now partially executed (WAG Brain v0 + one real digital employee exist) — this document supersedes it with the full-company version.
- Task #283 (a stale duplicate SEO audit tracker) was already closed out this session.

### What important information is currently trapped in documents / session memory (not yet structured)

This is the real, honest gap this proposal exists to close:

- **Storytelling System, Packaging Intelligence, Pattern Library, Production Blueprint, Experiment Registry, Measurement Standards, Character Bible, Shorts Intelligence** — all real, evidence-tiered content, currently living only as markdown prose, not queryable structured records. High-value migration candidates for Phase 2.
- **Podcast-side intelligence** — WAG Podcast has real docs (`WAG_PODCAST_GROWTH_EXTENSION.md`) but **zero rows in WAG Brain today**. The `brands` table has a `WAG_PODCAST` row; nothing references it yet. This is a real, current gap, not a future one — flagged explicitly per the directive's non-negotiable separation requirement.
- **The 9 proposed agent roles in `WAG_AGENT_ARCHITECTURE.md`** — real design thinking, zero structured specs, zero deployed instances.
- **Every past decision, rationale, and "why we corrected X" note scattered across this session's conversation history** — real institutional learning that currently exists only in chat transcripts and doc prose, not in a queryable decision log.

### Where current vendor lock-in exists (the honest answer to the directive's core worry)

**Today, 100% of "AI workforce" execution happens through a Claude Code session — there is no deployed, always-running system independent of a human opening this tool.** This is the single most important gap to name plainly:

- The **data** is not locked in — it's plain Postgres, exportable, and every governance field (source, evidence tier, provenance) is designed to survive a provider switch.
- The **orchestration/execution** is currently 100% "a human opens Claude Code, which reads/writes WAG Brain via SQL and writes docs." Nothing runs unattended. There is no scheduler, no job queue, no deployed backend, no model-adapter code, and no AI API account of WAG's own (all reasoning today runs through this Claude Code session's own model access, not a WAG-owned API key).
- This is **not** the vendor lock-in the directive is worried about (the data survives a provider switch fine), but it **is** the real reason Sections 33-34 (continuous operation, observability) aren't real yet. Closing this gap is a genuinely separate, larger engineering commitment — addressed honestly in Section 29 below, not smuggled into Phase 1.

---

## 5. PROPOSED TECHNICAL ARCHITECTURE

**Recommendation: extend, don't replace, what's already built.**

- **Database:** Supabase-hosted Postgres (already live, `wag-brain`). Plain SQL, no proprietary query language, exportable via `pg_dump` or the MCP's own export at any time. Free tier today ($0/month); scales to a real paid tier only when actual load justifies it.
- **Why not something else:** the directive itself (Section 11) explicitly allows Supabase-class infrastructure — "own the schema, own the data" is satisfied; self-hosting Postgres from scratch would add real operational burden (backups, patching, uptime) for zero real ownership benefit over a hosted instance whose data is already fully exportable.
- **Application layer (Phase 1 scope, detailed in Section 24):** a real, minimal Node.js/TypeScript backend + a simple web frontend, deployed on a standard host (e.g. Netlify/Vercel-class, matching what's already used for the two live websites — real operational continuity, not a new platform to learn). This is new work; nothing like it exists today.
- **Repository:** a new repo, `wag-hq` (or `wag-os`), separate from `thewagpodcast-website` and `wildadventuregirls-website` — WAG HQ is internal software, not a public site, and shouldn't share a deploy pipeline with either public property.

---

## 6-14. SCHEMA PROPOSALS

All of these extend the live `wag-brain` project. Field lists are the real, concrete shape — not exhaustive DDL (that's a Phase 1 implementation detail once approved).

### 6. WAG Brain v0 schema — already built, extend as follows
Add for Phase 2 (WAG Main Creative Intelligence, full department): `storytelling_patterns`, `packaging_patterns`, `experiments`, `postmortems`, `character_facts` (already partially covered by `canonical_facts`), each following the same brand-scoping + governance-column pattern already proven on the 9 live tables.

### 7. Company hierarchy schema
```
departments (id, name, mission, owns_kpis[], parent_department_id)
roles (id, department_id, title, level: specialist|manager|executive, reports_to_role_id)
```
Matches the directive's Specialist → Manager → Executive → Chief of Staff → Katie chain exactly. `reports_to_role_id` self-references, so the hierarchy is real graph data, not hardcoded logic.

### 8. Agent (Digital Employee) specification schema — incorporates the 7-layer training standard directly
```
employees (id, role_id, name, mission, model_provider, model_config jsonb,
  status: active|retired, version, created_at, updated_at)
employee_knowledge_sources (employee_id, source, source_tier: A|B|C|D, url,
  evidence_tier, added_at)  -- the Tier A-D source hierarchy, as real rows, not prose
employee_playbooks (id, employee_id, version, mission, current_standards text,
  best_practices text, wag_specific_patterns text, known_failure_modes text,
  rejected_beliefs text, current_hypotheses text, decision_rules text,
  escalation_rules text, created_at, superseded_by_id)  -- the living playbook, versioned
employee_gold_examples (id, employee_id, example_type: excellent|poor|borderline,
  content text, explanation text, source: wag_real|external_verified)
employee_evaluations (id, employee_id, eval_set_name, predicted jsonb, actual jsonb,
  predicted_confidence numeric, accuracy_score numeric, calibration_delta numeric,
  evaluated_at)  -- the hidden-outcome exam mechanism, plus calibration tracking
employee_kpis (employee_id, kpi_name, target, actual, period)
```
This directly implements the "DIGITAL EMPLOYEE INTELLIGENCE & TRAINING STANDARD" — every one of its 15 requirements maps to a real column or table above, not just a prompt instruction.

### 9. Manager specification schema
```
managers (id, role_id, manages_employee_ids[], authority_scope text,
  pushback_mandate text)
manager_reviews (id, manager_id, employee_id, subject, verdict: approved|rejected|
  needs_revision, rationale, created_at)
```

### 10. Task/work schema
```
tasks (id, title, department_id, owner_employee_id, manager_id, priority,
  deadline, depends_on_task_ids[], status, expected_output, success_metric,
  approval_level: 0-4, actual_result, blocker text, created_at, completed_at)
```
Maps directly to Section 30's field list.

### 11. Prediction/outcome/learning schema — already built and proven
`predictions` / `outcomes` tables already live and used on 6 real records. Extend `outcomes.learning` usage into a `postmortems` table once Phase 2 needs richer postmortem structure than a single text field.

### 12. Intelligence/provenance/governance schema — already built and proven
The `evidence_tier` enum (`VERIFIED`/`STRONG_EVIDENCE`/`OBSERVED_PATTERN`/`HYPOTHESIS`) and `record_status` enum (`unverified`/`supported`/`testing`/`confirmed`/`rejected`/`superseded`) already exist and are enforced on every live table. Extend the same two enums to every new table below — don't invent parallel status vocabularies.

### 13. Company goals (OKR) schema
```
company_goals (id, department_id, objective, key_result, target_value,
  current_value, period, status)
```

### 14. Agent evaluation schema
Covered by `employee_evaluations` above (item 8) — deliberately one schema, not a duplicate.

---

## 15. ASSET REGISTRY DESIGN

```
assets (id, type: footage|thumbnail|contract|deck|design|dataset|audio|legal,
  title, storage_url, tags[], linked_project_id, linked_intelligence_id,
  sensitivity: public|internal|confidential, added_at)
```
**Explicitly not built in Phase 1.** No sensitive files (contracts, footage) get ingested until real permissions (Section 20) exist. Named here so the schema has a place to grow into, per the directive's own instruction not to move sensitive content before security is designed.

## 16. INITIAL KNOWLEDGE GRAPH RELATIONSHIPS

Not a separate graph database — Postgres foreign keys already ARE a real knowledge graph today: `video_ideas → formats → title_formulas`, `video_ideas → greenlight_decisions → predictions → outcomes`. The directive's example query ("WAG Main videos using reputation verification that received >50% Suggested traffic") is already a straightforward SQL join across live tables, not a future capability. A dedicated graph database is real over-engineering at this data volume — flagged as a disagreement in Section 29.

## 17. MODEL-PROVIDER ABSTRACTION

**Design the boundary now. Do not implement multi-provider routing in Phase 1** (directive's own Section 12 guidance). The boundary: every `employees` row has `model_provider` and `model_config` columns (already in the schema above) — an employee's *specification* is provider-agnostic; only its live config names which model executes it today (Claude). Adding GPT/Gemini later means adding a row to a config table and an adapter function, not re-architecting.

## 18. SCHEDULER / ORCHESTRATION ARCHITECTURE

**This is the real fork to decide explicitly — see Section 29.** Proposed Phase 1 answer: none yet, deliberately. Phase 1 stays "operator-invoked" (a human or a scheduled Claude Code run triggers work). A real always-on scheduler/job-queue (the directive's Section 33) is Phase 3 scope, requiring its own deployed compute and its own AI API billing account — a genuinely separate commitment, not a Phase 1 line item.

## 19. OBSERVABILITY / LOGGING

```
activity_log (id, actor: employee_id|human, action, target_table, target_id,
  model_used, tokens_used, cost_usd, duration_ms, created_at)
```
Add this table in Phase 1 even before real automation exists — every manual SQL write I make today should already be logging into it, so Phase 3's automation inherits real historical cost/performance data instead of starting from zero.

## 20. SECURITY / PERMISSIONS

RLS is already enabled deny-by-default on all 9 live tables (fixed this session — was a real gap, now closed). Phase 1 adds: a real auth layer (Supabase Auth, same platform, no new vendor) for the WAG HQ frontend, and the 5-level permission model from Section 31 of the directive, enforced as Postgres RLS policies tied to auth roles — not just application-layer checks, so permissions hold even if the frontend has a bug.

## 21. BACKUP / EXPORT / PORTABILITY

Supabase provides automatic daily backups on paid tiers (not on free tier — a real gap on the current $0 project, worth fixing once real business data enters it). Manual `pg_dump`-equivalent export is available via the MCP's own tooling any time, already verified working during this session's build.

## 22. OWN / RENT / REPLACEABLE / DEPENDENCY-RISK MAP

| Component | Category | Real current state |
|---|---|---|
| WAG Brain schema + data | **OWN** | Live, real, exportable today |
| Agent/manager/playbook specs | **OWN** | Schema proposed above; 1 real spec exists (Greenlight Manager) |
| Orchestration code (once built) | **OWN** | Does not exist yet — real gap |
| WAG HQ frontend/backend code | **OWN** | Does not exist yet — real gap |
| Supabase (hosting) | **RENT/REPLACEABLE** | Data portable; swapping hosts is real but bounded work |
| Claude (or future model) | **RENT** | 100% of execution today — see Section 29 |
| Netlify (existing sites) | **RENT/REPLACEABLE** | Already true today, unrelated to this build |
| **DEPENDENCY RISK, named plainly** | — | **No AI work happens today without a human opening Claude Code.** This is the real risk this whole directive is aimed at closing — not closed yet, addressed in Phase 3, not silently ignored. |

---

## 23. PROPOSED WAG HQ UX / NAVIGATION

Matches the directive's Section 40 nav almost exactly, reordered slightly to match what's real today vs. aspirational:

`HOME (Good Morning, Katie) · TODAY · WAG MAIN · PODCAST · INTELLIGENCE · AI TEAM · PROJECTS · EXPERIMENTS · COMPANY BRAIN` — built first, since these map to what already has real data. `SOCIAL · REVENUE · SPONSORS · BOOKS & IP · OPPORTUNITIES · FINANCE · ASSETS` — nav items exist as placeholders/"coming soon," not built pages, until their underlying department is real (matches directive Section 6/49's own "don't instantiate everything now" instruction).

---

## 24-27. PHASE 1 — EXACT SCOPE

**What gets built:** a real, working (not mockup) web app —

1. Supabase Auth login (Katie only, for now).
2. A read/write UI over the 9 live WAG Brain tables — this alone is a real upgrade over "ask Claude to run SQL."
3. `tasks`, `activity_log`, `departments`/`roles`, `employees` tables added and wired into the UI.
4. A real "Good Morning, Katie" home screen reading live data from `video_idea_status` and the new tables — decisions needed, what changed, nothing fabricated.
5. The Greenlight Manager's existing real workflow (already proven via SQL this session) becomes a real UI flow: submit an idea → see Gate 0 + score → approve/reject → prediction gets written.

**What does NOT get built in Phase 1:** any executive role beyond the Chief of Staff shell (a real page, not yet a real reasoning agent), any second department (Podcast/Revenue/etc.), any scheduler/automation, any multi-model routing, any sponsor/financial data ingestion.

**What Katie will be able to DO at the end of Phase 1:** log into a real WAG HQ web app, see the current state of every WAG Main video idea and its Greenlight decision without asking Claude to query a database, submit a new idea and watch it move through Gate 0 + scoring in a real UI, and see a real (if still short) activity log of what's happened. This is a genuinely useful tool on day one, not a shell waiting for content.

---

## 28. MIGRATION APPROACH

Not a bulk import. Per document, per real claim:
1. Extract discrete claims (a pattern, a fact, a decision) — not whole documents as single blobs.
2. Tag each with real source + evidence tier — most already carry this in the prose; where a doc doesn't state it explicitly, it gets `HYPOTHESIS` by default, never upgraded without a real reason.
3. Check for contradictions against what's already in WAG Brain (e.g., `WAG_PATTERN_LIBRARY.md`'s Location-Revisit correction vs. earlier drafts) — flag, don't silently pick one.
4. Only `status = 'confirmed'` records feed the Greenlight Manager's default reasoning; everything else stays queryable but flagged.

**Priority order for Phase 2 migration:** Storytelling System → Packaging Intelligence → Pattern Library → Production Blueprint → Measurement Standards → Character Bible → Shorts Intelligence, in that order — matches real usage frequency by the Greenlight Manager so far.

---

---

## LIVE DASHBOARD, FRESHNESS & CONTINUOUS IMPROVEMENT — incorporated into Phase 0

**WAG HQ is a live operating interface, not a report viewer** — Section 23/24-27 above already scope it that way (real read/write UI over live tables, not static exports). Extending that with freshness and the three improvement loops:

### Freshness metadata — extend every governance-column table
Add to `formats`, `title_formulas`, `competitors`, `canonical_facts`, and every new table below:
```
last_reviewed_at timestamptz, next_review_due timestamptz,
freshness_status: current|due|stale (computed: stale if now() > next_review_due),
owner_employee_id
```
`freshness_status` is a real, queryable view (`select * from formats where now() > next_review_due`) — this is what "WAG HQ shows which departments may be stale" actually means concretely, not a vague dashboard widget.

### Refresh jobs — change detection over re-research
```
refresh_jobs (id, target_table, target_id, trigger: scheduled|event, cadence,
  last_run_at, last_result: no_change|meaningful_change|error, change_summary text)
```
**Honest current state: zero refresh jobs exist today** — there is no scheduler (Section 18/29 already names this gap). This table is the real place they'll log to once Phase 3 builds the scheduler. A job that finds nothing meaningful writes `no_change` and stops — it does not regenerate a report, per the directive's own "if nothing meaningful changed, do not create noise" instruction.

### The three improvement loops — where each one actually lives
| Loop | Real mechanism |
|---|---|
| **Knowledge improvement** | `raw_observations` (new, see Knowledge Types below) → manager review → promotes to `confirmed` status on the target table, `employee_playbooks` gets a new version row citing what changed and why |
| **Outcome improvement** | `predictions` → `outcomes` (already live) → `record_outcome()` (already live) → manager reviews `learning` field → if it contradicts a `format`/`title_formula`, that row's `status` and `confidence_tier` get updated with a new version, old one marked `superseded` |
| **Employee improvement** | `employee_evaluations` (proposed above) → manager writes a `manager_reviews` row → `employee_playbooks` version bump, citing the specific evaluation that triggered it |

**Honest constraint, stated plainly per the directive's own instruction: none of these three loops have completed a real cycle yet.** Zero outcomes are recorded (all 6 pending), zero playbooks have a version 2, zero standards have changed based on real evidence. The mechanism is real and ready; the claim "WAG OS is self-improving" becomes true the first time a recorded outcome actually changes a `formats.confidence_tier` or produces `employee_playbooks` v2 — not before. This should be tracked as a real, named Phase 1/2 milestone ("first closed improvement loop"), not asserted early.

---

## 31-49. FINAL ARCHITECTURAL REQUIREMENTS — incorporated into Phase 0 schema, not deferred

### 31. Decision Ledger
```
decisions (id, subject, alternatives_considered jsonb, evidence_at_time text,
  recommendation text, confidence evidence_tier, what_would_disprove_this text not null,
  decided_by_employee_id, human_decision text, human_decided_by, decided_at,
  linked_prediction_id, linked_outcome_id, learning text)
```
General-purpose decision record for anything outside Greenlight's own flow (sponsor calls, strategic pivots). Greenlight's own `greenlight_decisions`/`predictions` pair is already a real, working instance of this pattern for creative decisions — this generalizes it company-wide rather than duplicating it.

### 32. Contradiction Detection
```
contradictions (id, record_a_type, record_a_id, record_b_type, record_b_id,
  description, detected_by_employee_id, status: open|resolved,
  resolution text, resolved_by, resolved_at)
```
Real example already on file: `WAG_PATTERN_LIBRARY.md`'s Location-Revisit correction contradicted an earlier draft's reasoning, and I fixed it by hand this session (flagged in `WAG_VIDEO_GREENLIGHT.md` and `WAG_STORYTELLING_SYSTEM.md`). This table makes that a structured, auditable event instead of a one-off manual catch — a manager reviewing two records that disagree writes a row here rather than silently picking one, per explicit instruction not to resolve by retrieval order.

### 33. Disconfirmation
Already real and working: `predictions.failure_conditions` (live, not-null on all 6 real prediction rows) is exactly this requirement for creative decisions. `decisions.what_would_disprove_this` (above) generalizes it. Enforced as a NOT NULL constraint, not a style guideline — a consequential recommendation literally cannot be saved without naming what would prove it wrong.

### 34. Opportunity Cost
Lives inside the Company ROI Queue (next item) rather than as a separate table — opportunity cost only means something relative to the other things competing for the same time/money/attention, which is what a ranked queue already represents.

### 35. Company ROI Queue
```
roi_queue (id, action_title, department_id, estimated_upside, estimated_cost,
  time_requirement, probability, risk_notes, required_assets, next_action,
  owner_employee_id, advances_company_goal_id not null, type: exploit|explore,
  rank, status, added_at, added_by)
```
One registry, owned by the Chief of Staff — deliberately not duplicated between a separate "Strategy/Opportunity" list and this one (the directive's Sections 39/43 both gesture at a ranked opportunity list; this is the single real table both should read from).

### 36. Knowledge Types as distinct concepts
Already mostly true by construction: `canonical_facts` (facts), `formats`/`title_formulas` (findings), `video_ideas` (hypotheses-until-greenlit), `greenlight_decisions`/`decisions` (decisions), `predictions`/`outcomes` (experiments), `tasks` (tasks) are already separate tables with separate shapes — not one undifferentiated "memory" blob. The one real missing stage: a `raw_observations` table for pre-hypothesis research notes (the actual first stage of the governance pipeline, currently skipped straight to draft docs):
```
raw_observations (id, employee_id, content text, source, source_tier: A|B|C|D,
  status: unreviewed|promoted|discarded, promoted_to_type, promoted_to_id, created_at)
```

### 37. Dynamic Audience Models
```
audience_models (id, brand_id not null, model_type: desired|observed, dimension text,
  value text, evidence_tier, source, updated_at)
```
**Honest current gap: zero rows exist for either brand today.** Real WAG Main audience assumptions currently live as prose scattered across `WAG_CREATIVE_FORMULA_V1.md`; this table is where they'd become structured and updatable as real evidence (comments, demographics, retention-by-segment) accumulates — flagged as real Phase 2 work, not built yet.

### 38. Capability Registry
```
capabilities (id, category: production|talent|location|financial|operational|distribution,
  capability text, real_constraint text, evidence, updated_at)
```
Centralizes real, already-known constraints currently scattered across docs (Texas-based, no travel budget, 3-person cast, 2 of 3 cast are minors, no crew) into one queryable table the Greenlight Manager can reference directly instead of relying on prose memory each time it scores `production_difficulty`.

### 39. Failure Library
```
failures (id, subject, prediction text, execution_notes text, actual_result text,
  likely_explanation text, uncertainty_notes text, learning text,
  linked_video_idea_id, recorded_at)
```
Real first entry ready to backfill once this table exists: WAG's own "EVERY Viral TikTok Product" flop (1.7K views) — already has a real prediction-shaped explanation on file (`WAG_ALGORITHM_DIAGNOSTIC.md`), just not yet in this structured shape.

### 40. Counterfactual Discipline
Add `variable_tested text not null` to `predictions` and `decisions`. Hard rule for the Company Constitution (Section 47): a `learning` field may only claim causation the `variable_tested` field + a real comparison actually supports — e.g. the Goatman-vs-Hotel finding correctly says "leading hypothesis," not "proven," because the two videos differ in more than one variable. This is a policy paired with a schema field, not schema alone.

### 41. Data Ingestion Architecture — the honest current state
| System | Integration today |
|---|---|
| WAG Brain (Supabase) | **Automated** — direct MCP connection |
| YouTube Studio analytics | **Manual** — Chrome-session pull, no API/OAuth configured |
| Google Search Console | **Manual** — Chrome-session pull, no API configured |
| GA4 | **Manual** — Chrome-session pull, no API configured |
| Beehiiv | **Manual/ad hoc** — MCP tool exists, unused this session |
| Sponsor CRM | **Does not exist** |

Every real data point in WAG Brain today (Studio baseline, GA4 traffic, GSC queries) was a manual pull. No pretending otherwise — real API/OAuth automation for Studio and GSC is genuinely valuable Phase 2/3 work, not assumed to already exist.

### 42. Disaster Recovery
Extends Section 21: schedule a real quarterly restore test once Phase 1 has real business data worth protecting, not just "backups exist." Free-tier no-auto-backup gap (already flagged in Section 29) needs closing before sponsor/financial data enters the system.

### 43. Secrets & Privacy
Hard rule, not a schema table: credentials and API keys are never a WAG Brain column — they live in the hosting platform's environment-variable store or Supabase Vault, fully separate from the business-data tables, so a database export (Section 21) can never accidentally leak a secret.

### 44. AI Economics
`activity_log` (Section 19) already carries `cost_usd`/`tokens_used`/`model_used`. Add `attributed_value_usd` — nullable, filled in only when a real, traceable value exists (e.g., an AI-drafted sponsor outreach that closed a real deal), never a fabricated ROI estimate for routine work.

### 45. Executive Attention Budget
`tasks.approval_level` (0-4, already in Section 10's schema) is the real mechanism: only `approval_level >= 3` items surface on Katie's home screen by default. Routine `approval_level 0-2` work gets resolved by managers and only appears in drill-down, per Section 3's own "Katie should not need to supervise every departmental report" requirement.

### 46. North-Star Traceability
`advances_company_goal_id` (FK to `company_goals`) is mandatory, not optional, on every `roi_queue` entry and every `task` above `approval_level 2` — nothing consequential enters the system without naming which real company objective it serves.

### 47. Exploration vs. Exploitation
`roi_queue.type: exploit|explore` (already in Section 35's schema) makes this visible rather than implicit. The mechanism already exists in miniature and is already proven: Gate 0's **Path B (Breakout)**, live in the Greenlight Manager today, is the explore category — 3 of the 6 real greenlit ideas this session came through Path B, not Path A. The Chief of Staff's briefing should periodically report the real exploit/explore ratio so drift toward pure optimization is visible, not silent.

### 48. System Health
```
system_health (id, component: db|scheduler|integration_name|backup|refresh_job,
  status: healthy|degraded|failing|not_yet_built, last_check_at, details)
```
Honest by construction: most rows will read `not_yet_built` today (scheduler, integrations, refresh jobs) rather than faking a green checkmark for infrastructure that doesn't exist yet.

### 49. Auditability
Not a separate feature — the natural join across `activity_log` + `decisions`/`greenlight_decisions` + `predictions` + `outcomes` + `employee_evaluations`, all already proposed above. "What did the system know, recommend, and learn" is one query across tables that already exist in this design, not new infrastructure.

---

## 29. RISKS AND ARCHITECTURAL DISAGREEMENTS — real pushback, not compliance

1. **The single biggest gap is orchestration, and I'm recommending you NOT close it in Phase 1.** A real always-on scheduler + deployed backend + WAG's own AI API billing account is a genuinely separate engineering and cost commitment (real recurring compute cost, real recurring per-token API cost, separate from anything "free" about a Claude Code session). Building it inside Phase 1 risks exactly the "months-long infrastructure science project" the directive itself warns against in Section 50. My recommendation: prove the workflow with a real UI first (Phase 1), then commit to always-on infrastructure in Phase 3 once there's a real second department's worth of evidence that manual/scheduled-trigger operation isn't enough.
2. **A dedicated graph database is unnecessary at current or near-term data volume.** Postgres foreign keys already answer the directive's own example queries. Adding a graph database now would be real, avoidable complexity — flagged directly against Section 54's own "infrastructure whose complexity exceeds its business value" warning.
3. **Multi-model benchmarking (Section 62/Training Standard item 12) needs real evaluation history to mean anything.** Today there is exactly one specialist (Greenlight Manager) with real decisions on record and zero completed outcomes. Benchmarking Claude vs. GPT vs. Gemini on a role with no real performance history yet would produce numbers that look rigorous but aren't — recommend this stays a Phase 3+ capability, gated on real outcome data existing.
4. **The "gold-standard examples + hidden-outcome evaluation exam" mechanism (Training Standard items 7-8) is excellent and I'd build it — but only for one role first.** Building curated gold-standard sets for every future specialist before any of them exist yet would be exactly the kind of research-for-its-own-sake the directive prohibits. Recommend: build this properly for the Greenlight Manager first (real historical WAG videos with real, currently-hidden-from-the-model outcomes already exist — this is buildable now, cheaply), prove the mechanism works, then replicate the pattern per new role as it's actually built.
5. **Supabase free tier has no automated backups.** Real risk once real business data (sponsor contacts, financial figures) enters the system — needs a paid-tier upgrade or a real manual export cadence before that data arrives, not after.
6. **The real tension this proposal now has to name directly: items 31-49 above are a genuinely large schema addition — roughly 15 new tables/fields on top of the 9 already live.** Designing all of them now (this document) is right — it means Phase 2/3 tables don't need re-architecting later. **Building all of them in Phase 1 would be exactly the "months-long infrastructure science project" Section 50 warns against.** My recommendation: Phase 1 implements the schema for `tasks`, `activity_log`, `departments`/`roles`, `employees`, `decisions`, `contradictions`, and `raw_observations` (the tables the real Greenlight-Manager-in-a-UI workflow actually touches day one) — the remaining ~8 tables (`roi_queue`, `audience_models`, `capabilities`, `failures`, `refresh_jobs`, `system_health`, `employee_evaluations`/`playbooks`/`gold_examples`) get created in Phase 2/3 as each becomes real, following this same design, not re-derived from scratch. The schema is approved now; the build sequencing is what should stay staged.

## 30. WHAT WAS MISSING — NOW ADDRESSED BELOW (Section 50)

The 4 gaps originally flagged here (budget ceiling, override logging, data retention, Constitution ownership) were real. Katie asked for concrete additions on all 4 rather than just flags — incorporated in Section 50.

---

## 50. FOUR REQUIRED ADDITIONS (2026-08-10, before approval)

### 50.1 Configurable budget controls + cost visibility (replaces "set a fixed ceiling")
A fixed ceiling was the wrong shape — real requirement is visibility + an approval gate on new recurring cost, not a single number.
```
cost_budgets (id, scope: company|department|employee|project, budget_type:
  monthly_ceiling|per_workflow_cap|alert_threshold, amount_usd, period,
  alert_at_pct, hard_stop boolean, created_by, updated_at)

cost_approval_requests (id, description, monthly_estimate_usd, one_time_estimate_usd,
  requested_by, status: pending|approved|rejected, decided_by, decided_at)
```
Hard rule: **any change that would create new material recurring infrastructure cost (a new paid tier, a new hosting service, a new AI API account) must create a `cost_approval_requests` row and wait for Katie's decision before being provisioned** — a real gate, not a passive dashboard number discovered after the fact. `activity_log.cost_usd` (already proposed) feeds real-time visibility against `cost_budgets` thresholds; `alert_at_pct` fires a plain-English flag through the Chief of Staff, not a silent breach.

### 50.2 CEO override logging
```
decision_overrides (id, decision_id, greenlight_decision_id,
  original_ai_recommendation text, original_confidence evidence_tier,
  original_evidence_summary text, katie_decision text, override_reason text,
  decided_at, linked_outcome_id,
  outcome_assessment: ai_was_right|katie_was_right|inconclusive|not_yet_known,
  assessed_at)
```
Populated automatically whenever a `decisions.human_decision` or `greenlight_decisions.decision`-vs-Katie's-actual-choice diverge from the AI's original recommendation — not a manual step someone has to remember. Once a linked `outcome` resolves, `outcome_assessment` gets filled in, feeding the Failure Library and the Knowledge-improvement loop (Section on Continuous Improvement, above) the same way any other prediction-vs-actual does. This is exactly what makes overrides learning data instead of disappearing.

### 50.3 Data retention architecture — distinct classes, not one policy
```
retention_policies (id, data_class: canonical_intelligence|business_records|
  experiments_outcomes|raw_research|execution_logs|model_outputs|sensitive_data,
  retention_period, deletion_method: soft_supersede|archive|hard_delete,
  legal_basis text, owner_employee_id, last_reviewed_at)
```
| Class | Real default policy | Why |
|---|---|---|
| Canonical intelligence (`formats`, `canonical_facts`, `capabilities`, `audience_models`) | Indefinite, never hard-deleted, only superseded | This is the actual owned asset the whole directive is about |
| Experiments/outcomes (`predictions`, `outcomes`, `failures`) | Indefinite | This IS the training data for every future decision |
| Business records (sponsor/financial, once built) | Real legal/contractual minimum, **needs actual legal input — I'm not proposing a specific year count without real counsel**, flagged honestly rather than inventing one | Compliance risk if wrong |
| Raw research (`raw_observations`, uningested creator research) | 12 months, then archive or discard if never promoted | Explicitly non-authoritative by design; unbounded growth is noise, not asset |
| Execution logs (`activity_log` granular rows) | 90 days at full detail, then roll up to aggregate stats, discard granular rows | Real storage/cost control, not institutional knowledge |
| Model outputs (raw completions never promoted to a table) | Short-lived, not retained beyond the run that produced them | Prevents accumulating unstructured AI text as a shadow, unmanaged knowledge base |
| Sensitive data (secrets, PII, anything touching the two minor cast members' personal details) | **Most restrictive class** — least-privilege access, real hard-delete capability (the one class where "never delete" is wrong), reviewed against WAG's standing minors-privacy rules | Real legal/ethical obligation, not just data hygiene |

### 50.4 Katie as human owner of the Company Constitution
```
company_constitution (id, version, content, status: draft|proposed|active|superseded,
  proposed_by, proposed_at, approved_by, approved_at, change_summary)
constitution_amendment_proposals (id, proposed_by_employee_id, proposed_change text,
  rationale text, status: pending|approved|rejected, decided_by, decided_at)
```
Hard access-control rule, enforced at the RLS/application layer, not by convention: the transition of any `company_constitution` row to `status = 'active'` requires `approved_by` to be Katie's own identity. The Chief of Staff can draft, version, and administer the document; any AI employee can write a `constitution_amendment_proposals` row; **no AI role, including the Chief of Staff, can move a proposed change to active status.** This is the one governing document in the whole system where AI authorship of the *content* is fine but AI authority over *activation* is explicitly not.

---

## 51. SEQUENCING RECONSIDERATION — smallest real Phase 1 slice proving non-Claude-Code execution

**I agree, and this is a genuine improvement, not just compliance with a request.** My original reasoning (don't build all of always-on orchestration in Phase 1) was right in spirit but wrong in scope — there's a real difference between "build the whole Phase 3 platform now" (still wrong, still premature) and "prove the single riskiest architectural claim in this whole directive with one small, real, bounded slice before more code gets built on top of an untested assumption." The second one is good engineering discipline, not scope creep. Answering each question directly:

**Exactly what the slice is:** a real, scheduled **Freshness Reviewer** job — deliberately the lowest-stakes possible real workflow, not a creative or financial decision-maker, appropriate for the first unattended run:

1. **Scheduled trigger:** Supabase `pg_cron` (already available on the existing `wag-brain` project — no new vendor), fires once daily.
2. **Deployed WAG-controlled backend:** one Supabase Edge Function (Deno/TypeScript), source lives in a new WAG-owned repo (`wag-hq`), deployed to Supabase's edge runtime — a Supabase *product* already in the stack, not a new platform.
3. **Model API call — independent of Claude Code:** the function calls a model API directly, using a WAG-owned API key. **Deliberately using a small/cheap model (e.g. Claude Haiku or GPT-4o-mini), not "big Claude"** — this is a better, cheaper proof than using a large model, and it directly demonstrates the model-adapter boundary actually works, since the first real automated job runs on a different model tier than the one writing this proposal.
4. **Defined workflow:** reads `formats`/`canonical_facts`/`title_formulas` rows where `next_review_due` has passed, drafts a one-paragraph plain-English flag per stale item.
5. **WAG Brain write:** one real `refresh_jobs` row per run (`last_result`, `change_summary`) — a narrow, well-defined write shape, not open-ended database access.
6. **Activity log:** every run logs to `activity_log` (model used, tokens, cost, duration, result) regardless of outcome — this is also the first real data `cost_budgets`/`cost_approval_requests` (Section 50.1) has to track against.
7. **Visible in WAG HQ:** a real SQL view today; a real dashboard tile the moment Phase 1's frontend exists.

**Expected recurring cost:** Supabase Edge Functions are within the free tier at once-daily frequency (free tier includes ~500K invocations/month). The model API call is genuinely small — a narrow prompt against a handful of rows, a cheap model, once a day — realistically **under $1/month**, almost certainly under $5/month even with room to grow. This gets tracked for real via `activity_log.cost_usd`, not assumed forever.

**Where it runs:** Supabase — the same platform already hosting WAG Brain. No new hosting vendor introduced for this slice.

**Who owns the code/data:** The Edge Function's source is 100% WAG-owned, version-controlled TypeScript in a WAG repo — portable to Deno Deploy or a plain Node server with minor changes if Supabase is ever left. The data it writes lands in the already-WAG-owned Postgres tables. Nothing here is Claude-specific or Supabase-proprietary at the code level.

**Could the provider be replaced later?** Yes, cleanly, on both axes that matter: the model call sits behind the thin adapter already proposed (swap model config, not code); the scheduling/runtime (`pg_cron` + Edge Functions) could be replaced by any external cron hitting the same function's HTTP endpoint if Supabase itself were ever left.

**Does this materially complicate or delay the dashboard?** **Marginally, not materially.** The dashboard's real critical path is the frontend + auth + a read/write UI over the 9 already-live tables — none of that depends on this slice. This is genuinely parallel, additive work (roughly a day or two of real engineering: one Edge Function, one cron schedule, one new table already in the Phase 1 table list, one narrow prompt). Recommend building it alongside the dashboard, not gating either on the other.

**One real thing I can't do for you, flagged plainly:** this slice requires a real WAG-owned API key with a model provider (Anthropic, OpenAI, or similar) — its own account, its own billing, separate from whatever access this Claude Code session runs on. **I cannot create that account or attach a payment method on your behalf** — that's a real financial/account-creation action outside what I can do unilaterally. You'd need to create the account yourself (or explicitly walk through it with me) before this slice can actually run, even though the code and schema can be built and wait for that key.

**PROVEN (2026-08-10):** Katie created the Anthropic account and stored the key in Supabase Edge Function secrets (never seen by this session). The complete loop was verified against a real stale item: scheduled trigger → employee identity check → hard budget check → real Anthropic API call → real model output written to `refresh_jobs`/`activity_log` → visible in WAG HQ's System Health page. Actual cost of the test run: **158 tokens, $0.00029, 1.9 seconds**. A real bug was found and fixed during verification — the original code queried a non-existent `canonical_facts.fact` column (actual columns are `fact_key`/`fact_value`), which would have silently reported "no stale items" instead of surfacing an error; read-path error surfacing was added so this class of failure can't recur silently. The key's 90-day expiry (2026-11-08) is now tracked live in System Health with a computed, color-coded countdown, not just a note in this doc. First real scheduled run: next 08:00 UTC.

---

## 52. VISUAL IDENTITY — WAG HQ as a premium owned product, not a generic dashboard (2026-08-10)

Katie's instruction: WAG pink is the primary visual identity, white/neutral space is the ground, and green/amber/red/blue/purple are reserved for functional meaning only (status, category) — never decorative. Implemented in `wag-hq/src/app/globals.css` as a token system, not per-component hardcoding:

- **Brand tokens:** `--wag-pink` / `--wag-pink-dark` / `--wag-pink-tint(-strong)` drive the sidebar active-nav state, the logo mark, all primary buttons (`wag-btn-primary`), all focus rings (`wag-focus-ring`), and link hovers (`wag-link`).
- **Status tokens** (`--wag-green`, `--wag-amber`, `--wag-red`, each with a `-dark` text variant and a `-tint` background variant): used exclusively where the color carries real meaning — GREENLIT/FIXABLE/HOLD decisions, healthy/degraded/failing system components, recorded-vs-pending experiment outcomes. Never used as page decoration.
- **Category tokens** (`--wag-blue`, `--wag-purple`): for genuine data distinctions with no status meaning — e.g. `CategoryBadge` on the AI Team page colors departments by a stable hash so the same department always renders the same color, without hardcoding a department→color map that would need updating every time a department is added.
- Raw color-on-white text was audited for contrast (`--wag-green` at 4.15:1 fails normal-text AA, passes large-bold-text AA; `--wag-pink` at 6.53:1 passes both) — status text on white surfaces now uses the `-dark` variant everywhere, consistent with the standing contrast finding from the public sites.
- Centralizing this as tokens (not hardcoded hex per component) means the palette can be retuned once, sitewide, later — matches the "design the system, not each screen" instruction implicit in asking for this now rather than after more pages exist.

---

## 53. FUTURE SOFTWARE / PLATFORM OPTIONALITY — permanent architectural principle (2026-08-10)

Katie's instruction, recorded as a standing principle, not a Phase 1 task: WAG HQ is built first as WAG's proprietary internal operating system, measured by whether it helps WAG become a larger, more valuable media company. At the same time, keep the underlying software architecture separable from WAG's proprietary intelligence, so that *if* portions of the platform layer were ever evaluated for commercialization later, WAG's actual data, findings, and strategy could remain private. This is optionality, not a roadmap — no multi-tenancy, billing, public signup, white-labeling, or public APIs are being built now, and none should be built without Katie's explicit later approval.

**Real audit of the 27 existing WAG Brain tables against this boundary** — done now because it's cheap to check, not because anything needed to change:

| Reusable platform layer (generic, no WAG business rules hardcoded) | WAG-specific intelligence (proprietary data/logic) |
|---|---|
| `departments`, `roles`, `employees`, `employee_knowledge_sources`, `employee_instructions`, `manager_reviews` | `brands`, `canonical_facts`, `formats`, `title_formulas`, `competitors` |
| `tasks`, `decisions`, `decision_overrides`, `contradictions`, `raw_observations` | `video_ideas`, `greenlight_decisions`, `predictions`, `outcomes` |
| `assets`, `activity_log`, `system_health`, `refresh_jobs` | `company_constitution`, `constitution_amendment_proposals` (WAG's own governing document, generic table shape) |
| `cost_budgets`, `cost_approval_requests`, `retention_policies` | |

**Finding: the boundary already holds, with one deliberate exception worth naming.** `greenlight_decisions` carries WAG Main's actual scoring rubric as real column names (`score_recommendable`, `score_title_bucket`, `score_brand_fit`, `score_curiosity`, `score_retention_open`, `score_franchise`, `score_suggested_fit`, `gate_path`) rather than a generic `scores jsonb` blob. That's correct, not a violation — this rubric *is* proprietary WAG creative IP (Section 41 territory), and forcing it into a generic shape today would be exactly the "prematurely generalize" mistake Katie warned against. The platform-layer tables (`employees`, `tasks`, `decisions`, `activity_log`, etc.) have no WAG-specific columns baked in — they're already scoped by foreign keys (`brand_id`, `role_id`, `department_id`) rather than by hardcoded business logic, which is what makes them reusable in principle without any current rework.

**Standing rule going forward:** when adding new platform-layer tables (task/decision/approval/audit infrastructure), keep WAG-specific rules in data (rows, config, rubric columns on domain-specific tables like `greenlight_decisions`) rather than in the generic table's schema or in application code paths that only make sense for WAG. When adding new WAG-specific intelligence tables (a future Podcast equivalent of `video_ideas`, a future Books & IP table, etc.), it's fine and expected for those to carry real, named, WAG-specific columns — that's proprietary content, not platform infrastructure, and over-genericizing it would just make it harder to use.

---

## 54. SECURITY — defense in depth, not a claim of invulnerability (2026-08-10)

Katie's instruction: security is a non-negotiable Phase 1 requirement, with a formal hardening pass required before any production deployment (WAG HQ will hold sponsor/contact data, financial information, internal strategy, and agent instructions). Full 15-point checklist, current real status per point (verified via Supabase's security advisor, not assumed), and the pre-deployment gate now live in **`WAG_OS_SECURITY_CHECKLIST.md`** — kept as its own living doc rather than folded into this one, consistent with treating security as one of the standing living-systems categories (legal/privacy/security/accessibility/architecture) rather than a one-time checklist item.

**Two real findings fixed today**, not just documented: both flagged Postgres functions (`enforce_katie_only_constitution_activation`, `record_outcome`) had a mutable `search_path`, a real (if low-severity) privilege-escalation surface — fixed via `ALTER FUNCTION ... SET search_path = public, pg_temp` in migration `security_fix_function_search_path`. One real finding still open and flagged for Katie: Supabase Auth's "leaked password protection" (HaveIBeenPwned check) is off by default and can only be toggled from the Supabase dashboard (Authentication → Policies) — no API/MCP path exists to flip it — a 30-second manual action before production. All 27 tables confirmed RLS-enabled with default-deny policies; no service-role key exists anywhere in client code or `.env.local` (anon/publishable key only, git-ignored).

**Explicitly not claimed:** WAG HQ is not, and will not be described as, "unhackable" or "fully secure" — the framing throughout is defense in depth, least privilege, monitoring, containment, and recovery, per Katie's explicit instruction not to overclaim.

---

## 55. WAG HQ IS AN INTERFACE TO WAG OS, NOT WHERE THE INTELLIGENCE LIVES — permanent principle (2026-08-10)

Katie's instruction: keep critical company logic, permissions, decision rules, and workflows out of the presentation/UI layer wherever practical. WAG HQ (the Next.js frontend) is a window onto WAG Brain, not the place institutional intelligence is defined — so that the frontend stays replaceable (Section 22's Own/Rent/Replaceable framing) without ever risking the actual rules WAG depends on.

**Real audit of `wag-hq`'s current Server Actions and app code** (the only places application logic could leak into): `submitIdea`, `login`, `signOut` — three total. None contain a decision rule, a scoring formula, or a permission check written in TypeScript. `submitIdea` is a pure data write (insert a hypothesis-status row, log to `activity_log`); `login`/`signOut` are thin wrappers around Supabase Auth. **The finding: this principle already holds, by construction, not by retrofit** — every actual rule that governs WAG's real decisions already lives at the database layer, where Phase 0's "hard governance rules, not just app-layer convention" directive put it:

- The Gate 0 requirement (`gate0_required_for_greenlight` CHECK constraint) — a `greenlight_decisions` row cannot be `GREENLIT` without `gate_0_pass=true`, enforced by Postgres, not by a `wag-hq` `if` statement that a future UI rewrite could silently drop.
- Katie-only Constitution activation (`enforce_katie_only_constitution_activation` trigger) — same pattern.
- RLS policies — access control lives in Postgres policy definitions, not in `wag-hq` route guards (the `proxy.ts` auth-redirect is a UX convenience — a signed-out user with a raw API call would still hit RLS, not just a missing redirect).
- The actual Greenlight scoring rubric and evaluation methodology live as real text in `employee_instructions` (versioned, auditable) — not hardcoded into a scoring function in the frontend.

**Standing rule going forward:** when new workflows are built (the Freshness Reviewer, future manager-review logic, future approval flows), the rule/permission/workflow definition goes in the database (constraints, triggers, RLS policies, `employee_instructions` rows) or in a backend/Edge Function that reads those definitions — never hardcoded as conditional logic inside a Next.js page or Server Action. `wag-hq`'s job is to render WAG OS's state and collect input; it should be possible to rebuild the entire frontend from scratch without losing or having to re-derive a single real business rule.

---

## 56. FIVE FINAL ARCHITECTURAL PRINCIPLES — preserved for later, not Phase 1 scope (2026-08-10)

Katie's instruction: these five are standing design constraints to preserve in the architecture, implemented only where the current approved phase already calls for them — explicitly not new Phase 1 build items.

**1. Interface independence.** Already Section 55, verbatim the same principle — cross-referenced, not duplicated.

**2. Explainability/provenance — a future "Why?" drill-down.** Not built now. Real check performed: does today's schema already block this later, or does it need retrofitting? It doesn't block it — `canonical_facts`/`formats`/`title_formulas` already carry `evidence_tier`/`record_status`/`last_reviewed_at`/`next_review_due`; `greenlight_decisions` already carries per-criterion scores plus a `rationale` field; `predictions` already carries `failure_conditions` and links to real `outcomes`; `employee_instructions` is already versioned. A future "Why?" panel is a read-only UI over data that already exists in the right shape — the standing rule is to keep populating these fields honestly as new intelligence is written (never leave `rationale`/`evidence_summary` blank to save time), so the drill-down has real material to show whenever it's built.

**3. CEO Command Interface — explicitly not a generic embedded chatbot.** Preserved as a named non-goal-for-now with a specific anti-pattern to avoid: when this is eventually built, it must delegate through real managers/specialists/permissions/workflows/WAG Brain (the same `employees`/`roles`/`departments`/`tasks` structure everything else uses) — not a chat widget bolted onto the dashboard that answers from a generic model with no real delegation underneath. Standing rule: don't build a shortcut chat box "in the meantime" that would need to be thrown away — if a stopgap Q&A surface is ever requested before this is properly built, flag the tension explicitly rather than building the anti-pattern quietly.

**4. Autonomy levels — observe → recommend → prepare → bounded execution → policy/budget-constrained autonomy.** Not a new column today. Real finding: the concept already exists informally — the WAG Chief of Staff's seeded `permissions` field already reads "approval_level 0-2 autonomous; escalates level 3-4 to Katie," an ad hoc version of exactly this ladder. Standing rule: as real employees actually gain execution capability (starting with the Freshness Reviewer, which sits at "bounded execution" — one narrow, pre-approved write shape, not "recommend" and not "policy-constrained autonomy"), formalize `permissions` from free text into this five-stage scale rather than inventing a different one per employee.

**5. OS performance — WAG OS itself must eventually be measurable.** Not a new dashboard now. Real finding: the seed for this already exists — `predictions`/`outcomes` are the prediction-accuracy measurement itself; `activity_log`/`system_health` are the operational-speed and reliability seed; `cost_budgets` is the beginning of an AI-economics measurement. Standing rule: every new workflow should keep writing to these tables (timestamps, actors, real outcomes) as a matter of course, so "did WAG OS actually make WAG faster/better/more accurate" stays answerable from real data later rather than requiring instrumentation to be retrofitted.

---

## 57. CONNECTOR & FIRST-PARTY DATA STANDARD — Connector Registry built now, zero connectors configured (2026-08-10)

Katie's instruction: WAG OS specialists must use real first-party company data wherever it materially improves their work, but no connector gets added speculatively — only when a real department reaches the point of actually needing it. Built as a permanent capability today; zero real connectors exist yet.

**Schema (migration `connector_registry`):** `connectors` table with every field Katie specified — `service`, `property_entity`, `brand_id` (FK to `brands` — the exact mechanism that keeps WAG Main and WAG Podcast connections structurally distinct even when authorized through the same Google account), `owner`, `purpose`, `authorization_method`, `scopes` (jsonb), `access_level` (enum: `read_only`/`read_write`, defaults `read_only`), `allowed_agents` (jsonb), `credential_storage_location` (points to WHERE the secret lives — Netlify env var name, Supabase Vault entry — never the secret itself), `last_successful_sync`, `last_failed_sync`, `last_failure_reason`, `freshness_notes`, `revocation_status` (enum: `active`/`revoked`/`expired`/`pending_setup`), `status` (enum: `active`/`inactive`/`deprecated`), `requested_by`/`requested_reason` (the anti-speculation field — every future row must name the real department/workflow that asked for it). RLS enabled, same `authenticated_full_access` pattern as every other table.

**Governance rules recorded as standing policy, not yet exercised (no connector exists to apply them to):** OAuth/official API only, never passwords; minimum required scopes, read-only by default; credentials live in server-side secrets storage only, never in WAG Brain, source code, prompts, or given directly to a model; models interact with connectors through WAG-owned tools/functions that enforce authorization independently of what the model asks for; a missing/insufficient connector means the agent states the limitation and requests the connection rather than guessing; connector authorization, token-refresh failures, permission changes, and sensitive use all log to `activity_log` (no new table needed — same reuse-the-platform-layer pattern as Section 53); API-derived data is explicitly distinguished from manual/exported data, never blended silently.

**WAG HQ surface:** new `/connectors` page, added to the live nav (not the "planned" section — this is real, permanent infrastructure, just currently empty). Honest empty state: states plainly that all Studio/GSC/GA4 data is still pulled manually via Chrome session, and that a connector is added here only when a real department needs one. `system_health`'s existing "Studio/GSC/GA4 integration" row updated to reference the registry's existence without overclaiming readiness.

**YouTube specifically, recorded for when it's actually built:** official Google OAuth + YouTube Data/Analytics APIs, never Studio credentials; start read-only/minimum-scope; WAG Main and WAG Podcast get separate `connectors` rows (separate `brand_id`) even though both may authorize through the same Google account; write/manage scopes added only if a later approved workflow genuinely needs them.

**Portability, consistent with Section 22's Own/Rent framing:** the connector integration code and every piece of derived company intelligence it produces are WAG-owned; access to the underlying third-party platform (YouTube, Google Search Console) remains rented and revocable — losing a connector loses the pipe, not the data already pulled through it.

---

## 58. WAG HQ PREMIUM PRODUCT & EXECUTIVE EXPERIENCE STANDARD (2026-08-10, supersedes the shorter 2026-08-10 note earlier this session)

Katie sent a short design note first, then an expanded 19-point version explicitly stating "that version includes what I actually meant" — this section reflects the expanded, authoritative version. Not a Phase 1 scope expansion. The bar: WAG HQ should eventually feel like a private command center built for a sophisticated media company, with sophistication coming from how intelligently it organizes/prioritizes/explains/acts on information — not from decorative AI aesthetics. The **10-second CEO test** is the north star for the home experience specifically: *how is WAG doing / what changed / what needs Katie / what are the three highest-value next things* — answerable without interpreting dozens of KPIs, via progressive disclosure (executive answer → explanation → underlying evidence on demand).

**Anti-pattern audit against the current build (real, not assumed):** no gratuitous gradients, no decorative/fake-AI imagery, no glow effects, no meaningless charts, no emoji. One real risk named honestly — Home and WAG Main lean on a repeated `wag-card` pattern; not yet "excessive," but the standing rule is to keep testing new sections against the executive-answer-first shape (Home's "Good morning, Katie" headline-then-detail structure) rather than defaulting to another flat card grid as pages multiply.

**Visual identity (item 1):** Section 52, cross-referenced, already satisfies "pink as accent not the whole interface, centralized tokens, functional colors kept meaningful." Light/dark themes: not started, explicitly "eventually."

**Status of each of the 17 named product areas — what's real today vs. explicitly deferred:**

| Area | Status |
|---|---|
| Good Morning Katie briefing (§3) | **Partial.** Home page has the shape (headline stats, "decisions needed," recent activity) with real data — not yet the Company-Health-by-department + "Top 3 Today" structure in Katie's example. Natural next iteration once WAG Podcast/Revenue tables exist to summarize. |
| What Changed While You Were Away (§4) | **Not built.** Needs `activity_log` to have real volume and a significance filter (not a raw dump) — premature with the table nearly empty. |
| Decision Center / Needs Katie (§5) | **Partial.** Home's "Decisions needed" + `/decisions` + `/tasks` exist; not yet unified with Approve/Reject/Why?/Send-Back actions flowing into a Decision Ledger — `decisions`/`decision_overrides` tables exist and are the landing spot for this when built. |
| Why? drill-down (§6) | **Not built**, but Section 56 already confirmed the underlying data (evidence, confidence, rationale, employee/version, prediction, freshness) exists in the right shape to support it without a schema change. |
| Command Bar / Ctrl+K (§7) | **Not built.** Section 56, item 3 already names the hard requirement: routes through the Chief of Staff and real managers, never a generic embedded chatbot. |
| Company Pulse (§8) | **Not built.** No revenue/audience-trend tables exist yet to summarize honestly; building the visual before the data would mean fabricating trend arrows. |
| Digital organization view (§9) | **Partial.** `/ai-team` lists real employees/roles/departments/status — not yet the department-hierarchy view with calibration/cost/health Katie describes; explicit standing rule carried over: don't manufacture performance metrics before real evaluation data exists. |
| Agent Workroom (§10) | **Not built.** No autonomous worker exists yet to have a workroom for (Freshness Reviewer is still pending a model API key) — this is correctly sequenced after real agent activity exists, not before. |
| WAG Brain / Intelligence Vault (§11) | **Partial.** `/brain` shows real `canonical_facts` with evidence-tier badges — not yet organized into the named categories (Audience/Formats/Titles/etc.) or searchable; the evidence-tier visual language (PROVEN/STRONG EVIDENCE/HYPOTHESIS/DISPROVEN) is close to what's already in place (`EvidenceBadge`), needs a DISPROVEN state added to the enum when a real disproven fact exists. |
| Asset Vault (§12) | **Partial.** `/assets` exists as a plain registry (0 rows today) — not yet showing growth/compounding; Own/Rent/Replaceable/Dependency classification is Section 22's framework, not yet surfaced in the UI. |
| Experiment Lab (§13) | **Partial.** `/experiments` already shows hypothesis → prediction → real outcome for the 6 real predictions in WAG Brain — close in spirit; not yet the WON/LOST/INCONCLUSIVE resolution states or "did company knowledge change" linkage. |
| Opportunity Radar (§14) | **Not built.** No `opportunities` table exists — correctly not fabricating comparability scores (Impact × Confidence × Strategic Fit × Asset Value / Cost) before real opportunities are logged with real evidence behind each factor. |
| Scenario Room (§15) | **Not built, explicitly not Phase 1** per Katie's own words. |
| System & Connector Health (§16) | **Done.** `/connectors` (Section 57) and `/system` both exist, both honest, both drill-down-ready (System Health already separates the headline status from the `details` text). |
| Product craft (§17) | Ongoing discipline, not a one-time task — typography/spacing/hierarchy/empty-states/loading-states applied consistently as each page is built, not retrofitted at the end. |
| Architectural discipline (§18) | **Done**, cross-referenced to Sections 53 (platform/WAG-intelligence separation) and 55 (interface independence) — both audited already, both hold. |
| Phase discipline (§19) | This section itself is the compliance mechanism — every future concept above is recorded with real status, not built ahead of its approved phase. |

**Standing rule carried forward from the shorter note:** every new Phase 1 page should read as a plain, honest first draft of one of these named areas — not a disconnected one-off screen — so later polish is refinement, not a rebuild.

---

## 59. WAG BRAIN INDEPENDENT BACKUPS — real, zero-cost automated export (2026-08-10, updated same day)

**Update:** shortly after this section was written, Katie upgraded the `wag-brain` Supabase organization to the **Pro** plan herself — confirmed via API (`get_organization` → `plan: "pro"`), not initiated or requested by this session. This was her own call, made directly with Supabase outside this build. Pro adds native daily backups provider-side, which the original "avoid a Pro upgrade solely for backups" framing below no longer needs to route around. **The GitHub Actions export built below is kept regardless** — Katie's actual instruction was "do not rely solely on provider-side persistence," and a second, independent, WAG-controlled copy is the real requirement Pro doesn't replace on its own. Everything below describes that independent layer; treat Supabase's own Pro-tier backups as a separate, additional layer confirmed to now exist but not re-documented here (see the Supabase dashboard, Settings → Database → Backups, for its exact retention/schedule).

Original section, unchanged below:

Katie's instruction: WAG Brain is becoming company-critical IP and must not rely solely on Supabase's own persistence. Design and implement a WAG-controlled backup process — without upgrading to a paid Supabase tier solely for this. Built now, against her exact 7 requirements:

1. **Scheduled logical exports** — `.github/workflows/wag-brain-backup.yml` in the `wag-hq` repo, `pg_dump` via GitHub Actions on a daily cron (`0 8 * * *`), plus manual `workflow_dispatch` for on-demand runs.
2. **Encrypted storage outside the live database project** — the dump is gzipped, then encrypted with `openssl aes-256-cbc -pbkdf2` using a passphrase held only in the repo's GitHub Actions secrets, then committed to a `backups/` directory in the same private `wag-hq` repo. This satisfies "outside the live database project" (GitHub ≠ Supabase) without spinning up a new storage vendor. Explicitly not a public repo — `wag-hq` is private (Section on GitHub push, this session).
3. **Retention/version history** — git itself is the version history (every backup is a distinct commit, nothing overwrites a prior one). No automated pruning yet — a real, named follow-up once backup volume makes repo size worth managing, not built prematurely.
4. **Backup success/failure logging in WAG HQ** — every run (success or failure, including the "secrets not configured yet" case) writes to `activity_log` and `refresh_jobs` via `psql`, the same tables the Freshness Reviewer uses — reusing the platform layer per Section 53, not inventing a parallel logging path. `/system` already renders `refresh_jobs`; a backup failure shows up the same way a Freshness Reviewer failure would.
5. **No secrets committed to Git** — the connection string and passphrase are GitHub Actions secrets only, entered by Katie directly in GitHub's repo settings, never given to Claude Code or written to any file in the repo.
6. **Documented restore procedure** — written as a comment block directly in the workflow file (not a separate doc that can drift out of sync): decrypt with `openssl enc -d`, gunzip, `psql -f` into a scratch database first before ever restoring over a live one.
7. **Periodic restore testing** — not automated yet, explicitly named as a follow-up "once the system becomes mission-critical," per Katie's own framing — restore testing on a system with zero real backups yet would have nothing to test.

**Explicitly not done:** no upgrade to Supabase Pro, no new paid vendor, no encryption-key management service — the passphrase lives in GitHub's own secret store, which is the same trust boundary already accepted for the Anthropic key (Section 51/57 pattern).

**Two GitHub Actions secrets Katie needs to add to the `wag-hq` repo** (GitHub → repo → Settings → Secrets and variables → Actions) — a third and fourth item on her list alongside the Supabase leaked-password toggle and the Anthropic key, kept clearly distinct:
- `SUPABASE_DB_URL` — **the Session Pooler connection string** (Supabase Dashboard → Project Settings → Database → Connection string → "Session pooler" tab), **not** Direct connection. **Correction (2026-08-11):** the original guidance here said Direct connection — that was wrong. GitHub-hosted Actions runners have no outbound IPv6, and Supabase's Direct connection is IPv6-only without the paid IPv4 add-on (not purchased). Session Pooler is free, IPv4-reachable from GitHub Actions, and the only pooler mode Supabase documents as `pg_dump`-safe (Transaction Pooler multiplexes connections and breaks it). Caught before the secret was ever set — no live workflow ran on the wrong connection type.
- `BACKUP_ENCRYPTION_KEY` — any strong passphrase Katie generates once (a password manager's generator is fine) and keeps a copy of somewhere safe outside GitHub too — if this passphrase is ever lost, existing encrypted backups become unrecoverable, so it is not itself something to regenerate casually.

---
