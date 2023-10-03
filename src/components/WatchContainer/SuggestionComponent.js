import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../../constant/constantData";
import { abbreviateNumber } from "js-abbreviation-number";

const SuggestionComponent = () => {
  const [relatedVideos, setRelatedVideos] = useState([]);

  useEffect(() => {
    getRelatedVideos();
  }, []);

  const getRelatedVideos = async () => {
    const res = await fetch(YOUTUBE_VIDEOS_API);
    const dataJson = await res.json();
    console.log(dataJson.items);
    setRelatedVideos(dataJson.items.slice(0, 10));
  };

  console.log(relatedVideos);

  return relatedVideos.map(
    ({
      id,
      snippet: { thumbnails, channelTitle,title },
      statistics: { viewCount },
    }) => {
      return (
        <div className="mx-1 my-1" key={id}>
          <div className="flex justify-center items-center gap-2">
            <div className="w-2/5  rounded-lg">
              <div className="">
                <img
                  className="rounded-lg"
                  src={thumbnails?.medium?.url}
                  alt=""
                />
              </div>
            </div>
            <div className="w-3/5 pl-2 py-1">
              <div>
                <h2 className="">{title}</h2>
                <h6 className="text-xs text-gray-500">{channelTitle}</h6>
                <h6>
                  <span className="text-xs text-gray-500">{`${abbreviateNumber(viewCount, 0)}`} Views</span>
                </h6>
              </div>
            </div>
          </div>
        </div>
      );
    }
  );
};

export default SuggestionComponent;
