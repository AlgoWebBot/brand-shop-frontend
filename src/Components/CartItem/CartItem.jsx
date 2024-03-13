
import Navbar from '../Home/Navbar/Navbar';
import Swal from 'sweetalert2'
import Payment from './Payment';
import { useContext, useEffect, useState } from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'

import { MyContext } from '../../Auth/AuthProvider';
import axios from 'axios';

const CartItem = () => {
    const [openModal, setOpenModal] = useState(false);
    const cartItem = useLoaderData();
    const navigate = useNavigate();
    const [payment, setPayment] = useState([]);
    const [cart, setCart] = useState([])
    const { user } = useContext(MyContext);
    console.log(user?.reloadUserInfo?.email);

    // http://localhost:5000/cart-products?email=shimul@gmail.com
    useEffect(() => {
        const getAllCat = async () => {
            const res = await axios.get(`http://localhost:5000/cart-products?email=${user?.reloadUserInfo?.email}`);
            console.log(res?.data);
            setCart(res?.data)
        }
        getAllCat();
    }, [])


    useEffect(() => {
        const getAllCat = async () => {
            const res = await axios.get(`http://localhost:5000/payment-info?email=${user?.reloadUserInfo?.email}`);
            console.log(res?.data);
            setPayment(res?.data)
        }
        getAllCat();
    }, [])


    const deleteItem = id => {
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
                fetch(`https://brand-shop-zeta.vercel.app/carts/${id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        window.location.reload();
                    })

                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
    }

    return (
        <div>
            <div className='sticky top-0 z-50'>
                <div className=''>
                    <Navbar />
                </div>
            </div>
            <div className='min-h-screen container mx-auto py-20'>
                <h1 className="text-5xl font-thin text-center mb-10">Your cart items</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10'>
                    {
                        cart && cart?.map(item =>
                            <div key={item._id} className='border-2 rounded-lg border-black flex justify-between items-center'>
                                <div className='flex justify-start gap-8 items-center'>
                                    <img src={item?.image} alt="" className='h-40 w-40 rounded-lg' />
                                    <div className='space-y-3'>
                                        <h1><strong>Name: </strong>{item?.name}</h1>
                                        <h1><strong>Price: </strong> {item?.price} TK</h1>
                                        <h1><strong>Rating: </strong> {item?.rating}</h1>
                                        <h1><strong>Brand: </strong> {item?.brand_name}</h1>
                                    </div>
                                </div>
                                <div>
                                    <button onClick={() => setOpenModal(true)} className={`rounded-sm text-white`} id="_modal_NavigateUI"><span className="sr-only">Buy Now</span>
                                        <svg fill="#000000" height="80px" width="80px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 305.41 305.41" xmlSpace="preserve">
                                            <g>
                                                <g>
                                                    <path d="M251.083,41.029H9.327C4.185,41.029,0,45.215,0,50.359V161.7c0,5.144,4.185,9.329,9.327,9.329h241.756
		                                             	c5.143,0,9.327-4.185,9.327-9.329V50.359C260.41,45.215,256.226,41.029,251.083,41.029z M73.072,145.478
		                                             	c-6.016,0-11.621-1.486-16.435-4.202c-1.22,2.488-3.778,4.202-6.737,4.202c-4.143,0-7.5-3.358-7.5-7.5V123.02
			                                            c-0.008-0.198-0.008-0.396,0-0.592v-20.784c-0.008-0.197-0.008-0.395,0-0.592V63.52c0-4.142,3.357-7.5,7.5-7.5s7.5,3.358,7.5,7.5
		                                             	v18.862c4.639-2.452,9.973-3.787,15.672-3.787c18.637,0,32.69,14.397,32.69,33.488C105.763,131.121,91.709,145.478,73.072,145.478
		                                             	z M163.445,137.072c0,4.142-3.357,7.5-7.5,7.5c-3.255,0-6.025-2.074-7.063-4.972c-3.626,1.843-7.866,2.86-12.647,2.964
		                                             	c-0.055,0.001-0.109,0.002-0.164,0.002c-16.047,0-27.252-10.675-27.252-25.961V85.192c0-4.142,3.357-7.5,7.5-7.5
		                                               	s7.5,3.358,7.5,7.5v31.413c0,9.826,8.452,10.946,12.177,10.961c4.103-0.091,12.45-0.394,12.45-16.987V85.192
			                                            c0-4.142,3.357-7.5,7.5-7.5c4.143,0,7.5,3.358,7.5,7.5V137.072z M223.956,88.03l-20.971,51.299
	                                               		c-0.085,0.243-0.183,0.482-0.292,0.716l-3.021,7.391c-4.393,10.566-11.852,16.603-20.482,16.603c-4.143,0-7.5-3.358-7.5-7.5
		                                                s3.357-7.5,7.5-7.5c2.236,0,4.709-2.736,6.613-7.319l1.989-4.864l-20.157-48.8c-1.582-3.828,0.24-8.214,4.068-9.795
			                                            c3.829-1.582,8.214,0.24,9.795,4.068l14.366,34.779l14.207-34.754c1.566-3.834,5.948-5.672,9.78-4.104
		                                             	C223.686,79.817,225.523,84.196,223.956,88.03z"/>
                                                    <path d="M73.072,93.595c-7.025,0-12.789,3.461-15.672,9.329v18.225c2.881,5.868,8.645,9.328,15.672,9.328
			                                            c10.416,0,17.69-7.564,17.69-18.395C90.763,101.197,83.488,93.595,73.072,93.595z"/>
                                                </g>
                                                <g>
                                                    <path d="M302.482,247.31l-20.257-20.257c3.717-0.384,7.066-2.833,8.402-6.588c1.851-5.204-0.867-10.922-6.07-12.773
			                                                  l-35.795-12.732c-3.636-1.293-7.692-0.378-10.424,2.352c-2.729,2.729-3.643,6.785-2.35,10.422l12.24,34.407
			                                                  c1.457,4.096,5.311,6.651,9.422,6.651c1.112,0,2.244-0.188,3.352-0.582c3.488-1.241,5.85-4.222,6.476-7.618l20.859,20.86
			                                                  c1.954,1.953,4.513,2.929,7.072,2.929c2.56,0,5.118-0.976,7.071-2.929C306.387,257.547,306.387,251.215,302.482,247.31z"/>
                                                </g>
                                            </g>
                                        </svg>
                                    </button>
                                    <div onClick={() => setOpenModal(false)} className={`fixed z-[100] flex items-center justify-center ${openModal ? 'visible opacity-100' : 'invisible opacity-0'} inset-0 bg-black/20 backdrop-blur-sm duration-100 dark:bg-white/10`}>
                                        <div onClick={(e_) => e_.stopPropagation()} className={`text- absolute rounded-sm bg-white p-6 drop-shadow-lg dark:bg-black dark:text-white ${openModal ? 'scale-1 opacity-1 duration-300' : 'scale-0 opacity-0 duration-150'}`}>
                                            <Payment item={item} />

                                        </div>
                                    </div>
                                </div>
                                <button onClick={() => deleteItem(item._id)} className="text-gray-600 transition hover:text-red-600 mr-10">
                                    <span className="sr-only">Remove item</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="h-10 w-10"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                        />
                                    </svg>
                                </button>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default CartItem