import {
  RocketIcon,
  CheckCircleIcon,
  ShieldIcon,
  SmileIcon,
} from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

import { Separator } from '@/components/ui/separator';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
export default function WhyChooseUs() {
  const t = useTranslations('Home.WhyChooseUs');
  return (
    <section className="gap-6 py-10 md:py-20">
      <div className="mb-12 flex flex-col items-center justify-between gap-8 text-left text-gray-700 md:flex-row">
        <div className="w-full md:w-2/3">
          <Badge className="mb-4 text-base">{t('badge')}</Badge>
          <h2 className="text-3xl font-bold text-white md:text-5xl">
            {t('h2')}
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-gray-600 md:text-xl">
            {t('p-1')}
          </p>
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

      <div className="mx-auto grid grid-cols-1 gap-4 px-2 md:grid-cols-2 lg:grid-cols-4">
        {[
          {
            icon: <RocketIcon className="mb-0 h-12 w-12 text-green-600" />,
            title: `${t('Cards.title-1')}`,
            content: `${t('Cards.content-1')}`,
          },
          {
            icon: <CheckCircleIcon className="mb-0 h-12 w-12 text-green-600" />,
            title: `${t('Cards.title-2')}`,
            content: `${t('Cards.content-2')}`,
          },
          {
            icon: <ShieldIcon className="mb-0 h-12 w-12 text-green-600" />,
            title: `${t('Cards.title-3')}`,
            content: `${t('Cards.content-3')}`,
          },
          {
            icon: <SmileIcon className="mb-0 h-12 w-12 text-green-600" />,
            title: `${t('Cards.title-4')}`,
            content: `${t('Cards.content-4')}`,
          },
        ].map((item, idx) => (
          <Card
            key={idx}
            className="bg-secondary flex h-full flex-col items-center justify-between border-white text-center"
          >
            <CardHeader className="flex w-full flex-col items-center">
              {item.icon}
              <CardTitle className="w-full text-lg font-bold text-balance text-green-700">
                {item.title}
              </CardTitle>
            </CardHeader>
            <Separator className="mx-4 bg-white" />
            <CardContent className="flex flex-grow items-center text-xl text-balance text-gray-700 md:text-lg">
              <p>{item.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
