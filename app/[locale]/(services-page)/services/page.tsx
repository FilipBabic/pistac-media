import PageLayout from '@/app/components/PageLayout';
import Header from '@/app/components/services-page/Header';
import ServicesCards from '@/app/components/services-page/ServicesCards';

const ServicesPage = () => {
  return (
    <PageLayout>
      <div className="mx-auto w-full">
        <Header />
        <ServicesCards />
      </div>
    </PageLayout>
  );
};

export default ServicesPage;
