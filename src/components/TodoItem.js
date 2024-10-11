import React, { useState } from 'react';

const TodoItem = ({ task, index, toggleComplete, deleteTask, editTask }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(task.text);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        editTask(index, editText);  // This calls the editTask function passed as a prop
        setIsEditing(false);
    };

    const handleCancel = () => {
        setIsEditing(false);
        setEditText(task.text); // Reset the text to the original value
    };

    return (
        <li className={task.isCompleted ? 'completed' : ''}>
            {isEditing ? (
                <>
                    <input
                        type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                    />
                    <button onClick={handleSave}>Save</button>
                    <button onClick={handleCancel}>Cancel</button>
                </>
            ) : (
                <>
                    <span onClick={() => toggleComplete(index)}>{task.text}</span>
                    <div>
                        <button onClick={handleEdit}>Edit</button>
                        <button onClick={() => deleteTask(index)}>Delete</button>
                    </div>
                </>
            )}
        </li>
    );
};

export default TodoItem;
