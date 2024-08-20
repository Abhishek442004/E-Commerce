import React from "react";
import "./Movingcards.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import TBlack from '../../assets/TBlack.png';
import TWhite from '../../assets/TWhite.png';
import Thunder from '../../assets/ThunderT.png';

const MovingCards = ({ cards }) => {
  return (
    <div>
      <div className="home-container">
        <header className="header">
          <h1>Welcome to Dripentious</h1>
        </header>
        <div id="carouselExampleDark" className="carousel carousel-dark slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="5000">
              <img
                src={TBlack}
                className="tshirt-image"
                style={{
                  width: "1000px",
                  height: "800px",
                  objectFit: "cover",
                  margin: "0 auto",
                  display: "block",
                }}
                alt="T-shirt Black"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sapiente, expedita.
                </p>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="5000">
              <img
                src={TWhite}
                className="tshirt-image"
                style={{
                  width: "1000px",
                  height: "800px",
                  objectFit: "cover",
                  margin: "0 auto",
                  display: "block",
                }}
                alt="T-shirt White"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Omnis, magni!
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={Thunder}
                className="tshirt-image"
                style={{
                  width: "1000px",
                  height: "800px",
                  objectFit: "cover",
                  margin: "0 auto",
                  display: "block",
                }}
                alt="T-shirt Thunder"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Velit, officia!
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};
// const MovingCards = ({ cards }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
//     }, 3000); // Change cards every 3 seconds

//     return () => clearInterval(interval);
//   }, [cards.length]);

//   return (
//     <div className="moving-cards-container">
//       <div
//         className="moving-cards-track"
//         style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
//       >
//         {cards.concat(cards.slice(0, 2)).map((card, index) => (
//           <div key={index} className="card">
//             <img src={card.image} alt={card.title} className="card-image" />
//             <div className="card-content">
//               <h3>{card.title}</h3>
//               <p>{card.content}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

export default MovingCards;
