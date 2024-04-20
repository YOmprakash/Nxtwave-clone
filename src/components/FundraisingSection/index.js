import React from 'react'
import { FaPhone } from "react-icons/fa6";
import './index.css'

export default function FundraisingSection() {
  return (
    <section className='fundraising-section'>
        <div className='fundraising-container'>
            <h2>Announcing Our Latest Fundraise<br/>
of INR 275 Crores Led by</h2>
<div className='fundraising-image-card'>
    <img src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Home/greater-pacific.svg' alt='Greater Pacific logo' />
</div>
<h4>Celebrating continued support from our existing partners</h4>
<div className='fundraising-celebration-card'>
    <img src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Home/oris-partner.png' alt='Oris Partner logo' />
    <img src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Home/better-partner.png' alt='Better Partner logo' />
</div>
<p>and more..</p>
<div className='button-container'>
            <div className='hire-request-con'>
            <FaPhone color='#fff'/>
                <button type='button' className='callback-btn'>Request a Callback</button>
                </div>
                <button type='button' className='view-all-btn know'>Know More</button>
            </div>
        </div>
    </section>
  )
}
