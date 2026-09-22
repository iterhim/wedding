import { useEffect, useRef } from 'react';

// ─────────────────────────────────────────────────────────
// CONTROLLER
// Стежить, коли секція заходить у в'юпорт, і додає клас
// "is-visible" для CSS-анімації появи (fade + rух вгору).
// Повертає ref, який view чіпляє на потрібний елемент.
// ─────────────────────────────────────────────────────────
export function useScrollReveal(threshold = 0.3) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
