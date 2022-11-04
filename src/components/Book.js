import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Navigation from './Navigation';

function Book() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Navigation />} />
            </Routes>

            <div>This is the bookings page!</div>

        </div>
    )
}

export default Book
