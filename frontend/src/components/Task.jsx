import React from 'react';

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className={`task ${task.completed ? 'completed' : ''}`}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <button onClick={() => onToggle(task._id)}>Marcar como completada</button>
      <button onClick={() => onDelete(task._id)}>Eliminar</button>
    </div>
  );
};

export default Task;
