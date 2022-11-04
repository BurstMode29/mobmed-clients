import React from 'react'
import { Link } from 'react-router-dom';

function Navigation() {

    function Menu() {
        var x = document.getElementById("DropList");
        if (x.style.height === "0%") {
            x.style.height = "100%";
        } else {
            x.style.height = "0%";
        }
    }


  return (
    <div>
       {/* Navigation */}
       <div className='Nav'>
                <div className='MenuButton' onClick={Menu}>
                    <i class="fa-solid fa-bars"></i>
                </div>
                <div className='DropList' id='DropList'></div>
                <div className='NavTop'>
                    <div className='ProfileDetails'>
                        <div className='ProfilePhoto'></div>
                        <div>Welcome DR. Jonas Drescott</div>
                    </div>

                    <div className='TopButtons'>
                        <Link to='/shop'>SHOP</Link>
                        <Link to='/book'>BOOK</Link>
                        <Link to='/request'>REQUEST</Link>
                    </div>
                </div>


                <div className='Seperator'></div>{/* Seperator Line */}

                <div className='NavBottom'>
                    <div className='Links'>
                        <div className='Logo'><i class="fa-solid fa-heart-pulse"></i><Link to="/">MOB<span>MED</span></Link></div>
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
    </div>
  )
}

export default Navigation
