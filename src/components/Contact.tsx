import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';
import { buttonVariants } from './ui/button-variants';
import { toast } from 'sonner';
import { submitContactForm } from '@/lib/api';

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const initialForm: FormData = {
  name: '',
  email: '',
  phone: '',
  service: '',
  message: ''
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[0-9]{10}$/; // Indian 10-digit phone (digits only)

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    // enforce maxlength client-side for safety too
    let trimmed = value;
    if (name === 'name') trimmed = value.slice(0, 50);
    if (name === 'email') trimmed = value.slice(0, 80);
    if (name === 'phone') trimmed = value.slice(0, 10).replace(/\D/g, ''); // keep digits only, max 10
    if (name === 'message') trimmed = value.slice(0, 500);
    setFormData(prev => ({ ...prev, [name]: trimmed }));
    setErrors(prev => ({ ...prev, [name]: undefined }));
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    // name
    if (!formData.name.trim()) newErrors.name = 'Full name is required.';
    else if (formData.name.trim().length < 2) newErrors.name = 'Enter at least 2 characters for name.';

    // email
    if (!formData.email.trim()) newErrors.email = 'Email is required.';
    else if (!emailRegex.test(formData.email.trim())) newErrors.email = 'Enter a valid email address.';

    // phone
    const phoneOnly = formData.phone.replace(/\s+/g, '');
    if (!phoneOnly) newErrors.phone = 'Phone number is required.';
    else if (!phoneRegex.test(phoneOnly)) newErrors.phone = 'Phone must be 10 digits.';

    // service
    if (!formData.service) newErrors.service = 'Please select a service.';

    // message
    if (!formData.message.trim()) newErrors.message = 'Message is required.';
    else if (formData.message.trim().length < 10) newErrors.message = 'Message must be at least 10 characters.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (!validate()) {
      // focus first error field (optional)
      const firstErrorField = Object.keys(errors)[0] as keyof FormData | undefined;
      // don't block — show errors inline
      return;
    }

    setIsSubmitting(true);

    try {
      // optional: normalise phone before sending
      const payload = {
        ...formData,
        phone: formData.phone.replace(/\D/g, '').slice(0, 10)
      };

      await submitContactForm(payload);
      toast.success('Thank you for contacting us! We will get back to you soon.');
      setFormData(initialForm);
      setErrors({});
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('There was an error submitting your form. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="animate-fade-up">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Get In Touch
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Optimize Your Finances?</h2>
            <p className="text-muted-foreground mb-8">
              Contact us today to learn how our accounting services can help your business thrive. Fill out the form, and our team will get back to you promptly.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: MapPin,
                  title: 'Our Location',
                  details: 'Bagha, Satna, Madhya Pradesh 485001'
                },
                {
                  icon: Phone,
                  title: 'Call Us',
                  details: '+91 7678509300'
                },
                {
                  icon: Mail,
                  title: 'Email Us',
                  details: 'info@accountin.com'
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4" style={{ animationDelay: `${150 + index * 100}ms` }}>
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">{item.title}</h3>
                    <p className="text-muted-foreground">{item.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-border p-6 md:p-8 animate-fade-up" style={{ animationDelay: '150ms' }}>
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  maxLength={50}
                  className={cn(
                    'w-full px-4 py-2 rounded-md border bg-background focus:outline-none focus:ring-2 transition-all',
                    errors.name ? 'border-red-400 focus:ring-red-200' : 'border-input focus:ring-primary/30'
                  )}
                  placeholder="Your full name"
                />
                {errors.name && <p className="text-sm mt-1 text-red-500">{errors.name}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    maxLength={80}
                    className={cn(
                      'w-full px-4 py-2 rounded-md border bg-background focus:outline-none focus:ring-2 transition-all',
                      errors.email ? 'border-red-400 focus:ring-red-200' : 'border-input focus:ring-primary/30'
                    )}
                    placeholder="Your email"
                  />
                  {errors.email && <p className="text-sm mt-1 text-red-500">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    maxLength={10}
                    inputMode="numeric"
                    pattern="[0-9]*"
                    className={cn(
                      'w-full px-4 py-2 rounded-md border bg-background focus:outline-none focus:ring-2 transition-all',
                      errors.phone ? 'border-red-400 focus:ring-red-200' : 'border-input focus:ring-primary/30'
                    )}
                    placeholder="10-digit number"
                  />
                  {errors.phone && <p className="text-sm mt-1 text-red-500">{errors.phone}</p>}
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
                  required
                  className={cn(
                    'w-full px-4 py-2 rounded-md border bg-background focus:outline-none focus:ring-2 transition-all',
                    errors.service ? 'border-red-400 focus:ring-red-200' : 'border-input focus:ring-primary/30'
                  )}
                >
                  <option value="">Select a service</option>
                  <option value="gst-filing">GST Filing</option>
                  <option value="income-tax">Income Tax Filing</option>
                  <option value="bookkeeping">Bookkeeping</option>
                  <option value="financial-analysis">Financial Analysis</option>
                  <option value="billing">Billing &amp; Invoicing</option>
                  <option value="consultation">Tax Consultation</option>
                </select>
                {errors.service && <p className="text-sm mt-1 text-red-500">{errors.service}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  maxLength={500}
                  className={cn(
                    'w-full px-4 py-2 rounded-md border bg-background focus:outline-none focus:ring-2 transition-all resize-none',
                    errors.message ? 'border-red-400 focus:ring-red-200' : 'border-input focus:ring-primary/30'
                  )}
                  placeholder="Tell us about your requirements"
                />
                <div className="flex justify-between items-center mt-1">
                  {errors.message ? (
                    <p className="text-sm text-red-500">{errors.message}</p>
                  ) : (
                    <div />
                  )}
                  <p className="text-sm text-muted-foreground">{formData.message.length}/500</p>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(buttonVariants({ variant: 'modern', size: 'lg' }), 'w-full group')}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center">
                    Send Message
                    <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
