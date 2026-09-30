import type { Metadata } from 'next';
import { Geist, Geist_Mono, Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/layout/ThemeProvider';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { SITE_CONFIG } from '@/config/site';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: 'Yentra — Independent Product Reviews & Buying Guides for India',
    template: '%s | Yentra',
  },
  description:
    'Yentra is an independent consumer product review and buying-guide website focused on helping Indian shoppers research technology, gaming, beauty, and lifestyle products.',
  keywords: [
    'yentra',
    'product reviews india',
    'amazon india reviews',
    'buying guides india',
    'tech reviews india',
    'gadget comparisons india',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    siteName: 'Yentra',
    type: 'website',
    locale: 'en_IN',
    url: SITE_CONFIG.url,
    title: 'Yentra — Independent Product Reviews & Buying Guides for India',
    description:
      'Yentra is an independent consumer product review and buying-guide website focused on helping Indian shoppers research technology, gaming, beauty, and lifestyle products.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yentra — Independent Product Reviews & Buying Guides for India',
    description:
      'Yentra is an independent consumer product review and buying-guide website focused on helping Indian shoppers research technology, gaming, beauty, and lifestyle products.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${SITE_CONFIG.url}/#website`,
        url: SITE_CONFIG.url,
        name: 'Yentra',
        description: SITE_CONFIG.description,
        publisher: {
          '@id': `${SITE_CONFIG.url}/#organization`,
        },
        inLanguage: 'en-IN',
      },
      {
        '@type': 'Organization',
        '@id': `${SITE_CONFIG.url}/#organization`,
        name: 'Yentra',
        url: SITE_CONFIG.url,
        description: SITE_CONFIG.description,
      },
    ],
  };

  return (
    <html
      lang="en-IN"
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1" id="main-content">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
