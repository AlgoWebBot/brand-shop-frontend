import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
    return (
        <div className="navbar container py-8 mx-auto z-10 relative">
            <div className="navbar-start">
                <Link to='/' className="hidden lg:block text-3xl text-white">OPEN Shop</Link>
                <div className="lg:hidden dropdown">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='#'>About Us</NavLink></li>
                        <li><NavLink to='#'>Contact</NavLink></li>
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <Link to='/' className="lg:hidden text-2xl md:text-3xl font-bold">AlgoWebBot</Link>
                <ul className='hidden lg:flex justify-center items-center md:gap-2 lg:gap-16 text-xl'>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='#'>About Us</NavLink></li>
                    <li><NavLink to='#'>Contact</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end space-x-5">
                <div>
                    <h1 className="hidden lg:block text-xl text-white">Shimul</h1>
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full border-2 input-bordered border-black">
                            <img src="" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu lg:hidden menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='#'>Shimul</Link></li>
                        {/* {
                            user ?
                                <li onClick={logOutUser}><Link>Logout</Link></li> :
                                <li><Link to='/login'>Login</Link></li>
                        } */}
                    </ul>
                </div>
                {/* {
                    user ?
                        <button onClick={logOutUser} className='hidden md:block btn bg-yellow-500 text-black font-thin px-8 hover:bg-yellow-500'>Logout</button> :
                        <Link to='/login'>
                            <button className='hidden md:block btn bg-yellow-500 text-black font-thin px-8 hover:bg-yellow-500'>Login</button>
                        </Link>
                } */}

            </div>
        </div>
    )
}

export default Navbar