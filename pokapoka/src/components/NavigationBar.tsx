import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/Logo_only.png";

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
              <img src={Logo} alt="Logo" className="w-14 h-14 mr-5" />
            </a>
          </div>

          <div className="flex">
            <div className="hidden sm:flex sm:items-center">
              <a
                href="/about"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </a>
              <a
                href="/contact"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact
              </a>
            </div>
          </div>

          <div className="flex items-center">
            <button
              onClick={routeChange}
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl  focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Connect Wallet
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
