import React from 'react'
import { NavLink } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <div className="Footer__container">
            <ul>
                <li><NavLink to='/' exact>HOME</NavLink></li>
                <li><NavLink to='/services'>SERVICES</NavLink></li>
                <li><NavLink to='/faq'>FAQ</NavLink></li>
                <li><NavLink to='/contact'>CONTACT</NavLink></li>
                <li><NavLink to='/newsletter'>NEWSLETTER</NavLink></li>
            </ul>

            <div className="Footer__contact_info">
              <p>SERVING THE JACKSONVILLE, FLORIDA AREA</p>
              <hr></hr>
              <p>JENNIFERINGLE4PETCARE@GMAIL.COM</p>
              <p>904.404.6207</p>
            </div>
    </div>
  )
}

export default Footer