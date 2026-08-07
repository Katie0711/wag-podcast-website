# WAG Launch Command Center

**One page. Updated every day until launch, then archived.** Full backing detail lives in `LAUNCH_BLOCKERS.md` — this page is the glance, not the evidence.

**Last updated: 2026-08-07**

---

## Launch Status

| System | Status |
|---|---|
| Podcast Site (thewagpodcast.com) | 🟢 Ready |
| Wild Adventure Girls (wildadventuregirls.com) | 🟢 Ready |
| Beehiiv | 🟡 Waiting on production API key confirmation |
| Google (sitemap / robots / schema / llms.txt) | 🟢 Ready |
| Analytics (GA4) | 🟢 Ready |
| Production Verification | ⬜ Not started — begins after merge |

## Known Risks

- **Netlify production `BEEHIIV_API_KEY` unconfirmed** — the one real blocker. Everything Beehiiv-side is built and correct; this single environment variable can't be checked from outside Netlify's dashboard.
- Real-device mobile and Firefox/Safari QA haven't happened yet — low risk, correctly sequenced into the post-merge smoke test rather than held as a pre-merge gate.
- 3 items deliberately deferred by Katie's own earlier call (2 AEO answers needing real episode footage, production Core Web Vitals, 6 dependency-chain npm-audit findings) — none require code changes to launch.

## Go / No-Go

**Recommendation: GO**, contingent on the one 🔴 item — confirm `BEEHIIV_API_KEY` is set in Netlify's production environment. Everything else on the master blocker list is either done or a deliberately accepted, documented risk.

---

*See `LAUNCH_BLOCKERS.md` for the full list with owner/evidence/risk/recommendation per item. See `LAUNCH_CHECKLIST.md` for the literal merge → deploy → verify steps once this page says GO.*
