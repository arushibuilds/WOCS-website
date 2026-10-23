import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import Snowfall from '@/components/Snowfall';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Script from 'next/script';
import { GA_ID, SITE_URL } from '@/lib/links';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Winter of Code Social - Open Source Collaboration Event',
    template: '%s | Winter of Code Social',
  },
  description: 'The largest community-driven open source event of the winter.',
  keywords: ['open source', 'coding', 'collaboration', 'winter', 'developers', 'projects'],
  authors: [{ name: 'Code Social Community' }],
  openGraph: {
    title: 'Winter of Code Social',
    description: 'Join the largest open source collaboration event this winter',
    type: 'website',
    siteName: 'Winter of Code Social',
    images: [{ url: '/icon.png', alt: 'Winter of Code Social' }],
  },
  twitter: {
    card: 'summary',
    title: 'Winter of Code Social',
    description: 'Join the largest open source collaboration event this winter',
    images: ['/icon.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/icon.png" type="image/png" />
        {/* Google tag (gtag.js) */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${GA_ID}');`}
        </Script>
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-[var(--panel)] focus:text-[var(--frost)]"
          >
            Skip to main content
          </a>
          {/* Site-wide snow effect: part of the WOCS brand. Keep it on every page; do not remove. */}
          <Snowfall />
          <Navbar />
          <main id="main-content" tabIndex={-1} className="relative z-10 outline-none">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}