import express from 'express';
import {
  getAllTasks,
  getTaskById,
  toggleTaskCompletion,
  addTask,
  updateTask,
  deleteTask,
} from '../controllers/taskController.js';

const router = express.Router();

router.get('/', getAllTasks);
router.get('/:id', getTaskById);
router.put('/complete/:id', toggleTaskCompletion);
router.post('/', addTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);

export default router;
