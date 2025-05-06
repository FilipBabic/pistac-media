import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['sr', 'en', 'de'],
  // Used when no locale matches
  defaultLocale: 'sr',
  pathnames: {
    // If all locales use the same pathname, a single
    // external path can be used for all locales
    '/': '/',

    // If some locales use different paths, you can
    // specify the relevant external pathnames
    '/about': {
      de: '/ueber-uns',
      en: '/about',
      sr: '/o-nama',
    },
    '/services': {
      de: '/dienstleistungen',
      en: '/services',
      sr: '/usluge',
    },
    '/blog': {
      de: '/blog',
      en: '/blog',
      sr: '/blog',
    },
  },
});
