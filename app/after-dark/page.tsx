import Link from 'next/link';
import { ConceptSwitcher } from '@/components/concept-switcher';

export default function AfterDarkPage() {
  return (
    <main className="dark-shell">
      <ConceptSwitcher active="/after-dark" />
      <section className="dark-hero" id="top">
        <header className="dark-nav"><Link href="#top" className="dark-logo"><span>Lucky</span><b>7</b><span>Seven’s</span></Link><nav><Link href="#play">Play</Link><Link href="#pour">Pour</Link><Link href="#visit">Visit</Link></nav><Link className="dark-pill" href="#visit">Open tonight <i /></Link></header>
        <div className="dark-grid" aria-hidden="true" />
        <p className="dark-kicker">Your neighborhood night shift</p>
        <h1>Make tonight<br /><em>your lucky night.</em></h1>
        <p className="dark-lede">Cold cocktails. Hot streaks. Friendly competition.<br />Everything you need for a night worth talking about.</p>
        <div className="dark-actions"><Link href="#play">See what’s playing <span>↘</span></Link><p>Open late<br /><small>Seven days a week</small></p></div>
        <div className="dark-score" aria-label="Lucky number seven"><span>0</span><strong>7</strong><span>7</span></div>
      </section>

      <section className="dark-ticker"><span>Golden Tee</span><i>◆</i><span>Video Gaming</span><i>◆</i><span>Craft Cocktails</span><i>◆</i><span>Darts</span></section>

      <section className="dark-play" id="play">
        <div className="dark-section-copy"><p>01 / Pick your play</p><h2>A little competition<br />looks good on you.</h2></div>
        <div className="game-stack">
          <article><span>01</span><h3>Try your luck</h3><p>Settle into our gaming corner and see where the night takes you.</p><b>Gaming</b></article>
          <article><span>02</span><h3>Hit the mark</h3><p>Good darts, close friends, and absolutely no pressure.</p><b>Darts</b></article>
          <article><span>03</span><h3>Take the tour</h3><p>Eighteen holes. No sunscreen. Bragging rights included.</p><b>Golden Tee</b></article>
        </div>
      </section>

      <section className="dark-pour" id="pour"><p>02 / At the bar</p><h2>Worth raising<br />a glass to.</h2><div><article><small>House favorite</small><h3>The Lucky Break</h3><p>Bourbon · Black walnut · Orange · Cherry</p></article><article><small>Bright & crisp</small><h3>Main Street 75</h3><p>Gin · Lemon · Bubbles · Gold</p></article><article><small>Zero-proof</small><h3>Designated Driver</h3><p>Ginger · Lime · Tart cherry · Soda</p></article></div></section>
      <footer className="dark-footer" id="visit"><h2>Meet us after dark.</h2><Link href="#top">Get directions ↗</Link><p>123 Main Street · Your Town, IL · Details are placeholders</p></footer>
    </main>
  );
}
