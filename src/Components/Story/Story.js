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
          <p>
            Hey there, I'm Jennifer! Born and raised right here in Jacksonville, Florida. I have lived here all of my life and have always had a furry friend by my side. As a little girl, I couldn't wait to gift the love of animals to my children, like my parents did with me. Outside of having pets big and small, furry and feathered (let's not forget the scaly ones too), I have also worked at a veterinary hospital throughout the years. Working there, I was able to gain some valuable knowledge, to help in more advanced care options.
          </p>
          <p>   
            I am proud to say that I come from a family that has instilled in me, the value of hard work, integrity, respect, good character and endless amounts of love! When I'm not working, I enjoy camping, traveling and loads of family time with my husband and children.
          </p>
          <p>
            I look forward to the opportunity of meeting your furry, feathered or scaly friend!
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