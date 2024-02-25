import "./character.css"
import Chef from "./src/chef.png";

function Character() {
  return (
    <section className="character-container">
          <ul className="character">
            <li id="developer" className="font_type">Desenvolvedor Chef</li>
            <li className="font_type">Nickname:<span className="font_r"> Carlinhos</span></li>
            <li className="font_type">Natureza:<span className="font_r"> Fogo, Elétrico, Psiquico</span></li>
            <li className="font_type">Caracteristicas:<span className="font_r"> Ama comer, corpo Robusto</span></li>
            <li className="font_type">Habilidades:<span className="font_r"> Cozinha, lava louça...</span></li>
            <li className="font_type">Altura/Peso:<span className="font_r"> 178cm, 94kg</span></li>
            <li className="font_type">Capturado:<span className="font_r"></span> ???</li>
            <li className="font_type">Held item:<span className="font_r"></span> N/A</li>
          </ul>
        <figure className="Chef">
          <div className="levels">
            <span className="level">N°0643</span>
            <span className="level">Lv22</span>
          </div>
          <img src={Chef} alt="chef" />
          <div className="badges">
            <span className="fire">Fogo</span>
            <span className="eletric">Elétrico</span>
            <span className="psychic">Psiquico</span>
          </div>
        </figure>
    </section>
  )
}

export default Character