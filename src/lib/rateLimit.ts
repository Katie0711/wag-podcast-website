// Shared fixed-window rate limiter for the public interaction endpoints
// (poll-vote, question-submit, interaction-consent). Real gap closed
// 2026-08-07: these endpoints accepted unauthenticated POSTs with zero
// abuse protection beyond basic length checks -- fine at zero real
// traffic, a real risk the moment a teen audience with public URLs
// finds them. One shared helper so every new interaction's API route
// gets this for free rather than reimplementing it.
import { getStore } from "@netlify/blobs";

interface RateLimitResult {
  allowed: boolean;
  remaining: number;
}

// One Blobs entry per (bucket, ip) pair; fixed window resets by simply
// treating an expired window as a fresh count rather than tracking a
// sliding average -- deliberately simple, not a token bucket, because
// blocking a burst of real votes for a few extra minutes after a false
// positive is a far smaller cost here than the complexity of getting a
// sliding-window implementation right.
export async function checkRateLimit(
  ip: string,
  bucket: string,
  limit: number,
  windowSeconds: number
): Promise<RateLimitResult> {
  const store = getStore("wag-rate-limits");
  const key = `${bucket}:${ip}`;
  const now = Date.now();

  const existing = await store.get(key, { type: "json" }) as { count: number; windowStart: number } | null;

  if (!existing || now - existing.windowStart > windowSeconds * 1000) {
    await store.setJSON(key, { count: 1, windowStart: now });
    return { allowed: true, remaining: limit - 1 };
  }

  if (existing.count >= limit) {
    return { allowed: false, remaining: 0 };
  }

  await store.setJSON(key, { count: existing.count + 1, windowStart: existing.windowStart });
  return { allowed: true, remaining: limit - existing.count - 1 };
}

export function rateLimitResponse(): Response {
  return new Response(JSON.stringify({ error: "Too many requests — try again in a few minutes" }), {
    status: 429,
    headers: { "Content-Type": "application/json" },
  });
}
