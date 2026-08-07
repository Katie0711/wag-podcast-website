import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Backs /episodes/[slug] -- narrative "Story" deep dives on select real
// episodes, distinct in voice and angle from both (a) the main site's
// leaner embed+FAQ episode pages and (b) its reflective first-person
// podcast-articles essays, so the two domains don't compete for the
// same search intent on the same episode. Per Katie's explicit brief:
// "don't migrate episodes yet" -- every real episode's canonical
// video-first home stays wildadventuregirls.com/podcast/episodes/[slug]
// (driven live off the YouTube feed, see that repo's src/lib/youtube.ts).
// This collection is additive, not a migration: only episodes that earn
// a genuinely distinct deep-dive get an entry here, `videoId` keeps
// every entry anchored to the same real YouTube video as its source of
// truth, and fields like transcript/guest/topic tags let an entry go
// deeper than the live-feed-driven model ever could.
const episodes = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/episodes" }),
  schema: z.object({
    title: z.string(),
    // Search-facing <title> override, when it needs to differ from the
    // real on-page H1 (e.g. a shorter, more literal phrasing for the
    // title tag vs. a fuller H1) -- same pattern as the main site's
    // episodeSeoTitles.ts. Falls back to `title` when unset.
    metaTitle: z.string().optional(),
    videoId: z.string(), // the real YouTube video ID -- same source of truth as the main site
    publishDate: z.date(),
    description: z.string(),
    heroImage: z.string(),
    // Real, verified only -- the actual episode runtime in seconds, when
    // known, powers PodcastEpisode schema's timeRequired. Never guessed.
    durationSeconds: z.number().optional(),
    // Direct-answer Q&As for on-page "Quick Answers" + FAQPage schema.
    // Schema is generated from this exact array, so it can never drift
    // from what's actually visible on the page.
    faqs: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    // All three co-host every episode by default (a standing fact, not
    // a per-episode guess) -- override only when an episode is real and
    // different (e.g. a solo or two-host cut).
    hosts: z.array(z.enum(["angelina", "scarlett", "annabella"])).default(["angelina", "scarlett", "annabella"]),
    guest: z.object({ name: z.string(), description: z.string() }).optional(),
    // References the same topic vocabulary as the main site's topic
    // hubs (friendship-relationships, mental-health-real-talk,
    // games-challenges, scary-close-calls, pop-culture-trends) plus any
    // topics that come to live only on this domain (e.g. growing-up) --
    // kept as a free string, not an enum, so this file doesn't have to
    // change every time a new topic hub is approved.
    topics: z.array(z.string()).default([]),
    clips: z.array(z.string()).default([]), // slugs of entries in the clips collection
    relatedEpisodes: z.array(z.string()).default([]), // slugs of other episodes entries
    // Per-episode deep links, when a platform provides one -- falls
    // back to the show-level Spotify/Apple links when unset.
    destinations: z.object({
      spotify: z.string().optional(),
      apple: z.string().optional(),
    }).optional(),
    // Real, verbatim transcript text goes in the markdown body when WAG
    // has one for a given episode -- optional, never fabricated or
    // auto-generated as a placeholder.
  }),
});

// Phase 2 infrastructure only -- see note on `episodes` above. Mirrors
// the relationship WAG Podcast Clips already has to full episodes on
// wildadventuregirls.com/podcast/clips, without duplicating that page:
// this model exists so thewagpodcast.com can eventually build its own
// clips experience (e.g. grouped by topic, or paired with the episode
// content model above) rather than re-listing the same Shorts feed.
const clips = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/clips" }),
  schema: z.object({
    title: z.string(),
    videoId: z.string(), // real YouTube Shorts ID
    episode: z.string(), // slug of the parent entry in the episodes collection
    hosts: z.array(z.enum(["angelina", "scarlett", "annabella"])).default([]),
    topic: z.string(), // single primary topic -- a clip is one moment, not a multi-topic page
    publishDate: z.date(),
    thumbnail: z.string(),
    watchUrl: z.string(), // real YouTube Shorts URL
  }),
});

// Backs /verdict/ -- WAG Verdict, the flagship recurring interaction.
// One entry per real dilemma the hosts have actually debated on camera;
// `sourceEpisode` anchors every entry to real episode content, never an
// invented scenario (see the content-authenticity standing rule). MVP
// scope only: no user accounts, no per-voter identity, no leaderboard --
// `voteKey` is just the Netlify Blobs key the vote API route reads/writes
// aggregate counts under. `status` controls whether an entry is the
// current live vote or has moved to the archive; `revealText` is the
// hosts' real, already-recorded answer, shown once an entry is revealed
// (never written before the real reveal date).
const verdicts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/verdicts" }),
  schema: z.object({
    dilemma: z.string(), // the real yes/no question put to the audience
    optionYes: z.string(), // real, specific label -- not a bare "Yes"
    optionNo: z.string(), // real, specific label -- not a bare "No"
    voteKey: z.string(), // Netlify Blobs key, e.g. "verdict-location-tracking"
    sourceEpisode: z.string(), // slug of the real entry in the episodes collection this dilemma comes from
    revealDate: z.date(),
    status: z.enum(["current", "archived"]),
    // The hosts' own real, already-recorded answer/quote -- only ever
    // filled in from real episode content, never invented to manufacture
    // a "reveal." Optional because a brand-new current entry may not
    // have one yet if the reveal hasn't been recorded.
    revealText: z.string().optional(),
    relatedArticleSlug: z.string().optional(), // only set once a standalone article genuinely earns its own page

    // --- Schema headroom, per Katie's "won't need a rewrite in 6 months"
    // instruction -- these fields exist so the shape doesn't have to
    // change later, but nothing in the MVP page/API reads or writes them
    // yet. Don't build UI or logic around them until they're needed.
    relatedEpisodes: z.array(z.string()).default([]), // additional episode slugs beyond sourceEpisode
    relatedVideoIds: z.array(z.string()).default([]), // real YouTube video/Shorts IDs (e.g. a future reveal clip)
    sponsor: z.object({
      name: z.string(),
      logoUrl: z.string().optional(),
      url: z.string(),
    }).optional(), // unset = the page renders its WAG-owned fallback, never sales copy
    season: z.string().optional(), // e.g. "2026-fall" -- for a future seasonal archive grouping
    // Which brand this entry belongs to, so the same collection/engine
    // can back a future wildadventuregirls.com Verdict without a schema
    // change -- always "wag-podcast" until that adaptation actually happens.
    brand: z.enum(["wag-podcast", "wag-main"]).default("wag-podcast"),
  }),
});

export const collections = { episodes, clips, verdicts };
