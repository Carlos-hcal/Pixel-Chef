import modelo from './src/Modelo.png'
import "./thirdSection.css"

function ThirdSection() {

    return (
        <section className="third-container">
                <figcaption className='text-container'>
                    <h3 className='third-other-text'>
                        Eu realmente não faço ideia do que escrever aqui,<br/>
                        mas eu tenho certeza que alguma hora vamos achar<br/>
                        alguma coisa muito interessante, que chame muita<br/>
                        atenção.
                    </h3>
                </figcaption>
                <figure className='modelo-container'>
                        <img src={modelo} alt="modelo" />
                </figure>
        </section>
    );
};

export default ThirdSection