'use client';

import { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

type DayHours = {
  day: string;
  open: string;
  close: string;
};

// Monday opens 6:00 AM (verified). Remaining hours are placeholders.
const hours: DayHours[] = [
  { day: 'Monday', open: '6:00 AM', close: '—' },
  { day: 'Tuesday', open: '—', close: '—' },
  { day: 'Wednesday', open: '—', close: '—' },
  { day: 'Thursday', open: '—', close: '—' },
  { day: 'Friday', open: '—', close: '—' },
  { day: 'Saturday', open: '—', close: '—' },
  { day: 'Sunday', open: '—', close: '—' },
];

export default function OpeningHours() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
  }, []);

  const currentDay = now
    ? hours[now.getDay() === 0 ? 6 : now.getDay() - 1]
    : null;
  const isOpen = currentDay && currentDay.open !== '—';

  return (
    <div className="bg-beige/30 rounded-md p-6 md:p-8">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <Clock className="h-5 w-5 text-gold" strokeWidth={1.5} />
          <h4 className="font-medium text-espresso tracking-wide text-sm uppercase">
            Opening Hours
          </h4>
        </div>
        {now && (
          <span
            className={`inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full ${
              isOpen
                ? 'bg-gold/15 text-gold'
                : 'bg-beige text-coffee/60'
            }`}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                isOpen ? 'bg-gold animate-pulse' : 'bg-coffee/40'
              }`}
            />
            {isOpen ? 'OPEN NOW' : 'CHECK HOURS'}
          </span>
        )}
      </div>
      <ul className="space-y-2.5">
        {hours.map((entry) => {
          const isToday =
            now &&
            hours[now.getDay() === 0 ? 6 : now.getDay() - 1].day === entry.day;
          return (
            <li
              key={entry.day}
              className={`flex items-center justify-between text-sm py-1 ${
                isToday ? 'text-espresso font-medium' : 'text-coffee/70'
              }`}
            >
              <span>{entry.day}</span>
              <span className="tabular-nums">
                {entry.open === '—' ? '—' : `${entry.open} – ${entry.close}`}
              </span>
            </li>
          );
        })}
      </ul>
      <p className="mt-4 text-xs text-coffee/50">
        Hours may vary on public holidays. Please call to confirm.
      </p>
    </div>
  );
}
