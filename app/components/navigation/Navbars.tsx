'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

import MainNavbar from './MainNavbar';
export default function Navbars() {
  const [topVisible, setTopVisible] = useState(true);
  const topRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = topRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setTopVisible(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0,
      },
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, []);

  return (
    <>
      <div
        ref={topRef}
        className={`bg-primary-dark flex w-full items-center justify-between py-2 text-white transition-opacity duration-500 sm:px-8 ${
          topVisible ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <Link href="/">
          <div style={{ position: 'relative', width: 120, height: 40 }}>
            <Image
              src="/assets/icons/logo.png"
              alt="Logo"
              fill
              sizes="120px"
              priority
              style={{ objectFit: 'contain' }}
              className="items-center"
            />
          </div>
        </Link>
        <p className="font-bebas text-center">
          Pozovite nas:{' '}
          <span className="text-secondary">
            <br></br>065/0540004
          </span>
        </p>
        <Link href="/services">
          <Button
            variant="outline"
            className="text-primary-dark font-bebas mr-2"
          >
            Cene usluga
          </Button>
        </Link>
      </div>

      <div
        className={`w-full transition-all duration-300 ${
          topVisible ? '' : 'sticky top-0 right-0 left-0 z-50 shadow-md'
        }`}
      >
        <MainNavbar />
      </div>
    </>
  );
}
