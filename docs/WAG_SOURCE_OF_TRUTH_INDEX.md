# WAG Source-of-Truth Index

**LAST VERIFIED:** 2026-08-15
**VERSION:** v1.1 — refreshed to reflect this session's reconciliation (Roadmap/Current State consolidated, Decision Log renamed, Acceptance Tests extracted) and to make the authority hierarchy explicit, per Katie's explicit request.
**OWNER:** Katie Swans
**PURPOSE:** One page, one job — "where does the authoritative truth for X actually live?" Prevents the opposite problem of too many source-of-truth documents with nobody knowing which one wins.

---

## Authority hierarchy — living constitution vs. dated evidence

**Two different kinds of document exist in this system, and they do not carry equal authority:**

1. **Living constitutional/control documents** — actively maintained, always represent current truth, get updated in place as reality changes. These are the only documents that govern decisions: `WAG_COMPANY_BLUEPRINT.md`, `WAG_MASTER_ROADMAP.md`, `WAG_CURRENT_STATE.md`, `WAG_ACTIVE_PORTFOLIO.md`, `WAG_DECISION_LOG.md`, `WAG_ACCEPTANCE_TESTS.md`, `WAG_ASSET_SYSTEM_REGISTRY.md`, `WAG_BUILD_PROTOCOL.md`, `WAG_EXECUTIVE_SNAPSHOT.md`, this index.
2. **Dated audit/reconciliation/integrity artifacts** — a snapshot of findings at a point in time, never updated after the fact, superseded by the living documents they fed into. These are supporting evidence and history, not equal-authority sources: `WAG_COMPANY_BLUEPRINT_RECONCILIATION_2026-08-15.md`, `WAG_CONTENT_INTELLIGENCE_AUDIT_2026-08-15.md`, `WAG_AUTONOMY_GAP_TEST.md` (re-run periodically, but each run is a dated snapshot, not a living document), and the archived superseded roadmap/status docs. **Company-os target location once the repo exists:** `company-os/10_audits/`, distinct from the living-document folders (`01_blueprint/` through `09_snapshot/`).

If a dated audit and a living document ever disagree, **the living document wins** — the audit either already fed its findings into the living document (and is now historical record only) or the living document has moved on since the audit ran.

## Truth-type lookup

| Truth type | Authoritative source | Notes |
|---|---|---|
| Company strategy / destination | `WAG_COMPANY_BLUEPRINT.md` | Durable constitution only — not fast-changing facts |
| Current priorities | `WAG_ACTIVE_PORTFOLIO.md` | 3–5(-7) items at a time |
| Complete capability/build map | `WAG_MASTER_ROADMAP.md` | **Consolidated 2026-08-15** — canonical, reconciled from the 4 prior candidate documents (now archived with `SUPERSEDED BY` headers) |
| Current maturity of every capability | `WAG_CURRENT_STATE.md` | **Consolidated 2026-08-15** — canonical, evidence-cited per row |
| "What's going on right now" snapshot | `WAG_EXECUTIVE_SNAPSHOT.md` | Regenerated from real sources, not hand-maintained |
| Agent/manager/organizational architecture | `WAG_COMPANY_BLUEPRINT.md` §4/§4d/§9/§16a | Individual agent specs not yet centrally registered — see `WAG_ASSET_SYSTEM_REGISTRY.md` |
| Every major asset/system's purpose, owner, KPIs, DoD | `WAG_ASSET_SYSTEM_REGISTRY.md` | First draft, not exhaustive |
| Anti-drift preflight mechanism | `CLAUDE.md` (repo root) | **Built 2026-08-15** — auto-loads every session; correctly BUILT-not-yet-TESTED against a fresh session by its own §64 standard |
| Production state (what's being filmed/published) | `initiatives` table, WAG Brain | Real, TESTED, thin coverage (2 real Main rows, 0 Podcast rows) |
| Revenue opportunities / deal pipeline | Revenue & Partnerships tables, WAG Brain (19 tables + 1 view) | Real, RLS-secured, real seed data |
| Sales CRM / outreach execution | **Not yet decided** — HubSpot under evaluation | See `WAG_REVENUE_HUBSPOT_PILOT_ARCHITECTURE.md` |
| Contracts / rights | Google Drive (physical documents) + Rights records (not yet built as a WAG Brain table) | Real gap — no chain-of-title schema exists yet |
| Financial truth (cash, AR, margin) | **Does not exist yet** | Named gap — Finance & BI is DESIGNED/NAMED only outside AR/Collections |
| YouTube performance | YouTube Studio/API, ingested into WAG Brain | Real, connected, both channels synced; impressions API failing on both |
| Website performance (SEO/traffic) | Google Search Console + GA4 | Real, connected, linked |
| Decision history | `WAG_DECISION_LOG.md` | **Renamed from `CEO_DECISIONS.md` via `git mv`, 2026-08-15, history preserved** |
| Evidence / research / predictions / outcomes | WAG Brain evidence-governance pipeline | Real, OPERATING — WAG's most mature layer |
| Legal readiness | `LEGAL_READINESS_REPORT.md` | Real, pre-counsel-review |
| Security posture | `WAG_OS_SECURITY_CHECKLIST.md` | Real, mixed — MFA and multi-role RLS still open |
| Build governance rules | `WAG_BUILD_PROTOCOL.md` | The anti-drift protocol |
| Acceptance criteria / Definition of Done | `WAG_ACCEPTANCE_TESTS.md` | **Extracted as its own standalone canonical file, 2026-08-15** |
| What WAG OS actually runs without a human starting it | `WAG_AUTONOMY_GAP_TEST.md` | Dated snapshot (see Authority Hierarchy above) — re-run when maturity changes materially |
| Independent backup / disaster recovery | `WAG_BUILD_PROTOCOL.md` §18 | Proposed Drive folder structure — not yet created, no Drive access this session |

**Rule this index exists to enforce:** if two documents ever seem to disagree about where a fact lives, this index wins. If this index itself is wrong or stale, that's a Blueprint-level correction, not something to silently route around.
