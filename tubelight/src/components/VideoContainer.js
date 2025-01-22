import React,{useEffect, useState} from 'react'
import VideoCard from './VideoCard'

const VideoContainer = () => {
  
  const apiKey = process.env.REACT_APP_API_KEY;
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);
  const getVideos = async () => {
    const response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=50&chart=mostPopular&regionCode=US&key=${apiKey}`) ;
    const data = await response.json();
    console.log(data);
    setVideos(data.items);
  }


  return (
    <div>
      <VideoCard info={videos[0]}/>
    </div>
  )
}

export default VideoContainer;