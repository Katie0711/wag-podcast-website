# WAG Revenue & Partnerships Foundation — Inventory & Proposed Architecture

**One executive question this module answers: who have we worked with, who are we talking to, what did we charge, what happened, who owes us money, who should we follow up with, what's active?**

**Status: inventory complete, architecture proposed, nothing built yet.** Per Katie's explicit instruction (2026-08-11): inventory what already exists across real systems before designing schema, and extend existing infrastructure rather than immediately standing up a parallel CRM. This document is that inventory and the resulting proposal — implementation waits for Katie's review.

---

## 1. What was checked, and how

Every system this session could actually reach, checked directly rather than assumed:

| System | Method | Result |
|---|---|---|
| WAG Brain (Supabase) | `list_tables` across all 40 tables + schema inspection of `assets` | No sponsor, revenue, CRM, invoice, or contact table exists anywhere. |
| `docs/CEO_COCKPIT.md` | Direct read | Contains an explicit, already-recorded finding (below). |
| `docs/SPONSOR_DISCLOSURE_CHECKLIST.md` | Direct read | States plainly: template only, not yet exercised, "no sponsor has been sold yet." |
| `docs/WAG_OPPORTUNITY_REGISTRY.md` + `docs/FUTURE_OPPORTUNITIES.md` | Grep + read | Sponsor Dashboard/Engine and Sponsor Intelligence entries both explicitly gated on "a sold sponsor" / "no sponsor filling it yet." |
| `docs/BUSINESS_DEVELOPMENT_SYSTEM.md` | Direct read | Real, but this is opportunity-*generation* research (where brands discover creators), not a closed-deal ledger. See Section 3. |
| `docs/SOFTWARE_INCUBATOR.md` (Business Assets Ledger) | Grep + read | A separate concept — durable IP/systems assets (Packaging Intelligence, the interaction platform), not a financial ledger. Not what this task needs, confirmed by reading it rather than assumed from its name. |
| Netlify forms (both sites, live API) | `get-forms-for-project` + `manage-form-submissions` | 3 total submissions across both sponsor-inquiry forms. All 3 pulled and read directly. See Section 2. |
| Gmail (thewildadventuregirls@gmail.com) | `search_threads` | **Blocked — connector requires reconnection.** Could not check. This is very likely where the real history actually lives; see Section 4. |
| Local filesystem search for a "Brand Playbook" source doc | Glob across both repos | Not found as a file — the case studies on the sponsor pages (Nintendo, UpFaith & Family/Heartland, Epic) were sourced from it in an earlier phase but the source document itself isn't in either repo. |

---

## 2. Real findings

**No sponsor CRM, spreadsheet, or tracking system exists anywhere in WAG's codebase or documentation.** This isn't an inference — `CEO_COCKPIT.md`'s own Sponsor Inquiries section already states it directly: *"No sponsor inquiry tracking system found in either repo... no CRM, spreadsheet, or log was found referenced anywhere in the codebase or docs."* Every other document checked (`SPONSOR_DISCLOSURE_CHECKLIST.md`, `WAG_OPPORTUNITY_REGISTRY.md`, `FUTURE_OPPORTUNITIES.md`) independently confirms the same underlying fact: as of their last updates, WAG has **no sold sponsor deal on record anywhere in these systems**, and every sponsor-dependent build (Sponsor Dashboard, self-serve booking) is explicitly gated on that not-yet-having-happened event.

**The 3 real form submissions are all internal QA, not real leads.** Pulled and read directly, not sampled:
- thewagpodcast.com's `wagpodcast-sponsor-inquiry` form: 2 submissions, both explicitly labeled "WAG MANUAL CLICK TEST — please ignore" / "WAG PRODUCTION TEST 2 — please ignore," sent to `thewildadventuregirls+manualclicktest2@gmail.com` and `+astrofixtest3@gmail.com` — these are this project's own end-to-end form testing from tasks #183/#194, not brand inquiries.
- wildadventuregirls.com's `sponsor-inquiry` form: 1 submission, from `thewildadventuregirls@gmail.com`, name "katie," message "excited" — Katie's own test of the live flow, not a real brand.

**Real conclusion: zero real inbound sponsor leads exist in either site's form data.** Combined with the known Netlify per-form notification bug (confirmed separately, still unresolved), it's plausible a real inquiry could arrive silently and go unseen — worth keeping in mind, but it doesn't change what's actually in the data today: nothing real.

**What real sponsor/revenue relationships do exist, evidenced only indirectly:**
- **Epic (educational licensing) is real, current, ongoing revenue** — Katie's own explicit statement this session: WAG's educational catalog is licensed to Epic, renewed annually, ~7M quarterly views. This is the one confirmed real, current revenue relationship found anywhere in this inventory. No rate, renewal date, or contract details exist in any system checked — that detail lives with Katie (or a real contract/email not reachable from here).
- **Nintendo, UpFaith & Family/Heartland** — real named case studies on both sponsor pages, "sourced from the 2026 Brand Playbook, real quotes, correctly attributed" per `BUSINESS_DEVELOPMENT_SYSTEM.md`. Real past relationships, used as legitimate social proof — but their *current* status (one-time, lapsed, potential-renewal, ongoing) is not documented anywhere in either repo. The source "Brand Playbook" itself isn't in either repo as a file.

**What Track 2/3 of `BUSINESS_DEVELOPMENT_SYSTEM.md` actually is, so it isn't confused with what Katie asked for:** that document is real and valuable, but it answers a different question — *where could WAG generate new opportunities* (Aspire, agencies, press, speaking). It is not a record of relationships WAG has already had. Both matter; they shouldn't be merged into one system, since one is prospecting research and the other would be relationship/deal history.

---

## 3. What's missing, and where it actually lives

Every category Katie asked to inventory — past/current sponsors, outreach history, contacts, proposals, rates, campaigns, deliverables, performance, renewals, lost deals, licensing revenue, invoices, payments, AR, overdue accounts, relationship history — comes back **not present in any system this session could reach.**

That doesn't mean the information doesn't exist — it means it almost certainly lives in one of two places nothing here can see:
1. **Katie's own memory** — deal terms, verbal agreements, relationship context, why something didn't renew.
2. **Gmail (thewildadventuregirls@gmail.com)** — the actual outreach threads, negotiated rates, signed agreements as attachments, invoices sent/received. This is the single most likely real source of truth, and it's currently inaccessible from this session (connector needs reconnection — see Section 4).

No spreadsheet, no accounting software (QuickBooks/Wave/etc.), no separate CRM (HubSpot/Airtable/etc.) was referenced anywhere in either codebase or its documentation. If one exists outside these two repos, it wasn't discoverable from here and is worth Katie confirming directly rather than this inventory guessing further.

---

## 4. What requires Katie, what requires a connector, what can be done autonomously

**Requires Katie directly (cannot be inferred or built around):**
- Reconnect the Gmail integration (`thewildadventuregirls@gmail.com`) so real outreach/contract/invoice history can actually be searched, rather than continuing to work from a system that's known to be empty.
- Confirm whether any spreadsheet, accounting tool, or informal tracking already exists outside these two repos (a Google Sheet, Notion, a folder of PDFs) — if so, that changes the inventory picture materially and should be checked before schema design, not after.
- Supply (or confirm from memory) the real history behind Nintendo, UpFaith & Family/Heartland, and Epic — what was actually charged, when, what the deliverables were, current status — since none of that exists in any system reachable from here.

**Requires a connector (technical work, not yet built):**
- Once Gmail is reconnected, a structured pass to extract real sponsor/licensing threads (search by known counterparty names first — Nintendo, Epic, UpFaith & Family/Heartland — then broader terms) into a durable, queryable record, rather than re-searching email by hand every time this comes up. This is real, bounded work, not speculative.

**Can be done autonomously once the above exists:**
- Design and build the actual schema (contacts, relationships, deals, campaigns, invoices/AR) once real data exists to design it *against* — building it now, against zero real rows, risks guessing at a shape that doesn't match how WAG's real deals actually work.
- Populate and maintain the resulting ledger going forward from real events (a new inquiry, a signed deal, an invoice sent) as they happen, the same event-sourced discipline already standing for `yt_raw_observations` and the Greenlight/outcome loop.

---

## 5. Proposed architecture (design only — not built)

**Extend, don't duplicate.** Per Katie's instruction, this should not become a third parallel system alongside the existing YouTube/WAG Brain infrastructure. The same WAG Brain (Supabase) that already holds `connectors`, `activity_log`, `video_ideas`/`greenlight_decisions`/`outcomes` is the right home — sponsors and deals are exactly the kind of entity → evidence → decision → outcome record that architecture already handles well for content.

**Proposed shape, once real data exists to validate it against (not proposed as final — this is a starting sketch for Katie's review, not a migration to run):**

- `partners` — one row per real counterparty (brand, agency, licensing partner). Fields: name, type (sponsor/licensing/agency/etc.), primary contact, relationship status, first contact date, source (how the relationship started).
- `partner_contacts` — people at each partner, since a relationship often outlives any one contact.
- `deals` — one row per real proposal/campaign/licensing agreement: partner_id, what was proposed, rate, status (proposed/accepted/declined/completed/renewed), dates, deliverables.
- `deal_events` — a timeline per deal (event-sourced, matching the rest of WAG OS's discipline): outreach sent, proposal sent, call held, contract signed, invoice sent, payment received, campaign delivered, renewal discussion — not just a status field that silently overwrites its own history.
- `invoices` — amount, date sent, amount paid, date paid (or null), overdue flag derived from date + terms, not stored as a separate manually-maintained boolean.

**Why this shape and not more right now:** every field above maps directly to a question Katie actually asked ("who owes us money" → `invoices` where paid < amount and past terms; "who should we follow up with" → `deals` in a stale non-terminal status; "what happened" → `deal_events`). It deliberately does not include speculative fields (lead scoring, automated outreach sequencing, pricing-intelligence modeling) — those come later, per Katie's own sequencing, only after this evidence foundation is real and populated.

**Explicitly not proposed yet:** any autonomous outreach, Sponsor Scout, pricing intelligence, or renewal-prediction logic. Those require real deal history to learn from, which doesn't exist yet per Section 2-3 above.

---

## 6. Recommended next step

Building the schema above today would mean designing it against zero real rows — a real risk of guessing at a shape that doesn't match how WAG's actual deals work (e.g., is a "deal" always partner-initiated, or does WAG sometimes propose first; do licensing deals and one-off sponsorships need different fields; how far back does real history worth preserving actually go). The highest-leverage next step is narrow and concrete:

1. **Katie reconnects Gmail.**
2. A bounded, targeted extraction pass runs against real threads (starting with known counterparties — Nintendo, Epic, UpFaith & Family/Heartland — then a broader sponsor/licensing/invoice sweep) to find out what real deal history actually looks like.
3. The schema above gets revised against what that pass actually finds, not before.
4. Only then does populating `partners`/`deals`/`invoices` begin.

This keeps the sequencing Katie set: evidence foundation first, schema second, intelligence/automation last — and avoids building speculative structure the same way the rest of WAG OS has deliberately avoided it elsewhere (era/cohort modeling, the Reporting API, the intelligence loop — all built against real data, not assumed shape).

---

*Cross-referenced in `WAG_OPERATING_SYSTEM_MAP.md`. Update this doc the same session any of Sections 2-4's findings change — particularly once Gmail is reconnected, since that is very likely to materially change Section 2's "no real history found" conclusion.*
