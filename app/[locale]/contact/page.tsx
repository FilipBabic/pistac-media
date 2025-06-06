import { Separator } from '@/components/ui/separator';
import PageLayout from '@/app/components/PageLayout';
import ReusableSection from '@/app/components/reusable/ReusableSection';

const ContactPage = () => {
  return (
    <PageLayout>
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

export default ContactPage;
