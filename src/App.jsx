import { wedding } from './models/weddingData';
import { Hero } from './views/Hero';
import { Greeting } from './views/Greeting';
import { Venue } from './views/Venue';
import { DressCode } from './views/DressCode';
import { ScrollProgress } from './views/ScrollProgress';

// Композиційний корінь: збирає 4 секції в порядку скролу.
// Дані (модель) течуть вниз пропсами; кожен View сам підʼєднує
// потрібні контролери (useCountdown, useScrollReveal, useSectionProgress).
export default function App() {
  return (
    <>
      <ScrollProgress sections={wedding.sections} theme={wedding.theme} />
      <main className="page">
        <Hero wedding={wedding} />
        <Greeting wedding={wedding} />
        <Venue wedding={wedding} />
        <DressCode wedding={wedding} />
      </main>
    </>
  );
}
