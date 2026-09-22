import { useEffect, useRef, useState } from 'react';

// ─────────────────────────────────────────────────────────
// CONTROLLER
// 1) Стежить через IntersectionObserver, яка секція зараз
//    найбільше видима (для підсвітки активної крапки).
// 2) Перехоплює колесо миші/трекпад і клавіші-стрілки, щоб
//    гортати рівно по одній секції за жест. Чистий CSS
//    scroll-snap цього не гарантує: на трекпаді інерційний
//    свайп часто "проскакує" одразу кілька секцій.
// ─────────────────────────────────────────────────────────
export function useSectionProgress(sections) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndexRef = useRef(0);
  const isPagingRef = useRef(false);
  const lockTimerRef = useRef(null);

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  // --- відстеження активної секції ---
  useEffect(() => {
    const elements = sections.map(({ id }) => document.getElementById(id)).filter(Boolean);
    if (elements.length === 0) return undefined;

    const ratios = new Map();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratios.set(entry.target, entry.intersectionRatio);
        });

        let bestEl = null;
        let bestRatio = 0;
        ratios.forEach((ratio, el) => {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestEl = el;
          }
        });

        if (bestEl) {
          const index = elements.indexOf(bestEl);
          if (index !== -1) setActiveIndex(index);
        }
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sections]);

  const goToSection = (index) => {
    const clamped = Math.max(0, Math.min(sections.length - 1, index));
    const target = document.getElementById(sections[clamped]?.id);
    if (!target) return;

    isPagingRef.current = true;
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });

    if (lockTimerRef.current) window.clearTimeout(lockTimerRef.current);
    lockTimerRef.current = window.setTimeout(() => {
      isPagingRef.current = false;
    }, 700);
  };

  // --- одна секція за один "крок" колеса/клавіші ---
  useEffect(() => {
    const handleWheel = (event) => {
      if (Math.abs(event.deltaY) < 10) return;

      event.preventDefault();
      if (isPagingRef.current) return;

      const direction = event.deltaY > 0 ? 1 : -1;
      goToSection(activeIndexRef.current + direction);
    };

    const handleKeyDown = (event) => {
      if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp' && event.key !== 'PageDown' && event.key !== 'PageUp') {
        return;
      }
      if (isPagingRef.current) return;

      event.preventDefault();
      const direction = event.key === 'ArrowDown' || event.key === 'PageDown' ? 1 : -1;
      goToSection(activeIndexRef.current + direction);
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
      if (lockTimerRef.current) window.clearTimeout(lockTimerRef.current);
    };
  }, [sections]);

  return { activeIndex, scrollToSection: goToSection };
}
