import React from 'react'
import { Link } from 'react-router-dom';

function Navigation() {

    // function Menu() {
    //     var x = document.getElementById("DropList");
    //     if (x.style.height === "0%") {
    //         x.style.height = "100%";
    //     } else {
    //         x.style.height = "0%";
    //     }
    // }


    return (
        <div>
            {/* Navigation */}
            <div className='Nav'>
                {/* <div className='MenuButton' onClick={Menu}>
                    <i class="fa-solid fa-bars"></i>
                </div> */}
                <div className='NavTop'>
                    <div className='Logo'><i class="fa-solid fa-store"></i><Link className='link' to="/"><span>MOB</span>MED STORE</Link></div>
                    <div className='ProfilePhoto'></div>
                </div>

                <div className='NavBottom'>

                    <div className='Search'>
                        <input type="text" placeholder='Search' />
                        <button className='SearchButton'><i class="fa-solid fa-magnifying-glass"></i></button>
                    </div>

                    <div className='MainButtons'>
                        <div className='Button1'><Link className='link' to='/shop'>SHOP</Link></div>
                        <div className='Button1'><Link className='link' to='/book'>BOOK</Link></div>
                        <div className='Button1'><Link className='link' to='/request'>REQUEST</Link></div>
                    </div>

                    <div className='Icons'>
                        <Link to='/cart'><div><a href='#'><i class="fa-sharp fa-solid fa-cart-shopping"></i></a></div></Link>
                        <Link to='/message'><div><a href='#'><i class="fa-sharp fa-solid fa-message"></i></a></div></Link>
                        <div><a href='#'><i class="fa-sharp fa-solid fa-bell"></i></a></div>
                    </div>
                </div>
            </div>
            {/* Navigation */}
        </div>
    )
}

export default Navigation
