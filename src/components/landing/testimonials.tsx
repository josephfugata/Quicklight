import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Rodehlia Macaspac, MBA, Ed.D',
    location: 'Assistant Dean, Our Lady of Fatima University, Graduate School and Manager at Center for Professional Development and Academic Partnership',
    avatar: '/Rodehlia Macaspac.webp',
    rating: 5,
    text: "The solar light was delivered quickly and with all parts fully intact. We initially exposed the solar panel to the daylight sun, and it’s battery became full in 6 hours. At night, it lighted the garden beautifully, especially the staircase. It made our area safer with its bright light. A satisfied product user here.",
  },
  {
    name: 'GOLDILOCKS BAKESHOP CORPORATION',
    location: 'Director',
    avatar: '/Goldilocks.webp',
    rating: 5,
    text: "Quicklight Solar Corporation is a trusted company for solar panels and other items. Also, the support and service is outstanding. They suggest what’s the best for our office and store needs. From inspection, survey to installation staff are knowledgeable on the products. Great customer service! I recommend Quicklight Solar Thank you,",
  },
  {
    name: 'Venus B. Raj',
    location: 'Miss Universe 2010 4th Runner-up & Bb. Pilipinas-Universe 2010.',
    avatar: '/Venus Raj.webp',
    rating: 5,
    text: "Because of the devastation that happened in Bicol recently, i’m just glad that Quicklight Solar sent me a solar panel that I can bring to my home in Bicol. The power supply there has been cut, and this would be very helpful to my family in this trying time! Honestly, i’m really happy that my family gets to use quicklight! What a useful thing to have!",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="mx-auto max-w-3xl text-center">
            <div className="inline-block mb-2">
                <Badge variant="accent">Happy Customers</Badge>
            </div>
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                What Our Clients Say
            </h2>
            <p className="mt-4 text-muted-foreground md:text-xl">
                Real stories from homeowners and businesses who chose a brighter future with us.
            </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-1 lg:grid-cols-3 lg:gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="flex flex-col">
              <CardContent className="p-6 flex-grow">
                 <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                  ))}
                </div>
                <blockquote className="italic text-muted-foreground">
                  "{testimonial.text}"
                </blockquote>
              </CardContent>
              <div className="bg-secondary p-6 pt-4 mt-auto">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
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
