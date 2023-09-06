import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../../constant/constantData";
import VideoCard from "./VideoCard";
import LoaderShimmer from "../ShimmerUIBox/LoaderShimmer";

const VideoContainer = () => {
  const [videoData, setVideoData] = useState([]);

  useEffect(() => {
    getVideoData();
  }, []);

  const getVideoData = async () => {
    const res = await fetch(YOUTUBE_VIDEOS_API);
    const data = await res.json();
    console.log(data.items);
    setVideoData(data.items);
  };
  return videoData.length < 0 ? (
    <LoaderShimmer />
  ) : (
    <div className="flex flex-wrap">
      {videoData.map((video) => (
        <VideoCard videoInfo={video} />
      ))}
    </div>
  );
};

export default VideoContainer;
