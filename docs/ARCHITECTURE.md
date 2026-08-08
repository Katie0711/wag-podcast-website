# WAG Interaction Platform — Architecture Index

One page to find anything. This is a map, not a tutorial — read the linked source file for real detail.

## Content Freshness Model (ecosystem-wide standard, added 2026-08-08)

**Published media freshness is automated; editorial content is additive.** A new YouTube upload (podcast or main channel) should surface on the relevant site without anyone touching a file. A written article is a genuine, separate, deliberately curated asset — it connects to the live upload automatically via the shared `videoId`/`youtubeId` field when one exists, and simply doesn't block anything when it doesn't. Do not build a new content system where the existing YouTube/content-collection join already solves the problem — this is the resolution to the earlier "should we build a unified content graph" question (see `FUTURE_OPPORTUNITIES.md` → WAG Knowledge Graph): the join key already exists, use it everywhere a cross-system link is needed.

This site's homepage (`src/pages/index.astro`) already followed this pattern (`getPodcastEpisodes` → live YouTube Data API, joined to the `episodes` collection by `videoId`, graceful fallback when no article exists). The same fix was applied to wildadventuregirls.com's homepage 2026-08-08 — see that repo's `docs/ARCHITECTURE.md` § Content Freshness Model for its per-surface audit (several surfaces there are still manual; not every surface converts in one pass, and some — like hand-curated "related episodes" — are intentionally editorial, not a freshness gap).

**Standing test for any future page:** is this surface dynamic (latest uploads, latest episodes, recent articles — should auto-update) or editorial (cornerstone pages, curated guides, flagship resources — should stay intentionally selected until there's a real reason to change)? Automate the former, protect the latter.

## Where each interaction lives

| Interaction | Page | Engine | API | Beehiiv tag | Storage key |
|---|---|---|---|---|---|
| WAG Verdict | `src/pages/verdict/index.astro` | `VoteWidget.astro` (binary yes/no) | `/api/verdict-vote` (votes), `/api/verdict-consent` (email) | `verdict` | `wag-verdict-votes` blob store, key = `voteKey` |
| WAG Match | `src/pages/match/index.astro` | `QuizWidget.astro` (multi-Q personality quiz) | `/api/interaction-consent` (email only — no server-side vote) | `wag-match` | `wag_quiz_match` (localStorage only) |
| Vote for Your Favorite Segment | `src/pages/favorite-segment/index.astro` | `PollWidget.astro` (N-option poll) | `/api/poll-vote` (votes), `/api/interaction-consent` (email) | `favorite-segment` | `wag-poll-votes` blob store, key = `pollKey` (`"favorite-segment"`) |
| Questions Featured | `src/pages/questions-featured/index.astro` | Inline submit form (not componentized — first and only consumer so far) | `/api/question-submit` (one Blobs key per submission), `/api/interaction-consent` (email) | `questions-featured` | `wag-featured-questions` blob store, key = `{timestamp}-{random}` |
| WAG Predicted It | `src/pages/wag-predicted-it/index.astro` | 3× `PollWidget.astro` (one per real prediction, "called it / way off") | `/api/poll-vote`, no consent capture (no future reveal to notify about) | — | `wag-poll-votes` blob store, keys = `predicted-summer-kiss` / `predicted-will-byers` / `predicted-st-ending` |
| WAG Awards | `src/pages/wag-awards/index.astro` | `PollWidget.astro` (Season 1: 1 category) | `/api/poll-vote`, `/api/interaction-consent` | `wag-awards` | `wag-poll-votes` blob store, key = `awards-favorite-guest` |
| Seasonal Challenges | `src/pages/seasonal-challenges/index.astro` | **Scaffolded, not live.** `LIVE = false` flag renders an honest "coming soon" state. | Wired but unused: `seasonal-challenges` tag already exists in the consent whitelist. | `seasonal-challenges` | none yet |

## Shared components (`src/components/`)

- **`VoteWidget.astro`** — binary yes/no vote. Verdict-only, kept untouched (battle-tested end-to-end in dev/staging before the generic pattern existed) rather than generalized further. **Correction (2026-08-07): not actually live on production `main`** — Verdict's page and API routes exist only on the unmerged `feature/wag-match-quiz` branch, same as every other interaction. An earlier note here overstated this as "production-verified"; it means verified pre-launch, not deployed.
- **`PollWidget.astro`** — N-option vote. The generalized sibling of VoteWidget; every new multi-option poll reuses this, zero new component code. Props: `pollKey`, `question`, `options: {key, label}[]`, `initialCounts: Record<string, number>`.
- **`QuizWidget.astro`** — multi-question personality quiz, tallies answers client-side, reveals one of N results. Props: `quizKey`, `questions: {q, options: {label, resultKey}[]}[]`, `results: {key, name, tagline, description, photo, ctaLabel, ctaHref}[]`.
- **`ConsentCheckboxPair.astro`** — the shared transactional/marketing email-consent capture. Generalized (2026-08-06) with optional props (`apiEndpoint`, `transactionalTag`, `revealEvent`, `storageKey`) that all default to Verdict's original exact behavior, so Verdict itself needed zero changes. New interactions pass `apiEndpoint="/api/interaction-consent"` + their own `transactionalTag`.
- **`SponsorSlot.astro`** — real sponsor-inventory slot. Unfilled (`sponsor` prop unset) renders a WAG-owned fallback CTA; the moment a sponsor is sold, pass `sponsor={{name, logoUrl?, url}}` — no template change needed. Every interaction page has one.
- **`WhatsNext.astro`** — end-of-page "what's next" block: cross-link grid + `ShareSheet` + WAG Insider CTA. Every interaction ends with one.
- **`ShareSheet.astro`** — native Web Share API + fallback deep-link menu (SMS, WhatsApp, X, Facebook, email, copy link).
- **`Breadcrumb.astro`** — renders visible breadcrumb + `BreadcrumbList` JSON-LD.

### These components are the "future software" engines, already

Per Katie's standing framing (2026-08-07): WAG isn't building software to sell today, but every reusable component here already **is** the internal-operating-system module that framing describes, whether or not it's ever sold — no new abstraction needed to make that true, just naming it plainly:

- `PollWidget` + `poll-vote.ts` = the voting/polling engine.
- `QuizWidget` = the quiz/personality-match engine.
- `VoteWidget` = the binary-decision engine (Verdict's specific case; not yet generalized into `PollWidget` — see the Reuse Rule note below for why that's correct, not an oversight).
- `ConsentCheckboxPair` + `interaction-consent.ts` = the audience-consent/tagging engine.
- `SponsorSlot` = the sponsorship-inventory module.
- `WhatsNext` + its `next_action_click` tracking = the cross-content recommendation engine.

**Reuse Rule applied here, explicitly:** `VoteWidget` (Verdict) and `PollWidget` (everything else) remain two separate components rather than one, even though they're structurally close — Verdict was mid-review when the generic pattern emerged, and merging them now would touch already-verified, launch-pending code for a cosmetic win. This is the "don't generalize until it's free" judgment call in practice, not an oversight.

## Shared APIs (`src/pages/api/`)

- **`interaction-consent.ts`** — the shared Beehiiv consent endpoint every interaction *except* Verdict and Predicted It uses. Takes `{email, transactional, marketing, itemKey, transactionalTag}`. `transactionalTag` is checked against a **server-side whitelist** (`ALLOWED_TRANSACTIONAL_TAGS`) — adding a new interaction means adding its tag to that Set, nothing else. Creates/reactivates the Beehiiv subscription, then applies `transactionalTag` (if transactional checked) and `insider-marketing-consent` (if marketing checked).
- **`poll-vote.ts`** — generalized compare-and-swap vote counter. Takes `{pollKey, choice, validChoices}`. Netlify Blobs `onlyIfMatch`/`onlyIfNew` with 5 retries — prevents the lost-update race under concurrent votes. Store: `wag-poll-votes`.
- **`question-submit.ts`** — real free-text submissions. One Blobs key per submission (`{timestamp}-{random}`) rather than a shared list, so there's no read-modify-write race to worry about at all. Store: `wag-featured-questions`.
- **`verdict-vote.ts`** / **`verdict-consent.ts`** — Verdict's original pair, verified end-to-end pre-launch (not yet deployed to production `main` — see correction above). Deliberately left untouched rather than migrated onto the generic routes, since Verdict was mid-review when the generic pattern was built. Structurally identical to the generic versions (same CAS pattern, same subscribe-then-tag flow) — a future cleanup pass *could* migrate Verdict onto `poll-vote`/`interaction-consent`, but there's no functional reason to right now.

## Beehiiv integration

- Publication: `pub_5d446dad-4905-4dae-b67e-19192e2f63f0` ("WAG Insider").
- One tag per interaction's transactional consent (`verdict`, `wag-match`, `favorite-segment`, `questions-featured`, `wag-awards`, `seasonal-challenges` — last one pre-created, unused until the page goes live), plus one shared `insider-marketing-consent` tag for the marketing checkbox across all of them.
- Real segments (tag-backed, `subscriber_tag = '<tag id>'`) exist wherever a consent checkbox makes a promise that needs a real send mechanism later: `Verdict Reveal Recipients`, `Questions Featured Recipients`. Rule of thumb: **if a checkbox says "email me when X happens," a matching segment must exist** so that promise is actually fulfillable — don't ship the checkbox without it (this was a real gap caught and fixed on Questions Featured).
- Full account facts (plan, pricing, DNS/DMARC state, subscribe-form theme) are tracked outside this repo in the operator's own memory — check there before assuming plan-gated features (Segments/Automations) are or aren't available.
- **Per-choice tags (added 2026-08-07, Data lens of the interaction optimization pass):** `interaction-consent.ts` now optionally applies a second, more specific tag alongside the participation tag — e.g. `wag-match-annabella` alongside `wag-match`, `wag-awards-ryan` alongside `wag-awards` — whenever the visitor's actual choice (already sitting in localStorage from `PollWidget`/`QuizWidget`, nothing new asked) matches a real entry in the server-side `CHOICE_TAGS` allowlist. Zero added UI friction; turns "who participated" into "who matched Annabella" / "who voted for Ryan" as real, queryable Beehiiv segments. Extend `CHOICE_TAGS` (and create the matching Beehiiv tag first) whenever a new interaction has a small, real, enumerable set of choices worth segmenting on.

## Analytics

Every interaction fires `gtag` events named `{verb}_{noun}` with an identifying key in the payload — e.g. `poll_vote_cast` (`{poll_key, choice}`), `quiz_question_answered` / `quiz_completed` (`{quiz_key, ...}`), `question_submitted` (`{submit_key}`), `consent_transactional_checked` / `consent_marketing_checked` (`{item_key}`). No page-level "started" or completion-funnel event exists yet — see the standing improvement item to add interaction-start/abandonment tracking uniformly.

## The interaction-completion → consent-reveal pattern

Every capture-consent interaction follows the same shape: the interactive element (vote button / quiz answer / submit button) dispatches a `wag:voted` CustomEvent (`bubbles: true`) from an element carrying `data-vote-key` (or a `detail.voteKey`/`detail.quizKey` matching it). `ConsentCheckboxPair` listens for that event sitewide and reveals itself when the key matches, and separately checks `localStorage.getItem(storageKey)` on load so a returning visitor who already completed the interaction sees the form immediately. **Gotcha already hit once:** if your interaction's own markup doesn't carry a matching `data-vote-key` attribute, the consent form silently never reveals — always verify this in-browser, don't assume it from reading the code (see Questions Featured's build history for the real bug this caused).

## Adding a new interaction (workflow)

1. Pick the right engine: binary → don't reuse (Verdict-only); N-option vote → `PollWidget`; personality quiz → `QuizWidget`; free-text → write inline like Questions Featured did (generalize into a component only once a *second* free-text interaction needs it).
2. Create the Beehiiv tag (`save_subscriber_tag`), add it to `ALLOWED_TRANSACTIONAL_TAGS` in `interaction-consent.ts`.
3. Build the page: hero → engine component → `ConsentCheckboxPair` (if there's a real future reveal to notify about — skip it if not, like Predicted It) → `SponsorSlot` → FAQ section with real `FAQPage` JSON-LD → `WhatsNext`. Add `Article` JSON-LD in the frontmatter.
4. If the consent checkbox promises a future email, create the matching Beehiiv segment now, not later.
5. Cross-link from: homepage Explore shelf, the most topically-related existing page, and `public/llms.txt`. Check whether wildadventuregirls.com has a natural real spot too (it usually does).
6. `npm run build`, then verify in-browser: click through the full interaction end to end (automation clicks can be unreliable in this environment — verify with real JS-triggered clicks and check network requests, not just visual screenshots).
7. Commit, push to the shared feature branch — **do not merge to `main` without explicit approval.**

## Roadmap

See `docs/ROADMAP.md` — the single source of truth for what's completed, in progress, blocked, technical debt, and long-term opportunities. Update it alongside the work, not after.

## Distribution

See `docs/DISTRIBUTION.md` for the reusable per-interaction launch checklist (YouTube, socials, newsletter, cross-linking, backlinks, and how real interaction results become future content). A feature isn't complete until this has been filled in and actioned.

## Extension points (built, not yet activated)

- **Community Chooses** (the real forward-looking "audience picks what WAG makes next" format, distinct from the favorite-segment poll): needs zero new shared-architecture code — `PollWidget`/`poll-vote.ts` already support any N options. Only real content is missing: a genuine upcoming production decision from Katie to attach it to. Do not build a page for this ahead of that.
- **Seasonal Challenges**: routing/schema/sponsor/Beehiiv scaffolding exists at `src/pages/seasonal-challenges/index.astro`, gated behind `const LIVE = false`. Flip it once a real challenge exists; the taxonomy a real challenge entry needs is documented in that file's frontmatter comment.
