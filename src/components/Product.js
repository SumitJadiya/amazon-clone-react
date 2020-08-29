import React from 'react'
import '../css/Product.css'
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from '../context/StateProvider';

function Product({ id, title, price, rating, image }) {

    const [{ }, dispatch] = useStateValue()

    const addToCart = () => {
        // Add item to basket
        dispatch({
            type: 'ADD_TO_CART',
            payload: { id, title, price, rating, image }
        })
    }

    return (
        <div className="product">
            <div class="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>Rs.</small>
                    <string>{price}</string>
                </p>
                <div class="product__rating">
                    {
                        Array(rating)
                            .fill()
                            .map((_) => (
                                <StarIcon />
                            ))
                    }
                </div>
            </div>
            <img src={image} alt={title} />
            <button onClick={addToCart}>Add to Cart</button>
        </div>
    )
}

export default Product
