import React, { useState } from 'react'
import homeImg from '../../assets/images/landing.jpg'

const Home = () => {
  const [title, setTitle] = useState("Let's Explore the world");


  return (
    <div className='wrapper'>
      <img src={homeImg} alt="nature" className="img" />
        <div className="caption">
          <h2 >{ title }</h2>
        </div>
       
    </div>
  )
}

export default Home