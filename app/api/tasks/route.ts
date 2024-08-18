import { createTask, getTasks } from "@/lib/taskFunctions";
import { NextRequest, NextResponse } from "next/server";
import { mongoose } from "@/lib/db"; // Have to have this import so that we can connect database
import Task from "@/lib/shemas/Task.schema";

export async function GET(req: NextRequest) {
  const tasks = await getTasks();
  return NextResponse.json(tasks, { status: 200 });
}

export async function POST(req: NextRequest) {
  const payload = await req.json();

  const task = await Task.create(payload);
  return NextResponse.json(task, { status: 200 });
}
