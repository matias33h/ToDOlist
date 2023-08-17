import React from 'react'
import  { useState, useEffect } from 'react';
import axios from 'axios';
import '../style/App.css'; // Asegúrate de tener un archivo de estilos (App.css) en la misma ubicación que este archivo
const Main = () => {
 
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState({ title: '', description: '' });
  
    useEffect(() => {
      fetchTasks();
    }, []);
  
    const fetchTasks = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/tasks1');
        setTasks(response.data);
      } catch (error) {
        console.error('Error al obtener las tareas:', error);
      }
    };
  
    const handleCompleteTask = async taskId => {
      try {
        await axios.put(`http://localhost:3000/api/tasks1/complete/${taskId}`);
        fetchTasks();
      } catch (error) {
        console.error('Error al marcar la tarea como completada:', error);
      }
    };
  
    const handleAddTask = async () => {
      if (newTask.title.trim() === '' || newTask.description.trim() === '') return;
  
      try {
        await axios.post('http://localhost:3000/api/tasks1', newTask);
        fetchTasks();
        setNewTask({ title: '', description: '' });
      } catch (error) {
        console.error('Error al agregar la tarea:', error);
      }
    };
  
    const handleDeleteTask = async taskId => {
      try {
        await axios.delete(`http://localhost:3000/api/tasks1/${taskId}`);
        fetchTasks();
      } catch (error) {
        console.error('Error al eliminar la tarea:', error);
      }
    };
  
    return (
      <div className="Main">



        <div className="title-container">
          <h1 className="title">ToDo</h1>
          <h1 className="title1">list</h1>
        </div>
        <h4>Agenda todas tus tareas!</h4>
        <div className="task-form">
          <input
            type="text"
            placeholder="Título de la tarea"
            value={newTask.title}
            onChange={e => setNewTask({ ...newTask, title: e.target.value })}
          />
          <textarea
            placeholder="Descripción de la tarea"
            value={newTask.description}
            onChange={e => setNewTask({ ...newTask, description: e.target.value })}
          />
          <button onClick={handleAddTask}>Agregar Tarea</button>
        </div>
        <ul className="task-list">
          {tasks.map(task => (
            <li className={`task-card ${task.completed ? 'completed' : ''}`} key={task._id}>
              <span>{task.title}</span>
              <div className="button-container">
                <button className="complete-button" onClick={() => handleCompleteTask(task._id)}>
                  {task.completed ? 'Desmarcar' : 'Marcar como completada'}
                </button>
                <button className="delete-button" onClick={() => handleDeleteTask(task._id)}>Eliminar</button>
              </div>
            </li>
          ))}
        </ul>

        </div>
      
    );


}

export default Main