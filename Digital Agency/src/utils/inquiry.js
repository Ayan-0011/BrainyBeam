import { brand } from '../config/brand.js';

// Optional: set VITE_CONTACT_ENDPOINT (e.g. a Formspree / Basin / custom API URL) in .env to send the form
// to a real service. It receives a JSON POST. Without it, the form opens the visitor's email app with the
// message pre-filled — nothing is sent until they press send there, and the UI says so.
const ENDPOINT = import.meta.env?.VITE_CONTACT_ENDPOINT;

export const submitMode = ENDPOINT ? 'endpoint' : 'mailto';

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/**
 * rules: { fieldName: { required?, label, email?, min? } }  ->  { fieldName: 'message' } (empty when valid)
 */
export function validate(values, rules) {
  const errors = {};
  Object.entries(rules).forEach(([name, rule]) => {
    const value = (values[name] ?? '').trim();
    if (rule.required && !value) errors[name] = `Please add ${rule.label}.`;
    else if (value && rule.email && !EMAIL.test(value)) errors[name] = 'That email address doesn\u2019t look right.';
    else if (value && rule.min && value.length < rule.min) errors[name] = `Please give us a little more detail (at least ${rule.min} characters).`;
  });
  return errors;
}

const LABELS = {
  name: 'Name',
  email: 'Email',
  company: 'Company',
  service: 'Service',
  budget: 'Budget',
  timeline: 'Timeline',
  message: 'Project',
};

function buildMailto(values) {
  const lines = Object.keys(LABELS)
    .filter(key => (values[key] ?? '').trim())
    .map(key => (key === 'message' ? `\n${values[key].trim()}` : `${LABELS[key]}: ${values[key].trim()}`));
  const subject = `New project enquiry from ${values.name.trim()}`;
  return `mailto:${brand.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n'))}`;
}

/** Resolves with { mode } on success; rejects (with a readable message) when the request fails. */
export async function sendInquiry(values) {
  if (ENDPOINT) {
    let response;
    try {
      response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(values),
      });
    } catch {
      throw new Error('We couldn\u2019t reach the server. Check your connection and try again.');
    }
    if (!response.ok) throw new Error('Something went wrong on our side. Please try again.');
    return { mode: 'endpoint' };
  }

  window.location.href = buildMailto(values);
  return { mode: 'mailto' };
}
