import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

const MenuItem = ({ item }) => {
  const { name, image, price, recipe } = item;
  
  // State to handle flip
  const [isFlipped, setIsFlipped] = useState(false);
  
  const handleClick = (e) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      {/* Front Side - Normal view with image, name, price */}
     <div>
     <div className="flex justify-between items-center py-4 border-b border-gray-200">
        <div className="flex items-center space-x-4">
          <img className="w-16 h-16 object-cover rounded-md" src={image} alt={name} />
          <h3 className="text-lg font-semibold">{name}</h3>
        </div>
        
        <div className="flex items-center">
          <p className="text-yellow-500 text-lg font-bold mr-4">${price}</p>
        </div>
      </div>
      <button 
            className="text-xs hover:underline" 
            onClick={handleClick}>
            View Recipe
          </button>
     </div>

      {/* Back Side - Recipe view */}
      <div className="flex flex-col justify-center items-center py-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <p className=" text-center mb-4">{recipe}</p>
        <button 
          className=" hover:underline" 
          onClick={handleClick}>
          Back to Menu
        </button>
      </div>
    </ReactCardFlip>
  );
};

export default MenuItem;
