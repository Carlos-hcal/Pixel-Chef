import React from 'react'
import "./defaultCard.css";
import HkBackground from "./src/HKbackground.png";
import Breve from "./src/Breve.png";

function DefaultCards() {
  return (
    <main className='project-box'>

      <section className='project-section'>
        <article className='card-project'>
          <figure>
            <img className='backgrounds' id='HK_background' src={HkBackground} alt="Hollow Knight" />
          </figure>
          <figcaption className='text'>
            <h3 className='subtitle'>Hollow Knight</h3>
            <p className='article'>Forje seu caminho em Hollow Knight! 
              Uma aventura de ação 
              épica em um vasto reino arruinado de insetos e heróis. </p>
            <div className='bads'>
              <span className='bad'>souslike</span>
              <span className='bad'>plataforma</span>
              <span className='bad'>2d</span>
              <span className='bad'>dificil</span>
            </div>
            <button className='submit'>Acessar</button>
          </figcaption>
        </article>
        
        <article className='card-project'>
          <figure>
            <img className='backgrounds' id='HK_background' src={Breve} alt="Hollow Knight" />
          </figure>
          <figcaption className='text'>
            <h3 className='subtitle'>Em Breve</h3>
            <p className='article' id='breve'>Forje seu caminho em Hollow Knight! 
              Uma aventura de ação 
              épica em um vasto reino arruinado de insetos e heróis. </p>
            <div className='bads'>
              <span className='bad' id='breve'>souslike</span>
              <span className='bad' id='breve'>plataforma</span>
              <span className='bad' id='breve'>2d</span>
              <span className='bad' id='breve'>dificil</span>
            </div>
            <button className='submit'>???</button>
          </figcaption>
        </article>      
      </section>

      <section className='project-section'>
        <article className='card-project'>
          <figure>
            <img className='backgrounds' id='HK_background' src={Breve} alt="Hollow Knight" />
          </figure>
          <figcaption className='text'>
            <h3 className='subtitle'>Em Breve</h3>
            <p className='article' id='breve'>Forje seu caminho em Hollow Knight! 
              Uma aventura de ação 
              épica em um vasto reino arruinado de insetos e heróis. </p>
            <div className='bads'>
              <span className='bad' id='breve'>souslike</span>
              <span className='bad' id='breve'>plataforma</span>
              <span className='bad' id='breve'>2d</span>
              <span className='bad' id='breve'>dificil</span>
            </div>
            <button className='submit'>???</button>
          </figcaption>
        </article>
        
        <article className='card-project'>
          <figure>
            <img className='backgrounds' id='HK_background' src={Breve} alt="Hollow Knight" />
          </figure>
          <figcaption className='text'>
            <h3 className='subtitle'>Em Breve</h3>
            <p className='article' id='breve'>Forje seu caminho em Hollow Knight! 
              Uma aventura de ação 
              épica em um vasto reino arruinado de insetos e heróis. </p>
            <div className='bads'>
              <span className='bad' id='breve'>souslike</span>
              <span className='bad' id='breve'>plataforma</span>
              <span className='bad' id='breve'>2d</span>
              <span className='bad' id='breve'>dificil</span>
            </div>
            <button className='submit'>???</button>
          </figcaption>
        </article>      
      </section>
      
      <section className='project-section'>
        <article className='card-project'>
          <figure>
            <img className='backgrounds' id='HK_background' src={Breve} alt="Hollow Knight" />
          </figure>
          <figcaption className='text'>
            <h3 className='subtitle'>Em Breve</h3>
            <p className='article' id='breve'>Forje seu caminho em Hollow Knight! 
              Uma aventura de ação 
              épica em um vasto reino arruinado de insetos e heróis. </p>
            <div className='bads'>
              <span className='bad' id='breve'>souslike</span>
              <span className='bad' id='breve'>plataforma</span>
              <span className='bad' id='breve'>2d</span>
              <span className='bad' id='breve'>dificil</span>
            </div>
            <button className='submit'>???</button>
          </figcaption>
        </article>
        
        <article className='card-project'>
          <figure>
            <img className='backgrounds' id='HK_background' src={Breve} alt="Hollow Knight" />
          </figure>
          <figcaption className='text'>
            <h3 className='subtitle'>Em Breve</h3>
            <p className='article' id='breve'>Forje seu caminho em Hollow Knight! 
              Uma aventura de ação 
              épica em um vasto reino arruinado de insetos e heróis. </p>
            <div className='bads'>
              <span className='bad' id='breve'>souslike</span>
              <span className='bad' id='breve'>plataforma</span>
              <span className='bad' id='breve'>2d</span>
              <span className='bad' id='breve'>dificil</span>
            </div>
            <button className='submit'>???</button>
          </figcaption>
        </article>      
      </section>
    </main>

    
  )
}

export default DefaultCards