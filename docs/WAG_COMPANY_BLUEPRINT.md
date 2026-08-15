# WAG Company Blueprint

**LAST VERIFIED:** 2026-08-15
**VERSION:** v1.1 — rewritten same-day to incorporate Katie's "WAG Company Blueprint + Operating System — Master Directive." **DRAFT — awaiting Katie's line-by-line approval. Nothing here is authorized to drive migrations, role deletions, department collapses, new agent launches, or new vendor purchases (HubSpot/Shopify/ClickUp) until she signs off.**
**OWNER:** Katie Swans (CEO) — sole approval authority over this document and any change to it.
**SUPERSEDES:** Nothing existing — sits *above* and cross-references (does not delete or overrule) `WAG_MASTER_OPERATING_SYSTEM_DIRECTIVE.md`, `WAG_MASTER_ORGANIZATION_CONTINUITY_CHECK.md`, `WAG_MASTER_ORGANIZATION_ROADMAP_V3.md`, `WAG_MASTER_ROADMAP_DECISION_REVIEW.md`, `WAG_AGENT_ARCHITECTURE.md`, `WAG_OS_ARCHITECTURE_PROPOSAL.md`, `WAG_OS_PHASE_0_BUILD_PROPOSAL.md`. Where any of those disagree with this document, that is a **surfaced contradiction** in the companion reconciliation report, not a silent override.
**CURRENT COMPANY PHASE:** Foundation-building with real infrastructure already OPERATING in places (WAG Brain's evidence pipeline, the Freshness Reviewer cron job, Kidoodle's AR/Collections case). Katie's own framing, adopted verbatim: **"Complete architecture. Narrow execution."** This is not a Phase 1 reset.
**NEXT REQUIRED REVIEW:** Immediately, by Katie, line-by-line. Then quarterly, or immediately upon any proposed department collapse, role deletion, business-engine change, or new vendor purchase.
**LINKS:** WAG Brain (Supabase project `wag-brain`, id `qccfbbgaszciqxfryehs`) is the live source of truth for every fast-changing fact this document references — see §8 below. This Blueprint does not duplicate live numbers; it points to where they live.
**COMPANION DOCUMENT:** `WAG_COMPANY_BLUEPRINT_RECONCILIATION_2026-08-15.md` — the full A–L executive package (Master Company Map, Current Maturity Map, Duplication/Conflict Report, Source-of-Truth Map, Software Map, Revenue Architecture, 30-Day Execution Plan, This Week, Katie Decision Queue, Parked/Trigger List, Risks/Pushback, What Claude Needs From Katie) this Blueprint was built from. Read them together.

---

## Operating Thesis

**ATTENTION → FANDOM → OWNED AUDIENCE → REVENUE → IP → PRODUCTS → RECURRING/REPEAT REVENUE → LICENSING/DISTRIBUTION → MORE ATTENTION.**

WAG's existing audience and YouTube distribution are a strategic advantage, not something to escape. WAG OS exists to make this machine faster, smarter, and more accountable. **WAG OS is not the business.** Architecture, agents, databases, research, and documentation must never become substitutes for growing WAG.

**The permanent distinction, stated exactly as Katie framed it:** Complete architecture. Narrow execution. This Blueprint shows the company WAG is becoming so no capability is forgotten. The execution roadmap (companion reconciliation, sections G–H) activates only what presently creates material value. Do not collapse the architecture because everything isn't being built today. Do not build everything because it exists in the architecture.

## 1. Vision & DNA

WAG is a teen-entertainment media company built around three real sisters and cousins — Angelina (18), Annabella (16), and their cousin Scarlett (17) — telling real, unscripted stories: investigations, dares, relationships, hot takes, games, and adventures. Explicitly not educational content on the Entertainment side, and explicitly not built on the girls' horse-riding history (`wag_horse_content_pivot`, `wag_positioning_and_facts`) — both permanent repositioning decisions.

**The girls are not interchangeable hosts.** WAG is personality-forward, Gen Z, and adventure-forward. The audience should feel like they're going on adventures with Angelina, Bella, and Scarlett. Structure supports them; it does not manufacture reactions, personalities, conflict, or chemistry.

The destination: a category-leading modern media, entertainment, publishing, IP, commerce, education, and licensing company capable of reaching **$10M+ diversified annual revenue** and growing beyond it. See §15.

## 2. Business Architecture — Six Value Engines

What WAG creates audience, IP, and revenue *through* — distinct from the organizational capabilities that operate them (§9).

| # | Engine | What it is | Real state today (citation) |
|---|---|---|---|
| A | **WAG Entertainment / Media** | Main WAG programming, investigations, comedy, challenges, Shorts/social, collaborations, WAG Podcast, future shows/formats/franchises | The only engine with real, live traction — real subscribers, real watch-time data, real sponsor inventory (unsold) |
| B | **WAG Learning / WAG Labs** | Educational IP: slime, science, animals, experiments, hands-on learning | No real infrastructure exists under this name in either codebase. Only adjacent concept found: HorseSmart Kids — separate, hypothetical, zero-content, deliberately deferred |
| C | **Publishing** | Books/publishing franchises, beginning with WAG Slime Lab | Named as a real project with "prior investment" in one document; that investment is unitemized anywhere reachable. **Katie is activating this now — see §5 and the reconciliation companion's 30-Day Plan** |
| D | **Owned Digital / Membership** | Owned experiences, email, digital products, eventual family membership | Zero membership infrastructure (grep for "membership" across both repos returns zero files). Email/Beehiiv infra is real but near-zero volume |
| E | **Commerce / Physical Products** | Books, kits, STEM/slime/experiment products, merchandise, bundles, licensed consumer products | Zero built commerce infrastructure (no cart, catalog, payment integration in either repo) |
| F | **B2B Education / Licensing** | Teachers, schools, libraries, homeschool, educational platforms, institutional licensing | Research-only (Boclips, ClickView candidates, all terms "Unconfirmed"). Epic! is a real, adjacent, but consumer — not institutional — relationship |

## 3. The Five Operating Engines to Prioritize Now

These are execution-priority clusters, not a replacement for the six value engines above — they're how Katie wants the org chart (§9) and the current build focus organized.

| Engine | Mandate | Activation status |
|---|---|---|
| **1. Media + Audience** | WAG Main and WAG Podcast become category-leading shows people return to for the girls, not just the premise. World-class creative intelligence via the permanent three-lens model: **WAG internal truth × world-class creator intelligence × current platform intelligence.** Never optimize WAG by studying only WAG. | Real, ongoing — most mature engine |
| **2. Revenue + Sales + Partnerships** | **ACTIVATE NOW.** A real sales organization, not just a research agent — inbound and outbound machines, both explicitly capped at recommend/draft/prepare only; nothing external is sent without Katie's approval. | Real schema + 2 real running functions; **now explicitly prioritized to activate further** |
| **3. Publishing + IP** | **ACTIVATE NOW, in parallel with Sales.** WAG Slime Lab becomes Book #1 of a reusable publishing pipeline, not an isolated one-off. Every meaningful successful WAG concept triggers an IP-expansion review: what else can this become? | Real revenue exists elsewhere in IP (Epic!) but Publishing itself is unbuilt; **Katie is starting this now** |
| **4. Owned Audience + Commerce** | Grow the share of WAG's audience/customer relationship WAG directly controls. Books → QR/link → free WAG experience → email capture → membership test → repeat customer is a hypothesis to prove, not an assumption. | Real infra (website, Beehiiv, conversion framework) exists; real volume is near zero |
| **5. WAG Intelligence + Operating System** | Build WAG into a learning company whose institutional memory survives any AI model swap. Build only the infrastructure required to make Engines 1–4 execute materially better — never as an end in itself. | WAG's most mature layer by its own internal audit — see reconciliation companion §B |

## 4. Organizational Architecture — 18 Capabilities Under 5 Directors + Cross-Cutting Functions

Katie's directive restructures the previously-flat 18-department inventory into a **5-Director hierarchy plus explicitly-preserved cross-cutting functions.** This is a reorganization of the same real capabilities already inventoried (reconciliation companion §A/§B), not a new build.

```
CEO — KATIE
  ↓
EXECUTIVE AI / CHIEF-OF-STAFF LAYER (priorities, coordination, blockers, decision queue, outcome accountability)
  ↓
5 ENGINE/DIVISION DIRECTORS
  • Media & Audience Director
  • Revenue & Partnerships Director
  • Publishing & IP Director
  • Owned Audience / Commerce Director
  • Operations / Business Intelligence Director
  ↓ (each with nested specialist capabilities)

CROSS-CUTTING FUNCTIONS (must not be lost — do not nest exclusively under one Director):
  • Finance / Business Intelligence
  • Rights & Commercial Operations
  • Legal & Minors Compliance
  • Opportunity / Innovation Intelligence
  • Audience Intelligence
  • Creator / Platform Intelligence
  • Research / Evidence Governance
```

**A genuine, surfaced placement ambiguity — Katie's own directive lists both "Audience Intelligence" and "Rights & Commercial Operations" *twice*: once nested under a Director's potential capability list, once again in the cross-cutting "must not be lost" list.** This is not resolved here; see the reconciliation companion's Duplication/Conflict Report (§C). Two of the 18 previously-inventoried departments — Education/WAG Labs and B2B Education/Institutional Licensing — have **no explicit home** in this 5-Director structure; they most naturally sit near Publishing & IP given the Slime Lab/Learning overlap, but Katie has not assigned them and this Blueprint does not assign them for her.

Full department-by-department mapping into this structure, with real maturity per department: reconciliation companion §A (Master Company Map).

**Preserve the standing distinction between departments, functions, workflows/skills, agents, and shared infrastructure. Not every box becomes an agent** — see §9 Agent Design Standard.

## 4a. Brand Architecture — WAG Main / WAG Podcast hard separation (restored 2026-08-15)

**A real section dropped silently in the v1.0→v1.1 rewrite, restored per Katie's explicit approval.** WAG Main and WAG Podcast **may share**: company infrastructure, people, Revenue/CRM, finance, technical systems, and cross-company intelligence (WAG Brain itself, security, backups). They **must retain separate**: audience models, competitive sets, content history, Greenlight decisions, experiments, performance models, title/thumbnail learnings where they diverge, format intelligence, and recommendations. This is enforced at the data-model level in WAG Brain (brand-scoped tables), not as a prompt-level reminder — Main performance intelligence must never silently become Podcast truth or vice versa.

## 4b. WAG Main — Show/Property Blueprint

**Mission:** real, unscripted teen adventure/investigation entertainment starring Angelina, Annabella, and Scarlett.
**Audience:** WAG's existing teen audience, personality-forward, adventure-forward — not a cold audience arriving for a topic alone.
**Show promise:** you're going on the adventure with the girls, not watching a documentary about one.
**Accountable Director:** Media & Audience Director.
**Outcome family:** audience growth, watch-time/retention, franchise formation, fandom depth (per the Relationship Ladder).
**Major intelligence/capability groups:** Greenlight Manager v1, Packaging Intelligence, the Concept & Packaging System (`WAG_CONCEPT_PACKAGING_SYSTEM.md`), Retention/Format specialists (Main Intelligence Loop).
**Source-of-truth boundary:** Main-scoped WAG Brain tables only — never merged with Podcast's.
**Detail pointer:** `WAG_MAIN_INTELLIGENCE_LOOP_V1.md`, `WAG_FORMULA_V1_ROADMAP.md`, `WAG_MAIN_PROOF_1_SKINWALKER_PREP.md`.

## 4c. WAG Podcast — Show/Property Blueprint

**Mission:** real teen conversations — questions, topics, answers, discussions, takeaways — hosted, not staged.
**Audience:** listeners/viewers seeking conversational, opinion-driven teen content, distinct from Main's adventure audience.
**Show promise:** honest, unscripted answers to the questions teens actually have.
**Accountable Director:** Media & Audience Director (same Director, separate brand-scoped intelligence per §4a).
**Outcome family:** subscriber/listener growth, clip performance, sponsor-inventory value, eventual chart/platform presence.
**Major intelligence/capability groups:** real product layer (clips, distribution, sponsor inventory) — live and ahead of its own 17-function specialist intelligence layer, which is still mostly DESIGNED only.
**Source-of-truth boundary:** Podcast-scoped WAG Brain tables only.
**Detail pointer:** `WAG_PODCAST_DEPARTMENT_ARCHITECTURE.md`, `ROADMAP.md` (thewagpodcast-website, domain sub-roadmap).

## 5. Media Intelligence Standard (Engine 1)

Never optimize WAG by studying only WAG. Deep research beats superficial creator summaries. For every creator/show studied (Stokes Twins, Jordan Matter, Sidemen, Royalty Family, MrBeast, GroovyGavin, Sam & Colby, Watcher, Yes Theory, Dude Perfect, GMM, video podcasts, and ongoing discoveries), ask: what caused breakout, what existed before it, what changed, what was downstream rather than causal, what failed, what did they stop doing, what makes people return for the *people* when premises change, how do they title/thumbnail/hook, how fast do they establish stakes, what story structures repeat, how do they franchise, how often did they publish during real growth periods, do Shorts convert to long-form, how do collaborations and audience migration work, what production/team changes actually preceded growth, what business/IP extensions followed audience proof (not preceded it).

**Causality labeling is mandatory and permanent:** LIKELY DRIVER / AMPLIFIER / SCALE INFRASTRUCTURE / DOWNSTREAM / UNKNOWN. Don't copy surface behavior when the actual mechanism differs — this is the exact discipline that already caught the Goatman/Bigfoot-vs-Hotel causal-claim contradiction and the Haunted Hotel view-count misdiagnosis (never diagnose a topic from view count alone; check distribution/exposure, impressions, traffic source, CTR, packaging, audience, retention, and subject demand first).

Packaging Intelligence must be evidence-backed against current 2026 platform evidence, not invented character limits or aesthetic opinion. ViewStats-class tooling may be evaluated for competitor title/thumbnail change history specifically because that answers a question current-page web search cannot.

Media Output loop, permanent: prediction → production → publication → exposure → CTR → traffic/discovery → audience → hook retention → story retention → personality/fandom response → economics → conclusion → learning.

**WAG is not building a Title Agent or Thumbnail Agent that generates options (added 2026-08-15).** It's a continuously learning Concept + Packaging + Retention system. Packaging happens *before* filming, as part of Greenlighting — not a post-edit marketing task. Canonical workflow: world-class outlier/WAG learning/platform signal → underlying psychology → WAG-native premise → premise strength → curiosity gap → title → thumbnail → **Promise Chain** (title creates question → thumbnail adds new information/tension → opening confirms → story advances → payoff resolves) → hook → escalation/**Future-Payoff Strength** → story architecture → greenlight → film → edit → publish → measure → learn. Surface trigger words (SECRET, MISSING, EVERY, STOLEN) are not strategies — every recommendation traces surface formula → psychological mechanism → premise architecture → WAG-native translation, and may only use a trigger word when truthful to the footage. Full system: `WAG_CONCEPT_PACKAGING_SYSTEM.md`.

## 6. Revenue + Sales Standard (Engine 2)

**Inbound pipeline:** Inbound → Security/Spam Gate → identity verification → company verification → opportunity verification → fit analysis → economics → rights/terms → recommendation → **NEEDS KATIE** → negotiation → contract → fulfillment → invoice → payment → renewal/upsell → learning.

**Outbound pipeline:** Market/category research → target companies/agencies → evidence they work with creators → brand/WAG fit → likely budget capacity → identify current decision-maker → verify employment/contact → personalized WAG angle → opportunity card → **NEEDS KATIE** → approved outreach → follow-up → meeting → proposal → negotiation → contract → campaign → invoice → payment → renewal.

**Permanent distinctions, never to be confused:** company has creator activity ≠ accessible paid opportunity. Invitation-only ≠ sponsorable. Affiliate ≠ sponsorship. Large company ≠ large creator budget. Legitimate brand ≠ legitimate sender. Legitimate sender ≠ good opportunity. Legitimate offer ≠ good deal. Weak offer ≠ automatic decline.

**Spam/security gate is non-negotiable:** every inbound opportunity passes it. Never click an inbound link merely because an email appears legitimate; independently verify sender/domain/company/person/campaign; treat attachments, login requests, payment-detail changes, portal requests, and credential requests with active suspicion. No autonomous external action, ever.

**External send authority:** nothing gets sent externally without Katie's approval — outreach, replies, pricing, proposals, negotiations, contracts, collections, partnership commitments. AI researches, prepares, recommends, drafts, tracks. Katie approves.

**Sales CRM hypothesis (not yet decided):** evaluate HubSpot as the sales-execution system (sequences can automate timed outreach/follow-up, plan/seat-dependent); WAG Brain stays the company intelligence/evidence/cross-company-learning layer. Do not duplicate every CRM field into Supabase. Investigate before purchasing — see reconciliation companion §E (Software Map).

**Outcome metrics, eventual:** qualified pipeline $, qualified opportunities, verified decision-maker contact rate, response rate, meetings, proposals, close rate, average deal value, renewal rate, repeat-partner rate, payment performance, actual collected revenue, inbound vs. outbound contribution. Never optimize for emails sent or companies researched — optimize for money and high-value relationships created.

## 7. Publishing + IP Standard (Engine 3)

**Activating now, in parallel with Sales.** Reusable pipeline, not a one-off book: discover → market validate → greenlight → develop → write → edit → design → produce → distribute → launch → market → measure → extend. WAG Slime Lab is Book #1 while the Publishing Director simultaneously develops the potential slate for Books #2–5 (future categories may include science, animals, experiments, adventures, other successful WAG IP).

**Books-as-acquisition hypothesis to prove, not assume:** Book → QR/link → compelling free WAG experience → customer/email capture → additional content/products → membership test → repeat customer.

**IP-expansion review, permanent, evidence-gated:** every meaningful successful WAG concept eventually triggers "what else can this become?" — franchise, another show, book, recurring segment, digital product, game, kit, physical product, school product, licensed property, character, live experience, distribution format. Do not force extensions; audience and economic evidence determine graduation.

## 8. Owned Audience + Commerce Standard (Engine 4)

YouTube remains a critical strategic asset — this is not an escape-YouTube plan. Grow toward: YouTube/Podcast/Social → Website → Email/Identity → Book Buyer → Repeat Customer → Digital Experience → Products → Membership. The website is not merely a marketing site; it should increasingly become WAG's owned audience/customer layer.

**Commerce buy-vs-build:** do not rebuild commodity ecommerce infrastructure. Evaluate Shopify when real products require commerce (digital products and most subscription/membership implementations are already supported in its ecosystem). Build differentiated WAG experiences around proven commerce infrastructure.

**Membership hypothesis (does not currently outrank Media, Sales, or Publishing):** one broader WAG family membership, not per-category subscriptions. Sell an experience/outcome — premium library, exclusive content, missions/experiments/challenges, printables, progression/badges, book-companion experiences, personalized recommendations, new drops — not "access to videos." Validate one vertical (Slime Lab is the likely first test) before a native app. Start web-first unless evidence says otherwise.

**WAG Relationship Ladder (added 2026-08-15), separate but connected system:** Watch → Binge → Participate → Join → Stay Connected → Future. Real status today: Watch/Binge/Join/Stay-Connected are REAL and LIVE; Participate is the current center of gravity and the thinnest rung relative to the weight it needs to carry; Future is partly real (Slime Lab underway, Speaking & Events live, formal membership deliberately not built until Participate pulls real weight). The real asset isn't the email address — it's the permission; participation leads to email, doesn't replace it. Full system: `WAG_RELATIONSHIP_LADDER.md`. Media optimization should therefore weigh not only views but whether content deepens fandom, participation, and owned-audience capture.

## 8a. Digital Publishing & Discovery Intelligence (added 2026-08-15)

**The websites are strategic media assets, not marketing collateral.** They participate directly in the operating thesis: episode/video/podcast → structured content extraction → high-quality web content → SEO+AEO+GEO+discovery → search/AI/referral traffic → owned WAG visitor → related content → email/customer identity → books/products/experiences/membership/partnerships → more WAG engagement.

**Every WAG episode is a potential digital asset — evaluated, not mass-produced.** Where genuinely warranted by real episode/source material, one production can become an episode page, article, explainer, FAQ, related-content links, and structured metadata. **The permanent guardrail: 1 original WAG production = maximum legitimate useful media/IP/discovery value — never 1 video = 10 garbage articles.** This discipline already operates in practice, just not yet under one named capability — see the reconciliation companion for what's real versus missing.

**SEO + AEO + GEO, fundamentals-first.** Optimize for useful original information, clear structure, strong entity relationships, first-party experience, authority, trustworthy sourcing, machine-readable context — not gimmicky AI-search tactics. WAG's real advantage here: original media, real experiences, real places, real experiments, years of first-party content. Use that instead of generic rewritten information.

**Two-way intelligence loop, not just Video → Article.** Eventually: Search/Audience Intelligence → Content Opportunity → Video/Podcast/Article/Book/Product, feeding Media Intelligence, Audience Intelligence, Creator/Platform Intelligence, Publishing/IP, Owned Audience, and Revenue/Partnerships. Real example already true today: a strong slime-content signal should be able to strengthen the case for Slime Lab's book → free experience → learning product path (§7).

**Build topical authority, not disconnected posts.** Content builds WAG-owned topic ecosystems (Adventure/Investigation, Teen/Podcast, WAG Learning) — exact clusters determined by audience fit, content inventory, discovery opportunity, and strategic value, not a need to fill categories.

**Digital Property Map — permanent, per-property purpose:**

| Property | Primary purpose | Content types | Relationship to other properties |
|---|---|---|---|
| **wildadventuregirls.com** | Broader WAG entertainment brand — adventures, girls, original content, franchises, stories/behind-the-scenes, discovery into the wider WAG ecosystem | Story/entertainment articles, investigations, behind-the-scenes, girl profiles, Adventure Map | Main brand authority (`wag_two_site_roles`) |
| **thewagpodcast.com** | The show's own site — questions, topics, answers, discussions, takeaways tied to specific episodes | Episode pages, topic hubs, FAQ/direct-answer pages, games/segments | The show's site, not the brand's (`wag_two_site_roles`); explicitly must not publish a Stories article about a podcast episode/topic (`wag_stories_podcast_separation`) — cannibalization prevention is already a standing rule, not a new idea |
| **Future WAG Learning/Labs property** | Educational discovery → books → free experiences → email/customer capture → learning ecosystem → membership/products | Not yet built | **Do not create a new domain until the brand architecture justifies it** — currently no real content exists to justify one |

**No new capability needs to be invented here — largely, the discipline already exists informally** (the standing article-quality bar, source-verification standard, and 10-step editorial workflow memories already encode most of this pipeline) **but it has never been consolidated under one named, owned capability.** See the reconciliation companion for the honest BUILT/CONNECTED/TESTED/OPERATING/LEARNING classification and the real gap this surfaces (no single owner; the CTR-diagnosis loop has never been run as a bounded proof; no content-decay/refresh learning loop exists yet).

**Owner:** sits within the Owned Audience/Commerce Director (§4), as **Digital Publishing & Discovery Intelligence** — not floating between "Website" and "Media." Potential subordinate capabilities, none requiring their own agent yet: SEO Intelligence, AEO/AI Discovery Intelligence, Keyword & Topic Intelligence, Editorial/Article Engine, Episode Repurposing, Content Clustering, Internal Linking, Structured Data/Schema, Technical SEO, Search Console Analytics, Conversion Intelligence, Content Refresh/Decay, Cross-property Cannibalization, Website Experimentation.

**Anti-slop guardrail, permanent:** because AI makes content cheap to produce, it would be easy to create large volumes of mediocre material. Do not. Prefer first-party experience, original footage/photographs/observations, real experiments, real cast experiences, actual episode material over generic rewritten information. Optimize for qualified discovery, audience fit, engagement, owned-audience creation, business value, and IP learning — not raw traffic. Ten thousand visitors who become WAG viewers/customers can be worth more than 500,000 irrelevant ones.

## 9. Agent Design Standard

Before creating any new agent, define: (1) job description, (2) business outcome, (3) inputs, (4) authoritative data sources, (5) responsibilities, (6) decision authority, (7) forbidden actions, (8) required outputs, (9) KPIs, (10) escalation rules, (11) memory/state requirements, (12) interaction with parent/peer agents, (13) evidence requirements, (14) learning loop, (15) retirement/merge criteria. Do not create an agent simply because a task exists. Managers/directors own outcomes; specialists perform capabilities; the executive layer coordinates directors. Katie receives decisions, not raw agent chatter.

This standard supersedes-by-specificity (does not erase) the original 9-role spec and its later refinements — full recovery and gap analysis of that lineage is in the reconciliation companion's Master Company Map, since it directly informs which of the 18 real capabilities already have a working spec versus need one written fresh against this new 15-point standard.

## 10. Intelligence Must Create Action

Every department: GOAL → INTELLIGENCE → DECISION → ACTION → OUTCOME → LEARNING. A valid conclusion can be NO ACTION — but research volume is not success. Directors are judged by decisions improved, opportunities created, money created/collected, audience growth, IP value created, execution improved, mistakes prevented, predictions improved — never by searches run, reports written, agents dispatched, or database rows created. This directly extends the real lesson already learned from the two Creator & Platform Intelligence proofs: two real proofs, zero TEST/FILM-grade output yet, by their own honest self-assessment.

## 11. Finance Cannot Remain a Blind Spot

Build a minimal financial-truth capability before any large accounting system: cash collected, receivables, revenue by engine, costs, gross margin, project economics, partner payment performance, recurring revenue, forecast, runway/cash position where appropriate, ROI of major initiatives. Kidoodle's three unconfirmed invoices are the standing proof that "invoice sent" ≠ "money collected" — this is not a hypothetical risk, it is WAG's current real state.

## 12. Rights / Asset / Distribution Audit

Inventory content libraries, videos, the educational catalog, books, characters, trademarks/IP, domains, social accounts, email lists, licensing agreements (Kidoodle, Epic, Roku/network, others), tracking owner/rights/exclusivity/term/termination/renewal/revenue/audience value/restrictions/strategic value per item. Decision framework per item: KEEP / EXPAND / RENEGOTIATE / RECLAIM / EXIT. Never recommend removal without reviewing the actual contractual rights.

**Katie's stated current understanding, to be verified at the contract level, not assumed:** WAG owns its videos; licensing has generally been non-exclusive. This is recorded here as her stated belief, not yet a verified canonical fact in WAG Brain — see reconciliation companion Katie Decision Queue.

## 13. Source-of-Truth Architecture

**WAG Company Blueprint = Constitution.** Durable truth: vision, mission, business architecture, brand architecture, audiences, engines, organizational architecture, major IP, strategic principles, decision rules, authority, KPI/outcome families, operating philosophy.

**WAG Brain / Supabase = Operational Memory.** Changing structured truth: initiatives, opportunities, predictions, outcomes, research/evidence, rights, production state, revenue intelligence, approvals, historical decisions, learning. Preserve the ingestion-integrity, provenance, evidence-tier, and correction rules already built — raw deterministic data must never be replaced by LLM paraphrase (this rule exists *because* it already caught a real bug: Proof 0's WebFetch-based extraction inverted Sierra and Rhia's growth sign). Never silently overwrite historical predictions/outcomes because hindsight changes the interpretation.

**External systems to investigate, not yet adopted:** Supabase/WAG Brain (company truth — owned), HubSpot (possible CRM/sales execution), Shopify (commerce, when needed), ClickUp *or* the existing `initiatives` system (evaluate rather than automatically adding ClickUp), Google Drive (documents/contracts/assets), Gmail (communications — two real WAG-owned connectors already exist), YouTube Studio/APIs and other platform-direct sources (performance truth — real, connected), Claude Code (development/integration/automation), Claude + best-fit models (reasoning/research/creative intelligence). **Do not add Airtable** — WAG already has Supabase/WAG Brain; avoid tool sprawl.

## 14. Software Buy-vs-Build Rule

Before building software: does an established product already solve this commodity problem better? If yes, investigate using/integrating it. Build custom WAG software only when it represents differentiated intelligence, workflow, IP, or competitive advantage. **Don't rebuild:** CRM, checkout, payment processing, generic project management, generic email, generic file storage. **Do build/integrate, differentiated:** WAG intelligence, Greenlight, prediction/outcome learning, creator intelligence, opportunity intelligence, WAG-specific IP translation, company evidence/memory, cross-engine decision intelligence.

## 15. The $10M+ Strategic Model

The destination is a $10M+ diversified-revenue company, not a channel with side hustles. **Do not fabricate quotas** (e.g., "Sponsorship $3M, Publishing $2M, Products $1.5M") until evidence supports the allocation. Build a real model per engine using current revenue, addressable opportunity, margins, growth, capacity, investment required, time to revenue, probability, dependencies, strategic value — then CURRENT → 12-MONTH → 3-YEAR → $10M+ PATH. Let evidence determine the mix; this has not been built yet — see reconciliation companion §F (Revenue Architecture) for exactly what evidence exists today and what's missing to build it honestly.

## 16. Items That Must Not Disappear

Kidoodle payment/collections state · Roku/network contract review · Epic relationship/licensing · WAG Slime Lab · Publishing pipeline · membership hypothesis · educational/B2B opportunity · rights/chain-of-title · Finance truth layer · Podcast benchmark/growth work · Podcast chart/discovery mechanics · Podcast Wednesday-posting target · Main creative-learning loop · Audience Intelligence · Creator/Platform Intelligence · Packaging Intelligence · Revenue inbound/outbound · agency/contact intelligence · spam/security guard · Website CTR diagnosis/learning loop · ViewStats evaluation · YouTube/API competitor watchlist concept · WAG OS certification/reliability work · MFA/security gaps · wagmediapartners.com decision/strategy · Media Playbook · profile/age-data accuracy · Legal & Minors Compliance · localization/dubbing opportunities · physical products · schools/teachers/libraries/homeschool · owned audience/customer capture · membership MVP.

**"Not now" means parked with a named trigger, never forgotten.** Full parked/trigger table with actual reactivation conditions: reconciliation companion §J.

## 17. Permanent Executive Reporting Standard

The executive layer should eventually answer every week: what did WAG ship? What grew? What made money? What money was actually *collected*? What IP increased in value? What did we learn? What predictions were right/wrong? What is blocked? What opportunities are decaying? What requires Katie? What are the five highest-leverage actions now? If the system cannot answer these, it is documenting the company rather than operating it.

## 18. Final Operating Principle

We are not building an impressive AI org chart. We are building an exceptional company. Every layer must ultimately contribute to one or more of: audience, fandom, revenue, owned customers, valuable IP, execution, learning, risk reduction. Research without decisions is insufficient. Architecture without execution is insufficient. Activity without outcomes is insufficient. Automation without controls is dangerous. Growth without learning is fragile.

**On continuity, stated directly because it matters:** this is not a pivot away from what's already been built. It is the missing umbrella over it. Greenlight, the evidence system, ingestion integrity, Revenue tables, `initiatives`, prediction/outcome architecture, WAG Brain, creator intelligence, packaging intelligence, website intelligence, the CEO/Chief-of-Staff concept, managers, specialist agents, the department hierarchy — all of it can remain, because it already earns its place in this architecture. What this Blueprint fixes is the danger of finishing one department, moving to the next, and gradually losing the original company design.

---

*This document intentionally does not contain a fabricated $10M revenue allocation, a finished org chart with every box filled, or an authorized build list. Those require either real evidence this pass didn't find, or Katie's direct decision. See the reconciliation companion for the full current-state audit (A–L) this Blueprint was built from, including every contradiction found, the real 30-day execution plan, and the decision queue.*
