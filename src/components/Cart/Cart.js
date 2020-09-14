import React from 'react'
import './Cart.css'
import { useStateValue } from '../../context/StateProvider'
import CartProducts from '../CartProducts/CartProducts'
import Subtotal from '../Subtotal/Subtotal'
import FlipMove from 'react-flip-move';

function Cart() {
    const [{ cart }] = useStateValue()
    return (
        <div className="checkout">
            <div className="checkout__left">
                {
                    <img
                        src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423592668_.jpg"
                        alt=""
                        className="checkout__ad"
                    />
                }

                {cart?.length === 0 ? (
                    <div>
                        <h2>Your Cart is Empty</h2>
                        <img src="data:image/png;base64,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" alt="" />
                    </div>
                ) : (
                        <div>
                            <h2 className="checkout__title">Your Cart</h2>
                            <FlipMove appearAnimation="fade" enterAnimation="fade" leaveAnimation="fade">
                                {/* List all the checkout products */}
                                {cart?.map((item, index) => (
                                    <div key={index}>
                                        <CartProducts
                                            id={item.id}
                                            title={item.title}
                                            price={item.price}
                                            rating={item.rating}
                                            image={item.image}
                                        />
                                    </div>

                                ))}
                            </FlipMove>
                        </div>
                    )}
            </div>

            {cart.length > 0 && (
                <div className="checkout__right">
                    <Subtotal />
                </div>
            )}
        </div>
    )
}

export default Cart
