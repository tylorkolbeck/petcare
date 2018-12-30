import React from 'react'
import { NavLink } from 'react-router-dom'

const MainMenu = () => {
  return (
    <div>
        <ul>
            <li><NavLink to='/' exact>HOME</NavLink></li>
            <li><NavLink to='/services'>SERVICES</NavLink></li>
            <li><NavLink to='/faq'>FAQ</NavLink></li>
            <li><NavLink to='/contact'>CONTACT</NavLink></li>
            <li><NavLink to='/newsletter'>NEWSLETTER</NavLink></li>
        </ul>
    </div>
  )
}

export default MainMenu
