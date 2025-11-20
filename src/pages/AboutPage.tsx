
import React, { useEffect } from 'react';
import About from '@/components/About';
import WhatsAppButton from '@/components/WhatsAppButton';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "About Us - Accountinger";
  }, []);

  return (
    <main className="bg-background min-h-screen pt-24 flex flex-col overflow-x-hidden">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto mb-16 text-center animate-fade-up">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            About Accountinger
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Your Trusted Accounting Partner
          </h1>
          <p className="text-xl text-muted-foreground">
            Learn more about our mission, values, and the team behind Accountinger's premium accounting services.
          </p>
        </div>
      </div>
      
      <About isFullPage={true} />
      
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose Accountinger?
            </h2>
            <p className="text-muted-foreground">
              We combine expertise with personalized service to deliver accounting solutions that meet your unique business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Industry Expertise",
                description: "Our team specializes in Indian taxation and accounting standards, staying updated with the latest regulatory changes."
              },
              {
                title: "Personalized Service",
                description: "We take the time to understand your business needs and provide tailored solutions to help you achieve your financial goals."
              },
              {
                title: "Cutting-Edge Technology",
                description: "We leverage advanced accounting software and secure digital platforms to deliver efficient and accurate services."
              },
              {
                title: "Transparent Pricing",
                description: "Our pricing structure is clear and competitive, with no hidden fees or unexpected charges."
              },
              {
                title: "Timely Delivery",
                description: "We understand the importance of meeting deadlines, especially when it comes to tax filings and compliance."
              },
              {
                title: "Client Education",
                description: "We believe in empowering our clients with knowledge about their finances and relevant regulatory requirements."
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="bg-white border border-border rounded-xl p-6 shadow-sm hover-lift animate-fade-up"
                style={{ animationDelay: `${150 * index}ms` }}
              >
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <WhatsAppButton />
    </main>
  );
};

export default AboutPage;
