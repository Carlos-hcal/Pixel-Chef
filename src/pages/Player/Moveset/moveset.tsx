import React from 'react'
import "./moveset.css"

function Moveset() {
  return (
    <section className='moveset-box'>
        <ul className='moveset'>
            <li className='badge' id="move" >Moveset Atual</li>
            <li className='badge' id="react">React</li>
            <li className='badge' id="ts">TypeScript</li>
            <li className='badge' id="sass">Sass</li>
            <li className='badge' id="php">PHP</li>
        </ul>
        <ul className='moveset'>
            <li className='badge' id="move">Moveset Futuro</li>
            <li className='badge' id="java">Java</li>
            <li className='badge' id="next">Next.js</li>
            <li className='badge' id="angular">Angular</li>
            <li className='badge' id="C">C#</li>
        </ul>
    </section>
  )
}

export default Moveset