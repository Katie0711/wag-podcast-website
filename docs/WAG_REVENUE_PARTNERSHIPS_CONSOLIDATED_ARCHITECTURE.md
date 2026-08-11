# WAG Revenue & Partnerships — Consolidated Architecture

**One executive question this module answers: is the Revenue & Partnerships design actually complete, non-contradictory, and correctly sequenced — and if not, exactly where is it missing, duplicated, contradictory, or premature?**

**Status: design only, 2026-08-11 — nothing built.** This document consolidates the three existing Revenue & Partnerships documents and has grown across five review passes the same day: (1) the original 14 requirement areas Katie specified as missing, closing with the gap analysis she asked for; (2) a named-relationship exclusion boundary plus Deal Economics/Pricing Intelligence, Market Rate Intelligence, Deal Review, Offer & Package Intelligence, and Deal Strategy (Sections 15-21), added before the historical recovery pass was allowed to run; (3) the brand-specific architecture — WAG Main and WAG Podcast are not interchangeable inventory — plus Cross-Brand Deal Strategy, brand routing, a shared Relationship Brain, property-aware Pricing Intelligence, cross-sell intelligence, company-level GM visibility, the content-org boundary, the long-term multi-property principle, and Campaign Architect (Sections 22-31); (4) the Revenue Outcome Reasoning Standard, the Pop&Boom/PolyBuzz case study turned into permanent learning, and the Katie-Retains-Final-Authority rule (Sections 32-34), added after the recovery pass surfaced a real missed opportunity and Katie corrected both the specific finding and the department's governing philosophy; (5) Licensing Opportunity Intelligence and its licensing-specific pricing-independence rule (Sections 35-36), added after Epic! surfaced as a real, second licensing relationship and Katie identified both a pricing-classification risk and a larger proactive-licensing opportunity; (6) the Katie-in-Control Revenue Operating Rule (Section 37), added immediately before the schema migration to make Section 34's authority principle structurally enforceable — explicit approval-gated workflow states for opportunities, outbound messages, pricing, invoices, and collections, not prompt-only.

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

## 32. Revenue Outcome Reasoning Standard

**Every declined or lost opportunity must preserve the true reason category, or WAG OS learns the wrong lesson from its own history.** A deal that dies on brand-fit grounds and gets recorded as a pricing failure will silently teach Pricing Intelligence (Section 16) to discount when it shouldn't, and will never teach Brand Guardian anything at all. Reason category is recorded as structured fact, tagged per opportunity, evidenced from the actual thread/document — never inferred from the deal's outcome alone.

**The standard taxonomy — at minimum, one of:**

1. Price too high (WAG's rate exceeded what the brand was willing to pay, evidenced by an actual objection or counter)
2. Budget too low (the brand's stated or implied budget fell below WAG's minimum viable package)
3. Timing (real scheduling/availability conflict, either side)
4. No response / ghosted (a real thread that simply stopped, no explicit decline from either side)
5. Poor brand fit (general positioning/tone/category mismatch, not rising to a hard disqualifier)
6. Product inappropriate for WAG (the product/service itself conflicts with WAG's standards — Pop&Boom/PolyBuzz's case)
7. Audience mismatch (the brand's target demographic doesn't overlap meaningfully with WAG's)
8. Age/talent restriction (a hard, evidenced requirement — e.g. an 18+ product, an on-camera age minimum — that disqualifies WAG's cast structurally, distinct from a softer audience-mismatch judgment call; first surfaced by the Pop&Boom case, Section 33)
9. Rights/exclusivity unacceptable (the brand required usage rights, exclusivity, or ownership terms WAG wasn't willing to grant at any price)
10. Payment terms unacceptable (net terms, structure, or payment risk WAG wasn't willing to accept)
11. Legal/risk concern (a real issue routed to Legal/Rights, Section 11, that killed or paused the deal)
12. Production burden too high (the deliverable scope exceeded what WAG could realistically produce at the offered price/timeline)
13. WAG declined strategically (the deal was viable on its own terms but conflicted with a broader WAG priority, positioning choice, or opportunity cost)
14. Brand declined, reason unstated or unknown (the counterparty walked away or went quiet without giving WAG a reason — recorded honestly as unknown, never guessed at)

**Explicit rule, stated because it's easy to get backwards: a high-paying deal that harms WAG's audience trust, positioning, or reputation is not a successful deal, and a deal WAG walked away from for brand-safety reasons is not a loss.** Brand Guardian (master directive §21) and Revenue evaluate sponsor fit together before any commercial progression — neither function alone owns the "should we do this" question when money and brand risk are both in play.

## 33. Pop&Boom / PolyBuzz — permanent Revenue learning from a real case

**Approved by Katie as WAG's first real sponsorship case study.** A real, fully-reconstructed thread (Gmail thread `19f669167a66c816`, `thewildadventuregirls@gmail.com`, Jul 15 – Aug 2, 2026, 16 messages) — not a hypothetical, not Katie's recollection alone. Preserved here in the shape every future opportunity should be recorded in (Section 33d), and turned into standing rules (33a-33c) so the lesson survives past this one case.

### 33a. Agency ≠ underlying brand

**Whenever outreach comes from an agency, management firm, network, or other intermediary, Revenue must identify the actual underlying brand/product/client before meaningful qualification, pricing, or creative development — never infer fit from the agency's name alone.** Pop&Boom described itself only as "a KOL agency" in its opening outreach; the real client and product (PolyBuzz, an AI companion-chatbot app) wasn't named until Katie asked directly. An agency name carries no brand-safety signal by itself.

### 33b. Opportunity Evaluation Sequence — order of evaluation, not a suppression gate

Before creative ideation or pricing effort begins, verify in this order: **sender legitimacy → actual company/client → actual product → audience/age fit → brand safety → WAG fit → rights/scope → THEN pricing/creative.** If a material fit issue exists, creative and pricing investment pauses while it's escalated — this sequence exists to catch a Pop&Boom-shape problem *before* the girls start concepting, not after.

**This is an ordering rule, not an authority rule.** It governs what gets evaluated first so expensive creative/pricing effort isn't wasted on a deal that was never going to clear brand safety — it does **not** determine what Katie gets to see. That determination belongs entirely to Section 34, which governs regardless of where in this sequence an opportunity is currently sitting.

At minimum, the audience/brand-safety check verifies: actual product/service, audience/age rating, whether the product is appropriate for WAG, talent age requirements, platform/content restrictions, known brand-safety concerns, and any obvious conflict with WAG standards. Pop&Boom's disqualifying fact (PolyBuzz is 18+ rated, requires on-camera talent to be 18+) was caught here — by Katie asking a direct question the agency hadn't volunteered — proving this check belongs as a standing step, not an ad hoc one.

### 33c. Regression test for the future inbound-opportunity system

Once Inbound Opportunity Intelligence (Section 20) is built, this historical case becomes its first regression test. A correct system, fed this real thread, should: identify POP&BOOM as an intermediary, not the underlying brand; resolve PolyBuzz as the actual product; flag the 18+/on-camera-age concern as a brand-safety issue; classify the eventual outcome as "product inappropriate for WAG" (Section 32, category 6/8) — never as a pricing rejection, since no pricing objection exists anywhere in the evidence; and, per Section 34, generate an executive opportunity card that reaches Katie rather than auto-declining. If a future build doesn't reach substantially this conclusion from the same evidence, its qualification logic needs improvement before it's trusted on live opportunities.

### 33d. The permanent record shape

Every future commercial opportunity — not just Pop&Boom — is preserved in this shape: **source → intermediary (if any) → underlying brand/product → qualification → fit assessment → pricing shared (yes/no, and how) → counterparty response → negotiation → outcome → reason (Section 32 taxonomy) → learning.** This case is the first entry in that record and the seed of WAG Revenue's initial training/evaluation set:

| Field | Pop&Boom / PolyBuzz record |
|---|---|
| Source | Inbound, cold, via agency |
| Intermediary | Pop&Boom ("a KOL agency") |
| Underlying brand/product | PolyBuzz — AI companion/chatbot app, 40M+ downloads claimed |
| Qualification | Real, coherent multi-week exchange; agency identity confirmed real, product identity confirmed only after Katie asked |
| Fit assessment | Failed on audience/age-safety grounds — 18+ product, 18+ on-camera talent requirement, WAG's audience is family/teen |
| Pricing shared | Yes — `WAG_Partnership_Options.pdf` + `WAG_Sponsor_OneSheeter2_V2.pdf` sent Jul 25, 2026, with organic-vs-paid-media rights explicitly separated |
| Counterparty response to pricing | None — no objection, no acceptance, no counter; conversation moved straight to deliverable scoping |
| Negotiation | None reached — died at the brand-safety question before a specific package/number was finalized |
| Outcome | WAG declined |
| Reason (Section 32) | Category 6/8 — product inappropriate for WAG / age-talent restriction. **Not** category 1/2 (price) |
| Learning | Seeded Sections 33a-33c above, plus the Gate 1 diagnosis in the Recovery Pass Findings doc |

## 34. Katie retains final authority over legitimate commercial opportunities (permanent authority rule)

**Added 2026-08-11, directly correcting a real risk in how Section 33b could otherwise be read.** The Opportunity Evaluation Sequence exists to order *evaluation*, never to authorize *suppression*. This section is the governing rule whenever the two could conflict — it wins.

### 34a. The legitimate-opportunity rule

**Every legitimate or reasonably credible commercial opportunity is surfaced to Katie, even when an agent recommends declining it.** An opportunity gets one of five labels, reasoning stated, never a bare tag:

- **STRONG FIT — pursue**
- **POTENTIAL FIT — investigate**
- **QUESTIONABLE FIT — caution**
- **POOR FIT — recommend decline**
- **HIGH RISK — recommend decline**

A "recommend decline" label is a recommendation, not a decision. The opportunity still reaches Katie's queue.

### 34b. Only obvious junk may be suppressed — and only with an audit trail

Agents may automatically remove an item from Katie's primary opportunity queue **only** when confidently determined to be: obvious spam, phishing, impersonation/fraud, malware, mass irrelevant solicitation, or clearly non-commercial junk. Every suppression is logged with its classification and evidence, so a false positive can be reviewed later — suppression is never silent or unrecoverable. **When confidence is insufficient, the default is to surface, never to suppress.** This restates and narrows the anti-fraud classification framework already standing (VERIFIED/LIKELY_LEGITIMATE/NEEDS_VERIFICATION/SUSPICIOUS/SPAM, used throughout the Recovery Pass Findings) — only the SPAM tier, held with real confidence, may be auto-removed from the primary queue.

### 34c. What Katie actually receives — the executive opportunity card

Never raw email. Every legitimate opportunity becomes one card:

Company/Brand · Agency/intermediary (if any) · Actual underlying client/product · What they want · Which property fits (WAG Main / WAG Podcast / Cross-Brand / Other, per Section 24) · Budget, if disclosed · Recommended WAG price/range (Section 16) · Pricing evidence (Section 16a's tiers) · Rights requested · Brand-fit assessment · Legitimacy verification · Risks/red flags · Opportunity/upside · Package or upsell angle (Sections 18/27) · Agent recommendation (pursue/investigate/caution/decline) and why · Recommended next action · **Katie decision: pending**, with drill-down to the actual source thread/document when she wants it.

The Pop&Boom case, run through this format retroactively:

> **LEGITIMATE OPPORTUNITY — CAUTION / RECOMMEND DECLINE.** Real agency and real campaign inquiry. Underlying product is an 18+ AI companion application. Requested YouTube/TikTok/Instagram campaign with paid-media rights. Potential commercial value exists, but a significant WAG audience/brand-fit concern is identified (18+ rating, on-camera talent must be 18+). Recommend declining unless Katie determines otherwise. **Final decision: Katie.** *(In the actual historical case, Katie reviewed and declined.)*

### 34d. Agents advise, Katie governs — no exceptions

No Revenue agent, Revenue GM, Brand Guardian, Campaign Architect, Pricing function, or other AI role may autonomously: accept a deal; decline a legitimate deal; send a binding counteroffer; agree to pricing; grant rights; agree to exclusivity; sign or accept contractual terms; commit WAG inventory; or permanently suppress a credible opportunity from Katie's view. These authority boundaries stay with Katie unless she explicitly changes them — this is Section 9's "all outreach requires approval" and the master directive's Human Authority Standard (§37), restated specifically for the decline/accept direction, which the original design had left implicit.

### 34e. A weird deal can still be valuable — restructure before recommending decline

**The evaluation mentality is detect → verify → understand → evaluate → improve/restructure → recommend → bring to Katie. It is never detect → agent doesn't like it → disappear.** Before recommending decline, the relevant function considers real alternatives, not just the original proposal as offered: could this fit WAG Podcast instead of WAG Main (Section 22b)? Could the campaign be modified? Could a specific problematic deliverable be removed while the rest proceeds? Could WAG offer something different from what was asked? Is this counterparty worth keeping warm for a future, better-fitting campaign even if this one doesn't work (Section 6, leakage/reactivation)? A "recommend decline" card should show that this was actually considered, not skipped.

### 34f. Executive visibility

The eventual CEO/Chief-of-Staff interface (extending the CEO Cockpit, master directive §1/§12) gives Katie a single **Opportunities Requiring My Decision** view — she should never need to ask Revenue whether anything interesting arrived. Legitimate opportunities are proactively surfaced there, prioritized by potential economic value, strategic value, brand fit, urgency/deadline, confidence, and risk — WAG Main, WAG Podcast, and cross-brand opportunities together in one view, while each property's individual pipeline (Section 22a/22b/28) stays intact underneath it.

### 34g. What this does not replace

This section governs *what reaches Katie and who decides*. It does not weaken or replace the existing fraud-filtering and qualification system (the VERIFIED/LIKELY_LEGITIMATE/NEEDS_VERIFICATION/SUSPICIOUS/SPAM framework, Section 33's evaluation sequence, or Section 16-19's pricing/deal intelligence) — those still do the real work of verifying, pricing, and assessing fit. Section 34 only settles who gets the final call once that work is done, and confirms that "the work isn't done yet" is never itself grounds to suppress a real opportunity from view.

## 35. Licensing Opportunity Intelligence (added 2026-08-11, proof-of-concept: Epic!)

**The question this function exists to answer: "Beyond the one buyer WAG happens to already have, who else, legitimately, might pay for content WAG already owns?"** Epic! (Recovery Pass Findings §13) is the real evidence this function is built from: one company has paid WAG for library content, on a recurring basis, for nearly ten years — real, direct proof that WAG's existing video library carries commercial licensing value beyond its original YouTube/ad-revenue purpose. Katie's framing, preserved directly: **Epic is proof of concept, not the whole opportunity.** Administering the one relationship WAG already has is real and necessary (§35d), but it is not this function's ceiling.

### 35a. Categories of legitimate licensing buyer to research

Not a target list — a research scope, evaluated for real fit before any outreach: children's/family streaming platforms, educational platforms, FAST/AVOD services where appropriate, broadcasters/networks, digital publishers, educational distributors, libraries/institutional platforms where relevant, international distributors, international streaming/media companies, localization/dubbing partners, content syndication services, and other legitimate video/content licensing models. **Epic's deal structure and price never get assumed to apply to any of them** — each is evaluated on its own real terms (§36).

### 35b. What must be researched before any opportunity is recommended for outreach or pricing

For every real candidate: the company itself, its actual business model, its actual audience, the territories it operates in, its likely rights requirements, its probable commercial structure, its reputation and payment risk, its strategic fit with WAG, and whatever real market evidence exists about how it licenses content and from whom. **No outreach or pricing recommendation is made without this research existing first** — this restates the standing "research before recommend" discipline already governing Sponsor Scout and Outbound Opportunity Intelligence (§20), applied to licensing specifically.

### 35c. International licensing — a dedicated part of this function, not an afterthought

Evaluate WAG's existing library along: **content type × territory × language × platform × localization cost × rights availability × likely demand × monetization potential.** Real, evidence-grounded observation worth preserving here: some of WAG's older educational content (the animal-facts and horse-education shorts that make up the real Epic catalog, Recovery Pass Findings §13) may be particularly well-suited to this because it's evergreen and less culturally dependent than entertainment content — a real, structural reason licensing value may concentrate in a different part of the catalog than where YouTube ad-revenue or sponsorship value concentrates. This is an observation to test, not yet a conclusion to act on.

### 35d. Dubbing / localization — connected to work already planned, not a new parallel track

This function's international-demand findings feed directly into the International Growth/Localization (Master Directive §48) and Dubbing Experimentation (§49) functions already named — not a third, competing localization initiative. The evaluation shape: **existing English video → dubbed/localized version → additional audience, distribution, or licensing opportunity** — assessed per title/language/market, not assumed universally valuable. **Explicit constraint, stated because the failure mode is obvious: do not blindly dub the entire catalog.** Identify high-potential content, languages, and markets first using the §35c framework, test on a small real set, measure actual results, and only expand where evidence supports it — the same test-before-scale discipline already standing for Packaging Intelligence and the Experimentation function generally.

### 35e. Multiple-life IP — classifications coexist, never overwrite

A single WAG-owned educational video may simultaneously be: historical YouTube content, currently-licensed content (Epic), a book-conversion candidate, educational IP, an international licensing candidate, a dubbing/localization candidate, and a candidate for a future derivative product not yet built. **These are independent, coexisting classifications on the same underlying asset — one must never overwrite another** in whatever data model eventually tracks this (a future, not-yet-built Content/IP Asset Ledger, out of scope for this design-only pass). A video being "the Epic renewal batch" today doesn't make it not also a real candidate for the other lists.

### 35f. Relationship Intelligence for Epic specifically

Epic is a real, high-value, long-term WAG relationship and should be tracked as one: renewal cadence, historical rate changes (periodic increases, per Katie), content actually licensed, amounts invoiced/collected, next real renewal opportunity, and relationship health. **This stays inside the existing sensitive-information boundary (§21) — no banking, vendor, or account information beyond what's operationally necessary is ever exposed or ingested**, matching how the two source documents' address/phone fields were deliberately excluded from the Recovery Pass Findings write-up (§13).

### 35g. The larger strategic direction this section exists to point toward

Not built now — named so it isn't lost. Katie's own framing, preserved: eventually, an agent asks **"who are the next 25 companies, anywhere in the world, that might legitimately pay for content WAG already owns?"** — and a second layer then asks, per candidate: which WAG videos actually fit this buyer, what rights should be offered and what should never be given away, what the opportunity is realistically worth (§36, never anchored to Epic), whether dubbing would make the catalog more valuable to them, and how WAG should actually approach them. This is a real, evidenced expansion of the licensing business Epic already proved exists — sequenced behind the rest of this document's Build Order (§13), not ahead of it.

## 36. Pricing Intelligence rule for licensing: independent valuation, never anchored to an existing relationship

**When a new licensing opportunity appears, Pricing Intelligence (§16) must research and value that opportunity independently.** It considers the specific content involved, the number of assets, the platform, the audience, the territory, the languages, the term, exclusivity, usage rights, distribution rights, renewal rights, derivative rights, promotional rights, and any other relevant terms — the same rights-economics discipline §16 already applies to sponsorship deals, applied here to licensing.

**The one answer this function must never give: "Epic pays $345, therefore quote $345."** Epic's price is real evidence about the Epic relationship specifically — it is not evidence of what any other company should pay, for the reasons stated in Recovery Pass Findings §13a. This is the licensing-specific instance of §16b's broader rule (Katie's current pricing is the current ask, not automatically the correct value) — extended here with a category §16b didn't yet need: a relationship-specific legacy price is not even a *starting* data point for a different counterparty, the way WAG's own current sponsorship rate sheet is treated as one.

## 37. Katie-in-Control Revenue Operating Rule (added 2026-08-11, before the schema migration)

**The principle, stated once so nothing downstream has to re-derive it: agents run the company's research and preparation machine. They do not get to run the company past Katie.** Until she explicitly grants a narrower standing authority, no Revenue, AR, Collections, Licensing, Finance, Partnership, Campaign, or other AI role may take consequential external action autonomously. This extends Section 34 (Katie retains final authority over legitimate opportunities) into explicit, per-function workflow states — Section 34 said *what* must always reach her; this section says *how the schema makes that structurally true* rather than prompt-only.

**What agents may always do without approval:** verify legitimacy, research the company/product, assess fit, score/prioritize, identify risks, recommend pursue/investigate/caution/decline, propose a package, recommend pricing, draft a response, prepare a follow-up. **What requires Katie's explicit approval before it happens:** sending any sponsor/partner-facing message (initial outreach, follow-up, counter, negotiation, renewal, payment reminder, collections email, licensing outreach, partnership acceptance or decline); finalizing or sending any invoice; any collections escalation (a reminder, a material tone change, contacting an alternate AP contact, a payment plan, waiving a fee, threatening legal action, involving counsel/a collections agency, settling a dispute); and any deal-binding action (final pricing, accepting a deal, declining a legitimate deal, a binding counteroffer, granting usage rights or exclusivity, approving whitelisting/paid media, committing deliverables or deadlines, signing/accepting a contract, granting licensing rights, changing material terms, any public commitment).

**Authority is never inferred — restated because it's the failure mode this section exists to prevent.** Not from a prior similar approval, not from Katie approving a different deal, not from a prompt, not from an email, not from model confidence, not from "this is routine." Authority comes from an explicit, software-enforced record, not a pattern-matched assumption. Default, until Katie changes it: **AI prepares; Katie decides.**

### 37a. How this is enforced technically, not just stated (schema implication)

A single centralized, polymorphic approval ledger — `revenue_approvals` (Section 9b) — records every action that needs Katie's sign-off: what it is, what table/record it's attached to, who/what requested it, when, what she decided, and when. This is deliberately **one table, not an `approval_status` column bolted onto every entity** — Katie's own instruction was not to overstuff every table with identical approval columns where a centralized model is cleaner, and a single ledger is also what makes a future "everything awaiting my decision" view (Section 34f) a single query instead of a UNION across a dozen tables.

Two entities get their own first-class lifecycle status in addition to (not instead of) the central ledger, because their current state is something the system needs to filter and display on constantly, not just look up when a decision is pending:

- **`revenue_deals.status`** spans the full real lifecycle Katie specified, front to back: `detected → verified → analyzed → needs_katie_review → approved_to_pursue / declined_by_katie`, continuing into the existing pipeline stages (`quoted → negotiating → closed_won / closed_lost`). A deal never skips `needs_katie_review` on its way to `approved_to_pursue` — enforced by the approval ledger requiring a resolved `revenue_approvals` row of `action_type='pursue_opportunity'` before that transition, not by an agent's own judgment that skipping felt fine.
- **`revenue_outbound_messages`** (new, Section 9b) is a first-class table for exactly the draft/send lifecycle Katie described: `draft → awaiting_katie_approval → approved → sent`. This didn't exist in the prior schema draft — Section 2's authority rule was already implicit that outreach requires approval, but nothing modeled the *drafted-but-unsent message itself* as a real, trackable object. It now does, covering every message type Katie listed (initial outreach, follow-up, counter, negotiation, renewal, payment reminder, collections, licensing outreach, decision response).

**Invoices** get an analogous but separate lifecycle on `revenue_invoices.status`: `prepared → awaiting_katie_approval → approved → sent → void`. **This is deliberately a different concept from payment status** (paid/partial/overdue, Section 5's `revenue_payments`/AR view) — "has this invoice been authorized to go out" and "has it been paid" are two different questions with two different owners (Katie's approval vs. the counterparty's action), and collapsing them into one status field was exactly the kind of conflation Katie's schema-correction pass (this session) was written to prevent elsewhere. **The system must never treat "invoice drafted" as "invoice sent"** — enforced structurally by `sent` only being reachable after an approved `revenue_approvals` row exists, not by convention.

**Pricing recommendations** (`recommended → awaiting_katie_decision → approved/countered`) live as `revenue_pricing_evidence` rows tagged `evidence_category='pricing_intelligence_estimate'`, gated by a `revenue_approvals` row of `action_type='approve_pricing'` before that number ever becomes a deal's `quoted_rate`/`agreed_rate`. **Collections** (`overdue_detected → recommended_action → awaiting_katie_approval → action_taken`) is represented as `revenue_deal_events` rows (`overdue_detected`, `collections_action_recommended`, `collections_action_taken`) plus a gating `revenue_approvals` row of `action_type='collections_action'` — no new table needed; the existing event log plus the central ledger already say this precisely. **Contracts** are explicitly out of scope for this Revenue migration — that lifecycle belongs to Legal/Rights (master directive §42-47, already named) — but `revenue_approvals`' `action_type` list includes `sign_contract` so that future system can plug into the same central ledger rather than inventing a second one.

### 37b. The Needs Katie queue, restated for Revenue specifically

Every unresolved `revenue_approvals` row is, by construction, a candidate for the centralized Needs Katie queue (master directive §31/§1) and the Opportunities Requiring My Decision view (Section 34f) — new legitimate inbound brands, high-value opportunities, pricing decisions, proposed packages, negotiation decisions, invoices ready to send, overdue-payment actions, renewals, licensing opportunities, deal risks, and deadlines all surface the same way: what happened, what the team found, the recommendation, the evidence, the risk, and what decision is actually needed. **Katie should never have to ask whether a legitimate brand contacted WAG** — if it's real, per Section 34's suppression-only-for-confident-junk rule, it becomes visible automatically, not on request.

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

**Contradictory:** none found across any of the four passes, with one real near-miss worth naming rather than glossing over. Section 33b's Opportunity Evaluation Sequence, read on its own, could plausibly be misimplemented as a filter that quietly stops a poor-fit opportunity before Katie ever sees it — Katie caught exactly this risk and Section 34 was added specifically to foreclose it. The two sections are not contradictory as written (33b governs *order*, 34 governs *visibility and authority*, and 34g says so explicitly), but a future builder implementing 33b without also implementing 34 would produce the wrong system. Flagging this dependency here so Build Order (Section 13) treats them as one unit, never one without the other. Sections 15-31 otherwise map cleanly onto the existing two-engine model, the existing authority boundary, and the existing 20-stage pipeline — nothing there required revising a previously-approved decision. One older judgment call worth restating: Section 30's Campaign Architect and Section 18's Offer & Package Intelligence could look redundant at a glance — they're not, and Section 30 states why (economics vs. creative concept, same split as Pricing Intelligence/Section 16 vs. Deal Strategy/Section 19).

**Premature — correct not to build yet, stated so nothing gets built ahead of its real dependency:**
- Sections 1 (Commercial Inventory), 4 (Relationship Graph), and 8 (Opportunity Scoring) all describe real schema. None of it should be built before Build Order steps 1-4 actually run — designing any of it against zero real rows carries the same risk the Foundation doc already flagged for the original partner/deal schema.
- Any actual scoring algorithm, pricing model, or outreach-personalization logic is premature until real outcome data exists for the Learning Loop to learn from — wins, losses, and replies that don't exist yet per the Foundation doc's own findings.

---

*Cross-referenced in `WAG_OPERATING_SYSTEM_MAP.md` alongside the other Revenue & Partnerships documents, including `WAG_REVENUE_RECOVERY_PASS_FINDINGS.md`, which records the Pop&Boom/PolyBuzz case (Section 33) in full with source evidence. Design only — nothing built, nothing connected. Section 34's authority rule is also cross-referenced in `WAG_MASTER_OPERATING_SYSTEM_DIRECTIVE.md` §37. Awaiting Katie's review of the gap analysis above and the Section 13 build order before implementation begins.*
