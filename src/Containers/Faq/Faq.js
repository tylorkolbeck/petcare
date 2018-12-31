import React, { Component } from 'react'
import './Faq.css'

import dog_print from '../../Assets/Images/dog_paw_print.png'

class Faq extends Component {
  render() {
    return (
      <div className="Faq__container">
        <div className="Faq__main_info">
            <h1>FREQUENT QUESTIONS</h1>
            <p>Below are the most popular questions asked. If your question is not included please call or contact me through the contact form and I will be sure to get back to you in a timely manner! </p>
          </div>

        <div className="Faq__questions_container">
          <div className="Faq__dog_paw_image" style={{backgroundImage: `url(${dog_print})`}}></div>
          <div className="Faq__question">
            <h2>Do you offer overnight stay care?</h2>
            <p>Yes, upon availabilty I can stay in your home. Depending on the animal you have I may or may not be able to provide overnight care at my own home as I reside in an apartment and may not be allowed specific animals. </p>
          </div>
        </div>

        <div className="Faq__questions_container">
          <div className="Faq__dog_paw_image" style={{backgroundImage: `url(${dog_print})`}}></div>
          <div className="Faq__question">
            <h2>Can you administer my dogs medicines?</h2>
            <p>Yes, I am comfortable giving medications to blank, blank, blank animals orally as well as sub quetaniously (under the skin) if needed. </p>
          </div>
        </div>

        <div className="Faq__questions_container">
          <div className="Faq__dog_paw_image" style={{backgroundImage: `url(${dog_print})`}}></div>
          <div className="Faq__question">
            <h2>Do you offer a consultation prior to booking?</h2>
            <p>Yes, I prefer to meet you and your et prior to you leaving them in my care. During this meeting we can talk specifics to your pet and if books can go over paperwork and payment options. </p>
          </div>
        </div>

        <div className="Faq__questions_container">
          <div className="Faq__dog_paw_image" style={{backgroundImage: `url(${dog_print})`}}></div>
          <div className="Faq__question">
            <h2>Do you offer care for reptiles?</h2>
            <p>Yes, most of my experience is with snakes and an iguana, as my daughter had one for years. I am able to meet the needs of fresh food prep, light switching as well as misting and any other specifics you inform me of. If I do not feel I can provide requested care I will let you know. </p>
          </div>
        </div>

        <div className="Faq__questions_container">
          <div className="Faq__dog_paw_image" style={{backgroundImage: `url(${dog_print})`}}></div>
          <div className="Faq__question">
            <h2>How much do you charge?</h2>
            <p>There is a price list available to down load on the Services page. </p>
          </div>
        </div>

        <div className="Faq__questions_container">
          <div className="Faq__dog_paw_image" style={{backgroundImage: `url(${dog_print})`}}></div>
          <div className="Faq__question">
            <h2>Can you take my dog to a appointment?</h2>
            <p>Yes, this requires advance notice to ensure I am available to get your pet to their appointment in a timely manner.</p>
          </div>
        </div>

      </div>
    )
  }
}

export default Faq