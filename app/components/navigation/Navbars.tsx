'use client';
import { useEffect, useRef, useState } from 'react';

import MainNavbar from './MainNavbar';

export default function Navbars() {
  const [isSticky, setIsSticky] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting);
      },
      { threshold: 0 },
    );

    observer.observe(sentinel);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Sentinel element to detect scroll past this point */}
      <div ref={sentinelRef} className="bg-primary h-1" />

      {/* Sticky navbar */}
      <div
        className={`w-full transition-all duration-300 ${
          isSticky ? 'sticky top-0 right-0 left-0 z-50 shadow-md' : ''
        }`}
      >
        <MainNavbar />
      </div>
    </>
  );
}
