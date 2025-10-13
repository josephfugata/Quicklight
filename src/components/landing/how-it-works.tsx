'use client';

import { Badge } from '@/components/ui/badge';
import { DraftingCompass, FileCheck, PanelsTopLeft, Wrench, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

const steps = [
  {
    icon: <DraftingCompass className="h-8 w-8" />,
    title: '1. Consultation & Design',
    description: "We start with a free consultation to understand your needs and design a custom solar system for your property.",
  },
  {
    icon: <FileCheck className="h-8 w-8" />,
    title: '2. Permitting & Paperwork',
    description: "Our team handles all the necessary permits and paperwork with your local government and utility company.",
  },
  {
    icon: <PanelsTopLeft className="h-8 w-8" />,
    title: '3. Professional Installation',
    description: "Our certified installers will set up your system efficiently and safely, typically within 1-2 days.",
  },
  {
    icon: <Wrench className="h-8 w-8" />,
    title: '4. Inspection & Activation',
    description: "We'll coordinate the final inspection and get your system connected to the grid and generating power.",
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: '5. Start Saving',
    description: "Flip the switch and start enjoying clean, renewable energy and significantly lower electricity bills.",
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="mx-auto max-w-3xl text-center">
            <div className="inline-block mb-2">
                <Badge variant="accent">Our Process</Badge>
            </div>
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Going Solar in 5 Simple Steps
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            We make your journey to energy independence straightforward and hassle-free.
          </p>
        </div>

        <div className="mt-12">
            <div className="relative grid gap-y-12">
                {/* The timeline line */}
                <div className="absolute left-6 md:left-1/2 top-0 h-full w-0.5 bg-border -translate-x-1/2" aria-hidden="true" />
                
                {steps.map((step, index) => (
                  <div key={step.title} className="relative grid items-center md:grid-cols-2">
                      {/* Icon and circle */}
                      <div className={cn(
                        `flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center absolute left-6 md:left-1/2 top-1 -translate-x-1/2 z-10 ring-8 ring-secondary`,
                        index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-2'
                      )}
                      style={{gridRow: '1'}}>
                          {step.icon}
                      </div>

                      {/* Content block */}
                      <div className={cn(
                          'p-6 rounded-lg bg-card shadow-md border transform transition-transform hover:scale-105 hover:shadow-xl ml-12 md:ml-0',
                          index % 2 === 0 ? 'md:col-start-1 md:mr-[50%] md:pr-16' : 'md:col-start-2 md:ml-[50%] md:pl-16 md:text-left'
                      )}
                      style={{gridRow: '1'}}>
                          <h3 className={cn("text-xl font-bold font-headline", index % 2 !== 0 && 'md:text-right')}>{step.title}</h3>
                          <p className={cn("mt-2 text-muted-foreground", index % 2 !== 0 && 'md:text-right')}>{step.description}</p>
                      </div>
                  </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}