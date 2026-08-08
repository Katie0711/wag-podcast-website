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

0. **Check what's actually already there before touching anything.** Real finding (2026-08-08): not every video was blank. At least 2 of the first 5 videos checked ("Teens Answer the Questions Nobody Wants to Ask", "Guys Answer Questions Every Girl Secretly Wants to Ask...") already had a genuine, human-curated end screen (a specific video + a matching playlist) — assuming blank-Subscribe-only and adding fresh elements on top would have exceeded YouTube's 4-element cap and/or created duplicates. **Always open the existing end screen and click through every element icon shown in the bottom-right layer strip before adding anything** — the "+ Element" button's hover tooltip ("This video can only contain up to 4 end screen elements") is generic static help text, not a live count, so don't rely on it; the layer-strip icons are the real signal, but only after clicking each one — the details panel alone can hide elements that exist but aren't currently selected.
1. **A second, real recurring bug pattern found (2026-08-08):** at least 2 of the videos with pre-existing curated end screens also had one broken, unconfigured Video element sitting alongside the good one — no radio option selected, which would render blank to real viewers. Found and removed on both. **Check every Video element's radio selection, every time** — an element existing is not the same as it being configured correctly.
2. **Video element, always.** Set to **Best for viewer** if that option is enabled for the specific video (it varies per-video — not a fixed channel-wide toggle, confirmed by testing two videos where availability differed). If disabled, use **Most recent upload** instead — same zero-guesswork principle, with the added benefit that it auto-refreshes as new episodes ship.
3. **Playlist element, only when genuinely earned.** Add a Playlist element only when the video's real content matches an existing playlist's real theme — never a forced fit. Every match made this pass is logged in the tracker below with its reasoning.
4. **Subscribe element stays, always.** Never removed, never repositioned to make room — it was already there and already correct.
5. **Document the reasoning, every time.** The tracker below is the permanent record of *why* each playlist match was made — this is what makes the system auditable and repeatable, not just "an end screen got edited."

---

## Video-by-video tracker (`@WAGPodcast`, 33 real long-form videos, pulled 2026-08-08)

**Status legend:** ✅ Done and verified &nbsp; 🔲 Not yet started &nbsp; — No clear playlist fit (Video element only, no forced Playlist)

| Video | Video element | Playlist match | Reasoning | Status |
|---|---|---|---|---|
| Is He Flirting… or Just Being Nice? | Best for viewer | Dating & Red Flags | Dating-ambiguity debate format | ✅ Done |
| Is It Cheating If He Does THIS?! | Best for viewer | Dating & Red Flags | Cheating/red-flags debate, same real video also referenced as "Dating Red Flags" on-site | ✅ Done |
| One Of Us Was Lying...(IMPOSTERS) | Best for viewer | WAG Game Night | Real party-game format | ✅ Done — was blank Subscribe-only |
| Teens Answer the Questions Nobody Wants to Ask | Most recent upload (already existed as a curated specific video, kept as-is) | Growing Up (already existed) | **Real finding: this video already had a genuine curated end screen** — Subscribe + a specific real video + Growing Up playlist. My own prediction (no playlist match) was wrong; whoever built the original end screen made a better call than my prediction. Also found and removed one real broken element (an unconfigured duplicate Video slot with no option selected — would have shown blank/nothing to viewers). | ✅ Done — cleaned up, not built from scratch |
| Guys Answer Questions Every Girl Secretly Wants to Ask... | Most recent upload (already existed as a curated specific video, kept as-is) | Guys Answer Questions (already existed) | **Same real finding as "Teens Answer the Questions":** already had a genuine curated end screen (specific video "Guys Answer Questions Girls are Too Afraid to Ask" + the Guys Answer Questions playlist, exactly matching my own predicted playlist). Also had the same broken unconfigured second Video element — removed. **This is now a confirmed, recurring pattern across at least 2 videos, not a one-off.** | ✅ Done — cleaned up, not built from scratch |
| This Was The Worst Day of My Life... | Best for viewer (already existed, correctly configured, kept as-is) | Growing Up | "Worst day" real-life story format | ✅ Done — Video already existed and worked, added the missing Playlist |
| They Said WHAT?! (Playing Cancelled Celebs Heads Up) | Best for viewer (already existed, correctly configured, kept as-is) | WAG Game Night | Real party-game format | ✅ Done — Video already existed and worked, added the missing Playlist |
| Who Gets Their First Kiss This Summer? | Best for viewer | WAG Predicted It | Explicit prediction-format episode | ✅ Done — built fresh, no duplicate/broken elements found on verification |
| I Went to the WORST Camp of My Life! | Best for viewer (already existed, correctly configured, kept as-is) | Growing Up | Real-life embarrassing/formative story | ✅ Done — Video already existed and worked, added the missing Playlist |
| Hot Takes That Might Get Us Cancelled! | Best for viewer | Hot Takes & Opinions | Exact franchise match | ✅ Done — was blank Subscribe-only |
| My Prom Night Was a Complete Disaster… | Best for viewer | First Kiss & Milestone Nights | Real milestone-night format | ✅ Done — was blank Subscribe-only |
| Stuck in the Woods with Bigfoot! *NO WAY OUT* | Best for viewer | Scary Nights & Near-Misses | Real scary-overnight format | ✅ Done — was blank Subscribe-only |
| Only Girls Will Understand Why This Happened | Most recent upload ("Best for viewer" not available for this video) | Growing Up | Real relatable-story format | ✅ Done — was blank Subscribe-only |
| He Said WHAT?! (I Went On the WORST Date of My Life!) | Best for viewer (already existed, correctly configured, kept as-is) | Dating & Red Flags | Worst-date stories | ✅ Done — Video already existed and worked, added the missing Playlist |
| I Got Grounded for Life After Snicking Out! | Best for viewer (already existed, correctly configured, kept as-is) | Growing Up | Real parents/grounded story | ✅ Done — Video already existed and worked, added the missing Playlist |
| I Never Thought This Would Get Me Suspended! | Best for viewer (already existed, correctly configured, kept as-is) | Growing Up | Real formative-mistake story | ✅ Done — Video already existed and worked, added the missing Playlist |
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
