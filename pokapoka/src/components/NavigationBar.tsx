import React from "react";
import { useNavigate } from "react-router-dom";

const style = {
  divstyle: "flex justify-center bg-gray-100",
  navstyle: "flex ",
  ulstyle: "flex space-x-4",
  astyle:
    "text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium",
  signin:
    "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium",
};

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
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <a href="/" className="text-white text-lg font-semibold">
                Logo
              </a>
            </div>

            <div className="hidden sm:-my-px sm:ml-6 sm:flex">
              <a href="/About" className={style.astyle}>
                About
              </a>
              <a href="/Contact" className={style.astyle}>
                Contact
              </a>
            </div>
          </div>

          <div className="flex items-center">
            <button onClick={routeChange} className={style.signin}>
              Sign up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
