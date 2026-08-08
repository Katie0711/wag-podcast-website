# WAG Packaging Intelligence

**Proprietary reasoning about why titles/packaging work — not a list of example titles.** Per Katie's explicit correction (2026-08-08): the Title Library in `COMPETITIVE_INTELLIGENCE.md` stays as the raw evidence log (real titles, real sources, organized by trigger). This document is where that evidence gets turned into documented intelligence WAG can apply to any future title decision, proven or competitor-sourced.

## Two separate categories of study — do not conflate (confirmed by Katie, 2026-08-08)

**Direct competitors** (`COMPETITIVE_INTELLIGENCE.md`) — teen-audience podcasts that clear the doc's own scope test (currently LOL Podcast, Rock Pod). We compare real audience/business overlap here: are we losing or winning the same viewer.

**Packaging & Systems Intelligence sources** (this document) — exceptional creators studied for repeatable frameworks regardless of audience overlap: Ryan Trahan, Aarak, MrBeast, and any future creator worth studying this way. We are not comparing audiences with these creators — WAG doesn't compete with MrBeast for the same viewer. We're extracting repeatable systems: storytelling structure, hooks, pacing, packaging mechanics, production systems, business architecture, company-building. A pattern from this category earns an entry here the same way a competitor pattern does — real evidence, all 10 fields, never assumed to transfer without reasoning through *why*.

**Required fields for every entry (use exactly this list — don't skip a field, mark it "insufficient evidence" if genuinely unknown rather than guessing):**

1. Why it works
2. Emotional trigger
3. Psychological mechanism
4. Cold-audience friendliness
5. Dependence on existing fandom
6. Relationship to the thumbnail
7. Relationship to the hook
8. Browse vs. search intent
9. Comment potential
10. When NOT to use it

Only add an entry once a pattern has real, cited evidence behind it (WAG's own performance data, or a competitive intelligence pass) — this is not a brainstorm of theoretically-plausible patterns.

**Data model (not built — the shape this becomes if it's ever software):** a `Package` object per real title decision, with fields `Title`, `Thumbnail`, `Hook`, `Pattern` (links to an entry in this doc), `Outcome`, `CTR`, `Retention`, `Emotion` (the trigger from field 2 above), `Status` (proposed/live/measured). Relationships: many `Package`s reference one `Pattern`; a `Pattern`'s fields 1–10 above get refined as more `Package`s using it accumulate real outcome data. Owner/updates: whoever ships a real title decision logs the `Package`; this doc's patterns get updated when enough `Package` outcomes exist to confirm or revise a field. No UI/code implied by this — just the shape, per Katie's 2026-08-08 directive.

---

## Pattern: Relationship / dating-status ambiguity

**Evidence base:** Rule-of-3 confirmed 2026-08-08 — WAG's own "Dating Red Flags" (WAG's strongest cited sponsor-page proof point), LOL Podcast (real titles: "They're Just Friends!", "Who Will She Pick?", "Harper Has a Crush On Cash?"), and Rock Pod (real titles: "BEST FRIENDS OR DATING? ❤️", "ARE THEY DATING?? ❤️") all independently converge on this. See `COMPETITIVE_INTELLIGENCE.md` for full sourcing.

1. **Why it works:** the viewer is given an unresolved social question about real people they already have some investment in, and the only way to resolve it is to watch.
2. **Emotional trigger:** curiosity + mild romantic/social investment (rooting for or against an outcome).
3. **Psychological mechanism:** the Zeigarnik effect (unresolved tasks/questions are cognitively "stickier" than resolved ones) combined with parasocial investment in the people involved.
4. **Cold-audience friendliness:** low-to-moderate. The *format* (relationship ambiguity) is universally legible, but the *specific* pull depends on already caring whether these particular people end up together.
5. **Dependence on existing fandom:** high. Both competitor examples name specific cast members in the title itself — this format actively rewards viewers who already know the cast and does little for someone with zero context.
6. **Relationship to the thumbnail:** strongest when the thumbnail shows a real, ambiguous physical closeness or expression (a look, a hand, proximity) that visually poses the same question the title asks — text and image should ask the same question, not restate it.
7. **Relationship to the hook:** works best when the first 30 seconds withholds the direct answer and instead escalates the ambiguity (a tease, a denial that isn't quite convincing) rather than resolving it early.
8. **Browse vs. search intent:** browse-dominant. Nobody searches "are [name] dating" cold for an unknown creator — this format is discovered through recommendation/subscription feeds where the viewer already recognizes the cast, not through search.
9. **Comment potential:** very high — real evidence from Rock Pod shows a single relationship-status storyline sustaining 1,241 real comments on one episode alone, viewers actively speculating and returning to check for updates.
10. **When NOT to use it:** (a) for cold-discovery/growth-stage content aimed at viewers who don't yet know the cast — WAG's own AEO/GEO research has shown broader, discovery-intent phrasing outperforms name-dependent titles for that goal; (b) when there's no real, ongoing ambiguity to sustain — manufacturing a fake will-they-won't-they would break the no-fabrication content standard this project holds to.

---

## Pattern: Secrets / hidden-information reveal

**Evidence base:** Rock Pod ("WHAT REALLY HAPPENED! 🤫", "GIRL TALK GETS REAL 💋"), LOL Podcast ("We Found Her Teacher On Tinder!") — two independent instances, not yet a confirmed Rule-of-3.

1. **Why it works:** promises the viewer access to information that was previously private or hidden — a real information asymmetry the title closes.
2. **Emotional trigger:** curiosity + a mild sense of being let into something exclusive.
3. **Psychological mechanism:** information-gap theory (Loewenstein) — a title that names the existence of a gap without filling it creates a direct, quantifiable itch to close it.
4. **Cold-audience friendliness:** higher than the relationship pattern above — "we found something hidden" doesn't require knowing the cast, just curiosity about the reveal itself.
5. **Dependence on existing fandom:** moderate — LOL Podcast's example still names a specific person's teacher, which needs some context; Rock Pod's phrasing is closer to fandom-independent.
6. **Relationship to the thumbnail:** works best paired with a visual artifact that implies evidence exists (a screenshot, a shocked reaction to something off-camera) rather than a generic expression shot.
7. **Relationship to the hook:** the reveal should not happen in the first 30 seconds — the hook's job is to establish that something real and specific is about to be shown, not to show it yet.
8. **Browse vs. search intent:** primarily browse, with some search crossover for evergreen "secrets/reveal" phrasing if the topic itself has real search demand (untested for WAG specifically — no evidence gathered yet).
9. **Comment potential:** moderate-to-high, driven by disagreement/speculation about the reveal's accuracy or implications.
10. **When NOT to use it:** when the "reveal" is actually thin or exaggerated relative to the setup — this is the pattern most likely to read as clickbait if the payoff doesn't match the promise, which risks trust exactly where WAG's sponsor-facing credibility depends on it.

---

## Pattern: Dare / visible consequence

**Evidence base:** one real instance found so far (LOL Podcast, "Harper's Going To Shave Cash's Head!") — insufficient to generalize confidently; logged as a single data point, not a validated pattern.

1. **Why it works:** names a specific, visible, real-stakes outcome that will either happen or be narrowly avoided on camera.
2. **Emotional trigger:** anticipation + mild secondhand embarrassment/anxiety on behalf of the person at risk.
3. **Psychological mechanism:** outcome-uncertainty with a concrete, visualizable stake (unlike vague "you won't believe" framing, the viewer can picture exactly what's threatened).
4. **Cold-audience friendliness:** insufficient evidence to assess confidently — only one example observed.
5. **Dependence on existing fandom:** likely high (both named people need to be recognizable for the stakes to register), but not confirmed.
6. **Relationship to the thumbnail:** insufficient evidence.
7. **Relationship to the hook:** insufficient evidence.
8. **Browse vs. search intent:** insufficient evidence.
9. **Comment potential:** likely high (viewers taking sides on whether the dare should happen), not confirmed.
10. **When NOT to use it:** flag, don't apply yet — one data point isn't enough to justify building content around this pattern; needs a second independent instance (matching this project's own Rule-of-3/Repeated-Problem discipline used elsewhere) before treating it as validated.

---

*Add a new pattern only when real evidence exists — from WAG's own performance data or a cited competitive intelligence pass. An entry with mostly "insufficient evidence" fields (like the dare/consequence pattern above) is a valid, honest way to flag something worth watching without pretending more is known than actually is.*
