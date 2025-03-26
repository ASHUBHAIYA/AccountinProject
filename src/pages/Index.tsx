
import React from 'react';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Contact from '@/components/Contact';
import WhatsAppButton from '@/components/WhatsAppButton';
import { useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "AccountPro - Professional Accounting Services for Indian Businesses";
  }, []);

  return (
    <main className="bg-background min-h-screen flex flex-col overflow-x-hidden">
      <Hero />
      <Services limit={3} />
      <About />
      <Contact />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
