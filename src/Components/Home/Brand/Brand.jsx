import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Brand = () => {

    const [cat, setCat] = useState([]);

    useEffect(() => {
        const getAllCat = async () => {
            const res = await axios.get('http://localhost:5000/categories');
            console.log(res?.data);
            setCat(res?.data)
        }
        getAllCat();
    }, [])

    console.log(cat);

    return (
        <div className='container mx-auto py-20'>
            <h1 className='text-5xl font-bold text-center dark:text-white'>Our Selling Brands</h1>
            <div className='flex justify-center items-center'>
                <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 my-10'>
                    {
                        cat.map(brand =>
                            <Link key={brand._id} to={`brand/${brand.name}`}>
                                <div className="px-4 shadow-lg max-w-[350px] font-sans rounded-xl space-y-6 my-10 mx-auto bg-gray-300 pt-3">
                                    <div className="flex justify-center w-full h-48 lg:h-[280px] relative">
                                        <div className="flex justify-between items-center left-4 right-4 top-4 absolute">
                                            <div className="flex items-center">
                                                <svg width={30} className="hover:fill-red-500 hover:stroke-red-500 stroke-2 fill-transparent stroke-white " viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ cursor: 'pointer' }}><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z"></path></g></svg>
                                            </div>
                                        </div>
                                        <img className="rounded-lg bg-black/40 w-full h-full" src={`http://localhost:5000/image/${brand.image}`} alt="card navigate ui" />
                                    </div>
                                    <div className="text-center w-[85%] mx-auto font-semibold space-y-2">
                                    <h1 className='text-2xl font-bold pb-5'>{brand?.name}</h1>
                                    </div>
                                </div>


                                {/* <article
                                    className="hover:animate-background rounded-full h-[310px] w-[310px] flex justify-center items-center bg-gradient-to-r from-[#FF6600] via-[#6f4c36] to-[#4b2b1f] p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"
                                >
                                    <div className="bg-white space-y-5 h-[290px]  flex justify-center items-center flex-col rounded-full w-[290px] p-4 !pt-20 sm:p-6">
                                        <img src={`http://localhost:5000/image/${brand.image}`} className='h-32 w-52' />
                                        <h1 className='text-2xl font-bold'>{brand?.name}</h1>
                                    </div>
                                </article> */}
                            </Link>
                        )
                    }
                </div>
            </div>

        </div>
    )
}

export default Brand