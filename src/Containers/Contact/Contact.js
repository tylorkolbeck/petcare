import React, { Component } from 'react'
import './Contact.css'

class Contact extends Component {
  render() {
    window.scrollTo(0, 0)
    return (
      <div className="Contact__container">

        <h1>SAY HELLO!</h1>
        <p>
          Do you have questions, comments or suggestions? Please complete the form below and I will be sure to respond within a timely manner.
        </p>
        <div className="Contact__business_hours">
          <p>Also available by phone (call or text) </p>
          <p><span style={{fontWeight: 'bold'}}>Monday-Friday:</span> 8:00am - 6:00pm</p>
          <p><span style={{fontWeight: 'bold'}}>Saturday-Sunday:</span> 10:00am - 4:00pm</p>
          <p>904-404-6207</p>
        </div>
        
        <div className="Contact__input_container">
          <input type="text" placeholder="NAME"></input>
          <input type="text" placeholder="EMAIL"></input>
          <input type="text" placeholder="SUBJECT"></input>
        {/* <h2>Tell Me More!</h2> */}
          <textarea placeholder="TELL ME MORE! If you would like a call back, please request so and include the best phone number and times you can be reached. "></textarea>
          <button><span>SUBMIT</span></button>
        </div>
      </div>
    )
  }
}

export default Contact