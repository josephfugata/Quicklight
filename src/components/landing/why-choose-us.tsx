import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Clock, ShieldCheck, Users } from 'lucide-react';

const features = [
  {
    icon: <Award className="h-10 w-10 text-primary" />,
    title: 'Decades of Expertise',
    description: 'With over 20 years in the solar industry, our experience ensures top-quality installation and service.',
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    title: 'Premium Quality & Warranty',
    description: 'We use only Tier-1 solar panels and components, backed by industry-leading 25-year performance warranties.',
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: 'Customer-First Approach',
    description: 'Your satisfaction is our priority. We provide transparent pricing, clear communication, and dedicated support.',
  },
  {
    icon: <Clock className="h-10 w-10 text-primary" />,
    title: 'Lifetime Local Support',
    description: 'As your neighbors, we\'re here for the long haul, offering lifetime support and maintenance for your system.',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="mx-auto max-w-3xl text-center">
            <div className="inline-block mb-2">
                <Badge variant="accent">Why Choose Us?</Badge>
            </div>
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Your Trusted Partner in Solar
          </h2>
          <div className="mt-4 text-muted-foreground md:text-xl space-y-4 text-left md:text-center">
            <p>We are Builders of the <strong>Future!</strong></p>
            <p>Solar is not only a free energy resource, but it is also the most environment-friendly energy solution.</p>
            <p>The significant feel-good return of doing something that is environmentally right drives us. We help our customers capitalize on our country’s innate advantages on the solar front, for we believe that it is time to put the power in your hands, the time to go Solar is NOW!</p>
          </div>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="text-center transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
              <CardHeader className="items-center">
                {feature.icon}
                <CardTitle className="font-headline text-xl font-bold mt-4">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
