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
            <p>Below is a list of services I provide. If you have any questions please feel free to send them through the contact page. If you have an exotic animal or an animal with specialty needs we can discuss them prior to booking to ensure I am able to prove adequate care for you pet. I will never say yes to something I am uncomfortable with to ensure we both feel confident in the service I am providing you and the care I am giving to your animal!</p>
          </div>
          
          <div className="Services__info_bar_container">

            <div className="Services__info_bar" style={{background: '#CBCACE'}}>
            <div className="Services__image_container_mobile" style={{backgroundImage: `url(${medical_kit})`}}></div>
              <h2>ALL ANIMALS WELCOME</h2>
              <p>No pet is left off my list!* I have experience caring for reptiles, fish, cats, large and small dogs and even some bird species. </p>
            </div>
            <div className="Services__image_container" style={{backgroundImage: `url(${dog_print})`}}></div>

         
            <div className="Services__image_container" style={{backgroundImage: `url(${dog_bowl})`}}></div>
            <div className="Services__info_bar" style={{background: '#E7E8E4'}}>
            <div className="Services__image_container_mobile" style={{backgroundImage: `url(${dog_collar_blue})`}}></div>

              <h2>DAILY FEEDINGS</h2>
              <p>Available for feedings morning, afternoon and night to meet the needs of your pet. </p>
              <p className="Services__note"> *If you have any hesitation with your exotic pet please conatct me and I can let you know if I am able to provide adequete care for your animal friend.</p>
            </div>
         
            <div className="Services__info_bar" style={{background: '#9AABBA'}}>
            <div className="Services__image_container_mobile" style={{backgroundImage: `url(${dog_collar_grey})`}}></div>

              <h2>POTTY BREAKS</h2>
              <p>Shorter 15 minute potty breaks are available for those that just need a quick visit.</p>
            </div>
            <div className="Services__image_container" style={{backgroundImage: `url(${dog_collar_blue})`}}></div>


            <div className="Services__image_container" style={{backgroundImage: `url(${dog_collar_grey})`}}></div>
            <div className="Services__info_bar" style={{background: '#CBCACE'}}>
            <div className="Services__image_container_mobile" style={{backgroundImage: `url(${dog_collar_blue})`}}></div>

              <h2>LONG WALKS</h2>
              <p>Longer 30-45 minute walks are available* for those that need a little extra time to get all that pent up energy out!</p>
              <p className="Services__note"> *Please note time depends on weather as well as breed/health status of your animal to ensure they are not overexurted. </p>
            </div>

            <div className="Services__info_bar" style={{background: '#E7E8E4'}}>
            <div className="Services__image_container_mobile" style={{backgroundImage: `url(${medical_kit})`}}></div>

              <h2>MEDICATION ADMINISTRATION</h2>
              <p>Experienced in giving oral and sub quetanious medications if your pets requires them.</p>
            </div>
            <div className="Services__image_container" style={{backgroundImage: `url(${animal_needle_grey})`}}></div>

            <div className="Services__image_container" style={{backgroundImage: `url(${medical_kit})`}}></div>
            <div className="Services__info_bar" style={{background: '#9AABBA'}}>
            <div className="Services__image_container_mobile" style={{backgroundImage: `url(${animal_needle_grey})`}}></div>

              <h2>APPOINTMENTS</h2>
              <p>Ability to transport your pet to and from apointments with a veterinarian, groomer, trainer or wherever your pet may need to go.</p>
            </div>

            <div className="Services__info_bar" style={{background: '#CBCACE'}}>
            <div className="Services__image_container_mobile" style={{backgroundImage: `url(${medical_kit})`}}></div>
              <h2>SUPPLY RUN</h2>
              <p>If you are out of supplies for your dog, provided a list I can make the run for you. Price depends upon bill.</p>
            </div>
            <div className="Services__image_container" style={{backgroundImage: `url(${dog_bone})`}}></div>


          <div style={{margin: 'auto', marginTop: '40px'}}>
            <h2>DOWNLOAD MY SERVICES AND PRICE GUIDE</h2>
          </div>


        </div>
      </div>
    )
  }
}

export default Services
