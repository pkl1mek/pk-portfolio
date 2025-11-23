import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';

const satoshi = localFont({
  src: '../fonts/Satoshi-Variable.woff2',
  variable: '--font-satoshi',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Pk Projects',
  description: 'Patryk Klimek - Portfolio',
  openGraph: {
    title: 'Pk Projects',
    description: 'Patryk Klimek - Portfolio',
    url: 'https://pkprojects.pl',
    siteName: 'Pk Projects',
    images: [
      {
        url: 'https://pkprojects.pl/og-image.png',
        width: 1000,
        height: 1000,
      },
    ],
    locale: 'pl_PL',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className={`${satoshi.variable}`}>
      <body className="bg-background text-primary bg-main-bg bg-no-repeat bg-center bg-cover bg-fixed">
        <LanguageProvider> 
          <div className="w-full max-w-[1440px] mx-auto px-8 xl:px-0">
            <Header />
            <main>{children}</main>
          </div>
          <Footer />
          <ScrollToTopButton />
        </LanguageProvider> 
      </body>
    </html>
  );
}