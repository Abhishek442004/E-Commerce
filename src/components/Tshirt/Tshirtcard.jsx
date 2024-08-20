import React from 'react';
import './Tshirtcard.css';


export default function TshirtCard({ imageSrc, title, description, price, originalPrice, discount }) {
  return (
    <div className="card">
      <img src={imageSrc} alt={title} className="card-image" />
      <div className="card-info">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <div className="price-section">
          <div>
            <span className="discounted-price">${price}</span>
            <span className="original-price">${originalPrice}</span>
          </div>
          <div className="discount">{discount} OFF</div>
        </div>
      </div>
    </div>
  );
}
