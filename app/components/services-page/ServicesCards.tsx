'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { getServices } from '@/constants/services-page';

export default function ServicesSection() {
  const t = useTranslations('ServicesPage.ServicesList');
  const services = getServices(t);
  return (
    <section className="py-10 text-white">
      <Badge className="bg-secondary mb-4 border-1 border-white text-lg text-white">
        {t('badge')}
      </Badge>
      <div className="mx-auto max-w-6xl px-4 py-10 text-center">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <Card className="border-primary-dark overflow-hidden rounded-lg bg-white text-gray-700 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="mb-2 text-2xl font-semibold">
                    {service.title}
                  </h3>
                  <div className="from-primary-900 to-primary-100 mb-4 h-[2px] w-full -skew-y-3 transform bg-gradient-to-r"></div>
                  <p className="text-sm leading-relaxed text-gray-700">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
