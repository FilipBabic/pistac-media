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
        className={`bg-primary-dark flex w-full items-center justify-evenly py-2 text-white transition-opacity duration-500 ${
          topVisible ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <Image
          src="/assets/icons/logo.png"
          width={160}
          height={80}
          alt="Logo"
          className="items-center"
        />
        <p className="font-anton text-center">
          Pozovite nas:{' '}
          <span className="text-secondary font-anton">
            <br></br>065/0540004
          </span>
        </p>
        <Link href="/services">
          <Button variant="outline" className="text-primary-dark">
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
