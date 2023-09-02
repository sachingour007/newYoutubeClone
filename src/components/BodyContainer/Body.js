import React, { useState } from "react";
import Sidebar from "./Sidebar";
import RightSide from "./RightSide";

const Body = () => {
  const [sidebarCategary, setSidebarCategary] = useState("Home");

  return (
    <div className="grid grid-flow-col mt-2 ">
      <Sidebar
        sidebarCategary={sidebarCategary}
        setSidebarCategary={setSidebarCategary}
      />

      <RightSide />
    </div>
  );
};

export default Body;
