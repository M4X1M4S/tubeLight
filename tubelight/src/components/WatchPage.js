import React from 'react'
import { useDispatch } from 'react-redux'
import { hideHamburger } from '../Utils/hamburgerSlice';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import CommentsConatiner from './CommentsContainer';



const WatchPage = () => {
  
    const dispatch = useDispatch();   
    useEffect(()=>{
        dispatch(hideHamburger())
    },[])

    const [params]=useSearchParams();
    console.log(params.get('v'));
  return (
    <div className=' px-24 py-8'><iframe width="1236" height="695" src={"https://www.youtube.com/embed/"+ params.get('v')} title="The Local Train - Aalas Ka Pedh - Aaoge Tum Kabhi (Official Audio)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    <CommentsConatiner/>
    </div>
  )
}

export default WatchPage;