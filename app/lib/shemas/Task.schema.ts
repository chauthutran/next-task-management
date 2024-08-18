
"use server";

import { Schema } from "mongoose";
import { mongoose } from "@/lib/db";


const TaskSchema = new Schema(
	{
		title: { type: String, required: true },
		description: { type: String, required: true },
		dueDate: { type: Date, required: true },
		status: {
			type: String,
			enum: ["pending", "in-progress", "completed"],
			default: "pending",
		},
		assignedTo: { type: String, required: true },
	},
	{
		timestamps: true,
	}
)
const Task = mongoose.models.Task || mongoose.model('Task', TaskSchema);

export default Task;