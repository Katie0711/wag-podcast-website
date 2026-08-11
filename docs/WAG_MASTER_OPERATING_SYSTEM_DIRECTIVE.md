# WAG OS: Master Operating System Directive

**Status: Katie's full architectural directive, issued 2026-08-11. Preserved verbatim (light markdown formatting only, no content removed or summarized away) per her explicit instruction not to weaken or summarize this document.** This is the permanent, authoritative statement of what WAG OS is for and how it should ultimately be organized. `WAG_EXECUTIVE_OPERATING_LAYER.md` (written earlier the same day) covers the Chief of Staff / homepage / Missions / Retention OS / Standards Board pieces in more implementation detail — it is now a sub-document of this one, not a separate architecture. See the gap analysis and phased sequence appended at the end of this file for how this directive compares against what WAG OS has actually built as of 2026-08-11, and the proposed build order going forward.

**Company Constitution note:** this directive does not activate or materially change the Company Constitution (`company_constitution` table, id=1, still `version='v0.1'`, `status='draft'`). No Constitution edit was made in response to this directive. Any future Constitution change still requires Katie's explicit, separate approval per the existing activation trigger.

---

We are NOT building an AI demo, a collection of agents, a YouTube analytics dashboard, or technology for technology's sake.

We are building a secure, live, continuously learning operating system whose purpose is to help turn WAG into a multi-multi-million-dollar media/IP company.

Katie is the human CEO and ultimate authority.

Everything built in WAG OS should ultimately be judged by whether it improves one or more of:

- audience growth
- views/distribution
- watch time and retention
- video hit rate
- title/thumbnail performance
- WAG Podcast growth
- social reach
- owned audience
- revenue
- profit
- sponsorship revenue
- books/publishing revenue
- products/licensing revenue
- IP/franchise value
- partnerships
- brand equity
- decision quality
- execution speed
- learning speed
- CEO time/attention
- company resilience
- long-term enterprise value

Do not optimize for number of agents, number of dashboards, amount of data collected, or amount of software built.

## 1. Executive Operating Layer

Katie remains CEO. Do not create an autonomous AI "CEO" above or equal to Katie.

Build toward an AI CHIEF OF STAFF / EXECUTIVE OPERATOR that becomes Katie's primary interface to WAG OS. Katie should not eventually need to manually manage dozens of agents. The Chief of Staff should coordinate the organization underneath it.

The WAG HQ homepage should eventually become an EXECUTIVE COMMAND CENTER rather than a static dashboard. It should ultimately include:

- Ask WAG HQ / executive command interface
- Good Morning Katie briefing
- What Changed Since You Were Away
- Top Priorities Today
- Needs Katie
- approvals/decisions
- Company Pulse
- active Growth Missions
- highest-ROI opportunities
- important risks
- important alerts
- revenue pulse
- content performance
- department health
- agent/manager health
- experiments currently running
- recent wins/losses
- important new learning
- standards/playbooks that changed
- stale decisions/intelligence requiring review

The Chief of Staff should be able to answer questions like:

- What should we film next?
- Why did this video miss our retention target?
- What are we learning from our recent videos?
- What changed on YouTube this week that matters to us?
- What are top creators doing that we should understand?
- What should WAG Podcast talk about next?
- What is our biggest revenue opportunity?
- Which sponsors should we pursue?
- What relationships should I follow up on?
- What collaborations should we pursue?
- What should we be doing with Amazon/books?
- What campaigns should we run?
- Where should I spend my next $1,000 / $10,000 / week of production time?
- What opportunities are we missing?
- What is currently underperforming?
- What needs my attention?
- What changed while I was away?
- What are our biggest strategic risks?
- What are our strongest emerging opportunities?
- What is the highest-value thing I can personally do today?

This cannot be a generic chatbot. Its answers must route through real WAG Brain evidence, current company state, managers, specialists, tools, permissions, first-party data, external intelligence and confidence/evidence standards. It must distinguish FACT, OBSERVATION, HYPOTHESIS, PREDICTION, RECOMMENDATION. It must never present guesses as facts.

## 2. Organizational Structure

Design WAG OS around real business units and functional departments. At minimum preserve these major areas in the long-term architecture:

A. WAG Main · B. WAG Podcast · C. Revenue & Partnerships · D. Marketing & Growth · E. Social Media & Distribution · F. Owned Audience / CRM · G. Books & Publishing / Amazon · H. Products / Commerce / Licensing · I. Collaborations / Relationships · J. PR / Speaking / Authority · K. Strategy & Business Intelligence · L. External Intelligence / R&D · M. Opportunity / Venture Lab · N. Finance / Capital Allocation · O. Operations / Production · P. Brand / Audience Guardian · Q. Legal / IP / Risk Operations · R. Technology / Data / Security

Do not blindly create an agent for every bullet. Determine where a manager, specialist, deterministic software worker, scheduled monitor, human workflow, or AI agent is actually appropriate. The goal is the best operating system, not the most agents.

## 3. WAG Main Business Unit

WAG Main needs its own GM/manager structure and specialized intelligence. Preserve functions for: Video Greenlight, Idea intelligence, Format intelligence, Topic intelligence, Packaging, Titles, Thumbnails, Hooks, Retention/watch time, Story structure, Editing intelligence, personality preservation, audience intelligence, competitive intelligence, creator intelligence, trend intelligence, comments/community intelligence, social/clip opportunities, postmortems, performance forecasting, prediction calibration, repeatable IP/franchise discovery.

WAG Main's current first-party YouTube connector is the foundation. Do not blend WAG Main data with WAG Podcast data.

## 4. Retention / Watch-Time Operating System

Retention is a major company objective. We want to work toward videos consistently reaching extremely strong retention/watch-time performance, with 70%+ as an important target where appropriate. Do NOT game this number or pretend every format/video should naturally have the same retention profile. Build a system that actually learns what produces exceptional WAG retention.

Before publication: analyze hook, first 30 seconds, first 60 seconds, first 3 minutes, promise/payoff, pacing, open loops, story escalation, stakes, curiosity, personality moments, unnecessary explanation, likely drop points, likely re-engagement points.

After publication: ingest actual retention, align retention curve with transcript, align retention with edit/story beats where technically possible, identify dips, identify spikes, identify abandonment points, identify rewatch moments where data supports it, compare traffic sources where available, compare against appropriate WAG baselines, compare against predicted performance, explain likely causes without claiming false causation, recommend changes, feed validated learning forward.

The eventual output should be specific enough to say things like: "Retention dropped materially from timestamp X to Y during this story beat. Similar structures have correlated with drops across N comparable WAG videos." NOT: "Make the intro more engaging."

The system must continuously ask: WHY did this video hit or miss? WHAT should we change? DID the change work on the next videos?

## 5. WAG Podcast — First-Class Business Unit

WAG Podcast is NOT simply another WAG Main channel. It needs its own dedicated GM/team, intelligence, baselines and learning system. Its ecosystem includes: YouTube, Spotify, Apple Podcasts, website/search, clips, Shorts, Instagram, TikTok where appropriate, guests, community, sponsors, email/owned audience, memberships/products where appropriate.

Preserve dedicated functions for: Podcast General Manager, Episode Greenlight, episode/topic strategy, Hook & Retention, YouTube Packaging, Titles, Thumbnails, Conversation & Personality Preservation, Clips/Shorts Intelligence, Spotify/Audio Intelligence, Apple Podcasts Intelligence, Podcast Audience Intelligence, Research/Trend Scouting, Competitive Podcast Intelligence, Guest Intelligence, Collaboration Intelligence, Podcast SEO/Discovery, Community/Listener Intelligence, Podcast Revenue/Sponsorship Intelligence, Production/Quality.

YouTube, Spotify and Apple evidence must remain source-distinct. Do not pretend unlike metrics are equivalent. Research official Spotify/Apple creator/API capabilities before building connectors. Never invent API access. Where official APIs cannot provide required creator analytics, document the blind spot and evaluate secure manual/export ingestion.

The Podcast needs the same idea → prediction → decision → episode → outcome → postmortem → learning loop as WAG Main.

Protect the girls' chemistry, humor, stories, reactions and personalities. Optimization must not optimize the talent out of the product.

## 6. Revenue & Partnerships Engine

Build toward a dedicated revenue organization. Its job is not merely maintaining a sponsor list. It should eventually understand: sponsor prospects, sponsor fit, brand categories, contacts, relationship history, prior campaigns, rates, inventory, outreach, replies, follow-ups, negotiations, proposals, deliverables, contracts/status, renewals, upsells, cross-platform packages, case studies, accounts receivable, outstanding invoices, forecast revenue, realized revenue, campaign performance, sponsor retention, sponsor lifetime value where meaningful.

It should continuously ask: WHO should be paying WAG? WHAT should we sell them? WHY is WAG a fit? WHAT package creates the most value? WHO should we follow up with? WHAT money is outstanding? WHO should we renew? WHAT new sponsor categories are emerging?

Company-wide Sales may execute selling. Business units such as WAG Podcast should maintain their own inventory/intelligence that feeds the revenue organization. Never send external outreach autonomously unless Katie has explicitly granted that authority under the permission system.

## 7. Revenue Command Center

Eventually expose a Revenue Pulse including: revenue this month, revenue YTD, revenue by business unit, revenue by source, contracted revenue, pipeline, weighted pipeline, outstanding receivables, overdue invoices, forecast, sponsor opportunities, concentration risk, renewal opportunities, new monetization opportunities, profit/margin where available.

The system should understand AdSense is only one revenue stream.

## 8. Marketing & Growth

Build toward a Marketing/Growth department responsible for: brand campaigns, content campaigns, launches, cross-promotion, audience acquisition, conversion, website, SEO, email, social, partnerships, paid acquisition when economically justified, attribution, experimentation, funnel optimization, campaign postmortems.

Marketing must coordinate across business units rather than operate as isolated posts.

## 9. Campaign Operating System

Create the architectural concept of a CAMPAIGN. A campaign can coordinate: goal → target audience → strategy → creative → channels → assets → owners → budget → schedule → approvals → launch → measurement → results → postmortem → learning.

Examples: book launch, major WAG video franchise launch, podcast growth campaign, sponsor campaign, product launch, membership launch, newsletter growth, speaking/event campaign.

One campaign can involve YouTube + Podcast + Amazon + email + website + social + collaborations. Do not treat those as unrelated tasks.

## 10. Social Media & Distribution

Create a dedicated distribution function for: YouTube Shorts, Instagram, TikTok where appropriate, clips, Reels, emerging platforms, cross-platform content, platform-native packaging, posting strategy, performance analysis, audience conversion, experimentation.

Do not simply repost identical content everywhere. Learn what each platform rewards for WAG specifically. Track which social activity actually drives: views, followers, podcast consumption, email signup, website visits, revenue, brand growth.

## 11. Owned Audience / CRM

WAG cannot remain entirely dependent on algorithms. Build toward a first-party audience engine: email/newsletter, audience capture, website conversion, signup sources, segmentation where appropriate and privacy-safe, engagement, retention, campaigns, surveys/polls, community feedback, conversions, customer/listener/viewer journeys where lawful and appropriate.

The goal is an audience relationship WAG owns rather than rents entirely from platforms.

## 12. Books / Publishing / Amazon

Create a real Books & Publishing business unit/function. It should eventually understand: book concepts, audience demand, keyword/search demand, Amazon categories, competitive titles, positioning, title/subtitle, cover performance, series strategy, manuscripts, publishing calendar, launch strategy, listing optimization, pricing, reviews/feedback, sales, conversion, advertising where appropriate, royalties, profit, cross-promotion, WAG IP expansion.

Books should connect to the larger WAG ecosystem. Ask: Can a successful content franchise become a book? Can a book create a video/podcast opportunity? Can audience demand validate publishing ideas before production?

## 13. Products / Commerce / Licensing

Build toward intelligence for: merchandise, physical products, digital products, memberships, subscriptions, affiliate opportunities, licensing, retail, distribution deals, brand extensions.

Validate demand before blindly building products. Track economics after launch.

## 14. Collaborations / Relationship Intelligence

Create a Relationship Brain with appropriate privacy/security controls. Track useful business relationships such as: creators, guests, brands, sponsor contacts, platform executives, conference organizers, publishers, managers, agents, media, collaborators, distribution partners.

Where appropriate track: relationship, organization, interactions, past collaborations, promises, follow-ups, opportunities, last meaningful contact, next appropriate action, audience/business overlap.

The system should help identify: WHO should WAG know? WHO should Katie reconnect with? WHO could create meaningful strategic value? WHAT relationship is going stale?

Do not turn this into invasive personal profiling.

## 15. Guest & Collaboration Engine

Especially for WAG Podcast and WAG Main: identify potential guests/collaborators, audience overlap, brand fit, episode/video angle, likely mutual value, relationship status, outreach status, prior appearances, outcome/performance.

Drafting outreach is fine. Sending requires appropriate approval/authority.

## 16. PR / Speaking / Authority

Create an opportunity function for: speaking engagements, conferences, panels, creator events, podcasts Katie/the girls should guest on, media opportunities, interviews, awards, industry recognition, trade publications, thought leadership, platform events.

Do not wait only for inbound invitations. Continuously identify relevant opportunities and rank them by: audience value, authority value, relationship value, revenue, strategic fit, effort/cost, brand risk.

Maintain deadlines and follow-ups.

## 17. Strategy & Business Intelligence

Create a strategy function that looks ABOVE individual departments. It should study: business model, media industry changes, creator economy, audience changes, platform changes, competitor strategy, pricing, distribution, monetization, resource allocation, emerging threats, strategic opportunities, scenarios, long-term moat.

It should ask: What business are we actually becoming? Where is the market moving? What should WAG stop doing? What should WAG double down on? What should WAG build now that becomes valuable 1–3 years from now?

## 18. Always-Ahead External Intelligence / R&D

Create a permanent external intelligence capability. Continuously monitor relevant changes in: YouTube, YouTube creator strategy, top creators, rising creators, formats, hooks, titles, thumbnails, storytelling, editing, teen trends, audience behavior, podcasts, Spotify, Apple Podcasts, social platforms, Amazon/publishing, marketing, sponsorships, creator economy, AI, software, distribution, monetization, new platforms, business models.

Do NOT dump the internet into WAG Brain. Every finding must pass: WHAT CHANGED? → IS IT RELEVANT TO WAG? → WHAT IS THE EVIDENCE? → WHAT COULD THE IMPACT BE? → WHAT SHOULD WAG DO, IF ANYTHING? → WHO OWNS THE NEXT ACTION?

Distinguish competitor observation from proven WAG evidence. Do not copy creators blindly. Learn principles/patterns, then determine whether they fit WAG.

## 19. Opportunity / Venture Lab

Create an Opportunity function specifically tasked with finding things Katie did NOT already ask about. Potential areas: new revenue models, partnerships, licensing, acquisitions, distribution, platforms, IP, products, software, datasets, underserved audience needs, creator collaborations, publishing opportunities, technology leverage, new channels.

Every opportunity should include: thesis, evidence, potential upside, cost, effort, risk, strategic fit, confidence, recommended next test.

Do not overwhelm Katie with weak ideas. Rank aggressively.

## 20. Finance & Capital Allocation

Build toward real financial intelligence. Eventually understand: revenue, expenses, profit, margins, cash, receivables, budgets, forecasts, business-unit economics, project economics, campaign economics, contractor/team costs, ROI, opportunity cost.

The Executive layer should eventually answer: if WAG has an incremental $1K, $10K, $50K or $100K, where should it be deployed for the highest risk-adjusted strategic return?

Financial recommendations must use real data and explicitly state uncertainty.

## 21. Brand & Audience Guardian

Optimization must never destroy WAG. Create a Brand/Audience Guardian function responsible for protecting: girls' personalities, chemistry, humor, authenticity, audience trust, Christian boundaries, age evolution, brand safety, visual identity, tone, reputation, sponsor fit, over-commercialization, long-term brand equity.

Something can theoretically improve CTR and still be wrong for WAG. The Guardian should be a lens in consequential content/business decisions, not an autonomous veto over Katie.

## 22. Operations / Production

Strategy must translate into execution. Track: idea, greenlight, pre-production, filming, assets, editor, edit status, review, thumbnail, title, sponsor requirements, approvals, publishing, distribution, clips, website, postmortem.

Identify bottlenecks and dropped handoffs. Do the equivalent for Podcast, books, campaigns, sponsors and products.

## 23. Legal / IP / Risk

Maintain operational awareness of: trademarks, copyrights, releases, contracts, licensing, sponsor obligations, usage rights, privacy, data/security, child/teen considerations where applicable, business risk, deadlines.

AI may organize, monitor, summarize and flag. It must not pretend to replace qualified legal counsel for legal judgment.

## 24. Technology / Data / Security

Security remains a permanent production gate. Maintain: connector security, credential isolation, least privilege, capability permissions, audit logs, backups, restore testing, MFA, session security, environment separation, dependency security, alerting, credential rotation, incident response, provenance, data quality, security regression tests.

No AI employee should directly receive powerful infrastructure credentials. Use narrow tools/capabilities. Any new connector, credential, private dataset, external action, spending authority, publishing authority, messaging authority or elevated permission must pass its security review before production use.

Reuse proven controls where possible. Do not let security become an excuse to stop building once material risks are controlled.

## 25. Company-Wide Learning System

This is CRITICAL. WAG OS must become smarter from WAG's actual outcomes. For every meaningful decision/experiment preserve: INPUT/EVIDENCE → PREDICTION → RECOMMENDATION → KATIE DECISION → EXECUTION → ACTUAL OUTCOME → PREDICTION VS ACTUAL → POSTMORTEM → LEARNING → STANDARD/PLAYBOOK CHANGE IF WARRANTED.

Examples: videos, podcast episodes, titles, thumbnails, hooks, formats, campaigns, sponsors, outreach, collaborations, books, products, social strategies, marketing experiments.

Predictions must remain frozen before outcomes so outcome data cannot leak backward and make the system look smarter than it was. Do not create fake accuracy scores from tiny samples.

## 26. Automatic Postmortems

Meaningful initiatives should eventually trigger postmortems automatically. Ask: What did we predict? What actually happened? Where were we wrong? Why might we have been wrong? What evidence changed? What should we do differently? Does this update a company standard? Is this one observation or a repeated pattern?

Wins need postmortems too. We need to understand WHY something worked, not just why something failed.

## 27. Standards Board / Playbooks

Create a versioned standards layer.

**WAG Main:** Hook Standard, Retention Standard, Title Standard, Thumbnail Standard, Format Standard, Story Standard, Editing Standard, Personality Standard.

**Podcast:** Episode Standard, Podcast Hook Standard, Conversation Standard, Podcast Packaging Standard, Clip Standard, Guest Standard.

**Business:** Sponsor Qualification Standard, Campaign Standard, Partnership Standard, Book Launch Standard, Brand Standard.

Each standard should include: version, evidence, confidence, effective date, last reviewed, why it changed, supporting observations, what could change it again.

Standards should evolve from evidence, not agent preference.

## 28. Cross-Department Growth Missions

Departments cannot become silos. Create Growth Missions spanning multiple teams. Examples: WAG Main Breakout Growth, 70%+ Retention Improvement, Establish Repeatable WAG Franchises, Make WAG Podcast a Leading Teen Podcast, Build Significant Non-AdSense Revenue, Grow Owned Audience, Build Books/IP Revenue, Expand Strategic Partnerships.

Each mission should include: objective, KPI(s), baseline, target, deadline/horizon where appropriate, responsible executive/manager, participating departments, active experiments, blockers, evidence, progress, next actions, confidence.

## 29. Growth Loops — Connect the Company

WAG OS must detect when success/failure in one department creates an opportunity elsewhere.

Example: WAG video breaks out → Performance detects it → Retention explains it → Format identifies repeatability → Social identifies clips → Podcast identifies related episode → Marketing builds campaign → Email distributes → Sponsor team finds relevant brands → Collaboration team identifies partners → Books/IP tests expansion → Product/Licensing evaluates extensions.

Likewise: Amazon book breaks out → Publishing detects it → Strategy asks why → WAG Main evaluates video opportunity → Podcast evaluates episode → Social creates campaign → sponsor/product opportunities are evaluated.

Build toward these loops rather than isolated departments.

## 30. Relationship Between First-Party and External Data

Keep these distinct: FIRST-PARTY VERIFIED WAG DATA, EXTERNAL VERIFIED DATA, OBSERVED COMPETITOR PATTERNS, HYPOTHESES, AI INFERENCE.

Never allow external creator behavior to overwrite what WAG's own evidence shows. But do not become inward-looking either. The advantage should come from combining: WHAT WAG'S DATA SAYS + WHAT IS CHANGING OUTSIDE WAG + WHAT WE SHOULD TEST NEXT.

## 31. CEO Opportunity Queue

Maintain a company-wide ranked opportunity queue. Not simply "interesting things." Rank by factors such as: expected upside, revenue potential, audience impact, strategic value, moat, confidence, cost, time, reversibility, risk, CEO effort, team effort.

The Chief of Staff should surface only the highest-value opportunities unless Katie asks to explore more.

## 32. Decision Memory

Preserve why important decisions were made. For consequential decisions record: decision, date, evidence available at the time, recommendation, Katie's decision, overrides/disagreement, assumptions, expected result, actual result later, learning.

WAG OS should not repeatedly reopen settled questions without new evidence.

## 33. Agent / Manager Performance

Agents themselves must be evaluated. Track where appropriate: tasks completed, usefulness, evidence quality, prediction quality, false positives, missed opportunities, cost, latency, human corrections, overrides, business impact.

Do not reward agents for producing more output. Reward useful decisions and measurable outcomes. Managers should detect weak or drifting workers.

## 34. Cost / Model Governance

AI spend must be economically rational. Use deterministic code when deterministic code is enough. Use cheaper models for appropriate low-risk work. Use stronger models when judgment materially matters.

Track: model, task, cost, value, failures, retries, outcome. Do not spend $5 of AI inference to make a $1 decision.

## 35. Data Freshness / Provenance

Every important fact should know: source, timestamp, owner/entity, evidence tier, freshness, confidence where appropriate. Stale facts must not silently behave as current truth. The Freshness Reviewer is one piece of this larger requirement.

## 36. Alerting / Escalation

Not everything belongs on Katie's desk. Create escalation levels: INFO (available in dashboard), IMPORTANT (Chief of Staff briefing), ACTION REQUIRED (Katie queue), URGENT (immediate alert).

Potential escalation triggers: security anomaly, failed backup, connector failure, abnormal spend, major performance anomaly, sponsor deadline, overdue receivable, contract deadline, unexpected account/channel mismatch, major platform change, unusually strong opportunity, campaign failure, reputational risk.

## 37. Human Authority / Approval

Katie remains ultimate authority. High-consequence actions should remain approval-gated unless Katie explicitly grants a narrower standing authority. Examples: sending external messages, publishing, deleting, spending, contracts, changing permissions, connecting sensitive systems, credential rotation, legal commitments, public statements, material pricing changes.

Agents can research, prepare and recommend without automatically receiving execution authority.

**Deciding a legitimate commercial opportunity is gated the same way (added 2026-08-11).** An agent recommending a business opportunity be declined is not the same as the opportunity being declined — that decision, like accepting, countering, granting rights, or agreeing to exclusivity, stays with Katie. An agent may suppress from her view only what it can confidently classify as spam/phishing/fraud/malware/irrelevant solicitation, with an auditable record of the classification; everything else — including opportunities an agent thinks are a poor fit — is surfaced for her decision, not filtered out ahead of it. Full spec, including the executive-opportunity-card format and the Pop&Boom/PolyBuzz case that prompted this rule: `WAG_REVENUE_PARTNERSHIPS_CONSOLIDATED_ARCHITECTURE.md` §34.

## 38. Company Operating Questions

The Executive layer should continuously answer five questions:

- **GROWTH:** What can make WAG significantly bigger?
- **REVENUE:** What can make WAG significantly more profitable?
- **MOAT:** What are we building that competitors cannot easily copy?
- **RISK:** What could materially hurt WAG, its audience, finances, IP, reputation or systems?
- **LEARNING:** What did we learn that should change what we do next?

## 39. North Star

WAG OS should continuously ask: "What are the highest-value actions WAG can take now to become a multi-million-dollar media/IP company while protecting the brand and building durable owned assets?"

This is the North Star. Do not interpret "multi-million-dollar" as permission to chase short-term revenue at the expense of audience trust, brand value or durable IP.

## 40. Current Build Order — Do Not Derail It

This directive defines the destination. DO NOT stop the current vertical build and attempt to implement all of this simultaneously. Continue the current sequence:

1. Finish WAG Main connector integrity/capability matrix.
2. Connect WAG Podcast YouTube securely.
3. Research and document Spotify/Apple first-party analytics access.
4. Expand useful WAG Main historical ingestion.
5. Build WAG Main intelligence/learning loop on meaningful first-party data.
6. Build WAG Podcast intelligence/learning loop with source-distinct data.
7. Close the remaining high-priority security/production gaps, including MFA.
8. Then implement the Executive Operating Layer/Chief of Staff progressively.
9. Build the next highest-ROI business vertical rather than whichever department is easiest to code.
10. Revenue & Partnerships should be a serious candidate for the next major vertical after content intelligence because WAG needs monetization intelligence alongside audience growth.

Before building major new departments, bring Katie: proposed architecture, what already exists, what needs new schema/software, required connectors, security implications, expected business value, build order, what requires Katie, what can be done autonomously.

## 41. Do Not Build for the Sake of Building

For every proposed system/agent/feature ask: What business problem does this solve? What decision does it improve? What action does it enable? What data does it need? How will we know it works? What is the expected value? What is the simplest architecture that accomplishes it? Does something already exist that should be extended instead? What security/permission does it require? Should this even be AI?

If those questions cannot be answered, do not build it yet.

## 42. Contracts / Agreement Operations

*Addendum, 2026-08-11. Additive to everything above — nothing prior is replaced, summarized away, or reprioritized.*

Build toward an attorney-approved WAG Agreement Library and contract workflow.

Potential agreement categories include: Podcast Guest Appearance/Release, Video/Collaboration Appearance Release, Name/Image/Likeness/Voice releases, parent/guardian/minor releases where applicable, NDA/confidentiality agreements, independent contractor agreements, IP/work-product assignments where appropriate, creator collaboration agreements, sponsorship/brand agreements, content licensing agreements, distribution agreements, location/property releases where needed, book contributor/writer/illustrator agreements, music/media/third-party asset licenses, other attorney-approved forms WAG actually requires.

AI must NOT invent legal forms and declare them legally sufficient. Templates should be attorney-approved, versioned, and linked to the project/person/asset/deal for which they were signed. Build toward rules that know which approved document is required before recording, publishing, licensing, paying, distributing or otherwise exploiting an asset.

## 43. Rights / Chain-of-Title (expanded)

For valuable WAG assets, eventually track: owner, copyright/rights status, contributors, releases, talent rights, music/assets, location rights, licenses, restrictions, derivative rights, evidence/supporting agreement, where/how WAG may monetize the asset.

The system should eventually answer: Can WAG legally publish, clip, dub, translate, license, distribute, adapt into a book, create derivatives from, or otherwise monetize this asset — and what executed documents support that conclusion? Do not let AI inference substitute for actual legal documents.

## 44. Licensing Operations

Treat licensing as a real business function. For each license track where applicable: licensee, assets/titles, agreement, rights granted, rights retained, exclusivity, territory, language, media/platform, term, start/end, renewal, notice deadlines, payment terms, reporting obligations, usage restrictions, permitted edits, translation/dubbing rights, derivative rights, sublicensing, brand protections, termination, revenue, payment history, performance.

Preserve the fact that WAG owns its educational video library and currently licenses educational content to Epic, with annual renewals and approximately 7 million quarterly views on Epic. Do not infer contractual rights from that statement. Actual executed agreements remain the source of truth for the scope of rights granted/retained.

## 45. Accounts Receivable / Collections

Build toward a real AR system so Katie never has to remember who owes WAG money. Track: customer/licensee/sponsor, contract/deal, invoice, amount, invoice date, due date, payment terms, paid amount, balance, status, days overdue, contacts, follow-ups, replies, promises to pay, escalation stage, next action, dispute, resolution.

Create a controlled escalation workflow: upcoming → due → reminder → overdue → follow-up → alternate AP/contact escalation → Katie decision → attorney/collections escalation where warranted.

AI may identify overdue accounts, prepare communication, recommend next steps and track responses. It must not autonomously threaten litigation, send legal demands, engage collection agencies, settle disputes, waive amounts, or make legal commitments without the required authority/approval.

## 46. Contract Obligations

Track both sides of every important agreement: What does WAG owe them? and What do they owe WAG? Track deliverables, payment, reporting, renewal, notice, usage, approvals, deadlines and other material obligations. Alert before deadlines, not after.

## 47. Contract Intelligence

Build toward structured extraction from executed agreements: parties → dates → rights → restrictions → money → deliverables → obligations → renewals → notice periods → termination → exclusivity → territories → responsible owner. Every material extracted fact should retain provenance to the executed source document/clause/page where technically possible. The executed agreement remains authoritative when AI extraction disagrees.

## 48. International Growth / Localization (expanded)

Expand the International/Localization gap (recorded in the gap analysis below) into a real future growth function covering: international YouTube demand, YouTube automatic dubbing, human/professional dubbing, multi-language audio, translated titles/descriptions, international licensing, localized books, foreign publishing rights, international distributors/platforms, territory economics, localization quality control.

Do not automatically dub everything. Build toward evidence-based language/asset prioritization using geography, content/topic universality, historical performance, licensing evidence, market size, cost, translation difficulty and monetization potential. Evaluate the educational library separately because evergreen educational subjects may have materially different international potential from current teen-entertainment WAG.

Before international exploitation, Rights/Chain-of-Title and existing licensing agreements must be checked for territory/language/exclusivity restrictions.

## 49. Dubbing Experimentation

Record YouTube's current automatic dubbing/multi-language capabilities as an opportunity for later testing. Design an experiment rather than a mass rollout: choose high-potential assets → select languages → review dub quality → publish → measure international reach/watch time/retention/revenue → compare against control/history → decide whether to expand or invest in professional dubbing.

## 50. Payment / Deal Health

Add future executive visibility for: money owed to WAG, overdue money, upcoming invoices, renewals, contract deadlines, deliverables owed by WAG, deliverables owed to WAG, unresolved disputes, high-risk counterparties. This should eventually feed Revenue Pulse (§7) and the Chief of Staff's Needs Katie queue (§1).

## 51. Keep the Existing Architecture Intact

These requirements (§42-50) are additional pieces of the already-approved WAG OS architecture. Do not lose or replace: WAG Main, WAG Podcast, Chief of Staff/Executive Operator, Revenue & Partnerships, Marketing/Growth, Social/Distribution, Campaigns, Owned Audience/CRM, Books/Amazon, Products/Commerce/Licensing, Collaborations/Relationships, PR/Speaking, Strategy, External Intelligence/R&D, Opportunity/Venture Lab, Finance/Capital Allocation, Operations, Brand Guardian, Legal/IP/Risk, Technology/Data/Security, company-wide learning loops, postmortems, Standards Board, Growth Missions, decision memory, agent evaluation, cost governance, Talent Management, Talent Development/Succession, Crisis/Reputation Response, Key-Person/Business Continuity, Entity/Accounting Architecture, International/Localization, Rights/Chain-of-Title, Distribution/Platform Dependency Risk, Educational Content/IP Library.

Added to the master gap analysis as planned architecture, not immediate build work. When Contracts/Rights/AR implementation is eventually reached, first inventory what agreements, invoices, licensing records, rights documents and existing systems WAG already has — extend rather than duplicate. Do not build legal automation that exceeds AI authority — Katie and qualified counsel remain the authority for consequential legal decisions.

## 52. Implementation Standard for §42-50

*Addendum, 2026-08-11, same day.* Do not interpret §42-50 as a request merely to create tables, documents, dashboards or a collection of legal templates. The eventual WAG OS implementation must create operational workflows that connect events → requirements → evidence → decisions → actions → outcomes → learning. Examples of the intended standard:

**Podcast guest booked** → identify required attorney-approved release → check whether current executed release exists → flag missing requirement before filming → link executed agreement to person + episode → record relevant rights/permissions → clear or block publication according to approved policy.

**Collaboration planned** → identify required agreement/releases → check signatures → establish ownership/reuse/likeness rights from executed documents → flag ambiguity for human/counsel review → clear project.

**Existing video considered for book/dubbing/licensing** → identify source asset → retrieve rights/chain-of-title evidence → inspect relevant existing licenses/restrictions → determine what rights appear available → escalate legal uncertainty rather than guessing → then allow commercial evaluation.

**Licensing agreement executed** → record rights granted/retained → create obligations/deadlines → create invoicing/payment expectations → monitor reporting/payment/renewal → alert responsible department → escalate exceptions.

**Invoice becomes overdue** → detect automatically → show amount/days overdue/history → recommend appropriate next communication → log communication → monitor response/payment → escalate according to approved policy → require Katie/counsel authorization for consequential legal action.

**International opportunity detected** → identify asset/market/language → check rights availability → estimate opportunity/evidence → recommend low-cost validation experiment → measure result → determine whether to scale.

## 53. Executive Visibility Standard

These systems must ultimately feed the CEO/Chief-of-Staff operating layer (§1) rather than requiring Katie to hunt through departments. Katie should eventually be able to ask natural-language questions such as: Who owes WAG money? What's overdue? What contracts renew soon? What requires my signature? What guest/collab releases are missing? What obligations are due this month? What rights does WAG have for this video? Can this asset be dubbed/licensed/adapted? What rights have already been granted? Which educational assets are producing licensing value? Which assets should become books? What international opportunities are emerging? What needs my attention today?

The Chief of Staff should proactively surface material exceptions through Needs Katie, rather than waiting for Katie to ask.

## 54. Source-of-Truth Standard

Never allow an AI summary of a contract to become the legal source of truth. Preserve: executed document → structured extraction → source citation/provenance → operational rule/action. If extracted data and the executed document conflict, the executed document wins and the discrepancy is flagged. Material legal interpretations should be escalated rather than guessed.

## 55. Authority Standard

AI employees may: detect, organize, extract, monitor, research, analyze, recommend, draft, remind, prepare.

They may not autonomously: execute agreements, waive rights, grant licenses, modify material contractual terms, settle disputes, threaten litigation, initiate collections/legal proceedings, bind WAG financially or legally, make consequential legal interpretations where counsel is required.

Those remain within Katie/counsel's authority according to the Company Constitution/capability system.

## 56. Do Not Build This Now

Record §42-55 as a complete operating model in the master architecture and gap analysis. Do not interrupt the currently approved sequence: Spotify/Apple capability research → dedicated WAG Podcast architecture → highest-ROI intelligence/business operating layer. When this area reaches implementation, first inventory WAG's actual existing contracts, releases, invoices, licensing agreements, counterparties and workflows before designing schemas or software — extend reality, do not invent a parallel WAG. Continue applying the standing security requirements (§24) to every new table, connector, secret, function and migration this eventually requires.

## 57. Permanent Agent Learning & Freshness Standard (added 2026-08-11)

**Applies company-wide — every WAG OS employee, manager, specialist, research function, and department, present and future, not scoped to any one business unit.** Katie's explicit standard for how every specialist stays current and measurably improves, without becoming autonomous in a way that trades away control. **Status: standard established, nothing built from it yet.** Per Katie's explicit instruction: do not let this derail current implementation work (Revenue & Partnerships or anything else in flight) to build a general agent-training platform now — extend this incrementally as each real specialist is actually built, the same discipline already standing for every other piece of this master directive.

**1. Freshness is a system requirement, not an aspiration.** Every specialist that depends on changing external information must be able to state: what sources it relies on, when each was last checked, what may have gone stale, how often that domain reasonably needs refreshing, and what changed since the prior review. Concrete per-department examples Katie named: YouTube agents on platform features/analytics/policy; Revenue agents on sponsorship economics/brand activity/agencies/pricing benchmarks/usage-right norms; Podcast agents on Spotify/Apple/YouTube Podcasts/discovery/advertising; Books/Amazon on publishing/categories/search behavior/competitive titles/pricing; International on dubbing/localization/markets/licensing.

**2. No self-reinforcement.** An AI's own previous answer is not evidence, and agents may not improve methodology merely because another agent said something or because prior output sounded plausible. Real learning sources only: verified first-party WAG outcomes, authoritative external sources, repeated observed patterns, controlled experiments, human corrections/overrides, validated business outcomes.

**3. Prediction → outcome → calibration.** Record predictions before outcomes are known wherever possible, then compare prediction → actual outcome → error → likely reason → methodology implication, tracking whether each specialist is actually getting better at its job. Real examples across departments: Greenlight prediction vs. video performance, Packaging prediction vs. impressions/CTR, Retention prediction vs. real retention, sponsor qualification vs. response/close, pricing recommendation vs. negotiation outcome, campaign prediction vs. campaign result, book opportunity score vs. sales, collaboration recommendation vs. actual value. This is the same predictions/outcomes discipline already proven for Greenlight Manager v3, extended company-wide as the standard, not a new invention.

**4. Versioned methodologies.** Agent instructions, scoring rubrics, standards, playbooks, and decision rules are versioned, never silently overwritten. Change flow: current method → proposed change → evidence → approval/evaluation → new version, with the old version preserved so WAG can actually compare whether the new one performs better.

**5. Automatic self-evaluation, not volume.** Each meaningful specialist gets performance metrics appropriate to its actual job — prediction calibration, recommendation usefulness, false positives/negatives, missed opportunities, human overrides, outcome quality, business impact, cost, latency, evidence quality, stale-data errors. Never evaluated on output volume.

**6. Manager review.** Managers (the org-chart layer already established, `wag_os_ai_organization_structure`) evaluate their specialists for declining accuracy, stale assumptions, repeated mistakes, overconfidence, excessive agreement/groupthink, poor evidence, unnecessary cost, slow execution, and failure to use first-party data when it's available. Managers may recommend retraining/revision; **major methodology, security, or authority changes remain governed by the Company Constitution and the standing approval rules** — a manager's review authority does not extend to unilaterally changing either.

**7. External Intelligence / Always-Ahead loop.** A dedicated research/freshness layer continuously checks meaningful external change, following: what changed? → is it relevant to WAG? → how strong is the evidence? → which department should care? → does it require action/test/update? Routes relevant changes to the specialists that need them — never floods every agent with raw, unfiltered news.

**8. Source quality hierarchy**, preserved explicitly in every evidence trail: first-party WAG data → primary/official external sources → high-quality secondary research → observed competitor behavior → hypothesis/inference. Same shape as the source-of-truth hierarchy already established for Revenue & Partnerships (`WAG_REVENUE_PARTNERSHIPS_FOUNDATION.md` §7), now stated as the company-wide standard it actually is.

**9. Freshness/staleness gates.** If a recommendation depends materially on information that's stale, incomplete, or unavailable, the agent says so explicitly — never silently treats an old market rate, old platform behavior, old creator example, old policy, or old audience assumption as current truth.

**10. Experimentation discipline.** Agents identify when uncertainty is genuinely best resolved by a real test rather than more theorizing (title A/B, hook structure, sponsor package, international dub, book concept, social format, outreach approach) — and never claim a change caused an outcome from one uncontrolled example. Correlation and causation stay distinct.

**11. Failure library.** Failed predictions and unsuccessful recommendations are preserved, never deleted for being embarrassing — they're training evidence. Recorded: what was believed, why, what actually happened, what was missed, and how methodology should change if the evidence warrants it.

**12. Human overrides are learning data.** When Katie disagrees with an AI recommendation, that disagreement is preserved, and both positions get compared against the actual outcome later — never an automatic assumption that either Katie or the AI was right; the result itself is the evidence.

**13. Model improvement ≠ business improvement.** The standard for whether a change is real progress: did this specialist help WAG make a better decision, move faster, make more money, grow more, reduce risk, or learn something genuinely valuable — not whether a model's output merely sounds smarter.

**14. Model/provider re-evaluation**, periodic, benchmarked against real WAG tasks — quality, reasoning, cost, latency, reliability, tool use, structured-output performance. Never an automatic switch just because a new model launched.

**15. Cost-aware learning.** More research/model calls are not automatically better. Deterministic code handles calculation/data movement; lower-cost models are used where appropriate; stronger models are reserved for where judgment genuinely justifies the cost — and whether the incremental intelligence justified the incremental cost gets tracked, not assumed.

**16. Security does not degrade with learning — the hardest rule in this section.** Agents may improve their analysis over time, but may never expand their own permissions, connectors, spending authority, messaging authority, or data access. Learning never overrides least privilege. A model may request additional capability; it may never grant it to itself. **This restates, for the learning/freshness context specifically, a principle already established in §24 above and in the Company Constitution's own AI-authority section (the narrow-tool/least-privilege rule codified 2026-08-10-and-earlier) — it is not a new grant of authority, and any actual Constitution amendment this section's language might eventually warrant goes through the existing amendment-proposal process, not a direct edit here.**

**17. The system must know when it's getting better.** Build toward a measurable Agent/Department Performance layer so Katie can eventually see which agents are improving, which are stagnant, which are wrong too often, which are expensive relative to value, which departments show measurable business impact, what methodologies changed, what new learning occurred, and which assumptions are stale.

**18. Chief of Staff Learning Brief.** The eventual Executive Chief of Staff function (§18, `WAG_EXECUTIVE_OPERATING_LAYER.md`) periodically surfaces: what WAG learned, what changed externally, which standards changed, which agents improved or declined, which assumptions were disproven, and what WAG should change next — Katie should never have to inspect individual agent logs to discover this herself.

**North Star for this section, stated plainly:** every agent should become more useful over time because it accumulates better WAG evidence, better external intelligence, better calibration, and better methodology — but that improvement must be evidence-backed, measured, versioned, auditable, reversible, and secure. **Never confuse "more autonomous" with "better."**

---

## 58. Data Integrity / Retrieval Completeness Standard (added 2026-08-11)

**The rule, stated once so it never needs restating per-connector: absence of retrieved evidence is never evidence of absence when the underlying retrieval was incomplete or failed.** "This search found nothing" and "this search couldn't finish" are different claims, and no WAG OS agent may collapse the second into the first.

**Origin, kept here as the reason this is now permanent, not hypothetical:** the original Gmail recovery pass silently dropped a real, substantive sponsorship thread (Pop&Boom/PolyBuzz) because a handful of per-message fetches failed and the code discarded them with no error, no count, and no signal — the response was indistinguishable from "no such message exists." Katie caught it only because she personally remembered the deal. The fix (`gmail-recovery-search/reliability.ts`, `WAG_REVENUE_RECOVERY_PASS_FINDINGS.md` §12) is connector-specific; this section is the general rule every future connector must follow.

**What every retrieval-based connector/tool must do, at minimum:**
1. Record how many items the underlying source reported as matching (e.g. Gmail's list-call count) — not just how many were successfully retrieved.
2. Record how many were successfully retrieved.
3. Record how many failed, and preserve their identifiers (not their content) so a targeted retry is possible without re-running a broader, less bounded search.
4. Distinguish a transient/technical failure (network error, API error, timeout) from a genuine non-match. A failure is never silently reclassified as "didn't match."
5. Retry transient failures a small, bounded number of times before giving up — never an unbounded retry loop, never a single silent attempt.
6. Expose a single, explicit completeness signal (e.g. `complete: true/false`) that every downstream consumer — human or agent — must check before treating a result set as exhaustive.
7. When `complete` is false, any agent or report built on that result must say so explicitly ("retrieval was incomplete — N items could not be confirmed") rather than asserting a negative ("no such record exists," "nothing was found").

**This is a data-integrity requirement, not a privacy or scope requirement.** Fixing retrieval completeness never means broadening what a tool is allowed to search, list, or access — Gate 1/Gate 2-style purpose-limiting boundaries (Email Intake Architecture, and any future connector's equivalent) stay exactly as scoped. Completeness and privacy are independent axes; this section governs only the first.

**Applies beyond Gmail.** Any future connector — Spotify/Apple Podcasts, an accounting-system integration, a licensing-platform API (§ new Licensing Opportunity Intelligence work), a broadcaster/distributor connector, or anything else that retrieves a bounded result set from an external source — inherits this standard by default. A connector that cannot show its match count, fetch count, failure count, and a `complete` signal is not finished, regardless of how well its happy path works.

---

## 59. Multi-Department Parallel Build Directive (added 2026-08-11)

**The reframe this section exists to record: WAG OS stops being scored by how much infrastructure it has and starts being scored by whether WAG's actual business is better because it exists.** Katie's own words, preserved as the standing success metric: *did WAG make better content, grow faster, create/recover more revenue, discover opportunities earlier, protect its IP, reduce wasted work, and make better decisions because this system exists?* Table/agent/doc counts are never the measure again.

**Departments do not wait for each other to fully finish before the next one starts.** Revenue & Partnerships proves its first real opportunity-discovery cycle (Consolidated Architecture §38), and in parallel — not after — the smallest executable versions of WAG Main Intelligence and WAG Podcast Intelligence get finished. **WAG Main's already exists in substantial, real form** (Retention/Packaging/Format specialists + Greenlight v3, `WAG_MAIN_INTELLIGENCE_LOOP_V1.md`, built earlier this session with real yt_raw_observations data behind it) — "prepare the smallest executable version" for Main means confirming/closing real gaps against this standard, not rebuilding from scratch. WAG Podcast has real architecture (`WAG_PODCAST_...` docs) but has not yet been checked against this same "smallest executable, real data, real recommendation" bar — that check is the actual next Podcast work, not a new build.

**The approved sequence after Revenue/Main/Podcast**, in order, one department proven before the next one starts in earnest (though early research/design work on the next may run in parallel with proving the current one, matching the Revenue/Main/Podcast parallelism above):

1. Marketing/Social/Audience Growth
2. Publishing/Books/Amazon
3. Licensing/IP/International
4. Legal/Rights/Contracts
5. Finance/AR/Deal Health
6. Collaborations/Talent/PR/Speaking
7. Opportunity/R&D Intelligence
8. The full Executive Chief of Staff layer — explicitly last, once enough real departments exist for it to actually synthesize something real rather than sit empty.

**Every department, without exception, follows the same loop** — this is the discipline that makes "don't build giant departments at once" actually enforceable rather than a slogan:

```
minimum useful specialists → real data → real assignment → real recommendation
→ Katie/manager evaluation → measured outcome → learning loop → expansion
```

No department skips straight to "expansion." Revenue's own build this session is the reference instance: schema proposed → corrected against real objections → migrated → three real workflows proven → methodology strengthened where a real gap was found → only now, a smallest-team activation proposal for Katie's review (Consolidated §38) — expansion has not happened yet, on purpose.

**Reuse shared infrastructure rather than duplicating agents/functions between departments** — restated as a cross-department rule, not just a within-Revenue one (Consolidated §38's Brand-Fit/Pricing/Relationship reuse pattern is the template: one real function, multiple departments calling it, never a private copy per department). Before any new department stands up its own version of something a prior department already built (evidence-source/provenance patterns, approval-ledger patterns, verification-classification patterns, brand-routing patterns), check whether the existing one extends cleanly first.

**Every department inherits these standing rules without restating them per-department:** evidence over guessing; first-party WAG data where available; current external research where required, sourced and tiered; continuous learning/freshness (§57); versioned methodologies; cross-department communication (§11-style routing, not silos); least privilege (§24, §58); Katie's approval for every consequential external action (§37, §34); auditable provenance for every material fact (§58, Revenue's `revenue_evidence_links` pattern); no silent autonomous business decisions, ever.

---

## 60. Permanent Company Learning/Memory/Execution Directive (recorded 2026-08-11, mapped, not expanded)

Katie's full 44-point directive is preserved verbatim in session history and governs all future department builds. Per her explicit instruction not to turn this into another long report, this section is a mapping, not a restatement: **no material conflict found with anything already built.** Much of it is already real, not net-new:

- **Memory-type taxonomy (canonical facts/predictions/outcomes/decisions/contradictions)** — already real Supabase tables (`canonical_facts`, `predictions`, `outcomes`, `decisions`, `decision_overrides`, `contradictions`), not yet documented as one named taxonomy. Documentation gap, not a build gap.
- **Absence-of-evidence rule, company-wide** — already §58, written this same session from the Gmail miss.
- **Freeze predictions before outcomes; decision journal; contradiction detection** — already §32 (Decision Memory) and the `predictions`/`outcomes` table split, which already structurally prevents rewriting a prediction after the fact.
- **Agent/manager evaluation; freshness/always-ahead routing; versioned methodologies; no agent self-modifying authority** — already §33, §18, §57.
- **Owned Audience as strategic asset; Venture Incubator; Competitive Business Intelligence; Production Ops; Capital Allocation** — already §11, §19, §17 + `competitors` table, §22, §20 respectively.
- **Central Experiment Portfolio** — already real (`WAG_EXPERIMENT_REGISTRY.md`).
- **Needs Katie sacred; AI prepares/Katie decides** — already §31, §37, and Revenue's §34/§37 (the most fully-built instance of this rule anywhere in WAG OS so far).

**Genuinely new, not yet named anywhere:** an explicit NOW/NEXT/WATCH/IGNORE execution-priority system for executive output; profitability/unit-economics framing distinct from raw revenue; scenario planning as a named function. Recorded here for future build, not built now.

**Wave sequencing (Revenue+Main+Podcast now, Marketing/Books/Licensing next, then Finance/Legal/Collaborations, then Opportunity/Incubator, executive layer last) supersedes and refines §59's ordering with the same substance** — both stay consistent; §59 is not contradicted, only sequenced into explicit waves.

Returning to the Revenue build.

## 61. Performance Management, Department Health & CEO Scorecard (recorded 2026-08-11, not built)

Katie's full addendum is preserved in session history. Mapped, not built, per her explicit instruction — real infrastructure to extend later already exists: `manager_reviews`, `predictions`, `outcomes`, `decision_overrides`, evidence tiers, `refresh_jobs`, `system_health`. No conflict with anything already recorded (§33 Agent/Manager Performance and §13 CEO Opportunity Queue already carry the same spirit; this addendum makes the mechanics explicit — status bands over false precision, decomposable scores, root-cause requirement on decline, anti-gaming discipline, a private/constructive CEO Operating Scorecard distinct from a department scorecard, and the standing rule not to score a department without enough real evidence yet).

**Binding constraint carried forward:** do not score Revenue, Main, or Podcast until each has enough real evidence to score honestly — activity counts (leads found, reports written, messages drafted) never substitute for outcomes. Bring this online progressively, per department, once real evidence exists — not now.

**Refined restatement received same day, same substance, sharper on three points — no new mapping needed, just noting what's sharper:** (1) the manager-report format is now explicit — `what changed → why → evidence → corrective action → owner → expected result → follow-up date`, not just "report decline"; (2) real per-department KPI lists given for Main, Podcast, Revenue, Books, Licensing, Marketing/Social — these become the actual scoring inputs once each department has evidence to score; (3) the CEO Operating Scorecard is explicitly *not* a personal grade — an operating-leverage diagnostic only (decision-queue age, delegation leverage, bottlenecks), never a judgment of Katie. Still not built. Still gated on real evidence existing first.

Returning to the Revenue build.

---

## Gap analysis (in progress) — organizational/risk functions not yet named in the org structure

**Status: fifteen items recorded 2026-08-11, all classified MISSING (not built, not partially built) against the org structure in §2. This is a running installment of the full gap analysis promised above, not the complete pass — the complete implemented/partial/planned/missing/duplicated/contradictory review against all 56 sections is separate, larger work, deliberately not done in the same pass as active connector/data engineering per Katie's explicit instruction not to let gap analysis become an infrastructure detour.** Do not build any of these now unless a current dependency requires it.

1. **Cast/Talent Management** — protects and *develops* the on-camera talent: contracts, likeness rights, age-appropriate work-hour/schedule protections, and (per Katie's 2026-08-11 addition) long-term development — strengths, hosting/speaking development, career growth, individual-vs-group opportunity, future leadership responsibility, continuity as the girls mature. Explicitly not reducible to scheduling or contracts alone.
2. **Crisis & Reputation Response** — what WAG actually *does* when something goes wrong (controversy, platform demonetization, an incident involving a minor on camera). Distinct from Brand Guardian, which is a decision-time lens preventing problems, not a response plan for when one happens anyway.
3. **Key-Person / Business Continuity** — keeps the company *operating* during disruption (e.g. Katie unreachable for an extended period). Distinct from the security incident-response runbook, which covers credential/system incidents specifically.
4. **Entity / Accounting Architecture** — accounting/entity separation appropriate to diversifying revenue (AdSense, Epic licensing, future sponsorships, future books), each with potentially distinct tax/entity treatment.
5. **International / Localization Strategy** — whether WAG content has real demand outside the US and how licensing/books/distribution would work internationally. Currently unaddressed anywhere in the directive.
6. **Talent Development & Succession** — see item 1; called out as its own line per Katie's explicit instruction not to fold it into scheduling/contracts. Long-term development and eventual leadership continuity are a distinct concern from the protective/legal side of Talent Management.
7. **Rights / Asset Chain-of-Title** — a durable record proving what WAG can actually use, license, and monetize: ownership, usage rights, licenses, restrictions, derivative rights, supporting agreements and proof. Increasingly load-bearing as books, licensing, archive reuse, sponsorship creative, podcast content, and future IP expansion all depend on provable rights, not assumed rights. Directly feeds `WAG_EDUCATIONAL_IP_LIBRARY.md`'s licensing fields — that document assumes chain-of-title exists somewhere; this is where it would actually live.
8. **Distribution / Platform Dependency Risk** — Strategy/Finance function tracking concentration risk across YouTube, Epic, Amazon, Spotify/Apple, sponsors, licensing partners, and future platforms/customers. Ties directly to the diversification and owned-asset strategy already named in the North Star (§39) and Owned Audience (§11) — this is the risk-side measurement that would tell WAG how exposed it actually is to any single dependency.
9. **Contracts / Agreement Operations** (§42) — an attorney-approved, versioned Agreement Library linked to the project/person/asset/deal each document covers, with rules for which approved document is required before recording, publishing, licensing, paying, or distributing anything.
10. **Licensing Operations** (§44) — licensing treated as its own business function with a full per-license field set (grantee, rights granted/retained, exclusivity, territory, term, renewal, payment, reporting), not folded generically into Rights/Chain-of-Title.
11. **Accounts Receivable / Collections** (§45) — a real AR system with a controlled escalation workflow (upcoming → due → reminder → overdue → follow-up → escalation → Katie/counsel), so no one has to remember who owes WAG money.
12. **Contract Obligations** (§46) — tracks both directions of every material agreement (what WAG owes vs. what WAG is owed) with deadline alerts before, not after.
13. **Contract Intelligence** (§47) — structured extraction from executed agreements with provenance to the source document/clause, where the executed agreement always wins over any AI extraction.
14. **Dubbing Experimentation** (§49) — a designed experiment (not a mass rollout) for testing YouTube's automatic dubbing on high-potential assets before any professional-dubbing investment decision.
15. **Payment / Deal Health** (§50) — executive visibility across money owed, overdue amounts, renewals, and deadlines, feeding Revenue Pulse (§7) and the Chief of Staff's Needs Katie queue (§1).

**Two items from the original eight are now substantially expanded by the §42-56 addendum, not superseded:** item 5 (International/Localization) is expanded in full by §48-49; item 7 (Rights/Chain-of-Title) is expanded in full by §43. Both original list entries stay as the short-form index; §43/§48-49 are the authoritative detail.

**The conceptual boundaries between adjacent items, preserved explicitly per Katie's instruction so future work doesn't blur them:**
- Brand Guardian protects the brand/content.
- Talent Management protects and develops the people.
- Crisis Management responds when something actually goes wrong.
- Business Continuity keeps the company operating during disruption.
- Legal/IP (§23) tracks risk and legal obligations generally.
- Rights/Chain-of-Title proves what WAG can actually use, license, and monetize specifically.

*See the end of this document (added 2026-08-11, same day) for the gap analysis against everything already built and the resulting proposed phased implementation sequence.*
