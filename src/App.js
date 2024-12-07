import React from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';
import { TaskProvider } from './TaskContext';

function App() {
  return (
    <TaskProvider>
      <h1>Task Manager</h1>
      <AddTask />
      <TaskList />
    </TaskProvider>
  );
}

export default App;

