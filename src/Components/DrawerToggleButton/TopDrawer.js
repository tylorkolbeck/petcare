import React from 'react'
import './TopDrawer.css'


const topDrawer = props => {
  let drawerClasses = ['top-drawer']

  if (props.show) {
    drawerClasses = ['top-drawer', 'open']
  }

  return (
  <nav className={drawerClasses.join(' ')}>
    <ul>
      <li><a href="/">HOME</a></li>
      <li><a href="/story">STORY</a></li>
      <li><a href="/services">SERVICES</a></li>
      <li><a href="/faq">FAQ</a></li>
      <li><a href="/contact">CONTACT</a></li>

    </ul>
  </nav>
  )
}
  


export default topDrawer