# WAG Agent Architecture

**Status: specification only. Zero agents deployed as of 2026-08-08.** This document defines how WAG could safely run multiple specialized Claude Code sessions/agents in parallel someday — it is not a build plan for today, and it does not pause or reorder the live website roadmap. Per Katie's explicit instruction: design now, deploy selectively, only when real evidence earns it.

---

## Governing principle

The same sequencing already committed to in the WAG Publishing Engine (`wag-publishing-engine/README.md`) applies here, verbatim:

**Understand workflow → run real work → observe repetition → choose the simplest reliable mechanism → only then automate or agentize.**

Not every responsibility needs an agent. Several jobs are better served, permanently, by simpler mechanisms:

- **Skills** — a repeatable procedure a human or Claude session follows on demand (e.g. the existing publishing-workflow skills envisioned for the book project).
- **Reusable prompts** — a well-scoped one-off ask that doesn't need standing memory or autonomy.
- **Scripts** — deterministic, no reasoning required (e.g. the Python image-resize pipeline used twice already for dual-use image fixes).
- **Deterministic software** — a real feature or check with no judgment calls (e.g. a build-time dual-use-image-size checker, if that pattern ever crosses to a 3rd instance per `SOFTWARE_INCUBATOR.md`).
- **Checklists** — a sequence a human should walk deliberately (e.g. `SPONSOR_DISCLOSURE_CHECKLIST.md`, `LAUNCH_CHECKLIST.md`).
- **Human review** — anything touching brand judgment, legal exposure, or the girls' privacy/safety.

**Agents are appropriate only where autonomous reasoning + tool use creates real leverage** — genuine judgment, synthesis across sources, or navigating ambiguity a script can't. Everything below is written to be evaluated against that bar, not assumed.

---

## Proposed agent roles

Nine roles, evaluated — not built — against real evidence over time. Each maps to real, already-existing WAG documents/systems it would eventually read from and write to, so this isn't invented from nothing.

### 1. Chief of Staff / Orchestrator
**Job:** reads shared company state, knows current priorities, identifies blockers, delegates, summarizes outcomes. **Does not edit everything itself** — coordination only.
Would read: `MASTER_STATUS.md`, `ROADMAP.md`, `CEO_COCKPIT.md`. Would write: task assignments, blocker summaries.

### 2. Growth Intelligence
**Job:** monitors YouTube, website, Beehiiv, Spotify/Apple, GA4, Search Console, interactions. Answers: what's growing, what's declining, what changed, what's worth investigating.
Would read/write: `CEO_COCKPIT.md` directly — this is the role most likely to make that document's "should this be a widget" question concrete first.

### 3. Packaging
**Job:** owns title/thumbnail/hook intelligence using WAG's own historical results plus validated competitors (LOL Podcast, Rock Pod, future additions). **Improves `WAG_PACKAGING_INTELLIGENCE.md` — it does not just generate titles.**
Would read: `COMPETITIVE_INTELLIGENCE.md`, YouTube Studio performance data. Would write: new patterns into `WAG_PACKAGING_INTELLIGENCE.md`, following its exact 10-field spec.

### 4. Publishing
**Job:** watches the real publishing flywheel — video → websites → article relationships → interactions → email → search/entity updates — and verifies propagation, flagging breaks (e.g. the kind of thing the duplicate-Organization-schema bug or the Listen page's stale-priority drift would have been caught by, both logged in `PRODUCT_JOURNAL.md`).
Would read: `PUBLISHING_BLUEPRINT.md`, `content-refresh-tracker.md`. Would write: freshness/propagation flags.

### 5. SEO / AEO / GEO
**Job:** evidence-backed search and AI-discoverability opportunities only. **Explicit anti-goal: avoid endless re-auditing** — this project has already run several full audits; the agent's job is catching genuine drift, not repeating them on a schedule.
Would read: `SEARCH_CONSOLE_BASELINE.md`, GSC/GA4 data. Would write: dated, evidence-cited findings only.

### 6. Sponsor / Business Development
**Job:** maintains sponsor intelligence, creator-discovery research, press opportunities, agency relationships, authority signals, case studies, sponsor-page readiness.
Would read/write: `BUSINESS_DEVELOPMENT_SYSTEM.md`. Also the natural owner of the sponsor-inquiry tracking gap `CEO_COCKPIT.md` just surfaced (no such system currently exists).

### 7. Audience Intelligence
**Job:** looks across interaction results, email behavior, content performance, and audience preference signals. **This is the future bridge toward the Audience Graph** already named in `WAG_OPPORTUNITY_REGISTRY.md`.
Would read: interaction vote data (Netlify Blobs), Beehiiv segments. Would write: toward a future Audience Graph, not yet built.

### 8. Competitive Intelligence
**Job:** tracks only the small, deliberately-scoped competitor set (currently LOL Podcast + Rock Pod, per `COMPETITIVE_INTELLIGENCE.md`'s own scope-discipline rule) for title patterns, thumbnail patterns, recurring formats, product launches, business architecture, failures, and structural shifts — not just tactics to copy.
Would read/write: `COMPETITIVE_INTELLIGENCE.md` directly, including its Rule-of-3 and WAG Wins sections.

### 9. Product / Software Incubator
**Job:** reviews recurring operational patterns and updates `SOFTWARE_INCUBATOR.md`, `WAG_OPPORTUNITY_REGISTRY.md`, `PRODUCT_JOURNAL.md`. **Must never manufacture software demand that doesn't exist** — same evidence-only discipline already governing those docs by hand.

### Publishing / IP Agent Team (kept fully separate)
Lives in the `wag-publishing-engine` repo, never the website repos. Specialized functions already identified in `WAG_KNOWLEDGE_HANDOFF.md`: opportunity/content mining, research, book architecture, writing, WAG voice editing, fact-checking, safety review, art direction, character/IP consistency, final QA, production, metadata/distribution. **None of these get instantiated as agents before one real book proves the manual workflow** — the exact commitment already made in that project's README.

---

## Shared company memory

Agents must not rely on isolated chat memory. Real decisions, evidence, blockers, opportunities, and results have to land in shared structured records — the actual `docs/` files already listed above, not an agent's private context window. **The eventual shared surface for this is WAG OS / the CEO Cockpit** (`CEO_COCKPIT.md`, currently v0.1 and manually maintained) — until that matures, the existing docs folder *is* the shared source of truth, and any agent work has to write back into it the same way manual work already does.

## Isolation and parallel work

For multiple Claude Code sessions to run safely at once:

- **Separate git branches/worktrees** per agent, not shared working state.
- **Clearly scoped repos** — an agent working on `thewagpodcast-website` should not also be touching `wildadventuregirls-website` or `wag-publishing-engine` in the same run unless the task is explicitly cross-repo.
- **Defined ownership boundaries** — one domain, one agent, at a time.
- **No two agents editing the same file/module simultaneously** unless explicitly coordinated by the orchestrator.
- **Explicit handoff reports** — one agent's output becomes the next agent's documented input, never a silent overwrite of another agent's work.

## Permission model

Three levels, applied per-agent, per-task:

| Level | Scope |
|---|---|
| **Read-only** | Research, analytics, audits — the default for Growth Intelligence, Competitive Intelligence, SEO/AEO/GEO. |
| **Propose** | Can prepare changes but requires human approval before publishing or sending. |
| **Execute** | May make approved, low-risk internal changes without a fresh approval each time. |

**Regardless of level, these always require explicit human approval:** sending external communications, legal submissions, publishing sensitive data, spending money, changing account credentials. This mirrors the existing safety rules this project already operates under — the agent architecture doesn't loosen them, it inherits them.

## Reporting standard

Every agent returns, every time, in this exact shape:

1. What it checked
2. What it found
3. Evidence
4. What it changed
5. What it did not change
6. Blockers
7. Recommended next action
8. Business impact

## Conflict prevention

The orchestrator has to know, at all times: which agent owns which domain, which branch each is working on, what tasks are currently active, what dependencies exist between them, and what has to wait on something else finishing first. This is a coordination job, not a technical one — it's the same discipline this project already applies manually (e.g. never running two overlapping website edits at once, always checking `git status` before anything destructive).

## Relationship to the CEO Dashboard

Every time an agent would need to repeatedly pull information from multiple systems to do its job, that's the same signal `CEO_COCKPIT.md` already tracks: treat it as evidence for a Cockpit widget, not a reason to build agent-side plumbing that duplicates it. Long-term, the Cockpit becomes the shared operational surface for humans *and* agents — one source of truth, not two.

## Activation gate — do not over-engineer

This document is a specification exercise first. WAG is not launching ten agents tomorrow. A proposed role only gets activated once its underlying workflow has:

- Repeated enough times to be a real pattern, not a one-off
- Clear inputs
- Clear outputs
- Measurable value
- Safe permissions available at its required level

This is the identical bar `SOFTWARE_INCUBATOR.md` already applies to software ideas generally — this document doesn't introduce a new standard, it applies the existing one to agents specifically.

## Long-term commercial possibility

**WAG is the first customer.** Treat the entire internal multi-agent system, if and when parts of it get built, as a proving ground — not a product built for hypothetical outside customers. If this operating model demonstrably improves how WAG runs as a creator-led media business, document that evidence in the Business Assets ledger (`SOFTWARE_INCUBATOR.md`). Only then — with real, WAG-proven evidence in hand — evaluate whether any part of it becomes a creator membership, a template/playbook, licensed infrastructure, or commercial software. This is the same gate already governing the Creator Operating System row in `WAG_OPPORTUNITY_REGISTRY.md`; this document doesn't add a second one.

---

*This document should evolve the same way every other living system in this project does: update it when real evidence changes the picture, not on a schedule. If a proposed role turns out to be wrong once real workflow patterns emerge, revise it rather than defending the original design.*
