# YouTube Account Recovery & Security Checklist

Two channels matter here: **@TheWildAdventureGirls** (1.2M+ subscribers, the main brand asset) and **@WAGPodcast**. This is an operational checklist for Katie/the account owner to execute and keep current — Claude cannot see or set credentials, 2FA devices, or recovery codes, and this document never records any actual values, only what should exist and where to check it.

## Do this once, then review every 6 months

- [ ] **Confirm the channel is on a Brand Account**, not a personal Google account. Brand Accounts support multiple managers with different permission levels (Owner / Manager / Communications manager) — critical for continuity if one person is unavailable. Check: YouTube Studio → Settings → Permissions.
- [ ] **At least one backup Owner**, not just Katie alone. A second trusted person (co-founder, family member, or a dedicated ops email you control) should hold real Owner-level access, confirmed working (they can actually log in), not just invited.
- [ ] **2FA enabled** on every Google account with access to the Brand Account — not optional, not SMS-only if avoidable.
- [ ] **A hardware security key** (e.g., YubiKey) registered as a 2FA method on the primary owner's Google account, if the account's real value justifies it — YouTube/Google's Advanced Protection Program is built around this and is the strongest available option for high-value creator accounts.
- [ ] **Recovery email set and actually monitored** — verify by actually receiving a test recovery email, don't assume it's current.
- [ ] **Recovery phone set and actually working** — same test-it-for-real standard.
- [ ] **Google's account recovery codes generated and stored somewhere real** (a password manager, a physical safe) — not in this repo, not in any doc, not in email.
- [ ] **List every person/email with any access**, reviewed for anyone who shouldn't still have it (a former collaborator, an old freelancer). Remove stale access same-day when someone's role ends.
- [ ] **Emergency contact plan**: if the channel is compromised or locked out, who do you contact first (Google's creator support channel, if Katie has any real relationship/tier there), and who internally needs to know immediately.

## If something goes wrong

1. Don't panic-post publicly about the compromise until you've assessed real scope (a public "we got hacked" post can itself invite more attacks while you're still vulnerable).
2. Use Google's official account recovery flow immediately — https://support.google.com/accounts/answer/7682439 (YouTube-specific hijacking guidance) and https://g.co/recover.
3. If a video/channel setting was changed maliciously, document what changed (screenshot if possible) before it gets reverted — useful for Google support and for your own incident record.
4. Once recovered: rotate every credential and 2FA method on the account, not just the one that was compromised.
5. Log the incident in `INCIDENT_PLAYBOOK.md`'s pattern (what happened, when caught, what fixed it, what changes to prevent recurrence).

## Why this is ranked above the other operational gaps

Per Katie's explicit instruction: the main channel is one of the company's most valuable single assets, and account loss (not just a bad video or a moderation miss) is catastrophic and hard to reverse — unlike most of the other gaps on the tracker, this one is genuinely urgent regardless of current audience size.
