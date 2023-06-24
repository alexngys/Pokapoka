import React from "react";
import NavigationBar from "../components/NavigationBar";

const style = {
  maindiv: "flex flex-col items-center justify-center min-h-screen",
  button1:
    "mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
  image: "mt-8 w-64 h-64 rounded-full",
  button2:
    "bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded",
  button3: "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded",
};

const LandlordSwipe = () => {
  return (
    <>
      <NavigationBar />
      <div className={style.maindiv}>
        <button className={style.button1}>KYC</button>
        <img
          className={style.image}
          src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Profile"
        />
        <div className="flex space-x-4 mt-4">
          <button className={style.button2}>Yes</button>
          <button className={style.button3}>No</button>
        </div>
      </div>
    </>
  );
};

export default LandlordSwipe;
