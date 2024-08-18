export type JSONObject = { [key: string]: any };

export type TaskStatus = 'pending' | 'in-progress' | 'completed';


// Define TypeScript interface for Task
export interface ITask {
    _id?: string; // Optional if not available initially
    title: string;
    description: string;
    dueDate: Date;
    status: TaskStatus;
    assignedTo: string;
}