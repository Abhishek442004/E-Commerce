import React from 'react';
import { Link } from 'react-router-dom';
import './Tshirtcard.css';
import { useNavigate } from 'react-router-dom';

export default function TshirtCard({ id, imageSrc, title, description, price, originalPrice, discount}) {
  const navigate = useNavigate();
  function clickHandler(){
    navigate(`/category/tshirt/${id}`);

  }
  return (
    <div className="card" onClick={clickHandler}>
        <img src={imageSrc} alt={title} className="card-image" />
        <div className="card-info">
          <h3 className="card-title">{title}</h3>
          <p className="card-description">{description}</p>
          <div className="price-section">
            <div>
              <span className="discounted-price">${price.toFixed(2)}</span>
              {originalPrice && (
                <span className="original-price">${originalPrice.toFixed(2)}</span>
              )}
            </div>
            {discount && (
              <div className="discount">{discount}% OFF</div>
            )}
          </div>
        </div>
    </div>
  );
}
