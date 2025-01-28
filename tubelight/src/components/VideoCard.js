import React from 'react'

const VideoCard = ({info}) => {
  const {snippet,statistics}=info;
const { channelTitle,localized,thumbnails}=snippet;


  return (
    
    <div className='m-2 p-2 shadow-md'>
      <img className='rounded-lg'src={thumbnails.medium.url} alt='title' />
      <ul>
      <li className='whitespace-normal break-words max-w-80'>{localized.title}</li>
      <li>{channelTitle}</li>
      <li>{statistics.viewCount}</li>
      </ul>
      
      
    </div>
  )
}

export default VideoCard