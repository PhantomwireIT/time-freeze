
import React, { useState } from 'react';
import HabitTracker from './components/HabitTracker';
import ProgressBar from './components/ProgressBar';
import Insights from './components/Insights';
import Calendar from './components/Calendar';

const App = () => {
  const [habits, setHabits] = useState([]);
  const [completed, setCompleted] = useState(0);

  const addHabit = (habit) => {
    setHabits([...habits, { name: habit, done: false }]);
  };

  const toggleHabit = (index) => {
    const updated = [...habits];
    updated[index].done = !updated[index].done;
    setHabits(updated);
    setCompleted(updated.filter(h => h.done).length);
  };

  return (
    <div className="app">
      <h1>⏳ Time-Freeze</h1>
      <HabitTracker habits={habits} addHabit={addHabit} toggleHabit={toggleHabit} />
      <ProgressBar progress={(completed / (habits.length || 1)) * 100} />
      <Insights total={habits.length} completed={completed} />
      <Calendar habits={habits} />
    </div>
  );
};

export default App;

