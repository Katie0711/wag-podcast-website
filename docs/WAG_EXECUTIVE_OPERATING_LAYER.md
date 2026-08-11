# WAG Executive Operating Layer

**One executive question this module answers: is Katie spending her attention on the handful of decisions that actually move the company, or is she manually stitching together dozens of agents and dashboards herself?**

**Status: approved long-term architecture, 2026-08-11. Not yet built.** This document exists so the requirement survives past this conversation and past any future session's context window — per the standing rule that company docs, not chat history, are WAG's source of truth. Nothing below should be implemented until its phase (see "Implementation sequence") is actually reached. Building any piece of this ahead of its real evidence base would produce exactly what Katie explicitly warned against: a collection of department dashboards or a generic chatbot wearing an executive costume.

---

## The core problem this solves

WAG OS was at real risk of becoming a pile of separate department tools — a Greenlight Manager here, a connector health page there, eventually a Podcast GM, eventually specialist agents — each useful alone, none of it adding up to something a CEO can actually run a company through. Katie is the human CEO. She should usually interact with **one** executive layer, not manage dozens of agents by hand.

## Chief of Staff / Executive Operator

A top-level AI role sitting above every manager and specialist, acting as Katie's primary interface to the whole of WAG OS. Its job:

1. Receive Katie's questions/instructions in plain English.
2. Delegate work to the appropriate GMs/managers/specialists — never do specialist work itself.
3. Monitor whether managers/employees are actually completing what they were delegated.
4. Reconcile conflicting departmental recommendations (e.g. Packaging wants a shock-value thumbnail, Personality Preservation flags it as off-brand) rather than passing the conflict to Katie unresolved.
5. Surface only the highest-value decisions and opportunities — filter, don't forward everything.
6. Maintain a ranked, company-wide ROI/priorities queue.
7. Tell Katie what changed while she was away.
8. Identify risks, stalled work, underperforming agents, and stale intelligence.
9. Summarize company performance in plain executive language, not raw metrics dumps.
10. Enforce North-Star/company-mission alignment on what gets surfaced and prioritized.
11. Escalate consequential actions to Katie rather than acting beyond its authority — this role inherits every rule already in the Company Constitution's AI-authority policy; it gains no standing exemption from human approval on anything privileged, financial, or public-facing.

**Hard requirement, not a nice-to-have:** the Chief of Staff's command interface must route through real WAG Brain data, real managers, real specialists, real permissions, and real evidence. It must not be a generic chatbot embedded in the homepage answering from general knowledge. If it cannot cite which manager/specialist/data source a claim came from, it should say so rather than improvise.

## Homepage as a live executive command center

The long-term target for WAG HQ's homepage, replacing the current static Home page over time:

- **Good Morning Katie** briefing
- **What Changed Since You Were Away**
- **Top 3 Priorities Today**
- **Needs Katie** decision queue
- **Company Pulse**
- **CEO command bar** (ask-anything interface, routed through the Chief of Staff, never a bare LLM chat box)
- Highest-ROI **opportunity queue**
- Active **company missions**
- Live **department/agent status**
- **Important alerts**
- **Recent learning / standards changed**

This is UI over real substance, not the substance itself — it is built last, once the Chief of Staff has real managers, missions, and standards to summarize. Building the dashboard before the data it displays exists would be decorative, not operational.

## Growth Missions

Cross-department missions so departments don't operate in silos. Each mission carries: goals/KPIs, responsible managers, active experiments, blockers, current confidence, and progress. Example missions Katie named:

- WAG Main breakout growth / repeatable IP
- 70%+ retention improvement
- WAG Podcast growth
- Non-AdSense revenue expansion
- Owned audience growth
- Books/IP growth

A mission only means something once at least two real departments/managers exist to coordinate around it — this is why Missions is sequenced after WAG Podcast's department stands up, not before.

## Retention Operating System (WAG Main)

A permanent, specialized system — not generic retention advice — built from WAG's own actual performance:

- Pre-publish hook/retention prediction
- First-30/60-second analysis
- Transcript/story/edit alignment
- Retention-curve analysis (see `WAG_CONNECTOR_CAPABILITY_MATRIX.md` — the raw curve is real and API-available via `elapsedVideoTimeRatio`, but not yet ingested)
- Traffic-source differences
- Concrete drop/spike diagnosis
- Cross-video pattern detection
- Postmortem
- Versioned WAG retention standards

**Explicit constraint Katie stated:** do not fabricate causal certainty from correlation. A retention dip coinciding with a specific edit choice is evidence to investigate, not proof of causation, until enough repeated, controlled observation supports a stronger claim — the same evidentiary discipline already used in `WAG_EXPERIMENT_REGISTRY.md`.

## Standards Board

A versioned company standards layer, current state visible at all times, covering:

- Hook Standard
- Retention Standard
- Title Standard
- Thumbnail Standard
- Format Standard
- Storytelling Standard
- Editing Standard
- Personality/Voice Standard

Every standard shows: evidence, confidence, version, freshness, why it last changed, and what evidence could change it again. This formalizes work that already exists informally across `WAG_STORYTELLING_SYSTEM.md`, `WAG_TITLE_FORMULA_LIBRARY.md`, `WAG_FORMAT_LIBRARY.md`, and `WAG_PACKAGING_INTELLIGENCE.md` — the Standards Board's job is to give those living docs one consistent, versioned, evidence-tagged shape rather than replace them.

## Always-Ahead Intelligence (external R&D)

A dedicated function continuously monitoring meaningful external change: YouTube/platform behavior, top/rising creators, formats, packaging, teen audience trends, the podcast landscape, Spotify/Apple, Amazon/books, marketing strategy, the creator economy/revenue, AI/software opportunities, and new platforms/business models.

**Explicit noise filter Katie required**, applied to everything before it reaches WAG Brain: *What changed? → Does it matter to WAG? → Evidence → Opportunity/impact → Recommended action.* Anything that doesn't survive that pipeline does not get recorded as company intelligence.

## Automatic postmortems

Every meaningful video, podcast episode, campaign, sponsor initiative, product/book launch, or experiment should ultimately produce a real prediction-vs-actual comparison and feed the correct playbook/standard when the evidence actually warrants a change. This is not a separate later phase — it is a discipline built into each manager/specialist as it is created (the Greenlight Manager's `predictions`/`outcomes` tables already do a version of this for video ideas; every future specialist should follow the same pattern rather than inventing its own).

## Success standard

WAG OS is not successful because it has many agents or dashboards. It is successful only if it measurably improves: WAG Main growth, retention/watch time, video hit rate, packaging performance, WAG Podcast growth, audience growth, revenue/profit, sponsor performance, book/IP performance, owned assets, decision quality, execution speed, and CEO time/attention.

The operating system should continuously ask: **what are the highest-value actions WAG can take now to become a multi-million-dollar media company?**

---

## Implementation sequence (proposed, not yet approved for execution beyond the current phase)

Ordered so each phase has real evidence/managers to work with before the layer above it gets built — building top-down would produce exactly the hollow dashboard/chatbot Katie warned against.

1. **(In progress) Data foundation.** WAG Main + WAG Podcast YouTube connectors, proven security architecture, data-integrity guarantees, verified API capability matrix. Nothing above this layer means anything without real first-party evidence underneath it.
2. **WAG Podcast department stands up.** GM + the 15 named specialist functions, designed first (next deliverable), built incrementally after. Gives WAG OS its second real department — a prerequisite for Missions, which need at least two departments to coordinate.
3. **Standards Board.** Formalize the standards that already exist informally (Storytelling, Title, Format, Packaging) into one versioned, evidence-tagged shape, extended to cover Hook/Thumbnail/Editing/Personality as real evidence accumulates. Both departments plug into the same Standards Board rather than each inventing their own.
4. **WAG Main historical ingestion + Retention Operating System.** Once enough real video history is ingested (per Katie's item 4 from the connector directive), build the retention-specific pipeline — this needs the retention-curve and traffic-source data identified as real-but-not-yet-ingested in the Capability Matrix.
5. **Growth Missions.** Cross-department coordination layer, now meaningful because two real departments with real managers and KPIs exist to coordinate.
6. **Chief of Staff / Executive Operator.** The capstone — built once there are real managers, specialists, missions, and standards for it to delegate to, monitor, and summarize. Built any earlier and it would be, in Katie's own words, "a generic chatbot embedded in the homepage."
7. **Homepage Command Center UI.** Last. This is the visual layer over the Chief of Staff's real outputs (Good Morning briefing, What Changed, Top 3 Priorities, etc.) — built once there is real substance to display, not before.

**Always-Ahead Intelligence** and **automatic postmortems** are cross-cutting, not single phases: Always-Ahead can start as a small, low-priority parallel track any time after phase 1 since it doesn't depend on internal structure, though its recommendations are far more useful once the Chief of Staff (phase 6) exists to route them. Automatic postmortems should be built into every manager/specialist from the moment each is created, not bolted on later.

This sequence itself is not fixed — the Chief of Staff, once real, is exactly the kind of thing that should periodically re-evaluate and re-sequence company priorities. This document defines the destination and the reasoning for the order; it is not a rigid roadmap immune to revision as real evidence comes in.
