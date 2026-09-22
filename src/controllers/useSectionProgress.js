import { useEffect, useState } from 'react';

// ─────────────────────────────────────────────────────────
// CONTROLLER
// Стежить через IntersectionObserver, яка з секцій зараз
// найбільше видима у в'юпорті (для підсвітки активної крапки),
// і дає функцію плавного скролу до потрібної секції за індексом.
// ─────────────────────────────────────────────────────────
export function useSectionProgress(sections) {
  const [activeIndex, setActiveIndex] = useState(0);

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

  const scrollToSection = (index) => {
    const target = document.getElementById(sections[index]?.id);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return { activeIndex, scrollToSection };
}
