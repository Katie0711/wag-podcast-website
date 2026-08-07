# WAG Future Opportunities

Major opportunities identified but deliberately not built yet. Capturing these here means they survive even if the conversation that found them doesn't. Each entry: concept, why it matters, dependencies, rough timing, and why it isn't being built today. Evaluate through the CEO Filter (`CEO_DECISIONS.md`) before greenlighting any of these — don't build reflexively just because it's listed.

---

### Discovery / Field Map (WAG Passport)

**Concept:** Evolve the current static Adventure Map into a real product connecting adventures, investigations, mysteries, destinations, videos, articles, evidence, challenges, collectibles/badges, and a future digital/physical WAG Passport. Participation loop: Discover → Investigate → Explore → Collect → Return — deliberately distinct from the podcast site's Vote → Discuss → Compare → Participate → Return.

**Why it matters:** Real IP and monetization angle — a physical Passport is a concrete licensing/tourism-partnership/merchandise opportunity most "digital product" ideas aren't. A badge/collect loop gives a structural reason to return that the current static map doesn't have.

**Dependencies:** Only 3 real investigations exist today (Bigfoot Oregon, Lake Worth Monster, Haunted Hotel Texas) — a "collect across destinations" mechanic needs real content behind it or it feels thin. Persistent collection across devices without accounts is a real open architecture question (localStorage alone won't survive a device change).

**Timing:** After the interaction-platform launch. When it starts: a fixed 1–2 day architecture-only foundation pass (Discovery/Investigation/Location/Species/Adventure models, routing, schema, cross-linking) — explicitly not gamification, badges, accounts, passports, rewards, or progression systems until enough real content exists to support them.

**Why not now:** Interaction-platform launch and real audience behavior take priority (Highest-Leverage Rule). See `CEO_DECISIONS.md`.

---

### WAG Knowledge Graph

**Concept:** Treat videos, episodes, hosts, guests, investigations, locations, animals, products, sponsors, interactions, articles, quizzes, and polls as connected entities, not isolated pages — e.g. Bigfoot investigation → videos → podcast episode → verdict → article → locations → questions → awards → future videos → book chapter → field guide → interactive map, all as one traceable chain.

**Why it matters:** Compounding value — connected content strengthens discoverability, cross-linking, and eventually powers an internal CEO dashboard and AI-assisted content tools without rebuilding the data layer later.

**Dependencies:** No graph database or entity-relationship system exists yet. Current architecture (Astro Content Collections) already stores most of the real relationships as frontmatter fields/tags — the gap is a queryable layer over them, not the underlying data.

**Timing:** Not scheduled. This is a lens for today's schema decisions (see `DATA_MODEL.md`), not a project with a start date.

**Why not now:** No real business need for graph queries yet — content volume doesn't justify the infrastructure. Building it speculatively would be exactly the kind of premature generalization the standing Reuse Rule warns against.

---

### Internal CEO Dashboard

**Concept:** One internal (not public) view combining analytics, content performance, audience growth, sponsor performance, AI traffic, search performance, newsletter growth, interaction metrics, and eventually financial metrics.

**Why it matters:** Right now, answering "what's actually working" requires manually checking GA4, GSC, YouTube Studio, and Beehiiv separately. A unified view is a real operating-leverage asset as the ecosystem grows.

**Dependencies:** Real, sustained production traffic across the interaction platform (nothing to dashboard yet); a data model expressive enough to roll metrics up across sources.

**Timing:** Post-launch, once there's real behavior data to visualize meaningfully.

**Why not now:** Building a dashboard for near-zero traffic produces a dashboard, not insight. Architectural decisions today (see `DATA_MODEL.md`) are made so this doesn't get blocked later — that's the whole ask right now.

---

### Business Intelligence Agent

**Concept:** An AI agent that can answer "what happened this week?" — wins/losses, SEO opportunities, broken pages, sponsorship opportunities — by querying the ecosystem's real data.

**Why it matters:** Turns the manual audit work done this session (crawl checks, GSC pulls, Beehiiv checks) into something that runs continuously instead of being re-derived from scratch each session.

**Dependencies:** The Internal CEO Dashboard's data layer above; enough real traffic for "wins/losses" to mean something.

**Timing:** Not scheduled — depends on the dashboard existing first.

---

### Sponsor Dashboard / Sponsor Engine

**Concept:** Real inventory management for interactive sponsorships (Verdict/Match/Awards/Community/Seasonal Challenges) — impressions, campaign config, reporting, per-sponsor performance.

**Why it matters:** `SponsorSlot.astro` already exists as inventory (unfilled slots render a WAG-owned fallback CTA); the moment a sponsor is sold, this becomes real revenue infrastructure.

**Dependencies:** A sold sponsor — there is real inventory today but no sponsor filling it yet.

**Timing:** Build when the first interactive sponsorship actually sells, not before.

---

### AI Traffic Dashboard

**Concept:** Structured tracking of ChatGPT/Gemini/Claude/Perplexity/Copilot referral traffic across both sites, trended over time rather than manually pulled per session.

**Why it matters:** GA4 already shows real AI-referred sessions — first hard evidence the AEO/GEO work is producing results. A dashboard turns a one-off exciting number into a trend line worth acting on.

**Dependencies:** GA4 UI report-builder reliability in this environment has been inconsistent (canvas-rendered tables, no accessible text) — blocked on tooling, not strategy.

**Timing:** Next time GA4 UI access is reliable, or via API pull instead of the UI.

---

### HorseSmart Kids

**Concept:** A potential full company on its own — membership, curriculum, parent/trainer platforms, AI coach, certification, marketplace — built on the same reusable interaction engine as WAG.

**Why it matters:** Real evidence the platform architecture generalizes beyond one brand, without WAG's own content or brand identity being touched.

**Dependencies:** Not started. No content, no scoping, no timeline.

**Timing:** Deliberately deferred, flagged as potentially significant, kept visible on the roadmap.

**Why not now:** WAG itself hasn't launched its interaction platform yet — proving the model once, for real, comes before reusing it for a second brand.

---

### Interactive Books / Physical Products

**Concept:** WAG's real investigations, mysteries, and adventure content as physical products — books, field guides, or similar — building on the Discovery Platform concept above.

**Why it matters:** A real path from digital content to a licensable, sellable physical product line.

**Dependencies:** Real source material has been preserved (see the source/IP preservation structure built earlier this project) and a slime-book-adjacent project (separate brand, mascot Wobbie) is already in early research — this would be a second, WAG-branded instance of the same idea.

**Timing:** Not scheduled — depends on Discovery Platform maturity and real investigation content volume.

---

### AI Discovery Assistant

**Concept:** An AI-powered assistant on-site that helps visitors navigate WAG's content (find the right investigation, episode, or interaction based on what they're interested in).

**Why it matters:** Natural extension of the AEO/GEO investment already made — if AI systems can already surface WAG content in answers, an on-site assistant is the same capability turned inward.

**Dependencies:** Real content volume and the Knowledge Graph above (an assistant is only as good as the structured data behind it).

**Timing:** Not scheduled — speculative, flagged for future evaluation only.

---

### Creator Operating System (long-horizon, optionality only)

**Concept:** If the internal platform (interaction engine + audience engine + analytics engine + sponsor engine) proves itself across WAG and HorseSmart Kids, it could eventually become licensable infrastructure for other creators.

**Why it matters:** The single largest long-horizon value multiplier if it ever happens — but explicitly not today's business (see `CEO_DECISIONS.md` → "Software is a future opportunity, not today's business").

**Dependencies:** Two proven brands running on the platform (WAG + HorseSmart Kids), real operating experience, and a deliberate decision to pursue external customers.

**Timing:** Not evaluated. Purely optionality — architecture stays brand-agnostic where free to do so, nothing more.
