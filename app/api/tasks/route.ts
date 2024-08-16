import type { NextApiRequest, NextApiResponse } from "next";
import { createTask, getTasks } from "@/lib/taskFunctions";
import { NextRequest, NextResponse } from "next/server";
import { mongoose } from "@/lib/db"; // Have to have this import so that we can connect database

export async function GET(request: NextRequest) {
  const tasks = await getTasks();
  return NextResponse.json(tasks, { status: 200 });
}

export async function POST(req: NextRequest) {
  const payload = await req.json();

  const task = await createTask(payload);
  return NextResponse.json(task, { status: 200 });
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
