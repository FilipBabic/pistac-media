import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function BottomFooter() {
  const t = useTranslations('Footer.BottomFooter');
  return (
    <div className="bg-primary-dark text-primary mt-auto">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between px-4 py-6 md:flex-row">
        <p className="text-sm text-white">
          &copy; {new Date().getFullYear()} Pistać Media. {t('rights')}.
        </p>
        <div className="mt-2 flex space-x-4 md:mt-0">
          <Link href="/privacy" className="hover:text-primary-100 transition">
            {t('privacy')}
          </Link>
          <Link href="/terms" className="hover:text-primary-100 transition">
            {t('terms')}
          </Link>
        </div>
      </div>
    </div>
  );
}
