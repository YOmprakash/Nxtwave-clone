import React from 'react'
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
<p>And many more..</p>
<div className='fundraising-button-card'>
    <button type='button'>Request Callback</button>
    <button type='button'>Join Our Community</button>
</div>
        </div>
    </section>
  )
}
