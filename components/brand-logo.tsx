import Link from 'next/link';
import { siteBasePath } from '@/lib/site-path';

export function BrandLogo() {
  return (
    <Link
      href="#top"
      className="brand-image"
      aria-label="Lucky 7's Lounge home"
      style={{ backgroundImage: `url(${siteBasePath}/lucky7s-logo.png)` }}
    >
      <span>Lucky 7’s Lounge</span>
    </Link>
  );
}
