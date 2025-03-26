
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
    title: 'GST Filing & Compliance',
    price: '₹1,500 - ₹3,000',
    description: 'Per filing, based on transaction volume',
    features: [
      'Monthly/Quarterly filing',
      'GSTR reconciliation',
      'E-way bill generation',
      'GST notice handling'
    ],
    info: 'Price varies based on the number of transactions and complexity of business operations.'
  },
  {
    id: 'itr-filing',
    title: 'Income Tax Return (ITR) Filing',
    price: '₹1,000 - ₹2,500',
    description: 'Per return, based on complexity',
    features: [
      'Personal tax returns',
      'Business tax returns',
      'Capital gains calculation',
      'Tax planning advice'
    ],
    info: 'Price depends on income sources, investments, and filing category.'
  },
  {
    id: 'billing',
    title: 'Billing & Invoicing',
    price: '₹500 - ₹1,500',
    description: 'Per month, based on volume',
    features: [
      'Invoice generation',
      'Payment tracking',
      'Client management',
      'Digital delivery'
    ],
    info: 'Price depends on number of invoices and complexity of billing requirements.'
  },
  {
    id: 'bookkeeping',
    title: 'Bookkeeping Services',
    price: '₹3,000 - ₹5,000',
    description: 'Per month, comprehensive service',
    features: [
      'Daily transaction recording',
      'Bank reconciliation',
      'Financial statements',
      'Expense categorization'
    ],
    info: 'Price varies according to transaction volume and reporting requirements.'
  },
  {
    id: 'consultation',
    title: 'Financial Analysis & Consultation',
    price: '₹2,000 - ₹4,000',
    description: 'Per session',
    features: [
      'Business performance review',
      'Cash flow management',
      'Profitability analysis',
      'Growth strategy planning'
    ],
    info: 'Price depends on scope of analysis and consultation duration.'
  }
];

const PricingSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted-foreground/5">
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
    </section>
  );
};

export default PricingSection;
