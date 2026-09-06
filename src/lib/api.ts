// src/lib/api.ts
export async function submitContactForm(data: {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}) {
  const endpoint = '/api/contact';

  const payload = {
    name: data.name || '',
    email: data.email || '',
    phone: data.phone || '',
    service: data.service || '',
    message: data.message || '',
    hp: '' // honeypot anti-spam field
  };

  try {
    const resp = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const text = await resp.text();

    if (!resp.ok) {
      console.error('Form submission failed:', resp.status, text);
      throw new Error(`Form submission failed: ${resp.status}`);
    }

    try {
      return JSON.parse(text);
    } catch {
      return text;
    }
  } catch (err) {
    console.error('submitContactForm error', err);
    throw err;
  }
}