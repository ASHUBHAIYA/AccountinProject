
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
}) => (<div></div>
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

 
};

export default Services;
