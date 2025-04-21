"use client"
import { getTodos, createTodo, updateTodo, deleteTodo, getSingleTodo } from "@/axios/TodoAPI"
import { createContext, ReactNode, useContext, useState } from "react"
import { TodoType } from "../types/todo"

export interface TodoContextType {
    todos: TodoType[]
    setTodos: (todos: TodoType[]) => void
    getTodos: () => Promise<void>
    getSingleTodo: (id: string) => Promise<TodoType | undefined>
    createTodo: (args: { title: string, isCompleted: boolean }) => Promise<void>
    updateTodo: (id: string, title?: string, isCompleted?: boolean) => Promise<void>
    deleteTodo: (id: string) => Promise<void>
}
const TodoContext = createContext<TodoContextType | undefined>(undefined)

export const TodoProvider = ({ children }: { children: ReactNode }) => {
    const [todos, setTodos] = useState<TodoType[]>([])

    const getTodosHandler = async () => {
        try {
            const data = await getTodos()
            console.log(data.todos)
            setTodos(data.todos)
        } catch (error) {
            console.error("Error fetching todos:", error)
        }
    }

    const getSingleTodoHandler = async (id: string) => {
        try {
            const data = await getSingleTodo(id)
            const todo = data.todo
            return todo
        } catch (error) {
            console.error("Error fetching todo:", error)
        }
    }



    const createTodoHandler = async ({ title, isCompleted }: { title: string, isCompleted: boolean }) => {
        await createTodo({ title, isCompleted })
        await getTodosHandler()
    }

    const updateTodoHandler = async (id: string, title?: string, isCompleted?: boolean) => {
        await updateTodo(id, title, isCompleted)
        await getTodosHandler()
    }

    const deleteTodoHandler = async (id: string) => {
        await deleteTodo(id)
        await getTodosHandler()
    }
    return (
        <>
            <TodoContext.Provider value={{
                todos,
                setTodos,
                getSingleTodo: getSingleTodoHandler,
                getTodos: getTodosHandler,
                createTodo: createTodoHandler,
                updateTodo: updateTodoHandler,
                deleteTodo: deleteTodoHandler
            }}>
                {children}
            </TodoContext.Provider>
        </>
    )
}

export const useTodo = () => {
    const context = useContext(TodoContext);
    if (context === undefined) {
        throw new Error("useTodo must be used within a TodoProvider")
    }
    return context
}

