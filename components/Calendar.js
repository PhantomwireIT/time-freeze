import React from 'react';

const Calendar = ({ habits }) => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();

  // Get days in current month
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();

  // Example: completed if all habits checked (in reality, you'd persist per day)
  const allDone = habits.length > 0 && habits.every(h => h.done);

  const days = [];
  for (let i = 0; i < firstDay; i++) {
    days.push(null); // blank before month starts
  }
  for (let d = 1; d <= daysInMonth; d++) {
    days.push(d);
  }

  return (
    <div>
      <h2>Calendar</h2>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(7, 1fr)', 
        gap: '5px' 
      }}>
        {['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map((day, i) => (
          <div key={i} style={{ fontWeight: 'bold', textAlign: 'center' }}>{day}</div>
        ))}
        {days.map((day, i) => (
          <div 
            key={i} 
            style={{
              border: '1px solid #ccc',
              height: '40px',
              textAlign: 'center',
              lineHeight: '40px',
              background: day === today.getDate() ? '#eef' : '#fff'
            }}
          >
            {day ? (
              <span>
                {day} {day === today.getDate() ? (allDone ? '✔' : '❌') : ''}
              </span>
            ) : ''}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;


import useServerTime from './useServerTime';

const Calendar = ({ habits }) => {
  const today = useServerTime(); 
  if (!today) return <p>Loading time...</p>;
  
  // use `today` same way you did with `new Date()`
};
