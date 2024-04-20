import React from 'react'
import './index.css'
export default function Footer() {
  return (
    <div className='footer-section'>
    <img src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Nxtwave_White_logo.svg' alt='footer-logo'/>
    <div className='footer-info'>
        <h6>Reach Us</h6>
        <div className='footer-info-card'>
            <img src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Home/whatsapp-icon.svg' alt='whatsapp-icon'/>
            <div className='info-card'>
                <p>+919390111761<br/>
                (whatsapp)
                </p>
            </div>
        </div>
        <div className='footer-info-card'>
            <img src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Home/email.icon.svg' alt='whatsapp-icon'/>
            <div className='info-card'>
                <p>support@nxtwave.tech
                
                </p>
            </div>
        </div>
    </div>
      
    </div>
  )
}
