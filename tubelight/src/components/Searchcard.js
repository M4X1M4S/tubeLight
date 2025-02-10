import React from 'react'

const Searchcard = ({info}) => {
    const{snippet}=info;
  return (
    <div className='m-2 p-2 shadow-md  flex col-span-1'>
      <div>
    <img className='rounded-lg'src={snippet.thumbnails.medium.url} alt='thumbnail' />
    </div>
    <div>
    <ul>
    <li className='whitespace-normal break-words max-w-80 '>{snippet.title}</li>
    <li>{snippet.channelTitle}</li>
    {/* <li>{statistics.viewCount}</li> */}
    </ul>
    </div>
    
    
    
  </div>
  )
}

export default Searchcard;