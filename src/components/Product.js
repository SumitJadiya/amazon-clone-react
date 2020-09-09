import React from 'react'
import '../css/Product.css'
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import { useStateValue } from '../context/StateProvider';

function Product({ id, title, price, rating, image }) {

    const [{ cart }, dispatch] = useStateValue()
    let halfRating = (rating - Math.floor(rating)) * 10;

    const addToCart = () => {
        // Add item to basket
        dispatch({
            type: 'ADD_TO_CART',
            payload: { id, title, price, rating, image }
        })
    }

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>₹.</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {
                        Array(Math.floor(rating))
                            .fill()
                            .map((_, index) => (
                                <StarIcon key={index} />
                            ))
                    }
                    {
                        (halfRating > 0) ? <StarHalfIcon /> : <></>
                    }
                </div>
            </div>
            <img src={image} alt={title} />
            <button onClick={addToCart}>Add to Cart</button>
        </div>
    )
}

export default Product
