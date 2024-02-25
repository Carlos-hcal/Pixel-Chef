import React from 'react'
import "./inputSearch.css"
import Left from "./src/miniArrowLeft.png"
import Right from "./src/miniArrowRight.png"

function InputSearch() {
  return (
    <form className='form-box' action="search">
        <input className='search' id="searchProject" type="text" placeholder='Pesquisar' />
        <ul className='filter'>
            <img className='arrows' src={Left} alt="left" />
            <li className='filter_item' id="all">Todos</li>
            <li className='filter_item' id="art">Artes</li>
            <li className='filter_item' id="games">Jogos</li>
            <li className='filter_item' id="pages">Sites</li>
            <img className='arrows' src={Right} alt="right" />      
        </ul>
    </form>
  )
}

export default InputSearch