import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Cart from './components/Cart/Cart'
import './App.css';

import {BrowserRouter, Routes,Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <>
    <Header/>
    <Routes>
      <Route path='/' exact element={<Home/>}>

      </Route>

      <Route path='/cart' exact element={<Cart/>}>

      </Route>

      </Routes>
    </>
    </BrowserRouter>
  );
}

export default App;
