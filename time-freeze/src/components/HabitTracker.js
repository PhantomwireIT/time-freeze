import React, { useState } from 'react';

const HabitTracker = ({ habits, addHabit, toggleHabit }) => {
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim() !== "") {
      addHabit(input);
      setInput("");
    }
  };

  return (
    <div>
      <h2>Habits</h2>
      <input 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add new habit..."
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {habits.map((habit, i) => (
          <li key={i}>
            <input 
              type="checkbox"
              checked={habit.done}
              onChange={() => toggleHabit(i)}
            />
            {habit.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HabitTracker;
