'use client';
import { CheckIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

import { getServices } from '@/constants/home-page';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function ServicesSection() {
  const t = useTranslations('Home.Services');
  const services = getServices(t);

  const directions = [
    { x: -100, y: 0 },
    { x: 0, y: 100 },
    { x: 100, y: 0 },
  ];
  return (
    <section className="gap-6 py-10 md:py-20">
      <div className="mb-12">
        <Badge className="bg-secondary border-primary-500 mb-4 text-lg text-white">
          {t('badge')}
        </Badge>
        <h2 className="text-3xl font-bold text-white md:text-5xl">{t('h2')}</h2>
        <p className="mt-4 max-w-2xl text-lg text-gray-700 md:text-xl">
          {t('p-1')}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => {
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, ...directions[index] }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="w-full max-w-xl rounded-2xl bg-white shadow-xl"
            >
              <Card className="border-primary-dark bg-white transition duration-300 hover:shadow-xl">
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
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
