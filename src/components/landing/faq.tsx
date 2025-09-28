import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';

const faqs = [
    {
        question: "How much does a solar panel system cost?",
        answer: "The cost varies depending on your energy needs, system size, and equipment. We provide a free, no-obligation quote tailored to your specific situation. Government incentives and flexible financing can significantly reduce the upfront cost."
    },
    {
        question: "How long do solar panels last?",
        answer: "Our high-quality solar panels are built to last and come with a 25-year performance warranty. With proper maintenance, they can continue to generate power for 30 years or more."
    },
    {
        question: "What happens on cloudy days or at night?",
        answer: "Solar panels can still produce energy on cloudy days, though less than on a sunny day. At night, you will draw power from the grid. You can also add a battery storage system to store excess energy for use anytime, ensuring power even during outages."
    },
    {
        question: "Do I need to clean my solar panels?",
        answer: "In most climates, regular rainfall is sufficient to clean your panels. However, in areas with a lot of dust or pollen, an occasional cleaning may be needed to maintain peak performance. We can advise you on best practices."
    },
    {
        question: "What is net metering?",
        answer: "Net metering is a billing mechanism that credits solar energy system owners for the electricity they add to the grid. When your system produces more electricity than you consume, you can 'sell' the excess back to the utility, often as a credit on your bill."
    }
];

export default function Faq() {
  return (
    <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
            <Badge variant="outline" className="mb-2">Got Questions?</Badge>
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Frequently Asked Questions
            </h2>
        </div>
        <div className="mt-12 max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index + 1}`}>
                        <AccordionTrigger className="text-lg font-semibold font-headline text-left">
                            {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-base text-muted-foreground">
                            {faq.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
      </div>
    </section>
  );
}
