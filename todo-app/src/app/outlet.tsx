import Navbar from '@/components/Navbar'
import { TodoProvider } from '@/ContextAPI/TodoContext'
import React, { ReactNode } from 'react'

const Outlet = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <TodoProvider>
                <Navbar />
                {children}
            </TodoProvider>
        </>
    )
}

export default Outlet
