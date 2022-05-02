import {useState, useEffect} from 'react'

import {AiFillDelete} from 'react-icons/ai'
import {CartState} from "../../Context/Context"
import Rating from '../Rating/Rating'
import {Image, Button, Row,Col, Form, ListGroup } from "react-bootstrap"
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
              <ListGroup.Item key={item.id}>

                <Row>
                  <Image className="cartItemImage" src={item.image} fluid rounded />
                  <Col md={2}>
                    <span>
                      {item.name}
                    </span>
                  </Col>


                    <Col md={2}>
                    <Rating  rating={item.ratings}>
                      {item.price}
                    </Rating>
                  </Col>
                  <Col>
                  <Form.Control style={{width:"40px"}} as="select" value={1}>
                  {
                    [Array(1)].map((_,i) => (

                            <option value={i + 1} key={i + 1}> {i+1} </option>


                    ))
                  }

                  </Form.Control>
                  </Col>

                    <Col>
                      <Button onClick={() => console.log(item)}>Purchase</Button>

                    </Col>

                  <Col>

                  <AiFillDelete
                      fontSize={20}
                      style={{cursor:"pointer"}}
                      onClick={() => dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: item  })}
                />


                  </Col>
                      </Row>

                </ListGroup.Item>
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
