import PageLayout from '@/app/components/PageLayout';
import ReusableSection from '@/app/components/reusable/ReusableSection';

const PricesPage = () => {
  return (
    <PageLayout>
      <ReusableSection
        translation="PricesPage.Header"
        buttons={false}
        image={true}
        imageUrl="/assets/images/digital-marketing-team.png"
      />
    </PageLayout>
  );
};

export default PricesPage;
