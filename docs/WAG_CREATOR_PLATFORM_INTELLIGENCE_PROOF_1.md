# Creator & Platform Intelligence — Proof 1

**Status: PROOF COMPLETE. STOP POINT per Katie's explicit instruction — no recurring jobs, staffing, or department expansion until she reviews this.**

Tests a different question than Proof 0: not "can the department investigate intelligently" but "can it discover a consequential external signal, starting from WAG relevance rather than largest-channels-filtered-backward, that produces a genuinely useful WAG action Katie didn't already know."

---

## A. Discovery funnel

| Stage | Count | Detail |
|---|---|---|
| Discovery queries run | 15 (13 WebSearch + 2 WebFetch listicle reads) | Slightly over the 8–12 target — 2 extra Podcast-specific retries were run in good faith after the first 3 Podcast queries returned only generic listicles, per the "genuine coverage" requirement |
| Initial signals surfaced | ~20 named, concrete items across all queries; the rest was generic marketing/SEO content with no specific creator or data attached | Most queries returned "how to grow on YouTube" guides, not real signals — see §E |
| Investigation candidates screened | 8 (exactly at the cap) | Cadel/Mia-cluster "Double Trouble," YouTube auto-dubbing, YouTube "Shorts algorithm changes," BabyBillion, The Shine Family, Niki and Gabi, Natacha Oceane, the Podcast-discovery track itself |
| Passed novelty/relevance pre-check → deep investigation | **3 of a 4–5 ceiling** | Not filled to quota, per explicit instruction |
| Rejected at pre-check (before expensive investigation) | 5 | Logged to `raw_observations` with `rejection_reason` — see §C |
| Findings promoted to Katie | 3 (at the ≤3 cap) | See §B — all landed as WATCH, not TEST or FILM |
| Actions/tests promoted | 0 of a ≤2 cap | Not forced |
| Do-not-copy promoted | 0 of a ≤1 cap | Not forced — nothing this round warranted it |

## B. Promoted findings

### Finding 1 — "Double Trouble" (Jasmin and James + Rylen and Chloe joint channel)

- **FACT:** Real, verified channel (@DoubleTrouble_Squad, 3.4M subs). Its own About panel names all four people and links both parent channels. Videos carry YouTube's native Collaboration tag (`@DoubleTrouble_Squad and @RylenandChloe`) — each tagged channel gets recommended into the other's subscriber feed. Launched ~May 30, 2026; reached 3.4M subs in ~10–11 weeks.
- **OBSERVATION:** Far faster cold start than either parent's own prior solo spinoff ("More Jasmin and James" took ~2 years to build its current base). But the *whole* Jasmin/James creator cluster is surging concurrently right now — main channel +7.2M subs in 3.5 months, the old-pattern solo secondary channel also gaining ~910K subs/30 days, Rylen and Chloe's own solo channel independently climbing too.
- **HYPOTHESIS:** A joint channel between two *independently established* creators, using YouTube's native cross-promotion tagging, is a structurally different mechanism from one creator's own spinoff — real audience-pooling, not just more content.
- **COUNTEREVIDENCE:** The concurrent cluster-wide surge is real and unresolved — can't cleanly separate "the joint-channel mechanism worked" from "this creator cluster is having an algorithmic hot streak this summer." No comparable failed joint-channel case was found, but general search doesn't index failed micro-channels well, so that absence is inconclusive, not proof.
- **WAG HISTORY:** Directly collides with `canonical_facts.secondary_channel_not_a_proven_growth_driver` (Proof 0). **Extends, doesn't contradict** — the original finding was about a creator's own spinoff; this is a joint venture between separate creators. Updated in place rather than creating a duplicate fact.
- **WAG ADVANTAGE:** Potential, with a real gap — WAG's own two-channel setup (Main + Podcast) is run by the same people, structurally the pattern already ruled out, not the independent-creator joint-venture pattern showing signal here. What would transfer requires an actual external creator partnership, a bigger decision than a packaging test, and one that needs real vetting given WAG's minors/privacy posture.
- **AUDIENCE RELEVANCE:** Could not retrieve real comment-thread text (lazy-loaded JS, a genuine tooling limitation, not skipped). Content genre (dance/challenge/prank Shorts) matches WAG's existing competitive-intelligence set.
- **ACTION/TEST/NO ACTION: Watch this development.** Re-check Double Trouble's and Rylen and Chloe's trajectories in 4–6 weeks once the cluster-wide surge has had time to cool, to see if the joint-channel effect holds independently.
- **NOVELTY: GENUINELY NEW TO WAG** (the native-Collaboration-tagging mechanism itself was not previously recorded; the refinement to the existing canonical fact is new).
- **CONFIDENCE: Medium-low** — high on the facts, low-medium on the causal interpretation, honestly, because the counterevidence is real and self-identified, not manufactured caution.

### Finding 2 — YouTube auto-dubbing expansion

- **FACT:** Verified directly against blog.youtube: free auto-dub for YouTube Partner Program creators since Feb 4, 2026, 27 languages, 8 with Gemini-powered "Expressive Speech." ~6M daily viewers of auto-dubbed content; 25%+ of watch time from non-primary-language viewers *during the pilot* (a creator-level figure, not platform-wide).
- **OBSERVATION:** Quality is content-dependent — best on single-speaker, low-noise, low-slang content; worst on multi-speaker, humor-heavy, casual content. One controlled same-channel comparison (Brave Wilderness): professional dub held 5:19 average view duration vs. 1:22 for the free AI dub on identical content — a real, measured 4–5x retention collapse, not an anecdote.
- **HYPOTHESIS:** If WAG has latent non-English viewership, this is a zero-cost way to test it — but WAG's actual content shape (multi-girl dialogue, humor, on-location noise for Main; fast conversational banter for Podcast) sits closer to the AI dub's documented weak zone than to any cited success story.
- **COUNTEREVIDENCE:** Real, independently-reported creator/viewer backlash over robotic voices and an AI "conjuring up its own vocal tone" for a real person — directly relevant given WAG is fronted by real, identifiable minors.
- **WAG HISTORY: KNOWN TO WAG.** This is a re-discovery, not new information — `WAG_REVENUE_PREPARED_INTELLIGENCE.md` §5 already covers this exact feature, cites the same Brave Wilderness data point, and proposes two specific bounded experiments (educational-catalog dub test; metadata-only test) plus a real, WAG-specific legal flag this investigation's own brief didn't raise: dubbing is a new likeness/voice use of real minors requiring specific consent, separate from WAG's existing location/identity privacy rules.
- **WAG ADVANTAGE:** Potential, not Yes — free and low-risk on the metadata-only option, but WAG lacks the scale to fall back on professional dubbing the way the cited success stories did when the free AI version underperformed.
- **AUDIENCE RELEVANCE:** No public evidence either way for Main or Podcast — the one dataset that would resolve this (WAG's own YouTube Studio language/geography breakdown) wasn't accessible to this investigation and is a 10-minute internal check, not a research task.
- **ACTION/TEST/NO ACTION: Watch this development** — specifically, do the Studio geography/language check before running either of the memo's existing proposed experiments.
- **NOVELTY: KNOWN TO WAG.**
- **CONFIDENCE: High** on the facts and the WAG-history finding (both directly verified), **Medium** on WAG-relevance (the real gap is WAG's own unreviewed Studio data).

### Finding 3 — "YouTube Shorts algorithm changes 2026" signal turned out to be mostly fabricated

- **FACT:** Of four specific claims in the discovered signal, only one — a real dedicated Shorts search filter (confirmed via TeamYouTube, Jan 2026) — held up against primary sources. "Anti-Repetitive Content AI," "Information Gain filter," and a shortened "Priority Test Window" trace to a cluster of SEO content-farm sites with **zero** attribution to blog.youtube, support.google.com, or any named Creator Insider episode. A fourth claim (August 2026 comment/link changes) is a **misdated 2023 policy** being recycled as fresh news.
- **OBSERVATION:** The real underlying YouTube policy in this space — a July 2025 rename to "inauthentic content" (monetization-only) — explicitly *protects* creators with consistent formats ("same intro and outro... distinct storyline, focus, or concept" is named as acceptable). This is the opposite of what the fabricated "Anti-Repetitive AI" narrative implied.
- **HYPOTHESIS:** Third-party SEO/creator-advice content has taken a real, narrow, monetization-only policy and rebranded it as a dramatic, non-existent distribution-suppression mechanism.
- **COUNTEREVIDENCE:** No trade-press reporting of creators actually losing reach to an "anti-repetition" mechanism was found — a real absence, and trade press (Tubefilter, Android Police, ppc.land) does cover genuine Shorts changes promptly, so this absence is informative, not just unproven.
- **WAG HISTORY:** Read `WAG_SHORTS_INTELLIGENCE.md` directly. WAG already runs two distinct, real Shorts formats (not one repeated template), and WAG's own 28-day discovery data shows search+playlists (73.2%) dwarfing the Shorts feed (12.4%) — meaning even a real feed-level anti-repetition risk would have below-average leverage over WAG specifically.
- **WAG ADVANTAGE:** Potential — WAG's existing structural position (two formats, feed-independent discovery mix) is already closer to safe than exposed, reasoned from WAG's real data, not from a confirmed external threat (since the threat isn't real as described).
- **AUDIENCE RELEVANCE:** Real, WAG-Main-specific data used directly (73.2%/12.4% split). No WAG Podcast-specific Shorts/clips data was accessible to this investigation — flagged as a gap, not guessed around.
- **ACTION/TEST/NO ACTION: Watch this development** — specifically, do not let "Anti-Repetitive Content AI" enter WAG's planning vocabulary as a confirmed mechanism; separately, confirm in Studio whether WAG Podcast's Channel Page already has a link-to-Short option near Subscribe (unrelated to the misdated claim, but worth a real 5-minute check).
- **NOVELTY: GENUINELY NEW TO WAG** (the source-reliability lesson itself) combined with **NEW EVIDENCE FOR EXISTING BELIEF** (WAG's two-format Shorts approach is not exposed to the risk this signal implied).
- **CONFIDENCE: Medium** — high on the primary-source verification itself, capped at medium because WAG Brain wasn't directly queryable by this agent (Supabase MCP OAuth unavailable in that session) and Podcast-specific Shorts data is a real, unresolved gap.

## C. Rejected investigations (pre-check stage, before expensive investigation)

| Candidate | Primary rejection reason |
|---|---|
| BabyBillion (sustained #1 since March 2026 — a real, sustained, non-spike acceleration signal) | `audience_mismatch` — young-children/family-hub content, no teen crossover found |
| The Shine Family (293.9M weekly views entry) | `audience_mismatch` — same young-children family-hub genre |
| Niki and Gabi ("Opposite Twins," 9.3M subs) | `insufficient_evidence` — no dated movement/acceleration event, just an existing channel's mention in listicles; doesn't qualify as a signal |
| Natacha Oceane (fitness creator, 1.2M→2.5M/12mo after cadence change) | `not_transferable` — real, dated mechanism, but adult fitness content with no ensemble/teen-entertainment crossover |
| The Podcast-discovery track itself (7 distinct queries/fetches specifically hunting a teen video-podcast breakout signal) | `insufficient_evidence` — genuine, repeated effort, no qualifying signal found; every named show either lacked growth data or was adult-audience-coded |

## D. Main vs. Podcast — separate learnings

**WAG Main:**
- Real internal data used directly this round: 73.2% search+playlist vs. 12.4% Shorts-feed discovery — reinforces that Main's Shorts strategy isn't feed-algorithm-dependent, independent of whether the fabricated "anti-repetition" claim was real.
- The auto-dubbing re-discovery applies most directly to Main's existing educational catalog (per the prior memo's own proposed experiment).
- Double Trouble's mechanism (independent-creator joint channel) doesn't map onto Main's current structure at all — it would require a real external creator partnership decision, not a packaging change.

**WAG Podcast:**
- Real gap, twice: no Podcast-specific Shorts/clips performance data was accessible to either the Shorts-algorithm or auto-dubbing investigation. Both explicitly recommend a Podcast-side Studio check rather than assuming Main's data transfers.
- The auto-dub weak zone (multi-speaker, fast conversational, humor-heavy) matches Podcast's actual format *more* than Main's, if anything — worth weighting that when Katie reviews the existing memo's proposed experiments.
- The one concretely Podcast-relevant packaging item in the (mostly fabricated) Shorts signal — a Channel-Page link near Subscribe pointing to a Short — needs a direct settings check to determine if it's already available, independent of the debunked "2026 change" framing.

**What this proof did NOT produce for either property:** a specific video idea, packaging test, or production change. Three real, verified findings; zero forced tests. Reported as such, not padded.

## E. Department evaluation

**What the department did better than an ordinary research search:**
- Refused to let a plausible-sounding, well-phrased signal ("Anti-Repetitive Content AI") survive on the strength of confident third-party phrasing alone — an ordinary search-and-summarize pass would very likely have reported this as real, since it appears fluently and repeatedly across many SEO sites that cite each other. Tracing it to zero primary-source attribution is exactly the discipline the ingestion-integrity gate was built to enforce, and it worked on qualitative claims too, not just numeric ones.
- Caught its own data-hygiene error mid-proof (a duplicate `canonical_facts` row from an earlier retry) and fixed it rather than leaving it.
- Surfaced a real, unprompted cross-proof connection (Double Trouble tagging back to Proof 0's own Rylen and Chloe negative-evidence case) that a generic search would have had no reason to connect.
- Correctly identified a KNOWN TO WAG re-discovery (auto-dubbing) rather than presenting it as new, even though it would have been easy to write it up as a fresh finding.

**Where it failed or fell short:**
- The Podcast-specific discovery track produced no usable signal despite genuine, repeated effort — a real limitation of plain web search as a discovery mechanism for creator-level movement data, not something a better prompt would have fixed. Proof 0 depended entirely on Tubefilter's structured, pre-computed ranking data; Proof 1 had no equivalent structured starting dataset for most of the 11 categories, and it showed.
- Two of three deep investigations hit the same real technical wall: no direct WAG Brain (Supabase) query access from within the background-agent sessions (the OAuth-gated connector, distinct from the direct-access one available to me). Both correctly flagged this as a gap rather than guessing — but it means the "WAG History Collision" stage was partially manual (me, reading files and querying the DB directly after each agent returned) rather than something each investigation could do fully on its own.

**What required human/Claude (main-loop) intervention, not the department's own infrastructure:**
- The WAG Brain collision check for 2 of 3 findings (agents couldn't query the DB directly).
- Deduplicating and updating the `canonical_facts` row for Double Trouble's refinement (an agent flagged it; I made the actual fix).
- The final synthesis and novelty labeling across all three findings — done here, not by a Director employee acting autonomously.

**Did it earn another maturity step?** Yes, on process — the ingestion-integrity discipline built after Proof 0 generalized cleanly from numeric data to qualitative/narrative claims without being told to, which is real evidence it's a durable capability, not a one-off patch. No, on infrastructure — the WAG Brain access gap for background agents is a real, unresolved dependency the next proof should either route around deliberately or fix.

## F. Operational recommendation

**This capability has not yet earned recurring monitoring.** Two proofs, two different failure/success shapes:

- Proof 0 showed the department can investigate intelligently given a strong structured starting dataset (Tubefilter), and caught a real ingestion error.
- Proof 1 showed the department can hold a rigorous evidence bar under a much weaker discovery surface (plain web search) — correctly debunking a fabricated signal and correctly declining to promote a Podcast candidate that didn't clear the bar — but it did not produce a single actionable test, packaging change, or production decision. Three "watch this" outcomes and one debunked signal is a real, honest result, not a launch-ready one.

**What would need to be true before proposing recurring monitoring:** at least one proof that produces a genuine TEST or FILM-tier action, not just WATCH-tier findings — and a resolved path for WAG Brain access from within investigation agents, so the WAG History Collision stage doesn't depend on manual follow-up each time.

**If Katie wants a Proof 2:** the clearest next move, based on what actually worked here, is pairing a structured data source (like Tubefilter, or a category-specific equivalent) with the WAG-relevance-first ordering Proof 1 tested — rather than relying on generic web search alone for creator-level discovery. Not proposing this as a scheduled cadence; naming it only as the shape a Proof 2 would likely need to take if authorized.

---

## What we may not be thinking of

- **The discovery-surface gap is structural, not a search-skill problem.** Real-time, structured, per-creator movement data (the thing that made Proof 0 work) exists for very few categories — general-purpose web search cannot substitute for it. If Katie wants recurring creator-level discovery outside the annual/weekly Tubefilter-style lists, that likely means identifying (and possibly paying for) a real structured data source per category, not a smarter prompt.
- **The fabricated-signal problem in Finding 3 is probably not a one-off.** If one of three targeted, good-faith discovery queries in this proof surfaced a mostly-fabricated "algorithm update," it's reasonable to assume future platform-change searches will hit the same SEO-content-farm pollution — worth treating as a standing risk for this department, not a fluke.
- **WAG Brain's own connector access for background research agents is unresolved** and will keep forcing manual follow-up on the WAG History Collision stage until it's addressed — worth deciding whether that's fixed before or as part of a Proof 2.
- **Neither proof has yet tested the department's actual crisis/urgency handling** — everything investigated so far has been NOW/THIS QUARTER-shaped, not a fast-moving competitive threat. Whether the funnel can move fast enough to matter for something genuinely time-sensitive is untested.
- **Two proofs, zero involvement of Audience Intelligence** — reasonable, since that department doesn't exist yet, but worth naming: several of this proof's "watch this" outcomes (especially Double Trouble's audience-relevance gap) are exactly the kind of question a real Audience Intelligence capability would eventually help answer directly instead of leaving as an acknowledged blind spot.

---

*Per Katie's explicit closing instruction: STOP here. No recurring jobs, no additional staffing, no autonomous agents, no department expansion until she reviews this.*
