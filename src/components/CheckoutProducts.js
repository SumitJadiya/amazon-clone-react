import React from 'react'
import '../css/CheckoutProducts.css'
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from '../context/StateProvider';

function CheckoutProducts({ id, title, price, rating, image }) {

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
            <div class="checkoutProduct__info">
                <p class="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>Rs.</small>
                    <string>{price}</string>
                </p>
                <div class="checkoutProduct__rating">
                    {
                        Array(rating)
                            .fill()
                            .map((_) => (
                                <StarIcon />
                            ))
                    }
                </div>
                <button onClick={removeFromCart}>Remove From Cart</button>
            </div>
        </div>
    )
}

export default CheckoutProducts
