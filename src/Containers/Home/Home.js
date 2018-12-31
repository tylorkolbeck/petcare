import React, { Component } from 'react'
import Footer from '../../Components/Footer/Footer'

import './Home.css'

class Home extends Component {

  state = {
    loading: false
  }

  render() {
    return (
      <div className="Home__container">

        <div className="Home__main_info">
          <div className="Home__main_info_text">
            Rest assured that your dog’s tail is wagging, or your cat’s a purring! With Jennifer your furry family member will continue to recieve the best care while you are away. With services such as potty breaks, long walks, feedings, and much more!
            Head to the Services page for more info and to download a price list! 
          </div>
        </div>

        <div className="Home__main_info_mobile">
          <div>
            Rest assured that your dog’s tail is wagging, or your cat’s a purring! With Jennifer your furry family member will continue to recieve the best care while you are away. With services such as potty breaks, long walks, feedings, and much more!
            Head to the Services page for more info and to download a price list! 
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
            <div style={{background: 'white', margin: '0px 0px 10px 0px', padding: '5px 20px', textAlign: 'center'}}><p style={{padding: '0px', margin: '0px', fontSize: '2em', fontFamily: 'rockwell, sans-serif', color: '#091740', position: 'relative', letterSpacing: '.1em'}}>SERVICES</p></div>
          </div>
        

        
          <div className="Home__faq_block" >
            <div className="Home__services_block_text" >
              <p>"Do you offer overnight stays?" </p>
            </div>
            <div style={{background: 'white', margin: '0px 0px 10px 0px', padding: '5px 20px', textAlign: 'center'}}><p style={{padding: '0px', margin: '0px', fontSize: '2em', fontFamily: 'rockwell, sans-serif', color: '#091740', position: 'relative', letterSpacing: '.1em'}}>FAQ</p></div>
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


        <footer className="Home__footer"><Footer /></footer>
        
        
      </div>

      
    )
  }
}

export default Home
