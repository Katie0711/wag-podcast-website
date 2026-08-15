# WAG Source-of-Truth Index

**LAST VERIFIED:** 2026-08-15
**VERSION:** v1.0
**OWNER:** Katie Swans
**PURPOSE:** One page, one job — "where does the authoritative truth for X actually live?" Prevents the opposite problem of too many source-of-truth documents with nobody knowing which one wins.

| Truth type | Authoritative source | Notes |
|---|---|---|
| Company strategy / destination | `WAG_COMPANY_BLUEPRINT.md` | Durable constitution only — not fast-changing facts |
| Current priorities | `WAG_ACTIVE_PORTFOLIO.md` | Max 3–5 items at a time |
| Complete capability/build map | `WAG_MASTER_ROADMAP.md` | **Not yet consolidated** — 4 competing candidate documents exist, see reconciliation report Duplication #18 |
| Current maturity of every capability | `WAG_CURRENT_STATE.md` | **Not yet consolidated** — reconciliation report §A/§B is the first real draft of the content |
| "What's going on right now" snapshot | `WAG_EXECUTIVE_SNAPSHOT.md` | Regenerated from real sources, not hand-maintained |
| Agent/manager/organizational architecture | `WAG_COMPANY_BLUEPRINT.md` §4/§9 + `WAG_AGENT_ARCHITECTURE.md` (original spec, stale — see reconciliation Appendix) | Individual agent specs not yet centrally registered — see `WAG_ASSET_SYSTEM_REGISTRY.md` |
| Every major asset/system's purpose, owner, KPIs, DoD | `WAG_ASSET_SYSTEM_REGISTRY.md` | New, 2026-08-15 — first draft, not exhaustive |
| Production state (what's being filmed/published) | `initiatives` table, WAG Brain | Real, TESTED, thin coverage (2 real Main rows, 0 Podcast rows) |
| Revenue opportunities / deal pipeline | Revenue & Partnerships tables, WAG Brain (19 tables + 1 view) | Real, RLS-secured, real seed data |
| Sales CRM / outreach execution | **Not yet decided** — HubSpot under evaluation | See reconciliation report §E (Software Map) |
| Contracts / rights | Google Drive (physical documents) + Rights records (not yet built as a WAG Brain table) | Real gap — no chain-of-title schema exists yet |
| Financial truth (cash, AR, margin) | **Does not exist yet** | Named gap — Finance & BI is DESIGNED/NAMED only outside AR/Collections |
| YouTube performance | YouTube Studio/API, ingested into WAG Brain | Real, connected, both channels synced; impressions API failing on both |
| Website performance (SEO/traffic) | Google Search Console + GA4 | Real, connected, linked as of this session |
| Decision history | `CEO_DECISIONS.md` *(proposed as `WAG_DECISION_LOG.md`, pending Katie's confirmation)* | Real, already in active use |
| Evidence / research / predictions / outcomes | WAG Brain evidence-governance pipeline | Real, OPERATING — WAG's most mature layer |
| Legal readiness | `LEGAL_READINESS_REPORT.md` | Real, pre-counsel-review |
| Security posture | `WAG_OS_SECURITY_CHECKLIST.md` | Real, mixed — MFA and multi-role RLS still open |
| Build governance rules | `WAG_BUILD_PROTOCOL.md` | This session's anti-drift protocol |
| Acceptance criteria / Definition of Done | `WAG_ACCEPTANCE_TESTS.md` | **Not yet a standalone file** — draft chains live inside the reconciliation report §B |
| Independent backup / disaster recovery | `WAG_BUILD_PROTOCOL.md` §18 | Proposed Drive folder structure — **not yet created, no Drive access this session** |

**Rule this index exists to enforce:** if two documents ever seem to disagree about where a fact lives, this index wins. If this index itself is wrong or stale, that's a Blueprint-level correction, not something to silently route around.
