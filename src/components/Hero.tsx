
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button-variants';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
        <div className="absolute top-0 left-0 right-0 h-[1000px] bg-grid-pattern-dots opacity-10" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium animate-fade-in">
            <span>Premium Accounting Services for Indian Businesses</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight animate-fade-up" style={{ animationDelay: '150ms' }}>
            Streamline Your <span className="text-primary">Financial</span> Operations
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '300ms' }}>
            Comprehensive accounting services tailored for Indian businesses. From GST filing to tax planning, we've got you covered.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-up" style={{ animationDelay: '450ms' }}>
            <Link 
              to="/contact" 
              className={cn(buttonVariants({ variant: "modern", size: "xl" }), "group")}
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link 
              to="/services" 
              className={cn(buttonVariants({ variant: "outline", size: "xl" }))}
            >
              Explore Services
            </Link>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 md:mt-24 animate-fade-up" style={{ animationDelay: '600ms' }}>
          {[
            {
              title: "GST Filing",
              description: "Accurate and timely GST return filing to ensure compliance with Indian tax regulations."
            },
            {
              title: "Financial Analysis",
              description: "In-depth business performance analysis to drive informed decision-making and growth."
            },
            {
              title: "Tax Planning",
              description: "Strategic tax planning to help you minimize liabilities and maximize savings."
            }
          ].map((feature, index) => (
            <div 
              key={index} 
              className="bg-white/50 backdrop-blur-sm border border-border rounded-xl p-6 hover-lift"
              style={{ animationDelay: `${600 + (index * 150)}ms` }}
            >
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
