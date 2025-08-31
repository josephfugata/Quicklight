import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Wind, Droplets, Globe } from 'lucide-react';

const stats = [
  {
    icon: <Wind className="h-8 w-8 text-primary" />,
    value: 'Cleaner Air',
    description: 'Reduces harmful emissions from fossil fuels, improving local air quality.',
  },
  {
    icon: <Droplets className="h-8 w-8 text-primary" />,
    value: 'Water Conservation',
    description: 'Solar power requires little to no water to operate, unlike traditional power plants.',
  },
  {
    icon: <Globe className="h-8 w-8 text-primary" />,
    value: 'Climate Action',
    description: 'Directly combats climate change by providing a clean, zero-emission energy source.',
  },
];

export default function Environmental() {
  return (
    <section id="environmental" className="w-full py-12 md:py-24 lg:py-32">
       <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
        <div className="space-y-4">
            <Badge variant="outline">Planet Positive</Badge>
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Powering a Greener Planet
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
            Choosing solar is one of the most impactful decisions you can make for the environment. It's more than just saving money; it's about investing in a sustainable legacy.
            </p>
            <div className="grid gap-6 mt-6 sm:grid-cols-1">
                {stats.map((stat) => (
                    <div key={stat.value} className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-full">
                           {stat.icon}
                        </div>
                        <div>
                            <h3 className="text-lg font-bold">{stat.value}</h3>
                            <p className="text-muted-foreground">{stat.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <div className="flex justify-center">
            <Image
                src="https://picsum.photos/600/600"
                alt="Image of a lush green landscape with a clear blue sky"
                width="600"
                height="600"
                className="rounded-xl object-cover aspect-square"
                data-ai-hint="nature landscape"
            />
        </div>
      </div>
    </section>
  );
}
