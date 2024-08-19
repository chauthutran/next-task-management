import { createTask, getTasks } from "@/lib/taskFunctions";
import { NextRequest, NextResponse } from "next/server";
import { mongoose } from "@/lib/db"; // Have to have this import so that we can connect database
import Task from "@/lib/shemas/Task.schema";

export async function GET(request: NextRequest) {
  // const { searchParams } = new URL(request.url);
  // const userId = searchParams.get("userId");

  // const list = await Task.find({ userId });

  const list = await Task.find();
  return NextResponse.json(list, { status: 200 });
}

export async function POST(req: NextRequest) {
  const payload = await req.json();

  const task = await Task.create(payload);
  return NextResponse.json(task, { status: 200 });
}
