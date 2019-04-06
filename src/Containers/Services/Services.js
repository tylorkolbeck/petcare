import React, { Component } from 'react'
import './Services.css'

// IMAGES //
import dog_print from '../../Assets/Images/dog_paw_print.png'
import dog_print_blue from '../../Assets/Images/dog_paw_print_blue.png'
import dog_bowl from '../../Assets/Images/dog_food_bowl.png'
import dog_collar_blue from '../../Assets/Images/dog_collar_blue.png'
import dog_collar_grey from '../../Assets/Images/dog_collar_grey.png'
import animal_needle_grey from '../../Assets/Images/animal_needle_grey.png'
import medical_kit from '../../Assets/Images/medical_kit.png'
import dog_bone from '../../Assets/Images/dog_bone.png'

class Services extends Component {
  
  render() {
    window.scrollTo(0, 0)
    return (
      <div className="Services__container">

          <div className="Services__main_info">
            <h1>SERVICES</h1>
            <p>
              Below is a list of services that I provide. If you have any questions, please feel free to send them through the CONTACT page. 
              I don't want to leave any pet off of my list. My experiences range from domestic, farm, exotics, reptiles, birds, fish and wildlife.
              If you have an exotic pet or one with special needs, we can discuss them prior to booking. This will help to ensure I am able to adequately care for your pet. Rest assured, I will not take on responsibility I am not confident in. I want to provide the best care for your pet and give you comfort while you're away from them.
            </p>
          </div>
          
          <div className="Services__info_bar_container">

            {/* ## SERVICES ## */}
            {/* <div className="Services__image_container" style={{backgroundImage: `url(${dog_print})`}}></div>
            <div className="Services__info_bar" style={{background: '#CBCACE'}}>
              <div className="Services__image_container_mobile" style={{backgroundImage: `url(${medical_kit})`}}></div>
                <h2>ALL ANIMALS WELCOME</h2>
                <p>
                I don't want to leave any pet off of my list. My experiences range from domestic, farm, exotics, reptiles, birds, fish and wildlife.
                </p>
              </div> */}

            {/* ## SERVICES ## */}
            <div className="Services__image_container" style={{backgroundImage: `url(${dog_bowl})`, border: '5px solid #E7E8E4'}}></div>
            <div className="Services__info_bar" style={{background: '#E7E8E4'}}>
              <div className="Services__image_container_mobile" style={{backgroundImage: `url(${dog_collar_blue})`}}></div>
              <h2>FULL PET VISIT: $20-$25</h2>
              <p>
                Which includes walking feeding, environmental clean up and LOVE.
              </p>
              <p className="Services__note"> *fee is for first visit of day, depending on species and needs. </p>
              <p className="Services__note">*aditional visits, per same day $10-$15</p>
            </div>

            {/* ## SERVICES ## */}        
            <div className="Services__image_container" style={{backgroundImage: `url(${dog_collar_blue})`, border: '5px solid #9AABBA'}}></div>
            <div className="Services__info_bar" style={{background: '#9AABBA'}}>
              <div className="Services__image_container_mobile" style={{backgroundImage: `url(${dog_collar_grey})`}}></div>
                <h2>POTTY BREAKS: $10</h2>
                <p>
                  For only a quick trip outside.
                </p>
                <p className="Services__note">*to help with potty training and age related issues or those medications that make the "need to go" more frequent.</p>
              </div>

            {/* ## SERVICES ## */}
            <div className="Services__image_container" style={{backgroundImage: `url(${dog_print})`, border: '5px solid #CBCACE'}}></div>
            <div className="Services__info_bar" style={{background: '#CBCACE'}}>
              <div className="Services__image_container_mobile" style={{backgroundImage: `url(${dog_print_blue})`}}></div>
                <h2>WALKS: 15-20 minutes, $15 or 30-35 minutes, $20</h2>
                <p>
                  Nothing like a little fresh air, change of scenery or release of energy.
                </p>
                <p className="Services__note">*please note that time also depends on weather, as well as, your pets breed or health restrictions to ensure they are not overexerted.</p>
              </div>

            {/* ## SERVICES ## */}
            <div className="Services__image_container" style={{backgroundImage: `url(${animal_needle_grey})`, border: '5px solid #E7E8E4'}}></div>
            <div className="Services__info_bar" style={{background: '#E7E8E4'}}>
              <div className="Services__image_container_mobile" style={{backgroundImage: `url(${medical_kit})`}}></div>
                <h2>MEDICATION ADMINISTRATION:</h2>
                <p>
                I am able to administer oral, topical and subcutaneous fluids for your pets special needs. 
                </p>
                <p className="Services__note"> *please don't hesitate to ask me about addition needs for your pet that aren't listed.</p>
                <p className="Services__note"> *fees will depend on your pets required need. </p>
              </div>

            {/* ## SERVICES ##
            <div className="Services__image_container" style={{backgroundImage: `url(${medical_kit})`}}></div>
            <div className="Services__info_bar" style={{background: '#9AABBA'}}>
              <div className="Services__image_container_mobile" style={{backgroundImage: `url(${animal_needle_grey})`}}></div>
                <h2>APPOINTMENTS</h2>
                <p>Ability to transport your pet to and from apointments with a veterinarian, groomer, trainer or wherever your pet may need to go.</p>
              </div> */}

            {/* ## SERVICES ## */}
            <div className="Services__image_container" style={{backgroundImage: `url(${dog_bone})`, border: '5px solid #9AABBA'}}></div>
            <div className="Services__info_bar" style={{background: '#9AABBA'}}>
              <div className="Services__image_container_mobile" style={{backgroundImage: `url(${dog_bone})`}}></div>
                <h2>SUPPLY RUN: $15-$20 plus total amount of supplies purchased.</h2>
                <p>
                  Sometimes as much as we want to remember, we forget. If you run out of supplies and want to remain in your pet "good graces", I can help with picking up medications, food and supplies from your preferred grocery/pet store or veterinary office.
                </p>
              </div>

            <div className="Services__image_container" style={{backgroundImage: `url(${dog_bone})`, border: '5px solid #CBCACE'}}></div>
            <div className="Services__info_bar" style={{background: '#CBCACE'}}>
              <div className="Services__image_container_mobile" style={{backgroundImage: `url(${medical_kit})`}}></div>
                <h2>LITTLE EXTRAS: complimentary service</h2>
                <p>
                  I can also help out in watering of plants, collection of mail/packages/newspapers and alternating lights on and off, for those extended times away.
                </p>
              </div>


            <div style={{margin: 'auto', marginTop: '40px', textAlign: 'center'}}>
              <h2>DOWNLOAD MY SERVICES AND PRICE GUIDE</h2>
            </div>


        </div>
      </div>
    )
  }
}

export default Services
