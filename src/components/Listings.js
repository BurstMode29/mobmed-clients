import React from 'react'

function Listings() {
    return (
        <div>
            <div className='Frequantly'>
                <div>Frequently Searched</div>
                <div className='Column1'>
                    <div className='Listing'></div>
                    <div className='Listing'></div>
                    <div className='Listing'></div>
                </div>
            </div>

            <div className='Featured'>
                <div>Featured Products</div>
                <div className='Shop'>
                    <div className='Column1'>
                        <div className='Listing'></div>
                        <div className='Listing'></div>
                        <div className='Listing'></div>
                    </div>
                    {/* <div className='Column2'>
                        <div className='Listing'></div>
                        <div className='Listing'></div>
                        <div className='Listing'></div>
                    </div> */}
                </div>
             
            </div>
        </div>
    )
}

export default Listings
