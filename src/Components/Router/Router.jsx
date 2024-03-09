import React from 'react'
import {
    createBrowserRouter,
} from "react-router-dom";
import Layout from '../Layout/Layout';
import Home from '../Home/Home';
import Error from '../Error/Error';
import AddProduct from '../AddProduct/AddProduct';
import Products from '../Products/Products';
import ProductDetails from '../ProductDetails/ProductDetails';
import CartItem from '../CartItem/CartItem';
import Registration from '../../Registration/Registration';
import Login from '../../Login/Login';
import Private from '../../Private/Private';
import UpdateProduct from '../../UpdateProduct/UpdateProduct';
import AddCategory from '../AddCategory/AddCategory';
import Contact from '../Contact/Contact';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('/data/brands.json')
            },
            {
                path: '/addProduct',
                element: <Private><AddProduct /></Private>
            },
            {
                path: '/addCategory',
                element: <Private><AddCategory /></Private>
            },
            {
                path: '/brand/:brand_name',
                element: <Products />,
            },
            {
                path: '/contact',
                element: <Contact />,
            },
            {
                path: '/details/:id',
                element: <Private><ProductDetails /></Private>,
                loader: ({ params }) => fetch(`https://brand-shop-zeta.vercel.app/details/${params.id}`)
            },
            {
                path: '/update/:id',
                element: <Private><UpdateProduct /></Private>,
                loader: ({ params }) => fetch(`https://brand-shop-zeta.vercel.app/update/${params.id}`)
            },
            {
                path: '/myCart',
                element: <Private><CartItem /></Private>,
                loader: () => fetch('https://brand-shop-zeta.vercel.app/carts')
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/register',
                element: <Registration />,
            },
        ]
    }
])

export default router