import React from 'react';
import { useTheme } from '../../ThemeContext'; // Import the useTheme hook

const Footer = () => {
  const { isDarkTheme } = useTheme(); // Get the dark theme state from context

  return (
    <footer className={`py-8 ${isDarkTheme ? 'bg-gray-900 text-white' : 'bg-blue-900 text-white'}`}>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-lg font-bold">Contact Us</h3>
            <p className="text-sm">123 Street Name, City, Country</p>
            <p className="text-sm">Email: example@example.com</p>
            <p className="text-sm">Phone: +1234567890</p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-bold">Follow Us</h3>
            <div className="flex justify-center md:justify-start mt-2">
              <a href="#" className="mr-4 text-xl">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="mr-4 text-xl">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="mr-4 text-xl">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <hr className="mt-8 border-gray-600"/>
        <div className="text-center mt-4">
          <p className="text-sm">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
