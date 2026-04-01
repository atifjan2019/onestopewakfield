'use client';

import { useState, useEffect } from 'react';

const DAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
const FULL_DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const formatTime12 = (time24) => {
  const [h, m] = time24.split(':').map(Number);
  const period = h >= 12 ? 'PM' : 'AM';
  const hour12 = h % 12 || 12;
  return `${hour12}:${m.toString().padStart(2, '0')} ${period}`;
};

export default function BookingCalendar({ selectedDate, setSelectedDate, selectedTime, setSelectedTime }) {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [bookedSlots, setBookedSlots] = useState([]);
  const [weeklyHours, setWeeklyHours] = useState(null);
  const [blockedDates, setBlockedDates] = useState([]);
  const [slotInterval, setSlotInterval] = useState(15);
  const [slotsLoading, setSlotsLoading] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const fetchSettings = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/settings`);
        if (res.ok) {
          const data = await res.json();
          if (data.weeklyHours && isMounted) setWeeklyHours(data.weeklyHours);
          if (data.blockedDates && isMounted) setBlockedDates(data.blockedDates);
          if (data.slotInterval && isMounted) setSlotInterval(data.slotInterval);
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

  const isToday = (date) => {
    const today = new Date();
    return date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear();
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentMonth);
    const firstDay = getFirstDayOfMonth(currentMonth);
    const days = [];
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="aspect-square" />);
    }

    for (let d = 1; d <= daysInMonth; d++) {
      const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), d);
      const localDate = new Date(date.getTime() - (date.getTimezoneOffset() * 60000));
      const dateStr = localDate.toISOString().split('T')[0];

      const isPast = date < today;
      const dayConfig = weeklyHours ? weeklyHours[date.getDay().toString()] : null;
      const isDayInactive = !dayConfig || dayConfig.active === false;
      const isBlocked = blockedDates.includes(dateStr);
      const isDisabled = isPast || isDayInactive || isBlocked;
      const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString();
      const isTodayDate = isToday(date);

      days.push(
        <button
          key={d}
          type="button"
          disabled={isDisabled}
          onClick={() => {
            setSelectedDate(date);
            setSelectedTime(null);
          }}
          className={`aspect-square rounded-xl flex items-center justify-center text-sm font-semibold transition-all duration-200 relative
            ${isDisabled
              ? 'text-white/10 cursor-not-allowed'
              : isSelected
                ? 'bg-accent text-white font-black shadow-[0_0_25px_rgba(227,30,36,0.4)] ring-2 ring-accent/50 scale-[1.08]'
                : isTodayDate
                  ? 'bg-white/10 text-white font-bold ring-1 ring-white/20 hover:bg-accent/20 hover:ring-accent/40'
                  : 'text-white/70 hover:bg-white/10 hover:text-white'
            }`}
        >
          {d}
          {isTodayDate && !isSelected && (
            <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-accent rounded-full" />
          )}
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

    while (current <= endTime) {
      slots.push(current.toTimeString().substring(0, 5));
      current.setMinutes(current.getMinutes() + slotInterval);
    }
    return slots;
  };

  const currentDaySlots = generateSlots(selectedDate);

  // Group time slots by period (Morning, Afternoon, Evening)
  const groupSlots = (slots) => {
    const morning = [];
    const afternoon = [];
    const evening = [];
    slots.forEach(time => {
      const h = parseInt(time.split(':')[0]);
      if (h < 12) morning.push(time);
      else if (h < 17) afternoon.push(time);
      else evening.push(time);
    });
    const groups = [];
    if (morning.length) groups.push({ label: 'Morning', icon: '☀️', slots: morning });
    if (afternoon.length) groups.push({ label: 'Afternoon', icon: '🌤️', slots: afternoon });
    if (evening.length) groups.push({ label: 'Evening', icon: '🌙', slots: evening });
    return groups;
  };

  const monthName = currentMonth.toLocaleString('default', { month: 'long' });
  const year = currentMonth.getFullYear();

  return (
    <div className="space-y-5">
      {/* Calendar Card - hidden when date is selected */}
      {!selectedDate && (
        <div className="relative rounded-2xl overflow-hidden" style={{ background: 'linear-gradient(165deg, rgba(30,30,35,0.95) 0%, rgba(18,18,22,0.98) 100%)' }}>
          {/* Header */}
          <div className="px-6 pt-6 pb-4">
            <div className="flex items-center justify-between mb-1">
              <div>
                <h3 className="text-xl font-black text-white tracking-tight">{monthName}</h3>
                <span className="text-xs font-semibold text-white/30 uppercase tracking-widest">{year}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={prevMonth}
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all duration-200"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" /></svg>
                </button>
                <button
                  type="button"
                  onClick={nextMonth}
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all duration-200"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>
                </button>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="mx-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Day Headers */}
          <div className="px-6 pt-4 pb-2">
            <div className="grid grid-cols-7 gap-1">
              {DAYS.map((d, i) => (
                <div key={`${d}-${i}`} className="text-center text-[10px] font-bold text-white/25 uppercase tracking-widest py-1">
                  {d}
                </div>
              ))}
            </div>
          </div>

          {/* Calendar Grid */}
          <div className="px-6 pb-6">
            <div className="grid grid-cols-7 gap-1">
              {renderCalendar()}
            </div>
          </div>
        </div>
      )}

      {/* Time Slots - shown when date is selected */}
      {selectedDate && (
        <div className="relative rounded-2xl overflow-hidden animate-fade-in-up" style={{ background: 'linear-gradient(165deg, rgba(30,30,35,0.95) 0%, rgba(18,18,22,0.98) 100%)' }}>
          <div className="px-6 pt-6 pb-2">
            {/* Back button + selected date */}
            <button
              type="button"
              onClick={() => { setSelectedDate(null); setSelectedTime(null); }}
              className="flex items-center gap-2 text-white/40 hover:text-white text-xs font-bold mb-4 transition-colors group"
            >
              <svg className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Change Date
            </button>

            {/* Selected date info */}
            <div className="flex items-center gap-3 mb-4 px-4 py-3 rounded-xl bg-accent/10 border border-accent/20">
              <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
              </div>
              <div>
                <p className="text-white font-bold text-sm leading-tight">
                  {selectedDate.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' })}
                </p>
                <p className="text-accent/70 text-xs font-medium mt-0.5">
                  {currentDaySlots.length} time slot{currentDaySlots.length !== 1 ? 's' : ''} available
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <h3 className="text-lg font-black text-white tracking-tight">Select a Time</h3>
              {selectedTime && (
                <span className="text-xs font-bold text-accent bg-accent/10 px-3 py-1.5 rounded-full border border-accent/20">
                  {formatTime12(selectedTime)}
                </span>
              )}
            </div>
          </div>

          <div className="mx-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-2" />

          <div className="px-6 pb-6 pt-2">
            {slotsLoading || loading ? (
              <div className="flex flex-col items-center justify-center py-12 gap-3">
                <div className="w-8 h-8 border-2 border-accent/30 border-t-accent rounded-full animate-spin" />
                <span className="text-white/30 text-xs font-medium">Loading available times...</span>
              </div>
            ) : currentDaySlots.length === 0 ? (
              <div className="py-10 text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-white/5 flex items-center justify-center">
                  <svg className="w-7 h-7 text-white/20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-white/30 font-semibold text-sm">No slots available</p>
                <p className="text-white/15 text-xs mt-1">Try selecting a different date</p>
              </div>
            ) : (
              <div className="space-y-5 max-h-[400px] overflow-y-auto pr-1 custom-scrollbar">
                {groupSlots(currentDaySlots).map(group => (
                  <div key={group.label}>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-sm">{group.icon}</span>
                      <span className="text-[11px] font-bold text-white/30 uppercase tracking-widest">{group.label}</span>
                      <div className="flex-1 h-px bg-white/5" />
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {group.slots.map(time => {
                        const isBooked = bookedSlots.includes(time);
                        const isSelected = selectedTime === time;
                        return (
                          <button
                            key={time}
                            type="button"
                            disabled={isBooked}
                            onClick={() => setSelectedTime(time)}
                            className={`py-3 px-2 rounded-xl text-sm font-bold transition-all duration-200 relative
                              ${isBooked
                                ? 'bg-white/[0.02] text-white/10 cursor-not-allowed line-through'
                                : isSelected
                                  ? 'bg-accent text-white shadow-[0_4px_20px_rgba(227,30,36,0.35)] ring-1 ring-accent/50 scale-[1.03]'
                                  : 'bg-white/[0.04] text-white/60 hover:bg-white/[0.08] hover:text-white border border-transparent hover:border-white/10'
                              }`}
                          >
                            {formatTime12(time)}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
