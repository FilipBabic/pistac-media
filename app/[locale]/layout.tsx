import '../globals.css';
import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';

import { routing } from '@/i18n/routing';

import Navbars from '../components/navigation/Navbars';
import Footer from '../components/footer/Footer';
import PopupDialog from '../components/PopupDialog';

const anton = localFont({
  src: '../fonts/AntonVF.ttf',
  variable: '--font-anton',
  weight: '100 200 300 400 500 600 700 800 900',
});

const roboto = localFont({
  src: '../fonts/RobotoVF.ttf',
  variable: '--font-roboto',
  weight: '100 200 300 400 500 600 700 800 900',
});

const bebas = localFont({
  src: '../fonts/BebasNeueVF.ttf',
  variable: '--font-bebas',
  weight: '100 200 300 400 500 600 700 800 900',
});

const poppins = localFont({
  src: '../fonts/PoppinsVF.ttf',
  variable: '--font-poppins',
  weight: '100 200 300 400 500 600 700 800 900',
});

export const metadata: Metadata = {
  title: 'Pistać Media | Digitalne strategije koje donose rezultate',
  description:
    'Pomazemo brendovima da rastu online - kroz sadrzaj koji se pamti, kampanje koje prodaju i strategije koje traju.',
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html lang={locale}>
      <body
        className={`${poppins.className} ${roboto.variable} ${anton.variable} ${bebas.variable} antialiased`}
      >
        <NextIntlClientProvider>
          <Navbars />
          {children}
          <Footer />
        </NextIntlClientProvider>
        <PopupDialog />
        <Analytics />
      </body>
    </html>
  );
}
