'use client';

import { useState, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { DollarSign, Leaf, TrendingUp } from 'lucide-react';

export default function Calculator() {
  const [monthlyBill, setMonthlyBill] = useState(5000);

  const { yearlySavings, lifetimeSavings, co2Reduction } = useMemo(() => {
    const yearlyBill = monthlyBill * 12;
    // Assuming 85% savings with solar
    const yearlySavings = yearlyBill * 0.85;
    const lifetimeSavings = yearlySavings * 25; // 25-year lifespan

    // Environmental calculation constants for the Philippines
    const AVG_KWH_PRICE = 11; // Average price per kWh in PHP
    const CO2_PER_KWH = 0.7; // kg of CO2 per kWh for PH grid electricity

    const monthlyKwh = monthlyBill / AVG_KWH_PRICE;
    const lifetimeCo2Kg = monthlyKwh * 12 * 25 * CO2_PER_KWH;
    const co2Reduction = Math.round(lifetimeCo2Kg / 1000); // in metric tons

    return {
      yearlySavings: Math.round(yearlySavings),
      lifetimeSavings: Math.round(lifetimeSavings),
      co2Reduction,
    };
  }, [monthlyBill]);

  const handleSliderChange = (value: number[]) => {
    setMonthlyBill(value[0]);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value)) {
      setMonthlyBill(value);
    }
  };

  return (
    <section id="calculator" className="w-full py-12 md:py-20 lg:py-24">
      <div className="container px-4 md:px-6">
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
                                    max={50000}
                                />
                                </div>
                            </div>
                            <Slider
                                value={[monthlyBill]}
                                onValueChange={handleSliderChange}
                                max={50000}
                                step={100}
                                aria-label="Monthly Bill Slider"
                            />
                        </div>
                     </Card>
                </div>
                <div className="flex items-center">
                    <Card className="w-full bg-secondary shadow-lg">
                        <CardHeader className="p-4">
                            <CardTitle className="text-center text-xl font-headline">Your Estimated 25-Year Impact</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4 p-4 md:p-6">
                            <div className="flex flex-col items-center p-4 rounded-lg bg-primary/10">
                                <DollarSign className="h-8 w-8 text-primary mb-2" />
                                <span className="text-xs text-muted-foreground">Est. Yearly Savings</span>
                                <span className="text-3xl font-bold font-headline">
                                ₱{yearlySavings.toLocaleString()}
                                </span>
                            </div>
                            <div className="flex flex-col items-center p-4 rounded-lg bg-primary/10">
                                <TrendingUp className="h-8 w-8 text-primary mb-2" />
                                 <span className="text-xs text-muted-foreground">Est. Lifetime Savings</span>
                                <span className="text-3xl font-bold font-headline">
                                ₱{lifetimeSavings.toLocaleString()}
                                </span>
                            </div>
                            <div className="flex flex-col items-center p-4 rounded-lg bg-primary/10">
                                <Leaf className="h-8 w-8 text-primary mb-2" />
                                <span className="text-xs text-muted-foreground">Tons of CO2 Reduced</span>
                                <span className="text-3xl font-bold font-headline">
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
