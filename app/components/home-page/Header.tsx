import Link from 'next/link';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

import { Button } from '@/components/ui/button';

export default function Header() {
  const t = useTranslations('Home.Header');
  return (
    <header className="flex w-full flex-col items-center justify-center text-white md:flex-row">
      <section className="animate-slide-in-left flex flex-col items-center justify-center px-6 py-24 text-center">
        <h1 className="mb-4 text-4xl leading-tight font-extrabold md:text-6xl">
          {t('h1')}
        </h1>
        <p className="mb-8 max-w-2xl text-lg text-gray-700 md:text-xl">
          {t('p-1')}
        </p>
        <Button
          asChild
          className="hover:bg-primary-800 rounded-lg bg-white px-8 py-8 text-xl font-bold text-green-700 transition duration-300 hover:text-white"
        >
          <Link href="/about">{t('link')}</Link>
        </Button>

        <p className="mt-4 text-sm text-white">{t('p-2')}</p>
      </section>
      <div className="relative h-96 w-full md:h-96 lg:h-[500px]">
        <Image
          src="/assets/images/women-with-megaphone.jpg"
          alt="Women With Megaphone"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 50vw"
          className="animate-slide-in-left object-contain pb-12"
          priority
        />
      </div>
    </header>
  );
}
