import React from "react";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import SignUp from "./pages/SignUp";
import Signin from "./pages/SignIn";
import LandlordProfile from "./pages/LandlordProfile";

const App = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="SignUp/:type" element={<SignUp />} />
        <Route path="SignIn" element={<Signin />} />
        <Route path="LandlordProfile" element={<LandlordProfile />} />
      </Route>
    </Routes>
  );
};

export default App;
