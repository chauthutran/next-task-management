"use server";

import { mongoose } from "@/lib/db";
import { ITask } from "../definations";
import { Schema } from "mongoose";


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
const Task =
  mongoose.models.Task || mongoose.model<ITask>("Task", TaskSchema);
export default Task;
