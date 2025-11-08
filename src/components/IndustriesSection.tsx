import React from 'react';
import { GraduationCap, HardHat, Store, Heart, Factory, Laptop } from 'lucide-react';

const IndustriesSection = () => {
  const industries = [
    {
      icon: GraduationCap,
      name: "Education",
      description: "Customized accounting and tax solutions for the education sector."
    },
    {
      icon: HardHat,
      name: "Construction",
      description: "Customized accounting and tax solutions for the construction sector."
    },
    {
      icon: Store,
      name: "Retail & Franchise",
      description: "Customized accounting and tax solutions for the retail & franchise sector."
    },
    {
      icon: Heart,
      name: "Healthcare",
      description: "Customized accounting and tax solutions for the healthcare sector."
    },
    {
      icon: Factory,
      name: "Manufacturing",
      description: "Customized accounting and tax solutions for the manufacturing sector."
    },
    {
      icon: Laptop,
      name: "IT & Startups",
      description: "Customized accounting and tax solutions for the IT & startups sector."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Providing specialized accounting solutions across diverse sectors
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover-lift animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{industry.name}</h3>
                    <p className="text-muted-foreground text-sm">{industry.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
