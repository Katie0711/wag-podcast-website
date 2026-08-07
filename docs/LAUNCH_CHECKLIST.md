# WAG Interaction Platform — Launch Checklist

Literal, ordered, do-this-then-that. Not an audit, not a roadmap — everything behind each line is already verified true as of 2026-08-07; this doc just tracks execution on launch day. Work top to bottom; each section assumes the one above it is done.

---

## 1. Podcast Repository — thewagpodcast-website

- [ ] Merge `feature/wag-match-quiz` → `main` (contains all 6 interactions — Verdict, Match, Favorite Segment, Questions Featured, WAG Awards, Seasonal Challenges scaffold. `feature/wag-verdict-mvp` is already an ancestor of this branch, so this is one merge, not two.)
- [ ] Confirm Netlify build succeeds on `main` post-merge — check the deploy log directly, don't assume green
- [ ] Confirm `BEEHIIV_API_KEY` is set in Netlify's **production** environment variables (Site settings → Environment variables) — the one item that could not be checked from this environment; do this before or immediately after merge, not after
- [ ] Deploy to production (automatic on merge via Netlify, or trigger manually)
- [ ] Verify production — load each live: `/verdict/`, `/match/`, `/favorite-segment/`, `/questions-featured/`, `/wag-awards/` — confirm each renders with no 404/500
- [ ] Verify Beehiiv — submit one real test consent on a live production page, confirm the subscriber appears in Beehiiv with the correct tag within a minute
- [ ] Verify analytics — GA4 Realtime/DebugView shows real events firing: `poll_vote_cast`, `quiz_completed`, `verdict_vote_cast`, `question_submitted`, `consent_transactional_checked`, `next_action_click`
- [ ] Verify schema — spot-check JSON-LD on 2–3 live interaction pages (Google Rich Results Test or view-source)
- [ ] Verify robots.txt — confirm none of the 5 new interaction pages are accidentally disallowed; confirm Seasonal Challenges stays `noindex` (still `LIVE = false`)
- [ ] Verify sitemap — `sitemap-index.xml` includes the new interaction pages
- [ ] Verify `llms.txt` lists the new pages (it already does on the feature branch — confirm it survived the merge)

## 2. Wild Adventure Girls Repository — wildadventuregirls-website

- [ ] Merge `fix/share-menu-stuck-open` → `main` (contains the reciprocal cross-links to the podcast interactions, the `/speaking/` filter-pill fix, and the robots.txt sitemap fix — confirm no conflicts with the direct-to-`main` hotfixes already shipped this session)
- [ ] Confirm Netlify build succeeds
- [ ] Deploy to production
- [ ] Verify cross-links — homepage, girl profile pages, podcast page, speaking page, and brand-partnerships page each link out to the now-live thewagpodcast.com interactions (not to Seasonal Challenges, which is still coming-soon)
- [ ] Verify homepage — loads clean, no console errors, "Formats & Games" Explore module renders all 5 live interactions
- [ ] Verify podcast-page links resolve to real production URLs (not a dev/localhost leftover)

## 3. Beehiiv

- [ ] Confirm `WAG Insider Welcome` automation is published/live (already confirmed live 2026-08-07)
- [ ] Confirm `Verdict Reveal Notification` automation is published/live (already confirmed live; its segment was stale and has been recalculated this session)
- [ ] Confirm the subscribe-form theme is correct and published
- [ ] Verify production API key — the Netlify-side check above; do this here too since it's the same fact from the Beehiiv side
- [ ] Verify automations — re-check `enrolled_count` a few hours after launch to confirm real subscribers are actually being enrolled, not just tagged
- [ ] Verify tags — all 6 interaction tags (`verdict`, `wag-match`, `favorite-segment`, `questions-featured`, `wag-awards`, `seasonal-challenges`) match `ALLOWED_TRANSACTIONAL_TAGS` exactly (confirmed this session, recheck after merge in case the whitelist changes)
- [ ] Verify segments — recalculate all 6 dynamic segments right before launch (not just Verdict's), so none of them start launch day stale the way `Verdict Reveal Recipients` did

## 4. Google

- [ ] Sitemap — confirm both sites' sitemaps reflect the post-merge URL set; resubmit in Search Console if coverage lags
- [ ] Search Console — request indexing for the 5 new live interaction pages individually (URL Inspection → Request Indexing)
- [ ] Robots.txt — recheck both sites' live robots.txt post-deploy (both already fixed this session; confirm the merge didn't reintroduce the old version)
- [ ] `llms.txt` — confirm both sites' files are current against the post-merge page set

## 5. Launch

- [ ] Production smoke test — full click-through of all 5 live interactions end-to-end on real production URLs, not localhost
- [ ] Mobile — check at least Verdict and Match on a real mobile viewport
- [ ] Desktop — same check on desktop
- [ ] Newsletter — decide whether a launch-announcement broadcast goes out via Beehiiv (no such broadcast is drafted yet — only the transactional per-interaction automations exist)
- [ ] YouTube description updates — add links to the new interactions in the description of the most relevant live videos
- [ ] Pinned comments — pin a comment linking to the new interactions on those same videos

---

*This is the one merge/deploy decision that's Katie's alone. Everything above it is already built and verified pre-launch; this checklist starts at "merge."*
