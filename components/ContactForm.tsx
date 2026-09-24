'use client';

import { FormEvent, useState } from 'react';

type Status = 'idle' | 'sending' | 'success' | 'error';

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('sending');
    setMessage('');
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Unable to send your message.');
      setStatus('success');
      setMessage('Thank you. Your message has been sent to 3S Engineering & Design.');
      form.reset();
    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'Unable to send your message.');
    }
  }

  return (
    <form className="contact-form" onSubmit={submit} noValidate>
      <div className="form-grid">
        <label><span>Full Name *</span><input name="name" required minLength={2} autoComplete="name" /></label>
        <label><span>Email Address *</span><input name="email" type="email" required autoComplete="email" /></label>
        <label><span>Company</span><input name="company" autoComplete="organization" /></label>
        <label><span>Phone</span><input name="phone" type="tel" autoComplete="tel" /></label>
        <label className="form-grid__wide"><span>Reason For Contact *</span>
          <select name="reason" required defaultValue="">
            <option value="" disabled>Select a reason</option>
            <option>Engineering & Design</option>
            <option>Electrical / Power Distribution</option>
            <option>Automation & Controls</option>
            <option>3D Modeling / 3D Scanning</option>
            <option>FEED / Project Management</option>
            <option>Emissions Reduction</option>
            <option>Quality / QMS</option>
            <option>General Inquiry</option>
          </select>
        </label>
        <label><span>Address</span><input name="address" autoComplete="street-address" /></label>
        <label><span>City</span><input name="city" autoComplete="address-level2" /></label>
        <label><span>State</span><input name="state" autoComplete="address-level1" /></label>
        <label><span>ZIP</span><input name="zip" autoComplete="postal-code" /></label>
        <label className="form-grid__wide"><span>Message *</span><textarea name="message" required minLength={10} rows={7} /></label>
      </div>
      <div className="form-actions">
        <button className="button button--green" disabled={status === 'sending'} type="submit">
          {status === 'sending' ? 'Sending…' : 'Send Message'}
        </button>
        <p className={`form-status ${status}`} role="status" aria-live="polite">{message}</p>
      </div>
    </form>
  );
}
