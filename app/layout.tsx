import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Vandys Cafe | Coffee & Café in Buderim, Queensland',
  description:
    'Visit Vandys Cafe in Buderim, Queensland for quality coffee, café favourites and relaxed moments at 116 Burnett Street.',
  keywords: [
    'Vandys Cafe',
    'Vandys Cafe Buderim',
    'cafe Buderim',
    'coffee Buderim',
    'coffee shop Buderim',
    'espresso bar Buderim',
    'cafes in Buderim',
    'breakfast Buderim',
  ],
  metadataBase: new URL('https://vandyscafe.com.au'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    title: 'Vandys Cafe | Coffee & Café in Buderim, Queensland',
    description:
      'Visit Vandys Cafe in Buderim, Queensland for quality coffee, café favourites and relaxed moments at 116 Burnett Street.',
    siteName: 'Vandys Cafe',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vandys Cafe | Coffee & Café in Buderim, Queensland',
    description:
      'Visit Vandys Cafe in Buderim, Queensland for quality coffee, café favourites and relaxed moments at 116 Burnett Street.',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'CafeOrCoffeeShop',
  name: 'Vandys Cafe',
  image: 'https://vandyscafe.com.au/og-image.jpg',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '116 Burnett St',
    addressLocality: 'Buderim',
    addressRegion: 'QLD',
    postalCode: '4556',
    addressCountry: 'AU',
  },
  telephone: '+61 434 364 959',
  priceRange: '$1–20',
  servesCuisine: ['Coffee', 'Café'],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '189',
  },
  sameAs: ['https://www.facebook.com/VandysCafeBuderim'],
  url: 'https://vandyscafe.com.au',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
