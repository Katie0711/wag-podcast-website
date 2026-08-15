# WAG Main: 3 Greenlit Uploads (2026-08-10)

**This is a generated view of WAG Brain, not the source of truth.** The real record lives in Supabase (`wag-brain` project, `video_ideas` / `greenlight_decisions` / `predictions` / `outcomes` tables). This document exists so the decision is readable without a database client — update it by re-querying `video_idea_status`, don't hand-edit it out of sync with the database.

Selected specifically to test three different open questions, per Katie's 2026-08-10 directive — not the three "best" ideas in isolation, three ideas chosen to produce real, different learning.

---

## 1. "I Ate EVERY Item on the Menu at [WAG's Own Worst-Rated Restaurant]!"

**Tests: REPEATABILITY** — does WAG's proven reputation/restaurant success repeat on a direct sequel, or was it a one-off?

- **Gate 0:** Path A (Formula fit) — PASS on all 4 questions.
- **Score: 13/14 — GREENLIT.** recommendable 2, title bucket 2, brand fit 2, curiosity 1, retention opening 2, franchise 2, Suggested-fit 2.
- **Why:** Direct sequel to WAG's own real, Studio-confirmed #1 post-pivot performer (460.9K views, 75.9% Suggested traffic). Lowest-inference bet available. The one docked point (curiosity) reflects real sequel-fatigue risk, not a flaw in the format.
- **Prediction (written 2026-08-10, before filming):** Betting on **Suggested/Browse**. Predicts a repeat in the 300K–500K range with Suggested as the dominant traffic source.
- **Fails if:** audiences read it as a rerun and CTR craters vs. the original; Suggested share drops well below 75.9%; or the new restaurant's bad-review angle reads too similar to the original.
- **Outcome:** pending — record real Studio numbers here once published.

## 2. "We Only Ate 1-Star Texas Restaurants For 7 Days Straight"

**Tests: TRANSFERABILITY** — does a proven commitment/constraint mechanism (Trahan/MrBeast-evidenced) transfer onto a WAG-proven topic?

- **Gate 0:** Path A (Formula fit) — PASS, explicitly via the Real-Stakes Commitment *hypothesis* lane, which Gate 0 allows without requiring it to be proven first.
- **Score: 11/14 — GREENLIT.** recommendable 1, title bucket 2, brand fit 2, curiosity 2, retention opening 1, franchise 2, Suggested-fit 1.
- **Why:** This is the deliberate pilot for WAG's second, still-unproven lane. Topic half (worst-rated restaurants) is proven; mechanism half (sustained multi-day Commitment) is proven only by other creators, never by WAG. Score is honestly lower than #1 — not inflated to make a pilot look safer than it is.
- **Prediction (written 2026-08-10, before filming):** Betting on **both engines**. Predicts real traffic from both Search (topic-driven) and Suggested (packaging-driven) — genuinely uncertain which dominates.
- **Fails if:** WAG can't deliver 7 real consecutive days without visible production gaps; viewership drops off sharply after Day 1-2; or the planned escalation beats (Day 3 twist, Day 4 midpoint, Day 7 finale) don't land.
- **Outcome:** pending.

## 3. "IRL Hide & Seek, Vol. 1: No Talking Allowed"

**Tests: VIABILITY** — can a repeatable game-rule/one-variable franchise (same base game, one new stated twist per volume) work as WAG's own franchise, not just a one-off?

- **Gate 0:** **Path B (Breakout)** — this doesn't fit either named Formula v1 lane, and was correctly *not* forced into Path A. Passes all 3 Breakout requirements: (1) real specific mechanism — one-variable-swap franchise chassis, strongly evidenced cross-creator (Shiloh & Bros, 98M/80M views, 29+ real episodes); (2) honest unevidenced gap named — WAG's downscaled 3-5 person version is untested, franchise-recognition benefits only compound after multiple volumes; (3) real WAG-fit/guardrail check — no scripted plot, no travel, no celebrity, cooperative (not competitive), doesn't touch the sibling-rivalry guardrail.
- **Score: 10/14 — GREENLIT** (right at the threshold).
- **Why:** A marginal, honest green light appropriate for a real format experiment, not inflated to look more certain than the evidence supports. `score_franchise=2` because this idea *is* the franchise-viability test itself.
- **Prediction (written 2026-08-10, before filming):** Betting on **Suggested**. Predicts Volume 1 alone under-performs the eventual franchise ceiling — the real value of this data point is whether it's strong enough to justify filming Volume 2.
- **Fails if:** Volume 1 performs so far below WAG's typical range a Volume 2 can't be justified; "no talking allowed" doesn't generate enough real on-camera tension/comedy to fill a full video; or viewers don't read it as a franchise opener without WAG making that explicit in title/thumbnail/description.
- **Outcome:** pending.

---

## What happens next (the loop this exists to close)

1. Film all 3.
2. Publish.
3. Pull real Studio numbers (views, traffic-source mix, CTR, avg % viewed) into `outcomes` for each — see `WAG_GREENLIGHT_MANAGER_SPEC.md` for the recording mechanism and its current manual-trigger limitation.
4. The `learning` field on each `outcomes` row becomes the next real data point the Greenlight Manager reads before scoring idea #11.

This is the actual machinery, not a report about the machinery.

---

## The remaining 7 ideas — now scored (2026-08-10)

Run through the same real Gate 0 + 7-criteria pass. Honest result: **not a clean sweep** — 3 more GREENLIT, 4 FIXABLE, 0 rejected. A system that only ever says yes isn't a real filter, per the standing discipline.

| # | Idea | Gate 0 path | Score | Decision |
|---|---|---|---|---|
| 4 | We Tested Every 1-Star Rated Nail Salon In Our City! | A (Formula fit) | 13/14 | **GREENLIT** |
| 2 | 24 Hours Testing the Chupacabra Legend! (Is It Really Out There?) | A (Formula fit) | 11/14 | **GREENLIT** |
| 5 | If Our Backyard Water Fight Had Battle Royale Rules | B (Breakout) | 10/14 | **GREENLIT** |
| 6 | We Got Locked In Our Garage for 24 Hours (No Phones) | A (Formula fit) | 9/14 | FIXABLE |
| 7 | Sisters vs. Best Friends: Who Actually Knows Us Better? | B (Breakout) | 9/14 | FIXABLE |
| 9 | We Tried to See the Bragg Road Ghost Light! (Real or Not?) | A (Formula fit) | 9/14 | FIXABLE |
| 8 | We Surprised Annabella With Her Dream Room Makeover! | B (Breakout) | 8/14 | FIXABLE |

**Real reasoning behind the 4 fixables, not just the verdicts:**

- **#6 (Garage lockdown):** substantially overlaps the already-greenlit 7-day Commitment pilot without testing anything new. Fix: add a real, harder stated stake than "no phones," or hold until the 7-day pilot's real result lands and use it to decide if a second, shorter pilot is even worth it.
- **#7 (Sisters vs. Best Friends):** real, guardrail-safe configuration, but currently under-differentiated — "who knows us better" is a common relational-quiz premise. Fix: add a real calendar hook (the source comparable, Jordan Matter's Valentine's Day video, used exactly this) or a sharper stakes mechanic.
- **#9 (Bragg Road):** real chassis fit, but a more regional, lower-search-volume legend than Chupacabra — a smaller real ceiling on the Search-engine bet. Fix: pair with a real amplifying hook (cite real local news coverage on camera), or deprioritize behind Chupacabra until that result clarifies whether legend-breadth is really the driving variable.
- **#8 (Annabella's room makeover):** real risk named plainly — without a sponsor/real budget, the "after" risks reading visibly smaller than the sponsor-backed source examples, undercutting the thumbnail's own promise. Fix: secure real budget, or resize the reveal's ambition to something deliverable without one.

Predictions were written only for the 3 newly-greenlit ideas (#2, #4, #5) — a FIXABLE idea isn't being filmed yet, so a pre-filming prediction doesn't apply until it's actually fixed and re-scored.

**Full current slate: 6 GREENLIT, 4 FIXABLE, 0 rejected, 10/10 scored.** Query `video_idea_status` in WAG Brain for the live, current state — this table is a snapshot, not the source of truth.
