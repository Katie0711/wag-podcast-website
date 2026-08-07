# WAG CEO Decisions

Decisions that affect the company's future, not tasks. Each entry: the decision, why it was made, and what it rules in/out going forward. Add a new entry whenever a real strategic call gets made — don't let it live only in chat.

---

### Software is a future opportunity, not today's business (2026-08-07)

**Decision:** WAG does not build SaaS, multi-tenancy, billing, external-customer onboarding, or a generic creator dashboard. The interaction engine, Beehiiv architecture, and analytics patterns stay internal WAG infrastructure.

**Why:** WAG, WAG Podcast, and (later) HorseSmart Kids remain the only three supported implementations. Building for hypothetical external customers today would add complexity and slow delivery for no current business reason.

**What it doesn't rule out:** where a reusable engine naturally emerges, keep its core logic brand-agnostic *if that's free to do* — not to productize now, but so a future productization decision isn't blocked by tangled coupling. Revisit only after WAG itself has proven the model.

---

### Reusable architecture is shared across brands, not duplicated per brand (2026-08-06, reaffirmed 2026-08-07)

**Decision:** The interaction engine (quiz/poll/vote/consent/sponsor/analytics primitives) is built once and themed per brand — not rebuilt per brand. HorseSmart Kids, when it exists, reuses this same technical platform.

**Why:** Building bespoke per-brand infrastructure is expensive and doesn't compound. A brand-agnostic engine, themed rather than duplicated, is a real asset that gets more valuable with every new brand that uses it.

**Reuse rule (precise version):** don't generalize after the 1st real use case. Don't duplicate after the 2nd — once a 2nd genuine cross-brand implementation of the same functionality exists, promote it into reusable architecture.

**Guardrail:** HorseSmart Kids reusing the *platform* is not the same as putting horse content on WAG's own site — see the standing horse-content-pivot brand rule, unrelated to this decision.

---

### WAG Podcast and Wild Adventure Girls are different products with different philosophies (2026-08-07)

**Decision:** The two sites share technical capabilities, never content or experience shape. thewagpodcast.com = conversations, dating, friendship, personality, opinions, episodes, audience participation (Match, Verdict). wildadventuregirls.com = adventures, mysteries, travel, challenges, discoveries, BTS, broader brand authority.

**Why:** Forcing a podcast-shaped interaction onto the main site (or vice versa) would blur two audiences that come to WAG for different reasons. Every content asset gets one canonical home; the sites cross-link rather than duplicate.

---

### Community Chooses is intentionally delayed (ongoing since 2026-08-06)

**Decision:** The component (`PollWidget`) is fully built and reserved, but not attached to a real decision yet.

**Why:** It's explicitly reserved for a genuine forward-looking audience-decision format — waiting on a real upcoming decision from Katie, not a placeholder poll invented to fill the format. Never fabricate audience influence that isn't real.

---

### Seasonal Challenges stays infrastructure-only (`LIVE = false`) until real challenge content exists (2026-08-06)

**Decision:** Page, tag, and consent whitelist entry all exist; the page itself renders an honest "coming soon" state.

**Why:** Same content-authenticity discipline as Community Chooses — the infrastructure is honest about not being ready rather than shipping placeholder content.

---

### Discovery Platform / Field Map is Phase Two, not now (2026-08-07)

**Decision:** Evolving Adventure Map into a full Discovery/Field Map (investigations, locations, species, collectibles, a future Passport) is captured as a real opportunity but explicitly not started.

**Why:** Only 3 real investigations exist today — a "collect across destinations" mechanic needs enough real content behind it to not feel thin, and building the progression/reward shell first would be manufactured, not earned. When it does start, it's scoped to a fixed 1–2 day architecture-only foundation (see `FUTURE_OPPORTUNITIES.md`), explicitly excluding gamification/accounts/badges/passports until there's real content to support them.

---

### WAG Match's consent copy was reworded instead of building new automation infrastructure (2026-08-07)

**Decision:** "Email me my WAG Match result" (a per-subscriber personalized promise) was changed to "Email me the next WAG Match quiz" — a promise the existing segment architecture already fulfills.

**Why:** The quiz result is computed entirely client-side and never reaches the server. Honoring the original promise for real would require a new custom field, an API change, and a 3-way branching Beehiiv automation — real new infrastructure for a promise that's largely redundant, since the subscriber already sees their result on-screen instantly. Preserve simplicity when added infrastructure doesn't create proportional value. Approved by Katie as "the correct decision."

---

### Profitability across the whole ecosystem beats maximum reuse (2026-08-07)

**Decision:** "How does this increase total ecosystem profitability" is the real question — not "can both sites have this." Sometimes the answer is both sites, sometimes one site only, sometimes build-once-configure-differently.

**Why:** Reuse is a tool, not the goal. Some assets (traffic, authority, retention, trust) are economically valuable at $0 direct revenue; forcing monetization onto everything, or forcing reuse where it doesn't fit, both destroy value instead of creating it.

---

### wagmediapartners.com — verdict needed from Katie (open, carried from earlier work)

**Decision pending.** wagmediapartners.com currently overlaps with thewagpodcast.com/sponsor/ as a sponsorship destination. Investigated extensively (forensic SEO, data audit, copy rewrite, architecture proposal) but the long-term disposition — keep as a simplified handoff page, retire, or repurpose per the wagmediapartners.com future-strategy note — is Katie's call, not yet made.

---

### Deferred Netlify npm-audit findings are not force-fixed (2026-08-07)

**Decision:** 6 known vulnerabilities in thewagpodcast-website's dependency chain (all inside Netlify's own build-tooling — sharp/ipx/@netlify/images/@netlify/dev/@netlify/vite-plugin) are monitored, not force-downgraded.

**Why:** `npm audit fix --force` would downgrade `@astrojs/netlify`, the live SSR deploy adapter, to fix issues in Netlify's own tooling — trading working production infrastructure for a clean audit number. Katie's explicit instruction: "do not downgrade stable production infrastructure merely to force npm audit to zero."
