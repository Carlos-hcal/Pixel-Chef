import "./secondSection.css"
import projects from "./src/projects.png"


function SecondSection() {

    return (
        <section className="second-container">
            <figure>
                <img src={projects} alt="" />
            </figure>
            <figcaption>
                <h2 className="second-subtitle">Todos os projetos apresentados aqui são autorais!</h2>
                <p className="second-text">
                    “Um projeto de tecnologia é o resultado da fusão entre criatividade e<br/>
                    engenhosidade. É a materialização de uma visão inovadora, onde<br/>
                    cada linha de código é um traço de expressão digital. É a arte de<br/>
                    resolver problemas com elegância e eficiência, deixando uma marca<br/>
                    única no universo digital. É a busca incessante por soluções que<br/>
                    transcendem o convencional, impulsionando o progresso e moldando<br/>
                    o futuro da tecnologia.”
                </p>
                <em className="artist">Altor: Samuel Altman - 2021</em>
            </figcaption>
        </section>
    );
};

export default SecondSection