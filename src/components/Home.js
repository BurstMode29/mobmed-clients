import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Items from './Items';
import image from '../images/advertImage.png';
import Navigation from './Navigation';

function Home() {
    return (
        <div>

            <Routes>
                <Route path='/' element={<Navigation />} />
            </Routes>

            <div className='Content'>
                <div className='Advert'>
                    <div className='AdvertContent'>
                        <h1>Nation wide Pharmaceutical Network</h1>
                        <p> Non minim labore id cupidatat qui aute.
                            Cillum et nisi id Lorem officia ut nostrud sint.
                            Pariatur qui eiusmod enim qui eu dolor fugiat sit dolor aliquip.
                            Quis consectetur enim dolore nisi consectetur ad pariatur nisi aliquip.
                        </p>
                        <button>LEARN MORE</button>
                    </div>
                    <img src={image} alt='image' />
                </div>
            </div>
            <Routes>
                <Route path='/' element={<Items />} />
            </Routes>

            <footer></footer>
        </div>
    )
}

export default Home
