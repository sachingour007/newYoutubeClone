import React, { useEffect } from "react";
import { toggalClosed } from "../../utility/Store/sidebarSlice";
import { useDispatch } from "react-redux";
import {useSearchParams} from 'react-router-dom'

const WatchComponent = () => {
  const [searchParam] = useSearchParams();
  console.log(searchParam.get("v"));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(toggalClosed());
  }, []);
  
  return <div>WatchComponent</div>;
};

export default WatchComponent;
