import { useTranslations } from 'next-intl';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

import PageLayout from './PageLayout';

export default function NotFoundPage() {
  const t = useTranslations('NotFoundPage');

  return (
    <PageLayout>
      <div className="flex flex-col items-center justify-center px-4 py-16 text-center sm:px-6 lg:px-8">
        <h1 className="mb-4 text-6xl font-bold text-[#93c572]">404</h1>
        <h2 className="mb-6 text-2xl font-semibold tracking-wider text-white">
          {t('title')}
        </h2>
        <p className="mb-8 max-w-[460px] text-gray-800">{t('description')}</p>
        <Button
          asChild
          variant="default"
          className="rounded-lg bg-white px-4 py-6 text-base font-bold text-gray-700 transition duration-300 hover:bg-gray-200"
        >
          <Link href="/">{t('goHome')}</Link>
        </Button>
      </div>
    </PageLayout>
  );
}
