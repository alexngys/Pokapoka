import React from "react";
import NavigationBar from "../components/NavigationBar";
import { Smile, X } from "react-feather";

const style = {
  maindiv: "flex flex-col items-center h-screen",
  card: "w-64 p-4 border border-gray-300 rounded shadow-md bg-white mt-10",
  image: "mt-8 w-64 h-64 rounded-full",
  button1: "px-4 py-2 bg-green-500 text-white rounded cursor-pointer mr-2",
  button2: "px-4 py-2 bg-red-500 text-white rounded cursor-pointer",
};

const TenantSwipe = () => {
  return (
    <>
      <NavigationBar />
      <div className={style.maindiv}>
        <div className={style.card}>
          <img
            className="w-full rounded"
            src="https://placeimg.com/640/480/people"
            alt="Profile"
          />
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Rent Cost:</h3>
            <p>$1,000</p>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Name:</h3>
            <p>John Doe</p>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Description:</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div className="flex mt-4">
          <button className={style.button1}>
            <Smile />
          </button>
          <button className={style.button2}>
            <X />
          </button>
        </div>
      </div>
    </>
  );
};

export default TenantSwipe;
