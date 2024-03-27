import React from 'react'
import './index.css'

export default function MentorComunity() {
  return (
    <section className='mentor-community-section'>
    <div className='mentor-community-container'>
        <h2>Mentor Community</h2>
        <p>Our mentor community strongly believes in the power of sharing!<br/>
        We collaborate with professionals from great companies to guide you on this exciting journey.</p>
        <img src='https://nxtwave.imgix.net/ccbp-website/Home/Mentor+Community/mentor-community-companies.png?auto=format,compress&q=80' alt='mentor-community'/>
        <p className='mentor-more
        '>  and many more</p>
        <button type='button'>Request Callback</button>

    </div>
</section>
  )
}
