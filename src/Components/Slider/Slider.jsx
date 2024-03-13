import React, { useEffect, useState } from 'react'
import 'react-slideshow-image/dist/styles.css'

const Slider = ({ id }) => {

    const [image, setImage] = useState([])


    useEffect(() => {
        fetch('/data/brands.json')
            .then(res => res.json())
            .then(data => setImage(data));
    }, [])

    console.log(id)

    // console.log(image[0]?.sliderImage[0]?.image1);
    const foundImage = image.find(item => console.log(item.brand_name.to));
    console.log(foundImage);
    // console.log(foundImage.sliderImage)

    return (
        <div className="carousel w-full lg:h-[500px]">
            <div id="slide5" className="carousel-item relative w-full">
                <img src={foundImage?.sliderImage[0]?.image1} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide7" className="btn btn-circle">❮</a>
                    <a href="#slide6" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full">
                <img src={foundImage?.sliderImage[0]?.image2} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide5" className="btn btn-circle">❮</a>
                    <a href="#slide7" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide7" className="carousel-item relative w-full">
                <img src={foundImage?.sliderImage[0]?.image3} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide6" className="btn btn-circle">❮</a>
                    <a href="#slide5" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    )
}

export default Slider