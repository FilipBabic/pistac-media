'use client';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { getWhyChooseUs } from '@/constants/home-page';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
export default function WhyChooseUs() {
  const t = useTranslations('Home.WhyChooseUs');
  const whyChooseUs = getWhyChooseUs(t);
  return (
    <section className="gap-6 py-10 md:py-20">
      <div className="mb-12 flex flex-col items-center justify-start text-left text-gray-700 md:flex-row">
        <div className="w-full md:w-2/3">
          <Badge className="bg-secondary mb-4 border-1 border-white text-lg text-white">
            {t('badge')}
          </Badge>
          <h2 className="text-3xl font-bold text-white md:text-5xl">
            {t('h2')}
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-gray-700 md:text-xl dark:text-gray-400">
            {t('p-1')}
          </p>
        </div>

        <div className="relative w-full max-w-xs md:w-1/3 md:max-w-sm">
          <motion.div
            initial={{ opacity: 0 }} // Start 100px below
            whileInView={{ opacity: 1 }} // Animate to natural position
            transition={{
              duration: 1.6,
              delay: 0.2, // Staggered by index
              ease: 'easeOut',
            }}
            viewport={{ once: true }}
          >
            <Image
              src="/assets/images/digitalni-uspeh-strategija.png"
              alt="Woman With Megaphone"
              width={400}
              height={400}
              className="object-contain"
              priority
              sizes="(max-width: 768px) 80vw, (max-width: 1200px) 40vw, 25vw"
            />
          </motion.div>
        </div>
      </div>

      <div className="mx-auto grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {whyChooseUs.map((item, index) => (
          <motion.div
            key={index}
            initial={{ y: 100 }} // Start 100px below
            whileInView={{ y: 0 }} // Animate to natural position
            transition={{
              duration: 0.6,
              delay: index * 0.2, // Staggered by index
              ease: 'easeOut',
            }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <Card className="border-primary-dark flex h-full flex-col items-center bg-white text-center">
              <CardHeader className="flex w-full flex-col items-center">
                {item.icon}
                <CardTitle className="w-full text-lg font-semibold text-balance text-black">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-grow items-center px-4 text-center text-base text-gray-700">
                <p>{item.content}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
