import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Maria Dela Cruz',
    location: 'Quezon City',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
    rating: 5,
    text: "From the initial quote to the final installation, the process was incredibly smooth. The team was professional, and our electric bill has been close to zero ever since. Highly recommended!",
  },
  {
    name: 'John Lloyd Santos',
    location: 'Cebu City',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026705e',
    rating: 5,
    text: "I was hesitant about the upfront cost, but the financing options made it manageable. The long-term savings are undeniable. The best investment I've made for my home.",
  },
  {
    name: 'The Reyes Family',
    location: 'Davao City',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026706f',
    rating: 5,
    text: "Their customer service is top-notch. They answered all our questions patiently and the after-sales support has been fantastic. We feel secure in our choice.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
            <Badge variant="outline" className="mb-2">Happy Customers</Badge>
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
