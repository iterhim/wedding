import { Fragment } from 'react';
import { useCountdown } from '../controllers/useCountdown';
import { useScrollReveal } from '../controllers/useScrollReveal';

// VIEW — секція 2: звернення + живий відлік + розклад дня.
// Лейбли одиниць відліку ("днів", "год" ...) і сам розклад
// (вінчання / початок святкування) — це контент, тож приходять
// з моделі, а не хардкод у View.
//
// .ceremony-block — CSS Grid у 2 колонки (час / деталі): колонка
// часу вирівнюється по фактичній ширині відрендереного вмісту,
// тож "13:00" і "14:30" завжди на одній лінії, незалежно від
// того, що ширина цифр у шрифті трохи відрізняється.
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

        <div className="ceremony-block">
          {[ceremony.wedding, ceremony.celebration].map((event) => (
            <Fragment key={event.label}>
              <span className="ceremony-time">{event.time}</span>
              <div className="ceremony-details">
                <span className="ceremony-label">{event.label}</span>
                <span className="ceremony-place">{event.place}</span>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
