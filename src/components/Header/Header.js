import {Container, Badge, Navbar, Dropdown,Nav, Button, Form} from 'react-bootstrap'
import './Header.css'
import React , {useState} from 'react'
import {AiFillDelete} from 'react-icons/ai'
import {FaShoppingCart} from 'react-icons/fa'
import {GiWineBottle} from 'react-icons/gi'
import {Link} from 'react-router-dom'
import {CartState} from "../../Context/Context"
import {ethers} from 'ethers'
import Web3modal from 'web3modal'

const Header = () => {

  const [connected, setConnected] = useState(false)

  const [account, setAccount] = useState(false)



      const getConnectedMetaMaskAcc = async () => {

                  const web3Modal = new Web3modal();


                  let provider = await web3Modal.connect();
                  const handler = new ethers.providers.Web3Provider(provider);
                  const accounts = await handler.listAccounts();
                  const connected_account = accounts[0]
                  setConnected(true)
                  setAccount(connected_account)


              }



  const connectWallet = async () => {



          if (!window.ethereum) console.log('Wallet not detected')
          if (window.ethereum) {
            console.log('Wallet  is detected')
            console.log(window.ethereum)
            await window.ethereum.request({method: 'eth_accounts'});
            // const provider = new ethers.providers.JsonRpcProvider()
          }
          //   console.log("please connect wallet!")
          //     //
          //
          //
          //     setConnected(true)

          }





  const {state: {cart}, dispatch,  filterDispatch} = CartState()
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

          {
            connected? (<Button variant="success" disabled>Connected</Button>):
            (<Button onClick={getConnectedMetaMaskAcc} variant="primary">Connect Wallet</Button>)
          }


        </Container>
    </Navbar>
  );


};


export default Header
