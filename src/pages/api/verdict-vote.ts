// Records one anonymous vote and returns the live aggregate. No account,
// no per-voter identity -- just an incremented count in Netlify Blobs.
// Client-side localStorage (see VoteWidget.astro) does the soft
// duplicate-vote prevention; this route trusts what it's given, an
// explicit, documented MVP tradeoff (see the Verdict MVP spec).
//
// The increment itself IS made safe against concurrent votes, though --
// read-then-write on a single JSON blob is a real lost-update race under
// concurrent requests (confirmed live: two simultaneous votes can read
// the same starting count and one write silently clobbers the other).
// Netlify Blobs' `onlyIfMatch` gives a real compare-and-swap primitive;
// retry on a failed match (someone else wrote in between) instead of
// trusting a bare get-then-set.
import type { APIContext } from "astro";
import { getStore } from "@netlify/blobs";

export const prerender = false;

const MAX_RETRIES = 5;

export async function POST({ request }: APIContext): Promise<Response> {
  let body: { voteKey?: string; choice?: string };
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid request body" }), { status: 400 });
  }

  const { voteKey, choice } = body;
  if (!voteKey || (choice !== "yes" && choice !== "no")) {
    return new Response(JSON.stringify({ error: "voteKey and a yes/no choice are required" }), { status: 400 });
  }

  const store = getStore("wag-verdict-votes");

  for (let attempt = 0; attempt < MAX_RETRIES; attempt++) {
    const existing = await store.getWithMetadata(voteKey, { type: "json" });
    const counts = (existing?.data as { yes: number; no: number } | undefined) ?? { yes: 0, no: 0 };
    counts[choice] += 1;

    const result = existing
      ? await store.setJSON(voteKey, counts, { onlyIfMatch: existing.etag })
      : await store.setJSON(voteKey, counts, { onlyIfNew: true });

    if (result.modified) {
      return new Response(JSON.stringify(counts), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }
    // Someone else wrote between our read and write -- re-read and retry.
  }

  return new Response(JSON.stringify({ error: "Could not record vote, please try again" }), { status: 409 });
}
