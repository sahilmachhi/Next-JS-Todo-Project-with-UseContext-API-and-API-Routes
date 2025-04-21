import TodoForm from '@/components/TodoForm'
import React from 'react'
type Params = {
    id: string
}
const page = async ({ params }: { params: Promise<Params> }) => {
    const { id } = await params;


    return (
        <div className='container mx-auto w-full px-8 mt-24'>
            <h1 className="text-3xl font-bold text-center">Edit Todo</h1>
            <TodoForm id={id} />
        </div>
    )
}

export default page