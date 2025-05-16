import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
type Props = {
  translation: string;
  buttons: boolean;
  image: boolean;
  imageUrl?: string;
};
export default function ReusableSection({
  translation,
  buttons = false,
  image = true,
  imageUrl,
}: Props) {
  const t = useTranslations(`${translation}`);
  return (
    <section className="gap-6 py-10 md:py-20">
      <div className="mb-12 flex flex-col items-center justify-between gap-8 text-left text-gray-700 md:flex-row">
        <div className="w-full text-left md:w-2/3">
          <Badge className="mb-4 bg-green-700 text-base">{t('badge')}</Badge>
          <h2 className="font-bebas text-3xl font-bold text-white md:text-5xl">
            {t('h2')}
          </h2>
          <div className="mt-4 max-w-2xl text-left text-base text-gray-600 md:text-lg">
            {t.rich('p-1', {
              p: (chunks) => <p className="mt-4">{chunks}</p>,
              b: (chunks) => <b>{chunks}</b>,
            })}
          </div>
          {buttons && (
            <div className="mt-6 flex flex-row justify-center gap-4 text-gray-700 sm:justify-start">
              <Link href="/contact">
                <Button variant="outline" className="hover:bg-primary bg-white">
                  {t('button-1')}
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" className="hover:bg-primary bg-white">
                  {t('button-2')}
                </Button>
              </Link>
            </div>
          )}
        </div>

        {image && (
          <div className="relative w-full max-w-xs md:w-1/3 md:max-w-sm">
            <Image
              src={`${imageUrl}`}
              alt="Woman With Megaphone"
              width={400}
              height={400}
              className="object-contain"
              priority
              sizes="(max-width: 768px) 80vw, (max-width: 1200px) 40vw, 25vw"
            />
          </div>
        )}
      </div>
    </section>
  );
}
