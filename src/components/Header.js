import logo from '../images/logo.svg'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className="header">
      <div className="container container-l">
        <Link to="/" className="header_logo">
          <img src={logo} alt="logo" />
        </Link>
        <nav className="header_nav">
          <Link to="/" className="nav-item">
            Accueil
          </Link>
          <Link to="/" className="nav-item">
            Profil
          </Link>
          <Link to="/" className="nav-item">
            Réglage
          </Link>
          <Link to="/" className="nav-item">
            Communauté
          </Link>
        </nav>
      </div>
    </div>
  )
}

export default Header
