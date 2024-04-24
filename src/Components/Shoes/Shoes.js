import React, { useState } from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import ShoesData from '../../Data/Data';
import { useTheme } from '../../ThemeContext'; // Import the useTheme hook

const Shoes = ({ category, numToShow }) => {
  const [addedToCart, setAddedToCart] = useState(Array(numToShow).fill(false));
  const { isDarkTheme } = useTheme(); // Get the dark theme state from context

  const filteredShoesData = ShoesData.filter(item => item.category === category);
  const slicedShoesData = filteredShoesData.slice(0, numToShow);

  const handleAddToCart = (index) => {
    console.log(`Added ${slicedShoesData[index].title} to cart`);
    const updatedCart = [...addedToCart];
    updatedCart[index] = true;
    setAddedToCart(updatedCart);
  };

  const renderRatingStars = (rating) => {
    const starIcons = [];
    const filledStars = Math.floor(rating);
    const hasHalfStar = rating - filledStars >= 0.5;

    for (let i = 0; i < filledStars; i++) {
      starIcons.push(<FaStar key={i} className={isDarkTheme ? "text-yellow-500" : "text-yellow-500"} />);
    }

    if (hasHalfStar) {
      starIcons.push(<FaStarHalfAlt key={filledStars} className={isDarkTheme ? "text-yellow-500" : "text-gray-300"} />);
    }

    const remainingStars = 5 - starIcons.length;
    for (let i = 0; i < remainingStars; i++) {
      starIcons.push(<FaStar key={filledStars + i + 1} className={isDarkTheme ? "text-gray-300" : "text-gray-300"} />);
    }

    return starIcons;
  };

  return (
    <div className={`mt-4 mb-4 ${isDarkTheme ? "text-white" : "text-gray-800"}`}>
      <div className={`text-center text-3xl font-bold mb-4 ${isDarkTheme ? "text-blue-300" : "text-blue-700"}`}>
        <span className={`${isDarkTheme ? "border-b-4 border-blue-300" : "border-b-4 border-blue-700"}`}>{category.toUpperCase()} SHOES</span>
      </div>
      <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {slicedShoesData.map((item, index) => (
          <div
            key={index}
            id={`${category.toLowerCase()}-shoe-item-${index}`}
            className={`bg-white rounded-lg shadow-xl p-4 grid-item ${isDarkTheme ? "bg-gray-800" : ""}`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-auto rounded-lg mb-4 transform hover:scale-110 transition duration-300"
            />
            <h2 className={`${isDarkTheme ? "text-gray-300" : "text-black"} text-xl font-semibold mb-2`}>{item.title}</h2>
            <p className={`${isDarkTheme ? "text-gray-400" : "text-gray-600"} mb-2`}>{item.description}</p>
            <div className="flex items-center justify-between mb-2">
              <p>
                <span className={`${isDarkTheme ? "text-gray-400" : "text-gray-600"} font-semibold mr-2 line-through`}>{item.oldPrice}</span>
                <span className={`${isDarkTheme ? "text-red-400" : "text-red-500"} font-semibold`}>{item.price}</span>
              </p>
              <p className="flex items-center">
                <span className={`${isDarkTheme ? "text-gray-400" : "text-gray-600"} mr-2`}>Rating:</span>
                <span className={`${isDarkTheme ? "text-blue-400" : "text-blue-500"} flex`}>
                  {renderRatingStars(item.rating)}
                </span>
              </p>
            </div>
            <button
              onClick={() => handleAddToCart(index)}
              className={`block w-full px-4 py-2 ${addedToCart[index] ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 transition duration-300'} text-white rounded-md`}
              disabled={addedToCart[index]}
            >
              {addedToCart[index] ? 'Added to Cart' : 'Add to Cart'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shoes;
