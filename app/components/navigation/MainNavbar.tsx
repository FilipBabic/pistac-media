import { useTranslations } from 'next-intl';

import LocaleSwitcher from './LocaleSwitcher';
import NavigationLink from './NavigationLink';

export default function MainNavbar() {
  const t = useTranslations('Navigation');

  return (
    <nav className="bg-primary-100 flex justify-evenly p-2 text-base md:text-xl">
      <div>
        <NavigationLink href="/">{t('home').toUpperCase()}</NavigationLink>
        <NavigationLink href="/about">
          {t('about').toUpperCase()}
        </NavigationLink>
        <NavigationLink href="/services">
          {t('services').toUpperCase()}
        </NavigationLink>
      </div>
      <LocaleSwitcher />
    </nav>
  );
}
