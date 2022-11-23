import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../../SharebleInfo/Footer/Footer";
import Navbar from "../../../SharebleInfo/Navbar/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
