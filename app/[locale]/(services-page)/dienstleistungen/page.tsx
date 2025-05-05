import { useTranslations } from 'next-intl';

import PageLayout from '@/app/components/PageLayout';

const ServicesPage = () => {
  const t = useTranslations('About');
  return (
    <PageLayout>
      <div>AboutPaget{t('title')}</div>
      {/* <div>Description{t('description')}</div> */}
    </PageLayout>
  );
};

export default ServicesPage;
