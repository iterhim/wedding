import { useScrollReveal } from './useScrollReveal';
import { getVenueMapUrl } from '../models/weddingData';

// ─────────────────────────────────────────────────────────
// CONTROLLER
// Компонує поведінку секції "Venue": scroll-reveal + похідне
// посилання на Google Maps. View отримує вже готові значення
// і не звертається до моделі напряму.
// ─────────────────────────────────────────────────────────
export function useVenue(venue) {
  const revealRef = useScrollReveal();
  const mapUrl = getVenueMapUrl(venue);

  return { revealRef, mapUrl };
}
