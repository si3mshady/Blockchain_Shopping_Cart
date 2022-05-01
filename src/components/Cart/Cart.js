import {useState, useEffect} from 'react'
import {CartState} from "../../Context/Context"
import { ListGroup } from "react-bootstrap"
import "./Cart.css"

const Cart = () => {

  const {state: {cart}, dispatch} = CartState()
  const [total,setTotal] = useState()


  useEffect(() => {
    
    setTotal(cart.reduce((acc,current) => acc + Number(current.price * current.qty), 0 ))
    
   
  }, [cart])
  

  return (
    <div className="mainCartContainer">

      <div className="productsContainer">

        {
          cart.map(item => (
            <ListGroup>
              <ListGroup.Item>{item.name}</ListGroup.Item>              
          </ListGroup>
          ))
        }

      </div>

      <div className="cartSummary">
        <span>
          Subtotal ({cart.length}) items
        </span>

        <span>
          Total {total} 
        </span>
        

      </div>

    </div>
  )


}

export default Cart
