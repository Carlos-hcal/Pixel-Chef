import React from 'react'
import FirstSection from './FirstSection/firstSection'
import SecondSection from './SecondSection/secondSection'
import ThirdSection from './ThirdSection/thirdSection'
import './start.css'
import wallpaper from "./src/wallpaper.png"

function Start() {
  return (
    <div className="body-start">
      <img className='dashline' src={wallpaper} alt="wallpaper" />
      <FirstSection/>
      <SecondSection/>
      <ThirdSection/> 
    </div>
  )
}

export default Start