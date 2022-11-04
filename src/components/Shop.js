import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Listings from './Listings';
import Navigation from './Navigation';

function Shop() {
  return (
    <div>
      {/* Navigation */}
      <Routes>
        <Route path='/' element={<Navigation />} />
      </Routes>
      {/* Navigation */}

      {/* Listings */}
      <Routes>
        <Route path='/' element={<Listings />} />
      </Routes>
      {/* Listings */}
    </div>
  )
}

export default Shop
