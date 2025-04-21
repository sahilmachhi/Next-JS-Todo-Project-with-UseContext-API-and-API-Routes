"use client"
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { useTodo } from '@/ContextAPI/TodoContext'
import { useRouter } from 'next/navigation'

const TodoForm = ({ id }: { id?: string }) => {
    const router = useRouter()
    const [input, setInput] = useState<string>('')
    const { createTodo, getSingleTodo, updateTodo } = useTodo()

    useEffect(() => {
        if (id) {
            const getTodo = async () => {
                const todo = await getSingleTodo(id)
                if (todo) {
                    setInput(todo.title)
                }
            }
            getTodo()
        }

    }, [])



    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (input.trim() === '') return
        if (id) {
            await updateTodo(id, input)
        } else {
            await createTodo({ title: input, isCompleted: false })
        }
        router.push('/')
    }


    return (
        <>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4 w-full md:w-1/2 mx-auto mt-12 p-4 bg-white shadow-md rounded-lg'>
                <div className="flex flex-col gap-4 w-full mx-auto">
                    <label htmlFor="taskName" className="text-lg font-semibold text-center">Task Name</label>
                    <Input type="text" id="taskName" placeholder='Enter task name' className='border rounded-md px-4 py-2' value={input} onChange={(e) => handleChange(e)} />
                </div>
                {
                    id ? <Button type='submit' className='bg-green-500 text-white rounded-md px-4 py-2 cursor-pointer'>Update Todo</Button> : <Button type='submit' className='bg-blue-500 text-white rounded-md px-4 py-2 cursor-pointer'>Add Todo</Button>
                }
            </form>
        </>
    )
}

export default TodoForm
