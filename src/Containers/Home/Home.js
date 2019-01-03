import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import './Home.css'

class Home extends Component {

  state = {
    loading: false
  }

  
  render() {
    window.scrollTo(0, 0)
    return (
      <div className="Home__container">

        <div className="Home__main_info">
          <div className="Home__main_info_text">
            Rest assured, with Jennifer, your pet will continue to receive love and care when you're not there! Offering potty breaks, walks, feedings and more. Head on over to the SERVICES page for more information.
          </div>
        </div>

        <div className="Home__main_info_mobile">
          <div>
            Rest assured, with Jennifer, your pet will continue to receive love and care when you're not there! Offering potty breaks, walks, feedings and more. Head on over to the SERVICES page for more information.           
          </div>
        </div>

        
          <div className="Home__rotating_reviews">
            <p>“Jennifer is so good with my two puppies. I never have to worry with her, and I even get a cute picture before she leaves them!”</p>
            <div className="Home__rotating_reviews_name">
              — ASHLEIGH NICOLE
            </div>
          </div>



        <div className="Home__flexbox">
          <div className="Home__services_block" >
            <div className="Home__services_block_text" >
              <p>Supply Run</p>
            </div>
            <div style={{background: 'white', margin: '0px 0px 30px 0px', padding: '5px 20px', textAlign: 'center'}}><p style={{padding: '0px', margin: '0px'}}><NavLink to="/faq" exact style={{padding: '0px', margin: '0px', fontSize: '2em', fontFamily: 'rockwell, sans-serif', color: '#091740', position: 'relative', letterSpacing: '.1em', textDecoration: 'none'}}>SERVICES</NavLink></p></div>
          </div>
        

        
          <div className="Home__faq_block" >
            <div className="Home__services_block_text" >
              <p>"Do you offer overnight stays?" </p>
            </div>
            <div style={{background: 'white', margin: '0px 0px 30px 0px', padding: '5px 20px', textAlign: 'center'}}><p style={{padding: '0px', margin: '0px'}}><NavLink to="/faq" exact style={{padding: '0px', margin: '0px', fontSize: '2em', fontFamily: 'rockwell, sans-serif', color: '#091740', position: 'relative', letterSpacing: '.1em', textDecoration: 'none'}}>FAQ</NavLink></p></div>
          </div>
        </div>


        <div style={{clear: 'both'}}> </div>

        <div className="Home__newsletter_signup">
          
            <div>
              <h2>JOIN THE PACK</h2>
            </div>

            <p style={{flex: '0 0 100%'}}>For monthly newsletters including special deals, seasonal pet info and more!</p>

            <input type="text" placeholder="ENTER YOUR EMAIL"></input>
            <button>SPEAK!</button>
        </div>        
      </div>

      
    )
  }
}

export default Home
