import './App.css';
import React, { useState } from "react";
import {Routes, Route} from 'react-router-dom';
import HomePage from './components/HomePage';
import Header from './components/Header';
import Footer from './components/Footer'
import Products from './components/products_components/Products';
import User from './components/user_components/User';
import Cart from './components/cart_components/Cart';
import AdminPage from './components/user_components/AdminPage';
import Search from './components/Search';

function App() {
  const [cartItemTotal, setCartItemTotal] = useState(JSON.parse(window.localStorage.getItem("cartTotal")||0))

  return (
    <div className="App">
      <Header cartItemTotal={cartItemTotal} setCartItemTotal={setCartItemTotal}/>
      <Products setCartItemTotal={setCartItemTotal} cartItemTotal={cartItemTotal}/>
      <User setCartItemTotal={setCartItemTotal}/>
      <Routes>
        <Route path="/" element={ <HomePage/> } />
        <Route path="/my_cart" element={ <Cart setCartItemTotal={setCartItemTotal} cartItemTotal={cartItemTotal}/> } />
        <Route path="/admin" element={ <AdminPage/> } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
