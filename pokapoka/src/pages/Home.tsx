import React from "react";
import NavigationBar from "../components/NavigationBar";
import backgroundimg from "../assets/mainbg.png";

const style = {
  bodyContainer: "flex justify-start items-center min-h-screen ml-16",
  verticalContainer: "flex flex-col items-start justify-start",
  h1: "mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl mb-8",
  button: "text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:outline-none font-medium rounded-lg text-sm px-5 py-2 text-center mr-2 mb-2",
  container: "flex flex-col md:flex-row",
  content: "md:w-1/2 md:pr-8",
  imageContainer: "md:w-1/2 p-16",
  image: "w-full rounded-lg",
};


const Home = () => {
  return (
    <div className="bg-gray-800">
      <NavigationBar />
      <div className={style.bodyContainer}>
        <div className={style.verticalContainer}>
          <div className={style.container}>
            <div className={style.content}>
              <h1 className={style.h1}>Make Living Easy.</h1>
              <div className="flex">
                <button type="button" className={style.button}>
                  Tenants
                </button>
                <button type="button" className={style.button}>
                  Landlords
                </button>
              </div>
            </div>
            <div className={style.imageContainer}>
              <img src={backgroundimg} alt="" className={style.image} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



export default Home;
