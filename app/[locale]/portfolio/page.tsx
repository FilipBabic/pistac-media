import { Separator } from '@/components/ui/separator';
import PageLayout from '@/app/components/PageLayout';
import ReusableSection from '@/app/components/reusable/ReusableSection';

const PortfolioPage = () => {
  return (
    <PageLayout>
      <h1>PORFTFOLIO</h1>
      <ReusableSection
        translation="ContactPage.Header"
        buttons={true}
        image={true}
        imageUrl="/assets/images/digital-marketing-team.png"
      />
      <Separator />
    </PageLayout>
  );
};

export default PortfolioPage;
