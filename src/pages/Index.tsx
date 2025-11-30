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
    document.title = "GST Filing Services in India | Income Tax Return & Accounting for Small Businesses";
;
    
    // Add meta description for SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Accountinger offers expert GST filing, Income Tax Return filing, bookkeeping, company registration & complete accounting services across India. Trusted by 500+ businesses. Starting at ₹499. Get free consultation now!'
      );
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Accountinger offers expert GST filing, Income Tax Return filing, bookkeeping, company registration & complete accounting services across India. Trusted by 500+ businesses. Starting at ₹499. Get free consultation now!';
      document.head.appendChild(meta);
    }
    // 👉 ADD META KEYWORDS HERE
  const metaKeywords = document.querySelector('meta[name="keywords"]');
  if (metaKeywords) {
    metaKeywords.setAttribute(
      'content',
      'gst filing services in india, income tax return filing india, accounting services for small businesses, company registration consultant india, online bookkeeping services, gst practitioner certified services'
    );
  } else {
    const meta = document.createElement('meta');
    meta.name = 'keywords';
    meta.content =
      'gst filing services in india, income tax return filing india, accounting services for small businesses, company registration consultant india, online bookkeeping services, gst practitioner certified services';
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
