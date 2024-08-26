import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import TshirtData from '../TshirtData'; // Adjust path as necessary
import './ProductDescription.css';


const ProductDescription = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  const product = TshirtData.find(item => item.id === parseInt(id));

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div className="product-page">
      <div className="breadcrumb">
        <a href="/">Home</a> / {product.name}
      </div>
      <div className="product-container">
        <div className="product-image">
          <img src={product.image} alt={product.name} />
          {/* Add thumbnail images if needed */}
        </div>
        <div className="product-details">
          <h1>{product.name}</h1>
          <p className="sku">SKU: {product.id}</p>
          <p className="price">${product.discounted_price.toFixed(2)}</p>

          <div className="quantity-selector">
            <span>Quantity:</span>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>

          <div className="actions">
            <button className="order-now">Order Now</button>
            <button className="buy-now">Buy Now</button>
          </div>

          <div className="product-info">
            <h2>Product Info</h2>
            <p>{product.description}</p>
          </div>

          <div className="policies">
            <h3>Return & Refund Policy</h3>
            <h3>Shipping Info</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
