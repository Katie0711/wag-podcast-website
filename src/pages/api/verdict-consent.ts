// Creates/updates a real Beehiiv subscription and applies only the tag(s)
// for the box(es) actually checked. Checking the transactional box alone
// applies just "verdict" -- never "insider-marketing-consent" -- so a
// one-time reveal request never silently becomes a marketing subscriber.
// Real Beehiiv v2 API shapes confirmed against developers.beehiiv.com
// before writing this (tags are NOT settable at subscription-creation
// time; they require a separate POST to the subscription's own
// /tags endpoint, by tag name).
import type { APIContext } from "astro";

export const prerender = false;

const BEEHIIV_PUBLICATION_ID = "pub_5d446dad-4905-4dae-b67e-19192e2f63f0";
const BEEHIIV_API_BASE = "https://api.beehiiv.com/v2";

export async function POST({ request }: APIContext): Promise<Response> {
  let body: { email?: string; transactional?: boolean; marketing?: boolean; voteKey?: string };
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid request body" }), { status: 400 });
  }

  const { email, transactional, marketing, voteKey } = body;

  if (!email || !email.includes("@")) {
    return new Response(JSON.stringify({ error: "A valid email is required" }), { status: 400 });
  }
  if (!transactional && !marketing) {
    return new Response(JSON.stringify({ error: "At least one consent option must be checked" }), { status: 400 });
  }

  const apiKey = import.meta.env.BEEHIIV_API_KEY;
  if (!apiKey) {
    // No key configured yet (e.g. local dev before the env var is set on
    // Netlify) -- fail honestly rather than silently pretending success.
    return new Response(JSON.stringify({ error: "Beehiiv is not configured yet" }), { status: 503 });
  }

  const tags: string[] = [];
  if (transactional) tags.push("verdict");
  if (marketing) tags.push("insider-marketing-consent");

  try {
    // Step 1: create (or reactivate) the subscription. Tags are
    // deliberately NOT sent here -- the create endpoint doesn't accept
    // them; a second call applies them below. `send_welcome_email:false`
    // for a transactional-only signup would be the ideal default, but
    // Beehiiv sends its welcome/confirmation email regardless when
    // double opt-in is on for the publication -- noted, not solved here.
    const createRes = await fetch(`${BEEHIIV_API_BASE}/publications/${BEEHIIV_PUBLICATION_ID}/subscriptions`, {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        reactivate_existing: true,
        utm_source: "thewagpodcast_site",
        utm_medium: "verdict",
        utm_campaign: voteKey ?? "wag_verdict",
      }),
    });

    // TEMP DEBUG (2026-08-06): surfacing diagnostics in the response body
    // itself (not just console.log) because Netlify's Preview Server log
    // viewer is down ("logs are currently unavailable"). No key material
    // included -- only presence/length and Beehiiv's own response shape.
    // Diagnosing a real bug: the route returns ok:true but no subscriber
    // ever lands in Beehiiv. Remove once root-caused.
    const debug: Record<string, unknown> = {
      apiKeyPresent: !!apiKey,
      apiKeyLength: apiKey?.length ?? 0,
      createStatus: createRes.status,
      createStatusText: createRes.statusText,
    };

    if (!createRes.ok) {
      const errText = await createRes.text();
      debug.createErrorBody = errText;
      return new Response(JSON.stringify({ error: "Could not save your preferences", debug }), { status: 502 });
    }

    const createdText = await createRes.text();
    debug.createBody = createdText;
    let created: any;
    try {
      created = JSON.parse(createdText);
    } catch {
      return new Response(JSON.stringify({ error: "Could not save your preferences", debug }), { status: 502 });
    }
    const subscriptionId = created?.data?.id;
    if (!subscriptionId) {
      return new Response(JSON.stringify({ error: "Could not save your preferences", debug }), { status: 502 });
    }

    // Step 2: apply exactly the tag(s) that match what was actually
    // checked -- never both, never assumed.
    const tagRes = await fetch(
      `${BEEHIIV_API_BASE}/publications/${BEEHIIV_PUBLICATION_ID}/subscriptions/${subscriptionId}/tags`,
      {
        method: "POST",
        headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({ tags }),
      }
    );

    debug.subscriptionId = subscriptionId;
    debug.tagStatus = tagRes.status;
    if (!tagRes.ok) {
      debug.tagErrorBody = await tagRes.text();
      // The subscription itself succeeded; tagging failed. Still report
      // success to her (the email capture worked), but surface it in
      // debug so this doesn't go unnoticed.
    }

    return new Response(JSON.stringify({ ok: true, debug }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Beehiiv consent flow error:", err);
    return new Response(JSON.stringify({ error: "Could not save your preferences" }), { status: 502 });
  }
}
