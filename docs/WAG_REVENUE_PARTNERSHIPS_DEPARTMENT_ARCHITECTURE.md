# WAG Revenue & Partnerships Department Architecture

**One executive question this module answers: what does the Revenue & Partnerships GM actually command, with what evidence, under what authority, and how does it compound over time into more deal flow than WAG has ever had?**

**Status: design only, 2026-08-11 — nothing in this document is built.** Per Katie's explicit instruction: this department should not be sized to reflect WAG's historical sponsorship volume (real, but small — see `WAG_REVENUE_PARTNERSHIPS_FOUNDATION.md`). It should be designed for the sales organization WAG needs to become, using historical deals as seed evidence, not a ceiling. This doc is the organization, pipeline, evidence architecture, and authority boundaries Katie asked to review before any of it gets built.

---

## 1. The core reframe: two evidence engines, not one

A department built only to recover and organize WAG's past deals would top out at WAG's past deal volume — real, but genuinely small (`WAG_REVENUE_PARTNERSHIPS_FOUNDATION.md` found no closed sponsor deal on record in any reachable system, and Beehiiv's own Direct Sponsorships feature shows zero agreement items). That's real evidence, but it can't be the department's training data ceiling. Per Katie: this must be built around **two evidence engines that run in parallel and eventually feed each other**:

- **Engine A — Internal Business Memory.** What WAG already knows: past/current partners, contacts, negotiations, rates, contracts, licensing, invoices, payments, renewals, outcomes, relationship history, lessons. Recovery and maintenance of this is `WAG_REVENUE_PARTNERSHIPS_FOUNDATION.md`'s job — that document stays the working foundation for this engine and is not replaced or duplicated here.
- **Engine B — External Revenue Intelligence & New-Business Engine.** Continuous discovery and evaluation of *new* opportunities using current external evidence — brands, agencies, campaigns, and category shifts that exist whether or not WAG has ever talked to them. This is the engine that lets the department outgrow WAG's own history, and it's equally important, not a secondary feature.

Everything below assumes both engines exist and feed one shared pipeline (Section 3), one shared team (Section 4), and one shared learning loop (Section 5) — not two disconnected systems.

---

## 2. Engine B in detail — what External Revenue Intelligence should eventually surface

Per Katie's explicit list, the target surface area:

- Brands actively sponsoring creators
- Brands sponsoring comparable teen/female/family creators
- Podcast advertisers
- Brands entering creator marketing
- Agencies handling influencer budgets
- Relevant decision-makers at target brands/agencies
- Seasonal campaign opportunities
- Upcoming product launches
- Brands naturally aligned with upcoming WAG videos (a real, live link to the content-planning side of WAG OS, not a separate silo)
- Previous WAG partners worth reactivating (this is where Engine A and Engine B meet — a real past relationship becomes a new-business target)
- Licensing/distribution buyers
- Streaming/platform opportunities
- Publishing/IP opportunities where appropriate
- Emerging categories with growing creator spend
- Collaborations that could lead to commercial opportunities
- Inbound opportunities (the sponsor-inquiry forms already built — currently empty of real leads, per the Foundation doc, but the intake point already exists)

**Not a static prospect database.** Every entry above is a category of ongoing search, not a one-time list to fill in and file away — the same "living system" discipline already standing for WAG's SEO/legal/security work applies here.

---

## 3. The pipeline

One shared pipeline both engines feed, per Katie's explicit stage list:

**discover → research → qualify → prioritize → identify decision-maker → determine WAG fit → recommend offer/inventory → determine pricing strategy → personalize pitch → outreach → follow-up → negotiate → close → execute → invoice → collect → measure → renew/upsell → learn**

Every stage produces a real, retained record — not a status field that silently overwrites its own history. This mirrors the event-sourced discipline already standing for `yt_raw_observations` (append-only) and the Greenlight `predictions`/`outcomes` pattern: a deal's full path through this pipeline is reconstructable after the fact, including the stages where it stalled or died, since "why did this die" is as valuable to the learning loop as "why did this close."

**Every opportunity carries evidence for why it's worth pursuing** — not a bare entry in a list. An opportunity without a stated reason isn't ready to enter the pipeline; this is the same standard the Company Constitution already holds AI-generated claims to elsewhere in WAG OS (no fake certainty scores, no unearned confidence).

---

## 4. Team structure — GM + 12 specialists

Following the same real-source-mapping discipline already used for `WAG_PODCAST_DEPARTMENT_ARCHITECTURE.md`: each function below is named for what it actually does and what evidence it actually runs on, not a generic title.

| Function | Mission | Primary evidence source(s) | Authority level (see Section 6) |
|---|---|---|---|
| **Revenue/Partnerships GM** | Owns the pipeline, revenue targets, and coordination across the 12 specialists below; the one role that synthesizes both engines into a coherent view for Katie | All 12 specialists' outputs | Coordination — recommends, never executes |
| **Sponsor Scout / Market Intelligence** | Continuously finds new qualified brands, agencies, campaigns, and creator-marketing spending signals (Engine B's discovery front door) | Public brand/agency activity, competitor sponsorship patterns, industry press (same primary-source discipline already standing for WAG's creator research) | Research/monitor only |
| **Brand-Fit Strategist** | Determines which opportunities genuinely fit WAG Main, WAG Podcast, individual talent, educational IP, books, or other WAG assets — the filter that keeps Sponsor Scout's finds from becoming an unfiltered firehose | WAG's own brand/content archive, `WAG_CONTENT_BUCKETS.md`-class internal references, Brand Guardian (master directive) | Recommend only |
| **Relationship Intelligence** | Maintains people/company history so no real relationship — past sponsor, past inbound contact, past declined deal — gets treated as a cold lead twice | Engine A (Internal Business Memory) | Organize/monitor |
| **Offer & Inventory Strategist** | Knows what WAG can actually sell right now — YouTube integrations, podcast placements, social, interactive-sponsorship slots (`SponsorSlot.astro`, already real inventory), licensing, future Beehiiv Direct Sponsorships once the plan supports it | Real WAG inventory across every channel — not aspirational inventory | Recommend only |
| **Pricing / Deal Intelligence** | Develops evidence-based pricing and learns from actual negotiation outcomes — never invents a rate from nothing | Engine A's real historical rates (once recovered) + comparable-creator market data, explicitly never presented with false precision | Recommend only |
| **Outreach Strategist** | Builds highly personalized outreach per company/decision-maker/campaign/WAG-fit — never generic mass email | Brand-Fit Strategist's output + Relationship Intelligence's history | Drafts only — see Section 6 |
| **Follow-Up / Pipeline Manager** | Ensures no opportunity dies from silence — the role most directly answering Katie's "who should we follow up with" | The shared pipeline's own stage/timestamp data | Monitor/remind |
| **Negotiation Support** | Prepares counters, trade-offs, and deal economics for a human to actually negotiate with | Pricing/Deal Intelligence + the specific deal's real terms so far | Prepares only — never negotiates or commits |
| **Campaign / Deliverables Operations** | Makes sure WAG actually fulfills what was sold — the operational discipline `SPONSOR_DISCLOSURE_CHECKLIST.md` already partially covers | The signed deal's real deliverable list | Organize/monitor |
| **Renewal & Upsell Intelligence** | Turns a successful one-off deal into a repeat relationship — directly targets WAG's real historical gap (no confirmed renewal pattern exists yet) | Engine A + Campaign Operations' delivery record | Recommend only |
| **Licensing & Distribution Business Development** | Pursues appropriate buyers for WAG-owned content/IP — the direct extension of the real, already-confirmed Epic relationship into a repeatable practice, not a one-off | `WAG_EDUCATIONAL_IP_LIBRARY.md`'s cohort/era architecture (what's actually licensable) + Engine B's platform/distribution discovery | Research/recommend |
| **AR / Collections** | Tracks invoices, money owed, and escalation — deliberately separated from sales per Katie's explicit structure, so the person chasing a deal isn't the same function chasing a late payment | Invoice/accounting records (top of the source-of-truth hierarchy, per the Foundation doc) | Monitor/remind — see Section 6 for the hard line on actual collections action |

---

## 5. The Revenue Learning Loop

Per Katie: this is a proprietary learning system, not a CRM with a memory. It learns from real outcomes, not from being told what to conclude:

- **Replies vs. non-replies** — what messaging/timing/channel actually gets a response
- **Meetings held** — which qualified opportunities convert to a real conversation
- **Objections raised** — the actual reasons brands decline, not assumed reasons
- **Accepted vs. declined pricing** — the real evidence Pricing/Deal Intelligence needs, not benchmarked guesses
- **Wins and losses** — with the real reason recorded, not just the outcome
- **Campaign performance** — did a sold placement actually perform, feeding back into Offer & Inventory's pricing confidence
- **Payment behavior** — who pays on time, who doesn't, feeding Renewal Intelligence and AR risk assessment
- **Renewals** — the strongest signal of real fit, feeding Brand-Fit Strategist's model of what "good fit" actually looks like in practice

This is the same shape as the company-wide learning system already in `WAG_MASTER_OPERATING_SYSTEM_DIRECTIVE.md` (idea → evidence → prediction → decision → outcome → postmortem → learning) and the same discipline already proven in `WAG_MAIN_INTELLIGENCE_LOOP_V1.md` — applied to revenue instead of content. **No fake accuracy or confidence scores** — a prediction about pricing or fit states its actual evidence and its actual unknowns, the same standard already codified for the Greenlight Manager.

---

## 6. Human authority and approval boundaries

This department does not invent a new authority standard — it operates under the **Authority Standard already established in `WAG_MASTER_OPERATING_SYSTEM_DIRECTIVE.md` §56** (the Rights/Contracts/Licensing addendum's Implementation Standard), extended explicitly to cover revenue/outreach actions Katie named this pass:

**Allowed, autonomously:** detect, organize, extract, monitor, research, analyze, recommend, draft, remind, prepare. Every specialist role in Section 4 is deliberately scoped to stay inside this list — "drafts outreach" is allowed, "sends outreach" is not; "prepares negotiation counters" is allowed, "negotiates" is not.

**Prohibited without explicit human action, extended for Revenue & Partnerships specifically:**
- Sending outreach to a brand, agency, or contact WAG hasn't already been in conversation with
- Making or implying any pricing commitment
- Accepting, signing, or modifying any contract or agreement
- Granting any license or usage right
- Making consequential legal interpretations of a contract's terms
- Initiating collections action or any legal/dispute escalation
- Anything that could bind WAG to an obligation

This mirrors, verbatim in spirit, the master directive's existing prohibited list (execute agreements / waive rights / grant licenses / modify terms / settle disputes / threaten litigation / initiate collections or legal proceedings / bind WAG / make consequential legal interpretations) — Revenue & Partnerships is a new department operating under an already-approved authority model, not a new set of rules.

**Concretely, before autonomous external outreach of any kind becomes real:** Katie approves the specific outreach capability, the specific channel, and the specific scope — this document proposes the boundary, it does not activate the capability.

---

## 7. What can operate continuously vs. what requires Katie

**Can run continuously once built (research/organize/monitor/recommend, per Section 6):**
- Sponsor Scout's ongoing market discovery
- Brand-Fit Strategist's filtering of what Scout finds
- Relationship Intelligence's maintenance of the Engine A record
- Follow-Up/Pipeline Manager's stall detection and reminders
- Pricing/Deal Intelligence's evidence-based rate modeling (as a recommendation, never a quote sent)
- AR/Collections' monitoring of invoice status and overdue flags (as a flag, never an escalation)

**Requires Katie, every time, per Section 6:**
- Approving any outreach before it's sent to a new contact
- Approving or setting any quoted price
- Signing, accepting, or modifying any contract
- Approving any licensing grant
- Any collections escalation beyond a flagged reminder
- Deciding whether a Sponsor Scout-surfaced opportunity is worth pursuing at all (the GM recommends; Katie decides)

---

## 8. Connections to the rest of WAG OS

Per Katie's explicit list — this department is not a silo:

- **WAG Main / WAG Podcast** — Brand-Fit Strategist and Offer & Inventory Strategist both depend directly on real content/format/inventory data already tracked by each brand's own intelligence loop (`WAG_MAIN_INTELLIGENCE_LOOP_V1.md`, `WAG_PODCAST_DEPARTMENT_ARCHITECTURE.md`'s eventual Podcast Revenue/Sponsorship Intelligence function). "Brands naturally aligned with upcoming WAG videos" (Section 2) is a direct, real link to the Greenlight pipeline, not a hypothetical.
- **Licensing** — Licensing & Distribution BD extends the real Epic relationship and `WAG_EDUCATIONAL_IP_LIBRARY.md`'s cohort architecture into a repeatable practice.
- **Books** — a real future buyer category (Section 2's "publishing/IP opportunities") once the books project (memory: WAG slime book project) has real assets to license.
- **Social** — a real distribution surface for Offer & Inventory once social channels carry their own sponsorable inventory.
- **Finance / AR / Collections** — AR/Collections is this department's own function per Section 4, but sits directly against the broader Finance/AR architecture already scoped in `WAG_MASTER_OPERATING_SYSTEM_DIRECTIVE.md`'s business-unit list — not a separate financial system.
- **Contracts** — every deal this department closes becomes a real input to the Contract Intelligence / Rights-Chain-of-Title architecture already designed (master directive §42-56) — Negotiation Support's prepared terms feed directly into that system once it's built, rather than existing as a second, disconnected contract record.
- **Executive / eventual Chief of Staff** — the Revenue/Partnerships GM's synthesized view (pipeline health, top opportunities, who needs Katie's attention) is exactly the kind of cross-system answer the CEO Cockpit and eventual Executive Chief of Staff function (master directive, `WAG_EXECUTIVE_OPERATING_LAYER.md`) are meant to surface — this department's GM is a future direct input to that layer, not a competing one.

---

## 9. Sequencing — what's real and next, what waits

**Immediate, already in motion:** `WAG_REVENUE_PARTNERSHIPS_FOUNDATION.md`'s bounded recovery pass (Engine A's seed evidence) — this doesn't wait on anything in this document; it's the concrete next executable step already agreed.

**Next, once recovery evidence exists:** revise the schema proposed in the Foundation doc's Section 5 against what the recovery actually finds, informed by this document's fuller shape (the schema needs to support all 12 specialists eventually, not just a contact/deal ledger) — and bring that revised schema to Katie before building it, per her explicit instruction.

**Not started, correctly not started yet:** any of the 12 specialist functions themselves, Engine B's live external-discovery capability, the learning loop's actual implementation, or any outreach/pricing/negotiation capability. All of it waits on real evidence existing to build against — the same discipline already proven across every other WAG OS department this session (era/cohort modeling, the Reporting API, the WAG Main intelligence loop were all built against real data, never assumed shape).

---

## 10. What this document explicitly preserves

Nothing above replaces or narrows anything previously approved:
- `WAG_MASTER_OPERATING_SYSTEM_DIRECTIVE.md`'s full business-unit list, Authority Standard, and Rights/Contracts/Licensing/AR addendum (§42-56) — this department operates *under* that architecture, not beside it.
- `WAG_REVENUE_PARTNERSHIPS_FOUNDATION.md` — stays the working Engine A recovery document, not replaced or duplicated here.
- `WAG_EDUCATIONAL_IP_LIBRARY.md`'s era/cohort architecture — the real, existing foundation Licensing & Distribution BD extends.
- Every previously approved security/data-integrity standard — any new WAG Brain table this department eventually needs follows the same RLS-from-creation discipline already standing (Section 24 of `WAG_OS_SECURITY_CHECKLIST.md`).
- `WAG_PODCAST_DEPARTMENT_ARCHITECTURE.md`'s own not-yet-built Podcast Revenue/Sponsorship Intelligence function — this department's eventual reach into WAG Podcast should extend that design when the time comes, not duplicate it.

---

*Cross-referenced in `WAG_OPERATING_SYSTEM_MAP.md` alongside `WAG_REVENUE_PARTNERSHIPS_FOUNDATION.md`. Design only — no schema, employee, or Edge Function is created from this document. The next real action is the Foundation doc's recovery pass; this document is what that recovery's findings get evaluated against.*
