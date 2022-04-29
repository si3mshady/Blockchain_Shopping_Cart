
import { useReducer,createContext, useContext } from "react"
import {cartReducer} from './Reducer'
import {data} from './MasterWineList.js'

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

  return <Cart.Provider value={{state,dispatch}}>{children}</Cart.Provider>

}

export default Context
export const CartState = () => {
  return useContext(Cart);
}

