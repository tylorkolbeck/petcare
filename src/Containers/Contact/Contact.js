import React, { Component } from 'react'
import './Contact.css'

class Contact extends Component {
  render() {
    return (
      <div className="Contact__container">

        <h1>SAY HELLO!</h1>
        <p>Questions, comments or suggestions? Please complete the form below and I will respond within a timely manner. </p>
        <div className="Contact__business_hours">
          <p>Available By Phone</p>
          <p>MON-SUN 8:30am - 6:30pm</p>
          <p>904-404-6207</p>
        </div>
        
        <div className="Contact__input_container">
          <input type="text" placeholder="NAME"></input>
          <input type="text" placeholder="EMAIL"></input>
          <input type="text" placeholder="SUBJECT"></input>
        {/* <h2>Tell Me More!</h2> */}
          <textarea placeholder="If you would like a call back please request so and include a working number I can reach you at!"></textarea>
        </div>
      </div>
    )
  }
}

export default Contact