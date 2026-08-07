# WAG Interaction Optimization — Permanent Reference

Per Katie's 2026-08-07 directive: before any further expansion (new SEO pages, YouTube audit, new interactions), every built interaction gets evaluated against 8 lenses — Traffic, Conversion, Data, Sponsorship, IP, Reuse, Discovery, CEO Filter — and strengthened where a real gap exists. This is a permanent reference, not a one-time report: re-run this lens set on any new interaction before calling it done, and revisit this file when a real gap is found later.

**How to use this doc:** each interaction gets one entry. Real gaps found are marked ✅ Fixed (with what changed) or 📋 Logged (deliberately not built yet, with why). Nothing here is fabricated — every finding traces to actual code read this session.

---

## Cross-cutting fixes (apply to multiple interactions)

**✅ Fixed — WhatsNext cross-link matrix was unbalanced.** WAG Awards and Questions Featured had zero inbound links from most sibling interactions — real content, no path to discover it except via the Guys Answer Questions hub. Rebalanced all 5 live interactions' `WhatsNext` items so every interaction now has ≥2 inbound links from siblings, not just from the GAQ hub. (Conversion lens.)

**✅ Fixed — episode pages weren't linking to interactions built from their own content.** Aiden's Guys Answer Questions episode page (a page real visitors land on from YouTube/search) had zero link toward him being a live WAG Awards nominee, and no GAQ-format episode linked toward Questions Featured. Made both generic in `episodes/[slug].astro` (guest-name-aware, topic-driven) so any future guest episode picks this up automatically — not hardcoded to Aiden. (Traffic lens.)

**✅ Fixed — no per-choice audience data was captured.** Every interaction's Beehiiv consent only tagged "did this person participate," never "what did they choose" — even though the choice was already sitting in localStorage at submit time, zero new UI. Added optional per-choice tagging (`wag-match-annabella`, `wag-awards-ryan`, `favorite-segment-tell-me-the-truth`, etc. — 9 new real Beehiiv tags created) validated against a server-side allowlist. (Data lens.)

**✅ Fixed — 5 of 6 dynamic Beehiiv segments had never been recalculated** (only Verdict's was checked and fixed in an earlier pass this session). Recalculated all 5 remaining segments — all confirmed accurate (0 real members, consistent with 0 real production traffic so far, not a bug).

---

## WAG Verdict

- **Traffic:** strong — real FAQ schema, `llms.txt` entry, weekly cadence gives Google a reason to recrawl, archive builds real long-tail content over time. Sourced-episode linking is fully generic (any future episode a Verdict comes from picks up the link automatically).
- **Conversion:** strong — consent capture, sponsor slot, archive keeps return visitors engaged. Now also links to WAG Awards (fixed above).
- **Data:** the yes/no vote itself is already real segmentable data (stored per-voteKey); no per-choice Beehiiv tag added here since Verdict uses its own separate, deliberately-untouched `verdict-consent.ts` endpoint (see `ARCHITECTURE.md`) — extending it is a real future task, not urgent.
- **Sponsorship:** real slot, unsold. No format-specific opportunity beyond the generic inventory.
- **IP:** the strongest trajectory of all six — weekly cadence + growing archive is already becoming a recognizable recurring format (see the YouTube "WAG Verdict Show" playlist work). 📋 Logged: a "WAG Verdict Book of the Year" retrospective (top voted dilemmas) is a real future content asset once the archive has enough entries — not now, not enough real archive yet.
- **Reuse:** `VoteWidget` deliberately not merged into `PollWidget` — see `ARCHITECTURE.md`'s Reuse Rule note.
- **Discovery:** each Verdict already ties to a real `sourceEpisode` via Content Collections' own reference system — a real, structured entity relationship a future knowledge graph could consume directly.
- **CEO Filter:** yes, clearly, at any scale — recurring engagement format with a fixed content-production cost.

## WAG Match

- **Traffic:** strong — FAQ schema, `llms.txt` entry, reciprocal link to/from Hosts.
- **Conversion:** strong — now links to Questions Featured in addition to Verdict + GAQ hub (fixed above).
- **Data:** ✅ Fixed — per-choice tagging now captures which host a subscriber matched (real audience-segmentation value: could one day inform which host's content gets surfaced to which subscriber, or which host a sponsor's audience skews toward).
- **Sponsorship:** real slot, unsold.
- **IP:** 📋 Logged — a "which host are you" quiz format is a natural fit for physical merch (stickers/pins per result) once there's real demand signal; not building speculatively.
- **Reuse:** `QuizWidget` is already fully brand-agnostic — a future brand's own personality quiz reuses it with zero new component code.
- **Discovery:** results tie to real Host entities with real profile URLs — structured, not just decorative copy.
- **CEO Filter:** yes — quiz format has near-zero marginal cost per new subscriber.

## Vote for Your Favorite WAG Segment

- **Traffic:** adequate — FAQ schema, `llms.txt` entry. Weakest of the five on standalone search demand (a preference poll isn't a strong independent search target), but that's fine — its role is engagement/data, not acquisition.
- **Conversion:** ✅ Fixed — now links to WAG Awards in addition to Match + Verdict.
- **Data:** ✅ Fixed — per-choice tagging now captures favorite segment, real programming-insight value (which segment to lean into) with zero new UI.
- **Sponsorship:** real slot, unsold.
- **IP:** low standalone IP value beyond the programming insight it generates — correctly not over-invested in.
- **Reuse:** pure `PollWidget` instance, zero new code.
- **Discovery:** ties to the real Segments entity list (He Said What?!, Squad Dares, Tell Me the Truth, 3-Second Roast) already documented on `/segments/`.
- **CEO Filter:** yes as a cheap, always-on engagement signal; no reason to expand it further right now.

## Questions Featured

- **Traffic:** adequate — FAQ schema, `llms.txt` entry. ✅ Fixed — now reachable from every GAQ-format episode page directly, not just the GAQ hub.
- **Conversion:** ✅ Fixed — now links to Favorite Segment in addition to GAQ hub + Verdict.
- **Data:** correctly excluded from per-choice tagging — free-text submissions have no discrete choice to tag safely. Real submission content itself (in Netlify Blobs) is already the valuable data; no admin/moderation UI yet (tracked in `ROADMAP.md` Icebox — correctly deferred until volume makes it painful, per Katie's own call).
- **Sponsorship:** real slot, unsold. 📋 Logged — a sponsor tied to "the question that gets picked" (e.g. sponsor picks or co-brands the featured question) is a real future premium-inventory idea once real submission volume exists.
- **IP:** this is the real content-sourcing pipeline for the entire Guys Answer Questions franchise — every future installment can plausibly draw a real question from here. Genuinely high-leverage infrastructure for a low build cost.
- **Reuse:** the submit-form UI is inline, not componentized (first and only free-text submitter so far) — correct per the Reuse Rule, not a gap.
- **Discovery:** submissions aren't yet structured as entities (just Blobs records) — fine at current volume; would matter more if this feeds a future knowledge graph at scale.
- **CEO Filter:** yes — real content pipeline, not just an engagement gimmick.

## WAG Awards

- **Traffic:** adequate — FAQ schema, `llms.txt` entry. ✅ Fixed — now reachable from Verdict, Favorite Segment, and Aiden's own episode page directly (previously a near dead-end).
- **Conversion:** ✅ Fixed — now links to Questions Featured in addition to GAQ hub + Favorite Segment.
- **Data:** ✅ Fixed — per-choice tagging now captures which nominee a voter picked (real value: a future guest-casting signal, or a sponsor-targeting signal for "audience that liked Ryan-style guests").
- **Sponsorship:** real slot, unsold. 📋 Logged — genuinely the strongest premium-inventory candidate of the six once there are multiple real categories: "Favorite Guest presented by [sponsor]" is a natural, non-intrusive sponsorship shape.
- **IP:** explicitly built as the start of a real recurring annual/seasonal franchise (per its own code comments) — correctly scoped to one real category rather than padded with invented ones.
- **Reuse:** pure `PollWidget` instance. The nominee-card markup (photo + tagline + vote) is inline, not componentized — correct per the Reuse Rule (only one real user of this exact pattern so far); revisit if a second awards-style nominee page is ever built.
- **Discovery:** nominees are real Host/Guest entities tied to real episodes — structured, reusable relationship data.
- **CEO Filter:** yes, and arguably one of the highest-IP-trajectory formats of the six — an annual awards franchise compounds in a way a one-off poll doesn't.

## Seasonal Challenges

- **Traffic/Conversion/Data:** not applicable — `LIVE = false`, correctly `noindex`'d, no real content yet. Nothing to optimize until real challenge content exists.
- **Sponsorship:** real slot pre-wired, unsold — ready the moment the page goes live.
- **IP:** genuinely strong future trajectory — seasonal/challenge formats are a natural fit for a "challenge of the month" merch or partnership angle once real.
- **Reuse:** infrastructure (tag, consent whitelist entry, routing) already built and ready; taxonomy for real content documented inline in the file itself.
- **Discovery:** N/A yet.
- **CEO Filter:** correctly not built further — no real content to optimize, and building the reward/progression layer ahead of real content would be the same manufactured-feeling mistake flagged for the future Discovery Platform (see `FUTURE_OPPORTUNITIES.md`).

---

## What was deliberately NOT built this pass

- **No new components.** Every fix above reused existing architecture (`WhatsNext` items arrays, `ConsentCheckboxPair`'s existing localStorage read, `interaction-consent.ts`'s existing tag-application logic). Nothing here required a new abstraction — confirms the Reuse Rule is holding, not being violated by expansion-for-its-own-sake.
- **No merge of `VoteWidget` into `PollWidget`.** Structurally close, but Verdict is mid-review pending launch — touching it now for a cosmetic consolidation isn't worth the risk. Logged in `ARCHITECTURE.md`.
- **No admin/moderation UI for Questions Featured.** Real volume doesn't justify it yet — stays in `ROADMAP.md` Icebox.
- **No sponsor one-pager or outreach.** Real inventory now exists across all 6 slots (7 with the per-choice data as a talking point), but building sales collateral is a distinct task already tracked in `ROADMAP.md` → Next.
- **No Discovery Platform / knowledge-graph code.** The entity relationships already present (Verdict→episode, Match→hosts, Awards→guests) are real evidence the underlying content model is sound — but building a graph layer on top remains explicitly deferred per `FUTURE_OPPORTUNITIES.md`.

## Reusable checklist for future interactions

Before calling a new interaction "done," check:
- [ ] Does it have ≥2 inbound links from sibling interactions (not just from a content hub)?
- [ ] Does any source content page (episode, article) it's drawn from link forward to it?
- [ ] If it has a small, real, enumerable set of choices, is the specific choice captured as a real Beehiiv tag (not just "participated")?
- [ ] Is its Beehiiv segment fresh (recalculated), not just created?
- [ ] Does its sponsor slot exist, even unsold?
- [ ] Is there a real IP trajectory worth naming (recurring franchise, physical product, licensing) — or is it correctly scoped as a smaller engagement tool?
- [ ] Does it reuse existing components, or is a new one justified by a genuine 2nd real use case (Reuse Rule)?
- [ ] Do its real entities (hosts, guests, episodes) connect to the rest of the content graph, or does it dead-end as isolated data?
