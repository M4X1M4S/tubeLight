import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';

import { Link } from 'react-router-dom';
import Searchcard from './Searchcard';

const SearchPage = () => {
  const [searchResult,setSearchResult]=useState([]);
  const [params]=useSearchParams();
  console.log(params.get('s'));
  const apiKey = 'AIzaSyAfYzrgL0536sjO_s8R0lIpi5cUvnk7iCQ';
useEffect(()=>{
  getSearchResults();
},[])

const getSearchResults=async()=>{
  const response=await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${params.get('s')}&key=${apiKey}`);
  const data=await response.json();
  setSearchResult(data.items);
}
  return (
     <div>
      {searchResult.map((video)=><Link to={'/watch?v='+video.id.videoId}><Searchcard info={video}/></Link>)}
     </div>  )
}

export default SearchPage;