import React from 'react'
import './Filters.css'
import Rating from '../Rating/Rating'

import {Container, Navbar, Dropdown,Nav, Button, Form} from 'react-bootstrap'
import { CartState } from '../../Context/Context'




export default function Filters() {

  // const [rating, setRating] = React.useState(0)

  const {filterDispatch, filterState: {sort, searchQuery,inStock,price,year,rating}} = CartState()


  console.log(sort, searchQuery,inStock,price,year,rating)


  return (
    <div className='filters'>
    <h2 className='title'>Filter Products</h2>

    <span>
    <Form.Check
        inline
        type="radio"
        name="group1"
        label="Price Ascending"
        id={"price-asc"}
        onChange={() =>
        filterDispatch({
          type: "SORT_BY_PRICE",
          payload: "lowToHigh"
        })}

        checked={sort === "lowToHigh" ? true: false}

      />


    </span>

    <span>
           <Form.Check
        inline
        type="radio"
        name="group1"
        id={"price-desc"}
        label="Price Descending"
        onChange={() => filterDispatch({
          type: "SORT_BY_PRICE",
          payload: "highToLow"
        })}

    checked={sort === "highToLow" ? true: false}
      />

    </span>



  

    <span>
        <Form.Check
        inline
        type="checkbox"
        name="group1"
        label="In Stock?"
        onChange={ () => filterDispatch({
          type: "SORT_BY_IN_STOCK"
        })


        }
      />

    </span>

    <span>
        <label style={{paddingRight: "10px"}}>Rating: </label>
        <Rating  rating={rating}
        // onClick={(i) => setRating(i + 1)}
        onClick ={(i) =>
            filterDispatch({
              type: "SORT_BY_RATING",
              payload: i + 1
            })
        }
        style={{cursor: "pointer"}}   />
    </span>

    <Button onClick={() =>
      filterDispatch({
        type: "CLEAR_FILTER"
      })
   }>Clear Filters</Button>


    </div>


  )
}
