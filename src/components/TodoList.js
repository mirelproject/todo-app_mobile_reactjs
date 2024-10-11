import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ tasks, toggleComplete, deleteTask, editTask }) => {
    return (
        <ul className="todo-list">
            {tasks.map((task, index) => (
                <TodoItem
                    key={index}
                    index={index}
                    task={task}
                    toggleComplete={toggleComplete}
                    deleteTask={deleteTask}
                    editTask={editTask} 
                />
            ))}
        </ul>
    );
};

export default TodoList;
