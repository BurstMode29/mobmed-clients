import React from 'react';
import { connect } from 'react-redux';
import './components.css';

const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}

const Items = (props) => {
    const addToCart = (item) => {
        props.dispatch({ type: "ADD_TO_CART", data: item })
    }


    return (
        <div>
            <div className='featuredProducts'>
                <h1>FEATURED PRODUCTS</h1>
                <input type='text' placeholder='Filter' />
            </div>

            <ol>
                <div className='container'>
                    {props.items.map(
                        i => <div className='productCard' key={i.name}>
                            <div>
                                {i.name}
                                <div className='productImage'></div>
                                <button className='addProduct' onClick={() => addToCart(i)}>Add to Cart</button>
                            </div>
                        </div>
                    )}
                </div>
            </ol>

            <ol>
                <div className='container'>
                    {props.items.map(
                        i => <div className='productCard' key={i.name}>
                            <div>
                                {i.name}
                                <div className='productImage'></div>
                                <button className='addProduct' onClick={() => addToCart(i)}>Add to Cart</button>
                            </div>
                        </div>
                    )}
                </div>
            </ol>

            <ol>
                <div className='container'>
                    {props.items.map(
                        i => <div className='productCard' key={i.name}>
                            <div>
                                {i.name}
                                <div className='productImage'></div>
                                <button className='addProduct' onClick={() => addToCart(i)}>Add to Cart</button>
                            </div>
                        </div>
                    )}
                </div>
            </ol>
        </div>
    )
}

export default connect(mapStateToProps)(Items);
