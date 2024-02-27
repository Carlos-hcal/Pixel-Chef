import "./footer.css"
import Logo from "../Header/Components/Logo/logo"
import Linkedin from './src/Linkedin.svg'
import Github from './src/Github.svg'
import Whatsapp from './src/Whatsapp.svg'
import { Link } from "react-router-dom";

const Footer = () => {
    const icones = [Linkedin, Github, Whatsapp]

    return (
      <footer className='App-footer'>
        <Logo />
        <ul className='PaginasFooter'>
          <li className='links-footer'><Link to="/inicio" className="link-footer">INICIO</Link></li>
          <li className='links-footer'><Link to="/player" className="link-footer">PLAYER</Link></li>
          <li className='links-footer'><Link to="/projetos" className="link-footer">PROJETOS</Link></li>
          <li className='links-footer'><Link to="/contato" className="link-footer">CONTATO</Link></li>
        </ul>
        <ul className='icones'>
          {icones.map( (icone) => (
            <li>
              <img src={icone}></img>
            </li>
          ) ) }
        </ul>
        <small>© 2023 Pixel Chef.</small>
      </footer>
    ); 
};

export default Footer