import { Badge } from '@/components/ui/badge';
import { DraftingCompass, FileCheck, PanelsTopLeft, Wrench, Zap } from 'lucide-react';

const steps = [
  {
    icon: <DraftingCompass className="h-10 w-10" />,
    title: '1. Consultation & Design',
    description: "We start with a free consultation to understand your needs and design a custom solar system for your property.",
  },
  {
    icon: <FileCheck className="h-10 w-10" />,
    title: '2. Permitting & Paperwork',
    description: "Our team handles all the necessary permits and paperwork with your local government and utility company.",
  },
  {
    icon: <PanelsTopLeft className="h-10 w-10" />,
    title: '3. Professional Installation',
    description: "Our certified installers will set up your system efficiently and safely, typically within 1-2 days.",
  },
  {
    icon: <Wrench className="h-10 w-10" />,
    title: '4. Inspection & Activation',
    description: "We'll coordinate the final inspection and get your system connected to the grid and generating power.",
  },
  {
    icon: <Zap className="h-10 w-10" />,
    title: '5. Start Saving',
    description: "Flip the switch and start enjoying clean, renewable energy and significantly lower electricity bills.",
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="outline" className="mb-2">Our Process</Badge>
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Going Solar in 5 Simple Steps
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            We make your journey to energy independence straightforward and hassle-free.
          </p>
        </div>
        <div className="relative mt-12">
            <div className="absolute left-1/2 top-10 bottom-10 w-0.5 bg-border -translate-x-1/2 hidden md:block" />
            <div className="grid gap-12 md:grid-cols-1">
            {steps.map((step, index) => (
                <div key={step.title} className="relative flex items-center md:justify-center">
                <div className="flex items-center gap-6 md:gap-8 flex-col text-center md:flex-row md:text-left md:w-full">
                    <div className={`flex items-center justify-center p-4 rounded-full bg-primary text-primary-foreground`}>
                        {step.icon}
                    </div>
                    <div className="flex-1">
                        <h3 className="text-xl font-bold font-headline">{step.title}</h3>
                        <p className="mt-2 text-muted-foreground">{step.description}</p>
                    </div>
                </div>
              </div>
            ))}
            </div>
        </div>
      </div>
    </section>
  );
}
