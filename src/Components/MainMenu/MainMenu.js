import React from 'react'
import { NavLink } from 'react-router-dom'

import './MainMenu.css'
import DrawerToggleButton from '../../Components/DrawerToggleButton/DrawerToggleButton'

const MainMenu = (props) => {
  return (
    <div className="MainMenu__container">
        <ul>
            <li><NavLink to='/' exact>HOME</NavLink></li>
            <li><NavLink to='/story' exact>STORY</NavLink></li>
            <li><NavLink to='/services'>SERVICES</NavLink></li>
            <li><NavLink to='/faq'>FAQ</NavLink></li>
            <li><NavLink to='/contact'>CONTACT</NavLink></li>
            {/* <li><NavLink to='/newsletter'>NEWSLETTER</NavLink></li> */}
        </ul>

        <DrawerToggleButton click={props.drawerClickedHandler}/>

    </div>
  )
}

export default MainMenu
