import React from "react";
import shimmer from "./LoaderShimmer.module.css";

const LoaderShimmer = () => {
  return (
    <div className={shimmer.main_shimmer}>
      {Array(20)
        .fill("")
        .map((e, index) => (
          <div className={shimmer.blank_card}
          key={index}></div>
        ))}
    </div>
  );
};

export default LoaderShimmer;
