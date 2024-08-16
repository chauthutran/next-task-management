import type { NextApiRequest, NextApiResponse } from "next";
import {
  createTask,
  deleteTask,
  getTaskById,
  getTasks,
  updateTask,
} from "@/lib/taskFunctions";
import { NextRequest, NextResponse } from "next/server";
import { mongoose } from "@/lib/db"; // Have to have this import so that we can connect database

export async function GET(req: NextRequest) {
  // const { searchParams } = new URL(request.url);
  // const id = searchParams.get("id");

  const id = req.nextUrl.pathname.split("/").pop(); // or use another way to extract id

  const task = await getTaskById(id as string);
  if (!task)
    return NextResponse.json({ message: "Task not found" }, { status: 404 });

  return NextResponse.json(task, { status: 200 });
}

export async function PUT(req: NextRequest) {
  const { payload } = await req.json();
  const id = req.nextUrl.pathname.split("/").pop(); // or use another way to extract id

  const updatedTask = await updateTask(id!, payload);
  if (!updatedTask)
    return NextResponse.json({ message: "Task not found" }, { status: 404 });
  return NextResponse.json(updatedTask, { status: 200 });
}

export async function DELETE(req: NextRequest) {
  // const { id } = req.query;
  const id = req.nextUrl.pathname.split("/").pop(); // or use another way to extract id

  const deletedTask = await deleteTask(id as string);
  if (!deletedTask)
    return NextResponse.json({ message: "Task not found" }, { status: 404 });
  return NextResponse.json(deletedTask, { status: 200 });
}

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   await dbConnect();

//   if (req.method === "GET") {
//     const tasks = await getTasks();
//     res.status(200).json(tasks);
//   } else if (req.method === "POST") {
//     const task = await createTask(req.body);
//     res.status(201).json(task);
//   } else {
//     res.setHeader("Allow", ["GET", "POST"]);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }
