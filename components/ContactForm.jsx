'use client';

import { Send } from 'lucide-react';
import { useState } from 'react';

const initialState = {
  name: '',
  email: '',
  phone: '',
  projectType: 'Residential',
  message: '',
};

export default function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setForm(initialState);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5" aria-label="Contact form">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-brand-ink/72">Name</span>
          <input
            required
            name="name"
            value={form.name}
            onChange={handleChange}
            className="h-12 w-full border border-brand-ink/14 bg-white px-4 text-brand-ink transition focus:border-brand-blue focus:outline-none"
            autoComplete="name"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-brand-ink/72">Email</span>
          <input
            required
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="h-12 w-full border border-brand-ink/14 bg-white px-4 text-brand-ink transition focus:border-brand-blue focus:outline-none"
            autoComplete="email"
          />
        </label>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-brand-ink/72">Phone</span>
          <input
            required
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="h-12 w-full border border-brand-ink/14 bg-white px-4 text-brand-ink transition focus:border-brand-blue focus:outline-none"
            autoComplete="tel"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-brand-ink/72">Project type</span>
          <select
            name="projectType"
            value={form.projectType}
            onChange={handleChange}
            className="h-12 w-full border border-brand-ink/14 bg-white px-4 text-brand-ink transition focus:border-brand-blue focus:outline-none"
          >
            <option>Residential</option>
            <option>Commercial</option>
            <option>Institutional</option>
            <option>Infrastructure</option>
            <option>Other</option>
          </select>
        </label>
      </div>
      <label className="block">
        <span className="mb-2 block text-sm font-semibold text-brand-ink/72">Message</span>
        <textarea
          required
          name="message"
          value={form.message}
          onChange={handleChange}
          rows="6"
          className="w-full resize-y border border-brand-ink/14 bg-white px-4 py-3 text-brand-ink transition focus:border-brand-blue focus:outline-none"
        />
      </label>
      <button
        type="submit"
        className="group inline-flex min-h-12 items-center justify-center gap-3 border border-brand-blue bg-brand-blue px-6 py-3 text-sm font-semibold text-white transition duration-500 hover:bg-[#18568b]"
      >
        Submit Request
        <Send className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
      </button>
      <p className="min-h-6 text-sm text-brand-blue" aria-live="polite">
        {submitted ? 'Thank you. Your message has been captured in the contact form UI.' : ''}
      </p>
    </form>
  );
}
