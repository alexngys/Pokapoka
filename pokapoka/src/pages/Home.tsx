import React from "react";
import NavigationBar from "../components/NavigationBar";
import backgroundimg from "../assets/mainbg.png";

const style = {
  bodyContainer: "flex justify-center items-center h-screen",
  verticalContainer: "flex flex-col items-center",
  h1: "mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-800 md:text-5xl lg:text-6xl mb-8",
  button:
    "text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl  focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2",
};

const Home = () => {
  return (
    <div
      className="h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundimg})`,
      }}
    >
      <NavigationBar />
      <div className={style.bodyContainer}>
        <div className={style.verticalContainer}>
          <h1 className={style.h1}>Make living easy</h1>
          <button type="button" className={style.button}>
            Connect your wallet
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
