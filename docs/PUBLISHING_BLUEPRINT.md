# WAG Publishing Blueprint

**Purpose:** how content actually moves through the WAG ecosystem once it's published — not the code, the operational picture. If you join WAG a year from now with zero chat history, this is what should let you understand the system in 30 minutes. Read `ARCHITECTURE.md` (both repos) when you need the real implementation; read this when you need the mental model.

**The one rule underneath everything:** published media freshness is automated; editorial content is additive. A real upload should never require someone to remember five manual steps. A written article is a deliberate, separate asset that connects to the live content automatically when it exists — and never blocks anything when it doesn't.

Every arrow below is marked **✅ automatic** (already happens with zero human action) or **✋ editorial** (a real person makes a real choice — by design, not because automation is missing). Where something is genuinely not built yet, it says so — this doc is only useful if it's true.

---

## 1. Publish a Wild Adventure Girls YouTube video (main channel)

```
Publish on YouTube (main channel)
  ↓ ✅ live YouTube Data API — re-fetched on every build, no manual video-ID entry
Scheduled rebuild (every 3 hours, GitHub Action → Netlify build hook)
  ↓ ✅
Homepage hero + "Latest" grid update automatically
  ↓ ✅
Watch hub "Just Posted" strip shows it immediately
  ↓ ✋ editorial — a real `videos` collection entry (with a real series assignment) is what
      moves it from "Just Posted" into one of the 6 series cards. No reliable signal exists
      to auto-classify series (checked real YouTube playlists — no usable match).
  ↓ ✅ (once the entry above exists) girl-profile "Latest Episodes" grids pick it up automatically,
      filtered by the real `girlsFeatured` field on that entry
  ↓ ✋ editorial — "Related Videos" on other pages is a hand-curated field, not automatic
  ↓ ✅ (once the entry exists) sitemap, meta, and schema for that video's own page generate automatically
```

**Honest gap:** a video with no written `videos` entry gets a homepage/Watch-hub appearance and a direct YouTube link — but no owned page, no schema, no SEO value of its own until someone writes the entry. That's deliberate (per the "20 great articles > 300 thin ones" standard), not an oversight.

## 2. Publish a WAG Podcast episode

```
Publish on YouTube (podcast channel)
  ↓ ✅ live YouTube Data API — same pattern as above
Scheduled rebuild (every 3 hours — now live on thewagpodcast.com too, confirmed working)
  ↓ ✅
thewagpodcast.com homepage hero updates automatically
  ↓ ✅
Watch page featured section + recent-episodes list update automatically (this page was
  already 100% live-driven — no "Just Posted" workaround needed here)
  ↓ ✅ topic pages (e.g. "Growing Up") automatically pick it up via real keyword matching
      against the episode's actual title/description
  ↓ ✋ editorial — a written `episodes` entry (this repo's article collection) connects
      automatically by `videoId` when one exists; most episodes won't have one, by design
  ↓ ✋ editorial — interactions (Verdict, Match, etc.) are never auto-generated from a new
      episode. Someone decides a real dilemma/moment is worth turning into an interaction.
```

**Honest gap, not yet fixed:** the **Listen page does not yet show the newest episode automatically** — it's static platform links (Spotify/Apple/YouTube) plus Spotify's own embed widget, which Spotify updates on its side, not ours. This is a real, known, not-yet-closed item — see the upcoming Listen/platform-growth review (Phase C).

## 3. Publish a written article (either site)

```
Article written and committed
  ↓ ✋ editorial, deliberately — articles are never auto-generated from a publish event.
      Real, deep write-ups only, per the standing "quality over pace" rule.
Push to GitHub → Netlify auto-deploys (separate from the 3-hour cron — any real commit
  triggers a normal deploy immediately, same as it always has)
  ↓ ✅
Automatically connects to its matching live video/episode by the shared `videoId`/`youtubeId`
  field — homepage, Watch, Watch hub, and (for videos) girl profiles all pick this up on
  the next build with zero extra steps
  ↓ ✅ sitemap, meta description, and schema (FAQPage/Article/etc.) generate automatically
      from the article's own frontmatter
  ↓ ✋ editorial — "related articles/episodes" cross-links are hand-picked fields, not automatic
```

## 4. Build a new interaction (Verdict, Match, WAG Awards, etc.)

```
A real dilemma/moment from an existing episode is chosen
  ↓ ✋ fully editorial — interactions are hand-built pages, never auto-generated
Page ships, reusing the shared component set (VoteWidget/QuizWidget/PollWidget,
  ConsentCheckboxPair, SponsorSlot, WhatsNext, ShareSheet)
  ↓ ✅ once live, it automatically appears in every other interaction/episode page's
      "What's Next" cross-link grid (shared component, not a per-page manual edit)
  ↓ ✅ Beehiiv tagging, GA4 events, and schema are automatic from the shared components —
      no per-interaction custom wiring needed
```

---

## What's genuinely automated today vs. what still needs a human

| Automated (✅) | Still editorial by design (✋) | Not yet built (real gap) |
|---|---|---|
| Newest video/episode surfacing on both homepages | Which series/topic a video belongs to | Listen page doesn't show newest episode |
| Watch hub "Just Posted" visibility | Whether a video/episode earns a full article | Adventure Map doesn't auto-pin new videos (scoped, not built — see `FUTURE_OPPORTUNITIES.md`) |
| Article ↔ video/episode connection (once article exists) | Related-content curation | |
| Sitemap/schema/meta for anything with a real page | Interaction creation | |
| Rebuild cadence (every 3 hours, both sites) | Girl-tagging accuracy (mechanism is automatic; the underlying data still needs real per-video verification — see `ARCHITECTURE.md`) | |

## Where to look next

- `ARCHITECTURE.md` (this repo and `wildadventuregirls-website`) — the real implementation behind each arrow above.
- `OPERATIONAL_READINESS.md` — safety/compliance/ops systems, tracked separately from content flow.
- `FUTURE_OPPORTUNITIES.md` — where this blueprint is expected to evolve (Adventure Map auto-pin, Listen page automation, a real content graph if the `videoId` join pattern ever stops being enough).

*Keep this file honest above all else. If a real fix changes one of the arrows above, update this doc in the same commit — a wrong blueprint is worse than no blueprint.*
