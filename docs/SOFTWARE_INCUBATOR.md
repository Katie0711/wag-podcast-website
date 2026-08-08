# WAG Software Incubator

**This is an evidence log, not an ideas list.** Entries are added only when a repeated, observed problem justifies logging it — never speculative "wouldn't it be cool if" ideas. The goal: if WAG eventually builds internal tools, a creator membership, or commercial software, the decision is grounded in validated, repeated problems, not a backlog of interesting ideas. Do not build any of these now. Do not force an entry into a phase where nothing real emerged — say so instead.

Each entry: recurring problem, current workflow, frequency, business value, time/cost saved, revenue or conversion upside (if applicable), data value, who benefits, WAG-specific vs. broadly useful to creators/media companies, whether it could support a future membership/product, software readiness level, dependencies, evidence supporting the opportunity, reasons not to build it yet, and what would have to become true before it advances.

**Readiness scale (Katie's, 2026-08-08 — use exactly this):**
1. **Observation** — interesting pattern, insufficient evidence.
2. **Repeated Problem** — happened enough times to document.
3. **Internal Tool Candidate** — meaningful value from automation/tooling.
4. **Proven Internal System** — WAG actively uses it and receives measurable value.
5. **Validated Commercial Opportunity** — enough evidence exists to seriously evaluate membership, licensing, or SaaS.

Do not advance a level because it sounds exciting — evidence earns advancement, nothing else does.

---

## Dual-Use Image Sizing

**Recurring problem:** a real WAG photo used at genuine hero/full-bleed scale on one page is reused, unresized, on a second page where it displays in a small card (~369-371px) — serving 180-500KB source files into a slot that needs ~60-160KB. Manually caught by checking real CSS grid math against real source dimensions, not by any automated signal.

**Current workflow:** notice a heavy image → trace every page/component that references it → confirm real display width per use via CSS math → if dual-use, hand-generate an ~800px card-specific derivative (`.jpg` + `.webp`) with a Python/Pillow script → manually wire the new filename into the specific page that needs it, leaving the original untouched for its legitimate hero use.

**Business value:** real, measurable — 75-78% file-size reduction per fixed image, on exactly the pages (sponsor/brand-partnerships) where load experience affects sponsor-page trust. **Time/cost saved:** the manual trace-and-fix took real, non-trivial effort per instance (checking usage across both repos, computing real display math, writing a one-off resize script) — a repeatable tool would cut that to minutes. **Revenue upside:** indirect (page-speed/trust, not a direct conversion lever). **Data value:** low — this is a hygiene problem, not a data-accumulation one. **Membership/product potential:** plausible — "does my creator site serve oversized dual-use images" is a genuinely generic problem other creator-led sites have too.

**Frequency:** two real, independently-found instances in one session — thewagpodcast.com/sponsor/ (3 images) and wildadventuregirls.com/brand-partnerships/ (3 images), same exact shape both times (hero-scale source reused in a ~370px 3-column grid card). Per Katie's explicit readiness scale, two real occurrences moves this from Observation to **Repeated Problem.**

**Who benefits:** Katie (page speed, sponsor-page trust); any future page author who'd otherwise repeat the same manual trace-and-fix.

**WAG-specific or broadly useful:** broadly useful — this is a generic static-site image-sizing problem, not WAG-content-specific.

**Software readiness: 2/5 — Repeated Problem.** Confirmed happened twice, in the same shape, independently. Not yet a 3 (Internal Tool Candidate) — two manual fixes is real evidence but not yet enough volume to justify build effort over continuing to fix instances by hand as found.

**Dependencies for advancing to level 3:** a third real instance (or a case where the manual fix genuinely became a bottleneck) would justify a lightweight build-time check (e.g., a script that flags any image referenced by more than one page at more than 2x the smallest real display context) over continuing to catch these by manual inspection.

**Evidence supporting the opportunity:** both fixes are real, committed, and verified (thewagpodcast.com commit `9f37487`, wildadventuregirls.com commit `7b5bad6`) — not hypothetical.

**Reasons not to build yet:** two instances, both fixed by hand in well under an hour combined. The cost of building even a lightweight checker isn't clearly lower than continuing to catch these manually at current volume.

**What would have to become true to advance:** a third independent instance, or evidence that manual fixes are being missed (an oversized dual-use image shipping to production undetected) — either would justify a real build decision.

---

## Authority / Opportunity Tracker

**Recurring problem:** tracking real external Brand Authority opportunities (creator-discovery platforms, agencies, press outlets, conferences, industry orgs, business listings) by hand, in a single markdown file, re-read top-to-bottom every time a status needs checking or a new opportunity needs adding.

**Current workflow:** research pass (WebSearch/WebFetch) → manually write findings into `BUSINESS_DEVELOPMENT_SYSTEM.md` as a table/prose entry → manually re-scan the whole doc later to find what's still open vs. resolved.

**Business value:** real — this doc already prevented one premature recommendation (IMDb) and is the single source of truth for where Brand Authority effort should go next. **Time/cost saved:** real, but not measured — avoids re-deriving research each session. **Revenue upside:** indirect only (better-targeted BD effort, not a direct conversion path). **Data value:** high — the doc itself is becoming a proprietary map of WAG's real Brand Authority landscape. **Membership/product potential:** plausible — the tracker *shape* (not WAG's specific content) could be a template in a future creator membership.

**Frequency:** observed 4 separate times in one session (discovery platforms, AEO/GEO mechanics, discovery-channel ranking, wider ecosystem categories) — a real, repeating pattern, not a one-off.

**Who benefits:** Katie directly (decision-making); any future team member who needs to understand WAG's Brand Authority status without re-deriving it.

**WAG-only or useful to other creators:** the underlying shape (research → structured opportunity → status → priority) is generic enough that other creator-led media companies would have the identical need. Not WAG-specific in structure, only in content.

**Software readiness: 2/5.** Real, repeated pattern confirmed — but volume is still low (one doc, a few dozen entries) and there's no proven need for search/filter/notifications yet. A markdown file is still the right tool at this scale.

**Dependencies:** would need a real, ongoing volume of Brand Authority activity (press outreach results, agency responses, platform listing outcomes) before a dashboard would out-perform a well-organized doc.

**Reasons not to build yet:** a markdown file with clear status values is still fast to read and edit; no one has hit a real limitation of it yet (e.g., needing to filter/sort/search across dozens of entries). Building a tracker before that limitation is real would be solving an imagined problem, not an observed one.

---

## Cross-Platform Referral Attribution

**Recurring problem:** every page that sends a visitor to an external platform (YouTube, Spotify, Apple Podcasts, the sister site) needs its own hand-wired GA4 click-tracking script to know whether that page is actually doing its job.

**Current workflow:** each page/component gets its own small, page-scoped `<script>` block calling `gtag('event', ...)` with a bespoke event name (`platform_follow_click` on Listen, `next_action_click` in WhatsNext, `nav_click` in Header) — functionally similar patterns, written three separate times this session alone because each needed slightly different context (which platform, which source page, which destination type).

**Business value:** real — this is literally how "did the Listen page rebuild work" gets answered with evidence instead of a guess. **Time/cost saved:** low today (each script is small), but the re-wiring effort compounds as more pages need it. **Revenue upside:** indirect — better attribution improves which growth bets get more investment, not a direct revenue path itself. **Data value:** high long-term — real, first-party knowledge of which pages actually drive platform follows. **Membership/product potential:** low on its own; would only matter as part of a larger analytics offering, not standalone.

**Frequency:** three real instances in a single session (Header nav, WhatsNext, Listen platform cards); the underlying need (know where clicks go) will recur every time a new conversion-focused page ships.

**Who benefits:** Katie, for real answers to "is this working" instead of assumptions; eventually informs the "Evidence to Watch" step of every Phase Summary.

**WAG-only or useful to other creators:** generic — any creator-media site with multiple platforms and multiple entry points has the identical problem.

**Software readiness: 2/5.** The individual tracking calls work fine; what doesn't exist yet is anywhere to actually *see* the aggregated results without going into GA4 directly. Too early to call this a dashboard need — no one has actually tried and failed to answer a cross-platform question in GA4 yet.

**Dependencies:** real traffic and real event volume across multiple pages before aggregation would be worth building — right now these events barely have any real data behind them yet (see "Evidence to Watch" in the Phase C/D summaries).

**Reasons not to build yet:** GA4 itself already aggregates these events; no observed case yet where GA4's own reporting was insufficient. Revisit only if/when someone (Katie or Claude) hits a real wall trying to answer a cross-platform question GA4 can't answer directly.

---

## Sponsor Stat Source-of-Truth

**Recurring problem:** the same real stat (e.g., "3.7M+ views") exists in multiple places — the podcast sponsor page, the main-site media kit PDF, FAQ copy — with no single place that's obviously canonical. This session, correcting one stale number (3.7M+ → 3.8M+) required manually checking the sponsor page AND writing a one-off Python script to grep the media kit PDF for the same stale value, rather than updating one source and having it propagate.

**Current workflow:** a real number changes → manually search across pages/PDFs for every place it might be duplicated → manually verify each one → manually fix each one found.

**Business value:** real — a stale or inconsistent stat on a sponsor-facing page is exactly the kind of small error that erodes the "trust, not just impress" standard Katie has set for these pages. **Time/cost saved:** minor per-instance today (one script, a few minutes); **Revenue upside:** indirect — protects sponsor-page credibility, not a direct conversion lever. **Data value:** low — this is a consistency problem, not a data-accumulation one. **Membership/product potential:** none identified.

**Frequency:** one real, observed instance this session — not yet a proven *repeated* pattern. Logging it now because the shape of the problem (one real fact, many surfaces) is exactly the kind of thing likely to recur as more real stats/case studies get added, not because it's already recurred multiple times.

**Who benefits:** Katie (fewer stale-stat corrections needed); any future page/PDF that cites the same real numbers.

**WAG-only or useful to other creators:** somewhat WAG-specific in that it's tied to this ecosystem's specific stat set, but the general "single source of truth for facts cited in multiple places" pattern is generic.

**Software readiness: 1/5.** Only one real instance observed — genuinely too early to call this validated. Flagging it here specifically so it isn't forgotten if it happens again, not because it's ready to design around yet.

**Dependencies:** a second and third real instance of stat drift would be the actual evidence needed to justify even a lightweight fix (e.g., a single shared constants file both repos import).

**Reasons not to build yet:** one instance is an anecdote, not a pattern. The no-fabrication discipline already in place (grep before claiming, verify before publishing) is catching these when they're checked — the real gap, if any, would be a place a check gets skipped, which hasn't happened yet.

---

*Update this file only when a real, repeated pattern is genuinely observed during actual work — never as a standalone brainstorming exercise. If a phase produces nothing worth logging here, say so in the Phase Summary and move on.*
