'use client';

import { useState, useEffect } from 'react';

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default function BookingCalendar({ selectedDate, setSelectedDate, selectedTime, setSelectedTime }) {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [bookedSlots, setBookedSlots] = useState([]);
  const [weeklyHours, setWeeklyHours] = useState(null);
  const [blockedDates, setBlockedDates] = useState([]);
  const [slotsLoading, setSlotsLoading] = useState(true);
  const [loading, setLoading] = useState(false);

  // Fetch dynamic available slots from backend config
  useEffect(() => {
    let isMounted = true;
    const fetchSettings = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/settings`);
        if (res.ok) {
          const data = await res.json();
          if (data.weeklyHours && isMounted) setWeeklyHours(data.weeklyHours);
          if (data.blockedDates && isMounted) setBlockedDates(data.blockedDates);
        }
      } catch (err) {
        console.error('Failed to fetch settings:', err);
      } finally {
        if (isMounted) setSlotsLoading(false);
      }
    };
    fetchSettings();
    return () => { isMounted = false; };
  }, []);

  // Fetch booked slots for the selected date
  useEffect(() => {
    if (!selectedDate) return;
    let isMounted = true;
    const fetchBookings = async () => {
      setLoading(true);
      try {
        const dateStr = selectedDate.toISOString().split('T')[0];
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/bookings?date=${dateStr}`);
        const data = await res.json();
        if (data.bookedSlots && isMounted) setBookedSlots(data.bookedSlots);
      } catch (err) {
        console.error('Failed to fetch bookings:', err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };
    fetchBookings();
    return () => { isMounted = false; };
  }, [selectedDate]);

  const nextMonth = () => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  const prevMonth = () => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));

  const getDaysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const getFirstDayOfMonth = (date) => new Date(date.getFullYear(), date.getMonth(), 1).getDay();

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentMonth);
    const firstDay = getFirstDayOfMonth(currentMonth);
    const days = [];
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    for (let i = 0; i < firstDay; i++) {
        // empty slots
        days.push(<div key={`empty-${i}`} className="h-12 w-12"></div>);
    }

    for (let d = 1; d <= daysInMonth; d++) {
        const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), d);
        
        // Adjust date string carefully due to timezones
        const localDate = new Date(date.getTime() - (date.getTimezoneOffset() * 60000));
        const dateStr = localDate.toISOString().split('T')[0];
        
        const isPast = date < today;
        const dayConfig = weeklyHours ? weeklyHours[date.getDay().toString()] : null;
        const isDayInactive = !dayConfig || dayConfig.active === false;
        const isBlocked = blockedDates.includes(dateStr);
        const isDisabled = isPast || isDayInactive || isBlocked;
        
        const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString();

        days.push(
            <button
            key={d}
            type="button"
            disabled={isDisabled}
            onClick={() => {
                setSelectedDate(date);
                setSelectedTime(null);
            }}
            className={`h-12 w-12 rounded-2xl flex flex-col items-center justify-center transition-all ${
                isDisabled ? 'text-text-muted/20 cursor-not-allowed opacity-50 bg-dark-900/40' :
                isSelected ? 'bg-accent text-white shadow-[0_0_20px_rgba(227,30,36,0.3)] scale-110 font-bold border border-accent/50' :
                'bg-white/5 border border-white/5 text-white hover:bg-white/10 hover:border-white/20 hover:scale-105'
            }`}
            >
                <span className="text-sm">{d}</span>
                {isSelected && <span className="w-1 h-1 bg-white rounded-full mt-1"></span>}
            </button>
        );
    }
    return days;
  };

    const generateSlots = (date) => {
        if (!weeklyHours || !date) return [];
        const dayConfig = weeklyHours[date.getDay().toString()];
        if (!dayConfig || !dayConfig.active) return [];
        
        const slots = [];
        const [startH, startM] = dayConfig.start.split(':').map(Number);
        const [endH, endM] = dayConfig.end.split(':').map(Number);
        
        let current = new Date(date);
        current.setHours(startH, startM, 0, 0);
        
        const endTime = new Date(date);
        endTime.setHours(endH, endM, 0, 0);
        
        while (current < endTime) {
            slots.push(current.toTimeString().substring(0, 5));
            current.setMinutes(current.getMinutes() + 15);
        }
        return slots;
    };

    const currentDaySlots = generateSlots(selectedDate);
  
  return (
    <div className="space-y-6">
      <div className="glass-panel p-6 rounded-3xl border border-white/5 shadow-2xl relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/10 blur-3xl rounded-full pointer-events-none"></div>
        
        <div className="flex items-center justify-between mb-8 relative z-10">
          <div className="flex flex-col">
            <h3 className="text-2xl font-black text-white leading-tight">
              {currentMonth.toLocaleString('default', { month: 'long' })}
            </h3>
            <span className="text-sm font-bold text-accent">{currentMonth.getFullYear()}</span>
          </div>
          <div className="flex gap-2">
            <button type="button" onClick={prevMonth} className="w-10 h-10 rounded-full bg-dark-900 border border-white/5 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/20 transition-all shadow-lg">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"></path></svg>
            </button>
            <button type="button" onClick={nextMonth} className="w-10 h-10 rounded-full bg-dark-900 border border-white/5 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/20 transition-all shadow-lg">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path></svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-2 mb-4 text-center text-xs font-black text-white/40 uppercase tracking-widest relative z-10">
          {DAYS.map(d => <div key={d}>{d}</div>)}
        </div>
        
        <div className="grid grid-cols-7 gap-2 place-items-center relative z-10">
          {renderCalendar()}
        </div>
      </div>

      {selectedDate && (
        <div className="glass-panel p-6 rounded-3xl border border-white/5 shadow-2xl animate-fade-in-up relative overflow-hidden">
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-accent/10 blur-3xl rounded-full pointer-events-none"></div>
            
            <div className="flex items-end justify-between mb-6 relative z-10">
                <div>
                    <h3 className="text-2xl font-black text-white">Available Times</h3>
                    <p className="text-sm font-medium text-text-muted mt-1">{selectedDate.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' })}</p>
                </div>
            </div>
            
            {slotsLoading || loading ? (
                <div className="flex justify-center py-10 relative z-10">
                    <div className="w-8 h-8 flex items-center justify-center">
                        <div className="w-full h-full border-3 border-accent border-t-transparent rounded-full animate-spin"></div>
                    </div>
                </div>
            ) : currentDaySlots.length === 0 ? (
                <div className="py-8 text-center bg-dark-900/50 rounded-2xl border border-white/5 relative z-10">
                    <p className="text-gray-400 font-medium text-sm">No bookings available for this date.</p>
                </div>
            ) : (
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 relative z-10 max-h-[350px] overflow-y-auto pr-2 custom-scrollbar">
                    {currentDaySlots.map(time => {
                        const isBooked = bookedSlots.includes(time);
                        const isSelected = selectedTime === time;
                        return (
                        <button
                            key={time}
                            type="button"
                            disabled={isBooked}
                            onClick={() => setSelectedTime(time)}
                            className={`py-3.5 px-4 rounded-2xl text-sm font-bold transition-all relative overflow-hidden group ${
                            isBooked ? 'bg-white/5 border border-white/5 text-white/20 cursor-not-allowed' :
                            isSelected ? 'bg-accent border border-accent text-white shadow-[0_0_15px_rgba(227,30,36,0.3)]' :
                            'bg-dark-900/80 border border-white/10 text-white hover:border-accent/50 hover:bg-accent/10'
                            }`}
                        >
                            <span className="relative z-10">{time}</span>
                            {isBooked && (
                                <div className="absolute inset-0 flex items-center justify-center opacity-40">
                                    <div className="w-full h-[1px] bg-white transform -rotate-12 absolute scale-110"></div>
                                </div>
                            )}
                        </button>
                        );
                    })}
                </div>
            )}
        </div>
      )}
    </div>
  );
}
