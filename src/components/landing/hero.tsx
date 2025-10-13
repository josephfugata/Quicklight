import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-[80vh] min-h-[500px] w-full">
      <Image
        src="/Hero.jpeg"
        alt="Solar panels on a modern house roof"
        fill
        className="object-cover"
        data-ai-hint="solar panels sunset"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20 backdrop-blur-sm" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <div className="container max-w-4xl px-4">
          <h1 className="font-headline text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            A Brighter Future, Powered by the Sun
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-200 md:text-xl">
            Embrace clean energy and unlock incredible savings. We make switching to solar simple, affordable, and rewarding for your home and our planet.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="#calculator">Estimate Your Savings</Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href="#services">Explore Our Solutions</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
