import React from 'react'

function Home() {
    return (
        <div>
            {/* Navigation */}
            <div className='Nav'>
                <div className='NavTop'>
                    <div className='ProfileDetails'>
                        <div className='ProfilePhoto'></div>
                        <div>Welcome DR. Jonas Drescott</div>
                    </div>

                    <div className='TopButtons'>
                        <a href='#'>SHOP</a>
                        <a href='#'>BOOK</a>
                        <a href='#'>REQUEST</a>
                    </div>
                </div>


                <div className='Seperator'></div>{/* Seperator Line */}

                <div className='NavBottom'>
                    <div className='Links'>
                        <div className='Logo'><i class="fa-solid fa-heart-pulse"></i>MOB<span>MED</span></div>
                        <div className='Search'>
                            <input type="text" placeholder='Search' />
                            <button className='SearchButton'><i class="fa-solid fa-magnifying-glass"></i></button>
                        </div>
                        <div className='InnerLinks'>
                            <a href='#'>ORDERS</a>
                            <a href='#'>PROFILE</a>
                            <a href='#'>HISTORY</a>
                            <a href='#'>SETTINGS</a>
                        </div>

                    </div>

                    <div className='Icons'>
                        <div><a href='#'><i class="fa-sharp fa-solid fa-cart-shopping"></i></a></div>
                        <div><a href='#'><i class="fa-sharp fa-solid fa-message"></i></a></div>
                        <div><a href='#'><i class="fa-sharp fa-solid fa-bell"></i></a></div>
                    </div>

                </div>

            </div>
            {/* Navigation */}

            <div className='Content'>
                <div className='Advert'>
                    <h1>Nation wide Pharmaceutical Network</h1>
                    <p> Non minim labore id cupidatat qui aute.
                        Cillum et nisi id Lorem officia ut nostrud sint.
                        Pariatur qui eiusmod enim qui eu dolor fugiat sit dolor aliquip.
                        Quis consectetur enim dolore nisi consectetur ad pariatur nisi aliquip.
                    </p>
                    <button>Learn More</button>
                </div>

                <div className='Frequantly'>
                    <div>Frequently Searched</div>
                </div>

                <div className='Featured'>
                    <div>Featured Products</div>
                </div>

            </div>

        </div>
    )
}

export default Home
