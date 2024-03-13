import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Message = () => {

    const [cat, setCat] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [item, setItem] = useState();

    useEffect(() => {
        const getAllCat = async () => {
            const res = await axios.get('http://localhost:5000/message');
            console.log(res?.data);
            setCat(res?.data)
        }
        getAllCat();
    }, [])

    const sendReply = () => {
        window.alert('Reply sent successfully');
    }

    const handleMessage = (item) => {
        setOpenModal(true);
        setItem(item)
    }

    console.log(item);

    return (
        <div className='bg-gray-800 min-h-screen'>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y-2 divide-gray-400 text-xl">
                    <thead className="ltr:text-left rtl:text-right">
                        <tr>
                            <th className="whitespace-nowrap px-4 py-3 font-medium text-white">Name</th>
                            <th className="whitespace-nowrap px-4 py-3 font-medium text-white">Email</th>
                            <th className="whitespace-nowrap px-4 py-3 font-medium text-white">Phone Number</th>
                            <th className="whitespace-nowrap px-4 py-3 font-medium text-white">Action</th>
                            <th className="px-4 py-3"></th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200 text-center">
                        {
                            cat && cat.map((item, index) =>

                                <tr key={index}>
                                    <td className="whitespace-nowrap px-4 py-3 font-medium text-white">{item?.name}</td>
                                    <td className="whitespace-nowrap px-4 py-3 text-white">{item?.email}</td>
                                    <td className="whitespace-nowrap px-4 py-3 text-white">{item?.phone}</td>
                                    <td className="whitespace-nowrap px-4 py-3">
                                        <button onClick={sendReply}
                                            className="inline-block mr-4 rounded bg-indigo-600 px-4 py-3 text-xs font-medium text-white hover:bg-indigo-700"
                                        >
                                            Reply
                                        </button>
                                        <button onClick={() => handleMessage(item)}
                                            className="inline-block rounded bg-indigo-600 px-4 py-3 text-xs font-medium text-white hover:bg-indigo-700"
                                        >
                                            View Message
                                        </button>
                                    </td>
                                </tr>

                            )
                        }
                    </tbody>
                </table>
            </div>
            <div onClick={() => setOpenModal(false)} className={`fixed flex justify-center items-center z-[100] ${openModal ? 'visible opacity-1' : 'invisible opacity-0'} inset-0 backdrop-blur-sm bg-black/20 duration-100`}>
                <div onClick={(e_) => e_.stopPropagation()} className={`absolute w-80 p-6 text-center bg-white drop-shadow-2xl rounded-lg ${openModal ? 'translate-y-0 opacity-1 duration-300' : 'translate-y-20 opacity-0 duration-150'}`}>
                    <div className="space-y-3 flex flex-col justify-start text-black items-start">
                        <h1>From: {item?.email}</h1>
                        <h1>Name: {item?.name}</h1>
                        <h1>Phone: {item?.phone}</h1>
                        <h1>Message: {item?.message}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Message