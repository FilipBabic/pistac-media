import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { Badge } from '@/components/ui/badge';
const logos = [
  { src: '/assets/clients/inter-sport.webp', href: 'https://client1.com' },
  { src: '/assets/clients/djak-sport.jpg', href: 'https://client2.com' },
  {
    src: '/assets/images/digital-marketing-ilustration.png',
    href: 'https://client1.com',
  },
  {
    src: '/assets/images/digital-marketing-ilustration-2.png',
    href: 'https://client1.com',
  },
  {
    src: '/assets/images/digital-marketing-ilustration-3.png',
    href: 'https://client1.com',
  },
  {
    src: '/assets/icons/logo.png',
    href: 'https://client1.com',
  },
  {
    src: '/assets/icons/pistac-media-logo.png',
    href: 'https://client1.com',
  },
];

export default function ClientsCarousel() {
  const t = useTranslations('AboutPage.Clients');
  const repeatedLogos = [...logos, ...logos, ...logos];

  return (
    <div className="relative w-full overflow-hidden bg-[--color-primary-100] py-6">
      <Badge className="bg-secondary text-primary-dark mb-6 text-base">
        {t('h1')}
      </Badge>
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="logo-marquee relative h-20 overflow-hidden">
          <div className="animate-marquee flex min-w-max gap-12 hover:[animation-play-state:paused]">
            {repeatedLogos.map((logo, index) => (
              <Link
                key={index}
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative h-16 w-28 flex-shrink-0 grayscale transition duration-300 hover:grayscale-0"
              >
                <Image
                  src={logo.src}
                  alt={`Client ${index}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: 'contain' }}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
