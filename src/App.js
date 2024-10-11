import React, { useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import './App.css';

const App = () => {
    const [tasks, setTasks] = useState([]);
    const [error, setError] = useState('');

    const addTask = (taskText) => {
        if (taskText.trim().length === 0) {
            setError('Task cannot be empty');
            return;
        }
        setError('');
        const newTask = { text: taskText, isCompleted: false };
        setTasks([...tasks, newTask]);
    };

    const toggleComplete = (index) => {
        const updatedTasks = tasks.map((task, i) =>
            i === index ? { ...task, isCompleted: !task.isCompleted } : task
        );
        setTasks(updatedTasks);
    };

    const deleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    const editTask = (index, newText) => {
        const updatedTasks = tasks.map((task, i) =>
            i === index ? { ...task, text: newText } : task
        );
        setTasks(updatedTasks);
    };

    return (
        <div className="app-container">
            <h1>ToDo App</h1>
            {error && <div className="error-message">{error}</div>}
            <TodoInput addTask={addTask} />
            <TodoList
                tasks={tasks}
                toggleComplete={toggleComplete}
                deleteTask={deleteTask}
                editTask={editTask}  
            />
        </div>
    );
};

export default App;
