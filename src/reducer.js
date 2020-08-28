export const initialState = {
    cart: [

    ]
}

const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case 'ADD_TO_CART':
            // Logic for adding item to cart
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        case 'REMOVE_FROM_CART':
            // Logic for removing item from cart
            return {
                ...state,
                cart: state.cart.filter(item => item !== action.payload)
            }

        default:
            return state
    }
}

export default reducer