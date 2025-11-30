
import React from 'react';
import { IndianRupee, Check, Info } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface PricingItem {
  id: string;
  title: string;
  price: string;
  description: string;
  features: string[];
  info?: string;
}

const pricingData: PricingItem[] = [
  {
    id: 'gst-filing',
    title: 'Comprehensive Package',
    price: '7,499 Onwards',
    description: 'Per Month',
    features: [
      'Daily Accounting',
      'Invoice Making with E-Way Bill',
      'Monthly GSTR Filling',
      'TDS Filling',
      'Annual Income TAX (ITR) Filling',
      'Audit Report',
      'CMA (1 Free)',
      'Provisonal (1 Free)',
      'Stock Certificate (1 Free)'
      
    ],
    
  },
  {
    id: 'itr-filing',
    title: 'Advanced Package',
    price: '5,999 Onwards',
    description: 'Per Month',
    features: [
      'Daily Accounting',
      'Invoice Making with E-Way Bill',
      'Monthly GSTR Filling',
      'Annual Income TAX (ITR) Filling',
      'Audit Report'
    ],
    
  },
  {
    id: 'billing',
    title: 'Standard Package',
    price: '5,999 Onwards',
    description: 'Per month',
    features: [
      'Daily Accounting',
      'Monthly GSTR Filling',
      'Annual Income TAX (ITR) Filling',
      'Audit Report'
    ],
    
  },
  {
    id: 'Basic Package',
    title: 'Basic Package',
    price: '3,999 Onwards',
    description: 'Per month',
    features: [
      'Daily Accounting'
    ],
    
  },
  {
    id: 'consultation',
    title: 'GST Package',
    price: '699 Onwards',
    description: 'Per month',
    features: [
      'Monthly GST Filling'
    ],
    
  },
  {
    id: 'consultation',
    title: 'CMA & Provisional Package',
    price: '3,499 Onwards',
    description: 'Per session',
    features: [
      '3 Years CMA & Provisional'
    ],
    
  }
];

const PricingSection = () => {
  return (
    
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Pricing
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Transparent Pricing For All Services
          </h2>
          <p className="text-muted-foreground">
            Affordable accounting solutions tailored to your business needs. All prices are inclusive of GST.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingData.map((plan, index) => (
            <div 
              key={plan.id}
              className="bg-white border border-border rounded-xl overflow-hidden shadow-sm hover-lift transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="p-6 border-b border-border">
                <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
                <div className="flex items-end gap-1 mb-2">
                  <div className="flex items-center">
                    <IndianRupee className="h-5 w-5 text-primary mr-1" />
                    <span className="text-3xl font-bold">{plan.price}</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground flex items-center">
                  {plan.description}
                  {plan.info && (
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <button className="ml-1 text-muted-foreground/70 hover:text-primary transition-colors">
                            <Info className="h-4 w-4" />
                          </button>
                        </TooltipTrigger>
                        <TooltipContent className="max-w-xs">
                          <p>{plan.info}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  )}
                </p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center max-w-2xl mx-auto animate-fade-up">
          <p className="text-muted-foreground mb-4">
            * Prices may vary based on specific requirements, business size, and complexity. Contact us for a personalized quote.
          </p>
          <div className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-muted/50 text-sm">
            <span className="text-primary font-medium mr-2">Note:</span> 
            <span>All services can be customized to meet your business needs.</span>
          </div>
        </div>
      </div>
    
  );
};

export default PricingSection;
