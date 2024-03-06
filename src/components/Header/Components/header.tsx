import { Link } from "react-router-dom";
import Logo from "./Logo/logo";
import "./header.css"

const Header = () => {
    return (
        <nav className="App-header"> 
            <Logo />
            <ul className='pages'>
                <li className='links'><Link to="/" className="link">INICIO</Link></li>
                <li className='links'><Link to="/player" className="link">PLAYER</Link></li>
                <li className='links'><Link to="/projetos" className="link">PROJETOS</Link></li>
                <li className='links'><Link to="/contato" className="link">CONTATO</Link></li>
            </ul>
        </nav>
    )
};

export default Header;