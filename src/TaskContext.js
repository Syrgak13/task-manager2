import React, { createContext, useContext } from 'react';
import { useTaskManager } from './useTaskManager';

const TaskContext = createContext();

export const useTasks = () => useContext(TaskContext);

export function TaskProvider({ children }) {
    const { tasks, addTask, deleteTask } = useTaskManager();

    return (
        <TaskContext.Provider value={{ tasks, addTask, deleteTask }}>
            {children}
        </TaskContext.Provider>
    );
}
