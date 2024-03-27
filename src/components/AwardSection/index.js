

import React from 'react'
import './index.css'

export default function AwardSection() {
  return (
    <div className='award-section'>
        <div className='award-container'>
            <div className='award-details'>
            <img src='https://nxtwave.imgix.net/ccbp-website/Home/award-section/award-image.png?auto=format,compress&q=80' alt='win'  className='award-icon' />
                <div className='award-info'>
                <p>Recognised as</p>
                <h4>Best Tech Skilling <br/> EdTech Company <br/> of the year 2022</h4>
                <img src='https://nxtwave.imgix.net/ccbp-website/Home/award-section/award-logo.png?auto=format,compress&q=80' alt='award-win' className='award-logo' />
            </div>
            </div>
            <img src='https://nxtwave.imgix.net/ccbp-website/Home/award-section/award-taking-image.png?auto=format,compress&q=80' alt='win-img' className='group-photo'/>
        </div>
    </div>
  )
}
