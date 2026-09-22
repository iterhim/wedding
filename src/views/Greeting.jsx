import { useCountdown } from '../controllers/useCountdown';
import { useScrollReveal } from '../controllers/useScrollReveal';

// VIEW — секція 2: звернення + живий відлік + час церемонії.
// Лейбли одиниць відліку ("днів", "год" ...) — це контент,
// тож приходять з моделі (wedding.countdown.units), а не хардкод у View.
export function Greeting({ wedding }) {
  const revealRef = useScrollReveal();
  const countdown = useCountdown(wedding.date.iso);
  const { theme, ceremony, countdown: countdownConfig } = wedding;

  return (
    <section id="greeting" className="snap-section" style={{ background: theme.oliveDark }}>
      <div ref={revealRef} className="reveal greeting">
        <div className="greeting-text">
          <span className="script-heading">Дорогі рідні та друзі!</span>
          <p className="body-text light">
            Наближається один із найважливіших днів нашого життя — ми станемо чоловіком і
            дружиною. Будемо щасливі розділити цю радість із вами.
          </p>
        </div>

        <div className="countdown">
          <span className="eyebrow light">До свята залишилось</span>
          <div className="countdown-row">
            {countdownConfig.units.map(({ key, label }) => (
              <div className="countdown-cell" key={key}>
                <span
                  className="countdown-value"
                  style={key === 'seconds' ? { color: theme.accent } : undefined}
                >
                  {countdown[key]}
                </span>
                <span className="countdown-label">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="ceremony-row">
          <span className="ceremony-time">
            {ceremony.time} — {ceremony.label}
          </span>
        </div>
      </div>
    </section>
  );
}
