import mongoose, { Document, Schema } from "mongoose";

// Define TypeScript interface for Task
export interface ITask extends Document {
  id: string;
  title: string;
  description: string;
  dueDate: Date;
  status: 'pending' | 'in-progress' | 'completed';
  assignedTo: string; // User ID of the worker
}

// Define Mongoose Schema
const TaskSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  dueDate: { type: Date, required: true },
  status: {
    type: String,
    enum: ["pending", "in-progress", "completed"],
    default: "pending",
  },
  assignedTo: {type: String, required: true}
});

// Create and export the Mongoose model
const TaskModel =
  mongoose.models.Task || mongoose.model<ITask>("Task", TaskSchema);
export default TaskModel;
