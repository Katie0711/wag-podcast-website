# WAG Tool Registry — Deep-Dive Evaluation Evidence (5 Priority Tools)

**RECONCILED 2026-08-16:** this file is the **evidence/research doc** for the 5 tools Katie named as current priorities — full field-level evaluation (problem solved, already-have-capability check, new-silo risk, cost/security/lock-in detail). It is not the status authority. The single canonical status/classification for every WAG tool, including these 5, lives in `wag-company-os/01_blueprint/WAG_TOOL_REGISTRY.md` — check there first if you need the current ADOPT/PILOT/WATCH/REJECT call; come here for the reasoning and evidence behind it. Verified 2026-08-16: both files agree on every shared tool's classification; this was an unreferenced duplicate filename, not a real fork.

**Standing rule (Katie, verbatim):** "No tool without an owner, use case, success metric, and retirement/replacement condition." Do not spend days researching this — bounded evaluation, real current priorities only. Tools not yet prioritized wait their turn; they are not evaluated here.

**Scope of this pass (2026-08-16):** the 5 tools Katie named as current real priorities, in order. Nothing else from her longer tool list is evaluated. Per the own-intelligence/rent-AI directive (`wag_own_intelligence_rent_ai_directive.md`), the test for every tool below is the same: does it extend WAG Brain's intelligence, or does it become a second source of truth WAG has to reconcile forever.

---

## Summary

| # | Tool | Status | Owner | Blocked on |
|---|---|---|---|---|
| 1 | HubSpot | **PILOT** | Katie Swans | Katie creating the free-tier account (proposal approved in architecture, not yet executed) |
| 2 | n8n vs. Gumloop | **WATCH** | Katie Swans | A specific, named integration pain neither WAG Brain (Supabase) nor an agent can already solve |
| 3 | NotebookLM | **PILOT** | Katie Swans | Not started — no Book Room source set has been uploaded and tested yet |
| 4 | Granola | **WATCH** | Katie Swans | A real scheduled meeting (Book Room or sponsor call) to test it on |
| 5 | Creative image/video (Gemini image API, Higgsfield) | **PILOT** (Gemini image API) / **WATCH** (Higgsfield) | Katie Swans | Gemini: first real thumbnail/packaging test. Higgsfield: a specific need Gemini + existing Adobe Firefly MCP access can't meet |

---

## 1. HubSpot — Revenue CRM

- **Problem it solves:** commercial-execution layer (pipeline stage, follow-up/task tracking, meeting scheduling) that WAG Brain's Supabase tables were never designed to be — WAG Brain is intelligence/evidence, not a sales activity tracker.
- **Replaces/connects to:** nothing today (no CRM exists); connects to WAG Brain's `revenue_companies`/`revenue_people` via a stored HubSpot record ID, not a duplicated copy.
- **Already have this capability:** No — confirmed gap. WAG Brain deliberately keeps pricing evidence, spam/fraud verification, and brand-fit screening, none of which any CRM provides.
- **New silo risk:** Low by design — full architecture already reconciles this (`WAG_REVENUE_HUBSPOT_PILOT_ARCHITECTURE.md`, 2026-08-15). Financial truth (invoice amounts, payment status) is explicitly never entered into HubSpot; HubSpot never becomes a second front door (records only created after WAG Brain's spam/fraud + brand-fit gates clear).
- **Agent/API-first:** Yes — HubSpot has a mature REST API and an official MCP server; free tier supports 2 users, 1,000 contacts, 1 pipeline, ~10 custom properties (verified against hubspot.com/pricing/crm, 2026-08-15).
- **Reduces Katie/human work:** Should reduce manual follow-up tracking on the 2 real pilot cases (Aha World, Kidoodle) — not yet tested, that's the pilot's job.
- **Cost:** $0 (free tier for pilot; upgrade only if a named limitation demonstrably blocks real revenue or real time savings).
- **Security/data:** No dollar amounts, no invoice/payment data, no verification/brand-fit reasoning ever stored in HubSpot. Every inbound commercial contact still passes WAG Brain's Spam/Fraud Guard first.
- **Lock-in risk:** Low at free tier — 2 records, no paid features, no migration of existing data planned.
- **Expected business value:** Faster follow-up compliance and clearer next-action visibility on real, currently-active deals (Aha World negotiation; Kidoodle's recurring AR follow-up).

**Classification: PILOT.** **Owner:** Katie Swans. **Success metric:** per the pilot's own acceptance test — HubSpot demonstrably reduces manual tracking effort and/or produces at least one measurable execution improvement (faster follow-up, clearer next-action visibility) on the 2 real pilot cases, with zero data-integrity or duplication problems, evaluated after one bounded `WAG_ACTIVE_PORTFOLIO.md` cycle. **Retirement/replacement condition:** REJECT and stop if no measurable improvement over the current WAG Brain + manual tracking baseline, or if duplication/drift appears, or if the team simply doesn't end up using it during the pilot window. Full detail: `WAG_REVENUE_HUBSPOT_PILOT_ARCHITECTURE.md`.

---

## 2. n8n vs. Gumloop — orchestration/automation layer

- **Problem it solves:** none demonstrated yet for WAG specifically. No named integration currently fails or is manually painful enough to justify a new automation platform.
- **Replaces/connects to:** hypothetically, would sit between WAG Brain (Supabase), HubSpot, Beehiiv, and YouTube — but Supabase already has Edge Functions and `pg_cron` for scheduled jobs, and Claude agents already do the cross-system orchestration WAG currently needs (see `wag_own_intelligence_rent_ai_directive.md`).
- **Already have this capability:** Largely yes, for WAG's current scale — Supabase Edge Functions/`pg_cron` for scheduled/triggered jobs, Claude agents for judgment-based orchestration. Neither n8n nor Gumloop would add a capability WAG is currently missing.
- **New silo risk:** Real and specific for both. n8n (self-hosted): another system to run, patch, and secure, with its own credential/secrets store outside WAG Brain's governance. Gumloop (hosted SaaS): workflow logic and possibly WAG data would live in a third party's platform, credit-metered, outside WAG Brain entirely. Either one risks becoming a second "brain" for business logic if adopted without discipline.
- **Agent/API-first:** n8n — yes, self-hosted, 1,000+ integrations, full custom-code control, but requires infrastructure/maintenance. Gumloop — yes, hosted, drag-and-drop with bundled AI steps, faster to stand up, no infra to maintain, but recurring SaaS cost and a credit model (free tier 2,000 credits/mo; Solo $37/mo; Team $244/mo, per cybernews.com/Sintra/Zapier comparisons, 2026).
- **Reduces Katie/human work:** Unproven — no current workflow has been named as the target.
- **Cost:** n8n free if self-hosted (infra + maintenance time is the real cost); Gumloop $0–$244/mo depending on tier.
- **Security/data:** Either introduces a new place WAG credentials/data would flow through; neither has been security-reviewed for WAG's minors-privacy standard.
- **Lock-in risk:** n8n low (self-hosted, exportable workflows); Gumloop moderate (hosted, proprietary workflow format, credit-based pricing that can shift, per Higgsfield-style pricing-instability pattern seen elsewhere in this pass).
- **Expected business value:** Currently theoretical — no real WAG integration pain has been demonstrated, per the priority list itself.

**Classification: WATCH.** **Owner:** Katie Swans (no build owner assigned — there is nothing to build yet). **Success metric:** not applicable until triggered — this stays WATCH, not PILOT, until one specific, named integration problem exists that Supabase Edge Functions/`pg_cron` and Claude-agent orchestration genuinely cannot solve. **Retirement/replacement condition:** re-evaluate only when that specific pain point is named; if/when piloted, prefer n8n over Gumloop by default for WAG's stack (self-hosted keeps data and logic inside WAG's own infrastructure rather than a third-party credit-metered SaaS) unless Gumloop's specific AI-bundled workflow speed proves decisive for that named use case.

---

## 3. NotebookLM — Publishing/Book Room research

- **Problem it solves:** citation-grounded research/synthesis over a fixed set of uploaded sources — reduces hallucination risk specifically for Book Room manuscript research, where every claim needs to trace to a real source.
- **Replaces/connects to:** nothing today; would sit alongside, not replace, WAG Brain's evidence/provenance model — WAG Brain remains the source of truth, NotebookLM is a human research aid on top of sources Katie uploads herself.
- **Already have this capability:** Partially — Claude can already do grounded research over documents Katie provides in a session, but NotebookLM's audio-overview and multi-source citation UI is a distinct, genuinely good product experience for Katie's own reading/research workflow, not a duplicate.
- **New silo risk:** Low if scoped correctly — sources live in NotebookLM's own storage, not synced anywhere; use it as a human research tool, not as a system WAG Brain depends on.
- **Agent/API-first:** **No, not for WAG's use case.** Confirmed 2026-08-16: Google's NotebookLM Enterprise API (released Sept 2025) exists but is org-scale/enterprise-only (VPC Service Controls, CMEK) — not a self-serve developer API. The consumer product Katie would actually use has no public API. This is a human-in-the-loop tool only; no agent can drive it programmatically today.
- **Reduces Katie/human work:** Yes, for the specific task of researching and drafting from a bounded set of sources for the book — that's its whole design purpose.
- **Cost:** Free (consumer NotebookLM has no paid tier requirement for this use case).
- **Security/data:** Sources Katie uploads go into Google's infrastructure — fine for public/licensed research material; do not upload anything containing the girls' non-public information per `wag_girls_privacy_minors.md`.
- **Lock-in risk:** Low — no API dependency to build against, easy to stop using with no migration cost.
- **Expected business value:** Faster, more accurate Book Room research with real citations, directly supporting the Publishing pillar.

**Classification: PILOT.** **Owner:** Katie Swans. **Success metric:** upload one real Book Room source set and produce one research output (citations + synthesis) Katie confirms is more accurate/faster than her current manual research process. **Retirement/replacement condition:** REJECT if, after that first real test, it doesn't measurably beat manual research/synthesis, or if Katie doesn't return to it after the first session (unused = the same signal as HubSpot's pilot rule).

---

## 4. Granola — meeting/Book Room/sponsor-call capture

- **Problem it solves:** meeting-notes capture and searchable history for Book Room planning sessions and sponsor calls — currently no systematic capture exists for these.
- **Replaces/connects to:** nothing today (no meeting-capture tool in use); could eventually feed WAG Brain if a real sync need emerges, not before.
- **Already have this capability:** No.
- **New silo risk:** Real but bounded — notes live in Granola's own storage. Business plan ($14/user/mo) adds an MCP server and personal API (introduced Feb 2026) that could pull notes into WAG Brain later; free tier has no API and caps history at 25 notes (get-alfred.ai, notchlive.app, 2026), so it would not silently become a dependency during a free-tier trial.
- **Agent/API-first:** Partially — Business/Enterprise tiers ($14–$35/user/mo) added an MCP server + REST API (personal API for Business, admin/enterprise API for Enterprise) confirmed February 2026 (Granola's own blog, TechCrunch $125M/$1.5B valuation coverage, March 2026). Free tier has no programmatic access.
- **Reduces Katie/human work:** Would, if real meetings existed to test it on — the core value proposition (auto-notes during a live call) is unproven for WAG specifically because there is nothing to test it against yet.
- **Cost:** Free tier sufficient for a first real test (25-note cap is not a constraint for the first meeting or two).
- **Security/data:** Sponsor-call content could include real commercial terms — same handling standard as HubSpot: no financial commitments or minors-related information should be dictated into any AI notetaker without confirming Granola's own data-retention terms first.
- **Lock-in risk:** Low at free tier.
- **Expected business value:** Unproven — genuinely blocked on Katie having a real Book Room or sponsor call scheduled, not on the tool itself.

**Classification: WATCH.** **Owner:** Katie Swans. **Success metric:** not applicable until triggered. **Retirement/replacement condition:** promote to PILOT the moment a real Book Room planning session or sponsor call is scheduled; test on that one real meeting before deciding further. Do not adopt speculatively ahead of that.

---

## 5. Creative image/video tools — thumbnails/packaging/marketing/book visuals

Two genuinely different tools under one priority slot; evaluated separately because their profiles differ sharply.

### 5a. Gemini image API (Gemini 2.5 Flash Image / "Nano Banana")

- **Problem it solves:** fast, cheap, prompt-driven image generation and edits for thumbnail iteration, packaging tests, and book visual prototyping — genuinely agent-usable, unlike NotebookLM.
- **Already have this capability:** Partially — this Claude session already has Adobe Firefly-based image tools (generate, remove background, generative expand, adjustments) available via MCP. Gemini's differentiator is per-image cost and multi-turn conversational editing, not a capability gap.
- **New silo risk:** Low — output is just image files; no data leaves as structured business data.
- **Agent/API-first:** Yes — real developer API, $0.039/image (1290 output tokens at $30/M, official Google pricing, verified 2026-08-16). Original Nano Banana model retires Oct 2, 2026 in favor of newer versions — worth noting so a pilot doesn't get built against a model about to be deprecated.
- **Reduces Katie/human work:** Should, for rapid thumbnail A/B variants — unproven until tested on a real WAG Main thumbnail decision.
- **Cost:** Very low (~$0.04–$0.15/image depending on resolution/model version).
- **Security/data:** No WAG-specific data risk beyond standard image-generation content review (no real photos of the girls generated/altered without the same care as any other publishing decision).
- **Lock-in risk:** Very low — swappable per-image API call, no subscription.
- **Expected business value:** Cheap, fast packaging iteration directly supporting the Packaging Intelligence system (`WAG_PACKAGING_INTELLIGENCE.md`).

**Classification: PILOT.** **Owner:** Katie Swans. **Success metric:** generate real thumbnail/packaging variants for one upcoming WAG Main video and confirm output quality/relevance beats current process on speed, with no increase in per-thumbnail cost. **Retirement/replacement condition:** REJECT if Adobe Firefly's already-available MCP tools prove sufficient for the same task at no added integration cost, or if output quality doesn't meet the bar Katie already holds per `wag_high_production_quality_bar.md`.

### 5b. Higgsfield

- **Problem it solves:** stylized/cinematic AI video generation (motion presets, character-consistency tools) — a genuinely different capability than static image generation, potentially relevant for short-form marketing/trailer content.
- **Already have this capability:** No direct equivalent for video-specific motion presets; Adobe's video MCP tools (quick-cut, resize, render) edit/assemble existing footage rather than generate new AI video.
- **New silo risk:** Moderate — subscription-based, proprietary credit system with pricing that has "shifted more than once over the past year" per its own reviewers (flowith.io, layer3labs.io, 2026) — a real lock-in/pricing-stability concern.
- **Agent/API-first:** Partial — Higgsfield is primarily a consumer subscription app; API access exists only via a third-party proxy (Segmind, from $0.12/image and $0.86/video), not a first-party developer API.
- **Reduces Katie/human work:** Unproven — no specific WAG use case has been named yet, only "thumbnails/packaging/marketing/book visual prototyping" generically.
- **Cost:** $15–$99/mo subscription (Starter/Plus/Ultra, billed annually) or pay-per-call via the Segmind proxy.
- **Security/data:** Third-party proxy access adds an extra vendor hop beyond Higgsfield itself.
- **Lock-in risk:** Moderate-high — credit expiry (~90 days), historically unstable pricing/plan structure, proprietary presets.
- **Expected business value:** Unproven and currently speculative — no concrete WAG deliverable has been named that Gemini image API or existing Adobe Firefly tools can't already attempt.

**Classification: WATCH.** **Owner:** Katie Swans. **Success metric:** not applicable until triggered. **Retirement/replacement condition:** move to PILOT only if a specific real need emerges (e.g., a character-consistent motion trailer) that Gemini image + Adobe Firefly's existing video tools genuinely cannot do — do not adopt for generic "thumbnail/packaging" use, which Gemini/Firefly already cover at lower cost and lower lock-in risk.

---

## Cross-cutting notes

- **Pattern across all 5:** WAG already has more underlying capability (Supabase orchestration, Claude-agent judgment, Adobe Firefly image/video MCP tools) than the tool-evaluation instinct assumes. The real question for each of these was never "is this a good product" (all 5 are) — it's whether it solves a WAG problem that isn't already solved, without creating a second source of truth WAG Brain has to reconcile.
- **Nothing here has been purchased, migrated, or integrated as a result of this pass.** HubSpot and NotebookLM were already-approved pilots per prior work; this pass confirmed/updated their status and added the other 3. n8n/Gumloop/Granola/Higgsfield remain WATCH — logged, not built.
- **Everything else on Katie's longer tool list is explicitly out of scope for this registry until its turn comes**, per her instruction.
