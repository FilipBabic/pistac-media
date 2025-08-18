import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';

import { ThemeToggle } from '../ThemeToggle';

import LocaleSwitcher from './LocaleSwitcher';
import NavigationLink from './NavigationLink';
import MobileNavigation from './MobileNavigation';

export default function MainNavbar() {
  const t = useTranslations('Navigation');

  return (
    <nav className="bg-primary px-4 py-2 text-base md:text-xl">
      <div className="relative flex w-full items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center gap-2">
          {/* Mobile Navigation */}
          <div className="block md:hidden">
            <MobileNavigation />
          </div>

          {/* Logo (Desktop Only) */}
          <div className="hidden md:block">
            <Link href="/">
              <div style={{ position: 'relative', width: 120, height: 50 }}>
                <Image
                  src="/assets/icons/pistac-media-logo.png"
                  alt="Logo"
                  fill
                  sizes="120px"
                  priority
                  style={{ objectFit: 'contain' }}
                  className="items-center"
                />
              </div>
            </Link>
          </div>
        </div>

        {/* Center Section */}
        <div className="absolute left-1/2 flex -translate-x-1/2 items-center">
          {/* Mobile: Centered Logo */}
          <div className="block md:hidden">
            <Link href="/">
              <div style={{ position: 'relative', width: 120, height: 50 }}>
                <Image
                  src="/assets/icons/pistac-media-logo.png"
                  alt="Logo"
                  fill
                  sizes="120px"
                  priority
                  style={{ objectFit: 'contain' }}
                  className="items-left"
                />
              </div>
            </Link>
          </div>

          {/* Desktop: Navigation Links */}
          <div className="hidden gap-1 md:flex">
            <NavigationLink href="/">{t('home').toUpperCase()}</NavigationLink>
            <NavigationLink href="/about">
              {t('about').toUpperCase()}
            </NavigationLink>
            <NavigationLink href="/services">
              {t('services').toUpperCase()}
            </NavigationLink>
            <NavigationLink href="/portfolio">PORTFOLIO</NavigationLink>
            <NavigationLink href="/blog">BLOG</NavigationLink>
            <NavigationLink href="/contact">
              {t('contact').toUpperCase()}
            </NavigationLink>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-end space-y-2">
          <ThemeToggle />
          <LocaleSwitcher />
        </div>
      </div>
    </nav>
  );
}
