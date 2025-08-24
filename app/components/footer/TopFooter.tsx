'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa';

const socialLinks = [
  {
    href: 'https://facebook.com',
    label: 'Facebook',
    icon: FaFacebook,
  },
  {
    href: 'https://instagram.com',
    label: 'Instagram',
    icon: FaInstagram,
  },
  {
    href: 'https://linkedin.com',
    label: 'LinkedIn',
    icon: FaLinkedin,
  },
  {
    href: 'https://twitter.com',
    label: 'Twitter',
    icon: FaTwitter,
  },
  {
    href: 'https://youtube.com',
    label: 'YouTube',
    icon: FaYoutube,
  },
];

export default function TopFooter() {
  const t = useTranslations('Footer.TopFooter');
  return (
    <footer className="bg-primary w-full px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">
        {/* Contact Link */}
        <div className="text-center sm:text-left">
          <h4 className="text-lg font-semibold text-white">
            {t('contact-us')}
          </h4>
          <Link
            href="/contact"
            className="text-primary-dark hover:text-secondary text-sm transition-colors"
          >
            {t('link')}
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4">
          {socialLinks.map(({ href, label, icon: Icon }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="hover:text-primary-dark text-white transition-colors"
            >
              <Icon className="h-5 w-5 transform transition-transform duration-200 hover:scale-120" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
