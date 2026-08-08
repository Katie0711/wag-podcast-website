// Lightweight, honest safety net for free-text submissions from a teen
// audience -- deliberately NOT a moderation platform. Flags for human
// review; never auto-rejects. A submission that trips a flag still
// saves normally (see question-submit.ts) -- this only changes how it
// sorts in Katie's manual review, per her explicit "preserve human
// judgment rather than blindly rejecting legitimate teen conversations"
// instruction. Real, teen-relevant conversations (dating, bodies,
// mental health, family conflict) should never be silently dropped.

// Not exhaustive, not an NLP classifier -- a short, honest list of
// unambiguous terms worth a human's attention before anything is used
// publicly. Expand only with real, observed submissions, not
// speculative coverage.
const FLAG_WORDS = [
  "fuck", "shit", "bitch", "asshole", "nigger", "faggot", "retard",
  "kill yourself", "kys", "rape",
];

// Common PII shapes a teen might paste in without thinking about it
// (a phone number so a guest can "actually text her back", a full
// email, a street address). Flagged so Katie can strip it before
// anything is ever read on camera or featured publicly -- not blocked
// at submit time, since rejecting the message entirely would just
// lose a real question over an honest mistake.
const PHONE_RE = /(\+?1[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/;
const EMAIL_RE = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/i;
const ADDRESS_RE = /\b\d{1,5}\s+\w+(\s+\w+){0,3}\s+(street|st|ave|avenue|road|rd|drive|dr|lane|ln|blvd|boulevard)\b/i;

export type ModerationFlags = {
  flagged: boolean;
  reasons: string[];
};

/** Real, honest screening -- flag for review, never silently reject. */
export function screenSubmission(text: string): ModerationFlags {
  const lower = text.toLowerCase();
  const reasons: string[] = [];

  if (FLAG_WORDS.some((w) => lower.includes(w))) reasons.push("language");
  if (PHONE_RE.test(text)) reasons.push("possible-phone-number");
  if (EMAIL_RE.test(text)) reasons.push("possible-email");
  if (ADDRESS_RE.test(text)) reasons.push("possible-address");

  return { flagged: reasons.length > 0, reasons };
}
