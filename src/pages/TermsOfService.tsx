import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <Link 
          to="/" 
          className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
        <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString('en-IN')}</p>
        
        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">Agreement to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing and using Accountinger' services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Services Provided</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Accountinger provides the following professional accounting and taxation services:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>GST Registration and Filing (Monthly/Quarterly)</li>
              <li>Income Tax Return (ITR) Filing for Individuals and Businesses</li>
              <li>Company Registration and Compliance</li>
              <li>Professional Bookkeeping Services</li>
              <li>TDS Return Filing</li>
              <li>PAN and TAN Application Services</li>
              <li>Billing and Invoicing Solutions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Client Responsibilities</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              As a client, you agree to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Provide accurate and complete information for all filings</li>
              <li>Submit required documents in a timely manner</li>
              <li>Pay service fees as per the agreed pricing structure</li>
              <li>Respond to queries and requests for clarification promptly</li>
              <li>Maintain confidentiality of login credentials and access information</li>
              <li>Comply with all applicable tax laws and regulations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Pricing and Payment</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our pricing structure is as follows:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>GST Filing starts at ₹499/month</li>
              <li>ITR Filing starts at ₹999/year</li>
              <li>Bookkeeping starts at ₹1,499/month</li>
              <li>Other services are priced individually based on requirements</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Payment terms: Services must be paid in advance unless otherwise agreed. We accept payment via bank transfer, UPI, and other digital payment methods.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Refund Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Refunds are processed on a case-by-case basis. If you are unsatisfied with our services, please contact us within 7 days of service delivery. Refunds may not be applicable for services already filed with government authorities.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Confidentiality</h2>
            <p className="text-muted-foreground leading-relaxed">
              We maintain strict confidentiality of all client information and financial data. Our team members are bound by professional ethics and legal obligations to protect your information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              While we strive for accuracy in all filings and services, Accountinger shall not be liable for any penalties, interest, or legal issues arising from incorrect information provided by the client. We are not responsible for delays caused by government portals or third-party service disruptions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Service Timeline</h2>
            <p className="text-muted-foreground leading-relaxed">
              We aim to complete services within the agreed timeline. However, timelines may vary based on complexity, government portal availability, and client responsiveness. We will keep you informed of any delays.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Termination of Services</h2>
            <p className="text-muted-foreground leading-relaxed">
              Either party may terminate the service agreement with 30 days' written notice. Outstanding payments must be settled before termination. Client data will be provided in a standard format upon request.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed">
              All proprietary tools, templates, and methodologies used by Accountinger remain our intellectual property. Clients receive a non-exclusive license to use deliverables for their business purposes only.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Dispute Resolution</h2>
            <p className="text-muted-foreground leading-relaxed">
              Any disputes arising from these Terms of Service will be resolved through mutual discussion. If unresolved, disputes will be subject to the jurisdiction of courts in Pune, Maharashtra, India.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Compliance with Laws</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our services are provided in compliance with Indian taxation laws, GST regulations, and professional accounting standards. We follow guidelines set by the Institute of Chartered Accountants of India (ICAI) and other regulatory bodies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              For questions about these Terms of Service, please contact us:
            </p>
            <div className="mt-4 space-y-2 text-muted-foreground">
              <p><strong>Email:</strong> info@accountinger.in</p>
              <p><strong>Phone:</strong> +91 9407882260</p>
              <p><strong>Address:</strong> Bagha, Satna, Madhya Pradesh 485001</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Changes to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting. Continued use of our services constitutes acceptance of modified terms.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
