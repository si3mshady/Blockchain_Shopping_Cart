export const cartReducer = (state, action) => {
    switch (action.type) {

        case "ADD_TO_CART":
            console.log('action_payload',action.payload)
            return {...state, cart: [...state.cart, {...action.payload, qty: 1}]}

        case "REMOVE_FROM_CART":
            console.log('action_payload',action.payload)
            return {...state,
                cart: state.cart.filter((c) => c.id !== action.payload.id )}

        default: 
            return state;
    }
 }