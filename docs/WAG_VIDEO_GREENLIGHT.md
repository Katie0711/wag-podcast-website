# WAG Video Greenlight System

**Data model + manual-use spec, not an app.** Per Katie's explicit 2026-08-08 directive: establish the shape and use it manually on real upcoming videos first — do not build a large application during the current growth work. This is the same discipline `WAG_AGENT_ARCHITECTURE.md` and `WAG_OPERATING_SYSTEM_MAP.md` already apply everywhere else in WAG OS: real repetition and evidence before software.

**The core complaint this fixes:** every future video idea, title, thumbnail, or hook becomes a structured, persistent record — not a one-off chat answer that evaporates once the conversation moves on.

**Where this fits:** `WAG_CONTENT_BUCKETS.md`'s idea generator produces a candidate (a bucket + a real variable). This doc is what a candidate becomes once it's worth writing down — and stays the same record all the way through publishing and beyond.

---

## The closed loop

**IDEA → GREENLIGHT → PACKAGE → PRODUCE → PUBLISH → MEASURE → LEARN → IMPROVE NEXT IDEA**

Every future recommendation should increasingly draw from WAG's own accumulated outcome data and the documented creator-pattern research in `WAG_STORYTELLING_SYSTEM.md` / `WAG_PACKAGING_INTELLIGENCE.md` — not get regenerated from scratch each time a new idea comes up.

---

## The per-idea record

One record per real idea, created the moment it's worth writing down (post-idea-generator, pre-greenlight), and *appended to* — never replaced — as it moves through the loop above.

| Field | What it holds |
|---|---|
| Idea / premise | The real, one-line concept |
| Content bucket | Which `WAG_CONTENT_BUCKETS.md` bucket it belongs to (or "unbucketed" if genuinely new) |
| Repeatable format | Which `WAG_STORYTELLING_SYSTEM.md` Episode Framework it uses, if any |
| Title | The working title (see `WAG_PACKAGING_INTELLIGENCE.md` for pattern-matching) |
| Thumbnail concept | A real, specific description — not "something eye-catching" |
| Hook | What happens in the first 15-30 seconds, per the invisible-structure spec |
| Structured story outline | The container's real checkpoints/escalation beats, planned in advance (not scripted dialogue — the beats, not the words) |
| Escalation | What raises stakes partway through |
| Payoff | What the ending actually delivers, and whether it honestly matches the hook's promise |
| WAG fit | Does this match WAG's real brand/positioning (teen entertainment, unscripted, Texas-based) |
| Cold-audience appeal | Does this work for someone who's never seen WAG before, per the packaging doc's cold-audience-friendliness field |
| Production feasibility | Real, honest assessment against the Texas-based/no-travel/no-celebrity constraint |
| Sponsor friendliness | Would this format carry a brand integration cleanly |
| Relevant historical WAG evidence | Links to real prior WAG videos/data that inform this idea (not assumed, cited) |
| Relevant Packaging & Systems Intelligence references | Which pattern(s) in `WAG_PACKAGING_INTELLIGENCE.md` this idea is drawing on |
| Score | See scoring methodology below |
| Greenlight decision | Green / fixable / hold — with the specific reason, not just the verdict |
| Reasoning | The actual "why," in enough detail that someone reading this record cold understands the call |

**After publishing**, the same record gets two more fields appended, never a separate document:
- **Real performance data** (views, CTR, retention, comments — actual Studio numbers)
- **Postmortem lessons** (what the outcome confirms or contradicts about the framework/pattern/bucket used)

---

## Scoring methodology (extends the existing system, doesn't replace it)

WAG already has a real, validated 7-criteria green-light scorer from the 2026-08-05 growth pass (0–2 points each, 14 max): recommendable into the ecosystem, strong title bucket, brand fit, curiosity, high-retention opening, strengthens a franchise, could follow the target creators in Suggested. It was validated against two real, known outcomes — WAG's real highest-viewed episode scored 13/14, a real confirmed below-typical performer scored 1/14 — a 12-point real separation, not a designed-to-look-good rubric.

**Use that same scorer here** rather than inventing a second one. Bands: 10–14 green light as-is, 5–9 fixable (usually a missing curiosity or franchise-fit point), 0–4 real risk, don't film yet.

**Guardrail, explicit and non-negotiable (Katie's own instruction):** never produce a fake "92/100 = guaranteed hit" score. A 13/14 does not mean "92% chance of success" — it means the idea matches the patterns that have separated WAG's own real winners from its own real underperformers so far, on a small, honestly-sized dataset. State the score as heuristic pattern-matching, not statistical prediction. The honest, valuable promise of this whole system: reject more weak ideas before production, and systematically improve the odds every upload — never certainty, and never a percentage implying more precision than a small real dataset can support.

---

## What this is not, yet

- **Not an app.** This is a record shape to use by hand (a doc, a spreadsheet, a simple table) on real upcoming episodes — logged as a Software Incubator opportunity below, not built now.
- **Not a replacement for judgment.** The score narrows the field and catches obviously weak ideas; a green-lit idea still needs the same real pushback (weak titles, uncompetitive thumbnails, formats without breakout potential) this whole project is explicitly tasked to apply.
- **Not retroactive busywork.** Don't backfill records for WAG's entire existing catalog — start applying this to real *upcoming* episodes going forward, per Katie's own framing ("next 20 videos," not the whole back catalog).

---

## Software Incubator log entry (per WAG OS's own doc discipline)

**Recurring problem:** creators (starting with WAG itself) spend significant time and money producing videos without a strong, evidence-based way to decide which ideas, packages, hooks, and formats deserve production. **Not** "creators need AI ideas" — the gap is decision quality before the camera turns on, not idea volume.

**Readiness:** 1 (data model + manual use only, no software yet) — same activation gate as every other named-not-built WAG OS module: real repetition, clear inputs/outputs, measurable value, before any code gets written.

**Path to evaluate over time:** WAG uses this system first, on real upcoming episodes, and the record shape gets refined from real outcomes. Only consider commercializing (as its own product, or as an extension of the Packaging Coach concept already named in `WAG_OPERATING_SYSTEM_MAP.md`) if it becomes internally indispensable *and* real evidence suggests other creators share the same decision-quality gap — not before.

---

## Data-model note (per the WAG OS module-lens habit)

This entire document *is* the data-model note — the per-idea record above is the `VideoIdea` object referenced in `WAG_CONTENT_BUCKETS.md`. Relationships: many `VideoIdea` records reference one `ContentBucket` and (optionally) one `EpisodeFramework`; a `VideoIdea`'s Score references the shared 7-criteria scorer, not a per-idea-invented one. Owner/updates: whoever raises the idea creates the record; whoever ships the video appends the performance/postmortem fields. No UI/app implied.

---

*Start applying this to real upcoming episodes once Katie has real ideas ready to run through it — this document is the shape, not yet a populated log.*
