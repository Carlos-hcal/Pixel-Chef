import React from 'react'
import Character from './Character/character'
import "./player.css"

function Player() {
  return (
    <section className="body">
      <h1 className='title'>Quem é esse?</h1>
      <Character/>
    </section>
  )
}

export default Player