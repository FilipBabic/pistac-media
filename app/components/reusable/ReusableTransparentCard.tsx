import type { LucideIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { Card, CardContent } from '@/components/ui/card';
type IconCardProps = {
  translation: string;
  icon: LucideIcon;
};

export default function ReusableTransparentCard({
  translation,
  icon: Icon,
}: IconCardProps) {
  const t = useTranslations(`${translation}`);
  return (
    <Card className="bg-secondary h-full rounded-2xl border-0 pt-4 shadow-md">
      <CardContent className="flex flex-col items-start space-y-3">
        <div className="rounded-xl bg-green-700 p-2">
          <Icon className="h-6 w-6 text-white" />
        </div>
        <h3 className="font-bebas text-lg font-semibold text-green-700">
          {t('title')}
        </h3>
        <p className="text-left text-base text-gray-600">{t('content')}</p>
      </CardContent>
    </Card>
  );
}
