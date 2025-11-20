
import React, { useEffect } from 'react';
import Services from '@/components/Services';
import { buttonVariants } from '@/components/ui/button-variants';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import WhatsAppButton from '@/components/WhatsAppButton';
import PricingSection from '@/components/PricingSection';

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Our Services - Accountinger";
  }, []);

  return (
    <main className="bg-background min-h-screen pt-24 flex flex-col overflow-x-hidden">
      <Services />
      <PricingSection />
       <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              We understand that every business has unique requirements. Contact us to discuss how we can tailor our services to meet your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                to="/contact" 
                className={cn(buttonVariants({ variant: "modern", size: "lg" }))}
              >
                Contact Us
              </Link>
              <a 
                href="https://wa.me/919876543210" 
                target="_blank" 
                rel="noopener noreferrer"
                className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <WhatsAppButton />
    </main>
  );
};

export default ServicesPage;
