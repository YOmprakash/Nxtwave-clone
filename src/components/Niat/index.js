import React from 'react'
import './index.css'
export default function Niat() {
  return (
    <section className='niat-section'>
    <div className='niat-container'>
        <div className='niat-heading-card'>
            <img src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Home/star.svg' alt='star' />
            <h2>Announcing Our New Initiative</h2>
            <img src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Home/star.svg' alt='star' />

        </div>
        <img src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Home/niat-logo-desktop.svg' alt='niat-logo'className='desktop-img niat-img' />
        <img src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Home/niat-logo-mobile.svg' alt='star' className='mobile-img niat-img' />
        <h1 className='niat-h1'>Building India's Best Institute for Computer Science Education</h1>
        <button className='niat-btn' type='button'>Know more</button>
    </div>
</section>
  )
}
