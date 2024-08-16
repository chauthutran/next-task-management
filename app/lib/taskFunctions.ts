import TaskModel, { ITask } from "@/lib/shemas/Task.schema";

// Create a new task
export const createTask = async (
  taskData: Omit<ITask, "_id">
): Promise<ITask> => {
  const task = new TaskModel(taskData);
  return task.save();
};

// Get all tasks
export const getTasks = async (): Promise<ITask[]> => {
  return TaskModel.find().exec();
};

// Get a task by ID
export const getTaskById = async (id: string): Promise<ITask | null> => {
  return TaskModel.findById(id).exec();
};

// Update a task by ID
export const updateTask = async (
  id: string,
  updateData: Partial<ITask>
): Promise<ITask | null> => {
  return TaskModel.findByIdAndUpdate(id, updateData, { new: true }).exec();
};

// Delete a task by ID
export const deleteTask = async (id: string): Promise<ITask | null> => {
  return TaskModel.findByIdAndDelete(id).exec();
};
