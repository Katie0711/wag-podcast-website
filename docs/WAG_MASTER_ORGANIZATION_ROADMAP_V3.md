**SUPERSEDED BY `WAG_MASTER_ROADMAP.md` and `WAG_CURRENT_STATE.md` (2026-08-15) — kept for provenance, not deleted. Full reconciliation of what changed and why: `WAG_COMPANY_OS_MIGRATION_PLAN.md` §4/§5.**

# WAG Master Organization Status & Build Roadmap — v3

**One executive question this module answers: across the whole company, what's actually operating vs. merely designed, what depends on what, and what's the next thing worth building?**

**Status: audit only, 2026-08-12. Nothing built from this document — per Katie's explicit instruction, this is the state review to come back for approval before any further build.** Supersedes the top-5/don't-build sections of `WAG_MASTER_ORGANIZATION_CONTINUITY_CHECK.md` (v2, same day) with the fuller 13-function structure Katie specified; that doc's full 18-function Mission/Assets/§64/KPI table stays the reference for department-level detail not repeated here.

**Immediate context: the Kidoodle AR/Collections case just reached its natural stopping point** (initiatives pointer row created linking to the existing Revenue records, `watchlist_status` corrected from `prospect` to `partner`, the AR payment-truth gap recorded as a canonical fact, Gmail person-level timeline confirmed blocked on tool availability not authorization — full closeout below in the Execution section). Per Katie's instruction, it is now parked — nothing further gets built on it until tomorrow's real payment-status check or a new inbound message.

---

## A–D. Function inventory, mission, §64 maturity, and what's actually operational

§64 ladder: DESIGNED → BUILT → CONNECTED → TESTED → OPERATING → VERIFIED → LEARNING.

| # | Function | Mission (one line) | §64 maturity | What's actually operational vs. merely designed |
|---|---|---|---|---|
| 1 | **WAG Main / YouTube Growth** | Grow WAG Main via evidence-driven creative decisions, not intuition | **BUILT→CONNECTED**, partially **TESTED** | Real: YouTube connector, `yt_videos`/`yt_raw_observations`, Reporting API, Greenlight Manager (DB-enforced Gate 0 + scoring), Storytelling System, Pattern/Title-Formula/Format Libraries, Main Next 10, Packaging Optimization (real CTR/retention pulled). **Not yet operating as a closed loop** — Skinwalker (Main Proof 1) is the first real prediction awaiting freeze; no video has completed a full predict→publish→measure→learn cycle yet. Proactive alerts and fandom/community intelligence: not built. |
| 2 | **WAG Podcast** | Become a leading teen-focused video podcast, on a measurable path | **DESIGNED** only, mostly | Real: org/data architecture doc, YouTube connector, Friday 4pm cadence (verified fact), Wednesday expansion correctly held as a target not a fact. **Real, named risk (Katie's own):** no Podcast-specific intelligence system exists yet distinct from Main — chart-mechanics research, guest/topic/format intelligence, and clips→full-episode discovery are all unresearched. This is the least-differentiated department relative to its sibling (Main) right now. |
| 3 | **Audience Intelligence** | Build an evidence-backed, continuously-updating model of who actually watches and why | **DESIGNED** only | Spec exists (`WAG_FUTURE_DEPARTMENTS_AUDIENCE_AND_DIGITAL_GROWTH.md`): Emily archetype, attribute→evidence→confidence model, no-veto creative-lens rule. Boy-viewer counterpart not designed. Zero data collection built. |
| 4 | **Creator & Platform Intelligence** | Detect real, WAG-relevant creator/platform shifts early enough to act on them | **TESTED**, not yet **OPERATING** | Real: Proof 0 (Tubefilter ingestion, 4 parallel investigations, ingestion-integrity gate) and Proof 1 (15 discovery queries, 3 deep investigations, a fabricated "Shorts algorithm change" signal caught and killed) both ran and self-evaluated honestly. **Explicitly, correctly, has not yet earned recurring monitoring** — no scheduled cadence exists. Paid-tool verdicts done (ViewStats Pro justified, not purchased; others rejected). |
| 5 | **Revenue / Partnerships** | Build a growing, brand-aligned commercial engine producing collected (not just closed) revenue | **BUILT→CONNECTED→TESTED**, **OPERATING** on one real case | The most-built department: 19-table schema, real Gmail recovery pass, 4 real deals, Gate 0 phishing architecture just formalized company-wide, outbound proof (GoPro + 6 candidates researched, zero contact made), pricing methodology. Kidoodle AR case is the first real thing actually *running* end-to-end (detection→recommendation→approval-gate→pending Katie decision). 14-stage outcome funnel designed, not yet migrated onto `revenue_deals.status` (still the original 9-stage enum — correctly deferred, see G). |
| 6 | **Website / Digital Growth** | Convert organic discovery into owned audience and revenue, honestly diagnosed | **OPERATING** (the most mature department by real traffic) | Enormous real build history: full SEO/AEO/GEO passes on both sites, conversion framework, interaction system, published sponsor pages, real GSC/GA4 data flowing. **Two real, named gaps:** no automatic per-video/per-episode article workflow exists (still manual editorial work), and the "diagnose low CTR before assuming design is the cause" directive has not yet had its own bounded diagnostic proof run — a real candidate for one of the next 3 proofs (J). |
| 7 | **Finance / Business Intelligence** | Minimal financial truth first: what's owed, what's collected, what's the real cash position | **DESIGNED** only (as of today) | Effectively started *today* via Kidoodle: the `ar_payment_truth_gap` canonical fact is the first real Finance-adjacent artifact. No expenses, cash position, forecasting, or profitability tracking exists anywhere. Correctly the least mature real department — matches Katie's own "minimal truth first" framing. |
| 8 | **Rights / Licensing / Commercial Ops** | Know what WAG actually owns and owes, with contract-level precision | **DESIGNED**, real gap underneath | Owner-stated facts recorded (`wag_video_rights_ownership`), but **the actual contracts have never been read** for exclusivity/term/territory/sublicensing/AI-voice-likeness specifics — a standing, flagged professional-review item, not a data gap I can close. |
| 9 | **Legal / Minors / Brand-Safety Compliance** | Spot legal/minors/brand-safety issues before they become real problems | **Minimal, issue-spotting scope only** | Real trademark filings tracked (from Recovery Pass Findings). Gate 0 (today) is brand-safety-adjacent infrastructure. Deliberately not a full compliance department — scoped narrowly per the Continuity Check v2. |
| 10 | **Opportunity / Innovation Intelligence** | Continually surface products/IP/partnerships/revenue streams worth pursuing | **DESIGNED**, lightly **BUILT** | 3 real distinct lifecycle stages preserved (Incubator / Opportunity Registry / Format Lab), Business Assets ledger exists in CEO Cockpit v0.1. No automated research→validate→test→scale loop running yet. |
| 11 | **Execution / Production / Project Ownership** | Answer "who owns this, what's next, what's blocking it" for any real initiative, company-wide | **BUILT→CONNECTED**, now genuinely **TESTED** | The `initiatives` spine (built earlier today) just passed its first real cross-department test: the Kidoodle pointer row (id=4) correctly surfaces owner/next-action/blocker/decision-required without duplicating any Revenue data. This is a real, working proof of the reuse-first design, not hypothetical. |
| 12 | **CEO / Chief of Staff / Management Layer** | Prevent any department from confusing activity with winning | **DESIGNED** (scorecard model), lightly **BUILT** (Cockpit v0.1) | The A–H outcome-accountability framework (mission→north-star→goals→leading/lagging→targets→owner→cadence→corrective-action) was designed this session, explicitly not built per Katie's own "stop before building" instruction. CEO Cockpit v0.1 is a real, lighter precursor already pulling some real metrics. "Good Morning Katie" view explicitly deferred. |
| 13 | **WAG Brain / Research & Evidence Governance** | Be the durable, provenance-tracked source of company truth, not a chat transcript | **OPERATING** — the best-built layer in the company | Real: `canonical_facts` with evidence-tier/status/source, `predictions`/`outcomes`, `activity_log` (with an underused `attributed_value_usd` hook), RLS everywhere, advisor scans clean, ingestion-integrity fixes proven on a real bug (the Pop&Boom Gate-1 fetch-reliability fix). This is genuinely running and being correctly used by every other department above. |

---

## E. Dependencies between departments

- **Everything downstream of WAG Brain (#13).** Every other department's "real" data lives there — this is why it's the most mature layer; it has to be.
- **CEO/Chief of Staff (#12) depends on every department having a scorecard** — currently none do, so #12 is structurally blocked from being more than a design until at least Revenue (#5, per Katie's own choice) actually populates one.
- **Podcast (#2) depends on chart-mechanics research** that hasn't been done — no goal or scorecard can honestly be set for Podcast until this exists, a real, named blocker, not a sequencing preference.
- **Audience Intelligence (#3) depends on Creator & Platform Intelligence (#4)'s comparable-channel data** for its evidence-backed archetype work — #3 can't meaningfully start until #4 has more than 2 proofs behind it.
- **Website/Digital Growth (#6)'s article-workflow gap depends on Execution (#11)** — an automatic per-video article pipeline is itself an `initiatives`-shaped problem (owner, next action, deadline per video/episode), not a separate system.
- **Finance (#7) depends on Revenue (#5)'s existing invoice/deal data** — it should extend those tables, never duplicate them (already the design principle; Kidoodle proved it works).
- **Rights (#8) blocks nothing today but is a real landmine** — WAG is operating on owner-stated rights facts with zero contract verification; if a real dispute or renewal decision ever depends on exact contract language, this gap becomes urgent fast.

## F. What should be consolidated / reused, not rebuilt

- **`initiatives` is the one execution spine — every department's "what's next" question routes through it**, never a parallel tracking table. Just proved on Revenue; the next test should be Main (Skinwalker) or Website (article workflow), not a new mechanism.
- **`canonical_facts` is the one durable-fact store** — Finance's eventual truth, Rights' contract facts, and CEO/Chief of Staff's scorecard baselines should all live there, not in new department-specific fact tables.
- **`revenue_evidence_sources`/`revenue_evidence_links`' generic evidence-provenance pattern** should be the template for Rights' contract-fact provenance and Legal's compliance-issue provenance when those departments mature — don't reinvent "where did this fact come from" per department.
- **The Gate 0 security screen (built today)** is explicitly company-wide infrastructure — Legal/Minors compliance and any future Finance payment-instruction verification should consume it, not build a second version.

## G. What should NOT be built yet

- **A `campaigns` table, an agency-roster table, or numeric outbound scoring for Revenue** — zero real volume to justify any of them (confirmed live this session: all 4 real deals are inbound-sourced).
- **The 14-stage Revenue funnel migration onto `revenue_deals.status`** — correct to defer until the Kidoodle case fully closes; touching that table mid-case risks orphaning the live approval row.
- **Full Finance/accounting integration** — the `ar_payment_truth_gap` fact is recorded; building the actual INVOICE→RECONCILED pipeline before a second real collections case creates pressure would be building ahead of need.
- **Any CEO/Chief-of-Staff rollup dashboard** — with 11 of 13 departments below OPERATING maturity, a rollup today mostly shows placeholders, which is its own activity-machine problem.
- **Recurring Creator & Platform Intelligence monitoring** — explicitly not yet earned per both proofs' own honest self-assessment.
- **A full Legal/Minors/Brand-Safety department** — issue-spotting scope remains correct at WAG's current size; nothing observed this session argues for expanding it.

## H. Recommended build order from here

1. **Close Kidoodle** (in progress — tomorrow's payment check is the only remaining step).
2. **Give Revenue (#5) its first real scorecard**, per Katie's own choice to make it the outcome-accountability proof — it already has the most real data of any department to populate one honestly.
3. **Run Website's CTR-diagnosis proof (#6)** — real traffic already exists to diagnose against; this is cheap (no new infrastructure) and closes a directly-named gap.
4. **Podcast chart-mechanics research (#2)** — unblocks Podcast ever getting a real goal; currently the department most held back by a missing prerequisite rather than missing infrastructure.
5. **Only then**, extend Creator & Platform Intelligence (#4) toward Podcast-specific discovery sources, and begin Audience Intelligence (#3) once #4 has enough comparable-channel data to be evidence-backed rather than stereotyped.

## I. Why this order maximizes business value

Kidoodle first because it's real money already sitting unresolved — the cheapest possible next dollar. Revenue's scorecard second because it's the department Katie herself chose as the outcome-accountability proof, and it already has the richest real data of anywhere in the company, so it's the fastest place to prove the framework isn't bureaucracy. Website's CTR diagnosis third because it needs zero new infrastructure — just honest analysis of data WAG already owns — and directly serves the largest existing audience surface. Podcast's chart research fourth because every dollar spent designing Podcast intelligence *before* that research is speculative; the research is what turns "leading teen podcast" from a slogan into a measurable target. Audience Intelligence and deeper Creator Intelligence come last because they're genuinely dependent on the outputs of 1–4, not because they're less important.

## J. Next 3 concrete operational proofs — not 30 tasks

1. **Kidoodle's real-world payment-status check** (tomorrow, already scheduled) — closes the first real Finance/AR/Execution/outcome-accountability proof end-to-end.
2. **Revenue's first real scorecard**, populated against its own real data (qualified pipeline: 1 live opportunity/Aha World; decision-makers verified: 0; deals signed: 2 licensing/Kidoodle+Epic; revenue collected: $0 confirmed) — deliberately showing mostly `BASELINE_REQUIRED`, proving the framework reports honestly rather than manufacturing progress.
3. **One bounded CTR-diagnosis pass on Website** (#6) — pick the 3-5 lowest-CTR pages with real traffic, decompose distribution→packaging→retention per the same KNOWN/LIKELY/POSSIBLE/UNKNOWN discipline used on Skinwalker, and report honestly whether design, packaging, or something else is the actual cause.

## K. What's missing from WAG Brain or the roadmap

- **No real payment/cash-truth data anywhere** (G above) — the single largest blind spot proven by Kidoodle.
- **No department currently has a populated scorecard** — the framework exists, nothing uses it yet.
- **`revenue_people` was designed for exactly the Kidoodle contact case (Leah Lindsay's real company move) and has never been populated** — a real, silent gap between the schema's ambition and its actual data.
- **No callable Gmail-invocation tool exists in this session** — real infrastructure (OAuth, connector, edge function) exists and is correctly secured, but nothing in this session's toolset can call it. This blocked the Kidoodle person-level timeline today and will block any future in-session Gmail work the same way until resolved.
- **Podcast has no intelligence system distinct from Main** — named directly by Katie, worth repeating here because it's easy to let Main's maturity quietly stand in for Podcast's.
- **No CTR root-cause diagnosis has actually been run**, despite the standing instruction not to assume design is the cause — this roadmap is the first time that's been named as a concrete gap rather than a general principle.

## L. Pushback

- **Katie's own list is comprehensive to the point of risking exactly the activity-machine problem the outcome-accountability framework exists to prevent.** Thirteen departments, each with 8-14 named sub-capabilities, is a lot of surface to hold in view at once — the real discipline is in H/I above (5 steps, not 13 parallel tracks), and I'd resist the temptation to make progress legible by touching a little of everything rather than finishing Kidoodle-then-Revenue-then-Website in sequence.
- **The Podcast list (guest/topic/format intelligence, its own competitive set, charts, clips-to-full-episode discovery) is sequenced too early relative to its real blocker.** Building any of it before the chart-mechanics research exists risks producing a department that looks sophisticated but is guessing at what actually matters — the same mistake the outcome-accountability framework was built to catch elsewhere.
- **Creator & Platform Intelligence has now run two honest proofs that both concluded "not yet earned recurring monitoring."** A third proof without new evidence of need would start to look like activity for its own sake — I'd hold this department at its current maturity until either Podcast or Audience Intelligence generates a real pull on it, rather than proactively deepening it.
- **The Finance list (contracted revenue, forecasts, profitability by property) is far ahead of what one real $306.76 collections case justifies.** Katie's own point 7 already self-corrected this ("minimal financial truth first... not full accounting integration now") — I'd hold the line there even harder than stated: nothing beyond the INVOICE→RECONCILED loop concept until a second real case exists.
- **One thing genuinely missing from Katie's list, not just mine: a standing rule for when a department's mission/north-star gets to change.** Thirteen departments each with a mission statement is a lot of surface for scope-creep to enter quietly one "just add this" at a time — worth deciding now, while the list is fresh, that mission-level edits need the same explicit sign-off as a schema migration.

---

*Cross-referenced in `WAG_OPERATING_SYSTEM_MAP.md`. Extends `WAG_MASTER_ORGANIZATION_CONTINUITY_CHECK.md` v2 rather than replacing it — that document's full 18-function Mission/Assets/§64/KPI table is the department-level reference; this document is the sequencing and pushback layer on top of it. Audit only — nothing built. Awaiting Katie's review before any of H/J proceeds.*
