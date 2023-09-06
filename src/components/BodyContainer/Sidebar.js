import React from "react";
import { categories } from "../../constant/sideBar_const";
import { useSelector } from "react-redux";

const Sidebar = ({ sidebarCategary, setSidebarCategary }) => {
  const isMenuOpen = useSelector((store) => store.app.isSidebarOpen);
  // console.log(isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="col-span-4 sm:col-span-1 md:col-span-3 lg:col-span-1">
      {categories.map(({ name, icon }) => {
        return (
          <div
            className={`text-xs sm:text-sm py-2 my-4 mx-1 sm:py-2 sm:pl-4 cursor-pointer ${
              sidebarCategary === name ? " bg-[#f3f3f3] rounded-lg" : "bg-white"
            }`}
            key={name}
            onClick={() => {
              setSidebarCategary(name);
            }}
          >
            <span
              className="md:pl-1"
              style={{ color: "black", fontSize: "medium" }}
            >
              {icon}
            </span>
            <span className="px-2 hidden md:inline-flex  sm:pl-5">{name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
