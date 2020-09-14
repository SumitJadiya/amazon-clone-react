import React from 'react'
import CurrencyFormat from "react-currency-format"
import { useStateValue } from '../../context/StateProvider'
import './Subtotal.css'
import { getCartTotal } from '../../context/reducer'
import { useHistory } from 'react-router-dom'

function Subtotal() {
    const history = useHistory()
    const [{ cart }] = useStateValue()
    return (
        <div className="subtotal">
            <div className="subtotal__head">
                <img
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png"
                    alt=""
                />
            </div>

            <div className="subtotal__body">
                <CurrencyFormat
                    renderText={value => (
                        <>
                            <p>
                                Subtotal ({cart.length} items) : <strong>{`${value}`}</strong>
                            </p>
                            <small className="subtotal__gift">
                                <input type="checkbox" /> This order contains a gift
                        </small>
                        </>
                    )}
                    decimalScale={2}
                    value={getCartTotal(cart)}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"₹"}
                />
                <button onClick={e => history.push('/payment')}>Proceed to Checkout</button>
            </div>
        </div>

    )
}

export default Subtotal
