import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Product = () => {

    const [product, setProduct] = useState([]);

    useEffect(() => {
        const getAllCat = async () => {
            const res = await axios.get('http://localhost:5000/products');
            console.log(res?.data);
            setProduct(res?.data)
        }
        getAllCat();
    }, [])

    const deleteItem = async (id) => {
        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/products/${id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                        window.location.reload();
                    })
            }
        })
    }
    return (
        <div className='bg-gray-800 min-h-screen'>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y-2 divide-gray-400 text-xl">
                    <thead className="ltr:text-left rtl:text-right">
                        <tr>
                            <th className="whitespace-nowrap px-4 py-3 font-medium text-white">Product Name</th>
                            <th className="whitespace-nowrap px-4 py-3 font-medium text-white">Brand</th>
                            <th className="whitespace-nowrap px-4 py-3 font-medium text-white">Category</th>
                            <th className="whitespace-nowrap px-4 py-3 font-medium text-white">Price</th>
                            <th className="px-4 py-3">Action</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200 text-center">
                        {
                            product && product.map((item, index) =>
                                <tr key={index}>
                                    <td className="whitespace-nowrap px-4 py-3 font-medium text-white">{item?.name}</td>
                                    <td className="whitespace-nowrap px-4 py-3 text-white">{item?.brand_name}</td>
                                    <td className="whitespace-nowrap px-4 py-3 text-white">{item?.category}</td>
                                    <td className="whitespace-nowrap px-4 py-3 text-white">${item?.price}</td>
                                    <td className="whitespace-nowrap px-4 py-3">
                                        <Link to={`/details/${item._id}`}
                                            className="inline-block mr-4 rounded bg-indigo-600 px-4 py-3 text-xs font-medium text-white hover:bg-indigo-700"
                                        >
                                            Details
                                        </Link>
                                        <button onClick={() => deleteItem(item?._id)}
                                            className="inline-block rounded bg-indigo-600 px-4 py-3 text-xs font-medium text-white hover:bg-indigo-700"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Product