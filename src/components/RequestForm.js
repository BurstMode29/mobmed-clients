import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Navigation from './Navigation';
import '../RequestForm.css';

function RequestForm() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Navigation />} />
            </Routes>

            <header><span>REQUEST</span> FORM</header>

            <form>
                      
            </form>
        </div>
    )
}

export default RequestForm
