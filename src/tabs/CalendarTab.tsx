import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Value } from 'react-calendar/src/shared/types.js';

export const CalendarTab = () => {
  const [value, setValue] = useState<Value>(new Date()); // Изменение типа состояния

  const busyDates = [new Date(2024, 10, 27)];

  const isBusyDate = (date: Date) =>
    busyDates.some(
      (busyDate) =>
        date.getFullYear() === busyDate.getFullYear() &&
        date.getMonth() === busyDate.getMonth() &&
        date.getDate() === busyDate.getDate()
    );

  return (
    <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl text-center uppercase font-bold mb-6">
        Календарь
      </h2>
      <div className="flex justify-center">
        <Calendar
          onChange={(newValue) => setValue(newValue)} // Типизация теперь корректна
          value={value}
          tileClassName={({ date, view }) =>
            view === 'month' && isBusyDate(date) ? 'busyDay' : ''
          }
          tileContent={({ date, view }) =>
            view === 'month' && isBusyDate(date) ? (
              <span className="text-xs font-medium">Занято</span>
            ) : null
          }
        />
      </div>
    </div>
  );
};
