import React from 'react';
import { Star } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Construction Business Owner",
      review: "Excellent service and fast GST filing!",
      rating: 5
    },
    {
      name: "Riya Patel",
      role: "School Owner",
      review: "They manage our accounts professionally and on time.",
      rating: 5
    },
    {
      name: "Aman Singh",
      role: "Retail Chain Partner",
      review: "Their franchise accounting support is top-notch!",
      rating: 5
    },
    {
      name: "Priya Sharma",
      role: "Healthcare Clinic Owner",
      review: "Professional team with excellent knowledge of healthcare compliance.",
      rating: 5
    },
    {
      name: "Vikram Mehta",
      role: "IT Startup Founder",
      review: "Perfect for startups! They helped us with tax planning from day one.",
      rating: 5
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from businesses who trust us with their accounting needs
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <div className="bg-card border border-border rounded-xl p-6 hover-lift h-full flex flex-col">
                      <div className="flex items-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                        ))}
                      </div>
                      <p className="text-muted-foreground mb-6 flex-grow">
                        "{testimonial.review}"
                      </p>
                      <div className="border-t border-border pt-4">
                        <p className="font-bold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
