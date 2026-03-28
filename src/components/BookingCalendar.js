'use client';

import { useState, useEffect } from 'react';

const TIME_SLOTS = ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"];
const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default function BookingCalendar({ selectedDate, setSelectedDate, selectedTime, setSelectedTime }) {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [bookedSlots, setBookedSlots] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!selectedDate) return;
    const fetchBookings = async () => {
      setLoading(true);
      try {
        const dateStr = selectedDate.toISOString().split('T')[0];
        const res = await fetch(`http://localhost:8000/api/bookings?date=${dateStr}`);
        const data = await res.json();
        if (data.bookedSlots) setBookedSlots(data.bookedSlots);
      } catch (err) {
        console.error(err);
      }
      setLoading(false);
    };
    fetchBookings();
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
      days.push(<div key={`empty-${i}`} className="h-10 w-10"></div>);
    }

    for (let d = 1; d <= daysInMonth; d++) {
      const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), d);
      const isPast = date < today;
      const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString();

      days.push(
        <button
          key={d}
          type="button"
          disabled={isPast}
          onClick={() => {
            setSelectedDate(date);
            setSelectedTime(null);
          }}
          className={`h-10 w-10 rounded-xl flex items-center justify-center text-sm font-bold transition-all ${
            isPast ? 'text-text-muted/20 cursor-not-allowed' :
            isSelected ? 'bg-accent text-white shadow-lg shadow-accent/40' :
            'text-white hover:bg-white/10'
          }`}
        >
          {d}
        </button>
      );
    }
    return days;
  };

  return (
    <div className="space-y-8">
      <div className="glass-panel p-6 rounded-3xl border border-white/5">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-white">
            {currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
          </h3>
          <div className="flex gap-2">
            <button type="button" onClick={prevMonth} className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white/10 transition-colors">&lt;</button>
            <button type="button" onClick={nextMonth} className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white/10 transition-colors">&gt;</button>
          </div>
        </div>
        <div className="grid grid-cols-7 gap-2 mb-2 text-center text-xs font-bold text-text-muted uppercase">
          {DAYS.map(d => <div key={d}>{d}</div>)}
        </div>
        <div className="grid grid-cols-7 gap-2 place-items-center">
          {renderCalendar()}
        </div>
      </div>

      {selectedDate && (
        <div className="glass-panel p-6 rounded-3xl border border-white/5 animate-fade-in-up">
          <h3 className="text-xl font-bold text-white mb-4">Available Times</h3>
          <p className="text-sm text-text-muted mb-6">For {selectedDate.toLocaleDateString()}</p>
          
          {loading ? (
            <div className="flex justify-center py-8">
              <div className="w-8 h-8 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {TIME_SLOTS.map(time => {
                const isBooked = bookedSlots.includes(time);
                const isSelected = selectedTime === time;
                return (
                  <button
                    key={time}
                    type="button"
                    disabled={isBooked}
                    onClick={() => setSelectedTime(time)}
                    className={`py-3 px-4 rounded-xl text-sm font-bold transition-all ${
                      isBooked ? 'bg-white/5 text-text-muted/30 line-through cursor-not-allowed' :
                      isSelected ? 'bg-accent text-white shadow-lg shadow-accent/40' :
                      'bg-white/5 border border-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    {time}
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
