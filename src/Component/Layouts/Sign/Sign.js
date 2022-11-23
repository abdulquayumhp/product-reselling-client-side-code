import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../../SharebleInfo/Navbar/Navbar";

const Sign = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Sign;
