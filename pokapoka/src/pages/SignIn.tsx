import React from "react";
import NavigationBar from "../components/NavigationBar";
import LandlordSignUpForm from "../components/SignUpForm";

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

const SignIn = () => {
  return (
    <div>
      <NavigationBar />

      <div className={style.maindiv}>
        <div className={style.card}>
          <h2 className={style.h2}>Sign In</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className={style.label}>
                Email
              </label>
              <input type="email" id="email" className={style.input} />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className={style.label}>
                Password
              </label>
              <input type="password" id="password" className={style.input} />
            </div>
            <button type="submit" className={style.button}>
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
