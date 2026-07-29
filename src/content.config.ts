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
    videoId: z.string(), // the real YouTube video ID -- same source of truth as the main site
    publishDate: z.date(),
    description: z.string(),
    heroImage: z.string(),
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

export const collections = { episodes, clips };
