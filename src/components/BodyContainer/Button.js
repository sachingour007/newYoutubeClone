import React from "react";
import {buttonsForVideoSuggestion} from '../../constant/buttonList'

const Button = () => {
  return (
    <div>
        {buttonsForVideoSuggestion.map(({name}) => {
            return(
                <button className="border bg-[#f3f3f3] text-xs sm:text-sm m-1 sm:m-2  px-2 py-1 rounded-lg" key={name}>{name}</button>
            )
        })}
      
    </div>
  );
};

export default Button;
