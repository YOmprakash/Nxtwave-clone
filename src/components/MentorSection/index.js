import React from 'react'
import { FaPhone } from "react-icons/fa6";
import './index.css'

export default function MentorSection() {
  return (
    
    <section className='trainer-section'>
        <div className='trainer-section-block'>
            <h2>Our top notch teams involved in helping you learn programming, not just coding.</h2>
        <div className='trainer-section-block-card'>
            <div className='card-section'>
                <div className='card-section-card'>
                    <div className='trainer-card'>
                        <h4><span>Trainers</span> are alumni of IITs and Top MNCs</h4>
                        <div className='trainer-img-cards'>
                            <div className='trainer-img-card'>
                                <img src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/intensive/team/Rahul_trainer.png' alt='rahul' />
                                <div className='trainer-img-card-info'>
                                    <h1>Rahul</h1>
                                    <p>Ex. Amazon</p>
                                </div>
                             
                            </div>
                            <div className='trainer-img-card'>
                                <img src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/intensive/team/avinash-image-v2.png' alt='Avinash Dara' />
                                <div className='trainer-img-card-info'>
                                    <h1>Avinash Dara</h1>
                                    <p>Ex. Nvidia</p>
                                </div>
                            </div>
                        </div>
                        <p className='more'>and more...</p>
                    </div>
                    <div className='trainer-card'>
                        <h4>Get doubts resolved by <span>Product Developers</span></h4>
                        <div className='trainer-img-cards'>
                            <div className='trainer-img-card'>
                                <img src='https://nxtwave.imgix.net/ccbp-website/intensive/team/revanth_product_developer.jpg?auto=format,compress&q=80' alt='Revanth' />
                                <div className='trainer-img-card-info'>
                                    <h1>Revanth</h1>
                                    <p>Backend Architect <br/>IIT Guwahati</p>
                                </div>
                             
                            </div>
                            <div className='trainer-img-card'>
                                <img src='https://nxtwave.imgix.net/ccbp-website/Home/pavan-img-trainer.png?auto=format,compress&q=80' alt='Pavan' />
                                <div className='trainer-img-card-info'>
                                    <h1>Pavan</h1>
                                    <p>Software Development Lead
BIT Mesra</p>
                                </div>
                            </div>
                        </div>
                        <p className='more'>and more...</p>
                    </div>
                    
                </div>
                <div className='student-card'>
                <img src='https://nxtwave.imgix.net/ccbp-website/intensive/team/student-image.png?auto=format,compress&q=80' alt='student' />
                <div className='student-info-card'>
                    <h1>Student at</h1>
                  
                </div>
                </div>
                
                <div className='card-section-card'>
                    <div className='trainer-card'>
                        <h4><span>Career Coaches</span> help you land your first job</h4>
                        <div className='trainer-img-cards'>
                            <div className='trainer-img-card'>
                                <img src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/intensive/team/sriram_teja_career_coach.png' alt='Sriram Teja' />
                                <div className='trainer-img-card-info'>
                                    <h1>Sriram Teja</h1>
                                    <p>AIR 84, IIT Bombay</p>
                                </div>
                             
                            </div>
                            <div className='trainer-img-card'>
                                <img src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/intensive/team/Trivikram_career_coach.png' alt='Trivikram' />
                                <div className='trainer-img-card-info'>
                                    <h1>Trivikram</h1>
                                    <p>AIR 93, IIT Delhi</p>
                                </div>
                            </div>
                        </div>
                        <p className='more'>and more...</p>
                    </div>
                    <div className='trainer-card'>
                        <h4>Gain expert insights from <span>Masterclasses</span></h4>
                        <div className='trainer-img-cards'>
                            <div className='trainer-img-card'>
                                <img src='https://nxtwave.imgix.net/ccbp-website/intensive/team/Master_class_Rakesh_misra.png?auto=format,compress&q=80' alt='Rakesh Misra' />
                                <div className='trainer-img-card-info'>
                                    <h1>Rakesh Misra</h1>
                                    <p>Cofounder, Uhana
Stanford Alumnus</p>
                                </div>
                             
                            </div>
                            <div className='trainer-img-card'>
                                <img src='https://nxtwave.imgix.net/ccbp-website/intensive/team/pranavi_master_class.png?auto=format,compress&q=80' alt='rahul' />
                                <div className='trainer-img-card-info'>
                                    <h1>Pranavi</h1>
                                    <p>Machine Learning
Scientist, Apple</p>
                                </div>
                            </div>
                        </div>
                           <p className='more'>and more...</p>
                    </div>
                    
                </div>
            </div>
        </div>
        <div className='mentor-section-button'>
          
          <FaPhone color='#fff'/>
              <button type='button'>Request a Callback</button>
              
         </div>
        </div>
    </section>
  )
}
