import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Navigation from '../components/Navigation';

function Book() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Navigation />} />
            </Routes>

            <div>This is the bookings page!</div>
        <footer></footer>
        </div>
    )
}

export default Book
