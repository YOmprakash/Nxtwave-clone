import React from 'react'
import { FaPhone } from "react-icons/fa6";
import './index.css'

export default function FeaturedSection() {
  return (
    <section className='featured-section'>
        <div className='featured-container'>
            <h2 className='featured-title'>featured in</h2>
            <img src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/intensive/as-seen-in/featured-in-section-desktop.png' alt='desktop-feature' className='desktop-image'/>
            <img src='https://nxtwave.imgix.net/ccbp-website/intensive/as-seen-in/featured-in-section-mobile.png?auto=format,compress&q=80' alt='mobile-feature' className='mobile-image'/>
            <div className='feature-section-button'>
            <FaPhone color='#fff'/>
                <button type='button' className='callback-btn'>Request a Callback</button>
                </div>
        </div>
    </section>
  )
}
