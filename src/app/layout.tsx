import type { Metadata } from 'next';
import { Poppins, PT_Sans } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';

const fontPoppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
});

const fontPtSans = PT_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-pt-sans',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://quicklightcorp.com'),
  title: 'QUICKLIGHT | Solar Panel & Lighting Solutions Philippines',
  description: 'QUICKLIGHT offers affordable and reliable solar panel systems, solar street lights, and traffic solutions in the Philippines. Lower your bills and embrace clean energy. Get your free quote today!',
  openGraph: {
    title: 'QUICKLIGHT | Solar Panel & Lighting Solutions Philippines',
    description: 'QUICKLIGHT offers affordable and reliable solar panel systems, solar street lights, and traffic solutions in the Philippines. Lower your bills and embrace clean energy. Get your free quote today!',
    url: 'https://quicklightcorp.com',
    siteName: 'QUICKLIGHT',
    images: [
      {
        url: '/Hero.jpeg',
        width: 1200,
        height: 630,
        alt: 'Solar panels on a modern house roof at sunset',
      },
    ],
    locale: 'en_PH',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'QUICKLIGHT | Solar Panel & Lighting Solutions Philippines',
    description: 'QUICKLIGHT offers affordable and reliable solar panel systems, solar street lights, and traffic solutions in the Philippines. Lower your bills and embrace clean energy. Get your free quote today!',
    images: ['/Hero.jpeg'],
  },
  keywords: ['solar panel philippines', 'solar energy philippines', 'quicklight', 'solar street lights', 'renewable energy', 'solar power system'],
  authors: [{ name: 'QUICKLIGHT Solar and Lighting Solutions Inc.' }],
  creator: 'QUICKLIGHT Solar and Lighting Solutions Inc.',
  publisher: 'QUICKLIGHT Solar and Lighting Solutions Inc.',
  manifest: '/favicon/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon/favicon.ico', sizes: 'any' },
      { url: '/favicon/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      { url: '/favicon/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: [
      { url: '/favicon/apple-touch-icon.png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body
        className={cn(
          'min-h-screen bg-background font-body antialiased',
          fontPoppins.variable,
          fontPtSans.variable
        )}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
