import React from "react";
import { connect } from "react-redux";
import Navigation from '../components/Navigation';
import { Routes, Route } from 'react-router-dom';
import './components.css';

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
};

const Cart = (props) => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Navigation />} />
            </Routes>
            <h1 className="cartHeader">Home/<span>Cart</span></h1>

            <div className="Cart">
                <div className="cartList">
                    <ul>
                        {props.cart.map(
                            i => <div className="cartItem" key={i.name}>
                                <div className="cartItemImage"></div>
                                {i.name} : {i.unitPrice}
                            </div>
                        )}
                    </ul>
                </div>


                <div className="Total">
                    <h1 className="totalHeader">Summary</h1>
                    {/* total: {props.cart.reduce((total, item) => total += item.unitPrice, 0)} */}
                    <div className="orderTotal">
                        <div>Order Total</div>
                        <div>{props.cart.reduce((total, item) => total += item.unitPrice, 0)}</div>
                    </div>

                    <div className="promoCode">
                        <div>Promo Code</div>
                        <div className="Code"></div>
                    </div>
                    <div className="Shipping">
                        <div>Shipping</div>
                        <div>R0.00</div>
                    </div>
                    <div className="subTotal">
                        <div>Subtotal</div>
                        <h1>{props.cart.reduce((total, item) => total += item.unitPrice, 0)}</h1>
                    </div>

                </div>

            </div>
            <button className="checkOut">CHECKOUT ITEMS</button>

            <footer></footer>
        </div>
    )
}

export default connect(mapStateToProps)(Cart);