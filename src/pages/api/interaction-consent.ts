// Generic Beehiiv consent-capture endpoint shared across every WAG
// interaction (Verdict kept its own /api/verdict-consent, already
// verified end-to-end and awaiting production approval -- not touched
// here). New interactions (starting with WAG Match) call this one
// instead of each getting a hand-rolled copy of the same subscribe+tag
// flow. `transactionalTag` is server-validated against a whitelist so
// the client can never write an arbitrary tag into Beehiiv.
import type { APIContext } from "astro";
import { checkRateLimit, rateLimitResponse } from "../../lib/rateLimit";

export const prerender = false;

const BEEHIIV_PUBLICATION_ID = "pub_5d446dad-4905-4dae-b67e-19192e2f63f0";
const BEEHIIV_API_BASE = "https://api.beehiiv.com/v2";

// Add this interaction's transactional tag here when it needs one --
// create the matching tag in Beehiiv first (see docs/ARCHITECTURE.md).
const ALLOWED_TRANSACTIONAL_TAGS = new Set(["wag-match", "favorite-segment", "questions-featured", "wag-awards", "seasonal-challenges"]);

// Zero-friction first-party segmentation (2026-08-07 interaction
// optimization pass, Data lens): the visitor's real choice (which host
// they matched, which nominee/segment they voted for) is worth a real,
// queryable Beehiiv tag, not just a generic "they participated" tag --
// no new question asked, this reuses the choice already made on the
// page. Maps transactionalTag -> real choice keys -> real Beehiiv tag.
// Each entry here requires the matching tag to already exist in Beehiiv
// (created 2026-08-07). Questions Featured is deliberately absent --
// its "choice" is free text, not a discrete option, so there's nothing
// safe to tag.
const CHOICE_TAGS: Record<string, Record<string, string>> = {
  "wag-match": { angelina: "wag-match-angelina", scarlett: "wag-match-scarlett", annabella: "wag-match-annabella" },
  "wag-awards": { ryan: "wag-awards-ryan", aiden: "wag-awards-aiden" },
  "favorite-segment": {
    "he-said-what": "favorite-segment-he-said-what",
    "squad-dares": "favorite-segment-squad-dares",
    "tell-me-the-truth": "favorite-segment-tell-me-the-truth",
    "3-second-roast": "favorite-segment-3-second-roast",
  },
};

export async function POST({ request, clientAddress }: APIContext): Promise<Response> {
  const ip = clientAddress || "unknown";
  const rl = await checkRateLimit(ip, "interaction-consent", 10, 3600);
  if (!rl.allowed) return rateLimitResponse();

  let body: {
    email?: string;
    transactional?: boolean;
    marketing?: boolean;
    itemKey?: string;
    transactionalTag?: string;
    choiceKey?: string | null;
  };
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid request body" }), { status: 400 });
  }

  const { email, transactional, marketing, itemKey, transactionalTag, choiceKey } = body;

  if (!email || !email.includes("@")) {
    return new Response(JSON.stringify({ error: "A valid email is required" }), { status: 400 });
  }
  if (!transactional && !marketing) {
    return new Response(JSON.stringify({ error: "At least one consent option must be checked" }), { status: 400 });
  }
  if (transactional && (!transactionalTag || !ALLOWED_TRANSACTIONAL_TAGS.has(transactionalTag))) {
    return new Response(JSON.stringify({ error: "Unknown interaction" }), { status: 400 });
  }

  const apiKey = import.meta.env.BEEHIIV_API_KEY;
  if (!apiKey) {
    return new Response(JSON.stringify({ error: "Beehiiv is not configured yet" }), { status: 503 });
  }

  const tags: string[] = [];
  if (transactional && transactionalTag) tags.push(transactionalTag);
  if (marketing) tags.push("insider-marketing-consent");

  // Only ever apply a choice tag alongside the real participation tag,
  // and only when it's a recognized real option for this interaction --
  // never trust the client to name an arbitrary Beehiiv tag directly.
  if (transactional && transactionalTag && choiceKey) {
    const choiceTag = CHOICE_TAGS[transactionalTag]?.[choiceKey];
    if (choiceTag) tags.push(choiceTag);
  }

  try {
    const createRes = await fetch(`${BEEHIIV_API_BASE}/publications/${BEEHIIV_PUBLICATION_ID}/subscriptions`, {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        reactivate_existing: true,
        utm_source: "thewagpodcast_site",
        utm_medium: transactionalTag ?? "insider",
        utm_campaign: itemKey ?? "wag_interaction",
      }),
    });

    if (!createRes.ok) {
      const errText = await createRes.text();
      console.error("Beehiiv subscription create failed:", createRes.status, errText);
      return new Response(JSON.stringify({ error: "Could not save your preferences" }), { status: 502 });
    }

    const created = await createRes.json();
    const subscriptionId = created?.data?.id;
    if (!subscriptionId) {
      console.error("Beehiiv response missing subscription id:", created);
      return new Response(JSON.stringify({ error: "Could not save your preferences" }), { status: 502 });
    }

    const tagRes = await fetch(
      `${BEEHIIV_API_BASE}/publications/${BEEHIIV_PUBLICATION_ID}/subscriptions/${subscriptionId}/tags`,
      {
        method: "POST",
        headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({ tags }),
      }
    );

    if (!tagRes.ok) {
      const errText = await tagRes.text();
      console.error("Beehiiv tag apply failed:", tagRes.status, errText);
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Beehiiv consent flow error:", err);
    return new Response(JSON.stringify({ error: "Could not save your preferences" }), { status: 502 });
  }
}
