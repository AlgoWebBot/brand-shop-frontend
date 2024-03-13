import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Route = () => {
    return (
        <div className='flex justify-between items-start'>
            <div className="flex h-screen flex-col justify-between border-e w-96 text-lg bg-white">
                <div className="px-4 py-6">
                    <span className="grid h-10 w-32 place-content-center rounded-lg bg-gray-100 text-lg text-gray-600">
                        Logo
                    </span>

                    <ul className="mt-6 space-y-3">
                        <li>
                            <NavLink
                                to='/dashboard'
                                className="block rounded-lg bg-gray-100 px-4 py-2 text-xl font-medium text-gray-700"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/dashboard/users'
                                className="block rounded-lg px-4 py-2 text-xl font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                            >
                                Users
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to='/dashboard/category'
                                className="block rounded-lg px-4 py-2 text-xl font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                            >
                                Categories
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to='/dashboard/product'
                                className="block rounded-lg px-4 py-2 text-xl font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                            >
                                Products
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to='/dashboard/message'
                                className="block rounded-lg px-4 py-2 text-xl font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                            >
                                Message
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to='/'
                                className="block rounded-lg px-4 py-2 text-xl font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                            >
                                Main Home
                            </NavLink>
                        </li>

                    </ul>
                </div>

                <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
                    <a href="#" className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50">
                        <img
                            alt=""
                            src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                            className="size-10 rounded-full object-cover h-16 w-16"
                        />

                        <div>
                            <p className="text-lg">
                                <strong className="block font-medium">Eric Frusciante</strong>

                                <span> eric@frusciante.com </span>
                            </p>
                        </div>
                    </a>
                </div>
            </div>
            <div className='w-full'>
                <Outlet />
            </div>
        </div>
    )
}

export default Route