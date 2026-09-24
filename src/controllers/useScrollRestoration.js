import { useEffect } from 'react';

// ─────────────────────────────────────────────────────────
// CONTROLLER
// Браузер за замовчуванням намагається відновити попередню
// позицію скролу після перезавантаження сторінки (history
// scroll restoration). У парі з mandatory scroll-snap це
// "притягує" сторінку до найближчої секції замість початку —
// виглядає, ніби сторінка сама перекидає на іншу секцію.
// Вимикаємо це й завжди стартуємо з початку.
// ─────────────────────────────────────────────────────────
export function useScrollRestoration() {
  useEffect(() => {
    if (!('scrollRestoration' in window.history)) return undefined;

    const previous = window.history.scrollRestoration;
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);

    return () => {
      window.history.scrollRestoration = previous;
    };
  }, []);
}
