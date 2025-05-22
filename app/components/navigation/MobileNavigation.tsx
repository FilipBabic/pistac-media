import { SquareMenu } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

import NavigationLink from './NavigationLink';

export default function MobileNavigation() {
  const t = useTranslations('Navigation');
  return (
    <Sheet>
      <SheetTrigger asChild>
        <SquareMenu
          width={36}
          height={36}
          className="text-primary mt-2 sm:hidden"
        />
      </SheetTrigger>
      <SheetContent side="left" className="bg-secondary border-none text-white">
        <SheetHeader>
          <SheetTitle className="hidden">Navigation</SheetTitle>
          <SheetDescription className="hidden">Test</SheetDescription>

          <Link href="/" className="mt-6 bg-green-700 p-1">
            <div style={{ position: 'relative', width: 120, height: 40 }}>
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

          <div className="no-scrollbar flex h-[calc(100vh-80px)] flex-col justify-between overflow-y-auto">
            <section className="flex h-full flex-col gap-1 pt-4">
              <SheetClose asChild>
                <NavigationLink href="/">
                  {t('home').toUpperCase()}
                </NavigationLink>
              </SheetClose>
              <SheetClose asChild>
                <NavigationLink href="/about">
                  {t('about').toUpperCase()}
                </NavigationLink>
              </SheetClose>
              <SheetClose asChild>
                <NavigationLink href="/services">
                  {t('services').toUpperCase()}
                </NavigationLink>
              </SheetClose>
              <SheetClose asChild>
                <NavigationLink href="/portfolio">PORTFOLIO</NavigationLink>
              </SheetClose>
              <SheetClose asChild>
                <NavigationLink href="/blog">BLOG</NavigationLink>
              </SheetClose>
              <SheetClose asChild>
                <NavigationLink href="/contact">
                  {t('contact').toUpperCase()}
                </NavigationLink>
              </SheetClose>
            </section>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
