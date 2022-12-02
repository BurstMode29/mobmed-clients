import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Items from '../components/Items';
import Navigation from '../components/Navigation';

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
        <Route path='/' element={<Items />} />
      </Routes>
      {/* Listings */}
      <footer></footer>
    </div>
  )
}

export default Shop
