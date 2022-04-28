import { useReducer,createContext, useContext } from "react"
import {cartReducer} from './Reducer'
import {data} from './MasterWineList.js'

const Cart = createContext();



const Context = ({children}) => 

{  const results = data.map(e => (
    {
     name: e.Name,
     image: e.URL,
     price: e.Price,     
     ratings: e.Rating,
     year: e.Year    

    }
  ));

  // console.log(results)



  const [state,dispatch] = useReducer(cartReducer, {
    products: results,
    cart: []
  })

  return <Cart.Provider value={{state,dispatch}}>{children}</Cart.Provider>

}

export default Context
export const CartState = () => {
  return useContext(Cart);
}

