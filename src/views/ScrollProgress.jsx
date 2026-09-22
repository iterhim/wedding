import { useSectionProgress } from '../controllers/useSectionProgress';

// VIEW — фіксований вертикальний індикатор прогресу скролу.
// Крапка на кожну секцію; активна підсвічується кольором акценту,
// клік по крапці скролить до відповідної секції.
export function ScrollProgress({ sections, theme }) {
  const { activeIndex, scrollToSection } = useSectionProgress(sections);

  return (
    <nav className="scroll-progress" aria-label="Навігація секціями">
      {sections.map((section, index) => (
        <button
          key={section.id}
          type="button"
          className={`scroll-progress-dot${index === activeIndex ? ' is-active' : ''}`}
          style={index === activeIndex ? { background: theme.accent } : undefined}
          aria-label={section.label}
          aria-current={index === activeIndex ? 'true' : undefined}
          onClick={() => scrollToSection(index)}
        />
      ))}
    </nav>
  );
}
