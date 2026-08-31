import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "Lucky Seven’s Lounge — Illinois",
  description: 'Small-town nights, proper cocktails, darts, gaming, and good company.',
  metadataBase: new URL('https://lucky-sevens-lounge-concepts.sites.openai.com'),
  openGraph: {
    title: "Lucky Seven’s Lounge — Illinois",
    description: 'Small-town nights, done properly.',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: "Lucky Seven’s Lounge cocktail bar" }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Lucky Seven’s Lounge — Illinois",
    description: 'Small-town nights, done properly.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
