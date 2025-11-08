// src/lib/api.ts
export async function submitContactForm(data: {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}) {
  // In dev use the Vite proxy path so the browser doesn't hit cross-origin directly.
  // In production use the real endpoint from env.
  const devProxy = '/api/contact';
  const appsScriptUrl = import.meta.env.VITE_APPS_SCRIPT_URL;
  const endpoint = import.meta.env.DEV ? devProxy : appsScriptUrl;
  const secret = import.meta.env.VITE_CONTACT_SECRET ?? import.meta.env.VITE_SECRET ?? '';

  if (!endpoint) {
    console.error('submitContactForm: endpoint is not configured (VITE_APPS_SCRIPT_URL missing).');
    throw new Error('Form endpoint not configured');
  }

  const payload = {
    name: data.name || '',
    email: data.email || '',
    phone: data.phone || '',
    service: data.service || '',
    message: data.message || '',
    secret,
    hp: '' // honeypot (anti-spam) field
  };

  try {
    // Helpful debug in development
    if (import.meta.env.DEV) {
      // eslint-disable-next-line no-console
      console.debug('[submitContactForm] DEV mode -> using proxy:', endpoint, 'payload:', payload);
    } else {
      // eslint-disable-next-line no-console
      console.debug('[submitContactForm] PROD -> using endpoint from env');
    }

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

    // Try to parse JSON, otherwise return raw text
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
