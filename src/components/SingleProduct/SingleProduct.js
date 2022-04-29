import React from 'react'
import {Button,Card} from 'react-bootstrap'
import Rating from '../Rating/Rating'
import "./SingleProduct.css"

export default function SingleProduct({value}) {
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
        <Button variant='danger'>Remove From Cart</Button>
        <Button disabled={!value.inStock}  variant='success'>
          {!value.inStock ? "Out of Stock": "Add to Cart"}
          </Button>


    </Card.Body>

      </Card>
      </div>
  )
}
