import { useVenue } from '../controllers/useVenue';
import { MapIllustration, MapPin } from './icons';

// VIEW — секція 3: локація з мапою-ілюстрацією та кнопкою на Google Maps.
// Нічого не рахує сама — scroll-reveal і посилання на карту
// приходять готовими з контролера useVenue.
export function Venue({ wedding }) {
  const { venue, theme } = wedding;
  const { revealRef, mapUrl } = useVenue(venue);

  return (
    <section id="venue" className="snap-section" style={{ background: theme.cream }}>
      <div ref={revealRef} className="reveal venue">
        <span className="eyebrow" style={{ color: theme.accent }}>
          Місце проведення
        </span>

        <div className="venue-card" style={{ borderColor: theme.border, background: theme.creamCard }}>
          <div className="venue-map">
            <MapIllustration />
            <div className="venue-pin">
              <MapPin color={theme.accent} ringColor={theme.creamCard} />
            </div>
          </div>

          <div className="venue-info">
            <span className="script-heading small">{venue.name}</span>
            <span className="venue-city">{venue.city}</span>
            <a
              className="btn"
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ background: theme.accent }}
            >
              Переглянути на карті
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
