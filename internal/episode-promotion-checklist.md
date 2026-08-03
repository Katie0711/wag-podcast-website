# Podcast Episode Promotion Checklist

Standing SOP for every new WAG Podcast episode. Created 2026-08-03 after the traffic diagnosis investigation (see git history / conversation log for full evidence). Goal: every episode does its part to build thewagpodcast.com's authority, not just get views.

Do not skip steps because "it's just one episode" — consistency across every release is what compounds into authority over 6-12 months.

## Before publishing

- [ ] Episode page exists on thewagpodcast.com (`src/content/episodes/[slug].md`), built and verified locally
- [ ] Title tag and meta description follow the site's non-clickbait real-title convention
- [ ] `faqs` array added if the episode has real, citable Q&A content (activates FAQPage schema automatically)
- [ ] Internal links added: from the new episode to 1-2 related existing episodes/topic hubs, and from those existing pages back to the new one (no orphan pages)
- [ ] OG image set
- [ ] Real YouTube video ID confirmed and thumbnail displays correctly

## Immediately after publishing (same day)

- [ ] Push the episode page live (commit + deploy), confirm it's reachable at its real URL
- [ ] YouTube video description includes a direct link to the matching thewagpodcast.com episode page (not just the homepage) — this is currently missing on spot-checked videos, don't repeat that gap
- [ ] YouTube video description also links the channel's other official properties (Spotify, Apple) if not already covered by the channel's standard description template
- [ ] Add/update a pinned comment on the video with the episode-page link
- [ ] Post to Instagram/TikTok with a real link-in-bio or Stories link pointing to the specific episode page, not just a generic "check the podcast" mention
- [ ] Confirm the episode surfaces on Spotify and Apple Podcasts (these sync from the RSS feed automatically, but verify — don't assume)

## Within 24 hours

- [ ] Check Search Console → URL Inspection for the new episode URL; if it shows "Discovered — currently not indexed" after 24h, that's expected for a new/young domain — do not panic-request indexing on day one
- [ ] Confirm the episode appears correctly in GA4 real-time (proves tracking fired)
- [ ] Cross-post/mention on wildadventuregirls.com where topically relevant (e.g., a companion Stories article, or a mention in a related existing article) — this is the single highest-value internal link the ecosystem has, per real GSC backlink data, so don't let it go unused
- [ ] If the episode has real evergreen search demand behind it (validated via the site's existing SEO audit process, not a guess), flag it as a **flagship indexing-request candidate** — see the indexing strategy in `internal/` for what qualifies

## Within 7 days

- [ ] If the episode page still isn't indexed and it's a flagship evergreen asset (see indexing strategy), submit a manual "Request Indexing" in GSC — once, not repeatedly
- [ ] Check GSC Performance for any early impressions/queries on the new page; log anything real (don't fabricate signal where there isn't any yet)
- [ ] Review whether the episode created a new real backlink opportunity (e.g., a guest who might link back, a brand mentioned who might reshare) and follow up if so
- [ ] Add the episode to any relevant topic hub's episode list if one exists and wasn't already updated at publish time

## Standing rules (apply every time)

- Every new episode page must link to and be linked from at least one other real page on the site — no orphans, ever.
- Never fabricate schema, stats, or FAQ answers to hit a checklist item — an incomplete checklist beats a dishonest one.
- Manual indexing requests are for flagship evergreen assets only (see indexing strategy doc) — spamming "Request Indexing" on every page wastes Google's limited attention on a young domain and doesn't speed anything up.
- The website link is not optional in video descriptions, pinned comments, or platform show notes — it was found missing across YouTube video descriptions, Spotify, Apple Podcasts, and Instagram bio during the July 2026 traffic audit. Every one of those is a real, free authority-building opportunity being left on the table until this becomes routine.
