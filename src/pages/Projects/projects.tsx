import React from 'react'
import "./projects.css"
import InputSearch from './Search/inputSearch'
import DefaultCards from './DefaultCards/defaultCard'

function Projects() {
  return (
    <section className='body-projects'>
      <h1 className='title'>Projetos:</h1>
      <InputSearch />
      <DefaultCards />
    </section>
  )
}

export default Projects