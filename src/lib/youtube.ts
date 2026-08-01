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
 * Legacy fallback, used only when no YOUTUBE_API_KEY is configured for
 * this project. The RSS feed caps at the channel's 15 most recent
 * uploads (Shorts and long-form mixed), so real episodes silently fall
 * out of this window once enough Shorts get posted in between -- see
 * fetchAllUploads below for the real fix.
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

async function getFeedViaRss(): Promise<SplitFeed> {
  const candidates = await fetchChannelFeed();
  const flags = await Promise.all(candidates.map((c) => isLongForm(c.videoId)));
  const episodes = candidates
    .filter((_, i) => flags[i])
    .map((c) => ({ ...c, watchUrl: `https://www.youtube.com/watch?v=${c.videoId}` }));
  const clips = candidates
    .filter((_, i) => !flags[i])
    .map((c) => ({ videoId: c.videoId, title: c.title, publishedAt: c.publishedAt, thumbnailUrl: c.thumbnailUrl, shortUrl: `https://www.youtube.com/shorts/${c.videoId}` }));
  return { episodes, clips };
}

/**
 * The real fix for episodes silently disappearing under the RSS feed's
 * 15-upload cap: the Data API's uploads-playlist endpoint has no such
 * cap -- paginate it (up to MAX_UPLOADS as a sane ceiling) to see
 * everything. Swapping "UC" -> "UU" at the start of a channel ID is
 * YouTube's standard, documented way to get that channel's uploads
 * playlist ID without an extra lookup call. Same pattern already
 * proven on wildadventuregirls.com's own src/lib/youtube.ts.
 */
const MAX_UPLOADS = 300;

async function fetchAllUploads(apiKey: string): Promise<RawEntry[]> {
  const uploadsPlaylistId = WAG_PODCAST_CHANNEL_ID.replace(/^UC/, "UU");
  const entries: RawEntry[] = [];
  let pageToken = "";

  do {
    const url = new URL("https://www.googleapis.com/youtube/v3/playlistItems");
    url.searchParams.set("part", "snippet,contentDetails");
    url.searchParams.set("playlistId", uploadsPlaylistId);
    url.searchParams.set("maxResults", "50");
    url.searchParams.set("key", apiKey);
    if (pageToken) url.searchParams.set("pageToken", pageToken);

    const res = await fetch(url.toString());
    if (!res.ok) break;
    const data: any = await res.json();

    for (const item of data.items ?? []) {
      const videoId = item.contentDetails?.videoId;
      if (!videoId) continue;
      // i.ytimg.com thumbnail URLs from the Data API aren't allowlisted
      // by this site's CSP img-src (only img.youtube.com is) -- build
      // the URL on that domain ourselves instead of using the one the
      // API returns.
      entries.push({
        videoId,
        title: item.snippet?.title ?? "",
        description: item.snippet?.description ?? "",
        publishedAt: item.contentDetails?.videoPublishedAt ?? item.snippet?.publishedAt ?? "",
        thumbnailUrl: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
      });
    }

    pageToken = data.nextPageToken ?? "";
  } while (pageToken && entries.length < MAX_UPLOADS);

  return entries;
}

/** ISO 8601 duration (e.g. "PT13M28S") -> whole seconds. */
function parseIsoDurationSeconds(iso: string): number {
  const match = iso.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!match) return 0;
  const [, h, m, s] = match;
  return (Number(h) || 0) * 3600 + (Number(m) || 0) * 60 + (Number(s) || 0);
}

// Real long-form episodes all run well past 10 minutes; real Shorts are
// well under a minute. 3 minutes sits safely between the two.
const LONG_FORM_THRESHOLD_SECONDS = 180;

async function getFeedViaDataApi(apiKey: string): Promise<SplitFeed> {
  const uploads = await fetchAllUploads(apiKey);
  if (uploads.length === 0) return { episodes: [], clips: [] };

  const durationByVideoId = new Map<string, number>();
  for (let i = 0; i < uploads.length; i += 50) {
    const batch = uploads.slice(i, i + 50);
    const url = new URL("https://www.googleapis.com/youtube/v3/videos");
    url.searchParams.set("part", "contentDetails");
    url.searchParams.set("id", batch.map((b) => b.videoId).join(","));
    url.searchParams.set("key", apiKey);

    const res = await fetch(url.toString());
    if (!res.ok) continue;
    const data: any = await res.json();
    for (const item of data.items ?? []) {
      durationByVideoId.set(item.id, parseIsoDurationSeconds(item.contentDetails?.duration ?? "PT0S"));
    }
  }

  const episodes: PodcastEpisode[] = [];
  const clips: PodcastClip[] = [];
  for (const entry of uploads) {
    const seconds = durationByVideoId.get(entry.videoId) ?? 0;
    if (seconds > LONG_FORM_THRESHOLD_SECONDS) {
      episodes.push({ ...entry, watchUrl: `https://www.youtube.com/watch?v=${entry.videoId}` });
    } else {
      clips.push({ videoId: entry.videoId, title: entry.title, publishedAt: entry.publishedAt, thumbnailUrl: entry.thumbnailUrl, shortUrl: `https://www.youtube.com/shorts/${entry.videoId}` });
    }
  }

  return { episodes, clips };
}

let cachedFeed: Promise<SplitFeed> | null = null;

/**
 * One fetch per build, shared by getPodcastEpisodes and getPodcastClips.
 * Uses the Data API (full, reliable channel coverage) when
 * YOUTUBE_API_KEY is set; falls back to the capped RSS feed otherwise so
 * the site still builds without one.
 */
function getSplitFeed(): Promise<SplitFeed> {
  if (!cachedFeed) {
    const apiKey = import.meta.env.YOUTUBE_API_KEY;
    cachedFeed = (apiKey ? getFeedViaDataApi(apiKey) : getFeedViaRss()).catch(() => ({ episodes: [], clips: [] }));
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
