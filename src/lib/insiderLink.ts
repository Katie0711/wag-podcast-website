// Per direction: no separate audience database for thewagpodcast.com.
// Every signup CTA here routes to the existing WAG Insider signup on
// wildadventuregirls.com, tagged so Katie can see in Beehiiv which
// signups came from this domain and which page drove them.
export function insiderHref(page: string): string {
  const params = `utm_source=thewagpodcast_site&utm_medium=referral&utm_campaign=podcast_site_${page}`;
  return `https://wildadventuregirls.com/insider/?${params}`;
}

// Contextual CTA copy for the generic WhatsNext subscribe button (added
// 2026-09-16). Real interactive-format pages (Verdict, Match, Awards,
// Favorite Segment, Questions Featured) already have their own specific
// opt-in checkbox with its own Beehiiv tag -- this WhatsNext CTA is a
// separate, more general Insider signup, so its copy should point at
// what Insider itself actually delivers for that context, not duplicate
// or overclaim the specific format's own promise. Every other page
// (episodes, topics, hosts) keeps the existing episode-cadence copy,
// which is genuinely true there.
const INTERACTIVE_FORMAT_PAGES = new Set(["verdict", "match", "favorite-segment", "wag-predicted-it", "questions-featured", "games", "games-heads-up", "games-most-likely"]);

export function insiderCtaLabel(page: string): string {
  if (INTERACTIVE_FORMAT_PAGES.has(page)) return "Get notified about the next one";
  return "Never Miss an Episode";
}
