import React from 'react'
import './Story.css'

import dog_bone from '../../Assets/Images/dog_bone.png'
const Story = () => {
  return (
    <div>
      <div className="Story__container">
        <div className="Story__image_box">

        </div>

        <div className="Story__bio">
        <h1>MY STORY</h1>
          <p>Hey there, I’m Jennifer! Born and raised right here in Jacksonville, Florida. 
              I have lived here all of my life and have always had a furry friend in my home from back when I was a little girl to gifting the love of animals to my own little girls. Outside of having pets big and small, furry and scaly, I also worked x years in a veterinary office and gained valuable knowlegde in more advanced care options for pets of many species. 
          </p>
          <p>   
              On a more personal level, I am married to a courageous police officer and we have 5 amazing kids ages 19-27. We come from families that valued hard work ethic and southern hospitality. Outside of working, we enjoy camping, traveling and loads of family time. 
          </p>
          <p>
              I look forward for the chance to meet your furry, winged, or scaly friend!  
          </p>

          <p style={{paddingTop: '0px', paddingBottom: '0px'}}>
            Until then,
          </p>
          <h2 style={{position: 'relative', fontFamily: 'cursive', paddingLeft: '32px'}}>
            <img src={dog_bone} alt="dog bone"/>
            Jennifer
          </h2>
        </div>

      </div>
    </div>
  )
}

export default Story