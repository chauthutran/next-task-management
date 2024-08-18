"use server";

import { ITask } from "./definations";
import Task from "@/lib/shemas/Task.schema";
import { mongoose } from "@/lib/db"; // Have to have this import so that we can connect database
// import connectDB from '../lib/connectDb';


// Create a new task
export const createTask = async (
  taskData: ITask
  // taskData: Omit<ITask, "_id">
): Promise<ITask> => {
  const task = await Task.create(taskData);
  return task;
};

// Get all tasks
export const getTasks = async (): Promise<ITask[]> => {
  return await Task.find();
};

// Get a task by ID
export const getTaskById = async (id: string): Promise<ITask | null> => {
  return await Task.findById(id);
};

// Update a task by ID
export const updateTask = async (
  id: string,
  updateData: Partial<ITask>
): Promise<ITask | null> => {
  return await Task.findByIdAndUpdate(id, updateData, { new: true });
};

// Delete a task by ID
export const deleteTask = async (id: string): Promise<ITask | null> => {
  return Task.findByIdAndDelete(id);
};
