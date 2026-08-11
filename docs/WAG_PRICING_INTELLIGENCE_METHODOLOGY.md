# WAG Pricing Intelligence — Methodology & Evidence Model

**One executive question this module answers: what actually determines what WAG should charge for a given opportunity, and what evidence is strong enough to justify a number — before Pricing Intelligence is allowed to touch a real negotiation?**

**Status: methodology and evidence model only, 2026-08-11 — not a built system.** Written after the first real Pricing/Deal Economics evaluation (`WAG_REVENUE_RECOVERY_PASS_FINDINGS.md` §14c) correctly refused to manufacture certainty from thin evidence, and Katie explicitly required the methodology be strengthened — not validated as-is — before any additional Revenue agent is built. This document is the guardrail: enough structure to prevent bad reasoning, not a giant pricing engine. Extends Consolidated Architecture §16 (Deal Economics & Pricing Intelligence) and §16a (Market Rate Intelligence) with the detail Katie specified; does not replace either.

---

## 1. Recent views/CPM are one input, never the valuation model

The first real evaluation (§14c) checked naive CPM math against WAG's real median views and explicitly rejected it as a valuation method for WAG's actual packages — multi-deliverable custom campaigns, not single CPM-priced ad reads. That instinct was correct and is now a permanent rule, not a one-off judgment call.

**The full input set Pricing Intelligence must eventually weigh** — every one evidence-gated, none assumed:

| Input | Evidence source when available |
|---|---|
| Recent average/median views | `yt_raw_observations` (real, already connected) |
| Distribution and performance range | Same — min/max, not just center |
| Subscriber/follower scale | Not yet captured by any connector — a real, named gap (see §2) |
| Audience demographics/fit | YouTube Analytics API where connected; otherwise unknown, stated as such |
| Engagement (likes/comments/watch-time signals) | `yt_raw_observations` |
| Expected deliverable performance | Modeled from comparable past content, never invented from nothing |
| Integration depth (mention vs. dedicated) | `revenue_deal_terms` (`dedicated_vs_integrated`) |
| Production/creative burden | `revenue_deal_terms` (`deliverable`, `revisions`, `raw_footage`) |
| Number of platforms/deliverables | `revenue_deal_terms` (`platform`, `deliverable`) |
| Organic vs. paid usage | `revenue_deal_terms` (`usage_organic_vs_paid`) |
| Whitelisting/Spark Ads | `revenue_deal_terms` (`whitelisting_spark`) |
| Usage duration | `revenue_deal_terms` (`usage_term`) |
| Territory | `revenue_deal_terms` (`territory`) |
| Exclusivity | `revenue_deal_terms` (`exclusivity`) |
| Category conflict | Consolidated §5 (conflict/exclusivity check), evaluated against real active deals |
| Raw footage requests | `revenue_deal_terms` (`raw_footage`) |
| Revisions | `revenue_deal_terms` (`revisions`) |
| Dedicated vs. integrated content | `revenue_deal_terms` (`dedicated_vs_integrated`) |
| Campaign duration | `revenue_deals`/`revenue_deal_terms` |
| WAG Main vs. WAG Podcast vs. cross-brand | `revenue_deal_brands` — never one collapsed into the other (Consolidated §22a/§22b/§26) |
| Strategic value of the audience | Judgment, explicitly labeled as such, never dressed up as a hard number |
| Historical WAG deal evidence | `revenue_pricing_evidence` tier `WAG_OBSERVED` — thin today, the entire point of §6 below |
| Current external market evidence | `revenue_pricing_evidence` tiers `EXTERNAL_OBSERVED`/`INDUSTRY_BENCHMARK`, sourced per §2's hierarchy |
| Buyer/company size and campaign context | Real research per opportunity, where findable — never assumed |

**Hard rule: an unavailable input is left unavailable, never invented.** A recommendation that's missing subscriber scale or audience-demographic data says so explicitly rather than filling the gap with a plausible-sounding guess. This is the same discipline §14c already demonstrated — codified here so every future evaluation holds the same line, not just the first one.

## 2. Source-quality hierarchy for pricing research

Aggregator/blog rate-calculator sites (what §14c used — CreatorsJet, OutlierKit, SponsorRadar, and similar) are legitimate for rough context but must never become Pricing Intelligence's foundation. Ranked, strongest to weakest:

1. **Real WAG deal history** (`WAG_OBSERVED`, Consolidated §16a tier 1) — accepted, declined, and countered rates from WAG's own real negotiations. The strongest possible evidence once it exists; thin today by design (§6).
2. **Creator-economy agencies and talent-management firms** — organizations that place real deals at scale and publish rate guidance grounded in actual placements (e.g. agency-published rate cards, talent-management market reports), not reader-magnet blog content.
3. **Influencer-marketing platforms with actual campaign data** — platforms that run real sponsored-content marketplaces and publish aggregate pricing/performance data drawn from real transactions on their own platform (their commercial interest in accurate data is a real reason to weight this above pure content marketing, though their own promotional framing still needs a skeptical read).
4. **Industry reports and credible creator/brand surveys** — recognized creator-economy research bodies, advertising-industry research organizations, and structured surveys of creators or brands about real rates paid/received (not single-author blog opinion).
5. **Public creator deal disclosures** — FTC-disclosure-adjacent public statements, creator interviews, or documented deal terms that are independently corroborated, not a single unverified claim.
6. **Comparable media/creator businesses with genuine evidence** — a real, similarly-scaled creator or small media company whose actual pricing or deal structure is verifiably public.
7. **Aggregator/rate-calculator blog content** (what §14c used) — acceptable for rough context and sanity-checking only. Never the sole basis for a recommendation, and always labeled by its real source quality when cited, not silently upgraded to look more authoritative than it is.

**Every piece of research evidence is tagged with exactly one of the four Consolidated §16a tiers** (`WAG_OBSERVED` / `EXTERNAL_OBSERVED` / `INDUSTRY_BENCHMARK` / `MODEL_ESTIMATE`) **and, additionally, which rung of the hierarchy above it came from** — so a future reader can tell "agency-published rate card, tier 3" apart from "blog aggregator, tier 7" even though both might get filed under the same `INDUSTRY_BENCHMARK` evidence_tier today. `revenue_pricing_evidence.source` already carries free-text for this — the discipline is in what gets written there, not a new column.

## 3. Price components, not one mysterious number

Every Pricing Intelligence recommendation decomposes as:

```
base creative/distribution value
+ additional deliverables
+ paid usage (whitelisting/Spark/paid amplification)
+ exclusivity
+ licensing/rights (beyond standard usage)
+ production complexity (raw footage, revisions, dedicated vs. integrated)
+ rush/custom requirements
+ cross-property value (Main + Podcast + social, when genuinely combined — Consolidated §23)
= recommended total, with each component individually visible
```

A Deal Review (Consolidated §17) or Pricing Intelligence output that shows only a final number without this breakdown is incomplete by this standard — every recommendation must show its work, matching the no-fake-certainty standard already codified elsewhere in WAG OS (Company Constitution; Greenlight Manager v3; Packaging Intelligence).

## 4. Protecting against underpricing

**Pricing Intelligence's job is not to find the lowest number a brand will accept.** Every real recommendation includes:

- **Recommended ask** — the number Pricing Intelligence would propose.
- **Defensible range** — the band around it that real evidence actually supports, not a single point estimate dressed as a range.
- **Walk-away/floor recommendation** — only where evidence is sufficient to support one. Where it isn't, the output says "insufficient evidence for a floor recommendation" rather than inventing one (exactly §14b's Aha World posture, generalized as a standing rule).
- **What's included** vs. **what costs extra** — organic-vs-paid usage, whitelisting, exclusivity, and dedicated-vs-integrated scope are priced separately by default, never silently bundled (the same real practice already evidenced in WAG's own Pop&Boom rate sheet, §11 of the Recovery Pass Findings — organic and paid-media rights were explicitly separated in that real email).
- **Rights that should never be accidentally bundled** — a standing checklist (perpetual usage, broad likeness rights, category exclusivity without a premium, raw footage, unlimited revisions) drawn directly from Consolidated §17's existing red-flag list — Pricing Intelligence and Deal Review share this list, not two separate ones.
- **Negotiation room** — where real room exists to move without falling below a defensible floor, and where it doesn't.
- **Upsell/package opportunities** — a genuine additional angle (a second property, a longer term, an additional deliverable) only when it would improve the buyer's likely objective and WAG's economics both (Consolidated §27's no-mechanical-upsell rule, restated here for pricing specifically).

**Katie makes the final pricing decision, every time** — this document describes what Pricing Intelligence prepares, never what it decides (Consolidated §37).

## 5. WAG's current rate sheet: neither assumed correct nor assumed wrong

The current $25K/$45K/$65K/$75K+ rate sheet stays tagged `current_wag_ask` in `revenue_pricing_evidence` — a real, live-in-use document (Pop&Boom evidence, §11), not a hypothetical. Pop&Boom proves the sheet was actually sent and that no pricing objection was evidenced anywhere in that real thread before WAG declined for brand-fit reasons — real, useful evidence that the numbers didn't scare off a real prospect. **It is not proof of market-clearing price** — the deal never reached the point of a specific package being priced and accepted, so there's no confirmation the rate is right, only confirmation it wasn't rejected as too high in this one instance. Both facts are true at once and neither one is allowed to quietly stand in for the other.

## 6. The thin-deal-history problem is why this system is being built, not a reason it can't function

WAG has one real sponsorship negotiation on record (Pop&Boom, never priced), and two real licensing relationships (Kidoodle, Epic — both `royalty_recurring`/`flat_per_unit`, neither a sponsorship comp). This is a real, honest, current limitation on `WAG_OBSERVED` evidence — and explicitly not a reason to stop building the Revenue system. **The system exists to accumulate this evidence going forward.**

**Every future opportunity is tracked through the full lifecycle**, using the tables already migrated (`WAG_REVENUE_RECOVERY_PASS_FINDINGS.md` §9): initial ask (`revenue_pricing_evidence`, `quoted_rate` on `revenue_deals`) → brand response → counteroffer → negotiated terms (`revenue_deal_terms`) → accepted/declined (`revenue_deal_outcomes`) → rights (`revenue_deal_terms`) → deliverables (`revenue_deal_terms`) → actual performance (once a sponsored piece of content runs — a new `performance_reported` event, added to `revenue_deal_events` alongside this document, linked to the real post-campaign `yt_raw_observations` data for that video) → renewal (`renewal_discussion` event, same table). **Schema change made alongside this document** (non-destructive, additive only): `revenue_deal_events.event_type` gains `counteroffer_sent`, `counteroffer_received`, `terms_agreed`, `performance_reported`, and `renewal_discussion` — the lifecycle stages this section names, that the original nine-value enum couldn't distinguish. Over time, `WAG_OBSERVED` evidence stops being thin — that accumulation is the actual point of the schema already built, not a future nice-to-have.

## 7. Pricing Calibration — a learning loop, not a lookup table

Pricing Intelligence must get better after every real negotiation. **It must never learn either of these simplistic lessons:**

- "Deal lost → price was too high."
- "Deal won → should have charged that amount."

Both are exactly the mistake the Pop&Boom case already proves is wrong — that real deal was lost on brand-fit grounds with zero price objection anywhere in evidence; a system that learned "lost = too expensive" from it would draw a false, damaging lesson from real data. Calibration instead asks, per resolved deal (drawing directly on `revenue_deal_outcomes`' real fields):

- What was the actual `outcome_reason` (the Consolidated §32 taxonomy) — was price even a factor?
- Did `price_objection_occurred` and/or `counteroffer_occurred` actually happen, per the real record — not inferred from the outcome alone?
- What was the buyer's real budget/context, where evidenced?
- What scope/rights were actually being asked for — was the deal genuinely comparable to WAG's own rate sheet, or a materially different shape?
- Did `brand_fit_issue` explain the outcome instead?
- What did the deal's real terms and negotiation behavior show, independent of whether it closed?

**A won or lost deal updates Pricing Intelligence's confidence only on the dimensions the real evidence actually speaks to** — a brand-fit decline teaches Brand Guardian and Deal Strategy (Consolidated §33), not Pricing Intelligence's number. A price-objection decline, with a real evidenced counteroffer that WAG rejected, does teach Pricing Intelligence something real about that segment's willingness to pay. The taxonomy already built (`revenue_deal_outcomes`) is what makes this distinction possible without guessing — this section states the rule the schema was built to support.

---

## 8. What this document deliberately does not do

No scoring algorithm, no automated recommendation engine, no new tables beyond the one small additive `event_type` extension noted in §6. This is the evidence model and reasoning discipline Pricing Intelligence must follow once it does more real work — written now, per Katie's explicit instruction, specifically so bad reasoning (naive CPM math, simplistic win/loss lessons, silently-bundled rights, invented floors) is structurally harder to produce later, not because the full system is being built today.

---

*Cross-referenced in `WAG_OPERATING_SYSTEM_MAP.md`. Extends `WAG_REVENUE_PARTNERSHIPS_CONSOLIDATED_ARCHITECTURE.md` §16/§16a. Directly informed by the real first Pricing evaluation in `WAG_REVENUE_RECOVERY_PASS_FINDINGS.md` §14c. Design/methodology only.*
