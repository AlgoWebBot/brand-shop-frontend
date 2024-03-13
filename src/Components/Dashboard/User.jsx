import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';

const User = () => {

    const [admin, setAdmin] = useState([]);

    useEffect(() => {
        const getAllCat = async () => {
            const res = await axios.get('http://localhost:5000/users');
            console.log(res?.data);
            setAdmin(res?.data)
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
                        navigate('/')
                        // window.location.reload();
                    })
            }
        })
    }


    return (
        <div className='bg-gray-800 min-h-screen'>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y-3 divide-gray-200 text-xl">
                    <thead className="ltr:text-left rtl:text-right">
                        <tr>
                            <th className="whitespace-nowrap px-4 py-3 font-medium text-white">Serial</th>
                            <th className="whitespace-nowrap px-4 py-3 font-medium text-white">User Name</th>
                            <th className="whitespace-nowrap px-4 py-3 font-medium text-white">Email</th>
                            <th className="whitespace-nowrap px-4 py-3 font-medium text-white">Action</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-300 text-center">
                        {
                            admin && admin.map((item, index) =>

                                <tr key={index}>
                                    <td className="whitespace-nowrap px-4 py-3 font-medium text-white">{index + 1}</td>
                                    <td className="whitespace-nowrap px-4 py-3 text-white">{item?.name}</td>
                                    <td className="whitespace-nowrap px-4 py-3 text-white">{item?.email}</td>
                                    {
                                        item?.role !== 'admin' && <td className="whitespace-nowrap px-4 py-3">
                                            <button onClick={() => deleteItem(item._id)}
                                                className="inline-block rounded bg-indigo-600 px-4 py-3 text-xs font-medium text-white hover:bg-indigo-700"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    }
                                </tr>

                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default User