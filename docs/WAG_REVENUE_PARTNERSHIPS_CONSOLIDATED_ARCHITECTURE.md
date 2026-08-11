# WAG Revenue & Partnerships — Consolidated Architecture

**One executive question this module answers: is the Revenue & Partnerships design actually complete, non-contradictory, and correctly sequenced — and if not, exactly where is it missing, duplicated, contradictory, or premature?**

**Status: design only, 2026-08-11 — nothing built.** This document consolidates the three existing Revenue & Partnerships documents, adds the 14 requirement areas Katie specified as missing, and closes with the explicit gap analysis she asked for before substantial implementation begins.

---

## 0. What already exists — not repeated here, only indexed

| Document | Covers |
|---|---|
| `WAG_REVENUE_PARTNERSHIPS_FOUNDATION.md` | Real inventory of what exists today (no CRM, no closed deals on record, Beehiiv confirms 0 sponsorship agreement items), the corrected Gmail-availability framing, the source-of-truth hierarchy, and the controlled document ingestion workflow |
| `WAG_REVENUE_PARTNERSHIPS_DEPARTMENT_ARCHITECTURE.md` | The two-engine model (internal memory + external new-business intelligence), the 20-stage discover-to-renew pipeline, GM + 12 specialist functions, the Revenue Learning Loop, and authority boundaries mapped against the master directive's existing standard |
| `WAG_REVENUE_EMAIL_INTAKE_ARCHITECTURE.md` | The dual-Gmail design, exact scopes requested, account separation, Spam/Junk monitoring, sender/anti-fraud verification, prompt-injection containment, and the 10 specific questions Katie asked before either connector is built |

Everything below is new content this pass adds — the 14 areas Katie flagged as still missing from the design.

---

## 1. Commercial Inventory / Offer Architecture

**Revenue cannot intelligently sell WAG until it knows what WAG can sell — and this design must not invent inventory or pricing Katie hasn't approved.**

Target shape, once real: one `commercial_inventory_items` record per sellable unit or package, spanning WAG Main integrations, WAG Podcast integrations, social deliverables, short-form, multi-platform packages, sponsorship packages, custom campaigns, licensing/distribution, educational IP, appearances, speaking, publishing/IP opportunities, and future WAG assets. Each item's eventual fields: pricing/range (**null until Katie approves a real number — never inferred or estimated as if real**), availability, audience, platform, deliverables, production requirements, lead time, category restrictions, usage rights, exclusivity implications, historical results (linked only to real, measured outcomes — see Section 3), and whether Katie's approval is required before this item can be offered at all.

**Real status today:** no formal inventory exists. `SponsorSlot.astro` (the interactive-sponsorship placeholder already live on thewagpodcast.com) and Beehiiv's Direct Sponsorships descriptor (confirmed real but currently empty and plan-gated) are the only two real, already-existing pieces of inventory infrastructure. Formalizing what's already real is the actual first step here — not inventing new packages. This is Offer & Inventory Strategist's function (Department Architecture §4), given a concrete data shape.

## 2. Revenue Goals + Pipeline Math

The Revenue GM should eventually work backward: **revenue target → required closed business → qualified pipeline → proposals/conversations → outreach/activity.**

**Real constraint, stated honestly:** zero real conversion-rate data exists today (Foundation doc: 0 closed deals, 0 real leads). Any funnel math in Phase 1 must be built on **explicitly labeled assumptions**, each tagged `assumption_source: estimate` with its reasoning stated, never presented with the confidence of observed data. As real pipeline activity accumulates, each assumption gets replaced by `assumption_source: observed`, with the real sample size attached — and the system should be able to show, honestly, when it's still running on too small a sample to trust.

**Four separate ledgers, never collapsed into one "revenue" number:** forecast revenue (pipeline-weighted, uncertain), committed revenue (signed, not yet invoiced), invoiced revenue (billed, not yet collected), collected revenue (actually in hand). This mirrors the AR/Collections separation already established in the Department Architecture doc — the same discipline applied one level up, to the whole pipeline.

## 3. Campaign Performance → Sales Evidence

A completed campaign's real, *measured* outcome should feed forward into: a renewal recommendation, an upsell case, pricing evidence, proposal material, a case-study candidate, a category-credibility signal, and future sponsor-matching evidence (Brand-Fit Strategist learning what "good fit" has actually looked like).

**Explicit anti-overclaim rule:** never state a causal performance claim WAG can't actually measure. If a campaign's real, attributable result isn't known, the record says so plainly rather than implying success from a proxy metric it wasn't designed to support. This is the same evidence discipline already standing for Packaging Intelligence (`WAG_MAIN_INTELLIGENCE_LOOP_V1.md`) — real vs. inferred, always labeled, applied here to sales evidence instead of content evidence.

## 4. Relationship Graph

People are modeled **separately from companies**, so a real relationship survives a person changing jobs: person → current company/role → previous companies where known → agency/brand relationships → WAG's own interaction history with that person → introductions they've made or received → opportunities and deals connected to them.

**Concrete reason this matters:** a contact who moves from Brand A to Brand B carries a real prior relationship with WAG forward. A company-keyed record (not person-keyed) would silently lose that continuity the moment they change employers — a real, avoidable loss the graph shape exists specifically to prevent.

Target shape: `people`, `companies`, `people_company_history` (person, company, role, start/end dates), `relationships` (person to person or person to company, relationship type, source/evidence).

## 5. Conflict / Exclusivity / Brand-Safety Check

Before any opportunity is recommended or progressed, check known: category exclusivity, competing sponsors, active contractual restrictions, usage-right conflicts, licensing conflicts, audience/brand fit, and WAG's own brand standards.

**Actual signed contracts remain authoritative over any inferred or summarized conflict record** — this restates the source-of-truth hierarchy already established (contract > everything else) applied specifically to conflict-checking. This check is a recommendation gate, not a legal determination — it never makes the kind of "consequential legal interpretation" the master directive's Authority Standard already prohibits an AI system from making unilaterally.

## 6. Revenue Leakage Detection

A standing function whose explicit job is finding money WAG may be leaving behind — a cross-cutting monitor, not necessarily a new org-chart role. Real examples of what it watches for: a legitimate inbound message never answered, an opportunity sitting in Spam past a reasonable window, a conversation with no follow-up, a proposal gone stale, a past partner worth reactivating, a successful campaign that was never renewed, a completed deliverable that was never invoiced, an overdue invoice, an upcoming licensing renewal window, unsold sponsor inventory, unmonetized owned IP, licensing rights that may still be available and unused, and a relationship that went cold without an explicit loss ever being recorded.

**Material leakage feeds the `Needs Katie` queue** — the same escalation pattern already standing in the master directive's CEO Opportunity Queue, not a new mechanism.

## 7. Revenue Research / Market Intelligence

This is Engine B's actual operating discipline, made concrete: continuous monitoring of brands sponsoring comparable creators, podcast advertisers, creator-marketing activity broadly, agencies, campaign patterns, new product launches, seasonal budgets, emerging sponsor categories, creator monetization models generally, licensing/distribution opportunities, platform monetization changes, relevant market/industry shifts, and what sophisticated/top creators are actually doing commercially.

**Every finding retains source, date, and provenance, and is explicitly labeled observed evidence vs. inference** — the same primary-source discipline already standing for WAG's creator-research methodology (memory: `wag_creator_research_methodology`), extended here from content research to commercial research.

## 8. Opportunity Scoring

**Never score by brand size alone.** Real factor list: fit, expected value, probability of close, relationship strength, strategic value, effort required, audience fit, timing, repeat potential, payment risk, brand risk, and rights/exclusivity cost.

**The score must show its reasoning, never hide behind an opaque number** — this is the same no-fake-certainty standard already codified in the Company Constitution and proven in Greenlight Manager v3 and Packaging Intelligence, applied to revenue scoring instead of content scoring.

## 9. Outbound Quality Control

Sponsor Scout is explicitly **not a spam machine**: optimize for qualified, well-personalized opportunities, not raw contact volume. Track real reputation/response effects (reply rate as a real signal, not a vanity metric) and avoid repeat contact with anyone who's shown further contact is inappropriate — a firm decline, an explicit "don't contact me," or repeated wrong-person misses.

**Phase 1: all external outreach requires Katie's approval before sending, with no exception.** This isn't a new rule — it restates, concretely, the authority boundary already set in the Department Architecture doc (§6) and the Email Intake doc (§8). No autonomous send capability exists or is proposed anywhere in this design.

## 10. Payment / Counterparty Risk

Revenue should learn not only who might buy, but who is genuinely good to do business with — tracked as **factual, dated, evidenced events**: an invoice paid 47 days late against a 30-day term, a thread that went unanswered after three follow-ups, a dispute that was raised and how it resolved. Never a subjective label.

**Hard content-safety boundary, not a style preference:** the system records what factually happened — it does not generate a characterization like "untrustworthy" or "bad actor" about a real person or company. A human reads the factual pattern and decides what it means. This feeds AR/Collections' escalation recommendations and future payment-terms decisions (e.g., recommending an upfront deposit where a real late-payment pattern exists) — as a recommendation only, per the standing authority boundary.

## 11. Cross-Department Opportunity Routing

Revenue explicitly does not operate as a silo. Real routing points, each a live link to a system already named in the master directive — not a new hypothetical department:

- An upcoming WAG Main video (the Greenlight pipeline) → Brand-Fit Strategist evaluates natural sponsor fit before the video ships.
- A Podcast topic or guest → Revenue identifies relevant advertisers/partners.
- An educational asset performing well on Epic → routed to Licensing/Books/International for expansion evaluation (direct tie to `WAG_EDUCATIONAL_IP_LIBRARY.md`'s cohort architecture).
- A sponsor requesting broad usage rights → routed to Legal/Rights (the master directive's Rights/Chain-of-Title architecture) before Revenue commits to anything.
- A completed campaign → Finance/AR invoices → Campaign Operations measures the real result → Renewal Intelligence considers next step.
- An external trend Engine B detects → routed to both Opportunity/R&D (master directive) and Revenue for joint assessment.

This section doesn't invent new departments — it names the real handoff points to departments already specified, so Revenue's design doesn't silently duplicate work that belongs elsewhere.

## 12. Revenue Executive View

The real question set Katie gave, becoming a future WAG CEO Cockpit module (extending the existing v0.1 Cockpit, not a competing dashboard): pipeline value, what can realistically close this month, who to contact today, who needs follow-up, waiting inbound opportunities, anything valuable caught in Spam, past partners worth reactivating, unsold inventory, upcoming renewals, who owes money, what's overdue, opportunities that fit videos currently in production, where money is being left on the table (Section 6's leakage findings), and what changed in the sponsor/creator market this week (Section 7's research).

**Proactive surfacing, not hunting:** material exceptions (leakage, payment risk, a high-scoring but stalled opportunity) push into the `Needs Katie` queue rather than requiring her to go looking for them — the same standard already set for the rest of WAG OS's executive layer.

## 13. Build order

Not built simultaneously — Katie's exact sequence, preserved as given rather than reordered:

1. Verify available connectors and permissions — **done this session** (see Email Intake doc's connector inventory).
2. Connect/secure approved business sources — Gmail reconnection, pending Katie.
3. Ingest a bounded sample of real historical evidence — the Foundation doc's recovery pass.
4. Establish the minimal Partner/Person/Opportunity/Deal/Interaction/Invoice/Commercial Inventory data model **against that real evidence**, not before it exists.
5. Prove inbound opportunity detection + scam verification on real messages.
6. Prove one external prospect-discovery workflow (one real Engine B example, not all of Section 7 at once).
7. Prove one real opportunity moving fully through the pipeline, start to finish.
8. Prove outcome capture/learning actually closes the loop.
9. Only then expand specialist automation — the remaining roles and the remaining capabilities in Sections 1-12 above.

**Nothing in Sections 1-12 is being built now.** They describe the target shape; this section is the actual order things happen in.

## 14. What this preserves

The master directive's full business-unit list stays intact and unreplaced: WAG Main, WAG Podcast, Books/Amazon, Licensing, Social, Marketing, Campaigns, Collaborations, Speaking/PR, International, Talent, Finance, Contracts/Rights/AR, Security, Opportunity/R&D, the company-wide learning system, and the eventual Executive/Chief-of-Staff layer. The three existing Revenue documents stay as-is — referenced here, not duplicated or superseded.

---

## Gap analysis — missing, duplicated, contradictory, premature

Katie asked for this explicitly. A real answer, not a formality:

**Missing — real gaps, not yet covered anywhere across the four documents:**
- **No accounting-system connector or plan.** Invoices/payments are treated as authoritative evidence throughout this design, but no real accounting-system integration (QuickBooks/Xero-class) has been proposed. Today, "an invoice was paid" would have to come from Gmail evidence or Katie directly — weaker than a real system of record. Worth a deliberate future decision, not a Phase 1 blocker.
- **No tax/1099/contractor-payment compliance coverage** for a growing real sponsor business. Not addressed anywhere in this design. Flagging as a genuine future need, explicitly not something to build now.
- **No stated data-retention window** for email-sourced business records. The Email Intake doc is clear that irrelevant content is never persisted, but doesn't state how long *relevant*, persisted records are kept. Worth a real answer before real data starts accumulating, not after.

**Duplicated — same concept named more than once; worth keeping distinct on purpose, not merging by accident:**
- Brand-Fit Strategist (Department Architecture §4) and this document's Section 5 (Conflict/Exclusivity/Brand-Safety) cover adjacent but genuinely different questions — *does this fit* vs. *is this safe/conflict-free*. Correctly kept as two checks, but a future build should sequence them (fit before conflict-check) rather than run them as redundant parallel steps.
- Section 6 (Leakage Detection) and Section 12 (Executive View) both surface things like unsold inventory and overdue invoices — this is intentional, not a real duplication: leakage detection produces the findings, the executive view surfaces them. Stated explicitly here so a future builder doesn't accidentally build two separate detection systems for the same thing.

**Contradictory:** none found. Every section added this pass maps cleanly onto the existing two-engine model, the existing authority boundary, and the existing 20-stage pipeline — nothing here required revising a previously-approved decision.

**Premature — correct not to build yet, stated so nothing gets built ahead of its real dependency:**
- Sections 1 (Commercial Inventory), 4 (Relationship Graph), and 8 (Opportunity Scoring) all describe real schema. None of it should be built before Build Order steps 1-4 actually run — designing any of it against zero real rows carries the same risk the Foundation doc already flagged for the original partner/deal schema.
- Any actual scoring algorithm, pricing model, or outreach-personalization logic is premature until real outcome data exists for the Learning Loop to learn from — wins, losses, and replies that don't exist yet per the Foundation doc's own findings.

---

*Cross-referenced in `WAG_OPERATING_SYSTEM_MAP.md` alongside the other three Revenue & Partnerships documents. Design only — nothing built, nothing connected. Awaiting Katie's review of the gap analysis above and the Section 13 build order before implementation begins.*
