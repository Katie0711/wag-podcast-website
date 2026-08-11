# WAG Revenue & Partnerships — Consolidated Architecture

**One executive question this module answers: is the Revenue & Partnerships design actually complete, non-contradictory, and correctly sequenced — and if not, exactly where is it missing, duplicated, contradictory, or premature?**

**Status: design only, 2026-08-11 — nothing built.** This document consolidates the three existing Revenue & Partnerships documents and has grown across three review passes the same day: (1) the original 14 requirement areas Katie specified as missing, closing with the gap analysis she asked for; (2) a named-relationship exclusion boundary plus Deal Economics/Pricing Intelligence, Market Rate Intelligence, Deal Review, Offer & Package Intelligence, and Deal Strategy (Sections 15-21), added before the historical recovery pass was allowed to run; (3) the brand-specific architecture — WAG Main and WAG Podcast are not interchangeable inventory — plus Cross-Brand Deal Strategy, brand routing, a shared Relationship Brain, property-aware Pricing Intelligence, cross-sell intelligence, company-level GM visibility, the content-org boundary, the long-term multi-property principle, and Campaign Architect (Sections 22-31).

---

## 0. What already exists — not repeated here, only indexed

| Document | Covers |
|---|---|
| `WAG_REVENUE_PARTNERSHIPS_FOUNDATION.md` | Real inventory of what exists today (no CRM, no closed deals on record, Beehiiv confirms 0 sponsorship agreement items), the corrected Gmail-availability framing, the source-of-truth hierarchy, and the controlled document ingestion workflow |
| `WAG_REVENUE_PARTNERSHIPS_DEPARTMENT_ARCHITECTURE.md` | The two-engine model (internal memory + external new-business intelligence), the 20-stage discover-to-renew pipeline, GM + 12 specialist functions, the Revenue Learning Loop, and authority boundaries mapped against the master directive's existing standard |
| `WAG_REVENUE_EMAIL_INTAKE_ARCHITECTURE.md` | The dual-Gmail design, exact scopes requested, account separation, Spam/Junk monitoring, sender/anti-fraud verification, prompt-injection containment, and the 10 specific questions Katie asked before either connector is built |

Sections 1-14 below are the original 14 requirement areas Katie flagged as missing from the first pass. Sections 15-21 and 22-31 are later additions, described in the status line above.

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

## 15. Named-relationship exclusion boundary (added 2026-08-11, before the recovery pass ran)

**Epic, Nintendo, and UpFaith & Family/Heartland are out of scope for Gmail search, read, ingestion, or summarization at this stage** — added by Katie immediately before the bounded recovery pass began. These relationships may involve sensitive account, vendor, payment, platform, or contract information that isn't necessary for the current Revenue build.

**This applies to the actual recovery pass technically, not just as a stated intention:** every search query the recovery pass runs excludes these names outright (query-level exclusion terms, not just a promise not to look), and if any result from a legitimately-scoped generic search happens to reference one of these relationships anyway, it is skipped and excluded from any extraction or summary — never processed on the theory that it "came up incidentally." Explicitly, per Katie's instruction: no attempt to reach the same information through attachments, forwarded threads, search-term variants, or the other connected inbox. Kidoodle is not restricted by this boundary (only the three named above).

Katie will provide specific sanitized documents or explicit authorization separately if/when this scope needs to expand. Until then, the Revenue foundation proceeds using other sponsor/paid-collaboration/business-opportunity evidence from the two connected inboxes.

## 16. Deal Economics & Pricing Intelligence (a core specialist, not optional)

**The question this function exists to answer: "What should WAG charge for this deal, why, and what should we negotiate?"** Added as a first-class Department Architecture role (extends, doesn't replace, the "Pricing / Deal Intelligence" row already in that doc's team table), because underpricing WAG's audience, inventory, IP, rights, or exclusivity is a real, material risk this design hadn't previously named directly.

**Central distinction this function exists to protect: cash price is not the same as economic value.** A $20,000 offer that demands materially broader rights, or that blocks WAG from accepting other valuable sponsors through excessive exclusivity, is not automatically better than a $15,000 offer with narrower terms. Every deal review this function produces separates the two explicitly.

**Real factors it must weigh, combining WAG's own evidence with current external market evidence:**
- Channel/platform size, recent average and median performance, **expected views rather than subscriber count alone**, audience demographics/fit, engagement, historical sponsor performance where available
- Integration type: dedicated vs. integrated content, YouTube vs. Podcast vs. Shorts/social, number of deliverables, cross-platform packages
- Production burden, turnaround time, category
- Brand size/budget signals where reasonably knowable, campaign duration
- **Rights economics:** usage rights, paid-media/whitelisting rights, organic usage rights, likeness/name/image rights, content ownership, licensing term, territory, exclusivity/category lockout
- **Deal-friction economics:** revision requirements, reshoots, raw-footage requests, perpetual rights, renewal/extension rights, cancellation terms
- **Payment economics:** payment terms, late-payment risk (feeds Section 10's counterparty-risk record), opportunity cost of taking this deal over another

### 16a. Market Rate Intelligence — the evidence Pricing Intelligence runs on

**Never invent creator rates from a generic CPM formula.** A standing research function continuously looks for credible, current evidence: creator sponsorship pricing generally, comparable creator economics, podcast sponsorship rates, YouTube integration rates, Shorts/social package rates, usage-right premiums, exclusivity premiums, paid-amplification/whitelisting rates, licensing rates, industry/agency benchmarks, creator-economy reports, and actual observed deal information where legitimately available.

**Every benchmark is tagged with exactly one of four evidence tiers, never blended:**
1. **WAG OBSERVED DATA** — WAG's own accepted/declined/countered rates. As real deal history accumulates, this tier should increasingly outweigh the other three.
2. **EXTERNAL OBSERVED MARKET EVIDENCE** — a real, sourced, dated instance of what another creator/deal actually charged or was offered.
3. **INDUSTRY BENCHMARK** — a published report or agency-stated range, sourced and dated.
4. **MODEL/AGENT ESTIMATE** — this system's own inference where no harder evidence exists. **Never presented as a known market rate** — always labeled as an estimate, with the reasoning behind it stated.

### 16b. Katie's current pricing is CURRENT WAG ASK, not automatically CORRECT MARKET VALUE

Katie will provide WAG's current pricing separately. This function treats those numbers as a starting data point to evaluate, not a conclusion to defer to — it should independently assess whether WAG appears underpriced, appropriately priced, overpriced, incorrectly packaged, failing to charge for rights/exclusivity it's granting away, or missing valuable upsells. **It never changes WAG's pricing autonomously** — it brings evidence and a recommendation to Katie, per the standing authority boundary (Department Architecture §6).

## 17. Deal Review / Negotiation Guardian

Before Katie accepts a material commercial deal, this function produces one concise Deal Review — not a data dump:

Brand · what they're asking for · what they're offering · recommended WAG price/range · evidence supporting that range (tagged per Section 16a's tiers) · rights being requested · the value/cost of those rights · exclusivity implications · deliverable burden · payment terms · contract/legal issues requiring review (routed to Legal/Rights, per Section 11 — this function flags, it does not itself make legal determinations) · counterproposal recommendation · walk-away concerns · upsell/package opportunities · overall recommendation.

**Explicit red flags this function must know to name, not just generic caution:** price materially below WAG's assessed value; perpetual usage rights requested; unusually broad likeness rights; paid-media usage bundled without adequate compensation; category exclusivity without a corresponding premium; excessive revision cycles; raw footage requested; long payment terms; broad cancellation rights favoring the brand; scope creep beyond the original ask; multiple platforms bundled without platform-appropriate pricing; a brand attempting to convert a single integration into broad IP ownership.

**This is business intelligence, not legal advice.** Legal/Contract Intelligence (master directive's existing Rights/Contracts architecture) remains the only function that makes legal interpretations or rights determinations — this function's job is to flag that legal review is needed, never to substitute for it.

## 18. Offer & Package Intelligence (expands Offer & Inventory Strategist, Department Architecture §4)

WAG should not simply wait for brands to dictate what they want to buy. This function proactively designs commercial packages from WAG's actual real assets and audience — across WAG Main, WAG Podcast, Shorts/social, multi-platform combinations, episodic/series sponsorship, seasonal packages, launch packages, longer-term ambassador relationships, licensing opportunities, appropriate IP/content packages, and custom branded concepts.

**Packages are designed around the buyer's business outcome and WAG's economics — not merely bundled deliverables.** The concrete shape this takes: recognizing when "instead of buying one integration, this brand is a strong fit for a 3-video + Podcast + social package" is genuinely true — and, just as importantly, recognizing when bundling would undervalue WAG or grant away more rights/exclusivity than the deal's size justifies. A package recommendation is only as good as its economics; this function and Section 16's Pricing Intelligence work together, never independently.

## 19. Deal Strategy — the buyer-side counterpart to Pricing Intelligence

**A distinct role from Pricing Intelligence, not a duplicate of it.** Where Pricing Intelligence answers "what should WAG ask," Deal Strategy answers a different question: **"what does this specific brand actually value, what problem are they trying to solve, what budget signals do we have, what would make them say yes, and how do we increase the deal's value to WAG without killing it?"**

The concrete difference in output: Pricing Intelligence alone might say "don't accept $12,000." Deal Strategy is what makes the system capable of recommending something like *"counter at $22,500; if they resist, preserve the base integration at $17,500 but remove paid usage; if they need paid usage, offer a 90-day window for an additional fee; don't grant 12-month category exclusivity at this price point; alternatively, offer a larger Podcast + Main package that better serves their actual campaign objective."* That is a negotiation strategy, not a number — and it's the standard this department is being built to meet.

Deal Strategy draws on Section 16's pricing evidence, Section 18's package options, and Relationship Intelligence's (Department Architecture §4) history with the specific brand/contact, and produces a recommended negotiation path for Katie's review — never an autonomous counteroffer sent without her approval, per the standing authority boundary.

## 20. Inbound and Outbound Opportunity Intelligence, restated plainly

Historical-email recovery is a starting evidence pass, **not the mission of this department.** The mission is generating substantially more real commercial opportunity than WAG has historically had. Two engines, restated in the terms Katie used this pass (same substance as Engine A/B, Section 1, and Sponsor Scout, Department Architecture §4 — not a new concept, a clearer name for it):

- **Inbound Opportunity Intelligence** — find, verify, qualify, and prepare a response to opportunities that arrive in WAG's own inboxes.
- **Outbound Opportunity Intelligence** — continually discover appropriate brands, agencies, advertisers, licensing partners, and other commercial opportunities WAG should proactively pursue, whether or not they've ever contacted WAG.

Both feed one pipeline: **opportunity → fit → package → pricing → outreach → negotiation → contract → execution → invoice → collection → results → renewal → learning** — the same shape as the 20-stage pipeline already defined (Department Architecture §3), now explicitly showing where Sections 16-19's new functions sit inside it (fit → package → pricing sits between opportunity qualification and outreach, negotiation draws on Section 19's strategy output).

## 21. Data minimization

Revenue Intelligence does not need, and must never persist into WAG Brain: bank account numbers, passwords, tax IDs, vendor credentials, or other unrelated sensitive account information. If any such material is unexpectedly encountered during the recovery pass or any future automated process, it is never reproduced into a summary, a report, or model context — only that sensitive material was encountered is recorded, where operationally necessary, following the standing security policy. This is a hard rule, not a judgment call made per-instance.

## 22. WAG Main and WAG Podcast are not interchangeable inventory

Added 2026-08-11: Revenue & Partnerships is architected as a shared company-level layer with **brand-specific commercial intelligence underneath it** — WAG Main and WAG Podcast are distinct media properties with different audiences, content, formats, performance patterns, and sponsor fit, and must never be treated as one undifferentiated inventory pool.

### 22a. WAG Main Revenue & Partnerships

A specialist commercial intelligence scoped to Wild Adventure Girls Main, understanding: WAG Main's audience, current teen-entertainment positioning, actual video performance, formats/content buckets, upcoming concepts, expected performance where real evidence supports it, integration opportunities, natural product/category fits, production requirements, YouTube deliverables, Shorts/social extensions, sponsorship inventory, historical sponsor evidence where safely available (subject to Section 15's exclusion boundary), rates/pricing evidence, rights/exclusivity implications, brand-safety/fit, and existing contractual conflicts.

**This specialist communicates directly with Greenlight, Packaging, Format, Content Strategy, and Production** — the point being that Revenue identifies sponsor opportunities *before* a video is filmed, not after it publishes. Concrete example, stated as the standard to build toward: an upcoming WAG Main concept → Revenue detects the natural sponsor category → Sponsor Scout finds appropriate companies → Pricing/Deal Strategy develops the offer → Katie receives one qualified opportunity, not raw leads to sort through herself.

### 22b. WAG Podcast Revenue & Partnerships

**Requires its own commercial specialist — not merely a filter applied to WAG Main's sales pipeline.** Understanding: Podcast positioning, episode topics, upcoming guests, YouTube podcast performance, Spotify performance where available, Apple Podcasts performance where available, episode/series performance, host-read inventory, integrated video sponsorship, pre/mid/post-roll possibilities where applicable, episode sponsorship, recurring advertiser relationships, clips/social extensions, branded segments where appropriate, multi-episode packages, seasonal packages, sponsor-category fit, podcast-specific pricing/market benchmarks, and guest-related commercial opportunities where appropriate.

**Explicit rule: never apply WAG Main sponsorship pricing or performance assumptions to WAG Podcast.** Podcast-specific commercial evidence gets built over time, from Podcast's own real deal history (once it has any) and Podcast-specific market benchmarks (Section 16a) — never inferred as a discount or multiple of Main's numbers.

## 23. Cross-Brand / WAG Media Deal Strategy

A company-level function, distinct from either brand-specific specialist above, responsible for evaluating **sell-separately vs. bundle-intentionally** whenever combining WAG properties would produce a stronger commercial offer. Real combination types it should evaluate: WAG Main + WAG Podcast integration, Main + Podcast + Shorts/social, a multi-video Main campaign, a multi-episode Podcast campaign, a Main + Podcast multi-month partnership, a seasonal WAG-wide campaign, a launch campaign across WAG properties, appropriate talent/social extensions, and future WAG properties once they become active.

**Bundling must never automatically mean discounting.** The required sequence: determine each asset's standalone value first (via Section 22a/22b's property-specific evidence), *then* evaluate the additional strategic value the combination creates. This function's explicit job is preventing a brand from receiving several WAG properties for roughly the price of one merely because they asked for "a package."

## 24. Brand routing

Every discovered opportunity is evaluated into exactly one of: **WAG MAIN ONLY / WAG PODCAST ONLY / CROSS-BRAND / OTHER WAG ASSET / NOT A FIT** — with the reasoning stated, never a bare label. Sponsor Scout does not make this determination alone; Brand-Fit Intelligence (Department Architecture §4, now scoped across both properties) routes each opportunity to the correct brand-specific specialist (22a/22b) or to Cross-Brand Deal Strategy (Section 23).

## 25. Shared Relationship Brain — one company-level CRM, not two

**Explicit prohibition: do not build two disconnected CRMs, one per brand.** Companies, agencies, contacts, relationship history, negotiations, and counterparty/payment history (Section 10) live in one shared, company-level Relationship Brain (the Relationship Graph already defined in Section 4, now explicitly scoped as shared infrastructure). A single company may simultaneously carry a Main opportunity, a Podcast opportunity, a combined opportunity, a previous WAG relationship, and a licensing relationship — all preserved as one connected history against that company/contact, never split across brand-siloed records that would each show an incomplete picture.

## 26. Shared Pricing Intelligence, property-specific valuation

Pricing Intelligence (Section 16) operates company-wide as one function, but **must value each property independently before recommending any total deal price**: WAG Main value, WAG Podcast value, social value, rights value, exclusivity value, and combined-package value are each assessed on their own evidence. **Explicit rule: never derive Podcast pricing merely by taking a percentage of Main pricing without real Podcast-specific evidence** — this restates 22b's rule at the pricing-function level specifically, since it's the point where that mistake would be easiest to make silently.

## 27. Cross-sell / upsell intelligence

Every qualified opportunity is evaluated for legitimate expansion — real examples: a Main sponsor may also be a strong Podcast advertiser fit; a Podcast advertiser may benefit from a Main integration; a one-video sponsor may make more sense as a three-video campaign; a successful campaign may justify a longer-term relationship. **Explicit constraint: never upsell mechanically.** Expansion is recommended only where it genuinely improves the buyer's likely objective *and* WAG's economics (Section 16) — not simply because a bigger deal is available to propose.

## 28. Company-level Revenue GM visibility

The Revenue & Partnerships GM (Department Architecture §4) sits above every function in Sections 22-27 and sees, at the company level: total company pipeline, WAG Main pipeline, WAG Podcast pipeline, cross-brand pipeline, licensing pipeline, forecast/committed/invoiced/collected revenue (Section 2's four ledgers), overdue revenue, unsold commercial inventory, upcoming opportunities, renewals, and relationship health. The GM allocates effort based on expected company-level value — not by letting whichever property is loudest or easiest consume all sales attention.

## 29. Connection to the content organizations — receives from, does not control

Revenue receives information from the creative departments; it does not direct them. WAG Main Content Team ↔ WAG Main Revenue (22a); WAG Podcast Team ↔ WAG Podcast Revenue (22b); the Company Revenue GM connects to both. **Revenue may recommend commercially attractive opportunities, but it must never distort either channel into constant advertisements or override Brand Guardian or creative strategy** — the same non-override boundary already implicit in the master directive's Brand Guardian function, made explicit here for Revenue specifically since this is the function most likely to create pressure in that direction if left unchecked.

## 30. Campaign Architect — a shared Revenue/Creative role

**The question Sponsor Scout and Pricing Intelligence don't answer: "what could WAG actually create with this brand that viewers would enjoy?"** Not quite sales, not quite the creative team — a distinct role sitting between them, made more powerful specifically because WAG now has two properties to draw on.

Concrete shape, per the standard Katie set: instead of proposing "Brand X — 60-second integration — $X," Campaign Architect proposes a real concept — e.g. the brand becomes a natural part of a WAG Main challenge, a related host-read segment on the Podcast fits that episode's actual topic, two natural social extensions round it out — with the package's objective stated (e.g. product discovery across entertainment + conversation), why it works for the advertiser, why it won't annoy WAG's actual viewers, and the recommended package economics (feeding back into Section 16/23).

**Explicit boundary, same non-override principle as Section 29: Campaign Architect cannot override either property's creative leadership or Brand Guardian.** It proposes concepts for creative/Brand Guardian review, the same way Deal Strategy (Section 19) proposes negotiation paths for Katie's review — recommendation authority, not decision authority.

**Distinct from Offer & Package Intelligence (Section 18), on purpose, not by accident:** Section 18 packages WAG's existing inventory into economically sound combinations; Campaign Architect designs what the sponsored content itself creatively *is*, native to the property. A real package needs both — the economics from Section 18/16, the creative concept from Campaign Architect — kept as two distinct jobs rather than merged into one vague "make a package" step.

## 31. Long-term principle: a multi-property media company, not two channels sharing an inbox

Today's active commercial properties are WAG Main and WAG Podcast. The architecture across Sections 22-30 is deliberately built so a **future WAG-owned property or IP asset** can plug into the same company-level Revenue GM, Relationship Brain, Pricing Intelligence, Legal/Rights, Finance, and Executive systems without rebuilding any of it — a new property gets its own brand-specific specialist (matching 22a/22b's shape) and slots into the existing shared layer, rather than triggering a parallel architecture.

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

**Contradictory:** none found across any of the three passes. Sections 15-31 map cleanly onto the existing two-engine model, the existing authority boundary, and the existing 20-stage pipeline — nothing here required revising a previously-approved decision. One judgment call worth stating explicitly rather than leaving implicit: Section 30's Campaign Architect and Section 18's Offer & Package Intelligence could look redundant at a glance — they're not, and Section 30 states why (economics vs. creative concept, same split as Pricing Intelligence/Section 16 vs. Deal Strategy/Section 19).

**Premature — correct not to build yet, stated so nothing gets built ahead of its real dependency:**
- Sections 1 (Commercial Inventory), 4 (Relationship Graph), and 8 (Opportunity Scoring) all describe real schema. None of it should be built before Build Order steps 1-4 actually run — designing any of it against zero real rows carries the same risk the Foundation doc already flagged for the original partner/deal schema.
- Any actual scoring algorithm, pricing model, or outreach-personalization logic is premature until real outcome data exists for the Learning Loop to learn from — wins, losses, and replies that don't exist yet per the Foundation doc's own findings.

---

*Cross-referenced in `WAG_OPERATING_SYSTEM_MAP.md` alongside the other three Revenue & Partnerships documents. Design only — nothing built, nothing connected. Awaiting Katie's review of the gap analysis above and the Section 13 build order before implementation begins.*
