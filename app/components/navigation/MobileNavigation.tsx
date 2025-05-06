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
          className="text-primary-dark mt-2 sm:hidden"
        />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="from-primary-400 to-primary border-none bg-gradient-to-r text-white"
      >
        <SheetHeader>
          <SheetTitle className="hidden">Navigation</SheetTitle>
          <SheetDescription className="hidden">Test</SheetDescription>

          <Link href="/" className="bg-primary-dark mt-6 flex items-center">
            <Image
              src="/assets/icons/logo.png"
              width={120}
              height={40}
              alt="Logo"
            />
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
                <NavigationLink href="/blog">BLOG</NavigationLink>
              </SheetClose>
            </section>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
