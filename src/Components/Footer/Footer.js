import React from 'react'
import { NavLink } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <div className="Footer__container" style={{flexDirection: 'column'}}>
            <ul>
                <li><NavLink to='/story' exact>STORY</NavLink></li>
                <li><NavLink to='/services'>SERVICES</NavLink></li>
                <li><NavLink to='/faq'>FAQ</NavLink></li>
                <li><NavLink to='/contact'>CONTACT</NavLink></li>
                <li><NavLink to='/newsletter'>NEWSLETTER</NavLink></li>
            </ul>

            <div className="Footer__contact_info">
              <hr></hr>
              <p>SERVING THE JACKSONVILLE, FLORIDA AREA</p>
              <p>JENNIFERINGLE4PETCARE@GMAIL.COM</p>
              <p>904.404.6207</p>
            </div>
    </div>
  )
}

export default Footer