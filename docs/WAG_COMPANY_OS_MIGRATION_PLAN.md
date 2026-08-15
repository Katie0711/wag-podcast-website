# WAG Company OS — Migration & Reconciliation Plan

**LAST VERIFIED:** 2026-08-15
**VERSION:** v1.0 — revised per Katie's 19-point approval-with-corrections
**OWNER:** Katie Swans
**STATUS: PLAN ONLY. No repository has been created. No file has been moved, renamed, or deleted. Nothing executes until Katie approves this document.**

---

## 1. Repository decision — confirmed

**Create `Katie0711/wag-company-os`, private.** This does not replace WAG Brain. Three-way split, exactly as Katie specified:
- `wag-company-os` = durable company architecture, strategy, governance, roadmaps, definitions, operating protocols, system specifications.
- WAG Brain/Supabase = dynamic structured operating truth.
- Product repos (`wag-podcast-website`, `wag-website`) = product-specific code and documentation.
- Google Drive = read-only human-accessible backup/export of the company-os repo. Never independently editable.

**Not moving:** all ~90 other real docs in `wag-podcast-website/docs/` (Packaging Intelligence, Competitive Intelligence, per-department research, `WAG_FORMULA_V1_ROADMAP.md`, `ROADMAP.md`, etc.) — these are product/department-level and stay exactly where they are, referenced from the new Source-of-Truth Index, not duplicated.

## 1a. Reference-impact scan (run 2026-08-15, per Katie's explicit "check whether any current documents, prompts, scripts or systems reference the existing paths")

Searched the entire `wag-podcast-website` repo (excluding `docs/` itself, since the canonical files legitimately cross-reference each other in prose) for the 10 canonical filenames, across source code, `.github/workflows/`, `package.json` scripts, and `astro.config`. **Result: zero references found outside `docs/` and `CLAUDE.md`.** No Astro page, component, build script, or CI workflow reads any of these files programmatically — they are pure human/Claude-readable documentation, never consumed by code at build or runtime. The only file outside `docs/` that references them is `CLAUDE.md` (created 2026-08-15, this session's anti-drift preflight mechanism), which will need its own paths updated the moment these files move.

## 2. Migration plan — SOURCE → DESTINATION → ACTION → LINK/REFERENCE IMPACT → ROLLBACK

**Bounded to exactly the 10 files in Katie's approved structure. Not executed — stopped for approval per her explicit instruction.**

| # | Source | Destination | Action | Link/reference impact | Rollback |
|---|---|---|---|---|---|
| 1 | `wag-podcast-website/docs/WAG_SOURCE_OF_TRUTH_INDEX.md` | `wag-company-os/00_index/WAG_SOURCE_OF_TRUTH_INDEX.md` | Copy to new repo, remove from source, one commit per repo citing the other's commit hash | Referenced in prose by other canonical docs (not code) and by `CLAUDE.md`'s preflight list — both need path updates | Copy file back to original path; revert `CLAUDE.md` |
| 2 | `docs/WAG_COMPANY_BLUEPRINT.md` | `01_blueprint/WAG_COMPANY_BLUEPRINT.md` | Same | Same — most cross-referenced file of the 10 (every other canonical doc points to it) | Same |
| 3 | `docs/WAG_MASTER_ROADMAP.md` | `02_roadmap/WAG_MASTER_ROADMAP.md` | Same | Same; also referenced by `WAG_COMPANY_OS_MIGRATION_PLAN.md` itself (this file) | Same |
| 4 | `docs/WAG_CURRENT_STATE.md` | `03_current_state/WAG_CURRENT_STATE.md` | Same | Same | Same |
| 5 | `docs/WAG_ACTIVE_PORTFOLIO.md` | `04_active_portfolio/WAG_ACTIVE_PORTFOLIO.md` | Same | Same | Same |
| 6 | `docs/WAG_DECISION_LOG.md` | `05_decisions/WAG_DECISION_LOG.md` | Same (already renamed from `CEO_DECISIONS.md` via `git mv` within this repo, 2026-08-15 — this step is a second move, repo-to-repo) | Same | Same |
| 7 | `docs/WAG_ACCEPTANCE_TESTS.md` | `06_acceptance_tests/WAG_ACCEPTANCE_TESTS.md` | Same | Same | Same |
| 8 | `docs/WAG_ASSET_SYSTEM_REGISTRY.md` | `07_asset_registry/WAG_ASSET_SYSTEM_REGISTRY.md` | Same | Same | Same |
| 9 | `docs/WAG_BUILD_PROTOCOL.md` | `08_build_protocol/WAG_BUILD_PROTOCOL.md` | Same | Same | Same |
| 10 | `docs/WAG_EXECUTIVE_SNAPSHOT.md` | `09_snapshot/WAG_EXECUTIVE_SNAPSHOT.md` | Same | Same | Same |
| — | 8 superseded docs (`WAG_MASTER_ORGANIZATION_ROADMAP_V3.md`, `WAG_MASTER_ROADMAP_DECISION_REVIEW.md`, `WAG_MASTER_ORGANIZATION_CONTINUITY_CHECK.md`, `WAG_OS_ROADMAP.md`, `WAG_AGENT_ARCHITECTURE.md`, `WAG_OS_ARCHITECTURE_PROPOSAL.md`, `WAG_OS_PHASE_0_BUILD_PROPOSAL.md`, `WAG_MASTER_OPERATING_SYSTEM_DIRECTIVE.md`) | `10_archive/` | Same | Each already carries a `SUPERSEDED BY` header (added 2026-08-15) pointing forward — those headers' target paths need updating too | Copy back, revert header edits |

**Open question, not decided here:** 3 files created this session are genuinely company-level control artifacts (not property-specific) but don't have a named slot in Katie's approved 10-folder structure — `WAG_COMPANY_BLUEPRINT_RECONCILIATION_2026-08-15.md` (dated audit report, natural fit for `10_archive/`), `WAG_CONTENT_INTELLIGENCE_AUDIT_2026-08-15.md` and `WAG_AUTONOMY_GAP_TEST.md` (both live, non-archival governance artifacts). Per Katie's own rule ("the repository architecture should reflect function, not be distorted to match a backup-folder list"), these likely need one or two additional appropriately-named folders — not decided or executed here, flagged for her explicit call rather than assumed.

**Every row above is identical in mechanics** — the only real per-file variation is the reference-impact note. `CLAUDE.md` is the one file requiring an actual content edit (its 6 file paths under `docs/` become 6 paths in the new repo, or it states the new repo name explicitly) — everything else's "impact" is prose cross-references between the canonical docs themselves, which Katie's own migration safety checklist (§10 below) already covers via a dedicated link-update pass.

## 2a. What moves — file-by-file (original table, superseded by the table above for execution order; kept for the fuller original context)

| # | File | Current location | New canonical location | Action |
|---|---|---|---|---|
| 1 | `WAG_COMPANY_BLUEPRINT.md` | `wag-podcast-website/docs/` | `wag-company-os/01_blueprint/` | MOVE (`git mv` in source, re-add in destination — cross-repo moves don't preserve history natively; see §8) |
| 2 | *(new)* `WAG_MASTER_ROADMAP.md` | Does not exist yet | `wag-company-os/02_master_roadmap/` | CREATE from the reconciliation matrix in §4 below |
| 3 | *(new)* `WAG_CURRENT_STATE.md` | Does not exist yet | `wag-company-os/03_current_state/` | CREATE from the reconciliation matrix in §5 below |
| 4 | `WAG_ACTIVE_PORTFOLIO.md` | `wag-podcast-website/docs/` | `wag-company-os/04_active_portfolio/` | MOVE |
| 5 | `CEO_DECISIONS.md` | `wag-podcast-website/docs/` | `wag-company-os/05_decisions/WAG_DECISION_LOG.md` | MOVE + RENAME |
| 6 | *(new)* `WAG_ACCEPTANCE_TESTS.md` | Draft chains only, embedded in the reconciliation report | `wag-company-os/06_acceptance_tests/` | CREATE now — see §6 below |
| 7 | `WAG_ASSET_SYSTEM_REGISTRY.md` | `wag-podcast-website/docs/` | `wag-company-os/07_asset_registry/` | MOVE — **own top-level folder, not nested under agent specs** |
| 8 | `WAG_BUILD_PROTOCOL.md` | `wag-podcast-website/docs/` | `wag-company-os/08_build_protocol/` | MOVE |
| 9 | `WAG_EXECUTIVE_SNAPSHOT.md` | `wag-podcast-website/docs/` | `wag-company-os/09_executive_snapshot/` | MOVE |
| 10 | `WAG_SOURCE_OF_TRUTH_INDEX.md` | `wag-podcast-website/docs/` | `wag-company-os/00_index/` | MOVE |
| 11 | `WAG_COMPANY_BLUEPRINT_RECONCILIATION_2026-08-15.md` | `wag-podcast-website/docs/` | `wag-company-os/10_archive/` | MOVE — this is a dated audit report, not a living control file |
| 12 | `WAG_AGENT_ARCHITECTURE.md`, `WAG_OS_ARCHITECTURE_PROPOSAL.md`, `WAG_OS_PHASE_0_BUILD_PROPOSAL.md`, `WAG_MASTER_OPERATING_SYSTEM_DIRECTIVE.md`, `WAG_MASTER_ORGANIZATION_ROADMAP_V3.md`, `WAG_OS_ROADMAP.md`, `WAG_MASTER_ORGANIZATION_CONTINUITY_CHECK.md`, `WAG_MASTER_ROADMAP_DECISION_REVIEW.md` | `wag-podcast-website/docs/` | `wag-company-os/10_archive/`, each with a `SUPERSEDED BY` header pointing to the new canonical file | MOVE + ARCHIVE — these are exactly the superseded sources the new Master Roadmap/Current State reconcile. Nothing gets deleted; each gets a one-line pointer forward. |
| — | `wag-podcast-website/docs/ROADMAP.md`, `WAG_FORMULA_V1_ROADMAP.md` | Stay in place | **Not company-level — see finding in §4.** These are legitimate subordinate/domain roadmaps (Podcast product, Main creative), referenced from the new Master Roadmap, not merged into it. | KEEP, referenced |
| — | `MASTER_STATUS.md` (both site repos) | Stay in place | **Not company-level — see finding in §5.** Legitimate product-status docs, referenced from the new Current State, not merged into it. | KEEP, referenced |

**Google Drive backup taxonomy — final, per Katie's confirmed list, mirrors the repo structure exactly:** `00_INDEX_AND_CONTROL / 01_COMPANY_BLUEPRINT / 02_MASTER_ROADMAP / 03_CURRENT_STATE / 04_ACTIVE_PORTFOLIO / 05_DECISIONS / 06_ACCEPTANCE_TESTS / 07_ASSET_SYSTEM_REGISTRY / 08_BUILD_PROTOCOL / 09_EXECUTIVE_SNAPSHOT / 10_ARCHIVE`. No file gets forced into a folder that doesn't match its actual content. **Git remains the only editable authoritative master; Drive is a read-only, periodically-exported disaster-recovery copy. No backup automation is being built yet — this is a structure proposal only.**

## 3. Reconciliation methodology

Per Katie's explicit instruction: I do not ask her to pick a winner line-by-line. For each capability: read all source docs → identify agreement vs. conflict → where documents agree, or where one is a clear, dated correction of another (e.g., the Decision Review explicitly correcting V3), apply the correction as canonical → where conflict reflects a genuine unresolved strategic question, escalate to Katie as a TRUE CEO DECISION (§7), not before.

## 4. Master Roadmap reconciliation matrix

**First finding, before the matrix — this changes the scope of the merge:** of the 4 documents originally flagged as competing roadmap candidates, only **2 are actually company-level.** `ROADMAP.md` (thewagpodcast-website root docs) is the **Podcast website's own product roadmap**; `WAG_FORMULA_V1_ROADMAP.md` is **WAG Main's own creative roadmap**. Both are legitimate, real, correctly-scoped subordinate/domain roadmaps — exactly the kind Katie's point 3 says can continue to exist alongside one master. They are not merged in below; they're referenced from the new Master Roadmap as domain-level detail.

The two genuine company-level candidates — `WAG_MASTER_ORGANIZATION_ROADMAP_V3.md` and `WAG_OS_ROADMAP.md` — barely overlap in content rather than conflict: V3 is an org/business-capability roadmap (13-function restructure, build order); `WAG_OS_ROADMAP.md` is a technical maturity scale for WAG-OS-specific documents (1–5: Named/Designed/Populated/In-use/Outcome-validated). The real reconciliation work is applying the Decision Review's explicit, dated corrections to V3, and retiring `WAG_OS_ROADMAP.md`'s separate 1–5 scale in favor of the single §64 ladder — not merging two documents that disagree on the same facts.

| Capability | Source doc(s) | Agreement | Conflict | Recommended canonical version | Reason | Classification | Needs Katie? |
|---|---|---|---|---|---|---|---|
| Overall structure (13-function vs. 5-department + cross-cutting) | V3, Decision Review | Decision Review builds directly on V3 | V3's 13 roughly-parallel functions vs. Decision Review's restructure into 5 real departments + function/skill/workflow/shared-infrastructure categories | **Decision Review's restructure** | Explicitly dated later, explicitly built as a point-by-point pressure-test of V3, not a rival document | **SUPERSEDED** (V3's structure) | No |
| Website/Digital Growth maturity | V3 ("OPERATING — most mature department"), Decision Review (retracts to BUILT→CONNECTED→TESTED) | — | Direct, same-week contradiction | **Decision Review's retraction** | Decision Review shows its work: "I cannot point to [a closed loop] for Website this session," applying §64 strictly | **SUPERSEDED** (V3's claim) | No |
| Main's Skinwalker item priority | V3 (buried under Kidoodle→Revenue→Website→Podcast), Decision Review (explicit #1) | — | Sequencing disagreement | **Decision Review's #1 ranking** | Decision Review's own reasoning: "the highest-value single item in the entire roadmap," running on a parallel (not competing) clock with the other priorities | **SUPERSEDED** (V3's ordering) | No |
| Podcast's blocker framing | V3 ("chart-mechanics research"), Decision Review ("Podcast Benchmark & Gap Analysis," 5-step, answers 10 real questions not 2) | — | Scope disagreement | **Decision Review's reframe** | V3's framing answers 2 of 10 real questions per Decision Review's own audit | **SUPERSEDED** (V3's framing) | No |
| Revenue's next bottleneck | V3 ("give it a scorecard"), Decision Review (retracts — "a scorecard would describe stalls, not unstick them," proposes reusing `initiatives` on the real stalled Aha World lead instead) | — | Direct retraction | **Decision Review's replacement** | This session's own Revenue research confirms Aha World is real, open, and exactly the kind of stalled lead this replacement targets | **SUPERSEDED** (V3's scorecard idea) | No |
| Audience Intelligence — the capability itself | Continuity Check, V3, Decision Review, this session's Blueprint §4 | All agree it's a real, named destination capability | None on the capability's existence | **KEEP** | Independently confirmed by this session's own Creator/Audience Intelligence research pass | **KEEP** | No |
| Audience Intelligence — build-order sequencing | V3 (sequenced last, after deeper Creator Intelligence), Decision Review (reclassified LATER→NEXT, "the one true multiplier node") | — | Sequencing disagreement only, not the capability itself | **Decision Review's promotion to NEXT** | Most-repeated real gap across every department that touches audience data | **SUPERSEDED** (V3's sequencing) | No |
| `initiatives`/execution maturity | V3 (implied unsolved), Decision Review ("now genuinely TESTED") | Both treat it as real infrastructure | Decision Review's optimism needs a caveat | **Decision Review's TESTED rating, with an explicit caveat: mechanism proven, coverage thin (2 real Main rows, 0 Podcast rows) — adoption is the actual gap, not engineering** | Both source docs agree on the underlying fact; the caveat comes from this session's own §64-strict reading | **MERGE** | No |
| `WAG_OS_ROADMAP.md`'s 1–5 maturity scale | `WAG_OS_ROADMAP.md` only | — | Coexists, unreconciled, with the 7-stage §64 ladder | **Retire the 1–5 scale. §64 (DESIGNED→BUILT→CONNECTED→TESTED→OPERATING→LEARNING) becomes the sole maturity vocabulary company-wide** | §64 is newer, more granular, and already the vocabulary Katie has used in every subsequent directive this session | **ARCHIVE** (the 1–5 scale itself; the doc's real per-capability ratings get re-expressed in §64 terms, not discarded) | **Recommend applying now; flag if Katie disagrees rather than waiting on upfront sign-off (CLAUDE CAN RESOLVE FROM EVIDENCE, §8)** |
| Full 18-department + 6-engine destination architecture, incl. Rights & Contract Operations, Finance & BI, Legal/Compliance, Opportunity/Innovation, Learning, Membership, Commerce, B2B Education, Research/Evidence Governance | Continuity Check (18-fn table), V3 (implied), this session's Blueprint §2–4 | All agree these remain real, named, destination-state capabilities | None — the only "conflict" would be silently dropping them | **Preserve all 18 departments and all 6 business engines in the destination architecture, active build priority notwithstanding** | Direct instruction, twice-repeated by Katie across this and the prior message | **KEEP** — every one of them | No |
| `ROADMAP.md` (thewagpodcast-website product roadmap) | `ROADMAP.md` | — | Not in conflict — different scope entirely (Podcast product, not company) | **Keep as-is, referenced from the Master Roadmap** | It's Podcast's own product roadmap, correctly scoped | **DOMAIN SUB-ROADMAP** | No |
| `WAG_FORMULA_V1_ROADMAP.md` (Main creative roadmap) | `WAG_FORMULA_V1_ROADMAP.md` | — | Not in conflict — different scope entirely (Main creative, not company) | **Keep as-is, referenced from the Master Roadmap** | It's Main's own creative roadmap, correctly scoped | **DOMAIN SUB-ROADMAP** | No |

**Structural roadmap the new file will use:** destination architecture (all 18 capabilities + 6 engines + full org hierarchy, current build priority notwithstanding) → current build order (the 5 prioritized engines) → dependency graph → pointers to the 2 real subordinate roadmaps (`ROADMAP.md`, `WAG_FORMULA_V1_ROADMAP.md`) for domain-level detail.

## 5. Current State reconciliation matrix

**Same finding pattern applies:** of the 4 originally-flagged status candidates, only **2 are company-level** — `WAG_MASTER_ORGANIZATION_CONTINUITY_CHECK.md` and `WAG_MASTER_ROADMAP_DECISION_REVIEW.md`. The two `MASTER_STATUS.md` files are each a **single website's own product status** (thewagpodcast.com's, wildadventuregirls.com's) — real, legitimate, and referenced from the new Current State rather than merged into it.

| Capability | Source doc(s) | Agreement | Conflict | Recommended canonical status | Reason | Needs Katie? |
|---|---|---|---|---|---|---|
| WAG Brain / evidence governance | Continuity Check (OPERATING, unnamed), Decision Review (explicit: "the only department that has genuinely closed a real loop") | Full agreement | None | **OPERATING** | Both agree; this session's own live query earlier confirmed real table counts and active connectors | No |
| WAG Main | Continuity Check (TESTED, nearest LEARNING), Decision Review (elevates Skinwalker priority but doesn't dispute the maturity rating itself) | Agreement on rating | None | **BUILT→CONNECTED→TESTED**, 0 outcomes closed on the Next-10 slate | Consistent with this session's own Main research pass | No |
| WAG Podcast | Continuity Check (DESIGNED + real built website pieces), Decision Review (DESIGNED mostly, reframes the blocker) | Agreement | None | **BUILT/CONNECTED (product) / DESIGNED (17-fn intelligence layer)** | Matches this session's own Podcast department research exactly | No |
| Website/Digital Growth | See §4 — Decision Review retracts V3's OPERATING claim | Resolved in §4 | — | **BUILT→CONNECTED→TESTED** | Same reasoning as the roadmap table | No |
| Revenue/Partnerships | Continuity Check (BUILT/TESTED in pieces, not operationally closed), Decision Review (retracts the scorecard idea, elevates Aha World unsticking) | Agreement on underlying maturity | None on maturity itself | **BUILT/CONNECTED, TESTED on 2 of 13 specialist roles**, one real WON deal (Epic), one real LOST deal (Pop&Boom), one real OPEN (Aha World) | Directly confirmed by this session's own Revenue research pass | No |
| Execution/`initiatives` | See §4 | Resolved in §4 | — | **TESTED, thin coverage — adoption gap, not engineering gap** | Same reasoning as roadmap table | No |

**Structural note on the interaction platform:** neither Continuity Check nor Decision Review resolves this — it surfaces instead in the product-level `MASTER_STATUS.md`, `ROADMAP.md`, `PRODUCTION_AUDIT.md`, and `CHANGELOG.md` (see the reconciliation report's Duplication #1, still the single highest-priority open item). The new `WAG_CURRENT_STATE.md` will carry this forward as an explicitly **CONTRADICTED, unresolved** status rather than pick a side — this is exactly the kind of fact-level conflict (not a strategic judgment call) that gets the one-command git verification, not an escalation to Katie.

## 6. Acceptance Tests — formalized now, per Katie's explicit "do not defer this"

Extracted and reconciled from the draft chains in the reconciliation report, plus Katie's own Revenue example, into 5 formal Definitions of Done for the active engines. Each chain's **current real position** is stated honestly — none of these are "complete."

**Media / WAG Main:** Idea → Research (WAG internal truth × world-class creator intelligence × current platform intelligence) → Greenlight → Predict → Package → Produce → Publish → Measure (exposure/CTR/retention/distribution/audience/fandom/economics) → Diagnose why → Intervene → Outcome → Learn → Change next decision. **Real position today:** through Predict for 6 of 10 Next-10 ideas; nothing has closed the loop past Publish for any of the 6. The Haunted Hotel/Bigfoot case is the one real completed loop reaching Learn.

**WAG Podcast:** Same chain as Media, brand-scoped separately. **Real position today:** real product exists (clips, distribution, sponsor inventory) well ahead of the intelligence loop behind it — the 17-function specialist layer is mostly DESIGNED only, so Research/Diagnose/Learn stages have essentially no real infrastructure yet even though Publish is real and recurring.

**Revenue / Sales & Partnerships:** Discover → Verify/spam-security gate → Qualify → Contact research → Opportunity card → **Katie approval** → Outreach → Follow-up → Conversation → Proposal → Negotiation → Contract → Fulfill → Invoice → Collect → Renew/upsell → Learn. **Real position today:** through Qualify for ~60 researched brands; Katie-approval stage reached for Aha World only; nothing has ever reached Outreach through Collect except Epic/Kidoodle's pre-existing relationships (which predate this pipeline and were never run through it from Discover).

**Publishing / IP:** Opportunity → Market validation → Concept → Greenlight → Development → Writing → Design → Rights/legal → Production → Distribution → Launch → Customer acquisition → Sales → Economics → IP extension → Learn. **Real position today:** zero infrastructure before this pass; Katie's direct activation starts this at Opportunity for Book #1 (WAG Slime Lab).

**Digital Publishing / Website / Owned Audience:** Episode/source → Opportunity research → Derivative-content decision → Original WAG article/page → SEO/AEO/GEO optimization → Publish → Index → Discover → Engage → Convert → Measure → Learn → Influence future decisions. **Real position today:** the chain runs informally through Publish for most new episodes (real articles, real schema, real internal linking exist); it has never once closed the loop to Measure→Learn→Influence — no content-decay tracking or refresh-triggered learning exists anywhere in either repo.

**WAG OS / Operations & Intelligence:** Company need detected (by any department) → represented in Blueprint/Roadmap → capability specified against the Agent Design Standard (15-point spec) → built only if it materially accelerates one of the 5 active engines → connected to real data → tested against a real case → operating on a recurring basis → outcome measured → feeds back into company learning. **Real position today:** WAG Brain's evidence-governance pipeline is the one capability in the entire company that has closed this loop (OPERATING). Everything else in this layer — the Build Manager role, the preflight mechanism, the Asset Registry's own upkeep — is DESIGNED or BUILT at best; none are OPERATING yet.

**Placeholders for remaining destination capabilities (explicitly not claimed complete, not built):** Audience Intelligence, Creator & Platform Intelligence, Opportunity/Innovation Intelligence, Finance & BI, Rights/Licensing/Commercial Ops, Legal/Safety/Compliance, Company Learning & Performance, Education/WAG Labs, B2B Education, Product/Membership/Commerce. Each will get a named chain in `WAG_ACCEPTANCE_TESTS.md` when it becomes an active build priority — not fabricated now.

## 7. Source-of-truth precedence — verbatim per Katie's point 15

When sources conflict, this is the order that wins, highest first:

1. Approved Blueprint
2. Approved durable Decision/ADR (`WAG_DECISION_LOG.md`)
3. WAG Brain live operational truth
4. Master Roadmap
5. Current State
6. Active Portfolio
7. Department/product documentation
8. Dated research/audit documents
9. Chat history

**Chat history never silently overrides approved canonical architecture.** If a new Katie instruction materially changes the Blueprint, the conflict is surfaced and the approved change is recorded in the Decision Log — exactly the pattern this session has followed each time she's sent a new directive mid-turn. This precedence list goes into `WAG_SOURCE_OF_TRUTH_INDEX.md` and `WAG_BUILD_PROTOCOL.md` once the migration executes.

## 8. Decision queue — reclassified 2026-08-15 (second pass), CEO-load reduced further

Per Katie's explicit correction and the new CEO-load-reduction rule (`WAG_BUILD_PROTOCOL.md` §19b): the prior 8-item TRUE CEO DECISION list is cut to 4. Three items were resolved directly instead of asked; one was moved out entirely.

### TRUE NEEDS KATIE NOW (4, down from 8)
1. **Blueprint/reconciliation approval** — foundational, legitimately hers.
2. **Company OS canonical location** — confirmed: new standalone private `wag-company-os` repo. Git is the authoritative editable source; any Drive copy is a backup/export, not a second master. Nothing moves until the reconciliation/merge plan itself is approved; history preserved where technically possible.
3. **Skinwalker title/thumbnail/hook** — narrowed to what's actually needed: **not** "invent a title" but "approve the strongest evidence-backed recommendation once the three-lens intelligence process (WAG internal truth × world-class creator intelligence × current platform intelligence) actually runs." That process has not been re-run against current evidence this pass — it's the first real execution item once this plan is approved (§F below), not something resolved here.
4. **Kidoodle payment truth** — requires actual accounting/payment evidence only Katie can access. Stays.

**Secret Menu, narrowed:** the one real open item is editor assignment — who edits it. Nothing else about this video needs Katie's input at this stage.

### Resolved directly this pass, not asked
- **wagmediapartners.com** — moved to backlog (Parked/Trigger List). No evidence found this pass that it's currently blocking revenue, audience, IP, execution, or architecture — it sits in a stable, previously-implemented simplified-handoff state. Reactivate if that changes.
- **WAG Slime Lab — what already exists.** Searched directly rather than asked. Full inventory:

  | Status | Item |
  |---|---|
  | **KNOWN** | Mascot Wobbie fully designed (green science-safety goggles pushed up on forehead, sewn-on color patches, oversized head/eyes, one star sticker, stubby arms/no legs) — Katie's daughter Bella responded well to this direction; an outside illustrator is being hired for final art/cover |
  | **KNOWN** | Trademark research complete — 7 candidate series names confirmed taken/conflicting (Squish, SlimyGloop, Slime Squad, Slimeology, Messterpiece, Slimetropolis, Slime Quest); "Wobbie" confirmed clean; Nickelodeon/Viacom enforces real trademark rights around "SLIME" itself aggressively — avoid Slime+word combos |
  | **KNOWN** | Voice/style guide locked — 4 distinct voices, fixed page structure per recipe, escalation-ordered chapters, a "Secret Slime Code" letter-collecting puzzle mechanic |
  | **KNOWN** | Chapter structure locked — Classic Slime, Sparkle & Shine, Edible Slime, Science Lab, Holiday Slime (its own section), Go Big (finale) |
  | **KNOWN** | 2 real unresolved production blockers — a Starbucks logo baked into one title-card photo, real Disney Frozen movie stills composited into another; both need brand-new photography, renaming the recipes doesn't fix either |
  | **FOUND, referenced but not contained** | `WAG_OPPORTUNITY_REGISTRY.md`, `FUTURE_OPPORTUNITIES.md`, `WAG_MASTER_ROADMAP_DECISION_REVIEW.md`, `WAG_REVENUE_PARTNERSHIPS_DEPARTMENT_ARCHITECTURE.md`, `COMPETITIVE_INTELLIGENCE.md` all reference the project's existence and real connections (LOL Slime competitive intel already logged, a real future Revenue licensing hook) but contain no creative material itself |
  | **MISSING — not accessible to me** | The actual source research: full transcripts from 5 videos, the full 44-post Jimdo blog audit, a photo timestamp log, and HTML mockups. These were packaged as `wag-slime-book-package.zip` and handed directly to Katie on 2026-08-03 for her own continued work in GPT — my own working files from that pass were session-scoped and no longer exist. |
  | **POSSIBLY EXISTS — genuinely can't establish myself** | Whether Katie continued this work after receiving the zip, and whether a series name was ever chosen |

  **One targeted question, not a broad one:** does the `wag-slime-book-package.zip` (or continued work from it) still exist, and should it be treated as the real starting point for Book #1's Discover/Validate stage?

- **"WAG Learning" vs. Educational IP naming** — analyzed, not forced. Three distinct real things currently get conflated under one undefined engine name: (1) **Educational IP/Epic** — real, ~10-year, backward-looking licensing revenue on WAG's old pre-pivot catalog; (2) **WAG Slime Lab** — per its own project record, *explicitly a separate brand/trademark from WAG itself*, sitting in Publishing, not Learning; (3) **HorseSmart Kids** — a separate, hypothetical, zero-content, deliberately-deferred future brand. None of the three is actually "WAG-branded educational content produced going forward," which is what the name "WAG Learning/WAG Labs" implies. **Recommendation:** either retire "WAG Learning/WAG Labs" as a named engine and let Educational IP (Epic) and Publishing's separate-brand products (Slime Lab, any future HorseSmart Kids) stand on their own, or keep it explicitly as a DESTINATION-STATE-ONLY placeholder for a genuinely new, not-yet-conceived, WAG-branded product line distinct from all three. Not deciding this here — flagging it as resolved-enough to stop blocking anything, with a clear recommendation for whenever it matters.

### CLAUDE CAN RESOLVE FROM EVIDENCE / CLAUDE CAN RESEARCH THEN RECOMMEND / NOT BLOCKING — unchanged from the prior pass

### TRUE CEO DECISION (recommendation + alternatives + tradeoff + evidence + consequence of no decision)

**1. Approve this migration plan itself.**
*Recommendation:* approve as written. *Alternatives:* request changes to specific sections; reject the repo split and keep everything in `wag-podcast-website`. *Tradeoff:* a dedicated repo is more correct long-term but adds one more place to check; staying nested is simpler short-term but perpetuates the exact structural problem this whole exercise found. *Evidence:* 99 files already jammed into one product's docs folder, confirmed via `ls`. *Consequence of no decision:* nothing moves, the company-os work stays trapped inside `wag-podcast-website`, Sales/Publishing/Media execution stays blocked on nothing (this alone isn't a blocker to the business) but the anti-drift problem persists.

**2. `WAG_MASTER_ROADMAP.md` and `WAG_CURRENT_STATE.md` content — approve the reconciliation matrices in §4/§5.**
*Recommendation:* approve as reconciled. *Alternatives:* request specific rows be re-litigated (e.g., if Katie disagrees with elevating Skinwalker, or with the Website retraction). *Tradeoff:* accepting the matrices as-is means trusting Decision Review's corrections over V3's original claims; re-litigating means real time spent per-row. *Evidence:* every row cites its source document and reasoning. *Consequence of no decision:* the two files can't be finalized; the migration proceeds with the other 9 files only.

**3. wagmediapartners.com's long-term disposition.**
*Recommendation:* none offered here — this was already escalated in an earlier session pass and remains outside this document's scope to re-litigate. *Alternatives:* keep as simplified handoff page (current state) / retire / repurpose. *Tradeoff:* each has real SEO/authority consequences already documented in `WAG_MASTER_ROADMAP_DECISION_REVIEW.md`. *Evidence:* prior forensic SEO investigation (this session, completed). *Consequence of no decision:* the page stays in its current simplified-handoff state indefinitely — not urgent, but real.

**4. Skinwalker title/thumbnail/hook.**
*Recommendation:* none offered — this is a creative call requiring Katie or the girls directly, per the standing rule that pair-dynamics/humor-style judgment calls are reserved for them. *Alternatives:* n/a. *Tradeoff:* n/a. *Evidence:* real pre-production card already built (15 sections, prior session pass). *Consequence of no decision:* Main production stays blocked on this specific video.

**5. Secret Menu editor assignment.**
*Recommendation:* none offered — resourcing decision only Katie can make. *Consequence of no decision:* the video stays in production limbo.

**6. WAG Slime Lab — what prior material actually exists.**
*Recommendation:* Katie provide whatever outlines/art/drafts/vendor conversations exist so the real Greenlight decision (Active Portfolio #3) can be evaluated against real prior work rather than starting completely blind. *Consequence of no decision:* Book #1's Greenlight decision proceeds without accounting for any real prior investment, risking either duplicated effort or an undervalued starting position.

**7. "WAG Learning" — real new engine or Educational IP renamed?**
*Recommendation:* treat it as a rename/reframe of the existing Educational IP relationship (Epic!) unless Katie confirms a genuinely separate build is intended — this is the one destination-state capability in the entire Blueprint with zero infrastructure *and* zero hypothesis document behind it, which is a different kind of gap than everything else in this report. *Alternatives:* keep as a fully separate future engine with no Epic connection. *Tradeoff:* merging saves architecture work but might undersell a real distinct ambition Katie has that just hasn't been written down yet. *Consequence of no decision:* the Blueprint keeps carrying an undefined engine indefinitely.

**Question/topic submission moderation (added 2026-08-15).** The real Relationship Ladder research proposes a moderated (not open-anonymous) submission form specifically because an unmoderated anonymous inbox from a mostly-teen audience has a real path to self-harm disclosures or one kid naming another — the source document itself flags this as "worth a direct decision from Katie rather than me quietly building the narrower version." Not decided here. *Recommendation:* build moderated. *Alternatives:* build as originally conceived (open-anonymous). *Tradeoff:* moderated adds a real review step before anything reaches an episode; open-anonymous has no such gate. *Evidence:* `WAG_RELATIONSHIP_LADDER.md`, real cited pattern of what's gone wrong on other platforms without day-one moderation. *Consequence of no decision:* this mechanic stays unbuilt either way, but real and return-trigger-strong once resolved.

**8. Kidoodle payment confirmation.**
*Recommendation:* Katie checks the portal directly; only she has access. *Consequence of no decision:* the ~$306.76 AR item stays unresolved, and the real "invoice sent ≠ money collected" gap stays open.

### CLAUDE CAN RESOLVE FROM EVIDENCE (no research needed, executing on existing information)
- Retire `WAG_OS_ROADMAP.md`'s 1–5 maturity scale in favor of §64 company-wide (§4 table).
- Interaction-platform deployment status — run `git ls-tree origin/main`, correct the 4 affected docs.
- Adopt `CEO_DECISIONS.md` → `WAG_DECISION_LOG.md` as part of the migration.
- Apply the source-of-truth precedence order (§7) into the Index and Build Protocol.

### CLAUDE CAN RESEARCH THEN RECOMMEND (needs more work before a recommendation is ready)
- Aha World pricing/terms package.
- HubSpot/Shopify/ClickUp desk research (no purchase, no account creation).
- The remaining destination-capability acceptance-test chains (§6 placeholders), as each becomes an active priority.

### NOT BLOCKING / LATER
- GoPro pursue/no-pursue.
- The ~16 executive opportunity cards (Revenue), individually.
- Rights & Contract Operations schema design review.
- Agency Network relationship schema design.
- Opportunity/Innovation's three-list connection question.
- Finance & BI scope.
- Company Learning & Performance vs. Research & Evidence Governance merge.
- Education/WAG Labs and B2B Education's Director placement.
- MFA setup — real, only Katie can do it, but not blocking Sales/Publishing/Media execution; stays in `WAG_ACTIVE_PORTFOLIO.md` as an action item rather than a strategic decision here.

## 9. Anti-drift preflight — still preserved, not built

Unchanged from the prior pass: the control files still rely on a future session remembering to read them. This remains **the primary open control-layer gap** — the single most important thing this whole migration doesn't yet solve. No enforcement mechanism is proposed or built in this plan, per Katie's explicit instruction to keep this the lightest possible future addition, decided only after the architecture itself is approved and verified.

**What it needs to establish, when it is eventually designed (not now):** what company are we building; where does this task belong in the destination architecture; what already exists that's relevant; what decisions govern it (Blueprint/ADR); what is its Definition of Done (Acceptance Tests); what is the current priority (Active Portfolio). Not a giant orchestration system — the lightest mechanism that makes those six questions unavoidable before meaningful build work starts.

## 10. Migration safety checklist — will run in this exact order when approved

1. Confirm `wag-company-os` is created **private**.
2. Confirm clean git status in both source repos before touching anything (`git status`, no uncommitted work lost).
3. Preserve history where technically possible — within a single repo, `git mv`; across repos, history can't natively follow, so each moved file's first commit message in the new repo will state its prior path and last commit hash in the source repo, and the source repo's commit that removes it will state the destination.
4. No duplicate canonical masters created at any point — the Google Drive copy is exported after the git migration completes, never edited independently.
5. Nothing deleted — every archived doc gets a `SUPERSEDED BY` header, not removal.
6. Update cross-references in the moved files (internal links between e.g. Blueprint → Reconciliation → Build Protocol) to their new paths.
7. Verify every canonical file exists in its intended new location.
8. Verify no broken links remain in either source repo pointing to now-moved files.
9. One clearly-named structural commit per repo (e.g., `chore: migrate company OS docs to wag-company-os`).
10. Produce a full receipt: exactly what moved, merged, renamed, created, archived, and what remained untouched — delivered to Katie as the closing report of the migration itself, separate from this plan.

---

## 11. Confirmation: nothing approved is being lost — checked against Katie's explicit list

**Departments (18):** all 18 remain in the Blueprint §3 destination architecture — Media & Audience Director cluster (WAG Main, WAG Podcast, Creator & Platform Intelligence, Audience Intelligence, Packaging Intelligence, Retention/Shorts Intelligence, Community/Fandom, Production/Ops, Collaborations), Revenue & Partnerships Director cluster, Publishing & IP Director, Owned Audience/Commerce Director (incl. the new §8a Digital Publishing & Discovery Intelligence), Operations/BI Director, and the 4 cross-cutting functions (Legal/Safety/Compliance, Opportunity/Innovation, Education/WAG Labs, B2B Education). None were dropped, merged away, or silently reclassified out of existence in this migration — only their *documentation location* moves.

**Manager/agent hierarchy layers:** CEO (Katie) → Executive AI/Chief-of-Staff layer → 5 Engine/Division Directors → nested specialist capabilities — Blueprint §4's org chart — is unchanged by this migration and matches exactly the CEO→Executive/Lead Agents→Manager/Director Agents→Specialist Agents/Skills/Workflows structure Katie specified. The "5 execution engines" name a *build-priority sequencing*, not a flattening — the 5 Directors still sit above dozens of named specialist capabilities (Asset/System Registry, reconciliation report §A), not "Katie + 5 agents."

**Every specialist capability Katie listed this message** (content strategy, Greenlight, title/thumbnail/hook/retention/story intelligence, creator/platform/audience/competitive/podcast/Shorts intelligence, collaborations, format/franchise intelligence, sales prospecting, company/agency research, contact discovery/verification, spam/phishing guard, outreach prep, follow-up, proposal/pricing support, negotiation support, collections, publishing research, book development, IP expansion, licensing/rights, website SEO/AEO/GEO, digital publishing, analytics, finance, opportunity discovery, operational/project execution) — every one already has a named home in the Master Company Map (reconciliation report §A) or the Asset/System Registry. None require new architecture to accommodate; this migration doesn't touch any of them.

**6 business engines:** WAG Entertainment, WAG Learning/Labs, Publishing, Digital Membership, Physical Products/Commerce, B2B Education — all remain in Blueprint §2, unchanged, including the two (Learning/Labs, Digital Membership) with zero real infrastructure today. Representation ≠ build-now, per the standing 6-way staging classification.

**Website/digital-publishing mission:** Blueprint §8a, added this session specifically because Katie flagged it as at-risk of being forgotten — the episode→structured content→SEO/AEO/GEO→discovery→owned audience→ecosystem loop, and the wildadventuregirls.com/thewagpodcast.com non-duplication rule, are both explicit, permanent, and now also entered in the Asset/System Registry per her point 8 from two messages ago. Not touched by this migration beyond a file-location move.

**Publishing priority:** Blueprint §7 + Active Portfolio #3 (WAG Slime Lab Greenlight decision) — both already reflect "begins now, repeatable pipeline not one book." Unchanged.

**Sales/Revenue priority:** Blueprint §6 + Active Portfolio #4 (Aha World) — both already reflect "begins now, full loop, Katie-approval gate before any external action, no LinkedIn scraping." Unchanged.

**IP-expansion capability:** Blueprint §7's IP-expansion review ("what else can this become," evidence-gated, not forced) — unchanged.

**What this migration actually changes:** file *locations* (10 files move from `wag-podcast-website/docs/` to a new `wag-company-os` repo, 2 new files get created, 8 old architecture docs get archived with forward pointers) and *reconciles conflicting claims within already-approved documents* (§4/§5 matrices — mostly retracting V3's overstated claims in favor of Decision Review's corrections, which Katie has already effectively endorsed by acting on Decision Review's priorities all session). Nothing in the destination architecture, org hierarchy, or 5 near-term priorities is reduced, merged away, or reinterpreted as smaller than before.

---

**Stopping here.** This is the plan only. Nothing has been created, moved, or renamed. Awaiting approval on: the 8 TRUE CEO DECISION items (§8), the two reconciliation matrices with their KEEP/MERGE/SUPERSEDED/DOMAIN SUB-ROADMAP/ARCHIVE classifications (§4/§5), the nothing-lost confirmation (§11), and the plan as a whole — before any repository is created or any file touched.
