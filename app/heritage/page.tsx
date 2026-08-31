import Link from 'next/link';
import { ConceptSwitcher } from '@/components/concept-switcher';

export default function HeritagePage() {
  return (
    <main className="heritage-shell">
      <ConceptSwitcher active="/heritage" />
      <header className="heritage-nav">
        <Link href="#top" className="heritage-brand"><b>Lucky 7’s</b><span>Neighborhood Lounge</span></Link>
        <nav><Link href="#about">About</Link><Link href="#menu">Drinks</Link><Link href="#games">Games</Link><Link href="#visit">Visit</Link></nav>
        <p>Illinois · Since whenever</p>
      </header>

      <section className="heritage-hero" id="top">
        <div className="heritage-star" aria-hidden="true">★</div>
        <p className="heritage-kicker">Come as you are · Stay as long as you like</p>
        <h1>Small town.<br /><em>Big night.</em></h1>
        <p className="heritage-lede">The local spot for stiff drinks, friendly competition, and stories that get better every time they’re told.</p>
        <Link className="heritage-cta" href="#visit">Pull up a chair <span>→</span></Link>
        <p className="heritage-side-note">Cocktails · Darts · Gaming · Golden Tee</p>
      </section>

      <section className="heritage-marquee" aria-label="Highlights"><span>Good drinks</span><b>✦</b><span>Good games</span><b>✦</b><span>Good people</span><b>✦</b><span>No fuss</span></section>

      <section className="heritage-welcome" id="about">
        <div className="heritage-card"><span className="card-seven">7</span><p>Luck favors<br />the thirsty.</p><small>Lucky Seven’s · Illinois</small></div>
        <div className="heritage-story"><p className="heritage-label">The neighborhood living room</p><h2>Your favorite old bar.<br />Even on your first visit.</h2><p>We keep the lights warm, the beer cold, and the welcome easy. Lucky 7’s is built for the after-work round, the Saturday showdown, and every “just one more” in between.</p><Link href="#games">See what’s happening <span>↗</span></Link></div>
      </section>

      <section className="heritage-games" id="games">
        <p className="heritage-label">Choose your game</p><h2>Plenty to play for.</h2>
        <div className="ticket-row"><article><b>01</b><h3>Video gaming</h3><p>Try your luck in a cozy corner.</p></article><article><b>02</b><h3>Steel-tip darts</h3><p>Call your shot and make it count.</p></article><article><b>03</b><h3>Golden Tee</h3><p>One more round takes on two meanings.</p></article></div>
      </section>

      <footer className="heritage-footer" id="visit"><h2>See you tonight.</h2><p>123 Main Street · Your Town, Illinois</p><p>Hours and address are presentation placeholders.</p></footer>
    </main>
  );
}
