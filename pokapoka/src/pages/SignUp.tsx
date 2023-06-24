import React from "react";
import NavigationBar from "../components/NavigationBar";
import SignUpForm from "../components/SignUpForm";

const style = {
  appContainer: "",
  pic: "mx-auto object-contain h-48 w-full",
};

const SignUp = () => {
  return (
    <div className={style.appContainer}>
      <NavigationBar />
      <SignUpForm />
    </div>
  );
};

export default SignUp;
