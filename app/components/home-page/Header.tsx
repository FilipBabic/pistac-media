import Link from 'next/link';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

import { Button } from '@/components/ui/button';

import { AnimatedWords } from '../AnimatedWords';

export default function Header() {
  const t = useTranslations('Home.Header');
  return (
    <header className="flex w-full flex-col items-center justify-center py-10 text-white sm:py-14 md:flex-row">
      <section className="animate-slide-in-left flex flex-col items-center justify-center px-6 text-center">
        <AnimatedWords
          text={t('h1')}
          className="dark:text-secondary mb-4 text-4xl leading-tight font-extrabold text-white md:text-6xl"
        />
        <p className="mb-8 max-w-2xl text-lg text-gray-700 md:text-xl dark:text-white">
          {t('p-1')}
        </p>
        <div className="text-primary-dark mt-6 flex flex-row justify-center gap-4 sm:justify-start dark:text-white">
          <Link href="/contact">
            <Button
              variant="outline"
              className="bg-white text-base hover:cursor-pointer hover:bg-gray-100"
            >
              {t('link-1')}
            </Button>
          </Link>
          <Link href="/services">
            <Button
              variant="outline"
              className="bg-white text-base hover:cursor-pointer hover:bg-gray-100"
            >
              {t('link-2')}
            </Button>
          </Link>
        </div>
        {/* <Button
          asChild
          variant="outline"
          className="hover:bg-primary rounded-lg bg-white px-4 py-6 text-lg font-bold text-gray-700 transition duration-300 hover:text-white"
        >
          <Link href="/contact">{t('link')}</Link>
        </Button> */}

        <p className="mt-4 text-sm font-bold text-white">{t('p-2')}</p>
      </section>
      <div className="relative h-96 w-full rounded-2xl md:h-240 lg:h-[500px]">
        <Image
          src="/assets/images/digitalni-marketing-agencija.png"
          alt="Phone In Woman Hand With Digital Marketing Plan Blurred in Background"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 50vw"
          className="rounded-md object-cover p-4 sm:object-contain sm:p-0"
          priority
        />
      </div>
    </header>
  );
}
