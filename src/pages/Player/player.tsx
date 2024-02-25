import React from 'react'
import Character from './Character/character'
import "./player.css"
import Personhood from './Personhood/personhood'
import Moveset from './Moveset/moveset'

function Player() {
  return (
    <section className="body">
      <h1 className='title'>Quem é esse?</h1>
      <Character />
      <Personhood />
      <Moveset />
    </section>
  )
}

export default Player