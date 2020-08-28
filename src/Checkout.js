import React from 'react'
import './Checkout.css'
import { useStateValue } from './StateProvider'
import CheckoutProducts from './CheckoutProducts'

function Checkout() {
    const [{ cart }, dispatch] = useStateValue()
    return (
        <div className="checkout">
            {/* 
                <img
                    src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg"
                    alt=""
                    className="checkout__ad"
                />
            */}

            {cart?.length === 0 ? (
                <div>
                    <h2>Your Cart is Empty</h2>
                </div>
            ) : (
                    <div>
                        <h2 className="checkout__title">Your Cart</h2>

                        {/* List all the checkout products */}
                        {cart.map(item => (
                            <CheckoutProducts
                                id={item.id}
                                title={item.title}
                                price={item.price}
                                rating={item.rating}
                                image={item.image}
                            />

                        ))}
                    </div>
                )}
        </div>
    )
}

export default Checkout
