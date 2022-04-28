import {Container, Navbar, Dropdown,Nav, Button, Form} from 'react-bootstrap'
import './Header.css'

import {FaShoppingCart} from 'react-icons/fa'
import {Link} from 'react-router-dom'

const Header = () => {

  return (
    <Navbar bg="dark" variant="dark" style={{height: "80px"}}>
        <Container>
          <Navbar.Brand>

          <Link to="/"> ChainMart</Link>
          </Navbar.Brand>
          <Navbar.Text className="search">
          <Form.Control className="m-auto" style={{width:300}}
          type="text" placeholder="Search" />
          </Navbar.Text>

<Nav>
          <Dropdown alignRight>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                <FaShoppingCart color="white" fontSize="25px" />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
          </Nav>

          <Button variant="primary">Connect Wallet</Button>
        </Container>
    </Navbar>
  );


};


export default Header
