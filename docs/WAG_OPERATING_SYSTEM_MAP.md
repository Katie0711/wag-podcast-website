# WAG OS

**WAG OS is not software today. It is the operating system for running WAG** — the living, connected set of documents below, not a new build. Named directly per Katie (2026-08-08): "the dashboard is just one module inside it" — this map, `CEO_COCKPIT.md`, and every other living doc are WAG OS. This page is an index of documents that already exist, not a new system, so a brand-new Claude session (or eventually a specialized agent — see `WAG_AGENT_ARCHITECTURE.md`) can orient by reading the company's own documentation instead of depending on this conversation. The company owns the knowledge; Claude reads it, works, and writes it back. See `docs/ARCHITECTURE.md` for the codebase map — this is the *business* map, one level up.

**The flywheel this exists to serve:** run WAG → improve WAG OS → WAG OS helps run WAG even better. The media company creates the operating system; the operating system makes the media company stronger. Neither replaces the other.

**The guardrail (Katie's own words, 2026-08-08 — the standing check on all of this):** *"If you ever find yourself spending more time designing WAG OS than improving WAG itself, stop and return to the roadmap. WAG OS should always evolve as a by-product of running WAG, never replace running WAG."* Document and evolve WAG OS through real work — it is never itself the work.

**Explicitly not a rebuild.** These stay as separate, purpose-built docs. This page just makes the connections between them visible.

---

## The living documents, and what each one owns

| Document | Owns | Feeds into |
|---|---|---|
| `CEO_COCKPIT.md` | The current real answer to cross-system questions (YouTube/GA4/GSC/Beehiiv/Spotify/interactions/sponsor inquiries/docs/competitive intel) | Everything below — it's the fastest orientation point |
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
| `CHANNEL_PUBLISHING_QA_CHECKLIST.md` | The repeatable 9-item standard every YouTube upload runs through (end screens, cards, chapters, playlists, descriptions, pinned comments, website links, playlist links, CTAs), across both `@WAGPodcast` and `@TheWildAdventureGirls` | `PUBLISHING_BLUEPRINT.md`, `WAG_AGENT_ARCHITECTURE.md`'s Publishing agent role |
| `WAG_STORYTELLING_SYSTEM.md` | The invisible narrative structure (hook/container/escalation/real-relationship-stakes/reversal/ending) reverse-engineered from Ryan Trahan, Airrack, FaZe Rug, Salish/Jordan Matter, plus WAG's own Episode Framework Library | `WAG_VIDEO_GREENLIGHT.md`'s Structured story outline field |
| `WAG_CONTENT_BUCKETS.md` | `@TheWildAdventureGirls`' handful of real, evidenced content buckets (Viral-Testing, Worst-Rated Places, Overnight Cryptid, flagged Travel/Event) + the idea-generator mechanic that turns a bucket into a candidate | `WAG_VIDEO_GREENLIGHT.md`'s Idea/premise + Content bucket fields |
| `WAG_VIDEO_GREENLIGHT.md` | The per-idea record data model (idea → greenlight → package → produce → publish → measure → learn) and the shared 7-criteria scorer, honestly bounded against fake-certainty scoring | Future real episode planning; logged as a Software Incubator opportunity in `SOFTWARE_INCUBATOR.md` |
| `SEARCH_CONSOLE_BASELINE.md` | Standing SEO/AEO/GEO technical baseline | `internal/content-refresh-tracker.md` (wildadventuregirls-website) |
| `WAG_AGENT_ARCHITECTURE.md` | Design-only spec for future specialized agents | Every doc above (each proposed role reads/writes specific real docs, named in that spec) |
| `wag-publishing-engine/docs/WAG_KNOWLEDGE_HANDOFF.md` | Brand/audience/IP knowledge for the separate books project | Kept deliberately isolated from the website repos |

## How they connect (without merging)

- **Evidence flows one direction:** `COMPETITIVE_INTELLIGENCE.md` and `PRODUCT_JOURNAL.md` are raw observation logs. `WAG_PACKAGING_INTELLIGENCE.md` and `SOFTWARE_INCUBATOR.md` are where raw observations become reasoning/decisions once there's enough of them (Rule of 3, readiness level 2+).
- **Decisions flow the other direction:** `CEO_DECISIONS.md` is upstream of everything — any doc citing "per Katie's decision" traces back there.
- **Status is centralized, content isn't:** `MASTER_STATUS.md` and `ROADMAP.md` don't duplicate any other doc's content — they only ever summarize and link out.
- **The Cockpit is the shortcut, not a duplicate:** `CEO_COCKPIT.md` pulls the single most-needed fact from each of the above rather than re-explaining it — always cites back to the source doc.

## Named, not built (long-term vision only)

Katie named several future WAG OS modules on 2026-08-08 that are explicitly **not to be built** — they're the vision the living docs above are already, quietly, building the evidence base for:

- **Packaging Coach** — drop in a title/thumbnail/hook, get back strengths/weaknesses/cold-audience-friendliness/comparison against past WAG winners and validated competitors. Depends entirely on `WAG_PACKAGING_INTELLIGENCE.md` accumulating enough real patterns first.
- **Brand Intelligence** — "does this feel like WAG, are we drifting, does this match our positioning." No doc owns this yet; would need a documented brand-consistency baseline before it's more than a gut check.
- **Knowledge Engine** — nothing important disappearing into chat history, everything organized/connected/searchable/reusable/compounding. This map, plus [[wag_stateless_claude_source_of_truth]], is the current, manual version of that goal.
- **Publishing Intelligence** (expanded) — always knowing the newest video/podcast/article/interaction/email/book-progress and flagging what's missing. `PUBLISHING_BLUEPRINT.md` is the current manual version.
- **Sponsor Intelligence** (expanded) — active leads/outreach/case studies/authority/agency opportunities in one place. `BUSINESS_DEVELOPMENT_SYSTEM.md` plus the sponsor-inquiry tracking gap already logged in `CEO_COCKPIT.md` are the current state.

None of these get built ahead of the same activation gate `WAG_AGENT_ARCHITECTURE.md` already applies: real repetition, clear inputs/outputs, measurable value.

## Data-model thinking (per Katie's 2026-08-08 directive)

Not software design — just naming what data already exists because of how WAG operates, so a future system (if one is ever built) wouldn't be invented from nothing. Applied so far to the docs above:

- **Packaging Intelligence →** `Package` (Title, Thumbnail, Hook, Pattern, Outcome, CTR, Retention, Emotion, Status) — see the data-model note inside `WAG_PACKAGING_INTELLIGENCE.md`.
- **Business Assets →** `Asset` (Owner, Created, Category, Business Value, Dependencies, Related Projects) — see the data-model note inside `SOFTWARE_INCUBATOR.md`.
- **Software Incubator →** `Opportunity` (Recurring Problem, Evidence, Frequency, Business Value, Readiness, Decision) — see the same file.

Apply this same exercise to any new recurring doc as it's created — identify the core object, its fields, its owner, and what consumes it, before assuming it needs to become software.

---

*Update this map only when a new living document gets created or an existing one's role genuinely changes — not on a schedule. If a doc stops being referenced by anything else here, that's worth noticing too.*
