import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "Lucky 7’s Lounge — Somonauk, Illinois",
  description: 'Video slots, plastic-tip darts, Golden Tee, pizza, appetizers, crafted cocktails, and events in Somonauk, Illinois.',
  metadataBase: new URL('https://lucky-sevens-lounge-concepts.vincentbrandniu.chatgpt.site'),
  openGraph: {
    title: "Lucky 7’s Lounge — Somonauk, Illinois",
    description: 'Small-town nights, done properly.',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: "Lucky Seven’s Lounge cocktail bar" }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Lucky 7’s Lounge — Somonauk, Illinois",
    description: 'Small-town nights, done properly.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
