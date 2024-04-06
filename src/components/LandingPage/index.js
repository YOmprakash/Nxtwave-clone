import React from 'react'
import { FaPhone } from "react-icons/fa6";
import './index.css'

export default function LandingPage() {
  return (
    <section className='hero-section'>
    <div className='hero-container'>
      <div className='hero-info-card'>
        <h1>Designed to transform you into a highly skilled Software Professional</h1>
        <div className='info-image-card'>
          <p>Recognized as the Greatest Brand in Education</p>
          <img src='https://nxtwave.imgix.net/ccbp-website/Home/award-design-line-desktop-2x.png?auto=format,compress&q=80' alt='Award Design' />
          <div className='hero-img-cards'>
            <img src='https://nxtwave.imgix.net/ccbp-website/intensive/landingpage/award1-design-desktop-2x.png?auto=format,compress&q=80' alt='Award 1 Design' />
            <img src='https://nxtwave.imgix.net/ccbp-website/nxtwave-intensive-2.0/most-preffered-brands-award.png?auto=format,compress&q=80' alt='Most Preferred Brands Award' />
          </div>
        </div>
      </div>
      <div className='hero-profile-cards'>
        <div className='card'>
          <div className='type-img-card'>
            <img src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Academy-blue-logo.svg' alt='Academy Logo' width='150' className='type-img' />
            <img src='https://nxtwave.imgix.net/ccbp-website/Home/Landingpage/academy-peron-photo.png?auto=format,compress&q=80' alt='Academy Person' className='avatar' />
          </div>
          <div className='card-info'>
            <span className='post'>post 12TH/ intermediate </span>
            <span className='batch'> 1st , 2nd , 3rd year</span>
            <h1>Learn like top IITians <br/>
            and achieve high-paid <br/> software jobs</h1>
            <div className='start-seat-card'>
              <div>
                <p className='batch-start'>BATCH STARTS ON</p>
                <p className='batch-date'>25th Apr 2024</p>
              </div>
              <div className='fire-seat-card'>
                <img src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Home/hero-section-vector-fire.svg' alt='Fire Icon' />
                <p>Limited Seats<br/> Available</p>
              </div>
            </div>
            <div className='request-btn-container'>
            <FaPhone color='#fff' />
            <button type='button' className='callback'>Request Callback</button>
            </div>
            <button type='button' className='knowmore'>Know More</button>
          </div>
        </div>
        <div className='card'>
          <div className='type-img-card'>
            <img src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/intensive-3-0-logo.svg' alt='Intensive Logo' width='150' className='type-img' />
            <img src='https://nxtwave.imgix.net/ccbp-website/Home/Landingpage/intensive-person-photo.png?auto=format,compress&q=80' alt='Intensive Person' className='avatar' />
          </div>
          <div className='card-info'>
          <div className='graduates-card'>
            <span className='graduates'>Graduates</span>
            <span className='post'>final year</span>
            </div>
            <span className='branch'>ANY BRANCH OR DEGREE</span>
            <h1>A Proven Program<br/>
to make you a<br/>
Software Developer</h1>
            <div className='start-seat-card'>
              <div>
                <p className='batch-start'>BATCH STARTS ON</p>
                <p className='batch-date'>25th Apr 2024</p>
              </div>
              <div className='fire-seat-card'>
                <img src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Home/hero-section-vector-fire.svg' alt='Fire Icon' />
                <p>Limited Seats<br/> Available</p>
              </div>
            </div>
            <button type='button' className='demo'>Book A Free Demo</button>
            <button type='button' className='knowmore'>Know More</button>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}
