import { ReactComponent as LogoSvg } from './src/Logo.svg'
import "./logo.css"
import { Link } from 'react-router-dom'

function Logo() {
    return (
        <div className="imglogo">
            <Link to="/inicio" ><LogoSvg /></Link>
        </div>
    )
}

export default Logo