import React from 'react'
import Character from './Character/character'
import "./player.css"
import Personhood from './Personhood/personhood'

function Player() {
  return (
    <section className="body">
      <h1 className='title'>Quem é esse?</h1>
      <Character/>
      <Personhood/>
    </section>
  )
}

export default Player