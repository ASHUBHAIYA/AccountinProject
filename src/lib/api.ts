// src/lib/api.ts
export async function submitContactForm(data: {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}) {
  const devProxy = '/api/contact';
  const appsScriptUrl = import.meta.env.VITE_APPS_SCRIPT_URL;
  const endpoint = import.meta.env.DEV ? devProxy : appsScriptUrl;
  const secret = import.meta.env.VITE_CONTACT_SECRET ?? import.meta.env.VITE_SECRET ?? '';

  if (!endpoint) {
    console.error(
      'submitContactForm: endpoint is not configured (VITE_APPS_SCRIPT_URL missing).'
    );
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
    if (import.meta.env.DEV) {
      // DEV: keep existing behaviour (JSON -> Vite proxy)
      // eslint-disable-next-line no-console
      console.debug(
        '[submitContactForm] DEV mode -> using proxy:',
        endpoint,
        'payload:',
        payload
      );

      const resp = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const text = await resp.text();

      if (!resp.ok) {
        console.error('Form submission failed (DEV):', resp.status, text);
        throw new Error(`Form submission failed: ${resp.status}`);
      }

      try {
        return JSON.parse(text);
      } catch {
        return text;
      }
    } else {
      // PROD: Avoid CORS preflight by sending URL-encoded form data
      // No custom headers -> browser uses application/x-www-form-urlencoded (simple request)
      // eslint-disable-next-line no-console
      console.debug('[submitContactForm] PROD -> using Apps Script endpoint');

      const formData = new URLSearchParams();
      Object.entries(payload).forEach(([key, value]) => {
        formData.append(key, value ?? '');
      });

      const resp = await fetch(endpoint, {
        method: 'POST',
        body: formData
      });

      const text = await resp.text();

      if (!resp.ok) {
        console.error('Form submission failed (PROD):', resp.status, text);
        throw new Error(`Form submission failed: ${resp.status}`);
      }

      try {
        return JSON.parse(text);
      } catch {
        return text;
      }
    }
  } catch (err) {
    console.error('submitContactForm error', err);
    throw err;
  }
}
