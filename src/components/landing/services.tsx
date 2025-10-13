'use client';

import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Home, Lightbulb, Thermometer, Zap, Network } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Rocket } from 'lucide-react';


const services = [
  {
    icon: <Home className="mb-4 h-8 w-8 text-primary" />,
    title: 'Grid-Tied Home Solar',
    description: 'Seamlessly integrate solar power into your home, reduce your electricity bills, and gain energy independence with our reliable grid-tied systems.',
    image: {
      src: '/Solar Homes.webp',
      alt: 'Solar panels on a residential roof',
      hint: 'house solar'
    },
  },
  {
    icon: <Network className="mb-4 h-8 w-8 text-primary" />,
    title: 'Net Metering & Power Quality Analysis',
    description: 'Export excess solar energy back to the grid and get credited on your bill. We also provide power quality analysis to ensure your system is optimized.',
    image: {
      src: '/Net-Metering.webp',
      alt: 'Chart showing energy production and consumption',
      hint: 'energy chart'
    },
  },
  {
    icon: <Lightbulb className="mb-4 h-8 w-8 text-primary" />,
    title: 'Solar Street Lights',
    description: 'Illuminate communities with our high-performance solar street lights, known for top-tier quality and reliability.',
    image: {
      src: '/Solar Street Lights.webp',
      alt: 'A solar-powered street light at dusk',
      hint: 'solar streetlight'
    },
  },
  {
    icon: <Thermometer className="mb-4 h-8 w-8 text-primary" />,
    title: 'Heating, Ventilation and Air Conditioning (HVAC)',
    description: 'Efficient HVAC solutions to ensure comfort in your home or business, powered by clean energy.',
    image: {
      src: '/HVAC.webp',
      alt: 'An HVAC unit on the side of a building.',
      hint: 'HVAC unit'
    },
  },
];

const comingSoonServices = [
    {
        icon: <Zap className="mb-4 h-8 w-8 text-primary" />,
        title: 'QUICKLIGHT Energy Management',
        description: 'Take full control of your energy future. Our upcoming platform will empower you to monitor production, track savings, and optimize consumption in real-time.',
        image: {
            src: '/green energy.avif',
            alt: 'Smart home dashboard showing energy consumption',
            hint: 'smart home energy'
        }
    }
]

export default function Services() {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
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
              <CardHeader className="flex-shrink-0">
                <div className="flex items-start gap-4">
                  {service.icon}
                  <div>
                    <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
                    <CardDescription className="mt-1 min-h-[60px]">{service.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-end p-6 pt-0">
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
            </Card>
          ))}
          {comingSoonServices.map((service) => (
             <Card key={service.title} className="md:col-span-2 flex flex-col overflow-hidden">
                <div className="grid md:grid-cols-2 gap-6 items-center">
                    <div>
                        <CardHeader>
                            <div className="flex items-start gap-4">
                            {service.icon}
                            <div>
                                <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
                                <CardDescription className="mt-1">{service.description}</CardDescription>
                            </div>
                            </div>
                        </CardHeader>
                        <CardContent className="p-6 pt-0">
                            <p className='text-muted-foreground text-sm text-center mb-4'>A powerful new way to manage your energy is on the way. Get ready to unlock the full potential of your solar investment.</p>
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button className="w-full">
                                  Get Ready
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="sm:max-w-[425px] text-center">
                                <DialogHeader>
                                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                                      <Rocket className="h-6 w-6 text-primary" />
                                  </div>
                                  <DialogTitle className="text-2xl font-headline">Get Ready to Launch!</DialogTitle>
                                  <DialogDescription className="text-lg">
                                    The <span className="font-semibold text-primary">QUICKLIGHT Energy Management</span> is launching soon.
                                  </DialogDescription>
                                </DialogHeader>
                                <div className="py-4">
                                  <p className="text-muted-foreground">This powerful platform will give you unprecedented control over your energy usage, providing real-time insights and maximizing your savings. Stay tuned for the official release!</p>
                                </div>
                              </DialogContent>
                            </Dialog>
                        </CardContent>
                    </div>
                    <div className="p-6 md:p-0 md:pr-6 md:py-6">
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
                    </div>
                </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
