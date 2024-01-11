import React from 'react';
import { Routes, Route } from 'react-router';
import useScrollRestore from '../hooks/useScrollRestore';
import AllProducts from '../pages/AllProducts';
import Cart from '../pages/Cart';
import Home from '../pages/Home';
import ProductDetails from '../pages/ProductDetails';
import ErrorPage from '../pages/ErrorPage';
import Admindash from '../pages/admin/App';
import ProductAddcustom from '../pages/admin/globalPages/ProductListing';


const RouterRoutes = () => {

    useScrollRestore();
    const userEmail = sessionStorage.getItem('userEmail');
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                {userEmail && (
                    <>
                        <Route path="/admin" element={<Admindash />} />
                        <Route path="/admin/product" element={<ProductAddcustom />} />
                    </>
                )}
                <Route path="/all-products" element={<AllProducts />} />
                <Route path="/product-details/:productId" element={<ProductDetails />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </>
    );
};

export default RouterRoutes;