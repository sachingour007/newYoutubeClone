import React from "react";
import { categories } from "../../constant/sideBar_const";
import { useSelector } from "react-redux";

const Sidebar = ({ sidebarCategary, setSidebarCategary }) => {
  const isMenuOpen = useSelector((store) => store.app.isSidebarOpen);
  console.log(isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="col-span-1 ">
      {categories.map(({ name, icon }) => {
        return (
          <div
            className={`text-sm sm:text-base py-2 m-4 sm:py-2 sm:pl-4 cursor-pointer ${
              sidebarCategary === name ? " bg-[#f3f3f3] rounded-lg" : "bg-white"
            }`}
            key={name}
            onClick={() => {
              setSidebarCategary(name);
            }}
          >
            <span style={{ color: "black", fontSize: "large" }}>{icon}</span>
            <span className="pl-3 sm:pl-5">{name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
