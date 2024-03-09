import React from 'react'
import Banner from './Banner/Banner'
import Brand from './Brand/Brand'
import { useLoaderData } from 'react-router-dom'
import Trade from './Trade/Trade'
import WhyChooseUs from './WhyChooseUs/WhyChooseUs'
import Navbar from './Navbar/Navbar'
import Slider from '../Slider/Slider'

const Home = () => {

    const brands = useLoaderData();
    // console.log(brands)

    return (
        <div className=' dark:bg-gray-900'>
            <div className='mx-auto sticky top-0 z-50'>
                <Navbar />
            </div>
            <Banner />
            <Brand brands={brands} />
            <Trade />
            <WhyChooseUs />
        </div>
    )
}

export default Home