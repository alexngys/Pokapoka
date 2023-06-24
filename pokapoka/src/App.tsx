import React from "react";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import SignUp from "./pages/SignUp";
import Signin from "./pages/SignIn";
import LandlordSwipe from "./pages/LandlordSwipe";
import TenantSwipe from "./pages/TenantSwipe";
import Matches from "./pages/Matches";

const App = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="SignUp/:type" element={<SignUp />} />
        <Route path="SignIn" element={<Signin />} />
        <Route path="LandlordSwipe" element={<LandlordSwipe />} />
        <Route path="TenantSwipe" element={<TenantSwipe />} />
        <Route path="Matches" element={<Matches />} />
      </Route>
    </Routes>
  );
};

export default App;
