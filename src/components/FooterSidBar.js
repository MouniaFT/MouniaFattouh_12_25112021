import { Link } from 'react-router-dom'
import swimmingIcon from '../images/swimmingIcon.svg'
import yogaIcon from '../images/yogaIcon.svg'
import bikingIcon from '../images/bikingIcon.svg'
import bodybuildingIcon from '../images/bodybuildingIcon.svg'
import React from 'react'

/**
 * A component to display Sidbar
 * @returns { React.Component }
 */
function FooterSidBar() {
  return (
    <footer className="footer">
      <div className="footer_content">
        <nav className="footer_nav">
          <Link to="/" className="footer_icon">
            <img src={yogaIcon} alt="yogaIcon" />
          </Link>
          <Link to="/" className="footer_icon">
            <img src={swimmingIcon} alt="swimmingIcon" />
          </Link>
          <Link to="/" className="footer_icon">
            <img src={bikingIcon} alt="bikingIcon" />
          </Link>
          <Link to="/" className="footer_icon">
            <img src={bodybuildingIcon} alt="bodybuildingIcon" />
          </Link>
        </nav>
        <p className="footer_copiryght">Copiryght, SportSee 2020</p>
      </div>
    </footer>
  )
}

export default FooterSidBar
