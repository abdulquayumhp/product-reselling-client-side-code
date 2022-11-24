import React from "react";
import { Outlet } from "react-router-dom";
import DashboardMenu from "./DashboardMenu/DashboardMenu";

const Dasboard = () => {
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* pages */}
        <Outlet />
      </div>
      <div className="drawer-side rounded-lg">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-blue-100 text-base-content">
          <DashboardMenu />
        </ul>
      </div>
    </div>
  );
};

export default Dasboard;
