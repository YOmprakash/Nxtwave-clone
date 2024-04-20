import React from 'react'
import { FaPhone } from "react-icons/fa6";
import './index.css'

export default function MentorComunity() {
  return (
    <section className='mentor-community-section'>
    <div className='mentor-community-container'>
        <h2>Mentor Community</h2>
        <p>Our mentor community strongly believes in the power of sharing!<br/>
        We collaborate with professionals from great companies to guide you on this exciting journey.</p>
        <img src='https://nxtwave.imgix.net/ccbp-website/Home/Mentor+Community/mentor-community-companies.png?auto=format,compress&q=80' alt='mentor-community' className='desktop-img'/>
        <img src='https://nxtwave.imgix.net/ccbp-website/Home/Mentor+Community/mentor-community-mobile.png' alt='mentor-community' className='mobile-img'/>
        <p className='mentor-more
        '>  and many more</p>
               <div className='mentor-section-button'>
          
          <FaPhone color='#fff'/>
              <button type='button'>Request a Callback</button>
              
         </div>
    </div>
</section>
  )
}
