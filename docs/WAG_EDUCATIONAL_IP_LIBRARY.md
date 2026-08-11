# WAG Educational Content & IP Library

**One executive question this module answers: which of WAG's older educational videos are live commercial assets worth building a book/licensing business around, and what evidence actually supports that?**

**Status: approved architecture, 2026-08-11. Not yet built.** Recorded here so this distinction survives past this conversation. The current YouTube ingestion work (era/cohort schema, `youtube-sync`) is deliberately built so it does not foreclose this system, per Katie's explicit instruction — but building the Library itself is out of scope for the current connector/data-foundation phase.

## The correction this document exists to prevent

A first pass at WAG Main's content-era handling treated everything published before the 2025-03-08 brand pivot as uniformly low-value "legacy" data, fit only for exclusion from current-strategy recommendations. Katie corrected this: **a substantial portion of that older catalog is a live, currently-monetized commercial and IP asset**, not dead history.

Specifically: many of WAG's older educational videos are licensed to Epic and renewed annually, and the educational catalog currently receives approximately **7 million quarterly views on Epic**. Many of these educational topics/properties are also candidates for conversion into books and broader publishing/IP opportunities.

## The architectural fix

A single video can be simultaneously:
- **Inappropriate evidence** for current teen-entertainment YouTube Greenlight (wrong audience, wrong format, wrong strategy era)
- **Highly relevant evidence** for Books/Publishing
- **Highly relevant evidence** for Licensing
- **Relevant** to IP/franchise development
- **Relevant** to evergreen/topic-demand analysis
- **Relevant** to Revenue/Opportunity intelligence

No single "era" label can hold all of that at once — being old and being valuable are independent facts. This is why the underlying schema (see `content_eras` and `video_cohorts` tables, migration `flexible_content_era_and_cohort_model`) separates two axes:

1. **Temporal era** (`content_eras`, one per video, auto-computed from `published_at`) — a pure fact about *when* something was published, used to scope current-strategy recommendations to `post_pivot_teen` by default.
2. **Cohort membership** (`video_cohorts`, many-to-many, deliberately assigned) — real business facts an API can never tell us on its own: which specific videos are the Epic-licensed educational catalog, which are book-conversion candidates, which are old off-brand horse content with no ongoing value. A video can carry any combination of cohort tags regardless of its era.

Old does not mean discard. Old-and-off-brand-for-YouTube does not mean old-and-worthless. The schema now makes room for both truths about the same video at once.

## The Educational Content & IP Library (future system)

Longer-term, WAG Brain should maintain a connected record, per asset, linking wherever data is legitimately available:

- Original WAG video/asset
- Educational topic/category
- Historical YouTube performance
- Evergreen performance
- Epic licensing status
- Epic title-level performance, if obtainable
- Licensing agreements/renewals/status
- Licensing revenue
- Other distribution/licensees
- Book-conversion opportunity
- Amazon/search demand
- Competitive publishing landscape
- Related WAG IP/assets
- Series/franchise potential
- Additional licensing/distribution potential

**Explicit evidentiary discipline Katie required:** do not assume Epic views equal book demand. Epic consumption is one strong evidence source that must be combined with publishing/search/market evidence before any book Greenlight decision — the same "don't fabricate causal certainty from correlation" discipline already standing for the Retention Operating System.

## The learning loop this eventually feeds

```
educational asset → licensing performance → audience/topic evidence
  → book/IP opportunity → market validation → Katie decision → launch
  → sales/licensing outcome → learning → next asset selection
```

Same shape as the WAG Main and WAG Podcast learning loops (idea → evidence → prediction → decision → outcome → postmortem), applied to the existing educational catalog instead of new production.

## What's actually built today vs. what this describes

**Built:** the `content_eras` / `video_cohorts` schema split that makes this possible later without another migration. Nothing else.

**Not built, deliberately deferred:** any actual cohort assignment (which specific videos are Epic-licensed — that requires real knowledge of licensing status, not inference from YouTube metadata), any Epic/licensing data connector, any book-demand or Amazon-market research pipeline, any of the Library's connected fields above. This is real, named future work under the master directive's Books/Publishing (§12) and Products/Commerce/Licensing (§13) functions, specific enough to warrant its own document rather than staying a paragraph inside those sections.

**Sequencing:** this does not derail current connector/data-foundation work. It becomes relevant once the historical backfill reaches WAG Main's pre-pivot catalog and Katie (or a future Books/Licensing specialist) is ready to start assigning real cohort tags to real videos.
