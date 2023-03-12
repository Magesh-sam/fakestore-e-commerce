import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, {useState} from 'react';
import './App.css';
import Nav from './components/Nav';
import Cart from './components/Cart';

import ProductList from './components/ProductList';


function App() {

  const [cartItems, setCartItems] = useState([])
  const totalQuantity = cartItems.reduce((total, item) =>parseFloat( total) + parseFloat(item.quantity),0);

  return (
    <BrowserRouter>
    <Nav totalQuantity={totalQuantity} />
    <Routes>
      <Route path='/' element={<ProductList cartItems={cartItems} setCartItems={setCartItems} />}></Route>
      <Route path='/Cart' element={<Cart cartItems={cartItems} setCartItems={setCartItems} />}></Route>
    </Routes>
   
    </BrowserRouter>
   
  );
}

export default App;
