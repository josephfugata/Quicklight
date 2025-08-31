import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '../ui/badge';

export default function Financing() {
  return (
    <section id="financing" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4">
            <Badge variant="outline">Financial Incentives</Badge>
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Making Solar Affordable For Everyone
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We believe clean energy should be accessible. Discover the various incentives and financing options that can make your transition to solar even smarter.
            </p>
          </div>
          <div className="flex items-center">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-semibold font-headline">
                  Federal Solar Tax Credit (ITC)
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  Homeowners can claim a tax credit for 30% of the cost of their solar panel system. This is a dollar-for-dollar reduction in the income taxes you owe, making it one of the most significant incentives available.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg font-semibold font-headline">
                  State & Local Rebates
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  Many states, municipalities, and utility companies offer additional rebates and incentives for installing solar. We'll help you identify and apply for every program you're eligible for in your area.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg font-semibold font-headline">
                  Flexible Financing Options
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  We partner with leading green energy lenders to offer a range of financing solutions, including $0-down solar loans. You can start saving from day one with a monthly loan payment that's often lower than your current electricity bill.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
