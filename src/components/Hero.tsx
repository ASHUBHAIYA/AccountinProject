
import React, { useState } from 'react';
import { FileText, Calculator, FileCheck, Building2, BookOpen, Receipt, CreditCard, Phone, Mail, User, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { IdCard, FileBarChart, ClipboardList } from "lucide-react";
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { submitContactForm } from '@/lib/api';
import { useToast } from '@/hooks/use-toast';

const Hero = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });
  
  const services = [
    { icon: BookOpen, name: 'Daily Accounting', description: 'Complete books of accounts maintained monthly', price: '₹3,999 onwards' },
    { icon: FileText, name: 'GST Filing & Returns', description: 'Monthly/Quarterly GST compliance made simple', price: '₹699 onwards' },
    { icon: Receipt, name: 'Billing & Invoicing', description: 'GST-compliant invoicing software & solutions', price: '₹1,999 onwards' },
    { icon: Calculator, name: 'Income Tax Return Filing', description: 'Individual & Business ITR filing', price: '₹499 onwards' },
    { icon: Building2, name: 'Company Registration', description: 'Pvt Ltd, LLP, OPC registration in 7-10 days', price: '₹9,999 onwards' },
    { icon: FileCheck, name: 'TDS Return Filing', description: 'Quarterly TDS returns & Form 16/16A', price: '₹799 onwards' },
    { icon: IdCard, name: 'PAN Application', description: 'New PAN', price: '₹499 onwards' },
    { icon: FileBarChart, name: 'CMA Report', description: 'CMA Report', price: '₹1,499 onwards' },
    { icon: ClipboardList, name: 'Project Report & Provisional', description: 'Project Report & Provisional', price: '₹1,999 onwards' },
  ];
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await submitContactForm({
        ...formData,
        service: 'General Inquiry'
      });
      toast({
        title: "Message sent!",
        description: "We'll get back to you soon.",
      });
      setFormData({ name: '', phone: '', email: '',service: '', message: '' });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative pt-24 pb-16 md:pb-24 bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <span className="text-sm font-medium text-primary">⚡ GST Practitioner Certified</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
            India's Most Trusted<br />
            <span className="text-primary">Accounting & Tax Services</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
            Expert GST filing, Income Tax returns & complete accounting solutions for Indian businesses
          </p>
          
          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span className="font-medium">500+ Happy Clients</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span className="font-medium">8+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span className="font-medium">10+ Industries Served</span>
            </div>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Services List */}
          <div className="space-y-6 animate-fade-up" style={{ animationDelay: '150ms' }}>
            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                Our Professional Services
              </h2>
              
            </div>
            <div className="space-y-3">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className="group flex items-start gap-4 p-5 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 group-hover:bg-primary group-hover:text-white flex items-center justify-center transition-colors">
                      <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                          {service.name}
                        </h3>
                        <span className="text-primary font-bold text-sm whitespace-nowrap">
                          {service.price}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <a
                href="https://wa.me/919407882260?text=Hi,%20I%20want%20a%20free%20consultation%20about%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#1fb956] text-white font-semibold rounded-lg transition-all hover:scale-105"
              >
                <MessageSquare className="w-5 h-5" />
                WhatsApp Us Now
              </a>
              <a
                href="tel:+919407882260"
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-all hover:scale-105"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="animate-fade-up" style={{ animationDelay: '300ms' }}>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                Get In Touch
              </h2>
            <div className="bg-card border border-border rounded-2xl shadow-xl p-6 md:p-8 sticky top-24">
              <p className="text-muted-foreground mb-6">
                Fill out the form below and we'll get back to you shortly
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    <User className="inline w-4 h-4 mr-2" />
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    <Mail className="inline w-4 h-4 mr-2" />
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    <Phone className="inline w-4 h-4 mr-2" />
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                    className="w-full"
                  />
                </div>
                </div>
                
                <div>
                <label htmlFor="service" className="block text-sm font-medium mb-1">
                  Service Required
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                >
                  <option value="">Select a service</option>
                  <option value="gst-filing">GST Filing</option>
                  <option value="income-tax">Income Tax Filing</option>
                  <option value="bookkeeping">Bookkeeping</option>
                  <option value="financial-analysis">Financial Analysis</option>
                  <option value="billing">Billing & Invoicing</option>
                  <option value="consultation">Tax Consultation</option>
                </select>
              </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    <MessageSquare className="inline w-4 h-4 mr-2" />
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirements..."
                    rows={4}
                    className="w-full"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full"
                  size="lg"
                >
                  {isSubmitting ? 'Sending...' : 'Submit'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
