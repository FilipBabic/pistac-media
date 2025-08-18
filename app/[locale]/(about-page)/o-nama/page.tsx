import { Separator } from '@/components/ui/separator';
import PageLayout from '@/app/components/PageLayout';
import ReusableSection from '@/app/components/reusable/ReusableSection';
import OurMission from '@/app/components/services-page/OurMission';
import OurVision from '@/app/components/services-page/OurVision';
import ClientsCarousel from '@/app/components/about-page/ClientsCarousel';
import OurTeamSection from '@/app/components/about-page/OurTeamSection';
// export const metadata = {
//   title: 'O nama - My Website',
//   description: 'Learn more about our team, mission, and values.',
// };
const AboutPage = () => {
  return (
    <PageLayout>
      <ReusableSection
        translation="AboutPage.Header"
        buttons={false}
        image={true}
        imageUrl="/assets/images/mockup-tablet-1.jpg"
      />
      <Separator className="bg-primary" />
      <ReusableSection
        translation="AboutPage.Mission"
        buttons={false}
        image={true}
        imageUrl="/assets/images/woman-with-laptop-1.jpg"
      />
      <OurMission />
      <Separator className="mt-20" />
      <ReusableSection
        translation="AboutPage.Vision"
        buttons={false}
        image={true}
        imageUrl="/assets/images/digitalne-usluge-rezultati.png"
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
