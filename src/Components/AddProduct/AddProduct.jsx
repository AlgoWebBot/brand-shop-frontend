import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../Home/Navbar/Navbar'
import Swal from 'sweetalert2'
import axios from 'axios';
import { MyContext } from '../../Auth/AuthProvider';


const AddProduct = () => {

    const [cat, setCat] = useState([]);
    const { user } = useContext(MyContext);
    console.log(user?.reloadUserInfo?.email);

    useEffect(() => {
        const getAllCat = async () => {
            const res = await axios.get('http://localhost:5000/categories');
            console.log(res?.data);
            setCat(res?.data)
        }
        getAllCat();
    }, [])

    const addProduct = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const image = form.image.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const category = form.category.value;
        const brand_name = form.brand_name.value.toLowerCase();
        const description = form.description.value;
        const email = user?.reloadUserInfo?.email;

        const product = { name, image, price, brand_name, category, rating, description, email }
        // console.log(product)

        if (email) {
            fetch('https://brand-shop-zeta.vercel.app/products', {
                method: "POST",
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(product),
            })
                .then(res => res.json())
                .then(data => {
                    e.target.reset()
                    Swal.fire(
                        'Successfully!',
                        'Product added successfully!',
                        'success'
                    )
                }
                )
        } else {
            window.alert('Please login before add product');
        }

    }

    console.log(cat);


    return (
        <div>
            <div className='mb-10 sticky top-0 z-50'>
                <Navbar />
            </div>
            <div className='container mx-auto mb-10 bg-[#4b2b1f] p-4 lg:p-20 rounded-lg bg-blend-overlay bg-opacity-70'>
                <div className='text-center mb-10'>
                    <h1 className='text-5xl font-thin font-primary text-[white] drop-shadow-2xl'>Add New Product</h1>
                    <p className='text-lg font-thin mt-4'></p>
                </div>
                <form onSubmit={addProduct}>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                        <div className='space-y-4'>
                            <label className='text-xl font-bold'>Name</label>
                            <input type="text" name='name' placeholder="Enter product name" className="input input-bordered w-full border-none" required />
                        </div>
                        <div className='space-y-4'>
                            <label className='text-xl font-bold'>Image</label>
                            <input type="text" name='image' placeholder="Enter product image link" className="input input-bordered w-full border-none" required />
                        </div>
                        <div className='space-y-4'>
                            <label className='text-xl font-bold'>Brand Name</label>
                            <select name="brand_name" type="text" className='select text-gray-500 select-bordered w-full border-none'>
                                {
                                    cat?.map((item, index) => (
                                        <option key={index} value={item?.name}>
                                            {item?.name}
                                        </option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className='space-y-4'>
                            <label className='text-xl font-bold'>Price</label>
                            <input type="text" name='price' placeholder="Enter price in taka" className="input input-bordered w-full border-none" required />
                        </div>
                        <div className='space-y-4'>
                            <label className='text-xl font-bold'>Category</label>
                            <input type="text" name='category' placeholder="Enter product category" className="input input-bordered w-full border-none" required />
                        </div>
                        <div className='space-y-4'>
                            <label className='text-xl font-bold'>Rating</label>
                            <input type="text" name='rating' placeholder="Enter rating" className="input input-bordered w-full border-none" required />
                        </div>
                    </div>
                    <div className='space-y-4 mt-6'>
                        <label className='text-xl font-bold'>Descrtption</label>
                        <input type="text" name='description' placeholder="Enter product short description" className="input input-bordered w-full border-none " required />
                    </div>
                    <div className='space-y-4 mt-10'>
                        <input type="submit" value="Add Product" className="input capitalize text-white btn text-2xl font-thin input-bordered w-full font-primary bg-[#4b2b1f] hover:bg-[#4b2b1f] border-black" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddProduct