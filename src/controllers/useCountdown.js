import { useEffect, useState } from 'react';

// ─────────────────────────────────────────────────────────
// CONTROLLER
// Рахує live зворотний відлік до targetIso. Не знає нічого
// про розмітку — лише віддає числа. View сам вирішує, як їх показати.
// ─────────────────────────────────────────────────────────
export function useCountdown(targetIso) {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const target = new Date(targetIso).getTime();
  const diff = Math.max(target - now, 0);
  const pad = (n) => String(n).padStart(2, '0');

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: pad(Math.floor((diff / (1000 * 60 * 60)) % 24)),
    minutes: pad(Math.floor((diff / (1000 * 60)) % 60)),
    seconds: pad(Math.floor((diff / 1000) % 60)),
    isPast: diff === 0
  };
}
