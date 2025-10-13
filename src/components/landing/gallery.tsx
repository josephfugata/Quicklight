import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const projects = [
  {
    src: 'https://i.imgur.com/EXDqfUg.jpeg',
    alt: 'Modern home with a complete solar roof installation',
    hint: 'modern house solar',
    category: 'Residential',
  },
  {
    src: 'https://i.imgur.com/PpqkcGY.png',
    alt: 'Parking lot covered with solar panel carports',
    hint: 'solar carport',
    category: 'Commercial',
  },
  {
    src: 'https://i.imgur.com/N8QdFo1.jpeg',
    alt: 'Drone view of a large-scale solar farm',
    hint: 'solar farm',
    category: 'Utility-Scale',
  },
  {
    src: 'https://i.imgur.com/rYxb3ZY.jpeg',
    alt: 'Close-up of solar panels on a tiled roof',
    hint: 'roof solar',
    category: 'Residential',
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-block mb-2">
            <Badge variant="accent">Our Work</Badge>
          </div>
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            See the Difference We Make
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            Browse through some of our recent installations and see the quality of our work firsthand.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden group flex flex-col">
              <CardContent className="p-0 relative aspect-video">
                <Image
                  src={project.src}
                  alt={project.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint={project.hint}
                />
                 <div className="absolute bottom-0 left-0 bg-primary/80 text-primary-foreground px-3 py-1 text-sm font-semibold rounded-tr-lg">
                    {project.category}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
