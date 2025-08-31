import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const techHighlights = [
  {
    name: 'Tier-1 Monocrystalline Panels',
    description: 'Maximum efficiency and a sleek, low-profile design to complement your home\'s aesthetics.',
  },
  {
    name: 'Smart Inverter Technology',
    description: 'Optimizes energy production for each individual panel and provides real-time performance monitoring.',
  },
  {
    name: 'Durable Racking & Mounting',
    description: 'Engineered to withstand extreme weather conditions, ensuring the safety and longevity of your system.',
  },
  {
    name: 'Optional Battery Storage',
    description: 'Store excess solar energy for use at night or during power outages for complete energy independence.',
  }
];

export default function OurTechnology() {
  return (
    <section id="technology" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4">
            <Badge variant="outline">Our Technology</Badge>
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Engineered for Performance
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              We use only the highest quality, field-proven components to build a solar energy system that you can rely on for decades to come.
            </p>
            <ul className="grid gap-4 mt-6">
              {techHighlights.map((tech) => (
                <li key={tech.name} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-semibold">{tech.name}</p>
                    <p className="text-sm text-muted-foreground">{tech.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center justify-center">
            <Card className="overflow-hidden">
                <CardContent className="p-0">
                    <Image
                        src="https://i.imgur.com/N8QdFo1.jpeg"
                        alt="Close-up of a high-efficiency solar panel"
                        width={600}
                        height={500}
                        className="h-full w-full object-cover"
                        data-ai-hint="solar panel close"
                    />
                </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
