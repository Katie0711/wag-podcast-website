# WAG Main Greenlight Package -- Restaurant Reputation Test (Format-First Rebuild)

**Status:** DRAFT -- for the girls' final creative review, per Katie's explicit instruction not to greenlight on views alone.
**Date built:** 2026-08-16
**Built from:** WAG Brain (Supabase `wag-brain`, project `qccfbbgaszciqxfryehs`), `WAG_TITLE_PATTERN_SYSTEM.md`, `WAG_FORMAT_LIBRARY.md`, `WAG_PATTERN_LIBRARY.md`, `WAG_CREATOR_PLATFORM_INTELLIGENCE_PROOF_0.md` / `_1.md`.
**Explicit constraint this document is built to satisfy:** Katie's instruction was not to re-propose the old title because it hit ~460K views -- the format had to be diagnosed first, and the concept built around *that*, not around nostalgia for a number.

---

## 0. A flag before anything else -- what was already sitting in the database

Two real rows already exist in WAG Brain that this package deliberately does **not** carry forward, and Katie should know they're there:

- `video_ideas.id = 1` -- **"I Ate EVERY Item on the Menu at [WAG's Own Worst-Rated Restaurant]!"** -- status `greenlit`, evidence summary literally reads *"Lowest-inference bet in the whole slate"* because it repeats the original's exact chassis at the exact same location.
- `video_predictions` rows 1-7 (predicted_by `claude`, timestamped **2026-08-16 20:30:52** -- same day as this package) already lock in the naive-sequel framing end to end: *"Views land 250K-500K... Direct sequel to WAG's #1 post-pivot Suggested-driven winner... predict this repeats in the same range as the original."*

This is the exact anti-pattern this task exists to override -- a sequel proposed because of the view count, with the format decision backed into afterward. It's real data already in the system, not hypothetical risk. This package supersedes it; it does not extend it. **Recommendation: mark `video_ideas.id=1` `status='superseded'` (not filmed) once this package is reviewed**, rather than leaving two contradictory greenlit records live. Not done here -- no DB writes were made for this package, per instruction.

---

## 1. Real diagnosis -- what actually made the original work

**The video:** *"I Ate at EVERY WORST Rated Restaurant In a New City!"* -- published 2026-04-12, 42:44 runtime.

**Real numbers (two independent internal pulls, both real, minor variance between them -- using the more recent DB figure as of record):**
- **460,900 views** (`video_ideas.id=1.evidence_summary`, `formats.id=6` real_examples -- the more recently computed WAG Brain figure)
- **454,560 views** (`WAG_PATTERN_LIBRARY.md`'s independently-cited real Studio pull, 2026-08-09)
- Both predate this database's automated sync window (`yt_videos` only covers 2026-06-21 onward) -- the underlying Studio Reach/retention numbers below are preserved in WAG's docs as real prior pulls, not in a structured `yt_raw_observations` row, and should be re-pulled fresh from Studio before locking any final prediction.

**Traffic engine -- real and decisive: this was a Suggested/Browse win, not a Search win.**
**75.9% of traffic came from Suggested (related-video/Browse-features).** That's the number that answers Katie's question directly. For comparison, WAG's other proven chassis (the Verification/Investigation format, Haunted Hotel) pulled closer to an even Search/Suggested mix -- Chupacabra prediction reasoning cites Hotel at **46.5% Search**. The restaurant video is comparatively far more algorithm-driven: nobody searches for a specific unnamed "worst rated restaurant," the packaging itself (title + thumbnail) had to win the click cold, off the strength of the premise alone.

**What actually made it work, read from the real chapter structure and the real evidence tiers in WAG Brain (not assumed):**
1. **A real, findable negative reputation claim, stated as the premise almost immediately** (0:00-0:45 mission stated) -- this is `formats.id=6`, **Testing/Review (Reputation Verification Test)**, tagged `STRONG_EVIDENCE`, `source_count=3`.
2. **Stacked with a completion/checklist device** (four restaurants, "EVERY item") -- `formats.id=3`, **Completion ("Every X")**, also `STRONG_EVIDENCE`.
3. **A genuine, unforced reversal at the end** -- the fourth stop broke the pattern and turned out good, landing on a real verdict instead of confirming the premise. This is the honest-resolution discipline the Title Pattern System calls "truthful story > manufactured stakes," present here before that document even existed.
4. **An open-mouthed, genuinely alarmed thumbnail expression** -- real, direct counter-evidence in WAG's own catalog to the "always use a restrained/closed-mouth thumbnail" import from MrBeast; WAG's own best-performing recent asset uses the opposite.

**The one finding that should drive the format decision, and doesn't get said enough:** Completion **alone** is not a reliable WAG format. The *same* "EVERY X" device, run on a topic with no real reputation/verification hook (two "EVERY Viral TikTok Product" videos), returned **~1,700 views each** -- a **250x-270x gap** on the identical device. Testing/Review, by contrast, has **zero recorded WAG failures** in this dataset -- every real WAG and cross-creator example of it (Trahan x2, WAG x1) won. That makes Testing/Review the primary engine and Completion a secondary, situational amplifier -- not the other way around, which is how the original naive-sequel idea (`format_id=3` only, no `format_id=6` tag) was actually filed in the database.

---

## 2. Real format/competitive research -- the winning format

**Primary format: `formats.id=6`, Testing/Review (Reputation Verification Test).** `STRONG_EVIDENCE`, 3 independent real examples:

| Creator | Title | Real views |
|---|---|---|
| Ryan Trahan | "I Tested 1-Star Restaurants" | 35.5M |
| Ryan Trahan | "I Tested 1-Star Hotels (again)" | 45M |
| WAG (own) | "I Ate at EVERY WORST Rated Restaurant In a New City!" | 460.9K |

**The five-part transferable skeleton, evidenced across all three:** (1) a real, findable negative review is the premise, stated almost immediately; (2) an explicit rule is announced up front; (3) the actual review text is quoted on camera before testing; (4) each stop tests one specific named complaint, not a vague "let's see"; (5) the video ends on a real verdict -- and the strongest examples (Trahan's dangerous-property escalation, WAG's own fourth-stop reversal) deliberately break the pattern with an honest surprise rather than confirming the premise mechanically.

**Secondary, amplifying device: `formats.id=3`, Completion ("Every X").** Only legitimate stacked on top of a real verification claim -- WAG's own data is the direct proof (460.9K/374K when stacked on a real claim vs. 1.7K when bare). A visible checklist/clock is what makes the completion claim read as escalation rather than a flat activity description.

**What's being borrowed at the format level, named explicitly (never content, never execution):**
- **Ryan Trahan** -- the *rule announced up front, real complaint quoted on camera before testing, honest verdict at the end* skeleton. Not his exact rule ("leave a 5-star review at every stop") -- that would require WAG to hand out reviews it doesn't honestly believe, which conflicts with WAG's own no-fabrication standard. WAG's adapted rule below is the honest version of the same mechanic.
- **MrBeast** -- the *Game Plan / Mission Statement, Stated Fast* pattern (VERIFIED, cross-creator, zero real counter-evidence in the library) and the *withheld-resolution fragment-caption* device for the cold open.
- **Nick DiGiovanni** -- the *visible checklist as the thumbnail's proof-of-scope* device (flag-row-as-checklist, adapted here as a real ratings-checklist).
- **WAG's own prior self** -- the *honest reversal ending* (the fourth-stop twist), which is real WAG prior art, not an import.

**What's explicitly rejected and why:** Format 4 (Competition/Head-to-Head) and Format 7 (Surprise Transformation) don't fit a restaurant premise. Escalation via manufactured danger or "survival" framing (Format Library's own anti-pattern list, reinforced by the Title Pattern System's Disney Day 2 case study) is rejected unless real food-safety complaints in the actual reviews justify it -- that has to be verified against real review text before filming, not assumed now.

---

## 3. The concept -- built from the format, not from the old title

### Title Pattern System discipline, applied explicitly

**Actual video story, one sentence:** Three real Texas restaurants currently sitting at the worst real Google ratings within a stated radius get tested worst-review-claim by worst-review-claim, in ascending real severity, to find out whether the internet's harshest reviews are actually true.

**Strongest story mechanism, one sentence:** Reputation Verification Test (`formats.id=6`, `STRONG_EVIDENCE`, zero internal WAG failures) stacked with a real, pre-production-designed Completion+Constraint escalation (ascending 1-star severity across a bounded metro radius) -- not a menu-completion sequel to one location.

**Every-bucket test, run honestly:**
- **Completion** -- legitimate: a real, bounded local category (restaurants at the real lowest Google rating tier within a stated radius), checkable before and after filming.
- **Completion + Constraint** -- legitimate: the real constraint is the bounded radius (WAG's Texas-based, no-travel production reality), not an invented one.
- **Attempt > Revealed Success** -- legitimate: "We tried" / "we tested" preserves real uncertainty about whether the ratings hold up.
- **Escalation** -- legitimate *here specifically* because this is pre-production, not existing footage being retrofitted: visiting restaurants in real ascending severity order (worst review count/rating last) is a decision made *before* filming from real, checkable data, not a story invented after the shoot. This is the exact case the Title Pattern System carves out as legitimate.
- **Question/Outcome** -- legitimate: genuine, unresolved uncertainty (does the worst rating mean the worst experience), with WAG's own real prior-art precedent (the original's honest fourth-stop reversal) proving this uncertainty is authentic to the brand, not a marketing pose.
- **Survival** -- **rejected for now.** Food that's merely bad-rated isn't automatically survival-stakes; the Title Pattern System explicitly flags forced survival framing ("Surviving Disney") as an anti-pattern. Only revisit this bucket if the real, specific complaints (once pulled) genuinely describe a food-safety/illness risk, not before.
- **Secret/Information Asymmetry, Something Is Wrong, One Is Different, Levels, Discovery** -- none genuinely fit a reputation-verification premise; not forced.

**A-story / B-story guardrail check:** For this specific format, the verification-test mechanic (real claim, real complaint quoted, real test, real verdict) legitimately **is** the A-story -- it structures the entire shoot and the entire runtime, unlike Disney Day 2 where a competition thread was layered under a broader day-in-the-life trip. The girls' real personalities and unscripted reactions are the *delivery mechanism* of that A-story (per the cross-validated "Real Relationships Generate Conflict, Never Scripted Plot" pattern -- Jordan Matter and MrBeast independently converge on planning the structure, never the words), not a competing narrative fighting for the title slot. No B-story-mistaken-for-A-story risk here, and that reasoning is stated explicitly per the system's output discipline, not assumed.

### #1 -- Best title
**"We Ate At Texas' 3 WORST-Rated Restaurants (Worst One Last)"**
*(placeholder region -- swap in WAG's real home metro once locked; keep the one-capitalized-word discipline -- WORST is the single load-bearing word, cross-confirmed in both Airrack's and FaZe Rug's real title corpora.)*

### #2 -- Challenger (genuinely different psychological approach: pure curiosity gap, not a checklist)
**"We Found Texas' Worst-Reviewed Restaurant... Is It Actually That Bad?"**
Trades the visible-escalation/checklist promise for a single open question -- closer to the Question/Outcome mechanism than Completion+Constraint. Weaker cold-thumbnail scale signal, stronger single-sentence curiosity.

### #3 -- Wild card (experimental but defensible)
**"We Only Ordered What the 1-Star Reviews Warned Us About"**
Reframes the dare around specificity of the order, not scale of the visit -- a genuinely different curiosity mechanism (the dare is "eat exactly the thing under fire," not "eat everything"). Riskier because it's less immediately parseable at a glance than #1, but it's the most differentiated from every prior WAG restaurant title.

**Keep/change call: CHANGE.** Reject `video_ideas.id=1` as filed -- a same-chassis, same-location, same-title-formula sequel chosen because of the view count, which is the literal anti-pattern this package was commissioned to avoid, and which the idea's own logged failure condition ("audiences read it as a rerun and CTR craters") already predicts. Recommend **#1** as the primary title: it's the only option that stacks WAG's cleanest, zero-internal-failure format (Testing/Review) with a legitimately pre-production-designed escalation, on the traffic engine (Suggested/Browse) that's real, decisive, evidenced at 75.9% on the original.

---

### Full concept

**Exact concept:** Three real restaurants -- the worst-rated by real, current Google rating within a stated radius of WAG's home base, each with enough real review volume to rule out a single troll review -- get visited in one real production day, worst-rating last. At each stop, the girls read a specific real 1-star complaint out loud on camera before ordering, then order and eat the exact dish or experience item that complaint describes, and deliver an honest, specific verdict on that exact complaint -- not a blanket judgment of the whole restaurant.

**Rules:**
1. The mission is stated in the first 5-10 seconds, on camera, no logo/intro delay (VERIFIED cross-creator pattern, zero real counter-evidence).
2. Real, current (not stale) 1-star reviews only, with a minimum real review-count threshold, verified before filming -- not a single outlier complaint.
3. The actual review text is quoted on camera, in full, before anything is ordered.
4. The girls order and try the *specific* item/experience the review complains about -- not a random menu item.
5. Each stop gets its own honest, specific verdict on that complaint, delivered before moving to the next stop.
6. Visits happen in real ascending severity order (least-controversial 1-star first, most-complained-about last) -- a real pre-production decision, not a retrofit.
7. **WAG's honesty-safe adaptation of Trahan's "leave a 5-star review" device:** the girls leave a real, honest, specific review after each stop -- not a guaranteed 5 stars. This preserves the format-level mechanic (a real, checkable action taken at each location) without WAG fabricating positivity it doesn't feel, which Trahan's literal rule would require.
8. The ending is allowed to genuinely surprise -- if the "worst" stop isn't actually the worst experience, that's the real ending, not a scripted one.

**Stakes (real, not manufactured):** Reputational fairness to real small businesses -- WAG's review pool is one metro area its own audience recognizes, unlike a placeless national creator (Format 6's own named real risk). Personal stakes: genuine food-safety/appetite discomfort at real low-rated establishments, and a real time constraint to complete all three stops in one production day. No fabricated danger, no invented competition.

**Progression/escalation:** Legitimate here specifically because it's a pre-production design decision built from real, checkable data (ascending real rating/complaint severity) -- not an escalation invented from existing footage after the fact, which the Title Pattern System explicitly flags as the highest-risk pattern for false fit. If real filming contradicts the planned order (stop 2 turns out worse than stop 3), the video reports what actually happened, not the originally planned sequence -- truthful story over manufactured stakes, non-negotiable.

**Opening 30 seconds, beat by beat:**
- **0:00** -- Cold open, no logo, no intro sequence. Mid-action: one girl already at a real restaurant table, reading a real 1-star review aloud to the others.
- **0:05** -- Real caption fragment cuts the quoted review mid-sentence, at its most damning word (MrBeast's withheld-resolution fragment-caption device, applied to a real quote instead of narration).
- **0:08-0:15** -- Quick, direct-to-camera rule statement: the real constraint, stated once, no hedging ("Today we're eating at the three worst-rated restaurants in [Metro], worst one last -- and we're not leaving any of them until we've tried the exact thing the reviews complain about").
- **0:15-0:25** -- Fast establishing montage: a real Google Maps screen-capture zooming into three real pins with their real star ratings, building the checklist visually (the Nick DiGiovanni flag-row device, adapted to a ratings checklist).
- **0:25-0:30** -- Cut to the girls in the car, genuine unscripted nervous-excited banter, first stop's real rating flashed on screen as the video title/chapter card lands.

**Thumbnail concept:** One Clean Anchor (per WAG's own evidenced counter to the "always restrained expression" import -- WAG's real best-performing recent asset uses an open-mouthed, genuinely alarmed reaction, not a restrained one) -- one girl's real, unrestrained reaction shot as the focal point, paired with a real, legible "1.0 *" rating badge as the second anchor object. Title and thumbnail carry different information per the division-of-labor rule: the title states the mission/scale/order; the thumbnail shows the emotional stakes and the real number driving the premise.

**Ending/payoff:** All three honest, specific verdicts delivered back to back, closing on whichever stop most surprised the girls and why -- with an explicit, non-forced acknowledgment if the "worst" rated stop wasn't actually the worst experience. No manufactured bow; the original's own real fourth-stop reversal is direct WAG prior art that this kind of honest, non-predictable ending is what the audience responds to, not what undermines the premise.

**Why a cold viewer clicks:** The premise is stated completely in the packaging alone -- real number, real stakes, real scale -- and needs zero prior WAG knowledge to be legible, matching the original's real 75.9% Suggested/cold-audience traffic mix.

**Why a WAG fan stays:** The girls' real, unscripted dynamic (who's brave enough to order first, who's most dramatic about a bad bite, who calls it too harsh) carries every beat of the investigation -- same mechanism the cross-validated Jordan Matter/MrBeast finding describes: plan the structure, never the reactions.

**How the girls' personalities stay central, not just the food gimmick:** The verification structure is the container, not the content -- every beat (reading the review, ordering the dish, delivering the verdict) is an unscripted moment for real reaction, banter, and disagreement between the three of them. The rule set exists specifically to generate real moments, not to replace them with a game mechanic the way a scored competition would.

**How WAG makes it original (not a copy):** Trahan operates nationally and never revisits a market; WAG's version is deliberately local and real-stakes-aware about that (rule 3 above, and the fairness framing in Stakes). The honesty-safe review rule (leaving a real review instead of a guaranteed 5-star one) is a genuine WAG-specific adaptation, not an import. The honest-reversal ending is WAG's own real prior art, not borrowed from anyone.

---

## 4. Evidence supporting the format choice (summary)

| Claim | Real evidence | Source |
|---|---|---|
| Testing/Review is WAG's only zero-internal-failure format in this vertical | 3/3 real examples won (Trahan x2, WAG x1); no counter-example in the dataset | `formats.id=6` |
| Completion alone is unreliable without a verification hook | 460.9K/374K (verification-anchored) vs. 1.7K x2 (bare completion) -- 250x+ gap, same device, same channel | `formats.id=3`, `WAG_PATTERN_LIBRARY.md` |
| The original was a Suggested/Browse win, not Search | 75.9% Suggested traffic, real Studio pull | `video_ideas.id=1.evidence_summary` |
| Pre-production escalation is legitimate; retrofitted escalation is not | Explicit rule, Disney Day 2 case study | `WAG_TITLE_PATTERN_SYSTEM.md` |
| Restrained-expression thumbnail rule doesn't hold for WAG's food/reaction content | WAG's own top performer uses an open-mouthed, unrestrained expression | `WAG_PATTERN_LIBRARY.md` |
| Current channel baseline is far below the original's peak -- don't assume automatic repeat | Real long-form baseline: median 12,011 views, max 59,702, n=9 (channel_id=1, computed 2026-08-16) | `yt_channel_baselines` |

---

## 5. Seven locked predictions

Structured to match `video_predictions` (capability / prediction / reasoning / confidence / metric_tested / evaluation_window). **Not inserted into the database -- returned here for review only, per instruction.**

### 1. `audience`
- **Prediction:** Views land in a real, modest 40K-150K range at day 28 -- well below the original's 460.9K peak, in line with the channel's current real long-form baseline (median 12K, max 59.7K), not a repeat of a four-month-old outlier.
- **Reasoning:** The channel's real, current baseline (`yt_channel_baselines`, computed 2026-08-16) is far below the original's peak; treating a new video as an automatic repeat of a historical outlier is the exact rank/absolute-performance confusion `canonical_facts.rank_movement_is_not_absolute_performance` was built to prevent.
- **Confidence:** medium
- **Metric tested:** Total views at day 28 vs. current channel long-form baseline (median/max)
- **Evaluation window:** 28 days post-publish

### 2. `concept_greenlight`
- **Prediction:** The three-restaurant, ascending-severity structure reads as a genuine format upgrade, not a rerun, specifically because it changes the container (single-location menu-completion -> multi-location escalating verification) rather than just swapping the location.
- **Reasoning:** `video_ideas.id=1`'s own logged failure condition explicitly names "audiences read it as a rerun and CTR craters" as the risk of a same-chassis sequel; this concept is structurally different, not cosmetically different.
- **Confidence:** medium
- **Metric tested:** Comment sentiment sample (recognition/"new format" language vs. "same as before") + like:view ratio vs. the original
- **Evaluation window:** 7 days post-publish

### 3. `marketing_positioning`
- **Prediction:** Framing around the real escalation ("worst one last") outperforms framing around a single location, because it gives the packaging a visible checklist/scale signal the original single-restaurant version didn't have.
- **Reasoning:** Format 3's own transferable pattern requires "the thumbnail visually shows the scope as a checklist" -- untested on WAG's restaurant vertical specifically until now.
- **Confidence:** medium
- **Metric tested:** Suggested-traffic share vs. the original's 75.9% (proxy for whether cold, non-fan viewers respond to the escalation framing)
- **Evaluation window:** 14 days post-publish

### 4. `title`
- **Prediction:** Title #1 ("We Ate At Texas' 3 WORST-Rated Restaurants (Worst One Last)") out-CTRs both challenger titles, because it's the only one that states scale, order, and stakes in one line.
- **Reasoning:** Matches the STRONG_EVIDENCE Completeness Claim + one-capitalized-word disciplines simultaneously; #2 and #3 each sacrifice one of those signals for a cleaner curiosity gap.
- **Confidence:** medium
- **Metric tested:** Impressions CTR by traffic source (Studio Reach tab), benchmarked against the channel's real 1.7% Browse-features CTR average
- **Evaluation window:** First 7 days

### 5. `thumbnail`
- **Prediction:** An unrestrained, genuine reaction shot (open-mouthed, real alarm) paired with a legible "1.0 *" badge out-CTRs a composed/staged-reaction alternative.
- **Reasoning:** Direct, real counter-evidence already exists in WAG's own catalog to the imported "always restrained" rule; the channel's real best performer used the opposite expression.
- **Confidence:** medium
- **Metric tested:** CTR by traffic source (Reach tab), same 1.7% Browse-features benchmark
- **Evaluation window:** First 7 days

### 6. `hook_retention`
- **Prediction:** A stakes-first cold open (real review quoted within 5 seconds, rule stated by 0:15, no wandering intro) meets or beats a 55-60% 0:30 retention mark.
- **Reasoning:** The original's own real 0:30 retention was cited internally as only "typical," not exceptional -- real headroom exists if the cold open front-loads the claim instead of easing into it. This figure is carried from WAG's prior internal Studio pull, not from a structured `yt_raw_observations` row in this database (the original predates the sync window) -- **re-verify against fresh Studio data before treating this as a hard baseline.**
- **Confidence:** low-medium (baseline figure not independently re-verified this pass)
- **Metric tested:** audienceWatchRatio at 0:30 and ~2% elapsedVideoTimeRatio
- **Evaluation window:** 48-72 hrs, confirmed at 7 days

### 7. `distribution`
- **Prediction:** Suggested/Related-video traffic share lands at 55-70% -- real and dominant, but likely somewhat below the original's 75.9%, because the multi-location structure gives the video a small amount of genuine, real local-search surface area ("[town] worst restaurants") the single-location original didn't have.
- **Reasoning:** Same underlying format (Testing/Review) and engine bet as the original, but the escalation/checklist device adds a real, if modest, Search-adjacent hook -- a genuinely different distribution profile, not an assumed identical repeat.
- **Confidence:** medium
- **Metric tested:** insightTrafficSourceType breakdown (RELATED_VIDEO % vs. SEARCH % vs. YT_CHANNEL %)
- **Evaluation window:** 14-28 days post-publish

---

## 6. What could cause this to fail (real, specific)

1. **Local blowback.** WAG's review pool is one metro area its own audience recognizes and can respond to directly -- unlike Trahan's placeless national version. A stop that reads as mean-spirited toward an identifiable small business carries real reputational risk. Mitigation: the "test the specific complaint, not the whole business" rule (rule 4) exists specifically to keep this fair and falsifiable rather than a pile-on.
2. **The real ratings don't hold up by shoot day.** A 1-star restaurant can change ownership, fix the exact complaint, or simply not be as bad as an old review claims -- ratings must be re-verified close to the shoot date, not assumed from a stale pull. This is also the honest mechanism that makes a genuine reversal ending possible, not just a risk.
3. **Real review volume in the metro area doesn't support three genuinely distinct, low-troll-risk stops.** If the area doesn't have three real, separately-earned 1-star ratings (not one troll review each), the "worst-rated" claim breaks and shouldn't be forced.
4. **Escalation order breaks against real filming.** If stop 2 turns out worse than stop 3 in practice, the video has to report what actually happened, not the pre-planned order -- protects truthfulness but complicates the pre-cut structure and thumbnail promise if not planned for.
5. **Food-safety/liability risk.** Actually eating at real low-rated establishments carries genuine foodborne-illness risk, distinct from and more real than any "survival" title framing (which this package deliberately rejects) -- needs real safety planning (backup meals, a stated bail-out point) independent of the on-camera premise.
6. **Repeat-formula fatigue at the mechanism level, even with a different concept.** This is WAG's third real trip through the worst-rated/verification well (Hotel, the original Restaurant, now this). The concept and container are genuinely different, but if WAG runs this exact chassis again soon after, the format itself -- not just this title -- risks reading as a rut. Worth spacing on the calendar, per the same logic already flagged in `WAG_VIDEO_GREENLIGHT.md`'s Round 1 log for a near-identical case.
7. **Channel-baseline mismatch with expectations.** The channel's real current long-form baseline (median 12K views) is far below the original's 460.9K peak. If the girls or Katie go in expecting a repeat of the historical number, a real, solid result in the 40-150K range could get misread as underperformance rather than the successful format test it would actually be.
