"use client";

import { ITask, TaskStatus } from "@/lib/definations";
import { createTask } from "@/lib/taskFunctions";
import { DateField } from "nextjs-jc-component-libs/dist/components";
import { useRef, useState, useTransition } from "react";

export default function TaskForm() {

	const titleRef = useRef<HTMLInputElement>(null);
	const descriptionRef = useRef<HTMLTextAreaElement>(null);
	// const dueDateRef = useRef<HTMLInputElement>(null);
	const statusRef = useRef<HTMLSelectElement>(null);
	const assignedToRef = useRef<HTMLInputElement>(null);
	const [dueDate, setDueDate] = useState<Date | null>(null);
	const [isPending, startTransition] = useTransition();

	const saveTask = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault();
		console.log("save task");
		if (titleRef.current &&
			descriptionRef.current &&
			dueDate != null &&
			statusRef.current &&
			assignedToRef.current
		) {
			const title = titleRef.current.value;
			const description = descriptionRef.current.value;
			const status = statusRef.current.value as TaskStatus;
			const assignedTo = assignedToRef.current.value;

			const payload: ITask = { title, description, dueDate, status, assignedTo };

			const response = await fetch("api/tasks", {
				method: "POST",
				headers: {
					"Content-type": "appliction/json"
				},
				body: JSON.stringify(payload)
			})

			if (!response.ok) {
				alert("Network response was not ok");
			}
			else {
				alert("The task is saved successfully !!!");
			}

		}
	}

	return (
		<div className="p-4 max-w-lg mx-auto space-y-4">
			<h2>Add Task</h2>
			<div>
				<label className="block text-gray-700 mb-1" htmlFor="title">
					Title
				</label>
				<input
					ref={titleRef}
					id="title"
					type="text"
					className="w-full p-2 border border-gray-300 rounded"
				/>
			</div>

			<div>
				<label className="block text-gray-700 mb-1" htmlFor="description">
					Description
				</label>
				<textarea
					ref={descriptionRef}
					id="description"
					className="w-full p-2 border border-gray-300 rounded"
					rows={4}
				/>
			</div>

			<div>
				<label className="block text-gray-700 mb-1" htmlFor="dueDate">
					Due Date
				</label>
				<DateField
					id="date"
					className="w-full p-2 border border-gray-300 rounded"
					handleOnChange={(date: Date | null) => setDueDate(date)}
				/>
			</div>

			<div>
				<label className="block text-gray-700 mb-1" htmlFor="status">
					Status
				</label>
				<select
					ref={statusRef}
					id="status"
					// {...register('status')}
					className="w-full p-2 border border-gray-300 rounded"
				>
					<option value="pending">Pending</option>
					<option value="in-progress">In-Progress</option>
					<option value="completed">Completed</option>
				</select>
			</div>

			<div>
				<label className="block text-gray-700 mb-1" htmlFor="assignedTo">
					Assigned To
				</label>
				<input
					ref={assignedToRef}
					id="assignedTo"
					// {...register('status')}
					className="w-full p-2 border border-gray-300 rounded"
				>
				</input>
			</div>

			<button
				type="submit"
				className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
				onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => saveTask(e)}
			>
				{isPending ? "Saving..." : "Save Task"}
			</button>
		</div>
	)
}