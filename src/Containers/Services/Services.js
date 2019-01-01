import React, { Component } from 'react'
import './Services.css'

// IMAGES //
import dog_print from '../../Assets/Images/dog_paw_print.png'
import dog_bowl from '../../Assets/Images/dog_food_bowl.png'
import dog_collar_blue from '../../Assets/Images/dog_collar_blue.png'
import dog_collar_grey from '../../Assets/Images/dog_collar_grey.png'
import animal_needle_grey from '../../Assets/Images/animal_needle_grey.png'
import medical_kit from '../../Assets/Images/medical_kit.png'
import dog_bone from '../../Assets/Images/dog_bone.png'

class Services extends Component {
  render() {
    return (
      <div className="Services__container">

          <div className="Services__main_info">
            <h1>SERVICES</h1>
            <p>
              Below is a list of services that I provide. If you have any questions, please feel free to send them through the CONTACT page. If you have an exotic pet or one with special needs, we can discuss them prior to booking. This will help to ensure I am able to adequately care for your pet. Rest assured, I will not take on responsibility, I am not confident in. I want to provide the best care for your pet and give you comfort while you're away from them.
            </p>
          </div>
          
          <div className="Services__info_bar_container">

            {/* ## SERVICES ## */}
            <div className="Services__image_container" style={{backgroundImage: `url(${dog_print})`}}></div>
            <div className="Services__info_bar" style={{background: '#CBCACE'}}>
              <div className="Services__image_container_mobile" style={{backgroundImage: `url(${medical_kit})`}}></div>
                <h2>ALL ANIMALS WELCOME</h2>
                <p>
                I don't want to leave any pet off of my list. My experiences range from domestic, farm, exotics, reptiles, birds, fish and wildlife.
                </p>
              </div>

            {/* ## SERVICES ## */}
            <div className="Services__image_container" style={{backgroundImage: `url(${dog_bowl})`}}></div>
            <div className="Services__info_bar" style={{background: '#E7E8E4'}}>
              <div className="Services__image_container_mobile" style={{backgroundImage: `url(${dog_collar_blue})`}}></div>
              <h2>DAILY FEEDINGS</h2>
              <p>
                Available for feedings that meet your pets needs and requirements. 
              </p>
              <p className="Services__note"> *If you have any hesitation with your exotic pet please conatct me and I can let you know if I am able to provide adequete care for your animal friend.</p>
            </div>

            {/* ## SERVICES ## */}        
            <div className="Services__image_container" style={{backgroundImage: `url(${dog_collar_blue})`}}></div>
            <div className="Services__info_bar" style={{background: '#9AABBA'}}>
              <div className="Services__image_container_mobile" style={{backgroundImage: `url(${dog_collar_grey})`}}></div>
                <h2>POTTY BREAKS</h2>
                <p>
                  Available to help with potty training and age related issues, even for those medications that make the "need to go" more frequent.
                </p>
              </div>

            {/* ## SERVICES ## */}
            <div className="Services__image_container" style={{backgroundImage: `url(${dog_collar_grey})`}}></div>
            <div className="Services__info_bar" style={{background: '#CBCACE'}}>
              <div className="Services__image_container_mobile" style={{backgroundImage: `url(${dog_collar_blue})`}}></div>
                <h2>WALKS</h2>
                <p>
                  Nothing like a little fresh air, change of scenery or release of energy. 
                </p>
                <p className="Services__note"> *Please note time depends on weather as well as breed/health status of your animal to ensure they are not overexurted. </p>
              </div>

            {/* ## SERVICES ## */}
            <div className="Services__image_container" style={{backgroundImage: `url(${animal_needle_grey})`}}></div>
            <div className="Services__info_bar" style={{background: '#E7E8E4'}}>
              <div className="Services__image_container_mobile" style={{backgroundImage: `url(${medical_kit})`}}></div>
                <h2>MEDICATION ADMINISTRATION</h2>
                <p>
                I am able to administer anywhere from your pets daily required health maintenance medication, unexpected accident or illness medication and even subcutaneous fluids.
                </p>
              </div>

            {/* ## SERVICES ##
            <div className="Services__image_container" style={{backgroundImage: `url(${medical_kit})`}}></div>
            <div className="Services__info_bar" style={{background: '#9AABBA'}}>
              <div className="Services__image_container_mobile" style={{backgroundImage: `url(${animal_needle_grey})`}}></div>
                <h2>APPOINTMENTS</h2>
                <p>Ability to transport your pet to and from apointments with a veterinarian, groomer, trainer or wherever your pet may need to go.</p>
              </div> */}

            {/* ## SERVICES ## */}
            <div className="Services__image_container" style={{backgroundImage: `url(${dog_bone})`}}></div>
            <div className="Services__info_bar" style={{background: '#CBCACE'}}>
              <div className="Services__image_container_mobile" style={{backgroundImage: `url(${medical_kit})`}}></div>
                <h2>SUPPLY RUN</h2>
                <p>
                  Sometimes as much as we want to remember, we forget. If you run out of supplies and want to remain in your pets "good graces", I can help with that run to the pet store or veterinary office.
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
