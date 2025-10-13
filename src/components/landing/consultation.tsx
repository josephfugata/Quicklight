'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { format } from 'date-fns';
import { Calendar as CalendarIcon, Send } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';

const FormSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  phone: z.string().min(10, {
    message: 'Please enter a valid phone number.',
  }),
  preferredDate: z.date({
    required_error: 'A preferred date is required.',
  }),
  preferredTime: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, {
    message: 'Please enter a valid time in HH:MM format.',
  }),
  message: z.string().optional(),
});

export default function Consultation() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
      preferredTime: '09:00',
    }
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfhngi7hrjPJ68i7ybnJXlPo1ZhKdBtLekCcktS5S58KQpshQ/formResponse";
    
    const formData = new URLSearchParams();
    formData.append('entry.1477542278', data.name);
    formData.append('entry.1863678000', data.email);
    formData.append('entry.864263134', data.phone);
    
    formData.append('entry.2041386120_year', data.preferredDate.getFullYear().toString());
    formData.append('entry.2041386120_month', (data.preferredDate.getMonth() + 1).toString());
    formData.append('entry.2041386120_day', data.preferredDate.getDate().toString());
    
    const [hour, minute] = data.preferredTime.split(':');
    formData.append('entry.975787232_hour', hour);
    formData.append('entry.975787232_minute', minute);

    formData.append('entry.1815042143', data.message || '');

    try {
      await fetch(googleFormUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString(),
      });

      toast({
        title: 'Booking Request Sent!',
        description: `Thank you, ${data.name}. We've received your request and will be in touch shortly to confirm your consultation.`,
      });
      form.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        variant: 'destructive',
        title: 'Something went wrong.',
        description: 'There was an error sending your request. Please try again.',
      });
    }
  }

  return (
    <section id="consultation" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <Card className="mx-auto max-w-2xl shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
              Ready for a Brighter Future?
            </CardTitle>
            <CardDescription className="mt-2 text-lg">
              Schedule your free, no-obligation energy assessment today. Let's explore your solar potential together.
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} aria-label="Full Name" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="you@example.com" {...field} aria-label="Email" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="09171234567" {...field} aria-label="Phone Number" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-end">
                    <FormField
                      control={form.control}
                      name="preferredDate"
                      render={({ field }) => (
                        <FormItem className="flex flex-col mt-2">
                          <FormLabel>Preferred Date</FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant={'outline'}
                                  className={cn(
                                    'w-full pl-3 text-left font-normal',
                                    !field.value && 'text-muted-foreground'
                                  )}
                                  aria-label="Pick a preferred date"
                                >
                                  {field.value ? (
                                    format(field.value, 'PPP')
                                  ) : (
                                    <span>Pick a date</span>
                                  )}
                                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) =>
                                  date < new Date() || date < new Date('1900-01-01')
                                }
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                     <FormField
                        control={form.control}
                        name="preferredTime"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Preferred Time</FormLabel>
                            <FormControl>
                                <Input type="time" {...field} aria-label="Preferred Time" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem className='mt-6'>
                        <FormLabel>Message (Optional)</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your project or any questions you have..."
                            className="resize-none"
                            {...field}
                            aria-label="Message (Optional)"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full mt-6" size="lg">
                    {'Request My Free Assessment'}
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
