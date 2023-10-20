import React, { useState } from 'react'
import Navbar from '../Home/Navbar/Navbar'
import { Link, useLoaderData, useNavigate, useParams } from 'react-router-dom'
import { BsCheckLg } from 'react-icons/bs';
import Slider from '../Slider/Slider';

const Products = () => {

    const data = useLoaderData();
    const id = useParams();
    

    return (
        <div>
            <div className='bg-[#4b2b1f]'>
                <Navbar />
            </div>
            <div className=''>
                <div className=''>
                    <Slider id={id} />
                </div>
            </div>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-10 min-h-screen'>
                {
                    data.length > 0 ? 
                        data.map(product => 
                            <div key={product._id} className="block rounded-lg p-4 shadow-xl h-[500px] shadow-indigo-100">
                                <img
                                    alt="Home"
                                    src={product?.image}
                                    className="h-56 w-full rounded-md"
                                />

                                <div className="mt-2">
                                    <dl className='space-y-1'>
                                        <div className='flex justify-between items-center'>
                                            {/* <dt className="sr-only">Price</dt> */}
                                            <h1 className="text-lg text-gray-500">{product?.price}৳</h1>
                                            <div className='flex justify-center items-center gap-2'>
                                                <Link to={`/details/${product._id}`} className='flex justify-end items-center gap-2'>
                                                    <div className="mt-1.5 sm:mt-0 border-2 border-black py-1 px-2 rounded-full">
                                                        <p className="font-medium text-lg">Details</p>
                                                    </div>
                                                </Link><Link to={`/update/${product?._id}`}>
                                                    <h1 className='rounded-full border-2 cursor-pointer border-black px-2 py-1 flex justify-center items-center'>Update Product</h1>
                                                </Link>
                                            </div>
                                        </div>

                                        <div>
                                            <h1 className="font-medium text-xl">{product?.name}</h1>
                                        </div>
                                        <div>
                                            <h1 className="font-medium text-base">{product?.description}</h1>
                                        </div>
                                    </dl>

                                    <div className="mt-6 flex items-center gap-8 text-xs">
                                        <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                                            <svg
                                                className="h-4 w-4 text-indigo-700"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                                                />
                                            </svg>

                                            <div className="mt-1.5 sm:mt-0">
                                                <p className="text-gray-500 text-base">Brand</p>
                                                <p className="font-medium text-base">{product?.brand_name}</p>
                                            </div>
                                        </div>

                                        <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                                            <svg
                                                className="h-4 w-4 text-indigo-700"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                                                />
                                            </svg>

                                            <div className="mt-1.5 sm:mt-0">
                                                <p className="text-gray-500 text-base">Rating</p>
                                                <p className="font-medium text-base">{product?.rating}</p>
                                            </div>
                                        </div>

                                        <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                                            <svg
                                                className="h-4 w-4 text-indigo-700"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                                />
                                            </svg>

                                            <div className="mt-1.5 sm:mt-0">
                                                <p className="text-gray-500 text-base">Catagory</p>
                                                <p className="font-medium text-base">{product?.category}</p>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        )
                        :
                        <div className='text-xl font-bold text-center'> Item Not Fount </div>
                }
            </div>
        </div>
    )
}

export default Products