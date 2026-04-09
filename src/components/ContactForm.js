"use client";

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Tyre Fitting',
    message: ''
  });
  const [status, setStatus] = useState('idle');

  const servicesList = [
    "Tyre Fitting", 
    "Mobile Tyre Fitting", 
    "Emergency Tyre Repair", 
    "Puncture Repair", 
    "Wheel Balancing", 
    "Tyre Replacement",
    "Other Request"
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate network request since API wasn't provided
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', phone: '', email: '', service: 'Tyre Fitting', message: '' });
    }, 1500);
  };

  if (status === 'success') {
    return (
      <div className="glass-panel p-8 md:p-10 rounded-3xl border border-white/5 h-full flex flex-col items-center justify-center text-center">
        <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-black text-white mb-2">Message Sent.</h3>
        <p className="text-text-muted font-medium">Thank you for getting in touch. One of our team members will contact you shortly.</p>
        <button onClick={() => setStatus('idle')} className="mt-8 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-colors">
          Send Another
        </button>
      </div>
    );
  }

  return (
    <div className="glass-panel p-8 md:p-10 rounded-3xl border border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] pointer-events-none"></div>
      
      <h2 className="text-2xl font-black text-white mb-2 relative z-10">Send a Message</h2>
      <p className="text-text-muted mb-8 relative z-10 font-medium">Fill out the form below and we'll get back to you as soon as possible.</p>
      
      <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-[11px] font-black tracking-widest text-text-muted uppercase pl-1">Full Name</label>
            <input 
              type="text" required
              className="w-full bg-dark-900/60 border border-white/5 rounded-2xl px-5 py-4 text-white hover:border-accent/40 focus:outline-none focus:border-accent focus:bg-dark-900/80 transition-all font-bold placeholder:text-white/20"
              placeholder="John Doe"
              value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}
            />
          </div>
          <div className="space-y-2">
            <label className="block text-[11px] font-black tracking-widest text-text-muted uppercase pl-1">Phone Number</label>
            <input 
              type="tel" required
              className="w-full bg-dark-900/60 border border-white/5 rounded-2xl px-5 py-4 text-white hover:border-accent/40 focus:outline-none focus:border-accent focus:bg-dark-900/80 transition-all font-bold placeholder:text-white/20"
              placeholder="07000 000000"
              value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-[11px] font-black tracking-widest text-text-muted uppercase pl-1">Email <span className="text-white/30 font-medium normal-case">(Optional)</span></label>
            <input 
              type="email" 
              className="w-full bg-dark-900/60 border border-white/5 rounded-2xl px-5 py-4 text-white hover:border-accent/40 focus:outline-none focus:border-accent focus:bg-dark-900/80 transition-all font-bold placeholder:text-white/20"
              placeholder="john@example.com"
              value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}
            />
          </div>
          <div className="space-y-2">
            <label className="block text-[11px] font-black tracking-widest text-text-muted uppercase pl-1">Service Needed</label>
            <div className="relative group">
              <select 
                className="w-full bg-dark-900/60 border border-white/5 rounded-2xl px-5 py-4 text-white hover:border-accent/40 focus:outline-none focus:border-accent focus:bg-dark-900/80 transition-all appearance-none font-bold"
                value={formData.service}
                onChange={e => setFormData({...formData, service: e.target.value})}
              >
                {servicesList.map(s => <option key={s} value={s} className="bg-primary text-white">{s}</option>)}
              </select>
              <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none text-text-muted group-hover:text-accent transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-[11px] font-black tracking-widest text-text-muted uppercase pl-1">Message</label>
          <textarea 
            required rows={4}
            className="w-full bg-dark-900/60 border border-white/5 rounded-2xl px-5 py-4 text-white hover:border-accent/40 focus:outline-none focus:border-accent focus:bg-dark-900/80 transition-all font-bold placeholder:text-white/20 resize-none"
            placeholder="How can we help you today?"
            value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}
          />
        </div>

        <div className="pt-2">
          <button 
            type="submit" 
            disabled={status === 'submitting'}
            className="w-full py-4.5 bg-gradient-to-br from-accent to-accent-hover text-white font-black text-lg tracking-wide rounded-2xl shadow-[0_0_30px_rgba(227,30,36,0.3)] hover:shadow-[0_0_50px_rgba(227,30,36,0.5)] hover:scale-[1.02] transition-all disabled:opacity-50 disabled:scale-100 flex items-center justify-center gap-2"
          >
            {status === 'submitting' ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      </form>
    </div>
  );
}
