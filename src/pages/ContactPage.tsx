
import React, { useEffect } from 'react';
import Contact from '@/components/Contact';
import WhatsAppButton from '@/components/WhatsAppButton';

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Contact Us - AccountPro";
  }, []);

  return (
    <main className="bg-background min-h-screen pt-24 flex flex-col overflow-x-hidden">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto mb-8 text-center animate-fade-up">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Contact Us
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get In Touch With Our Team
          </h1>
          <p className="text-xl text-muted-foreground">
            Have questions or need a quote? We're here to help. Reach out to us using any of the methods below.
          </p>
        </div>
      </div>
      
      <Contact />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Location
            </h2>
            <p className="text-muted-foreground">
              Visit our office in Mumbai's Financial District
            </p>
          </div>
          
          <div className="rounded-xl overflow-hidden shadow-lg border border-border h-96 animate-fade-up" style={{ animationDelay: '150ms' }}>
            {/* This would be replaced with an actual Google Maps embed */}
            <div className="w-full h-full bg-muted/50 flex items-center justify-center">
              <p className="text-muted-foreground">Google Maps integration would be here</p>
            </div>
          </div>
        </div>
      </section>
      
      <WhatsAppButton />
    </main>
  );
};

export default ContactPage;
