# Channel Publishing QA Checklist

**A repeatable standard, not a one-time fix.** Per Katie's explicit framing (2026-08-08): the individual end-screen fix matters less than having a system every future upload runs through, on both channels, forever. This document is that system. Feeds `PUBLISHING_BLUEPRINT.md` and `WAG_OPERATING_SYSTEM_MAP.md`.

**Applies to:** `@WAGPodcast` and `@TheWildAdventureGirls` — one standard, two channels. Every item below was chosen because it's real infrastructure that already exists on at least one WAG channel (playlists, the interaction platform, the conversion-framework links) — this isn't inventing new work, it's making sure every upload actually uses what's already been built.

---

## The 9-item checklist (run on every upload)

| # | Item | What "done" looks like | Real finding this pass (2026-08-08, `@WAGPodcast`) |
|---|---|---|---|
| 1 | **End screen** | Subscribe + a Video element (Best for viewer, or Most recent upload if unavailable) + a Playlist element where a genuine franchise fit exists | **Complete on both channels.** `@WAGPodcast`: all 33/33 videos verified and fixed — 70% already had a genuine curated Video pick, only 15% already had the matching Playlist too. `@TheWildAdventureGirls`: all 10/10 real modern-era videos verified — 100% already had a genuine curated end screen, zero broken elements, zero changes needed. See the full pattern-frequency summaries below each tracker, and the combined summary at the bottom of this doc. |
| 2 | **Cards** | N/A — see finding | **Cards is not an available feature in this Studio account at all, confirmed on both channels.** Confirmed on `@WAGPodcast` via direct URL, the Editor's full element list, and the overflow menu. Confirmed again on `@TheWildAdventureGirls` (2026-08-08) via the same direct-URL test — same blank/broken result, same account-level Studio interface. Not "underused," genuinely absent. Mid-video redirection has to rely on items 3, 5, 6, 9 below instead. |
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

## Video-by-video tracker (`@TheWildAdventureGirls`, 10 real videos, pulled 2026-08-08)

**Scope note (explicit, per Katie's instruction):** only videos newer than "We Were Sent To The WORLDS TOUGHEST HORSE CAMP! *Worst Day Ever*" (Mar 8, 2025) are in scope. That video and everything older is legacy pre-pivot horse content, out of scope per the standing horse-content-pivot rule — same logic as the slime-content exclusion. One video in the in-scope date range, "Beetlejuice Tried To Marry Our Sister In Real Life!!" (Aug 30, 2025), is **Private** (A/B test completed) — not publicly viewable, so its end screen has no real audience exposure; skipped rather than edited, consistent with only touching what's actually live.

**Status legend:** ✅ Done and verified &nbsp; — No clear playlist fit (Video element only, no forced Playlist)

| Video | Video element | Playlist match | Reasoning | Status |
|---|---|---|---|---|
| We Rode EVERY Disney Ride in One Day! | Video: specific pick (already existed, correctly configured, kept as-is) | — | Disney/travel vlog content, no matching playlist ("Check out our LATEST UPLOADS!" not forced) | ✅ Done — genuine curated setup, no changes needed |
| Surviving 24 Hours of Embarrassing Challenges at VidCon! | Video: specific pick (already existed, correctly configured, kept as-is) | — | VidCon/creator-meetup content, no matching playlist | ✅ Done — genuine curated setup, no changes needed |
| Flying to LA for the Craziest Weekend Ever! | Video: specific pick "24 Hours in America's Most Haunted Hotel! *Ghost in Room*" (already existed, correctly configured, kept as-is) | — | Travel-weekend content, no matching playlist | ✅ Done — genuine curated setup, no changes needed |
| Trying EVERY Viral TikTok Product On the Internet! | Video: specific pick "24 Hours in America's Most Bigfoot Sighted Forest!" (already existed, correctly configured, kept as-is) | — | TikTok-product-testing content, no matching playlist | ✅ Done — genuine curated setup, no changes needed |
| I Ate EVERY Viral TikTok Food In a New City! | Video: specific pick "24 Hours in America's Most Bigfoot Sighted Forest!" (already existed, correctly configured, kept as-is) | — | TikTok-food content, no matching playlist | ✅ Done — genuine curated setup, no changes needed |
| I Tested EVERY Viral TikTok Product I Could Buy! | Video: specific pick "24 Hours in America's Most Bigfoot Sighted Forest!" (already existed, correctly configured, kept as-is) | — | TikTok-product-testing content, no matching playlist | ✅ Done — genuine curated setup, no changes needed |
| 24 Hours in America's Most Bigfoot Sighted Forest! | Video: specific pick "24 Hours in America's Most Haunted Hotel! *Ghost in Room*" (already existed, correctly configured, kept as-is) | — | Cryptid/overnight-challenge content — real cross-linking pattern with the Haunted Hotel video (each picks the other), no matching playlist exists yet for this format | ✅ Done — genuine curated setup, no changes needed |
| I Ate at EVERY WORST Rated Restaurant In a New City! | Playlist: Check out our LATEST UPLOADS! + Channel element (already existed, genuine alternate curated pattern, kept as-is) | Check out our LATEST UPLOADS! (already existed) | Real finding: same valid alternate pattern documented on `@WAGPodcast` ("Why we ACTUALLY failed our resolutions...") — Subscribe + catch-all Playlist + decorative Channel avatar instead of a dedicated Video element. Preserved as genuine curation. | ✅ Done — genuine alternate curated pattern, preserved as-is |
| 24 Hours in America's Most Haunted Hotel! *Ghost in Room* | Video: specific pick "24 HOURS in the GOATMAN'S FOREST! (It Followed Us!)" (already existed, correctly configured, kept as-is) | — | Cryptid/overnight-challenge content, no matching playlist exists yet for this format | ✅ Done — genuine curated setup, no changes needed |
| 24 HOURS in the GOATMAN'S FOREST! (It Followed Us!) | Best for viewer (already existed, correctly configured, kept as-is) | — | Cryptid/overnight-challenge content, no matching playlist exists yet for this format | ✅ Done — genuine curated setup, no changes needed |

**Beetlejuice Tried To Marry Our Sister In Real Life!! — Private, A/B test completed.** Not publicly viewable; end-screen QA not applicable. Skipped rather than edited.

**All 10 real, public `@TheWildAdventureGirls` modern-era videos verified — zero changes needed.** Stopped at the confirmed real boundary: "We Were Sent To The WORLDS TOUGHEST HORSE CAMP! *Worst Day Ever*" (Mar 8, 2025) and everything older, per Katie's explicit instruction.

### Pattern-frequency summary (`@TheWildAdventureGirls`, 10/10 real videos) — per Katie's explicit request

| Pattern | Count | % of 10 |
|---|---|---|
| Subscribe-only (genuinely blank, built fresh) | 0 | 0% |
| Curated video already present (any mode — Best for viewer, or a specific hand-picked video) | 9 | 90% |
| — of which: Best for viewer specifically | 1 | 10% |
| — of which: a specific hand-picked video | 8 | 80% |
| Playlist already present (a real, pre-existing playlist match) | 1 | 10% |
| Broken/unconfigured element found and removed | 0 | 0% |
| No natural playlist fit (left without one, correctly) | 9 | 90% |
| Genuine alternate curated pattern (Playlist + Channel element instead of Video+Playlist) | 1 | 10% |

**What this answers for this channel:** this was **entirely a cleanup-not-needed, standard-already-met result** — a very different picture from `@WAGPodcast`. Every single video already had a genuine, correctly-configured, human-curated end screen; zero were blank, and zero had the recurring broken-duplicate-Video bug found repeatedly on the podcast channel. The near-total absence of playlist matches (only 1 of 10) is not a gap the same way it was on `@WAGPodcast` — it's a real reflection of this channel's playlist architecture being much less mature for its modern-era content (see project context: only "Check out our LATEST UPLOADS!," "Ghostbusters!," and "Spooky Halloween Fun!" are genuine, non-legacy playlists), so there were genuinely few real playlist fits available to make, not missed opportunities to add them.

---

## Combined pattern-frequency summary — both channels (43 real videos total) — per Katie's original request

| Pattern | `@WAGPodcast` (33) | `@TheWildAdventureGirls` (10) | Combined (43) |
|---|---|---|---|
| Subscribe-only, built fresh | 9 (27%) | 0 (0%) | 9 (21%) |
| Curated video already present | 23 (70%) | 9 (90%) | 32 (74%) |
| Playlist already present | 5 (15%) | 1 (10%) | 6 (14%) |
| Broken/unconfigured element found & removed | 4 (12%) | 0 (0%) | 4 (9%) |
| No natural playlist fit | 3 (9%) | 9 (90%) | 12 (28%) |
| Genuine alternate curated pattern (Playlist+Channel, no Video element) | 1 (3%) | 1 (10%) | 2 (5%) |

**The real, combined answer to Katie's original question — was this a cleanup problem, a missing-standard problem, or both:** **both, but concentrated very differently on each channel.** `@WAGPodcast` was the channel with real cleanup work: a genuine 27% blank-Subscribe-only rate and a real recurring technical bug (4 broken duplicate elements) — the missing piece there wasn't curation habit (70% already curated) but the *Playlist* half of the standard, present on only 15% of curated videos. `@TheWildAdventureGirls`, by contrast, needed **zero cleanup and zero fixes** — 90% already had genuine human-curated Video picks and there wasn't a single broken element across 10 videos, meaning whoever published on this channel already had a strong, consistent end-screen habit. Its low playlist-match rate isn't a gap to close the same way — it's an honest reflection of this channel's playlist architecture being less mature for its current modern-teen-era content, not a missed step in an otherwise-followed process. **Net conclusion: the "always Video element + Playlist where earned" standard itself was the right call to formalize — both channels already had strong Video-element habits on their own, but neither had a systematic Playlist-attachment habit, and `@WAGPodcast` additionally had a real technical bug worth permanently checking for on every future upload.**

---

## Channel-wide standard (both channels, going forward)

1. **Every new upload gets Subscribe + Video (Best for viewer, fallback Most recent upload) on its end screen before publish, not retrofitted later.**
2. **Add a Playlist element only when a real, already-existing playlist genuinely fits** — never create a playlist just to have something to link, and never force a video into a playlist it doesn't really belong to.
3. **Cards are not available on this channel — don't plan content around them.** Mid-video redirection has to come from real chapters, real pinned comments, and real verbal callouts instead.
4. **This same 9-item checklist applies to `@TheWildAdventureGirls`, not just `@WAGPodcast`.** Per the two-site/two-channel ecosystem rule — a standard built on one channel gets evaluated for the other before being called "done." **Complete as of 2026-08-08** — run against all 10 real, public, in-scope videos on the main channel; see its dedicated tracker section above.
5. **Document every playlist-match decision, every time.** The tracker above is the reusable template — copy its shape for the next audit pass rather than starting from a blank sheet.
6. **Legacy/pre-pivot content is out of scope for this checklist, not a backlog item.** On `@TheWildAdventureGirls`, everything at or before "We Were Sent To The WORLDS TOUGHEST HORSE CAMP!" (Mar 8, 2025) is old horse content from before the brand pivot — same exclusion logic as `wag_horse_content_pivot` and `wag_no_new_slime_content`. Don't audit or "finish" it later; it's deliberately excluded, not incomplete.

---

*Item 1 (End screen) and item 2 (Cards) are now fully audited on both channels. Update this file as items 3, 6, 7, 8, 9 get their first real audit pass on either channel. Don't let this become stale documentation of a one-time effort — it's supposed to be what every future upload actually checks against.*
