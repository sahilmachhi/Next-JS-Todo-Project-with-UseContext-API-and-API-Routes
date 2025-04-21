import { NextResponse } from "next/server";
import { ConnectDB } from "@/lib/db";
import { Todo } from "@/models/todoModel";

export async function GET() {
    try {
        await ConnectDB();

        const todos = await Todo.find();

        if (!todos) {
            return NextResponse.json({ error: "No todos found" }, { status: 404 });
        }

        return NextResponse.json({ todos });
    } catch (error) {
        console.error("Error fetching todos:", error);
        return NextResponse.json({ error: "Error fetching todos" }, { status: 500 });
    }
}


export async function POST(req: Request) {
    try {
        await ConnectDB();

        const { title } = await req.json();

        if (!title) {
            return NextResponse.json({ error: "Title is required" }, { status: 400 });
        }

        const newTodo = await Todo.create({ title });

        if (!newTodo) {
            return NextResponse.json({ error: "Error creating todo" }, { status: 500 });
        }

        return NextResponse.json({ todo: newTodo }, { status: 201 });
    } catch (error) {
        console.error("Error creating todo:", error);
        return NextResponse.json({ error: "Error creating todo" }, { status: 500 });
    }
}
