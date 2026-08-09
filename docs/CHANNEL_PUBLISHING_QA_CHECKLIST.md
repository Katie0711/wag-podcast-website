# Channel Publishing QA Checklist

**A repeatable standard, not a one-time fix.** Per Katie's explicit framing (2026-08-08): the individual end-screen fix matters less than having a system every future upload runs through, on both channels, forever. This document is that system. Feeds `PUBLISHING_BLUEPRINT.md` and `WAG_OPERATING_SYSTEM_MAP.md`.

**Applies to:** `@WAGPodcast` and `@TheWildAdventureGirls` — one standard, two channels. Every item below was chosen because it's real infrastructure that already exists on at least one WAG channel (playlists, the interaction platform, the conversion-framework links) — this isn't inventing new work, it's making sure every upload actually uses what's already been built.

---

## The 9-item checklist (run on every upload)

| # | Item | What "done" looks like | Real finding this pass (2026-08-08, `@WAGPodcast`) |
|---|---|---|---|
| 1 | **End screen** | Subscribe + a Video element (Best for viewer, or Most recent upload if unavailable) + a Playlist element where a genuine franchise fit exists | **Complete — all 33/33 `@WAGPodcast` videos verified and fixed.** Real, mixed picture: 70% already had a genuine curated Video pick, only 15% already had the matching Playlist too. See the full pattern-frequency summary below the tracker. |
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
| My Most Embarrassing Story (I Was a Stalker?!) | Best for viewer (already existed, correctly configured, kept as-is) | Dating & Red Flags | Real ex/dating story, red-flags framing | ✅ Done — Video already existed and worked, added the missing Playlist |
| The Time We Almost Died... | Best for viewer (already existed, correctly configured, kept as-is) | Scary Nights & Near-Misses | Exact franchise match | ✅ Done — Video already existed and worked, added the missing Playlist |
| I Tried Every Viral Glow Up Tip (I Regret This) | Best for viewer (already existed, correctly configured, kept as-is) | — | Beauty-trend testing, no matching playlist — don't force one | ✅ Done — Video already existed and worked, no playlist fit confirmed |
| Why Is Everyone Breaking Up? 💔 | Most recent upload ("Best for viewer" not available for this video) | Dating & Red Flags | Real breakup/relationship topic | ✅ Done — was blank Subscribe-only |
| I Got in a Bad Accident (My Car is Totaled 💔) | Best for viewer (already existed, correctly configured, kept as-is) | Scary Nights & Near-Misses | Real accident/near-miss story | ✅ Done — Video already existed and worked, added the missing Playlist |
| The TikTok We Wish We Never Saw! | Best for viewer (already existed, correctly configured, kept as-is) | — | Reaction/culture content, no matching playlist | ✅ Done — Video already existed and worked, no playlist fit confirmed |
| What We Didn't Show You From the Haunted Hotel | Best for viewer (already existed, correctly configured, kept as-is) | Scary Nights & Near-Misses (already existed) | **Real finding: already had a genuine curated end screen** — my own prediction of "no playlist fit" was wrong; a real human match already existed (scary/spooky theme fits Near-Misses). Also found and removed the same recurring broken element (an unconfigured duplicate Video slot, no radio option selected) alongside the working one. | ✅ Done — cleaned up, not built from scratch |
| Guys Answer Questions Girls are Too Afraid to Ask | Best for viewer (already existed, correctly configured, kept as-is) | Guys Answer Questions | Exact franchise match | ✅ Done — Video already existed and worked, added the missing Playlist |
| She Said WHAT?! Playing Who's Most Likely To…? | Best for viewer (already existed, correctly configured, kept as-is) | WAG Game Night | Real party-game format (no standalone "Who's Most Likely To" playlist exists yet — see Media Playbook's own recommendation to split it out) | ✅ Done — Video already existed and worked, added the missing Playlist |
| Her Most Embarrassing Teen Story Ever… | Best for viewer (already existed, correctly configured, kept as-is) | Growing Up | Real embarrassing-story format | ✅ Done — Video already existed and worked, added the missing Playlist |
| We Tried Crashing the Grammys… | Best for viewer (already existed, correctly configured, kept as-is) | — | Reaction/culture content, no matching playlist | ✅ Done — Video already existed and worked, no playlist fit confirmed |
| Why we ACTUALLY failed our resolutions... | Playlist: Most Recent Uploads + Channel element (already existed, genuine curated setup, kept as-is) | — | Reaction/culture content — real finding: already had a different-but-valid curated pattern (Subscribe + "Most Recent Uploads" playlist + Channel branding element, no dedicated Video element). Preserved as genuine curation rather than forced into the Video+Playlist template. | ✅ Done — genuine alternate curated pattern, preserved as-is |
| I Thought Our Plane Was About to Crash… | Video: specific pick "Exposing Guys' Biggest Red Flags" (already existed, correctly configured, kept as-is) | Scary Nights & Near-Misses | Real near-miss travel story | ✅ Done — Video already existed and worked (real human-picked specific video, not Best for viewer), added the missing Playlist |
| We Might Have Just Solved Stranger Things | Most recent upload (already existed as a curated specific video, kept as-is) | WAG Predicted It (already existed) | **Real finding: already had a genuine curated end screen** — my own predicted playlist match ("WAG Predicted It") was exactly right, whoever built it made the same real call. Also found and removed the same recurring broken element (an unconfigured duplicate Video slot, no radio option selected) — now a confirmed pattern across 4+ videos this pass. | ✅ Done — cleaned up, not built from scratch |
| Exposing Guys' Biggest Red Flags | Most recent upload (already existed, correctly configured, kept as-is) | Dating & Red Flags | Real fit — this is the same real video also selected as the specific pick inside "I Thought Our Plane Was About to Crash…"'s own end screen | ✅ Done — Video already existed and worked, added the missing Playlist |
| The TRUTH about our worst first kiss... (it was a disaster) | Best for viewer (already existed, correctly configured, kept as-is) | First Kiss & Milestone Nights | Exact franchise match | ✅ Done — Video already existed and worked, added the missing Playlist |
| We Predicted The ENDING of STRANGER THINGS! | Video: specific pick, a real Short "Her Prediction of STRANGER THINGS is CRAZY!" (already existed, correctly configured, kept as-is) | WAG Predicted It | Exact franchise match | ✅ Done — Video already existed and worked (real human-picked Short, not Best for viewer), added the missing Playlist |

**All 33 real `@WAGPodcast` long-form videos now complete.** The 3 videos that were on page 2 of the content list (not pulled into earlier drafts of this tracker) are now included above.

### Pattern-frequency summary (`@WAGPodcast`, 33/33 videos) — per Katie's explicit request

Counting real, observed outcomes across all 33 videos (a video can count in more than one category, e.g. "curated video already present" + "broken element found"):

| Pattern | Count | % of 33 |
|---|---|---|
| Subscribe-only (genuinely blank, built fresh) | 9 | 27% |
| Curated video already present (any mode — Best for viewer, Most recent upload, or a specific hand-picked video/Short) | 23 | 70% |
| — of which: Best for viewer specifically | 15 | 45% |
| — of which: Most recent upload specifically | 4 | 12% |
| — of which: a specific hand-picked video/Short | 4 | 12% |
| Playlist already present (a real, pre-existing playlist match — not one I added) | 5 | 15% |
| Broken/unconfigured element found and removed (the recurring duplicate-Video bug) | 4 | 12% |
| No natural playlist fit (left without one, correctly) | 3 | 9% |
| Genuine alternate curated pattern (Most Recent Uploads playlist + Channel element instead of Video+Playlist) | 1 | 3% |

**What this answers, per Katie's question:** this was **mostly a missing-standard problem, not a cleanup problem.** 70% of videos already had a real, human-curated Video element — the channel's actual publishing habit already leaned toward setting up end screens, not leaving them blank. The gap was narrower and more specific: most of those curated videos were missing the *Playlist* element (23 curated vs. only 5 with a playlist already attached), meaning the habit of picking a good "watch next" video existed, but the habit of also linking the matching franchise playlist did not — a real, fixable, single-step standard. The blank-Subscribe-only case (27%) was the true cleanup work, concentrated in the batch of videos I processed without deep pre-existing curation. The broken-duplicate-Video bug (12%, 4 confirmed instances) is a smaller but real recurring technical issue worth flagging separately — likely from clicking "+ Element" twice during original publishing rather than a systemic habit gap.

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
