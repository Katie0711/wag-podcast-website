# WAG — Read This First

This file loads automatically at the start of every Claude Code session in this repository. That auto-load is the entire anti-drift mechanism — no new software, no orchestration platform, just this file doing the one thing Katie asked for: making it unavoidable that meaningful WAG architecture/build work starts from real company context, not from scratch or from this conversation's memory alone.

## The company-level control files moved (2026-08-15)

The 10 canonical company-control documents (Blueprint, Master Roadmap, Current State, Active Portfolio, Decision Log, Acceptance Tests, Asset/System Registry, Build Protocol, Executive Snapshot, Source-of-Truth Index) plus the Master Company Map and Parked/Trigger List now live in the standalone private repo **`Katie0711/wag-company-os`**, not in this repo's `docs/` folder. This repo (`wag-podcast-website`) keeps only its own product/domain documentation (`ROADMAP.md`, department architecture docs, SEO/research work, etc.) — real, useful, but not company-level.

**Before any architecture decision, new capability, new agent, or structural change, read `wag-company-os` first, in this order:**

1. **`01_blueprint/WAG_COMPANY_BLUEPRINT.md`** — the constitution. What company are we building. Check before anything that touches business architecture, org structure, or strategic principles.
2. **`02_roadmap/WAG_MASTER_ROADMAP.md`** — the complete destination architecture (all 18 capabilities, all 6 engines) plus the 5 currently-active engines and real dependencies. Check where the task belongs before assuming it's new.
3. **`03_current_state/WAG_CURRENT_STATE.md`** — evidence-cited §64 status per capability. Check what already exists before building it again.
4. **`05_decisions/WAG_DECISION_LOG.md`** — the *why* behind prior strategic calls. Check what's already been decided before re-deciding it.
5. **`06_acceptance_tests/WAG_ACCEPTANCE_TESTS.md`** — the real Definition of Done per active engine. A capability existing is not the same as it operating — check the actual end-to-end loop, not just whether the docs/schema/agents exist.
6. **`04_active_portfolio/WAG_ACTIVE_PORTFOLIO.md`** — the 3–5(-7) real items currently consuming execution capacity. Check this before proposing new work.

**If `wag-company-os` is not already cloned locally in this session,** clone it as a sibling directory before reading:

```
git clone https://github.com/Katie0711/wag-company-os.git ../wag-company-os
```

`WAG_OPERATING_SYSTEM_MAP.md` (this repo, `docs/`) indexes the *product-level* WAG OS docs that stay here — packaging intelligence, department architecture, research — and is the fastest way to find a more specific doc once the six company-level files above are read.

## The standing rules these six files encode

- **Capability existence ≠ operating maturity.** The real test is DETECT → RESEARCH → UNDERSTAND → RECOMMEND → DECIDE → EXECUTE → MEASURE → LEARN → CHANGE THE NEXT BET actually closing, not a well-populated research library.
- **Sequencing, not elimination.** The 5 active engines (Media & Audience, Revenue & Partnerships, Publishing & IP, Owned Audience/Digital Publishing, WAG OS/Operations) are a build-priority order, not the whole company. The full 18-capability, 6-engine destination architecture and the CEO→Executive AI/Chief-of-Staff→5 Directors→specialists→shared WAG Brain hierarchy stay represented in the Roadmap regardless of what's active today.
- **Research before asking.** Researchable questions get researched and resolved, not escalated. Only genuine strategic conflicts, potentially destructive merges/deletions, missing major capabilities, decisions that materially change the architecture, or real source-of-truth contradictions go to Katie.
- **Nothing external sends without Katie's approval.** Outreach, replies, pricing, proposals, contracts, filings, purchases — always drafted/prepared, never sent, without her explicit sign-off.
- **No inbound email link is ever clicked as verification.** Verify sender/company/person independently through trusted sources.
- **Don't build duplicate infrastructure because a request describes capabilities that already exist.** Check `WAG_CURRENT_STATE.md` and the relevant department architecture doc first — several real capabilities in this company (e.g. WAG Podcast's 19-specialist department design) already cover requests that read as new asks.
- **Source-of-truth precedence when documents conflict**, highest first: approved Blueprint → approved Decision Log entry → WAG Brain live operational truth → Master Roadmap → Current State → Active Portfolio → department/product documentation → dated research/audit documents → chat history. Chat history never silently overrides approved canonical architecture.

## What this file is not

Not a database, not an agent, not a build system. It's a pointer that loads by default so the six files above get read before real work starts, instead of depending on any single session remembering to look for them. If this file itself goes stale, fix it directly — it should always name the current 6 canonical files, nothing more.
