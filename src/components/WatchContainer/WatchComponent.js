import React, { useEffect } from "react";
import { toggalClosed } from "../../utility/Store/sidebarSlice";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import ReactPlayer from "react-player";
import SuggestionComponent from "./SuggestionComponent";

const WatchComponent = () => {
  const [searchParam] = useSearchParams();
  const sideBarSlector = useSelector((store) => store.app.isSidebarOpen);
  console.log(searchParam.get("v"));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(toggalClosed());
  }, []);

  return (
    <div
      className={`h-[90vh] flex flex-col md:flex-row col-span-12 ${
        sideBarSlector ? "ml-1 md:ml-[-40px] md:mr-10" : "mx-2 md:mx-10"
      }`}
    >
      <div className="md:w-3/4 p-2">
        <div className="h-[300px] sm:h-[400px] md:h-[400px] lg:h-[400px] xl:h-[550px] w-full  lg:ml-0  lg:mr-0">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${searchParam.get("v")}`}
            controls
            width="100%"
            height="100%"
            style={{ backgroundColor: "#000000" }}
            playing={true}
          />
        </div>
        <div>
          <h2>video Details</h2>
        </div>
        <div>
          <h2>comment</h2>
        </div>
      </div>
      <div className="mt-2 md:w-1/3 md:mx-2">
        <SuggestionComponent />
      </div>
    </div>
  );
};

export default WatchComponent;
