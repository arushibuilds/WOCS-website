import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import Snowfall from '@/components/Snowfall';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Winter of Code Social - Open Source Collaboration Event',
  description: 'The largest community-driven open source event of the winter.',
  keywords: ['open source', 'coding', 'collaboration', 'winter', 'developers', 'projects'],
  authors: [{ name: 'Code Social Community' }],
  openGraph: {
    title: 'Winter of Code Social',
    description: 'Join the largest open source collaboration event this winter',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Winter of Code Social',
    description: 'Join the largest open source collaboration event this winter',
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
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Snowfall />
          <Navbar />
          <main className="relative z-10">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}