import React, { useState } from 'react';

function AddTask({ addTask }) {
  const [task, setTask] = useState('');

  const handleAddClick = () => {
    addTask(task);
    setTask('');
  };

  return (
    <div>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a task"
      />
      <button onClick={handleAddClick}>Add Task</button>
    </div>
  );
}

export default AddTask;
