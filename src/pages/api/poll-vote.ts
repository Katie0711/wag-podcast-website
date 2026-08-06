// Generalized N-option version of verdict-vote.ts's real compare-and-swap
// pattern (Netlify Blobs `onlyIfMatch`/`onlyIfNew`, retry on lost update).
// verdict-vote.ts stays untouched (binary yes/no, already verified,
// Verdict is awaiting production approval) -- this is the shared route
// any future multi-option poll (Community Chooses, and beyond) reuses,
// so the CAS logic exists exactly once.
import type { APIContext } from "astro";
import { getStore } from "@netlify/blobs";

export const prerender = false;

const MAX_RETRIES = 5;

export async function POST({ request }: APIContext): Promise<Response> {
  let body: { pollKey?: string; choice?: string; validChoices?: string[] };
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid request body" }), { status: 400 });
  }

  const { pollKey, choice, validChoices } = body;
  if (!pollKey || !choice || !Array.isArray(validChoices) || !validChoices.includes(choice)) {
    return new Response(JSON.stringify({ error: "pollKey, choice, and validChoices are required" }), { status: 400 });
  }

  const store = getStore("wag-poll-votes");

  for (let attempt = 0; attempt < MAX_RETRIES; attempt++) {
    const existing = await store.getWithMetadata(pollKey, { type: "json" });
    const counts = (existing?.data as Record<string, number> | undefined) ?? {};
    for (const key of validChoices) counts[key] = counts[key] ?? 0;
    counts[choice] += 1;

    const result = existing
      ? await store.setJSON(pollKey, counts, { onlyIfMatch: existing.etag })
      : await store.setJSON(pollKey, counts, { onlyIfNew: true });

    if (result.modified) {
      return new Response(JSON.stringify(counts), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }
  }

  return new Response(JSON.stringify({ error: "Could not record vote, please try again" }), { status: 409 });
}
