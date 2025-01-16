import React from 'react'
import '../index.css'

const Head = () => {
  return (
    <div className=' grid grid-flow-col shadow-md'>
      <div className='flex  w-1/2'>
        <img className = "h-12 p-2 m-2"src="https://cdn.iconscout.com/icon/free/png-512/free-hamburger-menu-icon-download-in-svg-png-gif-file-formats--crispy-user-interface-pack-icons-462145.png?f=webp&w=256" alt="" />
        <img className = "h-12 p-2 m-2 hover:cursor-pointer"src='https://static.cdnlogo.com/logos/y/92/youtube.svg' alt='logo' />
        </div>
        <div className='p-2 m-2'>
          <input className=" w-9/12 border-2 rounded-l-xl" type="text" placeholder="Search" />
          <button className=" border-2 rounded-r-xl">🔍</button>
        </div>

        <div className=''>
          <img className=' h-12 p-2 m-2 ml-auto'src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png" alt='user-logo' />
        </div>

    </div>
  )
}

export default Head