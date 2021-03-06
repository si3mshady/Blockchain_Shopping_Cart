



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


 export const filterReducer = (state,action) => {
     switch (action.type) {
        case "SORT_BY_PRICE":
             return {...state, sort: action.payload}

        case "SORT_BY_YEAR":
            return {...state, year: action.payload}

        case "SORT_BY_RATING":
            return {...state, rating: action.payload}

        case "SORT_BY_IN_STOCK":
            return {...state, inStock: !state.inStock}

        case "FILTER_BY_SEARCH":
            return {...state, searchQuery: action.payload}

        case "CLEAR_FILTER":
            return {
                year: 0,
                rating: 0,
                searchQuery: "",
                inStock: true
            }

         default:
             return state
     }
 }



//  year: 0,
//  rating: 0,
//  searchQuery: "",
//  inStock: false,
//  price: 0
