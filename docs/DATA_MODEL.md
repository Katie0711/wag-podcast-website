# WAG Data Model (Conceptual)

This is a conceptual entity model, not an implementation spec — it describes how WAG's content and business objects relate to each other so future architecture strengthens the same model instead of creating isolated data. See `ARCHITECTURE.md` for how these are actually implemented today (mostly as Astro Content Collections with frontmatter fields, not a graph database — see the note at the bottom).

## Core entities

- **Video** — a real published YouTube video. The root source most other entities trace back to.
- **Episode** — a podcast episode (thewagpodcast.com). Usually corresponds to one or more Videos.
- **Host** — Angelina, Scarlett, or Annabella. Appears across Videos, Episodes, girl profile pages, and Interactions.
- **Guest** — a real person appearing in an Episode (e.g. "Ryan" on Guys Answer Questions).
- **Investigation** — a real WAG mystery/cryptid/haunted-location deep-dive (wildadventuregirls.com). Traces back to one or more Videos.
- **Location** — a real physical place tied to an Investigation or a Speaking event.
- **Animal / Species** — relevant to Wild Adventure Girls' adventure/discovery content; not yet a first-class entity in the current schema, named here for the future Discovery Platform.
- **Article** — a written piece (Story, product review, companion article to an Episode or Investigation).
- **Interaction** — Verdict, Match, Favorite Segment, Questions Featured, WAG Awards, Seasonal Challenges, Community Chooses, WAG Predicted It, Adventure Map. Each ties back to a real Episode, Video, or Investigation it's drawn from — never invented independent of one.
- **Quiz / Poll / Award / Challenge** — sub-types of Interaction, not separate top-level entities.
- **Discovery** — the future Discovery Platform's unit of content (see `FUTURE_OPPORTUNITIES.md`); not yet implemented.
- **Sponsor** — a real or potential brand partner. Ties to Sponsor inventory slots on Interactions and to `/sponsor/` / `/brand-partnerships/`.
- **Product** — a reviewed product (Viral Product Testing Hub, product review pages).

## How they relate (the real chain, not hypothetical)

A single real event tends to fan out like this:

```
Video → Episode/Investigation → Interaction (Verdict/Quiz/Poll)
                               → Article (companion piece)
                               → FAQ entries (AEO)
                               → Beehiiv tag/segment (audience capture)
                               → Cross-links (Adventure Map pin, girl profile, Speaking entry)
```

Every new piece of content should be able to answer: which Video/Episode/Investigation does this trace back to? Which Host/Guest is involved? What Interaction, if any, does it feed or draw from? What does it link to, and what links back?

## Design principle for new schemas

When adding a new content-collection field or frontmatter key, prefer one that could later support:
1. **Relationship** — does this let the entity point at (or be pointed at by) another real entity, rather than just holding a flat string?
2. **Rollup** — could this value later feed a metric (view count, completion rate, sponsor impression) without redesigning the field?

Don't add speculative fields to serve a graph or dashboard that doesn't exist yet (see `FUTURE_OPPORTUNITIES.md` → Knowledge Graph, Internal CEO Dashboard) — this is a lens for decisions already being made, not a new project.

## Current implementation reality (as of 2026-08-07)

There is no graph database and no unified schema across both repos. What exists: Astro Content Collections per type (`girls`, `videos`, `series`, `investigations`, `speaking`, `episodes`, `clips`, `verdicts`) with frontmatter fields that already encode most of the real relationships above (e.g. an episode's `topics` array, an investigation's linked video IDs, a Verdict's source episode). The gap between this and a true knowledge graph is a queryable relationship layer, not the underlying facts — most of the real data already exists, just inside separate collections rather than one connected model.
