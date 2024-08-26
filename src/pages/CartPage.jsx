import React, { useState } from "react";
import TshirtData from '../TshirtData';
import './CartPage.css';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

//  funcition to add items to cart
  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  // Function to update quantity
  const updateQuantity = (id, amount) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: item.quantity + amount } : item
    ));
  };

  // Calculate total price
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart-page">
      <div className="cart-items">
        {cartItems.map(item => (
          <div className="cart-item" key={item.id}>
            <img src={item.imageUrl} alt={item.name} />
            <div className="item-details">
              <h3>{item.name}</h3>
              <p>Size: {item.size}</p>
              <p>Price: ${item.price}</p>
              <div className="quantity">
                <button onClick={() => updateQuantity(item.id, -1)} disabled={item.quantity === 1}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, 1)}>+</button>
              </div>
            </div>
            <p>${item.price * item.quantity}</p>
          </div>
        ))}
      </div>

      <div className="order-summary">
        <h3>Order Summary</h3>
        <p>Subtotal: ${calculateTotal()}</p>
        <p>Delivery: Free</p>
        <h3>Total: ${calculateTotal()}</h3>
        <button className="checkout-btn">Checkout</button>
      </div>
    </div>
  );
};

export default CartPage;
