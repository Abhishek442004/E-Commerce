import React from 'react';
import './Tshirtcard.css';

export default function TshirtCard({ imageSrc, title, price, originalPrice, discount }) {
  return (
    <div className="card">
      <img src={imageSrc} alt={title} className="card-image" />
      <div className="card-info">
        <h3>{title}</h3>
        <p className="price">
          <span>${price}</span> <span className="original-price">${originalPrice}</span>
        </p>
        <p className="discount">{discount} OFF</p>
      </div>
    </div>
  );
}

