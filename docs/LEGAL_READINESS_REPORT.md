# WAG Legal Readiness Report

Prepared 2026-08-07. Covers wildadventuregirls.com and thewagpodcast.com as they actually exist in production today, including the interaction platform that launched this same day. **This report is for Katie's review and eventual attorney review — nothing described here has been published or changed on either live site.**

**Important context:** WAG already has a real, non-generic Privacy Policy and Terms of Service (last updated July 27, 2026, live at `/privacy/` and `/terms/`, shared across both domains). They are genuinely well-constructed — not boilerplate — and already correctly cover Netlify Forms, Beehiiv/WAG Insider, children's privacy, teen visitors, sponsored content, IP, AI/scraping restrictions, and liability for physical activities. **The real gap is not "no legal documents exist" — it's that neither document has been updated for the interaction platform that launched today.** This report identifies exactly what's covered, what needs a real addition, and why.

---

## Green — Already Sufficient

- **Core Privacy Policy structure and disclosures** — information collected, how it's used, service providers, data retention, security, user rights, international visitors, business transfers, changes-to-policy process. All present and written for WAG's actual practices, not copied from a template.
- **Children's Privacy (COPPA) section** — correctly states Site forms are not intended for children under 13, addresses the historical children's-content question directly ("The availability of content to younger viewers does not mean that Site forms are intended to collect personal information from children under 13"), and gives a real deletion-on-discovery commitment.
- **Teen Visitors section** — already exists as its own section, distinct from the under-13 section. Matches WAG's real current positioning (teen entertainment, not kids' content).
- **WAG Insider / Beehiiv disclosure** — already names Beehiiv, describes what happens on subscribe, and correctly notes transactional vs. marketing communications may have different unsubscribe behavior. This is directionally correct for the interaction platform's consent pattern too (see Yellow below for the specific gap).
- **Netlify Forms disclosure** — already covers the contact and sponsor-inquiry forms generically and accurately.
- **Analytics section** — already discloses Google Analytics use in general terms.
- **Embedded content / third-party platforms section** — already covers YouTube, Spotify, Instagram, TikTok, Apple Podcasts generically and correctly disclaims WAG's control over their practices.
- **IP / trademark section in Terms** — accurate, names the real registered/pending marks correctly (WILD ADVENTURE GIRLS®, WAG®, WAG PODCAST™, WAG NATION™), consistent with the real trademark status already tracked internally.
- **Activities/Challenges liability section** — already strong, already covers travel, physical activities, food challenges, investigations generically. Directly addresses Katie's "avoidable liability" concern for existing content categories.
- **AI/scraping restriction section** — already present, real, and specific.
- **User Submissions section** — already exists and correctly states unsolicited submissions aren't confidential and don't obligate WAG to use or compensate for them. This is directionally right for Questions Featured but needs the interaction platform named specifically (see Yellow).
- **Limitation of Liability / No Warranty / Indemnification / Disputes / Severability** — standard, well-drafted, appropriate for a growing media company.

## Yellow — Recommended Before Broad Reliance (not code-blocking, but real gaps)

- **The interaction platform isn't named anywhere in either document.** Privacy Policy doesn't disclose that voting, quiz-taking, and free-text submission happen, or that a specific choice (not just "did you participate") is now captured as data. Terms doesn't address Verdict, Match, Favorite Segment, Questions Featured, or WAG Awards at all. **Recommendation:** add a dedicated "Interactive Features" section to each (drafted below).
- **localStorage isn't named specifically.** The Privacy Policy's cookie section says "cookies or similar technologies," which is legally defensible as covering localStorage, but naming it explicitly is more accurate and more defensible under an attorney's review. **Recommendation:** name localStorage explicitly, and be precise that it's used to remember "have you already voted/taken this quiz" — not for tracking or advertising.
- **Netlify Blobs isn't named as a storage location.** Vote counts and free-text question submissions are stored there, separate from Beehiiv and separate from Netlify Forms. **Recommendation:** name it in the Service Providers list.
- **No explicit "not a contest/sweepstakes" disclaimer.** WAG Awards ("vote for your favorite guest"), Adventure Map's destination vote, and Questions Featured all involve a form of participation with an outcome, but none currently has a formal legal disclaimer distinguishing "fan-voted engagement feature" from "contest with a prize." The actual copy on every one of these pages is already honest (Questions Featured: "no guarantee, but every question gets read"; the destination vote: "results decide our next trip") — the *behavior* is right, the *formal Terms language* is the gap. **Recommendation:** add an explicit "Not a Sweepstakes or Contest" clause (drafted below).
- **Ahrefs Analytics isn't named.** The Privacy Policy says "including Google Analytics," which implies but doesn't confirm other analytics tools. Ahrefs Analytics is real and running on both sites. **Recommendation:** name it alongside Google Analytics.
- **IP-address use for rate-limiting isn't described precisely.** The Privacy Policy's "Information Collected Automatically" section covers IP address generally, but the specific real mechanism (a short-lived Netlify Blobs record keyed to `bucket:IP`, used only to block abusive rapid-fire submissions, not tied to any other data) is worth naming precisely — it's a genuinely narrow, defensible use, and saying so precisely is more protective than leaving it general.
- **Consent-checkbox wording audit (see Email Compliance section below)** — one real historical promise was already caught and fixed this session (WAG Match's "email me my result" → "email me the next quiz"); worth Katie's confirmation that no other promise across the 5 interactions overstates what's actually deliverable.

## Red — Must Be Corrected Before Broad Reliance

**None identified.** No feature found during this audit makes a promise the platform can't keep, collects data without disclosure of the category it falls into, or creates contest/sweepstakes exposure through omission alone (the underlying behavior is already honest — the gap is that the Terms don't yet say so formally). The interaction platform launched today with real users able to reach it; the recommendation is to close the Yellow items promptly, not to take anything offline.

---

## Full Data-Collection Inventory (real, verified this session)

### APIs (thewagpodcast.com only — wildadventuregirls.com has no custom API routes)
- `/api/interaction-consent.ts` — Beehiiv consent for Match, Favorite Segment, Questions Featured, WAG Awards, Seasonal Challenges (when live).
- `/api/verdict-consent.ts` — Beehiiv consent for Verdict (kept separate, same behavior).
- `/api/verdict-vote.ts`, `/api/poll-vote.ts` — anonymous vote/poll counters, stored in Netlify Blobs (`wag-verdict-votes`, `wag-poll-votes`). No email, no identity — just a choice + running count.
- `/api/question-submit.ts` — free-text Questions Featured submissions, stored in Netlify Blobs (`wag-featured-questions`), one record per submission (text + optional name + timestamp).

### Email collection points
- 5 live interactions × `ConsentCheckboxPair` (2 independent checkboxes each: transactional "email me when X happens," marketing "join WAG Insider") → real Beehiiv API calls, tagged per-interaction and (as of today) per-choice (e.g., `wag-match-annabella`).
- wildadventuregirls.com's WAG Insider section/page — Beehiiv's own embedded client-side widget (`subscribe-forms.beehiiv.com`), talks to Beehiiv directly from the browser.
- 2 Netlify Forms contact forms (one per site) and 2 Netlify Forms sponsor-inquiry forms (one per site) — separate from Beehiiv, go to Netlify's own form-submission storage.

### localStorage (all client-side only, functional state, never transmitted to a server as "data" beyond what's described above)
- thewagpodcast.com: `wag_voted_<key>` (Verdict/poll vote choice, and doubles as the ConsentCheckboxPair reveal-state flag), `wag_quiz_<key>` (Match result), a flag for Questions Featured's "already submitted" state.
- wildadventuregirls.com: `wag-map-explored` (which Adventure Map pins you've clicked), `wag-destination-vote` (your Adventure Map "where next" vote choice).

### Analytics & third-party scripts (both sites)
- Google Analytics 4 — wildadventuregirls.com: `G-DMSSKLJVGS`. thewagpodcast.com: `G-ZR4HT2CJ97`. Separate properties, not cross-domain linked.
- Ahrefs Analytics — both sites, separate site keys, SEO/traffic measurement.
- YouTube embeds — throughout both sites (episode/video players).
- Beehiiv's embedded subscribe widget — wildadventuregirls.com only.

### Netlify (hosting infrastructure for both sites)
- Standard hosting, HTTPS, Netlify Forms (contact/sponsor), Netlify Blobs (interaction data + rate-limit records). IP address is captured for rate-limiting only, stored as a short-lived `bucket:IP` record with a count and window-start timestamp — no other data attached to it, no long-term retention design (old records simply age out of relevance, not actively purged today — worth a light operational note, not a legal blocker).

### Cookies
No first-party cookies are set directly by WAG's own code on either site (confirmed — no `document.cookie` calls anywhere in either codebase). Google Analytics, Ahrefs, YouTube, and Beehiiv's embedded widget each set their own cookies as part of their normal operation; WAG does not control or configure those directly beyond enabling the script.

---

## Email Compliance Findings

- Checkbox wording is accurate for all 5 live interactions as of today's audit — each promises exactly what the code delivers (this was specifically re-verified after the WAG Match correction earlier this project).
- Transactional vs. marketing is a real, enforced split server-side (`ALLOWED_TRANSACTIONAL_TAGS` whitelist; marketing consent always applies a separate `insider-marketing-consent` tag, never bundled silently into transactional).
- Automation enrollment matches what each checkbox promises (`Verdict Reveal Notification`, `WAG Insider Welcome`) — verified live in production this session.
- Unsubscribe is Beehiiv's standard mechanism, present on every email sent through the platform (Beehiiv default, not something WAG built custom).

## Children's Privacy (COPPA) Reasoning

WAG's content was historically positioned closer to a children's-content brand; it is now deliberately positioned as teen entertainment (ages 11–18), a distinction already reflected in `llms.txt` files, site copy, and the existing Privacy Policy's Teen Visitors section. The real question for COPPA purposes is not "who watches the videos" (COPPA cares about actual knowledge and site design, not audience demographics alone) but "does the Site knowingly collect personal information directly from children under 13 without verifiable parental consent." Based on this audit: no interaction, form, or consent flow asks for age, and none is designed or marketed toward under-13 users specifically. The existing Privacy Policy's language ("not intended for children under 13," "if we learn... we will take reasonable steps to delete it") is the standard, defensible posture for a site that isn't explicitly directed at children but also can't fully exclude teen siblings' younger family members from occasionally visiting. **No change recommended to the underlying COPPA posture** — the existing language already reflects the real, considered position; the interaction platform doesn't change this analysis since it collects the same categories of information (email, a choice, free text) as the forms already covered.

## Interactive Platform — Individual Review

| Interaction | Real mechanic | Contest/sweepstakes risk | Submission ownership |
|---|---|---|---|
| Verdict | Anonymous yes/no vote, real reveal in a future episode | None — no prize, entertainment-only outcome disclosure | N/A (no submission, just a vote) |
| WAG Match | Client-side quiz, result shown instantly, never leaves the browser except as a category tag | None — no prize | N/A |
| Favorite Segment | Anonymous poll among 4 real segments | None — informs programming, no prize | N/A |
| Questions Featured | Free-text submission, may be read on a future episode | Low — "may be featured" language already avoids promising selection; **recommend formalizing in Terms** that submission doesn't guarantee use, and that WAG may edit/paraphrase a featured question | Real gap: Terms' general User Submissions section covers this in spirit but doesn't name Questions Featured specifically — recommend an explicit line |
| WAG Awards | Anonymous poll among real nominees | None — no prize to the nominee or the voter | N/A |
| Seasonal Challenges | Not live (`LIVE = false`) | N/A until real content exists | N/A |

**Overall: no interaction currently creates real sweepstakes/contest exposure** — none offers a prize, none charges for entry, none conditions an outcome on payment. The formal Terms language should still be added because "we didn't design it as a contest" and "our Terms say so explicitly" are different levels of protection, and the second is cheap to add.

---

## Recommended Next Step

Review the two drafted documents below (full updated text, ready to compare against the live pages). Approve, request changes, or send both to counsel as-is. **Nothing gets published until you say so.**
