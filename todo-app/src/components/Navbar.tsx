import React from 'react'
import AddTodoButton from './AddTodoButton'
import Link from 'next/link'
// import { Link } from 'lucide-react'

const Navbar = () => {
    return (
        <div className='border-b shadow-md top-0 sticky z-50 bg-white'>
            <div className='container mx-auto w-full flex items-center justify-between py-4 px-4'>
                <Link prefetch={true} href='/'>
                    <span className='text-2xl font-bold'>Todo App</span>
                </Link>
                <div>
                    <AddTodoButton />
                </div>
            </div>
        </div>
    )
}

export default Navbar
