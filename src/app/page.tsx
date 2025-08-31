import Header from '@/components/landing/header';
import Hero from '@/components/landing/hero';
import Services from '@/components/landing/services';
import Calculator from '@/components/landing/calculator';
import Impact from '@/components/landing/impact';
import Financing from '@/components/landing/financing';
import Consultation from '@/components/landing/consultation';
import Footer from '@/components/landing/footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <Calculator />
        <Impact />
        <Financing />
        <Consultation />
      </main>
      <Footer />
    </div>
  );
}
