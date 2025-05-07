// app/usluge/page.tsx ili app/(routes)/usluge/page.tsx

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function Header() {
  const t = useTranslations('ServicesPage.Header');
  return (
    <section className="gap-6 py-10 md:py-20">
      <div className="mb-12 flex flex-col items-center justify-between gap-8 text-left text-gray-700 md:flex-row">
        <div className="w-full text-center sm:text-left md:w-2/3">
          <Badge className="bg-primary-400 mb-4 text-base">{t('badge')}</Badge>
          <h2 className="font-bebas text-3xl font-bold text-white md:text-5xl">
            {t('h1')}
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-balance text-gray-700 md:text-xl">
            {t('p-1')}
          </p>
          <div className="mt-6 flex flex-row justify-center gap-4 text-gray-700 sm:justify-start">
            <Link href="/kontakt">
              <Button variant="outline" className="hover:bg-primary bg-white">
                {t('button-1')}
              </Button>
            </Link>
            <Link href="#ponuda">
              <Button variant="outline" className="hover:bg-primary bg-white">
                {t('button-2')}
              </Button>
            </Link>
          </div>
        </div>

        <div className="relative w-full max-w-xs md:w-1/3 md:max-w-sm">
          <Image
            src="/assets/images/why-choose-us.png"
            alt="Woman With Megaphone"
            width={400}
            height={400}
            className="object-contain"
            priority
            sizes="(max-width: 768px) 80vw, (max-width: 1200px) 40vw, 25vw"
          />
        </div>
      </div>
    </section>
  );
}
