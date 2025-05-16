import { useTranslations } from 'next-intl';

import LocaleSwitcher from './LocaleSwitcher';
import NavigationLink from './NavigationLink';
import MobileNavigation from './MobileNavigation';

export default function MainNavbar() {
  const t = useTranslations('Navigation');

  return (
    <nav className="bg-primary-100 flex justify-between p-2 text-base md:justify-evenly md:text-xl">
      <div>
        <MobileNavigation />
        <div className="hidden sm:flex">
          <NavigationLink href="/">{t('home').toUpperCase()}</NavigationLink>
          <NavigationLink href="/about">
            {t('about').toUpperCase()}
          </NavigationLink>
          <NavigationLink href="/services">
            {t('services').toUpperCase()}
          </NavigationLink>
          <NavigationLink href="/blog">BLOG</NavigationLink>
          <NavigationLink href="/contact">
            {t('contact').toUpperCase()}
          </NavigationLink>
        </div>
      </div>
      <LocaleSwitcher />
    </nav>
  );
}
