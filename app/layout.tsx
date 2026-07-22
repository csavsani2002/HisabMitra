import type { Metadata } from 'next';
import { Fraunces, Inter, IBM_Plex_Mono } from 'next/font/google';
import Footer from './components/Footer';
import Header from './components/Header';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
});

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-plex-mono',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://hisabmitra.app'),
  title: 'HisabMitra — Your Accounting Friend for Modern Indian Business',
  description:
    'Digitize sales, purchases, unified party ledger, and reports. HisabMitra works fully offline, keeps one ledger per party, and turns your khata into clear, reliable numbers.',
  openGraph: {
    title: 'HisabMitra — Your Accounting Friend for Modern Indian Business',
    description:
      'Digitize sales, purchases, unified party ledger, and reports. Works fully offline, built for Indian traders and SMEs.',
    url: 'https://hisabmitra.app',
    siteName: 'HisabMitra',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HisabMitra — Your Accounting Friend for Modern Indian Business',
    description:
      'Digitize sales, purchases, unified party ledger, and reports. Works fully offline, built for Indian traders and SMEs.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${inter.variable} ${plexMono.variable} font-body bg-ink text-paper antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
