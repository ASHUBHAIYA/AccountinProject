
import React, { useState } from 'react';
import { FileText, Calculator, FileCheck, Building2, BookOpen, Receipt, CreditCard, Phone, Mail, User, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
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
    { icon: FileText, name: 'GST Filing', description: 'Accurate and timely GST return filing' },
    { icon: Receipt, name: 'Billing & Invoicing', description: 'Professional billing solutions' },
    { icon: Calculator, name: 'Income Tax Return', description: 'Expert ITR filing services' },
    { icon: Building2, name: 'Company Registration', description: 'Complete registration support' },
    { icon: BookOpen, name: 'Bookkeeping', description: 'Comprehensive bookkeeping services' },
    { icon: FileCheck, name: 'TDS Filing', description: 'Timely TDS compliance' },
    { icon: CreditCard, name: 'PAN/TAN Application', description: 'Quick PAN/TAN processing' },
    { icon: CreditCard, name: '', description: '' },
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
        <div className="text-center mb-12 animate-fade-up">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Smart Accounts
          </h1>
          <p className="text-xl text-muted-foreground">
            Accounting, GST Filing & ITR for Small Businesses in India — CA-led, Secure, and Affordable.
            
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Services List */}
          <div className="space-y-6 animate-fade-up" style={{ animationDelay: '150ms' }}>
  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
    Our Services
  </h2>

  {/* ✅ One single card container */}
  <div className="p-6 rounded-xl bg-card border border-border shadow-sm hover:shadow-md transition-all duration-300">
    {/* 🔹 Flex layout for side-by-side display */}
    <div className="flex flex-wrap gap-6">
      {services.map((service, index) => {
        const Icon = service.icon;
        return (
          <div
            key={index}
            className="flex items-center gap-3 p-4 rounded-lg bg-muted/50 hover:bg-muted transition w-fit"
          >
            <div className="flex-shrink-0 w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
              <Icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-semibold text-lg text-foreground">
              {service.name}
            </h3>
          </div>
        );
      })}
    </div>
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
