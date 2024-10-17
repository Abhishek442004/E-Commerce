import './SalePage.css';
import React from 'react';
// import Slider from 'react-slick'
import video1 from '../assets/BLACKMF.mp4';
import video2 from '../assets/WHITEMF.mp4';
import video3 from '../assets/TREEAD.mp4';
// import saleimage from '../assets/BGMF.jpg'; // Adjust the path to where your image is stored
// import salevideo from '../../src/assets/BLACKMF.mp4';
const videos = [
  { src: video1, title: 'Video 1' },
  { src: video2, title: 'Video 2' },
  { src: video3, title: 'Video 3' },
  // Add more videos here
];


const Salepage = () => {

  return (
    <div className="video-grid">
      {videos.map((video) => (
        <div key={video.id} className="video-item">
          <video autoPlay muted loop className="video-element">
            <source src={video.src} type={video.type} />
            Your browser does not support the video tag.
          </video>
        </div>
      ))}
    </div>
  );
};

export default Salepage;

//  {/* <div className="sale-overlay">
//         <h2>FINAL SALE 40%-60%</h2>
//         <button className="shop-sale-btn">SHOP SALE</button>
//       </div>
//      */}