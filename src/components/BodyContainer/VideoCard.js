import React from "react";

const VideoCard = ({ videoInfo }) => {
  console.log(videoInfo);
  const { snippet, statistics } = videoInfo;
  const { thumbnails, title, channelTitle } = snippet;
  return (
    <div className="w-72  ml-2 mr-1 mt-2">
      <div className="">
        <img className="w-full rounded-lg" src={thumbnails?.medium?.url} alt="video" />
      </div>
      <div className="flex gap-5 justify-center mt-1">
        
          <img
            className="rounded-full my-2 w-9 h-9"
            src={thumbnails.default.url}
            alt=""
          />
    
        <div className="">
            <h2 className="text-sm font-medium">{title}</h2>
            <h5 className="text-gray-500 text-xs">{channelTitle}</h5>
            <h5 className="text-gray-500 text-xs"><span>{statistics.viewCount} views</span> * <span></span></h5>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
