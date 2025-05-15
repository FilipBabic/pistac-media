import { Separator } from '@/components/ui/separator';
import PageLayout from '@/app/components/PageLayout';
import ReusableSection from '@/app/components/reusable/ReusableSection';

const AboutPage = () => {
  return (
    <PageLayout>
      <ReusableSection
        translation="AboutPage.Header"
        buttons={false}
        image={true}
        imageUrl="/assets/images/digital-marketing-team.png"
      />
      <Separator />
    </PageLayout>
  );
};

export default AboutPage;
