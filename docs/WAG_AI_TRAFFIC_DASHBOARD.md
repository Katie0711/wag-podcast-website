# WAG AI Traffic Dashboard v1

**Real, live-pulled GA4 data, 2026-08-10.** Both properties already have this natively broken out — GA4's default channel grouping includes an "AI Assistant" category, and `chatgpt.com / ai-assistant` shows up as a distinct source/medium on both WAG sites. No custom tracking was needed to find this; it was already being captured, just never pulled and looked at as its own line of business intelligence until now.

## The real numbers (28 days, Jul 13 - Aug 9, 2026)

| Property | Sessions from `chatgpt.com / ai-assistant` | As first-touch (first-ever visit) | Share of total sessions |
|---|---|---|---|
| wildadventuregirls.com | 8 | 8 (all 8 were someone's first-ever visit to the site) | ~2.3% of 349 total sessions this window |
| thewagpodcast.com | 8 | Not in the top-5 first-user sources (likely returning-user sessions, or just below the cutoff) | ~6.5% of ~123 total sessions this window |

**16 real sessions across both properties in 28 days, entirely from ChatGPT.** No Gemini, Claude, Perplexity, or Copilot referral traffic appeared in either property's top-7 source list — meaning either genuinely zero from those assistants so far, or real volume below the visible threshold. Worth a proper Explore-report pull (not just the Reports-snapshot top-7 cards) if you want a definitive "exactly zero" answer rather than "not in the top 7."

## What this means, honestly

- **This is real, not noise.** 8 sessions on wildadventuregirls.com were each someone's literal first visit to the site, arriving via a ChatGPT link/citation — that's a real discovery channel already working, not a fluke single click.
- **It's small in absolute terms** (2-6% of total sessions) but notable because it exists at all on a site this size, and because it's a channel WAG has done zero deliberate work to earn — this is organic AI-assistant citation, not a campaign.
- **thewagpodcast.com's relative share (6.5%) is higher than the main site's (2.3%)** despite the podcast site having far less overall traffic and no Search Console history to speak of — worth watching as the podcast site matures, since AI-assistant discovery may not require the same accumulated domain authority that traditional Google ranking does.

## What would sharpen this next

1. **A real Explore free-form report** (not the Reports-snapshot cards, which only show top-7) filtered explicitly to `sessionDefaultChannelGroup = AI Assistant`, broken out by exact source, to catch any Gemini/Claude/Perplexity/Copilot traffic sitting below the current visible cutoff.
2. **Landing page for each AI-assistant session** — which specific pages ChatGPT is actually citing/linking to. That tells you what content is already working for AI discovery, the same way Search Console's top queries tell you what's working for Google.
3. **A recurring pull cadence** (monthly, alongside the existing Search Console/GA4 health checks) rather than a one-time snapshot — this channel is new and likely to grow; a single data point can't show trend.

## Where this lives

Logged as real canonical facts in **WAG Brain** (`canonical_facts` table, company-wide scope) so this doesn't evaporate back into a chat transcript — see `WAG_OS_ARCHITECTURE_PROPOSAL.md` for why measurement facts belong in the structured database, not just a markdown snapshot. This doc is the readable view; the database is the source of truth for future pulls to compare against.
