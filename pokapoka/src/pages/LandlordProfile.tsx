import React from "react";
import NavigationBar from "../components/NavigationBar";

const style = {
  maindiv: "flex flex-col items-center justify-center min-h-screen", 
  card: "max-w-md p-8 bg-white rounded shadow",
  h2: "text-2xl font-bold mb-4",
  label: "block text-gray-700 font-semibold mb-2",
  input: "w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500",
  button: "w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
};

const LandlordProfile = () => {
  return (
    <>
      <NavigationBar />
      <div className={style.maindiv}>
        <button className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          KYC
        </button>
        <img className="mt-8 w-64 h-64 rounded-full" src="https://placeimg.com/640/480/people" alt="Profile" />
        <div className="flex space-x-4 mt-4">
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Yes
          </button>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            No
          </button>
        </div>
      </div>
    </>
  );
};

export default LandlordProfile;
