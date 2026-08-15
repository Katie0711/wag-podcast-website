# WAG Revenue — HubSpot Free-Tier Pilot Architecture

**LAST VERIFIED:** 2026-08-15
**VERSION:** v1.0 — research/reconciliation only. **No HubSpot account exists. Nothing has been purchased, migrated, or integrated. This document is a proposal awaiting Katie's approval.**
**OWNER:** Katie Swans
**PURPOSE:** Reconcile HubSpot's free CRM tier against WAG's existing Revenue & Partnerships architecture (19 tables + 1 view in WAG Brain) and propose the smallest real pilot that tests whether HubSpot should become WAG's commercial-execution layer, without duplicating truth or rebuilding what HubSpot already does better.
**PLACEMENT:** `WAG_MASTER_ROADMAP.md` → Revenue & Partnerships → this is the CRM/execution-layer question, distinct from the Revenue Director/specialist-agent architecture, which this does not replace.

---

## 1. System boundaries — confirmed, as Katie specified

- **HubSpot** = commercial relationship/execution truth (companies, contacts, agencies, deals/pipeline stage, sales activity, follow-ups, meetings, proposals, relationship history).
- **WAG Brain** = company intelligence and operating truth (strategy, evidence, opportunity intelligence, creator/media intelligence, publishing/IP, rights, contracts, predictions, outcomes, experiments, agent performance, decisions, company learning, production).
- **Future consumer-commerce stack** (Shopify/email) = separate from HubSpot's B2B sales process entirely. A consumer buying WAG Slime Lab is not the same kind of relationship as Target potentially carrying it — not addressed in this pilot.
- **One connected commercial layer**, not a CRM per WAG property (sponsorships, agencies, publishing partners, distributors, retailers, licensing, WAG Learning/B2B education partners, future HorseSmart, product/commerce partnerships) unless real evidence later proves separation is necessary.

## 2. HubSpot Free tier — verified against HubSpot's own pricing page (2026-08-15), not third-party aggregator estimates

| Limit | Value | Source confidence |
|---|---|---|
| Contacts | 1,000 | Primary (hubspot.com/pricing/crm) |
| Other standard-object records (companies, deals, tickets, etc.) | 1,000,000 combined | Primary |
| Users | 2 | Primary |
| Deal pipelines | 1 | Primary |
| Custom properties | ~10 (per-object) | **Secondary only** — not confirmed on HubSpot's own pricing page; consistently reported across multiple independent aggregators. Treat as a working assumption to verify directly once the free account exists, not a certainty. |
| Marketing email sends | 2,000/month, HubSpot-branded | Primary |
| Meeting scheduling links | 1, HubSpot-branded | Primary |
| Email integration | Gmail, G Suite, most Outlook versions | Primary |
| Forms | Included, unbranded details not specified | Primary (partial) |
| Email open/click tracking | Not confirmed included on free tier | Unconfirmed — verify directly in pilot, don't assume |

Sources: [HubSpot Pricing](https://www.hubspot.com/pricing/crm) (primary); [Nutshell](https://www.nutshell.com/blog/hubspot-free-crm), [EngageBay](https://www.engagebay.com/blog/is-hubspot-free/), [mo.agency](https://www.mo.agency/blog/what-are-the-limitations-of-hubspots-free-crm) (secondary, custom-properties figure only).

**Two limits that actively shape the pilot design, not just constrain it:**
- **1 deal pipeline** — this is not a problem, it's the correct architecture per Katie's own "one connected commercial layer" instruction. All deal types (sponsorship, licensing, publishing partner, agency, retail) share one pipeline, differentiated by a custom property, not separate pipelines.
- **~10 custom properties** — genuinely tight if the goal were to replicate WAG Brain's field richness inside HubSpot. It isn't. This constraint is the practical enforcement of "don't let HubSpot become the company brain" — only the handful of fields that matter for *commercial execution* belong here; everything else stays in WAG Brain by design, not by property-limit accident.

## 3. Audit — existing Revenue architecture vs. HubSpot

| WAG Brain capability | Classification | Reasoning |
|---|---|---|
| `revenue_companies`, `revenue_people` (basic identity: name, domain, contact info) | **MOVE/REPRESENT IN HUBSPOT** | Commodity contact/company records — exactly what a CRM is for |
| Deal/pipeline stage tracking | **MOVE/REPRESENT IN HUBSPOT** | Visual pipeline, drag-drop stages — HubSpot's core function, free tier's 1 pipeline is sufficient given the single-pipeline design above |
| Sales activity, follow-ups, meeting scheduling | **HUBSPOT ALREADY SOLVES THIS** | Meeting links, task reminders, activity timeline — don't rebuild inside WAG Brain |
| `revenue_opportunity_verification` (spam/fraud gate, 5-state classification) | **KEEP IN WAG BRAIN** | WAG-specific, no CRM has this; must run *before* anything is created in HubSpot — this stays the front door, not a HubSpot feature |
| `revenue_pricing_evidence` + the 7-tier pricing-evidence methodology | **KEEP IN WAG BRAIN** | WAG-specific intelligence; a HubSpot deal's "amount" field is just a number — the evidence behind it lives here |
| Brand/audience-fit safety screening (minors-specific) | **KEEP IN WAG BRAIN** | No CRM has a concept of this; must gate a company's entry into HubSpot, not run inside it |
| `revenue_approvals` / the "needs Katie" gate | **WAG-SPECIFIC INTELLIGENCE WE STILL NEED TO BUILD (the sync)** | The approval *logic and audit trail* stays in WAG Brain; whether a HubSpot deal-stage change reflects "Katie approved" needs a defined sync rule — not built yet, and not urgent for a 2-record pilot |
| `revenue_people_company_history` (e.g., a contact's real move from Kidoodle to A Parent Media Co.) | **KEEP IN WAG BRAIN** | HubSpot associates a contact with one current company; it doesn't track historical employment moves as first-class data the way this table does |
| Agency Network relationship mapping (Person→Agency→Clients→Campaigns→Deals→Outcomes) | **HUBSPOT ALREADY SOLVES THIS (the associations layer)** / **DUPLICATION RISK if built in both places** | HubSpot natively associates companies↔contacts↔deals — the previously-deferred "Agency Network" schema work in WAG Brain may be largely unnecessary now; recommend not designing that schema until the pilot shows what HubSpot's native associations can't cover |
| Actual invoicing / payment collection (e.g., Epic's $50,025 cumulative, Kidoodle's 3 unconfirmed invoices) | **FREE-TIER LIMITATION — not solved by HubSpot free either** | Free HubSpot has no real invoicing/payment module; this remains a genuine, unsolved gap regardless of the pilot — don't expect HubSpot to fix Kidoodle's AR problem |
| Mass marketing email (2,000/month, branded) | **NOT APPLICABLE** | WAG's outbound is low-volume, personalized, human-approved — not a mass-email use case; ignore this free-tier feature entirely |
| Custom properties for WAG-specific tags (business engine, opportunity source, evidence tier, brand-fit status, approval status) | **PAID FEATURE — only if the ~10-property cap is actually hit and blocking something real** | Reserve the free tier's limited custom properties for the handful of fields that matter for execution; don't try to replicate WAG Brain's schema richness here |
| HubSpot branding on free-tier emails/meeting links | **FREE-TIER LIMITATION, deliberately accepted for now** | Possible reason to upgrade *later* if it's shown to hurt response rates on real outreach — not a reason to upgrade now |

## 4. Security/authority guardrails — unchanged, explicitly reconfirmed

No agent autonomously sends external outreach, clicks inbound links, accepts terms, agrees to rights, negotiates binding terms, or commits WAG — with or without HubSpot in the loop. Every inbound commercial email still passes the Spam/Fraud Guard in WAG Brain *before* any record is created in HubSpot. Sender/domain/company/contact/offer independently verified before any action, HubSpot or otherwise. HubSpot is commodity execution infrastructure; it does not carry or relax any of WAG's existing approval gates.

## 5. Proposed pilot — real opportunities only, smallest number that proves the architecture

**2 real companies, not a demo:**

1. **Aha World** — full lifecycle test. Company + Contact + Deal record, real pipeline stage tracking, real pricing/terms negotiation in progress. This is the one genuinely active commercial decision with real terms still to be worked out — the correct test of the whole loop (Discover→...→Contract).
2. **Kidoodle** — Company + Contact record only, **not a full deal-pipeline migration** (per Katie's explicit instruction not to migrate it merely to test HubSpot). Tests the *relationship/collections-history* pattern specifically — the real, repeated follow-up and VP-escalation history is exactly what HubSpot's task/activity timeline is for. WAG Brain remains the sole source of truth for the actual invoice amounts and payment-confirmation evidence; HubSpot only tracks the human follow-up cadence.

**Explicitly not included in the pilot, with reasoning:** Epic! (a stable, ~10-year recurring relationship, not an active "opportunity being pursued" — doesn't need pipeline tracking the same way a prospecting deal does; revisit only if that changes). GoPro, Hello Kitty Island Adventure, and the other ~14 executive-card candidates (real, but none are active enough yet to need CRM tracking beyond what WAG Brain's `revenue_companies` already holds — adding them now would be exactly the "fake demo CRM" Katie said not to build).

## 6. What this pilot will actually answer

- Does the free tier's 1,000-contact / 1-pipeline / ~10-property ceiling meaningfully constrain 2 real records? (Almost certainly not — this tests whether it constrains the *next* 10–20 real opportunities, not these 2.)
- Does HubSpot's native company↔contact↔deal association model make the previously-deferred Agency Network schema unnecessary, or only partially?
- Does the free tier's email tracking/meeting-link functionality (unconfirmed from primary source) actually work as needed, or is that the first real limitation worth naming?
- Does the sync between WAG Brain's approval gate and a HubSpot deal-stage change need to be built now, or can it stay manual for 2 records?

**Upgrade trigger, stated explicitly so it isn't relitigated:** only when a specific, named limitation is demonstrably blocking measurable revenue or substantial time savings — not because a paid feature exists.

---

## 7. Pilot Acceptance Test (added 2026-08-15, per Katie's explicit requirement before any account is created)

**What HubSpot must prove:** that it materially improves Sales/Outreach execution on the 2 real pilot cases — measurably clearer pipeline/next-action visibility and lower manual-tracking overhead than the current state (a mix of WAG Brain records and ad hoc follow-up). Not "does HubSpot work" — WAG Brain already proves the intelligence works; this tests only the execution layer.

**What data goes into HubSpot:**
- Aha World: 1 Company record, 1+ Contact record(s), 1 Deal record (real pipeline stage tracked as the negotiation progresses), activity/task log for meetings and follow-ups.
- Kidoodle: 1 Company record, 1+ Contact record(s), activity/task log for the real follow-up cadence — **no Deal record** (not a prospecting pipeline item) and **no dollar amounts** entered anywhere in HubSpot.

**What stays in WAG Brain, never entered in HubSpot:** opportunity-verification/spam-fraud classification and reasoning, pricing evidence and the 7-tier methodology, brand/audience-fit screening reasoning, the `revenue_approvals`/"needs Katie" gate and its audit trail, real invoice amounts and payment-confirmation evidence (Kidoodle's 3 invoices), employment-history tracking, evidence citations and provenance.

**How duplication/sync is prevented:**
- A company/contact is created in HubSpot only *after* it has already cleared WAG Brain's spam/fraud and brand-fit gates — HubSpot never becomes a second front door.
- WAG Brain's `revenue_companies` row stores the HubSpot record ID as a simple reference field, not a duplicated copy of HubSpot's data.
- No bidirectional automation is built for the pilot — any field that exists in both places gets a manual "last synced [date]" note where it matters, so drift is visible rather than silent.
- Financial truth (invoice amounts, payment status) is **never** entered into HubSpot at all during the pilot, closing off the one duplication path that would matter most.

**Decision criteria, evaluated after a bounded pilot window (recommend tying this to one `WAG_ACTIVE_PORTFOLIO.md` cycle, not open-ended):**
- **ADOPT** — HubSpot demonstrably reduces manual tracking effort and/or produces at least one measurable execution improvement (faster follow-up compliance, clearer next-action visibility) on the 2 real cases, with no data-integrity or duplication problems found.
- **MODIFY** — partial value (e.g., useful for internal activity tracking, but the free tier's branding or 1-pipeline/10-property limits genuinely block one specific real need) — keep using it narrowly, and evaluate the specific paid feature that would fix the specific blocker, not a blanket upgrade.
- **REJECT** — no measurable improvement over the current WAG Brain + manual tracking baseline, or real evidence of duplication/drift risk, or the team simply doesn't end up using it during the pilot window.

---

**Stopping here.** No HubSpot account created, no purchase, no migration, no integration. Awaiting approval on the pilot scope (§5) and this acceptance test (§7) before creating the free account.
