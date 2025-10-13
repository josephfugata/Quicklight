import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Leaf, TreePine, Car } from 'lucide-react';

const stats = [
  {
    icon: <Leaf className="h-10 w-10 text-primary" />,
    value: '12,500+',
    label: 'Tons of CO2 Reduced',
    description: 'Equivalent to taking thousands of cars off the road each year.',
  },
  {
    icon: <TreePine className="h-10 w-10 text-primary" />,
    value: '2.1 Million+',
    label: 'Trees Saved',
    description: 'Our customers\' collective impact is like planting a new forest.',
  },
  {
    icon: <Car className="h-10 w-10 text-primary" />,
    value: '2,700+',
    label: 'Cars Off The Road',
    description: 'The annual carbon offset from the energy our systems produce.',
  },
];

export default function Impact() {
  return (
    <section id="impact" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our Collective Impact
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            When you switch to solar with us, you join a movement. Here's what our community has achieved together.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3 lg:gap-8">
          {stats.map((stat) => (
            <Card key={stat.label} className="text-center">
              <CardHeader className="items-center">
                {stat.icon}
                <CardTitle className="font-headline text-4xl font-bold mt-4">{stat.value}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-lg font-semibold">{stat.label}</p>
                <p className="mt-1 text-sm text-muted-foreground">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
