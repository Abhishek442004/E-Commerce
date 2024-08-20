import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import logo from "../../assets/Logo1.png"

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="logo" />
        <h1 className="site-name">Dripentious</h1>
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

// import React, { useState, useRef, useEffect } from "react";
// import '../Navbar/Navbar.css';
// import { FaShoppingCart } from 'react-icons/fa';

// const SearchBar = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const searchRef = useRef(null);

//     useEffect(() => {
//         function handleClickOutside(event) {
//             if (searchRef.current && !searchRef.current.contains(event.target)) {
//                 setIsOpen(false);
//             }
//         }
//         document.addEventListener("mousedown", handleClickOutside);
//         return () => {
//             document.removeEventListener("mousedown", handleClickOutside);
//         };
//     }, [searchRef]);

//     return (
//         <div className="search-container" ref={searchRef}>
//             <i className="search-icon" onClick={() => setIsOpen(!isOpen)}>🔍</i>
//             {isOpen && (
//                 <input
//                     type="text"
//                     className={`search-input ${isOpen ? "open" : ""}`}
//                     placeholder="Search..."
//                     autoFocus
//                 />
//             )}
//         </div>
//     );
// };

// const Navbar = () => {
//     const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//     const toggleDropdown = (event) => {
//         event.preventDefault();
//         setIsDropdownOpen(!isDropdownOpen);
//     };

//     return (
//         <nav className="navbar">
//             <div className="navbar-logo">
//                 <img src="../../assets/481-4813890_clothing-clothes-clip-cute-closet-logo-png-download.jpg" alt="Dripentious" />
//             </div>

//             <ul className="navbar-links">
//                 <li><a href="#home">Home</a></li>
//                 <li className="nav-item dropdown">
//                     <a
//                         className="nav-link dropdown-toggle"
//                         href="#"
//                         id="navbarDropdown"
//                         role="button"
//                         aria-haspopup="true"
//                         aria-expanded={isDropdownOpen ? "true" : "false"}
//                         onClick={toggleDropdown}
//                     >
//                         Category
//                     </a>
//                     <div
//                         className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}
//                         aria-labelledby="navbarDropdown"
//                     >
//                         <a className="dropdown-item" style={{color:'black'}} href="#Tshirt">Tshirt</a>
//                         <a className="dropdown-item" style={{color:'black'}} href="#Poster">Poster</a>
//                         <a className="dropdown-item" style={{color:'black'}} href="#New Items">New Items coming soon</a>
//                     </div>
//                 </li>
//                 <li><a href="#about">About Us</a></li>
//                 <li><a href="#contact">Contact Us</a></li>
//             </ul>
//             <div className="navbar-actions">
//                 <button className="login-button">Register</button>
//                 <SearchBar />
//                 <FaShoppingCart className="cart-icon" />
//             </div>
//         </nav>
//     );
// };

// export default Navbar;
