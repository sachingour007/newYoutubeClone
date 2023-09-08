import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Body = () => {
  const [sidebarCategary, setSidebarCategary] = useState("Home");

  return (
    <div className="grid grid-flow-col mt-2 gap-2 sm:gap-10">
      <Sidebar
        sidebarCategary={sidebarCategary}
        setSidebarCategary={setSidebarCategary}
      />
      <Outlet />
    </div>
  );
};

export default Body;
