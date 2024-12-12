import React, { useState } from 'react';
import { useTasks } from './TaskContext';

function AddTask() {
  const { addTask } = useTasks();
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