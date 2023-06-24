import React from "react";
import NavigationBar from "../components/NavigationBar";

const style = {
  appContainer: "",
  pic: "mx-auto object-contain h-48 w-full",
};

const Home = () => {
  return (
    <div className={style.appContainer}>
      <NavigationBar />
      <h1>Hello world</h1>
    </div>
  );
};

export default Home;
