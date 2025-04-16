import './globals.css';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Pistać Media',
  description:
    'Da bi vaš brend bio primećen i uspešan, potreban je moćan miks strategije, dizajna i sadržaja. Naš tim kreira moderne web sajtove, aplikacije i kompletan sadržaj za društvene mreže – od short videa do edukativnih vizuala. Pratimo trendove, biramo prave platforme (Instagram, TikTok, LinkedIn...) i vodimo vaše online prisustvo od A do Š.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
