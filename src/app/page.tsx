import Header from '@/components/landing/header';
import Hero from '@/components/landing/hero';
import WhyChooseUs from '@/components/landing/why-choose-us';
import HowItWorks from '@/components/landing/how-it-works';
import Services from '@/components/landing/services';
import OurTechnology from '@/components/landing/our-technology';
import Calculator from '@/components/landing/calculator';
import Gallery from '@/components/landing/gallery';
import Testimonials from '@/components/landing/testimonials';
import Impact from '@/components/landing/impact';
import Environmental from '@/components/landing/environmental';
import Faq from '@/components/landing/faq';
import Financing from '@/components/landing/financing';
import Consultation from '@/components/landing/consultation';
import ContactUs from '@/components/landing/contact-us';
import Footer from '@/components/landing/footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <WhyChooseUs />
        <HowItWorks />
        <Services />
        <OurTechnology />
        <Calculator />
        <Gallery />
        <Testimonials />
        <Impact />
        <Environmental />
        <Faq />
        <Financing />
        <Consultation />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
}
