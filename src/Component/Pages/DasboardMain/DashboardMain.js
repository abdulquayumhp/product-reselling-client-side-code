import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../../SharebleInfo/Navbar/Navbar";

const DashboardMain = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default DashboardMain;
