import React, { useState } from 'react';

const TodoInput = ({ addTask }) => {
    const [task, setTask] = useState('');

    const handleAddTask = () => {
        addTask(task);
        setTask('');
    };

    return (
        <div className="todo-input">
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Add a new task"
                aria-label="New Task Input"
            />
            <button onClick={handleAddTask}>Add Task</button>
        </div>
    );
};

export default TodoInput;
