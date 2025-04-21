import { TodoType } from '@/types/todo'
import React from 'react'
import { Switch } from './ui/switch'
import clsx from 'clsx'
import { Button } from './ui/button'
import Link from 'next/link'
import DeleteTodo from './deleteTodo'
import { useTodo } from '@/ContextAPI/TodoContext'

const Todo = ({ todo }: { todo: TodoType }) => {
    const { updateTodo } = useTodo()

    const { title, isCompleted, _id } = todo;
    const handleSwitchChange = () => {
        updateTodo(_id, title, !isCompleted)
    }
    return (
        <div
            className={clsx(
                isCompleted ? "bg-green-400/50" : "bg-red-400/50",
                "flex items-center justify-between shadow-sm px-4 py-3 rounded-lg border gap-4 group w-full flex-col md:flex-row"
            )}
        >
            <h1 className="text-wrap flex-1 text-black/70">Task Name: <span className='font-semibold text-black'>{title}</span></h1>

            <div className="flex items-center justify-center gap-2 flex-col md:flex-row w-full md:w-auto">
                <span className="font-light text-wrap">Mark as completed:</span>
                <Switch checked={isCompleted} className='cursor-pointer' onCheckedChange={handleSwitchChange} />
            </div>

            <Link prefetch={true} href={`/edit-todo/${_id}`} className="cursor-pointer w-full md:w-auto">
                <Button className="cursor-pointer w-full">Edit</Button>
            </Link>
            <DeleteTodo id={_id} />

        </div>
    )
}

export default Todo
