import React from 'react'
import './Campus.css'
import gallery_1 from '../../assets/gallery-1.jpeg'
import gallery_2 from '../../assets/gallery-2.jpeg'
import gallery_3 from '../../assets/gallery-3.jpeg'
import gallery_4 from '../../assets/gallery-4.jpeg'


const Campus = () => {
  return (
    <div className='campus' id='campus'>
      <div className="gallery">
        <img src={gallery_1} alt="" />
        <img src={gallery_2} alt="" />
        <img src={gallery_3} alt="" />
        <img src={gallery_4} alt="" />
      </div>
      <button className='button btn'>See more here</button>
      
    </div>
  )
}

export default Campus
