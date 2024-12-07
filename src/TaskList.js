import React from 'react';
import { useTasks } from './TaskContext';

function TaskList() {
  const { tasks } = useTasks();

  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>{task}</li>
      ))}
    </ul>
  );
}

export default TaskList;
