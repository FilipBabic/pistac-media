import {
  LayoutTemplateIcon,
  GlobeIcon,
  MegaphoneIcon,
  CheckCircleIcon,
  RocketIcon,
  ShieldIcon,
  SmileIcon,
} from 'lucide-react';

export const getServices = (t: (key: string) => string) => [
  {
    title: t('Cards.title-1'),
    icon: <MegaphoneIcon className="mb-0 h-12 w-12 text-purple-600" />,
    color: 'text-purple-600',
    bulletColor: 'text-purple-500',
    bullets: [
      t('Cards.Bullets-1.content-1'),
      t('Cards.Bullets-1.content-2'),
      t('Cards.Bullets-1.content-3'),
    ],
  },
  {
    title: t('Cards.title-2'),
    icon: <LayoutTemplateIcon className="mb-0 h-12 w-12 text-green-600" />,
    color: 'text-green-600',
    bulletColor: 'text-green-500',
    bullets: [
      t('Cards.Bullets-2.content-1'),
      t('Cards.Bullets-2.content-2'),
      t('Cards.Bullets-2.content-3'),
    ],
  },
  {
    title: t('Cards.title-3'),
    icon: <GlobeIcon className="mb-0 h-12 w-12 text-blue-600" />,
    color: 'text-blue-600',
    bulletColor: 'text-blue-500',
    bullets: [
      t('Cards.Bullets-3.content-1'),
      t('Cards.Bullets-3.content-2'),
      t('Cards.Bullets-3.content-3'),
    ],
  },
];
export const getWhyChooseUs = (t: (key: string) => string) => [
  {
    icon: <RocketIcon className="mb-0 h-8 w-8 text-green-600" />,
    title: `${t('Cards.title-1')}`,
    content: `${t('Cards.content-1')}`,
  },
  {
    icon: <CheckCircleIcon className="mb-0 h-8 w-8 text-green-600" />,
    title: `${t('Cards.title-2')}`,
    content: `${t('Cards.content-2')}`,
  },
  {
    icon: <ShieldIcon className="mb-0 h-8 w-8 text-green-600" />,
    title: `${t('Cards.title-3')}`,
    content: `${t('Cards.content-3')}`,
  },
  {
    icon: <SmileIcon className="mb-0 h-8 w-8 text-green-600" />,
    title: `${t('Cards.title-4')}`,
    content: `${t('Cards.content-4')}`,
  },
];

export const getDigitalMarketingPosts = (t: (key: string) => string) => [
  {
    value: 'item-1',
    title: `${t('digital-marketing.title-1')}`,
    content: `${t('digital-marketing.content-1')}`,
    link: '/blog/kako-da-unapredim-interakciju-sa-pratiocima',
  },
  {
    value: 'item-2',
    title: `${t('digital-marketing.title-2')}`,
    content: `${t('digital-marketing.content-2')}`,
    link: '/blog/kako-da-unapredim-posecenost-mojih-naloga',
  },
  {
    value: 'item-3',
    title: `${t('digital-marketing.title-3')}`,
    content: `${t('digital-marketing.content-3')}`,
    link: '/blog/kako-da-unapredim-prodaju-mojih-usluga',
  },
];

export const getWebSitePosts = (t: (key: string) => string) => [
  {
    value: 'item-1',
    title: `${t('web-sites.title-1')}`,
    content: `${t('web-sites.content-1')}`,
    link: '/blog/kako-da-unapredim-interakciju-sa-pratiocima',
  },
  {
    value: 'item-2',
    title: `${t('web-sites.title-2')}`,
    content: `${t('web-sites.content-2')}`,
    link: '/blog/kako-da-unapredim-posecenost-mojih-naloga',
  },
  {
    value: 'item-3',
    title: `${t('web-sites.title-3')}`,
    content: `${t('web-sites.content-3')}`,
    link: '/blog/kako-da-unapredim-prodaju-mojih-usluga',
  },
];

export const getWebAppPosts = (t: (key: string) => string) => [
  {
    value: 'item-1',
    title: `${t('web-sites.title-1')}`,
    content: `${t('web-sites.content-1')}`,
    link: '/blog/kako-da-unapredim-interakciju-sa-pratiocima',
  },
  {
    value: 'item-2',
    title: `${t('web-sites.title-2')}`,
    content: `${t('web-sites.content-2')}`,
    link: '/blog/kako-da-unapredim-posecenost-mojih-naloga',
  },
  {
    value: 'item-3',
    title: `${t('web-sites.title-3')}`,
    content: `${t('web-sites.content-3')}`,
    link: '/blog/kako-da-unapredim-prodaju-mojih-usluga',
  },
];
