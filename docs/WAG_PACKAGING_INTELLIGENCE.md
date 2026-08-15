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

## Pattern: Hyper-specific constraint + escalating stakes

**Evidence base:** Ryan Trahan (Packaging & Systems Intelligence source, 2026-08-08 research pass) — real, verified titles: "I Survived On $0.01 For 30 Days," "I Survived 50 Hours in Total Darkness," "I Tested 1-Star Restaurants Part 8/12," "I Visited 50 States in 50 Days – Day X." Single-source so far; log a second instance before treating as fully validated.

1. **Why it works:** a hyper-specific number ("$0.01," "50 hours," not "a little money" or "a few days") makes the constraint feel real and verifiable rather than exaggerated — specificity itself is the credibility signal.
2. **Emotional trigger:** curiosity about how someone survives an extreme, precisely-stated limit.
3. **Psychological mechanism:** precision bias — specific numbers read as more truthful/less clickbait-y than round or vague ones, lowering the viewer's skepticism before they even click.
4. **Cold-audience friendliness:** high — no cast knowledge required, the constraint alone carries the hook.
5. **Dependence on existing fandom:** low — this is one of the more fandom-independent patterns logged in this doc so far.
6. **Relationship to the thumbnail:** Ryan Trahan pairs this with one clean visual anchor object (a penny, a timer) and a restrained, non-exaggerated expression — the thumbnail confirms the constraint is real rather than amplifying it into a "shocked face."
7. **Relationship to the hook:** the constraint/rule-set is stated almost immediately (his own documented "Game Plan" opening), not built up to.
8. **Browse vs. search intent:** primarily browse/suggested — the specificity drives clickthrough once seen, not search discovery.
9. **Comment potential:** insufficient evidence gathered this pass.
10. **When NOT to use it:** when the real constraint can't survive being stated precisely — a vague or padded number undercuts the entire mechanism; don't round up or exaggerate a real number to make it sound more extreme, which would also break the content-authenticity rule.

---

## Pattern: Completeness claim + time-box

**Evidence base:** two independent Packaging & Systems Intelligence sources (2026-08-08 research pass) — Airrack ("How Many Days Can I Secretly Live In ___?" run across 7/11, Disneyland, a grocery store, a mall, a waterpark) and FaZe Rug ("I Tested Every Store Open AFTER Midnight," "I Ate the Spiciest Food from EVERY Country in the World!," "Letting TikTok Decide My Diet For 24 Hours!"). Two independent instances — one short of this doc's own Rule-of-3, logged as strong-but-not-fully-validated.

1. **Why it works:** "EVERY" or "how many days" makes an implicit promise of exhaustiveness or an escalating countdown — the viewer wants to see if the claim actually holds up.
2. **Emotional trigger:** curiosity about a completeness/endurance claim, plus mild suspense as a time-box or day-count advances toward failure/discovery.
3. **Psychological mechanism:** the same completeness-claim device WAG's own SEO/GEO audit found real evidence for in written content ("EVERY," "WORST") — this pattern is the video-title version of a mechanism already validated in a different medium, worth noting as cross-format confirmation.
4. **Cold-audience friendliness:** high — same as the constraint pattern above, no cast knowledge required.
5. **Dependence on existing fandom:** low.
6. **Relationship to the thumbnail:** lower confidence — secondary sources describe "face + big text + high contrast" for both creators but this wasn't independently pixel-verified this pass.
7. **Relationship to the hook:** the format is a swappable container (same rule, new location/category each time) — the hook's job is establishing the container fast, since the audience that already knows the format from a prior episode doesn't need it re-explained.
8. **Browse vs. search intent:** insufficient evidence gathered this pass for search; likely browse-dominant given the completeness-claim framing skews toward curiosity-driven discovery.
9. **Comment potential:** insufficient evidence gathered this pass.
10. **When NOT to use it — CORRECTED and sharpened 2026-08-09, this is no longer a minor caveat:** a real Studio pull found WAG's own "EVERY" titles split into two groups with a **250x real view gap** using the identical device — "I Ate at EVERY WORST Rated Restaurant In a New City!" (454,560 views) and "I Ate EVERY Viral TikTok Food In a New City!" (374,459 views) vs. "I Tested EVERY Viral TikTok Product I Could Buy!" (1,732 views) and "Trying EVERY Viral TikTok Product On the Internet!" (1,693 views). **The device is necessary but not sufficient — topic-level real demand is the actual variable separating the winners from the losers.** Before using this pattern, independently verify the underlying topic has real search/interest demand (a real, observed vidIQ keyword-score check found the two weak videos scored 25/100 "Very low volume" vs. 50/100 for a real strong performer in a different pattern) — don't assume the device transfers just because it worked once on a different topic.

**CORRECTED, 2026-08-09 — the prior "real WAG fit already in place" claim below overstated the evidence and should not be treated as settled.** The specific video previously cited by name here as proof, "Trying EVERY Viral TikTok Product On the Internet!," is actually one of the channel's weakest recent uploads (1,693 views) — not confirming evidence. The real, corrected finding: WAG's food/restaurant "EVERY" titles are genuine, strong prior art; its product-testing "EVERY" titles are genuine, weak counter-examples using the identical device. This is a real, valuable finding in its own right (topic matters more than title mechanics), but it is not the uniform "confirm-and-extend" story previously written here. See `WAG_PATTERN_LIBRARY.md`'s corrected Completeness Claim pattern for the full real evidence.

---

## Derral Eves Growth Methodology (2026-08-10)

**Why he's worth citing, not generic-advice-worthy:** founder of Creatus (1999) and VidSummit (2013), one of YouTube's own certified "Audience Growth" consultants, author of the WSJ-bestselling *The YouTube Formula* (foreword by MrBeast). Real, named track record: ~27 channels taken from zero to 1M+ subscribers, credited with growing The Piano Guys to 1.8M+ subscribers. Sources: Wikipedia, his 2026 VidSummit keynote announcement, a Feb 2026 "How to Grow on YouTube in 2026" interview (recapped by Balasabas on Substack), and a Neal Schaffer podcast interview containing the most granular case-study material found.

**How he diagnoses a stalled channel:** not generic content advice — his stated 2026 position is that channels stall from a lack of *clarity* (who it's for, what promise is being made), not content quality. His real, named case study (Neal Schaffer interview): an entrepreneur stuck at ~2,000 subscribers for years had an authenticity/delivery gap, not a content or SEO problem — he seemed like a different person on camera than on stage. Eves' first intervention was **environmental, not topical**: real-time audience feedback (live Zoom audience or livestreaming) before touching content topics at all. Reported result: 2,000 to 100,000+ subscribers in under 30 days, ~22-minute average watch time. (The specific creator's name wasn't recoverable from accessible sources — flagged as a real but partly unverified case study, not fabricated.)

**His content-pillar framework — Hero / Hub / Help** (originally a Google/YouTube framework from 2014, which he builds on):
- **Hero** — big tentpole, high-production spikes built for reach and new-audience discovery.
- **Hub** — regular, scheduled content that builds a loyal, returning subscriber base.
- **Help** — evergreen, search-driven content answering specific audience questions.

**How this maps onto WAG's own real catalog, honestly, not forced:** WAG doesn't yet have a deliberate Hero/Hub/Help split — the real catalog (`WAG_CREATIVE_FORMULA_V1.md`'s 4 evidence-backed types) currently runs almost entirely as Hub-style regular content. The Legend/Overnight Investigation subtype (Haunted Hotel, Goatman's Forest — WAG's own real highest-effort, highest-payoff productions) is the closest thing to a real Hero candidate already in the catalog. No real Help-style evergreen/answer content has been deliberately built yet — flagged as a real, open gap rather than assumed to exist.

**His diagnostic loop, stated across sources:** Try → Fail → Analyze → Adjust — publish, expect early misses, read the actual analytics, adjust. His VidSummit 2026 framing of the same idea: "What is one small tweak that could create a big peak?" — one informed change at a time, measured, fed into the next decision. This is the same discipline `WAG_ALGORITHM_DIAGNOSTIC.md`'s ranked, Studio-pull-per-hypothesis structure already follows — real convergence, not a coincidence worth ignoring.

**Packaging note carried directly from his methodology:** thumbnails need to pass a fast "blink" legibility test (strong contrast, a small set of repeatable templates — face-and-object, face-and-face, three-panel); a title's promise has to be delivered on exactly, or the drop-off in the first ~30 seconds is a direct signal of over-promising. WAG's own flopped "EVERY Viral Product" videos are a live, real example of this — the title's completeness promise wasn't matched by a strong enough delivered payoff (see `WAG_CREATIVE_FORMULA_V1.md`'s Category Sweep Completionism finding).

## Title Formula Library (competitor-sourced, 2026-08-10)

Real, named templates drawn from WAG's own top performers plus the real competitor/aspirational channels evaluated in `WAG_MAIN_COMPETITIVE_LANDSCAPE.md` — not generic title advice.

| Template | Source evidence | WAG application |
|---|---|---|
| "I/We [verb] EVERY [category] In [city]!" | WAG's own #1 & #3 post-pivot performers; SIS vs BRO ("We Tried EVERY Fast Food in 24 hours") | "I Tried EVERY Food Truck At [Local Event]!" |
| "[Duration] In America's/[City]'s Most [Superlative] [Place]!" | WAG's own #2 post-pivot performer (Haunted Hotel) | "48 Hours In [City]'s Most Abandoned Mall!" |
| "[Duration] [verb]ing ONLY [category]" | SIS vs BRO ("24 HOURS Eating ONLY...") | "24 Hours Eating ONLY Gas Station Food" |
| "$[Amount] [Challenge Name]" / "[Duration] [Extreme Constraint]" | Norris Nuts ("$1000 FASHION MAKEOVER," "24hrs HANDCUFFED") | "$500 Thrift Flip Challenge — Winner Picks Dinner" |
| Declarative supernatural/legend claim + location name | Sam and Colby | "The Ghost of [Local Landmark] Is Real — We Proved It" |
| "We Tested [category]" claim-first framing | SIS vs BRO ("We Tested 1-Star Hotels") | "We Tested Every 1-Star Rated Nail Salon In [City]" |

**Standing rule this table doesn't override:** every template above is a container, still subject to `WAG_CREATIVE_FORMULA_V1.md`'s corrected packaging rule — declarative/quantified is the default, but a real, unresolved question is the right call when the actual hook is ambiguity, not a claim to test.

## Real use, round 1 (2026-08-08)

The 10 real candidate ideas scored through `WAG_VIDEO_GREENLIGHT.md` drew on 5 distinct title frameworks (see the full formula library in `WAG_CREATOR_PLAYBOOK.md` section 6): the completeness-claim pattern above (3 ideas), the hyper-specific constraint pattern above (2 ideas), a new "We Let ___ Decide" framework (1 idea, FaZe Rug-sourced, not yet its own full 10-field entry — needs a second independent instance before promoting it here), the real-relationship-reveal mechanic from `WAG_STORYTELLING_SYSTEM.md` (1 idea), and WAG's own already-proven Guys Answer Questions franchise naming (1 idea). The one idea using no real framework at all — just a premise with no packaging device behind it — was also the round's lowest-scoring idea (4/14), a small but real signal that a title framework and a real container tend to travel together.

---

*Add a new pattern only when real evidence exists — from WAG's own performance data or a cited competitive intelligence pass. An entry with mostly "insufficient evidence" fields (like the dare/consequence pattern above) is a valid, honest way to flag something worth watching without pretending more is known than actually is.*
