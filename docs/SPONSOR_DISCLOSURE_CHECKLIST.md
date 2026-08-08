# Sponsor Disclosure Checklist

Pull this out the moment a sponsor campaign is being *planned* — not after it's live. Especially important given the teen audience: the FTC has specifically increased scrutiny of influencer/creator marketing reaching minors, and "we forgot" is not a defense.

## Every real sponsored campaign, check all that apply

**YouTube**
- [ ] YouTube's own "Paid promotion" toggle enabled on any sponsored video (Content → video → Show More → Advertiser-Friendly / Paid Promotion).
- [ ] Clear, unambiguous verbal or on-screen disclosure within the first ~15-30 seconds — not just buried in the description. ("Thanks to [Brand] for sponsoring this video" said out loud, or an on-screen card, not just text.)
- [ ] Description includes a clear disclosure line (e.g., "This video is sponsored by [Brand]"), not just a link with no context.

**Podcast (audio + video)**
- [ ] Verbal disclosure in the episode itself when a segment is sponsored — same "would a listener understand this is paid" standard.
- [ ] Show notes/episode description on Spotify/Apple/YouTube all carry the same disclosure — don't disclose on one platform and not another.

**Website**
- [ ] Any sponsored page/section (e.g., a branded article, a sponsored interaction) carries a visible "Sponsored by" / "In partnership with" label near the top, not just in fine print.
- [ ] `SponsorSlot.astro` inventory (Verdict/Match/etc.) — confirm the sponsor's name/logo rendering is itself an implicit disclosure only if it's clearly labeled as a sponsor placement, not styled to look like organic content.

**Social posts (Instagram/TikTok/etc.)**
- [ ] Platform's own paid-partnership tag used (Instagram's "Paid partnership with," TikTok's "Sponsored" toggle) — not just a hashtag.
- [ ] If a hashtag is used as backup/reinforcement, it's `#ad` or `#sponsored` — placed early and clearly visible, not buried after ten other hashtags.

**Interactive sponsorships** (a sponsor attached to Verdict/Match/Awards/etc.)
- [ ] The interaction page itself labels the sponsor relationship clearly (already the `SponsorSlot.astro` pattern) — confirm the label reads as a real disclosure, not just a logo.
- [ ] Any related social/YouTube promotion of that interaction carries the same disclosure as above.

## The standard, plainly

If a reasonable teenager (or their parent) looking at the content wouldn't immediately understand "this is an ad," it's not disclosed well enough yet — regardless of whether the letter of the platform's toggle was technically used.

## Status

Template only — not yet exercised on a real campaign, since no sponsor has been sold yet. Use this checklist for the *first* real campaign as a live test of whether it's actually complete enough; refine after that real use, don't over-build it now.
