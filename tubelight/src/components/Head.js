import React, { useEffect, useState } from 'react'
import '../index.css'
import { useDispatch } from 'react-redux'
import { toggleHamburger } from '../Utils/hamburgerSlice'

const Head = () => {
  const [search,setSearch]=useState('');
  const[suggestions,setSuggestions]=useState([]);
  const[showSuggestions, setShowSuggestions]=useState(false);
 
  useEffect(()=>{

    const timer = setTimeout(()=>getSearchSuggestions(),200);

    return()=>{
      clearTimeout(timer);
    }
  },[search])

  const getSearchSuggestions=async()=>{
      const response = await fetch(`http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${search}`);
      
      const json= await response.json();
      setSuggestions(json[1]);
  }
  const dispatch=useDispatch();
  
  const handleClick =()=>{
    dispatch(toggleHamburger());
  }
  return (
    <div className=' grid grid-flow-col shadow-md'>
      <div className='flex  w-1/2'>
        <img onClick={handleClick} className = "h-12 p-2 m-2 hover:cursor-pointer"src="https://cdn.iconscout.com/icon/free/png-512/free-hamburger-menu-icon-download-in-svg-png-gif-file-formats--crispy-user-interface-pack-icons-462145.png?f=webp&w=256" alt="" />
        <img className = "h-12 p-2 m-2 hover:cursor-pointer"src='https://static.cdnlogo.com/logos/y/92/youtube.svg' alt='logo' />
        </div>
        <div className='p-2 m-2'>
          <input onFocus={()=>setShowSuggestions(true)} onBlur={()=>setShowSuggestions(false)}onChange={(e)=>setSearch(e.target.value)} value={search} className=" w-9/12 border-2 rounded-l-xl" type="text" placeholder="Search" />
          <button className=" border-2 rounded-r-xl">🔍</button>
          <div className=' w-[32.5rem] rounded-lg shadow-lg border-gray-100 fixed bg-white'>
          <ul>
            {showSuggestions&&suggestions.map(s=><li className='p-1 m-1 hover:bg-gray-50'>{s}</li>)}
          </ul>
        </div>
        </div>
       

        <div className=''>
          <img className=' h-12 p-2 m-2 ml-auto'src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png" alt='user-logo' />
        </div>

    </div>
  )
}

export default Head