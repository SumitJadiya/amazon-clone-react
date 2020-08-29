import React from 'react'
import '../css/CartProducts.css'
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from '../context/StateProvider';

function CartProducts({ id, title, price, rating, image }) {

    const [{ cart }, dispatch] = useStateValue()

    const removeFromCart = () => {

        dispatch({
            type: "REMOVE_FROM_CART",
            payload: id
        })
    }

    return (
        <div className="checkoutProduct">
            <img src={image} alt="" className="checkoutProduct__image" />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>Rs.</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {
                        Array(rating)
                            .fill()
                            .map((_, i) => (
                                <StarIcon key={i} />
                            ))
                    }
                </div>
                <button onClick={removeFromCart}>Remove From Cart</button>
            </div>
        </div>
    )
}

export default CartProducts
