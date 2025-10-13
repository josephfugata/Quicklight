'use client';

import { useState, useMemo, useCallback } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { DollarSign, Leaf, TrendingUp } from 'lucide-react';

// Define the range for the electricity bill
const MIN_BILL = 1000;
const MAX_BILL = 500000;

// Logarithmic scale functions
// Convert a linear slider value (0-100) to a logarithmic bill amount
const logValue = (position: number) => {
  const min = Math.log(MIN_BILL);
  const max = Math.log(MAX_BILL);
  const scale = (max - min) / 100;
  return Math.round(Math.exp(min + scale * position));
};

// Convert a bill amount back to a linear slider position (0-100)
const logPosition = (value: number) => {
  const min = Math.log(MIN_BILL);
  const max = Math.log(MAX_BILL);
  const scale = (max - min) / 100;
  return (Math.log(value) - min) / scale;
};


export default function Calculator() {
  const [monthlyBill, setMonthlyBill] = useState(6000);

  const { yearlySavings, lifetimeSavings, co2Reduction } = useMemo(() => {
    const bill = Math.max(MIN_BILL, Math.min(MAX_BILL, monthlyBill));

    // New baseline and formula based on user request.
    const BASELINE_BILL = 6000;
    const SAVINGS_RATIO = 10; // 60000 yearly savings / 6000 monthly bill
    const CO2_RATIO = 95 / 6000; // 95 tons CO2 / 6000 monthly bill

    const yearlySavings = bill * SAVINGS_RATIO;
    const lifetimeSavings = yearlySavings * 25; // 25-year lifespan
    const co2Reduction = bill * CO2_RATIO;
    
    return {
      yearlySavings: Math.round(yearlySavings),
      lifetimeSavings: Math.round(lifetimeSavings),
      co2Reduction: Math.round(co2Reduction),
    };
  }, [monthlyBill]);

  const handleSliderChange = useCallback((value: number[]) => {
    setMonthlyBill(logValue(value[0]));
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = parseInt(e.target.value, 10);
    if (isNaN(value)) {
        value = MIN_BILL;
    }
    setMonthlyBill(value);
  };
  
  const sliderPosition = useMemo(() => {
    const bill = Math.max(MIN_BILL, Math.min(MAX_BILL, monthlyBill));
    return [logPosition(bill)];
  }, [monthlyBill]);


  return (
    <section id="calculator" className="w-full py-12 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-5xl">
            <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
                <div className="flex flex-col justify-center space-y-4">
                    <div className="space-y-2">
                        <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
                        Calculate Your Solar Savings
                        </h2>
                        <p className="max-w-[600px] text-muted-foreground md:text-lg">
                        Use the slider or enter your average monthly electricity bill to see your potential savings and environmental impact.
                        </p>
                    </div>
                     <Card className="p-6">
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label htmlFor="monthly-bill" className="text-sm font-medium">
                                Average Monthly Electricity Bill (PHP)
                                </label>
                                <div className="flex items-center gap-4">
                                <span className="text-xl font-bold font-headline">₱</span>
                                <Input
                                    id="monthly-bill"
                                    type="number"
                                    value={monthlyBill}
                                    onChange={handleInputChange}
                                    className="w-36 text-xl font-bold font-headline h-10"
                                    min={MIN_BILL}
                                    max={MAX_BILL}
                                />
                                </div>
                            </div>
                            <Slider
                                value={sliderPosition}
                                onValueChange={handleSliderChange}
                                max={100}
                                step={0.1}
                                aria-label="Monthly Bill Slider"
                            />
                        </div>
                     </Card>
                </div>
                <div className="flex items-center">
                    <Card className="w-full bg-secondary shadow-lg">
                        <CardHeader className="p-4">
                            <CardTitle className="text-center text-lg font-headline">Your Estimated 25-Year Impact</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2 p-4 pt-0">
                            <div className="flex flex-col items-center p-3 rounded-lg bg-primary/10">
                                <DollarSign className="h-6 w-6 text-primary mb-1" />
                                <span className="text-xs text-muted-foreground">Est. Yearly Savings</span>
                                <span className="text-2xl font-bold font-headline">
                                ₱{yearlySavings.toLocaleString()}
                                </span>
                            </div>
                            <div className="flex flex-col items-center p-3 rounded-lg bg-primary/10">
                                <TrendingUp className="h-6 w-6 text-primary mb-1" />
                                 <span className="text-xs text-muted-foreground">Est. Lifetime Savings</span>
                                <span className="text-2xl font-bold font-headline">
                                ₱{lifetimeSavings.toLocaleString()}
                                </span>
                            </div>
                            <div className="flex flex-col items-center p-3 rounded-lg bg-primary/10">
                                <Leaf className="h-6 w-6 text-primary mb-1" />
                                <span className="text-xs text-muted-foreground">Tons of CO2 Reduced</span>
                                <span className="text-2xl font-bold font-headline">
                                {co2Reduction.toLocaleString()}
                                </span>
                            </div>
                            <p className="text-xs text-muted-foreground text-center pt-2">*Estimates are illustrative and based on a 25-year system lifespan and average energy costs in the Philippines. Actual savings may vary.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
