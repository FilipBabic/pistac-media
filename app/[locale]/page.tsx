import { Separator } from '@/components/ui/separator';

import Header from '../components/home-page/Header';
import PageLayout from '../components/PageLayout';
import { MainAccordition } from '../components/MainAccordition';
import WhyChooseUs from '../components/home-page/WhyChooseUs';
import Services from '../components/home-page/Services';

const Home = () => {
  return (
    <PageLayout>
      <div className="mx-auto mb-20 w-full">
        <Header />
        <Separator className="bg-primary" />
        <WhyChooseUs />
        <Separator />
        <Services />
        <Separator />
        <MainAccordition />
      </div>
    </PageLayout>
  );
};

export default Home;
