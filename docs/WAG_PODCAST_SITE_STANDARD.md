# thewagpodcast.com — Site Standard

**LAST VERIFIED:** 2026-08-19
**GOVERNED BY:** `wag-company-os/07_asset_registry/WAG_WEB_STANDARD.md` (Global WAG Web Standard) — read that first. This file only states what's specific to this property; it does not restate global rules.

## Purpose

The dedicated, specialized canonical authority for **WAG Podcast as a teen podcast/media property** — not a duplicate general Wild Adventure Girls site. Real entity relationship: `The Wild Adventure Girls → creates/publishes → WAG Podcast`; this site is the show's own home, not the brand's.

## Audience

Tween/teen girls (~11-18), primary — same core demographic as the main site, arriving via podcast-specific intent (episode topics, hosts, games/segments) rather than general WAG-brand discovery.

## Entity structure

References the same Organization facts as the main site (Global Standard §6) — never restates them differently. Hosts: Angelina, Scarlett, Annabella (same real people as the main site's "Meet the Girls," same sister/cousin relationship facts). "WAG Podcast" is the correct name — never "The WAG Podcast," despite the domain containing "the."

## Content types / page taxonomy (real, current)

Home · Watch · Listen (Spotify/Apple) · Hosts · About · WAG Verdict (real weekly vote tied to an actual debated dilemma) · WAG Match (host-personality quiz) · Favorite Segment (running poll) · Questions Featured · WAG Awards (fan-voted) · Guys Answer Questions · Mental Health · Games (Guess the Imposter, Who's Most Likely To, Heads Up) · Segments (Squad Dares, Tell Me the Truth, He Said What?!, 3-Second Roast) · Growing Up topic hub · Teen Comedy Podcast · Video Podcasts for Teens · WAG Predicted It · FAQ · Sponsor · Contact.

## Episode architecture

Two real, distinct layers, intentionally not merged:
1. **Live YouTube feed** (`src/lib/youtube.ts`, `getPodcastEpisodes()`) — powers Watch and `llms.txt`'s live-episode section. Real-time, not hand-authored.
2. **Episode deep-dive collection** (`src/content/episodes/`, 12 real entries as of 2026-08-19) — narrative "Story" treatments on select episodes that earn a genuinely distinct deep-dive, deliberately different in voice/structure from both (a) the main site's leaner embed+FAQ episode pages and (b) generic recap writing. Per explicit standing brief: **"don't migrate episodes yet"** — the canonical video-first home for every real episode stays `wildadventuregirls.com/podcast/episodes/[slug]`; this collection is additive, not a migration. `videoId` anchors every entry to the same real YouTube video as its source of truth.

## Article/deep-dive architecture

Each entry: `title`, optional `metaTitle` (search-facing override), `videoId`, `publishDate`, `description`, `heroImage`, optional `durationSeconds`, `faqs[]` (schema generated from this exact array — can never drift from visible content), `hosts[]` (defaults to all three), optional `guest`, `topics[]` (shared vocabulary with the main site's topic hubs, plus podcast-only topics like `growing-up`), `clips[]`, `relatedEpisodes[]`, optional per-episode `destinations`.

## WAG Verdict architecture

One entry per real dilemma the hosts have actually debated on camera (`src/content/verdicts/`). `sourceEpisode` anchors every entry to real episode content — never an invented scenario (standing content-authenticity rule). `status: current | archived`; `revealText` is the hosts' real, already-recorded answer, never written before the real reveal. MVP scope: no user accounts, aggregate vote counts only via Netlify Blobs (`voteKey`).

## YouTube/podcast-platform relationships

Same WAG Podcast YouTube channel ID as the main site's connector (`UCtpzIWaE0ymZkF8DZKaL4mw`) — one real channel, read by both sites' own `lib/youtube.ts`, never two divergent sources of truth for the same feed. Spotify and Apple Podcasts via `/listen/`.

## Schema map

`PodcastEpisode`/`PodcastSeries` · `FAQPage` (generated from each episode's real `faqs` array) · Organization (referenced from the main site's canonical facts, Global Standard §6) — confirmed present across 27 files as of 2026-08-19, i.e. broad, real, existing coverage, not a gap this pass needed to fix.

## Sitemap map

`/sitemap-index.xml` (Astro default). No dedicated video sitemap currently — evaluate whether one is warranted once episode-page video volume justifies it (not yet, per Global Standard §1's video-sitemap requirement being "wherever a page's primary content is video," which the live-feed-driven Watch page arguably already is — flagged for future consideration, not built this pass).

## Dynamic `llms.txt`

**Fixed 2026-08-19** — was a static, hand-maintained file (`public/llms.txt`) that had already hit the exact staleness problem the main site's own `llms.txt.ts` comment documents solving. Converted to `src/pages/llms.txt.ts`, a dynamic Astro endpoint pulling the episode deep-dive collection, the live YouTube feed, and WAG Verdict history (current + archived, with real reveal quotes) on every build. Per Global Standard §3: this is a supplemental discovery aid, not proof of AI optimization.

## Canonical/slug policy

Episode deep-dive URLs (`/episodes/[slug]/`) use the collection entry's own frontmatter-defined filename as the slug — **stable by design**, unlike the main site's title-derived podcast slugs (Global Standard §0). This is a real, deliberate architectural difference between the two sites' episode-URL strategies, not an inconsistency to "fix" into matching — do not homogenize them.

## Redirects

No dedicated `_redirects` file content reviewed this pass beyond confirming zero redirect rules were processed in the 2026-08-19 deploy (expected — no redirect-requiring change was made to this site this pass).

## Analytics

Not directly audited this pass beyond confirming the site's deploy pipeline (Netlify, secret scan clean) and Search Console access. Revisit under Global Standard §14's periodic-audit cadence.

## Conversion paths

Episode consumption (video via YouTube embed, audio via Spotify/Apple) · podcast sponsor inquiry (`/sponsor/`) · interaction-platform participation (Verdict vote, Match quiz, Favorite Segment poll, Questions Featured submission) · email capture where present.

## Editorial / brand voice (real, verification-pass addition, 2026-08-19)

- **Voice:** conversational, direct-address, structured around real debate/disagreement between the three hosts ("WAG verdict:" callouts) — more analytical/structured than the main site's narrative recap voice for the *same* real episode (see Global Standard §7's Dating Red Flags example: same facts, deliberately different treatment).
- **Vocabulary:** "the hosts," "the episode," "WAG verdict," host names used individually and often (Angelina/Scarlett/Annabella), never "the kids." Direct Q&A framing ("Is X a red flag?") is this site's signature structure, distinct from the main site's prose-recap structure.
- **Claims boundaries:** never states an opinion as universal fact — every "verdict" is explicitly the hosts' real, recorded opinion, not asserted as general advice. Same minors-privacy boundaries as the main site (no exact locations, no last names without approval).
- **CTA style:** episode-native ("Listen on Spotify," "Watch the full episode," "Cast your Verdict vote") — tied to actual consumption/participation, not generic newsletter-style CTAs.
- **What doesn't belong here:** general WAG-brand content unrelated to the podcast (belongs on wildadventuregirls.com); a Stories-style article about a podcast episode (that's what this site's own deep-dive collection is for — never publish the same treatment on both domains).

## Known lessons/failures (real, dated)

- **2026-08-19: static `llms.txt` was already stale** relative to real episode/article content — fixed, see above. This is the second site to hit a variant of "hand-maintained file goes stale" (the first was the main site's own original `llms.txt`, already fixed before this pass) — worth treating as a recurring class, not two unrelated incidents.

## Real baseline (Ahrefs + Search Console, 2026-08-19)

DR 6 · **0 organic keywords, 0 organic traffic, 0 AI Overview/ChatGPT/Gemini/Perplexity/Copilot presence** — a genuinely new/low-authority site with no earned search visibility yet, not a technical fault (Site Audit: 100% health, 39 crawled pages, 0 errors; Search Console: Security Issues and Manual Actions both clean). 359 current referring domains, 526 backlinks, mostly nofollow (99.4% referring domains not followed). 13/39 Search Console-known URLs indexed — mostly "Discovered - currently not indexed" (23 of 26 not-indexed), consistent with a new site still being crawled/evaluated, not a structural problem.
