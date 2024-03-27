import React from 'react'
import './index.css'

export default function AlumniSection() {
  return (
    <section className='alumni-section'>
      <div className='alumni-container'>
        <h4>LEARN THE BEST FROM THE ALUMNI OF</h4>
        <img src='https://nxtwave.imgix.net/ccbp-website/intensive/learn-the-best-from-the-alumni/Alumni_2x.png?auto=format,compress&q=80' alt='alumni' className='desktop-image'/>
        <img src='https://nxtwave.imgix.net/ccbp-website/intensive/learn-the-best-from-the-alumni/alumni-mobile.png?auto=format,compress&q=80' alt='alumni'  className='mobile-image'/>
        <p>and Many more</p>
      </div>
    </section>
  )
}
