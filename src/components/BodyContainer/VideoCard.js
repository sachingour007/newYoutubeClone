import React from "react";
import { useSelector } from "react-redux";
import { abbreviateNumber } from "js-abbreviation-number";

const VideoCard = ({ videoInfo }) => {
  const isMenuOpen = useSelector((store) => store.app.isSidebarOpen);

  const { snippet, statistics } = videoInfo;
  const { thumbnails, title, channelTitle } = snippet;
  return (
    <div className={` ml-2 mr-1 mt-2 ${isMenuOpen ? `w-72` : `w-80`}`}>
      <div className="">
        <img
          className="w-full rounded-lg"
          src={
            thumbnails?.maxres?.url
              ? thumbnails?.maxres?.url
              : thumbnails?.medium?.url
          }
          alt="video"
        />
      </div>
      <div className="flex gap-5 justify-center mt-1">
        <img
          className="rounded-full my-2 w-9 h-9"
          src={thumbnails?.default?.url}
          alt=""
        />

        <div className="flex flex-col">
          <h2 className="text-sm font-medium overflow-hidden text-ellipsis">
            {title}
          </h2>
          <h5 className="text-gray-500 text-xs">{channelTitle}</h5>
          <h5 className="text-gray-500 text-xs">
            <span>{`${abbreviateNumber(statistics?.viewCount, 0)}`} views</span>
            {/* <span>{snippet.publishedAt}</span> */}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
