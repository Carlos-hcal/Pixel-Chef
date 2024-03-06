import "./footer.css"
import Logo from "../Header/Components/Logo/logo"
import Linkedin from './src/Linkedin.svg'
import Github from './src/Github.svg'
import Whatsapp from './src/Whatsapp.svg'
import { Link } from "react-router-dom";

const Footer = () => {

    return (
      <footer className='App-footer'>
        <Logo />
        <ul className='PaginasFooter'>
          <li className='links-footer'><Link to="/" className="link-footer">INICIO</Link></li>
          <li className='links-footer'><Link to="/player" className="link-footer">PLAYER</Link></li>
          <li className='links-footer'><Link to="/projetos" className="link-footer">PROJETOS</Link></li>
          <li className='links-footer'><Link to="/contato" className="link-footer">CONTATO</Link></li>
        </ul>
        <ul className='icones'>
          <li>
            <a href="https://www.linkedin.com/in/carlos-henrique-20b78a238/" target="_blank">
              <img src={Linkedin} alt="Linkedin" />
            </a>
          </li>
          <li>
            <a href="https://github.com/Carlos-hcal" target="_blank">
              <img src={Github} alt="Github" />
            </a>
          </li>
          <li>
            <a href="https://github.com/Carlos-hcal" target="_blank">
              <img src={Whatsapp} alt="Whatsapp" />
            </a>
          </li>
        </ul>
        <small>© 2023 Pixel Chef.</small>
      </footer>
    ); 
};

export default Footer