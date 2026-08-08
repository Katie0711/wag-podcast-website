# WAG Incident Playbook

Concise, on purpose. Hopefully never needed. Each scenario: what to do first, who to involve, what to check.

## Account compromise (YouTube, Beehiiv, Netlify, GitHub, Instagram/TikTok)

1. Confirm it's real before acting (a weird login alert isn't always a real compromise).
2. Use the platform's official recovery flow immediately — see `YOUTUBE_ACCOUNT_RECOVERY.md` for the YouTube-specific version.
3. Rotate every credential/2FA method on the affected account once recovered, not just the one that was hit.
4. Check for anything the attacker changed (channel settings, new admin users, published content, forwarding rules on email) before assuming it's fully clean.
5. Don't post publicly about it until you know real scope — a premature "we got hacked" post can invite more attacks.

## Hacked site / production outage

1. Check Netlify's deploy log first — is this a bad deploy (revert to the last known-good deploy immediately, Netlify supports one-click rollback) or a real intrusion?
2. If a real intrusion: rotate Netlify + GitHub credentials, check for unauthorized commits/deploys, check environment variables (`YOUTUBE_API_KEY`, Beehiiv keys, etc.) for tampering.
3. If it's "just" an outage (YouTube API down, Beehiiv down): confirm the site fails gracefully (per the standing "never show a broken/empty section" rule) rather than showing a broken page — if it doesn't, that's the actual bug to fix once things are stable.
4. Post a real status update if visitors are actually affected for more than a few minutes.

## Inappropriate submission (Questions Featured, or any future open-text interaction)

1. The lightweight moderation layer (`src/lib/moderation.ts`) flags likely-problem submissions for review — check flagged items first.
2. Never feature/use a submission that names a real, identifiable third party in a way that could be harmful, or that contains real PII (phone/email/address) without stripping it first.
3. If a submission itself suggests a real safety concern (not just "inappropriate" but indicating a teen may be in danger), that's a different, more serious path — use real judgment, involve a trusted adult/authority as appropriate, this isn't a content-moderation problem anymore.

## Sponsor issue (a sponsor's product/behavior becomes a real problem, or a disclosure was missed)

1. If disclosure was missed on live content: fix it immediately (add the disclosure), don't just quietly let it stand.
2. If the sponsor itself becomes a reputational risk: pause any further promotion of that sponsor while assessing; real decision on whether to remove existing content is Katie's call, weighing contractual obligations against brand risk.

## Public backlash involving content (a video/episode/post draws real negative attention)

1. Don't react publicly in the first hour — assess whether it's a real, spreading issue or a small, contained one.
2. If real: a short, honest, non-defensive public response beats silence or over-explaining. Teen audiences in particular respond badly to anything that reads as spin.
3. Involve Katie directly for anything involving one of the real teen hosts specifically — this is a judgment call territory, not a template-fillable one.

## Production outage (build/deploy failures, third-party API down)

1. Check the scheduled-rebuild GitHub Action logs and Netlify deploy log first — most build failures show a clear error there.
2. Both sites are built to fail gracefully when YouTube's API is briefly unreachable (empty result, not a broken page) — a genuine outage should degrade, not crash.
3. If it's a real extended outage of a third-party dependency (Beehiiv, Netlify, YouTube), there's often nothing to "fix" except wait — confirm the site itself still loads and doesn't show a broken state in the meantime.

---

*Keep this short. If an entry starts growing past a few lines, that's a sign it should become its own focused doc, not that this file should get longer.*
