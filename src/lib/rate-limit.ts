type RateLimitRecord = {
  count: number;
  resetAt: number;
};

const rateLimits = new Map<string, RateLimitRecord>();

export function checkRateLimit(ip: string, limit: number, windowMs: number): boolean {
  const now = Date.now();
  const record = rateLimits.get(ip);

  if (!record || now > record.resetAt) {
    rateLimits.set(ip, { count: 1, resetAt: now + windowMs });
    return true; // allowed
  }

  if (record.count >= limit) {
    return false; // blocked
  }

  record.count += 1;
  return true; // allowed
}

// Clean up expired entries periodically to prevent memory leaks
setInterval(() => {
  const now = Date.now();
  for (const [ip, record] of rateLimits.entries()) {
    if (now > record.resetAt) {
      rateLimits.delete(ip);
    }
  }
}, 60000);
