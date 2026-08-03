# Podcast Episode Publishing Workflow

Standing SOP for every new WAG Podcast episode. Created 2026-08-03 after the traffic diagnosis investigation, expanded 2026-08-03 into the permanent publishing workflow. Goal: every episode does its part to build thewagpodcast.com's authority, not just get views.

Do not skip steps because "it's just one episode" — consistency across every release is what compounds into authority over 6-12 months.

**Note on companion articles:** this workflow does NOT include "write a new Stories article for every episode" as a step. WAG's standing rule is that Stories articles on wildadventuregirls.com never cover a podcast episode/topic directly — the two verticals stay separate. What belongs here instead is *cross-linking where a genuine topical overlap already exists* in already-published content — never manufacturing a new article to promote an episode.

## Before publishing

- [ ] Episode page exists on thewagpodcast.com (`src/content/episodes/[slug].md`), built and verified locally
- [ ] Title tag and meta description follow the site's non-clickbait real-title convention
- [ ] `faqs` array added if the episode has real, citable Q&A content (activates FAQPage schema automatically)
- [ ] Internal links added: from the new episode to 1-2 related existing episodes/topic hubs, and from those existing pages back to the new one (no orphan pages)
- [ ] OG image set
- [ ] Real YouTube video ID confirmed and thumbnail displays correctly
- [ ] **Post-publish QA, done before it's live, not after:** mobile render check, no broken links on the new page, schema validates (Google Rich Results Test), no console errors

## Immediately after publishing (same day)

**Website**
- [ ] Push the episode page live (commit + deploy), confirm it's reachable at its real URL
- [ ] Re-run the QA checks above against the live URL, not just local — deploys can differ from local builds

**YouTube**
- [ ] Video description includes a direct link to the matching thewagpodcast.com episode page (not just the homepage) — missing on every video spot-checked in the traffic audit, don't repeat that gap
- [ ] Description also links Spotify and Apple if not already in the channel's standard template
- [ ] Pinned comment added/updated with the episode-page link
- [ ] End screen and/or card added pointing to a related video or the channel (native YouTube retention tools — not verified as in use yet; confirm during the platform inventory review)

**Podcast platforms**
- [ ] Confirm the episode actually surfaced on Spotify and Apple Podcasts (RSS sync is automatic but not guaranteed — verify, don't assume)

**Social**
- [ ] Post to Instagram/TikTok with a real link pointing to the specific episode page where the platform allows it (Stories link, link-in-bio update), not just a generic "check the podcast" mention
- [ ] If a Facebook post goes out for the episode, same rule — real episode link, not just "new episode is up"

**Newsletter**
- [ ] New episode gets a mention in the next WAG Insider send (or its own send, if that's ever warranted) with a direct link to the episode page — WAG Insider is a real, active list; a podcast episode has never explicitly used it yet as of this writing

## Within 24 hours

- [ ] Check Search Console → URL Inspection for the new episode URL; "Discovered — currently not indexed" after 24h is expected for a young domain — do not panic-request indexing on day one
- [ ] Confirm the episode appears correctly in GA4 real-time (proves tracking fired)
- [ ] Cross-link from wildadventuregirls.com **only where a genuine existing topical connection already exists** (see the companion-article note above) — this is the single highest-value internal link the ecosystem has per real GSC backlink data, so don't let a real opportunity go unused, but don't manufacture a fake one either
- [ ] If the episode has real evergreen search demand behind it (validated via the site's existing SEO audit process, not a guess), flag it as a **flagship indexing-request candidate**

## Within 7 days

- [ ] If the page still isn't indexed and it's a flagship evergreen asset, submit a manual "Request Indexing" in GSC — once, not repeatedly
- [ ] Check GSC Performance for any early impressions/queries on the new page; log anything real, don't fabricate signal where there isn't any yet
- [ ] Review whether the episode created a real backlink opportunity (a guest who might link back, a brand mentioned who might reshare) and follow up if so
- [ ] Add the episode to any relevant topic hub's episode list if one exists and wasn't already updated at publish time

## Standing rules (apply every time)

- Every new episode page must link to and be linked from at least one other real page on the site — no orphans, ever.
- Never fabricate schema, stats, FAQ answers, or a companion article just to hit a checklist item — an incomplete checklist beats a dishonest one.
- Manual indexing requests are for flagship evergreen assets only — spamming "Request Indexing" on every page wastes a young domain's limited crawl trust and doesn't speed anything up.
- The website link is not optional in video descriptions, pinned comments, platform show notes, or social bios — found missing across YouTube video descriptions, Spotify, Apple Podcasts, and Instagram/TikTok bios during the traffic audit. Every one of those is real, free authority-building being left on the table until this is routine.
- QA happens before "done," not as a separate afterthought — the pre-publish checklist and the immediately-after live re-check are both required, not either/or.
