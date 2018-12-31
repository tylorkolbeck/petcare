import React from 'react'
import { NavLink } from 'react-router-dom'

import './MainMenu.css'

const MainMenu = () => {
  return (
    <div className="MainMenu__container">
        <ul>
            <li><NavLink to='/story' exact>STORY</NavLink></li>
            <li><NavLink to='/services'>SERVICES</NavLink></li>
            <li><NavLink to='/faq'>FAQ</NavLink></li>
            <li><NavLink to='/contact'>CONTACT</NavLink></li>
            {/* <li><NavLink to='/newsletter'>NEWSLETTER</NavLink></li> */}
        </ul>

        <div className="MainMenu__burger_icon">
          <span></span>
          <span></span>
          <span></span>
        </div>

    </div>
  )
}

export default MainMenu
