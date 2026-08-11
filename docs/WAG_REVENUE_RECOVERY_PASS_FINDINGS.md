# WAG Revenue & Partnerships — Recovery Pass Findings

**One executive question this module answers: now that real business history has been recovered from both Gmail accounts, what does WAG's actual Revenue & Partnerships history look like, and what should the schema be built against?**

**Status: recovery pass complete, 2026-08-11; corrected same day after Katie identified a real miss. Answers Katie's 10 required questions plus the 13-point Pop&Boom determination (Section 11). Still design only — no schema built from this document yet.** Extends `WAG_REVENUE_PARTNERSHIPS_FOUNDATION.md` (the recovery plan) and `WAG_REVENUE_PARTNERSHIPS_CONSOLIDATED_ARCHITECTURE.md` (the target department design, now including Sections 32-34: the Revenue Outcome Reasoning Standard, the Pop&Boom permanent-learning rules, and Katie's final-authority rule). Per the named-relationship exclusion boundary (Consolidated §15), **Epic, Nintendo, and UpFaith & Family/Heartland were excluded from every search query in this pass** — nothing below references them.

**Method:** 8 bounded searches (4 categories × 2 accounts — sponsor/partnership, licensing/renewal, invoice/payment, and a Kidoodle-specific pass) via the `gmail-recovery-search` tool, read-only, no message state changed, **plus a 9th targeted search added after Katie flagged that a real thread was missed** (Section 11). Raw results were reviewed directly; this document extracts structured facts and links back to the source thread rather than reproducing full email bodies.

**Correction notice:** the original version of this document stated, in Section 3, that "not one thread across either inbox shows WAG's rate actually being sent to anyone." That statement was true only of the original 8 searches and should never have been read as a general finding about WAG's business history — it has been corrected below (Section 3) and is superseded by Section 11's Pop&Boom case, where WAG's real rate sheet was in fact sent and confirmed received.

---

## 1. What real business history was found

**`partners@wagstudios.co` (primary business inbox) — real, active outbound BD + one live inbound thread:**
- A real, currently-active inbound paid-collaboration conversation with **Aha World** (a mobile game company) — multiple real exchanges Aug 7-11, 2026: inbound pitch → Katie sent audience demographics + the sponsor one-sheet → they asked for rates → still awaiting Katie's actual quote as of today. **No rate has been sent yet, no deal closed.** This is the single most live, real opportunity in the recovery.
- A real cluster of outbound cold BD pitches, Sept 2025–Jan 2026: Nickelodeon (VIMN), Kendra Scott, Rare Beauty, TikTok Partnerships, Amazon, Disney Parks (two contacts), Disney Cruise Line, Feastables/MrBeast, Ulta Beauty (a real "Founding Sponsor" pitch), JBL (a real "Founding Sponsor" pitch), and Orant Neon (a real **trade-for-product** proposal — neon signage worth ~$3,600-3,900 in exchange for studio-build content placement, not a cash deal). **None of these show a reply in this recovery pass's results.**
- A real, ongoing production-vendor relationship: **Ryan Love / lovebsfilms.com**, recurring invoices, paid promptly by check (Dec 2025 exchange shown).
- Real recurring non-sponsor AP: Google Workspace (auto-charged monthly).
- A real trademark filing in progress for the core "THE WILD ADVENTURE GIRLS" wordmark (USPTO Combined Declaration of Use, Sections 8/15).

**`thewildadventuregirls@gmail.com` (legacy intake) — one substantive real licensing relationship, one real vendor dispute, real inbound noise:**
- **Kidoodle.TV / A Parent Media Co. Inc. — the one real, multi-year, structured licensing relationship found in this recovery.** WAG's "Into The Wild with The Wild Adventure Girls" series (plus "Wild About Science," "Wild About Animals," "Crazy Fun Food Challenge," and a real Slime series) has been licensed there since 2021. Real quarterly royalty invoices: **#5422 (2025-Q2, $114.11), #5423 (2025-Q3, $115.56), #5424 (2025-Q4, $77.09) — real dollar amounts, small but real recurring revenue.** A real, repeated slow-payment pattern: Katie followed up on outstanding invoices in Jun 2025, Jul 2026 (twice), and escalated to a VP of Client Success in Aug 2026 after Accounting stayed unresponsive — **as of the most recent message (Aug 6, 2026), payment status is still unresolved.** Katie has twice offered new series (a horse series, and an unspecified new series) — real, live cross-sell opportunities gated on Kidoodle actually responding. A real self-service portal exists (`backstage.p.kidoodle.tv`) with license status, performance reports, statements, invoices, and payment history — a real source of truth beyond email, not yet pulled from.
- A real, unresolved **billing/service dispute with a trademark law firm** (Trademarkia — "FORMAL DISPUTE — Invoice Overbilling, Preparation Errors, Unauthorized Filings"), running May-June 2026, alongside real, legitimate USPTO trademark filings for BUBBA BOOKS and WAG PODCAST (word + logo marks). This is a Legal/IP matter, not a Revenue relationship — noted here only because it surfaced from a generic search term, and flagged for routing to Legal/Rights, not detailed further (attorney-client content).
- A real IRS collections notice (Failure to File, being handled by Katie's tax preparer) — a tax/compliance matter, not Revenue-relevant, surfaced the same way. Flagged as a data-minimization example (Section 8 below), not detailed further.
- **Two real, unauthorized-use findings, unrelated to sponsorship but real and IP-relevant:** removal requests from Microsoft (Bei Liu) and a third party regarding WAG's video content appearing in **OpenVid-1M** and **HD-VILA-100M** — large, real AI/ML video-training datasets. WAG's content appears to have been scraped into these without authorization; someone is requesting its removal. This belongs with Legal/Rights (Consolidated §11 routing), not Revenue, but is real and worth Katie's attention.
- A real cluster of inbound sponsor/collaboration pitches needing anti-fraud review (Section 7 below) — several plausible, at least one a clear impersonation attempt.
- Heavy real noise: personal e-commerce marketing (VICI, Shutterstock, Pond5), a personal BNPL account (Klarna — WAG/Katie owing money, not being paid), loan-offer marketing (PayPal, Capital One), and unrelated newsletters. This confirms the legacy inbox is genuinely mixed personal/business, exactly as expected.

## 2. What's consistently present

Across every real thread that mattered (Aha World, Kidoodle, the outbound BD cluster): a real counterparty name, a real contact person, a real email domain, a clear direction (inbound vs. outbound), and a real date range. Where a deal actually progressed (Kidoodle), real dollar amounts and real invoice numbers were present and traceable.

## 3. What's consistently missing — CORRECTED

**Original claim (now known to be too broad): "not one thread across either inbox shows WAG's rate actually being sent to anyone."** That statement was accurate only as a description of the original 8 bounded searches' results — it was never a complete survey of either inbox, and it should not have been read as a general finding. **It is false as a general statement:** Section 11 below documents a real thread, missed by the original 8 searches, where WAG's actual rate sheet (`WAG_Partnership_Options.pdf`) was sent and confirmed received by a real counterparty (Pop&Boom, Jul 25, 2026).

**Corrected finding:** across the original 8 bounded searches, no outbound BD pitch and no other inbound thread showed a rate being quoted — the Aha World conversation, in particular, is still real and still rate-not-yet-sent as of this pass. But the accurate, narrower statement is: **"of the searches actually run, most showed no rate quoted — except one, found only after a targeted 9th search."** The real, honest lesson isn't "WAG has never quoted a rate" — it's "an 8-query bounded pass, even a well-designed one, can miss a real, substantive negotiation entirely," which is exactly what Section 12 below investigates.

Also consistently missing across the original 8 searches: a written contract/agreement for any sponsor conversation (Kidoodle's licensing terms are real but live in the portal, not in these email threads), and any real record of what happened after an outbound pitch went unanswered — no visible follow-up cadence beyond the Kidoodle payment-chase pattern.

## 4. What entities/workflows the Revenue schema actually needs

Validated against real data, not assumed:
- **`partners` / companies** — Aha World, Kidoodle/A Parent Media Co., Ryan Love (vendor, not sponsor — a real reason `partners` needs a `relationship_type` distinguishing sponsor/licensing partner/vendor/agency from day one, not added later).
- **`people`** — real individuals matter independent of company (Leah Lindsay moved from a `kidoodle.tv` address to `aparentmedia.com` mid-relationship — a live, real instance of exactly the person-survives-company-change scenario the Relationship Graph (Consolidated §4) was designed for).
- **`deals` / licensing agreements** — Kidoodle is the one real instance; needs quarter-based recurring structure, not a single one-time "deal" shape.
- **`invoices`** — real, with real amounts, real invoice numbers, and a real overdue/follow-up pattern to model against.
- **`deal_events`** — the Kidoodle payment-chase (5+ follow-ups across 13 months) and the Aha World back-and-forth are both real, multi-touch timelines exactly matching the event-sourced shape already proposed.
- **A `verification_status` field on inbound opportunities** — proven necessary by real evidence (Section 7).

## 5. What should stay linked to Gmail rather than duplicated

Full email bodies, attachments (invoice PDFs, screenshots), and the ongoing back-and-forth of any live negotiation — these should stay as Gmail thread references (message/thread ID), never copied wholesale into WAG Brain. What gets duplicated: the structured facts extracted (company, contact, amount, date, status), each pointing back to its source thread, per the source-of-truth hierarchy already established (Foundation doc §7).

## 6. What invoice/payment information can be reliably established from Gmail alone

The three real Kidoodle invoice amounts and their quarters, and the real pattern of when Katie followed up and how long each took to (not) resolve. **What can't be reliably established from email alone: whether any of the three invoices were actually paid.** No payment confirmation appears in this recovery's results — only Katie's own outstanding-balance follow-ups. This is a real, concrete limit of email-as-source-of-truth (Foundation doc §7's hierarchy already anticipated this: invoices/accounting records outrank email for "was this paid").

## 7. What still requires contracts/documents/accounting records from Katie

- The actual Kidoodle licensing agreement terms (rate structure, term, renewal conditions) — referenced but not contained in these email threads; likely sits in the Backstage portal or a separate signed document.
- Real payment confirmation for the three outstanding Kidoodle invoices.
- Whatever the real outcome of the Trademarkia billing dispute was (Legal/Rights matter, not Revenue, but a real vendor-relationship data point if it recurs).
- Confirmation of whether any of the outbound BD pitches (Nickelodeon, Disney, etc.) received a reply outside this pass's search terms — a broader, later sweep would need to check for replies specifically, not just outbound sent mail.

## 8. Security/privacy limitations that surfaced during this pass

**Real, honest finding: this pass's search queries (Gate 1) were narrow, but no automated relevance-discard step (Gate 2, as designed in the Email Intake architecture) was actually implemented yet** — results were returned to me for direct review rather than auto-filtered, meaning a real IRS collections notice and a real attorney-client-privileged legal dispute both surfaced from generic search terms ("payment," "invoice") despite being unrelated to Revenue & Partnerships. **No sensitive financial/legal detail from those threads is reproduced above beyond the fact of their existence and routing**, per the data-minimization rule (Consolidated §21) — this is exactly the kind of encounter that rule anticipated. Before any recurring or larger-scale pass, Gate 2 needs to actually exist in code, not rely on manual review catching everything.

## 9. Revised minimal Revenue & Partnerships schema

Revised against Section 4's real findings — same shape proposed in the Foundation doc, adjusted:

- `companies` (name, domain, relationship_type: sponsor/licensing_partner/vendor/agency/other, category)
- `people` (name, current company_id, role, email, notes) — separate from companies per the Leah Lindsay evidence
- `people_company_history` (person_id, company_id, role, start/end) — needed now, not deferred, given real evidence of a contact changing companies mid-relationship
- `deals` (company_id, type: sponsorship/licensing/trade, status, quoted_rate — nullable, since real data shows this is usually null, agreed_rate, currency, recurrence: one_time/quarterly/etc.)
- `deal_events` (deal_id, event_type: inbound_received/outreach_sent/reply/rate_quoted/invoice_sent/payment_received/follow_up, event_date, source_thread_id, notes)
- `invoices` (deal_id, invoice_number, period, amount, sent_date, paid_date — nullable, source: gmail/portal/accounting_system)
- `opportunity_verification` (deal_id, classification: VERIFIED/LIKELY_LEGITIMATE/NEEDS_VERIFICATION/SUSPICIOUS/SPAM, evidence, classified_at) — proven necessary, not hypothetical, by Section 7's real findings

## 10. First three Revenue workflows recommended after schema approval

1. **Prove inbound opportunity detection + verification on the real, still-open Aha World thread** — the one live opportunity in hand right now. A real, concrete test of the classification framework (Section 7) against a real ambiguous case (mixed legitimacy signals, still unresolved).
2. **Prove the AR/overdue-detection workflow against the real Kidoodle invoice history** — three real invoices, a real multi-month unresolved pattern, a real test of "who owes us money, what's overdue, who should we follow up with."
3. **Prove outcome capture on the outbound BD cluster** — check whether any of the 11 real cold pitches (Nickelodeon through JBL) got a reply outside this pass's search scope, and record each as a real outcome (per the Outcome Reasoning Standard categories) rather than leaving them as an unresolved list.

---

## Anti-fraud verification — real examples found, per the Consolidated architecture's classification framework

Applied to real inbound messages, not hypothetical:

| Sender | Claim | Signal | Classification |
|---|---|---|---|
| `marcusolander@telia.com`, subject "Red Bull Energy Frost x thewildadventuregirls" | Claims to represent Red Bull | Sender domain is a Swedish consumer ISP (`telia.com`), not any Red Bull corporate domain — a textbook brand-impersonation mismatch | **SUSPICIOUS** — real brand name, unrelated free/consumer email domain. Not acted on. |
| Leta-Sparkone Media, "Partnership Proposal: Collaboration Opportunity with Gauth", from `mcn.influeatornetwork.com` | Claims to be an MCN/agency | Domain contains a plausible typosquat pattern ("influeator" vs. "influencer") | **NEEDS VERIFICATION** — not dismissed outright, but not treated as legitimate without independent confirmation |
| Aha World (`creators02@ahaworld.com`) | Real company, real ongoing exchange | Name inconsistency (signs as both "Luna" and "Jason" from the same address), a WhatsApp number with a non-US country code attached, but a real corporate-looking domain and a real, coherent multi-message exchange | **NEEDS VERIFICATION** — genuinely mixed signals, exactly the case the framework says should be escalated for human judgment rather than auto-accepted or auto-rejected |
| Lyla / LiveTopMedia, "PineDrama" collaboration invite, from `collab.talentcollaboration.com` | Claims to be a creator-collaboration platform | Domain is plausible for the stated purpose, no obvious mismatch | **LIKELY LEGITIMATE** — no red flag found, not independently confirmed either |

**Pop&Boom — resolved.** The original version of this table flagged that Katie's own example (WAG declined an AI-promotion opportunity from Pop&Boom on product/brand-fit grounds, not price) hadn't appeared in this pass's 8 search queries, and recommended a targeted follow-up. That follow-up ran; the full case is in Section 11 below, and the recall failure itself is diagnosed in Section 12.

---

## 11. Pop&Boom / PolyBuzz — the real case Katie flagged as missing

**Retrieved via a 9th, targeted search** (query: `popboomlab.com OR from:alexzhang@popboomlab.com OR to:alexzhang@popboomlab.com`, `thewildadventuregirls@gmail.com` only, per Katie's explicit scoping), after she identified that a real sponsorship negotiation was missing from the original 8-query pass. Gmail thread `19f669167a66c816`, 16 messages, Jul 15 – Aug 2, 2026. Full evidence-based reconstruction, verified against the actual message text — not against Katie's recollection, per her explicit instruction not to assume her memory was the evidence.

**Executive opportunity card** (per Consolidated Architecture §34c's format, applied retroactively):

> **Company/Brand:** PolyBuzz (via agency Pop&Boom) · **Agency/intermediary:** Pop&Boom, self-described "KOL agency," contact Alex Zhang (`alexzhang@popboomlab.com`) · **Actual underlying client/product:** PolyBuzz — an AI companion/chatbot app ("build your own character chatbots," 40M+ downloads claimed), not named until Katie asked directly · **What they wanted:** YouTube integrated (3min video / 60-90sec pre-roll) or dedicated video, YouTube Short, TikTok video (7-day link-in-bio + 60-day paid "Spark" ad code), Instagram video (same 7-day/60-day structure) · **Property fit:** WAG Main (YouTube/TikTok/Instagram, no Podcast component discussed) · **Budget:** never disclosed by Pop&Boom · **Recommended WAG price/range:** WAG's own standard rate sheet was sent — no independent Pricing Intelligence assessment exists for this deal since it never reached a specific package selection · **Pricing evidence:** WAG OBSERVED DATA (Consolidated §16a tier 1) — this is the current rate sheet actually in production use, not a hypothetical · **Rights requested:** organic YouTube; 7-day link-in-bio + 60-day paid-media/whitelisting authorization on TikTok and Instagram specifically (not YouTube) · **Brand-fit assessment:** failed — PolyBuzz is 18+ rated, targets 18-24 year-olds, and requires on-camera talent to be 18+; WAG's audience and cast are family/teen · **Legitimacy verification:** LIKELY LEGITIMATE — real agency, real product, real multi-week coherent exchange, real campaign brief and asset links, no impersonation or fraud signals found · **Risks/red flags:** none commercial; one real, hard brand-safety disqualifier (age rating/on-camera talent requirement) · **Opportunity/upside:** Pop&Boom explicitly expressed interest in a longer-term relationship and in staying in touch for future, better-fitting campaigns (Consolidated §34e) — a real, live re-engagement candidate for a different, age-appropriate client the agency may represent later · **Package/upsell angle:** not reached — died before package selection · **Agent recommendation (reconstructed):** CAUTION / RECOMMEND DECLINE, per the Consolidated §34c worked example · **Katie's actual decision:** declined, Aug 1, 2026, for brand/audience-fit reasons — matching the reconstructed recommendation.

**The 13 determinations, evidence-based:**

1. **Who initiated:** Alex/Pop&Boom, cold inbound, Jul 15, 2026.
2. **Company/agency/client/product:** Pop&Boom is the agency ("a KOL agency"); the real client/product is PolyBuzz, an AI chatbot-companion app — revealed only after Katie asked what brand/app was behind the outreach.
3. **Deliverables requested:** YouTube integrated (3min/60-90sec pre-roll) or dedicated video; YouTube Short; TikTok video (7-day link-in-bio + 60-day Spark ad code); Instagram video (same structure); openness to a cross-platform short-form approach.
4. **What WAG initially proposed:** nothing specific — Katie's standard process: asked for brand/app name, campaign goals, target audience, deliverables, timeline, budget range, and usage rights before quoting anything.
5. **Was WAG's rate sheet/package pricing attached or communicated:** **Yes, confirmed.** Jul 25, 2026: *"I've attached our media overview along with our current partnership options and starting rates."* Real attachments confirmed present: `WAG_Partnership_Options.pdf`, `WAG_Sponsor_OneSheeter2_V2.pdf` (filenames only — attachment bytes were never fetched, per the recovery tool's standing restriction).
6. **What prices were actually communicated:** the specific dollar figures live inside the attached PDF, not typed into plain email text. The email body clarified scope, not numbers: base rate is organic-publishing only; TikTok Spark/Meta paid-media rights are quoted separately; fully dedicated YouTube features are custom-quoted; longer-term multi-campaign partnerships are available.
7. **How Pop&Boom responded to the prices:** no reaction found anywhere in the thread — no comment on the numbers, positive or negative.
8. **Negotiation/counteroffer:** none. No discount requested, no counter, no pushback on price at any point.
9. **How far it progressed:** cold inbound → scoping exchange → real client/product revealed → WAG's real rate sheet sent and attached → deliverable-scope clarification → WAG's own brand-safety question → Pop&Boom's confirmation of the disqualifying facts → decline → amicable close. It never reached the point of a specific dollar figure being finalized for one chosen package.
10. **The exact evidenced decline reason:** Katie's own words, Aug 1, 2026: *"Given WAG's family audience, I don't think this particular campaign is the right fit for us."* Immediately preceded by Pop&Boom confirming, in response to Katie's own proactive question, that PolyBuzz is 18+ rated, targets 18-24 year-olds, and requires anyone appearing on camera to be at least 18. **This is a brand/audience-fit decline, evidenced, not an inference from Katie's recollection alone.**
11. **Was price ever an objection:** no evidence anywhere in the thread that price was raised as a concern by either party.
12. **Requested deal conditions:** organic-vs-paid-media rights split (60-day paid authorization on TikTok/Instagram only, 7-day organic link-in-bio, YouTube stayed fully organic); real on-camera-talent age requirement (18+); an expressed interest in a longer-term relationship. No exclusivity or revision terms appear — the conversation never reached that level of detail.
13. **What this teaches each function** (folded into Consolidated Architecture §33a-33c as permanent rules): Pricing Intelligence gets confirmation the rate sheet is real production infrastructure, but not price-calibration evidence, since no number was ever contested. Brand Guardian gets a real proof-of-value case for a standing age/audience-fit checklist item. Deal Strategy gets a concrete lesson to always resolve the underlying brand behind an agency before assessing fit. Campaign Intelligence gets a sequencing lesson: creative concepting had already started internally before the disqualifying fact surfaced — verify fit and safety before creative investment, not after.

**Real dollar amounts:** not established by this pass. The email body confirms the rate sheet was sent and describes its structure (organic base, paid-media rights priced separately, custom dedicated-feature pricing, longer-term packages available) but the specific figures live inside the unfetched PDF attachment, per the recovery tool's standing no-attachment-content rule. The same document Katie separately provided this session (`WAG_Partnership_Options-1.pdf`, current: Social Campaign $25K / Signature YouTube Partnership $45K / Signature+Social $65K / Premium Story Integration from $75K / Podcast-Long-Term custom) is very plausibly the same or a near-identical version of what Pop&Boom received, but this recovery pass cannot independently confirm that — it's a plausible inference, not verified fact, and is labeled as such.

## 12. Why the original recovery pass missed this thread — Gate 1 diagnosis

**Katie's question, directly: why did a real, substantive, 16-message negotiation get missed by a search built specifically to catch this category?**

**Ruled out first:** the original `sponsor_partnership` query for `GMAIL_LEGACY_INTAKE` did contain matching terms — "collaboration," "partnership," and "agency" all appear as bare OR terms in the actual query text, and Pop&Boom's subject line ("Collaboration inquiry: thewildadventuregirls x POP&BOOM") and body ("a KOL agency") match multiple of them directly. **This was not a keyword-recall failure — the search terms were broad enough.**

**Also ruled out:** a `max_results` cutoff. The original query requested `max_results: 20`; Gmail's raw result count actually returned was 15 — below the requested cap, not at it. If the cap itself were the limiting factor, the tool would have returned exactly 20, truncating a larger match set. It didn't. This rules out "the query matched more but we only asked for/kept the top N" as the mechanism.

**What the evidence actually shows:** all 15 results that *did* come back are dated Aug 6-10, 2026 — a tight, very recent window — with nothing older, despite the query's terms being broad enough to plausibly match real correspondence going back months (Pop&Boom's thread, Jul 15 - Aug 2, included). That pattern — a request for up to 20 results, a return of exactly 15, and every one of them from the newest few days — is not what "the query only had 15 true matches, ever" would look like, given how common these search terms are; it's consistent with real matching messages existing further back that never made it into the final response.

**The most plausible mechanism, given how the tool is actually built:** `gmail-recovery-search` fetches each matched message's full content in a second step (`mapWithConcurrency`), and any individual fetch that fails (`if (!msgRes.ok) return null`) is **silently dropped** — filtered out of the response with no error surfaced, no count logged, no signal to the caller that anything went missing. This session has already documented, independently and repeatedly, a real pattern of client-side network flakiness (calls that fail with connection-level errors while every call that actually reaches Supabase's edge functions succeeds, confirmed directly via server-side logs). If that same flakiness hit a few of this query's per-message fetches — plausibly including some of Pop&Boom's 16 messages, which would have appeared in Gmail's true match set for this query — they would vanish from the result silently, with the response looking indistinguishable from "these messages never matched."

**This is a real design gap, not a privacy problem.** The fix does not require loosening Gate 1's purpose-limiting scope (the query stays a bounded, caller-supplied search — never a full mailbox list) or weakening any privacy boundary. It requires the fetch layer to stop failing silently:
- Return a `fetch_failures` count (and the affected message IDs, not content) alongside `result_count`, so a caller can see "18 messages matched, 15 fetched, 3 failed" instead of a bare, indistinguishable 15.
- Retry a failed individual fetch once before giving up, given the failures are known to be transient/client-side rather than server-side.
- Log fetch failures to `activity_log` alongside the existing sanitized query/result-count summary, so a pattern of silent loss would be visible in aggregate even if no one happens to catch a specific miss by name, the way Katie did here.

**Recommendation, not yet implemented:** add the three items above to `gmail-recovery-search`. This is a reliability/observability fix scoped to the tool's own fetch layer — it changes nothing about what the tool is allowed to search or return, and requires no change to the account scopes, the query-required design, or any other part of the Email Intake architecture's privacy model.

---

*Cross-referenced in `WAG_OPERATING_SYSTEM_MAP.md` alongside the other four Revenue & Partnerships documents. Design only — the schema in Section 9 is proposed, not built. The Pop&Boom case (Section 11) is also recorded in `WAG_REVENUE_PARTNERSHIPS_CONSOLIDATED_ARCHITECTURE.md` §33, and the executive-opportunity-card format used above is defined in that document's §34c. Awaiting Katie's review before implementation, including the Section 12 fetch-reliability fix.*
