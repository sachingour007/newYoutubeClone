import React,{useEffect} from 'react';
import {YOUTUBE_VIDEOS_API} from '../../constant/constantData'

const VideoContainer = () => {
    
    useEffect(() => {
        getVideoData()
    },[])

    const getVideoData = async () => {
        const res = await fetch(YOUTUBE_VIDEOS_API);
        const data = await res.json();
        console.log(data);
    }
  return (
    <div>VideoContainer</div>
  )
}

export default VideoContainer