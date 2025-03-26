
import React from 'react';
import { Shield, Award, Users } from 'lucide-react';
import { cn } from '@/lib/utils';
import { buttonVariants } from './ui/button-variants';
import { Link } from 'react-router-dom';

const About = ({ isFullPage = false }: { isFullPage?: boolean }) => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="animate-fade-up">
            {!isFullPage && (
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                About Us
              </div>
            )}
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Expert Accounting Solutions for Indian Businesses
            </h2>
            <p className="text-muted-foreground mb-6">
              At AccountPro, we provide comprehensive accounting and financial services tailored to meet the unique needs of businesses across India. With a focus on accuracy, compliance, and strategic financial management, we help businesses navigate the complexities of Indian taxation and accounting.
            </p>
            <p className="text-muted-foreground mb-6">
              Our team of experienced professionals stays updated with the latest changes in tax laws and regulations to ensure your business remains compliant while optimizing financial performance.
            </p>
            
            {isFullPage ? (
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-3">Our Mission</h3>
                <p className="text-muted-foreground mb-6">
                  To empower Indian businesses with accurate, timely, and strategic financial services that drive growth and ensure compliance.
                </p>
                
                <h3 className="text-xl font-bold mb-3">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be the most trusted accounting partner for businesses across India, known for excellence, integrity, and innovation in financial services.
                </p>
              </div>
            ) : (
              <Link to="/about" className={cn(buttonVariants({ variant: "outline" }))}>
                Learn More About Us
              </Link>
            )}
          </div>
          
          <div className="space-y-6 animate-fade-up" style={{ animationDelay: '150ms' }}>
            {[
              {
                icon: Shield,
                title: "Professional Expertise",
                description: "Our team of certified accountants brings years of experience in Indian taxation and accounting standards."
              },
              {
                icon: Award,
                title: "Commitment to Excellence",
                description: "We pride ourselves on delivering accurate, timely, and high-quality financial services to businesses of all sizes."
              },
              {
                icon: Users,
                title: "Client-Centered Approach",
                description: "We build lasting relationships by understanding the unique needs of each business we serve."
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="flex gap-4 p-6 rounded-xl bg-muted/50 border border-border hover-lift"
                style={{ animationDelay: `${150 + (index * 100)}ms` }}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {isFullPage && (
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: "10+",
                text: "Years of Experience"
              },
              {
                number: "500+",
                text: "Satisfied Clients"
              },
              {
                number: "5000+",
                text: "Tax Returns Filed"
              }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="text-center p-8 rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 border border-border animate-fade-up"
                style={{ animationDelay: `${300 + (index * 100)}ms` }}
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.text}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default About;
