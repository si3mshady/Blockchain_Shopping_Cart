import { createContext } from "react"

import {data} from './MasterWineList.js'
const Cart = createContext();



const Context = ({children}) => {  const results = data.map(e => (
    {
     name: e.Name,
     image: e.URL,
     price: e.Price,     
     ratings: e.Rating,
    

    }
  ));

  console.log(results)

  return <Cart.Provider>{children}</Cart.Provider>

}

export default Context
