import React, {useState,useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PosterPage from '../src/pages/PosterPage';
import ShirtPage from '../src/pages/ShirtPage';
import Navbar from './components/Navbar/Navbar';
import NoPage from './pages/NoPage';
import './App.css';
import Register from './pages/Register';
import Login from './pages/Login';
import ProductDescription from './pages/ProductDescription';
import CartPage from './pages/CartPage';
import TshirtCard from './components/Tshirt/Tshirtcard.jsx';
import Movingcards from './components/Movingcards/Movingcards';


function App() {
  const [cartItems, setCartItems] = useState([]);

  // Load cart from local storage
  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(savedCartItems);
  }, []);

  // Save cart to local storage whenever cartItems changes
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
  
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  }

    const updateQuantity = (id, amount) => {
        setCartItems(cartItems.map(item => 
          item.id === id ? { ...item, quantity: Number(item.quantity) + amount } : item
        )
        .filter(item => item.quantity > 0)
      );
    };


    return (
      <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path='/' element = {<HomePage/>}/>
          <Route path='/category/tshirt' element = {<ShirtPage />}/>
          <Route path='/category/poster' element = {<PosterPage/>}/>
          <Route path='/signup' element = {<Register/>}/>
          <Route path='/login' element = {<Login/>}/>
          <Route path='*' element = {<NoPage/>}/>
          <Route path="/category/tshirt/:id" element={<ProductDescription cartItems={cartItems} setCartItems = {setCartItems}/>} /> 
          <Route path="/cart" element={<CartPage cartItems={cartItems} updateQuantity={updateQuantity} />} />
          <Route path="/card" element={<Movingcards />} />
          <Route path="/tshirt-card" element={<TshirtCard />} /> 
      </Routes>
    </BrowserRouter>
    );
          
}


export default App;

