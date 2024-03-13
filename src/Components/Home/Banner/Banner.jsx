import React from 'react'
import BgImage from '/assets/banner-image/01.jpg'
import image from "../../../../public/assets/banner-image/desk.jpg"
// import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
import { BsTelephoneFill, BsSearch } from 'react-icons/bs';
import { BiMicrophone } from 'react-icons/bi';
import { Typewriter } from 'react-simple-typewriter'

const Banner = () => {
    return (
        <div className='max-h-screen -mt-[118px] lg:-mt-[193px] w-full top-0 bg-black bg-blend-overlay bg-opacity-60'
            style={{
                backgroundImage: `url(${image})`, backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>

            <div className='container mx-auto flex justify-center flex-col h-screen items-center space-y-3 lg:mt-20' data-aos="fade-in">
                <div className='md:mb-8 flex justify-between items-center relative w-9/12 md:w-1/3 input mt-20 bg-transparent input-bordered border-white'>
                    <button className='btn bg-transparent btn-outline absolute left-0 outline-none border-none'>
                        <BiMicrophone className='text-2xl text-white font-thin' />
                    </button>
                    <input type="text" className='px-10 bg-transparent text-lg font-thin w-full text-white placeholder:text-white' placeholder='Search your best brand' />
                    <button className='btn bg-transparent btn-outline absolute right-0 outline-none border-none'>
                        <BsSearch className='text-2xl text-white font-thin' />
                    </button>
                </div>
                <h1 style={{ fontWeight: 'bold', fontSize: '52px', marginBottom: '10px' }}>
                    {' '}
                    <span style={{ color: '#20c997', fontWeight: 'bold' }}>
                        <Typewriter
                            words={
                                ['Your Destination for Global Commerce',
                                    'Your Online Marketplace for Seamless Buying and Selling',
                                    'Where Every Product Finds Its Place']
                            }
                            loop={Infinity}
                            cursor
                            cursorStyle='|'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span>
                </h1>
                {/* <h1 className='text-xl lg:text-5xl font-bold text-white py-2 text-center'></h1> */}
                <p className='text-white text-sm font-thin md:text-3xl text-center md:max-w-[1050px]'>Discover a Vast Array of Products, Create Custom Categories, List Your Items for Sale, and Effortlessly Accept Payments Globally with Stripe Integration</p>

                <div className='pt-8'>
                    <Link to='/contact'>
                        <h1 className='btn bg-black text-white capitalize text-lg font-thin px-8'>
                            <Link to='/contact'>
                                <BsTelephoneFill className='text-lg font-thin mr-2' />
                            </Link>Call Us Now</h1>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Banner