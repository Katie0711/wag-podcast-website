import { XMLParser } from "fast-xml-parser";

// WAG Podcast channel -- same channel ID as the one already verified and
// in use on wildadventuregirls.com's src/lib/youtube.ts.
export const WAG_PODCAST_CHANNEL_ID = "UCtpzIWaE0ymZkF8DZKaL4mw";

export type PodcastEpisode = {
  videoId: string;
  title: string;
  description: string;
  publishedAt: string; // ISO date
  thumbnailUrl: string;
  watchUrl: string;
};

export type PodcastClip = {
  videoId: string;
  title: string;
  publishedAt: string; // ISO date
  thumbnailUrl: string;
  shortUrl: string;
};

const parser = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: "@_" });

type RawEntry = {
  videoId: string;
  title: string;
  description: string;
  publishedAt: string;
  thumbnailUrl: string;
};

/**
 * RSS-only, no API key -- this domain doesn't share the main site's
 * YOUTUBE_API_KEY secret. The RSS feed caps at the channel's 15 most
 * recent uploads (Shorts and long-form mixed), which is a real
 * limitation for a full archive, but is exactly what a "recent
 * episodes" strip needs -- the full archive stays canonical on
 * wildadventuregirls.com.
 */
async function fetchChannelFeed(): Promise<RawEntry[]> {
  const url = `https://www.youtube.com/feeds/videos.xml?channel_id=${WAG_PODCAST_CHANNEL_ID}`;
  const res = await fetch(url);
  if (!res.ok) return [];
  const xml = await res.text();
  const data = parser.parse(xml);

  const rawEntries = data?.feed?.entry;
  const entries = Array.isArray(rawEntries) ? rawEntries : rawEntries ? [rawEntries] : [];

  return entries.map((entry: any): RawEntry => {
    const videoId = entry["yt:videoId"];
    const mediaGroup = entry["media:group"] ?? {};
    return {
      videoId,
      title: entry.title,
      description: mediaGroup["media:description"] ?? "",
      publishedAt: entry.published,
      thumbnailUrl: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
    };
  });
}

/**
 * YouTube redirects /shorts/{id} to /watch?v={id} (303) for anything
 * that isn't actually a Short, and serves the Shorts player directly
 * (200) for ones that are -- that's the classification signal.
 */
async function isLongForm(videoId: string): Promise<boolean> {
  try {
    const res = await fetch(`https://www.youtube.com/shorts/${videoId}`, {
      method: "HEAD",
      redirect: "manual",
      signal: AbortSignal.timeout(6000),
    });
    return res.status >= 300 && res.status < 400;
  } catch {
    return false;
  }
}

type SplitFeed = { episodes: PodcastEpisode[]; clips: PodcastClip[] };

let cachedFeed: Promise<SplitFeed> | null = null;

function getSplitFeed(): Promise<SplitFeed> {
  if (!cachedFeed) {
    cachedFeed = (async () => {
      const candidates = await fetchChannelFeed();
      const flags = await Promise.all(candidates.map((c) => isLongForm(c.videoId)));
      const episodes = candidates
        .filter((_, i) => flags[i])
        .map((c) => ({ ...c, watchUrl: `https://www.youtube.com/watch?v=${c.videoId}` }));
      const clips = candidates
        .filter((_, i) => !flags[i])
        .map((c) => ({ videoId: c.videoId, title: c.title, publishedAt: c.publishedAt, thumbnailUrl: c.thumbnailUrl, shortUrl: `https://www.youtube.com/shorts/${c.videoId}` }));
      return { episodes, clips };
    })().catch(() => ({ episodes: [], clips: [] }));
  }
  return cachedFeed;
}

/** Real episodes from the WAG Podcast channel feed, sorted newest first. Re-fetched every build. */
export async function getPodcastEpisodes(limit = 12): Promise<PodcastEpisode[]> {
  try {
    const { episodes } = await getSplitFeed();
    const sorted = [...episodes].sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt));
    return sorted.slice(0, limit);
  } catch {
    return [];
  }
}

/** Real Shorts/clips from the same channel feed, sorted newest first. */
export async function getPodcastClips(limit = 8): Promise<PodcastClip[]> {
  try {
    const { clips } = await getSplitFeed();
    const sorted = [...clips].sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt));
    return sorted.slice(0, limit);
  } catch {
    return [];
  }
}
