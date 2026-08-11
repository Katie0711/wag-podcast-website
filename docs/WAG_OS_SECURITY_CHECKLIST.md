# WAG OS Security Checklist — living doc

Last real audit: 2026-08-10, against Katie's 15-point security directive (verbatim requirement list preserved in `WAG_OS_PHASE_0_BUILD_PROPOSAL.md` Section 54's context). This is a living document, not a one-time report — re-audit whenever WAG HQ's schema, auth flow, or deployment changes, and always before production deployment.

**Framing, stated once and meant throughout:** WAG HQ is not "unhackable." Nothing is. The goal is defense in depth — authentication, least privilege, monitoring, containment, and recovery — so that a single failure doesn't become a total compromise, and a compromise that does happen is detectable and recoverable. Every status below is a real, checked claim, not an assumption.

Status legend: **Done** (verified working) · **Partial** (real but incomplete) · **Not started** · **N/A at this stage** (genuinely not applicable until a later, named milestone).

---

## 1. Authentication — Partial

- Done: all non-public pages sit behind `src/app/(app)/layout.tsx`, which calls `supabase.auth.getUser()` server-side and redirects to `/login` if unauthenticated — enforced again at the edge by `src/proxy.ts` (Next.js middleware). No page relies on client-side-only gating.
- Done: no anonymous access — every WAG Brain table denies the `anon` role by default (RLS, see Section 2).
- Done: password reset/account recovery runs through Supabase Auth's own flow (email-based), not custom code — smaller attack surface than a hand-rolled reset flow.
- Not started: MFA (TOTP) for Katie's account. Supabase Auth supports it; not yet enabled. **Required before production per Katie's instruction — one-time setup, do before go-live.**
- Partial: session expiry uses Supabase Auth defaults (not yet reviewed/tightened for an internal tool holding sensitive data — default access-token lifetime is short-lived with refresh-token rotation, which is reasonable, but hasn't been deliberately reviewed against WAG HQ's sensitivity level).
- Not started: strong password policy enforcement beyond Supabase's 8-character minimum (currently only `minLength={8}` on the signup form). Combine with MFA before production rather than over-indexing on password complexity alone.

## 2. Authorization / least privilege — Done, with one real caveat

- Done: **every one of the 27 public-schema tables has RLS enabled** (verified via Supabase's `list_tables`, not assumed) with a single `authenticated_full_access` policy — default-deny for `anon`/`public`, full access for any signed-in user.
- **Real caveat, stated plainly:** today that policy grants any authenticated user full CRUD on everything, because there is exactly one real user (Katie). This is proportionate to current reality, not a finished access-control model. **Before a second human account exists (an employee, a contractor, a future hire), this must become real per-role RLS** — flagged since Phase 0, not new.
- Done: UI hiding is never the security boundary — every page's data fetch happens server-side against RLS-protected tables; there is no client-side-only "hide this button" pattern standing in for real access control.
- Done: sensitive writes (idea submission, signup, login, signout) are Next.js Server Actions, not client-side Supabase calls — they run in a trusted server context and are permission-checked by RLS regardless.
- N/A at this stage: "high-privilege AI workers receive only minimum data/tools" — no AI worker has autonomous write access yet (the Freshness Reviewer slice, the first one that will, is not yet built — see Section 51 of the Phase 0 doc). Its `refresh_jobs`-only write scope is designed in advance for exactly this reason.

## 3. Secrets — Done, one new real secret requirement as of 2026-08-10

- Done: `.env.local` contains only `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` — both intentionally public/publishable keys, safe in browser code because RLS (not key secrecy) is the real access-control boundary, per Supabase's own security model.
- Done: `.env.local` is git-ignored (confirmed by inspection, not assumed).
- **New as of 2026-08-10:** `SUPABASE_SERVICE_ROLE_KEY` is now a real, needed secret in WAG HQ's own server environment (not just inside Edge Functions, which already receive it automatically) — see Section 15. It is not yet present in `.env.local` (confirmed by inspection) or any hosting environment (no production deployment exists yet). Server-only code (`src/lib/supabase/admin.ts`, guarded by the `server-only` package so a client-side import is a build error, not just a convention) reads it via `process.env.SUPABASE_SERVICE_ROLE_KEY` — never `NEXT_PUBLIC_*`, never sent to the browser. **Action needed from Katie:** copy the `service_role` secret from Supabase Dashboard → Settings → API into `wag-hq/.env.local` as `SUPABASE_SERVICE_ROLE_KEY=...` (local dev) and, once WAG HQ has a real hosting deployment, into that platform's environment variable store — same never-in-chat pattern as `GOOGLE_CLIENT_ID`/`GOOGLE_CLIENT_SECRET`.
- Done: no other service-role key, database password, signing secret, or model-provider API key exists anywhere in the `wag-hq` repo today, committed or not.
- Rotation procedure — see Section 15 (written concretely now that real secrets requiring rotation exist: `GOOGLE_CLIENT_SECRET`, connector refresh tokens, `SUPABASE_SERVICE_ROLE_KEY`).
- Not started: production secrets manager — no production deployment exists yet. When hosting goes live, secrets belong in that platform's environment variable store, never in the repo.

## 4. Server-side privileged execution — N/A at this stage, correctly designed in advance

- No workflow with elevated (bypass-RLS/service-role) database access exists yet. The one planned — the Freshness Reviewer Supabase Edge Function — is explicitly scoped in the Phase 0 doc to run server-side only, with a narrow write shape (`refresh_jobs` rows), never from client code.
- Standing rule, recorded before it's needed: **no service-role key is ever used from a Next.js client component or exposed via `NEXT_PUBLIC_*`.** If a future workflow genuinely needs elevated access, it runs in an Edge Function or Server Action, never in the browser.

## 5. Input/output security — Partial

- Done: all current mutations (idea submission, login, signup) are Server Actions receiving `FormData`, validated by required HTML attributes client-side and by Supabase's own constraints (NOT NULL, enum checks, the `gate0_required_for_greenlight` CHECK, etc.) server-side — not trusting client-side validation alone.
- Done: no raw SQL string concatenation anywhere in the app — all queries go through the Supabase JS client's parameterized query builder, which is injection-safe by construction.
- Done: React's JSX escapes all rendered text by default; no `dangerouslySetInnerHTML` exists anywhere in `wag-hq` today (verified by grep) — no unescaped-output XSS surface currently exists.
- Not started: no file upload exists yet, so file-upload validation is N/A until the Asset Registry gains real upload functionality (currently `assets` is a metadata table with no upload path built).
- N/A at this stage: "treat model output as untrusted input before it triggers an action" — no AI worker has action-triggering output yet. This is the exact design constraint the Freshness Reviewer's narrow write shape (one `refresh_jobs` row, no free-form SQL, no dynamic table access) is built to satisfy when it ships.

## 6. AI-specific security — N/A at this stage, principle recorded in advance

No AI worker currently executes autonomously or ingests external content (web pages, emails, transcripts) — all current AI-authored data (video ideas, Greenlight scores) was written by Claude Code in this session, a trusted context, not by an unattended agent processing hostile input. Recorded now as a hard requirement for when that changes:

- External/retrieved content (scraped pages, transcripts, emails) must never be concatenated into a system prompt in a way that lets it override an employee's actual instructions, permissions, or the Company Constitution — system instructions and retrieved content must stay in separate, clearly-labeled channels.
- Tool/function-calling permissions must be enforced in code (by role, by table, by write scope), never by trusting what the model says it's allowed to do.
- Any consequential action (publishing, spending money, external communication) requires an explicit approval gate — this already exists structurally for the one consequential workflow that exists (`greenlight_decisions` requires `gate_0_pass=true` at the database level, enforced by a CHECK constraint, not just app logic).
- Every tool call and external action an AI worker takes must log to `activity_log` — the table exists; nothing writes to it yet because no autonomous worker exists yet.

## 7. Security headers / browser hardening — Done (except HSTS, deliberately deferred)

- Done: `next.config.ts` now sets Content-Security-Policy, X-Frame-Options (`DENY`), X-Content-Type-Options (`nosniff`), Referrer-Policy (`strict-origin-when-cross-origin`), and Permissions-Policy (camera/mic/geolocation/interest-cohort all disabled). Verified live via a direct `fetch()` header check against the running dev server, not just code review.
- CSP's `script-src` is dev-mode-permissive (`'unsafe-eval'`, required for React's dev-only debugging/HMR) and automatically tightens in production builds (`NODE_ENV === "production"` branch) — confirmed the console error this caused in dev is the documented, harmless React dev-tools warning, not a real break.
- Deliberately not set yet: HSTS. Add only once Netlify hosting is real and HTTPS is confirmed live — setting it before that risks locking out a not-yet-HTTPS deployment, per standard guidance.

## 8. Logging and detection — Partial

- Done (schema-level): `activity_log` exists with the right shape to record actor, action, and outcome. Not yet wired to authentication events specifically — Supabase Auth has its own internal auth event logs (available in the Supabase dashboard), which is where failed-login monitoring currently lives by default; not yet surfaced inside WAG HQ.
- Not started: no explicit failed-authorization-attempt logging beyond what RLS + Supabase's own logs capture implicitly (an RLS-denied query doesn't currently get a distinct WAG HQ-side log entry).
- Not started: alerting. No threshold-based or anomaly-based alerting exists yet — appropriate to build once there's real traffic/usage to alert against, not before.

## 9. Rate limiting / abuse protection — Not started

- Supabase Auth has built-in rate limiting on its auth endpoints (platform default) — not a WAG-specific control, but real. No additional application-level rate limiting exists on WAG HQ's own Server Actions yet.
- N/A at this stage: model endpoint cost limits — no model endpoint is called from WAG HQ yet. `cost_budgets`/`cost_approval_requests` tables already exist and are designed for exactly this before the Freshness Reviewer ships.

## 10. Database security — Done, three real findings fixed, one accepted limitation

- Done: RLS audit performed via Supabase's security advisor (`get_advisors`, type `security`) — not a manual guess. Found and fixed: two functions (`enforce_katie_only_constitution_activation`, `record_outcome`) with mutable `search_path`, a real (low-severity but genuine) function-injection surface — fixed via `ALTER FUNCTION ... SET search_path = public, pg_temp` (migration `security_fix_function_search_path`, applied 2026-08-10).
- **Done, real finding fixed 2026-08-11:** `greenlight_calibration` (a reporting view added since this section was first written) was flagged by `get_advisors` as `SECURITY DEFINER`. Investigated rather than suppressed: the view runs a plain 4-table `LEFT JOIN` with no privileged logic, but its owner (`postgres`) has `BYPASSRLS`, and the `anon` role had a direct `SELECT` grant on it — meaning the public anon key could read it and bypass the `authenticated_full_access` RLS policy protecting the same data on all 5 underlying tables (`video_ideas`, `greenlight_decisions`, `predictions`, `outcomes`, `decision_overrides`). Live, not theoretical. Fixed: `ALTER VIEW ... SET (security_invoker = true)` plus `REVOKE ALL ... FROM anon`. Re-ran `get_advisors`: the `security_definer_view` ERROR is gone.
- **Done, verified via advisor re-check (2026-08-10):** Supabase Auth's leaked-password protection is now enabled — Katie toggled it on in Authentication → Policies. Confirmed by re-running `get_advisors`: the `auth_leaked_password_protection` warning is gone.
- Accepted, not fixable: `pg_net` (enabled for the Freshness Reviewer's scheduled trigger) is installed in the `public` schema — Postgres rejects `ALTER EXTENSION pg_net SET SCHEMA`, a known limitation of this specific extension, not something a migration can work around without risking the working cron job. Low severity, left as a documented, accepted finding rather than force a risky fix.
- Done: automated backups — Supabase org upgraded to Pro (Katie's own decision, confirmed via API), native daily backups now active; independent WAG-owned encrypted export proven working end-to-end (2026-08-10, see Section 13) with a 90-daily + 12-monthly retention policy, kept as a second, non-provider layer.

## 11. Dependency / supply-chain security — Partial

- Done: `package-lock.json` exists and is committed — reproducible installs.
- Done: dependency footprint is intentionally small — Next.js, React, `@supabase/ssr`, `@supabase/supabase-js`, Tailwind. No unnecessary packages added.
- Not started: no automated dependency vulnerability scanning (e.g. `npm audit` in CI, Dependabot/Renovate) configured yet — real pre-deployment task once GitHub hosting is live (see Section below).

## 12. Production/staging separation — Not started (single environment today)

- Today there is exactly one Supabase project (`wag-brain`) and it holds real company data — there is no separate dev/staging database yet. This is an accepted, named gap for Phase 1's scale (one user, real data from day one, by Katie's own instruction to migrate real intelligence as the first corpus) — not something to fix by inventing a parallel fake environment right now. Revisit once a second real user or a riskier AI-write workflow (the Freshness Reviewer) is about to touch this same database.

## 13. Backups / recovery — Done, two independent layers real and verified

- Done: source code has full version history — `wag-hq` is pushed to GitHub (`Katie0711/wag-hq`, private).
- **Done, verified via API (2026-08-10):** the `wag-brain` Supabase organization is now on the **Pro** plan — Katie's own decision, made directly with Supabase, not something built or requested by this session. Pro includes native daily backups provider-side. Confirm exact retention window/schedule on Settings → Database → Backups in the Supabase dashboard — not asserted here without having looked at that screen directly.
- **Done, proven end-to-end (2026-08-10):** independent, WAG-owned backup layer — `.github/workflows/wag-brain-backup.yml`, daily `pg_dump` → gzip → AES-256 encrypt → committed to the private repo's `backups/daily/` (and `backups/monthly/`, see retention below), success/failure logged to `activity_log`/`refresh_jobs` and visible on WAG HQ's System Health page. Kept deliberately even with Pro's native backups active, because Katie's standing instruction was "do not rely solely on provider-side persistence" — a second, non-Supabase copy is the actual point. Took 6 real triggered runs to prove clean: run #1 proved the missing-secret failure path fails safely with no secrets in logs; runs #2-4 failed on a wrong DB password in the secret (Katie's fix); run #5 failed on a genuine workflow bug (`pg_dump` v16 vs Supabase's Postgres 17 — client version mismatch), fixed in the workflow code; run #6 succeeded cleanly. The encrypted output file's header bytes were inspected (without decrypting) and confirmed as a valid, non-corrupted OpenSSL `Salted__` blob.
- **Done (2026-08-10):** retention policy set by Katie and recorded in WAG Brain (`retention_policies`, `data_class = 'wag_brain_backups'`) and here: **90 rolling daily backups** (`backups/daily/`) **+ 12 monthly backups** (`backups/monthly/`, first successful backup of each UTC month, preserved independently of the daily window) — giving roughly one year of long-term recovery points once the monthly window fills. Pruning is implemented directly in the workflow and runs **only** after a new backup has successfully dumped, compressed, encrypted, and been committed+pushed in that same run; any earlier failure calls the workflow's `fail()` helper and exits before the prune logic is ever reached, so a failed run can never delete a good backup. Pruned files are `git rm`'d (recoverable via git history), not hard-deleted.
- Done: documented recovery procedure for the WAG-owned export — written directly in the workflow file's header comment (decrypt → gunzip → restore to a scratch database first). Supabase's own Pro-tier restore procedure is documented in their dashboard, not duplicated here.
- **Not started, deliberately:** automated restore testing for either layer. Per Katie's explicit 2026-08-10 instruction, this stays manual/undone until the system is mission-critical — the documented rule stands that any future restore test goes to an isolated scratch database first, never directly over production.

## 14. Security review before production deployment — gate, not yet run

This is the explicit go/no-go checklist before WAG HQ becomes reachable outside `localhost`. **Not yet run — no production deployment exists yet.** When it's time:

- [ ] Re-run RLS policy audit (`get_advisors`, type `security`) — confirm zero unresolved findings.
- [ ] Confirm no secrets in the repo (`git log -p` scan, not just current-state check) or in the deployed browser bundle.
- [ ] Test unauthenticated access to every route directly (confirm the proxy redirect holds for all of them, not just the ones manually clicked through).
- [ ] Test cross-role access once more than one real role/account exists.
- [ ] Review response headers against Section 7's list.
- [ ] `npm audit` / dependency vulnerability scan.
- [ ] Confirm `activity_log` is capturing real events, not just schema-ready.
- [ ] Confirm a backup exists and its restoration has been tested at least once.
- [ ] Confirm MFA is enabled on Katie's account.
- [ ] Confirm leaked-password protection is enabled.

## 15. YouTube connector security hardening — Done, 2026-08-10

Full production security gate on the three (now four) YouTube connector Edge Functions, run against Katie's explicit 15-point spec before authorizing expansion to WAG Podcast. Every fix below was actually deployed and, where it doesn't require a secret this session structurally cannot hold (see the one open item), live-tested against the real deployed functions — not verified by code reading alone.

**1. OAuth CSRF/replay protection — Done, live-tested.** `state` is a `crypto.randomUUID()` nonce recorded in a new `oauth_state_nonces` table (10-minute expiry) by `youtube-oauth-start`, never the brand name itself as it was before this hardening pass. `youtube-oauth-callback` consumes it with a single atomic `UPDATE ... WHERE nonce = $1 AND consumed_at IS NULL AND expires_at > now()` — a concurrent or replayed request with the same state can never both succeed. Live-tested: missing state → rejected; unknown/garbage state → rejected; a manually-expired nonce (inserted directly to simulate the 10-minute window elapsing) → rejected; a valid nonce used twice → first use consumed it, second use correctly rejected as "expired or already used." `oauth_state_nonces` has RLS enabled with **no policies** (deliberate deviation from this repo's usual `authenticated_full_access` convention) — only the service role can ever read or write it.

**2. `youtube-oauth-start` no longer a bare public URL — Done, live-tested.** Previously a URL Katie pasted directly into her browser, reachable by anyone who found it (Google's own test-user gate was the only real stop). Now requires `Authorization: Bearer <SUPABASE_SERVICE_ROLE_KEY>` and returns JSON (`{authorize_url}`) instead of issuing a raw redirect — it does not touch a browser at all anymore. `verify_jwt=true` at the platform level rejects non-JWT bearers before the function even runs; the function's own code additionally requires an *exact* match against the real service-role secret, so a syntactically-valid-but-wrong-role JWT (tested live with the project's own `anon` key) is still rejected. The only legitimate caller is a new WAG HQ Server Action (`src/app/(app)/connectors/actions.ts`, `connectYoutube`), itself gated behind Katie's authenticated WAG HQ session (re-checked inside the action, not just trusted from the page shell) — so the real authorization boundary is "logged into WAG HQ as Katie," enforced by Supabase Auth, not a guessable URL.

**3. `youtube-sync` never anonymously callable — Done, live-tested.** Identical server-to-server gate as above. Live-tested: no auth header → 401 (platform-level); `anon` key as bearer → 401 (function-level exact-match check). Legitimate callers: the WAG HQ "Sync now" Server Action (manual, admin-session-gated, passes `triggered_by="manual:<email>"`) or a future scheduled job using the same pattern the WAG Brain backup workflow already uses (`pg_net`/`pg_cron` with the real secret) — not yet scheduled, deliberately, since a proven manual run comes first.

**4. Callback treats all input as untrusted — Done.** `youtube-oauth-callback` remains the one genuinely public endpoint (Google's redirect carries no auth header) but validates, in order: state (above) → brand derived server-side from the nonce row, never a URL param → Google's token exchange itself succeeding → granted scope is exactly the expected read-only pair (see point 7) → authorized channel matches the expected handle AND its immutable channel ID (see point 12). Nothing is persisted until all five pass.

**5. Token isolation — Done.** Refresh tokens live only in Supabase Vault (pgsodium-encrypted), reachable only through two `SECURITY DEFINER` functions (`store_connector_secret`/`get_connector_secret`, plus a new `delete_connector_secret` for disconnect) with `execute` revoked from `public`/`anon`/`authenticated` and granted only to `service_role`. Confirmed via `get_advisors` and direct grant inspection. Refresh/access tokens are never included in any HTTP response body (browser-facing or otherwise), never `console.log`/`console.error`'d, and never stored in any ordinary table — verified by reading every response and log line across all four functions, not assumed.

**6. Service-role isolation — Done, confirmed by direct inspection.** `src/lib/supabase/client.ts` and the browser-facing parts of the app use only `NEXT_PUBLIC_SUPABASE_ANON_KEY`. `get_publishable_keys` (the Supabase tool available to this session) structurally cannot return the service-role key — confirmed by calling it. `.env.local` was read directly and contains no service-role value. The new `src/lib/supabase/admin.ts` is guarded by the `server-only` npm package, making an accidental client-side import a build failure rather than a runtime leak.

**7. Least privilege / scope assertion — Done, new.** `youtube-oauth-callback` and `youtube-sync` both now parse Google's returned `scope` field and reject outright (discarding any token, logging `SCOPE_MISMATCH`) if it contains anything beyond `youtube.readonly` and `yt-analytics.readonly` — checked at initial grant and on every subsequent refresh, not just once.

**8. Revoke/disconnect + fail-closed — Done, new function.** Built `youtube-disconnect` (same server-to-server gate): revokes the refresh token **at Google** (`oauth2.googleapis.com/revoke`, not just forgetting it locally), deletes the Vault secret, marks the connector `revoked`/`inactive`, logs to `activity_log` — succeeds in that end state even if the token was already dead at Google's end. Separately, `youtube-sync` now detects Google's `invalid_grant` response specifically and auto-revokes the connector on the spot; every sync path checks connector status first and refuses to run against anything not `active`, so a dead token is never retried indefinitely.

**9. Rate limiting / abuse controls — Partial, honestly scoped.** `youtube-oauth-start`, `youtube-sync`, and `youtube-disconnect` no longer have a meaningful public abuse surface at all (anonymous calls are rejected before any real work happens). The one unavoidably-public endpoint, `youtube-oauth-callback`, now has a basic guard: a new `oauth_callback_failures` table records every failed validation, and a burst of 20+ failures in a 5-minute window trips a 429 before any further processing. This is a real, honest guard — not a distributed WAF or per-IP limiter, which is out of scope for what this session's tooling can build. Documented as a known limitation, not overclaimed.

**10. Audit trail — Done.** `activity_log` now records: OAuth initiation (nonce issued), authorization success, reauthorization (distinguished from first-time), authorization failure (with sanitized reason), scope mismatch, channel-binding mismatch, disconnect (with Google-revoke outcome), sync initiation/success/partial/failure, and auto-revocation — every entry attributes an actor (`Katie (via WAG HQ)`, `YouTube Sync Connector (manual:<email>)`, etc.) and a result, never a secret value. `yt_sync_log` continues to hold the sync-specific detail (videos synced, API calls used).

**11. Error sanitization — Done.** Every failure path was rewritten to log/store only fixed, whitelisted phrases or HTTP status codes — never a raw upstream response body, a Google error description, a stack trace, or any token/secret. Verified by reading every `console.error`/`activity_log`/`oauth_callback_failures` write across all four functions.

**12. Channel binding by immutable ID — Done, new.** `yt_channels.youtube_channel_id` (permanent, not the display handle) is now bound to a connector **at authorization time**, not left until first sync. A later authorization that resolves to a different channel ID is refused outright (checked again on every sync run too) — never silently swapped in. The handle-based check (`customUrl` contains `TheWildAdventureGirls`) is kept as an additional pre-filter, not the sole binding mechanism.

**13. Credential rotation — documented below, not executed** (rotating a working credential risks breaking production; Katie's instruction was to document and test the *procedure* safely, not rotate live):
   - **`GOOGLE_CLIENT_SECRET`:** Google Cloud Console → APIs & Services → Credentials → the OAuth client → generate a new client secret (Google allows multiple active secrets on one client simultaneously, so the old one keeps working during rollover). Update the `GOOGLE_CLIENT_SECRET` value in Supabase Edge Function secrets (same UI Katie already used). Confirm a real sync still succeeds, *then* delete the old secret from Google Cloud Console. No connector re-authorization needed — refresh tokens aren't tied to a specific client secret version.
   - **A connector's refresh token:** rotates naturally on every re-authorization (Google issues a new one each time `prompt=consent` is used, which this flow always sets). To force a rotation without waiting for expiry/revocation: call `youtube-disconnect` for that brand, then re-run the authorize flow. No code change needed.
   - **`SUPABASE_SERVICE_ROLE_KEY`:** legacy `service_role` keys are tied to the project's JWT secret and are disruptive to rotate (would invalidate all issued JWTs at once). Supabase's newer named "secret keys" system (`sb_secret_...`, see the "Migrating to publishable and secret API keys" guide) supports independent, non-disruptive rotation per named key and is the recommended path *before* this becomes urgent — not yet migrated, flagged here as the correct next step rather than done reactively during an incident.

**14. Security tests actually run, live, this session:**
   - `youtube-oauth-start` / `youtube-sync` / `youtube-disconnect` with no `Authorization` header → 401 (platform-level `verify_jwt`).
   - Same three with a syntactically valid but wrong-role JWT (`anon` key) → 401 (function-level exact-match check) — proves the two-layer defense, not just the platform gate.
   - Callback with missing `state` → rejected.
   - Callback with an unknown/garbage `state` → rejected.
   - Callback with a manually-expired nonce → rejected.
   - Callback with a valid nonce used twice → first use consumed (real Google token-exchange failure on a fake code, as expected), second use rejected as already-used.
   - Missing `GOOGLE_CLIENT_ID`/`GOOGLE_CLIENT_SECRET` → graceful `ok:false`, not a crash (pre-existing behavior, re-confirmed).
   - **Not yet live-tested:** a real "wrong channel authorized" run (requires a second real Google account) and a real successful authenticated call through `youtube-oauth-start`/`youtube-sync` (requires `SUPABASE_SERVICE_ROLE_KEY` in WAG HQ's own server env, which this session cannot obtain or set itself — see Section 3). Both are verified correct by full code-path reading, not live execution; flagged honestly rather than claimed as tested.

**15. Connector health states in WAG HQ — Done, v1.** `src/app/(app)/connectors/page.tsx` now computes and displays `healthy` / `stale — no recent sync` / `last sync failed` / `scope mismatch` / `revoked` / `not connected` from existing `connectors` columns (`status`, `revocation_status`, `last_successful_sync`, `last_failed_sync`, `last_failure_reason`) plus a 48-hour staleness threshold. Connect/Reconnect, Sync now, and Disconnect buttons call the new Server Actions. **Not yet interactively verified in-browser** (WAG HQ's local dev session expired mid-session from an unrelated network issue, requiring Katie's login to resume) — confirmed to compile and serve `200` server-side before that happened, not confirmed by clicking through.

**Independent automated check (`get_advisors`, type `security`), run after all fixes:** the three new tables (`connector_credentials`, `oauth_callback_failures`, `oauth_state_nonces`) correctly show "RLS enabled, no policy" as an INFO-level finding — this is the *intended* design (service-role-only access), not a gap. Two **unrelated, pre-existing** findings surfaced incidentally: a `SECURITY DEFINER` view (`greenlight_calibration`, from the earlier Greenlight Manager work, not touched by this review) and `pg_net` installed in the `public` schema (a known, previously-accepted limitation, see Section 10) — flagged to Katie separately, not fixed here since both predate and are outside the scope of this specific review.

## 16. Ongoing security — Not started (correctly, nothing to run cadence against yet)

Once live, add to a recurring cadence (monthly is a reasonable default to propose to Katie, not yet confirmed with her): dependency/security review, stale credential/key review, access review, RLS regression check, security event monitoring, backup/recovery review. The **Security Center inside WAG HQ** Katie asked for (Section 17) is a natural extension of the `system_health` table that already exists and already renders honestly (see `src/app/(app)/system/page.tsx`) — add a `Security` component row once there's real signal to show (auth health, RLS audit status, failed-login count, last backup, dependency vulnerability count, secret/key age). Do not add a decorative "Security: OK" row before there's a real, checked signal behind it — that would violate the same honesty standard the rest of `system_health` already holds to.

## 17. Standing security principles — Katie's permanent directive, 2026-08-11

Also codified in the Company Constitution draft (still `v0.1`/`draft`, not activated) so it inherits automatically for every future employee, connector, and department. Honest status per item, not just the principle:

1. **Least privilege everywhere.** Partial-to-done: the `connectors` table starts empty by design and the YouTube connector requests only two read-only scopes, asserted on every grant and refresh (Section 15). No general capability/permission layer exists yet — see the architecture note below.
2. **Secrets are never business data.** Done: verified this session by a full source-tree grep and a full git-history scan (`git log --all -p`) for the service-role key and any `SERVICE_ROLE_KEY=` pattern — zero hits, ever. GitHub Actions secrets (backup workflow) and Supabase Edge Function secrets are the only two secret stores in use; nothing has ever been copied into a WAG Brain table.
3. **Environment separation.** Not started — see Section 12. Single environment today, by design at this scale, revisit before a second real user or a riskier AI-write workflow goes live.
4. **Privileged action approval.** Partial: real today for the one workflow that has it (`greenlight_decisions` requires `gate_0_pass=true` at the database level, a CHECK constraint) and for the YouTube connector (every privileged Edge Function requires the exact service-role secret, and the only path to it is a WAG HQ Server Action gated behind Katie's authenticated session). Not yet a general-purpose approval-gate system.
5. **Rotation and expiration tracking.** Not started as a real system — rotation *procedures* are documented (Section 15, point 13) but nothing tracks "when was this last rotated" or warns before expiry. `system_health`'s existing `key_expires_at` pattern for Anthropic API keys (visible on the System Health page) is the right model to extend to `GOOGLE_CLIENT_SECRET`, connector refresh tokens, and the service-role key — not yet done.
6. **Dependency/security patching.** Not started — no `npm audit` in CI, no Dependabot/Renovate configured (see Section 11).
7. **Audit + anomaly alerts.** Partial: the data exists (`activity_log`, `oauth_callback_failures`, `yt_sync_log` all capture real events with real detail). Nothing surfaces it proactively yet — "visible" today means checking WAG HQ, not receiving a push/email/Slack alert. No delivery mechanism exists.
8. **Backups plus restore testing.** Partial, per Section 13: two independent, verified-writing backup layers exist. Restore has never been tested against either. Deliberately deferred by Katie's own earlier instruction — still open, not forgotten.
9. **Prompt-injection containment.** N/A at this stage, principle recorded in advance — no research agent reading external content (webpages, transcripts, email) exists yet. When one ships, it must follow the same untrusted-input separation already documented in Section 6.
10. **Data minimization and retention.** Not started as an explicit policy. The one concrete retention rule that exists is the WAG Brain backup window (90 daily + 12 monthly, Section 13); nothing yet defines retention for `oauth_state_nonces` (already self-limiting: rows expire after 10 minutes and are never cleaned up automatically — a real, small, low-severity gap), `oauth_callback_failures`, `yt_sync_log`, or raw research artifacts.
11. **Incident response.** Done — see Section 18.
12. **Security ownership.** Done, and technically enforced, not just written: Katie is the human authority; the `WAG Chief of Staff` employee row is the administrator/monitor. Constitution activation is gated by a real database trigger (`enforce_katie_only_constitution_activation`) requiring `approved_by` to identify Katie — found during this session's review to be *defined but never attached to the table* (a real gap: nothing was technically stopping activation without Katie's name, only the fact that no one had run that query). Fixed 2026-08-11: the trigger is now attached and live-tested (a rollback-wrapped `UPDATE ... SET status='active'` without Katie's name correctly raised an exception).

**Architecture: narrow tools, not raw credentials.** Every future connector should follow the pattern already used for YouTube: the model/agent layer calls a narrow, purpose-built function (`youtube-sync`, not "here is the refresh token, go call Google yourself") and never sees the underlying credential. No AI employee's context, prompt, or tool-call history has ever contained the service-role key, a Google client secret, or a connector refresh token — verified this session, not assumed. The future centralized capability/permission layer (recorded in the Constitution, not yet built) should formalize this as the default for every worker, replacing today's single shared service-role key with narrowly-scoped, per-worker credentials as real workers are added.

## 18. Incident response — Done, real runbook

A simple, real procedure — not aspirational, references mechanisms that actually exist today:

**1. Revoke a compromised or misbehaving connector.** Call `youtube-disconnect` (service-role-authenticated, same as any other privileged call) with the affected `brand`. It revokes the refresh token at Google (`oauth2.googleapis.com/revoke`), deletes the Vault secret, and marks the connector `revoked`/`inactive` — logged to `activity_log` automatically. For a future non-YouTube connector, the same three steps (revoke upstream, delete the stored credential, mark revoked) apply even before a dedicated disconnect function exists — do it by hand via `execute_sql` + the provider's revoke endpoint if needed, and log it manually to `activity_log`.

**2. Rotate a key.** Follow the documented procedure in Section 15, point 13 (`GOOGLE_CLIENT_SECRET`, connector refresh tokens, `SUPABASE_SERVICE_ROLE_KEY`). Always rotate by adding the new credential and confirming it works *before* removing the old one, never the reverse.

**3. Disable a worker.** Set the relevant row in `employees` to `status = 'inactive'` (or equivalent) and confirm no Edge Function or scheduled job still checks for `active` before running — if one doesn't check status yet, that's itself a finding to fix as part of the response, not after.

**4. Lock Katie's account (or any future account).** Supabase Dashboard → Authentication → Users → the account → Ban/disable. This is the one incident-response step that requires dashboard access, not WAG HQ or SQL access, by design — an attacker who compromised WAG HQ itself shouldn't be able to lock the real owner out further, but also shouldn't be able to prevent Katie from locking *them* out via the dashboard.

**5. Restore from backup.** Documented in `.github/workflows/wag-brain-backup.yml`'s header comment: decrypt → gunzip → restore to a scratch database first, verify, only then consider anything further. Never restore directly over production. (Restore testing itself is still open — Section 16, item 8.)

**6. Review the audit log.** `activity_log`, `oauth_callback_failures`, and `yt_sync_log` together cover authorization events, sync runs, and abuse attempts. `oauth_state_nonces` shows exactly which authorization flows were ever initiated and whether they were consumed.

**7. Notify Katie.** Immediately for anything in categories 1–4 above (revocation, rotation, disabling a worker, account lock) — these are exactly the "something suspicious happened" cases this procedure exists for. Do not wait to bundle it into a routine report.

## 19. Follow-up hardening — Done, 2026-08-11, approved by Katie

Two of Section 17's items moved from "documented" to "technically enforced, live-tested" the same day, plus three further standing rules were added:

- **Constitution immutability, enforced.** `enforce_constitution_immutable_once_active` trigger on `company_constitution`: once a row's `status = 'active'`, its `content`/`version` can never be edited — only superseded by a new versioned row. Live-tested inside a rolled-back transaction (insert a test row as `active`, attempt to edit its content, confirmed rejected) without touching the real draft row.
- **Regression checks, callable on demand.** `run_security_regression_checks()` — a `service_role`-only function returning pass/fail for the six invariants this session's fixes depend on: `greenlight_calibration` has `security_invoker=true`, `anon` has no grant on it, `oauth_state_nonces`/`connector_credentials` have RLS enabled with zero policies, the three `connector_secret` RPCs stay revoked from `anon`/`authenticated`, and the constitution activation trigger stays attached. All six passed on first run. Re-run this after any future migration that touches these objects, and periodically as part of the Section 16 cadence once one exists.
- **Service-role key reaffirmed as backend-infrastructure-only** and the centralized capability/permission layer reaffirmed as binding future direction, not aspiration — both now in the Constitution's standing rules, not just this checklist.
- **Three new permanent requirements**, also in the Constitution: environment separation (production data/secrets never casually used in dev/test), security escalation rules (repeated auth failures, scope/permission changes, connector revocation, unusual privileged activity, abnormal AI/API spend, backup failures, and channel/account mismatches all must surface to Katie + Chief of Staff automatically, not sit in a log), and session security (expiry, forced re-auth before highly privileged actions, ability to revoke all active WAG HQ sessions) — none of the three has real tooling built yet; recorded as binding requirements for when WAG HQ's session/auth layer gets its next real pass.

## 20. YouTube connector credential architecture upgrade — Done, 2026-08-11

Replaced the custom Bearer-comparison auth (Section 15, points 2–3) with Supabase's official service-to-service mechanism after Katie asked whether the newer `sb_secret_...` key system was available and safe to use instead of the legacy project-wide `service_role` key.

**What changed:** `youtube-oauth-start`, `youtube-sync`, and `youtube-disconnect` now use the `@supabase/server` SDK — `Deno.serve(withSupabase({ auth: "secret:wag_hq_backend" }, handler))` — with `verify_jwt = false` (required: new secret keys aren't JWTs, and the platform's JWT gate rejects them before the handler runs otherwise). The caller (WAG HQ's `src/lib/supabase/admin.ts`) sends the dedicated key on the `apikey` header, never `Authorization`. `ctx.supabaseAdmin` replaces the hand-built admin client inside each function. `youtube-oauth-callback` is untouched — it was never part of this caller-auth path and must stay public for Google's redirect.

**Precise about what this buys, not more:** `wag_hq_backend` is still a full-privilege, RLS-bypassing secret key — identical database power to the legacy `service_role` key. The improvement is isolation and lifecycle, not reduced privilege: (1) only functions that explicitly declare `auth: "secret:wag_hq_backend"` accept it — a new Edge Function does not inherit acceptance automatically; (2) it's independently nameable, rotatable, and revocable from the Supabase dashboard without touching any other credential; (3) Supabase's secret keys are rejected outright if presented from a browser (matched on `User-Agent`), a protection the legacy key never had; (4) a leak here only forces rotating this one key.

**Live security tests, all four run against the real deployed functions:**
- No credential at all → `401 INVALID_CREDENTIALS`.
- The project's real publishable key (`sb_publishable_...`, wrong mode) on `apikey` → `401 INVALID_CREDENTIALS`.
- An unrecognized secret-shaped value (`sb_secret_notarealkey...`) on `apikey` → `401 Invalid API key`.
- The legacy `anon` JWT on `Authorization: Bearer` (the old auth style) → `401 INVALID_CREDENTIALS`, confirming the old path is fully closed, not just deprioritized.
- All three functions spot-checked, not just one.
- Every rejection response was inspected — none echoes the presented credential back. Combined with the source-tree grep and full git-history scan from Section 15, point 6, this confirms the credential never surfaces in a response, log, or error message.
**Fifth test completed, 2026-08-11, once Katie created the real key and saved it to `wag-hq/.env.local` (`SUPABASE_SECRET_KEY`, never pasted into chat):** the real `wag_hq_backend` key on `apikey` against `youtube-oauth-start` → `200 {"ok":true,...}`, confirming acceptance. The key was read from `.env.local` into a shell variable and passed directly to `curl`'s header — the value itself was never echoed, logged, or displayed at any point, satisfying the "never display or log the credential" requirement for this test run.

## 21. First authenticated WAG Main sync — Done, 2026-08-11

Immediately after the acceptance test above, ran `youtube-sync` for `WAG_MAIN` for real, same never-display credential handling. Result: `{"ok":true,"brand":"WAG_MAIN","videos_synced":10,"analytics_ok":true,"api_calls_used":5}`.

Verified server-side (not just trusting the response):
- `yt_sync_log`: one row, `status = "success"`, `videos_synced = 10`, `api_calls_used = 5`, ~5 seconds start-to-finish.
- `connectors`: `last_successful_sync` updated, `status` still `active`, `revocation_status` still `active`.
- `yt_channels`: bound to `UC-nIJ_VwZtHwNNQ0_O15Wpg` ("The Wild Adventure Girls") — first real channel-identity binding recorded.
- `yt_videos`: 10 real, current videos ingested (titles, publish dates, durations) — most recent published 2026-08-09.
- `yt_raw_observations`: 10 rows from `youtube_data_api` (views/likes/comments) and 7 from `youtube_analytics_api` (watch time/retention) — the other 3 videos are too recently published for YouTube Analytics to have processed yet, not a sync error.

An earlier attempt at this same sync call returned a client-side connection failure (curl exit / HTTP 000) before reaching Supabase — confirmed via `yt_sync_log` and `connectors` showing no trace of that attempt before retrying, so no duplicate observation rows or accidental double-submission occurred. Consistent with this project's known transient network flakiness; not a functional issue with the connector.

**Permanent rules recorded (also in the Constitution):** `wag_hq_backend` is backend infrastructure only, never handed to an AI employee, manager, or connector; it must never enter model context, browser/client code, logs, GitHub, or WAG Brain records; only explicitly-declared Edge Functions accept it; the centralized capability/permission layer remains the long-term answer for AI-employee authority, not this key.

**Gap-closing order, Katie's explicit sequencing (2026-08-11):** MFA first → production deployment security + dev/staging/prod separation → real alerting/delivery → dependency vulnerability scanning + patch cadence → credential rotation/expiration tracking in WAG HQ → scratch restore test of the independent backup. One at a time, each verified working before moving to the next — not all six in parallel. Update this doc and the incident-response runbook as each one lands. Resume WAG Main first-party data/Greenlight work once the highest-risk items are closed, rather than letting security work stall the business indefinitely.

## 22. WAG Main connector integrity guarantees + WAG Podcast connector — Done, 2026-08-11

**Integrity migration (`youtube_connector_integrity_guarantees`):** added `UNIQUE(connector_id)` on `yt_channels`, `UNIQUE(brand_id, service)` on `connectors`, a trigger blocking any `UPDATE` to `yt_channels.youtube_channel_id`/`connector_id` once set (permanent binding enforced at the DB layer, not just in `youtube-sync`'s own re-check), and a trigger blocking `UPDATE`/`DELETE` on `yt_raw_observations` entirely (true append-only raw evidence, from any role including `service_role`). All 5 live-tested via a single `DO` block per guarantee (rebind attempt, raw-observation update/delete, duplicate-channel insert, duplicate-connector insert) — every one correctly rejected, confirmed by the absence of an unhandled exception at the top level, and re-confirmed no data was mutated by the test itself. Fixed a `function_search_path_mutable` WARN the two new trigger functions introduced (`SET search_path = public, pg_temp`) — advisors clean afterward except the 3 known INFO items and the accepted `pg_net` WARN.

**Fixed a real null-vs-zero bug** in `youtube-sync`'s Data API metrics: `viewCount`/`likeCount`/`commentCount` were defaulting missing fields to `0` (e.g. `commentCount` is absent, not zero, when a creator disables comments) — now preserved as `NULL` when genuinely absent, verified against a real video's raw `statistics` object showing the difference between a true `"0"` string and an absent field.

**Idempotency verified live:** re-ran the WAG Main sync a second time — `yt_videos` stayed at 10 rows / 10 distinct `youtube_video_id`s (no duplicates), `yt_channels` stayed at 1 row, `yt_raw_observations` grew from 17 to 34 (a correct new time-series point, not an overwrite), `yt_sync_log` correctly appended a second row.

**WAG Podcast connector registered and authorized:** `connectors` id=3, `brand_id=2`, reusing the same Google OAuth client (`client_id` confirmed identical to WAG Main's in both authorize URLs — no duplicate Google Cloud app created), same `withSupabase({auth:'secret:wag_hq_backend'})` hardened functions, same nonce/scope-assertion/channel-binding logic. Katie authorized `@WAGPodcast` (not `@TheWildAdventureGirls`) — channel binding verified server-side *before* running any sync, per her explicit "do not proceed if the channel identity is wrong": `yt_channels` id=3 → `youtube_channel_id = UCtpzIWaE0ymZkF8DZKaL4mw`, `channel_title = "WAG Podcast"`, distinct from WAG Main's `UC-nIJ_VwZtHwNNQ0_O15Wpg` — a mismatch would have been rejected outright by the `UNIQUE(youtube_channel_id)` constraint even if every application-layer check had somehow failed.

**First WAG Podcast sync:** `{"ok":true,"brand":"WAG_PODCAST","videos_synced":10,"analytics_ok":true,"api_calls_used":5}`. Verified server-side: 10 real videos, 20 raw observations (10 Data API + 10 Analytics API — all 10 had Analytics data available this time, unlike WAG Main's first run), `connectors.last_successful_sync` updated, `status`/`revocation_status` both `active`.

**Complete separation confirmed, not just assumed:** 2 `yt_channels` rows, 2 distinct `youtube_channel_id` values, 2 `connectors` rows, 10 WAG Main videos joined only through WAG Main's channel, 10 WAG Podcast videos joined only through WAG Podcast's channel, **zero** cross-brand channel-ID collisions (an explicit SQL check, not an inference).

**Security regression checks re-run after all of the above** (`run_security_regression_checks()`) — all 6 still pass: `greenlight_calibration` security_invoker + anon-grant-revoked, `oauth_state_nonces`/`connector_credentials` RLS-no-policy, connector-secret RPCs revoked from anon/authenticated, Constitution activation trigger attached.

## 23. WAG Main Analytics API expansion + a real self-introduced gap, found and fixed — 2026-08-11

**Expansion:** `youtube-sync` now also captures subscribers gained/lost (bundled into the existing core query), traffic sources (`insightTrafficSourceType`), Shorts/Live/VOD segmentation (`creatorContentType`), and per-video audience retention curves (`elapsedVideoTimeRatio`) — each tagged with its own distinct `metric_source` value so provenance stays precise about which report produced it, not blended into a generic bucket. `metric_source`'s CHECK constraint was expanded to allow these new values plus `youtube_reporting_api` (reserved for the not-yet-built Reporting API ingestion).

**Real bug found and fixed:** the Data API metrics coercion pattern already fixed for the vertical slice held; a new, separate bug was found live-testing the expansion — the traffic-source query had a hardcoded `maxResults=200`, which would silently truncate results on any batch larger than ~10 videos. Fixed to scale with batch size.

**Real platform limit found, not assumed:** a 10-video sync completes in ~60s. A single Edge Function invocation hit Supabase's 150s idle timeout at larger batch sizes (confirmed via a clean `504 IDLE_TIMEOUT` JSON response, not just a dropped connection) even after parallelizing every row-processing loop with bounded concurrency (`mapWithConcurrency`, limits tuned per call site: 15-20 for DB-bound work, 5 for the per-video external retention-curve calls, which are the genuine bottleneck — Google's retention report has no batch mode). Two subsequent same-size attempts also failed, but a plain connection-level failure rather than a clean timeout response — traced to Katie's own internet connectivity dropping mid-session, not a further code issue. This is recorded honestly as two distinct, real findings, not conflated: **(1)** ~50 videos is close to the practical single-invocation ceiling for this data shape today; **(2)** transient local network conditions can look identical to a platform timeout in a client-side symptom and must be distinguished by checking server-side state, not assumed from the client error alone.

**Self-introduced security gap, found by the standing advisor-scan discipline and fixed the same pass:** the `content_eras`/`video_cohorts` migration (era/cohort architecture, see `WAG_EDUCATIONAL_IP_LIBRARY.md`) created both tables without RLS. `get_advisors` flagged this as two ERROR-level findings immediately after the migration — `anon` (the public, unauthenticated key) held full INSERT/SELECT/UPDATE/DELETE/TRUNCATE grants on both tables with RLS disabled, a live gap, not theoretical. Fixed in the same session by bringing both tables in line with the project's existing pattern (see `yt_videos`): RLS enabled, single `authenticated_full_access` policy, `anon` excluded. Also fixed a `function_search_path_mutable` WARN on the new `classify_video_era` function, same class of gap already fixed on earlier trigger functions. Re-ran `get_advisors` — clean except the 3 known INFO items and the accepted `pg_net` WARN. This is exactly why the advisor scan runs after every migration, not just the security-focused ones.

**Historical backfill, real numbers as of this pass:** 50 real WAG Main videos ingested, spanning 2026-06-21 to 2026-08-09 (~7 weeks), all correctly classified `post_pivot_teen`. Coverage: 46/50 with core analytics (subscribers/watch-time/retention-%), 46/50 with traffic-source breakdown, 46/50 with content-type segmentation, 28/50 with full retention curves (some very recent videos have no retention data yet — YouTube's own processing lag, not a sync defect, consistent with the same pattern seen on the first WAG Main/WAG Podcast syncs). Idempotency re-confirmed: `yt_videos` stayed at exactly 50 distinct `youtube_video_id`s across repeated attempts, including the two that failed to return a response.
