
import { useReducer,createContext, useContext, useState } from "react"
import {filterReducer,cartReducer} from './Reducer'
import {data} from './MasterWineList.js'
import {ethers} from 'ethers'
import Web3modal from 'web3modal'













const Cart = createContext();

const random_bool = [true,false]


const getRandomIndex = () => {
  return Math.floor(Math.random() * random_bool.length)}

const Context = ({children}) =>



{  const results = data.map(e => (
    {
    id: e.ID,
     name: e.Name,
     image: e.URL,
     ratings: Math.trunc(e.Rating),
     price: Math.trunc(e.Price),
     country: e.Country,
     year: e.Year,
     inStock: random_bool[getRandomIndex()]
    }
  ));


console.log(getRandomIndex())


  const [state,dispatch] = useReducer(cartReducer, {
    products: results.slice(0,20),
    cart: []
  })

  console.log(state)

  const [filterState, filterDispatch ] = useReducer(filterReducer, {
    year: 0,
    rating: 0,
    searchQuery: "",
    inStock: false,
    price: 0
  })

  return <Cart.Provider value={{state,dispatch, filterDispatch, filterState}}>{children}</Cart.Provider>

}

export default Context
export const CartState = () => {
  return useContext(Cart);
}
