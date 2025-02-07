import React from 'react'
import { useSelector } from 'react-redux'

const Sidebar = () => {
const visiblity= useSelector((store)=>store.hamburger.isHamburgerOpen);
  return ( !visiblity ? null :
    
      <div className='col-span-1 m-2 p-2'>
      <h1 className='font-semibold border-b-2 pb-4'>Subscriptions</h1>

      <h1 className='font-semibold border-b-2 pb-4 ' > Home</h1>
      <h1 className='font-semibold'> Explore</h1>
      <ul>
        <li>Music</li>

        <li>News</li>
        <li>News</li>
        <li>Gmaing</li>
        <li>Movies</li>
      </ul>
    </div>
    
    
  )
}

export default Sidebar