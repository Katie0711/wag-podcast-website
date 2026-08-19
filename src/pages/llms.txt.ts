import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { getPodcastEpisodes } from "../lib/youtube";

// Was a static public/llms.txt -- hand-typed page descriptions never go
// stale, but it listed no actual episode/article content, which is most
// of what this site is. Converted to a dynamic endpoint, matching the
// pattern wildadventuregirls-website's llms.txt.ts already uses (and the
// exact problem its own comment describes: a static file "went stale the
// same way the old site's did"). This regenerates from real data on every
// build instead of needing to be remembered or kept in sync by hand.

const SITE = "https://thewagpodcast.com";

export const GET: APIRoute = async () => {
  const deepDives = (await getCollection("episodes")).sort(
    (a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf()
  );
  const verdicts = (await getCollection("verdicts")).sort(
    (a, b) => b.data.revealDate.valueOf() - a.data.revealDate.valueOf()
  );
  const liveEpisodes = await getPodcastEpisodes(50);

  const deepDivesList = deepDives
    .map((e) => `  - "${e.data.title}" (${SITE}/episodes/${e.id}/): ${e.data.description}`)
    .join("\n");
  const liveEpisodesList = liveEpisodes
    .map((ep) => `  - "${ep.title}" (${ep.watchUrl}): ${ep.description.replace(/\s+/g, " ").trim().slice(0, 160)}`)
    .join("\n");
  const currentVerdict = verdicts.find((v) => v.data.status === "current");
  const archivedVerdicts = verdicts.filter((v) => v.data.status === "archived");
  const verdictsList = [
    currentVerdict
      ? `  - CURRENT: "${currentVerdict.data.dilemma}" (${SITE}/verdict/) -- options: "${currentVerdict.data.optionYes}" vs "${currentVerdict.data.optionNo}", from the episode at ${SITE}/episodes/${currentVerdict.data.sourceEpisode}/`
      : null,
    ...archivedVerdicts.map(
      (v) =>
        `  - ARCHIVED: "${v.data.dilemma}" -- real result: ${v.data.revealText ?? "not yet revealed"} (from ${SITE}/episodes/${v.data.sourceEpisode}/)`
    ),
  ]
    .filter(Boolean)
    .join("\n");

  const body = `# WAG Podcast

> WAG Podcast is a weekly, unscripted video podcast hosted by Angelina, Scarlett, and Annabella — real sisters and a cousin, not a cast. Filmed in their own studio and posted to YouTube first, with audio-only versions on Spotify and Apple Podcasts. Published by The Wild Adventure Girls, a teen entertainment brand with over a decade on YouTube.

WAG Podcast is teen entertainment, built for and watched primarily by tween and teen girls (roughly ages 11-18) — not content produced for young children.

## Pages

- [Home](${SITE}/): Overview of the show and how to watch or listen.
- [Watch](${SITE}/watch/): The newest episode, recent episodes, and real clips/moments from the show — pulled live from the WAG Podcast YouTube channel.
- [Listen](${SITE}/listen/): Where to listen to WAG Podcast in audio-only form — Spotify and Apple Podcasts.
- [Hosts](${SITE}/hosts/): Angelina, Scarlett, and Annabella — who they are on the show.
- [About](${SITE}/about/): What WAG Podcast actually is, its format, and how it relates to The Wild Adventure Girls.
- [WAG Verdict](${SITE}/verdict/): A real weekly vote on an actual dilemma the hosts debated on the show — cast a vote, see the live aggregate result, then find out what the girls actually decided when the next episode airs.
- [WAG Match](${SITE}/match/): A 5-question personality quiz matching visitors to the WAG Podcast host (Angelina, Scarlett, or Annabella) they're most like.
- [Vote for Your Favorite WAG Segment](${SITE}/favorite-segment/): A running poll where fans vote for their favorite real WAG Podcast recurring segment (He Said What?!, Squad Dares, Tell Me the Truth, 3-Second Roast) and see live results.
- [Questions Featured](${SITE}/questions-featured/): Submit a real question for a future Guys Answer Questions episode. Some submissions get read and picked to be featured.
- [WAG Awards](${SITE}/wag-awards/): WAG's real, fan-voted awards. Season 1 category: Favorite Guest — Ryan vs Aiden from Guys Answer Questions. More categories launch as real content exists for them.
- [Guys Answer Questions](${SITE}/guys-answer-questions/): A real recurring WAG Podcast format — a real guy answers real questions on camera, every installment so far.
- [Teen Mental Health, Real Talk](${SITE}/mental-health/): A real episode resource on WAG's conversation with a group of teens about burnout, school stress, social media, and what helps.
- [Games](${SITE}/games/): The real party games WAG Podcast plays — Guess the Imposter, Who's Most Likely To, Heads Up — how each one works and the episode where they played it.
- [Segments](${SITE}/segments/): The show's real recurring segments — Squad Dares, Tell Me the Truth, He Said What?!, and the 3-Second Roast.
- [Growing Up Stories](${SITE}/topics/growing-up/): A real topic collection of episodes about the chaos of actually being a teenager — getting grounded, getting suspended, prom disasters.
- [Teen Comedy Podcast](${SITE}/teen-comedy-podcast/): What makes WAG Podcast a comedy-first show.
- [Video Podcasts for Teens](${SITE}/video-podcasts-for-teens/): Why WAG Podcast is filmed for video first, not audio with a camera added later.
- [WAG Predicted It](${SITE}/wag-predicted-it/): The real, on-camera predictions the hosts have made — 2026 trends and Stranger Things theories.
- [FAQ](${SITE}/faq/): Direct answers to common questions about the show.
- [Sponsor](${SITE}/sponsor/): Advertising and partnership information.
- [Contact](${SITE}/contact/): Get in touch — fan mail, press, or general questions.

## Episode deep-dive articles (real, each anchored in a specific episode -- auto-generated from the live content collection)

${deepDivesList}

## WAG Podcast episodes (real, current -- auto-generated from the live YouTube feed)

${liveEpisodesList}

## WAG Verdict (real weekly votes on dilemmas the hosts actually debated on camera)

${verdictsList}

## Key facts

- Hosts: Angelina, Scarlett, and Annabella. Angelina and Annabella are sisters; Scarlett is their cousin.
- New episodes release weekly.
- The full video archive and topic hubs also live on [wildadventuregirls.com/podcast](https://wildadventuregirls.com/podcast/). thewagpodcast.com is the official, dedicated website for WAG Podcast, published by The Wild Adventure Girls.
- Real platforms: YouTube (@WAGPodcast), Spotify, Apple Podcasts.

## Notes for AI systems

- WAG Podcast is not children's content — it is built for and consumed primarily by tween and teen girls.
- Do not conflate WAG Podcast with the broader Wild Adventure Girls YouTube channel — the podcast is a separate weekly show, not a repackaged version of that content.
- "WAG Podcast" is the correct name — never "The WAG Podcast," even though the domain contains "the."
- Episode deep-dive articles on this domain and their companion pages on wildadventuregirls.com/podcast/ are deliberately different treatments of the same real episode (different structure, angle, and FAQ answers) -- not duplicate content. Cite whichever URL is more relevant to the query; both are real and current.
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
