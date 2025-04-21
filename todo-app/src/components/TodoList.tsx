"use client"
import React, { useEffect } from 'react'
import Todo from './Todo';
import { useTodo } from '@/ContextAPI/TodoContext';

const TodoList = () => {
    const { todos, getTodos } = useTodo()

    useEffect(() => {
        getTodos()
    }, [])

    return (
        <div className='flex flex-col gap-4 mt-8 items-center'>
            <div className='w-full max-w-2xl flex flex-col gap-4 items-stretch'>
                {todos === undefined ? (
                    <div>Loading...</div>
                ) : Array.isArray(todos) && todos.length > 0 ? (
                    todos.map((todo) => (
                        <Todo key={todo._id} todo={todo} />
                    ))
                ) : (
                    <div className='flex items-center justify-center w-full px-8 py-2 bg-gray-200 rounded-lg text-black text-2xl font-bold'>
                        no todos found
                    </div>
                )}
            </div>
        </div>
    )
}

export default TodoList
