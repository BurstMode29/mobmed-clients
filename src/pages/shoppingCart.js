import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Cart from '../components/Cart';

function shoppingCart() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Cart />} />
            </Routes>
        </div>
    )
}

export default shoppingCart
