import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Navigation from '../components/Navigation';
import '../RequestForm.css';

function RequestForm() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Navigation />} />
            </Routes>

            <div>Request Form</div>
            <footer></footer>
        </div>
    )
}

export default RequestForm
