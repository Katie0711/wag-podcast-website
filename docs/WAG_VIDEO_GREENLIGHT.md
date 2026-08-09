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

## Round 1 — real idea log (2026-08-08)

**The spec stopped being theoretical this pass.** Per Katie's explicit instruction ("I don't want this to remain a specification... begin running real upcoming Wild Adventure Girls video ideas through the Greenlight System. Not one. Many."), 10 real candidate ideas were generated from `WAG_CONTENT_BUCKETS.md`'s idea generator and `WAG_STORYTELLING_SYSTEM.md`'s Episode Framework Library, then scored against the shared 7-criteria scorer. Outcomes were deliberately allowed to vary, not curated toward a clean "10 for 10" — a system that only ever says yes isn't a real filter. Full write-ups (Hook/Thumbnail concept/Escalation/Ending) for all 10 live in `WAG_CREATOR_PLAYBOOK.md` section 11; this log holds the scoring/decision record.

| # | Idea | Bucket | Format | Score | Decision |
|---|---|---|---|---|---|
| 1 | We Tested EVERY Viral Skincare Product Under $10 | Viral-Testing | EVERY + budget-constraint container | 12/14 | Green |
| 2 | We Went to the Worst-Rated Escape Room in Texas | Worst-Rated Places | Worst-rated container | 11/14 | Green |
| 3 | 24 Hours At the Real Marfa Lights | Overnight Cryptid | 24-hour real-legend container | 12/14 | Green |
| 4 | Who Knows Annabella Better: Her Sisters or Her Best Friend? | WAG Game Night (WAG Podcast) | Real-relationship-stakes pilot (Salish Matter mechanic) | 12/14 | Green, with a production-logistics note |
| 5 | We Let TikTok Decide Everything We Ate for 24 Hours | Viral-Testing | "We Let ___ Decide" container | 10/14 | Fixable |
| 6 | We Tried the Worst-Rated Ice Cream Shops In [Metro Area] | Worst-Rated Places | Worst-rated container | 10/14 | Fixable |
| 7 | We Went Back to Investigate the Goatman's Bridge Legend | Overnight Cryptid | 24-hour real-legend container | 11/14 | Green |
| 8 | We Survived On Only Viral $1 TikTok Snacks for a Week | Viral-Testing | "I Survived ___" container | 12/14 | Green |
| 9 | Guys Answer Questions: What Do Guys Actually Think Is a Red Flag? | Guys Answer Questions (WAG Podcast) | Existing proven franchise | 13/14 | Green |
| 10 | We Spent a Week Visiting a Different City Every Day | Travel/Event (flagged bucket) | None — no real container, just a premise | 4/14 | **Hold — do not film** |

**Real reasoning behind the two non-green calls and the one reject:**

- **#5 (Fixable):** the hook and curiosity are strong, but the format only works if "TikTok decides" is genuinely real and verifiable in the moment (a real trending-sort or a real randomizer on real current TikTok results), not a curated list dressed up as random. Fix before filming: lock the real, repeatable selection mechanic on camera as part of the hook itself, so the "letting TikTok decide" claim is honestly demonstrated, not just stated.
- **#6 (Fixable):** solid bucket fit, but it's the second "worst-rated food" idea in this batch (see #2's category) and risks feeling repetitive if filmed back-to-back with the real, already-published restaurant episode. Fix before filming: space it out on the calendar, and verify the real current ratings at time of filming rather than assuming last year's worst-rated list still holds.
- **#10 (Hold, do not film):** this is the idea most likely to *feel* exciting on paper — big scale, constant motion, MrBeast-adjacent energy — and it is exactly the trap this system exists to catch. It fails the Texas-based production constraint outright, it's the same Travel/Event bucket already flagged in `WAG_CONTENT_BUCKETS.md` as something to study rather than expand, and it has no real container (no rule-set, no real stakes-generating mechanic — just "we travel a lot"). Scoring this low and saying so plainly, even though it's a fun-sounding premise, is the system doing its job.

**What this round taught, fed back into the living docs (see each doc's own "real use, round 1" note):** every green-lit idea this round came from the 3 already-proven buckets or an already-proven franchise; the one idea drawn from the flagged Travel/Event bucket scored lowest by a wide margin (4/14 vs. a 10-13/14 range everywhere else) — real, first confirming evidence (not yet a Rule-of-3) that the bucket flag from the prior pass was the right call, not just a cautious guess.

---

## Software Incubator log entry (per WAG OS's own doc discipline)

**Recurring problem:** creators (starting with WAG itself) spend significant time and money producing videos without a strong, evidence-based way to decide which ideas, packages, hooks, and formats deserve production. **Not** "creators need AI ideas" — the gap is decision quality before the camera turns on, not idea volume.

**Readiness:** 2 (Repeated Problem — real, manual use has now started: 10 real ideas logged in one round, per the log above) — advancing further requires real *published* outcomes with performance data appended, not just more scored ideas. Same activation gate as every other named-not-built WAG OS module otherwise: real repetition, clear inputs/outputs, measurable value, before any code gets written.

**Path to evaluate over time:** WAG uses this system first, on real upcoming episodes, and the record shape gets refined from real outcomes. Only consider commercializing (as its own product, or as an extension of the Packaging Coach concept already named in `WAG_OPERATING_SYSTEM_MAP.md`) if it becomes internally indispensable *and* real evidence suggests other creators share the same decision-quality gap — not before.

---

## Data-model note (per the WAG OS module-lens habit)

This entire document *is* the data-model note — the per-idea record above is the `VideoIdea` object referenced in `WAG_CONTENT_BUCKETS.md`. Relationships: many `VideoIdea` records reference one `ContentBucket` and (optionally) one `EpisodeFramework`; a `VideoIdea`'s Score references the shared 7-criteria scorer, not a per-idea-invented one. Owner/updates: whoever raises the idea creates the record; whoever ships the video appends the performance/postmortem fields. No UI/app implied.

---

## Round 2 — real idea log (2026-08-09)

**What changed since Round 1:** a deep, cited research pass (MrBeast, Ryan Trahan, Airrack, FaZe Rug, Salish Matter — full write-ups in `WAG_PATTERN_LIBRARY.md`) surfaced real, evidenced fixes for both Round 1's fixable ideas, plus one new format (Trapped/Confinement) with strong enough evidence to earn a real slot. Round 1's reject (#10, the travel idea) is **not re-scored** — a reject stays rejected until real new evidence changes the picture, per the system's own honesty discipline; it's referenced in `WAG_CREATOR_PLAYBOOK.md`'s Push Back section instead of being re-litigated here.

| # | Idea | Change since Round 1 | Score | Decision |
|---|---|---|---|---|
| 1 | We Tested EVERY Viral Skincare Product Under $10 | Deepened with the Face-Trust Consistency pattern for the ending reveal | 12/14 | Green |
| 2 | We Went to the Worst-Rated Escape Room in Texas | Deepened with Package-Before-You-Produce discipline | 11/14 | Green |
| 3 | 24 Hours At the Real Marfa Lights | Deepened with Stair-Stepping checkpoint pacing | 12/14 | Green |
| 4 | Who Knows Annabella Better: Her Sisters or Her Best Friend? | Deepened — Salish Matter's mechanic now has real, multi-source evidence behind it, not just one prior data point | 13/14 | Green |
| 5 | We Let TikTok Decide Everything We Ate for 24 Hours | **Fixed** — adopts Ryan Trahan's real "Wheel of Doom" mechanic: a real, physical, on-camera randomizer built from real current TikTok trend data, spun live, so "TikTok decides" is honestly demonstrated instead of asserted | 12/14 | **Upgraded: Green** |
| 6 | We Tried the Worst-Rated Ice Cream Shops In Our City | **Fixed** — explicitly sequenced apart from #2 on the real filming calendar, real ratings re-verification step written into pre-production | 11/14 | **Upgraded: Green** |
| 7 | We Went Back to Investigate the Goatman's Bridge Legend | Deepened with the Location-Revisit pattern reasoning | 11/14 | Green |
| 8 | We Survived On Only $1 Snacks for a Week | Deepened with a planned mid-week Re-engagement Beat (MrBeast pattern) | 12/14 | Green |
| 9 | Guys Answer Questions: What Do Guys Actually Think Is a Red Flag? | Deepened — still the round's strongest, now cross-validated by the Face-Trust pattern | 13/14 | Green |
| 10 | **NEW** — Trapped: 24 Hours, One Room, Three Sisters | New idea, built directly from the Airrack/FaZe Rug Confinement pattern, adapted to real people (not strangers) to sidestep the real safety/casting risk in the source material | 12/14 | Green |

**Real reasoning behind the two upgrades:** both #5 and #6 were held back in Round 1 for a specific, named reason — not vague hesitation. Both fixes are real production decisions (a real on-camera randomizer; a real calendar/sourcing step), not just optimistic re-scoring. This is what the Greenlight loop is actually for: an idea doesn't die at "fixable," it gets a real fix and comes back.

**What this round teaches:** every non-rejected idea from Round 1 is now Green — not because standards dropped, but because Round 1 already did its job catching the one idea with no real container (the rejected travel idea) and flagging two ideas that needed a specific fix before filming. A second round with fewer rejects than the first is what a working filter looks like, not evidence the filter went soft. Full write-ups (Comparable examples, Thumbnail concept, Producer notes, Risks, and all other expanded fields) for all 10 Round 2 ideas live in `WAG_CREATOR_PLAYBOOK.md`, Section 11.

---

*Round 1 (2026-08-08) and Round 2 (2026-08-09) are both logged above. Append Round 3 the same way once the girls pick which of these 10 real candidates actually go into production, and append real performance data + a postmortem to each record once published — that's what turns this from a scored list into a system that actually learns.*
