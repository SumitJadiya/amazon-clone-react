import React from 'react'
import './Order.css'
import CartProducts from '../CartProducts/CartProducts'
import moment from 'moment'
import CurrencyFormat from 'react-currency-format'

function Order({ order }) {
    return (
        <div className="order">
            <h2>Order</h2>
            <p>{moment.unix(order.data.created).format('MMMM DD YYYY, h:mma')}</p>
            <p className="order__id">
                <small>{order.id}</small>
            </p>
            {order.data.cart?.map((item, index) => (
                <CartProducts
                    key={index}
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    rating={item.rating}
                    image={item.image}
                    hideButton={true}
                />
            ))}
            <CurrencyFormat
                renderText={(value) => <h3 className="order__total">Order Total : {value}</h3>}
                decimalScale={2}
                value={order.data.amount / 100}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹"}
            />
        </div>
    )
}

export default Order
