// Stores a real fan-submitted question for the real Guys Answer Questions
// format. Each submission gets its own Netlify Blobs key (timestamp +
// random suffix) rather than a shared growing list -- avoids any
// read-modify-write race entirely, unlike the vote/poll counters which
// genuinely need CAS because many people increment the same key.
import type { APIContext } from "astro";
import { getStore } from "@netlify/blobs";
import { checkRateLimit, rateLimitResponse } from "../../lib/rateLimit";
import { screenSubmission } from "../../lib/moderation";

export const prerender = false;

export async function POST({ request, clientAddress }: APIContext): Promise<Response> {
  const ip = clientAddress || "unknown";
  const rl = await checkRateLimit(ip, "question-submit", 5, 3600);
  if (!rl.allowed) return rateLimitResponse();

  let body: { question?: string; name?: string };
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid request body" }), { status: 400 });
  }

  const question = body.question?.trim();
  const name = body.name?.trim().slice(0, 60) || null;

  if (!question || question.length < 5) {
    return new Response(JSON.stringify({ error: "A real question is required" }), { status: 400 });
  }
  if (question.length > 500) {
    return new Response(JSON.stringify({ error: "Keep it under 500 characters" }), { status: 400 });
  }

  const store = getStore("wag-featured-questions");
  const key = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

  // Lightweight safety net, not a moderation platform: flags for
  // Katie's manual review, never rejects. A flagged submission still
  // saves and still counts as received -- see moderation.ts for why.
  const { flagged, reasons } = screenSubmission(`${question} ${name ?? ""}`);

  try {
    await store.setJSON(key, {
      question,
      name,
      submittedAt: new Date().toISOString(),
      moderationStatus: flagged ? "flagged" : "unreviewed",
      moderationReasons: reasons,
    });
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Question submit error:", err);
    return new Response(JSON.stringify({ error: "Could not save your question, please try again" }), { status: 502 });
  }
}
