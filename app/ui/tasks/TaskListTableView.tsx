import { ITask } from "@/lib/definations";
import * as Utils from "@/lib/utils";


export default function TaskListTableView({ list }: { list: ITask[] }) {

    return (
        <div className="container mx-auto p-4">
            {/* Large screen: Table view */}
            <div className="hidden lg:block">
                <table className="min-w-full table-auto border-collapse border border-gray-300">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 border">Title</th>
                            <th className="px-4 py-2 border">Description</th>
                            <th className="px-4 py-2 border">Due Date</th>
                            <th className="px-4 py-2 border">Status</th>
                            <th className="px-4 py-2 border">Assigned To</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map((task, idx) => (
                            <tr key={idx} className="text-center">
                                <td className="px-4 py-2 border">{task.title}</td>
                                <td className="px-4 py-2 border">{task.description}</td>
                                <td className="px-4 py-2 border">{task.dueDate + ""}</td>
                                <td className="px-4 py-2 border">{task.status}</td>
                                <td className="px-4 py-2 border">{task.assignedTo}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Small screen: List view */}
            <div className="block lg:hidden space-y-4">
                {list.map((task, idx) => (
                    <div key={idx} className="p-4 border rounded-lg shadow-sm">
                        <div className="font-bold text-lg mb-2">{task.title}</div>
                        <div className="text-sm mb-1">
                            <strong>Description: </strong>{task.description}
                        </div>
                        <div className="text-sm mb-1">
                            <strong>Due Date: </strong>{task.dueDate + ""}
                        </div>
                        <div className="text-sm mb-1">
                            <strong>Status: </strong>{task.status}
                        </div>
                        <div className="text-sm">
                            <strong>Assigned To: </strong>{task.assignedTo}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}