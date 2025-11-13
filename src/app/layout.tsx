import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import './globals.css';

const satoshi = localFont({
  src: '../fonts/Satoshi-Variable.woff2',
  variable: '--font-satoshi',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Pk Projects',
  description: 'Moje portfolio stworzone w Next.js i Tailwind CSS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className={`${satoshi.variable}`}>
      <body className="bg-background text-primary bg-main-bg bg-no-repeat bg-center bg-cover bg-fixed">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-8  lg:px-16 xl:px-0">
          <Header />
          <main>{children}</main>
        </div>
        <Footer />
        <ScrollToTopButton />
      </body>
    </html>
  );
}