

import React from 'react'
import './index.css'

export default function AwardSection() {
  return (
    <section className='award-section'>
        <div className='award-container'>
        <h1 className='heading'>Received Prestigious Awards</h1>
        <div className='award-block-container'>
        <div className='award-card-container'>
          <div className='award-block-card'>
            <img src='https://nxtwave.imgix.net/ccbp-website/Home/best-skill.png' alt='award' />
            <div className='award-card-info'>
              <h4>
Recognised as</h4>
<h2>Best Tech Skilling
EdTech Company</h2>
<p>by Times Business Awards in 2022</p>
            </div>
          </div>
          <div className='award-block-card'>
            <img src='https://nxtwave.imgix.net/ccbp-website/Home/trusted-brand.png' alt='award' />
            <div className='award-card-info'>
              <h4>
Recognised as</h4>
<h2>Trusted Brand in
Education</h2>
<p>by Prime Insights in 2023</p>
            </div>
          </div>
        </div>
       
        <div className='award-card-container one'>
          <img src='https://nxtwave.imgix.net/ccbp-website/Home/preferred.png' alt='award'/>
          <img src='https://nxtwave.imgix.net/ccbp-website/Home/brands-leaders.png' alt='award'/>
        </div>
        </div>
        <div className='award-gallery-container'>
        <div className='single-card'>
          <img src='https://nxtwave.imgix.net/ccbp-website/Home/forbes-30-v3.png' alt='award' className='forbes'/>
          <p className='award-img-info'>Founders Mr. Anupam Pedarla and Mr. Sashank Gujjula made it to the prestigious 2024 Forbes India 30 Under 30 list!</p>
        </div>
        <div className='double-card-container'>
          <div className=''>
            <img src='https://nxtwave.imgix.net/ccbp-website/Home/award-by-time-business.png' alt='award'  className='forbes'/>
            <p className='award-img-info'>Mr. Sashank Gujjula, Co-founder, NxtWave, receiving the ‘Best Tech Skilling EdTech Company’ award by Times Business Awards</p>
          </div>
          <div className=''>
            <img src='https://nxtwave.imgix.net/ccbp-website/Home/award-by-time-business.png' alt='award'  className='forbes'/>
            <p className='award-img-info'>Mr. Sashank Gujjula, Co-founder, NxtWave, receiving the ‘Best Tech Skilling EdTech Company’ award by Times Business Awards</p>
          </div>
        </div>
        </div>
           
            </div>
    </section>
  )
}
