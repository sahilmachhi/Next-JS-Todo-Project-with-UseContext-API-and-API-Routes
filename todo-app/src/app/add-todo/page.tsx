import TodoForm from '@/components/TodoForm'
import React from 'react'

const page = () => {

    return (
        <div className='container mx-auto w-full px-8 mt-24'>
            <h1 className="text-3xl font-bold text-center">Add Todo</h1>
            <TodoForm />
        </div>
    )
}

export default page
