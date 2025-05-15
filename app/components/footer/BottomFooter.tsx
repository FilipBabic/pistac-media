import Link from 'next/link';

export default function BottomFooter() {
  return (
    <div className="bg-primary-dark mt-auto text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between px-4 py-6 md:flex-row">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Pistać Media. All rights reserved.
        </p>
        <div className="mt-2 flex space-x-4 md:mt-0">
          <Link href="/privacy" className="hover:text-primary-100 transition">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-primary-100 transition">
            Terms of Service
          </Link>
          <Link href="/contact" className="hover:text-primary-100 transition">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
