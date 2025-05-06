import '../globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';

import { routing } from '@/i18n/routing';

import Navbars from '../components/navigation/Navbars';
import Footer from '../components/Footer';

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

export const metadata: Metadata = {
  title: 'Pistać Media',
  description:
    'Da bi vaš brend bio primećen i uspešan, potreban je moćan miks strategije, dizajna i sadržaja. Naš tim kreira moderne web sajtove, aplikacije i kompletan sadržaj za društvene mreže – od short videa do edukativnih vizuala. Pratimo trendove, biramo prave platforme (Instagram, TikTok, LinkedIn...) i vodimo vaše online prisustvo od A do Š.',
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
        className={`${roboto.className} ${anton.variable} ${bebas.variable} antialiased`}
      >
        <NextIntlClientProvider>
          <Navbars />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
