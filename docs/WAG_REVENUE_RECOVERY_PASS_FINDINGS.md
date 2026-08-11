# WAG Revenue & Partnerships — Recovery Pass Findings

**One executive question this module answers: now that real business history has been recovered from both Gmail accounts, what does WAG's actual Revenue & Partnerships history look like, and what should the schema be built against?**

**Status: recovery pass complete, 2026-08-11. Answers Katie's 10 required questions. Still design only — no schema built from this document yet.** Extends `WAG_REVENUE_PARTNERSHIPS_FOUNDATION.md` (the recovery plan) and `WAG_REVENUE_PARTNERSHIPS_CONSOLIDATED_ARCHITECTURE.md` (the target department design). Per the named-relationship exclusion boundary (Consolidated §15), **Epic, Nintendo, and UpFaith & Family/Heartland were excluded from every search query in this pass** — nothing below references them.

**Method:** 8 bounded searches (4 categories × 2 accounts — sponsor/partnership, licensing/renewal, invoice/payment, and a Kidoodle-specific pass) via the `gmail-recovery-search` tool, read-only, no message state changed. Raw results were reviewed directly; this document extracts structured facts and links back to the source thread rather than reproducing full email bodies.

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

## 3. What's consistently missing

**A quoted or agreed rate.** Not one thread in this recovery — including the currently-active Aha World conversation — shows WAG's actual rate ever being sent. Every outbound BD pitch stops at "let's explore" before any number appears. This matches the Foundation doc's original finding (no closed sponsor deal on record) and sharpens it: **the real gap isn't just "no closed deals" — it's that WAG has never yet quoted a rate to anyone in these two inboxes.** Also consistently missing: a written contract/agreement for any sponsor conversation (Kidoodle's licensing terms are real but live in the portal, not in these email threads), and any real record of what happened after an outbound pitch went unanswered — no visible follow-up cadence beyond the Kidoodle payment-chase pattern.

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

**"PopandBoom" note:** Katie's own example (WAG declined an AI-promotion opportunity from PopandBoom on product/brand-fit grounds, not price) did not appear in this pass's 8 search queries — worth a targeted follow-up search by name specifically, rather than assuming it's covered by the categories already run.

---

*Cross-referenced in `WAG_OPERATING_SYSTEM_MAP.md` alongside the other four Revenue & Partnerships documents. Design only — the schema in Section 9 is proposed, not built. Awaiting Katie's review before implementation.*
