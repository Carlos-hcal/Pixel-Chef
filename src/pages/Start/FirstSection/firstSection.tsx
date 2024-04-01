import developer from './src/Developer.png'
import "./firstSection.css"

export default function FirstSection() {

    return (
        <section className="first-container">
                <figcaption className='text-container'>
                        <h1 className='welcome'>Saudações!</h1>
                        <h3 className='other-text'>
                            bem vindos ao nosso site! <br/>
                            Me chamo Carlos, sou criador do Pixel Chef.<br/>
                            Aqui apresento um pouco do meu trabalho e<br/>
                            hobbies ...
                        </h3>
                        <button className='play'>PLAY</button>
                </figcaption>
                <figure>
                        <img className='developer' src={developer} alt="Developer" />
                </figure>
        </section>
    );
};



