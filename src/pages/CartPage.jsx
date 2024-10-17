import React, { useState } from "react";
import TshirtData from '../TshirtData';
import './CartPage.css';

const CartPage = ({cartItems, updateQuantity}) => {


  // Calculate total price
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + Number(item.discounted_price) * Number(item.quantity), 0);
  };
  console.log("cartitems: ", cartItems);

  return (
    <div className="cart-page">
      <div className="cart-items">
        {cartItems.map(item => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.name} />
            <div className="item-details">
              <h3>{item.name}</h3>
              <p>Size: {item.size}</p>
              <p>Price: ${item.discounted_price.toFixed(2)}</p>
              <div className="quantity">
                <button onClick={() => updateQuantity(item.id, -1)} disabled={item.quantity === 1}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, 1)}>+</button>
              </div>
            </div>
            <p>${(item.discounted_price * item.quantity).toFixed(2)}</p>
          </div>
        ))}
      </div>

      <div className="order-summary">
        <h3>Order Summary</h3>
        <p>Subtotal: ${calculateTotal().toFixed(2)}</p>
        <p>Delivery: Free</p>
        <h3>Total: ${calculateTotal().toFixed(2)}</h3>
        <button className="checkout-btn">Checkout</button>
      </div>
    </div>
  );
};

export default CartPage;