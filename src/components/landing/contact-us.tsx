import { Clock, Phone, Mail, MapPin, Facebook, Twitter } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '../ui/button';

const contactDetails = [
  {
    icon: <Clock className="h-8 w-8 text-primary" />,
    title: 'Office Hours',
    lines: ['Monday – Friday: 9AM to 6PM', 'Saturday: 8AM to 12NN'],
  },
  {
    icon: <Phone className="h-8 w-8 text-primary" />,
    title: 'Contact Us',
    lines: ['+63 915-3153391', '+63 921-2397720'],
  },
  {
    icon: <Mail className="h-8 w-8 text-primary" />,
    title: 'Email Us',
    lines: ['info@quicklightcorp.com'],
  },
  {
    icon: <MapPin className="h-8 w-8 text-primary" />,
    title: 'Our Company Address',
    lines: [
      '10-1 One Global Place,',
      '5th Avenue corner 5th Street,',
      'Fort Bonifacio, Taguig City, 1634, Philippines',
    ],
  },
];

export default function ContactUs() {
  return (
    <section id="contact-us" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Get In Touch
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            We're here to help with all your solar and lighting needs.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {contactDetails.map((detail) => (
            <Card key={detail.title} className="text-center flex flex-col">
              <CardHeader className="items-center">
                <div className="bg-primary/10 p-4 rounded-full">
                  {detail.icon}
                </div>
                <CardTitle className="font-headline text-xl font-bold mt-4">{detail.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                {detail.lines.map((line, index) => (
                  <p key={index} className="text-muted-foreground">
                    {line}
                  </p>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
            <h3 className="font-headline text-2xl font-bold tracking-tighter">Follow Us</h3>
            <div className="mt-4 flex justify-center gap-4">
                <Button size="icon" asChild>
                    <Link href="https://web.facebook.com/QuicklightSolar" target="_blank" aria-label="Facebook">
                        <Facebook className="h-6 w-6" />
                    </Link>
                </Button>
                <Button size="icon" asChild>
                    <Link href="https://x.com/QuicklightSolar/" target="_blank" aria-label="X">
                        <Twitter className="h-6 w-6" />
                    </Link>
                </Button>
            </div>
        </div>
        <div className="mt-12 text-center">
            <p className="text-lg font-semibold">QUICKLIGHT Solar and Lighting Solutions Inc.</p>
        </div>
      </div>
    </section>
  );
}
