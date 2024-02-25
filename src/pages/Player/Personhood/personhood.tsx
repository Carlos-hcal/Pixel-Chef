import React from 'react'
import "./personhood.css"
import Graphic from "./src/graphic.png"

function Personhood() {
  return (
    <section className='personhood-box'>
        <div className='cards'>
            <h2>Personalidade</h2>
            <div className='personhood'>
                <div>
                    <li className='aaa'></li>
                <ul className='list'>
                    <li>inseguro</li>
                    <li>confiante</li>
                </ul>
                </div>
                <div>
                    <li className='aaa'></li>
                <ul className='list'>
                    <li>Covarde</li>
                    <li>Corajoso</li>
                </ul>
                </div>
                <div>
                    <li className='aaa'></li>
                <ul className='list'>
                    <li>Introvertido</li>
                    <li>Extrovertido</li>
                </ul>
                </div>
                <div>
                    <li className='aaa'></li>
                <ul className='list'>
                    <li>Calmo</li>
                    <li>Estressado</li>
                </ul>
                </div>
                <div>
                    <li className='aaa'></li>
                <ul className='list'>
                    <li>Desimaginativo</li>
                    <li>Criativo</li>
                </ul>
                </div>
                
            </div>
        </div>

        <div className='cards'>
            <img id='graphic' src={Graphic} alt="skills" />
        </div>
    </section>
  )
}

export default Personhood