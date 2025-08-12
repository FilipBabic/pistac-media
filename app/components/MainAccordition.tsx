import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { GlobeIcon, LayoutTemplateIcon, MegaphoneIcon } from 'lucide-react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import {
  getDigitalMarketingPosts,
  getWebSitePosts,
} from '@/constants/home-page';

import ReusableSection from './reusable/ReusableSection';
export function MainAccordition() {
  const t = useTranslations('Home.ImproveBusiness');
  const digitalMarketingPosts = getDigitalMarketingPosts(t);
  const webSitePosts = getWebSitePosts(t);
  return (
    <div>
      <ReusableSection
        translation="Home.ImproveBusiness"
        buttons={false}
        image={false}
      />
      <div className="flex flex-col justify-center md:flex-row">
        <Accordion
          type="multiple"
          className="w-full px-0 pb-8 text-white sm:pr-4"
        >
          <h1 className="flex items-center gap-2 text-3xl text-purple-500">
            <MegaphoneIcon className="mr-4 h-10 w-10 text-purple-500" />
            {t('digital-marketing.h1')}
          </h1>
          <p className="min-h-[160px] pt-4 text-base text-gray-700">
            {t('digital-marketing.p-1')}
          </p>
          {digitalMarketingPosts.map((item) => (
            <AccordionItem key={item.value} value={item.value}>
              <AccordionTrigger className="font-bebas text-xl">
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="font-roboto text-base leading-relaxed">
                <p>{item.content}</p>
                <Link href={item.link} passHref>
                  <Button className="mt-4 text-base" variant="secondary">
                    {t('button-2')}
                  </Button>
                </Link>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <Accordion
          type="multiple"
          className="w-full px-0 pb-4 text-white sm:pr-4"
        >
          <h1 className="flex items-center gap-2 text-3xl text-blue-500">
            <LayoutTemplateIcon className="mr-4 h-10 w-10 text-blue-500" />
            {t('web-apps.h1')}
          </h1>
          <p className="min-h-[160px] pt-4 text-base text-gray-700">
            {t('web-apps.p-1')}
          </p>
          {webSitePosts.map((item) => (
            <AccordionItem key={item.value} value={item.value}>
              <AccordionTrigger className="font-bebas text-xl">
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="font-roboto text-base leading-relaxed">
                <p className="text-base">{item.content}</p>
                <Link href={item.link} passHref>
                  <Button className="mt-4" variant="secondary">
                    {t('button-2')}
                  </Button>
                </Link>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <Accordion
          type="multiple"
          className="w-full px-0 pb-8 text-white sm:px-4"
        >
          <h1 className="flex items-center gap-2 text-3xl text-green-500">
            <GlobeIcon className="mr-4 h-10 w-10 text-green-500" />
            {t('web-sites.h1')}
          </h1>
          <p className="min-h-[160px] pt-4 text-base text-gray-700">
            {t('web-sites.p-1')}
          </p>
          {webSitePosts.map((item) => (
            <AccordionItem key={item.value} value={item.value}>
              <AccordionTrigger className="font-bebas text-xl">
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="font-roboto text-base leading-relaxed">
                <p className="text-base">{item.content}</p>
                <Link href={item.link} passHref>
                  <Button className="mt-4" variant="secondary">
                    {t('button-2')}
                  </Button>
                </Link>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
