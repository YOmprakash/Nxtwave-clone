import React from 'react'
import AnnouncementBanner from '../AnnouncementBanner'
import LandingPage from '../LandingPage'
import AlumniSection from '../AlumniSection'
import RecognisedSection from '../RecognisedSection'
import HiringCompaniesSection from '../HiringCompaniesSection'
import AwardSection from '../AwardSection'
import MentorSection from '../MentorSection'
import FeaturedSection from '../FeaturedSection'
import MasterClass from '../MasterClass'
import MentorComunity from '../MentorComunity'
import FundraisingSection from '../FundraisingSection'
import Niat from '../Niat'
import NationalRecognizeSection from '../NationalRecognizeSection'
import './index.css'

function Home() {
  return (
    <div className='home-container'>
   <AnnouncementBanner />
   <LandingPage />
   <AlumniSection/>
   <RecognisedSection/>
   <HiringCompaniesSection/>
   <AwardSection/>
   <NationalRecognizeSection/>
   <MentorSection/>
   <FeaturedSection/>
   <MasterClass/>
   <MentorComunity/>
   <FundraisingSection/>
   <Niat/>
 
   

    
   

 
    <div className='whatsapp-container'>
        <h2>Chat with us</h2>
        <img src='https://nxtwave.imgix.net/ccbp-website/Home/whatsapp-icons.png?auto=format,compress&q=80' alt='whatsapp-icons'/>
    </div>
    <footer className='footer'>

    </footer>
    </div>
  
    )
}

export default Home
