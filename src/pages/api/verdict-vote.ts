// Records one anonymous vote and returns the live aggregate. No account,
// no per-voter identity -- just an incremented count in Netlify Blobs.
// Client-side localStorage (see VoteWidget.astro) does the soft
// duplicate-vote prevention; this route trusts what it's given, an
// explicit, documented MVP tradeoff (see the Verdict MVP spec).
import type { APIContext } from "astro";
import { getStore } from "@netlify/blobs";

export const prerender = false;

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
  const current = (await store.get(voteKey, { type: "json" })) as { yes: number; no: number } | null;
  const counts = current ?? { yes: 0, no: 0 };
  counts[choice] += 1;

  await store.setJSON(voteKey, counts);

  return new Response(JSON.stringify(counts), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
