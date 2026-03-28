'use client';

import { useState } from 'react';
import BookingCalendar from '@/components/BookingCalendar';
import Link from 'next/link';

export default function BookPage() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [formData, setFormData] = useState({ name: '', phone: '', service: 'Tyre Fitting', car_reg: '' });
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error
  const [errorMsg, setErrorMsg] = useState('');

  const servicesList = [
    "Tyre Fitting", 
    "Mobile Tyre Fitting", 
    "Emergency Tyre Repair", 
    "Puncture Repair", 
    "Wheel Balancing", 
    "Tyre Replacement"
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime) {
      setErrorMsg("Please select a date and time");
      return;
    }
    
    setStatus('submitting');
    setErrorMsg('');

    try {
      // Adjust date timezone issues when converting to string
      const localDate = new Date(selectedDate.getTime() - (selectedDate.getTimezoneOffset() * 60000));
      const dateStr = localDate.toISOString().split('T')[0];

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/bookings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          booking_date: dateStr,
          booking_time: selectedTime
        })
      });
      
      const data = await res.json();
      
      if (!res.ok) {
        throw new Error(data.error || 'Failed to book');
      }
      
      setStatus('success');
    } catch (err) {
      setErrorMsg(err.message);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-primary min-h-screen pt-32 pb-16 px-4 flex items-center justify-center">
        <div className="max-w-md w-full glass-panel p-10 rounded-3xl text-center border-accent/20">
          <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_40px_rgba(227,30,36,0.3)]">
            <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl font-black text-white mb-4">Slot Confirmed.</h1>
          <p className="text-text-muted mb-8 leading-relaxed">
            Your appointment is locked in for <strong className="text-white">{selectedDate.toLocaleDateString()}</strong> at <strong className="text-white">{selectedTime}</strong>. Our team will contact you shortly if we require any extra details.
          </p>
          <Link href="/" className="inline-block px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-colors">
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-primary min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-8 md:py-16 lg:py-24 px-4 md:px-6 overflow-hidden min-h-[500px] flex flex-col items-center justify-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent/20 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="mx-auto max-w-7xl relative z-10 text-center w-full">
          <nav className="mb-6 flex justify-center">
            <ol className="flex items-center gap-2 text-sm font-bold text-text-muted">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li className="text-white/30">/</li>
              <li className="text-accent">Book Online</li>
            </ol>
          </nav>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-[1.3em] mb-6 md:mb-8 tracking-tight">
            Reserve Your <span className="text-gradient-accent">Spot.</span>
          </h1>
          <p className="text-text-muted mt-6 font-medium text-lg md:text-xl max-w-2xl mx-auto">
            Select a time that works for you, and we'll handle the rest. Mobile dispatch is available.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 md:py-16 relative z-10 bg-surface-dark border-t border-border/50">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Calendar side */}
            <div>
              <BookingCalendar 
                selectedDate={selectedDate} 
                setSelectedDate={setSelectedDate} 
                selectedTime={selectedTime} 
                setSelectedTime={setSelectedTime} 
              />
            </div>

            {/* Form side */}
            {selectedDate && selectedTime ? (
                <div className="glass-panel p-8 md:p-10 rounded-3xl border border-white/5 relative overflow-hidden animate-fade-in-up">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-[80px] pointer-events-none"></div>
                    
                    <h2 className="text-2xl font-bold text-white mb-6 relative z-10">Your Details</h2>
                    
                    <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                    {errorMsg && (
                        <div className="p-4 bg-red-900/40 border border-accent/50 rounded-2xl text-red-200 text-sm font-bold flex gap-3 shadow-lg">
                        <svg className="w-5 h-5 shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                        <span>{errorMsg}</span>
                        </div>
                    )}

                    <div className="space-y-2">
                        <label className="block text-[11px] font-black tracking-widest text-text-muted uppercase pl-1">Required Service</label>
                        <div className="relative group">
                        <select 
                            className="w-full bg-dark-900/60 border border-white/5 rounded-2xl px-5 py-4 text-white hover:border-accent/40 focus:outline-none focus:border-accent focus:bg-dark-900/80 transition-all appearance-none font-bold shadow-inner"
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

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                        <label className="block text-[11px] font-black tracking-widest text-text-muted uppercase pl-1">Full Name</label>
                        <input 
                            type="text" required
                            className="w-full bg-dark-900/60 border border-white/5 rounded-2xl px-5 py-4 text-white hover:border-accent/40 focus:outline-none focus:border-accent focus:bg-dark-900/80 transition-all font-bold placeholder:text-white/20 placeholder:font-medium shadow-inner"
                            placeholder="John Doe"
                            value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}
                        />
                        </div>
                        <div className="space-y-2">
                        <label className="block text-[11px] font-black tracking-widest text-text-muted uppercase pl-1">Phone Number</label>
                        <input 
                            type="tel" required
                            className="w-full bg-dark-900/60 border border-white/5 rounded-2xl px-5 py-4 text-white hover:border-accent/40 focus:outline-none focus:border-accent focus:bg-dark-900/80 transition-all font-bold placeholder:text-white/20 placeholder:font-medium shadow-inner"
                            placeholder="07000 000000"
                            value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})}
                        />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="block text-[11px] font-black tracking-widest text-text-muted uppercase pl-1">Vehicle Reg <span className="text-white/30 font-medium normal-case">(Optional)</span></label>
                        <input 
                        type="text" 
                        className="w-full bg-dark-900/60 border border-white/5 rounded-2xl px-5 py-4 text-white hover:border-accent/40 focus:outline-none focus:border-accent focus:bg-dark-900/80 transition-all uppercase font-bold placeholder:text-white/20 placeholder:font-medium placeholder:normal-case shadow-inner tracking-widest"
                        placeholder="e.g. AB12 CDE"
                        value={formData.car_reg} onChange={e => setFormData({...formData, car_reg: e.target.value})}
                        />
                    </div>

                    <div className="pt-6">
                        <button 
                        type="submit" 
                        disabled={status === 'submitting' || !selectedDate || !selectedTime}
                        className="w-full py-4.5 bg-gradient-to-br from-accent to-accent-hover text-white font-black text-lg tracking-wide rounded-2xl shadow-[0_0_30px_rgba(227,30,36,0.3)] hover:shadow-[0_0_50px_rgba(227,30,36,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none disabled:hover:scale-100 flex items-center justify-center gap-2 border border-white/10 hover:border-white/30"
                        >
                        {status === 'submitting' ? (
                            <span className="flex items-center gap-3">
                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                                Confirming...
                            </span>
                        ) : (
                            <>
                                Complete Booking
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                            </>
                        )}
                        </button>
                    </div>
                    </form>
                </div>
            ) : (
                <div className="glass-panel p-8 md:p-10 rounded-3xl border border-white/5 flex flex-col items-center justify-center h-[500px] text-center shadow-lg">
                    <div className="w-20 h-20 bg-accent/10 border border-accent/20 rounded-full flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(227,30,36,0.1)]">
                        <svg className="w-10 h-10 text-accent/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h3 className="text-2xl font-black text-white mb-2">Select a Time Slot</h3>
                    <p className="text-text-muted text-sm px-4 max-w-sm font-medium">Please choose a date and an available professional time slot from the calendar to proceed.</p>
                </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
