import Link from 'next/link';
import { ConceptSwitcher } from '@/components/concept-switcher';

export default function Home() {
  return (
    <main className="velvet-shell">
      <ConceptSwitcher active="/" />

      <section className="velvet-hero">
        <header className="velvet-nav">
          <Link href="#top" className="wordmark" aria-label="Lucky 7's Lounge home">
            <span className="wordmark-mark">7</span>
            <span>Lucky Seven’s<small>Lounge · Illinois</small></span>
          </Link>
          <nav className="main-links" aria-label="Main navigation">
            <Link href="#drinks">Libations</Link><Link href="#play">Play</Link><Link href="#story">Our story</Link>
          </nav>
          <Link className="outline-button" href="#visit">Find the door</Link>
        </header>

        <div className="hero-copy" id="top">
          <p className="kicker"><span /> Small-town nights, done properly</p>
          <h1>Where good fortune<br />meets <em>good company.</em></h1>
          <p className="hero-lede">Slip away from the ordinary. Settle in for a proper cocktail, a friendly wager, and a night that never tries too hard.</p>
          <div className="hero-actions">
            <Link className="gold-button" href="#drinks">Explore the pours <span>↗</span></Link>
            <Link className="text-link" href="#play">See what’s playing <span>→</span></Link>
          </div>
        </div>

        <div className="hero-seal" aria-hidden="true"><span>Est.</span><strong>7</strong><span>Illinois</span></div>
        <div className="hero-foot">
          <p><span>Tonight</span> Cold drinks · Sharp darts · Open late</p>
          <p className="scroll-cue">Scroll to enter <i>↓</i></p>
        </div>
      </section>

      <section className="velvet-intro" id="story">
        <p className="section-number">01 / Welcome</p>
        <div><p className="script-note">Stay awhile</p><h2>A little hidden.<br />A lot worth finding.</h2></div>
        <p className="intro-copy">An antique-hearted lounge for modern nights out. No velvet rope, no pretense—just thoughtful drinks, familiar faces, and plenty of reasons to stay for one more round.</p>
      </section>

      <figure className="velvet-image-break">
        <img src="/og.png" alt="A classic cocktail in a warmly lit antique lounge with a dartboard" />
        <figcaption>Concept photography · final imagery can feature the real room and drinks</figcaption>
      </figure>

      <section className="velvet-offerings" id="drinks">
        <div className="offering-heading">
          <p className="section-number">02 / The good stuff</p>
          <h2>Pick your<br /><em>pleasure.</em></h2>
        </div>
        <div className="offering-grid">
          <article><span>01</span><h3>Proper pours</h3><p>Old standbys, house signatures, and an honest beer—served without the theater.</p><Link href="#visit">View the bar <b>→</b></Link></article>
          <article id="play"><span>02</span><h3>Play your hand</h3><p>Video gaming, steel-tip darts, and a Golden Tee rivalry that gets better by the round.</p><Link href="#visit">See what’s on <b>→</b></Link></article>
          <article><span>03</span><h3>Stay late</h3><p>A comfortable corner, a familiar song, and the kind of night you don’t need to plan.</p><Link href="#visit">Plan a visit <b>→</b></Link></article>
        </div>
      </section>

      <section className="velvet-visit" id="visit">
        <p className="kicker"><span /> Find your way in</p>
        <h2>The light is on.<br /><em>Come take a seat.</em></h2>
        <div className="visit-details"><p><small>Hours</small>Mon–Thu · 3pm–12am<br />Fri–Sat · 2pm–2am<br />Sunday · 12pm–10pm</p><p><small>Somewhere in Illinois</small>123 Main Street<br />Your Town, IL 60000</p></div>
        <p className="fine-print">Concept copy and details are placeholders for presentation.</p>
      </section>
    </main>
  );
}
