"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In production, this would send to an API endpoint
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-success/10 border border-success/30 rounded-xl p-8 text-center">
        <svg className="w-12 h-12 text-success mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="font-bold text-text text-lg mb-2">Message Sent!</h3>
        <p className="text-text-muted">Thank you for getting in touch. We&apos;ll get back to you as soon as possible.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="contact-name" className="block text-sm font-semibold text-text mb-1.5">
          Your Name
        </label>
        <input
          type="text"
          id="contact-name"
          name="name"
          required
          className="w-full px-4 py-3 rounded-lg border border-border bg-white text-text focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
          placeholder="John Smith"
        />
      </div>
      <div>
        <label htmlFor="contact-phone" className="block text-sm font-semibold text-text mb-1.5">
          Phone Number
        </label>
        <input
          type="tel"
          id="contact-phone"
          name="phone"
          required
          className="w-full px-4 py-3 rounded-lg border border-border bg-white text-text focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
          placeholder="07123 456789"
        />
      </div>
      <div>
        <label htmlFor="contact-message" className="block text-sm font-semibold text-text mb-1.5">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          required
          className="w-full px-4 py-3 rounded-lg border border-border bg-white text-text focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
          placeholder="Tell us what you need — tyre size, vehicle type, location, etc."
        />
      </div>
      <button
        type="submit"
        className="w-full bg-accent hover:bg-accent-hover text-primary font-extrabold py-4 rounded-lg text-lg transition-all duration-200 hover:shadow-lg hover:shadow-accent/30"
      >
        Send Message
      </button>
      <p className="text-text-muted text-xs text-center">
        We&apos;ll respond as quickly as possible. For urgent needs, please call us directly.
      </p>
    </form>
  );
}
