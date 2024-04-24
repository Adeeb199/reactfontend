import React, { useState, useEffect } from 'react';
import './animate-slide-in.css'; // Import the CSS file
import Shoes1 from './Shoes.png';
import Shoes2 from './Shoes2.png';
import { useTheme } from '../../ThemeContext'; // Import the useTheme hook

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(Shoes1);
  const [fadeIn, setFadeIn] = useState(false);
  const { isDarkTheme } = useTheme(); // Get the dark theme state from context

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage(prevImage => {
        switch (prevImage) {
          case Shoes1:
            return Shoes2;
          case Shoes2:
            return Shoes1;
          default:
            return Shoes1;
        }
      });
      setFadeIn(true);
      setTimeout(() => {
        setFadeIn(false);
      }, 1000);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={isDarkTheme ? "bg-gray-900 text-white py-20 px-8 md:flex items-center" : "bg-blue-900 text-white py-20 px-8 md:flex items-center"}>
      <div className={isDarkTheme ? "bg-gray-800 rounded-lg custom-shadow shadow-4xl p-8 md:flex w-full md:max-w-5xl mx-auto" : "bg-blue-800 rounded-lg custom-shadow shadow-4xl p-8 md:flex w-full md:max-w-5xl mx-auto"}>
        {/* Text */}
        <div className="md:w-1/2 md:pr-8 ">
          <h1 className="text-4xl font-bold mb-6">Welcome to Our Website</h1>
          <p className="text-lg mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.</p>
          <button className="bg-yellow-500 text-blue-900 py-3 px-8 rounded-lg shadow-md hover:bg-yellow-600 hover:text-blue-800 transition duration-300 ease-in-out mb-4">Learn More</button>
        </div>

        {/* Image */}
        <div className="md:w-1/2 mb-6 md:mb-0 flex justify-center">
          <div className={`w-full ${fadeIn ? 'animate-fade-in' : ''}`}>
            <img
              src={currentImage}
              alt=""
              className="w-full md:w-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
