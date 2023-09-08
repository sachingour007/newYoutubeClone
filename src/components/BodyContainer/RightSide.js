import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useSelector } from "react-redux";

const RightSide = () => {
  const isMenuOpen = useSelector((store) => store.app.isSidebarOpen);
  console.log(isMenuOpen);
  return (
    <div className={isMenuOpen ? `col-span-11` : `col-span-12 pl-10 `}>
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default RightSide;
