import React, { useEffect, useState } from "react";

//Icons
import TableRowsRoundedIcon from "@mui/icons-material/TableRowsRounded";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import MicOutlinedIcon from "@mui/icons-material/MicOutlined";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";

import imgLogo from "../../utility/Images/youtube-logo-png.webp";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../../utility/Store/sidebarSlice";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => getSerachData(), 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSerachData = async () => {
    const res = await fetch(
      "https://corsproxy.io/?http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=" +
        searchQuery
    );
    const jsonData = await res.json();
    console.log(jsonData);
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <header>
      <div className="w-full h-14 flex gap-1 ">
        <div className="flex items-center justify-start gap-1 sm:gap-5 sm:mx-10 md:mx-10 md:flex-0 cursor-pointer">
          <TableRowsRoundedIcon
            sx={{ color: "#383a3d" }}
            onClick={() => toggleMenuHandler()}
          />
          <NavLink to={"/"}>
            <img
              className="w-14 sm:w-20  md:w-20 h-auto"
              src={imgLogo}
              alt="Logo"
              onClick={() => toggleMenuHandler()}
            />
          </NavLink>
        </div>

        <div className=" flex items-center justify-center flex-1 gap-1 sm:gap-5  ">
          <div className="flex items-center border-[#C6C6C6] border sm:w-full md:w-3/5 rounded-l-full rounded-r-full bg-[#f3f3f3]">
            <input
              className=" w-full sm:w-full h-7 pl-2 sm:h-9 rounded-l-full"
              type="text"
              name=""
              id=""
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="px-1 sm:px-4 border-l cursor-pointer">
              <SearchOutlinedIcon sx={{ color: "#383a3d" }} />
            </div>
          </div>

          <div className="hidden sm:block md:block border rounded-full p-1 bg-[#f3f3f3] cursor-pointer">
            <MicOutlinedIcon />
          </div>
        </div>

        <div className=" flex justify-end items-center gap-1 sm:gap-5 mr-2 sm:mx-10 flex-0 ">
          <span className="hidden sm:block md:block cursor-pointer">
            <VideoCallOutlinedIcon />
          </span>
          <span className="hidden sm:block md:block cursor-pointer">
            <NotificationsOutlinedIcon />
          </span>
          <span className="cursor-pointer">
            {" "}
            <AccountCircleRoundedIcon />
          </span>
        </div>
      </div>
    </header>
  );
};
export default Header;
