import { Clock, Phone, Mail, MapPin, Facebook } from 'lucide-react';
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
    lines: ['+63917 626 9698'],
  },
  {
    icon: <Mail className="h-8 w-8 text-primary" />,
    title: 'Email Us',
    lines: ['info@quicklight.pinoyentrepreneur.me'],
  },
  {
    icon: <MapPin className="h-8 w-8 text-primary" />,
    title: 'Our Company Address',
    lines: [
      'Altica Arcade, Circumferential Road,',
      'Antipolo City, Rizal.',
    ],
  },
];

export default function ContactUs() {
  return (
    <section id="contact-us" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
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
              <CardContent className="flex-grow pt-0">
                {detail.lines.map((line, index) => (
                  <p key={index} className="text-muted-foreground">
                    {line}
                  </p>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-16 text-center">
            <h3 className="font-headline text-2xl font-bold tracking-tighter mb-6">Stay Connected</h3>
            <div className="flex justify-center">
                <Card className="w-full max-w-lg shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-6 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6">
                        <div className="flex items-center gap-4">
                            <Facebook className="h-10 w-10 text-[#1877F2] flex-shrink-0" />
                            <div>
                                <p className="font-bold text-lg text-left">Follow us on Facebook</p>
                                <p className="text-sm text-muted-foreground text-left">Get the latest updates and see our projects.</p>
                            </div>
                        </div>
                        <Button asChild className="w-full sm:w-auto mt-4 sm:mt-0 flex-shrink-0">
                            <Link href="https://web.facebook.com/QuicklightSolar" target="_blank" aria-label="Facebook">
                                Visit Page
                            </Link>
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
        <div className="mt-12 text-center">
            <p className="text-lg font-semibold">QUICKLIGHT Solar and Lighting Solutions Inc.</p>
        </div>
      </div>
    </section>
  );
}
