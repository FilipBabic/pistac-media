import { Separator } from '@/components/ui/separator';
import PageLayout from '@/app/components/PageLayout';
import ReusableSection from '@/app/components/reusable/ReusableSection';
import OurMission from '@/app/components/services-page/OurMission';
import OurVision from '@/app/components/services-page/OurVision';
import ClientsCarousel from '@/app/components/about-page/ClientsCarousel';
import OurTeamSection from '@/app/components/about-page/OurTeamSection';
const AboutPage = () => {
  return (
    <PageLayout>
      <ReusableSection
        translation="AboutPage.Header"
        buttons={false}
        image={true}
        imageUrl="/assets/images/digital-marketing-ilustration.png"
      />
      <Separator />
      <ReusableSection
        translation="AboutPage.Mission"
        buttons={false}
        image={true}
        imageUrl="/assets/images/digital-marketing-ilustration-2.png"
      />
      <OurMission />
      <Separator className="mt-20" />
      <ReusableSection
        translation="AboutPage.Vision"
        buttons={false}
        image={true}
        imageUrl="/assets/images/why-choose-us-2.png"
      />
      <OurVision />
      <Separator className="mt-20" />
      <ClientsCarousel />
      <Separator />
      <OurTeamSection />
    </PageLayout>
  );
};

export default AboutPage;
