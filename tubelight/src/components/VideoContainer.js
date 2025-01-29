import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom';


const VideoContainer = () => {

  // const apiKey = process.env.REACT_APP_YT_API_key;
  const apiKey = 'AIzaSyAfYzrgL0536sjO_s8R0lIpi5cUvnk7iCQ';
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
    console.log("2");
  }, []);
  const getVideos = async () => {
    const response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=50&chart=mostPopular&regionCode=US&key=${apiKey}`);
    const data = await response.json();
    console.log("1");
    console.log(data);
    setVideos(data.items);
  }
 

  return (
    <div className=' flex flex-wrap '>
      {videos.map((video) => <Link to={'/watch?v='+video.id} ><VideoCard info={video}/></Link>)}
     
    </div>
  )
}

export default VideoContainer;