# WAG Build Protocol — Anti-Drift / Continuity Rules

**LAST VERIFIED:** 2026-08-15
**VERSION:** v1.0
**OWNER:** Katie Swans
**PURPOSE:** Transcribes Katie's "WAG OS Build Control / Anti-Drift Protocol" addendum and her follow-up disaster-recovery addendum, verbatim in substance, as the permanent operating rule for every future session touching WAG's architecture. This file *is* the control layer — it does not get re-litigated per session.

---

## 1. Permanent control documents

| File | Role |
|---|---|
| `WAG_COMPANY_BLUEPRINT.md` | Company constitution/destination |
| `WAG_MASTER_ROADMAP.md` | Complete capability/build map with dependencies — **not yet consolidated, see reconciliation report Duplication #18** |
| `WAG_CURRENT_STATE.md` | Factual maturity/status of every capability — **not yet consolidated, see reconciliation report Duplication #19** |
| `WAG_ACTIVE_PORTFOLIO.md` | Only the 3–5 active company outcomes currently consuming execution capacity |
| `WAG_DECISION_LOG.md` | Important business/architecture decisions and why — **proposed: adopt `CEO_DECISIONS.md` rather than duplicate, pending Katie's confirmation** |
| `WAG_ACCEPTANCE_TESTS.md` | End-to-end Definition of Done for major company capabilities — draft chains only exist so far, inside the reconciliation report |
| `WAG_BUILD_PROTOCOL.md` | This file |
| `WAG_EXECUTIVE_SNAPSHOT.md` | Regenerated, human-readable "what's going on right now" snapshot |
| `WAG_SOURCE_OF_TRUTH_INDEX.md` | One-page lookup: where does authoritative truth for X actually live |

Do not blindly create duplicate files if equivalent canonical files already exist. First inspect/reconcile existing documentation and either reuse, rename, merge, or propose changes.

## 2. WAG Brain remains dynamic truth

Markdown controls architecture and slow-changing operating context. WAG Brain/Supabase stores dynamic structured truth. Markdown does not replace operational databases; Supabase does not replace the high-level Company Blueprint.

## 3. No architecture-by-conversation

A current chat is not authorization to redesign the company. Before any material structural change: read Blueprint → Roadmap → Current State → Active Portfolio → relevant decisions/ADRs → relevant domain truth. Then identify where the requested work belongs. If it doesn't belong anywhere: propose a Roadmap/Blueprint change. Do not silently create a new branch of the company.

## 4. No uncontrolled creation

No new department, manager, specialist agent, database table, major workflow, vendor, integration, or architectural feature unless (A) it belongs to an approved roadmap capability, or (B) the change is explicitly proposed and Katie approves it. Emergency security/revenue/data-integrity fixes may occur when necessary, but must be reconciled back into the system immediately.

## 5. Reuse before build

Before creating anything, ask: does this already exist? Can an existing table represent it? Can an existing function/agent own it? Can an existing external product solve it? Is this infrastructure or differentiated WAG intelligence? Prefer reuse → extend → integrate → build, in that order.

## 6. Explicit Definitions of Done

A department is not done because an agent exists. A function is not operational because code exists. Each major capability gets an end-to-end acceptance chain (see draft chains in the reconciliation report §B, and the three examples Katie gave for Revenue/Publishing/Media). Do not use subjective "complete" language without the acceptance test.

## 7. Maturity language stays strict

Use the §64 maturity ladder consistently: DESIGNED → BUILT → CONNECTED → TESTED → OPERATING → LEARNING. Existence ≠ operational. Built ≠ tested. Tested ≠ verified. Verified once ≠ learning. Learning requires evidence that stored knowledge changes future decisions and improves prediction/decision quality across repeated cases.

## 8. Completion percentages

Do NOT fabricate completion percentages. If ever shown, derive them only from explicitly enumerated required capabilities/acceptance criteria. Prefer a maturity matrix over fake precision.

## 9. WAG OS Build Manager (role spec, not necessarily an autonomous agent yet)

**WAG OS Build Manager / Architecture Steward** — reports to the Chief of Staff/COO layer. Mission: keep the build aligned to the approved Blueprint/Roadmap and prevent drift/duplication. Responsibilities: roadmap integrity, dependency checks, current-state accuracy, duplicate detection, acceptance-test enforcement, architecture-change escalation, documentation synchronization, parked-work preservation, Definition-of-Done enforcement, session continuity. **It does not choose WAG's creative or business strategy — it protects the implementation of approved strategy.**

## 10. Session preflight

Before meaningful architecture/build work, establish: current company priorities, requested task, roadmap location, dependencies, existing capabilities to reuse, Definition of Done, approval boundaries, what will not be changed. Never begin by relying only on current chat context.

## 11. Session closeout

After meaningful work, record: what changed, what was proven, what failed, maturity change, roadmap change, current-state change, decisions, risks, blockers, needs Katie, next action. Update canonical control artifacts rather than leaving critical truth only in the chat.

## 12. Active Portfolio controls WIP

The full roadmap may contain dozens/hundreds of valid capabilities. Only a small number are active. `WAG_ACTIVE_PORTFOLIO.md` should contain no more than roughly 3–5 company-level outcomes at a time unless there is a genuine reason to expand. Each active outcome requires: owner, business outcome, why now, deadline/window, next action, dependency, blocker, KPI/evidence, Definition of Done, Katie decision required. New interesting ideas go into the Opportunity/Backlog system rather than hijacking current execution.

## 13. Preserve destination architecture

The complete multi-engine WAG company architecture remains in the Blueprint even when most components are not active. Mark every capability: ACTIVE NOW / NEXT / LATER-TRIGGERED / SHARED CAPABILITY / DESTINATION STATE / MERGE-REMOVE. "Not active" must never become "forgotten."

## 14. Architectural Decision Records

For significant decisions, preserve compact versioned records: ID, date, decision, context, alternatives, evidence/reason, consequences, status, supersedes, review trigger. Use these to prevent foundational decisions from being repeatedly re-litigated.

## 15. Source-of-truth rule

If the current conversation conflicts with an approved Blueprint/ADR/canonical fact: **stop and surface the conflict.** Do not silently choose the latest instruction merely because it is newest. Katie can intentionally supersede prior decisions — record the supersession when she does.

## 16. Build Manager's permanent question

At every major step: are we building the approved complete WAG system, or drifting toward today's most interesting conversation? If drift is occurring, flag it immediately.

## 17. Governance must not become its own project

Implement the minimum useful control layer. Do not spend days creating elaborate documentation bureaucracy. The goal is to lock the Blueprint/Roadmap/State/Portfolio/protocol sufficiently that the company can return immediately to Media growth, Sales/outbound, Publishing/books, IP expansion, and owned audience — with WAG OS supporting them. After the initial reconciliation, architecture stops being the primary work; execution becomes the primary work.

---

## 18. Disaster recovery / portability (added 2026-08-15)

The same "Claude must not forget" principle applies to vendor failure, account issues, accidental deletions, repo corruption, or a future decision to switch AI providers entirely. The company constitution and roadmap must not live only in Claude's workspace, chat history, or a single Git repository.

**Three-copy rule:**
1. **Primary working copy** — version-controlled repo with the canonical Markdown files and code (current state: `thewagpodcast-website/docs/`, real, version-controlled via Git).
2. **Operational truth** — WAG Brain/Supabase for structured current data (real, exists, subject to Supabase's own backup/PITR — separately verified this session).
3. **Independent backup copy** — a folder Katie controls outside Claude entirely, ideally Google Drive, periodically exported/downloaded somewhere else too.

**Proposed folder structure (not yet created — no Drive access exists in this session; see reconciliation report §L):**

```
WAG COMPANY MASTER/
  01_COMPANY_BLUEPRINT/
  02_MASTER_ROADMAP/
  03_CURRENT_STATE/
  04_ACTIVE_PORTFOLIO/
  05_DECISIONS_ADRS/
  06_ACCEPTANCE_TESTS/
  07_AGENT_MANAGER_SPECS/
  08_RIGHTS_CONTRACTS_ASSET_AUDIT/
  09_FINANCE_REVENUE_TRUTH/
  10_IP_PUBLISHING/
  11_MEDIA_PLAYBOOKS/
  12_BACKUPS_EXPORTS/
```

**Documents that must exist outside Claude, minimum set:** `WAG_COMPANY_BLUEPRINT.md`, `WAG_MASTER_ROADMAP.md`, `WAG_CURRENT_STATE.md`, `WAG_ACTIVE_PORTFOLIO.md`, `WAG_BUILD_PROTOCOL.md`, `WAG_ACCEPTANCE_TESTS.md`, `WAG_DECISION_LOG.md`, `WAG_EXECUTIVE_SNAPSHOT.md`, the complete organization/agent hierarchy, an export of all canonical agent/manager specs, a periodic Supabase schema + data backup, major contracts/rights records, core company playbooks and SOPs.

**Permanent rule:** No core WAG blueprint or architecture document is considered safely established until it is version-controlled *and* replicated to the independent WAG Master backup location.

**Permanent rule:** Claude is never the sole custodian of company memory. The model can help build and operate the system, but source materials, schemas, decisions, specs, and data remain under WAG's control — this was already the intent of "Own the company intelligence, rent the AI" (`wag_own_intelligence_rent_ai_directive`); this section makes the storage-location consequence of that principle explicit and enforceable.

**Current real status:** the 9 canonical files above exist in the primary working copy (Git repo) as of this pass. None have yet been replicated to an independent Drive-based backup — this session has no Google Drive tool access. This is an open action item, not a completed one — see reconciliation report §L and the Katie Decision Queue.

## 19a. Primary open anti-drift gap — preserved, NOT built (flagged 2026-08-15)

**The control files above rely entirely on a future Claude session remembering to read them.** Nothing currently forces a preflight read of `WAG_COMPANY_BLUEPRINT.md` / `WAG_ACTIVE_PORTFOLIO.md` / `WAG_SOURCE_OF_TRUTH_INDEX.md` / `WAG_CURRENT_STATE.md` before meaningful build work starts — the entire point of this system is to not depend on memory, and this is the one place it currently still does. Katie's explicit instruction: this is the **primary control-layer gap**, and it stays a preserved gap, not a built mechanism, until she approves the full architecture. Do not build a preflight-enforcement mechanism yet.

## 19b. CEO-load-reduction rule (added 2026-08-15)

**One purpose of WAG OS is to prevent Katie from becoming the bottleneck.** Before surfacing anything as "Needs Katie," ask in order:
1. Can existing company truth answer it?
2. Can research answer it?
3. Can an existing policy/decision rule answer it?
4. Can the responsible Director/Manager make it within approved authority?
5. Can it safely wait?
6. Does it actually require CEO judgment, approval, money, legal commitment, external communication, major strategy, or an irreversible decision?

**Only #6 should routinely reach Katie.** Applied retroactively to the decision queue this pass — see `WAG_COMPANY_OS_MIGRATION_PLAN.md` §8 for the reclassification this produced (wagmediapartners.com moved to backlog absent a demonstrated active block; the Slime Lab "what exists" question resolved via direct search rather than asked; the WAG Learning naming question turned into a recommendation rather than a forced decision).

## 19. Every major asset must have a written purpose (added 2026-08-15)

**Permanent WAG OS principle:** every major WAG asset, system, property, and business capability must have a written purpose, owner, audience/customer, inputs, outputs, company relationships, KPIs, authoritative source of truth, and end-to-end Definition of Done. This applies to YouTube channels, the Podcast, websites, book lines, membership, CRM, the Revenue/Sales system, WAG Brain, Greenlight, email, content libraries, Publishing, Rights/Licensing, Finance, agents, departments, internal software, Commerce, Learning, B2B Education, and future WAG properties. No major system should exist merely because "we built it" — the company should always know why it exists and what business outcome it's responsible for.

**Enforcement mechanism:** `WAG_ASSET_SYSTEM_REGISTRY.md` — catalogs every major asset/system against this exact spec. First draft created 2026-08-15, not yet exhaustive. New major assets/systems get a row added in the same pass they're created, not retroactively.
