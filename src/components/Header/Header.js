import {Container, Badge, Navbar, Dropdown,Nav, Button, Form} from 'react-bootstrap'
import './Header.css'
import React from 'react'
import {AiFillDelete} from 'react-icons/ai'
import {FaShoppingCart} from 'react-icons/fa'
import {GiWineBottle} from 'react-icons/gi'
import {Link} from 'react-router-dom'
import {CartState} from "../../Context/Context"

const Header = () => {
 
  const {state: {cart}, dispatch, filterDispatch} = CartState()
    return (
    <Navbar bg="dark" variant="dark" style={{height: "80px"}}>
        <Container>
          <Navbar.Brand>

          <Link to="/"> <GiWineBottle size={82}/> </Link>
          </Navbar.Brand>
          <Navbar.Text className="search">
          <Form.Control className="m-auto"
           onChange={(e) => 
            filterDispatch({
              type: "FILTER_BY_SEARCH",
              payload: e.target.value
            })            
           }
          
          style={{width:300}}
          type="text" placeholder="Search" />
          </Navbar.Text>



          <Nav>
          <Dropdown alignRight>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                <FaShoppingCart color="white" fontSize="25px" />
                <Badge>{cart.length}</Badge>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                {cart.length > 0 ? (
                  <>
                  {cart.map( (p,i) => (
                     
                    
                    <span className="cartItem">
                      
                      <img className="cartItemImage" key={i} src={p.image} />
                      <div className="cartItemDetail">
                        <span> {p.name} </span>
                        <span>${p.price}</span>
                      </div>
                      <AiFillDelete 
                      fontSize={20}
                      style={{cursor:"pointer"}}
                      onClick={() => dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: p
                      })}
                  
                      
                      />
                    </span>
                    
                    
                 
                  )) }

                 
                <Link to="/cart">
                <Button className="cartButton">Go to Cart</Button>
                  </Link> 
                  </>
                )
                :(<span>Cart is Empty!</span>)}
                </Dropdown.Menu>
                </Dropdown>
          </Nav>

          <Button variant="primary">Connect Wallet</Button>
        </Container>
    </Navbar>
  );


};


export default Header
