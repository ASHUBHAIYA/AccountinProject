import React from 'react';
import Hero from '@/components/Hero';
import IndustriesSection from '@/components/IndustriesSection';
import StatsSection from '@/components/StatsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import WhatsAppButton from '@/components/WhatsAppButton';
import { useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Smart Accounts - GST Filing, Income Tax Return, Accounting Services India | Starting ₹499";
    
    // Add meta description for SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Smart Accounts offers expert GST filing, Income Tax Return filing, bookkeeping, company registration & complete accounting services across India. Trusted by 500+ businesses. Starting at ₹499. Get free consultation now!'
      );
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Smart Accounts offers expert GST filing, Income Tax Return filing, bookkeeping, company registration & complete accounting services across India. Trusted by 500+ businesses. Starting at ₹499. Get free consultation now!';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <main className="bg-background min-h-screen flex flex-col overflow-x-hidden">
      <Hero />
      <IndustriesSection />
      <StatsSection />
      <TestimonialsSection />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
