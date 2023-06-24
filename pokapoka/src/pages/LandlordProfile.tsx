import React from "react";
import NavigationBar from "../components/NavigationBar";

const style = {
  maindiv: "flex items-center justify-center min-h-screen bg-gray-100",
  card: "max-w-md p-8 bg-white rounded shadow",
  h2: "text-2xl font-bold mb-4",
  label: "block text-gray-700 font-semibold mb-2",
  input:
    "w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500",
  button:
    "w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
};

const LandlordProfile = () => {
  return (
    <div>
      <NavigationBar />
    </div>
  );
};

export default LandlordProfile;
