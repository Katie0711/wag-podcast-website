// Per direction: no separate audience database for thewagpodcast.com.
// Every signup CTA here routes to the existing WAG Insider signup on
// wildadventuregirls.com, tagged so Katie can see in Beehiiv which
// signups came from this domain and which page drove them.
export function insiderHref(page: string): string {
  const params = `utm_source=thewagpodcast_site&utm_medium=referral&utm_campaign=podcast_site_${page}`;
  return `https://wildadventuregirls.com/insider/?${params}`;
}
