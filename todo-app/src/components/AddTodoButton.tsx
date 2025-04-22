import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

const AddTodoButton = () => {
    return (
        <>
            <Link href="/add-todo">
                <Button className="cursor-pointer">add Todo</Button>
            </Link>
        </>
    )
}

export default AddTodoButton
