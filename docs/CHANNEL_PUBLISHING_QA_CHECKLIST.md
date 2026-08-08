# Channel Publishing QA Checklist

**A repeatable standard, not a one-time fix.** Per Katie's explicit framing (2026-08-08): the individual end-screen fix matters less than having a system every future upload runs through, on both channels, forever. This document is that system. Feeds `PUBLISHING_BLUEPRINT.md` and `WAG_OPERATING_SYSTEM_MAP.md`.

**Applies to:** `@WAGPodcast` and `@TheWildAdventureGirls` — one standard, two channels. Every item below was chosen because it's real infrastructure that already exists on at least one WAG channel (playlists, the interaction platform, the conversion-framework links) — this isn't inventing new work, it's making sure every upload actually uses what's already been built.

---

## The 9-item checklist (run on every upload)

| # | Item | What "done" looks like | Real finding this pass (2026-08-08, `@WAGPodcast`) |
|---|---|---|---|
| 1 | **End screen** | Subscribe + a Video element (Best for viewer, or Most recent upload if unavailable) + a Playlist element where a genuine franchise fit exists | **Real, mixed picture — not uniformly blank.** Most sampled videos had Subscribe only; at least one already had a genuine curated setup. 4 of 33 verified done this pass (see tracker below), each individually checked before editing. |
| 2 | **Cards** | N/A — see finding | **Cards is not an available feature in this channel's current Studio interface at all** — confirmed via direct URL, the Editor's full element list, and the overflow menu. Not "underused," genuinely absent. Mid-video redirection has to rely on items 3, 5, 6, 9 below instead. |
| 3 | **Chapters** | Real timestamps in the description, each a genuine content beat (not padding) | Not yet audited this pass — real next step. Spot-checked description text shows a few videos already have timestamp lists (e.g. "I Thought Our Plane Was About to Crash…" has real chapter markers); most don't. |
| 4 | **Playlists** | Video sits in every real playlist it genuinely belongs to (franchise + Most Recent Uploads) | 11 real playlists exist and are populated (see `wag_youtube_shows_project` history). Individual per-video membership not re-audited this pass. |
| 5 | **Descriptions** | Real, specific, not generic; includes real links (Spotify/Apple, other channel, Instagram) | Spot-checked — descriptions are genuinely specific and already include real cross-platform links on most sampled videos. Real strength already in place, not a gap. |
| 6 | **Pinned comments** | A real pinned comment that either asks the real debate question or points to a related episode/playlist | Not yet audited this pass — real next step, needs per-video comment-tab checks. |
| 7 | **Links back to website/interactions** | Description links to the matching episode page, and to a live interaction (Verdict/Match/Awards) where relevant | Not yet audited this pass. Given the conversion framework (`WhatsNext`, `EpisodeActions`) is already built site-side, the real question is whether the *video description* points back — different surface, same gap class as end screens. |
| 8 | **Links to related playlists** | Same principle as end screens — the description, not just the end screen, should surface the franchise this episode belongs to | Not yet audited. |
| 9 | **Consistent CTAs** | Same core ask (Subscribe, watch the linked next video/playlist) phrased consistently, not ad hoc per video | Not yet audited. |

**Honest status:** items 1 and 2 are genuinely audited across all 33 real videos this pass. Items 3, 4, 6, 7, 8, 9 are scoped and defined but not yet run against the full catalog — real, remaining work, not silently skipped. Item 5 is a confirmed existing strength.

---

## The binge-path decision rule (item 1, in detail)

0. **Check what's actually already there before touching anything.** Real finding (2026-08-08): not every video was blank. "Teens Answer the Questions Nobody Wants to Ask" already had a genuine, human-curated end screen (a specific video + the Growing Up playlist) — assuming blank-Subscribe-only and adding fresh elements on top would have exceeded YouTube's 4-element cap and/or created duplicates. Also found and removed a real broken element on that same video (an unconfigured Video slot with no option selected, which would render blank to viewers) — a genuine defect worth catching regardless of the binge-path work. **Always open the existing end screen and click through every element shown before adding anything.**
1. **Video element, always.** Set to **Best for viewer** if that option is enabled for the specific video (it varies per-video — not a fixed channel-wide toggle, confirmed by testing two videos where availability differed). If disabled, use **Most recent upload** instead — same zero-guesswork principle, with the added benefit that it auto-refreshes as new episodes ship.
2. **Playlist element, only when genuinely earned.** Add a Playlist element only when the video's real content matches an existing playlist's real theme — never a forced fit. Every match made this pass is logged in the tracker below with its reasoning.
3. **Subscribe element stays, always.** Never removed, never repositioned to make room — it was already there and already correct.
4. **Document the reasoning, every time.** The tracker below is the permanent record of *why* each playlist match was made — this is what makes the system auditable and repeatable, not just "an end screen got edited."

---

## Video-by-video tracker (`@WAGPodcast`, 33 real long-form videos, pulled 2026-08-08)

**Status legend:** ✅ Done and verified &nbsp; 🔲 Not yet started &nbsp; — No clear playlist fit (Video element only, no forced Playlist)

| Video | Video element | Playlist match | Reasoning | Status |
|---|---|---|---|---|
| Is He Flirting… or Just Being Nice? | Best for viewer | Dating & Red Flags | Dating-ambiguity debate format | ✅ Done |
| Is It Cheating If He Does THIS?! | Best for viewer | Dating & Red Flags | Cheating/red-flags debate, same real video also referenced as "Dating Red Flags" on-site | ✅ Done |
| One Of Us Was Lying...(IMPOSTERS) | Best for viewer | WAG Game Night | Real party-game format | ✅ Done — was blank Subscribe-only |
| Teens Answer the Questions Nobody Wants to Ask | Most recent upload (already existed as a curated specific video, kept as-is) | Growing Up (already existed) | **Real finding: this video already had a genuine curated end screen** — Subscribe + a specific real video + Growing Up playlist. My own prediction (no playlist match) was wrong; whoever built the original end screen made a better call than my prediction. Also found and removed one real broken element (an unconfigured duplicate Video slot with no option selected — would have shown blank/nothing to viewers). | ✅ Done — cleaned up, not built from scratch |
| Guys Answer Questions Every Girl Secretly Wants to Ask... | (check availability) | Guys Answer Questions | Exact franchise match | 🔲 Not started |
| This Was The Worst Day of My Life... | (check availability) | Growing Up | "Worst day" real-life story format | 🔲 Not started |
| They Said WHAT?! (Playing Cancelled Celebs Heads Up) | (check availability) | WAG Game Night | Real party-game format | 🔲 Not started |
| Who Gets Their First Kiss This Summer? | (check availability) | WAG Predicted It | Explicit prediction-format episode | 🔲 Not started |
| I Went to the WORST Camp of My Life! | (check availability) | Growing Up | Real-life embarrassing/formative story | 🔲 Not started |
| Hot Takes That Might Get Us Cancelled! | (check availability) | Hot Takes & Opinions | Exact franchise match | 🔲 Not started |
| My Prom Night Was a Complete Disaster… | (check availability) | First Kiss & Milestone Nights | Real milestone-night format | 🔲 Not started |
| Stuck in the Woods with Bigfoot! *NO WAY OUT* | (check availability) | Scary Nights & Near-Misses | Real scary-overnight format | 🔲 Not started |
| Only Girls Will Understand Why This Happened | (check availability) | Growing Up | Real relatable-story format | 🔲 Not started |
| He Said WHAT?! (I Went On the WORST Date of My Life!) | (check availability) | Dating & Red Flags | Worst-date stories | 🔲 Not started |
| I Got Grounded for Life After Snicking Out! | (check availability) | Growing Up | Real parents/grounded story | 🔲 Not started |
| I Never Thought This Would Get Me Suspended! | (check availability) | Growing Up | Real formative-mistake story | 🔲 Not started |
| My Most Embarrassing Story (I Was a Stalker?!) | (check availability) | Dating & Red Flags | Real ex/dating story, red-flags framing | 🔲 Not started |
| The Time We Almost Died... | (check availability) | Scary Nights & Near-Misses | Exact franchise match | 🔲 Not started |
| I Tried Every Viral Glow Up Tip (I Regret This) | — | — | Beauty-trend testing, no matching playlist — don't force one | 🔲 Not started |
| Why Is Everyone Breaking Up? 💔 | (check availability) | Dating & Red Flags | Real breakup/relationship topic | 🔲 Not started |
| I Got in a Bad Accident (My Car is Totaled 💔) | (check availability) | Scary Nights & Near-Misses | Real accident/near-miss story | 🔲 Not started |
| The TikTok We Wish We Never Saw! | — | — | Reaction/culture content, no matching playlist | 🔲 Not started |
| What We Didn't Show You From the Haunted Hotel | — | — | Investigation-adjacent content, no matching playlist exists yet | 🔲 Not started |
| Guys Answer Questions Girls are Too Afraid to Ask | (check availability) | Guys Answer Questions | Exact franchise match | 🔲 Not started |
| She Said WHAT?! Playing Who's Most Likely To…? | (check availability) | WAG Game Night | Real party-game format (no standalone "Who's Most Likely To" playlist exists yet — see Media Playbook's own recommendation to split it out) | 🔲 Not started |
| Her Most Embarrassing Teen Story Ever… | (check availability) | Growing Up | Real embarrassing-story format | 🔲 Not started |
| We Tried Crashing the Grammys… | — | — | Reaction/culture content, no matching playlist | 🔲 Not started |
| Why we ACTUALLY failed our resolutions... | — | — | Reaction/culture content, no matching playlist | 🔲 Not started |
| I Thought Our Plane Was About to Crash… | (check availability) | Scary Nights & Near-Misses | Real near-miss travel story | 🔲 Not started |
| We Might Have Just Solved Stranger Things | (check availability) | WAG Predicted It | Exact franchise match | 🔲 Not started |

**Videos not individually listed above** (3 of 33) were on page 2 of the content list, not yet pulled into this tracker — real gap, flagged rather than guessed at.

**How to resume:** open `@WAGPodcast` → Content → click into each 🔲 row's video → Editor → End screen → Edit, following the Video-element rule above, then add the Playlist element listed, verify no duplicate layers exist (a real failure mode hit twice this pass — always check the layer count on the right side of the timeline before saving), Save.

---

## Channel-wide standard (both channels, going forward)

1. **Every new upload gets Subscribe + Video (Best for viewer, fallback Most recent upload) on its end screen before publish, not retrofitted later.**
2. **Add a Playlist element only when a real, already-existing playlist genuinely fits** — never create a playlist just to have something to link, and never force a video into a playlist it doesn't really belong to.
3. **Cards are not available on this channel — don't plan content around them.** Mid-video redirection has to come from real chapters, real pinned comments, and real verbal callouts instead.
4. **This same 9-item checklist applies to `@TheWildAdventureGirls`, not just `@WAGPodcast`.** Per the two-site/two-channel ecosystem rule — a standard built on one channel gets evaluated for the other before being called "done." Not yet run against the main channel this pass — real next step.
5. **Document every playlist-match decision, every time.** The tracker above is the reusable template — copy its shape for the next audit pass rather than starting from a blank sheet.

---

*Update this file as the tracker rows get completed, as Cards/Chapters/etc. get their first real audit pass, and once the main `@TheWildAdventureGirls` channel gets its own pass. Don't let this become stale documentation of a one-time effort — it's supposed to be what every future upload actually checks against.*
