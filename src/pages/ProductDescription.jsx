import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import TshirtData from '../TshirtData'; 
import './ProductDescription.css';
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';


const ProductDescription = ({cartItems, setCartItems}) => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  // console.log("id: ", id);
const findTshirtById = (id) => {
  return TshirtData.find(tshirt => tshirt.id === Number(id));
};

  const product = findTshirtById(id);
  // console.log(product);

  if (!product) {
    return <div>Product not found!</div>;
  }
  function addToCart(product) {
    const existingItem = cartItems.find(item => item.id === product.id);
    
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === product.id? {...item, quantity: Number(item.quantity) + Number(quantity)} : item
      ));
    }
    else {
      setCartItems([...cartItems, {...product, quantity: quantity }]);
    }
  }

  return (
    <div className="product-page">
      <div className="breadcrumb">
        <button className='backBtn' onClick={() => navigate('/category/tshirt')}><IoArrowBackCircleOutline/></button>
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
            <button className="add-to-cart" onClick={() => addToCart(product)}>Add to Cart</button>
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
