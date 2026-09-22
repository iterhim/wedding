import { useScrollReveal } from '../controllers/useScrollReveal';
import { Envelope, Heart } from './icons';

// VIEW — секція 4: дрес-код (кольорова палітра) + прощальний блок.
export function DressCode({ wedding }) {
  const revealRef = useScrollReveal();
  const { theme, dressCode, closing, couple, date } = wedding;

  return (
    <section id="dress-code" className="snap-section" style={{ background: theme.oliveDark }}>
      <div ref={revealRef} className="reveal dress-code">
        <div className="dress-code-block">
          <span className="eyebrow light">Дрес-код</span>
          <p className="body-text light small">{dressCode.note}</p>
          <div className="palette">
            {dressCode.palette.map((color) => (
              <Heart color={color} key={color} />
            ))}
          </div>
        </div>

        <div className="divider-line" />

        <div className="closing-block">
          <Envelope />
          <span className="script-heading">{closing.title}</span>
          <p className="body-text light small">{closing.text}</p>
          <div className="closing-signature">
            <span className="signature-name">
              {couple.groom} та {couple.bride}
            </span>
            <span className="signature-date">{date.display}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
