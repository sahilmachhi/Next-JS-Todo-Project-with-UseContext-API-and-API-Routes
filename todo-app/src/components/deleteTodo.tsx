"use client"
import React from 'react'
import { Button } from './ui/button'
import { useTodo } from '@/ContextAPI/TodoContext'

const DeleteTodo = ({ id }: { id: string }) => {
    const { deleteTodo } = useTodo()
    const DeleteHandler = () => {
        deleteTodo(id)
    }
    return (
        <>
            <Button variant="destructive" className="cursor-pointer w-full md:w-auto" onClick={DeleteHandler}>
                Delete
            </Button>
        </>
    )
}

export default DeleteTodo
