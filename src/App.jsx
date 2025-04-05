import React from 'react';
import { BrowserRouter , Routes, Route, Router } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar.jsx';
import Login from './Pages/Login.jsx'
import Home from './Pages/Home.jsx';
import Product from './Pages/Product.jsx';
import Cart from './Pages/Cart.jsx';
import About from './Pages/About.jsx';
import Homeadmin from './Pages/Homeadmin.jsx';
import Productadmin from './Pages/Productadmin.jsx'
import Checkout from './Pages/Checkout.jsx';
import Signup from './Pages/Signup.jsx'
import Cartmember from './Pages/Cartmember.jsx';



const App = () => {
  return (

    <BrowserRouter>
   
     
     
     
      
      

    <Routes>

      <Route path="/" element={<Login/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/product" element={<Product/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/about" element={<About/>} />

      <Route path="/homeadmin" element={<Homeadmin/>} />
      <Route path="/productadmin" element={<Productadmin/>} />
      <Route path="/checkout" element={<Checkout/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/cartmember" element={<Cartmember/>} />



    </Routes>
  </BrowserRouter>
   )
}
export default App