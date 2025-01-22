import React from 'react'

const ButtonList = () => {
  const buttons=['Home', 'Explore', 'Subscriptions', 'Library','Music','News','Gaming','Movies','Fashion','Learning','Live','Sports','Settings','Report history','Help','Send feedback']
  return (
    <div> {buttons.map((btn)=>
      <button className='px-2 m-2 py-1  border-2 rounded-xl'>{btn}</button>
      )}</div>
  )
}

export default ButtonList