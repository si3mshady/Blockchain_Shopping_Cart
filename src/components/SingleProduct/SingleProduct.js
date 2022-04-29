import React from 'react'
import {Button,Card} from 'react-bootstrap'
import Rating from '../Rating/Rating'
import "./SingleProduct.css"
import {CartState} from "../../Context/Context"


export default function SingleProduct({value}) {


  const {state: {cart}, dispatch} = CartState()
  // console.log(cart)
  // console.log(dispatch)


  return (
    <div className='products'>
      <Card style={{ width: '20rem' }}
       >

      <Card.Img variant="top" src={value.image }/>
      <Card.Body>
        <Card.Title> {value.name} </Card.Title>
        
        <Card.Subtitle style={{ paddingBottom: 10}}>
             <span>{value.price}</span>          
        </Card.Subtitle>

        <Card.Subtitle style={{ paddingBottom: 10}}>
              <span>{value.year}</span>
        </Card.Subtitle>


   <Card.Subtitle style={{ paddingBottom: 10}}>
              <Rating rating={value.ratings} />
        </Card.Subtitle>
        {
          cart.some(p => p.id === value.id)?           
          
          (<Button 

            onClick={() => {
              dispatch({
                type: "REMOVE_FROM_CART",
                payload: value

              })

            }}
            variant='danger'>Remove From Cart</Button>):
          
          ( <Button 
            onClick={() => {
              dispatch({
                type: "ADD_TO_CART",
                payload: value

              })

            }}

          
          disabled={!value.inStock}  variant='success'>
          {!value.inStock ? "Out of Stock": "Add to Cart"}
          </Button>)
        }
        
       


    </Card.Body>

      </Card>
      </div>
  )
}
