import React from "react";
import TshirtCard from "../components/Tshirt/Tshirtcard";
import TshirtData from '../TshirtData';
 // Import the TshirtData array
import "./ShirtPage.css";

export default function ShirtPage() {
  return (
    <div className="main">
      <div className="card-container">
        {TshirtData.map((tshirt) => (
          <TshirtCard
            key={tshirt.id}
            id = {tshirt.id}
            imageSrc={tshirt.image}
            title={tshirt.name}
            price={tshirt.discounted_price}
            description={tshirt.description} // Add the description prop to the TshirtCard component
            originalPrice={tshirt.original_price}
            discount={`${tshirt.discount}`}
          />
        ))}
      </div>
    </div>
  );
}
