
import mongoose from 'mongoose';

const { Schema } = mongoose;

const TaskSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  completed: { type: Boolean, default: false } // Nuevo campo para indicar si la tarea está completada
});

export default mongoose.model('Task2', TaskSchema);


