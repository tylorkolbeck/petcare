import React, { Component } from 'react'
import './Faq.css'

import dog_print from '../../Assets/Images/dog_paw_print.png'

class Faq extends Component {
  render() {
    window.scrollTo(0, 0)
    return (
      <div className="Faq__container">
        <div className="Faq__main_info">
            <h1>FREQUENTLY ASKED QUESTIONS</h1>
            <p>
              Below you will find some of the most popular questions asked. If you have a question that is not listed below, you can contact me by phone (call or text), email or the contact form located on the <a href="/contact" style={{textDecoration: 'underline', color: '#394A66'}}>CONTACT</a> page and I will be sure to respond within a timely manner.
            </p>
          </div>

        <div className="Faq__questions_container">
          <div className="Faq__question">
            <h2>How much do you charge?</h2>
            <p>
              You will be able to find my fees available for you, located on the <a href="/services" style={{textDecoration: 'underline', color: '#394A66'}}>SERVICES</a> page.
            </p>
          </div>
        </div>

        <div className="Faq__questions_container">
          <div className="Faq__question">
            <h2>Do you offer a consultation prior to booking pet care?</h2>
            <p>
              Yes. I prefer to meet you and your pet, prior to leaving them in my care. This helps with removing the "surprise" element your pet may experience. Having a little meet and greet also allows us to go over the routine and care of your pet, as well as, addressing any questions, reviewing paperwork and payment options. 
            </p>
          </div>
        </div>

        <div className="Faq__questions_container">
          <div className="Faq__question">
            <h2>Are you able to take my pet to a grooming or veterinary appointment?</h2>
            <p>
              No. Not at this time but I look forward to the possibilities of adding it to my services in the future.
            </p>
          </div>
        </div>

        <div className="Faq__questions_container">
          <div className="Faq__question">
            <h2>Do you offer care for reptiles?</h2>
            <p>
              Yes. I have experience in care with reptiles, which have ranged from regular/fresh food preparation, heating and lighting needs, along with misting. Please do not hesitate to ask about specific request you may have for your pet.
            </p>
          </div>
        </div>

        <div className="Faq__questions_container">
          <div className="Faq__question">
            <h2>Do you offer overnight stays, in either my home or yours?</h2>
            <p>
              No. Not at this time but I look forward to the possibilities of adding this to my services in the future.
            </p>
          </div>
        </div>

        <div className="Faq__questions_container">
          <div className="Faq__question">
            <h2>Are you able to administer my pet medication, when needed or required for health care?</h2>
            <p>
              Yes. I have experience in oral, topical and subcutaneous injections and fluids. Please do not hesitate to ask about specific medical attention your pet may need or require.
            </p>
          </div>
        </div>

        

        

        
      </div>
    )
  }
}

export default Faq