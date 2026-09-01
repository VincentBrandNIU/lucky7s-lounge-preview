import Link from 'next/link';
import { BrandLogo } from '@/components/brand-logo';
import { ConceptSwitcher } from '@/components/concept-switcher';
import { siteBasePath } from '@/lib/site-path';

export default function Home() {
  return (
    <main className="velvet-shell">
      <ConceptSwitcher active="/" />

      <section className="velvet-hero">
        <header className="velvet-nav">
          <BrandLogo />
          <nav className="main-links" aria-label="Main navigation">
            <Link href="#drinks">Food & drinks</Link><Link href="#play">Play</Link><Link href="#events">Events</Link>
          </nav>
          <Link className="outline-button" href="#visit">Find the door</Link>
        </header>

        <div className="hero-copy" id="top">
          <p className="kicker"><span /> Somonauk’s neighborhood gaming lounge</p>
          <h1>Good luck.<br /><em>Great nights.</em></h1>
          <p className="hero-lede">Video slots, plastic-tip darts, Golden Tee, pizza, appetizers, and crafted cocktails—all under one lucky roof.</p>
          <div className="hero-actions">
            <Link className="gold-button" href="#drinks">Explore the pours <span>↗</span></Link>
            <Link className="text-link" href="#play">See what’s playing <span>→</span></Link>
          </div>
        </div>

        <div className="hero-seal" aria-hidden="true"><span>Est.</span><strong>7</strong><span style={{ paddingTop: '0.5rem' }}>Illinois</span></div>
        <div className="hero-foot">
          <p><span>Tonight</span> Video slots · Plastic-tip darts · Good food</p>
          <p className="scroll-cue">Scroll to enter <i>↓</i></p>
        </div>
      </section>

      <section className="velvet-intro" id="story">
        <p className="section-number">01 / Welcome</p>
        <div><p className="intro-label">Somonauk, Illinois</p><h2>All the fun.<br />Right here in town.</h2></div>
        <p className="intro-copy">Lucky 7’s is Somonauk’s spot for gaming, food, drinks, and a lively calendar of events. Bring your crew, grab a pizza, and make a night of it.</p>
      </section>

      <figure className="velvet-image-break">
        <img src={`${siteBasePath}/og.png`} alt="A crafted cocktail beside softly glowing video slot machines in a warmly lit lounge" />
        <figcaption>Concept photography · final imagery can feature the real room and drinks</figcaption>
      </figure>

      <section className="velvet-offerings" id="drinks">
        <div className="offering-heading">
          <p className="section-number">02 / The good stuff</p>
          <h2>Pick your<br /><em>pleasure.</em></h2>
        </div>
        <div className="offering-grid">
          <article><span>01</span><h3>Food & cocktails</h3><p>Pizza, crave-worthy appetizers, signature drinks, and cold beer for every kind of night.</p><Link href="#visit">Come hungry <b>→</b></Link></article>
          <article id="play"><span>02</span><h3>Video slots</h3><p>A diverse lineup of gaming machines and plenty of chances to find your lucky streak.</p><Link href="#visit">Try your luck <b>→</b></Link></article>
          <article><span>03</span><h3>Darts & Golden Tee</h3><p>Plastic-tip darts, friendly competition, and one-more-round Golden Tee rivalries.</p><Link href="#events">Join the fun <b>→</b></Link></article>
        </div>
      </section>

      <section className="velvet-events" id="events"><p className="section-number">03 / What’s happening</p><div><h2>There’s always<br /><em>something going on.</em></h2><p>From dart nights and tournaments to parties, specials, and community gatherings, Lucky 7’s keeps the calendar full.</p></div><Link href="#visit">See upcoming events <span>↗</span></Link></section>

      <section className="velvet-visit" id="visit">
        <p className="kicker"><span /> Find your way in</p>
        <h2>Your lucky night<br /><em>starts in Somonauk.</em></h2>
        <div className="visit-details"><p><small>Come for</small>Video gaming · Darts<br />Golden Tee · Food<br />Crafted cocktails · Events</p><p><small>Find us</small>667 E Lasalle St<br />Somonauk, IL 60552</p></div>
        <p className="fine-print">Lucky 7’s Lounge · Video Gaming & Slots · Somonauk, Illinois</p>
      </section>
    </main>
  );
}
