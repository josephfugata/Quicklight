import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Home, Lightbulb, TrafficCone, Waypoints, Zap, Network } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';

const services = [
  {
    icon: <Home className="mb-4 h-8 w-8 text-primary" />,
    title: 'Grid-Tied Home Solar',
    description: 'Seamlessly integrate solar power into your home, reduce your electricity bills, and gain energy independence with our reliable grid-tied systems.',
    image: {
      src: 'https://i.imgur.com/MmOxF11.jpeg',
      alt: 'Solar panels on a residential roof',
      hint: 'house solar'
    },
    testimonial: {
      text: 'The installation was professional and quick. Our energy bills have been cut by over 80%! Truly a game-changer for our family.',
      author: 'The Johnson Family',
    },
  },
  {
    icon: <Network className="mb-4 h-8 w-8 text-primary" />,
    title: 'Net Metering & Power Quality Analysis',
    description: 'Export excess solar energy back to the grid and get credited on your bill. We also provide power quality analysis to ensure your system is optimized.',
    image: {
      src: 'https://i.imgur.com/aHHXKqE.png',
      alt: 'Chart showing energy production and consumption',
      hint: 'energy chart'
    },
    testimonial: {
      text: 'Understanding our energy flow with the analysis helped us save even more than we expected. It\'s a brilliant service.',
      author: 'A. Fernandez',
    },
  },
  {
    icon: <Lightbulb className="mb-4 h-8 w-8 text-primary" />,
    title: 'Solar Street Lights (HVAC Affiliated)',
    description: 'Illuminate communities with our high-performance solar street lights, affiliated with HVAC for top-tier quality and reliability.',
    image: {
      src: 'https://i.imgur.com/TlJqrRA.png',
      alt: 'A solar-powered street light at dusk',
      hint: 'solar streetlight'
    },
    testimonial: {
      text: 'QuickLight\'s solar street lights have been a fantastic, low-maintenance solution for our new development project.',
      author: 'City Planner, Springfield',
    },
  },
  {
    icon: <TrafficCone className="mb-4 h-8 w-8 text-primary" />,
    title: 'Solar Traffic Flashers',
    description: 'Enhance road safety with our durable, off-grid solar traffic flashers and warning signs. High visibility and zero running costs.',
    image: {
      src: 'https://i.imgur.com/7U6J49P.png',
      alt: 'A solar-powered traffic flasher on a road',
      hint: 'traffic safety'
    },
    testimonial: {
      text: 'These flashers are incredibly reliable, even during long stretches of cloudy weather. A must-have for traffic safety.',
      author: 'Department of Transportation',
    },
  },
];

const externalServices = [
    {
        icon: <Zap className="mb-4 h-8 w-8 text-primary" />,
        title: 'Energy Management',
        description: 'Optimize your energy consumption with advanced management systems. We partner with industry leaders to provide comprehensive solutions.',
        link: 'https://google.com', // Replace with the actual external link
    }
]

export default function Services() {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Solutions for a Sustainable Tomorrow
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            From homes to highways, we provide top-tier solar technology designed for performance and reliability.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:gap-8">
          {services.map((service) => (
            <Card key={service.title} className="flex flex-col overflow-hidden">
              <CardHeader>
                <div className="flex items-start gap-4">
                  {service.icon}
                  <div>
                    <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
                    <CardDescription className="mt-1">{service.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-center">
                <div className="aspect-video overflow-hidden rounded-lg border">
                  <Image
                    src={service.image.src}
                    alt={service.image.alt}
                    width={600}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    data-ai-hint={service.image.hint}
                  />
                </div>
              </CardContent>
              <CardFooter className="mt-auto">
                <blockquote className="w-full border-l-4 border-primary pl-4 italic text-sm">
                  <p className="text-foreground/80">"{service.testimonial.text}"</p>
                  <cite className="mt-2 block text-right font-semibold not-italic text-foreground">
                    - {service.testimonial.author}
                  </cite>
                </blockquote>
              </CardFooter>
            </Card>
          ))}
          {externalServices.map((service) => (
             <Card key={service.title} className="flex flex-col overflow-hidden">
              <CardHeader>
                <div className="flex items-start gap-4">
                  {service.icon}
                  <div>
                    <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
                    <CardDescription className="mt-1">{service.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-center items-center">
                <p className='text-muted-foreground text-center mb-4'>Learn more about our advanced energy management solutions through our partner website.</p>
                <Button asChild>
                    <Link href={service.link} target="_blank">
                        Learn More
                    </Link>
                </Button>
              </CardContent>
               <CardFooter>
                 <blockquote className="w-full border-l-4 border-primary pl-4 italic text-sm">
                 </blockquote>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
