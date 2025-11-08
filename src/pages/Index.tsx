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
    document.title = "Smart Accounts - Your Trusted Partner for Accounting, GST & Taxation Services";
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
