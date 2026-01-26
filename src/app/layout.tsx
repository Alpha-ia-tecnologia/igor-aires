import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';
import { SITE_CONFIG } from '@/config/site-config';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: SITE_CONFIG.name,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  metadataBase: new URL(SITE_CONFIG.url),
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: SITE_CONFIG.name,
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export function generateViewport() {
  return {
    themeColor: SITE_CONFIG.themeColor,
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased transition-colors duration-300`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

