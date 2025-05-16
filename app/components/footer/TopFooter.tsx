'use client';

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
  return (
    <footer className="bg-secondary border-border w-full border-t px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">
        {/* Contact Link */}
        <div className="text-center sm:text-left">
          <h4 className="text-lg font-semibold text-green-800">Contact Us</h4>
          <Link
            href="/contact"
            className="text-sm text-gray-500 transition-colors hover:text-white"
          >
            Get in touch with our team
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
              className="text-gray-700 transition-colors hover:text-white"
            >
              <Icon className="h-5 w-5" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
