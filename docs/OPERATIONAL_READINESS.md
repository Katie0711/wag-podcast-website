# WAG Operational Readiness Tracker

Every gap identified during the 2026-08-08 Growth CTO review, tracked with an explicit status — no vague "future" bucket. Status values: **Completed**, **Actively Implementing**, or **Intentionally Deferred (with trigger)**. Update this file in the same session that changes a status.

---

### 1. Questions Featured moderation

**Status: Completed (lightweight layer), monitoring for scale.**

Free-text submissions previously went straight into Netlify Blobs with rate limiting but zero content screening. Added `src/lib/moderation.ts`: a short, honest flag-word list plus phone/email/address pattern detection. **Flags for Katie's manual review — never auto-rejects.** A flagged submission still saves and still counts as received; it's just tagged `moderationStatus: "flagged"` with real reasons (`language`, `possible-phone-number`, etc.) so review time goes to the submissions that actually need it. Added a one-line on-page guidance note ("skip phone numbers, addresses, or anyone's last name") at the point of submission.

**Trigger to revisit:** real submission volume high enough that manual review of the unflagged queue becomes a bottleneck, or a real false-negative gets through — either would justify expanding the word list or adding a lightweight review-status UI (currently: query Blobs directly, same as the existing icebox note on this feature).

### 2. Point-of-collection minor/privacy compliance

**Status: Completed (audit) — current posture is sufficient; one small improvement recommended, not yet built.**

Real audit: the live Privacy Policy states a standard, correct "not intended for children under 13" posture (not a hard COPPA-directed-at-children site — WAG is teen entertainment, ages 11–18, not young-children's content, which is the real, established distinction that determines which COPPA path applies). No form (Beehiiv embed, `ConsentCheckboxPair`, Questions Featured) actively solicits age or targets young children. This matches standard practice for a general-teen-audience site and does not warrant a hard age gate — adding one would trade real conversion for a protection the site's actual content/audience profile doesn't require, exactly the "theoretical concern" tradeoff Katie flagged not to make.

**One real, specific, small gap found:** the Privacy Policy is linked in the footer but not inline at the actual moment of data collection (next to the consent checkboxes / submit buttons themselves). Recommended fix, not yet built: a one-line "By submitting, you agree to our Privacy Policy" link directly on `ConsentCheckboxPair` and the Questions Featured form — closes the "appropriately placed language" question with something concrete rather than relying on the footer being findable. Small enough to ship in a few minutes once approved; held pending Katie's sign-off since it touches conversion-adjacent copy on every interaction across both sites.

### 3. YouTube account resilience

**Status: Completed (checklist delivered) — execution is Katie's, not something Claude can do (credentials).**

See `YOUTUBE_ACCOUNT_RECOVERY.md` (this directory) — concise, actionable, no credentials exposed. Ranked above the other operational gaps per Katie's explicit instruction, since the channel is one of the company's most valuable single assets.

### 4. FTC / sponsor disclosure system

**Status: Completed (template delivered), not yet exercised on a real campaign (no sponsor sold yet).**

See `SPONSOR_DISCLOSURE_CHECKLIST.md` (this directory) — one reusable checklist covering YouTube, podcast, website, social, and interactive sponsorships. Designed to be pulled out the moment a campaign is being planned, not remembered after the fact.

### 5. Cost/revenue visibility

**Status: Intentionally Deferred, requirement captured.**

Real requirement, not yet built: a lightweight future view combining Netlify costs, Beehiiv plan cost, other SaaS/tool costs, sponsor revenue, AdSense, podcast revenue, product revenue, future recurring revenue. Priority is visibility, not accounting software — when this gets built, it should be a simple rollup view, not a financial system. Logged as part of the WAG Operating System entry in `FUTURE_OPPORTUNITIES.md`.

**Trigger to revisit:** first real sponsor revenue or product revenue exists to actually track (right now there's nothing to visualize).

### 6. Data backups

**Status: Intentionally Deferred, strategy recommended.**

Recommended, lightweight approach (not built): (a) Beehiiv — its own dashboard supports CSV export of subscribers/tags; a recurring calendar reminder (monthly) to export and store one snapshot is sufficient at current scale, no automation needed yet. (b) Netlify Blobs (`wag-verdict-votes`, `wag-poll-votes`, `wag-featured-questions`, `wag-rate-limits`) — no built-in export; lightest real option is a small on-demand admin script (Netlify CLI + Blobs API) run periodically to dump current state to a local/cloud file, not a live sync system. (c) Config/content — already backed up via git/GitHub, no action needed.

**Trigger to revisit:** real interaction/subscriber volume high enough that losing it would be a real business cost, not just an inconvenience — right now, volume is still small enough that manual, occasional exports are proportionate.

### 7. Incident response

**Status: Completed (playbook delivered).**

See `INCIDENT_PLAYBOOK.md` (this directory) — concise, covers account compromise, hacked site/channel, inappropriate submission, sponsor issue, public backlash, production outage.

---

## Longer-term company assets (Phase 2 — not started, tracked per Katie's explicit "don't let these disappear" instruction)

WAG Operating System/CEO Dashboard, Brand Bible, Audience Graph, Sponsor Intelligence, Creator CRM, AI Reputation KPI, Media Library, Discovery Platform, future software optionality — all captured in `FUTURE_OPPORTUNITIES.md` under the "impossible to compete with in five years" test. Per Katie's explicit instruction: strengthen these incrementally as current work naturally creates a foundation for one (e.g., sponsor page work → Sponsor Intelligence groundwork; video classification work → Media Library/content graph groundwork) — do not build them as standalone projects until Phase 1 (current ecosystem execution) is genuinely complete.
