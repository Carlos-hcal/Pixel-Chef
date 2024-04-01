import React from 'react'
import FirstSection from './FirstSection/firstSection'
import SecondSection from './SecondSection/secondSection'
import ThirdSection from './ThirdSection/thirdSection'
import './start.css'
import Dashline from "./src/Dash_line.png"

function Start() {
  return (
    <div className="body-start">
      <img className='dashline' src={Dashline} alt="linha" />
      <FirstSection/>
      <SecondSection/>
      <ThirdSection/> 
    </div>
  )
}

export default Start