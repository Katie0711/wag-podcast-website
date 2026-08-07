# WAG Strategic Roadmap

Strategic roadmap only — not implementation notes (those live in `ARCHITECTURE.md`), not day-to-day status (that's `MASTER_STATUS.md`), not the "why" behind decisions (that's `CEO_DECISIONS.md`), not speculative ideas (that's `FUTURE_OPPORTUNITIES.md`). This file answers one question per initiative: where does it stand, and what does it depend on.

**Buckets:** Completed → Current → Next → Future → Icebox. Every major initiative gets purpose, business value, dependencies, and status.

---

## Completed

### Interaction Platform — build
- **Purpose:** shared, reusable architecture (quiz/poll/vote/consent/sponsor/analytics primitives) powering 6 audience-participation formats.
- **Business value:** first-party audience growth, sponsorship inventory, reusable engine for future brands.
- **Dependencies:** none remaining — code-complete.
- **Status:** ✅ Built and verified pre-launch. Not yet deployed to production — see Current.

### Shared conversion framework
- **Purpose:** uniform cross-linking/share/analytics treatment (`EpisodeActions`, `WhatsNext`, `ShareSheet`) across every episode and interaction page, both sites.
- **Business value:** every content asset now actively drives traffic to every other asset — no dead ends.
- **Dependencies:** none.
- **Status:** ✅ Shipped to production on both sites.

### Both sites — foundational build and SEO/technical base
- **Purpose:** wildadventuregirls.com and thewagpodcast.com fully built, live, indexed, with analytics, structured data, and technical SEO foundations in place.
- **Business value:** the owned-audience/discoverability base everything else compounds on.
- **Dependencies:** none.
- **Status:** ✅ Both live in production. Continuous audit work is ongoing (see Current).

### Production Audit (17 categories)
- **Purpose:** one-time, permanent-QA-producing pass across SEO/AEO/GEO/AI-discoverability/crawl-budget/structured-data/accessibility/analytics/performance/security/Beehiiv.
- **Business value:** converts one-off findings into reusable checklists so failure classes aren't rediscovered from scratch.
- **Dependencies:** none.
- **Status:** ✅ Closed to launch-blocker status per Katie's explicit scoping instruction (2026-08-07). 3 categories intentionally left partial — see `PRODUCTION_AUDIT.md`.

### Permanent documentation system
- **Purpose:** this file plus `MASTER_STATUS.md`, `CEO_DECISIONS.md`, `FUTURE_OPPORTUNITIES.md`, `DATA_MODEL.md`, `CHANGELOG.md`, `ARCHITECTURE.md`, `PRODUCTION_AUDIT.md`.
- **Business value:** institutional knowledge survives even if a conversation disappears.
- **Dependencies:** none.
- **Status:** ✅ Built 2026-08-07. Maintenance is now standing practice, not a one-time task.

### Legal foundation V1
- **Purpose:** full legal audit of both sites' real data-collection behavior (APIs, cookies, localStorage, analytics, Beehiiv), an updated Privacy Policy + Terms of Service matching actual behavior (targeted additions to the existing baseline, not a rewrite), and a Green/Yellow/Red Legal Readiness Report + Executive Summary for attorney review.
- **Business value:** substantially reduces real business risk (email collection, minors' privacy, submission ownership, liability, IP protection) ahead of legal counsel review, while keeping the documents accurate and readable rather than speculative or bloated.
- **Dependencies:** none technical — this was an audit + drafting task.
- **Status:** ✅ Published to production 2026-08-07 (`wildadventuregirls.com/privacy/`, `/terms/`). Full package archived in `docs/legal-drafts/archive/`; `LEGAL_READINESS_REPORT.md` and `EXECUTIVE_SUMMARY.md` kept active for future reference. **Treated as Version 1, not final** — re-review and update these documents when WAG materially expands: paid memberships, software/apps, mobile apps, user accounts, ecommerce, or major international growth. Requested after the code launch was already live; flagged to Katie directly rather than silently absorbed into the sequencing.

---

## Current

### Interaction Platform V1 — Observe phase
- **Purpose:** watch real usage of the 5 live interactions (Verdict, Match, Favorite Segment, Questions Featured, WAG Awards) before building anything new. Per Katie's explicit instruction: no new interaction work unless a real bug appears, for the first 48–72 hours minimum.
- **Business value:** real data (completion rates, Beehiiv conversion by interaction, return visits, YouTube click-through) is the actual next source of truth — not more internal speculation.
- **Dependencies:** none — launched 2026-08-07, both repos merged and verified live.
- **Status:** ✅ Launched. 🚧 Now in Observe phase — see `CEO_DECISIONS.md` for the 7-item post-launch analytics priority list.

### YouTube channel optimization
- **Purpose:** full channel audit-and-fix pass + binge-path end screens/cards, following the approved playlist/packaging strategy.
- **Business value:** recommendation-system leverage — more Suggested/Browse placement from the existing catalog, no new content required.
- **Dependencies:** none — independent of the interaction-platform launch.
- **Status:** 🚧 In progress.

### Wild Adventure Girls continuous SEO/AEO/GEO audit
- **Purpose:** ongoing (not one-time) technical and content audit of wildadventuregirls.com.
- **Business value:** sustained search/AI-discoverability health as the site grows.
- **Dependencies:** none.
- **Status:** 🚧 In progress, treated as standing practice.

---

## Next

### 5-page SEO optimization plan
- **Purpose:** sharpen packaging on 5 real pages against validated real search demand (Guys Answer Questions hub, Who's Most Likely To, Hot Takes, Dating Red Flags, and a deliberate non-build decision on "Is It Cheating If...?").
- **Business value:** real, evidenced search-demand capture using content WAG already has — no fabrication.
- **Dependencies:** none — plan is fully specified, paused only for the launch-checklist and documentation work.
- **Status:** ⏭ Queued, plan finalized, ready to execute.

### Sponsor-facing one-pager for interactive inventory
- **Purpose:** sales collateral for the real sponsor inventory the interaction platform creates.
- **Business value:** turns built infrastructure into an actual sales conversation.
- **Dependencies:** interaction platform launch (need real inventory to sell, ideally real early performance data).
- **Status:** ⏭ Not started.

### Distribution framework completion
- **Purpose:** per-interaction launch copy for all 6 interactions (only WAG Match has a worked example today).
- **Business value:** consistent, repeatable go-to-market motion per interaction instead of ad hoc copy each time.
- **Dependencies:** interaction platform launch.
- **Status:** ⏭ Template built, 5 of 6 copy sets remaining.

---

## Future

See `FUTURE_OPPORTUNITIES.md` for full detail on each of these — not duplicated here.

- WAG Discovery/Field Map (Adventure Passport)
- WAG Knowledge Graph
- Internal CEO Dashboard
- Business Intelligence Agent
- Sponsor Dashboard / Sponsor Engine
- AI Traffic Dashboard
- HorseSmart Kids
- Interactive Books / physical products
- AI Discovery Assistant
- Creator Operating System (long-horizon optionality only)

Also named but not yet scoped: Launch System (checklist → soft launch → internal → family → beta → public → 30/90-day review), Content Production System (episode → transcript → article → quiz → newsletter → shorts → socials → sponsor), Knowledge Base, Content Calendar, Sponsor CRM, Product Pipeline, Community Layer (profiles/badges/streaks/leaderboards).

---

## Icebox

- **Admin/moderation view for Questions Featured** — currently readable only by querying Netlify Blobs directly. Revisit if/when submission volume makes that painful (per Katie's explicit "don't build the UI until then" call).
- **Growth experiments** — none launched yet; depends entirely on production go-live, nothing to iceboxed here specifically, just not startable yet.
- **AI layer across interactions** (summaries, recommendations, personalization, moderation) — architecture kept ready, not building until a real need appears.

---

## Outstanding decisions (see `CEO_DECISIONS.md` for the reasoning)

- Interaction Platform launch — Katie's call, pending.
- wagmediapartners.com long-term disposition — pending.
- HorseSmart Kids timing — deliberately not evaluated yet.

---

*Keep this file synchronized with reality — update it in the same commit as the work it describes. Implementation detail belongs in `ARCHITECTURE.md`, not here.*
