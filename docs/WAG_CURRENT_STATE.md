# WAG Current State

**LAST VERIFIED:** 2026-08-15
**VERSION:** v1.0 — first canonical edition, reconciled from `WAG_MASTER_ORGANIZATION_CONTINUITY_CHECK.md` and `WAG_MASTER_ROADMAP_DECISION_REVIEW.md` against the approved `WAG_COMPANY_BLUEPRINT.md`. Reconciliation matrix: `WAG_COMPANY_OS_MIGRATION_PLAN.md` §5.
**OWNER:** Katie Swans
**SUPERSEDES:** Both source documents' individual maturity claims where they conflicted (archived, `SUPERSEDED BY` this file). Does **not** supersede either site's own `MASTER_STATUS.md` — both are legitimate product-level status docs, referenced below, not merged in.
**PURPOSE:** A concise, evidence-derived rollup answering "what exists right now" — points into WAG Brain, code, and dated research rather than duplicating operational data. Maturity vocabulary: §64 (NOT BUILT → BUILT → CONNECTED → TESTED → OPERATING → LEARNING). No status here is based on impression; every row cites its evidence.

---

| Capability | §64 status | Evidence |
|---|---|---|
| WAG Brain / evidence-governance pipeline | **OPERATING** | The only capability confirmed to have closed a real predict→diagnose→act→remeasure loop, per both source docs' independent assessment |
| WAG Main | BUILT→CONNECTED→TESTED | Greenlight Manager v1 real, 6/10 Next-10 slate GREENLIT, 0 outcomes closed |
| WAG Podcast (product) | BUILT→CONNECTED | Real clips, distribution, sponsor inventory live |
| WAG Podcast (17-fn intelligence layer) | DESIGNED | Mostly unbuilt — see Roadmap dependency graph |
| Website & Digital Growth | BUILT→CONNECTED→TESTED | Real live traffic; explicitly retracted from "most mature department" claim by its own most recent internal review; CTR-diagnosis loop never run as a bounded proof |
| Digital Publishing & Discovery Intelligence | BUILT→CONNECTED, informal | Real discipline (episode-sourced articles, per-site differentiation, anti-cannibalization) operates via standing rules; no single named owner yet; no content-decay/refresh loop |
| Revenue & Partnerships | BUILT→CONNECTED, TESTED on 2/13 specialist roles | 1 real WON deal (Epic, ~$50,025 cumulative), 1 real LOST (Pop&Boom), 1 real OPEN (Aha World); 19-table+1-view schema, RLS-secured |
| Audience Intelligence | DESIGNED | One spec document, zero data collection built |
| Creator & Platform Intelligence | TESTED | 2 real proofs run (Proof 0, Proof 1); real self-caught data-integrity bug fixed; not yet recurring |
| Marketing & Owned Audience (Beehiiv, interactions) | CONNECTED, low volume / **CONTRADICTED (interaction platform deployment status)** | Real infra, near-zero real subscriber volume; interaction platform's actual production status is internally contradicted across 4 documents — see Migration Plan §8 (Claude Can Resolve From Evidence) |
| Finance & BI | NAMED/DESIGNED | Real work exists only inside Revenue's AR/Collections slice |
| Publishing / Books / IP | **NOT BUILT → being activated** | Katie's direct 2026-08-15 activation for Book #1 (WAG Slime Lab); real prior creative material exists but its source files are outside any accessible system — see Migration Plan's updated decision queue |
| Educational IP (Epic!) | BUILT→CONNECTED→OPERATING (revenue) / BUILT (Library schema, empty) | Real, ~10-year licensing relationship; the organizing Library system is schema-only |
| Product / Membership / Commerce | NOT BUILT | Zero infrastructure in either repo |
| Education/WAG Labs | NOT BUILT, naming under review | Zero infrastructure under this specific name; see Migration Plan's brand-architecture analysis |
| B2B Education / Institutional Licensing | DESIGNED (research only) | Boclips/ClickView candidates identified, zero outreach |
| Rights/Licensing/Commercial Ops | BUILT (reactive) / DESIGNED (systematic) | Real active items (AI-training-dataset takedown requests in flight); chain-of-title schema explicitly deferred pending its own design review |
| Legal/Safety/Brand Risk/Minors Compliance | BUILT, pre-verification | Real, live Privacy/Terms since 2026-07-27, zero RED findings; not yet attorney-reviewed |
| WAG HQ security posture | Mixed | MFA not started; RLS single-user only; backups done+verified; connector hardening done+live-tested |
| Operations & Production | OPERATING | Real, live content-freshness pipeline on both sites; Channel Publishing QA Checklist run |
| Opportunity/Innovation/Future | BUILT, disconnected | 3 real, evidence-gated systems (Registry, Incubator, Format Lab) with no connecting architecture between them |
| Research & Evidence Governance | **OPERATING** | Same evidence as WAG Brain row above — this is the mechanism behind it |
| Company Learning & Performance | Unclear — likely duplicate of the row above | Flagged, not resolved — see Migration Plan §4/§C item 12 |
| `initiatives` / execution truth | TESTED | Mechanism proven (2 real Main rows), coverage thin (0 Podcast rows) — adoption gap, not engineering gap |

**Product-level status, referenced not merged:** `MASTER_STATUS.md` (thewagpodcast-website), `MASTER_STATUS.md` (wildadventuregirls-website) — each site's own real, current status, out of scope for this company-level rollup.

**Note on the interaction platform:** this is the one row in this table marked CONTRADICTED rather than given a single status — 4 real source documents disagree about whether it's actually deployed to production. This gets resolved by a one-command git check (Migration Plan §8, Claude Can Resolve From Evidence), not by a judgment call, and this file will be updated the moment that runs.
