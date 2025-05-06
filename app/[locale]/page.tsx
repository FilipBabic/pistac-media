import { Separator } from '@/components/ui/separator';

import Header from '../components/home-page/Header';
import PageLayout from '../components/PageLayout';
import { InputWithButton } from '../components/InputWithButton';
import { MainAccordition } from '../components/MainAccordition';
import WhyChooseUs from '../components/home-page/WhyChooseUs';
import Services from '../components/home-page/Services';

const Home = () => {
  return (
    <PageLayout>
      <div className="mx-auto w-full">
        <Header />
        <Separator />
        <WhyChooseUs />
        <Separator />
        <Services />
        <Separator />
        <InputWithButton />
        <MainAccordition />
      </div>
    </PageLayout>
  );
};

export default Home;
