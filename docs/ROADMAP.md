# WAG Master Roadmap

The single source of truth for where the company's technical roadmap stands. Update this file as work happens — don't let status live only in chat history. Any future session (human or AI agent) should be able to read this file and know exactly what's real, what's in flight, and what's next, without reconstructing it from old conversations.

**Legend:** ✅ Completed &nbsp; 🚧 In Progress &nbsp; ⏸ Blocked &nbsp; 💡 Opportunity &nbsp; 🛠 Technical Debt &nbsp; 📈 Growth Experiment &nbsp; 💰 Revenue Opportunity &nbsp; 🤖 Future AI Agent Opportunity

---

## ✅ Completed

- 6-interaction platform built on shared architecture: WAG Verdict, WAG Match, Vote for Your Favorite WAG Segment, Questions Featured, WAG Predicted It (extended), WAG Awards Season 1. All live-tested locally end-to-end (real votes/submissions hitting real Netlify Blobs + Beehiiv-ready endpoints).
- Shared components: `VoteWidget`, `PollWidget`, `QuizWidget`, `ConsentCheckboxPair` (generalized), `SponsorSlot`, `WhatsNext`, `ShareSheet`, `Breadcrumb`.
- Shared APIs: `/api/interaction-consent`, `/api/poll-vote`, `/api/question-submit` (Verdict's original pair kept separate, untouched, already production-verified).
- Beehiiv fully wired: real tags per interaction, real segments backing every "email me when X happens" promise, subscribe-form theme and both automations confirmed live/published.
- Abuse protection: shared rate limiter (`src/lib/rateLimit.ts`) live on all 3 public POST endpoints — verified with a real 429 after the limit.
- Uniform analytics: `next_action_click` tracking fires on every interaction page via the shared `WhatsNext` component (one change, live everywhere).
- `docs/ARCHITECTURE.md` — one-page navigation index for the whole interaction platform.
- `docs/DISTRIBUTION.md` — reusable per-interaction launch-copy template, worked example for WAG Match.
- WAG Ecosystem Build Spec PDF — delivered to Katie, covers philosophy/architecture/status/roadmap as of build time.
- Wild Adventure Girls audit round 1: all 5 live interactions cross-linked from the main site (girl profile pages, hosts hub, podcast page, homepage); "Interactive Sponsorships" added as real listed sponsor inventory on brand-partnerships.

## 🚧 In Progress

- Distribution framework: template built; per-interaction copy only drafted for WAG Match so far.
- WildAdventureGirls.com continuous audit (treated as ongoing, not one-time).

## ⏸ Blocked (needs Katie)

- **Production launch decision** — nothing built this week is live to real users. All 6 interactions sit on the unmerged `feature/wag-match-quiz` branch pending final review.
- **Community Chooses** — real forward-looking audience-decision format, fully reserved and architecturally ready (`PollWidget` needs zero new code), waiting on a real upcoming decision from Katie to attach it to.
- **Seasonal Challenges** — infrastructure-only, `LIVE = false`, waiting on real challenge content.
- **wagmediapartners.com conflict** — decision needed from Katie (carried from earlier in the project).

## 💡 Opportunities

- Sponsor-facing one-pager for the new interactive inventory — infrastructure exists, sales collateral doesn't yet.
- Convert real interaction results into distributable content once real votes accumulate ("X% of fans said...").
- Cross-brand reuse: the entire interaction engine (Quiz/Poll/Consent/Sponsor/Analytics) is brand-agnostic and ready to theme for HorseSmart Kids or any future brand with zero new component code.

## 🛠 Technical Debt

- Shared episode-date formatter — UTC/local off-by-one risk flagged; Verdict's own reveal-date already forces `timeZone: "UTC"` explicitly, but the general episode `publishDate` formatting hasn't been audited/fixed the same way yet. Not yet located precisely — next session should grep both repos for every `toLocaleDateString` call on a content-collection date and confirm each one either forces UTC or has a documented reason not to.
- No admin/moderation view for Questions Featured submissions — currently readable only by querying Netlify Blobs directly.

## 📈 Growth Experiments (not started)

- None launched yet — depends on production go-live.

## 💰 Revenue Opportunities

- Interactive Sponsorships (Verdict/Match/Awards/Community/Seasonal) — real inventory, no sales collateral yet, no sponsor sold yet.
- HorseSmart Kids — flagged by Katie as potentially a full company on its own (membership, curriculum, parent/trainer platforms, AI coach, certification, marketplace), deliberately deferred but kept visible.

## 🤖 Future AI Agent Opportunities

- Business Intelligence agent ("what happened this week?" — wins/losses/SEO opportunities/broken pages/sponsorship opportunities) — explicitly deferred, design data sources to support it later.
- AI layer across interactions (summaries, recommendations, personalization, moderation) — not building yet, keep architecture ready.

## Long-term systems named but not yet built

Launch System (checklist → soft launch → internal → family → beta → public → 30/90-day review), Business Dashboard (CEO cockpit across YouTube/websites/interactions/Beehiiv/revenue/financials), Business Intelligence Agent, Content Production System (episode → transcript → article → quiz → newsletter → shorts → socials → sponsor), Knowledge Base, Content Calendar, Sponsor CRM, Product Pipeline, Community Layer (profiles/badges/streaks/leaderboards). Full detail lives in the operator's own memory system (`wag_five_pillars_and_long_term_roadmap`) — check there before assuming any of these are further along than listed here.

---

*Keep this file synchronized with reality — update it in the same commit as the work it describes, not as an afterthought.*
