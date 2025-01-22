import React from 'react'

const VideoCard = ({info}) => {
  const {snippet,localized,title,statistics}=info;
  console.log(snippet)
  return (
    
    <div>
      <img src={snippet.thumbnails.default.url} alt={title_img} />
      <h1>{title}</h1>
      <h3>{snippet.channelTitle}</h3>
    </div>
  )
}

export default VideoCard