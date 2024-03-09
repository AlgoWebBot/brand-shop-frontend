import axios from 'axios';
import React, { useState } from 'react'

const AddCategory = () => {

    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setSelectedImage(file);
    };

    const handleategory = async e => {
        e.preventDefault();
        const name = e.target.name.value;
        const cat = { name, image: selectedImage }

        if (name && selectedImage) {
            const res = await axios.post('http://localhost:5000/add-cat', cat, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
        }
        if (res.data?.acknowledged) {
            window.alert('Category added successfully')
        } else {
            window.alert(res?.data?.message)
        }

    }

    return (
        <section>
            <section className="relative flex flex-wrap lg:h-screen lg:items-center">
                <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
                    <div className="mx-auto max-w-lg text-center">
                        <h1 className="text-2xl font-bold sm:text-3xl">Get started today with Fokinni Bazar!</h1>

                        <p className="mt-4 text-gray-500">
                            You can create new test categories, new test sets in an existing category, and new subsets in an existing test set. You can also define new object types for which you want to create tests.
                        </p>
                    </div>

                    <form action="#" onSubmit={handleategory} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
                        <div>
                            <label htmlFor="email" className="sr-only">Category</label>

                            <div className="relative">
                                <input
                                    type="text"
                                    name='name'
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Enter product category name"
                                />
                            </div>
                        </div>

                        <div className="">
                            <input type="file"
                                name="image"
                                onChange={handleImageChange}

                                claclassName="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm" />

                        </div>

                        <div className="flex items-center justify-between">
                            <button
                                type="submit"
                                className="inline-block w-full rounded-lg bg-blue-700 px-5 py-3 text-sm font-medium text-white"
                            >
                                Publish Category👋
                            </button>
                        </div>
                    </form>
                </div>

                <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
                    <img
                        alt=""
                        src="https://images.unsplash.com/photo-1630450202872-e0829c9d6172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                </div>
            </section>

        </section>
    )
}

export default AddCategory