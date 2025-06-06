'use client';

import clsx from 'clsx';
import { useSelectedLayoutSegment } from 'next/navigation';
import { ComponentProps } from 'react';

import { Link } from '@/i18n/navigation';

export default function NavigationLink({
  href,
  ...rest
}: ComponentProps<typeof Link>) {
  const selectedLayoutSegment = useSelectedLayoutSegment();

  const segmentMap: Record<string, string> = {
    '(services-page)': 'services',
    '(about-page)': 'about',
  };

  const normalizedSegment = selectedLayoutSegment
    ? segmentMap[selectedLayoutSegment] || selectedLayoutSegment
    : null;

  const pathname = normalizedSegment ? `/${normalizedSegment}` : '/';
  const isActive = pathname === href;
  return (
    <Link
      aria-current={isActive ? 'page' : undefined}
      className={clsx(
        'font-bebas inline-block px-2 py-3 font-thin transition-colors',
        isActive
          ? 'text-secondary underline md:bg-transparent'
          : 'text-primary transition-transform duration-300 ease-in-out hover:scale-115',
      )}
      href={href}
      {...rest}
    />
  );
}
