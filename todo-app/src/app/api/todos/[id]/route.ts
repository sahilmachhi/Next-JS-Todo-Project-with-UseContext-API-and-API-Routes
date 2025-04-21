import { ConnectDB } from "@/lib/db";
import { Todo } from "@/models/todoModel";
import { NextResponse } from "next/server";

type Params = {
    id: string;
}

export async function PUT(req: Request, { params }: { params: Promise<Params> }) {
    try {
        await ConnectDB();
        const { id } = await params;
        const { title, isCompleted } = await req.json();

        const updated = await Todo.findByIdAndUpdate(
            id,
            { title, isCompleted },
            { new: true }
        );

        if (!updated) {
            return NextResponse.json({ error: "Todo not found" }, { status: 404 });
        }

        return NextResponse.json({ todo: updated });
    } catch (error) {
        console.error("Error updating todo:", error);
        return NextResponse.json({ error: "Error updating todo" }, { status: 500 });
    }
}

export async function DELETE(req: Request, { params }: { params: Promise<Params> }) {
    try {
        await ConnectDB();
        const { id } = await params;

        const deleted = await Todo.findByIdAndDelete(id);

        if (!deleted) {
            return NextResponse.json({ error: "Todo not found" }, { status: 404 });
        }

        return NextResponse.json({ message: "Todo deleted successfully" });
    } catch (error) {
        console.error("Error deleting todo:", error);
        return NextResponse.json({ error: "Error deleting todo" }, { status: 500 });
    }
}

export async function GET(req: Request, { params }: { params: Promise<Params> }) {
    try {
        await ConnectDB();
        const { id } = await params;

        const todo = await Todo.findById(id);

        if (!todo) {
            return NextResponse.json({ error: "Todo not found" }, { status: 404 });
        }

        return NextResponse.json({ todo });
    } catch (error) {
        console.error("Error fetching todo:", error);
        return NextResponse.json({ error: "Error fetching todo" }, { status: 500 });
    }
}