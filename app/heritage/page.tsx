import Link from 'next/link';
import { BrandLogo } from '@/components/brand-logo';
import { ConceptSwitcher } from '@/components/concept-switcher';

export default function HeritagePage() {
  return (
    <main className="heritage-shell">
      <ConceptSwitcher active="/heritage" />
      <header className="heritage-nav">
        <BrandLogo />
        <nav><Link href="#about">About</Link><Link href="#food">Food & drinks</Link><Link href="#games">Games</Link><Link href="#events">Events</Link></nav>
        <p>Somonauk · Illinois</p>
      </header>

      <section className="heritage-hero" id="top">
        <div className="heritage-star" aria-hidden="true">★</div>
        <p className="heritage-kicker">Gaming · Food · Cocktails · Events</p>
        <h1>Small town.<br /><em>Big night.</em></h1>
        <p className="heritage-lede">The local spot for video slots, plastic-tip darts, Golden Tee, pizza, cocktails, and a full calendar of reasons to get together.</p>
        <Link className="heritage-cta" href="#visit">Pull up a chair <span>→</span></Link>
        <p className="heritage-side-note">Pizza · Cocktails · Darts · Slots · Golden Tee</p>
      </section>

      <section className="heritage-marquee" aria-label="Highlights"><span>Good drinks</span><b>✦</b><span>Good games</span><b>✦</b><span>Good people</span><b>✦</b><span>No fuss</span></section>

      <section className="heritage-welcome" id="about">
        <div className="heritage-card"><span className="card-seven">7</span><p>Luck favors<br />the thirsty.</p><small>Lucky Seven’s · Illinois</small></div>
        <div className="heritage-story" id="food"><p className="heritage-label">The neighborhood good-time spot</p><h2>Your favorite local hangout.<br />Even on your first visit.</h2><p>We keep the drinks cold, the pizza hot, and the welcome easy. Lucky 7’s is built for an after-work spin, dart night with friends, and every “just one more” in between.</p><Link href="#events">See what’s happening <span>↗</span></Link></div>
      </section>

      <section className="heritage-games" id="games">
        <p className="heritage-label">Choose your game</p><h2>Plenty to play for.</h2>
        <div className="ticket-row"><article><b>01</b><h3>Video slots</h3><p>Find your game and try your luck.</p></article><article><b>02</b><h3>Plastic-tip darts</h3><p>Call your shot and make it count.</p></article><article><b>03</b><h3>Golden Tee</h3><p>One more round takes on two meanings.</p></article></div>
      </section>

      <section className="heritage-events" id="events"><p className="heritage-label">Always something happening</p><h2>Events bring everyone together.</h2><p>Parties, specials, and community get-togethers—follow Lucky 7’s for the latest lineup.</p><Link href="#visit">Plan your night →</Link></section>

      <footer className="heritage-footer" id="visit"><h2>See you tonight.</h2><p>667 E Lasalle St · Somonauk, IL 60552</p><p>Video gaming · Food · Cocktails · Events</p></footer>
    </main>
  );
}
