// import React from 'react';
import Task from './Task';
import PropTypes from 'prop-types';


const TaskList = ({ tasks, onDelete, onToggle }) => {
  return (
    <div className="task-list">
      {tasks.map(task => (
        <Task key={task._id} task={task} onDelete={onDelete} onToggle={onToggle} />
      ))}
    </div>
  );
};


// Definición de PropTypes
TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.arrayOf(PropTypes.object).isRequired,
  onToggle: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TaskList;

