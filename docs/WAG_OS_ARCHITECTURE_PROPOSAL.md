# WAG OS Architecture Proposal

**North Star, Katie's own words, governing every choice below:** "Own the company. Own the learning. Rent the intelligence." WAG OS is WAG's own durable system; any AI model is a swappable executor of it, not the business itself. This proposal is for approval, not implementation — nothing here gets built until we agree on it.

---

## A. OWN / RENT / REPLACEABLE map

| Component | Category | Why |
|---|---|---|
| WAG Brain schema + data (facts, intelligence, predictions/outcomes, provenance) | **OWN** | The actual company asset. Must survive any vendor change. |
| Agent/manager specifications (role, mission, KPIs, rubric, history) | **OWN** | The "digital employee" record — model-independent by design (see D). |
| Orchestration/workflow code (how agents get invoked, scheduling logic) | **OWN** | WAG-specific business logic, not a commodity. |
| SOPs, taxonomies, evaluation rubrics, canonical facts | **OWN** | Institutional knowledge; the thing that makes WAG OS smarter over time. |
| WAG HQ application code (UI, APIs) | **OWN** | Ours to keep, extend, and move. |
| Claude / GPT / Gemini (the model call itself) | **RENT** | Commodity intelligence, swappable behind the interface in F. |
| Hosting, database infra (Postgres/Supabase-class), search/vector infra | **RENT** | Standard infrastructure — own the schema and data, not the servers. |
| Email, analytics APIs (GA4, YouTube Data API, etc.), other third-party data sources | **RENT** | External data providers; WAG owns what it derives from them, not the pipes. |
| Prompt text / system instructions for a given agent | **REPLACEABLE** | Regenerable from the agent spec (D) — the spec is the asset, not today's exact prompt wording. |

---

## B. WAG Brain — what becomes canonical

**Structured (lives in WAG Brain, per Section J below):** videos, creators (external + WAG's own), titles, formats, experiments, predictions, outcomes, sponsors, contacts, deals, revenue, KPIs, agent/manager performance history, canonical company facts (cast, ages, relationships, current strategy), accepted/rejected/superseded hypotheses.

**Long-form (stays version-controlled documents, referenced by WAG Brain, not duplicated into it):** brand book, creative philosophy, production manual, executive strategy, policies. Everything already built this session (`WAG_CREATIVE_FORMULA_V1.md`, the Format/Title Libraries, `WAG_MAIN_COMPETITIVE_LANDSCAPE.md`, etc.) sits here today — real, durable raw material, migrated in per Section I below when WAG Brain exists, never rebuilt from scratch.

**Every record, structured or not, carries:** Source, Entity/Brand (WAG Main / Podcast / company-wide), Type (observation/hypothesis/recommendation/decision/experiment/confirmed finding), Status (unverified/supported/testing/confirmed/rejected/superseded), Confidence, Evidence, Owner, Created/Updated, Version, Supersedes/Superseded-By, Prediction, Actual Outcome, Learning.

---

## C. Intelligence governance — how observations become accepted knowledge

```
Raw observation → Evidence/research → Agent hypothesis → Manager review/challenge
  → Accepted company intelligence → Experiment → Actual result → Updated intelligence
```

Agents discover aggressively and write freely at the "raw observation" / "hypothesis" stage — that's cheap and encouraged. Nothing gets promoted to **accepted company intelligence** (the tier other agents reason from by default) without passing manager review. Raw material is retained, not deleted, but it's clearly tagged below the line — this is exactly the discipline this session's docs already practice by hand (VERIFIED / STRONG EVIDENCE / OBSERVED PATTERN / HYPOTHESIS tiers); the governance layer just makes it structurally enforced instead of a writing habit.

---

## D. Agent architecture — the WAG Digital Employee spec

A WAG agent is a record, not a prompt:

```
role · department · manager · mission · responsibilities · authority
· prohibited actions · knowledge access (which WAG Brain tables/docs)
· tools · permissions · workflows · KPIs · evaluation rubric
· historical performance · predictions · actual outcomes · mistakes/learnings
· escalation rules · reporting requirements
```

Execution flow: **Agent Spec → WAG tools + WAG Brain knowledge/memory → Model interface (F) → Claude today.** The model executing the role is one swappable input; the spec, its history, and its accumulated learning persist independent of which model is running it. This refines the 9-role design already sketched in `WAG_AGENT_ARCHITECTURE.md` — those roles become the first real specs under this structure, not a separate system.

---

## E. Manager architecture — supervision and evaluation

```
Specialist Digital Employees → Department Managers → Division/Executive Intelligence → Katie
```

A manager's job, concretely: challenge conclusions, detect contradictions between agents, request more evidence before accepting a finding, reject weak work, resolve disagreements between specialists, monitor KPIs, flag an underperforming agent, escalate what genuinely needs Katie. **A manager's loyalty is to WAG's long-term success — not to agreeing with a specialist, a prior document, or Katie herself.** Real pushback, backed by evidence, is the job, not a bug. This is the accountability layer already named in `wag_os_ai_organization_structure` — this proposal makes its actual duties explicit rather than assumed.

---

## F. Model-provider layer — avoiding lock-in without over-engineering

A thin interface, nothing more, built only when the first real agent needs it:

```
Agent Spec → Model Interface (prompt-in, structured-response-out, tool-calling contract)
→ Claude today → (GPT / Gemini / local model later, without touching the agent spec above it)
```

No universal abstraction layer gets built ahead of need. One real adapter (Claude) ships first; a second provider gets added only when there's a real reason (cost, capability, redundancy) — not speculatively. The portability guarantee comes from the spec and the data being provider-agnostic (D, G), not from a heavyweight abstraction we'd otherwise spend weeks building before WAG HQ produces any value.

---

## G. Portability — how WAG could actually move providers

If we ever needed to leave Claude: (1) WAG Brain's schema and data export in an open format (Postgres dump / structured JSON — standard, not proprietary); (2) every agent/manager spec is a plain, versioned record (D), re-executable by pointing the model interface (F) at a different provider; (3) orchestration/workflow code is WAG's own, not a Claude-specific black box; (4) accumulated learning (predictions, outcomes, accepted intelligence) lives in WAG Brain, not in any model's memory or a chat history. Nothing in this architecture requires re-litigating "what does WAG know" if the intelligence provider changes — only "which model answers now."

---

## H. First implementation — smallest high-ROI version

Build leanly, in this order, expanding only when real use proves the need:

1. **WAG Brain v0** — a real, minimal structured store (a handful of core tables: `VideoIdea`, `CreativeMechanism`/`Format`, `TitleFormula`, `Competitor`, `Prediction`, `Outcome`, `CanonicalFact`), each carrying the governance fields from B/C. Not a full schema for every category in the North Star doc — the categories already active this session first.
2. **Migrate what already exists** (Section I) — the Creative Formula, Format/Title Libraries, Competitive Landscape, Greenlight records — into WAG Brain v0, applying the governance pipeline (raw docs get triaged into confirmed vs. hypothesis, not blindly ingested).
3. **One real digital employee first, not nine.** Best candidate: a **Greenlight Agent** — it already has a real, running process (`WAG_VIDEO_GREENLIGHT.md`'s Gate 0 + scorer), real inputs (Formula v1, the Format Library), and a real output (a decision) that's easy to evaluate against actual filmed results. Wrap it in a real spec (D), have it read/write WAG Brain v0 instead of a markdown file, and let one Manager (Creative Manager) review its output before it's "accepted."
4. **Prediction-vs-actual tracking from day one** on that one agent — even minimal (a predicted Gate-0/score fit vs. the real published outcome) — since this is explicitly named as one of WAG OS's most valuable long-term assets and costs almost nothing to start capturing now versus retrofitting later.
5. Expand to a second agent/department only once #3 has real outcomes to point to.

---

## I. Migration discipline (not throwing away current work)

When WAG Brain v0 exists, migrating today's docs is itself a governed process, not a bulk import:
- Extract discrete claims/records from each doc.
- Preserve original source (which doc, which research pass).
- Flag contradictions between docs (e.g., an earlier "3 lanes" framing superseded by the corrected 2-lane version) rather than silently picking one.
- Distinguish hypothesis-tier content from confirmed findings using the tiers already in the docs.
- Keep WAG Main / WAG Podcast records structurally separate, never merged by convenience.
- Only promote a record to canonical/accepted status through the real governance pipeline (C) — a document existing is not the same as its contents being accepted company intelligence.

---

## J. Risks

- **Premature schema lock-in.** Designing WAG Brain's full cross-domain schema (sponsors, revenue, ops, etc.) before any of those departments have a real digital employee risks guessing wrong. Mitigation: build the minimal schema for what's active now (H.1), extend per-domain only when that domain gets its first real agent.
- **Governance overhead slowing real work.** A manager-review gate on every finding could become a bottleneck if implemented heavily. Mitigation: start with lightweight review (a manager agent, not a human, for routine cases; Katie only for genuine escalations), tune from real friction, not assumed friction.
- **Data-ownership gap today.** Right now, real intelligence gathered by Claude sessions/workflows lives in session transcripts and markdown docs, not in anything WAG directly owns and can query outside of a Claude session. This is the actual, current version of the vendor-lock-in risk the whole directive is aimed at — closing it is what H.1–H.2 are for.
- **Security/access control is undefined.** WAG Brain will hold real business data (sponsor contacts, revenue, minors-adjacent production facts). A real permission model (who/what can read/write which tables) needs to exist before this holds anything sensitive — not designed in this proposal, flagged as a real prerequisite for H.1.
- **Provenance discipline degrading under speed pressure.** The whole governance model depends on every record honestly carrying its evidence tier. The single biggest risk to the whole system is the same one already seen in this session's own docs (evidence-tier inflation, caught repeatedly by Red Team in the certification runs) — this isn't a new risk WAG Brain introduces, it's an existing one that structured governance is meant to catch more reliably than manual discipline alone.

---

*This is a proposal for approval, not a build. Once approved, Section H is the actual build order — starting with WAG Brain v0 and one real Greenlight Agent, not all nine roles at once.*
