import React, { useState } from 'react';
import { FaHeart, FaShoppingCart, FaLock, FaToggleOn, FaToggleOff } from 'react-icons/fa';
import { useTheme } from '../../ThemeContext';

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const { isDarkTheme, toggleTheme } = useTheme();

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className={isDarkTheme ? 'bg-gray-900 w-full' : 'bg-blue-900 w-full'}>
      <div className='container mx-auto flex justify-between items-center py-4'>
        <div className='container mx-auto text-yellow-500 text-3xl sm:mr-4 md:ml-0 font-bold'>SHOES</div>
        <div className="md:hidden">
          <button className="block container mr-4" onClick={toggleSidebar}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          {showSidebar && (
            <div className={`animate-slide-in-right fixed inset-0 bg-black bg-opacity-50 z-50`} onClick={toggleSidebar}>
              <div className="fixed inset-y-0 right-0 w-screen/2 w-1/2 bg-blue-900 shadow-lg">
                <button className="absolute top-2 right-2" onClick={toggleSidebar}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <ul className="mt-8 flex flex-col justify-center items-center container mx-auto p-2 gap-2 text-white">
                  <li className="py-2 hover:bg-blue-800 hover:text-black rounded-lg font-bold">Home</li>
                  <li className="py-2 hover:bg-blue-800 hover:text-black rounded-lg font-bold">Men</li>
                  <li className="py-2 hover:bg-blue-800 hover:text-black rounded-lg font-bold">Women</li>
                  <li className="py-2 hover:bg-blue-800 hover:text-black rounded-lg font-bold mb-4">Kid</li>
                  <li className="flex items-center gap-2">
                    <span className="relative inline-block" onClick={toggleTheme}>
                      {isDarkTheme ? <FaToggleOn /> : <FaToggleOff />}
                      <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-red-500 text-white rounded-full px-1 text-xs">
                        5
                      </span>
                    </span>
                    <a href="#" className="hover:text-blue-500">
                      <span className="relative inline-block">
                        <FaShoppingCart />
                        <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-red-500 text-white rounded-full px-1 text-xs">
                          0
                        </span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <span className="p-2 text-white">
                      <FaLock />
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
        <div className="navbar {isDarkTheme ? 'bg-gray-900 w-full' : 'bg-blue-900 w-full'} md:block hidden p-2">
          <ul className="p-4 text-white flex flex-row items-center gap-4">
            <li><a href="#" className="hover:text-blue-500 font-bold">Home</a></li>
            <li><a href="#" className="hover:text-blue-500 font-bold">Men</a></li>
            <li><a href="#" className="hover:text-blue-500 font-bold">Women</a></li>
            <li><a href="#" className="hover:text-blue-500 font-bold">Kid</a></li>
            <li className="flex items-center gap-2">
              <span className="relative inline-block" onClick={toggleTheme}>
                {isDarkTheme ? <FaToggleOn /> : <FaToggleOff />}
              </span>
              <a href="#" className="hover:text-blue-500">
                <span className="relative inline-block">
                  <FaShoppingCart />
                  <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-red-500 text-white rounded-full px-1 text-xs">
                    0
                  </span>
                </span>
              </a>
            </li>
            <li>
              <span className="p-2 text-white">
                <FaLock />
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
