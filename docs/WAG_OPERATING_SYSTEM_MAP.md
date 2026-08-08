# WAG Operating System — Map

**Not a new system. An index of the ones that already exist**, so a brand-new Claude session (or eventually a specialized agent — see `WAG_AGENT_ARCHITECTURE.md`) can orient by reading the company's own documentation instead of depending on this conversation. Per Katie's 2026-08-08 directive: the company owns the knowledge, Claude reads it, works, and writes it back. See `docs/ARCHITECTURE.md` for the codebase map — this is the *business* map, one level up.

**Explicitly not a rebuild.** These stay as separate, purpose-built docs. This page just makes the connections between them visible.

---

## The living documents, and what each one owns

| Document | Owns | Feeds into |
|---|---|---|
| `CEO_DASHBOARD.md` | The current real answer to cross-system questions (YouTube/GA4/GSC/Beehiiv/Spotify/interactions/sponsor inquiries/docs/competitive intel) | Everything below — it's the fastest orientation point |
| `MASTER_STATUS.md` (ecosystem) | Single source of truth for what's live, in progress, and blocked, across both repos | `ROADMAP.md`, Phase Summaries |
| `ROADMAP.md` | Strategic bucket view (Completed → Current → Next → Future → Icebox) | `MASTER_STATUS.md` |
| `CEO_DECISIONS.md` | The *why* behind strategic calls | Every doc below that references "per Katie's decision" |
| `COMPETITIVE_INTELLIGENCE.md` | Raw evidence log — real titles/patterns/business moves by competitor, organized by psychology | `WAG_PACKAGING_INTELLIGENCE.md` (evidence → reasoning) |
| `WAG_PACKAGING_INTELLIGENCE.md` | Proprietary reasoning about *why* packaging patterns work — not a title list | Future title/thumbnail decisions |
| `BUSINESS_DEVELOPMENT_SYSTEM.md` | Sponsor/brand-authority discovery channels and their real actionability | Sponsor page content, `WAG_OPPORTUNITY_REGISTRY.md` |
| `SOFTWARE_INCUBATOR.md` | Evidence log of recurring problems (readiness 1–5) + the Business Assets ledger | `WAG_OPPORTUNITY_REGISTRY.md`, Phase Summaries |
| `PRODUCT_JOURNAL.md` | Dated notes on real patterns/surprises/friction | `SOFTWARE_INCUBATOR.md` (a repeated journal note often becomes an Incubator entry) |
| `WAG_OPPORTUNITY_REGISTRY.md` | Structured index of larger strategic opportunities + the Flywheel log | `FUTURE_OPPORTUNITIES.md` (full prose detail) |
| `PUBLISHING_BLUEPRINT.md` | How content actually moves through the ecosystem | `WAG_AGENT_ARCHITECTURE.md`'s Publishing agent role |
| `SEARCH_CONSOLE_BASELINE.md` | Standing SEO/AEO/GEO technical baseline | `internal/content-refresh-tracker.md` (wildadventuregirls-website) |
| `WAG_AGENT_ARCHITECTURE.md` | Design-only spec for future specialized agents | Every doc above (each proposed role reads/writes specific real docs, named in that spec) |
| `wag-publishing-engine/docs/WAG_KNOWLEDGE_HANDOFF.md` | Brand/audience/IP knowledge for the separate books project | Kept deliberately isolated from the website repos |

## How they connect (without merging)

- **Evidence flows one direction:** `COMPETITIVE_INTELLIGENCE.md` and `PRODUCT_JOURNAL.md` are raw observation logs. `WAG_PACKAGING_INTELLIGENCE.md` and `SOFTWARE_INCUBATOR.md` are where raw observations become reasoning/decisions once there's enough of them (Rule of 3, readiness level 2+).
- **Decisions flow the other direction:** `CEO_DECISIONS.md` is upstream of everything — any doc citing "per Katie's decision" traces back there.
- **Status is centralized, content isn't:** `MASTER_STATUS.md` and `ROADMAP.md` don't duplicate any other doc's content — they only ever summarize and link out.
- **The Dashboard is the shortcut, not a duplicate:** `CEO_DASHBOARD.md` pulls the single most-needed fact from each of the above rather than re-explaining it — always cites back to the source doc.

## Data-model thinking (per Katie's 2026-08-08 directive)

Not software design — just naming what data already exists because of how WAG operates, so a future system (if one is ever built) wouldn't be invented from nothing. Applied so far to the docs above:

- **Packaging Intelligence →** `Package` (Title, Thumbnail, Hook, Pattern, Outcome, CTR, Retention, Emotion, Status) — see the data-model note inside `WAG_PACKAGING_INTELLIGENCE.md`.
- **Business Assets →** `Asset` (Owner, Created, Category, Business Value, Dependencies, Related Projects) — see the data-model note inside `SOFTWARE_INCUBATOR.md`.
- **Software Incubator →** `Opportunity` (Recurring Problem, Evidence, Frequency, Business Value, Readiness, Decision) — see the same file.

Apply this same exercise to any new recurring doc as it's created — identify the core object, its fields, its owner, and what consumes it, before assuming it needs to become software.

---

*Update this map only when a new living document gets created or an existing one's role genuinely changes — not on a schedule. If a doc stops being referenced by anything else here, that's worth noticing too.*
