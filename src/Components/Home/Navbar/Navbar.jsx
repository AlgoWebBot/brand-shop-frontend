import React, { useContext, useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './navbar.css'
import { MyContext } from '../../../Auth/AuthProvider'
import { MdDarkMode } from 'react-icons/md';
import { BsSun } from 'react-icons/bs';
import axios from 'axios';

const Navbar = () => {

    const { user, logOut } = useContext(MyContext);
    const [darkMode, setDarkMode] = useState(false);

    console.log(user);

    const logOutUser = () => {
        logOut()
            .then(res => console.log("Successfully login"))
            .catch(err => console.log(err.message))
    }

    const [admin, setAdmin] = useState([]);

    useEffect(() => {
        const getAllCat = async () => {
            const res = await axios.get('http://localhost:5000/users');
            console.log(res?.data);
            setAdmin(res?.data)
        }
        getAllCat();
    }, [])


    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [darkMode])

    // console.log(darkMode)
    const filterAdmin = admin?.find(adminuser => adminuser?.email === user?.reloadUserInfo?.email && adminuser?.role === 'admin');
    console.log(filterAdmin);

    return (
        <div className="navbar py-8 mx-auto z-10 sticky top-0 bg-gray-500 shadow-xl w-full px-10">
            <div className="navbar-start">
                <div className='flex justify-start items-center gap-2'>
                    <img src="/assets/logo/Poundit_e-commerce_website_Logo.svg.png" className='h-10 hidden lg:block' />
                    <Link to='/' className="hidden lg:block text-3xl text-white">Unity Shop</Link>
                </div>
                <div className="lg:hidden dropdown">
                    <label tabIndex={0} className="btn btn-ghost btn-circle text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black">
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/addCategory'>Add Category</NavLink></li>
                        <li><NavLink to='/addProduct'>Add Product</NavLink></li>
                        <li><NavLink to='/myCart'>My Cart</NavLink></li>
                        {
                            filterAdmin && <li><NavLink to='/dashboard'>Dasboard</NavLink></li>
                        }
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <Link to='/' className="lg:hidden text-2xl md:text-3xl font-bold text-white">Unity Shop</Link>
                <ul className='hidden lg:flex justify-center items-center md:gap-2 lg:gap-16 text-xl text-white'>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/addCategory'>Add Category</NavLink></li>
                    <li><NavLink to='/addProduct'>Add Product</NavLink></li>
                    <li><NavLink to='/myCart'>My Cart</NavLink></li>
                    {
                        filterAdmin && <li><NavLink to='/dashboard'>Dasboard</NavLink></li>
                    }
                </ul>
            </div>
            <div className="navbar-end lg:space-x-5">


                <div onClick={() => setDarkMode(!darkMode)}>
                    <h1 className='text-lg lg:text-xl text-white font-thin py-1 px-4 cursor-pointer'>
                        {
                            darkMode ? <BsSun /> : <MdDarkMode />
                        }
                    </h1>
                </div>


                <div>
                    <h1 className="hidden lg:block text-xl text-white">{user?.displayName}</h1>
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full border-2 input-bordered border-black">
                            <img src={user?.photoURL} />
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu lg:hidden menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='#'>Shimul</Link></li>
                        {
                            user ?
                                <li onClick={logOutUser}><Link>Logout</Link></li> :
                                <li><Link to='/login'>Login</Link></li>
                        }
                    </ul>
                </div>
                {
                    user ?
                        <button onClick={logOutUser} className='hidden md:block btn bg-yellow-500 text-black font-thin px-8 hover:bg-yellow-500'>Logout</button> :
                        <Link to='/login'>
                            <button className='hidden md:block btn bg-yellow-500 text-black font-thin px-8 hover:bg-yellow-500'>Login</button>
                        </Link>
                }

            </div>
        </div>
    )
}

export default Navbar