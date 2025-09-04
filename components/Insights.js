import React from 'react';

const Insights = ({ total, completed }) => {
  return (
    <div>
      <h2>Insights</h2>
      <p>Total habits: {total}</p>
      <p>Completed: {completed}</p>
      <p>Streak: {completed > 0 ? "🔥 Keep going!" : "Start your streak!"}</p>
    </div>
  );
};

export default Insights;

