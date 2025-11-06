
import React from 'react';
import { Check, FileText, Calculator, TrendingUp, BarChart4, FileSpreadsheet } from 'lucide-react';
import { cn } from '@/lib/utils';
import { buttonVariants } from './ui/button-variants';
import { Link } from 'react-router-dom';

const ServiceCard = ({ 
  title, 
  description, 
  icon: Icon, 
  delay = 0 
}: { 
  title: string; 
  description: string; 
  icon: React.ElementType; 
  delay?: number;
}) => (
  <div 
    className="bg-white border border-border rounded-xl p-6 shadow-sm hover-lift animate-fade-up"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
      <Icon className="h-6 w-6 text-primary" />
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
    <div className="mt-4 pt-4 border-t border-border">
      <ul className="space-y-2">
        {[1, 2, 3].map((item) => (
          <li key={item} className="flex items-start">
            <Check className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
            <span className="text-sm text-muted-foreground">
              {title === "GST Filing" && item === 1 && "Monthly/Quarterly filing"}
              {title === "GST Filing" && item === 2 && "GSTR reconciliation"}
              {title === "GST Filing" && item === 3 && "E-way bill generation"}
              
              {title === "Income Tax Filing" && item === 1 && "Personal tax returns"}
              {title === "Income Tax Filing" && item === 2 && "Business tax returns"}
              {title === "Income Tax Filing" && item === 3 && "Tax planning strategies"}
              
              {title === "Bookkeeping" && item === 1 && "Daily transaction recording"}
              {title === "Bookkeeping" && item === 2 && "Monthly reconciliation"}
              {title === "Bookkeeping" && item === 3 && "Financial statement preparation"}
              
              {title === "Financial Analysis" && item === 1 && "Revenue and expense analysis"}
              {title === "Financial Analysis" && item === 2 && "Cash flow management"}
              {title === "Financial Analysis" && item === 3 && "Budget preparation and forecasting"}
              
              {title === "Billing & Invoicing" && item === 1 && "Invoice generation"}
              {title === "Billing & Invoicing" && item === 2 && "Payment tracking"}
              {title === "Billing & Invoicing" && item === 3 && "Billing automation"}
              
              {title === "Tax Consultation" && item === 1 && "Tax-saving strategies"}
              {title === "Tax Consultation" && item === 2 && "Compliance planning"}
              {title === "Tax Consultation" && item === 3 && "Audit representation"}
            </span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const Services = ({ limit = 6 }: { limit?: number }) => {
  const services = [
    {
      title: "GST Filing",
      description: "Comprehensive GST filing services to ensure your business stays compliant with India's tax regulations.",
      icon: FileText
    },
    {
      title: "Income Tax Filing",
      description: "Expert assistance with income tax returns for individuals and businesses, maximizing savings and ensuring compliance.",
      icon: Calculator
    },
    {
      title: "Bookkeeping",
      description: "Accurate recording and management of your financial transactions to maintain up-to-date and organized books.",
      icon: FileSpreadsheet
    },
    {
      title: "Financial Analysis",
      description: "In-depth analysis of your financial data to help you make informed business decisions and improve performance.",
      icon: TrendingUp
    },
    {
      title: "Billing & Invoicing",
      description: "Professional invoice preparation and management to streamline your billing process and improve cash flow.",
      icon: FileText
    },
    {
      title: "Tax Consultation",
      description: "Strategic tax planning and consultation to minimize tax liabilities and ensure compliance with tax regulations.",
      icon: BarChart4
    }
  ];

  const displayedServices = limit ? services.slice(0, limit) : services;

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Expertise
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comprehensive Accounting Services for Indian Businesses
          </h2>
          <p className="text-muted-foreground">
            From GST filing to financial planning, our services are designed to help your business thrive in India's dynamic economic landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedServices.map((service, index) => (
            <ServiceCard 
              key={index} 
              title={service.title} 
              description={service.description} 
              icon={service.icon} 
              delay={150 * index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
