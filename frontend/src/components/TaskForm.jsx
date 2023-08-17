import { useState } from 'react';
import PropTypes from 'prop-types';


const TaskForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (title.trim() && description.trim()) {
      onAdd({ title, description });
      setTitle('');
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Título de la tarea"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Descripción de la tarea"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <button type="submit">Agregar tarea</button>
    </form>
  );
};


TaskForm.propTypes = {
  onAdd: PropTypes.func.isRequired, // Aquí puedes ajustar el tipo según corresponda
};

export default TaskForm;
