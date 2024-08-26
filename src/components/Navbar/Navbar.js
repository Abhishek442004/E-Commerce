import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import logo from "../../assets/originalLogo.png"
// import CartPage from "../../pages/CartPage";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="logo" />
        <h1 className="site-name">AKT</h1>
      </div>
      <div className="navbar-right">
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="dropdown">
            <span>Category</span>
            <ul className="dropdown-content">
              <li>
                <Link to="/category/tshirt">T-shirt</Link>
              </li>
              <li>
                <Link to="/category/poster">Poster</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link className="register" to="/signup">Signin</Link>
          </li>
          <li>
            <Link className="register" to="/login">Login</Link>
          </li>
        </ul>
        <Link to="/cart" className="cart-link">
          <FaShoppingCart className="cart-icon" />
        </Link>
      </div>
    </nav>
  );
}

