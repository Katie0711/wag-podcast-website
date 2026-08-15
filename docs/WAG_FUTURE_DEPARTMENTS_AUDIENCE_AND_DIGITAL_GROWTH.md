# Future Departments: Audience Intelligence & WAG Digital Growth

**Status: RECORDED, NOT BUILT. Do not build either department until Katie explicitly authorizes it.**

This doc exists so two major future capabilities Katie specified on 2026-08-12 aren't lost between sessions, refined the same day after a first pass. Both were defined immediately after the Creator & Platform Intelligence directive, with an explicit instruction not to interrupt that department's Proof 0. When either is picked up, apply §64 the same way Creator & Platform Intelligence was: **audit existing capabilities first → identify the real gaps → propose the smallest proof → STOP for Katie's review** before building anything beyond that proof.

**Correction (2026-08-12, same day): Audience Intelligence is its own department, not a function nested inside Creator & Platform Intelligence.** Katie's own framing of why these stay separate:

- **Creator Intelligence asks:** "What is happening outside WAG?"
- **Audience Intelligence asks:** "Who loves us, why do they love us, and what do they want/actually respond to?"
- **YouTube Performance Intelligence asks:** "What actually happened when we published?" — this third leg already exists in substance (`WAG_MEASUREMENT_STANDARDS.md`, live Studio pulls, the Main Intelligence Loop's Retention/Packaging specialists); it doesn't need to be built, just recognized as the third distinct question these two new departments sit alongside.

Three separate, focused questions are more powerful than one giant research agent trying to answer all of them at once — real overlap between the three is expected and should be routed as findings pass between them, not collapsed into one department.

---

## 1. Audience Intelligence & Viewer Archetype System

**One executive question this eventually answers: who actually loves WAG, and why?**

### Core principle

Living, evidence-backed audience archetypes — not invented marketing personas. Provisionally: a primary female archetype, working name **"Emily,"** and an equivalent male archetype *only if real evidence supports a meaningful male segment*. These are working names, not assumptions about who the audience actually is.

**Never hallucinate an attribute.** ("Emily wears Converse and loves Starbucks" does not enter the archetype unless a real signal supports it.) Never protect the persona from contradicting evidence — if evidence changes, Emily changes.

### What the system progressively answers about Emily

Approximate age/life stage where evidence permits; interests; entertainment preferences; creators/shows she watches; music/culture/style interests where supported; brands/products she likes; what she does after school/on weekends; what makes her laugh; what scares/excites/intrigues her; what she talks about with friends; what she searches; what she shares; what makes her click; what makes her stop watching; which WAG girl/cast dynamics she responds to; what she wants WAG to film next; and — most importantly — **why WAG matters to her.**

### Evidence sources

WAG YouTube analytics; WAG comments; Podcast comments; community responses; website behavior; search/query data; newsletter behavior when available; WAG polls/surveys; video requests; recurring comment themes; comments on carefully selected comparable creators; credible audience/cultural research; platform trend data.

**Comparable-channel comment research is a hypothesis source, never a fact source.** Explicitly separate WHAT THEIR AUDIENCE LIKES from WHAT WAG'S AUDIENCE LIKES — competitor comments generate hypotheses about Emily; they never become WAG-audience facts on their own.

For comparable-channel comments specifically, study: why viewers say they watch; favorite personalities; recurring jokes; moments quoted back; requests for future episodes; emotional reactions; friendship/cast attachment; format requests; complaints; boredom/drop-off signals; "I've watched this X times" behavior; anticipation for the next episode; language fans use to describe belonging to the community. **This is not generic sentiment analysis** — the target is motivation, identity, attachment, requests, and behavioral themes, not a positive/negative score.

### Evidence model (per attribute)

```
ATTRIBUTE → EVIDENCE → SOURCE → CONFIDENCE → FRESHNESS → CONTRADICTING EVIDENCE
```

Reuses the same evidence-tier discipline already established for `canonical_facts` (`VERIFIED` / `STRONG_EVIDENCE` / `OBSERVED_PATTERN` / `HYPOTHESIS`) rather than inventing a new confidence scale.

**Distinguish stated preference from observed behavior as separate evidence, always.** If viewers repeatedly request something and WAG films it, measure whether the stated preference actually predicted their behavior — don't collapse "what Emily says she wants" and "what Emily actually watches" into one belief.

### Visual avatar

Once sufficient evidence exists, produce a representative visual of Emily for internal creative use only. It must be clearly labeled a **synthetic representative archetype**, not an actual viewer. Never attempt to reconstruct or approximate a specific minor/viewer from personal data — this is an aggregate composite, not a real person's likeness.

If distinct meaningful segments emerge, create separate evidence-backed archetypes rather than forcing every viewer into one persona.

### Creative use — evidence lens, not a veto

The ultimate creative question is not merely "Would Emily click?" It's **"Why would Emily care?"** and **"Does this make Emily more attached to WAG and more likely to want the next episode?"** Also useful along the way: what emotion does this premise create for Emily; would Emily send this to a friend; would Emily come back for Episode 2; does this strengthen attachment to the girls or merely deliver a disposable premise.

**The avatar does not get veto power.** It's one evidence lens alongside real WAG performance data, creative judgment, Creator Intelligence, format evidence, and experimentation — never the sole decision-maker. It must eventually feed **Creator Intelligence, Greenlight, Format, Title, Thumbnail, Hook, Retention, Shorts, and Fandom Intelligence** — not sit as an isolated report nobody reads.

### Feeds content development

```
Audience desire → opportunity → video premise → format
  → title/hook/thumbnail implications → Greenlight → prediction
  → performance → updated audience belief
```

Stated preference and observed behavior are separate evidence streams, always: if viewers repeatedly request something and WAG films it, measure whether the request actually predicted the behavior — don't collapse "what Emily says she wants" and "what Emily actually watches" into one belief.

**Cross-reference:** Emily's "unmet desire" — what she wants from entertainment that no comparable channel is giving her — is the same shape as the White-Space Intelligence function recorded in `WAG_CREATOR_PLATFORM_INTELLIGENCE_AUDIT.md`. When both eventually exist, they should share findings rather than duplicate the search.

### Audience × Creator collision (record only, don't build)

Once both Creator Intelligence and Audience Intelligence exist, they should eventually be able to ask a joint question neither can answer alone:

**"What is accelerating externally that overlaps with an evidenced desire/behavior of Emily but WAG has not yet exploited?"**

```
EXTERNAL SIGNAL + AUDIENCE DESIRE + WAG ADVANTAGE + WHITE SPACE + RIGHT LIFECYCLE STAGE
  = HIGH-PRIORITY CREATIVE OPPORTUNITY
```

More useful than either department identifying trends alone — this is the actual intersection point the two-department split is designed to eventually produce.

---

## 2. WAG Digital Growth & Owned Audience Department

**Mission:** turn wildadventuregirls.com and thewagpodcast.com from websites that exist into destination media properties and owned-audience assets that compound in value every time WAG publishes — reducing WAG's dependence on rented platform distribution.

### First requirement before any redesign work: diagnose, don't assume

Katie's explicit correction to Claude's own framing: a reported 1.6% CTR does not by itself establish the website's design is bad. Before recommending any design change, this must be the first future task, determined precisely:

- which platform produced the metric;
- whether it is Search Console CTR or on-site CTR/conversion;
- numerator/denominator;
- date range;
- branded vs. non-branded queries;
- ranking/position distribution;
- page;
- query;
- device;
- search appearance where relevant.

Do not conclude "bad website design" from a 1.6% number until the metric is understood. (Search CTR is pre-click, affected by rankings/titles/snippets/rich results/brand recognition/SERP competition; on-site conversion CTR is where design, CTA placement, page architecture, and UX are actually implicated — these are different problems with different fixes.)

### Five functions (not necessarily five agents — apply the same agent-vs-skill-vs-deterministic classification used for Creator & Platform Intelligence when this is scoped)

1. **Site/Product Intelligence** — UX, navigation, mobile experience, speed, conversion paths, homepage architecture, content discovery, internal search, video integration, episode discovery, returning-user experience.
2. **Search Intelligence** — SEO, plus answer/search discovery as search evolves; structured data; query opportunities; Search Console; indexing; cannibalization; internal linking; content decay.
3. **Editorial Automation** — the video → article workflow (see pipeline below).
4. **Conversion & Owned Audience** — what happens after arrival: newsletter, next article, related episode, Podcast/Main crossover, membership/community where appropriate.
5. **Content Library/Archive Intelligence** — turns 11 years of content into a structured evergreen library instead of every upload disappearing after release week.

Plus **Experimentation/CRO** (titles, layouts, CTAs, article templates, related-content modules, landing pages), and a **Digital Growth Manager** accountable for the whole asset — same manager-accountability pattern already used elsewhere in WAG's org model.

### Every appropriate upload becomes an owned asset

```
YouTube publishes → system detects new upload → retrieves title/description/
transcript/chapters/approved media → determines Main vs Podcast → researches
the search opportunity → generates article from what actually happened in the
video → selects/creates appropriate images → applies approved editorial
template → creates metadata → structured data/schema → SEO → answer-engine
optimization where useful → internal links → related videos/articles →
appropriate Main↔Podcast crossover → CTA → quality/factual check →
publish/approval workflow → request indexing where appropriate → monitor
impressions/rankings/clicks/engagement → update when performance is poor/stale.
```

**Not fully automatic at launch.** `DRAFT → QA → APPROVE → PUBLISH`. Automation earns autonomy through demonstrated quality — an AI-generated article that invents something the girls never said, or mass-produces thin SEO pages, damages the exact asset this department exists to build. (This is the same content-authenticity discipline already standing for WAG Stories — see [[wag_content_authenticity_rule]].)

### Template varies by content intent — explicit pushback already recorded

Not: transcript → same 800-word template → publish, 100 times. The content's intent determines its template — e.g. a Bigfoot investigation might warrant an episode companion *and* a location/legend explainer; a one-star-restaurant video gets a story/behind-the-scenes page without unsupported negative business claims; a Podcast dating episode gets question/answer/topic pages derived only from what was actually discussed; a horse-educational episode could become evergreen educational material if/when that property resumes (subject to [[wag_horse_content_pivot]]).

### Scorecard — broader than traffic, never pageviews alone

- **Search:** impressions, qualified organic clicks, CTR by query/rank, indexed coverage, non-brand growth, ranking distribution.
- **Engagement:** engaged sessions, next-page rate, scroll/content completion where reliable, video plays, related-content clicks.
- **Owned audience:** email signup conversion, repeat visitors, returning users, direct traffic, community/membership conversion where relevant.
- **YouTube ecosystem:** website→YouTube clicks, Main↔Podcast discovery, article→episode viewing.
- **Content compounding:** % of articles still generating useful traffic at 30/90/180/365 days.
- **Quality:** corrections, thin-content rate, factual errors, indexing failures.
- **Business:** sponsor/partner inquiries, appropriate revenue attribution, email-list value.

The manager's real question every month: **"Did the website become more valuable this month?"** — not "did we publish 30 articles?"

---

## 3. The larger flywheel these two departments complete

Katie's own framing of how every WAG OS department eventually connects — recorded verbatim because it's the clearest statement yet of the full-company loop:

```
External Creator/Platform Intelligence (what's happening outside WAG)
  → Audience Intelligence (who loves us, why, what they want)
  → WAG Historical Intelligence (what has worked for this audience)
  → Creative/Greenlight (decides what WAG should make)
  → Format/Title/Thumbnail/Hook/Retention (optimizes the episode)
  → Production (makes it)
  → YouTube Distribution (distributes it)
  → Website/Owned Asset (Digital Growth turns it into a permanent owned asset)
  → Comments/Search/Email/Audience Behavior (creates new evidence)
  → WAG Brain (learns)
  → Prediction/Outcome/Learning (closes the loop)
  → [back into the next creative decision]
```

Both departments in this doc are load-bearing links in that loop, not isolated marketing/audience tasks — which is also why both belong in the future **World-Class Gap Analysis** (recorded in `WAG_CREATOR_PLATFORM_INTELLIGENCE_AUDIT.md`) rather than being scoped as standalone side projects.

---

*Recorded 2026-08-12. Do not build. Next step, whenever Katie authorizes either: run the same §64 audit-first process already used for Creator & Platform Intelligence — most of what Site/Product Intelligence and Search Intelligence need likely already exists in some form (GA4, Search Console, the existing article/episode content model) and should be audited before anything new is proposed.*
