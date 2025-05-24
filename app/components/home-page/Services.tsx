import {
  LayoutTemplateIcon,
  GlobeIcon,
  MegaphoneIcon,
  CheckIcon,
} from 'lucide-react';
import { useTranslations } from 'next-intl';

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function ServicesSection() {
  const t = useTranslations('Home.Services');
  return (
    <section className="gap-6 py-10 md:py-20">
      <div className="mb-12">
        <Badge className="bg-secondary text-primary-dark mb-4 text-base">
          {t('badge')}
        </Badge>
        <h2 className="text-3xl font-bold text-white md:text-5xl">{t('h2')}</h2>
        <p className="mt-4 max-w-2xl text-lg text-gray-700 md:text-xl">
          {t('p-1')}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: `${t('Cards.title-1')}`,
            icon: (
              <LayoutTemplateIcon className="mb-0 h-12 w-12 text-green-600" />
            ),
            color: 'text-green-600',
            bulletColor: 'text-green-500',
            bullets: [
              `${t('Cards.Bullets-1.content-1')}`,
              `${t('Cards.Bullets-1.content-2')}`,
              `${t('Cards.Bullets-1.content-3')}`,
            ],
          },
          {
            title: `${t('Cards.title-2')}`,
            icon: <GlobeIcon className="mb-0 h-12 w-12 text-blue-600" />,
            color: 'text-blue-600',
            bulletColor: 'text-blue-500',
            bullets: [
              `${t('Cards.Bullets-2.content-1')}`,
              `${t('Cards.Bullets-2.content-2')}`,
              `${t('Cards.Bullets-2.content-3')}`,
            ],
          },
          {
            title: `${t('Cards.title-3')}`,
            icon: <MegaphoneIcon className="mb-0 h-12 w-12 text-purple-600" />,
            color: 'text-purple-600',
            bulletColor: 'text-purple-500',
            bullets: [
              `${t('Cards.Bullets-3.content-1')}`,
              `${t('Cards.Bullets-3.content-2')}`,
              `${t('Cards.Bullets-3.content-3')}`,
            ],
          },
        ].map((service, index) => {
          return (
            <Card
              key={index}
              className="border-primary-dark bg-white transition duration-300 hover:shadow-xl"
            >
              <CardHeader className="flex items-center space-x-4">
                {service.icon}
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="mb-4 space-y-2 text-sm text-gray-700">
                  {service.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-center">
                      <CheckIcon
                        className={`mr-2 h-4 w-4 ${service.bulletColor}`}
                      />{' '}
                      {bullet}
                    </li>
                  ))}
                </ul>
                <Button variant="outline">{t('button')}</Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
