import Task from '../models/task.js';

export const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({
      error: 'Error al conectarse',
    });
  }
};

export const getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    res.json(task);
  } catch (error) {
    res.status(500).json({
      error: 'Error al obtener la tarea',
    });
  }
};

export const toggleTaskCompletion = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ error: 'Tarea no encontrada' });
    }

    task.completed = !task.completed;
    await task.save();

    res.json({ status: 'Estado de la tarea actualizado' });
  } catch (error) {
    res.status(500).json({
      error: 'Error al actualizar el estado de la tarea',
    });
  }
};

export const addTask = async (req, res) => {
  const { title, description } = req.body;

  const task = new Task({
    title,
    description,
  });

  await task.save();

  res.json({ status: 'Tarea guardada' });
};

export const updateTask = async (req, res) => {
  const { title, description } = req.body;
  const newTask = {
    title,
    description,
  };
  await Task.findByIdAndUpdate(req.params.id, newTask);

  res.json({ status: 'Tarea actualizada' });
};

export const deleteTask = async (req, res) => {
  await Task.findByIdAndRemove(req.params.id);
  res.json({ status: 'Tarea eliminada' });
};


