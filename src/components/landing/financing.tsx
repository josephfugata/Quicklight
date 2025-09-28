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
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 mx-auto max-w-5xl">
          <div className="space-y-4">
            <Badge variant="outline">Financial Incentives</Badge>
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Making Solar Affordable For Every Filipino
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We believe clean energy should be accessible. Discover the various incentives and financing options that can make your transition to solar even smarter.
            </p>
          </div>
          <div className="flex items-center">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-semibold font-headline">
                  Net Metering Program
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  Under the Renewable Energy Act of 2008, you can enroll in the Net Metering program. Export your excess solar energy to the grid and earn credits that will be deducted from your monthly electricity bill, significantly reducing your costs.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg font-semibold font-headline">
                  Bank Financing & Green Loans
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  Major banks across the Philippines offer specialized "Green Loans" for renewable energy projects. We can assist you in preparing the necessary documents to apply for financing to make your solar investment more manageable.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg font-semibold font-headline">
                  In-House Flexible Financing
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  We partner with leading green energy lenders to offer a range of financing solutions, including low-to-zero downpayment options. You can start saving from day one with a monthly payment that's often lower than your current electricity bill.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
