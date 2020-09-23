import React from 'react'
import './Product.css'
import StarIcon from '@material-ui/icons/Star';
import { toast } from 'react-toastify';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import StarOutlineIcon from '@material-ui/icons/StarBorder';
import { useStateValue } from '../../context/StateProvider';

function Product({ id, title, price, rating, image }) {

    const [{ cart }, dispatch] = useStateValue()
    let halfRating = (rating - Math.floor(rating)) * 10;
    let outline = 0;

    halfRating > 0 ? outline = (5 - Math.ceil(rating)) : outline = (5 - Math.floor(rating))

    const addToCart = () => {
        // Add item to basket
        dispatch({
            type: 'ADD_TO_CART',
            payload: { id, title, price, rating, image }
        })
        toast.info(`${title} added worth \n ₹${price}`);
    }

    return (
        <div className="product">
            <img src={image} alt={title} />
            <div className="product__info">
                <p>{title}</p>
                <div className="product__group">
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
                        {
                            outline > 0 ? (
                                Array(outline)
                                    .fill()
                                    .map((_, index) => (
                                        <StarOutlineIcon key={index} />
                                    ))
                            )
                                : ""
                        }
                    </div>
                </div>
            </div>

            <button onClick={addToCart}>Add to Cart</button>
        </div>
    )
}

export default Product
