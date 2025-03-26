
import { toast } from 'sonner';

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export const submitContactForm = async (formData: ContactFormData): Promise<void> => {
  try {
    const response = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (!response.ok) throw new Error("Failed to submit form");

    toast.success("Message sent successfully!");
  } catch (error) {
    toast.error("Failed to send message. Please try again.");
  }
};

// This function would typically be called from your actual backend API
export const sendAdminEmail = (formData: ContactFormData) => {
  // In a real implementation, this would use a service like Nodemailer, SendGrid, etc.
  // to send an email to the admin with the form data.
  
  console.log('Sending email to admin with form data:', formData);
  // Example implementation:
  // return sendgrid.send({
  //   to: 'admin@accountpro.com',
  //   from: 'noreply@accountpro.com',
  //   subject: `New Inquiry from ${formData.name}`,
  //   text: `
  //     Name: ${formData.name}
  //     Email: ${formData.email}
  //     Phone: ${formData.phone}
  //     Service: ${formData.service}
  //     Message: ${formData.message}
  //   `,
  // });
};
