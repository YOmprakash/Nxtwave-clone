import React from 'react'
import { FaPhone } from "react-icons/fa6";
import './index.css'

export default function HiringCompaniesSection() {
  return (
    <section className='hiring-companies-section'>
        <div className='hiring-container'>
            <h2>
                <span>1700+</span> Companies have hired <br/>NxtWave learners
            </h2>
            <img src='https://nxtwave.imgix.net/ccbp-website/intensive/companies-hiring-section/hiring-companies-desktop.png?auto=format,compress&q=80' alt='Companies that have hired NxtWave learners - desktop view' className='desktop-image' />
            <img src='https://nxtwave.imgix.net/ccbp-website/intensive/companies-hiring-section/hiring-companies-mobile.png?auto=format,compress&q=80' alt='Companies that have hired NxtWave learners - mobile view'  className='mobile-image'/>
            <p>and many more...</p>
            <div className='button-container'>
            <div className='hire-request-con'>
            <FaPhone color='#fff'/>
                <button type='button' className='callback-btn'>Request a Callback</button>
                </div>
                <button type='button' className='view-all-btn'>View All Companies</button>
            </div>
        </div>
    </section>
  )
}
