import React from "react";
import { useNavigate } from "react-router-dom";



const NavigationBar = () => {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/signin`;
    navigate(path);
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-white text-lg font-semibold">
              <img src="logo.png" alt="Logo" className="w-8 h-8 mr-2" />
            </a>
          </div>

          <div className="flex">
            <div className="hidden sm:flex sm:items-center">
              <a href="/about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                About
              </a>
              <a href="/contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </a>
            </div>
          </div>

          <div className="flex items-center">
            <button onClick={routeChange} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
