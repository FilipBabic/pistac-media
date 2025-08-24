import PageLayout from '@/app/components/PageLayout';
import ReusableSection from '@/app/components/reusable/ReusableSection';

const PortfolioPage = () => {
  return (
    <PageLayout>
      <ReusableSection
        translation="PortfolioPage.Header"
        buttons={false}
        image={true}
        imageUrl="/assets/images/rukovanje-sa-klijentom.jpg"
      />
    </PageLayout>
  );
};

export default PortfolioPage;
