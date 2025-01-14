import React from 'react'
import '../index.css'

const Head = () => {
  return (
    <div className=' grid grid-flow-col shadow-md'>
      <div className='flex '>
        <img className = "h-12 p-2 m-2"src="https://cdn.iconscout.com/icon/free/png-512/free-hamburger-menu-icon-download-in-svg-png-gif-file-formats--crispy-user-interface-pack-icons-462145.png?f=webp&w=256" alt="" />
        <img className = "h-12 p-2 m-2"src='https://static.cdnlogo.com/logos/y/92/youtube.svg' alt='logo' />
        </div>
        <div>
          <input type="text" placeholder="Search" />
          <button>Search</button>
        </div>

        <div>
          <img className='h-12 p-2 m-2'src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png" alt='user-logo' />
        </div>

    </div>
  )
}

export default Head