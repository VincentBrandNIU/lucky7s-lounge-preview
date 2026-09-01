import Link from 'next/link';
import { BrandLogo } from '@/components/brand-logo';
import { ConceptSwitcher } from '@/components/concept-switcher';

export default function AfterDarkPage() {
  return (
    <main className="dark-shell">
      <ConceptSwitcher active="/after-dark" />
      <section className="dark-hero" id="top">
        <header className="dark-nav"><BrandLogo /><nav><Link href="#play">Play</Link><Link href="#pour">Eat & drink</Link><Link href="#events">Events</Link></nav><Link className="dark-pill" href="#visit">Somonauk, IL <i /></Link></header>
        <div className="dark-grid" aria-hidden="true" />
        <p className="dark-kicker">Video gaming & slots · Somonauk, Illinois</p>
        <h1>Make tonight<br /><em>your lucky night.</em></h1>
        <p className="dark-lede">Hot pizza. Cold cocktails. Video slots. Plastic-tip darts.<br />Everything you need for a night worth talking about.</p>
        <div className="dark-actions"><Link href="#play">See what’s playing <span>↘</span></Link><p>Open late<br /><small>Seven days a week</small></p></div>
        <div className="dark-score" aria-label="Lucky number seven"><span>7</span><strong>7</strong><span>7</span></div>
      </section>

      <section className="dark-ticker"><span>Video Gaming</span><i>◆</i><span>Craft Cocktails</span><i>◆</i><span>Darts</span></section>

      <section className="dark-play" id="play">
        <div className="dark-section-copy"><p>01 / Pick your play</p><h2>A little competition<br />looks good on you.</h2></div>
        <div className="game-stack">
          <article><span>01</span><h3>Try your luck</h3><p>Choose from a diverse lineup of video slots and find your game.</p><b>Slots</b></article>
          <article><span>02</span><h3>Hit the mark</h3><p>Plastic-tip darts, close friends, and friendly competition.</p><b>Darts</b></article>
          <article><span>03</span><h3>Take the tour</h3><p>Eighteen holes. No sunscreen. Bragging rights included.</p><b>Golden Tee</b></article>
        </div>
      </section>

      <section className="dark-pour" id="pour"><p>02 / Food & drinks</p><h2>Fuel your<br />lucky streak.</h2><div><article><small>Hot & shareable</small><h3>Pizza</h3><p>A perfect table-side companion for game night.</p></article><article><small>Crave-worthy</small><h3>Appetizers</h3><p>Easy favorites made for sharing—or not.</p></article><article><small>From the bar</small><h3>Crafted cocktails</h3><p>Signature drinks, refreshing favorites, and cold beer.</p></article></div></section>
      <section className="dark-events" id="events"><p>03 / On the calendar</p><h2>Somonauk<br />shows up.</h2><div><p>Lucky 7’s hosts a lively mix of dart nights, tournaments, parties, specials, and community events.</p><Link href="#visit">See what’s next ↗</Link></div></section>
      <footer className="dark-footer" id="visit"><h2>Meet us after dark.</h2><Link href="#top">Get directions ↗</Link><p>667 E Lasalle St · Somonauk, IL 60552 · Video gaming & slots</p></footer>
    </main>
  );
}
