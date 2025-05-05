import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['sr', 'en', 'de'],
  defaultLocale: 'sr',
  localePrefix: 'as-needed', // Hides /sr but uses /en, /de etc.
});

export const config = {
  matcher: ['/((?!api|_next|_static|.*\\..*).*)'],
};
