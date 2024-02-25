import React from 'react'
import { FaReact } from "react-icons/fa";
import { TbBrandTypescript } from "react-icons/tb";
import { FaSass } from "react-icons/fa";
import { GiElephant } from "react-icons/gi";
import { FaJava } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiAngularjs } from "react-icons/si";
import { SiCsharp } from "react-icons/si";
import "./moveset.css"

function Moveset() {
  return (
    <section className='moveset-box'>
        <ul className='moveset'>
            <li className='badge' id="move" >Moveset Atual</li>
            <li className='badge' id="react">React <span className='icon'><FaReact /></span></li>
            <li className='badge' id="ts">TypeScript <span className='icon'><TbBrandTypescript /></span></li>
            <li className='badge' id="sass">Sass <span className='icon'><FaSass /></span></li>
            <li className='badge' id="php">PHP <span className='icon'><GiElephant /></span></li>
        </ul>
        <ul className='moveset'>
            <li className='badge' id="move">Moveset Futuro</li>
            <li className='badge' id="java">Java <span className='icon'><FaJava /></span></li>
            <li className='badge' id="next">Next.js <span className='icon'><TbBrandNextjs /></span></li>
            <li className='badge' id="angular">Angular <span className='icon'><SiAngularjs /></span></li>
            <li className='badge' id="C">C# <span className='icon'><SiCsharp /></span></li>
        </ul>
    </section>
  )
}

export default Moveset