import React from 'react'
import './Filters.css'
import Rating from '../Rating/Rating'

import {Container, Navbar, Dropdown,Nav, Button, Form} from 'react-bootstrap'




export default function Filters() {
  
  const [rating, setRating] = React.useState(0)

  


  return (
    <div className='filters'> 
    <h2 className='title'>Filter Products</h2>

    <span>
    <Form.Check
        inline
        type="radio"
        name="group1"
        label="Year Ascending"
        id={"year-asc"}
      />


    </span>

    <span>
           <Form.Check
        inline
        type="radio"
        name="group1"
        id={"year-desc"}
        label="Year Descending"
      />

    </span>

    <span>
           <Form.Check
        inline
        type="radio"
        name="group1"
        id={"price-asc"}
        label="Price Ascending"
      />

    </span>

    <span>
           <Form.Check
        inline
        type="radio"
        name="group1"
        id={"price-desc"}
        label="Price Descending"
      />

    </span>


    <span>
           <Form.Check
        inline
        type="radio"
        name="group1"
        id={"rating-desc"}
        label="Rating Descending"
      />

    </span>

    <span>
           <Form.Check
        inline
        type="radio"
        name="group1"
        id={"rating-asc"}
        label="Rating Ascending"
      />

    </span>
    
    <span>
        <label style={{paddingRight: "10px"}}>Rating: </label>  
        <Rating  rating={rating}
        onClick={(i) => setRating(i + 1)}
        style={{cursor: "pointer"}}   />
    </span>     
    
    <Button>Clear Filters</Button>
    
    
    </div>
    

  )
}
