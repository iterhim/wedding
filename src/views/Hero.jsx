import coupleImage from '../assets/couple-photo.jpg';
import { useScrollReveal } from '../controllers/useScrollReveal';
import { Divider } from './icons';

// VIEW — секція 1. Отримує дані моделі як пропси, нічого сама не рахує.
export function Hero({ wedding }) {
  const revealRef = useScrollReveal();
  const { couple, date, theme } = wedding;

  return (
    <section id="hero" className="snap-section" style={{ background: theme.cream }}>
      <div ref={revealRef} className="reveal hero">
        <span className="eyebrow" style={{ color: theme.accent }}>
          Запрошення на весілля
        </span>

        <Divider />

        <div className="names">
          <span className="name">{couple.groom}</span>
          <span className="amp" style={{ color: theme.accent }}>та</span>
          <span className="name">{couple.bride}</span>
        </div>

        <p className="subtitle">Запрошуємо вас розділити з нами цей особливий день</p>

        <div className="photo-frame">
          <img src={coupleImage} alt={`${couple.groom} та ${couple.bride}`} />
        </div>

        <div className="date-block">
          <span className="date" style={{ color: theme.accent }}>{date.display}</span>
          <span className="day-label">{date.day}</span>
        </div>
      </div>
    </section>
  );
}
