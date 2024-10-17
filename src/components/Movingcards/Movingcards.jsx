import React, { useEffect, useState } from 'react';
import './Movingcards.css'; 
import logo from '../../assets/originalLogo.png';
import { useNavigate } from 'react-router-dom';
import Salepage from '../../pages/Salepage';



const Movingcards = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    
    const handleScroll = () => {
      const currentScrollPosition = window.pageYOffset;
      if (currentScrollPosition > scrollPosition) {
        // User is scrolling down
        setIsScrollingUp(true);
      } else {
        // User is scrolling up
        setIsScrollingUp(false);
      }
      setScrollPosition(currentScrollPosition);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition]);

  const handleShopNowClick = () => {
    navigate('/tshirt-card'); 
  };
  

  return (
    <div> 
        <div className={'homepage'}>
          <div className="rakt">
            <div className="content">
              <img className="logo-homepage" src={logo} alt='logo'/>
              <h1>RAKT</h1>
              <button className="shop-now-btn" onClick={handleShopNowClick}>Shop Now</button>
            </div>
          </div>
        </div>

        <Salepage/> 


    <div className="collections-container">
      <div className="collection tshirt-collection">
        <div className="collection-overlay">
          <h2>Tshirt Collection</h2>
        </div>
      </div>
      <div className="collection poster-collection">
        <div className="collection-overlay">
          <h2>Poster Collection</h2>
        </div>
      </div>
    </div>
       

  </div>


  );
};

export default Movingcards;
