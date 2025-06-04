import type { LucideIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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
    <Card className="border-primary-dark flex h-full flex-col items-center bg-white text-center">
      <CardHeader className="flex w-full flex-col items-center">
        <Icon className="mb-0 h-8 w-8 text-green-600" />
        <CardTitle className="w-full text-lg font-semibold text-balance text-black">
          {t('title')}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-grow items-center px-4 text-center text-base text-gray-700">
        {t('content')}
      </CardContent>
    </Card>
  );
}
