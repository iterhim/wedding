// Дрібні декоративні SVG, винесені окремо, щоб не засмічувати views.

export function Divider({ color = '#8B9270', lineColor = '#B9C09E' }) {
  return (
    <svg width="118" height="26" viewBox="0 0 118 26" fill="none" aria-hidden="true">
      <path d="M2 13 H46 M72 13 H116" stroke={lineColor} strokeWidth="1" />
      <path
        d="M59 13 C55 6 49 4 45 6 C49 10 53 12 59 13 C53 14 49 16 45 20 C49 22 55 20 59 13Z"
        stroke={color}
        strokeWidth="1"
        fill="none"
      />
      <circle cx="59" cy="13" r="2" fill={color} />
    </svg>
  );
}

export function MapPin({ color = '#6B7256', ringColor = '#FDFBF5' }) {
  return (
    <svg width="30" height="40" viewBox="0 0 24 32" aria-hidden="true">
      <path
        d="M12 0C5.4 0 0 5.4 0 12c0 9 12 20 12 20s12-11 12-20c0-6.6-5.4-12-12-12z"
        fill={color}
      />
      <circle cx="12" cy="12" r="5" fill={ringColor} />
    </svg>
  );
}

export function MapIllustration() {
  return (
    <svg
      viewBox="0 0 400 150"
      width="100%"
      height="150"
      preserveAspectRatio="none"
      aria-hidden="true"
      style={{ display: 'block' }}
    >
      <rect x="0" y="0" width="400" height="150" fill="#F1EAD8" />
      <path d="M0 34 C100 14 140 78 240 58 S 340 24 400 42" stroke="#C9CDB4" strokeWidth="2" fill="none" />
      <path d="M0 112 C90 128 180 86 260 118 S 360 134 400 110" stroke="#C9CDB4" strokeWidth="2" fill="none" />
      <path d="M70 0 C50 50 95 84 78 150" stroke="#C9CDB4" strokeWidth="2" fill="none" />
      <path d="M320 0 C302 50 338 92 312 150" stroke="#C9CDB4" strokeWidth="2" fill="none" />
    </svg>
  );
}

export function Envelope() {
  return (
    <svg width="54" height="38" viewBox="0 0 64 46" fill="none" aria-hidden="true">
      <rect x="2" y="2" width="60" height="42" rx="2" stroke="#D9C9A3" strokeWidth="1.3" />
      <path
        d="M2 4 L32 28 L62 4"
        stroke="#D9C9A3"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Heart({ color }) {
  return (
    <svg width="30" height="26" viewBox="0 0 24 22" aria-hidden="true">
      <path
        d="M12 21s-8-4.5-8-11a4.5 4.5 0 0 1 8-2.7A4.5 4.5 0 0 1 20 10c0 6.5-8 11-8 11z"
        fill={color}
      />
    </svg>
  );
}
