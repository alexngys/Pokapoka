import React from "react";

const style = {
  appContainer: "max-w-[728px] mx-auto text-center",
  pic: "mx-auto object-contain h-48 w-full",
};

const Home = () => {
  return (
    <div className={style.appContainer}>
      <h1>Hello world</h1>
    </div>
  );
};

export default Home;
